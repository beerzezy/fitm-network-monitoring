<template>
    <div>
        <p class="title">Interface : {{deviceName.toUpperCase()}} </p>
        <div class="container">
            <div class="row">
                <div class="col left">
                    <table style="width:1400px;margin-top:7px;">
                        <tr>
                            <td style="width:698px"></td>
                            <td style="width:100px">
                                <table id="r124">
                                    <tr>
                                        <td id="ten3-0-1">
                                            <span v-if="interfaceInfo[99].status == 'up'">
                                                <button @click="showDetail(99)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[99].status == 'down'">
                                                <button @click="showDetail(99)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="ten3-0-3">
                                             <span v-if="interfaceInfo[101].status == 'up'">
                                                <button @click="showDetail(101)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[101].status == 'down'">
                                                <button @click="showDetail(101)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="ten3-0-5">
                                             <span v-if="interfaceInfo[103].status == 'up'">
                                                <button @click="showDetail(103)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[103].status == 'down'">
                                                <button @click="showDetail(103)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="ten3-0-7">
                                             <span v-if="interfaceInfo[105].status == 'up'">
                                                <button @click="showDetail(105)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[105].status == 'down'">
                                                <button @click="showDetail(105)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="ten3-0-2">
                                            <span v-if="interfaceInfo[100].status == 'up'">
                                                <button @click="showDetail(100)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[100].status == 'down'">
                                                <button @click="showDetail(100)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="ten3-0-4">
                                            <span v-if="interfaceInfo[102].status == 'up'">
                                                <button @click="showDetail(102)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[102].status == 'down'">
                                                <button @click="showDetail(102)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="ten3-0-6">
                                            <span v-if="interfaceInfo[104].status == 'up'">
                                                <button @click="showDetail(104)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[104].status == 'down'">
                                                <button @click="showDetail(104)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="ten3-0-8">
                                            <span v-if="interfaceInfo[106].status == 'up'">
                                                <button @click="showDetail(106)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[106].status == 'down'">
                                                <button @click="showDetail(106)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td style="width:26px">
                                <table id="r124">
                                    <tr>
                                        <td id="ten3-0-1">
                                        </td>
                                        <td id="ten3-0-3"></td>
                                        <td id="ten3-0-5"></td>
                                        <td id="ten3-0-7"><img src="@/assets/img/status/top-up.jpg" style="opacity: 0;"></td>
                                    </tr>
                                    <tr>
                                        <td id="forGig3-0-9">
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
                                        <td id="forGig3-0-10">
                                            <span v-if="interfaceInfo[0].status == 'up'">
                                                <button @click="showDetail(0)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[0].status == 'down'">
                                                <button @click="showDetail(0)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>

                    <table style="width:1400px;margin-top:63px;">
                        <tr>
                            <td style="width:52px"></td>
                            <td style="width:260px;">
                                <table id="r124">
                                    <tr>
                                        <td id="gig1-0-1">
                                            <span v-if="interfaceInfo[3].status == 'up'">
                                                <button @click="showDetail(3)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[3].status == 'down'">
                                                <button @click="showDetail(3)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-3">
                                            <span v-if="interfaceInfo[25].status == 'up'">
                                                <button @click="showDetail(25)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[25].status == 'down'">
                                                <button @click="showDetail(25)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-5">
                                            <span v-if="interfaceInfo[46].status == 'up'">
                                                <button @click="showDetail(46)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[46].status == 'down'">
                                                <button @click="showDetail(46)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-7">
                                            <span v-if="interfaceInfo[48].status == 'up'">
                                                <button @click="showDetail(48)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[48].status == 'down'">
                                                <button @click="showDetail(48)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-9">
                                            <span v-if="interfaceInfo[50].status == 'up'">
                                                <button @click="showDetail(50)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[50].status == 'down'">
                                                <button @click="showDetail(50)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-11">
                                            <span v-if="interfaceInfo[5].status == 'up'">
                                                <button @click="showDetail(5)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[5].status == 'down'">
                                                <button @click="showDetail(5)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="gig1-0-2">
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
                                        <td id="gig1-0-4">
                                            <span v-if="interfaceInfo[36].status == 'up'">
                                                <button @click="showDetail(36)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[36].status == 'down'">
                                                <button @click="showDetail(36)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-6">
                                            <span v-if="interfaceInfo[47].status == 'up'">
                                                <button @click="showDetail(47)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[47].status == 'down'">
                                                <button @click="showDetail(47)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-8">
                                            <span v-if="interfaceInfo[49].status == 'up'">
                                                <button @click="showDetail(49)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[49].status == 'down'">
                                                <button @click="showDetail(49)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-10">
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
                                        <td id="gig1-0-12">
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
                                    </tr>
                                </table>
                            </td>
                            <td style="width:260px;padding-left:14px;">
                                <table id="r124">
                                    <tr>
                                        <td id="gig1-0-13">
                                            <span v-if="interfaceInfo[7].status == 'up'">
                                                <button @click="showDetail(7)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[7].status == 'down'">
                                                <button @click="showDetail(7)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-15">
                                            <span v-if="interfaceInfo[9].status == 'up'">
                                                <button @click="showDetail(9)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[9].status == 'down'">
                                                <button @click="showDetail(9)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-17">
                                            <span v-if="interfaceInfo[11].status == 'up'">
                                                <button @click="showDetail(11)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[11].status == 'down'">
                                                <button @click="showDetail(11)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-19">
                                            <span v-if="interfaceInfo[13].status == 'up'">
                                                <button @click="showDetail(13)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[13].status == 'down'">
                                                <button @click="showDetail(13)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-21">
                                            <span v-if="interfaceInfo[16].status == 'up'">
                                                <button @click="showDetail(16)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[16].status == 'down'">
                                                <button @click="showDetail(16)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-23">
                                            <span v-if="interfaceInfo[18].status == 'up'">
                                                <button @click="showDetail(18)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[18].status == 'down'">
                                                <button @click="showDetail(18)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="gig1-0-14">
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
                                        <td id="gig1-0-16">
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
                                        <td id="gig1-0-18">
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
                                        <td id="gig1-0-20">
                                            <span v-if="interfaceInfo[15].status == 'up'">
                                                <button @click="showDetail(15)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[15].status == 'down'">
                                                <button @click="showDetail(15)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-22">
                                            <span v-if="interfaceInfo[17].status == 'up'">
                                                <button @click="showDetail(17)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[17].status == 'down'">
                                                <button @click="showDetail(17)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-24">
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
                                    </tr>
                                </table>
                            </td>
                            <td style="padding-left:14px;">
                                <table id="r124">
                                    <tr>
                                        <td id="gig1-0-25">
                                            <span v-if="interfaceInfo[20].status == 'up'">
                                                <button @click="showDetail(20)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[20].status == 'down'">
                                                <button @click="showDetail(20)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-27">
                                            <span v-if="interfaceInfo[22].status == 'up'">
                                                <button @click="showDetail(22)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[22].status == 'down'">
                                                <button @click="showDetail(22)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-29">
                                            <span v-if="interfaceInfo[24].status == 'up'">
                                                <button @click="showDetail(24)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[24].status == 'down'">
                                                <button @click="showDetail(24)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-31">
                                            <span v-if="interfaceInfo[27].status == 'up'">
                                                <button @click="showDetail(27)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[27].status == 'down'">
                                                <button @click="showDetail(27)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-33">
                                            <span v-if="interfaceInfo[29].status == 'up'">
                                                <button @click="showDetail(29)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[29].status == 'down'">
                                                <button @click="showDetail(29)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-35">
                                            <span v-if="interfaceInfo[31].status == 'up'">
                                                <button @click="showDetail(31)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[31].status == 'down'">
                                                <button @click="showDetail(31)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="gig1-0-26">
                                            <span v-if="interfaceInfo[21].status == 'up'">
                                                <button @click="showDetail(21)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[21].status == 'down'">
                                                <button @click="showDetail(21)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-28">
                                            <span v-if="interfaceInfo[23].status == 'up'">
                                                <button @click="showDetail(23)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[23].status == 'down'">
                                                <button @click="showDetail(23)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-30">
                                            <span v-if="interfaceInfo[26].status == 'up'">
                                                <button @click="showDetail(26)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[26].status == 'down'">
                                                <button @click="showDetail(26)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-32">
                                            <span v-if="interfaceInfo[28].status == 'up'">
                                                <button @click="showDetail(28)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[28].status == 'down'">
                                                <button @click="showDetail(28)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-34">
                                            <span v-if="interfaceInfo[30].status == 'up'">
                                                <button @click="showDetail(30)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[30].status == 'down'">
                                                <button @click="showDetail(30)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-36">
                                            <span v-if="interfaceInfo[32].status == 'up'">
                                                <button @click="showDetail(32)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[32].status == 'down'">
                                                <button @click="showDetail(32)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table id="r124" style="margin-left:-18px;">
                                    <tr>
                                        <td id="gig1-0-37">
                                            <span v-if="interfaceInfo[33].status == 'up'">
                                                <button @click="showDetail(33)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[33].status == 'down'">
                                                <button @click="showDetail(33)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-39">
                                            <span v-if="interfaceInfo[35].status == 'up'">
                                                <button @click="showDetail(35)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[35].status == 'down'">
                                                <button @click="showDetail(35)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-41">
                                            <span v-if="interfaceInfo[38].status == 'up'">
                                                <button @click="showDetail(38)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[38].status == 'down'">
                                                <button @click="showDetail(38)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-43">
                                            <span v-if="interfaceInfo[40].status == 'up'">
                                                <button @click="showDetail(40)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[40].status == 'down'">
                                                <button @click="showDetail(40)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-45">
                                            <span v-if="interfaceInfo[42].status == 'up'">
                                                <button @click="showDetail(42)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[42].status == 'down'">
                                                <button @click="showDetail(42)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-47">
                                            <span v-if="interfaceInfo[44].status == 'up'">
                                                <button @click="showDetail(44)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[44].status == 'down'">
                                                <button @click="showDetail(44)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="gig1-0-38">
                                            <span v-if="interfaceInfo[34].status == 'up'">
                                                <button @click="showDetail(34)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[34].status == 'down'">
                                                <button @click="showDetail(34)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-40">
                                            <span v-if="interfaceInfo[37].status == 'up'">
                                                <button @click="showDetail(37)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[37].status == 'down'">
                                                <button @click="showDetail(37)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-42">
                                            <span v-if="interfaceInfo[39].status == 'up'">
                                                <button @click="showDetail(39)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[39].status == 'down'">
                                                <button @click="showDetail(39)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-44">
                                            <span v-if="interfaceInfo[41].status == 'up'">
                                                <button @click="showDetail(41)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[41].status == 'down'">
                                                <button @click="showDetail(41)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-46">
                                            <span v-if="interfaceInfo[43].status == 'up'">
                                                <button @click="showDetail(43)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[43].status == 'down'">
                                                <button @click="showDetail(43)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig1-0-48">
                                            <span v-if="interfaceInfo[45].status == 'up'">
                                                <button @click="showDetail(45)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[45].status == 'down'">
                                                <button @click="showDetail(45)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>

                    <table style="width:1400px;margin-top:59px;">
                        <tr>
                            <td style="width:52px"></td>
                            <td style="width:260px;">
                                <table id="r124">
                                    <tr>
                                        <td id="gig2-0-1">
                                            <span v-if="interfaceInfo[51].status == 'up'">
                                                <button @click="showDetail(51)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[51].status == 'down'">
                                                <button @click="showDetail(51)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-3">
                                            <span v-if="interfaceInfo[73].status == 'up'">
                                                <button @click="showDetail(73)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[73].status == 'down'">
                                                <button @click="showDetail(73)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-5">
                                            <span v-if="interfaceInfo[94].status == 'up'">
                                                <button @click="showDetail(94)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[94].status == 'down'">
                                                <button @click="showDetail(94)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-7">
                                            <span v-if="interfaceInfo[96].status == 'up'">
                                                <button @click="showDetail(96)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[96].status == 'down'">
                                                <button @click="showDetail(96)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-9">
                                            <span v-if="interfaceInfo[98].status == 'up'">
                                                <button @click="showDetail(98)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[98].status == 'down'">
                                                <button @click="showDetail(98)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-11">
                                            <span v-if="interfaceInfo[53].status == 'up'">
                                                <button @click="showDetail(53)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[53].status == 'down'">
                                                <button @click="showDetail(53)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="gig2-0-2">
                                            <span v-if="interfaceInfo[62].status == 'up'">
                                                <button @click="showDetail(62)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[62].status == 'down'">
                                                <button @click="showDetail(62)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-4">
                                            <span v-if="interfaceInfo[84].status == 'up'">
                                                <button @click="showDetail(84)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[84].status == 'down'">
                                                <button @click="showDetail(84)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-6">
                                            <span v-if="interfaceInfo[95].status == 'up'">
                                                <button @click="showDetail(95)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[95].status == 'down'">
                                                <button @click="showDetail(95)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-8">
                                            <span v-if="interfaceInfo[97].status == 'up'">
                                                <button @click="showDetail(97)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[97].status == 'down'">
                                                <button @click="showDetail(97)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-10">
                                            <span v-if="interfaceInfo[52].status == 'up'">
                                                <button @click="showDetail(52)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[52].status == 'down'">
                                                <button @click="showDetail(52)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-12">
                                            <span v-if="interfaceInfo[54].status == 'up'">
                                                <button @click="showDetail(54)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[54].status == 'down'">
                                                <button @click="showDetail(54)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td style="width:260px;padding-left:14px;">
                                <table id="r124">
                                    <tr>
                                        <td id="gig2-0-13">
                                            <span v-if="interfaceInfo[55].status == 'up'">
                                                <button @click="showDetail(55)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[55].status == 'down'">
                                                <button @click="showDetail(55)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-15">
                                            <span v-if="interfaceInfo[57].status == 'up'">
                                                <button @click="showDetail(57)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[57].status == 'down'">
                                                <button @click="showDetail(57)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-17">
                                            <span v-if="interfaceInfo[59].status == 'up'">
                                                <button @click="showDetail(59)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[59].status == 'down'">
                                                <button @click="showDetail(59)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-19">
                                            <span v-if="interfaceInfo[61].status == 'up'">
                                                <button @click="showDetail(61)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[61].status == 'down'">
                                                <button @click="showDetail(61)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-21">
                                            <span v-if="interfaceInfo[64].status == 'up'">
                                                <button @click="showDetail(64)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[64].status == 'down'">
                                                <button @click="showDetail(64)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-23">
                                            <span v-if="interfaceInfo[66].status == 'up'">
                                                <button @click="showDetail(66)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[66].status == 'down'">
                                                <button @click="showDetail(66)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="gig2-0-14">
                                            <span v-if="interfaceInfo[56].status == 'up'">
                                                <button @click="showDetail(56)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[56].status == 'down'">
                                                <button @click="showDetail(56)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-16">
                                            <span v-if="interfaceInfo[58].status == 'up'">
                                                <button @click="showDetail(58)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[58].status == 'down'">
                                                <button @click="showDetail(58)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-18">
                                            <span v-if="interfaceInfo[60].status == 'up'">
                                                <button @click="showDetail(60)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[60].status == 'down'">
                                                <button @click="showDetail(60)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-20">
                                            <span v-if="interfaceInfo[63].status == 'up'">
                                                <button @click="showDetail(63)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[63].status == 'down'">
                                                <button @click="showDetail(63)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-22">
                                            <span v-if="interfaceInfo[65].status == 'up'">
                                                <button @click="showDetail(65)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[65].status == 'down'">
                                                <button @click="showDetail(65)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-24">
                                            <span v-if="interfaceInfo[67].status == 'up'">
                                                <button @click="showDetail(67)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[67].status == 'down'">
                                                <button @click="showDetail(67)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            <td style="padding-left:14px;">
                                <table id="r124">
                                    <tr>
                                        <td id="gig2-0-25">
                                            <span v-if="interfaceInfo[68].status == 'up'">
                                                <button @click="showDetail(68)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[68].status == 'down'">
                                                <button @click="showDetail(68)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-27">
                                            <span v-if="interfaceInfo[70].status == 'up'">
                                                <button @click="showDetail(70)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[70].status == 'down'">
                                                <button @click="showDetail(70)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-29">
                                            <span v-if="interfaceInfo[72].status == 'up'">
                                                <button @click="showDetail(72)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[72].status == 'down'">
                                                <button @click="showDetail(72)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span></button></td>
                                        <td id="gig2-0-31">
                                            <span v-if="interfaceInfo[75].status == 'up'">
                                                <button @click="showDetail(75)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[75].status == 'down'">
                                                <button @click="showDetail(75)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-33">
                                            <span v-if="interfaceInfo[77].status == 'up'">
                                                <button @click="showDetail(77)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[77].status == 'down'">
                                                <button @click="showDetail(77)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-35">
                                            <span v-if="interfaceInfo[79].status == 'up'">
                                                <button @click="showDetail(79)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[79].status == 'down'">
                                                <button @click="showDetail(79)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="gig2-0-26">
                                            <span v-if="interfaceInfo[69].status == 'up'">
                                                <button @click="showDetail(69)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[69].status == 'down'">
                                                <button @click="showDetail(69)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-28">
                                            <span v-if="interfaceInfo[71].status == 'up'">
                                                <button @click="showDetail(71)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[71].status == 'down'">
                                                <button @click="showDetail(71)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-30">
                                            <span v-if="interfaceInfo[74].status == 'up'">
                                                <button @click="showDetail(74)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[74].status == 'down'">
                                                <button @click="showDetail(74)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-32">
                                            <span v-if="interfaceInfo[76].status == 'up'">
                                                <button @click="showDetail(76)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[76].status == 'down'">
                                                <button @click="showDetail(76)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-34">
                                            <span v-if="interfaceInfo[78].status == 'up'">
                                                <button @click="showDetail(78)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[78].status == 'down'">
                                                <button @click="showDetail(78)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-36"><span v-if="interfaceInfo[80].status == 'up'">
                                                <button @click="showDetail(80)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[80].status == 'down'">
                                                <button @click="showDetail(80)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span></td>
                                    </tr>
                                </table>
                            </td>
                            <td>
                                <table id="r124" style="margin-left:-18px;">
                                    <tr>
                                        <td id="gig2-0-37">
                                            <span v-if="interfaceInfo[81].status == 'up'">
                                                <button @click="showDetail(81)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[81].status == 'down'">
                                                <button @click="showDetail(81)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-39">
                                            <span v-if="interfaceInfo[83].status == 'up'">
                                                <button @click="showDetail(83)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[83].status == 'down'">
                                                <button @click="showDetail(83)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-41">
                                            <span v-if="interfaceInfo[86].status == 'up'">
                                                <button @click="showDetail(86)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[86].status == 'down'">
                                                <button @click="showDetail(86)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-43">
                                            <span v-if="interfaceInfo[88].status == 'up'">
                                                <button @click="showDetail(88)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[88].status == 'down'">
                                                <button @click="showDetail(88)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-45">
                                            <span v-if="interfaceInfo[90].status == 'up'">
                                                <button @click="showDetail(90)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[90].status == 'down'">
                                                <button @click="showDetail(90)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-47">
                                            <span v-if="interfaceInfo[92].status == 'up'">
                                                <button @click="showDetail(92)">
                                                    <img src="@/assets/img/status/top-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[92].status == 'down'">
                                                <button @click="showDetail(92)">
                                                    <img src="@/assets/img/status/top-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="gig2-0-38">
                                            <span v-if="interfaceInfo[82].status == 'up'">
                                                <button @click="showDetail(82)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[82].status == 'down'">
                                                <button @click="showDetail(82)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-40">
                                            <span v-if="interfaceInfo[85].status == 'up'">
                                                <button @click="showDetail(85)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[85].status == 'down'">
                                                <button @click="showDetail(85)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-42">
                                            <span v-if="interfaceInfo[87].status == 'up'">
                                                <button @click="showDetail(87)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[87].status == 'down'">
                                                <button @click="showDetail(87)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-44">
                                            <span v-if="interfaceInfo[89].status == 'up'">
                                                <button @click="showDetail(89)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[89].status == 'down'">
                                                <button @click="showDetail(89)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-46">
                                            <span v-if="interfaceInfo[91].status == 'up'">
                                                <button @click="showDetail(91)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[91].status == 'down'">
                                                <button @click="showDetail(91)">
                                                    <img src="@/assets/img/status/below-down.jpg">
                                                </button>
                                            </span>
                                        </td>
                                        <td id="gig2-0-48">
                                            <span v-if="interfaceInfo[93].status == 'up'">
                                                <button @click="showDetail(93)">
                                                    <img src="@/assets/img/status/below-up.jpg">
                                                </button>
                                            </span>
                                            <span v-else-if="interfaceInfo[93].status == 'down'">
                                                <button @click="showDetail(93)">
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
                    <img src="@/assets/img/icon/icons-shutdown.png" style="width:40px;height:40px;">
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
export default {
    props: ['interfaceInfo', 'deviceName'],
    data () {
        return {
            detailPort: '',
            flagShowDetail: false,
            isView: false
        }
    },
    created () {
        this.setDefalutDetailPort()
        this.flagShowDetail = false
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
        }
    }
}
</script>

<style scoped>
.container {
    width: 1439px;
    height: 500px;
    margin-top: 10px;
    /* border: 1px solid #ddd; */
    background-image: url("../../assets/img/device/sw9400.jpg");
}

.title {
    font-size: 50px;
    color: #fff;
    text-align: left;
}

.box {
    width: 1439px;
    height: 500px;
    /* border: 1px solid #ddd; */
    background-image: url("../../assets/img/device/sw9400.jpg");
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
    width: 1425px;
}

.port-footer {
    padding: 10px 40px;
    background-color: #ffffff;
}

#gig1-0-1 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-2 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-3 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-4 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-5 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-6 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-7 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}

#gig1-0-8 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-9 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-10 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-11 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-12 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-13 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-14 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-15 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-16 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-17 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-18 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-19 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-20 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-21 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-22 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-23 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-24 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-25 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-26 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-27 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-28 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}

#gig1-0-29 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-30 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-31 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-32 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-33 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-34 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-35 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-36 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-37 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-38 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-39 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-40 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-41 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-42 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-43 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-44 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-45 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-46 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-47 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig1-0-48 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}

#gig2-0-1 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-2 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-3 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-4 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-5 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-6 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-7 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}

#gig2-0-8 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-9 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-10 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-11 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-12 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-13 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-14 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-15 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-16 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-17 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-18 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-19 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-20 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-21 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-22 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-23 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-24 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-25 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-26 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-27 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-28 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}

#gig2-0-29 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-30 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-31 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-32 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-33 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-34 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-35 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-36 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-37 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-38 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-39 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-40 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-41 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-42 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-43 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-44 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-45 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-46 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-47 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#gig2-0-48 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}

#ten3-0-1 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#ten3-0-2 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#ten3-0-3 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#ten3-0-4 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#ten3-0-5 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#ten3-0-6 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#ten3-0-7 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#ten3-0-8 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#forGig3-0-9 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
#forGig3-0-10 img {
    width: 50px;
    height: 39px;
    border-radius: 3px;
}
</style>