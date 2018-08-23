const errorLog = {
	state: {
		test:1
	},
	//计算属性
	getters:{
		add:state => {
			return state.test += 100;
		}
	},
	//修改状态mutations:{
	mutations:{
		modefiedTest(state){
			state.test++
		}
	}
}
	


export default errorLog