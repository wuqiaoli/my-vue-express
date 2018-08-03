<template>
  <div class="wrap">
    我是首页
    <button @click="remove">点击删除cookie</button>
  </div>
</template>

<script>
import {setAdmin,getAdmin,removeAdmin} from '@/util/cookie'
export default {
    data(){
      return{

      }
    },
    mounted(){
      this.$nextTick(function () {
          setAdmin('123') ;
          document.write(getAdmin())
      })
    },
    methods:{
      remove(){
         console.log('shan')
         removeAdmin()
      }
    }
}
</script>

<style scoped>
</style>
