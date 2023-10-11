---
layout: question
title:  使用webpack的多个HTML文件
date:   2020-03-23T07:48:53.000Z
description: 我正在尝试在某个项目中做某事，但不确定是否可行，我做错了什么或误解了某件事。我们正在使用webpack，其思想是提供多个HTML文件。本地主机：818...
img: 
author: Tom西里
category: question
answer: 0
tags: webpack Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在某个项目中做某事，但不确定是否可行，我做错了什么或误解了某件事。</font><font style="vertical-align: inherit;">我们正在使用webpack，其思想是提供多个HTML文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地主机：8181-&gt;提供index.html </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
本地主机：8181 / example.html-&gt;提供example.html</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试通过遵循</font></font><a href="https://webpack.github.io/docs/multiple-entry-points.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置多个入口点来做到这一点</font><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹结构为：</font></font></p>

<pre><code>/<font></font>
|- package.json<font></font>
|- webpack.config.js<font></font>
  /src<font></font>
   |- index.html<font></font>
   |- example.html<font></font>
   | /js<font></font>
      |- main.js<font></font>
      |- example.js<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack.config.js：</font></font></p>

<pre><code>...<font></font>
entry: {<font></font>
    main: './js/main.js',<font></font>
    exampleEntry: './js/example.js'<font></font>
},<font></font>
output: {<font></font>
    path: path.resolve(__dirname, 'build', 'target'),<font></font>
    publicPath: '/',<font></font>
    filename: '[name].bundle.js',<font></font>
    chunkFilename: '[id].bundle_[chunkhash].js',<font></font>
    sourceMapFilename: '[file].map'<font></font>
},<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">index.html</font></font></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html<font></font>
&lt;head&gt;<font></font>
    ...<font></font>
    &lt;link type="text/css" href="/style/default.css"&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
    &lt;div id="container"&gt;&lt;/div&gt;<font></font>
    &lt;script src="/main.bundle.js"&gt;&lt;/script&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">example.html：</font></font></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html<font></font>
&lt;head&gt;<font></font>
    ...<font></font>
    &lt;link type="text/css" href="/style/default.css"&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
    ...<font></font>
    &lt;script src="/example.bundle.js"&gt;&lt;/script&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人知道我在做什么错吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2941篇《使用webpack的多个HTML文件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
