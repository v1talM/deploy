<template>
    <table class="striped centered">
        <thead>
        <tr>
            <th data-field=""></th>
            <th data-field="id">小程序名称</th>
            <th data-field="template_id">当前模板ID</th>
            <th data-field="app_id">APP-ID</th>
            <th data-field="shop_id">SHOP-ID</th>
            <th data-field="shop_type">店铺类型</th>
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
        </tr>
        </tbody>
    </table>
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
                }
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
        }
    }
</script>

<style scoped>

</style>