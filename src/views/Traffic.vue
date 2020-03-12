<template>
  <div class="traffic">
    <header>
      <Navbar />
    </header>
    <div class="y-scroll">
      <div class="contain mx-10">
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
      this.getTraffic(this.device[0])
      this.getTraffic(this.device[1])
      this.getTraffic(this.device[2])
      this.getTraffic(this.device[3])
      this.getTraffic(this.device[4])
      this.getTraffic(this.device[5])
      this.getTraffic(this.device[6])
      this.getTraffic(this.device[7])
      this.loading = false
    }, 300000)
  },
  methods: {
    async getTraffic (deviceName) {
      const dateTime = this.$moment().format('YYYY-MM-DD')
      const stTime = `${dateTime} 00:00`
      const edTime = `${dateTime} 23:59`

      const stFormat = this.$moment(stTime).format('x')
      const edFormat = this.$moment(edTime).format('x')

      const res = await TrafficProvider.fetchTraffic(
        deviceName, stFormat.substr(0, 10), edFormat.substr(0, 10)
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
    }
  }
}
</script>

<style>

</style>
