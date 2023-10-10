---
layout: question
title:  Webpack 4迁移CommonsChunkPlugin
date:   2020-03-24T09:23:39.000Z
description: 我需要将以下代码从webpack 3迁移到4的帮助。new webpack.optimize.CommonsChunkPlugin({    min...
img: 
author: 乐
category: question
answer: 0
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要将以下代码从webpack 3迁移到4的帮助。</font></font></p>

<pre><code>new webpack.optimize.CommonsChunkPlugin({<font></font>
    minChunks: module =&gt; module.context &amp;&amp; module.context.indexOf("node_modules") !== -1,<font></font>
    name: "vendor",<font></font>
    chunks: ["main"]<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有两个条目文件，并且只希望将第一个文件的依赖项包含在供应商数据块中。</font><font style="vertical-align: inherit;">第二个条目的依赖项应全部保留在其自己的包中。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3553篇《Webpack 4迁移CommonsChunkPlugin》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
