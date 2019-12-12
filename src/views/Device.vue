<template>
  <div>
    <header>
      <Navbar />
    </header>
    <div>
      <v-container class="mag-t-20">
        <div class="select-device mag-b-40">
          <v-btn
            width="100"
            color="cyan"
            @click="device = 'R124'">
            R124
          </v-btn>
          <v-btn
            width="100"
            color="cyan"
            @click="device = 'R330A'">
            R330A
          </v-btn>
          <v-btn
            width="100"
            color="cyan"
            @click="device = 'R101C'">
            R101C
          </v-btn>
          <v-btn
            width="100"
            color="cyan"
            @click="device = 'R415'">
            R415
          </v-btn>
          <v-btn
            width="100"
            color="cyan"
            @click="device = 'Rshop'">
            Rshop
          </v-btn>
          <v-btn
            width="100"
            color="cyan"
            @click="device = 'SW4503'">
            SW4503
          </v-btn>
          <v-btn
            width="100"
            color="cyan"
            @click="device = 'SW3850'">
            SW3850
          </v-btn>
          <v-btn
            width="100"
            color="cyan"
            @click="device = 'RSAD'">
            RSAD
          </v-btn>
        </div>
        <div class="dp-flex">
          <div class="bg-ct flex-50 pie-chiart-1">
            <div class="pad-chart">
              <div class="title-chart">
                <p>Device Status</p>
              </div>
              <div class="status mag-t-40">
                <div class="status-box">
                  <p>Temperature</p>
                  <div class="dp-flex al-i-center">
                    <v-icon x-large>
                      mdi-coolant-temperature
                    </v-icon>
                    <span class="status-val">{{ showDevice.temp }}</span>
                  </div>
                </div>
                <div class="status-box">
                  <p>Uptime</p>
                  <div class="dp-flex al-i-center">
                    <v-icon x-large>
                      mdi-calendar
                    </v-icon>
                    <span class="status-val">{{ showDevice.uptime }} Days</span>
                  </div>
                </div>
                <div class="status-box">
                  <p>CPU</p>
                  <div class="dp-flex al-i-center">
                    <v-icon x-large>
                      mdi-cpu-64-bit
                    </v-icon>
                    <span class="status-val">{{ showDevice.cpu }} %</span>
                  </div>
                </div>
                <div class="status-box">
                  <p>Memory</p>
                  <div class="dp-flex al-i-center">
                    <v-icon x-large>
                      mdi-memory
                    </v-icon>
                    <span class="status-val">{{ showDevice.memory }} Mbs</span>
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
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Device',
  components: {
    Navbar
  },
  data () {
    return {
      device: 'R124',
      statusData: [
        {
          temp: 24,
          uptime: 5,
          cpu: 7,
          memory: 168.41
        },
        {
          temp: 26,
          uptime: 3,
          cpu: 10,
          memory: 147.91
        },
        {
          temp: 25,
          uptime: 4,
          cpu: 9,
          memory: 167.13
        },
        {
          temp: 24,
          uptime: 5,
          cpu: 10,
          memory: 137.68
        },
        {
          temp: 24,
          uptime: 5,
          cpu: 11,
          memory: 164.87
        },
        {
          temp: 25,
          uptime: 4,
          cpu: 14,
          memory: 178.64
        },
        {
          temp: 24,
          uptime: 3,
          cpu: 8,
          memory: 118.49
        },
        {
          temp: 24,
          uptime: 3,
          cpu: 9,
          memory: 128.46
        }
      ],
      chartSettings: {
        metrics: ['Inbound', 'Outbound'],
        dimension: ['Date']
      },
      chartData: {
        columns: ['Date', 'Inbound', 'Outbound'],
        rows: [
          { Inbound: 152, Date: '21 Nov', Outbound: 152 },
          { Inbound: 122, Date: '22 Nov', Outbound: 162 },
          { Inbound: 212, Date: '23 Nov', Outbound: 142 },
          { Inbound: 412, Date: '24 Nov', Outbound: 172 },
          { Inbound: 312, Date: '25 Nov', Outbound: 152 },
          { Inbound: 712, Date: '26 Nov', Outbound: 192 }
        ]
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
    showDevice () {
      if (this.device === 'R124') {
        return this.statusData[0]
      } if (this.device === 'R330A') {
        return this.statusData[1]
      } if (this.device === 'R101C') {
        return this.statusData[2]
      } if (this.device === 'R415') {
        return this.statusData[3]
      } if (this.device === 'Rshop') {
        return this.statusData[4]
      } if (this.device === 'SW4503') {
        return this.statusData[5]
      } if (this.device === 'SW3850') {
        return this.statusData[6]
      }
      return this.statusData[7]
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
    padding-top: 5px;
    padding-left: 20px;
    margin: 12px;
    width: 200px;
    height: 100px;
    background-color: #00e6b8;
    border-radius: 10px;
  }
  .status-val {
    margin-left: 15px;
    font-size: 22px;
    font-weight: 700;
  }
</style>
