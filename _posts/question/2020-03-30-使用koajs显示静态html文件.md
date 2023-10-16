---
layout: question
title:  使用koa.js显示静态html文件
date:   2020-03-30T09:18:21.000Z
description: 我想做的是在调用索引路由（即localhost：3000）时提供index.html文件。我使用koa-router进行路由，所以我的路由如下所示：...
img: 
author: Tom凯
category: question
answer: 0
tags: JavaScript KoaJS
topic: KoaJS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想做的是在调用索引路由（即localhost：3000）时提供index.html文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用koa-router进行路由，所以我的路由如下所示：</font></font></p>

<pre><code>app.all("/", function * (next){<font></font>
    //Send the file here<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图像这样使用koa-static：</font></font></p>

<pre><code>var serve = require('koa-static');<font></font>
 app.all("/", function * (next){<font></font>
        serve("index.html");<font></font>
    });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这没有用。</font><font style="vertical-align: inherit;">然后，我尝试使用共同视图（现在将html文件放在公共目录中）：</font></font></p>

<pre><code>var views = require("co-views");<font></font>
var render = views("public");<font></font>
app.all("/", function * (next){<font></font>
    this.status = 200;<font></font>
    this.body = yield render("index.html");<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这没有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谁能告诉我该怎么办？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3839篇《使用koa.js显示静态html文件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
