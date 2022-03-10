const routes = [
  // scrollBehaviour(to, from, savedPosition){
  //   if(savedPosition){
  //     return savedPosition
  //   }
  //   }
  // },
  // {
  //   path: "/",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/landing.vue") }],
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/",
    component: () => import("pages/landing.vue"),
  },
  {
    path: "/about",
    component: () => import("pages/about.vue"),
  },
  {
    path: "/prowork",
    component: () => import("pages/prowork.vue"),
  },
];

export default routes;
