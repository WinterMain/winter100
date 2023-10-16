---
layout: question
title:  无服务器功能上具有Auth0的Next.js（使用Passport.js）
date:   2020-03-24T09:30:29.000Z
description: 通常，使用auth0和Lock.js进行身份验证并不重要，但使用Next.js和SSR则比较棘手。我决定根据我发现的教程（nextjs-passport）...
img: 
author: 小小
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，使用auth0和Lock.js进行身份验证并不重要，但使用Next.js和SSR则比较棘手。</font><font style="vertical-align: inherit;">我决定根据我发现的教程（</font></font><a href="https://github.com/auth0-blog/nextjs-passport" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nextjs-passport</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">尝试passport.js </font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想将其部署到Firebase，所以我没有可用的Express服务器。</font><font style="vertical-align: inherit;">Passport也应该与自定义回调一起使用，但是我只得到一个空白页，没有错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何人还可以通过最新的Next.js实施Auth0身份验证吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/pages/login.js</font></font></p>

<pre class="lang-js prettyprint-override"><code>import React from 'react'<font></font>
<font></font>
export default () =&gt; (<font></font>
  &lt;form action='/api/login' method='post'&gt;<font></font>
    &lt;div className='field'&gt;<font></font>
      &lt;p className='control has-icons-left has-icons-right'&gt;<font></font>
        &lt;input className='input' name='email' type='email' placeholder='Email' /&gt;<font></font>
      &lt;/p&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div className='field'&gt;<font></font>
      &lt;p className='control has-icons-left'&gt;<font></font>
        &lt;input className='input' name='password' type='password' placeholder='Password' /&gt;<font></font>
      &lt;/p&gt;<font></font>
    &lt;/div&gt;<font></font>
    &lt;div className='field'&gt;<font></font>
      &lt;p className='control'&gt;<font></font>
        &lt;input type='submit' className='button is-success' /&gt;<font></font>
      &lt;/p&gt;<font></font>
    &lt;/div&gt;<font></font>
  &lt;/form&gt;<font></font>
)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/pages/api/login.js</font></font></p>

<pre class="lang-js prettyprint-override"><code>import passport from 'passport'<font></font>
import Cors from 'micro-cors'<font></font>
<font></font>
const cors = Cors({<font></font>
  allowedMethods: ['POST', 'HEAD']<font></font>
})<font></font>
<font></font>
function Login (req, res, next) {<font></font>
  return passport.authenticate('auth0', {<font></font>
    scope: 'openid email profile',<font></font>
    successRedirect: '/',<font></font>
    failureFlash: true,<font></font>
    failureRedirect: '/login'<font></font>
  }, function (err, user, info) {<font></font>
    console.log(err, user, info)<font></font>
    if (err) { return next(err) }<font></font>
    if (!user) { return res.redirect('/login') }<font></font>
    req.logIn(user, function (err) {<font></font>
      if (err) { return next(err) }<font></font>
      return res.redirect('/users/' + user.username)<font></font>
    })<font></font>
  })(req, res, next)<font></font>
}<font></font>
<font></font>
export default cors(Login)<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3566篇《无服务器功能上具有Auth0的Next.js（使用Passport.js）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva古一</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我假设您要在Now V2上使用Nextjs，以便它是无服务器的。</font><font style="vertical-align: inherit;">如果不是这种情况，我的回答可能对您没有帮助。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是</font><a href="https://github.com/awb305/Auth0-Nextjs-Serverless" rel="nofollow noreferrer"><font style="vertical-align: inherit;">为Auth0和Nextjs无服务器</font></a><font style="vertical-align: inherit;">做了一个</font></font><a href="https://github.com/awb305/Auth0-Nextjs-Serverless" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最小的仓库。</font></font></a></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您在正确的道路上意识到</font></font><a href="https://auth0.com/blog/next-js-authentication-tutorial/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Next.js身份验证教程</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用express来扩展Nextjs服务器，但是由于我们处在无服务器世界中，因此需要将身份验证抽象为api。</font><font style="vertical-align: inherit;">看来您是从此开始的，但是您并未在api中放置完整的Express服务器。</font><font style="vertical-align: inherit;">在我的仓库中，我的身份验证lambda是./auth/auth.js。</font><font style="vertical-align: inherit;">对于上述存储库，在./utils/withAuth.js中的HOC中调用用户数据。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对您有所帮助！</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
