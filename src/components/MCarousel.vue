<template lang="pug">
  section.carousel-container(v-animate-css="animation.fadeIn")
    h2 ALGUNOS DE NUESTROS CLIENTES
    carousel(
      :perPage="1"
      :navigationEnabled="true"
      :autoplay="true"
      :centerMode="true"
      :loop="true"
      :speed="800"
      paginationColor="rgb(113,112,112)"
      paginationActiveColor="#242526"
    )
      slide(
        v-for="cliente,key in clientes"
        :key="key"
      )
        h4.cliente--title {{cliente.title}}
        .clientes-container
          m-slide(
            v-for="data, key_ in cliente.data"
            :key="key_"
            :data="data"
          )

</template>

<script lang="ts">
import Vue from "vue";
import { Carousel, Slide } from "vue-carousel";
import MSlide from "@/components/MSlide.vue";

export default Vue.extend({
  components: {
    Carousel,
    Slide,
    MSlide
  },
  data: function() {
    return {
      animation: {
        fadeIn: {
          classes: "fadeIn",
          duration: 1000,
          delay:800
        }
      },
      clientes: [
        {
          title: "En servcio al cliente...",
          data: [
            {
              name: "cencosud",
              url: "https://www.cencosud.com/",
              logo: require("@/assets/clientes/servicio_cliente/ceconsud.png")
            },
            {
              name: "cinemas-procinal",
              url: "https://www.procinal.com.co/",
              logo: require("@/assets/clientes/servicio_cliente/cinemas.png")
            },
            {
              name: "domicilios-com",
              url: "https://domicilios.com/",
              logo: require("@/assets/clientes/servicio_cliente/domicilios-com.png")
            },
            {
              name: "itacol",
              url: "https://www.italcol.com/",
              logo: require("@/assets/clientes/servicio_cliente/itacol.png")
            },
            {
              name: "pedidos-ya-latam",
              url: "https://latampass.latam.com/es_ar/partner/rappi",
              logo: require("@/assets/clientes/servicio_cliente/pedidos-ya.png")
            },
            {
              name: "q-bano",
              url: "https://sandwichqbano.com/",
              logo: require("@/assets/clientes/servicio_cliente/q-bano.png")
            }
          ]
        },
        {
          title: "En telemarketing...",
          data: [
            {
              name: "chubb",
              url: "https://www.chubb.com/co-es/",
              logo: require("@/assets/clientes/telemarketing/chubb.png")
            },
            {
              name: "scotiabank-colpatria",
              url: "https://www.scotiabankcolpatria.com/",
              logo: require("@/assets/clientes/telemarketing/colpatria.png")
            },
            {
              name: "e-channel",
              url: "https://www.e-channel.co/home/",
              logo: require("@/assets/clientes/telemarketing/e-channel.png")
            },
            {
              name: "itau",
              url: "https://www.itau.co/index",
              logo: require("@/assets/clientes/telemarketing/itau.png")
            }
          ]
        },
        {
          title: "En domicilios...",
          data: [
            {
              name: "ara",
              url:
                "https://domicilios.aratiendas.com/pide-a-domicilio?step=2&stepName=selector_de_ubicacion",
              logo: require("@/assets/clientes/domicilios/ara.png")
            },
            {
              name: "buger-king",
              url: "https://www.bk.com.co/",
              logo: require("@/assets/clientes/domicilios/buger-king.png")
            },
            {
              name: "di-lucca-to-go",
              url: "https://www.diluccatogo.com/",
              logo: require("@/assets/clientes/domicilios/di-lucca.png")
            },
            {
              name: "hamburgueseria",
              url: "https://pideya.lahamburgueseria.com/pide-a-domicilio",
              logo: require("@/assets/clientes/domicilios/hamburgueseria.png")
            },
            {
              name: "poke-colombia",
              url: "https://domicilios.pokecolombia.co/pide-a-domicilio",
              logo: require("@/assets/clientes/domicilios/poke-col.png")
            },
            {
              name: "ppc",
              url: "https://pideonline.ppc.com.co/pide-a-domicilio",
              logo: require("@/assets/clientes/domicilios/ppc.png")
            },
            {
              name: "spoleto",
              url: "https://domicilios.spoleto.com.co/pide-a-domicilio",
              logo: require("@/assets/clientes/domicilios/spoleto.png")
            },
            {
              name: "sushi-fans",
              url: "https://domicilios.sushifans.co/pide-a-domicilio",
              logo: require("@/assets/clientes/domicilios/sushi-fans.png")
            }
          ]
        }
      ]
    };
  }
});
</script>

<style lang="stylus">
.carousel-container
  width 100%
  max-width 80%
  margin 20px auto
  display flex
  flex-direction column
  justify-content center
  align-items center
  color $color__2
  h2
    margin 20px auto
    font-size 1.8em

.clientes-container
  display flex
  flex-wrap wrap
  justify-content center

.cliente--title
  margin-bottom 20px
  font-size 1.5rem
  text-align center
  font-family 'Nunito Sans', sans-serif
  font-weight bold
</style>
