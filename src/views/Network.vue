<template>
  <div class="network">
    <header>
      <Navbar />
    </header>
    <div class="network-contain">
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
        <div class="line1">
          <v-row>
            <span> 555 </span>
            <v-spacer></v-spacer>
            <span> 666 </span>
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
        <div class="line2">
          <p> 555 </p><br>
          <p> 666 </p>
        </div>
      </div>
      <div class="sw-3850 text">
        <span class="label-3850">SW4503</span>
      </div>
      <div
        id="row3"
        class="dp-flex">
        <div class="line4">
        </div>
        <div>
          <img
            src="@/assets/img/switch.png"
            alt="sw3850"
            class="img-device sw-3850 mt-5">
          <div class="line4-1">
          </div>
        </div>
        <div>
          <div class="line3">
            <v-row>
              <span> 555 </span>
              <v-spacer></v-spacer>
              <span> 666 </span>
            </v-row>
          </div>
          <div class="line3">
            <v-row>
              <span> 555 </span>
              <v-spacer></v-spacer>
              <span> 666 </span>
            </v-row>
          </div>
          <div class="line3">
            <v-row>
              <span> 555 </span>
              <v-spacer></v-spacer>
              <span> 666 </span>
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
            <div class="line4-2">
              <span> 555 </span>
            </div>
            <div class="line4-3">
              <span> 555 </span>
            </div>
            <div>
              <div class="line4-4">
                <span> 555 </span>
              </div>
              <div class="link-1">
              </div>
            </div>
            <div>
              <div class="line4-5">
                <span> 555 </span>
              </div>
              <div class="link-2">
              </div>
              <div class="link-3">
              </div>
            </div>
            <div class="mg-link">
              <div class="link-4">
              </div>
              <div class="link-5">
              </div>
            </div>
            <div class="mg-link">
              <div class="link-6">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="row4">
        <div class="dp-flex">
          <div class="link-7">
          </div>
          <div class="line4-6">
            <span> 666 </span>
          </div>
          <div class="line4-7">
            <span> 666 </span>
          </div>
          <div class="line4-8">
            <span> 666 </span>
          </div>
          <div class="line4-9">
            <span> 666 </span>
          </div>
        </div>
      </div>
      <div id="row5">
        <div class="dp-flex">
          <div class="line5">
          </div>
          <div class="dp-flex">
            <img
              src="@/assets/img/switch.png"
              alt="r101c"
              class="img-device r-101c">
            <div class="line6">
              <v-row>
                <span> 555 </span>
                <v-spacer></v-spacer>
                <span> 666 </span>
              </v-row>
            </div>
            <img
              src="@/assets/img/switch.png"
              alt="r124"
              class="img-device r-124">
            <div class="line7">
              <v-row>
                <span> 555 </span>
                <v-spacer></v-spacer>
                <span> 666 </span>
              </v-row>
            </div>
            <img
              src="@/assets/img/switch.png"
              alt="r415"
              class="img-device r-415">
            <div class="line8">
              <v-row>
                <span> 555 </span>
                <v-spacer></v-spacer>
                <span> 666 </span>
              </v-row>
            </div>
            <img
              src="@/assets/img/switch.png"
              alt="r330a"
              class="img-device r-330a">
            <div class="line9">
              <v-row>
                <span> 555 </span>
                <v-spacer></v-spacer>
                <span> 666 </span>
              </v-row>
            </div>
            <img
              src="@/assets/img/switch.png"
              alt="rsad"
              class="img-device r-sad">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Network',
  components: {
    Navbar
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
  .r-415 {
    margin-left: 5px;
  }
  .r-330a {
    margin-left: 5px;
  }
  .r-sad {
    margin-left: 5px;
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
    height: 30px;
    border-bottom: 4px solid black;
  }
  .line4 {
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
    margin-left: 5%;
    width: 140px;
    height: 30px;
    border-left: 4px solid black;
    border-right: 4px solid black;
  }
  .mg-link {
    margin-top: 28px;
  }
  /* .line4-6 {
    text-align: center;
    width: 70px;
    height: 38px;
    border-left: 4px solid black;
  }
  .line4-7 {
    text-align: center;
    width: 50px;
    height: 38px;
    border-right: 4px solid black;
  }
  .line4-8 {
    text-align: center;
    width: 80px;
    height: 38px;
    border-right: 4px solid black;
  }
  .line4-9 {
    text-align: center;
    width: 120px;
    height: 38px;
    border-right: 4px solid black;
  /* } */
</style>
