import Vue from 'vue'
import Vuex from 'vuex'
import index from './index/index'
import miniapp from './miniapp/index'
const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        index, miniapp
    },
    strict: debug
})