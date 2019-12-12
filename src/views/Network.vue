<template>
  <div>
    <header>
      <Navbar />
    </header>
    <div>
      <v-container class="mag-t-20">
        <div class="dp-flex jtf-ct-center al-i-center">
          <img
            src="@/assets/img/topology.png"
            alt="topology"
            class="img-size">
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Network',
  components: {
    Navbar
  }
}
</script>

<style scoped>
  .img-size {
    width: 1100px;
    height: 600px;
  }
</style>
