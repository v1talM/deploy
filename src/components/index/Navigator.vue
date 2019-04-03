<template>
    <div class="navbar-fixed">
        <nav>
            <div class="nav-wrapper blue">
                <router-link :to="{name: 'index'}" class="brand-logo"><i class="material-icons">cloud</i>Logo</router-link>
                <ul class="right hide-on-med-and-down">
                    <li><a href="#"><i class="material-icons">search</i></a></li>
                    <li><router-link :to="{name: 'mini-app'}"><i class="material-icons">view_module</i></router-link></li>
                    <li><a href="#"><i class="material-icons">refresh</i></a></li>
                </ul>
            </div>
        </nav>
    </div>

</template>

<script>
    export default {
        name: "Navigator"
    }
</script>

<style scoped>

</style>