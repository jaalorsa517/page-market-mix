<template lang="pug">
  section.hero
    h2(v-animate-css="animation.zoomInLeft") NUESTRA
    h2(v-animate-css="animation.zoomInRight") COMPAÑIA
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: function() {
    return {
      animation: {
        zoomInLeft: {
          classes: "zoomInLeft"
        },
        zoomInRight: {
          classes: "zoomInRight"
        }
      }
    };
  }
});
</script>

<style lang="stylus">
.hero
  width 100%
  height 35vh
  display flex
  flex-direction column
  justify-content center
  background-color gray
  & h2
    font-size 3em
    line-height 1
    letter-spacing 25px
    text-align center
    color $color__2

    &:last-child
      letter-spacing 50px
      color $color__3
</style>
