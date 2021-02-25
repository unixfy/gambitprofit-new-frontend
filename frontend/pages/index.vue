<template>
  <div>
    <v-parallax
      height="200"
      dark
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
            Welcome to GambitProfit
          </h1>
          <h4 class="subheading">
            The easy way to profit from Gambit Rewards!
          </h4>
        </v-col>
      </v-row>
    </v-parallax>

    <span class="my-4"></span>

    <v-card flat outlined>
      <v-card-title>Latest Gambit Plays</v-card-title>
      <v-card-subtitle>Data is retrieved from our API.</v-card-subtitle>
      <v-card-text>
        <v-alert
          border="left"
          text
          type="info"
          elevation="3"
          color="purple"
        >
          <b>Gambit Rewards update 02/25</b>: Swagbucks have announced that Gambit Rewards redemptions will no longer count for daily goals effective 1 March. This makes Gambit hedging much less viable.
          <br>
          I want to say thanks to all GambitProfit users for your support and especially to those who have donated. It means a lot to me ❤️
          <br>
          This site will remain up for the forseeable future; however, development of new features is suspended for now. 
          <br>
          - Unixfy
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
  }
}
</script>
