---
layout: question
title:  如何使用Apollo客户端在next.js中处理httpOnly cookie身份验证
date:   2020-03-24T09:33:26.000Z
description: 根据我的常规经验，我从事的所有单页应用程序都使用JWT作为身份验证机制。我遇到了为此使用httpOnly cookie的api。由于我们无法通过jav...
img: 
author: 老丝阿飞
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据我的常规经验，我从事的所有单页应用程序都使用JWT作为身份验证机制。</font><font style="vertical-align: inherit;">我遇到了为此使用httpOnly cookie的api。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于我们无法通过javascript访问此类cookie以了解其是否存在，因此如何在react app中处理它？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最初的想法是通过</font></font><code>sessionStorage</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">成功登录时</font><font style="vertical-align: inherit;">设置一些跟踪项来跟踪此问题，</font><font style="vertical-align: inherit;">如果收到与身份验证有关的错误，请将其删除。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，我相信这与next.js服务器端渲染不太兼容吗？</font><font style="vertical-align: inherit;">我们使用apollo客户端对其进行了设置，该客户端允许设置自定义标头和缓存。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有一种通用的方法可以通过上述设置来处理此身份验证过程？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3574篇《如何使用Apollo客户端在next.js中处理httpOnly cookie身份验证》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿伽罗</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><code>httpOnly</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 只是意味着该值不能被JavaScript读取。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您向服务器发出HTTP请求，它将返回带有Set-Cookie标头的响应。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，任何将来的请求将自动包含cookie。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（只需确保设置了</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">withCredentials</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或同等功能。）</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
