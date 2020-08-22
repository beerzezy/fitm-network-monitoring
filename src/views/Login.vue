<template>
  <div class="layout-login h-100 bg-login">
    <div class="form-login">
      <div class="mag-b-40">
        <img
          class="logo-login"
          src="@/assets/img/icon/FITM_LOGO.png"
          alt="FITM_LOGO">
      </div>
      <v-text-field v-model="username"
        placeholder="Username">
        <v-icon
          slot="append"
          color="grey lighten-1">
          mdi-account-outline
        </v-icon>
      </v-text-field>
      <v-text-field v-model="userpassword" type="password"
        placeholder="Password">
        <v-icon
          slot="append"
          color="grey lighten-1">
          mdi-lock-outline
        </v-icon>
      </v-text-field>
      <div class="mag-t-40">
        <v-btn
          class="submit-login"
          color="primary"
          @click="login()">
          GO!
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
import { defaultUserRef, userRef } from './firebase'

export default {
  name: 'Login',
  data () {
    return {
      username: null,
      userpassword: null,
      userInfo: {
        username: '',
        firstname: '',
        lastname: '',
        password: '',
        role: ''
      },
      DefaultUserInfo: {
        username: '',
        firstname: '',
        lastname: '',
        password: '',
        role: ''
      },
      adminInfo: {
        username: '',
        password: '',
        role: ''
      }
    }
  },
  created () {
    defaultUserRef.on('value', (snapshot) => {
      this.adminInfo = Object.assign({}, snapshot.val())
    })
  },
  methods: {
    async login () {
      // Get user info
      this.userInfo = Object.assign({}, this.DefaultUserInfo)
      const userSnap = await userRef.orderByChild("username").equalTo(this.username).once('value', (snapshot) => {
        return snapshot
      })
      if (userSnap.val() != null) {
        userSnap.forEach(value => {
          this.userInfo = {
              username: value.val().username,
              firstname: value.val().firstname,
              lastname: value.val().lastname,
              password: value.val().password,
              role: value.val().role
          }
        })
      }

      // Admin login
      if (this.username == this.adminInfo.username && this.adminInfo.password == this.userpassword) {
        localStorage.setItem("login_status", 'logged')
        let prepareAdminInfo = {
          username: this.adminInfo.username,
          firstname: null,
          lastname: null,
          role: this.adminInfo.role,
        }
        localStorage.setItem("user_info", JSON.stringify(prepareAdminInfo))
        
        this.$router.push({ name: 'dashboard' })
        swal('', 'Login Success', 'success', {
          buttons: false,
          timer: 1000
        })
        return
      }
      // User login
      if (this.userInfo.password == this.userpassword) {
        localStorage.setItem("login_status", 'logged')
        let prepareUserInfo = {
          username: this.userInfo.username,
          firstname: this.userInfo.firstname,
          lastname: this.userInfo.lastname,
          role: this.userInfo.role,
        }
        localStorage.setItem("user_info", JSON.stringify(this.userInfo))

        this.$router.push({ name: 'dashboard' })
        swal('', 'Login Success', 'success', {
          buttons: false,
          timer: 1000
        })
      } else {
        swal('', 'Username and/or Password invalid', 'error', {
          icon: 'error'
        })
      }
    }
  }
}
</script>

<style scoped>
  .submit-login {
    width: 200px;
    height: 200px;
  }
  .form-login {
    text-align: center;
    padding: 40px;
  }
  .logo-login {
    width: 300px;
    height: 200px;
  }
  .dp-flex {
    display: flex;
  }
  .mag-t-40 {
    margin-top: 40px;
  }
  .mag-b-40 {
    margin-bottom: 40px;
  }
  .h-100 {
    height: 100%;
  }
  .layout-login {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .bg-login {
    background-color: #22242A;
  }
</style>

<style>
  .v-input__slot:before {
    border-color: #ffffff !important;
  }
  input::placeholder {
    color: #ffffff !important;
  }
  div .v-input input {
    color: #ffffff !important;
  }
</style>
