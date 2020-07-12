<template>
  <div>
    <header>
      <Navbar/>
    </header>
   
    <v-container style="text-align:center;margin-top:60px;">
      <div class="select-device mag-b-40">
      </div>

      <div class="bg-ct pad-chart" style="">
        <Topology/>
      </div>
    </v-container> 
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Topology from '@/components/topology/topology.vue'

export default {
  components: {
    Navbar,
    Topology
  },
}
</script>

<style>
.network-container {
  margin-top: 100px;
}
</style>
