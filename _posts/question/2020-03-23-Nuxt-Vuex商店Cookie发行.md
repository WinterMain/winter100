---
layout: question
title:  Nuxt Vuex商店Cookie发行
date:   2020-03-23T06:48:15.000Z
description: 一天的好时光！  在我的项目进行了几周的开发之后，我决定从普通的Vue迁移到Nuxt。 主要是因为我需要SSR，尽管我知道Google可以执行页面...
img: 
author: Davaid前端
category: question
answer: 0
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一天的好时光！  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的项目进行了几周的开发之后，我决定从普通的Vue迁移到Nuxt。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主要是因为我需要SSR，尽管我知道Google可以执行页面上显示的JS，因此可以为其搜索机器人生成适当的内容。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个原因是项目开发的一般工作流程。</font><font style="vertical-align: inherit;">我喜欢自动实例化路线，商店等的想法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当我在</font></font><code>mode: universal</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是中</font><font style="vertical-align: inherit;">运行应用程序时，我遇到了一个非常奇怪的行为</font></font><code>mode: spa</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><code>mode: spa</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从那时起，我</font><font style="vertical-align: inherit;">就不想再切换到</font><font style="vertical-align: inherit;">SSR了。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在商店中有一个帐户模块- </font></font><code>account.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">负责处理与帐户管理相关的任何操作，例如登录/注销，获取经过身份验证的用户的个人资料，存储从登录请求中获得的令牌以及处理逻辑2FA TOTP程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旧版</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序中，我只需使用以下代码就可以从cookie中获取令牌  </font></font></p>

<pre><code>import Cookies from 'js-cookie';<font></font>
<font></font>
export const state = {<font></font>
   user: null,<font></font>
   token: Cookies.get('token')<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过执行以下更改，在成功认证之后保存令牌：</font></font></p>

<pre><code>[types.ACCOUNT_SAVE_TOKEN] (state, { token, remember }) {<font></font>
    state.token = token;<font></font>
    Cookies.set('token', token, {<font></font>
      expires: 365,<font></font>
      httpOnly: true<font></font>
    });<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是在迁移到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nuxt.js之后</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，每次</font><strong><font style="vertical-align: inherit;">登录时</font></strong><font style="vertical-align: inherit;">，都会填充该状态中的令牌值，但未设置cookie，并且导航到项目内的另一页（它是pwa，因此无需重新加载等） ）令牌重置为空。</font></font></p>

<p>This issue however is gone if application is switched to the <code>mode: spa</code> from <code>mode: universal</code> and everything is working just fine. </p>

<p>I've read many issues on the github as well as done pretty big portion of crawling throught the websites which are trying to solve the same issue, though none of the suggestions are working for me.  </p>

<p>I've even installed the <a href="https://www.npmjs.com/package/cookie-universal-nuxt" rel="noreferrer">cookie-universal-nuxt</a> package from NPM which claims to be working with the SSR, but yet every time I'm trying to access <code>this.$cookies.get('token')</code> in the state, or anywhere else (mutations for example), I'm just getting error about using the method (get/set/remove) on <code>null</code>.</p>

<p>Does anyone know or have an idea on how to overcome this issue, at least if it is possible without going back to the <code>mode: spa</code>? </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在时，PS Running会</font></font><code>npm run build|generate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生与普通vue相同的文件（不包含内容，只是结构，直到重新读取目标元素为止）</font></font><code>mode: spa</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2875篇《Nuxt Vuex商店Cookie发行》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
