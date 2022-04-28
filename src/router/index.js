
import { createRouter, createWebHistory } from "vue-router";
import store from "../store";
import DashboardVue from "../views/Dashboard.vue";
import LoginVue from "../views/Login.vue";
import RegisterVue from "../views/Register.vue";
import ExpensesVue from "../views/Expenses.vue";

const routes = createRouter({
  history : createWebHistory(''),
  routes : [
    {
      path: "/",
      name: "Dashboard",
      component: DashboardVue,
    },
    {
      path: "/register",
      name: "Register",
      component: RegisterVue,
      meta: { guest: true },
    },
    {
      path: "/login",
      name: "Login",
      component: LoginVue,
      meta: { guest: true },
    },
    {
      path: "/Expenses",
      name: "Expenses",
      component: ExpensesVue,
      meta: { requiresAuth: true },
    },
  ]
})

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (store.getters.isAuthenticated) {
//       next();
//       return;
//     }
//     next("/login");
//   } else {
//     next();
//   }
// });

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.guest)) {
//     if (store.getters.isAuthenticated) {
//       next("/posts");
//       return;
//     }
//     next();
//   } else {
//     next();
//   }
// });

export default routes;