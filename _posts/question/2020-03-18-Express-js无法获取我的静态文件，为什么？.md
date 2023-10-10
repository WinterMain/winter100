---
layout: question
title:  Express-js无法获取我的静态文件，为什么？
date:   2020-03-18T10:17:42.000Z
description: 我将代码简化为我可以做的最简单的express-js应用程序：var express = require("express"),    app = ...
img: 
author: Itachi十三Stafan
category: question
answer: 2
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将代码简化为我可以做的最简单的express-js应用程序：</font></font></p>

<pre><code>var express = require("express"),<font></font>
    app = express.createServer();<font></font>
app.use(express.static(__dirname + '/styles'));<font></font>
app.listen(3001);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的目录如下所示：</font></font></p>

<pre><code>static_file.js<font></font>
/styles<font></font>
  default.css<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当我访问时</font></font><code>http://localhost:3001/styles/default.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，出现以下错误：</font></font></p>

<pre><code>Cannot GET / styles /<font></font>
default.css<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用</font></font><code>express 2.3.3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>node 0.4.7</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我究竟做错了什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2140篇《Express-js无法获取我的静态文件，为什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam梅</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除上述内容外，请确保静态文件路径以/（例如/ assets / css）开头，以便在主目录（/ main）上方的任何目录中提供静态文件</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam凯小卤蛋</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在应用程序中使用Bootstrap CSS，JS和Fonts。</font><font style="vertical-align: inherit;">我在</font></font><code>asset</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序的根目录中</font><font style="vertical-align: inherit;">创建了一个文件夹</font><font style="vertical-align: inherit;">，并将所有这些文件夹放入其中。</font><font style="vertical-align: inherit;">然后在服务器文件中添加以下行：</font></font></p>

<pre><code>app.use("/asset",express.static("asset"));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这行代码使我能够</font></font><code>asset</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><code>/asset</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路径前缀（如：）中</font><font style="vertical-align: inherit;">加载</font><font style="vertical-align: inherit;">目录中</font><font style="vertical-align: inherit;">的文件</font></font><code>http://localhost:3000/asset/css/bootstrap.min.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，在视图中，我可以像下面这样简单地包括CSS和JS：</font></font></p>

<pre><code>&lt;link href="/asset/css/bootstrap.min.css" rel="stylesheet"&gt;
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
