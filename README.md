# my-vue-express

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
## 封装请求

``` bash
	   src---新建util(共用工具)--新建request.js(自定义配置axios实例)
	   config -- dev.env.js 配置一下根路径
	   在分类请求中，封装请求 api---login(配置参数)
	   在页面中引入即可
	   请求封装完成
```



For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
