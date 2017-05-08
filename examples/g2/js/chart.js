/**
 * Created by godsong on 16/12/12.
 */
var GM = require('g2-mobile');
var CanvasElement=require('./CanvasElement')
var _ready = false;
var _context;
var _renderQueue = [];
var _chartRender = GM.Chart.prototype.render;
GM.Chart.prototype.render = function () {
    if (_ready) {
        _chartRender.call(this);
        _context.render();
    }
    else {
        _renderQueue.push(this);
    }
};
var G2Chart=GM.Chart;
GM.Chart=function(config){
    var canvasElement=new CanvasElement();
    config.el=canvasElement;
    return new G2Chart(config);
}
module.exports = function (name) {
    switch (name.toLowerCase()) {
        case 'g2':
            return GM;
        case 'gm':
            return GM;
        default:
            return GM;
    }
};
module.exports.ready = function (context,id,weexElement) {
    _ready = true;
    _context = context;
    var chart;
    if (_renderQueue.length > 0) {
        while (chart = _renderQueue.shift()) {
            _chartRender.call(chart);
        }
        context.render();
    }
};