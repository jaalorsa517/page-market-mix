<template lang="pug">
header.header-container
  .header__logo()
    img(src="@/assets/logo.png" v-animate-css="animation.rubberBand")
    
  nav
    ul.header__items
      li(v-animate-css="animation.tada") Inicio
      li(v-animate-css="animation.tada") Nosotros
      li(v-animate-css="animation.tada") Contáctanos
      li(v-animate-css="animation.tada") Trabaje con nosotros
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data:function (){
    return {
      animation:{
        rubberBand:{
          classes:"rubberBand"
        },
        tada:{
          classes:"tada"
        }
      }
    }
  }
})
</script>

<style lang="stylus">

.header-container
  width 100%
  display flex
  justify-content center
  align-items center
  color $color__1
  background-color $color__2
  & nav
    flex-grow 3

.header__logo
  flex-grow 2
  margin-left 15px

.header__items
  display flex
  align-items center
  & li
    margin 0 20px
    padding 15px
    font-size 1.1em
    list-style none
    transition transform 700ms
    &:after
      margin-left 50px
      font-size 2.5em
      content "|"
    &:last-child:after
      content ""
    &:hover
      cursor pointer
      transform scale(1.1)
</style>
