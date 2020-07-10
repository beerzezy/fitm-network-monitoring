<template>
    <div>
        <div class="topology-container">
            <div class="cl-router">
                <div>
                    <img src="@/assets/img/device/topology-device.jpg" style="width:150px;">
                </div>
            </div>
            <div class="cl-core-sw">
                <div>
                    <div class="line1-up"></div>
                    <img src="@/assets/img/device/topology-device.jpg" style="width:150px;">
                </div>
            </div>
            <div class="cl-sw">
                    <ul>
                        <li style="display: inline-block;"> 
                            sssss
                        </li>
                        <li style="display: inline-block;">
                            xxxx
                        </li>
                    </ul>
                    <img src="@/assets/img/device/topology-device.jpg" style="width:150px;">
                    <img src="@/assets/img/device/topology-device.jpg" style="width:150px;margin-left:20px;">
                    <img src="@/assets/img/device/topology-device.jpg" style="width:150px;margin-left:20px;">
                    <img src="@/assets/img/device/topology-device.jpg" style="width:150px;margin-left:20px;">
                    <img src="@/assets/img/device/topology-device.jpg" style="width:150px;margin-left:20px;">
                </div>
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
}

.line1-up {
    width: 300px;
    height: 47px;
    border-bottom: 4px solid rgb(37, 204, 37);
    -webkit-transform:
        translateY(70px)
        translateX(610px)
        rotate(160deg); 
    position: absolute;
    /* top: -20px; */
}

.cl-router {
    border: 1px solid red;
    height: 100px;
}

.cl-core-sw {
    border: 1px solid red;
    height: 100px;
}

.cl-sw {
    border: 1px solid red;
    height: 100px;
}
</style>