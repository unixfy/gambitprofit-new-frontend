<template>
  <ClientOnly>
    <div>
      <!-- Configuration UI -->
      <v-card class="mb-4" elevation="5">
        <v-card-title>
          Settings
          <v-spacer></v-spacer>

          <v-tooltip left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" aria-label="Reload data" icon large @click="loadData">
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
                    <v-text-field
                      v-model="tokens"
                      :disabled="preload"
                      :rules="tokens_field_rules"
                      aria-label="Token Amount"
                      class="mt-0 pt-0"
                      dense
                      hide-details="auto"
                      label="Token Amount"
                      outlined
                      single-line
                      suffix="tokens"
                      type="number"
                    >
                    </v-text-field>

                    <v-btn-toggle
                      v-model="tokens"
                      :disabled="preload"
                      class="my-3"
                      color="primary"
                      dense
                      style="width:100%;"
                    >
                      <v-btn value="1000">
                        1000
                      </v-btn>

                      <v-btn value="2500">
                        2500
                      </v-btn>

                      <v-btn value="5000">
                        5000
                      </v-btn>

                      <v-btn value="10000">
                        10000
                      </v-btn>
                    </v-btn-toggle>

                    <v-btn
                      :disabled="!tokens_form_valid || preload"
                      block
                      color="primary"
                      elevation="4"
                      large
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
                  <v-form onSubmit="return false;" @submit="loadData">
                    <v-text-field
                      v-model="search_term"
                      :disabled="preload"
                      append-icon="mdi-magnify"
                      class="mt-0 pt-0"
                      clearable
                      dense
                      hide-details="auto"
                      label="Search by name/URL"
                      outlined
                      @click:append="loadData"
                      @click:clear="loadData"
                    >
                    </v-text-field>
                  </v-form>

                  <p>Sort by:</p>
                  <v-btn-toggle
                    v-model="sort_by"
                    color="primary"
                    dense
                    elevation="4"
                    mandatory
                  >

                    <v-btn
                      :disabled="preload"
                      @click="loadData"
                    >
                      Date
                    </v-btn>
                    <v-btn
                      :disabled="preload"
                      @click="loadData"
                    >
                      Profit
                    </v-btn>
                  </v-btn-toggle>

                  <v-switch
                    v-model="show_all"
                    dense
                    label="Show all plays?"
                    @click="loadData"
                  ></v-switch>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <!-- Toggle between cards and table -->
      <div class="mb-5">
        <v-btn-toggle v-model="display_mode" color="primary" mandatory>
          <v-btn>
            <v-icon left>mdi-view-grid-outline</v-icon>
            Cards
          </v-btn>
          <v-btn>
            <v-icon left>mdi-table</v-icon>
            Table
          </v-btn>
        </v-btn-toggle>
      </div>

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
      <!-- We have to check for undefined FIRST because the search function returns an empty array if no results -->
      <div v-else-if="(plays === undefined || plays.length === 0) && !preload">
        <v-alert type="warning">
          Oops, no plays were found. Try showing all plays and/or changing your search terms.
        </v-alert>
      </div>

      <!-- Grid of plays - cards layout -->
      <div v-else-if="display_mode === 0 && !preload" class="sorting-grid mt-4">
        <v-row>
          <v-col v-for="(play, index) in plays" :key="play.PlayUrl" cols="12" lg="4" sm="6"
                 style="width:100% !important;" xl="3"
                 xs="12">
            <SingleCard :play="play" :show_all="show_all"/>
          </v-col>
        </v-row>
      </div>

      <!-- Grid of plays - Table layout -->
      <v-data-table
        v-else
        :headers="headers"
        :items="plays"
        :server-items-length="plays.length"
        calculate-widths
        class="elevation-3"
        disable-filtering
        disable-sort
        fixed-header
        item-key="PlayUrl"
        show-expand
        single-expand
      >
        <template v-slot:item.profitpercard="{ item }">
          <ProfitChips :play="item" :show_all="show_all"/>
        </template>
        <!-- URL open button -->
        <template v-slot:item.PlayUrl="{ item }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                :href="item.PlayUrl"
                aria-label="Open on Gambit Rewards"
                icon
                rel="noopener"
                target="_blank"
              >
                <v-icon>mdi-open-in-new</v-icon>
              </v-btn>
            </template>
            <span>Open in GambitRewards</span>
          </v-tooltip>
        </template>
        <template v-slot:expanded-item="{ headers, item }">
          <td :colspan="headers.length" class="py-1">
            <v-list>
              <BetAmountsList :play="item" :show_all="show_all"></BetAmountsList>
            </v-list>
          </td>
        </template>
      </v-data-table>

    </div>
  </ClientOnly>
</template>
<script>
import moment from 'moment'
import Fuse from 'fuse.js'
import BetAmountsList from "./BetAmountsList";
import ProfitChips from "./ProfitChips";

export default {
  name: 'Cards',
  components: {ProfitChips, BetAmountsList},
  component: true,
  data() {
    return {
      plays: [],
      error: null,
      // Whether the page is not loaded yet (ie the preloader should be shown)
      preload: true,
      // Init tokens amount as 1 and it will be set later from the localstorage
      tokens: 1,
      // Whether all plays are shown by default
      show_all: true,
      // Init form validation
      tokens_form_valid: false,
      // Whether cards or table is displayed
      display_mode: 0,

      // Configure max/min for the tokens field
      min_tokens: 50,
      max_tokens: 200000,
      // Rules for the tokens amount field
      tokens_field_rules: [
        v => v >= this.min_tokens || `Min ${this.min_tokens}`,
        v => v <= this.max_tokens || `Max ${this.max_tokens}`,
      ],

      // Default sort
      // 0: Date, 1: NoRisk Profit
      sort_by: 1,

      // Search
      search_term: "",

      // Configuration for FuseJS
      fuse_options: {
        shouldSort: false,
        keys: ['PlayUrl', 'Team1.Name', 'Team2.Name']
      },

      // Table config
      headers: [
        {
          text: 'Play Name',
          align: 'start',
          value: 'full_game_name',
          groupable: false
        },
        {
          text: 'Play Time',
          value: 'time',
          groupable: false
        },
        {
          text: 'Profit?',
          value: 'profitpercard',
          groupable: true
        },
        {
          text: 'Link',
          value: 'PlayUrl',
        },
        {
          value: 'data-table-expand',
          align: 'end'
        }
      ]
    }
  },
  async mounted() {
    try {
      // Load token amount from localstorage
      this.tokens = localStorage.getItem("tokens") || 1000
      await this.loadData()
    } catch (error) {
      this.preload = false
      this.error = error
    }
  },
  methods: {
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

      // Handle sorting
      if (this.sort_by === 0) {
        // Sort by date (using lexicographical comparison), nearest to farthest
        rawdata.sort(function (a, b) {
          let dateA = a.PlayDate
          let dateB = b.PlayDate

          if (dateA < dateB) return -1;
          if (dateB > dateA) return 1;
          return 0;
        })
      } else if (this.sort_by === 1) {
        // Sort by no-risk profit amount, biggest to smallest
        rawdata.sort(function (a, b) {
          let profitA = a.Calc.NoRisk.ProfitPerCard
          let profitB = b.Calc.NoRisk.ProfitPerCard

          return profitB - profitA
        })
      }

      // Handle searching using Fuse library <3
      if (this.search_term) {
        let fuse = new Fuse(rawdata, this.fuse_options)

        // Results array from Fuse
        let searcheddata = fuse.search(this.search_term)

        // Clear rawdata, because we will fill it again in a moment
        rawdata = []

        // Fuse returns search items in a shitty way so we need to postprocess it
        // More or less, every object in the results array has an "items" key which is what we want.
        for (let i = 0; i < searcheddata.length; i++) {
          rawdata.push(searcheddata[i].item)
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
