---
layout: question
title:  Express中的NODE_ENV是什么？
date:   2020-03-24T02:59:19.000Z
description: var app = express();app.set('views',settings.c.WEB_PATH + '/public/templates...
img: 
author: 猪猪阳光
category: question
answer: 1
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><pre><code>var app = express();<font></font>
app.set('views',settings.c.WEB_PATH + '/public/templates');<font></font>
app.set('view engine','ejs');<font></font>
app.configure(function(){<font></font>
    app.use(express.favicon());<font></font>
    app.use(express.static(settings.c.WEB_PATH + '/public'));<font></font>
    app.use(express.bodyParser());<font></font>
    app.use(express.cookieParser());<font></font>
    app.use(express.methodOverride());<font></font>
    app.use(express.session({<font></font>
            cookie:{ domain:"."+settings.c.SITE_DOMAIN, maxAge:1440009999},<font></font>
            secret:'hamster',<font></font>
            store: r_store,<font></font>
            }));<font></font>
    app.use(useragent.express());<font></font>
    app.use(flash());<font></font>
    app.use(passport.initialize());<font></font>
    app.use(passport.session());<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的应用程序。</font><font style="vertical-align: inherit;">我目前正在生产中运行它。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，有人告诉我有关</font></font><code>NODE_ENV</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我是否必须将其添加到此代码中？</font><font style="vertical-align: inherit;">如何添加？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3262篇《Express中的NODE_ENV是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为原始问题包括Express如何使用此环境变量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Express使用NODE_ENV更改自己的默认行为。</font><font style="vertical-align: inherit;">例如，在开发模式下，默认错误处理程序会将堆栈跟踪发送回浏览器。</font><font style="vertical-align: inherit;">在生产模式下，响应只是</font></font><code>Internal Server Error</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以避免将实现细节泄漏给世界。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
