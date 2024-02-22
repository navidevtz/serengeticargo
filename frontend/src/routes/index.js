import Vue from "vue";
import Router from "vue-router";
//import { component } from "vue/types/umd";

Vue.use(Router);

export default new Router ({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "/users",
            name: "users",
            component: () => import("./components/user/Users")
        },
        {
            path: "/users/:id",
            name: "/user-details",
            component: () => import("./components/user/User")
        },
        {
            path: "/users/:id",
            name: "/edit-user",
            component: () => import("./components/user/EditUser")
        },
        {
            path: "/users/new",
            name: "/add-user",
            component: () => import("./components/user/AddUser")
        }
    ]
});