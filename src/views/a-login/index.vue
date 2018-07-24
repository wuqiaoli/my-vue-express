<template>
  <div id="app">
     <p>我是登录页</p>
  </div>
</template>

<script>
import {login} from '@/api/login'
export default {
    data(){
      return{

      }
    },
    mounted(){
        this.$nextTick(()=>{
            login().then(res=>{
               console.log(res.data)
            }).catch((err)=>{
              console.log('fail')
            })
        })
    }
}
</script>

<style scoped>
</style>
