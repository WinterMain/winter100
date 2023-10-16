---
layout: question
title:  Webpack无法将ES6转换为ES5
date:   2020-04-03T02:49:35.000Z
description: 我是Webpack的新手。我想我做错了。我想使用babel将ES6函数转换为ES5函数。因此，我做了一些研究，发现了babel-loader。但是，我不确...
img: 
author: Stafan
category: question
answer: 1
tags: node.js Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是Webpack的新手。</font><font style="vertical-align: inherit;">我想我做错了。</font><font style="vertical-align: inherit;">我想使用babel将ES6函数转换为ES5函数。</font><font style="vertical-align: inherit;">因此，我做了一些研究，发现了babel-loader。</font><font style="vertical-align: inherit;">但是，我不确定自己在做什么。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我运行npm install babel-loader --save-dev并将其添加到我的package.json中</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">// package.json</font></font></p>

<pre><code>{<font></font>
  "name": "kanban",<font></font>
  "version": "1.0.0",<font></font>
  "description": "kanban",<font></font>
  "main": "index.js",<font></font>
  "scripts": {<font></font>
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"<font></font>
  },<font></font>
  "author": "",<font></font>
  "license": "ISC",<font></font>
  "devDependencies": {<font></font>
    "babel-core": "^6.3.21",<font></font>
    "babel-loader": "^6.2.0",<font></font>
    "html-webpack-plugin": "^1.7.0",<font></font>
    "json-loader": "^0.5.4",<font></font>
    "webpack": "^1.12.9"<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">// webpack.config.js</font></font></p>

<pre><code>var path = require('path');<font></font>
var HtmlwebpackPlugin =  require('html-webpack-plugin');<font></font>
<font></font>
const PATHS = {<font></font>
  app: path.join(__dirname, 'app'),<font></font>
  build: path.join(__dirname, 'build')<font></font>
};<font></font>
<font></font>
module.exports = {<font></font>
  entry: PATHS.app,<font></font>
  output: {<font></font>
    path: PATHS.build,<font></font>
    filename: 'bundle.js'<font></font>
  },<font></font>
  plugins: [<font></font>
    new HtmlwebpackPlugin({<font></font>
      title: 'Kanban app'<font></font>
    })<font></font>
  ],<font></font>
  module: {<font></font>
    loaders: [<font></font>
      { test: /\.js$/, loader: 'babel-loader' }<font></font>
    ]<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">// app / index.js-我刚刚在ES6语法中添加了一些随机的无用函数。</font><font style="vertical-align: inherit;">我希望我能在我的bundle.js文件中看到ES5格式，但是它没有改变。</font><font style="vertical-align: inherit;">bundle.js中仍然是ES6语法</font></font></p>

<pre><code>var component = require('./component');<font></font>
var app = document.createElement('div');<font></font>
document.body.appendChild('app');<font></font>
app.appendChild(component());<font></font>
<font></font>
let myJson = {<font></font>
  prop: 'myProp'<font></font>
};<font></font>
<font></font>
let fives = [];<font></font>
nums = [1, 2, 5, 15, 25, 32];<font></font>
<font></font>
// Statement bodies<font></font>
nums.forEach(function (v) {<font></font>
  if (v % 5 === 0) {<font></font>
    fives.push(v);<font></font>
  }<font></font>
}, this);<font></font>
<font></font>
console.log(fives);<font></font>
<font></font>
let sum = (a, b) =&gt; a + b; <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">// app / component.js</font></font></p>

<pre><code>module.exports = function() {<font></font>
  var element = document.createElement('h1');<font></font>
  element.innerHTML = 'hello world';<font></font>
  return element;<font></font>
};<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3922篇《Webpack无法将ES6转换为ES5》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题。</font><font style="vertical-align: inherit;">好吧，官方回应将此配置添加到webpack的答案</font></font></p>

<pre><code>{<font></font>
  "presets": ["es2015", "react", "stage-0"],<font></font>
  "plugins": ["react-hot-loader/babel"]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是链接：</font><a href="https://github.com/facebook/react/issues/8379" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/facebook/react/issues/8379" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/facebook/react/issues/8379</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
