---
layout: question
title:  如何使用NodeJS Connect从请求中提取请求HTTP标头
date:   2020-03-20T02:35:16.000Z
description: 我想获取使用Node JS的连接库包进行的请求的“主机”标头。我的代码如下：var app = connect()  .use(connect.lo...
img: 
author: 逆天AGreen
category: question
answer: 3
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想获取使用Node JS的连接库包进行的请求的“主机”标头。</font><font style="vertical-align: inherit;">我的代码如下：</font></font></p>

<pre><code>var app = connect()<font></font>
  .use(connect.logger('dev'))<font></font>
  .use(connect.static('public'))<font></font>
  .use(function(req, res){<font></font>
<font></font>
    var host = req.???<font></font>
<font></font>
  })<font></font>
 .listen(3000);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">connect的文档在这里，但是</font></font><code>req</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上面的代码中</font><font style="vertical-align: inherit;">我看不到任何详细说明</font><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">API的内容</font><font style="vertical-align: inherit;">。</font></font><a href="http://www.senchalabs.org/connect/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.senchalabs.org/connect/</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：注意，成功的答案必须指向文档（我需要此文件来验证哪个版本提供了我要查找的API）。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2450篇《如何使用NodeJS Connect从请求中提取请求HTTP标头》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Mandy</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要查看HTTP请求标头列表，可以使用：</font></font></p>

<pre><code>console.log(JSON.stringify(req.headers));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以JSON格式返回列表。</font></font></p>

<pre><code>{<font></font>
"host":"localhost:8081",<font></font>
"connection":"keep-alive",<font></font>
"cache-control":"max-age=0",<font></font>
"accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",<font></font>
"upgrade-insecure-requests":"1",<font></font>
"user-agent":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.107 Safari/537.36",<font></font>
"accept-encoding":"gzip, deflate, sdch",<font></font>
"accept-language":"en-US,en;q=0.8,et;q=0.6"<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan西门</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查</font></font><code>console.log(req)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或的</font><font style="vertical-align: inherit;">输出</font></font><code>console.log(req.headers);</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearMandy</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用Express 4.x，则可以使用</font><a href="http://expressjs.com/en/api.html#req.get" rel="noreferrer"><font style="vertical-align: inherit;">Express 4.x API参考中</font></a></font><code>req.get(headerName)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所述</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">方法。</font></font><a href="http://expressjs.com/en/api.html#req.get" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
