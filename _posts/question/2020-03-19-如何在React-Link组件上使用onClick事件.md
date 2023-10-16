---
layout: question
title:  如何在React Link组件上使用onClick事件？
date:   2020-03-19T06:28:01.000Z
description: 我正在使用reactjs路由器中的Link组件，但无法使onClickevent运行。这是代码：<Link to={this.props.myrout...
img: 
author: 凯小哥
category: question
answer: 2
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用reactjs路由器中的Link组件，但无法使onClickevent运行。</font><font style="vertical-align: inherit;">这是代码：</font></font></p>

<pre><code>&lt;Link to={this.props.myroute} onClick='hello()'&gt;Here&lt;/Link&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是做这件事的方式还是另一种方式？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2391篇《如何在React Link组件上使用onClick事件？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光伽罗</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不认为这通常是一个好的模式。</font><font style="vertical-align: inherit;">链接将运行您的onClick事件，然后导航到该路线，因此导航到新路线会稍有延迟。</font><font style="vertical-align: inherit;">更好的策略是使用“ to”道具导航到新路线，并且在新组件的componentDidMount（）函数中可以触发hello函数或任何其他函数。</font><font style="vertical-align: inherit;">它会为您提供相同的结果，但路线之间的过渡会更加顺畅。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于上下文，我在使用链接上的onClick事件更新redux存储时注意到了这一点，这在安装新路由的组件之前导致〜.3秒的黑屏延迟。</font><font style="vertical-align: inherit;">没有涉及到api调用，所以我惊讶于延迟如此之大。</font><font style="vertical-align: inherit;">但是，如果您只是控制台记录“ hello”，则延迟可能不会很明显。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇老丝</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您</font></font><code>hello()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以字符串</font><font style="vertical-align: inherit;">形式传递</font><font style="vertical-align: inherit;">，也</font></font><code>hello()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意味着</font></font><code>hello</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">立即</font><font style="vertical-align: inherit;">执行</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font></p>

<pre><code>onClick={hello}
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
