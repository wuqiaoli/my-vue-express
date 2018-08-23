<template>
  <div class="wrap">
  	  <img class="image" v-for="(image, i) in images" :src="image" @click="index = i">
      <vue-img-rotation :images="images" :index="index" @close="index = null"></vue-img-rotation>
  </div>
</template>

<script>
import vueImgRotation from '@/components/vue-img-rotation'
export default {
	components:{
		vueImgRotation
	},
    data(){
      return{
      	images: [
      		require('../../assets/1.jpg'),
      		require('../../assets/2.jpg'),
      		require('../../assets/3.jpg'),
      		require('../../assets/3.jpg'),
      		require('../../assets/2.jpg'),
      		require('../../assets/1.jpg'),
        ],
        index: null
      }
    },
    mounted(){
      
    }
}
</script>

<style scoped>
.image {
	width: 100px;
	height: 100px;
	background-size: contain;
	cursor: pointer;
	margin: 5px;
	border-radius: 3px;
	}
</style>
