---
layout: question
title:  webpack css-loader在外部样式表的url（）引用中找不到图像
date:   2020-03-24T02:01:41.000Z
description: 我是整个Node / NPM / Webpack世界的新手，所以很抱歉，如果这很明显。我正在尝试构建一个与Webpack捆绑在一起的简单前端项目。我已...
img: 
author: GreenA
category: question
answer: 0
tags: node.js Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是整个Node / NPM / Webpack世界的新手，所以很抱歉，如果这很明显。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试构建一个与Webpack捆绑在一起的简单前端项目。</font><font style="vertical-align: inherit;">我已经安装了节点，并配置了package.json文件。</font><font style="vertical-align: inherit;">如果我在根目录中运行“ npm start”，则不会从控制台出现任何错误，并且能够在浏览器中转到“ localhost：3000”，并看到我的“ hello，world”输出。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的下一个任务是包括一个样式表，其中包含对图像的引用，如下所示：</font></font></p>

<p><code>.myimg {background: url(path/to/file.jpg);}</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过这样的设置，我可以通过webpack-dev-server查看图像（通过在Web浏览器中转到localhost：3000），但是如果我构建项目，则图像的路径是错误的。</font><font style="vertical-align: inherit;">我不知道我在做什么错，所以我把这个扔给了Stackiverse，希望外面的人会知道我在做什么愚蠢的事情。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的package.json文件：</font></font></p>

<pre><code>{<font></font>
  "name": "webpack-test1",<font></font>
  "version": "0.0.1",<font></font>
  "description": "My project WTF.",<font></font>
  "private": true,<font></font>
  "scripts": {<font></font>
    "start": "node server.js"<font></font>
  },<font></font>
  "devDependencies": {<font></font>
   "css-loader": "^0.15.2",<font></font>
   "file-loader": "^0.8.4",<font></font>
   "style-loader": "^0.12.3",<font></font>
   "url-loader": "^0.5.6"<font></font>
  },<font></font>
  "dependencies": {<font></font>
    "webpack": "^1.9.6",<font></font>
    "webpack-dev-server": "^1.8.2"<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...这是我的webpack.config.js文件：</font></font></p>

<pre><code>var path = require('path');<font></font>
var webpack = require('webpack');<font></font>
<font></font>
module.exports = {<font></font>
  entry: [<font></font>
    "./src/start.js"<font></font>
],<font></font>
output: {<font></font>
    filename: "bundle.js",<font></font>
    path: path.join(__dirname, 'build'),<font></font>
    publicPath: '/build/'<font></font>
},<font></font>
module: {<font></font>
    loaders: [<font></font>
        { test: /\.css$/, loader: 'style-loader!css-loader' },<font></font>
        { test: /\.(png|jpg)$/, loader: 'file-loader' }<font></font>
    ]<font></font>
}<font></font>
<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...然后是index.html文件：</font></font></p>

<pre><code>&lt;!doctype html&gt;<font></font>
&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
    &lt;title&gt;Webpack Test&lt;/title&gt;<font></font>
&lt;/head&gt;<font></font>
<font></font>
&lt;body&gt;<font></font>
    &lt;div class="imgtest"&gt;hello, world&lt;/div&gt;<font></font>
    &lt;script src="build/bundle.js"&gt;&lt;/script&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...配置文件中引用的“ start.js”文件：</font></font></p>

<pre><code>require('./test.css');<font></font>
console.log("y u no work?");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...最后，css文件本身的内容：</font></font></p>

<pre><code>.imgtest { background: url(img/volcano.jpg);}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像我在顶部所说的那样，在webpack-dev-server世界中，映像的路径可以正确解析，并且显示为DOM元素的背景。</font><font style="vertical-align: inherit;">在公开的世界中，浏览器告诉我找不到文件，而Safari的控制台清楚地显示了错误的文件路径：</font></font></p>

<pre><code>http://localhost/build/1b05d814aa13ac035c6b122b9f5974f8.jpg
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确的本地路径是这样的：</font></font></p>

<pre><code>http://localhost/~username/webpack1/build/1b05d814aa13ac035c6b122b9f5974f8.jpg
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，我做错了，但我不知道该怎么办。</font><font style="vertical-align: inherit;">任何帮助或建议，不胜感激。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3207篇《webpack css-loader在外部样式表的url（）引用中找不到图像》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
