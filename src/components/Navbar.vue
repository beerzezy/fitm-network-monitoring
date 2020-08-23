<template>
  <div>
    <v-app-bar
      fixed
      color="grey" style="background:#343a40 !important;">
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
        <!-- <v-btn @click="logout()" -->
        <!-- <v-btn
          text
          color="white">
          Profile
        </v-btn> -->
        <div class="text-center" style="margin-top:12px;">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on" >
                Profile
              </v-btn>
            </template>
            <v-list v-if="userInfo.role == 0">
              <v-list-item v-for="(item, index) in items" :key="index" @click="toPage(item.title)" >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>

            <v-list v-if="userInfo.role == 1">
              <v-list-item v-for="(item, index) in items2" :key="index" @click="toPage(item.title)" >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <!-- <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn> -->
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
import swal from 'sweetalert'

export default {
  name: 'Navbar',
  data: () => ({
    role: 0,
    items: [
      { title: 'Manage User' },
      { title: 'Logout' },
    ],
    items2: [
      { title: 'Edit Profile' },
      { title: 'Logout' },
    ],
    userInfo: {}
  }),
  created () {
    let userInfoStr = localStorage.getItem('user_info')
    this.userInfo = JSON.parse(userInfoStr)
  },
  methods: {
    toPage(e) {
      if (e == 'Manage User') {
        const path = '/manageuser'
        if (this.$route.path !== path) {
          let protocol = location.protocol
          let port = location.port
          let hostname = window.location.hostname
          location.href = `${protocol}//${hostname}:${port}${path}`
        }
      } 
      else if (e == 'Edit Profile') {
        const path = '/editprofile'
        if (this.$route.path !== path) {
          let protocol = location.protocol
          let port = location.port
          let hostname = window.location.hostname
          location.href = `${protocol}//${hostname}:${port}${path}`
        }
      }
      else if (e == 'Logout') {
        localStorage.removeItem('user_info')
        localStorage.removeItem('login_status')

        this.$router.push({ name: 'login' })
        swal('', 'Logout Success', 'success', {
          buttons: false,
          timer: 1000
        })
      }
    }
  }
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
