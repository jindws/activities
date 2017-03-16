// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
//
// // const User = {
// //   template: '<div>User {{ $route.params }}</div>',
// //   watch: {
// //     '$route' (to, from) {
// //       console.log(to,from)
// //     }
// //   }
// // }
// //
// // const routes = [
// //   { path: '/foo', component: Foo },
// //   { path: '/bar', component: Bar },
// //   { path: '/user/:id', component: User }
// // ]
//
// const User = {
//   template: `
//     <div class="user">
//       <h2>User {{ $route.params.id }}</h2>
//         <router-view class="view one"></router-view>
//   <router-view class="view two" name="a"></router-view>
//   <router-view class="view three" name="b"></router-view>
//     </div>
//   `
// }
//
// const router = new VueRouter({
//   routes: [
//     { path: '/user/:id', component: User,
//       children: [
//         {
//           // 当 /user/:id/profile 匹配成功，
//           // UserProfile 会被渲染在 User 的 <router-view> 中
//           path: 'profile',
//           components: {
//             default: Bar,
//               a: Bar,
//               b: Bar
//             }
//         },
//         {
//           // 当 /user/:id/posts 匹配成功
//           // UserPosts 会被渲染在 User 的 <router-view> 中
//           path: 'posts',
//           component: Bar
//         }
//       ]
//     }
//   ]
// })
//
// const app = new Vue({
//   router
// }).$mount('#app')


require('./a');
require.ensure([], function(require){
    require('./b');
});
