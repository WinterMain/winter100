---
layout: question
title:  使用webpack-dev-server运行节点快递服务器
date:   2020-03-23T12:59:31.000Z
description: 我正在使用webpack通过以下配置成功运行我的React前端：{    name  'client',    entry  './scripts...
img: 
author: Tom凯飞云
category: question
answer: 0
tags: node.js Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用webpack通过以下配置成功运行我的React前端：</font></font></p>

<pre><code>{<font></font>
    name: 'client',<font></font>
    entry: './scripts/main.js',<font></font>
    output: {<font></font>
        path: __dirname,<font></font>
        filename: 'bundle.js'  <font></font>
    },<font></font>
    module: {<font></font>
        loaders: [<font></font>
            {<font></font>
                test: /.jsx?$/,<font></font>
                loader: 'babel-loader',<font></font>
                exclude: /node_modules/,<font></font>
                query:{<font></font>
                    presets: ['es2015', 'react', 'stage-2']<font></font>
                }<font></font>
            }<font></font>
        ]<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也试图建立一个node.js表达后端，并且也希望通过webpack来运行它，这样我就可以同时运行后端和前端的一台服务器，并且因为我想使用babel进行翻译我的JavaScript。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我做了一个快速的测试服务器，看起来像这样：</font></font></p>

<pre><code>var express = require('express');<font></font>
console.log('test');<font></font>
<font></font>
var app = express();<font></font>
<font></font>
app.get('/', function(req, res){<font></font>
    res.send("Hello world from Express!!");<font></font>
});<font></font>
<font></font>
app.listen(3000, function(){<font></font>
    console.log('Example app listening on port 3000');<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果运行此程序</font></font><code>node index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并打开浏览器，</font></font><code>localhost:3000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则会显示“ Hello world from Express !!”。</font><font style="vertical-align: inherit;">到目前为止，一切都很好。</font><font style="vertical-align: inherit;">然后，我尝试为其创建一个Web-pack配置：</font></font></p>

<pre><code>var fs = require('fs');<font></font>
var nodeModules = {};<font></font>
fs.readdirSync('node_modules')<font></font>
    .filter(function(x) {<font></font>
        return ['.bin'].indexOf(x) === -1;<font></font>
    })<font></font>
    .forEach(function(mod) {<font></font>
        nodeModules[mod] = 'commonjs ' + mod;    <font></font>
});<font></font>
<font></font>
module.exports = [<font></font>
{<font></font>
    name: 'server',<font></font>
    target: 'node',<font></font>
    entry: './index.js',<font></font>
    output: {<font></font>
        path: __dirname,<font></font>
        filename: 'bundle.js'<font></font>
    },<font></font>
    externals: nodeModules,<font></font>
    module: {<font></font>
        loaders: [<font></font>
            { <font></font>
                test: /\.js$/,<font></font>
                loaders: [<font></font>
                    'babel-loader'<font></font>
                ]<font></font>
            },<font></font>
            {<font></font>
                test:  /\.json$/, <font></font>
                loader: 'json-loader'<font></font>
            }<font></font>
        ]<font></font>
    }<font></font>
}   <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我运行命令时，</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它成功启动（似乎）。</font><font style="vertical-align: inherit;">但是，如果我现在打开浏览器</font></font><code>localhost:3000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它只是说该网页不可用，就像服务器根本没有运行一样。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对node和webpack都是新手，所以我在某个地方犯了一个小错误，或者我走得很远;）</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3031篇《使用webpack-dev-server运行节点快递服务器》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
