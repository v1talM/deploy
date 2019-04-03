<template>
    <table class="striped centered">
        <thead>
        <tr>
            <th data-field=""></th>
            <th data-field="id">小程序名称</th>
            <th data-field="name">APP-ID</th>
            <th data-field="price">SHOP-ID</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="app in appList">
            <td><p>
                <input name="shop_id" type="radio"
                       v-model="selectApp"
                       :value="app.wx_name + ' - ' + app.shop_id"
                       :id="app.shop_id" />
                <label :for="app.shop_id"></label>
            </p></td>
            <td>{{ app.wx_name }}</td>
            <td>{{ app.app_id }}</td>
            <td>{{ app.shop_id }}</td>
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
                selectApp: ''
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