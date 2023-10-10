---
layout: question
title:  使用NODE_ENV = production的Webpack编译vue仍会导致开发人员警告
date:   2020-03-13T12:25:03.000Z
description: 我在下面针对vue.js前端运行了一个非常简单的Web Pack配置。bundle.js已编译，但仍会产生“您正在开发模式下运行Vue”警告。我已遵循此处...
img: 
author: LEYPro前端
category: question
answer: 1
tags: webpack Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在下面针对vue.js前端运行了一个非常简单的Web Pack配置。</font><font style="vertical-align: inherit;">bundle.js已编译，但仍会产生“您正在开发模式下运行Vue”警告。</font><font style="vertical-align: inherit;">我已遵循</font></font><a href="https://vuejs.org/v2/guide/deployment.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定的建议</font><a href="https://vuejs.org/v2/guide/deployment.html"><font style="vertical-align: inherit;">，</font></a><font style="vertical-align: inherit;">但它没有任何改变。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么想法吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的webpack.config.js：</font></font></p>

<pre><code>var webpack = require('webpack')<font></font>
<font></font>
module.exports = {<font></font>
entry: './www/src/js/main.js',<font></font>
output: {<font></font>
  path: "./www/static/js",<font></font>
  filename: "bundle.js"<font></font>
},<font></font>
plugins: [<font></font>
  new webpack.DefinePlugin({<font></font>
    'process.env': {<font></font>
      NODE_ENV: '"production"'<font></font>
  }<font></font>
}),<font></font>
new webpack.optimize.UglifyJsPlugin({<font></font>
    compress: {<font></font>
      warnings: false<font></font>
    }<font></font>
})<font></font>
],<font></font>
module: {<font></font>
  loaders: [<font></font>
    {<font></font>
      test: /\.js$/,<font></font>
      loader: 'babel',<font></font>
      exclude: /node_modules/<font></font>
    },<font></font>
    {<font></font>
      test: /\.vue$/,<font></font>
      loader: 'vue'<font></font>
    }<font></font>
  ]<font></font>
},<font></font>
vue: {<font></font>
  loaders: {<font></font>
    js: 'babel'<font></font>
  }<font></font>
}<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY老丝</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用OSX（Unix）|| </font><font style="vertical-align: inherit;">的Linux</font></font></p>

<pre><code>export NODE_ENV=production
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Windows用户应使用以下命令设置NODE_ENV</font></font></p>

<pre><code>set NODE_ENV=production
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您确定设置了NODE_ENV变量吗？</font><font style="vertical-align: inherit;">检查一下。</font></font></p>

<pre><code>echo $NODE_ENV
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
