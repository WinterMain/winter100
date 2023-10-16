---
layout: question
title:  在CodeMash 2012的“ Wat”演讲中提到的这些怪异JavaScript行为的解释是什么？
date:   2020-03-11T03:26:56.000Z
description: CodeMash 2012的“ Wat”演讲基本上指出了Ruby和JavaScript的一些怪异之处。我在http //jsfiddle.net/fe...
img: 
author: Green猿古一
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><em><a href="https://www.destroyallsoftware.com/talks/wat"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CodeMash 2012</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><em><a href="https://www.destroyallsoftware.com/talks/wat"><font style="vertical-align: inherit;">“ Wat”演讲</font></a></em><font style="vertical-align: inherit;">基本上指出了Ruby和JavaScript的一些怪异之处。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在</font></font><a href="http://jsfiddle.net/fe479/9/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/fe479/9/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上对结果做了JSFiddle </font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面列出了特定于JavaScript的行为（因为我不了解Ruby）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在JSFiddle中发现我的某些结果与视频中的结果不符，我不确定为什么。</font><font style="vertical-align: inherit;">但是，我很想知道JavaScript在每种情况下如何处理幕后工作。</font></font></p>

<pre><code>Empty Array + Empty Array<font></font>
[] + []<font></font>
result:<font></font>
&lt;Empty String&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>+</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当与JavaScript中的数组一起使用时，</font><font style="vertical-align: inherit;">我对</font><font style="vertical-align: inherit;">运算符</font><font style="vertical-align: inherit;">非常好奇</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这与视频结果匹配。</font></font></p>

<pre><code>Empty Array + Object<font></font>
[] + {}<font></font>
result:<font></font>
[Object]<font></font>
</code></pre>

<p>This matches the video's result. What's going on here? Why is this an object. What does the <code>+</code> operator do?</p>

<pre><code>Object + Empty Array<font></font>
{} + []<font></font>
result<font></font>
[Object]<font></font>
</code></pre>

<p>This doesn't match the video. The video suggests that the result is 0, whereas I get [Object].</p>

<pre><code>Object + Object<font></font>
{} + {}<font></font>
result:<font></font>
[Object][Object]<font></font>
</code></pre>

<p>This doesn't match the video either, and how does outputting a variable result in two objects? Maybe my JSFiddle is wrong.</p>

<pre><code>Array(16).join("wat" - 1)<font></font>
result:<font></font>
NaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaN<font></font>
</code></pre>

<p>Doing wat + 1 results in <code>wat1wat1wat1wat1</code>...</p>

<p>I suspect this is just straightforward behaviour that trying to subtract a number from a string results in NaN.</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第597篇《在CodeMash 2012的“ Wat”演讲中提到的这些怪异JavaScript行为的解释是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim老丝达蒙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>I second @Ventero’s solution. If you want to, you can go into more detail as to how <code>+</code> converts its operands.</p>

<p><strong>First step (§9.1):</strong> convert both operands to primitives (primitive values are <code>undefined</code>, <code>null</code>, booleans, numbers, strings; all other values are objects, including arrays and functions). If an operand is already primitive, you are done. If not, it is an object <code>obj</code> and the following steps are performed:</p>

<ol>
<li>Call <code>obj.valueOf()</code>. If it returns a primitive, you are done. Direct instances of <code>Object</code> and arrays return themselves, so you are not done yet.</li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">致电</font></font><code>obj.toString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果返回原语，则操作完成。</font></font><code>{}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>[]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都返回一个字符串，所以您完成了。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则，抛出一个</font></font><code>TypeError</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于日期，将交换步骤1和2。</font><font style="vertical-align: inherit;">您可以观察到转换行为，如下所示：</font></font></p>

<pre><code>var obj = {<font></font>
    valueOf: function () {<font></font>
        console.log("valueOf");<font></font>
        return {}; // not a primitive<font></font>
    },<font></font>
    toString: function () {<font></font>
        console.log("toString");<font></font>
        return {}; // not a primitive<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">交互（</font></font><code>Number()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先转换为原始，然后转换为数字）：</font></font></p>

<pre><code>&gt; Number(obj)<font></font>
valueOf<font></font>
toString<font></font>
TypeError: Cannot convert object to primitive value<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二步（第11.6.1节）：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果一个操作数是一个字符串，则另一个操作数也将转换为字符串，并通过串联两个字符串来产生结果。</font><font style="vertical-align: inherit;">否则，两个操作数都将转换为数字，并通过将它们相加来产生结果。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转换过程的详细说明：“ </font></font><a href="http://www.2ality.com/2012/01/object-plus-object.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中的{} + {}是什么？</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">”</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
