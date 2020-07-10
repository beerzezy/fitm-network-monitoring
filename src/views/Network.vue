<template>
  <div>
    <header>
      <Navbar />
    </header>
    <div class="network-container">
      <Topology/>
    </div>
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
