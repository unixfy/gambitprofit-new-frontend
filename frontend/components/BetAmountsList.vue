<template>
  <div><!-- NoRisk Bets -->
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
  </div>
</template>
<script>
export default {
  name: "BetAmountsList",
  props: ['play', 'show_all']
}
</script>
