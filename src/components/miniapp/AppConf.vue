<template>
    <div class="row">
        <div class="input-field col s6">
            <input :value="selectApp" id="shop_id" type="text" class="validate" disabled :class="{valid: selectApp}">
            <label :class="{active: selectApp}" for="shop_id">店铺</label>
        </div>
        <div class="input-field col s6">
            <input value="" id="template_id" type="text" class="validate" v-model="template_id">
            <label class="" for="template_id">填写模板id</label>
        </div>
        <div class="col s12 center-align">
            <button class="btn waves-effect waves-light" type="submit" name="action" @click="bindtmpid">提审小程序
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
                template_id: '',
            }
        },
        methods: {
            bindtmpid () {
                let split = this.selectApp.split(' - ')
                let shop_id = split[1]
                let tmp_id = this.template_id
                let shop_type = split[2] == 'undefined' ? 0 : split[2]
                if (shop_id == '' || shop_id == undefined) {
                    Materialize.toast('亲，请选择一个小程序哟！', 5000)
                    return
                }
                if (tmp_id == '' || tmp_id == 'undefined') {
                    Materialize.toast('模板ID不能为空哟！', 5000)
                    return
                }
                let data = {
                    'shop_id': shop_id,
                    'template_id': parseInt(tmp_id),
                    'type': shop_type
                }
                this.$store.dispatch('setRequestShowProgress', true)
                miniapp.bindtmpid(data).then(res => {
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