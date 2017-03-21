// weex-actionSheet-web
import VueActionSheet from './vue/action-sheet.vue';
import WeexActionSheet from './we/action-sheet';
import meta from './lib/meta';
import vendor from './lib/vendor';


const actionSheet = {
  create(options, callbackID) {
    const defaultOPtions = {
      title: '提示',
      message: '',
      items: [],
      callback: function () {},
      hasCancel: true,
    };

    const opts = Object.assign({}, defaultOPtions, options);
    if (opts.items.length > 1) {
      opts.hasCancel = vendor.findCancel(options.items);
      opts.items = vendor.filterData(options.items);
    }
    if (typeof callbackID === 'function') {
      const self = this;
      opts.callback = function (res) {
        self.sender.performCallback(callbackID, res);
      };
    }
    let ActionSheet = null;
    if (window.Vue) {
      ActionSheet = Vue.extend(VueActionSheet);
    } else {
      ActionSheet = WeexActionSheet;
    }
    const vueActionSheetInstance = new ActionSheet({
      el: document.createElement('div'),
      data() {
        return opts;
      }
    });
    document.body.appendChild(vueActionSheetInstance.$el);
  }
};

if(window.Vue) {
  weex.registerModule('actionSheet', actionSheet);
}

function init(weex) {
  weex.registerApiModule('actionSheet', actionSheet, meta);
}

module.exports = {
  init
};
