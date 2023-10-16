---
layout: question
title:  如何检查JavaScript中的数字是否为NaN？
date:   2020-03-30T09:07:27.000Z
description: I’ve only been trying it in Firefox’s JavaScript console, but neither of the ...
img: 
author: Tom凯
category: question
answer: 7
tags: JavaScript KoaJS
topic: KoaJS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>I’ve only been trying it in Firefox’s JavaScript console, but neither of the following statements return true:</p>

<pre><code>parseFloat('geoff') == NaN;<font></font>
<font></font>
parseFloat('geoff') == Number.NaN;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3828篇《如何检查JavaScript中的数字是否为NaN？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据IEEE 754，除！=之外，所有涉及NaN的关系都评估为false。</font><font style="vertical-align: inherit;">因此，例如，如果A或B或两者均为NaN，则（A&gt; = B）=假，（A &lt;= B）=假。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎开箱即用的Node.js不支持isNaN（）。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我与  </font></font></p>

<pre><code>var value = 1;<font></font>
if (parseFloat(stringValue)+"" !== "NaN") value = parseFloat(stringValue);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><pre><code>NaN === NaN;        // false<font></font>
Number.NaN === NaN; // false<font></font>
isNaN(NaN);         // true<font></font>
isNaN(Number.NaN);  // true<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相等运算符（==和===）不能用于针对NaN测试值。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla文档</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。全局NaN属性是一个表示Not-A-Numbe的值</font></font></strong></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的方法是使用内置函数“ isNaN（）”来检查NaN。</font><font style="vertical-align: inherit;">所有浏览器都支持该方式。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font></font><a href="http://documentcloud.github.com/underscore/#isNaN" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下划线</font></font><code>isNaN</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能，因为在JavaScript中：</font></font></p>

<pre><code>isNaN(undefined) <font></font>
-&gt; true<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至少要注意该陷阱。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中的NaN代表“不是数字”，尽管其类型实际上是数字。</font></font></p>

<pre><code>typeof(NaN) // "number"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要检查变量的值为NaN，我们不能简单地使用isNaN（）函数，因为isNaN（）存在以下问题，请参见下文：</font></font></p>

<pre><code>var myVar = "A";<font></font>
isNaN(myVar) // true, although "A" is not really of value NaN<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">真正发生的是myVar被隐式强制为数字：</font></font></p>

<pre><code>var myVar = "A";<font></font>
isNaN(Number(myVar)) // true. Number(myVar) is NaN here in fact<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这实际上是有道理的，因为“ A”实际上不是数字。</font><font style="vertical-align: inherit;">但是，我们真正要检查的是myVar是否完全值NaN。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以isNaN（）无济于事。</font><font style="vertical-align: inherit;">那我们该怎么办呢？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">鉴于NaN是唯一一个与自身不相等的JavaScript值，因此我们可以使用！==检查其与自己的相等性。</font></font></p>

<pre><code>var myVar; // undefined<font></font>
myVar !== myVar // false<font></font>
<font></font>
var myVar = "A";<font></font>
myVar !== myVar // false<font></font>
<font></font>
var myVar = NaN<font></font>
myVar !== myVar // true<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此可以得出结论</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果确实是一个变量！==本身，则该变量的确切值是NaN：</font></font></p>

<pre><code>function isOfValueNaN(v) {<font></font>
    return v !== v;<font></font>
}<font></font>
<font></font>
var myVar = "A";<font></font>
isNaN(myVar); // true<font></font>
isOfValueNaN(myVar); // false<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅小卤蛋</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚在</font></font><a href="https://rads.stackoverflow.com/amzn/click/com/0321812182" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有效JavaScript</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一书中遇到了这种技术</font><font style="vertical-align: inherit;">，它很简单：</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于NaN是唯一被视为与自己不相等的JavaScript值，因此您始终可以通过检查其与自己的相等性来测试该值是否为NaN：</font></font></em></p>

<pre><code>var a = NaN;<font></font>
a !== a; // true <font></font>
<font></font>
var b = "foo";<font></font>
b !== b; // false <font></font>
<font></font>
var c = undefined; <font></font>
c !== c; // false<font></font>
<font></font>
var d = {};<font></font>
d !== d; // false<font></font>
<font></font>
var e = { valueOf: "foo" }; <font></font>
e !== e; // false<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直到@allsyed发表评论才意识到这一点，但这在ECMA规范中：</font><a href="https://tc39.github.io/ecma262/#sec-isnan-number" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> ://tc39.github.io/ecma262/#sec-isnan-number</font></font><a href="https://tc39.github.io/ecma262/#sec-isnan-number" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">试试这个代码：</font></font></p>

<pre><code>isNaN(parseFloat("geoff"))
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要检查是否</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数值而不是数字而不是数字NaN，请参见此处：</font></font><a href="https://stackoverflow.com/questions/30314447/how-do-you-test-for-nan-in-javascript"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在Javascript中测试NaN？</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
