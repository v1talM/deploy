<template>
    <div class="navbar-fixed">
        <nav>
            <div class="nav-wrapper blue">
                <router-link :to="{name: 'index'}" class="brand-logo">{{ emoji[Math.floor(Math.random() * emoji.length)] }}</router-link>
                <ul class="right hide-on-med-and-down">
                    <!--<li><a href="#"><i class="material-icons">search</i></a></li>-->
                    <li><router-link :to="{name: 'mini-app'}" class="tooltipped"
                                     data-position="bottom" data-delay="50"
                                     data-tooltip="小程序列表" title="小程序列表"><i class="material-icons">view_module</i> </router-link></li>
                    <!--<li><a href="#"><i class="material-icons">refresh</i></a></li>-->
                </ul>
            </div>
        </nav>
    </div>

</template>

<script>
    import {emoji} from "../../env";

    export default {
        name: "Navigator",
        data () {
            return {
                emoji: emoji
            }
        }
    }
</script>

<style scoped>

</style>