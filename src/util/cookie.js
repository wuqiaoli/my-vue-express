// import Cookies from 'js-cookie'
const Cookies = require('js-cookie')
//定义变量
const admin = 'Admin-Test'
//设置 Cookies.set('name', 'value');
export function setAdmin(name){
	return Cookies.set(admin,name)
}

//获取 Cookies.set('name')
export function getAdmin(){
	return Cookies.get(admin)
}

//移除 Cookies.remove('name')
export function removeAdmin(){
	return Cookies.remove(admin)
}
