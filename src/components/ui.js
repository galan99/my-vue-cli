import Loading from './loading'
import Toast from './toast/toast.js'


const install = function(Vue) {
    Vue.component('Loading', Loading)

    Vue.$toast = Vue.prototype.$toast = Toast;
}



if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    install,
    Loading,
    Toast
};

