<template>
    <div>
        <ve-ring :data="chartData"></ve-ring>
    </div>
</template>

<script>
    import queryquota from '@/api/queryquota'
    export default {
        name: "ChartPanel",
        data () {
            return {
                quota: {},
                chartData: {
                    columns: ["类型", "数量"],
                    rows: []
                }
            }
        },
        mounted () {
            this.$store.dispatch('setRequestShowProgress', true)
            queryquota.queryQuota().then(res => {
                let quota = JSON.parse(res)
                this.quota.limit = quota.limit
                this.quota.rest = quota.rest
                this.quota.speedup_limit = quota.speedup_limit
                this.quota.speedup_rest = quota.speedup_rest
                let limit = {"类型": "limit", "数量": quota.limit}
                this.chartData.rows.push(limit)
                let rest = {"类型": "rest", "数量": quota.rest}
                this.chartData.rows.push(rest)
                let speedup_limit = {"类型": "speedup_limit", "数量": quota.speedup_limit}
                this.chartData.rows.push(speedup_limit)
                let speedup_rest = {"类型": "speedup_rest", "数量": quota.speedup_rest}
                this.chartData.rows.push(speedup_rest)
                this.$store.dispatch('setRequestShowProgress', false)
            })
        }
    }
</script>

<style scoped>

</style>