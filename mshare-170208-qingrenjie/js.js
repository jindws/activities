import './css.scss'
import Vue from 'vue'
// import Router from 'vue-router'
// Vue.use(Router)

import container from './container.vue'
import Header from './Header.vue'

// const router = new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'container',
//       component: container
//     }
//   ]
// })

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



// new Vue({
//     el:'#container',
//     router,
//     template: '<App/>',
//     components: { Header }
// })
