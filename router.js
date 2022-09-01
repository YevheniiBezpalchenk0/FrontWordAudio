import Download from "@/components/Download";
import HelloWorld from "@/components/HelloWorld";
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: "/",
        name: "Upload",
        component: HelloWorld,
    },
    {
        path: "/download",
        name: "Download",
        component: Download,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;