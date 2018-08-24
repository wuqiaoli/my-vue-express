<template>
	 <transition :name="active">
 		<div class="snackbar">
 			<div class="snackbar_text" :style="{ background: activeColor,color:color}">{{text}}</div>
 		</div>
	 </transition>
</template>
<script>
	export default	{
		props:['message','text','active','color','activeColor','color'],
		data(){
			return{
				timer:''
			}
		},
		created(){
			if(this.message){
				let timer = setTimeout(()=>{
					this.$emit('listen')
				},4000)
			}
		},
		methods:{

		}
	}
</script>
<style scoped lang="scss">
.snackbar{
	position:fixed;
	bottom:30px;
	left:0;
	right:0;
	width:100%;
	display: -webkit-flex;
	display:flex;
	align-items: center;
	justify-content: center;
	z-index:999;
	&_text{
		min-width:180px;
		padding:10px 15px;
		border-radius:5px;
		color:#101010;
		background:rgba(0,0,0,0.3);
		font-size:14px;
		text-align:center;
	}
}
//混合器
 @mixin animation {
 	-webkit-animation-duration: 1s;
	animation-duration: 1s;
	-webkit-animation-fill-mode: both;
	animation-fill-mode: both;
 }
// css 动画
.snack-in-enter-active{
	-webkit-animation-name: opacityIn;
  	animation-name: opacityIn;
	@include animation ;
}
.snack-in-leave-active{
	@include animation ;
	-webkit-animation-name: opacityOut;
  	animation-name: opacityOut;
} 


.snack-right-enter-active{
	-webkit-animation-name: fadeInRight;
  	animation-name: fadeInRight;
	@include animation ;
}
.snack-right-leave-active{
	@include animation ;
	-webkit-animation-name: fadeOutRight;
  	animation-name: fadeOutRight;
} 


.snack-left-enter-active{
	-webkit-animation-name: fadeInLeft;
  	animation-name: fadeInLeft;
	@include animation ;
}
.snack-left-leave-active{
	@include animation ;
	-webkit-animation-name: fadeOutLeft;
  	animation-name: fadeOutLeft;
}


.snack-up-enter-active{
	-webkit-animation-name: fadeInUp;
  	animation-name: fadeInUp;
	@include animation ;
}
.snack-up-leave-active{
	-webkit-animation-name: fadeInDown;
  	animation-name: fadeInDown;
	@include animation ;
}


.snack-leave-active{
	@include animation ;
	-webkit-animation-name: opacityOut;
  	animation-name: opacityOut;
} 
.snack-enter, .snack-leave-to  {
  opacity: 0;
}
//下--上
@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
// 上---下
@-webkit-keyframes fadeInDown {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}
// 左--右
@-webkit-keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-10%, 0, 0);
    transform: translate3d(-10%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-10%, 0, 0);
    transform: translate3d(-10%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
// 右---左
@-webkit-keyframes fadeOutLeft {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-10%, 0, 0);
    transform: translate3d(-10%, 0, 0);
  }
}

@keyframes fadeOutLeft {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-10%, 0, 0);
    transform: translate3d(-10%, 0, 0);
  }
}
// 右--左
@-webkit-keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(10%, 0, 0);
    transform: translate3d(10%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(10%, 0, 0);
    transform: translate3d(10%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
// 左--右
@-webkit-keyframes fadeOutRight {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(10%, 0, 0);
    transform: translate3d(10%, 0, 0);
  }
}

@keyframes fadeOutRight {
  from {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(10%, 0, 0);
    transform: translate3d(10%, 0, 0);
  }
}
// 固定位置
@-webkit-keyframes opacityIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes opacityIn {
  from {
    opacity: 0;
    
  }

  to {
    opacity: 1;
  }
}
@-webkit-keyframes opacityOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 9;
  }
}

@keyframes opacityOut {
  from {
    opacity: 1;
    
  }

  to {
    opacity: 0;
  }
}
</style>