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
## 环境搭建

```bash

# 前台
npm install --global vue-cli
vue init webpack my-project（项目名称，如：firstproject）
npm install
cd my-project（进入firstproject）
npm run dev(运行)
http://localhost:8000/
# 后台
进入文件夹，应用express生成器
npm install express-generator -g
express server
cd myapp 
npm install
set DEBUG=myapp & npm start
http://localhost:3000/
注意：后台服务开启在server文件下启动npm start 在前台访问会出现跨域，因此设置一下，具体看serve/app.js
在页面请求接口就ok了
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
