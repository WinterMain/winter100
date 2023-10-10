---
layout: question
title:  Express res.sendfile抛出禁止错误
date:   2020-03-24T11:00:56.000Z
description: 我有以下代码：res.sendfile( '../../temp/index.html' )但是，它引发此错误：Error  Forbidd...
img: 
author: 十三西门
category: question
answer: 0
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有以下代码：</font></font></p>

<pre><code>res.sendfile( '../../temp/index.html' )
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，它引发此错误：</font></font></p>

<pre><code>Error: Forbidden<font></font>
at SendStream.error (/Users/Oliver/Development/Personal/Reader/node_modules/express/node_modules/send/lib/send.js:145:16)<font></font>
at SendStream.pipe (/Users/Oliver/Development/Personal/Reader/node_modules/express/node_modules/send/lib/send.js:307:39)<font></font>
at ServerResponse.res.sendfile (/Users/Oliver/Development/Personal/Reader/node_modules/express/lib/response.js:339:8)<font></font>
at exports.boot (/Users/Oliver/Development/Personal/Reader/server/config/routes.js:18:9)<font></font>
at callbacks (/Users/Oliver/Development/Personal/Reader/node_modules/express/lib/router/index.js:161:37)<font></font>
at param (/Users/Oliver/Development/Personal/Reader/node_modules/express/lib/router/index.js:135:11)<font></font>
at pass (/Users/Oliver/Development/Personal/Reader/node_modules/express/lib/router/index.js:142:5)<font></font>
at Router._dispatch (/Users/Oliver/Development/Personal/Reader/node_modules/express/lib/router/index.js:170:5)<font></font>
at Object.router (/Users/Oliver/Development/Personal/Reader/node_modules/express/lib/router/index.js:33:10)<font></font>
at next (/Users/Oliver/Development/Personal/Reader/node_modules/express/node_modules/connect/lib/proto.js:199:15)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谁能告诉我为什么会这样吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3700篇《Express res.sendfile抛出禁止错误》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
