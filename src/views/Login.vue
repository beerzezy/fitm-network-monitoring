<template>
  <div class="layout-login h-100 bg-login">
    <div class="form-login">
      <div class="mag-b-40">
        <img
          class="logo-login"
          src="@/assets/img/icon/FITM_LOGO.png"
          alt="FITM_LOGO">
      </div>
      <v-text-field
        placeholder="Username">
        <v-icon
          slot="append"
          color="grey lighten-1">
          mdi-account-outline
        </v-icon>
      </v-text-field>
      <v-text-field
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
          @click="login">
          GO!
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {

    }
  },
  methods: {
    login () {
      this.$router.push({ name: 'dashboard' })
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
