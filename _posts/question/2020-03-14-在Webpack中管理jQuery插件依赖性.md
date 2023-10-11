---
layout: question
title:  在Webpack中管理jQuery插件依赖性
date:   2020-03-14T10:00:02.000Z
description: 我在应用程序中使用Webpack，在其中创建两个入口点-所有我的JavaScript文件/代码的bundle.js，以及所有库（如jQuery和React...
img: 
author: 猪猪小卤蛋
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在应用程序中使用Webpack，在其中创建两个入口点-所有我的JavaScript文件/代码的bundle.js，以及所有库（如jQuery和React）的vendor.js。</font><font style="vertical-align: inherit;">为了使用以jQuery为依赖项的插件，并且我也希望在vendor.js中使用它们，我该怎么做？</font><font style="vertical-align: inherit;">如果这些插件具有多个依赖项怎么办？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，我正在尝试在此处使用此jQuery插件-https: </font></font><a href="https://github.com/mbklein/jquery-elastic" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/mbklein/jquery-elastic</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">Webpack文档中提到了</font></font><a href="https://webpack.js.org/plugins/provide-plugin/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">providePlugin</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和imports-loader。</font><font style="vertical-align: inherit;">我使用了ProvidePlugin，但是jQuery对象仍然不可用。</font><font style="vertical-align: inherit;">这是我的webpack.config.js的样子-</font></font></p>

<pre><code>var webpack = require('webpack');<font></font>
var bower_dir = __dirname + '/bower_components';<font></font>
var node_dir = __dirname + '/node_modules';<font></font>
var lib_dir = __dirname + '/public/js/libs';<font></font>
<font></font>
var config = {<font></font>
    addVendor: function (name, path) {<font></font>
        this.resolve.alias[name] = path;<font></font>
        this.module.noParse.push(new RegExp(path));<font></font>
    },<font></font>
    plugins: [<font></font>
        new webpack.ProvidePlugin({<font></font>
            $: "jquery",<font></font>
            jquery: "jQuery",<font></font>
            "window.jQuery": "jquery"<font></font>
        }),<font></font>
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity)<font></font>
    ],<font></font>
    entry: {<font></font>
        app: ['./public/js/main.js'],<font></font>
        vendors: ['react','jquery']<font></font>
    },<font></font>
    resolve: {<font></font>
        alias: {<font></font>
            'jquery': node_dir + '/jquery/dist/jquery.js',<font></font>
            'jquery.elastic': lib_dir + '/jquery.elastic.source.js'<font></font>
        }<font></font>
    },<font></font>
    output: {<font></font>
        path: './public/js',<font></font>
        filename: 'bundle.js'<font></font>
    },<font></font>
    module: {<font></font>
        loaders: [<font></font>
            { test: /\.js$/, loader: 'jsx-loader' },<font></font>
            { test: /\.jquery.elastic.js$/, loader: 'imports-loader' }<font></font>
        ]<font></font>
    }<font></font>
};<font></font>
config.addVendor('react', bower_dir + '/react/react.min.js');<font></font>
config.addVendor('jquery', node_dir + '/jquery/dist/jquery.js');<font></font>
config.addVendor('jquery.elastic', lib_dir +'/jquery.elastic.source.js');<font></font>
<font></font>
module.exports = config;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是尽管如此，它仍然在浏览器控制台中引发错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未捕获的ReferenceError：未定义jQuery</font></font></p>
</blockquote>

<p>Similarly, when I use the imports-loader, it throws an error,</p>

<blockquote>
  <p>require is not defined'</p>
</blockquote>

<p>in this line:</p>

<pre><code>var jQuery = require("jquery")
</code></pre>

<p>However, I could use the same plugin when I don't add it to my vendors.js file and instead required it in the normal AMD way as how I include my other JavaScript code files, like-</p>

<pre><code>define(<font></font>
[<font></font>
    'jquery',<font></font>
    'react',<font></font>
    '../../common-functions',<font></font>
    '../../libs/jquery.elastic.source'<font></font>
],function($,React,commonFunctions){<font></font>
    $("#myInput").elastic() //It works<font></font>
<font></font>
});<font></font>
</code></pre>

<p>But this is not what I want to do, as this would mean that jquery.elastic.source.js is bundled along with my JavaScript code in bundle.js, and I want all my jQuery plugins to be in the vendors.js bundle. So how do I go about achieving this?</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1586篇《在Webpack中管理jQuery插件依赖性》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村Tony</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：有时您只想将webpack用作简单Web项目的模块捆绑器-保持自己的代码井井有条。</font><font style="vertical-align: inherit;">以下解决方案适用于那些只希望外部库在其模块中按预期方式工作的人，而又无需花费大量时间来研究webpack设置。</font><font style="vertical-align: inherit;">（在-1之后编辑）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快速简便的解决方案（es6），如果您仍在挣扎或希望避免使用外部配置/其他webpack插件配置：</font></font></p>

<pre><code>&lt;script src="cdn/jquery.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="cdn/underscore.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="etc.js"&gt;&lt;/script&gt;<font></font>
&lt;script src="bundle.js"&gt;&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在模块内部：</font></font></p>

<pre><code>const { jQuery: $, Underscore: _, etc } = window;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim理查德猿</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了全局访问jquery，则存在几个选项。</font><font style="vertical-align: inherit;">在我最近的webpack项目中，我希望全局访问jquery，因此在插件声明中添加了以下内容：</font></font></p>

<pre><code> plugins: [<font></font>
    new webpack.ProvidePlugin({<font></font>
      $: "jquery",<font></font>
      jQuery: "jquery"<font></font>
    })<font></font>
  ]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着可以通过全局引用$和jQuery从JavaScript源代码中访问jquery。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，您还需要通过npm安装jquery：</font></font></p>

<pre><code>$ npm i jquery --save
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关此方法的</font><a href="https://github.com/arcseldon/react-babel-webpack-starter-app" rel="noreferrer"><font style="vertical-align: inherit;">可行</font></a><font style="vertical-align: inherit;">示例，请随时将我的应用程序分叉到</font></font><a href="https://github.com/arcseldon/react-babel-webpack-starter-app" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">github上</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
