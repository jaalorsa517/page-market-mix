<template lang="pug">
  #app.app
    m-vue
    m-hero
    section.cards-container
      m-card(
        v-for=" card, key in cardsInfo"
        :key="key"
        :image="card.img" 
        :title="card.title"
        :paragraph="card.paragraph"
        )
    m-footer
</template>

<script lang="ts">
import Vue from "vue";
import MVue from "@/components/MHeader.vue";
import MHero from "@/components/MHero.vue";
import MFooter from "@/components/MFooter.vue";
import MCard from "@/components/MCardInfo.vue";
import logo1 from "@/assets/logo-01.png";
import logo2 from "@/assets/logo-02.png";
import logo3 from "@/assets/logo-03.png";
import logo4 from "@/assets/logo-04.png";

export default Vue.extend({
  components: {
    MVue,
    MHero,
    MCard,
    MFooter
  },
  data: function() {
    return {
      cardsInfo: [
        {
          img: logo1,
          title: "EXPERIENCIA",
          paragraph:
            "Contamos con más de doce años de experiencia, en la implementación y servicios de outsourcing, BPO, Contact Center , Domicilios, Venta Directa, Programas de Lealtad y Alianzas, con clientes de los diferentes sectores económicos del país. Somos expertos en implementación de tecnologías de punta"
        },
        {
          img: logo2,
          title: "EQUIPO",
          paragraph:
            "Nuestro talento humano es permanentemente, capacitado en temas de servicio al cliente y mercadeo de relaciones. Adicionalmente asegurar que nuestros colaboradores cumplan con todos los requisitos que exigen nuestros clientes, contamos con procesos de selección e Inducción definidos y ajustados a las características y necesidades"
        },
        {
          img: logo3,
          title: "TECNOLOGÍA",
          paragraph:
            "Tecnología de punta en el desarrollo estratégico del negocio de Contact Center y Logística, que nos permite flexibilidad, cumpliendo los estándares del mercado y ademas adecuarnos a las necesidades de nuestros clientes. Nuestro principal propósito es la seguridad de información y confidencialidad con cada uno de nuestros clientes."
        },
        {
          img: logo4,
          title: "CALIDAD Y FORMACIÓN",
          paragraph:
            "Realizamos un proceso de calidad formativo integrando capacitación y calidad, para así lograr mayor efectividad en la formación, ademas ponemos a su disposición un área de capacitación interna, en la cual se brindan capacitaciones en SAC, impulso comercial, habilidades de negociación, etiqueta telefónica, sonrisa telefónica, protocolos de entrega, etc."
        }
      ]
    };
  }
});
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Nunito+Sans:wght@200;700&display=swap');

*
  margin 0
  padding 0

.app
  font-family 'Nunito Sans', sans-serif

h1, h2, h3, h4, h5, h6
  font-family 'Fjalla One', sans-serif

.cards-container
  display flex
  flex-wrap wrap
  justify-content center
</style>
