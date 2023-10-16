---
layout: question
title:  Webpack sass css文件在哪里
date:   2020-03-18T10:26:04.000Z
description: 我正在将Web Pack与Sass loader一起使用，如下所示：module.exports = {  module  {    loader...
img: 
author: 神无逆天
category: question
answer: 2
tags: JavaScript CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在将Web Pack与Sass loader一起使用，如下所示：</font></font></p>

<pre><code>module.exports = {<font></font>
  module: {<font></font>
    loaders: [<font></font>
      {<font></font>
        test: /\.scss$/,<font></font>
        loader: "style!css!sass"<font></font>
      }<font></font>
    ]<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我看到样式适用于样式标签，生成css文件在哪里？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2147篇《Webpack sass css文件在哪里》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无西里</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，样式加载器将已编译的CSS内联到您的包中，该包与输出文件（例如）一起添加到页面的开头</font></font><code>bundle.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">使用</font></font><a href="https://github.com/webpack/extract-text-webpack-plugin" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">extract-text-webpack-plugin</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以从捆绑软件中删除已编译的CSS，并将其导出到单独的文件中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先-将加载程序包装在插件中：</font></font></p>

<pre><code> loaders: [{<font></font>
  test: /\.scss$/,<font></font>
  loader: ExtractTextPlugin.extract(<font></font>
    "style",<font></font>
    "css!sass")<font></font>
 }]<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后告诉插件如何调用它生成的文件：</font></font></p>

<pre><code>plugins: [<font></font>
    new ExtractTextPlugin("app.css")<font></font>
 ]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常将此文件包含在HTML中。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猿阳光</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在使用Webpack时需要单独的CSS文件，则需要使用</font></font><a href="https://github.com/webpack/extract-text-webpack-plugin" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">extract-text-webpack-plugin</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
