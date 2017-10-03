package com.alibaba.weex.plugin.gcanvas.bubble;

import android.support.animation.DynamicAnimation;
import android.support.animation.SpringAnimation;
import android.support.animation.SpringForce;
import android.view.View;

/**
 * @author ertong
 *         create at 2017/9/28
 */

public class SpringUtils {
    public static SpringAnimation createSpring(View view,
                                               DynamicAnimation.ViewProperty property,
                                               float finalPosition,
                                               float stiffness,
                                               float dampingRadio) {
        SpringAnimation animation = new SpringAnimation(view, property);
        SpringForce spring = new SpringForce(finalPosition);
        spring.setStiffness(stiffness);
        spring.setDampingRatio(dampingRadio);
        animation.setSpring(spring);
        return animation;
    }
}
