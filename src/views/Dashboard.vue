<template>
  <div>
    <header>
      <Navbar />
    </header>
    <div>
      <v-container class="mag-t-40">
        <div class="dp-flex">
          <div class="bg-ct flex-50 pie-chiart-1">
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
          <div class="bg-ct flex-50">
            <div class="pad-chart">
              <div class="title-chart">
                <p>Internet Traffic SW4503</p>
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
  name: 'Dashboard',
  components: {
    Navbar
  },
  data () {
    return {
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
      },
      ringSettings: {
        metrics: ['traffic'],
        dimension: ['name'],
        radius: [80, 150],
        offsetY: 220
      },
      ringData: {
        columns: ['Date', 'name', 'traffic'],
        rows: [
          { name: 'R124', traffic: 152 },
          { name: 'R330A', traffic: 162 },
          { name: 'R1101C', traffic: 142 },
          { name: 'R415', traffic: 172 },
          { name: 'Rshop', traffic: 152 },
          { name: 'SW4503', traffic: 192 },
          { name: 'SW3850', traffic: 192 },
          { name: 'RSAD', traffic: 192 }
        ]
      }
    }
  }
}
</script>
