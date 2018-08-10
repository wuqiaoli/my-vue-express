<template>
  <div class="wrap">
     <p>vuex 组件之间共享共用的数据源 ---简称共享状态</p>
     <count></count>
  </div>
</template>
<script>
import count from '@/components/count'
export default {
    components:{
        count
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
