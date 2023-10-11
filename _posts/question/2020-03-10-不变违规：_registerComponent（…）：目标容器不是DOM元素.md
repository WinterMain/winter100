---
layout: question
title:  不变违规：_registerComponent（…）：目标容器不是DOM元素
date:   2020-03-09T17:03:02.000Z
description: 在制作平凡的React示例页面后，出现此错误：  未捕获的错误：始终违反：_registerComponent（...）：目标容器不是DOM元素。...
img: 
author: 小小
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在制作平凡的React示例页面后，出现此错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未捕获的错误：始终违反：_registerComponent（...）：目标容器不是DOM元素。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的代码：</font></font></p>

<pre><code>/** @jsx React.DOM */<font></font>
'use strict';<font></font>
<font></font>
var React = require('react');<font></font>
<font></font>
var App = React.createClass({<font></font>
  render() {<font></font>
    return &lt;h1&gt;Yo&lt;/h1&gt;;<font></font>
  }<font></font>
});<font></font>
<font></font>
React.renderComponent(&lt;App /&gt;, document.body);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></p>

<pre><code>&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
  &lt;script src="/bundle.js"&gt;&lt;/script&gt;<font></font>
&lt;/head&gt;<font></font>
&lt;body&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是什么意思？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第392篇《不变违规：_registerComponent（…）：目标容器不是DOM元素》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyTony</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到类似/相同的错误消息。</font><font style="vertical-align: inherit;">就我而言，我没有用于定义ReactJS组件的目标DOM节点。</font><font style="vertical-align: inherit;">确保使用适当的“ id”或“ name”以及其他HTML属性（适合您的设计需求）很好地定义了HTML目标节点。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于使用ReactJS.Net并在发布后出现此错误的用户：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查.jsx文件的属性，并确保</font></font><code>Build Action</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其设置为</font></font><code>Content</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">设置为的那些</font></font><code>None</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将不会被发布。</font><font style="vertical-align: inherit;">我从</font></font><a href="https://stackoverflow.com/a/38002636/5793033"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个SO答案中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">得到了这个解决方案</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Stafan</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以我为例，此错误是由热重载引起的，同时引入了新类。</font><font style="vertical-align: inherit;">在项目的那个阶段，请使用普通的观察者来编译您的代码。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天古一</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="http://learn.jquery.com/using-jquery-core/document-ready/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">准备功能</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以使用这样的：</font></font></p>

<pre><code>$(document).ready(function () {<font></font>
  React.render(&lt;App /&gt;, document.body);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想使用jQuery，可以使用以下</font></font><code>onload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数：</font></font></p>

<pre><code>&lt;body onload="initReact()"&gt;...&lt;/body&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomGreen</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是一个疯狂的猜测，如何向index.html添加以下内容：            </font></font></p>

<pre><code>type="javascript"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样：</font></font></p>

<pre><code>&lt;script type="javascript" src="public/bundle.js"&gt; &lt;/script&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，它奏效了！</font><font style="vertical-align: inherit;">:-)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上您所做的是正确的，除了您忘记了JavaScript在许多情况下是同步的，因此</font><font style="vertical-align: inherit;">在加载</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOM</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前运行代码</font><font style="vertical-align: inherit;">，有几种方法可以解决此问题：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）检查</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOM是否已</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全加载，然后执行所需的任何操作</font><font style="vertical-align: inherit;">，例如</font><font style="vertical-align: inherit;">，您可以收听</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOMContentLoaded</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;script&gt;<font></font>
  document.addEventListener("DOMContentLoaded", function(event) {<font></font>
    console.log("DOM fully loaded and parsed");<font></font>
  });<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）非常常见的方法是将script标签添加到您的底部</font></font><code>document</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在body标签之后）：</font></font></p>

<pre><code>&lt;html&gt;<font></font>
  &lt;head&gt;<font></font>
  &lt;/head&gt;<font></font>
  &lt;body&gt;<font></font>
  &lt;/body&gt;<font></font>
  &lt;script src="/bundle.js"&gt;&lt;/script&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3）使用</font></font><code>window.onload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，当整个页面加载时会被触发（img等）</font></font></p>

<pre><code>window.addEventListener("load", function() {<font></font>
  console.log("Everything is loaded");<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4）使用</font></font><code>document.onload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，当</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOM</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">准备就绪</font><font style="vertical-align: inherit;">时会触发</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>document.addEventListener("load", function() {<font></font>
  console.log("DOM is ready");<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有更多选项可以检查</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOM</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否准备就绪，但是简单的答案是</font><font style="vertical-align: inherit;">在确保</font><font style="vertical-align: inherit;">在每种情况下</font><strong><font style="vertical-align: inherit;">DOM准备就绪</font></strong><font style="vertical-align: inherit;">之前都</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行任何脚本</font><font style="vertical-align: inherit;">...</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript正在与</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DOM</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">一起使用</font><font style="vertical-align: inherit;">，如果它们不可用，则将返回</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">null</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可能会破坏整个应用程序...因此，请始终确保在运行JavaScript之前已准备就绪...</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
