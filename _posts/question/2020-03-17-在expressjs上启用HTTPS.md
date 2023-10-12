---
layout: question
title:  在express.js上启用HTTPS
date:   2020-03-17T10:05:39.000Z
description: 我正在尝试让HTTPS在node.com的express.js上工作，但我无法弄清楚。这是我的app.js代码。var express = req...
img: 
author: 别坑我路易
category: question
answer: 1
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试让HTTPS在node.com的express.js上工作，但我无法弄清楚。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的</font></font><code>app.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码。</font></font></p>

<pre><code>var express = require('express');<font></font>
var fs = require('fs');<font></font>
<font></font>
var privateKey = fs.readFileSync('sslcert/server.key');<font></font>
var certificate = fs.readFileSync('sslcert/server.crt');<font></font>
<font></font>
var credentials = {key: privateKey, cert: certificate};<font></font>
<font></font>
<font></font>
var app = express.createServer(credentials);<font></font>
<font></font>
app.get('/', function(req,res) {<font></font>
    res.send('hello');<font></font>
});<font></font>
<font></font>
app.listen(8000);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我运行它时，它似乎仅响应HTTP请求。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我写了简单的</font></font><code>node.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于</font><font style="vertical-align: inherit;">香草</font><font style="vertical-align: inherit;">的HTTPS应用程序：</font></font></p>

<pre><code>var   fs = require("fs"),<font></font>
      http = require("https");<font></font>
<font></font>
var privateKey = fs.readFileSync('sslcert/server.key').toString();<font></font>
var certificate = fs.readFileSync('sslcert/server.crt').toString();<font></font>
<font></font>
var credentials = {key: privateKey, cert: certificate};<font></font>
<font></font>
var server = http.createServer(credentials,function (req, res) {<font></font>
  res.writeHead(200, {'Content-Type': 'text/plain'});<font></font>
  res.end('Hello World\n');<font></font>
});<font></font>
<font></font>
server.listen(8000);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我运行此应用程序时，它</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">响应HTTPS请求。</font><font style="vertical-align: inherit;">请注意，我认为fs结果上的toString（）并不重要，因为我使用了两者的组合，但仍然没有es bueno。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑添加：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于生产系统，最好使用Nginx或HAProxy将请求代理到您的nodejs应用。</font><font style="vertical-align: inherit;">您可以设置nginx来处理ssl请求，而只需对您的节点app.js说http。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑添加（4/6/2015）</font></font></p>

<p>For systems on using AWS, you are better off using EC2 Elastic Load Balancers to handle SSL Termination, and allow regular HTTP traffic to your EC2 web servers. For further security, setup your security group such that only the ELB is allowed to send HTTP traffic to the EC2 instances, which will prevent external unencrypted HTTP traffic from hitting your machines.</p>

<hr></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1961篇《在express.js上启用HTTPS》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我</font><font style="vertical-align: inherit;">的</font><strong><em><font style="vertical-align: inherit;">Express 4.0的</font></em></strong></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作代码</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><strong><em><font style="vertical-align: inherit;"></font></em></strong><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">express 4.0与3.0和其他版本有很大的不同。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4.0中有/ bin / www文件，您将在此处添加https。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ npm start”是启动Express 4.0服务器的标准方式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">readFileSync（）函数应使用</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">__dirname</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取当前目录</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而require（）</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用./</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用当前目录。</font></font></p>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，将private.key和public.cert文件放在/ bin文件夹下，它与WWW文件位于同一文件夹</font></font></em></strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></em></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
