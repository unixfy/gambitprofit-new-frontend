<template>
  <v-card>
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      fixed
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :href="item.href"
          :to="item.to"
          exact
          router
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
      app
      clipped-left
      fixed
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" aria-label="Open navigation drawer"></v-app-bar-nav-icon>
      <v-img
        class="mx-2"
        contain
        max-height="30"
        max-width="30"
        src="/logo.svg"
      >
      </v-img>
      <ClientOnly>
        <v-app-bar-title v-text="title"/>
      </ClientOnly>
      <v-spacer></v-spacer>
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon href="https://go.unixfy.net/hca" rel="noopener" target="_blank" aria-label="Join Discord server">
            <v-icon>mdi-discord</v-icon>
          </v-btn>
        </template>
        Join Discord server
      </v-tooltip>

      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon
                 @click="toggleTheme" aria-label="Toggle dark mode">
            <v-icon>mdi-brightness-6</v-icon>
          </v-btn>
        </template>
        Toggle dark mode
      </v-tooltip>

    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      // note: enabling this will make the drawer automatically open on mobile AND desktop - default is only open on desktop
      drawer: false,
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
          title: 'API',
          to: '/api'
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
        },
        {
          icon: 'mdi-road',
          title: 'Roadmap',
          href: 'https://jira.unixfy.net/plugins/servlet/desk/project/GAMPROF'
        },
        {
          icon: 'mdi-comment-quote',
          title: 'Send feedback',
          href: 'https://jira.unixfy.net/rest/collectors/1.0/template/form/67f45fd4'
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
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      localStorage.setItem("isDarkThemeActive", this.$vuetify.theme.dark.toString())
    }
  }
}
</script>
