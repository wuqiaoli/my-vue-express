<template>
	<div class="wrap">
		<div class="ant-img-container">
			<span class="ant-img-pre" @mouseover="stop" @click="goPre" @mouseleave="begin">&lsaquo;</span>
			 <transition-group name="list">
			 	<img  
			 	class="ant-image" 
			 	v-show="index===currentIndex" 
			 	:src="url" :alt="index" 
			 	v-for="(url,index) in images" 
			 	:key="index"
			 	@mouseover="stop"
			 	@mouseleave="begin"
			 	>
			 </transition-group>
			<span class="ant-img-next" @mouseover="stop" @click="goNext" @mouseleave="begin">&rsaquo;</span>
			<div class="ant-img-dot">
				<span class="ant-img-dot-small" v-for="(site,index) in images.length" @mouseover="stop" @click="getCurrent(index)" :class="flag==index?'ant_active':''" @mouseleave="begin"></span>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				images: [
		      		require('../../assets/3.jpg'),
		      		require('../../assets/1.jpg'),
		      		require('../../assets/2.jpg'),
		      		require('../../assets/3.jpg'),
		      		require('../../assets/3.jpg'),
		      		require('../../assets/2.jpg'),
		      		require('../../assets/1.jpg'),
		        ],
		        currentIndex:0,
		        timer: '',
		        flag:0
			}
		},
		created(){
			this.timer = setInterval(() => {
	            this.autoPlay()
	        }, 2000)
		},
		methods:{
			autoPlay() {
			    this.currentIndex++
			    if (this.currentIndex > this.images.length - 1) {
			        this.currentIndex = 0
			    }
				this.flag = this.currentIndex
			},
			goNext(){
				this.currentIndex+=1;
				if(this.currentIndex>this.images.length-1){
					this.currentIndex = 0
				}
				this.flag = this.currentIndex;
			},
			goPre(){
				this.currentIndex-=1
				if(this.currentIndex<0){
					this.currentIndex = this.images.length-1;
				}
				this.flag = this.currentIndex;
			},
			getCurrent(index){
				this.flag = index ;
				this.currentIndex = index;
			},
			stop(){
				clearInterval(this.timer)
				this.timer = null
			},
			begin(){
				this.timer = setInterval(() => {
	            	this.autoPlay()
	        	}, 4000)
			}

		}
	}
</script>
<style scoped lang="scss">
$mocuse-style:pointer ;
.list-enter-active{
  -webkit-animation-duration: 4s;
  animation-duration: 4s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}

@-webkit-keyframes fadeInLeft {
  from {
    opacity: 0.4;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0.4;
  }

  to {
    opacity: 1;
  }
}
.ant_active{
	background-color: rgba(0,0,0,0.4) !important;
}

.ant-img-dot{
	position: absolute;
	bottom: 5px;
	width: 100%;
	text-align: center;
	&-small {
		display: inline-block;
		width: 20px;
		height: 20px;
		background-color: #fff;
		border-radius: 50%;
		cursor: $mocuse-style;
		margin:5px;
		&:hover{
			background:rgba(0,0,0,.4)
		}
	}
}
// 混合器;
@mixin rounded-corners {
	display:block;
  	position: absolute;
  	top:50%;
	width:20px;
	line-height:20px;
	margin-top:-7.5px;
	color:#fff;
	font-size:30px;
	z-index:111;
	background-color: rgba(0,0,0,.7);
	padding:5px 0px;
}
.ant-img-pre{
	left:5px;
	top:50%;
	cursor: $mocuse-style;
	@include rounded-corners;
}
.ant-img-next{
	display:block;
	position: absolute;
	right:5px;
	cursor: $mocuse-style;
	@include rounded-corners;
	// 混合器的使用 通过include
}
.ant-img-container{
	position: relative;
	width: 400px;
	height: 200px;
	margin:20px auto;
	text-align:center;
	white-space:nowrap;
	overflow:hidden;
}
.ant-image {
	width:400px;
	height:100%;
	background-size: contain;
	cursor: pointer;
	border-radius: 3px;
}
</style>