import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {ApiRoot} from "../env"
Vue.use(VueAxios, axios)

export default {
    getAppList () {
        return Vue.axios.get( ApiRoot + '/repertory/front/getapplist' ).then(res => {
            let data = res.data.data
            return data
        })
    }
}