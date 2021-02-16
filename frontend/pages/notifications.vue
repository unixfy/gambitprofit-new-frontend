<template>
  <div>
    <v-card class="my-3" outlined>
      <v-card-title>
        Subscribe to Email Notifications
      </v-card-title>
      <v-card-subtitle>
        Be notified for good plays at an email that you choose.
      </v-card-subtitle>
      <v-card-text>
        <v-dialog
          v-model="emailsubdialog"
          fullscreen
          hide-overlay
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              color="primary"
              large
            >Subscribe
            </v-btn>
          </template>

          <v-card>
            <v-toolbar
              color="primary"
              dark
            >
              <v-btn
                dark
                icon
                @click="emailsubdialog = false"
              >
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>Email subscription form</v-toolbar-title>
            </v-toolbar>

            <v-card-text height="100%" style="height: 90vh;">
              <iframe src="https://api.elasticemail.com/form?lid=snWq9F5E-tsWprvP2BqKmQ2" frameborder="0" style="display: block; width: 100%; height: 100%;"/>
            </v-card-text>
          </v-card>
        </v-dialog>

      </v-card-text>
    </v-card>

<!--    <v-card class="my-3" outlined>-->
<!--      <v-card-title>-->
<!--        Subscribe to Web Push Notifications-->
<!--      </v-card-title>-->
<!--      <v-card-subtitle>-->
<!--        You will receive a notification on your browser when a good play is found.-->
<!--      </v-card-subtitle>-->
<!--      <v-card-text>-->
<!--        <v-alert border="left" class="mb-3" colored-border elevation="3" type="info">-->
<!--          Your browser will prompt you for consent when you click "Enable".-->
<!--        </v-alert>-->

<!--        <v-btn color="primary" large @click="authorizeWebPush">Enable</v-btn>-->
<!--      </v-card-text>-->
<!--    </v-card>-->

    <v-card class="my-3" outlined>
      <v-card-title>
        Subscribe to Discord notifications
      </v-card-title>
      <v-card-subtitle>
        You will be mentioned when a good play is found.
      </v-card-subtitle>
      <v-card-text>
        <v-alert border="left" class="mb-3" colored-border elevation="3" type="info">
          Notifications are also available in the unofficial Swagbucks server and the Beermoney server.
        </v-alert>

        <v-btn color="primary" href="https://go.unixfy.net/hca" large rel="noopener" target="_blank">Join Discord Server
        </v-btn>
      </v-card-text>
    </v-card>
  </div>

</template>
<script>
export default {
  name: "Notifications",
  component: true,
  head() {
    return {
      title: 'Notifications'
    }
  },
  data() {
    return {
      emailsubdialog: false
    }
  },
  methods: {
    authorizeWebPush() {

    }
  }
}
</script>
