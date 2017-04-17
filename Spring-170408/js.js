import Vue from 'vue'
import 'babel-polyfill'
import 'animate.css'
import 'whatwg-fetch'

import Index from './container.vue'

// new Vue({
//     el:'#container',
//     render: (h) => h(container)
// })

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/index',
        component: Index
    }, {
        path: '/',
        component: Index
    }
]

const router = new VueRouter({
  routes
});

new Vue({router}).$mount('#container');

// var osKey = /os=([^&]+)/.exec(location.search);
// if (osKey) {
//     osKey = osKey[1];
// } else {
//     osKey = sessionStorage.getItem("osKey") || "H5";
// }
// sessionStorage.setItem("osKey", osKey);
