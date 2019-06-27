<template>
    <div class="card module-conf">
        <div class="card-content center-align">
            <div class="row">
                <div class="col s3 m3">
                    <h2 class="left-align">
                        <input type="checkbox" id="all" value="all" v-model="checkAllModules" />
                        <label for="all">all</label>
                    </h2>
                </div>
                <div class="col s3 m3" v-for="(module, index) in modules" v-if="module != 'all'">
                    <h2 class="left-align">
                        <input type="checkbox" :id="module" :value="module" v-model="checkedModules" />
                        <label v-bind:for="module">{{ module }}</label>
                    </h2>
                </div>
            </div>

        </div>
        <div class="card-action">
            <div class="row">
                <div class="input-field col s12 left-align">
                    <input id="branch" type="text" v-model="branch">
                    <label for="branch">分支名</label>
                </div>
                <div class="input-field col s12">
                    <button class="btn waves-effect waves-light" type="button" name="action" @click="setModuleBranch">提交
                        <i class="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import qs from 'qs'
    import {modules} from '../../env'
    import setbranch from '@/api/setbranch'

    export default {
        name: "ModuleConf",
        data () {
            return {
                modules: [],
                checkedModules: [],
                checkAllModules: false,
                branch: ''
            }
        },
        watch: {
            checkAllModules () {
                if (this.checkAllModules) {
                    this.checkedModules = this.modules
                } else {
                    this.checkedModules = []
                }
            }
        },
        mounted () {
            this.modules = modules
        },
        methods: {
            setModuleBranch () {
                let modules = this.checkedModules
                let index = modules.indexOf('all')
                if (index > -1) {
                    modules.splice(index, 1)
                }
                let branch = this.branch
                if (modules.length == 0) {
                    Materialize.toast('至少要选中一个模块哟！', 5000)
                    return false
                }
                if (branch == '') {
                    Materialize.toast('分支名不能为空哟！', 5000)
                    return false
                }
                let data = qs.stringify({
                    'module': JSON.stringify(modules),
                    'branch': branch,
                })
                this.$store.dispatch('setRequestShowProgress', true)
                setbranch.setModuleBranch(data).then(res => {
                    this.$store.dispatch('setRequestShowProgress', false)
                    if (res.errno) {
                        Materialize.toast(res.errmsg, 5000)
                        return
                    }
                    Materialize.toast(res.data, 5000)
                })
            }
        }
    }
</script>

<style lang="sass">
    .moduleconf-container .module-conf
        padding: 0 4rem
</style>