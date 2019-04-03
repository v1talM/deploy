import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {ApiRoot} from "../env"

Vue.use(VueAxios, axios)
export default {
    pullCodeByModule (module) {
        // return mock
        return Vue.axios.get( ApiRoot + '/repertory/api/repertoryjson?module=' + module )
    }
}