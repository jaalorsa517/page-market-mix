<template lang="pug">
  #app.app
    m-vue
    m-hero
</template>

<script lang="ts">
import Vue from "vue";
import MVue from "@/components/MHeader.vue";
import MHero from "@/components/MHero.vue";

export default Vue.extend({
  components: {
    MVue,
    MHero
  }
});
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Nunito+Sans:wght@200&display=swap');

*
  margin 0
  padding 0

.app
  font-family 'Nunito Sans', sans-serif

h1, h2, h3, h4, h5, h6
  font-family 'Fjalla One', sans-serif
</style>
