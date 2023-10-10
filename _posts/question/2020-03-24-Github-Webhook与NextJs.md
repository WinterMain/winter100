---
layout: question
title:  Github Webhook与NextJs
date:   2020-03-24T10:28:44.000Z
description: 我正在研究NextJS项目，我想使用github webhook部署具有部署说明的脚本。我已经在github中设置了一个推送webhook我试图在...
img: 
author: 猿蛋蛋凯
category: question
answer: 1
tags: 表达 React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在研究NextJS项目，我想使用github webhook部署具有部署说明的脚本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经在github中设置了一个推送webhook</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图在server.ts文件中添加以下代码，现在使用ngrok对其进行测试</font></font></p>

<pre><code>// testing<font></font>
server.post("/webhooks/github", function(req, res) {<font></font>
  var sender = req.body.sender;<font></font>
  var branch = req.body.ref;<font></font>
<font></font>
  if (branch.indexOf("master") &gt; -1 &amp;&amp; sender.login === githubUsername) {<font></font>
    deploy(res);<font></font>
  }<font></font>
});<font></font>
<font></font>
function deploy(res: any) {<font></font>
  childProcess.exec("sh deploy.sh", function(err, stdout, stderr) {<font></font>
    if (err) {<font></font>
      console.error(err, stderr);<font></font>
      return res.send(500);<font></font>
    }<font></font>
    console.log(stdout);<font></font>
    res.send(200);<font></font>
  });<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个文件是我的nextJS应用程序的节点文件</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我的ngrok日志中显示502</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道我应该在我的NextJS应用程序中的哪个位置将此webhook终结点使之正常工作</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3655篇《Github Webhook与NextJs》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以使它起作用的唯一方法是在同一服务器上创建另一个应用程序（我使用express），然后在该端点上将其用作github webhook，然后从那里运行deploy脚本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的解决方案，希望对您有所帮助。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
