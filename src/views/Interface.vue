<template>
  <div>
    <header>
      <Navbar/>
    </header>
    <v-container style="text-align:center;margin-top:80px;">

    <div class="select-device mag-b-40">
      <v-btn
          width="100"
          color="#039BE5"
          class="white--text"
          @click="getInterface('r124'), showDetail('sw3650')">
          R124 
        </v-btn>
        <v-btn
          width="100"
          color="#039BE5"
          class="white--text"
          @click="getInterface('r330a'), showDetail('sw3650')">
          R330A
        </v-btn>
        <v-btn
          width="100"
          color="#039BE5"
          class="white--text"
          @click="getInterface('r101c'), showDetail('sw3650')">
          R101C
        </v-btn>
        <v-btn
          width="100"
          color="#039BE5"
          class="white--text"
          @click="getInterface('r415'), showDetail('sw365048TS')">
          R415
        </v-btn>
        <v-btn
          width="100"
          color="#039BE5"
          class="white--text"
          @click="getInterface('rshop'), showDetail('sw3650')">
          Rshop
        </v-btn>
        <v-btn
          width="100"
          color="#039BE5"
          class="white--text"
          @click="getInterface('sw9400'), showDetail('sw9400')">
          SW9400
        </v-btn>
        <v-btn
          width="100"
          color="#039BE5"
          class="white--text"
          @click="getInterface('sw3850'), showDetail('sw3850')">
          SW3850
        </v-btn>
        <v-btn
          width="100"
          color="#039BE5"
          class="white--text"
          @click="getInterface('rsad'), showDetail('sg220')">
          RSAD
        </v-btn>
      
      </div>
      <div class="bg-ct pad-chart" >
        <SW3650 v-if="flag == true && viewDevice == 'sw3650'" :interfaceInfo="intInfo" :deviceName="device" ref="form"/>
        <SW3850 v-if="flag == true && viewDevice == 'sw3850'" :interfaceInfo="intInfo" :deviceName="device" ref="form"/>
        <SW365048TS v-if="flag == true && viewDevice == 'sw365048TS'" :interfaceInfo="intInfo" :deviceName="device" ref="form"/>
        <SW9400 v-if="flag == true && viewDevice == 'sw9400'" :interfaceInfo="intInfo" :deviceName="device" ref="form"/>
        <SG220 v-if="flag == true && viewDevice == 'sg220'" :interfaceInfo="intInfo" :deviceName="device" ref="form"/>
        <!-- <div class="port-info mt-10" style="margin:auto;">
          <p class="port-title">
            {{ detailPort.interface }}
          </p>
          <div class="port-detail">
            <p>Status : {{ detailPort.status }}</p>
            <p>Inbound : {{ detailPort.inbound }} MB</p>
            <p>Outbound : {{ detailPort.outbound }} MB</p>
          </div>
          <div class="port-footer"></div>
        </div> -->
      </div>
      
      <!-- <div class="select-device mag-b-40">
        <v-btn
          width="100"
          color="#039BE5"
          class="white--text"
          @click="getInterface('r124')">
          R124
        </v-btn>
        <v-btn
          width="100"
          color="#039BE5"
          class="white--text"
          @click="getInterface('r330a')">
          R330A
        </v-btn>
        <v-btn
          width="100"
          color="#039BE5"
          class="white--text"
          @click="getInterface('r101c')">
          R101C
        </v-btn>
        <v-btn
          width="100"
          color="#039BE5"
          class="white--text"
          @click="getInterface('r415')">
          R415
        </v-btn>
        <v-btn
          width="100"
          color="#039BE5"
          class="white--text"
          @click="getInterface('rshop')">
          Rshop
        </v-btn>
        <v-btn
          width="100"
          color="#039BE5"
          class="white--text"
          @click="getInterface('sw4503')">
          SW4503
        </v-btn>
        <v-btn
          width="100"
          color="#039BE5"
          class="white--text"
          @click="getInterface('sw3850')">
          SW3850
        </v-btn>
        <v-btn
          width="100"
          color="#039BE5"
          class="white--text"
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
      </div> -->
    </v-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import SW3650 from '@/components/interface/sw3650.vue'
import SW3850 from '@/components/interface/sw3850.vue'
import SW9400 from '@/components/interface/sw9400.vue'
import SG220 from '@/components/interface/sg220.vue'
import SW365048TS from '@/components/interface/sw365048ts.vue'
import InterfaceProvider from '@/resources/interface_provider'

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    SW3650,
    SW3850,
    SW365048TS,
    SW9400,
    SG220
  },
  data () {
    return {
      device: '',
      intInfo: [],
      detailPort: {},
      flag: false,
      viewDevice: 'sw3650',
      deviceInfos: [
        {deviceName: 'r124', deviceIp: '10.77.1.2'},
        {deviceName: 'r330a', deviceIp: '10.77.3.2'},
        {deviceName: 'r101c', deviceIp: '10.77.7.2'},
        {deviceName: 'r415', deviceIp: '10.77.5.2'},
        {deviceName: 'rshop', deviceIp: '10.77.8.2'},
        {deviceName: 'sw4503', deviceIp: '10.9.99.2'},
        {deviceName: 'sw3850', deviceIp: '10.77.4.2'},
        {deviceName: 'rsad', deviceIp: '10.61.4.49'}
      ]
    }
  },
  created () {
    this.getInterface('r124')

    setInterval(() => {
      this.getInterface(this.device)
    }, 300000)
  },
  methods: {
    showDetail (deviceType) {
      // this.detailPort = item
      if (this.flag) {
        this.viewDevice = deviceType
        this.$refs.form.setShowDetail()
      }
    },
    async getInterface (deviceName) {
      this.device = deviceName
      const res = await InterfaceProvider.fetchInterface(deviceName)
      if (res) {
        this.flag = true
      }
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
    background-color: #00E676;
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
    width: 1432px;
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
    font-size: 20px;
  }
  .port-footer {
    padding: 10px 40px;
    background-color: #ffffff;
  }
</style>
