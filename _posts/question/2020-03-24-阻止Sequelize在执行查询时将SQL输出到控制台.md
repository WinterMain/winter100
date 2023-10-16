---
layout: question
title:  阻止Sequelize在执行查询时将SQL输出到控制台？
date:   2020-03-24T06:05:24.000Z
description: 我有一个检索用户个人资料的功能。app.get('/api/user/profile', function (request, response){...
img: 
author: Itachi
category: question
answer: 3
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个检索用户个人资料的功能。</font></font></p>

<pre><code>app.get('/api/user/profile', function (request, response)<font></font>
{<font></font>
  // Create the default error container<font></font>
  var error = new Error();<font></font>
<font></font>
  var User = db.User;<font></font>
  User.find({<font></font>
    where: { emailAddress: request.user.username}<font></font>
  }).then(function(user)<font></font>
  {<font></font>
    if(!user)<font></font>
    {<font></font>
      error.status = 500; error.message = "ERROR_INVALID_USER"; error.code = 301;<font></font>
      return next(error);<font></font>
    }<font></font>
<font></font>
    // Build the profile from the user object<font></font>
    profile = {<font></font>
      "firstName": user.firstName,<font></font>
      "lastName": user.lastName,<font></font>
      "emailAddress": user.emailAddress<font></font>
    }<font></font>
    response.status(200).send(profile);<font></font>
  });<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用“查找”功能时，它将在启动服务器的控制台上显示select语句。 </font></font></p>

<pre><code>Executing (default): SELECT `id`, `firstName`, `lastName`, `emailAddress`, `password`, `passwordRecoveryToken`, `passwordRecoveryTokenExpire`, `createdAt`, `updatedAt` FROM `Users` AS `User` WHERE `User`.`emailAddress` = 'johndoe@doe.com' LIMIT 1;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法让它不显示？</font><font style="vertical-align: inherit;">我在某个地方的配置文件中设置的一些标志？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3339篇《阻止Sequelize在执行查询时将SQL输出到控制台？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱泡芙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过使用以下代码，我解决了很多问题。</font><font style="vertical-align: inherit;">问题是：-</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未连接数据库</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数据库连接拒绝问题</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">摆脱控制台中的日志（专用于此）。</font></font></li>
</ol>

<pre><code>const sequelize = new Sequelize("test", "root", "root", {<font></font>
  host: "127.0.0.1",<font></font>
  dialect: "mysql",<font></font>
  port: "8889",<font></font>
  connectionLimit: 10,<font></font>
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",<font></font>
  // It will disable logging<font></font>
  logging: false<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此讨论的基础上，我构建</font></font><code>config.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了完美的作品：</font></font></p>

<pre><code>{<font></font>
  "development": {<font></font>
    "username": "root",<font></font>
    "password": null,<font></font>
    "logging" : false,<font></font>
    "database": "posts_db_dev",<font></font>
    "host": "127.0.0.1",<font></font>
    "dialect": "mysql",<font></font>
    "operatorsAliases": false <font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有这些答案</font><font style="vertical-align: inherit;">在创建时</font><font style="vertical-align: inherit;">都将关闭</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">日志记录</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果我们需要关闭</font><font style="vertical-align: inherit;">运行时</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">日志</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">怎么办？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在运行时，我的意思是在</font></font><code>sequelize</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>new Sequelize(..</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能</font><font style="vertical-align: inherit;">初始化</font><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">之后</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我偷看了</font></font><a href="https://github.com/sequelize/sequelize/blob/edac3e9075f9daf70a9ae0681dd4a847db5cbc59/lib/sequelize.js#L240" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">github源代码</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，找到了一种关闭运行时日志记录的方法。</font></font></p>

<pre><code>// Somewhere your code, turn off the logging<font></font>
sequelize.options.logging = false<font></font>
<font></font>
// Somewhere your code, turn on the logging<font></font>
sequelize.options.logging = true <font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
