import Vue from 'vue'
import Main from './index.vue';

let MessageConstructor = Vue.extend(Main);
let instance;

let Toast = (options = {}) => {
  let duration = options.duration || 3000;
  instance = new MessageConstructor({
    data: function () {
        return {
            options
        }
    }
  });

  instance.message = typeof options === 'string' ? options : options.message;
  instance.$mount();
  document.body.appendChild(instance.$el);
  
  return instance;
};

export default Toast;
