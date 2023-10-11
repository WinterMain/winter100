---
layout: question
title:  如何在RouteEnter钩子之前重定向到Vue路由器内的其他URL？
date:   2020-03-19T02:12:46.000Z
description: 我正在使用Vue.js 2构建管理页面，并且我想防止未经身份验证的用户访问/admin路由并将其重定向到/login。为此，我beforeRouteEnt...
img: 
author: 小卤蛋阳光
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Vue.js 2构建管理页面，并且我想防止未经身份验证的用户访问</font></font><code>/admin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路由并将其重定向到</font></font><code>/login</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">为此，我</font></font><code>beforeRouteEnter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Admin组件中</font><font style="vertical-align: inherit;">使用了In-Component Guard </font><font style="vertical-align: inherit;">，如下所示</font></font></p>

<pre><code>...<font></font>
beforeRouteEnter(to, from, next) {<font></font>
  if(userNotLogedIn) {<font></font>
    this.$router.push('/login');<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里的问题是</font><font style="vertical-align: inherit;">挂钩中</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未定义</font></font><code>beforeRouteEnter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">那么</font></font><code>$router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下</font><font style="vertical-align: inherit;">，访问</font><font style="vertical-align: inherit;">和重定向到其他URL </font><font style="vertical-align: inherit;">的正确方法是</font><font style="vertical-align: inherit;">什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2257篇《如何在RouteEnter钩子之前重定向到Vue路由器内的其他URL？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
