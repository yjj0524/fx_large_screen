import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexView from '../views/IndexView.vue'
import dataV from '@jiaminghi/data-view'

Vue.use(VueRouter)
Vue.use(dataV)

const routes = [{
        path: '/',
        name: 'index',
        component: IndexView
    },
    {
        path: '/index',
        name: 'indexView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/IndexView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router