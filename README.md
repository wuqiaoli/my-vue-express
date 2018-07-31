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
cd server 
npm install
set DEBUG=myapp & npm start
http://localhost:3000/
注意：后台服务开启在server文件下启动npm start 在前台访问会出现跨域，因此设置一下，具体看serve/app.js
在页面请求接口就ok了，此时只是测试用，并没有连接数据库。后期都连接数据库。
```

## 封装请求

``` bash
src---新建util(共用工具)--新建request.js(自定义配置axios实例)
config -- dev.env.js 配置一下根路径
在分类请求中，封装请求 api---login(配置参数)
在页面中引入即可
请求封装完成
```


## 引入全局样式
``` bash
新建styles目录,新建base.css
在main.js 引入 import '@/styles/base.css'
也可以建立多个.css最后再一个文件统一导入与导出
```

## 路由懒加载
``` bash
安装cross-env:npm install cross-env --save-dev
使用babel 的 pluginsbabel-plugin-dynamic-import-node
 npm install babel-plugin-dynamic-import-node --save-dev
首先在package.json中增加BABEL_ENV: "dev": "cross-env BABEL_ENV=development webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"
接着在.babelrc只能加入babel-plugin-dynamic-import-node这个plugins，并让它只有在development模式中才生效。
 {
  "env": {
    "development": {
      "plugins": ["dynamic-import-node"]
    }
  }
}
大功告成了，路由只要像平时一样写就可以了。
  { path: '/login', component: () => import('@/views/login/index')}
```



