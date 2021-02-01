<template>
  <div>
    <v-parallax
      dark
      height="200"
      src="/bg.png"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="text-center"
          cols="12"
        >
          <h1 class="display-1 mb-4">
            Your Account
          </h1>
          <h4 class="subheading">
            Manage your account here.
          </h4>
        </v-col>
      </v-row>
    </v-parallax>

    <v-card class="mt-5">
      <v-card-title>
        Account Management
      </v-card-title>
      <v-card-subtitle>
        Manage your notification preferences.
      </v-card-subtitle>
      <v-card-text>
        <!-- display message if not logged in -->
        <div v-show="!authenticatedUser">
          <v-alert
            border="left"
            color="red"
            colored-border
            elevation="4"
            type="warning"
          >
            You are not logged in! To log in, use the controls below.
          </v-alert>

          <v-card flat>
            <v-card-text>
              <div id="firebaseui-auth-container"></div>
              <!-- Preloader for FirebaseUI -->
              <div id="loader">
                <v-progress-linear
                  color="info"
                  indeterminate
                ></v-progress-linear>
                Firebase is loading...
              </div>
            </v-card-text>
          </v-card>
        </div>
        <div v-if="authenticatedUser">
          <v-alert
            border="left"
            colored-border
            elevation="4"
            type="info"
          >
            Welcome, {{ authenticatedUser.email }}! You are logged in.
            <br>
            On this page,  you can subscribe to notifications when a play more profitable than Powerball is found. More features coming soon :)
          </v-alert>

          <v-card outlined class="my-3">
            <v-card-title>
              Subscribe to Email Notifications
            </v-card-title>
            <v-card-subtitle>
              Be notified for good plays at the email attached to your account.
            </v-card-subtitle>
            <v-card-text>
              <v-btn large color="primary">Subscribe</v-btn>
            </v-card-text>
          </v-card>

          <v-card outlined class="my-3">
            <v-card-title>
              Subscribe to Web Push Notifications
            </v-card-title>
            <v-card-subtitle>
              You will receive a notification on your browser when a good play is found.
            </v-card-subtitle>
            <v-card-text>
              <v-alert colored-border border="left" type="info" class="mb-3" elevation="3">
                Your browser will prompt you for consent when you click "Enable".
              </v-alert>

              <v-btn large color="primary">Enable</v-btn>
            </v-card-text>
          </v-card>

          <v-card outlined class="my-3">
            <v-card-title>
              Subscribe to Discord notifications
            </v-card-title>
            <v-card-subtitle>
              You will be mentioned when a good play is found.
            </v-card-subtitle>
            <v-card-text>
              <v-alert colored-border border="left" type="info" class="mb-3" elevation="3">
                Notifications are also available in the unofficial Swagbucks server and the Beermoney server.
              </v-alert>

              <v-btn large color="primary" rel="noopener" href="https://go.unixfy.net/hca" target="_blank">Join Discord Server</v-btn>
            </v-card-text>
          </v-card>

          <v-card outlined class="my-3">
            <v-card-title>
              Account Security
            </v-card-title>
            <v-card-text>

              <v-btn
                color="primary"
                elevation="2"
                large
                @click="logOut"
              >Sign out
              </v-btn>

              <v-btn
                color="primary"
                elevation="2"
                large
                @click.stop="accountSettingsDialog = true"
              >Account Settings
              </v-btn>
            </v-card-text>
          </v-card>
        </div>
      </v-card-text>
    </v-card>

    <!-- Account settings dialog (change pw/email/etc) -->
    <v-dialog
      v-model="accountSettingsDialog"
      width="500"
      persistent
      v-if="authenticatedUser"
    >
      <v-card>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>Account Settings</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon @click="accountSettingsDialog = false">
              <v-icon>
                mdi-close
              </v-icon>
            </v-btn>
          </v-toolbar>
        <v-card-text>
            <v-card outlined class="my-3">
              <v-card-title>Change Email</v-card-title>
              <v-card-text>
                <v-form onSubmit="return false;">
                  <p>Your current email: {{ authenticatedUser.email }}</p>
                  <v-text-field label="Email" type="email" outlined></v-text-field>
                  <v-btn
                    block
                    color="primary"
                    elevation="4"
                    type="submit"
                  >
                    Save
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
            <v-card outlined class="my-3">
              <v-card-title>Change Password</v-card-title>
              <v-card-text>
                <v-form onSubmit="return false;">
                  <v-text-field label="New Password" type="password" outlined></v-text-field>
                  <v-btn
                    block
                    color="primary"
                    elevation="4"
                    type="submit"
                  >
                    Save
                  </v-btn>
                </v-form>
              </v-card-text>

            </v-card>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="accountSettingsDialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div v-else></div>
  </div>
</template>

<script>
export default {
  name: "Account",
  component: true,
  head() {
    return {
      title: 'Account'
    }
  },
  data() {
    return {
      authenticatedUser: null,
      accountSettingsDialog: false
    }
  },
  methods: {
    logOut() {
      this.$fire.auth.signOut()
      this.authenticatedUser = false
      this.loadFirebaseUi()
    },
    loadFirebaseUi() {
      if (process.browser && !this.authenticatedUser) {
        const firebaseui = require('firebaseui')
        require("firebaseui/dist/firebaseui.css")
        // https://github.com/firebase/firebaseui-web/issues/216
        // for below version 7
        // const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(this.$fireAuth)
        // for version 7 and above
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(this.$fire.auth)


// Firebase UI configuration
        ui.start('#firebaseui-auth-container', {
          callbacks: {
            uiShown: function () {
              // The widget is rendered.
              // Hide the loader.
              document.getElementById('loader').style.display = 'none';
            },
            signInSuccess: function () {
              return false;
            }
          },
          signInOptions: [
            {
              provider: this.$fireModule.auth.EmailAuthProvider.PROVIDER_ID,
              requireDisplayName: false,
            },
            {
              provider: this.$fireModule.auth.GoogleAuthProvider.PROVIDER_ID,
            }
          ],
          // Other config options...
        });
      }
    }
  },
  created() {
    this.$fire.auth.onAuthStateChanged(user => (this.authenticatedUser = user))
  },
  mounted() {
    this.loadFirebaseUi()
  }
}
</script>
<style>
/* Prevent FirebaseUI ULs from getting padding on the left */
.v-application ul {
  padding: 0 !important;
}
</style>
