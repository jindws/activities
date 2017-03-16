import container from './container.vue'
import Vue from 'vue'
new Vue({
    el: '#container',
    render: function(h) {
        return h(container)
    }
})

import './css.scss'
