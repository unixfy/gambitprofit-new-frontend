<template>
  <div>
    <v-chip
      v-show="play.Calc.NoRisk.Recommended || show_all"
      class="my-1"
      color="green"
      text-color="white"
    >
      {{ play.Calc.NoRisk.ProfitPerCard }}% No Risk profit ≈ {{ (play.Calc.NoRisk.CalculatedReward - (tokensVal * discountPercentage)).toFixed(2) }} SB
    </v-chip>

    <v-chip
      v-show="play.Calc.MedRisk.Recommended"
      class="my-1"
      color="orange"
      text-color="white"
    >
      {{ play.Calc.MedRisk.ProfitPerCard }}% Med Risk profit ≈ {{ (play.Calc.MedRisk.CalculatedReward - (tokensVal * discountPercentage)).toFixed(2) }} SB
    </v-chip>

    <v-chip
      v-show="play.Calc.HighRisk.Recommended"
      class="my-1"
      color="red"
      text-color="white"
    >
      {{ play.Calc.HighRisk.ProfitPerCard }}% High Risk profit ≈ {{ (play.Calc.HighRisk.CalculatedReward - (tokensVal * discountPercentage)).toFixed(2) }} SB
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
      discountPercentage: 0.95,
      // Prevent tokens from updating when the token field is changed
      tokensVal: this.tokens
    }
  }
}
</script>
