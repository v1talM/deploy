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
    },
    bindtmpid (data) {
        return Vue.axios.post( ApiRoot + '/repertory/front/bindtmpid', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res => {
            return res.data
        })
    },
    binduser (data) {
        return Vue.axios.post( ApiRoot + '/repertory/front/adduser', data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then( res => {
            return res.data
        })
    },
    refreshToken (data) {
        return Vue.axios.get( ApiRoot + '/repertory/front/refreshtoken?shop_id=' + data).then(res => {
            let data = res.data.data
            const $callbackContent = '刷新成功，需要一分钟生效请勿短时间内重复操作'
            Materialize.toast($callbackContent, 4000)
            return data
        })
    }
}
