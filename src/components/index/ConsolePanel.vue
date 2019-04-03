<template>
    <div class="deploy-console valign-wrapper">
        <code class="left-align console-segment"
              :class="isFlowText ? 'flow-text' : ''"
              v-html="log">

        </code>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "ConsolePanel",
        computed: mapState({
            log: state => state.index.log
        }),
        data () {
            return {
                isFlowText: true
            }
        }
    }
</script>

<style lang="sass">
    .deploy-console
        height: 45rem
        overflow-y: scroll
        border: .1rem #ffffff dashed
        .console-segment
            display: flex
            padding: 1rem
            align-self: flex-start
</style>