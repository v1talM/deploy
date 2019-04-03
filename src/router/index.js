import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import MiniAppList from '@/pages/MiniAppList'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'index', component: Index, meta: {title: '首页'} },
        { path: '/mini-app', name: 'mini-app', component: MiniAppList, meta: {title: '小程序列表'}}
    ]
})