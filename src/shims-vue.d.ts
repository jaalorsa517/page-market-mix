declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "*.png" {
  const value: any;
  export = value;
}

declare module "v-animate-css";
declare module "vue-carousel";
