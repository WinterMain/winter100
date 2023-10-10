---
layout: question
title:  如何使Nuxt-auth和Nuxt-i18n成为朋友
date:   2020-03-23T04:05:12.000Z
description: 我想同时使用nuxt \` auth模块和nuxt-i18n。当我要登录页面具有不同的路由时，会出现问题。例如：pages  { login  { ...
img: 
author: 阳光LEY
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想同时使用nuxt @ auth模块和nuxt-i18n。</font><font style="vertical-align: inherit;">当我要登录页面具有不同的路由时，会出现问题。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>pages: {<font></font>
 login: {<font></font>
  en: '/authorization',<font></font>
  fr: '/autorisation'<font></font>
 }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路由运行良好，但是当我尝试在所有页面都受限制的情况下使用nuxt @ auth时，默认重定向会请求/ login页面。</font><font style="vertical-align: inherit;">在nuxt.config.js文件中，我可以重写重定向路由，但只能设置一个重定向。</font></font></p>

<pre><code>auth: {<font></font>
 redirect: {<font></font>
  login: '/fr/autorisation'<font></font>
 }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何显示给身份验证模块以询问所选语言的路线？</font><font style="vertical-align: inherit;">提前致谢！</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
