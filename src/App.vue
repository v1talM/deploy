<template>
  <div id="app">
      <navigator />
      <RequestProgress />
      <router-view></router-view>
      <Toolkit />
  </div>
</template>

<script>
import Navigator from '@/components/index/Navigator'
import RequestProgress from '@/components/index/RequestProgress'
import Toolkit from '@/components/index/Toolkit'
export default {
  name: 'App',
  components: {
    Navigator, RequestProgress, Toolkit
  }
}
</script>

<style>
  html, body{height: 100%; background-color: #e3f2fd;}
  #app {
    font-family: GillSans, Calibri, Trebuchet, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }
</style>

<style lang="sass">
    .container.deploy-container, .container.miniapp-container
        display: flex
        display: -webkit-flex
        align-items: flex-start
        justify-content: center
        height: 100%
        margin-top: 64px
        .row
            width: 100%
</style>
