<template>
  <div class="dashboard">
    <header>
      <Navbar />
    </header>
  <div align='right'>
  </div> 

  <div style="padding:15px;margin-top:70px;">
    <div class="row">
      <div class="col-sm-6">
        <div class="card border-dark">
          <div class="card-header text-white bg-dark mb-3">Traffic Radio</div>
          <div class="card-body">
            <ve-ring
              :data="ringData"
              :settings="ringSettings">
            </ve-ring>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card border-dark">
          <div class="card-header text-white bg-dark mb-3">Internet Traffic SW9400  {{ showType }} (Inbound / MB, Outbound / MB)</div>
          <div class="card-body">
            <ve-line
              :data="chartData"
              :settings="chartSettings"
              :colors="colors"
              :extend="extend1">
            </ve-line>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="card border-dark">
          <div class="card-header text-white bg-dark mb-3">Top 10 Rank Vlan Traffic</div>
          <div class="card-body">
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
              <div style="text-align:right;">
                <button @click="topRank = 'inbound'" style="margin-right:10px;" type="button" class="btn btn-primary">Inbound</button>
                <button @click="topRank = 'outbound'" type="button" class="btn btn-primary">Outbound</button>
              </div>

              <table class="table">
                <thead>
                  <tr>
                    <th scope="col" style="text-align:center;">No.</th>
                    <th scope="col" style="text-align:center;">Name</th>
                    <th scope="col" style="text-align:center;">Place</th>
                    <th scope="col" style="text-align:center;">Value (MB)</th>
                  </tr>
                </thead>
                <tbody v-if="topRank === 'inbound'">
                  <tr v-for="(item,index) in inboundData.rows" :key="index">
                    <td style="text-align:center;">{{ index + 1 }}</td>
                    <td style="text-align:center;">{{ item.interface.replace("unrouted ", "") }}</td>
                    <td style="text-align:center;">{{ item.place }}</td>
                    <td style="text-align:center;">{{ item.inbound }}</td>
                  </tr>
                </tbody>

                <tbody v-else>
                  <tr v-for="(item,index) in outboundData.rows" :key="index">
                    <td style="text-align:center;">{{ index + 1 }}</td>
                    <td style="text-align:center;">{{ item.interface.replace("unrouted ", "") }}</td>
                    <td style="text-align:center;">{{ item.place }}</td>
                    <td style="text-align:center;">{{ item.outbound }}</td>
                  </tr>
                </tbody>
              </table>

          </div>
        </div>
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
      extend1: {
        series: {
          smooth: false
        }
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
      chartExtend : {
	      legend: {show: false}, // Hide legend
	      series: {
          center: ['50%', '50%']
        }
	    },
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
      showType: new Date(Date.now()).toDateString()
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

      const res = await TrafficProvider.fetchTrafficType('sw9400', "month")
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
