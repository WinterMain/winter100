---
layout: question
title:  使用NextJS + Express在localhost上进行HTTPS
date:   2020-03-24T06:31:31.000Z
description: 系统信息快递：4.16.4NextJS：8.0.3反应：16.8.4ReactDOM：16.8.4目标在本地主机上通过HTTPS使用...
img: 
author: 西门
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">系统信息</font></font></strong></p>

<ul>
<li><a href="https://github.com/expressjs/express" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快递</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：4.16.4</font></font></li>
<li><a href="https://github.com/zeit/next.js/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NextJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：8.0.3</font></font></li>
<li><a href="https://github.com/facebook/react" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：16.8.4</font></font></li>
<li><a href="https://github.com/facebook/react/tree/master/packages/react-dom" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ReactDOM</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：16.8.4</font></font></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目标</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在本地主机上通过HTTPS使用SSL服务Web应用程序</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经做了什么</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><a href="https://github.com/segmentio/create-next-app" rel="nofollow noreferrer"><font style="vertical-align: inherit;">Create Next App</font></a><font style="vertical-align: inherit;">创建基本的NextJS应用</font></font><a href="https://github.com/segmentio/create-next-app" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">程序</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用OpenSSL生成证书和密钥，并将其移至项目目录</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加了Express依赖</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将应用程序配置为在内部使用Express </font></font><code>server.js</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改了脚本以使用</font></font><code>server.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内部</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本。</font></font></li>
</ol>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">server.js</font></font></strong></p>

<pre><code>const express = require('express');<font></font>
const next = require('next');<font></font>
const dev = process.env.NODE_ENV !== 'production';<font></font>
const app = next({ dev });<font></font>
const handle = app.getRequestHandler();<font></font>
const port = 3000;<font></font>
<font></font>
const https = require('https');<font></font>
const fs = require('fs');<font></font>
const httpsOptions = {<font></font>
  key: fs.readFileSync('./certificates/key.pem'),<font></font>
  cert: fs.readFileSync('./certificates/cert.pem')<font></font>
};<font></font>
<font></font>
app<font></font>
  .prepare()<font></font>
  .then(() =&gt; {<font></font>
    const server = express();<font></font>
<font></font>
    server.get('*', (req, res) =&gt; {<font></font>
      return handle(req, res);<font></font>
    });<font></font>
<font></font>
    server.listen(port, err =&gt; {<font></font>
      if (err) throw err;<font></font>
      console.log('&gt; Ready on http://localhost: ' + port);<font></font>
    });<font></font>
  })<font></font>
  .catch(ex =&gt; {<font></font>
    console.error(ex.stack);<font></font>
    process.exit(1);<font></font>
  });<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">额外的信息</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用初始化时，该应用当前可以运行</font></font><code>yarn dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我尝试使用</font></font><a href="https://stackoverflow.com/a/42298344/3256783"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过https服务该应用程序，</font><font style="vertical-align: inherit;">但无法弄清楚如何使用NextJS将其应用于当前设置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我花了很多时间研究网络上如何应用此解决方案，但还没有找到实现此工作的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何帮助是极大的赞赏。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3378篇《使用NextJS + Express在localhost上进行HTTPS》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
