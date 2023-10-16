---
layout: question
title:  对于大型Web应用程序，最佳Vue-Router最佳实践是什么？
date:   2020-03-12T08:32:05.000Z
description: 我必须使Web应用程序具有许多不同的模块（例如todo模块，documents模块和admin用户的大usermanagement模块）。页面总数>100...
img: 
author: 古一达蒙
category: question
answer: 1
tags: laravel Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我必须使Web应用程序具有许多不同的模块（例如todo模块，documents模块和admin用户的大usermanagement模块）。</font><font style="vertical-align: inherit;">页面总数&gt;100。每个用户的模块访问权限都不同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Laravel</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue-router</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，最佳做法是什么呢？</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建SPA应用程序，并使用1个大型Vue路由器进行所有处理？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于每个模块，都有一个单独的“ SPA”（带有和自己的vue-router）？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或其他建议...？</font></font></li>
</ol></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1139篇《对于大型Web应用程序，最佳Vue-Router最佳实践是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁JinJinHarry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nuxt可以帮助您。</font><font style="vertical-align: inherit;">它会动态将您的文件夹Structur生成为路由器配置文件。</font><font style="vertical-align: inherit;">看看</font></font><a href="https://nuxtjs.org/guide/routing" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://nuxtjs.org/guide/routing</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它具有比路由更多的帮助功能。</font><font style="vertical-align: inherit;">但特别是对于大型应用程序，通常在nuxt上设置一个想法</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
