<template>
    <div class="progress blue lighten-4 z-depth-4" v-show="showProgress">
        <div class="indeterminate blue lighten-2" :style="{width: requestProgress}"></div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "RequestProgress",
        computed: mapState({
            requestProgress: state => state.index.requestProgress,
            showProgress: state => state.index.showProgress
        })
    }
</script>

<style lang="sass">
    .progress
        position: fixed
        margin: .1rem 0
        height: .35rem
</style>