<template>
    <div class="fixed-action-btn">
        <a class="btn-floating btn-large red z-depth-3">
            <i class="large material-icons">dashboard</i>
        </a>
        <ul>
            <li><a class="btn-floating grey z-depth-3 tooltipped" data-position="left"
                   data-delay="50" data-tooltip="设置项目模块" title="设置项目模块"><i class="material-icons">toc</i></a></li>
            <li><router-link :to="{name: 'set-module-branch'}" class="btn-floating yellow darken-1 z-depth-3 tooltipped" data-position="left"
                             data-delay="50" data-tooltip="一键设置模块分支" title="一键设置模块分支"><i class="material-icons">mode_edit</i></router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Toolkit",
        mounted () {

        }
    }
</script>

<style scoped>

</style>