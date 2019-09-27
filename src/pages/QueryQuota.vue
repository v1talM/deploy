<template>
    <div class="container miniapp-container">
        <div class="row">
            <div class="col s12 m12">
                <div class="card">
                    <div class="card-content">
                        <chart-panel/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ChartPanel from '@/components/queryquota/ChartPanel'
    export default {
        name: "QueryQuota",
        components: {
            ChartPanel
        }
    }
</script>

<style scoped>

</style>