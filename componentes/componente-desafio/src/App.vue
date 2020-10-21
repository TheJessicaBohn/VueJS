<template>
  <v-app>
    <app-menu />
    <app-toolbar />
    <v-content>
      <app-carousel />
    </v-content>
    <app-footer />
  </v-app>
</template>

<script>
import Carousel from "./Carousel.vue";
import Footer from "./Footer.vue";
import Menu from "./Menu.vue";
import Toolbar from "./Toolbar.vue";

export default {
  components: {
    "app-carousel": Carousel,
    "app-footer": Footer,
    "app-menu": Menu,
    "app-toolbar": Toolbar,
  },
};
</script>
