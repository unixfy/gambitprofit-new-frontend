<template>
  <div>
    <v-chip
      v-show="play.Calc.NoRisk.Recommended || show_all"
      class="my-1"
      color="green"
      text-color="white"
    >
      {{ play.Calc.NoRisk.ProfitPerCard }}% No Risk profit ≈ {{ (play.Calc.NoRisk.CalculatedReward - (tokens * discountPercentage)).toFixed(2) }} SB
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
  </div>
</template>
<script>
export default {
  name: "ProfitChips",
  props: ['play', 'show_all', 'tokens'],
  data() {
    return {
      // The actual SB cost of 1 gambit token
      discountPercentage: 0.90
    }
  }
}
</script>
