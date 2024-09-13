import { createRouter, createWebHistory } from "vue-router";
import FormPage from "@/components/pages/FormPage.vue";
import PreviewPage from "@/components/pages/PreviewPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "form-page",
            component: FormPage,
        },
        {
            path: "/preview-page",
            name: "PreviewPage",
            component: PreviewPage,
            // component: () => import("../views/AboutView.vue"),
        },
    ],
});

export default router;
