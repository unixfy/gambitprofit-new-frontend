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
          <b>Gambit Rewards update 04/02/2021</b>: Due to "illicit activity", there are no more discounts on Gambit gift cards. <b>Hedging is therefore not possible</b>.
          <br>
          This site will remain up for the forseeable future; however, development of new features is suspended for now.
          <div class="py-3"></div>
          <b>GambitProfit update 01/01/2022</b>: Now you can view past Gambit plays through the Historical Data section of settings. Note that the profit amounts are NOT accurate! (They are calculated with a 0% discount)
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
