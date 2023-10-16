---
layout: question
title:  nuxtjs和后端API之间的授权
date:   2020-03-23T02:58:23.000Z
description: 我有一个使用Nuxtjs创建的Vuejs应用程序。我还使用Django作为后端服务器，并且制作了一个API与后端服务器（Django）和前端应用程序（Vu...
img: 
author: 小小Stafan宝儿
category: question
answer: 2
tags: 认证 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个</font><font style="vertical-align: inherit;">使用</font><a href="https://nuxtjs.org/guide" rel="noreferrer"><font style="vertical-align: inherit;">Nuxtjs</font></a><font style="vertical-align: inherit;">创建</font><font style="vertical-align: inherit;">的</font></font><a href="https://vuejs.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vuejs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我还使用</font><a href="https://www.djangoproject.com/" rel="noreferrer"><font style="vertical-align: inherit;">Django</font></a><font style="vertical-align: inherit;">作为后端服务器，并且制作了一个API与后端服务器（Django）和前端应用程序（Vuejs / Nuxtjs）进行交互。</font><font style="vertical-align: inherit;">并且所有与API相关的提取操作都在</font><font style="vertical-align: inherit;">页面的</font><font style="vertical-align: inherit;">中完成，以</font><font style="vertical-align: inherit;">使用</font><a href="https://www.npmjs.com/package/@nuxtjs/axios" rel="noreferrer"><font style="vertical-align: inherit;">axios</font></a><font style="vertical-align: inherit;">在服务器端呈现数据</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">另外，我正在使用json网络令牌身份验证，并且API在成功登录后会生成一个jwt令牌，该令牌存储在cookie中。</font><font style="vertical-align: inherit;">因此，在后端，它将始终检查令牌的请求授权标头。</font><font style="vertical-align: inherit;">如果请求来自登录用户（授权令牌），则返回已认证的json数据，否则返回未认证的数据。</font></font><a href="https://nuxtjs.org/guide" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><a href="https://www.djangoproject.com/" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><code>AsyncData function</code><font style="vertical-align: inherit;"></font><a href="https://www.npmjs.com/package/@nuxtjs/axios" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题：</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当用户导航至应用程序时，我想检查用户是否已通过身份验证。</font><font style="vertical-align: inherit;">如果用户已通过身份验证，请呈现已通过身份验证的页面。</font><font style="vertical-align: inherit;">如果没有，则显示未认证的页面。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的想法：</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从上的App提取完成后</font></font><code>AsyncData function</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我会检查cookie是否有任何值。</font><font style="vertical-align: inherit;">如果存在，则发送带有请求的授权标头的令牌。</font><font style="vertical-align: inherit;">但是，由于页面将首先在服务器上呈现，而不是在客户端（cookie实际所在的位置）呈现，因此它将永远找不到授权令牌。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何检查用户是否已经登录，以便可以分别从API获取经过身份验证的数据和未经身份验证的数据？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新资料</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">成功登录后（发布授权的电子邮件和密码），我会收到带有令牌的json响应，该令牌是在cookie中设置的，如下所示：</font></font></p>

<pre><code>this.$cookie.set('my_auth_token', this.token, {expires: 15})
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何检索客户端cookie并进入nuxt服务器以进行服务器端渲染？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2706篇《nuxtjs和后端API之间的授权》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用Firebase身份验证做了类似的事情。</font><font style="vertical-align: inherit;">Github上</font><font style="vertical-align: inherit;">有一个</font></font><a href="https://github.com/rossma/nuxt-firebase-auth-ex" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例项目</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以及</font></font><a href="http://monstersandwich.blogspot.co.uk/2018/02/vuejs-nuxtjs-vuex-firebase-persisted.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个博客条目，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">概述了应用程序中使用的重要文件和配置。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Cookies通过</font></font><a href="https://nuxtjs.org/api/pages-middleware" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中间件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在（Express）Nuxt服务器中公开</font><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具体来说，可以从</font></font><code>req.headers.cookie</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性中</font><font style="vertical-align: inherit;">读取它们</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以在</font></font><a href="https://nuxtjs.org/examples/auth-routes" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nuxt文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到此示例实现</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于您的实现：使用Node从API中获取特权数据似乎是将会话处理委派给单个服务（而不是两者）并为用户提供SSR的理想方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您选择在Django服务上实现会话处理，则需要通过将cookie传递到</font></font><code>axios</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请求标头中</font><font style="vertical-align: inherit;">来“转发” cookie </font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
