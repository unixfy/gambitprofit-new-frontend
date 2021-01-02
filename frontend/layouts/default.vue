<template>
  <v-app dark>
    <Navbar />
    <v-main>
      <v-container fluid>
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
