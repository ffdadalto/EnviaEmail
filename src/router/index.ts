import { createRouter, createWebHashHistory } from 'vue-router'
import usuario from "../classes/Usuario";

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from) {
    if (to.path != from.path && !to.meta.modal && !from.meta.modal)
      return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'principal',
      component: () => import('../views/Principal.vue'),
      meta: {
        titulo: "Principal"
      },
    },
    {
      path: "/validabd/",
      name: "validabd",
      component: () => import("../ValidaBD.vue"),
      meta: {
        titulo: "ValidaBD",
        permiteAnonimo: true,
      },
    },
  ],
});

export default router
