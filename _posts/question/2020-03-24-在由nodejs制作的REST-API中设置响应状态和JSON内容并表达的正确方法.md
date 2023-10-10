---
layout: question
title:  在由nodejs制作的REST API中设置响应状态和JSON内容并表达的正确方法
date:   2020-03-24T06:05:37.000Z
description: 我正在玩Nodejs，并通过构建一个小的Rest API来表达。我的问题是，设置代码状态以及响应数据的最佳实践/最佳方法是什么？让我用一些代码来解释（...
img: 
author: 小胖
category: question
answer: 0
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在玩Nodejs，并通过构建一个小的Rest API来表达。</font><font style="vertical-align: inherit;">我的问题是，设置代码状态以及响应数据的最佳实践/最佳方法是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我用一些代码来解释（我不会放置节点并表达启动服务器所需的代码，而只是涉及的路由器方法）：</font></font></p>

<pre><code>router.get('/users/:id', function(req, res, next) {<font></font>
  var user = users.getUserById(req.params.id);<font></font>
  res.json(user);<font></font>
});<font></font>
<font></font>
<font></font>
exports.getUserById = function(id) {<font></font>
  for (var i = 0; i &lt; users.length; i++) {<font></font>
    if (users[i].id == id) return users[i];<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面的代码运行完美，当与Postman发送请求时，我得到以下结果：
</font></font><img src="https://www.samyoc.com//uploads/users/24019/images/thumbnails/1585029808577.png" data-src="https://www.samyoc.com//uploads/users/24019/images/1585029808577.png" alt="在此处输入图片说明"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您所见，状态显示为200，这是确定的。</font><font style="vertical-align: inherit;">但这是最好的方法吗？</font><font style="vertical-align: inherit;">是否需要我自己设置状态以及返回的JSON？</font><font style="vertical-align: inherit;">还是总是由快递处理？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，我只是做了一个快速测试，并略微修改了上面的get方法：</font></font></p>

<pre><code>router.get('/users/:id', function(req, res, next) {<font></font>
  var user = users.getUserById(req.params.id);<font></font>
  if (user == null || user == 'undefined') {<font></font>
    res.status(404);<font></font>
  }<font></font>
  res.json(user);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您所见，如果在数组中未找到该用户，则将状态设置为404。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常欢迎了解有关此主题的资源/建议。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
