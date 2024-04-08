import { LAYOUT } from "@/router/constant";

const dashboard = {
  path: "/dashboard",
  name: "Dashboard",
  component: LAYOUT,
  redirect: "/dashboard/analysis",
  meta: {
    orderNo: 10,
    icon: "ion:grid-outline",
    title: 'dashboard',
  },
  children: [
    {
      path: "analysis",
      name: "Analysis",
      component: () => import("@/views/dashboard/analysis/index.vue"),
      meta: {
        // affix: true,
        title: "analysis",
      },
    },
    {
      path: "workbench",
      name: "Workbench",
      component: () => import("@/views/dashboard/workbench/index.vue"),
      meta: {
        title: "workbench",
      },
    },
  ],
};

export default dashboard;
