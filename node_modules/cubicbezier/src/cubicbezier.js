;(function(win, lib) {

function cubicBezierFunction(p1x, p1y, p2x, p2y) {
    var ZERO_LIMIT = 1e-6;
    // Calculate the polynomial coefficients,
    // implicit first and last control points are (0,0) and (1,1).
    var ax = 3 * p1x - 3 * p2x + 1,
        bx = 3 * p2x - 6 * p1x,
        cx = 3 * p1x;

    var ay = 3 * p1y - 3 * p2y + 1,
        by = 3 * p2y - 6 * p1y,
        cy = 3 * p1y;

    function sampleCurveDerivativeX(t) {
        // `ax t^3 + bx t^2 + cx t' expanded using Horner 's rule.
        return (3 * ax * t + 2 * bx) * t + cx;
    }

    function sampleCurveX(t) {
        return ((ax * t + bx) * t + cx ) * t;
    }

    function sampleCurveY(t) {
        return ((ay * t + by) * t + cy ) * t;
    }

    // Given an x value, find a parametric value it came from.
    function solveCurveX(x) {
        var t2 = x,
            derivative,
            x2;

        // https://trac.webkit.org/browser/trunk/Source/WebCore/platform/animation
        // First try a few iterations of Newton's method -- normally very fast.
        // http://en.wikipedia.org/wiki/Newton's_method
        for (var i = 0; i < 8; i++) {
            // f(t)-x=0
            x2 = sampleCurveX(t2) - x;
            if (Math.abs(x2) < ZERO_LIMIT) {
                return t2;
            }
            derivative = sampleCurveDerivativeX(t2);
            // == 0, failure
            if (Math.abs(derivative) < ZERO_LIMIT) {
                break;
            }
            t2 -= x2 / derivative;
        }

        // Fall back to the bisection method for reliability.
        // bisection
        // http://en.wikipedia.org/wiki/Bisection_method
        var t1 = 1,
            t0 = 0;
        t2 = x;
        while (t1 > t0) {
            x2 = sampleCurveX(t2) - x;
            if (Math.abs(x2) < ZERO_LIMIT) {
                return t2;
            }
            if (x2 > 0) {
                t1 = t2;
            } else {
                t0 = t2;
            }
            t2 = (t1 + t0) / 2;
        }

        // Failure
        return t2;
    }

    function solve(x) {
        return sampleCurveY(solveCurveX(x));
    }

    return solve;
}

/**
 * @namespace lib 
 */

/**
 * @callback BezierFunction
 * @param {Number} x x坐标，0~1之间的数
 * @return {Number} y坐标
 */

/**
 * 生成贝塞尔曲线函数
 * @method cubicbezier
 * @memberOf lib
 * @param {Number} p1x 第一个控制点x坐标
 * @param {Number} p1y 第一个控制点y坐标
 * @param {Number} p2x 第二个控制点x坐标
 * @param {Number} p2y 第二个控制点y坐标
 * @property {BezierFunction} linear 直线函数
 * @property {BezierFunction} ease ease函数
 * @property {BezierFunction} easeIn easeIn函数
 * @property {BezierFunction} easeOut easeOut函数
 * @property {BezierFunction} easeInOut easeInOut函数
 * @return {BezierFunction} 贝塞尔曲线函数
 */
lib.cubicbezier = cubicBezierFunction;

lib.cubicbezier.linear = cubicBezierFunction(0,0,1,1);
lib.cubicbezier.ease = cubicBezierFunction(.25,.1,.25,1);
lib.cubicbezier.easeIn = cubicBezierFunction(.42,0,1,1);
lib.cubicbezier.easeOut = cubicBezierFunction(0,0,.58,1);
lib.cubicbezier.easeInOut = cubicBezierFunction(.42,0,.58,1);

})(window, window['lib'] || (window['lib'] = {}));