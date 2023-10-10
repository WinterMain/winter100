---
layout: question
title:  使用vue-router登录后重定向到请求的页面
date:   2020-03-12T04:49:37.000Z
description: 在我的应用程序中，某些路由仅对经过身份验证的用户可用。当未经身份验证的用户单击必须登录的链接时，他将被重定向到登录组件。如果用户成功登录，我想将他重定向...
img: 
author: Stafan卡卡西
category: question
answer: 1
tags: 重定向 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的应用程序中，某些路由仅对经过身份验证的用户可用。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当未经身份验证的用户单击必须登录的链接时，他将被重定向到登录组件。</font></font><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
如果用户成功登录，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想将他重定向到他必须登录之前请求的URL</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还应该有一个默认路由</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以防用户在登录之前未请求其他URL。</font></font><br><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用vue-router实现此功能？</font></font></strong><br></p><hr>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">登录后我的代码没有重定向</font></font></strong><p></p>

<pre><code>router.beforeEach(<font></font>
    (to, from, next) =&gt; {<font></font>
        if(to.matched.some(record =&gt; record.meta.forVisitors)) {<font></font>
            next()<font></font>
        } else if(to.matched.some(record =&gt; record.meta.forAuth)) {<font></font>
            if(!Vue.auth.isAuthenticated()) {<font></font>
                next({<font></font>
                    path: '/login'<font></font>
                    // Redirect to original path if specified<font></font>
                })<font></font>
            } else {<font></font>
                next()<font></font>
            }<font></font>
        } else {<font></font>
            next()<font></font>
        }<font></font>
    }        <font></font>
)<font></font>
</code></pre>

<p><br><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的登录功能在我的登录组件中</font></font></strong></p>

<pre><code>login() {<font></font>
    var data = {<font></font>
        client_id: 2,<font></font>
        client_secret: '**************',<font></font>
        grant_type: 'password',<font></font>
        username: this.email,<font></font>
        password: this.password<font></font>
    }<font></font>
    // send data<font></font>
    this.$http.post('oauth/token', data)<font></font>
         .then(response =&gt; {<font></font>
             // authenticate the user<font></font>
             this.$auth.setToken(response.body.access_token,<font></font>
             response.body.expires_in + Date.now())<font></font>
             // redirect to route after successful login<font></font>
             this.$router.push('/')<font></font>
          })<font></font>
</code></pre>

<p><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我将非常感谢您提供的任何帮助！</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><a href="https://github.com/websanova/vue-auth" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此库</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
和登录功能要</font><a href="https://github.com/websanova/vue-auth" rel="nofollow noreferrer"><font style="vertical-align: inherit;">容易得多</font></a><font style="vertical-align: inherit;">，</font></font></p>

<pre><code>let redirect = this.$auth.redirect();<font></font>
this.$auth<font></font>
  .login({<font></font>
    data: this.model,<font></font>
    rememberMe: true,<font></font>
    redirect: { name: redirect ? redirect.from.name : "homepage",  query: redirect.from.query },<font></font>
    fetchUser: true<font></font>
  })<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
