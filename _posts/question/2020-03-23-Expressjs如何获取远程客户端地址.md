---
layout: question
title:  Express.js：如何获取远程客户端地址
date:   2020-03-23T01:18:26.000Z
description: 我不完全了解如何获取远程用户IP地址。假设我有一个简单的请求路由，例如：app.get(/, function (req, res){   va...
img: 
author: 西里乐
category: question
answer: 2
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不完全了解如何获取远程用户IP地址。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我有一个简单的请求路由，例如：</font></font></p>

<pre><code>app.get(/, function (req, res){<font></font>
   var forwardedIpsStr = req.header('x-forwarded-for');<font></font>
   var IP = '';<font></font>
<font></font>
   if (forwardedIpsStr) {<font></font>
      IP = forwardedIps = forwardedIpsStr.split(',')[0];  <font></font>
   }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以上方法是正确的以获得真实用户IP地址还是有更好的方法？</font><font style="vertical-align: inherit;">代理呢？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2578篇《Express.js：如何获取远程客户端地址》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy猿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这个问题已经回答了，但是这就是我的工作方式。</font></font></p>

<pre><code>let ip = req.connection.remoteAddress.split(`:`).pop();
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="https://expressjs.com/en/guide/behind-proxies.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Express在代理之后</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>req.ip</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果配置</font></font><code>trust proxy</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">则考虑了反向代理</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，它比</font></font><code>req.connection.remoteAddress</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从网络层获得并且不了解代理</font><font style="vertical-align: inherit;">更好</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
