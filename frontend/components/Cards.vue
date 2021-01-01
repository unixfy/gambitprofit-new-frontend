<template>
  <v-app>
    <div class="container">
      <v-card class="my-2" elevation="5">
        <v-card-title>
          Settings
        </v-card-title>
        <v-card-subtitle>
          Configure the application.
        </v-card-subtitle>
      </v-card>
      <!-- Preloader-->
      <v-alert type="info" v-if="preload">
        Please wait for the data to load...
      </v-alert>
      <v-progress-linear
        indeterminate
        color="blue"
        v-if="preload"
      ></v-progress-linear>

      <div v-if="error">
        <v-alert type="error">
          Oops, an error occurred: {{ error }}
          <br>
          Try refreshing the page.
        </v-alert>
      </div>

      <div v-else-if="!plays.length && !preload">
        <v-alert type="warning">
          Oops, there are no profitable plays at this time.
        </v-alert>
      </div>

      <div class="sorting-grid" v-else>
          <v-row>
            <v-col cols="12" sm="3" md="4" v-for="play in plays" :key="play.PlayUrl">
              <v-card
                v-if="!preload"
                width="400"
                class="grid-item mx-auto"
              >
                <v-card-title>
                  <p>{{ play.game_name }}</p>
                </v-card-title>
                <v-card-subtitle>
                  {{ play.time }}
                </v-card-subtitle>
                <v-card-text>
                  <v-chip
                    class="my-1"
                    color="red"
                    text-color="white"
                    v-if="play.Calc.HighRisk.Recommended"
                  >
                    <v-icon left>{{ `${generateIcon(play.Calc.HighRisk.ProfitPerCard)}` }}</v-icon>
                    {{ play.Calc.HighRisk.ProfitPerCard }}% High Risk profit
                  </v-chip>

                  <v-chip
                    class="my-1"
                    color="orange"
                    text-color="white"
                    v-if="play.Calc.MedRisk.Recommended"
                  >
                    <v-icon left>{{ `${generateIcon(play.Calc.MedRisk.ProfitPerCard)}` }}</v-icon>
                    {{ play.Calc.MedRisk.ProfitPerCard }}% Med Risk profit
                  </v-chip>

                  <v-chip
                    class="my-1"
                    color="green"
                    text-color="white"

                  >
                    <v-icon left>{{ `${generateIcon(play.Calc.NoRisk.ProfitPerCard)}` }}</v-icon>
                    <div class="noriskprofit">{{ play.Calc.NoRisk.ProfitPerCard  }}</div>% No Risk profit
                  </v-chip>
                </v-card-text>
                <v-card-actions>
                  <v-row>
                    <v-col cols="12" lg="6">
                      <v-btn
                        small
                        elevation="1"
                        color="blue"
                        class="white--text"
                        @click="reveal = true"
                        style="width:100%;"
                      >
                        <v-icon
                          class="mr-2">
                          mdi-information
                        </v-icon>
                        Bet Amounts
                      </v-btn>
                    </v-col>
                    <v-col cols="12" lg="6">
                      <v-btn
                        small
                        elevation="1"
                        :href="play.PlayUrl"
                        target="_blank"
                        color="green"
                        class="white--text"
                        style="width:100%;"
                      >
                        <v-icon
                          class="mr-2">
                          mdi-link
                        </v-icon>
                        Open on Gambit
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-actions>

                <!--          Hidden card showing bet amounts! -->
                <v-expand-transition>
                  <v-card
                    v-if="reveal"
                    class="transition-fast-in-fast-out v-card--reveal"
                    style="height: 100%;  position: absolute; bottom:0;"
                  >
                    <v-card-title>
                      <p>Bet Amounts</p>
                      <v-spacer></v-spacer>
                      <v-btn
                        small
                        color="blue"
                        @click="reveal = false"
                        class="mt-0 pt-0 white--text"
                      >
                        Close
                      </v-btn>
                    </v-card-title>
                    <v-card-text class="pb-0">
                      <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
                    </v-card-text>
                  </v-card>
                </v-expand-transition>
              </v-card>
            </v-col>
          </v-row>
      </div>
    </div>
  </v-app>
</template>
<script>
import moment from 'moment'

let profitable_only = false

function processPlays(rawdata) {
  for (let i = 0; i < rawdata.length; i++) {
    // Drop all items which are not profitable, IF profitable_only is true
    if (profitable_only && rawdata[i].Calc.Profitable === false) {
      rawdata.splice(i, 1)
      i--
      // Drop all items which have already started
    } else if (moment(rawdata[i].PlayDate).diff() < -1) {
      rawdata.splice(i, 1)
      i--
    } else {
      // Add some things that have to be dynamically generated
      rawdata[i].game_name = `${rawdata[i].Team1.Name} (${rawdata[i].Team1.Reward}) v. ${rawdata[i].Team2.Name} (${rawdata[i].Team2.Reward}) ${rawdata[i].Draw.Reward ? "v. Draw (" + rawdata[i].Draw.Reward + ")" : ""}`
      rawdata[i].time = moment(rawdata[i].PlayDate).calendar()
    }
  }
  return rawdata
}

export default {
  name: 'Table',
  data() {
    return {
      plays: [],
      error: null,
      preload: true,
      reveal: false
    }
  },
  async mounted() {
    try {
      this.rawdata = await this.$strapi.find('gambit-plays', {
        _limit: 500,
        _sort: 'createdAt:DESC'
      })
      this.plays = processPlays(this.rawdata)
      this.preload = false

    } catch (error) {
      this.preload = false
      this.error = error
    }
  },
  methods: {
    generateIcon(profit) {
      if (profit > 1) return 'mdi-check-circle'
      else if (profit >= 0) return 'mdi-alert'
      else return 'mdi-close-octagon'
    }
  }
}
</script>
