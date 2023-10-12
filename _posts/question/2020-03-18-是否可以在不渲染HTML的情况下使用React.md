---
layout: question
title:  是否可以在不渲染HTML的情况下使用React？
date:   2020-03-18T09:12:00.000Z
description: 我想知道是否有可能使用React进行逻辑并将数据发送回javascript函数，而无需呈现任何html。我正在考虑的组件是将一些数据传递到的组件，它将把数...
img: 
author: Tom凯
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道是否有可能使用React进行逻辑并将数据发送回javascript函数，而无需呈现任何html。</font><font style="vertical-align: inherit;">我正在考虑的组件是将一些数据传递到的组件，它将把数据发送回React之外的javascript函数。</font><font style="vertical-align: inherit;">我知道这是可以做到的，而我本人已经完成了这一部分，但是我不确定如果不呈现所需的HTML，您将如何做到这一点。</font><font style="vertical-align: inherit;">这甚至是反应的实际用例吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2104篇《是否可以在不渲染HTML的情况下使用React？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神无Pro</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是为了澄清Benno的评论。</font><font style="vertical-align: inherit;">该</font></font><a href="http://facebook.github.io/react/docs/component-specs.html#render" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ReactComponent.render方法文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以返回</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示您不希望呈现任何内容。</font><font style="vertical-align: inherit;">在幕后，React渲染了一个</font></font><code>&lt;noscript&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签以与我们当前的差异算法一起工作。</font><font style="vertical-align: inherit;">返回</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或时</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>this.getDOMNode()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将返回</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote></div>
        </div></div>
    {% endraw %}
  </div>
<div>
