---
layout: question
title:  React-Router：IndexRoute的目的是什么？
date:   2020-03-12T07:48:19.000Z
description: 我不明白使用IndexRoute和IndexLink的目的是什么。似乎在任何情况下，除非激活了About路径，否则下面的代码都会首先选择Home组件。...
img: 
author: Jim老丝梅
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不明白使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IndexRoute</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IndexLink</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的目的是什么</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">似乎在任何情况下，除非激活了About路径，否则下面的代码都会首先选择Home组件。</font></font></p>

<pre><code>&lt;Route path="/" component={App}&gt;<font></font>
  &lt;IndexRoute component={Home}/&gt;<font></font>
  &lt;Route path="about" component={About}/&gt;<font></font>
&lt;/Route&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与   </font></font></p>

<pre><code>&lt;Route path="/" component={App}&gt;<font></font>
  &lt;Route path="home" component={Home}/&gt;<font></font>
  &lt;Route path="about" component={About}/&gt;<font></font>
&lt;/Route&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一种情况的优点/目的是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1086篇《React-Router：IndexRoute的目的是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐ASam</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在最上面的示例中，to </font></font><code>/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将以</font></font><code>App</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">with </font></font><code>Home</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为子级进行</font><font style="vertical-align: inherit;">渲染</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在底部的例子，要</font></font><code>/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会使得</font></font><code>App</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">既不</font></font></em> <code>Home</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也不</font></font><code>About</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被渲染，因为无论他们的路径都不匹配。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于旧版本的React Router，可在相关版本的“ </font></font><a href="https://github.com/ReactTraining/react-router/blob/5e69b23a369b7dbcb9afc6cdca9bf2dcf07ad432/docs/guides/IndexRoutes.md" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">索引路由和索引链接”页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上获得更多信息</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">从4.0版本开始，React Router不再使用</font></font><code>IndexRoute</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">抽象来实现相同的目标。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
