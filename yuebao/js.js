
import './css.scss'
import Vue from 'vue'

import 'whatwg-fetch'
import './share'
import container from './container.vue'


new Vue({
    el: '#container',
    render: function(h){
      return h(container);
    }
})


var osKey = /os=([^&]+)/.exec(location.search);
if (osKey) {
    osKey = osKey[1];
} else {
    osKey = sessionStorage.getItem("osKey") || "H5";
}
sessionStorage.setItem("osKey", osKey);
