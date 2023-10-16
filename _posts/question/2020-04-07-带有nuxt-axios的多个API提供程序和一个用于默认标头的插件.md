---
layout: question
title:  带有nuxt-axios的多个API提供程序和一个用于默认标头的插件
date:   2020-04-07T03:51:56.000Z
description: 我有一个Nuxt应用程序，它对同一API的请求很多，但是我还需要向除我的主要API之外的其他提供程序发出请求，而且我不知道如何管理默认标头。这是我的工...
img: 
author: 宝儿
category: question
answer: 0
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个Nuxt应用程序，它对同一API的请求很多，但是我还需要向除我的主要API之外的其他提供程序发出请求，而且我不知道如何管理默认标头。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的工作设置，创建一个插件以将标头添加到所有请求中，如下所示：</font></font></p>

<p><code>plugins/axios.js</code></p>

<pre><code>export default function({ $axios, store, redirect }) {<font></font>
   $axios.onRequest(config =&gt; {<font></font>
       config.headers.common.Authorization = 'token 123';<font></font>
       config.headers.common["Custom-header"] = 'blablabla';<font></font>
 }<font></font>
}<font></font>
</code></pre>

<p><code>nuxt.config.js</code></p>

<pre><code>module.exports = {<font></font>
    plugins: ["@/plugins/axios"],<font></font>
    axios: {<font></font>
        baseURL: process.env.API_URL,<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><code>store.js</code></p>

<pre><code>async changeKeyVersionOnline({ commit }) {<font></font>
    const response = await this.$axios.get(<font></font>
      `users/1`<font></font>
    );<font></font>
    return response;<font></font>
  },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对于主要API来说效果很好，但问题是我还需要向第三方服务提供商的其他端点发出请求，并且标头应该不同。</font></font></p>

<p>How can i do that, i read about the proxy option of the <code>nuxt-axios</code> package but what i understand is this only changes the request base URL, i cant find how to set different headers to a specific request.</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4127篇《带有nuxt-axios的多个API提供程序和一个用于默认标头的插件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
