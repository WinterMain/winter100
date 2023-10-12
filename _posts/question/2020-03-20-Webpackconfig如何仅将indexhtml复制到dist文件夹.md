---
layout: question
title:  Webpack.config如何仅将index.html复制到dist文件夹
date:   2020-03-20T06:03:47.000Z
description: 我正在尝试自动化进入/ dist的资产。我有以下config.js：module.exports = {  context  __dirname +...
img: 
author: GreenA
category: question
answer: 2
tags: 网络包 Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试自动化进入/ dist的资产。</font><font style="vertical-align: inherit;">我有以下config.js：</font></font></p>

<pre><code>module.exports = {<font></font>
  context: __dirname + "/lib",<font></font>
  entry: {<font></font>
    main: [<font></font>
      "./baa.ts"<font></font>
    ]<font></font>
  },<font></font>
  output: {<font></font>
    path: __dirname + "/dist",<font></font>
    filename: "foo.js"<font></font>
  },<font></font>
  devtool: "source-map",<font></font>
  module: {<font></font>
    loaders: [<font></font>
      {<font></font>
        test: /\.ts$/,<font></font>
        loader: 'awesome-typescript-loader'<font></font>
      },<font></font>
      { test: /\.css$/, loader: "style-loader!css-loader" }<font></font>
    ]<font></font>
  },<font></font>
  resolve: {<font></font>
    // you can now require('file') instead of require('file.js')<font></font>
    extensions: ['', '.js', '.json']<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还想在运行webpack时将/ lib旁边目录中的main.html包含到/ dist文件夹中。</font><font style="vertical-align: inherit;">我怎样才能做到这一点？</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新1 2017_____________</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我最喜欢的方法是将</font></font><a href="https://github.com/jantimon/html-webpack-plugin" rel="noreferrer"><code>html-webpack-plugin</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模板文件与</font><font style="vertical-align: inherit;">一起使用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">也要感谢大家接受的答案！</font><font style="vertical-align: inherit;">这种方式的优点是索引文件也将开箱即用添加了cachbusted js链接！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2518篇《Webpack.config如何仅将index.html复制到dist文件夹》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一小哥</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Windows上可以正常使用：</font></font></p>

<ol>
<li><code>npm install --save-dev copyfiles</code>   </li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个复制任务：</font></font><code>"copy": "copyfiles -u 1 ./app/index.html ./deploy"</code></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将我的index.html从app文件夹移到deploy文件夹。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinStafan</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将在VitalyB的答案中添加一个选项：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项3</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过npm。</font><font style="vertical-align: inherit;">如果通过npm运行命令，则可以</font></font><a href="https://github.com/kentcdodds/webpack-angular/blob/finished/step9-source-map/package.json" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将此设置</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到package.json中（也可以在此处检出webpack.config.js）。</font><font style="vertical-align: inherit;">对于开发运行</font></font><code>npm start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，在这种情况下，无需复制index.html，因为Web服务器将从源文件目录运行，并且bundle.js将在同一位置可用（bundle.js仅驻留在内存中，但是就像与index.html一起位于一样）。</font><font style="vertical-align: inherit;">对于生产运行</font></font><code>npm run build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，一个dist文件夹将包含您的bundle.js和index.html使用很好的旧cp命令复制，如下所示：</font></font></p>

<pre><code>"scripts": {<font></font>
    "test": "NODE_ENV=test karma start",<font></font>
    "start": "node node_modules/.bin/webpack-dev-server --content-base app",<font></font>
    "build": "NODE_ENV=production node node_modules/.bin/webpack &amp;&amp; cp app/index.html dist/index.html"<font></font>
  }<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：选项4</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个</font></font><a href="https://www.npmjs.com/package/copy-webpack-plugin" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">copy-webpack-plugin</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如本</font></font><a href="https://stackoverflow.com/a/33374807/2420037"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Stackoverflow答案中所述</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是通常，除了第一个文件（如index.html）和较大的资产（如大图像或视频）外，通过css，html，images等直接包含在您的应用中，</font></font><code>require</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且webpack会为您提供该文件（好吧，在使用加载程序和可能的插件正确设置好它之后）。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
