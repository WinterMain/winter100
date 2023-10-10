---
layout: question
title:  如何在Heroku上的两个不同端口上同时部署Next.js和Express服务器
date:   2020-03-24T10:32:46.000Z
description: 这是我当前面临的部署挑战。我已经在Google上进行了广泛的搜索，尝试了一些没有运气的尝试。我有一个使用express作为服务器在端口5000上运行的...
img: 
author: 小卤蛋小宇宙
category: question
answer: 1
tags: 表达 React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我当前面临的部署挑战。</font><font style="vertical-align: inherit;">我已经在Google上进行了广泛的搜索，尝试了一些没有运气的尝试。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个使用express作为服务器在端口5000上运行的应用程序A。然后我有一个将用户下一步作为服务器在端口3000上运行的服务器的应用程序B。我编写了一些代码，将这两个应用程序集成到一个应用程序中，部署到Heroku。</font><font style="vertical-align: inherit;">我一直在部署失败。</font><font style="vertical-align: inherit;">这是我的package.json：</font></font></p>

<pre><code>"scripts": {<font></font>
"start": "concurrently \" npm run dev \" \" next \" ",<font></font>
....<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3665篇《如何在Heroku上的两个不同端口上同时部署Next.js和Express服务器》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要这样 </font><font style="vertical-align: inherit;">在编码角度上以及托管/基础结构角度上，最好使前端和后端（API）完全分开。</font><font style="vertical-align: inherit;">阅读“整体与微服务”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您可以创建2个Heroku应用程序，一个用于Next，另一个用于Express。</font><font style="vertical-align: inherit;">您将必须通过设置正确的URL链接彼此的应用程序，并且可能还需要在API上配置CORS。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
