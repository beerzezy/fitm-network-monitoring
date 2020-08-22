<template>
  <v-app>
    <router-view>
    </router-view>
  </v-app>
</template>

<script>
import { defaultUserRef, userRef } from './views/firebase'

export default {
  name: 'App',
  data () {
    return {
      admin_Info: {}
    }
  },
  created () {
    this.checkSession()
  },
  methods: {
    async checkSession () {
      let userInfoStr = localStorage.getItem('user_info')
      this.userInfo = JSON.parse(userInfoStr)

      await defaultUserRef.once('value', (snapshot) => {
        this.admin_Info = Object.assign({}, snapshot.val())
      })
      
      if (this.userInfo != null) {
         if (this.userInfo.username != this.admin_Info.username) {
          const userSnap = await userRef.orderByChild("username").equalTo(this.userInfo.username).once('value', (snapshot) => {
            return snapshot
          })
          
          if (userSnap.val() == null) {
            localStorage.removeItem('login_status')
            localStorage.removeItem('user_info')
            this.$router.push( '/' );
          }
      }
      }
    }
  }
}
</script>
