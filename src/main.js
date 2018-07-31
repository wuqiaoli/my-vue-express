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

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
