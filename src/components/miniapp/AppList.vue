<template>
    <div>
        <table class="striped centered">
            <thead>
            <tr>
                <th data-field=""></th>
                <th data-field="id">小程序名称</th>
                <th data-field="template_id">当前模板ID</th>
                <th data-field="app_id">APP-ID</th>
                <th data-field="shop_id">SHOP-ID</th>
                <th data-field="shop_type">店铺类型</th>
                <th data-field="shop_qrcode">二维码</th>
                <th data-field="refresh_token">刷新token</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="app in appList">
                <td><p>
                    <input name="shop_id" type="radio"
                           v-model="selectApp"
                           :value="app.wx_name + ' - ' + app.shop_id + ' - ' + app.shop_type + ' - ' + app.app_id"
                           :id="app.shop_id" />
                    <label :for="app.shop_id"></label>
                </p></td>
                <td>{{ app.wx_name }}</td>
                <td>{{ app.template_id }}</td>
                <td>{{ app.app_id }}</td>
                <td>{{ app.shop_id }}</td>
                <td>{{ shopTypeMap[app.shop_type] }}</td>
                <td>
                    <a class="btn-floating blue lighten-4" data-target="qrcode_modal" @click="qrcode_modal(app.qr_code)"><i class="material-icons">zoom_in</i></a>
                </td>
                <td><a class="btn" @click="refresh_token(app.shop_id)">刷新token</a></td>
            </tr>
            </tbody>
        </table>
        <div id="qrcode_modal" class="qrcode_modal modal">
            <div class="modal-content">
                <img class="materialboxed" width="650" :src="active_qrcode">
            </div>
        </div>
    </div>
</template>

<script>
    import miniapp from '@/api/appList'

    export default {
        name: "AppList",
        data () {
            return {
                appList: [],
                selectApp: '',
                shopTypeMap: {
                    0: '通用版',
                    1: '餐饮版',
                    2: '聚合版'
                },
                active_qrcode: '',
            }
        },
        mounted () {
            this.$store.dispatch('setRequestShowProgress', true)
            miniapp.getAppList().then(res => {
                this.appList = res
                this.$store.dispatch('setRequestShowProgress', false)
            })
        },
        watch: {
            selectApp () {
                this.$store.dispatch('setSelectApp', this.selectApp)
            }
        },
        methods: {
            qrcode_modal(url) {
                let $ = window.$
                $(".modal").modal()
                if (url === undefined) {
                    this.active_qrcode = ''
                } else {
                    this.active_qrcode = url
                }
            },
            refresh_token(shopId) {
                miniapp.refreshToken(shopId);
            }
        }
    }
</script>

<style lang="sass">
    .card .card-image img
        width: 320px
        display: inline-block
</style>
