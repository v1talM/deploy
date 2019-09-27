import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {ApiRoot} from "../env"
Vue.use(VueAxios, axios)

export default {
    queryQuota () {
        return Vue.axios.get( ApiRoot + '/repertory/front/queryquota').then( res => {
            let data = res.data.data
            return data
        })
    }
}