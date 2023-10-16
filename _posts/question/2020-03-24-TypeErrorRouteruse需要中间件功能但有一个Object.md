---
layout: question
title:  TypeError：Router.use（）需要中间件功能，但有一个Object
date:   2020-03-24T09:59:15.000Z
description: 新版本的express中间件有所更改，我对此问题的其他一些帖子的代码也做了一些更改，但我束手无策。我们已经事先进行了工作，但是我不记得发生了什么变化。...
img: 
author: 阿飞
category: question
answer: 4
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新版本的express中间件有所更改，我对此问题的其他一些帖子的代码也做了一些更改，但我束手无策。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们已经事先进行了工作，但是我不记得发生了什么变化。 </font></font></p>

<pre class="lang-none prettyprint-override"><code>throw new TypeError('Router.use() requires middleware function but got a<font></font>
        ^<font></font>
TypeError: Router.use() requires middleware function but got a Object<font></font>
</code></pre>

<hr>

<pre class="lang-none prettyprint-override"><code>node ./bin/www<font></font>
<font></font>
js-bson: Failed to load c++ bson extension, using pure JS version<font></font>
js-bson: Failed to load c++ bson extension, using pure JS version<font></font>
</code></pre>

<hr>

<pre><code>/Users/datis/Documents/bb-dashboard/node_modules/express/lib/router/index.js:438<font></font>
      throw new TypeError('Router.use() requires middleware function but got a<font></font>
            ^<font></font>
TypeError: Router.use() requires middleware function but got a Object<font></font>
    at /Users/datis/Documents/bb-dashboard/node_modules/express/lib/router/index.js:438:13<font></font>
    at Array.forEach (native)<font></font>
    at Function.use (/Users/datis/Documents/bb-dashboard/node_modules/express/lib/router/index.js:436:13)<font></font>
    at /Users/datis/Documents/bb-dashboard/node_modules/express/lib/application.js:188:21<font></font>
    at Array.forEach (native)<font></font>
    at Function.use (/Users/datis/Documents/bb-dashboard/node_modules/express/lib/application.js:185:7)<font></font>
    at Object.&lt;anonymous&gt; (/Users/datis/Documents/bb-dashboard/app.js:46:5)<font></font>
    at Module._compile (module.js:456:26)<font></font>
    at Object.Module._extensions..js (module.js:474:10)<font></font>
    at Module.load (module.js:356:32)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.js</font></font></p>

<pre><code>var express = require('express');<font></font>
var path = require('path');<font></font>
var favicon = require('serve-favicon');<font></font>
var logger = require('morgan');<font></font>
var cookieParser = require('cookie-parser');<font></font>
var bodyParser = require('body-parser');<font></font>
var mongoose = require('mongoose');<font></font>
var session = require('express-session');<font></font>
var MongoClient = require('mongodb').MongoClient;<font></font>
var routes = require('./routes/index');<font></font>
var users = require('./routes/users');<font></font>
<font></font>
var Users = require('./models/user');<font></font>
var Items = require('./models/item');<font></font>
var Store = require('./models/store');<font></font>
var StoreItem = require('./models/storeitem');<font></font>
<font></font>
var app = express();<font></font>
//set mongo db connection<font></font>
var db = mongoose.connection; <font></font>
<font></font>
MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {<font></font>
  if(!err) {<font></font>
    console.log("We are connected");<font></font>
  }<font></font>
});<font></font>
// var MONGOHQ_URL="mongodb://localhost:27017/test" <font></font>
<font></font>
// view engine setup<font></font>
app.set('views', path.join(__dirname, 'views'));<font></font>
<font></font>
app.set('view engine', 'ejs');<font></font>
<font></font>
// uncomment after placing your favicon in /public<font></font>
//app.use(favicon(__dirname + '/public/favicon.ico'));<font></font>
app.use(logger('dev'));<font></font>
app.use(bodyParser.json());<font></font>
app.use(bodyParser.urlencoded({ extended: false }));<font></font>
app.use(cookieParser());<font></font>
app.use(session({<font></font>
    secret: 'something',<font></font>
    resave: true,<font></font>
    saveUninitialized: true<font></font>
}));<font></font>
<font></font>
app.use('/', routes);<font></font>
app.use('/users', users);<font></font>
app.use(express.static(path.join(__dirname, 'public')));<font></font>
<font></font>
// catch 404 and forward to error handler<font></font>
// app.use(function(req, res, next) {<font></font>
//     var err = new Error('Not Found');<font></font>
//     err.status = 404;<font></font>
//     next(err);<font></font>
// });<font></font>
<font></font>
// Make our db accessible to our router<font></font>
app.use(function(req, res, next){<font></font>
  req.db = db;<font></font>
  next();<font></font>
});<font></font>
<font></font>
// error handlers<font></font>
<font></font>
// development error handler<font></font>
// will print stacktrace<font></font>
if (app.get('env') === 'development') {<font></font>
    app.use(function(err, req, res, next) {<font></font>
        res.status(err.status || 500);<font></font>
        res.render('error', {<font></font>
            message: err.message,<font></font>
            error: err<font></font>
        });<font></font>
    });<font></font>
}<font></font>
<font></font>
// production error handler<font></font>
// no stacktraces leaked to user<font></font>
app.use(function(err, req, res, next) {<font></font>
    res.status(err.status || 500);<font></font>
    res.render('error', {<font></font>
        message: err.message,<font></font>
        error: {}<font></font>
    });<font></font>
});<font></font>
<font></font>
<font></font>
module.exports = app;<font></font>
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎由于版本控制原因，此问题的答案已更改。</font><font style="vertical-align: inherit;">感谢</font></font><a href="https://github.com/expressjs/express/wiki/Migrating-from-3.x-to-4.x"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nik</font></font></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3609篇《TypeError：Router.use（）需要中间件功能，但有一个Object》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的任何js页面中，您都缺少 </font></font></p>

<pre><code>module.exports = router;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查并验证您的所有JS页面 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在使用快递并正在做的简单解决方案 </font></font></p>

<pre><code>const router = express.Router();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保 </font></font></p>

<pre><code>module.exports = router ;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在页面末尾</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞Tom</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我收到了由Anirudh发布的错误和解决方案帮助。</font><font style="vertical-align: inherit;">我构建了用于快速路由的模板，却忘记了这一细微差别-很高兴这是一个简单的解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想通过解释我的文件结构来澄清他的回答，以将代码放在哪里。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的典型文件结构如下：</font></font></p>

<pre><code>/lib<font></font>
<font></font>
/routes<font></font>
</code></pre>

<p><code>---index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> （控制主导航）</font></font></p>

<pre><code>/page-one<font></font>
<font></font>
<font></font>
<font></font>
/page-two<font></font>
<font></font>
<font></font>
<font></font>
     ---index.js<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（每个文件（在我的情况下，第二页中的index.js，尽管第一页中也有index.js）-每个页</font><font style="vertical-align: inherit;">的末尾</font><font style="vertical-align: inherit;">使用</font></font><code>app.METHOD</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>router.METHOD</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要包含</font></font><code>module.exports = router;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人愿意，我会发布指向github模板的链接，该链接使用最佳实践实现了快速路由。</font><font style="vertical-align: inherit;">让我知道</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢阿尼鲁德！</font><font style="vertical-align: inherit;">很好的答案。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Jim</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是2.x以上版本的express，则必须像以下代码一样声明app.router。</font><font style="vertical-align: inherit;">请尝试替换您的代码</font></font></p>

<pre><code>app.use('/', routes);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与 </font></font></p>

<pre><code>app.use(app.router);<font></font>
routes.initialize(app);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请</font></font><a href="https://stackoverflow.com/questions/13254549/in-express-what-does-app-router-do-exactly"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取有关app.router的更多详细信息</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.router在Express 3.0+中已贬值。</font><font style="vertical-align: inherit;">如果您使用的是Express 3.0+，请参阅下面的Anirudh答案。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
