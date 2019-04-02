<template>
    <div>
        <navigator />
        <RequestProgress />
        <div class="container deploy-container ">
            <div class="deploy-panel">
                <div class="row">
                    <div class="col s12 m12">
                        <div class="card grey darken-4 z-depth-3">
                            <div class="card-content white-text">
                                <!-- 日志输出面板 -->
                                <console-panel />
                            </div>
                            <div class="card-action white">
                                <!-- 部署按钮 -->
                                <deploy-btn :items="['account', 'merchant', 'crm', 'trade', 'shopping', 'marketing']"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- 页面内容放在这里 -->
        </div>
        <Toolkit />
    </div>
</template>

<script>
    import Navigator from '@/components/index/Navigator'
    import RequestProgress from '@/components/index/RequestProgress'
    import DeployBtn from '@/components/index/DeployBtn'
    import ConsolePanel from '@/components/index/ConsolePanel'
    import Toolkit from '@/components/index/Toolkit'
    export default {
        name: "Index",
        components: {
            Navigator, RequestProgress, DeployBtn, ConsolePanel, Toolkit
        }
    }
</script>

<style lang="sass">
    .container.deploy-container
        display: flex
        display: -webkit-flex
        align-items: center
        justify-content: center
        height: 100%
        margin-top: 64px
</style>