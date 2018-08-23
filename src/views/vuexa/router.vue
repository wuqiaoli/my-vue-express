<template>
  <div class="wrap">
    <span>获取不需要权限的路由既白名单状态vuex</span>
    <p>{{$store.state.permission.routers}}</p>
    <p>{{routers}}</p>
     false 编辑
     true 创建


  </div>
</template>
<script>
import store from '@/store/store'
import mapState from 'vuex'
export default {
    computed:{
        load(){
          return this.$store.state.permission.routers
        }
    },
    data(){
      return{
      }
    },
    mounted(){
      this.$nextTick(function () {
      })
    },
    methods:{
      
    }
}
</script>

<style scoped>
</style>
