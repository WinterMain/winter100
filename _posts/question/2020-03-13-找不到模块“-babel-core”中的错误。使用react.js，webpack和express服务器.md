---
layout: question
title:  找不到模块“ babel-core”中的错误。使用react.js，webpack和express服务器
date:   2020-03-12T16:31:43.000Z
description: 每当我webpack在终端上运行时，我都会得到：Hash  efea76b1048c3a97b963Version  webpack 1.12.13...
img: 
author: 猪猪前端
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当我</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在终端上</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">时，我都会得到：</font></font></p>

<pre><code>Hash: efea76b1048c3a97b963<font></font>
Version: webpack 1.12.13<font></font>
Time: 33ms<font></font>
    + 1 hidden modules<font></font>
<font></font>
ERROR in Cannot find module 'babel-core'<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font></font></p>

<pre><code>module.exports = {<font></font>
  entry: './app-client.js',<font></font>
  output: {<font></font>
    filename: 'public/bundle.js'<font></font>
  },<font></font>
  module: {<font></font>
    loaders: [<font></font>
      {<font></font>
        exclude: /(node_modules|app-server.js)/,<font></font>
        loader: 'babel'<font></font>
      }<font></font>
    ]<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></strong></p>

<pre><code>{<font></font>
  "name": "react",<font></font>
  "version": "1.0.0",<font></font>
  "description": "React polling app",<font></font>
  "main": "app-client.js",<font></font>
  "dependencies": {<font></font>
    "babel-loader": "^6.2.2",<font></font>
    "bootstrap": "^3.3.6",<font></font>
    "express": "^4.13.4",<font></font>
    "react": "^0.14.7"<font></font>
  },<font></font>
  "devDependencies": {},<font></font>
  "scripts": {<font></font>
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"<font></font>
  },<font></font>
  "author": "",<font></font>
  "license": "ISC"<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1352篇《找不到模块“ babel-core”中的错误。使用react.js，webpack和express服务器》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光凯</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在安装npm时，您应将babel-loader和babel-core安装为dev-dependency。</font></font></p>

<pre><code>npm install babel-core babel-loader --save-dev
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro凯</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此线程上添加@Chetan的答案：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">今天，我在</font></font><a href="https://leanpub.com/setting-up-es6/read#leanpub-auto-using-ecmascript-6-today" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览Axel Rauschmayer博士的书时遇到了这个问题</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">每本书也</font></font><code>babel-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应下载</font></font><code>babel-core</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，当我尝试时并非如此。</font><font style="vertical-align: inherit;">我认为这与@theJian的答案有关。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于原始package.json已经列出</font></font><code>babel-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为依赖项，因此运行以下命令可以解决该错误。</font></font></p>

<pre><code>npm install babel-core --save-dev
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋卡卡西</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>npm install babel-register
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样可以解决您的问题。</font><font style="vertical-align: inherit;">此外，添加babelrc .babelrc {“ presets”：[“ es2015”，“ react”]}</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神无Pro</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是遇到此错误，并通过安装babel-core解决了。</font><font style="vertical-align: inherit;">但是有趣的是，我发现babel-core确实存在于babel-loader的peerDependencies中。</font></font></p>

<p><a href="https://github.com/babel/babel-loader/blob/master/package.json" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/babel/babel-loader/blob/master/package.json</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么peerDependecies不能自动安装，经过几次搜索工作后，我</font><font style="vertical-align: inherit;">在npm博客中</font><font style="vertical-align: inherit;">找到了</font></font><a href="http://blog.npmjs.org/post/110924823920/npm-weekly-5" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">peerDependencies将不再自动安装。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
