<template>
  <section class="app-main" style="min-height: 100%">
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
    background: pink
  }
</style>
