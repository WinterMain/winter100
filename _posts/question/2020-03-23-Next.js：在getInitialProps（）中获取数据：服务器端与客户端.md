---
layout: question
title:  Next.js：在getInitialProps（）中获取数据：服务器端与客户端
date:   2020-03-23T01:45:32.000Z
description: 我正在使用Next.js，并且我有一个使用Express的自定义服务器。我有一个页面，需要数据库中的一些数据。getInitialProps()，在服...
img: 
author: 伽罗理查德
category: question
answer: 4
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Next.js，并且我有一个使用Express的自定义服务器。</font><font style="vertical-align: inherit;">我有一个页面，需要数据库中的一些数据。</font></font></p>

<p><code>getInitialProps()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，在服务器上运行时，只需从数据库中获取数据并返回，就不会有任何问题。</font><font style="vertical-align: inherit;">但是，</font></font><code>getInitialProps()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以在客户端运行（当用户最初请求另一个页面，然后导航到该页面时）。</font><font style="vertical-align: inherit;">在那种情况下，由于我是在客户端，所以我显然不能只从数据库中获取数据-我必须使用AJAX与服务器通信并要求它为我检索。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，这也意味着我已经在服务器上定义了新的Express路由来处理此请求，该路由将包含与的服务器端部分完全相同的代码</font></font><code>getInitialProps()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是非常不希望的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理此问题的最佳方法是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2616篇《Next.js：在getInitialProps（）中获取数据：服务器端与客户端》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Harry</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于似乎没有好的解决方案，因此我创建并发布了一个库来为该问题提供简单而优雅的解决方案：</font></font><a href="https://github.com/shdnx/next-express" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">next-express</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使API与您的next.js应用程序不同。</font><font style="vertical-align: inherit;">将下一个应用程序视为恰巧在服务器上呈现页面的前端客户端</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您中，</font></font><code>getInitialProps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该向一个新的快速路由发出一个http请求，该请求具有从数据库中获取逻辑。</font><font style="vertical-align: inherit;">该逻辑永远不应存在于UI层中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，无论您是在客户端还是在服务器上，都应调用此路由-无需执行任何代码分支。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><code>getInitialProps()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 总是接收请求和响应作为仅在服务器上设置的参数：</font></font></p>

<pre><code>static async getInitialProps({req}){<font></font>
 if(req){<font></font>
   // called on server<font></font>
 } else {<font></font>
   // called on client<font></font>
 }<font></font>
}<font></font>
</code></pre>

<p><a href="https://github.com/zeit/next.js#fetching-data-and-component-lifecycle" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/zeit/next.js#fetching-data-and-component-lifecycle</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
