<template>
    <div>
        <div class="container deploy-container ">
            <div class="deploy-panel">
                <div class="row">
                    <div class="col s12 m12">
                        <div class="card grey darken-4 z-depth-1">
                            <div class="card-content white-text">
                                <!-- 日志输出面板 -->
                                <console-panel />
                            </div>
                            <div class="card-action white">
                                <!-- 部署按钮 -->
                                <deploy-btn :items="modules"/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- 页面内容放在这里 -->
        </div>
    </div>
</template>

<script>
    import DeployBtn from '@/components/index/DeployBtn'
    import ConsolePanel from '@/components/index/ConsolePanel'
    import {modules} from "../env";

    export default {
        name: "Index",
        components: {
            DeployBtn, ConsolePanel
        },
        data () {
            return {
                modules: modules
            }
        }
    }
</script>
