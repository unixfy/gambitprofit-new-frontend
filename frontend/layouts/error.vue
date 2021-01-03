<template>
  <v-app>
    <v-card
      elevation="2"
    >
      <v-card-title>
        <h1>Houston, we've got a problem.</h1>
      </v-card-title>
      <v-card-subtitle>
        An error occurred in this application.
      </v-card-subtitle>
      <v-card-text>
        <v-alert
          prominent
          transition="scale-transition"
          type="error"
        >
          <h3 v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </h3>
          <span v-if="error.statusCode === 404">
        The page you requested could not be found.
      </span>
          <h3 v-else>
            {{ otherError }}
          </h3>
          <span v-else>
            Try refreshing the page.
          </span>
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <v-btn
          color="blue"
          outlined
          text
          to="/"
        >
          Return home
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
export default {
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An unknown error occurred.'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
