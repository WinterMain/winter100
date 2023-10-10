---
layout: question
title:  具有Firebase身份验证的Nuxt SSR身份验证防护
date:   2020-03-23T13:11:24.000Z
description: 我正在尝试使用Firebase Auth在Nuxt中实现身份验证保护，但是我一直遇到问题。目前，我可以登录，但登录后未加载正确的页面，登录后，用户应重定向...
img: 
author: Mandy凯
category: question
answer: 1
tags: firebase Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用Firebase Auth在Nuxt中实现身份验证保护，但是我一直遇到问题。</font><font style="vertical-align: inherit;">目前，我可以登录，但登录后未加载正确的页面，登录后，用户应重定向到“ / profile-overview”页面，但不会发生。</font><font style="vertical-align: inherit;">当我从“配置文件”页面导航到另一个页面，然后返回时，我确实会自动转到“配置文件概述”页面。</font><font style="vertical-align: inherit;">因此登录有效，登录后页面的导航/刷新有问题。</font><font style="vertical-align: inherit;">另外，当我刷新页面时，该用户再次注销时，除了该用户之外，我是否还会登录？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，我的代码： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页：</font></font></p>

<pre><code>loginGoogle () {<font></font>
            this.$store.dispatch('signInWithGoogle').then(() =&gt; {<font></font>
                console.log('reload')<font></font>
                location.reload()<font></font>
                //window.location.reload(true)<font></font>
            }).catch((e) =&gt; {<font></font>
                this.title = 'Google login failed'<font></font>
                this.message =<font></font>
                    "Something went wrong, please try again later. If this problem keeps happening please contact: jonas@co-house.be " + "Error: " + e.message;<font></font>
                this.dialog = true;<font></font>
            })<font></font>
        },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中间件： </font></font></p>

<pre><code>export default function ({ store, redirect, route }) {<font></font>
    console.log('user state' + store.state.user)<font></font>
    console.log('route ' + route.name)<font></font>
    store.state.user != null &amp;&amp; route.name == 'profile' ? redirect('/profile-overview') : ''<font></font>
    store.state.user == null &amp;&amp; isAdminRoute(route) ? redirect('/profile') : ''<font></font>
  }<font></font>
<font></font>
  function isAdminRoute(route) {<font></font>
    if (route.matched.some(record =&gt; record.path == '/profile-overview')) {<font></font>
      return true<font></font>
    }<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插入： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从'@ / services / fireInit.js'导入{auth}</font></font></p>

<pre><code>export default context =&gt; {<font></font>
  const { store } = context<font></font>
<font></font>
  return new Promise((resolve, reject) =&gt; {<font></font>
    auth.onAuthStateChanged(user =&gt; {<font></font>
      if (user) {<font></font>
        return resolve(store.commit('setUser', user))<font></font>
      }<font></font>
      return resolve()<font></font>
    })<font></font>
  })<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">商店（仅用于登录的功能： </font></font></p>

<pre><code>   signInWithGoogle ({ commit }) {<font></font>
            return new Promise((resolve, reject) =&gt; {<font></font>
                auth.signInWithPopup(GoogleProvider).then((result) =&gt; {<font></font>
                    // This gives you a Google Access Token. You can use it to access the Google API.<font></font>
                    var token = result.credential.accessToken;<font></font>
                    // The signed-in user info.<font></font>
                    var user = result.user;<font></font>
                    return resolve(store.commit(state.user, result.user))<font></font>
                    // ...<font></font>
                }).catch((error) =&gt; {<font></font>
                    // Handle Errors here.<font></font>
                    var errorCode = error.code;<font></font>
                    var errorMessage = error.message;<font></font>
                    // The email of the user's account used.<font></font>
                    var email = error.email;<font></font>
                    // The firebase.auth.AuthCredential type that was used.<font></font>
                    var credential = error.credential;<font></font>
                    // ...<font></font>
                })<font></font>
            })<font></font>
        },<font></font>
</code></pre>

<p>Does anyone have any idea what I could be doing wrong, or some documentation / tutorial I could read? </p>

<p>Thanks in advance. </p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿神无</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要在nuxtServerInit中的服务器上初始化用户。</font><font style="vertical-align: inherit;">参见此仓库以获取示例实现</font></font><a href="https://github.com/davidroyer/nuxt-ssr-firebase-auth.v2" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/davidroyer/nuxt-ssr-firebase-auth.v2</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
