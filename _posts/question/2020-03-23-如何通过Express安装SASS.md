---
layout: question
title:  如何通过Express安装SASS？
date:   2020-03-23T07:41:09.000Z
description: 我正在使用Express和socket.io创建一个node.js应用程序。我想使用SASS，但我看到有一个npm软件包，我不了解的是如何在SASS np...
img: 
author: 斯丁
category: question
answer: 1
tags: node.js CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Express和socket.io创建一个node.js应用程序。</font><font style="vertical-align: inherit;">我想使用SASS，但我看到有一个npm软件包，我不了解的是如何在SASS npm和应用程序之间链接并使其解析SASS？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：我使用SASS中间件</font></font><a href="https://github.com/andrew/node-sass"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/andrew/node-sass</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装了它，并通过以下方式包括了它：</font></font></p>

<pre><code>  sass = require('node-sass');<font></font>
<font></font>
<font></font>
app.configure(function(){<font></font>
  app.set('port', process.env.PORT || 3000);<font></font>
<font></font>
  /* other stuff */<font></font>
<font></font>
  sass.middleware({<font></font>
    src: __dirname + '/public/stylesheets/sass',<font></font>
    dest: __dirname + '/public/stylesheets',<font></font>
    debug: true<font></font>
  });<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这仍然行不通</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2921篇《如何通过Express安装SASS？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是express-generator，请尝试 </font></font></p>

<pre><code>express --view=ejs --css=sass
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
