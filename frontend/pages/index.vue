<template>
  <div>
    <!-- kamala dialog -->
    <v-dialog
      v-model="kamala"
      persistent
    >
      <v-card>
        <v-card-title class="headline">
          Stan kamala harris
        </v-card-title>

        <v-card-text>
          <v-img src="/kamala.png" contain max-height="720"></v-img>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            @click="kamala = false"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-parallax
      height="400"
      dark
      src="/bg.gif"
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
            Welcome to Kamala Harris land!!
          </h1>
          <h4 class="subheading">
            Gambit may not always profit but she always profits in my heart <33
          </h4>
        </v-col>
      </v-row>
    </v-parallax>

    <span class="my-4"></span>

    <v-card flat outlined>
      <v-card-title>Latest Gambit Plays</v-card-title>
      <v-card-subtitle>Data is retrieved from Hillary Clinton's email server.</v-card-subtitle>
      <v-card-text>
        <v-alert
          border="left"
          text
          type="error"
          elevation="3"
          color="red"
        >
          <b>this site has been HAXXED by KAMALA HARRIS GANGG</b>
          <br>
          KAMALA HARRIS NUMBER ONE
          <br>
          WE STAN KAMALA HARRIS
          <br>
          SIT DOWN ELIZABETH WARREN JOE BIDEN AMY KLOBUCHAR
          <br>
          <h1>I LOVE KAMALA HARRIS</h1>
        </v-alert>
        <PlaysDisplay />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Index",
  component: true,
  head() {
    return {
      title: 'Home'
    }
  },
  data() {
    return {
      kamala: true
    }
  }
}
</script>

<style>
.v-parallax__image {
  display: inline !important;
  position: absolute !important;
  transform: translate(-50%, 0px) !important;
  height: 100% !important;
  width: 100% !important;
}
</style>
