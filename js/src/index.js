

const WeexPluginGcanvas = {
  create(options, callbackID) {
      alert("module WeexPluginGcanvas is created sucessfully ")
  }
};


var meta = {
   WeexPluginGcanvas: [{
    name: 'show',
    args: ['object', 'string']
  }]
};



if(window.Vue) {
  weex.registerModule('WeexPluginGcanvas', WeexPluginGcanvas);
}

function init(weex) {
  weex.registerApiModule('WeexPluginGcanvas', WeexPluginGcanvas, meta);
}
module.exports = {
  init:init
};
