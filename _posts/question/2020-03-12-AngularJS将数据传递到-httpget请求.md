---
layout: question
title:  AngularJS将数据传递到$ http.get请求
date:   2020-03-12T03:27:49.000Z
description: 我有一个执行http POST请求的函数。该代码在下面指定。这很好。 $http({   url  user.update_path,    me...
img: 
author: 神无Green
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个执行http POST请求的函数。</font><font style="vertical-align: inherit;">该代码在下面指定。</font><font style="vertical-align: inherit;">这很好。</font></font></p>

<pre><code> $http({<font></font>
   url: user.update_path, <font></font>
   method: "POST",<font></font>
   data: {user_id: user.id, draft: true}<font></font>
 });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我为http GET提供了另一个功能，我想向该请求发送数据。</font><font style="vertical-align: inherit;">但是我没有那个选择。</font></font></p>

<pre><code> $http({<font></font>
   url: user.details_path, <font></font>
   method: "GET",<font></font>
   data: {user_id: user.id}<font></font>
 });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的语法</font></font><code>http.get</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取（URL，配置）</font></font></strong></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第941篇《AngularJS将数据传递到$ http.get请求》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小小神乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将参数直接传递给</font></font><code>$http.get()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下项目</font></font></p>

<pre><code>$http.get(user.details_path, {<font></font>
    params: { user_id: user.id }<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝小卤蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTTP GET请求不能包含要发布到服务器的数据。</font><font style="vertical-align: inherit;">但是，您可以将查询字符串添加到请求中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">angular.http为此提供了一个选项</font></font><code>params</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>$http({<font></font>
    url: user.details_path, <font></font>
    method: "GET",<font></font>
    params: {user_id: user.id}<font></font>
 });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅：</font></font><a href="http://docs.angularjs.org/api/ng.$http#get" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="http://docs.angularjs.org/api/ng.$http#get" rel="noreferrer"><font style="vertical-align: inherit;">//docs.angularjs.org/api/ng.$http#get</font></a><font style="vertical-align: inherit;">和</font></font><a href="https://docs.angularjs.org/api/ng/service/$http#usage" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://docs.angularjs.org/api/ng/service/$http#usage</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（显示</font></font><code>params</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数）</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
