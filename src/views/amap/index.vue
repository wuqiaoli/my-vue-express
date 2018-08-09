<template>
  <div class="wrap">
    <h3 class="title">{{ msg }}</h3>
    <div class="one">
        <el-amap ref="map" :vid="amapId" :events="events">
        </el-amap>
    </div>
     <div class="toolbar">
        position: [{{ lng }}, {{ lat }}] address: {{ address }}
     </div>
  </div>
</template>

<script>
export default {
  data () {
    let self = this;
    return {
      	msg: '8/9学习了vue-amap！',
      	amapId:'amap-wrapper', //挂载容器
      	address:'',
       	events: {
            click(e) {
              let { lng, lat } = e.lnglat;
              self.lng = lng;
              self.lat = lat;

              // 这里通过高德 SDK 完成。
              var geocoder = new AMap.Geocoder({
                radius: 1000,
                extensions: "all"
              });        
              geocoder.getAddress([lng ,lat], function(status, result) {
                if (status === 'complete' && result.info === 'OK') {
                  if (result && result.regeocode) {
                    self.address = result.regeocode.formattedAddress;
                    self.$nextTick();
                  }
                }
              });        
            },
        lng: 0,
        lat: 0
    	}
	}
  },
  methods:{
  }
}
</script>

<style>
.one {
  position: relative;
  width: 100%;
  height: 500px;
  border: 1px solid red;
}
.search-box {
  position: absolute;
  top: 25px;
  left: 20px;
}


</style>