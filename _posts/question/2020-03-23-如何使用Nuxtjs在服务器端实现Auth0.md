---
layout: question
title:  如何使用Nuxtjs在服务器端实现Auth0？
date:   2020-03-23T14:10:20.000Z
description: 我有一个Nuxt应用，其身份验证已在通用模式下运行。 我正在尝试将身份验证服务转换为Auth0。我遵循Vue快速入门，但是我发现auth0-js是一个...
img: 
author: 伽罗
category: question
answer: 0
tags: 身份验证 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个Nuxt应用，其身份验证已在通用模式下运行。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试将身份验证服务转换为Auth0。</font><font style="vertical-align: inherit;">我遵循</font></font><a href="https://auth0.com/docs/quickstart/spa/vuejs" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue快速入门</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是我发现</font></font><a href="https://www.npmjs.com/package/auth0-js" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">auth0-js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个客户端库，因为它使用了很多“窗口”的东西，而Nuxt的服务器端没有这些东西。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，通过使它成为客户端插件并包装所有功能（即在生命周期钩子中调用authservice）进行</font></font><code>process.client</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查</font><font style="vertical-align: inherit;">，可以使它正常工作</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它之所以能够“正常运行”，是因为在未登录时进入受保护的页面时，它会先闪烁页面，然后再重定向至登录页面（因为其也呈现在服务器端，但是检查仅在将其交付到服务器端时进行）。我认为是客户端）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我现在的问题是：</font></font><br><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何将支票也添加到服务器端？</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或至少在重定向之前确保未刷新受保护的页面）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，我已经尝试过：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将有效负载和登录状态保存在存储中，并签入一些自定义中间件，但这并没有解决问题。</font></font></li>
</ul>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，在我看来@ nuxt / auth已经过时，或者还有</font></font><a href="https://github.com/nuxt/example-auth0" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nuxt auth0示例</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当我使用新的auth0通用时，它使用auth0-lock。</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人对如何解决此问题有建议吗？</font><font style="vertical-align: inherit;">提前致谢！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3135篇《如何使用Nuxtjs在服务器端实现Auth0？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
