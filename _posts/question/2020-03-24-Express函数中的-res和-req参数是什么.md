---
layout: question
title:  Express函数中的“ res”和“ req”参数是什么？
date:   2020-03-24T02:58:18.000Z
description: 在以下Express函数中：app.get('/user/ id', function(req, res){    res.send('user' ...
img: 
author: 阳光乐
category: question
answer: 1
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在以下Express函数中：</font></font></p>

<pre><code>app.get('/user/:id', function(req, res){<font></font>
    res.send('user' + req.params.id);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么是</font></font><code>req</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>res</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">它们代表什么，它们是什么意思，它们是做什么的？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3259篇《Express函数中的“ res”和“ req”参数是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请求和回应。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要了解该功能</font></font><code>req</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请尝试一下</font></font><code>console.log(req);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
