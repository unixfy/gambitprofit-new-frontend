<template>
  <v-app style="background: magenta; font-family: 'Comic Sans MS', 'Comic Sans', 'Chalkboard SE', 'Comic Neue', cursive, sans-serif;">
    <Navbar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Footer from "../components/Footer";
export default {
  name: 'Base',
  components: {Footer}
}
</script>
