import axios from 'axios'
//自定义配置一个axios实例
const server =  axios.create({
	baseURL: process.env.BASE_API, //配置根路径
	timeout: 5000, //响应得时间
})


export default server