<template lang="pug">
  .card
    .card--logo
      img(:src="image" alt="logo")
    .card--title
      h4 {{title}}
    .card--paragraph
      p {{paragraph}}
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    image: { type: String, required: true },
    title: { type: String, required: true },
    paragraph: { type: String, required: true }
  }
});
</script>

<style lang="stylus">

.card
  max-width 300px
  margin 30px
  display flex
  flex-direction column
  align-items center

.card--logo
  margin-bottom 15px

.card--title
  font-size 1.5em
  margin-bottom 5px
  letter-spacing 2px
  font-weight 400

.card--paragraph
  font-size 1em
  text-align justify
</style>
