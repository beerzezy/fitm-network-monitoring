<template>
  <div class="traffic">
    <header>
      <Navbar />
    </header>
    <div class="y-scroll">
      <div class="contain mx-10">
        <div class="custom-time mb-5">
          <v-btn
            width="100"
            color="#039BE5"
            class="white--text mx-10"
            @click="getTrafficPickerView()">
            PickDate
          </v-btn>
          <v-btn
            width="100"
            color="#039BE5"
            class="white--text mx-10"
            @click="getTrafficType('hours'), celarData()">
            Hours
          </v-btn>
          <v-btn
            width="100"
            color="#039BE5"
            class="white--text mx-10"
            @click="getTrafficType('days'), celarData()">
            Days
          </v-btn>
          <v-btn
            width="100"
            color="#039BE5"
            class="white--text mx-10"
            @click="getTrafficType('month'), celarData()">
            Month
          </v-btn>
          <v-btn
            width="100"
            color="#039BE5"
            class="white--text mx-10"
            @click="getTrafficType('year'), celarData()">
            Year
          </v-btn>
        </div>
          <v-row justify="space-around" v-if="isView" >
            <v-date-picker v-model="picker" color="green lighten-1"></v-date-picker>
          </v-row>
          <v-btn v-if="isView"
            width="100"
            color="#039BE5"
            class="white--text mx-10"
            @click="getTrafficPick(), celarData ()">
            Ok
          </v-btn>
        <v-row>
          <v-col cols="6">
            <div class="bg-ct">
              <div class="pad-chart">
                <div class="title-chart">
                  Traffic <span> {{ device[0] }} </span>
                </div>
                <div class="bg-chart">
                  <ve-line
                    :data="r124Data"
                    :settings="chartSettings"
                    :colors="colors"
                    :loading="loading"
                    height="350px">
                  </ve-line>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="bg-ct">
              <div class="pad-chart">
                <div class="title-chart">
                  Traffic <span> {{ device[1] }} </span>
                </div>
                <div class="bg-chart">
                  <ve-line
                    :data="r330aData"
                    :settings="chartSettings"
                    :colors="colors"
                    :loading="loading"
                    height="350px">
                  </ve-line>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <div class="bg-ct">
              <div class="pad-chart">
                <div class="title-chart">
                  Traffic <span> {{ device[2] }} </span>
                </div>
                <div class="bg-chart">
                  <ve-line
                    :data="r101cData"
                    :settings="chartSettings"
                    :colors="colors"
                    :loading="loading"
                    height="350px">
                  </ve-line>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="bg-ct">
              <div class="pad-chart">
                <div class="title-chart">
                  Traffic <span> {{ device[3] }} </span>
                </div>
                <div class="bg-chart">
                  <ve-line
                    :data="r415Data"
                    :settings="chartSettings"
                    :colors="colors"
                    :loading="loading"
                    height="350px">
                  </ve-line>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <div class="bg-ct">
              <div class="pad-chart">
                <div class="title-chart">
                  Traffic <span> {{ device[4] }} </span>
                </div>
                <div class="bg-chart">
                  <ve-line
                    :data="rshopData"
                    :settings="chartSettings"
                    :colors="colors"
                    :loading="loading"
                    height="350px">
                  </ve-line>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="bg-ct">
              <div class="pad-chart">
                <div class="title-chart">
                  Traffic <span> {{ device[5] }} </span>
                </div>
                <div class="bg-chart">
                  <ve-line
                    :data="sw4503Data"
                    :settings="chartSettings"
                    :colors="colors"
                    :loading="loading"
                    height="350px">
                  </ve-line>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <div class="bg-ct">
              <div class="pad-chart">
                <div class="title-chart">
                  Traffic <span> {{ device[6] }} </span>
                </div>
                <div class="bg-chart">
                  <ve-line
                    :data="sw3850Data"
                    :settings="chartSettings"
                    :colors="colors"
                    :loading="loading"
                    height="350px">
                  </ve-line>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="6">
            <div class="bg-ct">
              <div class="pad-chart">
                <div class="title-chart">
                  Traffic <span> {{ device[7] }} </span>
                </div>
                <div class="bg-chart">
                  <ve-line
                    :data="rsadData"
                    :settings="chartSettings"
                    :colors="colors"
                    :loading="loading"
                    height="350px">
                  </ve-line>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import TrafficProvider from '@/resources/traffic_provider'

export default {
  name: 'Traffic',
  components: {
    Navbar
  },
  data () {
    return {
      isView: false,
      picker: new Date().toISOString().substr(0, 10),
      device: [
        'r124',
        'r330a',
        'r101c',
        'r415',
        'rshop',
        'sw4503',
        'sw3850',
        'rsad'
      ],
      loading: false,
      timeType: 'now',
      chartSettings: {
        metrics: ['inbound', 'outbound'],
        dimension: ['timestamp']
      },
      r124Data: {
        columns: ['inbound', 'outbound'],
        rows: []
      },
      r330aData: {
        columns: ['inbound', 'outbound'],
        rows: []
      },
      r101cData: {
        columns: ['inbound', 'outbound'],
        rows: []
      },
      r415Data: {
        columns: ['inbound', 'outbound'],
        rows: []
      },
      rshopData: {
        columns: ['inbound', 'outbound'],
        rows: []
      },
      sw4503Data: {
        columns: ['inbound', 'outbound'],
        rows: []
      },
      sw3850Data: {
        columns: ['inbound', 'outbound'],
        rows: []
      },
      rsadData: {
        columns: ['inbound', 'outbound'],
        rows: []
      },
      colors: ['#FF0000', '#039BE5']
    }
  },
  created () {
    this.loading = true
    this.getTraffic(this.device[0])
    this.getTraffic(this.device[1])
    this.getTraffic(this.device[2])
    this.getTraffic(this.device[3])
    this.getTraffic(this.device[4])
    this.getTraffic(this.device[5])
    this.getTraffic(this.device[6])
    this.getTraffic(this.device[7])
    this.loading = false
    setInterval(() => {
      this.loading = true
      if (this.timeType === 'pick') {
        this.getTrafficPick()
      } else if (this.timeType === 'now') {
        this.getTraffic(this.device[0])
        this.getTraffic(this.device[1])
        this.getTraffic(this.device[2])
        this.getTraffic(this.device[3])
        this.getTraffic(this.device[4])
        this.getTraffic(this.device[5])
        this.getTraffic(this.device[6])
        this.getTraffic(this.device[7])
      } else {
        this.getTrafficType(this.timeType)
      }
      this.loading = false
    }, 60000)
  },
  methods: {
    getTrafficPickerView (deviceName) {
      this.isView = true
    },
    async getTrafficPick () {
      this.isView = false
      this.timeType = "pick"
      const dateTime = this.$moment().format('YYYY-MM-DD')

      const stTime = `${this.picker} 00:00`
      const edTime = `${dateTime} 23:59`

      if (stTime > edTime) {
        console.log("(stTime > edTime)")
      }

      const stFormat = this.$moment(stTime).format('x')
      const edFormat = this.$moment(edTime).format('x')

      const resR124 = await TrafficProvider.fetchTrafficPick('r124', stFormat.substr(0, 10), edFormat.substr(0, 10))
      const resR330A = await TrafficProvider.fetchTrafficPick('r330a', stFormat.substr(0, 10), edFormat.substr(0, 10))
      const resR101C = await TrafficProvider.fetchTrafficPick('r101c', stFormat.substr(0, 10), edFormat.substr(0, 10))
      const resR415 = await TrafficProvider.fetchTrafficPick('r415', stFormat.substr(0, 10), edFormat.substr(0, 10))
      const resRSHOP = await TrafficProvider.fetchTrafficPick('rshop', stFormat.substr(0, 10), edFormat.substr(0, 10))
      const resSW4503 = await TrafficProvider.fetchTrafficPick('sw4503', stFormat.substr(0, 10), edFormat.substr(0, 10))
      const resSW3850 = await TrafficProvider.fetchTrafficPick('sw3850', stFormat.substr(0, 10), edFormat.substr(0, 10))
      const resRSAD = await TrafficProvider.fetchTrafficPick('rsad', stFormat.substr(0, 10), edFormat.substr(0, 10))

      this.r124Data.rows = resR124.data
      this.r330aData.rows = resR330A.data
      this.r101cData.rows = resR101C.data
      this.r415Data.rows = resR415.data
      this.rshopData.rows = resRSHOP.data
      this.sw4503Data.rows = resSW4503.data
      this.sw3850Data.rows = resSW3850.data
      this.rsadData.rows = resRSAD.data
    },
    async getTraffic (deviceName) {
      const dateTime = this.$moment().format('YYYY-MM-DD')
      const stTime = `${dateTime} 00:00`
      const edTime = `${dateTime} 23:59`

      const stFormat = this.$moment(stTime).format('x')
      const edFormat = this.$moment(edTime).format('x')

      const res = await TrafficProvider.fetchTraffic(
        deviceName
      )
      if (res && deviceName === 'r124') {
        this.r124Data.rows = res.data
      } else if (res && deviceName === 'r330a') {
        this.r330aData.rows = res.data
      } else if (res && deviceName === 'r101c') {
        this.r101cData.rows = res.data
      } else if (res && deviceName === 'r415') {
        this.r415Data.rows = res.data
      } else if (res && deviceName === 'rshop') {
        this.rshopData.rows = res.data
      } else if (res && deviceName === 'sw4503') {
        this.sw4503Data.rows = res.data
      } else if (res && deviceName === 'sw3850') {
        this.sw3850Data.rows = res.data
      } else {
        this.rsadData.rows = res.data
      }

      this.timeType = 'now'
    },
    async getTrafficType (timeType) {
      this.timeType = timeType
      const resR124 = await TrafficProvider.fetchTrafficType('r124', this.timeType)
      const resR330A = await TrafficProvider.fetchTrafficType('r330a', this.timeType)
      const resR101C = await TrafficProvider.fetchTrafficType('r101c', this.timeType)
      const resR415 = await TrafficProvider.fetchTrafficType('r415', this.timeType)
      const resRSHOP = await TrafficProvider.fetchTrafficType('rshop', this.timeType)
      const resSW4503 = await TrafficProvider.fetchTrafficType('sw4503', this.timeType)
      const resSW3850 = await TrafficProvider.fetchTrafficType('sw3850', this.timeType)
      const resRSAD = await TrafficProvider.fetchTrafficType('rsad', this.timeType)

      this.r124Data.rows = resR124.data
      this.r330aData.rows = resR330A.data
      this.r101cData.rows = resR101C.data
      this.r415Data.rows = resR415.data
      this.rshopData.rows = resRSHOP.data
      this.sw4503Data.rows = resSW4503.data
      this.sw3850Data.rows = resSW3850.data
      this.rsadData.rows = resRSAD.data
    },
    celarData () {
      this.r124Data.rows = []
      this.r101cData.rows = []
      this.r330aData.rows = []
      this.r101cData.rows = []
      this.r415Data.rows = []
      this.rshopData.rows = []
      this.sw4503Data.rows = []
      this.sw3850Data.rows = []
      this.rsadData.rows = []
    } 
  }
}
</script>

<style scoped>
  .custom-time {
    display: flex;
    justify-content: center;
  }
</style>
