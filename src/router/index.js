import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routers = [
    {
        path: '/',
        redirect: 'routes'
        // component: () => import("../view/page/login")
    },
    {
        path: "/routes",
        name: "routes",
        component: () => import("../view/routes"),
        children: [
            {   //
                path: "",
                name: "home",
                component: () => import("../view/page/home")
            },

            {   //
                path: "/d31",
                name: "d31",
                component: () => import("../view/page/d3/d31")
            },
            {   //
                path: "/d32",
                name: "d32",
                component: () => import("../view/page/d3/d32")
            },
            {   //
                path: "/canvas1",
                name: "canvas1",
                component: () => import("../view/page/canvas/canvas1")
            },
            {   //
                path: "/canvas2",
                name: "canvas2",
                component: () => import("../view/page/canvas/canvas2")
            },
            {   //
                path: "/regular",
                name: "regular",
                component: () => import("../view/page/regular/regular")
            },
            {   //
                path: "/encryption",
                name: "encryption",
                component: () => import("../view/page/regular/encryption")
            },
            
        ]

    },


]

const vueRouter = new Router({
    base: process.env.BASE_URL,
    mode: "hash",
    routes: routers,
});

// 路由前置导航守卫
vueRouter.beforeEach((to, from, next) => {
    // 根据路由元信息设置文档标题
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    next();
});

export default vueRouter;
