<template>
    <div class="container miniapp-container">
        <div class="row">
            <div class="col s12 m12">
                <div class="card-panel white">
                  <table class="striped centered">
                    <thead>
                      <tr>
                          <th data-field="id">小程序名称</th>
                          <th data-field="name">APP-ID</th>
                          <th data-field="price">SHOP-ID</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="app in appList">
                        <td>{{ app.wx_name }}</td>
                        <td>{{ app.app_id }}</td>
                        <td>{{ app.shop_id }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import miniapp from '@/api/appList'
    export default {
        name: "MiniAppList",
        data () {
            return {
                appList: []
            }
        },
        mounted () {
            this.$store.dispatch('setRequestShowProgress', true)
            miniapp.getAppList().then(res => {
                this.appList = res
                this.$store.dispatch('setRequestShowProgress', false)
            })
        }
    }
</script>

<style lang="sass">

</style>