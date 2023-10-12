---
layout: question
title:  Passport.js-错误：无法将用户序列化为会话
date:   2020-03-24T06:08:44.000Z
description: 我在Passport.js模块和Express.js中遇到问题。这是我的代码，我只想使用硬编码登录名进行首次尝试。我总是收到消息：我搜索了很多...
img: 
author: 番长Pro
category: question
answer: 2
tags: Node.js的 Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Passport.js模块和Express.js中遇到问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的代码，我只想使用硬编码登录名进行首次尝试。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我总是收到消息：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我搜索了很多东西，然后在stackoverflow中找到了一些帖子，但是我没有失败。</font></font></p>

<pre><code>Error: failed to serialize user into session<font></font>
    at pass (c:\Development\private\aortmann\bootstrap_blog\node_modules\passport\lib\passport\index.js:275:19)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的代码如下所示。</font></font></p>

<pre><code>'use strict';<font></font>
<font></font>
var express = require('express');<font></font>
var path = require('path');<font></font>
var fs = require('fs');<font></font>
var passport = require('passport');<font></font>
var LocalStrategy = require('passport-local').Strategy;<font></font>
var nodemailer = require('nodemailer');<font></font>
<font></font>
var app = express();<font></font>
<font></font>
module.exports = function setupBlog(mailTransport, database){<font></font>
var config = JSON.parse(fs.readFileSync('./blog.config'));<font></font>
<font></font>
app.set('view options', {layout: false});<font></font>
<font></font>
app.use(express.static(path.join(__dirname, '../', 'resources', 'html')));<font></font>
<font></font>
<font></font>
app.use(express.bodyParser());<font></font>
app.use(express.cookieParser());<font></font>
app.use(express.session({ secret: 'secret' }));<font></font>
app.use(passport.initialize());<font></font>
app.use(passport.session());<font></font>
<font></font>
<font></font>
app.get('/blog/:blogTitle', function(req, res) {<font></font>
  var blogTitle = req.params.blogTitle;<font></font>
  if(blogTitle === 'newest'){<font></font>
    database.getLatestBlogPost(function(post) {<font></font>
      res.send(post);<font></font>
    });<font></font>
  } else {<font></font>
    database.getBlogPostByTitle(blogTitle, function(blogPost) {<font></font>
      res.send(blogPost);<font></font>
    });<font></font>
  }<font></font>
});<font></font>
<font></font>
passport.use(new LocalStrategy(function(username, password, done) {<font></font>
  // database.login(username, password, done);<font></font>
  if (username === 'admin' &amp;&amp; password === 'admin') {<font></font>
    console.log('in');<font></font>
    done(null, { username: username });<font></font>
  } else {<font></font>
    done(null, false);<font></font>
  }<font></font>
}));<font></font>
<font></font>
app.post('/login', passport.authenticate('local', {<font></font>
  successRedirect: '/accessed',<font></font>
  failureRedirect: '/access'<font></font>
}));<font></font>
<font></font>
<font></font>
<font></font>
<font></font>
<font></font>
app.listen(8080);<font></font>
console.log('Blog is running on port 8080');<font></font>
<font></font>
}();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3344篇《Passport.js-错误：无法将用户序列化为会话》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝小胖蛋蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将Promise与serializeUser和deserializeUser一起使用：</font></font></p>

<pre><code>passport.serializeUser((user, done) =&gt; {<font></font>
  done(null, user.id);<font></font>
});<font></font>
<font></font>
passport.deserializeUser((id, done) =&gt; {<font></font>
  // console.log(`id: ${id}`);<font></font>
  User.findById(id)<font></font>
    .then((user) =&gt; {<font></font>
      done(null, user);<font></font>
    })<font></font>
    .catch((error) =&gt; {<font></font>
      console.log(`Error: ${error}`);<font></font>
    });<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅我的</font></font><a href="https://github.com/isaklafleur/startupManager" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">github存储库</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取有关如何解决此问题的完整代码示例。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙古一</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看来您没有实现</font></font><code>passport.serializeUser</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>passport.deserializeUser</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">尝试添加以下内容：</font></font></p>

<pre><code>passport.serializeUser(function(user, done) {<font></font>
  done(null, user);<font></font>
});<font></font>
<font></font>
passport.deserializeUser(function(user, done) {<font></font>
  done(null, user);<font></font>
});<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
