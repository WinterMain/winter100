---
layout: question
title:  如何处理从Nuxt SSR进行的护照js重定向？
date:   2020-04-03T02:54:16.000Z
description: 我在快速会话中使用Nuxt SSR，并且我从服务器端重定向了护照JS/\*\* \* POST /signup \* Create a new local...
img: 
author: 小小
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在快速会话中使用Nuxt SSR，并且我从服务器端重定向了护照JS</font></font></p>

<pre><code>/**<font></font>
 * POST /signup<font></font>
 * Create a new local account.<font></font>
 */<font></font>
exports.postSignup = (req, res, next) =&gt; {<font></font>
  const validationErrors = [];<font></font>
  if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' });<font></font>
  if (!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: 'Password must be at least 8 characters long' });<font></font>
  if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: 'Passwords do not match' });<font></font>
<font></font>
  if (validationErrors.length) {<font></font>
    req.flash('errors', validationErrors);<font></font>
    return res.redirect('/signup');<font></font>
  }<font></font>
  req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false });<font></font>
<font></font>
  const user = new User({<font></font>
    email: req.body.email,<font></font>
    password: req.body.password<font></font>
  });<font></font>
<font></font>
  User.findOne({ email: req.body.email }, (err, existingUser) =&gt; {<font></font>
    if (err) { return next(err); }<font></font>
    if (existingUser) {<font></font>
      req.flash('errors', { msg: 'Account with that email address already exists.' });<font></font>
      return res.redirect('/signup');<font></font>
    }<font></font>
    user.save((err) =&gt; {<font></font>
      if (err) { return next(err); }<font></font>
      req.logIn(user, (err) =&gt; {<font></font>
        if (err) {<font></font>
          return next(err);<font></font>
        }<font></font>
        res.redirect('/');<font></font>
      });<font></font>
    });<font></font>
  });<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我调用重定向方法？</font><font style="vertical-align: inherit;">它将重新加载页面并清除Vuex状态，对吗？</font><font style="vertical-align: inherit;">我该如何从护照重定向，以使Vuex状态保持不变且客户端页面不刷新</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3934篇《如何处理从Nuxt SSR进行的护照js重定向？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小蛋蛋</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实最好异步处理表单提交以避免@Darius提到的页面刷新。</font><font style="vertical-align: inherit;">但是，为了完善起见，我想提到确实存在一些解决方案来保持您的Vuex状态，例如</font></font><a href="https://github.com/robinvdvleuten/vuex-persistedstate/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vuex-persistedstate</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它可以用于将状态持久保存到localStorage，sessionStorage甚至cookie。</font><font style="vertical-align: inherit;">它也可以用作Nuxt插件。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
