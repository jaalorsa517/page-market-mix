<template lang="pug">
  footer.footer-container(v-animate-css="animation.fadeInUp")
    .nav-container
      nav.servicios
        h4 Servicios
        ul
          li(
            v-for="servicio,key in servicios"
            :key="key"
            href="#"
            )
            a(href="#") {{servicio}}
      nav.redes
        h4 Redes
        ul
          li(
            v-for="red,key in redes"
            :key="key"
            href="#"
            ) 
            a(href="#") {{red}}
      nav.ventas
        h4 Ventas
      nav.Colombia
        h4   Colombia
        ul  
          li(
            v-for="col, key in colombia"
            :key="key"
            ) 
            a(href="#") {{col}}
    .other-info
      p PBX: 349 5151 © 2013 by Market Mix S.A.S. All rights reserved.
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: function() {
    return {
      animation: {
        fadeInUp:{
          classes: "fadeInUp",
          delay: 1000,
          duration: 800
        }
      },
      servicios: [
        "Domicilios",
        "InOut",
        "SPDY",
        "Servicio al cliente",
        "Telemarketing",
        "Face2Face"
      ],
      redes: ["Facebook", "Instagram"],
      ventas: [],
      colombia: [
        "Contáctanos",
        "Trabaja con nosotros",
        "Protección de datos personales",
        "Responsabilidad"
      ]
    };
  }
});
</script>

<style lang="stylus">
.footer-container
  width 100%
  padding 10px
  display flex
  flex-direction column
  align-items center
  letter-spacing 1.5px
  color $color__3
  background-color $color__2

  & .nav-container
    width 100%
    max-width 80%
    display flex
    justify-content space-evenly
    h4
      margin-bottom 10px
      font-family 'Nunito Sans', sans-serif
      font-weight bold
      font-size 1.1em
    li
      list-style none
      line-height 2
    a
      text-decoration none
      color $color__3
  & .other-info
    font-size 0.8rem
</style>
