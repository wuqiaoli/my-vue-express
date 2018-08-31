<template>
	<div class="chat">
		<div class="chat_con">
			<div class="chat_left">
				
			</div>
			<div class="chat_right"></div>
		</div>
	</div>
</template>
<script>
	
</script>
<style lang="scss" scoped>
	.chat{
		height:100%;
	    display:flex;
	    align-items:center;
	    justify-content:center;
	    &_con{
	    	height:500px;
    		box-shadow: -2px 5px 20px #969696;
    		font-size:0;
	    }
	    &_left{
	    	display:inline-block;
	    	height:100%;
	    	width:200px;
	    }
	    &_right{
	    	display:inline-block;
	    	border-left:1px solid #ccc;
	    	height:100%;
	    	width:520px;
	    }
	}
</style>