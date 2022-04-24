import Vue from "vue"
import VueRouter from "vue-router"
import IndexView from "../views/Index.vue"

Vue.use(VueRouter)

const routes = [{
        path: "/",
        name: "index",
        component: IndexView,
        meta: {
            title: "首页",
            keepAlive: true
        }
    },
    {
        path: "/index",
        name: "indexView",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ("../views/Index.vue"),
        meta: {
            title: "首页",
            keepAlive: true
        }
    },
    {
        path: "/dataView",
        name: "dataView",
        component: () =>
            import ("../views/DataView.vue")
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    document.title = "奉贤区新桥村智慧村庄信息服务平台";

    next() // 直接进入页面
})

export default router