---
layout: question
title:  如何使用Express框架在Node JS中设置cookie？
date:   2020-04-03T02:38:58.000Z
description: 在我的应用程序中，我需要使用express框架设置cookie。我尝试了以下代码，但未设置cookie。谁能帮我做到这一点？var express...
img: 
author: 古一Green
category: question
answer: 0
tags: Node.js的 Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的应用程序中，我需要使用express框架设置cookie。我尝试了以下代码，但未设置cookie。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谁能帮我做到这一点？</font></font></p>

<pre><code>var express = require('express'), http = require('http');<font></font>
var app = express();<font></font>
app.configure(function(){<font></font>
      app.use(express.cookieParser());<font></font>
      app.use(express.static(__dirname + '/public'));<font></font>
<font></font>
      app.use(function (req, res) {<font></font>
           var randomNumber=Math.random().toString();<font></font>
           randomNumber=randomNumber.substring(2,randomNumber.length);<font></font>
           res.cookie('cokkieName',randomNumber, { maxAge: 900000, httpOnly: true })<font></font>
<font></font>
           console.log('cookie have created successfully');<font></font>
      });<font></font>
<font></font>
});<font></font>
<font></font>
var server = http.createServer(app);<font></font>
var io = require('socket.io').listen(server);<font></font>
server.listen(5555);<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
