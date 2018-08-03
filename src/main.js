// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* 配置请求域名 */
let $url = '';
let $http = document.location.protocol + "//";
let $host = window.location.host;
if (location.href.indexOf('//localhost') != -1 || location.href.indexOf('//192.168.116') != -1) {
    //本地接口地址
    $url = '';
} else if (location.href.indexOf('//192.168') != -1) {
    //测试接口地址
    $url = $http + $host + "/";
} else {
    // 线上接口地址
    $url = $http + $host + "";
}
Vue.prototype.$url = $url;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  created(){
    var devieWidth= Math.min(750,document.documentElement.clientWidth,document.documentElement.clientHeight);
    var fonSize= devieWidth > 1080 ? 144 : devieWidth / 7.5;
    document.documentElement.style.fontSize=fonSize+'px';
  },
  router,
  components: { App },
  template: '<App/>'
})
