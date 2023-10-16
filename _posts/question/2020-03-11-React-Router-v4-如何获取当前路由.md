---
layout: question
title:  React Router v4-如何获取当前路由？
date:   2020-03-11T06:48:07.000Z
description: 我想显示title在<AppBar />以某种方式从目前的路线通过。在React Router v4中，如何将<AppBar />当前路由传递到tit...
img: 
author: 小卤蛋小卤蛋小哥
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想显示</font></font><code>title</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>&lt;AppBar /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以某种方式从目前的路线通过。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在React Router v4中，如何将</font></font><code>&lt;AppBar /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前路由传递到</font></font><code>title</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prop中？</font></font></p>

<pre><code>  &lt;Router basename='/app'&gt;<font></font>
    &lt;main&gt;<font></font>
      &lt;Menu active={menu} close={this.closeMenu} /&gt;<font></font>
      &lt;Overlay active={menu} onClick={this.closeMenu} /&gt;<font></font>
      &lt;AppBar handleMenuIcon={this.handleMenuIcon} title='Test' /&gt;<font></font>
      &lt;Route path='/customers' component={Customers} /&gt;<font></font>
    &lt;/main&gt;<font></font>
  &lt;/Router&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法通过从自定义自定义标题</font></font><code>prop</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上</font></font><code>&lt;Route /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第697篇《React Router v4-如何获取当前路由？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是使用</font><a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/history.md" rel="noreferrer"><font style="vertical-align: inherit;">更多信息</font></a><font style="vertical-align: inherit;">的解决方案</font></font><code>history</code> <a href="https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/history.md" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<pre><code>import { createBrowserHistory } from "history";<font></font>
<font></font>
const history = createBrowserHistory()<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路由器内部</font></font></p>

<pre><code>&lt;Router&gt;<font></font>
   {history.location.pathname}<font></font>
&lt;/Router&gt;<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
