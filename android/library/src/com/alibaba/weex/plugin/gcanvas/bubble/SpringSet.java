package com.alibaba.weex.plugin.gcanvas.bubble;

import android.support.animation.DynamicAnimation;
import android.support.animation.SpringAnimation;
import android.support.animation.SpringForce;
import android.support.v4.util.ArrayMap;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

/**
 * @author ertong
 *         create at 2017/9/28
 */

public class SpringSet implements DynamicAnimation.OnAnimationEndListener {
    private final CopyOnWriteArrayList<ISpringSetListener> mSpringListeners = new CopyOnWriteArrayList<>();

    private boolean mTerminated = false;

    private boolean mDependencyDirty = false;

    private boolean mStarted = false;

    private ArrayList<SpringAnimation> mPlayingSet = new ArrayList<>();

    private SpringAnimation mDelayAnim;

    private ArrayMap<SpringAnimation, Node> mNodeMap = new ArrayMap<>();

    private ArrayList<Node> mNodes = new ArrayList<>();

    private Node mRootNode;

    private boolean mIsFastMove = false;

    public SpringSet() {
        mDelayAnim = SpringUtils.createSpring(null, DynamicAnimation.SCALE_X, 1.0f, SpringForce.STIFFNESS_MEDIUM, SpringForce.DAMPING_RATIO_MEDIUM_BOUNCY);
        mDelayAnim.setStartValue(0);
        mRootNode = new Node(mDelayAnim);
        mNodeMap.put(mDelayAnim, mRootNode);
    }

    public void playTogether(SpringAnimation... items) {
        if (items != null) {
            Builder builder = play(items[0]);
            for (int i = 1; i < items.length; ++i) {
                builder.with(items[i]);
            }
        }
    }

    public void playTogether(Collection<SpringAnimation> items) {
        if (items != null && items.size() > 0) {
            Builder builder = null;
            for (SpringAnimation anim : items) {
                if (builder == null) {
                    builder = play(anim);
                } else {
                    builder.with(anim);
                }
            }
        }
    }


    public void playSequentially(SpringAnimation... items) {
        if (items != null) {
            if (items.length == 1) {
                play(items[0]);
            } else {
                for (int i = 0; i < items.length - 1; ++i) {
                    play(items[i]).before(items[i + 1]);
                }
            }
        }
    }

    public void playSequentially(List<SpringAnimation> items) {
        if (items != null && items.size() > 0) {
            if (items.size() == 1) {
                play(items.get(0));
            } else {
                for (int i = 0; i < items.size() - 1; ++i) {
                    play(items.get(i)).before(items.get(i + 1));
                }
            }
        }
    }

    public void playSequentially(SpringSet... sets) {
        if (sets != null && sets.length > 0) {
            Builder builder = null;
            for (int i = 0; i < sets.length - 1; i++) {
                SpringSet set = sets[i];
                if (builder == null) {
                    builder = play(set.mRootNode.mAnimation);
                } else {
                    play(sets[i].mRootNode.mAnimation).before(sets[i + 1].mRootNode.mAnimation);
                }
            }
        }
    }


    public boolean isRunning() {
        int size = mNodes.size();
        for (int i = 0; i < size; i++) {
            Node node = mNodes.get(i);
            if (node != mRootNode && null != node.mAnimation && node.mAnimation.isRunning()) {
                return true;
            }
        }
        return false;
    }

    @Override
    public void onAnimationEnd(DynamicAnimation animation, boolean canceled, float value, float velocity) {
        animation.removeEndListener(this);
        mPlayingSet.remove(animation);
        onChildAnimatorEnded(animation);
    }

    public void start() {
        mTerminated = false;
        mStarted = true;

        int size = mNodes.size();
        for (int i = 0; i < size; i++) {
            Node node = mNodes.get(i);
            node.mEnded = false;
        }

        createDependencyGraph();

        final int numListeners = mSpringListeners.size();
        for (int i = numListeners - 1; i >= 0; i--) {
            mSpringListeners.get(i).onSpringStart(this);
        }

        onChildAnimatorEnded(mDelayAnim);
    }

    private void start(final Node node) {
        final SpringAnimation anim = node.mAnimation;
        mPlayingSet.add(anim);
        anim.addEndListener(this);
        anim.start();
        if (mIsFastMove) {
            if (anim.canSkipToEnd()) {
                anim.skipToEnd();
            }
        }
    }

    private void findSiblings(Node node, ArrayList<Node> siblings) {
        if (!siblings.contains(node)) {
            siblings.add(node);
            if (node.mSiblings == null) {
                return;
            }
            for (int i = 0; i < node.mSiblings.size(); i++) {
                findSiblings(node.mSiblings.get(i), siblings);
            }
        }
    }

    public void fastMove() {
        mIsFastMove = true;
        for (SpringAnimation animation : mPlayingSet) {
            if (animation.canSkipToEnd()) {
                animation.skipToEnd();
            }
        }
    }

    private void createDependencyGraph() {
        if (mDependencyDirty) {
            int size = mNodes.size();
            for (int i = 0; i < size; i++) {
                mNodes.get(i).mParentsAdded = false;
            }
            for (int i = 0; i < size; i++) {
                Node node = mNodes.get(i);
                if (node.mParentsAdded) {
                    continue;
                }

                node.mParentsAdded = true;
                if (node.mSiblings == null) {
                    continue;
                }

                findSiblings(node, node.mSiblings);
                node.mSiblings.remove(node);

                int siblingSize = node.mSiblings.size();
                for (int j = 0; j < siblingSize; j++) {
                    node.addParents(node.mSiblings.get(j).mParents);
                }

                for (int j = 0; j < siblingSize; j++) {
                    Node sibling = node.mSiblings.get(j);
                    sibling.addParents(node.mParents);
                    sibling.mParentsAdded = true;
                }
            }

            for (int i = 0; i < size; i++) {
                Node node = mNodes.get(i);
                if (node != mRootNode && node.mParents == null) {
                    node.addParent(mRootNode);
                }
            }

            ArrayList<Node> visited = new ArrayList<>(mNodes.size());
            updateLatestParent(mRootNode, visited);
            mDependencyDirty = false;
        }
    }

    public Builder play(SpringAnimation anim) {
        if (anim != null) {
            return new Builder(anim);
        }
        return null;
    }

    public boolean isStarted() {
        return mStarted;
    }

    public void cancel() {
        mTerminated = true;
        if (isStarted()) {
            for (DynamicAnimation anim : mPlayingSet) {
                anim.cancel();
            }
            mStarted = false;
        }
    }

    public boolean addSpringSetListener(ISpringSetListener listener) {
        if (!mSpringListeners.contains(listener)) {
            return mSpringListeners.add(listener);
        }
        return false;
    }

    public boolean removeSpringSetListener(ISpringSetListener listener) {
        return mSpringListeners.remove(listener);
    }


    public void clear() {
        cancel();
        mSpringListeners.clear();
        mPlayingSet.clear();
        mNodeMap.clear();
        mNodes.clear();
    }

    private void updateLatestParent(Node parent, ArrayList<Node> visited) {
        if (parent.mChildNodes == null) {
            return;
        }
        visited.add(parent);
        int childrenSize = parent.mChildNodes.size();
        for (int i = 0; i < childrenSize; i++) {
            Node child = parent.mChildNodes.get(i);
            int index = visited.indexOf(child);
            if (index >= 0) {
                // Child has been visited, cycle found. Mark all the nodes in the cycle.
                for (int j = index; j < visited.size(); j++) {
                    visited.get(j).mLatestParent = null;
                }
                child.mLatestParent = null;
                continue;
            }

            child.mLatestParent = parent;
            updateLatestParent(child, visited);
        }
        visited.remove(parent);
    }

    public interface ISpringSetListener {
        void onSpringStart(SpringSet springSet);

        void onSpringEnd(SpringSet springSet);
    }

    private static class Node implements Cloneable {
        SpringAnimation mAnimation;

        ArrayList<Node> mChildNodes = null;

        boolean mEnded = false;

        ArrayList<Node> mSiblings;

        ArrayList<Node> mParents;

        Node mLatestParent = null;

        boolean mParentsAdded = false;

        public Node(SpringAnimation animation) {
            this.mAnimation = animation;
        }

        void addChild(Node node) {
            if (mChildNodes == null) {
                mChildNodes = new ArrayList<>();
            }
            if (!mChildNodes.contains(node)) {
                mChildNodes.add(node);
                node.addParent(this);
            }
        }

        public void addSibling(Node node) {
            if (mSiblings == null) {
                mSiblings = new ArrayList<>();
            }
            if (!mSiblings.contains(node)) {
                mSiblings.add(node);
                node.addSibling(this);
            }
        }

        public void addParent(Node node) {
            if (mParents == null) {
                mParents = new ArrayList<>();
            }
            if (!mParents.contains(node)) {
                mParents.add(node);
                node.addChild(this);
            }
        }

        public void addParents(ArrayList<Node> parents) {
            if (parents == null) {
                return;
            }
            int size = parents.size();
            for (int i = 0; i < size; i++) {
                addParent(parents.get(i));
            }
        }
    }

    private Node getNodeForAnimation(SpringAnimation anim) {
        Node node = mNodeMap.get(anim);
        if (node == null) {
            node = new Node(anim);
            mNodeMap.put(anim, node);
            mNodes.add(node);
        }
        return node;
    }

    public class Builder {

        private Node mCurrentNode;

        Builder(SpringAnimation anim) {
            mDependencyDirty = true;
            mCurrentNode = getNodeForAnimation(anim);
        }

        public Builder with(SpringAnimation anim) {
            Node node = getNodeForAnimation(anim);
            mCurrentNode.addSibling(node);
            return this;
        }

        public Builder before(SpringAnimation anim) {
            Node node = getNodeForAnimation(anim);
            mCurrentNode.addChild(node);
            return this;
        }

        public Builder after(SpringAnimation anim) {
            Node node = getNodeForAnimation(anim);
            mCurrentNode.addParent(node);
            return this;
        }
    }

    private void onChildAnimatorEnded(DynamicAnimation animation) {
        Node animNode = mNodeMap.get(animation);
        animNode.mEnded = true;

        if (!mTerminated) {
            List<Node> children = animNode.mChildNodes;
            int childrenSize = children == null ? 0 : children.size();
            for (int i = 0; i < childrenSize; i++) {
                if (children.get(i).mLatestParent == animNode) {
                    start(children.get(i));
                }
            }
            boolean allDone = true;
            int size = mNodes.size();
            for (int i = 0; i < size; i++) {
                if (!mNodes.get(i).mEnded) {
                    allDone = false;
                    break;
                }
            }
            if (allDone) {
                int numListeners = mSpringListeners.size();
                for (int i = numListeners - 1; i >= 0; i--) {
                    mSpringListeners.get(i).onSpringEnd(this);
                }
                mStarted = false;
                mIsFastMove = false;
            }
        }
    }
}
