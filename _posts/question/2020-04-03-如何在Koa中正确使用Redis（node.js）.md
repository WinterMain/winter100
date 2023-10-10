---
layout: question
title:  如何在Koa中正确使用Redis（node.js）
date:   2020-04-03T03:00:01.000Z
description: 我尝试从redis数据库获取信息，并将其作为响应的正文返回给用户。首先，这是失败的代码：var redis = require("redis"), ...
img: 
author: 泡芙
category: question
answer: 1
tags: JavaScript KoaJS
topic: KoaJS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试从redis数据库获取信息，并将其作为响应的正文返回给用户。</font><font style="vertical-align: inherit;">首先，这是失败的代码：</font></font></p>

<pre><code>var redis = require("redis"),<font></font>
    koa = require("koa");<font></font>
<font></font>
var app = koa(),<font></font>
    port = process.argv[2] || 3000,<font></font>
    client = redis.createClient();<font></font>
<font></font>
app.use(function* (next) {<font></font>
<font></font>
    client.get("test", function (err, res) {<font></font>
        this.body = res;<font></font>
    });<font></font>
<font></font>
    yield next;<font></font>
});<font></font>
<font></font>
app.listen(port);<font></font>
console.log("listen on port " + port)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然是因为yield调用在调用回调之前结束。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后是成功的代码：</font></font></p>

<pre><code>function askRedit (callback) {<font></font>
    client.get("test", callback);<font></font>
}<font></font>
<font></font>
app.use(function* (next) {<font></font>
    this.body = yield askRedit;<font></font>
    yield next;<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我显然误会了第二个为什么起作用。</font></font><code>yield</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">in </font></font><code>yield askRedit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的行为</font><font style="vertical-align: inherit;">与</font><font style="vertical-align: inherit;">in in </font><font style="vertical-align: inherit;">的行为相同</font></font><code>yield next</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚看到一个页面似乎可以回答一些问题：</font><a href="https://github.com/visionmedia/co/blob/master/examples/redis.js"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/visionmedia/co/blob/master/examples/redis.js"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/visionmedia/co/blob/master/examples/redis.js</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，现在我将尝试了解这些错误的收益。这是通过异步调用完成同步操作的一种方法吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是正确的解决方案：</font></font></p>

<pre><code>"Use strict";<font></font>
<font></font>
var redis = require("redis"),<font></font>
    coRedis = require("co-redis"),<font></font>
    koa = require("koa");<font></font>
<font></font>
var app = koa(),<font></font>
    port = process.argv[2] || 3000,<font></font>
    db  = redis.createClient(),<font></font>
    dbCo = coRedis(db);<font></font>
<font></font>
app.use(function* () {<font></font>
    yield dbCo.set("test", 42);<font></font>
    this.body = yield dbCo.get("test");<font></font>
});<font></font>
<font></font>
<font></font>
app.listen(port);<font></font>
console.log("listen on port " + port)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些链接帮助：</font></font></p>

<p><a href="https://github.com/koajs/workshop/tree/master/01-co" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/koajs/workshop/tree/master/01-co</font></font></a></p>

<p><a href="http://www.jongleberry.com/koa.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.jongleberry.com/koa.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和“ co-redis”当然 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多亏我自己！ </font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
