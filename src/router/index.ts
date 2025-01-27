import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: () => import("../pages/home.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;