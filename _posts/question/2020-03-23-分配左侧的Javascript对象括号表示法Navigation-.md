---
layout: question
title:  分配左侧的Javascript对象括号表示法（{Navigation} =）
date:   2020-03-23T02:46:52.000Z
description: 我以前没有看过这种语法，并且想知道它的全部含义。 var { Navigation } = require('react-router');左侧...
img: 
author: GO
category: question
answer: 2
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我以前没有看过这种语法，并且想知道它的全部含义。 </font></font></p>

<pre><code>var { Navigation } = require('react-router');
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">左侧的括号引发语法错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意外的标记 {</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不确定webpack配置的哪个部分正在转换或语法的目的是什么。</font><font style="vertical-align: inherit;">这是和谐的事情吗？</font><font style="vertical-align: inherit;">有人可以启发我吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2682篇《分配左侧的Javascript对象括号表示法（{Navigation} =）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">破坏性的任务</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这是ECMAScript 2015的新功能。</font></font></p>

<pre><code>var {<font></font>
  AppRegistry,<font></font>
  StyleSheet,<font></font>
  Text,<font></font>
  View,<font></font>
} = React;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等效于：</font></font></p>

<pre><code>var AppRegistry = React.AppRegistry;<font></font>
var StyleSheet = React.StyleSheet;<font></font>
var Text = React.Text;<font></font>
var View = React.View;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这称为</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解构分配</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它是</font></font><a href="http://www.ecma-international.org/ecma-262/6.0/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES2015标准</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的一部分</font><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">析构分配语法是一个JavaScript表达式，它可以使用与数组和对象文字的构造类似的语法从数组或对象中提取数据。</font></font></p>
  
  <p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料来源：</font></font></em> <em><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于MDN的销毁分配参考</font></font></a></em></p>
</blockquote>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象解构</font></font></h1>

<pre><code> var o = {p: 42, q: true};<font></font>
 var {p, q} = o;<font></font>
<font></font>
 console.log(p); // 42<font></font>
 console.log(q); // true <font></font>
<font></font>
 // Assign new variable names<font></font>
 var {p: foo, q: bar} = o;<font></font>
<font></font>
 console.log(foo); // 42<font></font>
 console.log(bar); // true<font></font>
</code></pre>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阵列解构</font></font></h1>

<pre><code>var foo = ["one", "two", "three"];<font></font>
<font></font>
// without destructuring<font></font>
var one   = foo[0];<font></font>
var two   = foo[1];<font></font>
var three = foo[2];<font></font>
<font></font>
// with destructuring<font></font>
var [one, two, three] = foo;<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
