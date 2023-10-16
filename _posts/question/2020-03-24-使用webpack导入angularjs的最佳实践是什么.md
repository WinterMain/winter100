---
layout: question
title:  使用webpack导入angularjs的最佳实践是什么？
date:   2020-03-24T03:08:01.000Z
description: 如何将Webpack和AngularJS一起使用，如何加载模板和按需获取资源？一个非常好的webpack.config.js为此目的编写文件的示例将不...
img: 
author: 神乐
category: question
answer: 0
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何将Webpack和AngularJS一起使用，如何加载模板和按需获取资源？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个非常好的</font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为此目的</font><font style="vertical-align: inherit;">编写</font><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">的示例</font><font style="vertical-align: inherit;">将不胜感激。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处显示的所有代码段均可在</font></font><a href="https://github.com/jibiabraham/faber-seed" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此github存储库中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">访问</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">代码已从此</font></font><a href="https://github.com/packetloop/angular-webpack" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">packetloop git repo</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大量修改</font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.json</font></font></strong></p>

<pre class="lang-js prettyprint-override"><code>var path = require('path');<font></font>
var ResolverPlugin = require("webpack/lib/ResolverPlugin");<font></font>
<font></font>
var config = {<font></font>
  context: __dirname,<font></font>
  entry: ['webpack/hot/dev-server', './app/app.js'],<font></font>
  output: {<font></font>
    path: './build',<font></font>
    filename: 'bundle.js'<font></font>
  },<font></font>
  module: {<font></font>
    loaders: [{<font></font>
      test: /\.css$/,<font></font>
      loader: "style!css-loader"<font></font>
    }, {<font></font>
      test: /\.scss$/,<font></font>
      loader: "style!css!sass?outputStyle=expanded"<font></font>
    }, {<font></font>
      test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,<font></font>
      loader: "file"<font></font>
    }, {<font></font>
      test: /\.html$/,<font></font>
      loader: "ngtemplate?relativeTo=" + path.join(__dirname, 'app/') + "!raw"<font></font>
    }]<font></font>
  },<font></font>
  // Let webpack know where the module folders are for bower and node_modules<font></font>
  // This lets you write things like - require('bower/&lt;plugin&gt;') anywhere in your code base<font></font>
  resolve: {<font></font>
    modulesDirectories: ['node_modules', 'lib/bower_components'],<font></font>
    alias: {<font></font>
      'npm': __dirname + '/node_modules',<font></font>
      'vendor': __dirname + '/app/vendor/',<font></font>
      'bower': __dirname + '/lib/bower_components'<font></font>
    }<font></font>
  },<font></font>
  plugins: [<font></font>
    // This is to help webpack know that it has to load the js file in bower.json#main<font></font>
    new ResolverPlugin(<font></font>
      new ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])<font></font>
    )<font></font>
  ]<font></font>
};<font></font>
<font></font>
module.exports = config;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要将AngularJS导入主体，</font></font><code>app.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请执行以下操作：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app / vendor / angular.js</font></font></strong></p>

<pre class="lang-js prettyprint-override"><code>'use strict';<font></font>
<font></font>
if (!global.window.angular) {<font></font>
  require('bower/angular/angular');<font></font>
}<font></font>
var angular = global.window.angular;<font></font>
module.exports = angular;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后</font></font><code>app.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样</font><font style="vertical-align: inherit;">使用它</font><font style="vertical-align: inherit;">，</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.js</font></font></strong></p>

<pre class="lang-js prettyprint-override"><code>...<font></font>
var angular = require('vendor/angular');<font></font>
<font></font>
// Declare app level module<font></font>
var app = angular.module('myApp', []);<font></font>
<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下正确吗？</font><font style="vertical-align: inherit;">有没有更简单的方法可以做到这一点？</font><font style="vertical-align: inherit;">我看过几篇文章（按任何标准来看都不多），其中列出了另一种方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="http://www.reddit.com/r/angularjs/comments/252z6x/what_are_best_practices_for_bundling_angularjs/chdidgy" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个reddit帖子评论</font></font></a></p>

<pre><code>// Add to webpack.config.js#module#loaders array<font></font>
    {<font></font>
      test: /[\/]angular\.js$/,<font></font>
      loader: "exports?angular"<font></font>
    }<font></font>
</code></pre>

<p>There is also another plugin which is in development right now, at <a href="https://github.com/stackfull/angular-seed" rel="noreferrer">stackfull/angular-seed</a>. It seems to be in the right direction, but is really really hard to use right now.</p>

<p>Webpack is way awesome, but the lack of documentation and samples are killing it.</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3280篇《使用webpack导入angularjs的最佳实践是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
