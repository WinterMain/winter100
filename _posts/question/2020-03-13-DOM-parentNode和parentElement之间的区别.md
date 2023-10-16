---
layout: question
title:  DOM parentNode和parentElement之间的区别
date:   2020-03-13T07:22:43.000Z
description: 有人可以用尽可能简单的方式解释我吗，经典DOM parentNode和Firefox 9 parentElement中新引入的有什么区别？...
img: 
author: 蛋蛋樱
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人可以用尽可能简单的方式解释我吗，经典DOM </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">parentNode</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和Firefox 9 </font><a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement" rel="noreferrer"><font style="vertical-align: inherit;">parentElement中</font></a><font style="vertical-align: inherit;">新引入的有</font><font style="vertical-align: inherit;">什么区别？</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1374篇《DOM parentNode和parentElement之间的区别》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YLD</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Internet Explorer中，</font></font><code>parentElement</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未定义SVG元素，而已</font></font><code>parentNode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY小卤蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有一个区别，但仅在Internet Explorer中。</font><font style="vertical-align: inherit;">当您混合使用HTML和SVG时会发生这种情况。</font><font style="vertical-align: inherit;">如果父级是这两个的“其他”，则.parentNode给出父级，而.parentElement给出未定义。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyJinJin泡芙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>parentElement</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是Firefox 9和DOM4的新功能，但是它已经存在于所有其他主流浏览器中已有很长时间了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在大多数情况下，它与相同</font></font><code>parentNode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">唯一的区别是节点</font></font><code>parentNode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是元素时。</font><font style="vertical-align: inherit;">如果是，</font></font><code>parentElement</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则为</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">举个例子：</font></font></p>

<pre><code>document.body.parentNode; // the &lt;html&gt; element<font></font>
document.body.parentElement; // the &lt;html&gt; element<font></font>
<font></font>
document.documentElement.parentNode; // the document node<font></font>
document.documentElement.parentElement; // null<font></font>
<font></font>
(document.documentElement.parentNode === document);  // true<font></font>
(document.documentElement.parentElement === document);  // false<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于</font></font><code>&lt;html&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">element（</font></font><code>document.documentElement</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）没有作为元素的父元素，因此</font></font><code>parentElement</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">is </font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（还有其他可能性较小的情况</font></font><code>parentElement</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能是</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但您可能永远都不会遇到它们。）</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
