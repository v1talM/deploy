<template>
  <div id="app">
    <index-page/>
  </div>
</template>

<script>
import IndexPage from '@/pages/Index'

export default {
  name: 'App',
  components: {
    IndexPage
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
