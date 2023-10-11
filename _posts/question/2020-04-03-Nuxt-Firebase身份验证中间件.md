---
layout: question
title:  Nuxt Firebase身份验证中间件
date:   2020-04-03T02:56:50.000Z
description: 我使用Nuxt（vue）作为前端，使用Firestore和Authentication作为后端。我可以进行一定程度的身份验证，但是我的问题是刷新浏览器会重...
img: 
author: 米亚
category: question
answer: 1
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用Nuxt（vue）作为前端，使用Firestore和Authentication作为后端。</font><font style="vertical-align: inherit;">我可以进行一定程度的身份验证，但是我的问题是刷新浏览器会重置状态，因此我的中间件返回错误结果。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是一些代码片段：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中间件： </font></font></p>

<pre><code>export default function ({store, redirect, route}) {<font></font>
<font></font>
    const userIsLoggedIn = !!store.state.currentUser; <font></font>
<font></font>
    if(!userIsLoggedIn) {<font></font>
        return redirect ('/')<font></font>
    } <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插入：</font></font></p>

<pre><code>import { auth } from '@/services/firebaseInit.js'<font></font>
<font></font>
export default (context) =&gt; {<font></font>
    const { store } = context<font></font>
<font></font>
    return new Promise((resolve, reject) =&gt; {<font></font>
        auth.onAuthStateChanged(user =&gt; {<font></font>
            store.commit('setCurrentUser', user)<font></font>
            resolve()<font></font>
        })<font></font>
    })<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，这在运行App时有效，但是当有人刷新需要身份验证的页面时，它不起作用并重定向到/，现在我不知道如何解决该问题，将不胜感激，并且如果您需要更多代码，则可以提供它。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑1：</font></font></p>

<pre><code>   async nuxtServerInit ({ commit }, { req }) {<font></font>
            let user = await firebase.auth().currentUser<font></font>
<font></font>
            commit('setCurrentUser', user)<font></font>
        }<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3939篇《Nuxt Firebase身份验证中间件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要使用</font></font><a href="https://nuxtjs.org/guide/vuex-store/#the-nuxtserverinit-action" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nuxtServerInit</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">初始化用户</font><font style="vertical-align: inherit;">，否则您的中间件将在具有空用户的服务器上执行，因此将发生重定向。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要从req对象获取用户数据。</font><font style="vertical-align: inherit;">请参阅此仓库以获取参考实现</font></font><a href="https://github.com/davidroyer/nuxt-ssr-firebase-auth.v2" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/davidroyer/nuxt-ssr-firebase-auth.v2</font></font></a> </p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
