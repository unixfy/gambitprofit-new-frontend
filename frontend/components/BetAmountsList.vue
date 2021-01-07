<template>
  <div><!-- NoRisk Bets -->
    <v-list-item v-show="play.Calc.NoRisk.Recommended || show_all" dense three-line>
      <v-list-item-content>
        <v-list-item-title>
          No Risk
        </v-list-item-title>
        <v-list-item-subtitle style="font-weight: normal !important;">
          {{ play.Team1.Name }}: Bet <b>{{ play.Calc.NoRisk.Team1BetAmount }}</b> tokens
        </v-list-item-subtitle>
        <v-list-item-subtitle style="font-weight: normal !important;">
          {{ play.Team2.Name }}: Bet <b>{{ play.Calc.NoRisk.Team2BetAmount }}</b> tokens
        </v-list-item-subtitle>
        <v-list-item-subtitle v-show="play.Draw.Reward" style="font-weight: normal !important;">
          Draw: Bet <b>{{ play.Calc.NoRisk.DrawBetAmount }}</b> tokens
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <!-- MedRisk Bets -->
    <v-list-item v-show="play.Calc.MedRisk.Recommended" dense two-line>
      <v-list-item-content>
        <v-list-item-title color="orange">
          Med Risk
        </v-list-item-title>
        <v-list-item-subtitle style="font-weight: normal !important;">
          {{ play.Calc.MedRisk.Team1ToBetOn }}: Bet <b>{{ play.Calc.MedRisk.Team1BetAmount }}</b> tokens
        </v-list-item-subtitle>
        <v-list-item-subtitle style="font-weight: normal !important;">
          {{ play.Calc.MedRisk.Team2ToBetOn }}: Bet <b>{{ play.Calc.MedRisk.Team2BetAmount }}</b> tokens
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <!-- HighRisk Bets -->
    <v-list-item v-show="play.Calc.HighRisk.Recommended" dense>
      <v-list-item-content>
        <v-list-item-title color="red">
          High Risk
        </v-list-item-title>
        <v-list-item-subtitle style="font-weight: normal !important;">
          {{ play.Calc.HighRisk.TeamToBetOn }}: Bet <b>{{ play.Calc.HighRisk.BetAmount }}</b> tokens
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>
<script>
export default {
  name: "BetAmountsList",
  props: ['play', 'show_all']
}
</script>
