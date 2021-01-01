<template>
  <v-app>
    <div class="container">
      <!-- Preloader-->
      <v-alert type="info" v-if="preload">
        Please wait for the data to load...
      </v-alert>
      <v-progress-linear
        indeterminate
        color="green"
        v-if="preload"
      ></v-progress-linear>

      <div v-if="error">
        <v-alert type="error">
          Oops, an error occurred: {{ error }}
          <br>
          Try refreshing the page.
        </v-alert>
      </div>

      <ul v-else>
        <v-data-table
          :headers="headers"
          :items="plays"
          item-key="PlayUrl"
          sort-by="rawtime"
          class="elevation-1"
          v-if="!preload"
          items-per-page=25
          search=""
        ></v-data-table>
      </ul>
    </div>
  </v-app>
</template>
<script>
import moment from 'moment'

function processPlays(rawdata) {
  let data = []
  for (let i = 0; i < rawdata.length; i++) {
    let struct = {}
    struct = {
      'name': `${rawdata[i].Team1.Name} (${rawdata[i].Team1.Reward}) v. ${rawdata[i].Team2.Name} (${rawdata[i].Team2.Reward}) ${rawdata[i].Draw.Reward ? "v. Draw (" + rawdata[i].Draw.Reward + ")" : ""}`,
      'time': `${moment(rawdata[i].PlayDate).calendar()}`,
      'rawtime': `${rawdata[i].PlayDate}`,
      'method': '123',
      'amounts': '123',
      'profit': `${rawdata[i].Profi}`,
      'link': `${rawdata[i].PlayUrl}`
    }
    data.push(struct)
  }

  console.log(data)
  return data
}

export default {
  name: 'Table',
  data() {
    return {
      plays: [],
      error: null,
      preload: true,
      headers: [
        {
          text: 'Game Name',
          align: 'start',
          value: 'name',
          groupable: true,
        },
        {
          text: 'Play Time',
          value: 'time',
          sort: function(a, b) {
            if (a.rawtime < b.rawtime) return -1;
            if (a.rawtime > b.rawtime) return 1;
            return 0;
          }
        },
        {
          text: 'Bet Method',
          value: 'method',
        },
        {
          text: 'Bet Amounts',
          value: 'amounts',
        },
        {
          text: 'Profit per Card',
          value: 'profit',
        },
        {
          text: 'Link',
          value: 'link',
        },
      ]
    }
  },
  async mounted() {
    try {
      this.rawdata = await this.$strapi.find('gambit-plays', {
        _limit: 100,
        _sort: 'createdAt:DESC',
      })
      this.plays = processPlays(this.rawdata)
      this.preload = false
    } catch (error) {
      this.preload = false
      this.error = error
    }
  }
}
</script>
