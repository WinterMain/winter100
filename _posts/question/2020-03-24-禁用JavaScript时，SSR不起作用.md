---
layout: question
title:  禁用JavaScript时，SSR不起作用
date:   2020-03-24T07:52:29.000Z
description: 在这里参考此票证：https   //github.com/zeit/next.js/issues/4210 我目前想知道为什么当您禁用javascri...
img: 
author: Pro逆天
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里参考此票证：</font></font><a href="https://github.com/zeit/next.js/issues/4210" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://github.com/zeit/next.js/issues/4210" rel="nofollow noreferrer"><font style="vertical-align: inherit;">//github.com/zeit/next.js/issues/4210</font></a><font style="vertical-align: inherit;"> 
我目前想知道为什么当您禁用javascript时，使用Relay modern和NextJS的大多数内容不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最初的猜测是，由于NextJS是用于服务器端渲染的React库，因此如果在chrome中禁用JavaScript，则显然React无法正常工作。</font><font style="vertical-align: inherit;">但是，NextJS是服务器端渲染，因此在客户端禁用javascript应该不是问题吗？</font><font style="vertical-align: inherit;">因此，为什么仍然会出现此问题？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3474篇《禁用JavaScript时，SSR不起作用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在现代SSR场景中（与</font></font><a href="https://medium.com/@ElyseKoGo/an-introduction-to-isomorphic-web-application-architecture-a8c81c42f59" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同构应用程序一样）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，服务器仅完成第一个渲染，服务器将返回纯</font></font><code>html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内容以及</font></font><code>js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将用于后续渲染的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果浏览器禁用了javascript，您应该只能看到第一个呈现为静态页面的图片，因为解释器所做的只是显示纯html内容，但是您就不能与该页面进行交互（这需要js启用）</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
