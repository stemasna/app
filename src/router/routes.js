const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/TipologyPage.vue"),
      },
      {
        path: "LoginPage",
        name: "LoginPage",
        component: () => import("pages/LoginPage.vue"),
      },
      {
        path: "RegistrationPage",
        name: "RegistrationPage",
        component: () => import("pages/RegistrationPage.vue"),
      },
      {
        path: "TutorialPage",
        name: "TutorialPage",
        component: () => import("pages/TutorialPage.vue"),
      },
      {
        path: "ScansPage",
        name: "ScansPage",
        component: () => import("pages/ScansPage.vue"),
      },

      {
        path: "AccountPage",
        name: "AccountPage",
        component: () => import("pages/AccountPage.vue"),
      },
      // {
      //   path: "HistoricalPage",
      //   children: [
      //     {
      //       path: "HistoricalPage",
      //       name: "HistoricalPage",
      //       component: () => import("pages/HistoricalPage.vue"),
      //     },
      //     {
      //       path: ":id",
      //       name: "ArtWorkDetailPage",
      //       component: () => import("pages/ArtWorkDetailPage.vue"),
      //     },
      //   ],
      // },
      {
        path: "HistoricalPage",
        name: "HistoricalPage",
        component: () => import("pages/HistoricalPage.vue"),
      },
      {
        path: "ArtWorkDetailPage",
        name: "ArtWorkDetailPage",
        component: () => import("pages/ArtWorkDetailPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
