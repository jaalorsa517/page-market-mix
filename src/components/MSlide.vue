<template lang="pug">
  .slide-container
    a(:href="data.url")
      img(:src="data.logo" :alt="data.name")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    props:["data"]    
})
</script>

<style lang="stylus">
.slide-container
  margin 10px
  img
    widt 50px
    height 50px
</style>