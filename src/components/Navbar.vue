<template>
  <div>
    <v-app-bar
      fixed
      color="grey darken-3">
      <div class="mag-l-40">
        <v-toolbar-title class="nav-title">
          FITM Monitoring
        </v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          :to="{ name: 'dashboard' }"
          text
          color="white">
          Dashboard
        </v-btn>
        <v-btn
          :to="{ name: 'device' }"
          text
          color="white">
          Device
        </v-btn>
        <v-btn
          :to="{ name: 'interface' }"
          text
          color="white">
          Interface
        </v-btn>
        <v-btn
          :to="{ name: 'traffic' }"
          text
          color="white">
          Traffic
        </v-btn>
        <v-btn
          :to="{ name: 'network' }"
          text
          color="white">
          Network
        </v-btn>
        <!-- <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn> -->
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>

export default {
  name: 'Navbar'
}
</script>

<style>
  div .v-toolbar__title {
    font-size: 24px;
    font-weight: 700;
  }
  div.v-application a {
    color: #ffffff;
    text-decoration: none;
  }
</style>

<style scoped>
  .nav-bar {
    background-color: #616161;
  }
  .nav-title {
    color:  #039BE5;
  }
  .cl-white {
    color: #ffffff;
  }
</style>
