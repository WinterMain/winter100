---
layout: question
title:  我可以在自定义路径（例如/ static /）上使用koa-static服务资产吗？
date:   2020-03-30T09:20:36.000Z
description: https //github.com/koajs/static上的文档以及我尝试koa-static的亲身经历使我相信您只能从应用程序的根URL提供文件。...
img: 
author: DavaidTony宝儿
category: question
answer: 1
tags: node.js KoaJS
topic: KoaJS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><a href="https://github.com/koajs/static" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/koajs/static上</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的文档</font><font style="vertical-align: inherit;">以及我尝试koa-static的亲身经历使我相信您</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只能</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从应用程序的根URL提供文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>app.use(serve('./some/dir/'));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">鉴于上述用法</font></font><code>serve</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，访问文件的URL </font></font><code>./some/dir/something.txt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将为</font></font><code>localhost:3000/something.txt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">似乎没有一种方法可以配置我的应用程序，以</font></font><code>localhost:3000/static/something.txt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font><font style="vertical-align: inherit;">使用同一文件（以及同一目录中的所有其他文件）</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是Node和Koa的新手，所以我才刚刚开始涉足这一领域，而我可能会错过一些显而易见的东西。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试使用koa-route实现此目的：</font></font></h3>

<pre><code>app.use(route.get('/static/*'), serve(__dirname + '/some/dir'));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但根据要求，</font></font><code>/static/something.txt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了以下问题：</font></font></p>

<pre><code>  TypeError: Cannot read property 'apply' of undefined<font></font>
      at Object.&lt;anonymous&gt; (/Users/me/example/src/node_modules/koa-route/index.js:34:18)<font></font>
      at GeneratorFunctionPrototype.next (native)<font></font>
      at onFulfilled (/Users/me/example/src/node_modules/koa/node_modules/co/index.js:64:19)<font></font>
      at /Users/me/example/src/node_modules/koa/node_modules/co/index.js:53:5<font></font>
      at Object.co (/Users/me/example/src/node_modules/koa/node_modules/co/index.js:49:10)<font></font>
      at Object.toPromise (/Users/me/example/src/node_modules/koa/node_modules/co/index.js:117:63)<font></font>
      at next (/Users/me/example/src/node_modules/koa/node_modules/co/index.js:98:29)<font></font>
      at onFulfilled (/Users/me/example/src/node_modules/koa/node_modules/co/index.js:68:7)<font></font>
      at /Users/me/example/src/node_modules/koa/node_modules/co/index.js:53:5<font></font>
      at Object.co (/Users/me/example/src/node_modules/koa/node_modules/co/index.js:49:10)<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://www.npmjs.com/package/koa-static-folder" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">koa-static-folder</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果您仍然感兴趣。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
