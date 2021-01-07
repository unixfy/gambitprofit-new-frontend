<template>
  <v-card
    class="grid-item mx-auto"
    flat
  >
    <v-toolbar
      color="primary"
      dark
      dense
      flat
    >
      <v-toolbar-title>
        {{ play.game_name }}
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            :href="play.PlayUrl"
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
    </v-toolbar>

    <!--              The tab content below the toolbar-->
    <v-card
      class="mx-auto"
    >
      <v-card-text>
        <v-list class="py-0 my-0" dense>
          <!-- Info tab -->
          <!-- Play full name -->
          <v-list-item dense>
            <v-list-item-icon>
              <v-icon>mdi-form-textbox</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              {{ play.full_game_name }}
            </v-list-item-content>
          </v-list-item>
          <!-- Time of play -->
          <v-list-item dense>
            <v-list-item-icon>
              <v-icon>mdi-clock</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              {{ play.time }}
            </v-list-item-content>
          </v-list-item>
          <!-- Profit amounts -->
          <v-list-item dense>
            <v-list-item-content>
              <ProfitChips :play="play" :show_all="show_all" :tokens="tokens"/>
            </v-list-item-content>
          </v-list-item>

          <BetAmountsList :play="play" :show_all="show_all"/>
        </v-list>
      </v-card-text>
    </v-card>
  </v-card>
</template>
<script>
import ProfitChips from "./ProfitChips";
import BetAmountsList from "./BetAmountsList";
export default {
  name: 'SingleCard',
  components: {BetAmountsList, ProfitChips},
  props: ['play', 'show_all', 'tokens'],
  data() {
    return {
      tabs: ''
    }
  },
  methods: {
  }
}
</script>
