import { createRouter, createWebHistory } from "vue-router";
<<<<<<< HEAD


import Home from "@/views/Home.vue";
import Bookshelf from "@/views/Bookshelf.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import ResetPassword from "@/views/ResetPassword.vue";
import Circulation from "@/views/Circulation.vue";
import AboutUs from "@/views/AboutUs.vue";
import Contact from "@/views/Contact.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/Bookshelf", component: Bookshelf },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/reset-password", component: ResetPassword },
  { path: "/circulation", component: Circulation },
  { path: "/about", component: AboutUs},
  { path: "/contact", component: Contact},
=======
import store from "@/store"; // Importer Vuex pour vérifier l'auth

import Home from "@/views/Home.vue";
import Library from "@/views/Library.vue";
import Profile from "@/views/Profile.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import ResetPassword from "@/views/ResetPassword.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/library", component: Library },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/reset-password", component: ResetPassword },
  {
    path: "/profile",
    component: Profile,
    meta: { requiresAuth: true }, // Protection Auth
  },
>>>>>>> feeedbd (Mise à jour du projet)
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

<<<<<<< HEAD


/* //  Vérification d'auth avant chaque navigation
=======
//  Vérification d'auth avant chaque navigation
>>>>>>> feeedbd (Mise à jour du projet)
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !store.getters["auth/isAuthenticated"]) {
    next("/login"); //  Rediriger vers login si non connecté
  } else {
    next();
  }
<<<<<<< HEAD
}); */

export default router;
=======
});

export default router;
>>>>>>> feeedbd (Mise à jour du projet)
