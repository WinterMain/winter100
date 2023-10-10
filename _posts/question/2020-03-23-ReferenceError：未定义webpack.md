---
layout: question
title:  ReferenceError：未定义webpack
date:   2020-03-23T13:57:26.000Z
description: 在我的webpack应用程序中，我有一个基本的构建过程，该过程由“ npm run build”触发，该过程执行webpack二进制文件并将/ app中的...
img: 
author: 神乐阿飞
category: question
answer: 0
tags: node.js Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的webpack应用程序中，我有一个基本的构建过程，该过程由“ npm run build”触发，该过程执行webpack二进制文件并将/ app中的index.html复制到/ dist。</font><font style="vertical-align: inherit;">每当我运行时，</font></font><code>npm run build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我都会得到，</font></font><code>ReferenceError: webpack is not defined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是当我运行时</font></font><code>npm start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将启动webpack-dev-server，一切都很好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的webpack配置文件：</font></font></p>

<pre><code>var ExtractTextPlugin = require('extract-text-webpack-plugin');<font></font>
<font></font>
var config = {<font></font>
    context: __dirname + '/app',<font></font>
    entry: './index.js',<font></font>
    output: {<font></font>
        path: __dirname + '/app',<font></font>
        filename: 'app.js'<font></font>
    },<font></font>
    module: {<font></font>
        loaders: [<font></font>
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },<font></font>
            { test: /\.html$/, loader: 'raw', exclude: /node_modules/ },<font></font>
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass'), exclude: /node_modules/}<font></font>
        ]<font></font>
    },<font></font>
    plugins: [<font></font>
        new ExtractTextPlugin('app.css')<font></font>
    ]<font></font>
};<font></font>
<font></font>
if (process.env.NODE_ENV == 'production') {<font></font>
    config.output.path = __dirname + '/dist';<font></font>
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());<font></font>
}<font></font>
<font></font>
module.exports = config;<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
