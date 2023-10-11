---
layout: question
title:  如何通过使用map和join来渲染React组件
date:   2020-03-12T12:16:39.000Z
description: 我有一个要显示字符串数组的组件。代码看起来像这样。React.createClass({  render() {     <div>      ...
img: 
author: 神奇神无
category: question
answer: 2
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个要显示字符串数组的组件。</font><font style="vertical-align: inherit;">代码看起来像这样。</font></font></p>

<pre><code>React.createClass({<font></font>
  render() {<font></font>
     &lt;div&gt;<font></font>
        this.props.data.map(t =&gt; &lt;span&gt;t&lt;/span&gt;)<font></font>
     &lt;/div&gt;<font></font>
  }<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行正常。</font><font style="vertical-align: inherit;">例如，如果</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">props.data = ['tom'，'jason'，'chris']</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   页面中的渲染结果将为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">tomjasonchris</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我想使用逗号连接所有名称，因此我将代码更改为</font></font></p>

<pre><code>this.props.data.map(t =&gt; &lt;span&gt;t&lt;/span&gt;).join(', ')
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，渲染的结果是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[Object]，[Object]，[Object]。</font></font></em> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道如何解释对象成为要渲染的反应组件。</font><font style="vertical-align: inherit;">有什么建议吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1303篇《如何通过使用map和join来渲染React组件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamGreen</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用嵌套数组将“，”保留在外面。</font></font></p>

<pre><code>  &lt;div&gt;<font></font>
      {this.props.data.map((element, index) =&gt; index == this.props.data.length - 1 ? &lt;span key={index}&gt;{element}&lt;/span&gt; : [&lt;span key={index}&gt;{element}&lt;/span&gt;, ", "])}<font></font>
  &lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过将数据保存到数组并修改最后一个元素而不是始终检查其最后一个元素来对其进行优化。</font></font></p>

<pre><code>  let processedData = this.props.data.map((element, index) =&gt; [&lt;span key={index}&gt;{element}&lt;/span&gt;, ", "])<font></font>
  processedData [this.props.data.length - 1].pop()<font></font>
  &lt;div&gt;<font></font>
      {processedData}<font></font>
  &lt;/div&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接受的答案实际上返回一个数组数组，因为</font></font><code>prev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次都会是一个数组。</font><font style="vertical-align: inherit;">React足够聪明，可以完成这项工作，但是将来很容易引起问题，例如在为每个映射结果提供键时会破坏Reacts差异算法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这项新</font></font><code>React.Fragment</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能使我们能够以一种易于理解的方式执行此操作，而不会出现潜在的问题。</font></font></p>

<pre><code>class List extends React.Component {<font></font>
  render() {<font></font>
     &lt;div&gt;<font></font>
        {this.props.data<font></font>
          .map((t, index) =&gt; <font></font>
            &lt;React.Fragment key={index}&gt;<font></font>
              &lt;span&gt; {t}&lt;/span&gt; ,<font></font>
            &lt;/React.Fragment&gt;<font></font>
          )<font></font>
      &lt;/div&gt;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font></font><code>React.Fragment</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以简单地将分隔符放置在</font></font><code>,</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回的HTML之外，React不会抱怨。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
