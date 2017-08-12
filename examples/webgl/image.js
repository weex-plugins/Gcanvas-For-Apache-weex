function initImage() {
    return require('weex-gcanvas/gcanvasimage');
}

module.exports = typeof Image === 'function' ? Image : initImage();