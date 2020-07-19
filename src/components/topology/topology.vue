<template>
    <div>
        <p class="title">Network Topology</p>
        <div class="topology-container">
            <div class="cl-sw">
                <img src="@/assets/img/topology-modify.png" style="width:1600px;border-radius:10px;">
            </div>

            <!-- ******** ROUTER->SW9400 ******** -->       
            <div v-if="sw9400_Gi_1_0_1 == 'down'" class="router-sw9400">
                <div class="router-sw9400-down"></div>
            </div>

            <!-- ******** ROUTER->CLOUD ******** -->       
            <div v-if="false" class="router-cloud">
                <div class="router-cloud-down"></div>
            </div>

            <!-- ******** RSHOP->SW9400 ******** -->
            <div v-if="rshop_Ten_1_1_3 == 'down' || sw9400_Ten_3_0_2 == 'down'" class="rshop-status">
                <div class="rshop-line1-down"></div>
                <div class="rshop-line2-down"></div>
                <div class="rshop-line3-down"></div>
            </div>   

            <!-- ******** R101C->SW9400 ******** -->       
            <div v-if="r101c_Ten_1_1_4 == 'down' || sw9400_Ten_3_0_4 == 'down'" class="r101c-status">
                <div class="r101c-line1-down"></div>
                <div class="r101c-line2-down"></div>
                <div class="r101c-line3-down"></div>
            </div>

            <!-- ******** R124->SW9400 ******** -->
            <div v-if="r124_Ten_1_1_3 == 'down' || sw9400_Ten_3_0_3 == 'down'" class="r124-status">
                <div class="r124-line1-down"></div>
            </div>

            <!-- ******** SW3850-R415->SW9400 ******** -->       
            <div v-if="sw3850_Ten_1_1_3 == 'down' || sw9400_Ten_3_0_5 == 'down'" class="sw3850-r415-status">
                <div class="sw3850-r415-line1-down"></div>
                <div class="sw3850-r415-line2-down"></div>
                <div class="sw3850-r415-line3-down"></div>
            </div>

            <!-- ******** R330A->SW9400 ******** -->       
            <div v-if="r330a_Ten_1_1_4 == 'down' || sw9400_Ten_3_0_1 == 'down'" class="r330a-status">
                <div class="r330a-line1-down"></div>
                <div class="r330a-line2-down"></div>
                <div class="r330a-line3-down"></div>
            </div>

            <!-- ******** RSAD->SW9400 ******** -->       
            <div v-if="sw9400_Ten_3_0_6 == 'down' || rsad_Gi_26 == 'down'" class="rsad-line1-status">
                <div class="rsad-line1-down"></div>
                <div class="rsad-line2-down"></div>
                <div class="rsad-line3-down"></div>
            </div>

            <!-- ******** R101C->R124 ******** -->
            <div v-if="r101c_Gi_1_0_24 == 'down' || r124_Gi_1_0_3 == 'down'" class="r101c-r124-status">
                <div class="r101c-r124-down"></div>
            </div>

            <!-- ******** R124->SW3850-R415 ******** -->       
            <div v-if="r124_Gi_1_1_1 == 'down' || sw3850_Gi_1_1_1 == 'down'" class="r101c-sw3850-r415-status">
                <div class="r101c-sw3850-r415-down"></div>
            </div>

            <!-- ******** SW3850-R415->R330A ******** -->       
            <div v-if="sw3850_Gi_1_1_2 == 'down' || r330a_Gi_1_1_1 == 'down'" class="sw3850-r415-r330a-status">
                <div class="sw3850-r415-r330a-down"></div>
            </div>

            <!-- ******** RSHOP->SW3850-R415 ******** -->       
            <div v-if="rshop_Ten_1_1_4 == 'down' || sw3850_Ten_1_1_4 == 'down'" class="rshop-sw3850-r415-status">
                <div class="rshop-sw3850-r415-line1-down"></div>
                <div class="rshop-sw3850-r415-line2-down"></div>
                <div class="rshop-sw3850-r415-line3-down"></div>
            </div>

            <!-- ******** SW3850-R415->R415 ******** -->       
            <div class="sw3850-r415-r415-status">
                <div v-if="sw3850_Gi_1_0_1 == 'down' || r415_Gi_0_1 == 'down'" class="sw3850-r415-r415-line1-down"></div>
                <div v-if="sw3850_Gi_1_0_2 == 'down' || r415_Gi_0_2 == 'down'" class="sw3850-r415-r415-line2-down"></div>
                <div v-if="sw3850_Gi_1_0_3 == 'down' || r415_Gi_0_3 == 'down'" class="sw3850-r415-r415-line3-down"></div>
                <div v-if="sw3850_Gi_1_0_4 == 'down' || r415_Gi_0_4 == 'down'" class="sw3850-r415-r415-line4-down"></div>
            </div>
        </div>
    </div>
</template>

<script>
import InterfaceProvider from '@/resources/interface_provider'

export default {
    data () {
        return {
            intInfo: [],

            // R101C
            r101c_Ten_1_1_4: '',
            r101c_Gi_1_0_24: '',

            // R124
            r124_Ten_1_1_3: '',
            r124_Gi_1_1_1: '',
            r124_Gi_1_0_3: '',

            // SW3850
            sw3850_Ten_1_1_3: '',
            sw3850_Ten_1_1_4: '',
            sw3850_Gi_1_0_1: '',
            sw3850_Gi_1_0_2: '',
            sw3850_Gi_1_0_3: '',
            sw3850_Gi_1_0_4: '',
            sw3850_Gi_1_1_1: '',
            sw3850_Gi_1_1_2: '',

            // R330A
            r330a_Ten_1_1_4: '',
            r330a_Gi_1_1_1: '',

            // R415
            r415_Gi_0_1: '',
            r415_Gi_0_2: '',
            r415_Gi_0_3: '',
            r415_Gi_0_4: '',

            // SW9400
            sw9400_Ten_3_0_1: '',
            sw9400_Ten_3_0_2: '',
            sw9400_Ten_3_0_3: '',
            sw9400_Ten_3_0_4: '',
            sw9400_Ten_3_0_5: '',
            sw9400_Ten_3_0_6: '',
            sw9400_Gi_1_0_1: '',

            // RSHOP
            rshop_Ten_1_1_3: '',
            rshop_Ten_1_1_4: '',

            // RSAD
            rsad_Gi_26: ''
        }
    },
    created () {
        this.getDiagram()

        // setInterval(() => {
        //     this.getDiagram()
        // }, 300000)

        setInterval(() => {
            this.getDiagram()
        }, 2000)
    },
    methods: {
        async getDiagram() {
            const res = await InterfaceProvider.fetchInterface('diagram')
            
            this.getStatusR101C(res.data.r101c)
            this.getStatusR124(res.data.r124)
            this.getStatusSW3850(res.data.sw3850)
            this.getStatusR330A(res.data.r330a)
            this.getStatusR415(res.data.r415)
            this.getStatusSW9400(res.data.sw9400)
            this.getStatusRSHOP(res.data.rshop)
            this.getStatusRSAD(res.data.rsad)
        },
        getStatusRSAD(data) {
            let infoGi_26 = data.find(data => data.interfaceName == "GigabitEthernet26")
            this.rsad_Gi_26 = infoGi_26.status

            //console.log("RSAD:", "GigabitEthernet26 =>", this.rsad_Gi_26)
        },
        getStatusR101C(data) {
            let infoTen1_1_4 = data.find(data => data.interfaceName == "TenGigabitEthernet1/1/4")
            this.r101c_Ten_1_1_4 = infoTen1_1_4.status

            let infoGi1_0_24 = data.find(data => data.interfaceName == "GigabitEthernet1/0/24")
            this.r101c_Gi_1_0_24 = infoGi1_0_24.status

            //console.log("R101C:", "TenGigabitEthernet1/1/4 =>", this.r101c_Ten_1_1_4, "GigabitEthernet1/0/24 =>", this.r101c_Gi_1_0_24)
        },
        getStatusR124(data) {
            let infoTen_1_1_3 = data.find(data => data.interfaceName == "TenGigabitEthernet1/1/3")
            this.r124_Ten_1_1_3 = infoTen_1_1_3.status

            let infoGi_1_1_1 = data.find(data => data.interfaceName == "GigabitEthernet1/1/1")
            let infoGi_1_0_3 = data.find(data => data.interfaceName == "GigabitEthernet1/0/3")
            this.r124_Gi_1_1_1 = infoGi_1_1_1.status
            this.r124_Gi_1_0_3 = infoGi_1_0_3.status

            //console.log("R101C:", "TenGigabitEthernet1/1/3 =>", this.r124_Ten_1_1_3, "GigabitEthernet1/1/1 =>", this.r124_Gi_1_1_1)
        },
        getStatusSW3850(data) {
            let infoTen_1_1_3 = data.find(data => data.interfaceName == "TenGigabitEthernet1/1/3")
            let infoTen_1_1_4 = data.find(data => data.interfaceName == "TenGigabitEthernet1/1/4")
            this.sw3850_Ten_1_1_3 = infoTen_1_1_3.status
            this.sw3850_Ten_1_1_4 = infoTen_1_1_4.status

            let infoGi_1_0_1 = data.find(data => data.interfaceName == "GigabitEthernet1/0/1")
            let infoGi_1_0_2 = data.find(data => data.interfaceName == "GigabitEthernet1/0/2")
            let infoGi_1_0_3 = data.find(data => data.interfaceName == "GigabitEthernet1/0/3")
            let infoGi_1_0_4 = data.find(data => data.interfaceName == "GigabitEthernet1/0/4")
            this.sw3850_Gi_1_0_1 = infoGi_1_0_1.status
            this.sw3850_Gi_1_0_2 = infoGi_1_0_2.status
            this.sw3850_Gi_1_0_3 = infoGi_1_0_3.status
            this.sw3850_Gi_1_0_4 = infoGi_1_0_4.status

            let infoGi_1_1_1 = data.find(data => data.interfaceName == "GigabitEthernet1/1/1")
            let infoGi_1_1_2 = data.find(data => data.interfaceName == "GigabitEthernet1/1/2")
            this.sw3850_Gi_1_1_1 = infoGi_1_1_1.status
            this.sw3850_Gi_1_1_2 = infoGi_1_1_2.status

            //console.log("SW3850:", "TenGigabitEthernet1/1/3-4 =>", this.sw3850_Ten_1_1_3, this.sw3850_Ten_1_1_4, "GigabitEthernet1/0/1-4 =>", this.sw3850_Gi_1_0_1, this.sw3850_Gi_1_0_2, this.sw3850_Gi_1_0_3, this.sw3850_Gi_1_0_4, "GigabitEthernet1/1/1-2 =>", this.sw3850_Gi_1_1_1, this.sw3850_Gi_1_1_2)
        },
        getStatusR330A(data) {
            let infoTen_1_1_4 = data.find(data => data.interfaceName == "TenGigabitEthernet1/1/4")
            this.r330a_Ten_1_1_4 = infoTen_1_1_4.status

            let infoGi_1_1_1 = data.find(data => data.interfaceName == "GigabitEthernet1/1/1")
            this.r330a_Gi_1_1_1 = infoGi_1_1_1.status

            //console.log("R330A:", "TenGigabitEthernet1/1/4 =>", this.r330a_Ten_1_1_3, "GigabitEthernet1/1/1 =>", this.r330a_Gi_1_1_1)
        },
        getStatusR415(data) {
            let infoGi_0_1 = data.find(data => data.interfaceName == "GigabitEthernet0/1")
            let infoGi_0_2 = data.find(data => data.interfaceName == "GigabitEthernet0/2")
            let infoGi_0_3 = data.find(data => data.interfaceName == "GigabitEthernet0/3")
            let infoGi_0_4 = data.find(data => data.interfaceName == "GigabitEthernet0/4")
            this.r415_Gi_0_1 = infoGi_0_1.status
            this.r415_Gi_0_2 = infoGi_0_2.status
            this.r415_Gi_0_3 = infoGi_0_3.status
            this.r415_Gi_0_4 = infoGi_0_4.status

            //console.log("R415:", "GigabitEthernet0/1 =>", this.r415_Gi_0_1, "GigabitEthernet0/2 =>", this.r415_Gi_0_2, "GigabitEthernet0/3 =>", this.r415_Gi_0_3, "GigabitEthernet0/4 =>", this.r415_Gi_0_4)
        },
        getStatusSW9400(data) {
            let infoTen_3_0_1 = data.find(data => data.interfaceName == "TenGigabitEthernet3/0/1")
            let infoTen_3_0_2 = data.find(data => data.interfaceName == "TenGigabitEthernet3/0/2")
            let infoTen_3_0_3 = data.find(data => data.interfaceName == "TenGigabitEthernet3/0/3")
            let infoTen_3_0_4 = data.find(data => data.interfaceName == "TenGigabitEthernet3/0/4")
            let infoTen_3_0_5 = data.find(data => data.interfaceName == "TenGigabitEthernet3/0/5")
            let infoTen_3_0_6 = data.find(data => data.interfaceName == "TenGigabitEthernet3/0/6")
            this.sw9400_Ten_3_0_1 = infoTen_3_0_1.status
            this.sw9400_Ten_3_0_2 = infoTen_3_0_2.status
            this.sw9400_Ten_3_0_3 = infoTen_3_0_3.status
            this.sw9400_Ten_3_0_4 = infoTen_3_0_4.status
            this.sw9400_Ten_3_0_5 = infoTen_3_0_5.status
            this.sw9400_Ten_3_0_6 = infoTen_3_0_6.status

            let infoGi_1_0_1 = data.find(data => data.interfaceName == "GigabitEthernet1/0/1")
            this.sw9400_Gi_1_0_1 = infoGi_1_0_1.status

            // console.log("SW9400:", "TenGigabitEthernet3/0/1-6 =>", this.sw9400_Ten_3_0_1, this.sw9400_Ten_3_0_2, this.sw9400_Ten_3_0_3, this.sw9400_Ten_3_0_4, this.sw9400_Ten_3_0_5, this.sw9400_Ten_3_0_6)
            // console.log("SW9400:", "GigabitEthernet1/0/1 =>", this.sw9400_Gi_1_0_1)
        },
        getStatusRSHOP(data) {
            let infoTen_1_0_3 = data.find(data => data.interfaceName == "TenGigabitEthernet1/1/3")
            let infoTen_1_0_4 = data.find(data => data.interfaceName == "TenGigabitEthernet1/1/4")
            this.rshop_Ten_1_1_3 = infoTen_1_0_3.status
            this.rshop_Ten_1_1_4 = infoTen_1_0_4.status

            //console.log("RSHOP:", "TenGigabitEthernet1/1/3-4 =>", this.rshop_Ten_1_1_3, this.rshop_Ten_1_1_4)
        }
    }
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