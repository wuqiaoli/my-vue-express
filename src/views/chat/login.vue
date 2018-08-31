<template>
  	<div class="login">
   		<div class="login_con">
   			<div class="login_wrap">
   				<p class="login_title">欢迎来到聊天室</p>
   				<div class="login_small">
   					<p class="login_small_title">请选择聊天头像</p>
   					<div class="login_small_head">
   						<img class="login_small_head_pic" :src="site.url" alt="" v-for="(site,index) in list" :ket="index">
   					</div>
   					<div class="login_small_input">
   						<img class="login_small_pic" src="../../assets/ipt.png" alt="">
   						<input class="login_small_text" type="text" v-model="text" placeholder="请输入你的聊天名">
   					</div>
   				</div>
   				<div class="login_btn">
   					进入聊天室
   				</div>
   			</div>
   		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				text:'',
				list:[
					{url:require('../../assets/7.png')},
					{url:require('../../assets/8.png')},
					{url:require('../../assets/9.png')},
					{url:require('../../assets/10.png')},
					{url:require('../../assets/11.png')},
					{url:require('../../assets/12.png')},
					{url:require('../../assets/13.png')},
					{url:require('../../assets/14.png')},
					{url:require('../../assets/15.png')},
					{url:require('../../assets/16.png')},
				]
			}
		},
		methods:{

		}
	}
</script>
<style lang="scss" scoped>
.login{
	height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    &_con{
    	width:400px;
        height:700px;
        border-radius:4px;
    	box-shadow: -2px 5px 20px #969696;
    	background: url(../../assets/bg.jpg) no-repeat center center;
    }
    &_wrap{
    	margin:150px 30px;
    	height:400px;
    }
    &_title{
		margin:0;
		line-height:40px;
		font-size:18px;
		font-weight: 500;
    	text-align:center;
    }
    &_small{
    	height:320px;
    	&_head{
    		width:240px;
    		margin:58px auto;
    		&_pic{
    			display:inline-block;
    			width:40px;
    			height:40px;
    			margin:4px;

    		}
    	}
    	&_title{
    		font-size:12px;
    		margin-top:40px;
    		text-align:center;
    	}
    	&_input{
    		margin-bottom:40px;
    		height:40px;
    	}
    	&_pic{
			display:inline-block;
			width:20px;
			height:20px;
			margin:10px 0 10px 50px;
			border:none;
			vertical-align: middle;
    	}
    	&_text{
    		width:200px;
    		padding-left:10px;
    		border-color:transparent;
    		background:transparent;
			border-bottom:1px solid #372926;

    	}
    }
    
    &_btn{
    	margin:0 auto;
    	line-height:38px;
    	width:200px;
		border:1px solid #372926;
		border-radius:4px;
    	text-align:center;

    }
}

</style>