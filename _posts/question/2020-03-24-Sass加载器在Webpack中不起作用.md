---
layout: question
title:  Sass加载器在Webpack中不起作用
date:   2020-03-24T01:53:43.000Z
description: 我正在尝试在Webpack配置中支持\* .scss文件，但是在运行webpack build命令时，始终出现以下错误：ERROR in ./~/css...
img: 
author: 凯西里
category: question
answer: 1
tags: node.js CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在Webpack配置中支持* .scss文件，但是在运行webpack build命令时，始终出现以下错误：</font></font></p>

<pre><code>ERROR in ./~/css-loader!./~/sass-loader!./app/styles.scss<font></font>
Module build failed: TypeError: Cannot read property 'sections' of null<font></font>
at new SourceMapConsumer (/Users/sean/Development/playground/webpack.sass.test/node_modules/css-loader/node_modules/postcss/node_modules/source-map/lib/source-map/source-map-consumer.js:23:21)<font></font>
at PreviousMap.consumer (/Users/sean/Development/playground/webpack.sass.test/node_modules/css-loader/node_modules/postcss/lib/previous-map.js:37:34)<font></font>
at new Input (/Users/sean/Development/playground/webpack.sass.test/node_modules/css-loader/node_modules/postcss/lib/input.js:42:28)<font></font>
at parse (/Users/sean/Development/playground/webpack.sass.test/node_modules/css-loader/node_modules/postcss/lib/parse.js:17:17)<font></font>
at new LazyResult (/Users/sean/Development/playground/webpack.sass.test/node_modules/css-loader/node_modules/postcss/lib/lazy-result.js:54:47)<font></font>
at Processor.process (/Users/sean/Development/playground/webpack.sass.test/node_modules/css-loader/node_modules/postcss/lib/processor.js:30:16)<font></font>
at processCss (/Users/sean/Development/playground/webpack.sass.test/node_modules/css-loader/lib/processCss.js:168:24)<font></font>
at Object.module.exports (/Users/sean/Development/playground/webpack.sass.test/node_modules/css-loader/lib/loader.js:21:15)<font></font>
@ ./app/styles.scss 4:14-117<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我无法为自己的生活弄清楚原因。</font><font style="vertical-align: inherit;">这是一个非常基本的设置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建了一个保管箱共享，其中最少的说明了这一点：</font><a href="https://www.dropbox.com/s/quobq29ngr38mhx/webpack.sass.test.zip?dl=0" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://www.dropbox.com/s/quobq29ngr38mhx/webpack.sass.test.zip?dl=0" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.dropbox.com/s/quobq29ngr38mhx/webpack.sass.test.zip?dl=0</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解压缩然后运行：</font></font></p>

<pre><code>npm install<font></font>
webpack<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的webpack.config.js文件：</font></font></p>

<pre><code>var path = require('path')<font></font>
var webpack = require('webpack')<font></font>
<font></font>
module.exports = {<font></font>
  devtool: 'eval',<font></font>
  entry: [<font></font>
    './app'<font></font>
  ],<font></font>
  output: {<font></font>
    path: path.join(__dirname, 'dist'),<font></font>
    filename: 'index.js',<font></font>
    publicPath: '/dist/'<font></font>
  },<font></font>
  plugins: [<font></font>
    new webpack.NoErrorsPlugin()<font></font>
  ],<font></font>
  resolve: {<font></font>
    extensions: ['', '.js']<font></font>
  },<font></font>
  module: {<font></font>
    loaders: [{<font></font>
      test: /\.scss$/,<font></font>
      loader: 'style-loader!css-loader!sass-loader'<font></font>
    }]<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有index.js入口文件：</font></font></p>

<pre><code>require('./styles.scss');<font></font>
<font></font>
alert('foo bar baz');<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及styles.scss文件：</font></font></p>

<pre><code>body {<font></font>
  background-color: #000;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它似乎遵循sass-loader文档站点的建议，但我无法使其运行。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">:(</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关我的环境的信息：</font></font></p>

<pre><code>node - 0.12.4<font></font>
npm  - 2.10.1<font></font>
os   - OS X Yosemite<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3182篇《Sass加载器在Webpack中不起作用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在遇到相同的问题后，我发现了这一点：</font><a href="https://github.com/webpack/css-loader/issues/84" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/webpack/css-loader/issues/84" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/webpack/css-loader/issues/84</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，目前的解决方案是使用以下命令手动修改/node_modules/css-loader/lib/loader.js的第17-19行</font></font></p>

<pre><code>if(map &amp;&amp; typeof map !== "string") {<font></font>
    map = JSON.stringify(map);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这为我解决了问题。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
