import { createRouter, createWebHashHistory } from "vue-router";
import Cookies from 'js-cookie'

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => 
      import("../views/Home.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/About.vue")
  },
  //   {
  //   path: '/:pathMatch(.*)*',
  //   component: () => import("../views/Error404.vue")
  // }
];
  // Always leave this as last one,
  // but you can also remove it

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// router.beforeResolve((to, from, next) => {
//   if (to.path === '/') {
//     if (Cookies.get('user-logIn') === "1")
//       next('/')
//   }
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (Cookies.get('user-logIn') === "1")
//       next()
//     else next('/login')
//   } else {
//     next()
//   }
// })

export default router;
