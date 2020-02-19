<template>
  <div>
    <header>
      <Navbar />
    </header>
    <v-container
      class="mag-t-20"
      style="height: 100%;">
      <div class="select-device mag-b-40">
        <v-btn
          width="100"
          color="cyan"
          @click="getInterface('r124')">
          R124
        </v-btn>
        <v-btn
          width="100"
          color="cyan"
          @click="getInterface('r330a')">
          R330A
        </v-btn>
        <v-btn
          width="100"
          color="cyan"
          @click="getInterface('r101c')">
          R101C
        </v-btn>
        <v-btn
          width="100"
          color="cyan"
          @click="getInterface('r415')">
          R415
        </v-btn>
        <v-btn
          width="100"
          color="cyan"
          @click="getInterface('rshop')">
          Rshop
        </v-btn>
        <v-btn
          width="100"
          color="cyan"
          @click="getInterface('sw4503')">
          SW4503
        </v-btn>
        <v-btn
          width="100"
          color="cyan"
          @click="getInterface('sw3850')">
          SW3850
        </v-btn>
        <v-btn
          width="100"
          color="cyan"
          @click="getInterface('rsad')">
          RSAD
        </v-btn>
      </div>
      <div class="bg-ct pad-chart">
        <div class="title-chart">
          Interface <span> {{ device }} </span>
        </div>
        <div class="show-port">
          <v-icon
            v-for="(item, index) in intInfo"
            :key="index"
            :color="item.status === 'up' ? '#4caf50' : '#ff5252'"
            size="35"
            class="e-port"
            @click="showDetail(item)">
            mdi-ethernet
          </v-icon>
        </div>
      </div>
      <div class="port-info mt-5">
        <p class="port-title">
          {{ detailPort.interface }}
        </p>
        <div class="port-detail">
          <p>Status : {{ detailPort.status }}</p>
          <p>Inbound : {{ detailPort.inbound }} MB</p>
          <p>Outbound : {{ detailPort.outbound }} MB</p>
        </div>
        <div class="port-footer">
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import InterfaceProvider from '@/resources/interface_provider'

export default {
  name: 'Dashboard',
  components: {
    Navbar
  },
  data () {
    return {
      device: '',
      intInfo: [],
      detailPort: {}
    }
  },
  async mounted () {
    this.device = 'r124'
    const res = await InterfaceProvider.fetchInterface('r124')
    this.intInfo = res.data.filter(item => item.interface.match('GigabitEthernet'))
    const index = 0
    this.detailPort = this.intInfo[index]
  },
  methods: {
    showDetail (item) {
      this.detailPort = item
    },
    async getInterface (deviceName) {
      this.device = deviceName
      const res = await InterfaceProvider.fetchInterface(deviceName)
      this.intInfo = res.data.filter(item => item.interface.match('GigabitEthernet'))
      const index = 0
      this.detailPort = this.intInfo[index]
    }
  }
}
</script>

<style scoped>
  .show-port {
    display: flex;
    flex-wrap: wrap;
    background-color: lightgray;
    padding: 0px 15px;
  }

  .e-port {
    flex-basis: 40px;
    cursor: pointer;
  }
  .status-up {
    background-color: #4caf50;
  }
  .status-down {
    background-color: #ff5252;
  }
  .port-info {
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 20px;
    border: 4px solid #039BE5;
    background-color: #424242;
  }
  .port-title {
    padding: 10px 40px;
    background-color: #ffffff;
    font-size: 24px;
  }
  .port-detail {
    padding: 20px 40px;
    padding-top: 10px;
    color: #ffffff;
  }
  .port-detail p {
    font-size: 24px;
  }
  .port-footer {
    padding: 10px 40px;
    background-color: #ffffff;
  }
</style>
