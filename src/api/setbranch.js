import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {ApiRoot} from "../env"
Vue.use(VueAxios, axios)

export default {
    setModuleBranch (data) {
        return Vue.axios.post( ApiRoot + '/repertory/front/setmodulebranch', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(res => {
            return res.data
        })
    }
}