
import { createRouter, createWebHistory } from "vue-router";
import DashboardVue from "../views/dashboard/Dashboard.vue";
import LoginVue from "../views/auth/Login.vue";
import RegisterVue from "../views/auth/Register.vue";
import ExpensesVue from "../views/expenses/Expenses.vue";
import addExpenseVue from "../views/expenses/add-expense.vue";

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
      path: "/expenses",
      name: "Expenses",
      component: ExpensesVue,
      meta: { requiresAuth: true },
    },
    {
      path: "/add-expense",
      name: "Add-Expense",
      component: addExpenseVue,
      meta: { requiresAuth: true }
    }
  ]
})

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!!sessionStorage.getItem('token')) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (!!sessionStorage.getItem('token')) {
      next("/posts");
      return;
    }
    next();
  } else {
    next();
  }
});

export default routes;