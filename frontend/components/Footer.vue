<template>
  <v-footer
    padless
    class="mt-5"
  >
    <v-card
      class="flex"
      flat
      tile
    >
<!--      <v-card-title class="blue white&#45;&#45;text">-->

<!--      </v-card-title>-->
      <v-card-text class="teal white--text py-5 text-center">
        &copy; 2020-{{ new Date().getFullYear() }} <strong>GambitProfit</strong> - Made with
        <v-icon class="red--text">mdi-heart</v-icon>
        by <a href="https://unixfy.net" target="_blank" rel="noopener" style="color:white;">Unixfy</a>.
        <br/>
        Proudly powered by <a href="https://nuxtjs.org" target="_blank" rel="noopener" style="color:white;">Nuxt.js</a> and <a
        href="https://strapi.io" target="_blank" rel="noopener" style="color:white;">Strapi</a>. Logo from <a href="https://twemoji.twitter.com/" target="_blank" rel="noopener" style="color:white;">
        Twitter Twemoji</a>.
      </v-card-text>
    </v-card>
  </v-footer>
</template>
