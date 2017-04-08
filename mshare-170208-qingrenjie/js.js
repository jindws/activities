import './css.scss'
import Vue from 'vue'

import container from './container.vue'
import Header from './Header.vue'

import './share'

new Vue({
    el:'#container',
    render: h => {
    	return h(container)
    }
})

new Vue({
    el:'header',
    render: h => h(Header)
})
