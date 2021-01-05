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
            <v-list-item-icon>
              <v-icon>mdi-cash-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-chip
                v-show="play.Calc.NoRisk.Recommended || show_all"
                class="my-1"
                color="green"
                text-color="white"
              >
                {{ play.Calc.NoRisk.ProfitPerCard }}
                % No Risk profit
              </v-chip>

              <v-chip
                v-show="play.Calc.MedRisk.Recommended"
                class="my-1"
                color="orange"
                text-color="white"
              >
                {{ play.Calc.MedRisk.ProfitPerCard }}% Med Risk profit
              </v-chip>

              <v-chip
                v-show="play.Calc.HighRisk.Recommended"
                class="my-1"
                color="red"
                text-color="white"
              >
                {{ play.Calc.HighRisk.ProfitPerCard }}% High Risk profit
              </v-chip>
            </v-list-item-content>
          </v-list-item>

          <!-- NoRisk Bets -->
          <v-list-item v-show="play.Calc.NoRisk.Recommended || show_all" dense three-line>
            <v-list-item-content>
              <v-list-item-title color="green">
                No Risk
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ play.Team1.Name }}: Bet {{ play.Calc.NoRisk.Team1BetAmount }} tokens
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                {{ play.Team2.Name }}: Bet {{ play.Calc.NoRisk.Team2BetAmount }} tokens
              </v-list-item-subtitle>
              <v-list-item-subtitle v-show="play.Draw.Reward">
                Draw: Bet {{ play.Calc.NoRisk.DrawBetAmount }} tokens
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <!-- MedRisk Bets -->
          <v-list-item v-show="play.Calc.MedRisk.Recommended" dense two-line>
            <v-list-item-content>
              <v-list-item-title color="orange">
                Med Risk
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ play.Calc.MedRisk.Team1ToBetOn }}: Bet {{ play.Calc.MedRisk.Team1BetAmount }} tokens
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                {{ play.Calc.MedRisk.Team2ToBetOn }}: Bet {{ play.Calc.MedRisk.Team2BetAmount }} tokens
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <!-- HighRisk Bets -->
          <v-list-item v-show="play.Calc.HighRisk.Recommended" dense>
            <v-list-item-content>
              <v-list-item-title color="red">
                High Risk
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ play.Calc.HighRisk.TeamToBetOn }}: Bet {{ play.Calc.HighRisk.BetAmount }} tokens
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-card>
</template>
<script>
export default {
  name: 'SingleCard',
  props: ['play', 'show_all'],
  data() {
    return {
      tabs: ''
    }
  },
  methods: {
  }
}
</script>
