<template>
  <v-app>
    <v-app-bar app dark color="indigo">
      <v-app-bar-nav-icon @click="drawer = !draver" />
      <v-toolbar-title>SW Heroes</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list nav dense>
        <v-list-item-group v-model="selected">
          <v-list-item v-for="(item, index) in routes" :key="index" :to="item.path">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import routes from '@/plugins/router/routes'

export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      selected: null,
      routes
    }
  }
}
</script>
