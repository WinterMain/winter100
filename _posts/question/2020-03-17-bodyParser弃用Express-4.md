---
layout: question
title:  bodyParser弃用Express 4
date:   2020-03-17T10:05:57.000Z
description: 我正在使用Express 4.0，并且我知道主体解析器已从Express核心中移除，我正在使用推荐的替代产品，但是我正在 body-parser de...
img: 
author: ALPro
category: question
answer: 5
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Express 4.0，并且我知道主体解析器已从Express核心中移除，我正在使用推荐的替代产品，但是我正在 </font></font></p>

<p><code>body-parser deprecated bodyParser: use individual json/urlencoded middlewares server.js:15:12
body-parser deprecated urlencoded: explicitly specify "extended: true" for extended parsing node_modules/body-parser/index.js:74:29</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在哪里可以找到这个所谓的中间件？</font><font style="vertical-align: inherit;">还是我不应该得到这个错误？</font></font></p>

<pre><code>var express     = require('express');<font></font>
var server      = express();<font></font>
var bodyParser  = require('body-parser');<font></font>
var mongoose    = require('mongoose');<font></font>
var passport    = require('./config/passport');<font></font>
var routes      = require('./routes');<font></font>
<font></font>
mongoose.connect('mongodb://localhost/myapp', function(err) {<font></font>
    if(err) throw err;<font></font>
});<font></font>
<font></font>
server.set('view engine', 'jade');<font></font>
server.set('views', __dirname + '/views');<font></font>
<font></font>
server.use(bodyParser()); <font></font>
server.use(passport.initialize());<font></font>
<font></font>
// Application Level Routes<font></font>
routes(server, passport);<font></font>
<font></font>
server.use(express.static(__dirname + '/public'));<font></font>
<font></font>
server.listen(3000);<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1962篇《bodyParser弃用Express 4》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><code>app.use(bodyParser.urlencoded({extended: true}));</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有同样的问题，但这对我有用。</font><font style="vertical-align: inherit;">您可以尝试此扩展部分。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长蛋蛋Davaid</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想要</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">零警告</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">像这样使用它：</font></font></p>

<pre><code>app.use(bodyParser.json());<font></font>
app.use(bodyParser.urlencoded({<font></font>
  extended: true<font></font>
}));<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><code>extended</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不建议使用</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">选项</font><font style="vertical-align: inherit;">的默认值</font><font style="vertical-align: inherit;">，这意味着您需要显式传递true或false值。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐十三</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您对使用express-generator会产生骨架项目的想法是什么，</font></font><code>without deprecated messages</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出现在您的日志中</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行此命令 </font></font></p>

<pre><code>npm install express-generator -g
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，通过在中键入以下命令来创建新的Express.js入门应用程序</font></font><code>your Node projects folder</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>express node-express-app
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该命令告诉express生成名称为的新Node.js应用程序</font></font><code>node-express-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后</font></font><code>Go to the newly created project directory</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>install npm packages</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>start the app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用命令</font></font></p>

<pre><code>cd node-express-app &amp;&amp; npm install &amp;&amp; npm start
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无老丝Davaid</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在旧版的express中，我们必须使用：</font></font></p>

<pre><code>app.use(express.bodyparser()); 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为body-parser是node和express之间的中间件。</font><font style="vertical-align: inherit;">现在我们必须像这样使用它：</font></font></p>

<pre><code>app.use(bodyParser.urlencoded({ extended: false }));<font></font>
app.use(bodyParser.json());<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗JinJin西门</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着</font><font style="vertical-align: inherit;">自</font><a href="https://github.com/expressjs/body-parser/commit/b7420f8dc5c8b17a277c9e50d72bbaf3086a3900" rel="noreferrer"><font style="vertical-align: inherit;">2014年6月19</font></a><font style="vertical-align: inherit;">日起，</font><a href="https://github.com/expressjs/body-parser/commit/b7420f8dc5c8b17a277c9e50d72bbaf3086a3900" rel="noreferrer"><font style="vertical-align: inherit;">不赞成</font></a><font style="vertical-align: inherit;">使用</font></font><code>bodyParser()</code> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构造函数</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><a href="https://github.com/expressjs/body-parser/commit/b7420f8dc5c8b17a277c9e50d72bbaf3086a3900" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<pre><code>app.use(bodyParser()); //Now deprecated
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您现在需要分别调用方法</font></font></p>

<pre><code>app.use(bodyParser.urlencoded());<font></font>
<font></font>
app.use(bodyParser.json());<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果仍然收到警告，则</font></font><code>urlencoded</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要使用</font></font></p>

<pre><code>app.use(bodyParser.urlencoded({<font></font>
  extended: true<font></font>
}));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>extended</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在的配置对象的关键需要明确的被传递，因为它现在已经没有默认值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的快递&gt; = 4.16.0，身体解析器已根据这些方法重新加入</font></font><code>express.json()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>express.urlencoded()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
