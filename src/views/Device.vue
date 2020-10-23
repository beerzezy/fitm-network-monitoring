<template>
  <div>
    <header>
      <Navbar />
    </header>
    <div>

    <div style="padding:15px;margin-top:70px;">

      <div style="text-align:right;">
        <button @click="getDeviceStatus('r124')" style="margin-left:10px;" type="button" class="btn btn-primary">R124</button>
        <button @click="getDeviceStatus('r330a')" style="margin-left:10px;" type="button" class="btn btn-primary">R330A</button>
        <button @click="getDeviceStatus('r101c')" style="margin-left:10px;" type="button" class="btn btn-primary">R101C</button>
        <button @click="getDeviceStatus('r415')" style="margin-left:10px;" type="button" class="btn btn-primary">R415</button>
        <button @click="getDeviceStatus('rshop')" style="margin-left:10px;" type="button" class="btn btn-primary">RSHOP</button>
        <button @click="getDeviceStatus('sw9400')" style="margin-left:10px;" type="button" class="btn btn-primary">SW9400</button>
        <button @click="getDeviceStatus('sw3850')" style="margin-left:10px;" type="button" class="btn btn-primary">SW3850</button>
        <button @click="getDeviceStatus('rsad')" style="margin-left:10px;" type="button" class="btn btn-primary">RSAD</button>
      </div>

      <div class="card border-dark" style="margin-top:10px;">
        <div class="card-header border-dark" style="background-color:#343a40;color:#fff;">
          Device: <span style="font-size:16px;"> {{ device }} </span>
        </div>
        <div class="card-header border-dark" style="background-color:#343a40;color:#fff;">
          IP Address: <span style="font-size:16px;"> {{ deviceData.ip }} </span>
        </div>
        <div class="card-header border-dark" style="background-color:#343a40;color:#fff;">
          OS: <span style="font-size:16px;"> {{osStr}} </span>
        </div>
        
        <div class="row">
          <div class="col-sm-6">
            <div class="card border-0">
              <div class="card-body">
                <div :class="tempLevel" :style="tempLevelCss" >
                    <div class="pad-chart">
                      <div class="title-sta">
                        <p>Temperature</p>
                        <v-row>
                          <v-col
                            cols="5"
                            class="text-center">
                            <v-icon class="icon-size">
                              mdi-coolant-temperature
                            </v-icon>
                          </v-col>
                          <v-col
                            cols="7"
                            class="pl-10">
                            <span v-if="deviceData.temperature > 0" class="status-val">{{ deviceData.temperature }} C.</span>
                            <span v-else class="status-val">No data</span>
                          </v-col>
                        </v-row>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card border-0">
              <div class="card-body">
                <div class="status-box safe-sta">
                    <div class="pad-chart pr-0">
                      <div class="title-sta">
                        <p>Uptime</p>
                      </div>
                      <v-row>
                        <v-col
                          cols="4"
                          class="text-center">
                          <v-icon class="icon-size">
                            mdi-calendar
                          </v-icon>
                        </v-col>
                        <v-col
                          cols="8">
                          <span
                            id="uptime"
                            class="status-val">{{ deviceData.upTime }}</span>
                        </v-col>
                      </v-row>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-6">
            <div class="card border-0">
              <div class="card-body">
                <div :class="cpuLevel" :style="cpuLevelCss">
                  <div class="pad-chart">
                    <div class="title-sta">
                      <p>CPU</p>
                    </div>
                    <v-row>
                      <v-col
                        cols="5"
                        class="text-center">
                        <v-icon class="icon-size">
                          mdi-cpu-64-bit
                        </v-icon>
                      </v-col>
                      <v-col
                        cols="7"
                        class="pl-8">
                        <span v-if="deviceData.cpu > 0" id="cpu" class="status-val">{{ deviceData.cpu }} %</span>
                        <span v-else id="cpu" class="status-val">No Data</span>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card border-0">
              <div class="card-body">
                <div :class="memLevel" :style="memLevelCss">
                  <div class="pad-chart">
                    <div class="title-sta">
                      <p>Memmory</p>
                    </div>
                    <v-row>
                      <v-col
                        cols="5"
                        class="text-center">
                        <v-icon class="icon-size">
                          mdi-memory
                        </v-icon>
                      </v-col>
                      <v-col
                        cols="7"
                        class="pl-10">
                        <span v-if="deviceData.memory > 0" class="status-val">{{ deviceData.memory }} MB</span>
                        <span v-else class="status-val">No Data</span>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      <!-- <v-container class="mag-t-80">
        <div class="select-device mag-b-40">
          <v-btn
            width="100"
            color="#039BE5"
            class="white--text"
            @click="getDeviceStatus('r124')">
            R124
          </v-btn>
          <v-btn
            width="100"
            color="#039BE5"
            class="white--text"
            @click="getDeviceStatus('r330a')">
            R330A
          </v-btn>
          <v-btn
            width="100"
            color="#039BE5"
            class="white--text"
            @click="getDeviceStatus('r101c')">
            R101C
          </v-btn>
          <v-btn
            width="100"
            color="#039BE5"
            class="white--text"
            @click="getDeviceStatus('r415')">
            R415
          </v-btn>
          <v-btn
            width="100"
            color="#039BE5"
            class="white--text"
            @click="getDeviceStatus('rshop')">
            Rshop
          </v-btn>
          <v-btn
            width="100"
            color="#039BE5"
            class="white--text"
            @click="getDeviceStatus('sw9400')">
            SW9400
          </v-btn>
          <v-btn
            width="100"
            color="#039BE5"
            class="white--text"
            @click="getDeviceStatus('sw3850')">
            SW3850
          </v-btn>
          <v-btn
            width="100"
            color="#039BE5"
            class="white--text"
            @click="getDeviceStatus('rsad')">
            RSAD
          </v-btn>
        </div>
        <div class="bg-ct">
          <div class="pad-chart">
            <div class="title-chart">
              <p style="font-size:16px;">Device: <span style="font-size:16px;"> {{ device }} </span></p>
              <p style="font-size:16px;">IP Address: <span style="font-size:16px;"> {{ deviceData.ip }} </span></p>
              <p style="font-size:16px;">OS: <span style="font-size:16px;"> {{osStr}} </span></p>
            </div>
            <v-row>
              <v-col>
                <div :class="tempLevel" :style="tempLevelCss" >
                  <div class="pad-chart">
                    <div class="title-sta">
                      <p>Temperature</p>
                      <v-row>
                        <v-col
                          cols="5"
                          class="text-center">
                          <v-icon class="icon-size">
                            mdi-coolant-temperature
                          </v-icon>
                        </v-col>
                        <v-col
                          cols="7"
                          class="pl-10">
                          <span v-if="deviceData.temperature > 0" class="status-val">{{ deviceData.temperature }} C.</span>
                          <span v-else class="status-val">No data</span>
                        </v-col>
                      </v-row>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col>
                <div class="status-box safe-sta">
                  <div class="pad-chart pr-0">
                    <div class="title-sta">
                      <p>Uptime</p>
                    </div>
                    <v-row>
                      <v-col
                        cols="4"
                        class="text-center">
                        <v-icon class="icon-size">
                          mdi-calendar
                        </v-icon>
                      </v-col>
                      <v-col
                        cols="8">
                        <span
                          id="uptime"
                          class="status-val">{{ deviceData.upTime }}</span>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div :class="cpuLevel" :style="cpuLevelCss">
                  <div class="pad-chart">
                    <div class="title-sta">
                      <p>CPU</p>
                    </div>
                    <v-row>
                      <v-col
                        cols="5"
                        class="text-center">
                        <v-icon class="icon-size">
                          mdi-cpu-64-bit
                        </v-icon>
                      </v-col>
                      <v-col
                        cols="7"
                        class="pl-8">
                        <span v-if="deviceData.cpu > 0" id="cpu" class="status-val">{{ deviceData.cpu }} %</span>
                        <span v-else id="cpu" class="status-val">No Data</span>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </v-col>
              <v-col>
                <div :class="memLevel" :style="memLevelCss">
                  <div class="pad-chart">
                    <div class="title-sta">
                      <p>Memmory</p>
                    </div>
                    <v-row>
                      <v-col
                        cols="5"
                        class="text-center">
                        <v-icon class="icon-size">
                          mdi-memory
                        </v-icon>
                      </v-col>
                      <v-col
                        cols="7"
                        class="pl-10">
                        <span v-if="deviceData.memory > 0" class="status-val">{{ deviceData.memory }} MB</span>
                        <span v-else class="status-val">No Data</span>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </div> -->
        <!-- <div class="dp-flex">
          <div class="bg-ct flex-50 mr-10">
            <div class="pad-chart">
              <div class="title-chart">
                <p>Device Status</p>
              </div>
              <div class="status mag-t-40 mt-12">
                <div :class="tempLevel">
                  <p class="title-sta">
                    Temperature
                  </p>
                  <div class="dp-flex al-i-center">
                    <v-icon large>
                      mdi-coolant-temperature
                    </v-icon>
                    <span class="status-val">{{ deviceData.temperature }} C</span>
                  </div>
                </div>
                <div class="status-box safe-sta">
                  <p class="title-sta">
                    Uptime
                  </p>
                  <div class="dp-flex al-i-center">
                    <v-icon large>
                      mdi-calendar
                    </v-icon>
                    <span class="status-val">{{ deviceData.upTime }}</span>
                  </div>
                </div>
                <div :class="cpuLevel">
                  <p class="title-sta">
                    CPU
                  </p>
                  <div class="dp-flex al-i-center">
                    <v-icon
                      x-large>
                      mdi-cpu-64-bit
                    </v-icon>
                    <span class="status-val">{{ deviceData.cpu }} %</span>
                  </div>
                </div>
                <div :class="memLevel">
                  <p class="title-sta">
                    Memory
                  </p>
                  <div class="dp-flex al-i-center">
                    <v-icon x-large>
                      mdi-memory
                    </v-icon>
                    <span class="status-val">{{ deviceData.memory }} MB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-ct flex-50">
            <div class="pad-chart">
              <div class="title-chart">
                <p>Internet Traffic {{ device }}</p>
              </div>
              <div class="bg-chart">
                <ve-line
                  :data="chartData"
                  :settings="chartSettings"
                  :colors="colors"
                  :grid="grid">
                </ve-line>
              </div>
            </div>
          </div>
        </div> -->
      <!-- </v-container> -->
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import DeviceProvider from '@/resources/device_provider'

export default {
  name: 'Device',
  components: {
    Navbar
  },
  data () {
    return {
      osStr: '',
      device: '',
      deviceData: [],
      chartSettings: {
        metrics: ['inbound', 'outbound'],
        dimension: ['timestamp']
      },
      chartData: {
        columns: ['inbound', 'outbound'],
        rows: []
      },
      colors: ['#e60000', '#00e6e6'],
      grid: {
        show: true,
        backgroundColor: '#ffffff',
        borderColor: '#000'
      }
    }
  },
  computed: {
    tempLevel () {
      if (this.deviceData.temperature < 50) {
        return 'status-box safe-sta'
      }
      if (this.deviceData.temperature >= 50 && this.deviceData.temperature <= 60) {
        return 'status-box warn-sta'
      }
      if (this.deviceData.temperature >= 60) {
        return 'status-box danger-sta'
      }
      
      return 'status-box'
    },
    tempLevelCss () {
      if (this.deviceData.temperature < 50) {
        return ''
      }
      if (this.deviceData.temperature >= 50 && this.deviceData.temperature <= 60) {
        return ''
      }
      if (this.deviceData.temperature >= 60) {
        return ''
      }
      
      return 'background-color: #858481'
    },
    cpuLevel () {
      if (this.deviceData.cpu < 30) {
        return 'status-box safe-sta'
      }
      if (this.deviceData.cpu > 30 && this.deviceData.cpu < 50) {
        return 'status-box warn-sta'
      }
      if (this.deviceData.temperature > 50) {
        return 'status-box danger-sta'
      }
      
      return 'status-box'
    },
    cpuLevelCss () {
      if (this.deviceData.cpu < 30) {
        return ''
      }
      if (this.deviceData.cpu > 30 && this.deviceData.cpu < 50) {
        return ''
      }
      if (this.deviceData.temperature > 50) {
        return ''
      }
      
      return 'background-color: #858481'
    },
    memLevel () {
      if (this.deviceData.memory < 172 && this.deviceData.memory != null) {
        return 'status-box safe-sta'
      }
      if (this.deviceData.memory > 172 && this.deviceData.memory < 345) {
        return 'status-box warn-sta'
      }
      if (this.deviceData.memory >= 345) {
        return 'status-box danger-sta'
      }
      // if (this.deviceData.temperature > 50) {
      //   return 'status-box danger-sta'
      // }
      
      return 'status-box'
    },
    memLevelCss () {
      if (this.deviceData.memory < 172 && this.deviceData.memory != null) {
        return ''
      }
      if (this.deviceData.memory > 172 && this.deviceData.memory < 345) {
        return ''
      }
      if (this.deviceData.memory >= 345) {
        return ''
      }
      
      return 'background-color: #858481'
    }
  },
  created () {
    this.getDeviceStatus('r124')
    setInterval(() => {
      this.getDeviceStatus(this.device)
    }, 300000)
  },
  methods: {
    async getDeviceStatus (deviceName) {
      this.device = deviceName
      const response = await DeviceProvider.fetchDevice(deviceName)
     
      if (response) {
        this.deviceData = response.data
        this.osDisplay(this.deviceData.os, deviceName)
      }
    },
    osDisplay (data, deviceName) {
      var os
      if (deviceName == 'rsad') {
        let arrayData = data.split(',')
        let sliced = arrayData.slice(0, 2)
        os = sliced.toString()
      } else if (deviceName == 'sw3850') {
        let replaceWorded = data.replace(/RELEASE/g, ",")
        let arrayData = replaceWorded.split(',')
        let sliced = arrayData.slice(0, 4)
        os = sliced.toString()
      } else {
        let arrayData = data.split(',')
        let sliced = arrayData.slice(0, 3)
        os = sliced.toString()
      }

      this.osStr = os
    }
  }
}
</script>

<style scoped>
  .status {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .status-box {
    background-color: #00e6b8;
    border-radius: 10px;
    border: 2px solid black;
  }
  .status-val {
    font-size: 28px;
    font-weight: 700;
  }
  .v-icon.v-icon.icon-size {
    font-size: 50px;
  }
  #uptime {
    font-size: 24px;
  }
  #cpu {
    font-size: 25px;
  }
  .flex-sta {
    justify-content: center;
    align-items: center;
  }
  .title-sta p {
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 700;
    color: black;
  }
  .safe-sta {
    background-color: #00E676;
  }
  .warn-sta {
    background-color: #FBC02D;
  }
  .danger-sta {
    background-color:  #ff5252;
  }
</style>
