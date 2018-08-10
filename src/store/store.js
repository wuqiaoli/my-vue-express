import Vue from 'vue'
import Vuex from 'vuex'
import errorLog from './modules/errorLog'
import other from './modules/other'
Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		errorLog,
		other
	},
	// getters
})

export default store




// 配置成功
// const state = {
// 	count:1
// }
// //修改状态的方法
// const mutations = {
//     add(state){
//         state.count+=1;
//     },
//     reduce(state){
//         state.count-=1;
//     }
// }
// //对数据的过滤与加工
// const getters = {
//     count:(state)=>{
//         return state.count +=10;
//     }
// }
// //actions 异步修改状态
// const actions ={
//     addAction(context){
//         context.commit('add')
//     },
//     reduceAction({commit}){
//         commit('reduce')
//     }
// }

// export default new Vuex.Store({state,mutations,getters,actions})