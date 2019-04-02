<template>
    <div class="progress deep-orange lighten-4 z-depth-4">
        <div class="determinate deep-orange lighten-2" :style="{width: requestProgress}"></div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "RequestProgress",
        computed: mapState({
            requestProgress: state => state.index.requestProgress
        })
    }
</script>

<style lang="sass">
    .progress
        position: fixed
        margin: .1rem 0
        height: .35rem
</style>