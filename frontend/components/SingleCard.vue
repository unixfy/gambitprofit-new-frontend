<template>
  <v-card
    class="grid-item mx-auto"
    flat
  >
    <v-toolbar
      color="primary"
      dark
      dense
      extended
      flat
    >
      <v-toolbar-title class="text-truncate">
        {{ play.game_name }}
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            :href="play.PlayUrl"
            icon
            target="_blank"
            rel="noopener"
            aria-label="Open on Gambit Rewards"
          >
            <v-icon>mdi-open-in-new</v-icon>
          </v-btn>
        </template>
        <span>Open in GambitRewards</span>
      </v-tooltip>

      <!-- Tabs -->
      <template v-slot:extension>
        <v-tabs v-model="tabs" center-active color="white" grow>
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab key="info">
            Info
          </v-tab>

          <v-tab v-show="play.Calc.NoRisk.Recommended || show_all">
            No Risk
          </v-tab>

          <v-tab v-show="play.Calc.MedRisk.Recommended">
            Med Risk
          </v-tab>

          <v-tab v-show="play.Calc.HighRisk.Recommended">
            High Risk
          </v-tab>
        </v-tabs>
      </template>

    </v-toolbar>

    <!--              The tab content below the toolbar-->
    <v-card
      class="mx-auto"
    >
      <v-card-text>
        <v-list dense>
          <v-tabs-items v-model="tabs">
            <!-- Info tab -->
            <v-tab-item key="info">
              <!-- Play full name -->
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-form-textbox</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  {{ play.full_game_name }}
                </v-list-item-content>
              </v-list-item>
              <!-- Time of play -->
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-clock</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  {{ play.time }}
                </v-list-item-content>
              </v-list-item>
              <!-- Profit amounts -->
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-cash-multiple</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
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
                </v-list-item-content>
              </v-list-item>
            </v-tab-item>

            <!-- NoRisk tab -->
            <v-tab-item key="norisk">
              <!-- Team 1 bet amount -->
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-numeric-1-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  {{ play.Team1.Name }}: Bet {{ play.Calc.NoRisk.Team1BetAmount }} tokens
                </v-list-item-content>
              </v-list-item>

              <!-- Team 2 bet amount -->
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-numeric-2-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  {{ play.Team2.Name }}: Bet {{ play.Calc.NoRisk.Team2BetAmount }} tokens
                </v-list-item-content>
              </v-list-item>

              <!-- Draw bet amount if draw -->
              <v-list-item v-show="play.Draw.Reward">
                <v-list-item-icon>
                  <v-icon>mdi-numeric-3-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  Draw: Bet {{ play.Calc.NoRisk.DrawBetAmount }} tokens
                </v-list-item-content>
              </v-list-item>

              <!-- Profit amount -->
              <v-list-item>
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
                    <v-icon left>{{ `${generateIcon(play.Calc.NoRisk.ProfitPerCard)}` }}</v-icon>
                    <div class="noriskprofit">{{ play.Calc.NoRisk.ProfitPerCard }}</div>
                    % No Risk profit
                  </v-chip>
                </v-list-item-content>
              </v-list-item>
            </v-tab-item>

            <!-- MedRisk tab -->
            <v-tab-item key="medrisk">
              <!-- Team 1 bet amount -->
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-numeric-1-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  {{ play.Calc.MedRisk.Team1ToBetOn }}: Bet {{ play.Calc.MedRisk.Team1BetAmount }} tokens
                </v-list-item-content>
              </v-list-item>

              <!-- Team 2 bet amount -->
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-numeric-2-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  {{ play.Calc.MedRisk.Team2ToBetOn }}: Bet {{ play.Calc.MedRisk.Team2BetAmount }} tokens
                </v-list-item-content>
              </v-list-item>

              <!-- Profit amount -->
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-cash-multiple</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-chip
                    v-show="play.Calc.MedRisk.Recommended"
                    class="my-1"
                    color="orange"
                    text-color="white"
                  >
                    <v-icon left>{{ `${generateIcon(play.Calc.MedRisk.ProfitPerCard)}` }}</v-icon>
                    {{ play.Calc.MedRisk.ProfitPerCard }}% Med Risk profit
                  </v-chip>
                </v-list-item-content>
              </v-list-item>
            </v-tab-item>

            <!-- HighRisk tab -->
            <v-tab-item key="highrisk">
              <!-- Team 1 bet amount -->
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-numeric-1-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  {{ play.Calc.HighRisk.TeamToBetOn }}: Bet {{ play.Calc.HighRisk.BetAmount }} tokens
                </v-list-item-content>
              </v-list-item>

              <!-- Profit amount -->
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-cash-multiple</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-chip
                    v-show="play.Calc.HighRisk.Recommended"
                    class="my-1"
                    color="red"
                    text-color="white"
                  >
                    <v-icon left>{{ `${generateIcon(play.Calc.HighRisk.ProfitPerCard)}` }}</v-icon>
                    {{ play.Calc.HighRisk.ProfitPerCard }}% High Risk profit
                  </v-chip>
                </v-list-item-content>
              </v-list-item>
            </v-tab-item>
          </v-tabs-items>
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
    // Generate an icon depending on the profit %
    generateIcon(profit) {
      if (profit > 1) return 'mdi-check-circle'
      else if (profit >= 0) return 'mdi-alert'
      else return 'mdi-close-octagon'
    },
  }
}
</script>
