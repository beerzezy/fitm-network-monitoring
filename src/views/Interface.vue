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
        <div class="bg-ct pad-chart">
          <div class="title-chart">
            <p>Interface {{ device }}</p>
          </div>
          <v-simple-table
            :height="420">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-center">
                    Interface
                  </th>
                  <th class="text-center">
                    Status
                  </th>
                  <th class="text-center">
                    Inbound ( MB )
                  </th>
                  <th class="text-center">
                    Otbound ( MB )
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in items"
                  :key="index"
                  :class="item.sta === 'up' ? 'up-port' : 'down-port'">
                  <td class="text-center">
                    {{ item.inf }}
                  </td>
                  <td class="text-center">
                    {{ item.sta }}
                  </td>
                  <td class="text-center">
                    {{ item.in }}
                  </td>
                  <td class="text-center">
                    {{ item.out }}
                  </td>
                  <td class="text-center">
                    <v-icon
                      large
                      @click="powerSwitch(index)">
                      mdi-power
                    </v-icon>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
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
      device: 'R124',
      items: [
        { inf: 'GigabitEthernet0/1', sta: 'up', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/2', sta: 'down', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/3', sta: 'up', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/4', sta: 'up', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/5', sta: 'down', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/6', sta: 'up', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/7', sta: 'up', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/8', sta: 'down', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/9', sta: 'up', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/10', sta: 'up', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/11', sta: 'up', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/12', sta: 'up', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/13', sta: 'up', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/14', sta: 'up', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/15', sta: 'down', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/16', sta: 'down', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/17', sta: 'up', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/18', sta: 'up', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/19', sta: 'up', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/20', sta: 'up', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/21', sta: 'up', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/22', sta: 'up', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/23', sta: 'up', in: 125, out: 168 },
        { inf: 'GigabitEthernet0/24', sta: 'up', in: 125, out: 168 }
      ]
    }
  },
  methods: {
    powerSwitch (index) {
      if (this.items[index].sta === 'up') {
        this.items[index].sta = 'down'
      } else {
        this.items[index].sta = 'up'
      }
    }
  }
}
</script>

<style scoped>
  th {
    font-size: 18px;
  }
  tr td {
    color: #ffffff;
  }
  tr:hover.up-port{
    background-color:  #4caf50 !important;
  }
  tr:hover.down-port{
    background-color: #ff5252 !important;
  }
  .up-port {
    background-color: #4caf50;
  }
  .down-port{
    background-color: #ff5252;
  }
  .v-icon:hover {
    cursor: pointer;
  }
</style>
