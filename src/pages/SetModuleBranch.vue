<template>
    <div class="container moduleconf-container">
        <div class="row">
            <div class="col s12 m12">
                <module-conf />
            </div>
        </div>
    </div>
</template>

<script>
    import ModuleConf from '@/components/setmodulebranch/ModuleConf'
    export default {
        name: "SetModuleBranch",
        components: {
            ModuleConf
        }
    }
</script>

<style lang="sass">

</style>