<template>
  <v-app>
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
        <Cards/>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "Index",
  component: true
}
</script>
