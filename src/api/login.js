import request from '@/util/request'
//login
export function login(query){
	return request({
		url:`/five`,
		methods:'get',
		params:query
	})
}