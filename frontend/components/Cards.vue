<template>
  <ClientOnly>
    <v-app>
      <!-- Configuration UI -->
      <v-card :loading="preload" class="mb-4" elevation="5">
        <v-card-title>
          Settings
          <v-spacer></v-spacer>

          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" icon large @click="loadData">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </template>
            <span>Reload data</span>
          </v-tooltip>
        </v-card-title>
        <v-card-subtitle>
          Configure the application.
        </v-card-subtitle>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6">
              <v-card outlined>
                <v-card-title>Token Amount</v-card-title>
                <v-card-subtitle>The number of tokens you wish to bet.</v-card-subtitle>
                <v-card-text>
                  <!--                  This form will be disabled if the rules are not met -->
                  <v-form v-model="tokens_form_valid">
                    <v-slider
                      v-model="tokens"
                      :max="max_tokens"
                      :min="min_tokens"
                      :rules="tokens_field_rules"
                      class="align-center mt-0 pt-0"
                    >
                      <template v-slot:append>
                        <v-text-field
                          v-model="tokens"
                          :rules="tokens_field_rules"
                          class="mt-0 pt-0"
                          single-line
                          type="number"
                        ></v-text-field>
                      </template>
                    </v-slider>

                    <v-btn
                      :disabled="!tokens_form_valid"
                      :loading="preload"
                      block
                      color="primary"
                      elevation="4"
                      small
                      @click="setTokens"
                    >
                      Save
                    </v-btn>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="12" md="6">
              <v-card outlined>
                <v-card-title>
                  Search & Sort
                </v-card-title>
                <v-card-subtitle>Find plays by name, date, or odds.</v-card-subtitle>
                <v-card-text>
                  <v-text-field
                    class="mt-0 pt-0"
                    clearable
                    label="Search..."
                  >
                  </v-text-field>

                  <v-btn
                    class="white--text"
                    color="primary"
                    elevation="4"
                    small
                  >Sort by date
                  </v-btn>

                  <v-btn
                    class="white--text"
                    color="primary"
                    elevation="4"
                    small
                  >Sort by no-risk profit
                  </v-btn>

                  <v-switch
                    v-model="show_all"
                    label="Show all plays?"
                    @click="loadData"
                  ></v-switch>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <!-- Preloader-->
      <div v-if="preload">
        <v-alert type="info">
          Please wait for the data to load. (Settings are disabled while loading.)
        </v-alert>
        <v-progress-linear
          color="info"
          indeterminate
        ></v-progress-linear>
      </div>

      <!-- Message if error occurs -->
      <div v-else-if="error">
        <v-alert type="error">
          Oops, an error occurred: {{ error }}
          <br>
          Try refreshing the page.
        </v-alert>
      </div>

      <!-- Message if no plays -->
      <div v-else-if="!plays.length && !preload">
        <v-alert type="warning">
          Oops, there are no profitable plays at this time. Try showing all plays.
        </v-alert>
      </div>

      <!-- Grid of plays -->
      <div v-else class="sorting-grid mt-4">
        <v-row>
          <v-col v-for="(play, index) in plays" :key="play.PlayUrl" cols="12" lg="4" sm="6"
                 style="width:100% !important;" xl="3"
                 xs="12">
            <v-card
              v-show="!preload"
              class="grid-item mx-auto"
              width="400"
            >
              <v-card-title>
                <p class="text-truncate">{{ play.game_name }}</p>
              </v-card-title>
              <v-card-subtitle>
                {{ play.time }}
              </v-card-subtitle>
              <v-card-text>
                <v-chip
                  v-show="play.Calc.HighRisk.Recommended"
                  class="my-1"
                  color="red"
                  text-color="white"
                >
                  <v-icon left>{{ `${generateIcon(play.Calc.HighRisk.ProfitPerCard)}` }}</v-icon>
                  {{ play.Calc.HighRisk.ProfitPerCard }}% High Risk profit
                </v-chip>

                <v-chip
                  v-show="play.Calc.MedRisk.Recommended"
                  class="my-1"
                  color="orange"
                  text-color="white"
                >
                  <v-icon left>{{ `${generateIcon(play.Calc.MedRisk.ProfitPerCard)}` }}</v-icon>
                  {{ play.Calc.MedRisk.ProfitPerCard }}% Med Risk profit
                </v-chip>

                <v-chip
                  v-show="play.Calc.NoRisk.Recommended || show_all"
                  class="my-1"
                  color="green"
                  text-color="white"
                >
                  <v-icon left>{{ `${generateIcon(play.Calc.NoRisk.ProfitPerCard)}` }}</v-icon>
                  <div class="noriskprofit">{{ play.Calc.NoRisk.ProfitPerCard }}</div>
                  % No Risk profit
                </v-chip>
              </v-card-text>
              <v-card-actions>
                <v-row>
                  <v-col cols="12" lg="6">
                    <v-dialog max-width="600"
                              transition="dialog-top-transition">
                      <template v-slot:activator="{on, attrs}">
                        <v-btn
                          v-bind="attrs"
                          v-on="on"
                          class="white--text"
                          color="primary"
                          elevation="1"
                          small
                          style="width:100%;"
                        >
                          <v-icon
                            class="mr-2">
                            mdi-information
                          </v-icon>
                          More Info
                        </v-btn>
                      </template>
                      <template v-slot:default="dialog">
                        <v-card>
                          <v-toolbar
                            class="white--text"
                            color="info"
                          >{{ play.full_game_name }}
                            <v-spacer></v-spacer>
                            <v-btn
                              color="white"
                              icon
                              @click="dialog = false"
                            >
                              <v-icon>mdi-close</v-icon>
                            </v-btn>
                          </v-toolbar>
                          <v-card-text>
                            <v-list three-line>
                              <div v-show="play.Calc.HighRisk.Recommended">
                                <v-list-item>
                                  <v-list-item-content>
                                    <v-list-item-icon>
                                      <v-chip
                                        class="white--text mr-3"
                                        color="red"
                                        label
                                      >
                                        High Risk: {{ play.Calc.HighRisk.ProfitPerCard }}% profit
                                        <v-icon>{{ `${generateIcon(play.Calc.HighRisk.ProfitPerCard)}` }}</v-icon>
                                      </v-chip>
                                    </v-list-item-icon>
                                    <v-list-item-subtitle>
                                      {{ play.Calc.HighRisk.TeamToBetOn }} - {{ play.Calc.HighRisk.BetAmount }} tokens
                                    </v-list-item-subtitle>
                                  </v-list-item-content>
                                </v-list-item>
                                <v-divider></v-divider>
                              </div>
                              <div v-show="play.Calc.MedRisk.Recommended">
                                <v-list-item>
                                  <v-list-item-content>
                                    <v-list-item-icon>
                                      <v-chip
                                        class="white--text mr-3"
                                        color="orange"
                                        label
                                      >
                                        Med Risk: {{ play.Calc.MedRisk.ProfitPerCard }}% profit
                                        <v-icon>{{ `${generateIcon(play.Calc.MedRisk.ProfitPerCard)}` }}</v-icon>
                                      </v-chip>
                                    </v-list-item-icon>
                                    <v-list-item-subtitle>
                                      {{ play.Calc.MedRisk.Team1ToBetOn }} - {{ play.Calc.MedRisk.Team1BetAmount }}
                                      tokens
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>
                                      {{ play.Calc.MedRisk.Team2ToBetOn }} - {{ play.Calc.MedRisk.Team2BetAmount }}
                                      tokens
                                    </v-list-item-subtitle>
                                  </v-list-item-content>
                                </v-list-item>
                                <v-divider></v-divider>
                              </div>
                              <div v-show="play.Calc.NoRisk.Recommended || show_all">
                                <v-list-item>
                                  <v-list-item-content>
                                    <v-list-item-icon>
                                      <v-chip
                                        class="white--text mr-3"
                                        color="green"
                                        label
                                      >
                                        No Risk: {{ play.Calc.NoRisk.ProfitPerCard }}% profit
                                        <v-icon>{{ `${generateIcon(play.Calc.NoRisk.ProfitPerCard)}` }}</v-icon>
                                      </v-chip>
                                    </v-list-item-icon>
                                    <v-list-item-subtitle>
                                      {{ play.Team1.Name }} - {{ play.Calc.NoRisk.Team1BetAmount }} tokens
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle>
                                      {{ play.Team2.Name }} - {{ play.Calc.NoRisk.Team2BetAmount }} tokens
                                    </v-list-item-subtitle>
                                    <v-list-item-subtitle v-show="play.Draw.Reward">
                                      Draw - {{ play.Calc.NoRisk.DrawBetAmount }} tokens
                                    </v-list-item-subtitle>
                                  </v-list-item-content>
                                </v-list-item>
                                <v-divider></v-divider>
                              </div>
                            </v-list>
                          </v-card-text>
                          <v-card-actions>
                            <v-btn
                              :href="play.PlayUrl"
                              block
                              class="white--text"
                              color="primary"
                              elevation="1"
                              large
                              target="_blank"
                              text
                            >
                              <v-icon
                                class="mr-2">
                                mdi-link
                              </v-icon>
                              Open on Gambit
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </template>
                    </v-dialog>
                  </v-col>
                  <v-col cols="12" lg="6">
                    <v-btn
                      :href="play.PlayUrl"
                      class="white--text"
                      color="primary"
                      elevation="1"
                      small
                      style="width:100%;"
                      target="_blank"
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
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-app>
  </ClientOnly>
</template>
<script>
import moment from 'moment'

export default {
  name: 'Table',
  data() {
    return {
      plays: [],
      error: null,
      // Whether the page is not loaded yet (ie the preloader should be shown)
      preload: true,
      // Init tokens as 1 and it will be set later from the localstorage
      tokens: 1,
      // Whether all plays are shown
      show_all: false,

      tokens_form_valid: false,
      min_tokens: 50,
      max_tokens: 200000,
      // Rules for the tokens amount field
      tokens_field_rules: [
        v => v >= this.min_tokens || `Min ${this.min_tokens}`,
        v => v <= this.max_tokens || `Max ${this.max_tokens}`,
      ],
    }
  },
  async mounted() {
    try {
      // Load token amount from localstorage
      this.tokens = localStorage.getItem("tokens") || 1000
      console.log(this.tokens)
      await this.loadData()
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
    },
    async loadData() {
      this.plays = []
      this.preload = true
      this.rawdata = await this.$strapi.$http.$get(`gambit-plays/tokens/${this.tokens}?_limit=100&_sort=createdAt:DESC`)
      this.plays = this.processPlays(this.rawdata)
      this.preload = false
    },
    processPlays(rawdata) {
      for (let i = 0; i < rawdata.length; i++) {
        // Drop all items which are not profitable, IF show_all is false
        if (this.show_all === false && rawdata[i].Calc.Profitable === false) {
          rawdata.splice(i, 1)
          i--
          // Drop all items which have already started
        } else if (moment(rawdata[i].PlayDate).diff() < -1) {
          rawdata.splice(i, 1)
          i--
        } else {
          // Add some things that have to be dynamically generated
          rawdata[i].full_game_name = `${rawdata[i].Team1.Name} (${rawdata[i].Team1.Reward}) v. ${rawdata[i].Team2.Name} (${rawdata[i].Team2.Reward}) ${rawdata[i].Draw.Reward ? "v. Draw (" + rawdata[i].Draw.Reward + ")" : ""}`
          rawdata[i].game_name = `${rawdata[i].Team1.Name} vs ${rawdata[i].Team2.Name} ${rawdata[i].Draw.Reward ? "vs Draw" : ""}`
          rawdata[i].time = moment(rawdata[i].PlayDate).calendar()
        }
      }
      return rawdata
    },
    setTokens() {
      localStorage.setItem("tokens", this.tokens)
      this.loadData()
    },
  }
}
</script>
