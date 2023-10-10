---
layout: question
title:  使用nuxtServerInit时缓存的访问令牌
date:   2020-03-24T07:56:18.000Z
description: 使用Nuxt时，我遇到了与授权（JWT）有关的缓存问题。这是在nuxtServerInit其中设置访问令牌的操作：// store/index.j...
img: 
author: 小小
category: question
answer: 1
tags: Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Nuxt时，我遇到了与授权（JWT）有关的缓存问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是在</font></font><code>nuxtServerInit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中设置访问令牌的操作：</font></font></p>

<pre class="lang-js prettyprint-override"><code>// store/index.js<font></font>
<font></font>
import cookie from 'cookie';<font></font>
<font></font>
export const state = () =&gt; ({<font></font>
  authCookie: 'MyAuthCookie',<font></font>
});<font></font>
<font></font>
export const actions = {<font></font>
  async nuxtServerInit({ dispatch, commit, state }, { req }) {<font></font>
    // Check for access token<font></font>
    const accessToken = req.headers.cookie &amp;&amp;<font></font>
      cookie.parse(req.headers.cookie)[state.authCookie];<font></font>
<font></font>
    // Set the access token, if there is one<font></font>
    if (accessToken) {<font></font>
      commit('auth/setAccessToken', accessToken);<font></font>
    }<font></font>
  },<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>accessToken</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态随后用于设置</font></font><code>Authorization</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此插件中所有将来请求</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">标头：</font></font></p>

<pre class="lang-js prettyprint-override"><code>// plugins/axios.js<font></font>
<font></font>
export default function ({ app, store }) {<font></font>
  app.$axios.onRequest((config) =&gt; {<font></font>
    // Set the `Authorization` header for future requests if we're logged in<font></font>
    if (store.getters['auth/isLoggedIn']) {<font></font>
      config.headers.common.Authorization = `Bearer ${store.state.auth.accessToken}`;<font></font>
    }<font></font>
  });<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nuxt将客户端和服务器之间共享的数据存储在内</font></font><code>window.__NUXT__</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">联</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">中的全局</font><font style="vertical-align: inherit;">变量中</font><font style="vertical-align: inherit;">，并且由于我正在积极地缓存相关页面（使用Akamai），因此访问令牌将永远不会更新。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有更好的方法来处理此问题并防止访问令牌被缓存？</font><font style="vertical-align: inherit;">或者换句话说，如何防止将</font></font><code>accessToken</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态写入全局</font></font><code>__NUXT__</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3485篇《使用nuxtServerInit时缓存的访问令牌》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥小哥</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我唯一能想到的就是在服务器端和客户端都填充商店。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器端已经覆盖了nuxtServerInit。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户端可以使用客户端插件来完成，如此处所述：</font><a href="https://github.com/nuxt/nuxt.js/pull/4573#issuecomment-557857101" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/nuxt/nuxt.js/pull/4573#issuecomment-557857101" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/nuxt/nuxt.js/pull/4573#issuecomment-557857101</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
