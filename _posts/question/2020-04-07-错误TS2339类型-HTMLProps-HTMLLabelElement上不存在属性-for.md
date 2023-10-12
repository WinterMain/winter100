---
layout: question
title:  错误TS2339：类型“ HTMLProps <HTMLLabelElement>”上不存在属性“ for”
date:   2020-04-07T03:12:57.000Z
description: 使用TypeScript，并对带有明确键入类型定义的TSX文件做出反应，我得到了以下错误：error TS2339  Property 'for' does not...
img: 
author: 樱
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用TypeScript，并对带有明确键入类型定义的TSX文件做出反应，我得到了以下错误：</font></font></p>

<pre><code>error TS2339: Property 'for' does not exist on type 'HTMLProps&lt;HTMLLabelElement&gt;'.
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试使用以下TSX编译组件时 </font></font></p>

<pre><code>&lt;label for={this.props.inputId} className="input-label"&gt;{this.props.label}&lt;/label&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经解决了，但是在这里添加了下一个人，因为该解决方案在搜索时未显示在任何地方（Google或StackOverflow）</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4041篇《错误TS2339：类型“ HTMLProps <HTMLLabelElement>”上不存在属性“ for”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙西里路易</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案是将</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">更改</font><font style="vertical-align: inherit;">为</font></font><code>htmlFor</code></p>

<pre><code>&lt;label htmlFor={this.props.inputId} className="input-label"&gt;{this.props.label}&lt;/label&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是React库本身的一部分，显然</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像它一样</font><font style="vertical-align: inherit;">处理</font><font style="vertical-align: inherit;">不同</font></font><code>class</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（它使用</font></font><code>className</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），而不是肯定类型类型定义的问题。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
