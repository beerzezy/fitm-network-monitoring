<template>
  <div class="dashboard">
    <header>
      <Navbar />
    </header>
  <div align='right'>
      {{ showType }}
  </div> 
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
                  <p>Internet Traffic SW9400</p>
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
                      <p>Top 10 Rank Vlan Traffic</p>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn
                      depressed
                      class="mr-5 white--text"
                      color="#FF0000"
                      @click="topRank = 'inbound'">
                      Inbound
                    </v-btn>
                    <v-btn
                      depressed
                      class="white--text"
                      color="#039BE5"
                      @click="topRank = 'outbound'">
                      Outbound
                    </v-btn>
                  </v-row>
                  <div class="bg-chart">
                    <ve-histogram
                      v-if="topRank === 'inbound'"
                      height="350px"
                      :data="inboundData"
                      :settings="inboundSettings"
                      :colors="inboundColors"
                      :extend="extend">
                    </ve-histogram>
                    <ve-histogram
                      v-else
                      height="350px"
                      :data="outboundData"
                      :settings="outboundSettings"
                      :colors="outboundColors"
                      :extend="extend">
                    </ve-histogram>
                  </div>
                  <div v-if="topRank === 'inbound'">
                    <table>
                      <tr>
                        <th class="text-center">
                          No.
                        </th>
                        <th class="text-center">
                          Name
                        </th>
                        <!-- <th class="text-center">
                          Network
                        </th> -->
                        <th class="text-center">
                          Value (MB)
                        </th>
                      </tr>
                      <tr
                        v-for="(item,index) in inboundData.rows"
                        :key="index"
                        style="color: lightgrey;">
                        <td class="text-center">
                          {{ index + 1 }}
                        </td>
                        <td class="text-center">
                          {{ item.interface.replace("unrouted ", "") }}
                        </td>
                        <!-- <td>{{ }}</td> -->
                        <td class="text-center">
                          {{ item.inbound }}
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div v-else>
                    <table>
                      <tr>
                        <th class="text-center">
                          No.
                        </th>
                        <th class="text-center">
                          Name
                        </th>
                        <th class="text-center">
                          Value (MB)
                        </th>
                      </tr>
                      <tr
                        v-for="(item,index) in outboundData.rows"
                        :key="index"
                        style="color: lightgrey;">
                        <td class="text-center">
                          {{ index + 1 }}.
                        </td>
                        <td class="text-center">
                          {{ item.interface.replace("unrouted ", "") }}
                        </td>
                        <td>{{ }}</td>
                        <td class="text-center">
                          {{ item.outbound }}
                        </td>
                      </tr>
                    </table>
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
      topRank: 'inbound',
      chartSettings: {
        metrics: ['inbound', 'outbound'],
        dimension: ['timestamp']
      },
      chartData: {
        columns: ['inbound', 'outbound'],
        rows: []
      },
      colors: ['#FF0000', '#039BE5'],
      inboundColors: ['#FF0000'],
      outboundColors: ['#039BE5'],
      inboundSettings: {
        metrics: ['inbound'],
        dimension: ['interface']
      },
      inboundData: {
        columns: ['interface', 'inbound'],
        rows: []
      },
      outboundSettings: {
        metrics: ['outbound'],
        dimension: ['interface']
      },
      outboundData: {
        columns: ['interface', 'outbound'],
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
      },
      showType: new Date(Date.now()).toDateString() +'Show All of The Day (Inbound / MB, Outbound / MB)'
    }
  },
  mounted () {
    this.getTopRankInbound()
    this.getTopRankOutbound()
    this.getSpeed()
    this.getCoreTraffic()

    setInterval(() => {
      this.getTopRankInbound()
      this.getTopRankOutbound()
      this.getSpeed()
      this.getCoreTraffic()
    }, 300000)
  },
  methods: {
    async getTopRankInbound () {
      const res = await TopRankProvider.fetchTopRankInbound()
      if (res) {
        this.inboundData.rows = res.data
      }
    },
    async getTopRankOutbound () {
      const res = await TopRankProvider.fetchTopRankOutbound()
      if (res) {
        this.outboundData.rows = res.data
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

      const res = await TrafficProvider.fetchTraffic('sw9400', stFormat.substr(0, 10), edFormat.substr(0, 10))
      if (res) {
        this.chartData.rows = res.data
      }
    }
  }
}
</script>

<style scoped>
  .dashboard {
    height: 100%;
  }
  .select-contain {
    padding-top: 12px;
    margin-left: 170px;
    margin-right: 170px;
  }
  table {
    margin: 0px auto;
    margin-top: 30px;
    width: 90%;
  }
  th {
    padding-bottom: 10px;
    color: #039BE5;
    font-size: 18px;
    border-bottom: 2px solid lightgray;
  }
  td {
    padding: 10px 0px;
  }
</style>
