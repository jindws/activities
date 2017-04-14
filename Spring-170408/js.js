import './css.scss'
import Vue from 'vue'

import container from './container.vue'
// import Header from './Header.vue'
import './share'

new Vue({
    el:'#container',
    render: (h) => h(container)
})

// new Vue({
//     el:'header',
//     render: (h) => h(Header)
// })


var osKey = /os=([^&]+)/.exec(location.search);
if (osKey) {
    osKey = osKey[1];
} else {
    osKey = sessionStorage.getItem("osKey") || "H5";
}
sessionStorage.setItem("osKey", osKey);
