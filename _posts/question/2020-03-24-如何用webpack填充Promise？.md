---
layout: question
title:  如何用webpack填充Promise？
date:   2020-03-24T09:27:09.000Z
description: 我正在使用webpack捆绑我的JavaScript。我依赖像popsicle这样的模块，它们使用any-promise。这是我的代码：var p...
img: 
author: LEY古一阿飞
category: question
answer: 0
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用webpack捆绑我的JavaScript。</font><font style="vertical-align: inherit;">我依赖像</font></font><a href="https://www.npmjs.com/package/popsicle" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">popsicle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样的</font><font style="vertical-align: inherit;">模块</font><font style="vertical-align: inherit;">，它们使用</font></font><a href="https://www.npmjs.com/package/any-promise" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">any-promise</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的代码：</font></font></p>

<pre><code>var popsicle = require('popsicle');<font></font>
popsicle.get('/').then(function() {<font></font>
  console.log('loaded URL');<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>Promise</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可用的</font><font style="vertical-align: inherit;">浏览器中，此方法工作正常</font><font style="vertical-align: inherit;">，但</font></font><a href="http://caniuse.com/#feat=promises" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE 11不提供Promise</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">所以我想使用</font></font><a href="https://www.npmjs.com/package/es6-promise" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">es6-promise</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为</font><a href="https://www.npmjs.com/package/es6-promise" rel="noreferrer"><font style="vertical-align: inherit;">polyfill</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图添加一个显式</font></font><code>ProvidePlugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到我的</font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>plugins: [<font></font>
  new webpack.ProvidePlugin({<font></font>
    'Promise': 'exports?global.Promise!es6-promise'<font></font>
  })<font></font>
]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我仍然在IE 11中收到错误：</font></font><code>any-promise browser requires a polyfill or explicit registration e.g: require('any-promise/register/bluebird')</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试显式附加全局变量：</font></font></p>

<pre><code>global.Promise = global.Promise || require('es6-promise');
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是IE 11给出了另一个错误：</font></font><code>Object doesn't support this action</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还尝试过明确注册es6-promise：</font></font></p>

<pre><code>require('any-promise/register/es6-promise');<font></font>
var popsicle = require('popsicle');<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这行得通，但是我必须在每个加载的文件中都这样做</font></font><code>popsicle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我想他们只是在</font></font><code>Promise</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何确保</font></font><code>window.Promise</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">始终使用webpack进行定义？</font></font></strong></p>

<p><a href="https://github.com/Wilfred/webpack_promise_demo" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完整的回购演示在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3557篇《如何用webpack填充Promise？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
