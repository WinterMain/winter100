---
layout: question
title:  如何在Express中获取URL参数？
date:   2020-03-19T04:34:00.000Z
description: 我在tagid从URL：获取值方面遇到问题localhost 8888/p?tagid=1234。帮助我更正我的控制器代码。我无法获得tagid价值。...
img: 
author: 乐米亚
category: question
answer: 1
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在</font></font><code>tagid</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从URL：</font><font style="vertical-align: inherit;">获取值方面遇到问题</font></font><code>localhost:8888/p?tagid=1234</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">帮助我更正我的控制器代码。</font><font style="vertical-align: inherit;">我无法获得</font></font><code>tagid</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">价值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的代码如下：</font></font></p>

<p><code>app.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var express = require('express'),<font></font>
  http = require('http'),<font></font>
  path = require('path');<font></font>
var app = express();<font></font>
var controller = require('./controller')({<font></font>
  app: app<font></font>
});<font></font>
<font></font>
// all environments<font></font>
app.configure(function() {<font></font>
  app.set('port', process.env.PORT || 8888);<font></font>
  app.use(express.json());<font></font>
  app.use(express.urlencoded());<font></font>
  app.use(express.methodOverride());<font></font>
  app.use(app.router);<font></font>
  app.use(express.static(path.join(__dirname, 'public')));<font></font>
  app.set('view engine', 'jade');<font></font>
  app.set('views', __dirname + '/views');<font></font>
  app.use(app.router);<font></font>
  app.get('/', function(req, res) {<font></font>
    res.render('index');<font></font>
  });<font></font>
});<font></font>
http.createServer(app).listen(app.get('port'), function() {<font></font>
  console.log('Express server listening on port ' + app.get('port'));<font></font>
});<font></font>
</code></pre>

<p><code>Controller/index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>function controller(params) {<font></font>
  var app = params.app;<font></font>
  //var query_string = request.query.query_string;<font></font>
<font></font>
  app.get('/p?tagId=/', function(request, response) {<font></font>
    // userId is a parameter in the url request<font></font>
    response.writeHead(200); // return 200 HTTP OK status<font></font>
    response.end('You are looking for tagId' + request.route.query.tagId);<font></font>
  });<font></font>
}<font></font>
<font></font>
module.exports = controller;<font></font>
</code></pre>

<p><code>routes/index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>require('./controllers');<font></font>
/*<font></font>
 * GET home page.<font></font>
 */<font></font>
<font></font>
exports.index = function(req, res) {<font></font>
  res.render('index', {<font></font>
    title: 'Express'<font></font>
  });<font></font>
};<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2362篇《如何在Express中获取URL参数？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一梅</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的路线如下所示，这将起作用： </font></font><code>localhost:8888/p?tagid=1234</code></p>

<pre><code>var tagId = req.query.tagid;<font></font>
console.log(tagId); // outputs: 1234<font></font>
console.log(req.query.tagid); // outputs: 1234<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则，如果您的路线如下所示，请使用以下代码： </font></font><code>localhost:8888/p/1234</code></p>

<pre><code>var tagId = req.params.tagid;<font></font>
console.log(tagId); // outputs: 1234<font></font>
console.log(req.params.tagid); // outputs: 1234<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
