<template>
    <div class="row">
        <div v-for="(name, index) in items" class="col s4 m2">
            <a class="waves-effect btn-floating deploy-btn btn-large z-depth-2" :class="bgColor[index]">{{ name }}</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DeployBtn",
        props: ['items'],
        data () {
            return {
                name: 'Account',
                bgColor: ['red accent-3', 'cyan accent-3', 'orange accent-3', 'deep-orange accent-3', 'light-blue accent-3', 'teal accent-3']
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