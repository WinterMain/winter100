---
layout: question
title:  将webpack与现有的PHP和JS项目一起使用
date:   2020-03-24T01:58:02.000Z
description: 我有一个带有jquery和bootstrap的现有PHP项目，没有使用任何前端框架。我正在尝试使用webpack模块捆绑器来为我的项目资源创建单个入口...
img: 
author: 卡卡西Near
category: question
answer: 1
tags: PHP Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个带有jquery和bootstrap的现有PHP项目，没有使用任何前端框架。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用webpack模块捆绑器来为我的项目资源创建单个入口点，使用节点js包管理器管理js依赖项，以缩小js css的方式运行任务，图像调整大小...等。</font><font style="vertical-align: inherit;">并缩短了加载单个页面所需的浏览器加载时间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了webpack教程，必须安装它并安装它的dev-server，但是问题是我无法理解如何转换项目中所有当前的js脚本和CSS链接（我在这里有很多jQuery和CSS库（用于在项目中提供多种功能）以使用Webpack。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否必须以适合webpack的方式重写我的所有JS和CSS文件？</font><font style="vertical-align: inherit;">如何成功迁移？</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，我无法在webpack开发服务器上运行当前的php应用程序，是不是要首先在其中运行？</font><font style="vertical-align: inherit;">同时，它仅列出项目的目录。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建了一个测试</font></font><code>index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，并使用了以下webpack配置：</font></font></p>

<pre><code>var path = require('path');<font></font>
var webpack = require('webpack');<font></font>
<font></font>
module.exports =<font></font>
{<font></font>
    entry: [<font></font>
        './public/js/index.js',<font></font>
        'webpack/hot/dev-server',<font></font>
        'webpack-dev-server/client?http://localhost:8080'<font></font>
    ],<font></font>
    plugins: [<font></font>
      new webpack.HotModuleReplacementPlugin()<font></font>
    ],<font></font>
    output: {<font></font>
        path: path.join(__dirname, "public/dist/js"),<font></font>
        publicPath : "http://localhost:8080/my_proj/public/dist/js",<font></font>
        filename: "bundle.js"<font></font>
    }<font></font>
<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将</font></font><code>bundle.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到脚本负载中只是为了进行测试，如下所示，希望该应用程序可以在webpack开发服务器上运行：</font></font></p>

<pre><code>&lt;script type="text/javascript" src="public/dist/js/bundle.js"&gt;&lt;/script&gt;<font></font>
&lt;script type="text/javascript" src="public/js/jquery.min.js"&gt;&lt;/script&gt;<font></font>
&lt;script type="text/javascript" src="public/js/jquery.migrate.js"&gt;&lt;/script&gt;<font></font>
&lt;script type="text/javascript" src="public/js/jquery.bxslider.min.js"&gt;&lt;/script&gt;<font></font>
&lt;script type="text/javascript" src="public/js/jquery.appear.js"&gt;&lt;/script&gt;<font></font>
&lt;script type="text/javascript" src="public/js/jquery.countTo.js"&gt;&lt;/script&gt;<font></font>
&lt;script type="text/javascript" src="public/js/bootstrap.js"&gt;&lt;/script&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请帮助我理解这里的概念，以及如何成功进行此迁移？</font></font></strong></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3195篇《将webpack与现有的PHP和JS项目一起使用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于现有的vue模板和@Loilo的回答，我制作了一个可以使用安装的vue模板</font></font><code>vue-cli</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该模板可为您提供一个可以扩展或集成到现有环境中的vue应用程序。</font></font></p>

<pre><code>npm install -g vue-cli<font></font>
vue init delcon/webpack-simple my-project<font></font>
cd my-project<font></font>
npm install<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">devwatch：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该模板还有一个额外的run devwatch选项，该选项监视文件更改，而不是使用webpack-dev-server。</font><font style="vertical-align: inherit;">这使得它可用于任何现有的Web服务器环境。</font></font></p>

<pre><code>npm run devwatch
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发人员：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用默认的WebPack-dev的服务器上运行它，删除</font></font><code>&lt;script src="http://localhost:35729/livereload.js"&gt;&lt;/script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>npm run dev
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建立：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建立您的生产项目：</font></font></p>

<pre><code>npm run build
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
