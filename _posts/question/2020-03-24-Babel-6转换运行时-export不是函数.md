---
layout: question
title:  Babel 6转换运行时：$ export不是函数
date:   2020-03-24T10:22:45.000Z
description: 我正在尝试合并Babel的转换运行时，以使我的代码与IE9兼容。但是，由于集成了该代码，该代码甚至无法在Chrome上运行。我得到的错误Uncaught ...
img: 
author: Gil前端
category: question
answer: 0
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试合并Babel的转换运行时，以使我的代码与IE9兼容。</font><font style="vertical-align: inherit;">但是，由于集成了该代码，该代码甚至无法在Chrome上运行。</font><font style="vertical-align: inherit;">我得到的错误</font></font><code>Uncaught TypeError: $export is not a function</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上</font></font><code>es6.object.define-property.js:3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在我的.babelrc中没有“ transform-runtime”行的情况下，一切运行正常。</font><font style="vertical-align: inherit;">有任何想法吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的</font></font><code>.babelrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>{<font></font>
  "plugins": [<font></font>
    "transform-runtime"<font></font>
  ],<font></font>
  "presets": [<font></font>
    "es2015",<font></font>
    "react"<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而我的</font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var webpack = require('webpack');<font></font>
<font></font>
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');<font></font>
<font></font>
module.exports = {<font></font>
  entry: {<font></font>
    EventAdmin: './src/event_admin',<font></font>
    EventRender: './src/event_render'<font></font>
  },<font></font>
  output: {<font></font>
    path: '../public/js2',<font></font>
    filename: '[name].js' // Template based on keys in entry above<font></font>
  },<font></font>
  externals: {<font></font>
    // require("jquery") is external and available<font></font>
    //  on the global var jQuery<font></font>
    'jquery': 'jQuery'<font></font>
  },<font></font>
  plugins: [commonsPlugin],<font></font>
  devtool: 'source-map',<font></font>
  module: {<font></font>
    loaders: [<font></font>
      { test: /\.css$/, loader: 'style-loader!css-loader' },<font></font>
      {<font></font>
        test: /\.js$/,<font></font>
        loader: 'babel-loader'<font></font>
      },<font></font>
    ]<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><a href="https://www.samyoc.com//uploads/users/26074/images/thumbnails/1585045238236.png" data-src="https://www.samyoc.com//uploads/users/26074/images/1585045238236.png"><img src="https://i.stack.imgur.com/4QFcU.png" alt="在此处输入图片说明"></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3645篇《Babel 6转换运行时：$ export不是函数》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
