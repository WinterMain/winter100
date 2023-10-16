---
layout: question
title:  如何使用ui-router中的ui-sref将参数传递给控制器
date:   2020-03-23T06:16:13.000Z
description: 我需要将两个参数传递并接收到要转换为使用ui-srefui-router的状态。例如使用下面的链接将状态转换为homewith foo和bar参数：...
img: 
author: 前端伽罗
category: question
answer: 1
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要将两个参数传递并接收到要转换为使用</font></font><code>ui-sref</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ui-router的状态。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如使用下面的链接将状态转换为</font></font><code>home</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">with </font></font><code>foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>bar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数：</font></font></p>

<pre><code>&lt;a ui-sref="home({foo: 'fooVal', bar: 'barVal'})"&gt;Go to home state with foo and bar parameters &lt;/a&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制器中的</font><font style="vertical-align: inherit;">接收</font></font><code>foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>bar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值：</font></font></p>

<pre><code>app.controller('SomeController', function($scope, $stateParam) {<font></font>
  //..<font></font>
  var foo = $stateParam.foo; //getting fooVal<font></font>
  var bar = $stateParam.bar; //getting barVal<font></font>
  //..<font></font>
});     <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我得到</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了</font></font><code>$stateParam</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在控制器中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人可以帮助我了解如何完成它吗？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong></p>

<pre><code>.state('home', {<font></font>
  url: '/',<font></font>
  views: {<font></font>
    '': {<font></font>
      templateUrl: 'home.html',<font></font>
      controller: 'MainRootCtrl'<font></font>
<font></font>
    },<font></font>
<font></font>
    'A@home': {<font></font>
      templateUrl: 'a.html',<font></font>
      controller: 'MainCtrl'<font></font>
    },<font></font>
<font></font>
    'B@home': {<font></font>
      templateUrl: 'b.html',<font></font>
      controller: 'SomeController'<font></font>
    }<font></font>
  }<font></font>
<font></font>
});<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2814篇《如何使用ui-router中的ui-sref将参数传递给控制器》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Jim斯丁</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只是拼写错误</font></font><code>$stateParam</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，应该是</font></font><code>$stateParams</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（带有s）。</font><font style="vertical-align: inherit;">这就是为什么您不确定的原因;）</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
