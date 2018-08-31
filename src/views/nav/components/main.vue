<template>
  <section class="app-main">
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
    date(){
       return{

       }
    } 
}
</script>
<style scoped>
 .app-main{
   height: 100%;
 } 
</style>
