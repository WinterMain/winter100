---
layout: question
title:  如何获取react-router v4的历史记录？
date:   2020-03-12T09:04:57.000Z
description: 我从React-Router v3迁移到v4时遇到一些小问题。在v3中，我可以在任何地方执行此操作：import { browserHistory }...
img: 
author: A梅
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我从React-Router v3迁移到v4时遇到一些小问题。</font><font style="vertical-align: inherit;">在v3中，我可以在任何地方执行此操作：</font></font></p>

<pre><code>import { browserHistory } from 'react-router';<font></font>
browserHistory.push('/some/path');<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在v4中实现这一目标。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道</font></font><code>withRouter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您在Component中时，</font><font style="vertical-align: inherit;">可以使用hoc </font><font style="vertical-align: inherit;">，react上下文或事件路由器props。</font><font style="vertical-align: inherit;">但对我而言并非如此。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在寻找</font><font style="vertical-align: inherit;">v4中</font><font style="vertical-align: inherit;">的</font></font><a href="https://github.com/ReactTraining/react-router/blob/ab4552d2ea0ec5c0cf3c534bca654a1af3ea0dec/docs/guides/NavigatingOutsideOfComponents.md" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NavigatingOutsideOfComponents</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的等效项</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1175篇《如何获取react-router v4的历史记录？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在的特定情况下</font></font><code>react-router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，使用</font></font><a href="https://facebook.github.io/react/docs/context.html" rel="nofollow noreferrer"><code>context</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是有效的案例方案，例如</font></font></p>

<pre><code>class MyComponent extends React.Component {<font></font>
  props: PropsType;<font></font>
<font></font>
  static contextTypes = {<font></font>
    router: PropTypes.object<font></font>
  };<font></font>
<font></font>
  render () {<font></font>
    this.context.router;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过路由器上下文访问历史记录的实例，例如</font></font><code>this.context.router.history</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
