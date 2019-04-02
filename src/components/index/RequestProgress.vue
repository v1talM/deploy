<template>
    <div class="progress deep-orange lighten-4 z-depth-4">
        <div class="determinate deep-orange lighten-2" style="width: 70%"></div>
    </div>
</template>

<script>
    export default {
        name: "RequestProgress"
    }
</script>

<style lang="sass">
    .progress
        position: fixed
        margin: .1rem 0
        height: .35rem
</style>