import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import MiniAppList from '@/pages/MiniAppList'
import SetModuleBranch from '@/pages/SetModuleBranch'
import SetMiniAppVisitor from '@/pages/SetMiniAppVisitor'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'index', component: Index, meta: {title: '首页'} },
        { path: '/mini-app', name: 'mini-app', component: MiniAppList, meta: {title: '小程序列表'}},
        { path: '/set-module-branch', name: 'set-module-branch', component: SetModuleBranch, meta: {title: '设置模块分支'}},
        { path: '/set-mini-app-visitor', name: 'set-mini-app-visitor', component: SetMiniAppVisitor, meta: {title: '设置小程序访问者'}},
    ]
})