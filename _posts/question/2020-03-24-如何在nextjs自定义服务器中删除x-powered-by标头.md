---
layout: question
title:  如何在nextjs自定义服务器中删除x-powered-by标头
date:   2020-03-24T06:32:46.000Z
description: 我正在使用Next创建一个Web应用程序，并且想x-powered-by从响应标头中删除，我试图创建自定义服务器并使用expressjs，.disable...
img: 
author: 西里神奇
category: question
answer: 0
tags: node.js React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Next创建一个Web应用程序，并且想</font></font><code>x-powered-by</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从响应标头中</font><font style="vertical-align: inherit;">删除</font><font style="vertical-align: inherit;">，我试图创建自定义服务器并使用expressjs，</font></font><code>.disable('x-powered-by')</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但没有成功。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我所做的：</font></font></p>

<pre><code>const express = require('express')<font></font>
const next = require('next')<font></font>
<font></font>
const port = parseInt(process.env.PORT, 10) || 3001<font></font>
const dev = process.env.NODE_ENV !== 'production'<font></font>
const app = next({ dev })<font></font>
const handle = app.getRequestHandler()<font></font>
<font></font>
<font></font>
app.prepare()<font></font>
.then(() =&gt; {<font></font>
  const server = express()<font></font>
  .use(handle)<font></font>
<font></font>
<font></font>
  server.disable('x-powered-by'); // ???<font></font>
<font></font>
  server.listen(port, (err) =&gt; {<font></font>
    if (err) throw err<font></font>
    console.log(`&gt; Ready on http://localhost:${port}`)<font></font>
  })<font></font>
})<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3381篇《如何在nextjs自定义服务器中删除x-powered-by标头》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
