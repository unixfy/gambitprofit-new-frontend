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

            <v-card-title>
              Please complete your details below.
            </v-card-title>
            <v-card-text>

              <form action="https://api.elasticemail.com/contact/add?version=2" data-id="lrTlOTKWzl" method="post">
                <fieldset style="border:none;" class="webform-custominputs">
                  <div class="inputs">
                    <v-text-field maxlength="60" name="email" type="email" required label="Your email (required)"></v-text-field>
                    <v-text-field maxlength="60" name="field_firstname" type="text" label="Your first name (optional)"></v-text-field>
                    <v-text-field maxlength="60" name="field_lastname" type="text" label="Your last name (optional)"></v-text-field>
                  </div>
                  <div class="webform-lists" style="display: none;">
                    <div style="display:flex;" class="checkboxes js-GambitProfit Notifications">
                      <label class="container-box">
                        <input type="checkbox" name="publiclistid" id="zLnnpSHH" value="3cf5bde3-ec26-4b98-8d31-02f9c78bdb6b" checked="checked">
                      </label>
                      <label class="publiclistlabel" for="zLnnpSHH">GambitProfit Notifications
                      </label>
                    </div>
                  </div>
                  <p id="ewf_datadisclaimer">By clicking subscribe, you agree to receive emails from us. Your data is processed pursuant to our privacy policy. You may unsubscribe at any time.
                  </p>
                </fieldset>
                <fieldset class="webform-options style-updated" style="border:none;">
                  <div id="trackconsentscript">
                  </div>
                  <v-btn type="submit" color="primary" large name="submit">Subscribe</v-btn>
                  <input type="hidden" name="publicaccountid" value="83063d53-27de-4cba-a88b-070390ed84d0">
                  <input type="hidden" name="publicformid" value="bc78628b-9791-46fe-b3f4-f2575f9b1099">
                  <input type="hidden" name="returnUrl" value="https://gambitprofit.com/successfully-subscribed/">
                  <input type="hidden" name="activationReturnUrl" value="https://gambitprofit.com/subscription-confirmed/">
                  <input type="hidden" name="alreadyactiveurl" value="https://gambitprofit.com/already-subscribed/">
                  <input type="hidden" name="activationTemplate" value="GambitProfitConfirmationEmail">
                  <input type="hidden" name="source" value="WebForm">
                  <input type="hidden" id="ewf_captcha" name="captcha" value="true">
                  <input id="ewf_verifyEmails" type="hidden" name="verifyemail" value="false">
                </fieldset>
              </form>

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
