## react 技术栈
- react react-router4 redux  react-redux
## 安装初始化  package.json
```
    npm init -y
```

## webpack
```
    npm install webpack webpack-dev-server -D 
```
## babel
```
    npm install babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react css-loader less less-loader style-loader html-webpack-plugin -D  开发依赖 
```
## react 
```
 npm install react redux react-redux react-router-dom(4版本) react-dom -S 项目依赖
```
## fetch
```
    npm install es6-promise whatwg-fetch(如果fetch不兼容 可以自动转到低版本(降到ajax)) -D
```
## express
```
    npm install express -S
```
## scripts
```
    "start","webpack-dev-server --port 5000 --open --progress(进度条) --colors"
    "build","webpack -p"
```
## 目录结构
- components 组件 木偶组件
- containers 页面组件 ,或者subpage 目录下
    - home
        - subpage 智能组件
        - index.js 
- index.js 用来控制显示哪一个页面 

- store onlyOne 
- action 用户发布动作
- reducer 定义规则的
- action-types action的名字

## 安装插件 轮播图插件 
```
    npm install swipe-js-iso react-swipe 

```
## Fetch  方法()
```
    替代XMLHttpRequest  会返回一个Promise对象 让你能够对请求的返回结果进行检索。 
    简单来说 就是实现了ajax，promist综合的一个方法 结果会返回一个promise对象 后面可以直接.then()
      Accept:'application/json'  响应头 返回json数据
```
