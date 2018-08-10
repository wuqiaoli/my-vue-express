<template>
  <div class="wrap">
     <div class="first">
     	 <h4>模块之间初始化访问各自的状态</h4>
	     <p>访问A模块---错误日志里面的初始状态 {{$store.state.errorLog.test}}</p>
	     <p>访问B模块---错误日志里面的初始状态 {{$store.state.other.mark}}</p>
     </div>

    <div class="first">
     	<h4>同步修改状态Mutation</h4>
	    <button @click="$store.commit('modefiedTest')">点击我A模块---修改初始状态 {{test}}</button>
	    <button @click="modefiedMark">点击B模块---修改初始状态 {{mark}}</button>
    </div>

    <div class="first">
     	<h4>计算属性mapGetters </h4>
	    <button @click="add">点击我A模块---统一加10</button>
	    <!-- <button @click="reduce">点击B模块---统一减一</button> -->
    </div>
  </div>
</template>

<script>
import store from '@/store/store'
import {mapMutations,mapState ,mapGetters } from 'vuex';
export default {
 // computed: {
 //    	test () {
 //      		return this.$store.state.errorLog.test
 //   	 	},
 //   	 	mark (){
 //      		return this.$store.state.other.mark
 //   	 	}
 //  	},
    computed:{
   		...mapGetters(['add']),
    },
    computed:mapState({
	    	test : state => state.errorLog.test,
	    	mark : state => state.other.mark
    })
    ,
    data(){
      return{

      }
    },
    mounted(){
      
    },
   	methods:{
        ...mapMutations([ 'modefiedMark']),
    },
}
</script>

<style scoped>
.first{
	border: 1px solid red;
}
</style>
