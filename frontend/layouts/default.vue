<template>
  <v-app>
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
