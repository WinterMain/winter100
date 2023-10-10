---
layout: question
title:  webpack-dev-server不监视我的文件更改
date:   2020-03-24T01:59:29.000Z
description: 当我在webpack-dev-server运行时更改文件时，捆绑包的文件不会更新。从我的npm脚本中可以看到，这是我的webpack.config.js和...
img: 
author: 西里神奇
category: question
answer: 4
tags: npm Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我在webpack-dev-server运行时更改文件时，捆绑包的文件不会更新。</font><font style="vertical-align: inherit;">从我的npm脚本中可以看到，这是我的webpack.config.js和package.json文件，我已经解决了运行问题，</font></font><code>webpack watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用了相同的命令（</font></font><code>npm run watch &amp;  webpack-dev-server --content-base ./ --port 9966</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.js：</font></font></p>

<pre><code>'use strict';<font></font>
<font></font>
var ReactStylePlugin = require('react-style-webpack-plugin');<font></font>
var ExtractTextPlugin = require('extract-text-webpack-plugin');<font></font>
<font></font>
var webpack = require('webpack');<font></font>
<font></font>
module.exports = {<font></font>
    devtool: 'sourcemap',<font></font>
  entry: ['./js/main.js'],<font></font>
  output: {<font></font>
    filename: 'bundle.js',<font></font>
    path: __dirname + '/assets',<font></font>
    publicPath: __dirname + '/'<font></font>
  },<font></font>
  module: {<font></font>
    loaders: [<font></font>
      {<font></font>
        test: /\.js$/,<font></font>
        loaders: [<font></font>
          ReactStylePlugin.loader(),<font></font>
          'jsx-loader?harmony'<font></font>
        ]<font></font>
      },<font></font>
      {<font></font>
        test: /\.css$/,<font></font>
        loader: ExtractTextPlugin.extract('css-loader')<font></font>
      }<font></font>
    ]<font></font>
  },<font></font>
  plugins: [<font></font>
    new ReactStylePlugin('bundle.css'),<font></font>
    new webpack.DefinePlugin({<font></font>
      'process.env': {<font></font>
        // To enable production mode:<font></font>
        //NODE_ENV: JSON.stringify('production')<font></font>
      }<font></font>
    })<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json：</font></font></p>

<pre><code>{<font></font>
  "name": "reactTest",<font></font>
  "version": "1.0.0",<font></font>
  "description": "",<font></font>
  "main": "index.js",<font></font>
  "scripts": {<font></font>
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1",<font></font>
    "watch": "webpack --watch",<font></font>
    "build": "webpack",<font></font>
    "web": "npm run watch &amp;  webpack-dev-server --content-base ./ --port 9966"<font></font>
  },<font></font>
  "author": "",<font></font>
  "license": "ISC",<font></font>
  "devDependencies": {<font></font>
    "css-loader": "^0.10.1",<font></font>
    "extract-text-webpack-plugin": "^0.3.8",<font></font>
    "jsx-loader": "^0.13.1",<font></font>
    "react-style-webpack-plugin": "^0.4.0",<font></font>
    "style-loader": "^0.10.2",<font></font>
    "url-loader": "^0.5.5",<font></font>
    "webpack": "^1.8.5",<font></font>
    "webpack-dev-server": "^1.8.0"<font></font>
  },<font></font>
  "dependencies": {<font></font>
    "react": "^0.13.1",<font></font>
    "react-style": "^0.5.3"<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的目录结构是：</font></font></p>

<pre><code>assets  <font></font>
  bundle.css<font></font>
  bundle.css.map    <font></font>
  bundle.js <font></font>
  bundle.js.map <font></font>
js<font></font>
  AppActions.js<font></font>
  Profile.css.js<font></font>
  ProfileList.js<font></font>
  main.js<font></font>
  AppConstants.js<font></font>
  AppStore.js       <font></font>
  Profile.js<font></font>
  ResultPage.js     <font></font>
package.json<font></font>
index.html<font></font>
node_modules<font></font>
webpack.config.js<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>assets</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录中的</font><font style="vertical-align: inherit;">每个文件</font><font style="vertical-align: inherit;">都是由webpack生成的</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3201篇《webpack-dev-server不监视我的文件更改》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了使webpack能够监视我的文件更改（Ubuntu 14.04），我必须增加观察者的数量（以前增加了观察者的数量，但是数量仍然太少）：</font></font></p>

<p><code>echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf &amp;&amp; sudo sysctl -p</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">官方文档中的来源：</font><a href="https://webpack.github.io/docs/troubleshooting.html#not-enough-watchers" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://webpack.github.io/docs/troubleshooting.html#not-enough-watchers" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//webpack.github.io/docs/troubleshooting.html#not-enough-watchers</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我首先怀疑是</font></font><code>fsevents</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Ubuntu上不起作用</font><font style="vertical-align: inherit;">的原因</font><font style="vertical-align: inherit;">，但事实并非如此。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，由于现在可以进行监视和重新编译，但是浏览器的自动刷新部分不起作用，因此我在</font></font><code>--inline</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@deowk的答案中</font><font style="vertical-align: inherit;">添加了</font><font style="vertical-align: inherit;">参数，从而启用了“内联模式”：
</font></font><code>webpack-dev-server --content-base ./ --port 9966 --hot --inline</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用官方文档：“将热模块替换与webpack-dev-server一起使用的最简单方法是使用内联模式。” </font><font style="vertical-align: inherit;">来源：</font><a href="https://webpack.github.io/docs/webpack-dev-server.html#hot-module-replacement" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://webpack.github.io/docs/webpack-dev-server.html#hot-module-replacement" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//webpack.github.io/docs/webpack-dev-server.html#hot-module-replacement</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的情况下，错误是由目录名中的空白引起的，通过将“ RepositoryName”更改为“ RepositoryName”，一切正常！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将其放在此处以防万一。</font><font style="vertical-align: inherit;">我的问题是相同的，但是是由目录名和webpack别名声明的大小写不一致引起的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个</font></font><code>WebGL</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在别名中引用</font><font style="vertical-align: inherit;">为的</font><font style="vertical-align: inherit;">目录</font></font><code>webgl</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，不幸的</font><font style="vertical-align: inherit;">是</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">目录</font><font style="vertical-align: inherit;">适用于构建，但不适用于代码查看。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@funkybunky确定了正确的问题，但（IMHO）用错误的方式解决了它。</font><font style="vertical-align: inherit;">至少就我而言，webpack试图监视它使用的每个文件，包括从中提取的成千上万个依赖文件的深层链</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我</font></font><a href="https://webpack.js.org/configuration/watch/#watchoptions" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其添加到配置中</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>devServer: {<font></font>
  watchOptions: {<font></font>
    ignored: /node_modules/<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，您合法地可以有成千上万个可能需要监视的文件，在这种情况下，可以提高该限制，但是最好忽略不大可能更改的供应商库。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
