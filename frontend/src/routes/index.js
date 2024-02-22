import Vue from "vue";
import Router from "vue-router";
//import { component } from "vue/types/umd";

Vue.use(Router);

export default new Router ({
    mode: "history",
    routes: [
        {
            path: "/",
            component: () => import("../components/pages/MainHome")
        }
    ]
});