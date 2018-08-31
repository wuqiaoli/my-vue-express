<template>
	<div class="wrap">
		<button @click="flag=true">点击我</button>
		<vue-message  v-if="flag" :color="'#fff'" :activeColor="'green'" :active="'snack-left'" :message="flag" @listen="flag=false" :text="'小主您好啦'">
			我是分反内容
		</vue-message>
	</div>
</template>
<script>
import vueMessage from './components/info'
	export default {
		components:{
			vueMessage
		},
		data(){
			return{
				flag:false,
				text:'小主您好'
			}
		},
		created(){

		},
		methods:{
		}
	}
</script>

<style scoped>
	
</style>