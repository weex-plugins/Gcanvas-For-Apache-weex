const GLOBAL_CLASS_PREFIX = 'as-';
const TYPE_WARNING = 2;

require('./style.css');

class ActionSheet {
  constructor(opts) {
    const options = opts.data();
    this.clickHandle = options.callback;
    const container = document.createElement('div');
    container.className = 'as-container';
    const dialog = this.createEle('dialog');
    this.createTitle(options.title, options.message, dialog);
    this.createList(options.items, dialog);
    if (options.hasCancel) {
      this.createCancelButton(dialog, options.hasCancel);
    }
    container.appendChild(dialog);
    this.$el = container;
  }
  createTitle(title, message, container) {
    const hd = this.createEle('hd');
    hd.appendChild(this.createEle('title', title));
    hd.appendChild(this.createEle('message', message));
    container.appendChild(hd);
  }
  createEle(className, text) {
    const el = document.createElement('div');
    el.className = className ? GLOBAL_CLASS_PREFIX + className : '';
    if (text) {
      el.appendChild(document.createTextNode(text));
    }
    return el;
  }
  createList(data, container) {
    data.forEach((item, index) => {
      const btn = this.createEle('btn');
      if (index === data.length - 1) {
        btn.classList.add(GLOBAL_CLASS_PREFIX + 'btn-last');
      }
      const btnText = document.createElement('p');
      btnText.className = GLOBAL_CLASS_PREFIX + 'btn-text';
      btnText.appendChild(document.createTextNode(item.message));
      if (item.type === TYPE_WARNING) {
        btnText.classList.add(GLOBAL_CLASS_PREFIX + 'text-warn');
      }
      btn.appendChild(btnText);
      this.addEvent(btn, index, item.message);
      container.appendChild(btn);
    });
  }
  createCancelButton(container, text) {
    const btn = this.createEle('btn');
    btn.classList.add(GLOBAL_CLASS_PREFIX + 'cancel');
    const btnText = document.createElement('p');
    btnText.className = GLOBAL_CLASS_PREFIX + 'btn-text';
    btnText.appendChild(document.createTextNode(text));
    btn.appendChild(btnText);
    btn.addEventListener('click', () => {
      this.cancel();
    }, false);
    container.appendChild(btn);
  }
  addEvent(btn, index, msg) {
    btn.addEventListener('click', () => {
      console.log(index);
      this.clickHandle({
          result: 'success',
          data: {
            message: msg,
            index: index
          }
        });
      this.cancel();
    }, false);
  }
  cancel() {
    const el = document.querySelector('.as-container');
    if (el) {
      el.remove();
    }
  }
}

module.exports = ActionSheet;
