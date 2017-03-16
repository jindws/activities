import './css.scss'
import Vue from 'vue'

import container from './container.vue'
import Header from './Header.vue'

new Vue({
    el:'#container',
    render: (h) => h(container)
})

new Vue({
    el:'header',
    render: (h) => h(Header)
})


// function getUrlParam(key) {
//     var search = location.search;
//     var arr = !search ? [] : location.search.substr(1).split('&');
//     var param = {};
//     for (var i = 0, l = arr.length; i < l; i++) {
//         var kv = arr[i].split('=');
//         param[kv[0]] = kv[1];
//     }
//     return key ? (param[key] || '') : param;
// }

var osKey = /os=([^&]+)/.exec(location.search);
if (osKey) {
    osKey = osKey[1];
} else {
    osKey = sessionStorage.getItem("osKey") || "H5";
}
sessionStorage.setItem("osKey", osKey);