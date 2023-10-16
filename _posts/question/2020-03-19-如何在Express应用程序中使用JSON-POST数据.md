---
layout: question
title:  如何在Express应用程序中使用JSON POST数据
date:   2020-03-19T01:38:34.000Z
description: 我正在将以下JSON字符串发送到我的服务器。(        {        id = 1;        name = foo;    }...
img: 
author: 西门卡卡西
category: question
answer: 2
tags: json Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在将以下JSON字符串发送到我的服务器。</font></font></p>

<pre><code>(<font></font>
        {<font></font>
        id = 1;<font></font>
        name = foo;<font></font>
    },<font></font>
        {<font></font>
        id = 2;<font></font>
        name = bar;<font></font>
    }<font></font>
)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在服务器上，我有这个。</font></font></p>

<pre><code>app.post('/', function(request, response) {<font></font>
<font></font>
    console.log("Got response: " + response.statusCode);<font></font>
<font></font>
    response.on('data', function(chunk) {<font></font>
        queryResponse+=chunk;<font></font>
        console.log('data');<font></font>
    });<font></font>
<font></font>
    response.on('end', function(){<font></font>
        console.log('end');<font></font>
    });<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我发送字符串时，它表明我得到了200的响应，但是其他两种方法从未运行。</font><font style="vertical-align: inherit;">这是为什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2215篇《如何在Express应用程序中使用JSON POST数据》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿路易</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些在里面得到空物体的人 </font></font><code>req.body</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我忘 
 </font></font><code>headers: {"Content-Type": "application/json"}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
了提出要求。</font><font style="vertical-align: inherit;">更改它可以解决问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇凯</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时，您不需要第三方库来解析文本中的JSON。</font><font style="vertical-align: inherit;">有时，您需要使用以下JS命令，首先尝试它：</font></font></p>

<pre><code>        const res_data = JSON.parse(body);
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
