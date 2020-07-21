<template>
    <div>
        <p class="title">Interface : {{deviceName.toUpperCase()}} </p>
        <div class="container">
            <div class="row">
                <div class="col left">
                    <table style="width:1400px;margin-top:11px;">
                        <tr>
                            <td style="width:598px"></td>
                            <td style="width:260px">
                                <table id="r124" style="margin-top:42px;">
                                    <tr>
                                        <td id="gig01">
                                            <span v-if="interfaceInfo[1].status == 'up'">
                                                <button @click="showDetail(1)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[1].status == 'down'">
                                                <button @click="showDetail(1)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig02">
                                            <span v-if="interfaceInfo[5].status == 'up'">
                                                <button @click="showDetail(5)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[5].status == 'down'">
                                                <button @click="showDetail(5)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig03">
                                            <span v-if="interfaceInfo[6].status == 'up'">
                                                <button @click="showDetail(6)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[6].status == 'down'">
                                                <button @click="showDetail(6)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig04">
                                            <span v-if="interfaceInfo[7].status == 'up'">
                                                <button @click="showDetail(7)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[7].status == 'down'">
                                                <button @click="showDetail(7)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig05">
                                            <span v-if="interfaceInfo[8].status == 'up'">
                                                <button @click="showDetail(8)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[8].status == 'down'">
                                                <button @click="showDetail(8)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig06">
                                            <span v-if="interfaceInfo[9].status == 'up'">
                                                <button @click="showDetail(9)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[9].status == 'down'">
                                                <button @click="showDetail(9)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table id="r124" style="margin-top:42px;">
                                    <tr>
                                        <td id="gig07">
                                            <span v-if="interfaceInfo[10].status == 'up'">
                                                <button @click="showDetail(10)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[10].status == 'down'">
                                                <button @click="showDetail(10)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig08">
                                            <span v-if="interfaceInfo[11].status == 'up'">
                                                <button @click="showDetail(11)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[11].status == 'down'">
                                                <button @click="showDetail(11)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig09">
                                            <span v-if="interfaceInfo[12].status == 'up'">
                                                <button @click="showDetail(12)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[12].status == 'down'">
                                                <button @click="showDetail(12)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig10">
                                            <span v-if="interfaceInfo[2].status == 'up'">
                                                <button @click="showDetail(2)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[2].status == 'down'">
                                                <button @click="showDetail(2)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig11">
                                            <span v-if="interfaceInfo[3].status == 'up'">
                                                <button @click="showDetail(3)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[3].status == 'down'">
                                                <button @click="showDetail(3)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig12">
                                            <span v-if="interfaceInfo[4].status == 'up'">
                                                <button @click="showDetail(4)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[4].status == 'down'">
                                                <button @click="showDetail(4)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td style="width:240px;">
                                <table id="r124" style="margin-top:38px;">
                                    <tr>
                                        <td id="gig1-1-1">
                                            <span v-if="interfaceInfo[13].status == 'up'">
                                                <button @click="showDetail(13)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[13].status == 'down'">
                                                <button @click="showDetail(13)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-1-2">
                                            <span v-if="interfaceInfo[14].status == 'up'">
                                                <button @click="showDetail(14)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[14].status == 'down'">
                                                <button @click="showDetail(14)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="ten1-1-3">
                                            <span v-if="interfaceInfo[19].status == 'up'">
                                                <button @click="showDetail(19)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[19].status == 'down'">
                                                <button @click="showDetail(19)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="ten1-1-4">
                                            <span v-if="interfaceInfo[20].status == 'up'">
                                                <button @click="showDetail(20)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[20].status == 'down'">
                                                <button @click="showDetail(20)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        <div v-if="flagShowDetail" class="port-info mt-10" style="margin:auto;">
          <p class="port-title">
            {{detailPort.interface}}
            <span style="float:right;">
                <button @click="validateShowPort()" title="Shut Down Port" class="button button1">
                    <img src="@/assets/img/icon/icons-shutdown.png" style="width:35px;height:35px;">
                </button>
            </span>
          </p>
          <div class="port-detail">
            <p>Status : {{ detailPort.status }}</p>
            <p>Inbound : {{ detailPort.inbound }} MB</p>
            <p>Outbound : {{ detailPort.outbound }} MB</p>
          </div>
          <div class="port-footer"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: ['interfaceInfo', 'deviceName'],
    data () {
        return {
            detailPort: '',
            flagShowDetail: false
        }
    },
    created () {
        this.setDefalutDetailPort()
    },
    methods: {
        showDetail (index) {
            this.flagShowDetail = true
            this.detailPort = this.interfaceInfo[index]
        },
        setDefalutDetailPort () {
            this.detailPort = this.interfaceInfo[0]
        },
        setShowDetail () {
            this.flagShowDetail = false
        },
        shutPort () {
            console.log('shutPort')
        },
        validateShowPort () {
            swal({
                content: {
                    element: "input",
                    attributes: {
                        placeholder: "Password",
                        type: "password",
                    }
                }
            })
            .then((value) => {
                if (value == 'admin') {
                    this.shutDownPort()
                    swal('', 'Success', 'success', {
                        buttons: false,
                        timer: 1000
                    }).then(this.shutPort())
                } else {
                    swal('', 'Invalid Password', 'error', {
                        icon: 'error'
                    })
                }
            });
        },
        shutDownPort() {
            let deviceIp = this.$parent.deviceInfos.find(deviceInfo => deviceInfo.deviceName == this.deviceName).deviceIp
            axios.post('http://localhost:9000/device/shutdown', {
                deviceIp: deviceIp,
                oid: this.detailPort.oidAdminStatus
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
} 
</script>

<style scoped>
.container {
    width: 1429px;
    margin-top: 35px;
    /* border: 1px solid #ddd; */
    background-image: url("../../assets/img/device/sw3850.jpg");
}

.title {
    font-size: 50px;
    color: #fff;
    text-align: left;
}

.box {
    width: 1429px;
    height: 500px;
    /* border: 1px solid #ddd; */
    background-image: url("../../assets/img/device/sw3650.jpg");
}

.port-title {
    text-align: left;
    padding: 10px 40px;
    background-color: #ffffff;
    font-size: 24px;
}

.port-detail {
    text-align: left;
    padding: 20px 40px;
    padding-top: 10px;
    color: #ffffff;
    
}
.port-detail p{
    font-size: 20px;
}
.port-info {
    padding-top: 20px;
    padding-bottom: 20px;
    border-radius: 20px;
    border: 4px solid #039BE5;
    background-color: #424242;
    width: 1429px;
}

.port-footer {
    padding: 10px 40px;
    background-color: #ffffff;
}

#gig01 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig03 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig05 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig07 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig09 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig11 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig13 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}

#gig15 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig17 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig19 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig21 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig23 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig02 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig04 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig06 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig08 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig10 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig12 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig14 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig16 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig18 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig20 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig22 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig24 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig1-1-1 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig1-1-2 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig1-1-3 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#gig1-1-4 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#ten1-1-3 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}
#ten1-1-4 img {
    width: 40px;
    height: 29px;
    border-radius: 3px;
}

</style>