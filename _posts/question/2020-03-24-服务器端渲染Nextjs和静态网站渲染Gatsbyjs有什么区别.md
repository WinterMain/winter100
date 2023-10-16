---
layout: question
title:  服务器端渲染（Next.js）和静态网站渲染（Gatsby.js）有什么区别？
date:   2020-03-24T09:30:08.000Z
description: 我希望创建一个不依赖客户端JavaScript的网站，但是，我仍想使用SPA功能（如客户端路由等），因此我希望使用的框架不会在客户端上呈现-侧。这两个似乎...
img: 
author: Tom阿飞
category: question
answer: 1
tags: node.js React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望创建一个不依赖客户端JavaScript的网站，但是，我仍想使用SPA功能（如客户端路由等），因此我希望使用的框架不会在客户端上呈现-侧。</font><font style="vertical-align: inherit;">这两个似乎是此类事情的最佳选择，但是，我不确定这两种不同类型的服务器处理之间的区别。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3564篇《服务器端渲染（Next.js）和静态网站渲染（Gatsby.js）有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyDavaid</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器端渲染是从客户端/浏览器向服务器发出请求的地方，然后在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行时</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成HTML，</font><font style="vertical-align: inherit;">并将其发送回浏览器进行渲染。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">静态站点渲染非常相似，但是解析是在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构建时执行的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，在发出请求时，HTML会静态存储，并且可以直接发送回客户端。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们都有优点和缺点：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管由于不需要服务器端处理，所以静态站点在运行时会更快，但这确实意味着对数据的任何更改都需要在应用程序服务器端进行完全重建。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，通过服务器端方法，将所有缓存放在一边，即可实时处理数据并直接发送给客户端。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，最好根据内容的动态性和实时性以及应用程序的性能来做出最佳决定。</font></font></p>

<p>For example, Stackoverflow most likely uses a server-side rendering approach. There are far two many questions for it to rebuild static versions of every question page each time a new post is submitted. The data also needs to be very real-time with users being able to see posts submitted only seconds ago.</p>

<p>However, a blog site, or promo site, which hardly has any content changes, would benefit much more from a static site setup. The response time would be much greater and the server costs would be much lower.</p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
