<template>
    <div class="row">
        <div class="input-field col s6">
            <input :value="selectApp" id="shop_id" type="text" class="validate" disabled :class="{valid: selectApp}">
            <label :class="{active: selectApp}" for="shop_id">店铺</label>
        </div>
        <div class="input-field col s6">
            <input value="" id="wx_no" type="text" class="validate" v-model="wx_no">
            <label class="" for="wx_no">填写用户微信id</label>
        </div>
        <div class="col s12 center-align">
            <button class="btn waves-effect waves-light" type="submit" name="action" @click="binduser">绑定用户
                <i class="material-icons right">send</i>
            </button>
        </div>
    </div>
</template>

<script>
    import miniapp from '@/api/appList'
    import {mapState} from 'vuex'
    export default {
        name: "AppConf",
        computed: mapState({
            selectApp: state => state.miniapp.selectApp
        }),
        data () {
            return {
                wx_no: '',
            }
        },
        methods: {
            binduser () {
                let split = this.selectApp.split(' - ')
                let app_id = split[3]
                let wx_no = this.wx_no
                if (app_id == '' || app_id == undefined) {
                    Materialize.toast('亲，请选择一个小程序哟！', 5000)
                    return
                }
                if (wx_no == '' || wx_no == 'undefined') {
                    Materialize.toast('用户微信ID不能为空哟！', 5000)
                    return
                }
                let data = {
                    'app_id': app_id,
                    'wx_no': wx_no,
                }
                this.$store.dispatch('setRequestShowProgress', true)
                miniapp.binduser(data).then(res => {
                    this.$store.dispatch('setRequestShowProgress', false)
                    if (res.errno) {
                        Materialize.toast(res.errmsg, 5000)
                        return
                    }
                    Materialize.toast(res.data.msg, 5000)
                })
            }
        }
    }
</script>

<style scoped>

</style>