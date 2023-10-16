---
layout: question
title:  使用Node.js HTTP Server获取并设置单个Cookie
date:   2020-03-24T11:05:16.000Z
description: 我希望能够设置一个cookie，并在对nodejs服务器实例的每个请求中读取单个cookie。是否可以用几行代码来完成，而无需引入第三方库？var h...
img: 
author: 神无猪猪
category: question
answer: 2
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望能够设置一个cookie，并在对nodejs服务器实例的每个请求中读取单个cookie。</font><font style="vertical-align: inherit;">是否可以用几行代码来完成，而无需引入第三方库？</font></font></p>

<pre><code>var http = require('http');<font></font>
<font></font>
http.createServer(function (request, response) {<font></font>
  response.writeHead(200, {'Content-Type': 'text/plain'});<font></font>
  response.end('Hello World\n');<font></font>
}).listen(8124);<font></font>
<font></font>
console.log('Server running at http://127.0.0.1:8124/');<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是尝试直接从nodejs.org中获取上述代码，然后在其中工作一个cookie。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3704篇《使用Node.js HTTP Server获取并设置单个Cookie》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚卡卡西L</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cookies </font></font><a href="http://en.wikipedia.org/wiki/HTTP_cookie" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过HTTP标头</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传输</font><a href="http://en.wikipedia.org/wiki/HTTP_cookie" rel="noreferrer"><font style="vertical-align: inherit;">，</font></a></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
您只需解析请求标头并放入响应标头。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用“ cookies” npm模块，该模块具有一组全面的功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档和示例位于：</font><a href="https://github.com/jed/cookies"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><br>
<a href="https://github.com/jed/cookies"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/jed/cookies</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
