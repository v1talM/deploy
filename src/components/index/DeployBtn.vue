<template>
    <div class="row">
        <div v-for="(name, index) in items" class="col s4 m2">
            <a class="waves-effect btn-floating deploy-btn btn-large z-depth-2"
               :class="bgColor[index]"
               @click="pull(name)">{{ name }}</a>
        </div>
    </div>
</template>

<script>
    import index from '@/api/index'
    import {mapState} from 'vuex'
    export default {
        name: "DeployBtn",
        props: ['items'],
        computed: mapState({
           log: state => state.index.log
        }),
        data () {
            return {
                name: 'Account',
                bgColor: ['red accent-3', 'cyan accent-3', 'orange accent-3', 'deep-orange accent-3', 'light-blue accent-3', 'teal accent-3']
            }
        },
        methods: {
            pull (module) {
                this.$store.dispatch('setRequestShowProgress', true)
                index.pullCodeByModule(module).then(res => {
                    var data = res.data.data
                    data.msg = data.msg.replace(/<\/?[^>]*>/g,'')
                    data.msg = data.msg.replace(/\\n/g, '<br/>')
                    this.$store.dispatch('pullCodeByModule', data.msg)
                    this.$store.dispatch('setRequestShowProgress', false)
                })
            }
        }
    }
</script>

<style lang="sass">
    .deploy-panel
        width: 100%
        .deploy-btn
            width: 6.6rem
            height: 6.6rem
            line-height: 6.6rem
            margin: .5rem 0
</style>