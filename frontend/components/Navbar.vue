<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          :href="item.href"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"/>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      clipped-left
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img
        src="/vuetify-logo.svg"
        max-width="30"
        max-height="30"
        contain
        class="mx-2"
      >
      </v-img>
      <v-app-bar-title v-text="title"/>
      <v-spacer></v-spacer>
      <v-btn @click="toggleTheme"><v-icon>mdi-brightness-6</v-icon></v-btn>


    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-frequently-asked-questions',
          title: 'FAQ',
          to: '/faq'
        },
        {
          icon: 'mdi-api',
          title: 'API Docs',
          href: 'https://api.gambitprofit.com/docs'
        },
        {
          icon: 'mdi-gift',
          title: 'Donate',
          to: '/donate'
        },
        {
          icon: 'mdi-bell-outline',
          title: 'Notifications',
          to: '/notifications'
        },
        {
          icon: 'mdi-help-circle',
          title: 'Help',
          to: '/contact'
        }
      ],
      title: 'GambitProfit'
    }
  },
  mounted() {
    // Enable/disable darkmode based on Localstorage
    const theme = localStorage.getItem("isDarkThemeActive");
    if (theme) {
      this.$vuetify.theme.dark = theme === "true";
    }
  },
  methods: {
    // Function to toggle darkmode and save the state in localStorage
    toggleTheme() {
      this.$vuetify.theme.dark=!this.$vuetify.theme.dark;
      localStorage.setItem("isDarkThemeActive", this.$vuetify.theme.dark.toString())
    }
  }
}
</script>
