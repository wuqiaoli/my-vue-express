import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
//完整引入muse-ui
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);

// 引入全局csc
import '@/styles/base.css'


//引入Material Design  Roboto 字体
import 'typeface-roboto'

Vue.config.productionTip = false

//引入vue-map
import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: '1ccba2e48e73c7db3d419189a6975916',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','Geocoder'],
  v: '1.4.4'
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
