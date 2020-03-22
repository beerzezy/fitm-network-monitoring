<template>
  <div class="network">
    <header>
      <Navbar />
    </header>
    <div
      v-if="networkData.sw4503"
      class="network-contain">
      <div class="router">
        <span class="text">Router</span>
      </div>
      <div
        id="row1"
        class="dp-flex">
        <img
          src="@/assets/img/switch.png"
          alt="router"
          class="img-device router">
        <div class="line1 on">
          <v-row>
            <span> Gi0/0/0 </span>
          </v-row>
        </div>
        <img
          src="@/assets/img/cloud.png"
          alt="cloud"
          class="img-cloud">
        <div>
        </div>
      </div>
      <div

        id="row2">
        <div :class="linkDevice1">
          <p> Gi0/0/2 </p><br>
          <p> Gi2/1 </p>
        </div>
      </div>
      <div class="sw-3850 text">
        <span class="label-3850">SW3850</span>
      </div>
      <div
        id="row3"
        class="dp-flex">
        <div class="line4 on">
          <span> Gi1/0/2 </span>
        </div>
        <div>
          <img
            src="@/assets/img/switch.png"
            alt="sw3850"
            class="img-device sw-3850 mt-5">
          <div class="line4-1 on">
            <span> Gi1/0/1 </span>
          </div>
        </div>
        <div>
          <div class="line3 on">
            <v-row>
              <span> Gi0/0/1</span>
              <v-spacer></v-spacer>
              <span> Gi3/41</span>
            </v-row>
          </div>
          <div class="line3 on">
            <v-row>
              <span> Gi0/0/2</span>
              <v-spacer></v-spacer>
              <span> Gi3/43</span>
            </v-row>
          </div>
          <div class="line3 on">
            <v-row>
              <span> Gi0/0/3</span>
              <v-spacer></v-spacer>
              <span> Gi3/45</span>
            </v-row>
          </div>
          <div class="line3 on">
            <v-row>
              <span> Gi0/0/4</span>
              <v-spacer></v-spacer>
              <span> Gi3/47</span>
            </v-row>
          </div>
        </div>
        <div>
          <div class="dp-flex">
            <img
              src="@/assets/img/switch.png"
              alt="sw4503"
              class="img-device sw-4503 mt-5">
            <div class="mt-6">
              <span>SW4503</span>
            </div>
          </div>
          <div class="dp-flex">
            <div :class="linkDevice8dot1">
              <span> Gi2/6 </span>
            </div>
            <div :class="linkDevice9dot1">
              <span> Gi2/2 </span>
            </div>
            <div>
              <div class="line4-4 on">
                <span> Gi2/3 </span>
              </div>
              <div class="link-1 on">
              </div>
            </div>
            <div>
              <div class="line4-5 on">
                <span> Gi2/4 </span>
              </div>
              <div class="link-2 on">
              </div>
              <div class="link-3 on">
              </div>
            </div>
            <div class="mg-link">
              <div class="link-4 on">
              </div>
              <div class="link-5 on">
              </div>
            </div>
            <div class="mg-link">
              <div class="link-6 on">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="row4">
        <div class="dp-flex">
          <div class="link-7 on">
            <span> Gi0/49 </span>
          </div>
          <div :class="linkDevice8dot2">
            <span> Gi0/49 </span>
          </div>
          <div :class="linkDevice9dot2">
            <span> Gi0/49 </span>
          </div>
          <div class="line4-8 on">
            <span> Gi0/49 </span>
          </div>
          <div class="line4-9 on">
            <span> Gi0/49 </span>
          </div>
        </div>
      </div>
      <div id="row5">
        <div class="dp-flex">
          <div class="line5 on">
          </div>
          <div class="dp-flex">
            <img
              src="@/assets/img/switch.png"
              alt="r101c"
              class="img-device r-101c">
            <div class="line6 on">
              <v-row>
                <span> Gi0/49 </span>
                <v-spacer></v-spacer>
                <span> Gi0/3 </span>
              </v-row>
            </div>
            <img
              src="@/assets/img/switch.png"
              alt="r124"
              class="img-device r-124">
            <div class="line7 on">
              <v-row>
                <span> Gi0/51 </span>
                <v-spacer></v-spacer>
                <span> Gi0/51 </span>
              </v-row>
            </div>
            <img
              src="@/assets/img/switch.png"
              alt="r415"
              class="img-device r-415">
            <div class="line8 on">
              <v-row>
                <span> Gi0/52 </span>
                <v-spacer></v-spacer>
                <span> Gi0/51 </span>
              </v-row>
            </div>
            <img
              src="@/assets/img/switch.png"
              alt="r330a"
              class="img-device r-330a">
            <img
              src="@/assets/img/switch.png"
              alt="rsad"
              class="img-device r-sad">
          </div>
        </div>
      </div>
      <div id="row6">
        <div class="dp-flex">
          <div class="link-8"></div>
          <div>
            <span>R101C</span>
          </div>
          <div class="label-124">
            <span>R124</span>
          </div>
          <div class="label-415">
            <span>R415</span>
          </div>
          <div class="line10">
            <span> Gi0/50 </span>
          </div>
          <div class="label-330a">
            <span>R330A</span>
          </div>
          <div class="label-sad">
            <span>RSAD</span>
          </div>
        </div>
      </div>
      <div id="row7">
        <div class="dp-flex">
          <div class="line11">
            <span> Gi0/49</span>
          </div>
          <img
            src="@/assets/img/switch.png"
            alt="rshop"
            class="img-device r-shop">
          <div class="line12">
            <span> Gi0/50 </span>
          </div>
        </div>
      </div>
      <div id="row8">
        <div class="label-shop">
          <span>RSHOP</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import NetworkProvider from '@/resources/network_provider'

export default {
  name: 'Network',
  components: {
    Navbar
  },
  data () {
    return {
      networkData: []
    }
  },
  computed: {
    linkDevice1 () {
      if (this.networkData.sw4503[5].status === 'up') {
        return 'line2 on'
      }
      return 'line2 off'
    },
    linkDevice2 () {
      if (this.networkData.sw4503[5].status === 'up') {
        return 'line2 on'
      }
      return 'line2 off'
    },
    linkDevice3 () {
      if (this.networkData.sw4503[5].status === 'up') {
        return 'line2 on'
      }
      return 'line2 off'
    },
    linkDevice4 () {
      if (this.networkData.sw4503[5].status === 'up') {
        return 'line2 on'
      }
      return 'line2 off'
    },
    linkDevice5 () {
      if (this.networkData.sw4503[5].status === 'up') {
        return 'line2 on'
      }
      return 'line2 off'
    },
    linkDevice6 () {
      if (this.networkData.sw4503[5].status === 'up') {
        return 'line2 on'
      }
      return 'line2 off'
    },
    linkDevice7 () {
      if (this.networkData.sw4503[5].status === 'up') {
        return 'line2 on'
      }
      return 'line2 off'
    },
    linkDevice8dot1 () {
      if (this.networkData.sw4503[9].status === 'up' && this.networkData.r124[1].status === 'up') {
        return 'line4-2 on'
      }
      return 'line4-2 off'
    },
    linkDevice8dot2 () {
      if (this.networkData.sw4503[9].status === 'up' && this.networkData.r124[1].status === 'up') {
        return 'line4-6 on'
      }
      return 'line4-6 off'
    },
    linkDevice9dot1 () {
      if (this.networkData.sw4503[6].status === 'up' && this.networkData.r415[0].status === 'up') {
        return 'line4-3 on'
      }
      return 'line4-3 off'
    },
    linkDevice9dot2 () {
      if (this.networkData.sw4503[6].status === 'up' && this.networkData.r415[0].status === 'up') {
        return 'line4-7 on'
      }
      return 'line4-7 off'
    }
  },
  mounted () {
    this.getNetwork()
  },
  methods: {
    async getNetwork () {
      const res = await NetworkProvider.fetchNetwork()
      if (res) {
        this.networkData = res.data
        console.log(this.networkData.sw4503[5].status)
      }
    }
  }
}
</script>

<style scoped>
  .network-contain {
    margin-top: 80px;
  }
  .network span {
    font-size: 12px !important;
  }
  .network p {
    font-size: 12px !important;
  }
  .on {
    border-color: #00E676 !important;
  }
  .off {
    border-color: #ff5252 !important;
  }
  .img-device {
    width: 180px;
    height: 80px;
  }
  .img-cloud {
    width: 120px;
    height: 70px;
    margin-left: 20px;
  }
  .text {
    margin-left: 60px;
  }
  .router {
    margin-left: 40%;
  }
  #row8 {
    margin-left: 5%;
  }
  .sw-3850 {
    margin-left: 5px;
    margin-right: 35px;
  }
  .sw-3850 .text {
    margin-left: 5%;
  }
  .label-3850 {
    margin-left: 190px;
  }
  .sw-4503 {
    margin-left: 50px;
  }
  .r-101c {
    margin-left: 5px;
  }
  .r-124 {
    margin-left: 5px;
  }
  .label-124 {
    margin-left: 285px;
  }
  .r-415 {
    margin-left: 5px;
  }
  .label-415 {
    margin-left: 210px;
    margin-right: 15px;
  }
  .r-330a {
    margin-left: 5px;
  }
  .label-330a {
    margin-left: 160px;
  }
  .r-sad {
    margin-left: 50px;
  }
  .label-sad {
    margin-left: 200px;
  }
  .r-shop {
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 20px;
  }
  .label-shop {
    margin-left: 270px;
  }

  .line1 {
    width: 200px;
    height: 40px;
    border-bottom: 4px solid black;
  }
  .line2 {
    text-align: center;
    margin-left: 40%;
    width: 100px;
    height: 70px;
    border-right: 4px solid black;
  }
  .line3 {
    margin-bottom: 2px;
    width: 200px;
    height: 23px;
    border-bottom: 4px solid black;
  }
  .line4 {
    text-align: center;
    margin-left: 5%;
    margin-top: 40px;
    width: 50px;
    height: 122px;
    border-top: 4px solid black;
    border-left: 4px solid black;
  }
  .line4-1 {
    width: 90px;
    height: 56px;
    border-right: 4px solid black;
  }
  .line4-2 {
    text-align: center;
    width: 70px;
    height: 62px;
    border-right: 4px solid black;
    border-bottom: 4px solid black;
  }
  .line4-3 {
    margin-left: 10px;
    text-align: center;
    width: 50px;
    height: 62px;
    border-left: 4px solid black;
    border-bottom: 4px solid black;
  }
  .line4-4 {
    text-align: center;
    width: 50px;
    height: 47px;
    border-left: 4px solid black;
    border-bottom: 4px solid black;
  }
  .line4-5 {
    text-align: center;
    width: 110px;
    height: 32px;
    border-left: 4px solid black;
    border-bottom: 4px solid black;
  }
  .line4-6 {
    text-align: center;
    margin-left: 284px;
    width: 50px;
    height: 30px;
    border-right: 4px solid black;
  }
  .line4-7 {
    text-align: center;
    margin-left: 252px;
    width: 50px;
    height: 30px;
    border-left: 4px solid black;
  }
  .line4-8 {
    text-align: center;
    margin-left: 180px;
    width: 50px;
    height: 30px;
    border-left: 4px solid black;
  }
  .line4-9 {
    text-align: center;
    margin-left: 200px;
    width: 50px;
    height: 30px;
    border-left: 4px solid black;
  }
  .line5 {
    margin-left: 5%;
    width: 50px;
    height: 80px;
    border-left: 4px solid black;
  }
  .line6 {
    text-align: center;
    width: 130px;
    height: 40px;
    border-bottom: 4px solid black;
  }
  .line7 {
    text-align: center;
    width: 80px;
    height: 40px;
    border-bottom: 4px solid black;
  }
  .line8 {
    text-align: center;
    width: 60px;
    height: 40px;
    border-bottom: 4px solid black;
  }
  .line9 {
    text-align: center;
    width: 60px;
    height: 40px;
    border-bottom: 4px solid black;
  }
  .line10 {
    text-align: center;
    width: 60px;
    height: 30px;
    border-left: 4px solid black;
  }
  .line11 {
    text-align: center;
    margin-left: 5%;
    padding-top: 20px;
    width: 200px;
    height: 60px;
    border-left: 4px solid black;
    border-bottom: 4px solid black;
  }
  .line12 {
    padding-top: 20px;
    width: 339px;
    height: 60px;
    border-right: 4px solid black;
    border-bottom: 4px solid black;
  }

  .link-1 {
    width: 50px;
    height: 15px;
    border-bottom: 4px solid black;
  }
  .link-2 {
    width: 110px;
    height: 15px;
    border-bottom: 4px solid black;
  }
  .link-3 {
    width: 80px;
    height: 15px;
    border-bottom: 4px solid black;
  }
  .link-4 {
    width: 200px;
    height: 15px;
    border-top: 4px solid black;
  }
  .link-5 {
    text-align: center;
    width: 200px;
    height: 19px;
    border-right: 4px solid black;
    border-top: 4px solid black;
  }
  .link-6 {
    text-align: center;
    width: 250px;
    height: 34px;
    border-right: 4px solid black;
    border-top: 4px solid black;
  }
  .link-7 {
    text-align: center;
    margin-left: 5%;
    width: 140px;
    height: 30px;
    border-left: 4px solid black;
    border-right: 4px solid black;
  }
  .link-8 {
    margin-left: 5%;
    width: 130px;
    height: 30px;
    border-left: 4px solid black;
  }
  .mg-link {
    margin-top: 28px;
  }

</style>
