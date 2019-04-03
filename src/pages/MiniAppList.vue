<template>
    <div class="container miniapp-container">
        <div class="row">
            <div class="col s12 m12">
                <div class="card">
                    <div class="card-image">
                        <app-list />
                    </div>
                    <div class="card-content">
                        <app-conf />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AppList from '@/components/miniapp/AppList'
    import AppConf from '@/components/miniapp/AppConf'
    export default {
        components: {
            AppList, AppConf
        },
        name: "MiniAppList",
    }
</script>

<style lang="sass">
    .input-field
        text-align: left
</style>