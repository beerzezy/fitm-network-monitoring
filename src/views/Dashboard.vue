<template>
  <div class="dashboard">
    <header>
      <Navbar />
    </header>
    <div class="y-scroll">
      <div class="contain">
        <div class="mx-8">
          <div class="dp-flex">
            <div class="bg-ct flex-38 mr-2">
              <div class="pad-chart">
                <div class="title-chart">
                  <p>Traffic Radio</p>
                </div>
                <div class="bg-chart">
                  <ve-ring
                    :data="ringData"
                    :settings="ringSettings">
                  </ve-ring>
                </div>
              </div>
            </div>
            <div class="bg-ct flex-62">
              <div class="pad-chart pb-0">
                <div class="title-chart">
                  <p>Internet Traffic SW4503</p>
                </div>
                <div class="bg-chart">
                  <ve-line
                    :data="chartData"
                    :settings="chartSettings"
                    :colors="colors">
                  </ve-line>
                </div>
              </div>
            </div>
          </div>
          <v-row>
            <v-col cols="12">
              <div class="bg-ct mt-2">
                <div class="pad-chart">
                  <v-row>
                    <div class="title-chart">
                      <p>Top 10 Rank Traffic</p>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn
                      depressed
                      class="mr-5 white--text"
                      color="#FF0000"
                      @click="getTopRankInbound">
                      Inbound
                    </v-btn>
                    <v-btn
                      depressed
                      class="white--text"
                      color="#039BE5"
                      @click="getTopRankOutbound">
                      Outbound
                    </v-btn>
                  </v-row>
                  <div class="dp-flex">
                    <div class="flex-20">
                      <p
                        v-for="(item,index) in HisData.rows"
                        :key="index"
                        style="color: lightgray;">
                        {{ index + 1 }}. {{ item.interface }}
                      </p>
                    </div>
                    <div class="bg-chart flex-80">
                      <ve-histogram
                        height="350px"
                        :data="HisData"
                        :settings="HisSettings"
                        :colors="colors"
                        :extend="extend">
                      </ve-histogram>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import TopRankProvider from '@/resources/toprank_provider'
import SpeedProvider from '@/resources/speed_provider'
import TrafficProvider from '@/resources/traffic_provider'

export default {
  name: 'Dashboard',
  components: {
    Navbar
  },
  data () {
    this.extend = {
      'xAxis.0.axisLabel.rotate': 45
    }
    return {
      device: '',
      chartSettings: {
        metrics: ['inbound', 'outbound'],
        dimension: ['timestamp']
      },
      chartData: {
        columns: ['inbound', 'outbound'],
        rows: []
      },
      colors: ['#FF0000', '#039BE5'],
      HisSettings: {
        metrics: ['inbound', 'outbound'],
        dimension: ['interface']
      },
      HisData: {
        columns: ['interface', 'inbound', 'outbound'],
        rows: []
      },
      // grid: {
      //   show: true,
      //   backgroundColor: '#ffffff'
      //   // borderColor: '#FF0000'
      // },
      ringSettings: {
        metrics: ['speed'],
        dimension: ['deviceName'],
        radius: [80, 150],
        offsetY: 220,
        roseType: 'radius'
      },
      ringData: {
        columns: ['deviceName', 'speed'],
        rows: []
      }
    }
  },
  mounted () {
    this.getTopRankInbound()
    this.getSpeed()
    this.getCoreTraffic()

    setInterval(() => {
      this.getTopRankInbound()
      this.getSpeed()
      this.getCoreTraffic()
    }, 300000)
  },
  methods: {
    async getTopRankInbound () {
      const res = await TopRankProvider.fetchTopRankInbound()
      if (res) {
        this.HisData.rows = res.data
      }
    },
    async getTopRankOutbound () {
      const res = await TopRankProvider.fetchTopRankOutbound()
      if (res) {
        this.HisData.rows = res.data
      }
    },
    async getSpeed () {
      const res = await SpeedProvider.fetchSpeed()
      if (res) {
        this.ringData.rows = res.data
      }
    },
    async getCoreTraffic () {
      const dateTime = this.$moment().format('YYYY-MM-DD')
      const stTime = `${dateTime} 00:00`
      const edTime = `${dateTime} 23:59`

      const stFormat = this.$moment(stTime).format('x')
      const edFormat = this.$moment(edTime).format('x')

      const res = await TrafficProvider.fetchTraffic('sw4503', stFormat.substr(0, 10), edFormat.substr(0, 10))
      if (res) {
        this.chartData.rows = res.data
      }
    }
  }
}
</script>

<style>
  .dashboard {
    height: 100%;
  }
  .select-contain {
    padding-top: 12px;
    margin-left: 170px;
    margin-right: 170px;
  }
</style>
