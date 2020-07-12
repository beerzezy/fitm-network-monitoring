<template>
    <div>
        <p class="title">Network Topology</p>
        <div class="topology-container">
            <div class="cl-sw">
                <img src="@/assets/img/topology-modify.png" style="width:1600px;border-radius:10px;">
            </div>

            <!-- ******** ROUTER-SW9400 ******** -->       
            <div v-if="false" class="router-sw9400">
                <div class="router-sw9400-down"></div>
            </div>

            <!-- ******** ROUTER-CLOUD ******** -->       
            <div v-if="false" class="router-cloud">
                <div class="router-cloud-down"></div>
            </div>

            <!-- ******** RSHOP ******** -->
            <div v-if="true" class="rshop-status">
                <div class="rshop-line1-down"></div>
                <div class="rshop-line2-down"></div>
                <div class="rshop-line3-down"></div>
            </div>   

            <!-- ******** R101C ******** -->       
            <div v-if="true" class="r101c-status">
                <div class="r101c-line1-down"></div>
                <div class="r101c-line2-down"></div>
                <div class="r101c-line3-down"></div>
            </div>

            <!-- ******** SW3850-R415 ******** -->
            <div v-if="true" class="r124-status">
                <div class="r124-line1-down"></div>
            </div>

            <!-- ******** R101C ******** -->       
            <div v-if="true" class="sw3850-r415-status">
                <div class="sw3850-r415-line1-down"></div>
                <div class="sw3850-r415-line2-down"></div>
                <div class="sw3850-r415-line3-down"></div>
            </div>

            <!-- ******** R330A ******** -->       
            <div v-if="true" class="r330a-status">
                <div class="r330a-line1-down"></div>
                <div class="r330a-line2-down"></div>
                <div class="r330a-line3-down"></div>
            </div>

            <!-- ******** RSAD ******** -->       
            <div v-if="true" class="rsad-line1-status">
                <div class="rsad-line1-down"></div>
                <div class="rsad-line2-down"></div>
                <div class="rsad-line3-down"></div>
            </div>

            <!-- ******** R101C-R124 ******** -->       
            <div v-if="true" class="r101c-r124-status">
                <div class="r101c-r124-down"></div>
            </div>

            <!-- ******** R124-SW3850-R415 ******** -->       
            <div v-if="true" class="r101c-sw3850-r415-status">
                <div class="r101c-sw3850-r415-down"></div>
            </div>

            <!-- ******** SW3850-R415-R330A ******** -->       
            <div v-if="true" class="sw3850-r415-r330a-status">
                <div class="sw3850-r415-r330a-down"></div>
            </div>

            <!-- ******** RSHOP-SW3850-R415 ******** -->       
            <div v-if="true" class="rshop-sw3850-r415-status">
                <div class="rshop-sw3850-r415-line1-down"></div>
                <div class="rshop-sw3850-r415-line2-down"></div>
                <div class="rshop-sw3850-r415-line3-down"></div>
            </div>

            <!-- ******** SW3850-R415-R145 ******** -->       
            <div v-if="true" class="sw3850-r415-r415-status">
                <div class="sw3850-r415-r415-line1-down"></div>
                <div class="sw3850-r415-r415-line2-down"></div>
                <div class="sw3850-r415-r415-line3-down"></div>
                <div class="sw3850-r415-r415-line4-down"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.topology-container {
    text-align: center;
    margin-top: 25px;
}

.title {
    font-size: 50px;
    color: #fff;
    text-align: left;
}

.router-sw9400-down {
    width: 96px;
    height: 48px;
    top: 312px;
    margin-left: 788px;
    border-bottom: 4px solid red;
    -webkit-transform: rotate(90deg); 
    position: absolute;
    z-index: 50;
}

.router-cloud-down {
    width: 190px;
    height: 48px;
    top: 213px;
    margin-left: 888px;
    border-bottom: 4px solid red;
    /* -webkit-transform: rotate(90deg);  */
    position: absolute;
    z-index: 50;
}

.sw3850-r415-r415-line1-down {
    width: 142px;
    height: 48px;
    top: 654px;
    margin-left: 989px;
    border-bottom: 4px solid red;
    -webkit-transform: rotate(90deg); 
    position: absolute;
    z-index: 50;
}
.sw3850-r415-r415-line2-down {
    width: 142px;
    height: 48px;
    top: 654px;
    margin-left: 999px;
    border-bottom: 4px solid red;
    -webkit-transform: rotate(90deg); 
    position: absolute;
    z-index: 50;
}
.sw3850-r415-r415-line3-down {
    width: 142px;
    height: 48px;
    top: 654px;
    margin-left: 1008px;
    border-bottom: 4px solid red;
    -webkit-transform: rotate(90deg); 
    position: absolute;
    z-index: 50;
}
.sw3850-r415-r415-line4-down {
    width: 142px;
    height: 48px;
    top: 654px;
    margin-left: 1018px;
    border-bottom: 4px solid red;
    -webkit-transform: rotate(90deg); 
    position: absolute;
    z-index: 50;
}

.rshop-sw3850-r415-line1-down {
    width: 54px;
    height: 48px;
    top: 629px;
    margin-left: 180px;
    border-bottom: 4px solid red;
    -webkit-transform: rotate(90deg); 
    position: absolute;
    z-index: 50;
}
.rshop-sw3850-r415-line2-down {
    width: 846px;
    height: 48px;
    top: 633px;
    margin-left: 184px;
    border-bottom: 4px solid red;
    /* -webkit-transform: rotate(90deg);  */
    position: absolute;
    z-index: 50;
}
.rshop-sw3850-r415-line3-down {
    width: 73px;
    height: 48px;
    top: 620px;
    margin-left: 1014px;
    border-bottom: 4px solid red;
    -webkit-transform: rotate(90deg); 
    position: absolute;
    z-index: 50;
}

.sw3850-r415-r330a-down {
    width: 95px;
    height: 48px;
    top: 538px;
    margin-left: 1122px;
    border-bottom: 4px solid red;
    /* -webkit-transform: rotate(90deg);  */
    position: absolute;
    z-index: 50;
}

.r101c-sw3850-r415-down {
    width: 95px;
    height: 48px;
    top: 538px;
    margin-left: 874px;
    border-bottom: 4px solid red;
    /* -webkit-transform: rotate(90deg);  */
    position: absolute;
    z-index: 50;
}

.r101c-r124-down {
    width: 190px;
    height: 48px;
    top: 538px;
    margin-left: 533px;
    border-bottom: 4px solid red;
    /* -webkit-transform: rotate(90deg);  */
    position: absolute;
    z-index: 50;
}

.rsad-line1-down {
    width: 70px;
    height: 48px;
    top: 503px;
    margin-left: 1487px;
    border-bottom: 4px solid red;
    -webkit-transform: rotate(90deg); 
    position: absolute;
    z-index: 50;
}
.rsad-line2-down {
    width: 647px;
    height: 48px;
    top: 447px;
    margin-left: 855px;
    border-bottom: 4px solid red;
    /* -webkit-transform: rotate(90deg);  */
    position: absolute;
    z-index: 50;
}
.rsad-line3-down {
    width: 52px;
    height: 48px;
    top: 445px;
    margin-left: 853px;
    border-bottom: 4px solid red;
    -webkit-transform: rotate(90deg); 
    position: absolute;
    z-index: 50;
}

.r330a-line1-down {
    width: 60px;
    height: 48px;
    top: 507px;
    margin-left: 1292px;
    border-bottom: 4px solid red;
    -webkit-transform: rotate(90deg); 
    position: absolute;
    z-index: 50;
}
.r330a-line2-down {
    width: 465px;
    height: 48px;
    top: 457px;
    margin-left: 836px;
    border-bottom: 4px solid red;
    /* -webkit-transform: rotate(90deg);  */
    position: absolute;
    z-index: 50;
}
.r330a-line3-down {
    width: 62px;
    height: 48px;
    top: 450px;
    margin-left: 829px;
    border-bottom: 4px solid red;
    -webkit-transform: rotate(90deg); 
    position: absolute;
    z-index: 50;
}

.sw3850-r415-line1-down {
    width: 50px;
    height: 48px;
    top: 512px;
    margin-left: 1050px;
    border-bottom: 4px solid red;
    -webkit-transform: rotate(90deg); 
    position: absolute;
    z-index: 50;
}
.sw3850-r415-line2-down {
    width: 234px;
    height: 48px;
    top: 467px;
    margin-left: 820px;
    border-bottom: 4px solid red;
    /* -webkit-transform: rotate(90deg);  */
    position: absolute;
    z-index: 50;
}
.sw3850-r415-line3-down {
    width: 70px;
    height: 48px;
    top: 455px;
    margin-left: 809px;
    border-bottom: 4px solid red;
    -webkit-transform: rotate(90deg); 
    position: absolute;
    z-index: 50;
}

.r124-line1-down {
    width: 118px;
    height: 48px;
    top: 479px;
    margin-left: 769px;
    border-bottom: 4px solid red;
    -webkit-transform: rotate(90deg); 
    position: absolute;
    z-index: 50;
}

.r101c-line1-down {
    width: 46px;
    height: 48px;
    top: 510px;
    margin-left: 458px;
    border-bottom: 4px solid red;
    -webkit-transform: rotate(90deg); 
    position: absolute;
    z-index: 50;
}
.r101c-line2-down {
    width: 333px;
    height: 48px;
    top: 467px;
    margin-left: 458px;
    border-bottom: 4px solid red;
    /* -webkit-transform: rotate(90deg);  */
    position: absolute;
    z-index: 50;
}
.r101c-line3-down {
    width: 70px;
    height: 48px;
    top: 455px;
    margin-left: 777px;
    border-bottom: 4px solid red;
    -webkit-transform: rotate(90deg); 
    position: absolute;
    z-index: 50;
}

.rshop-line1-down {
    width: 51px;
    height: 48px;
    top: 505px;
    margin-left: 183px;
    border-bottom: 4px solid red;
    -webkit-transform: rotate(90deg); 
    position: absolute;
    z-index: 50;
}
.rshop-line2-down {
    width: 591px;
    height: 48px;
    top: 457px;
    margin-left: 184px;
    border-bottom: 4px solid red;
    /* -webkit-transform: rotate(90deg);  */
    position: absolute;
    z-index: 50;
}
.rshop-line3-down {
    width: 62px;
    height: 48px;
    top: 450px;
    margin-left: 764px;
    border-bottom: 4px solid red;
    -webkit-transform: rotate(90deg); 
    position: absolute;
    z-index: 50;
}
</style>