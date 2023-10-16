---
layout: question
title:  Express 4.x中的“ ./bin/www”有什么作用？
date:   2020-03-26T08:53:06.000Z
description: 我刚开始在Node.js应用程序中学习Express 4.0，我发现它生成了./bin/www文件，在该文件上仅写入了应用程序服务器和端口设置，并且在./...
img: 
author: Itachi达蒙
category: question
answer: 3
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚开始在Node.js应用程序中学习Express 4.0，我发现它生成了</font></font><code>./bin/www</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，在该文件上仅写入了应用程序服务器和端口设置，并且在</font></font><code>./app.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">定义了其他所有内容（例如中间件和路由）</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，我不确定这</font></font><code>./bin/www</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是做</font><font style="vertical-align: inherit;">什么的</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我使用Express 3.x，并且始终在同一</font></font><code>./app.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">定义服务器和端口设置以及路由和中间件</font><font style="vertical-align: inherit;">，并使用来启动我的节点应用程序</font></font><code>node app.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">那么使用的意义</font></font><code>./bin/www</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">何在？</font><font style="vertical-align: inherit;">它是否仅将服务器和端口定义与其他定义分开？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，当我使用express-generator创建包时，其中</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含以下定义：</font></font></p>

<pre><code>"scripts": {<font></font>
    "start": "node ./bin/www"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，我想知道是否应该使用</font></font><code>node ./bin/www</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">启动我的应用程序</font></font><code>npm start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我应该运行哪个命令来启动我的应用程序？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且，当我将应用程序部署到heroku时，应该在</font></font><code>Procfile</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">写些什么</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">是否</font></font><code>web: node app.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">足够？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3789篇《Express 4.x中的“ ./bin/www”有什么作用？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是express-generator，则只需查看您的本地文件，</font><font style="vertical-align: inherit;">./bin里面</font></font><code>./bin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就有</font></font><code>www</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font><font style="vertical-align: inherit;">因此，当您运行时</font></font><code>node ./bin/www</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，node.js将在</font></font><code>www</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">执行代码</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">没有什么花哨。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙伽罗梅</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将此放入Procfile </font></font><code>web: node ./bin/www</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
并检查是否与</font></font><code>foreman start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该应用程序应在端口5000上可用</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Windows上，使用以下命令：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置DEBUG = myapp：*＆npm start然后</font><font style="vertical-align: inherit;">在浏览器中</font><font style="vertical-align: inherit;">加载</font></font><a href="http://localhost:3000/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：// localhost：3000 /</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以访问该应用。</font></font></p>
</blockquote></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
