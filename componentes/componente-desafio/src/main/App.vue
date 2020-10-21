<template>
  <v-app>
    <appMenu />
    <app-toolbar />
    <v-content>
      <Carousel />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Carousel from "@/components/widgets/Carousel.vue";
import Footer from "../components/template/Footer.vue";
import Menu from "../components/template/Menu.vue";
import Toolbar from "../components/template/Toolbar.vue";

export default {
  components: {
    Carousel,
    Footer: Footer,
    appMenu: Menu,
    appToolbar: Toolbar,
  },
};
</script>
