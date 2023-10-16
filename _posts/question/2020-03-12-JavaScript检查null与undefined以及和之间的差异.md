---
layout: question
title:  JavaScript检查null与undefined以及==和===之间的差异
date:   2020-03-12T04:34:04.000Z
description: 如何检查一个变量，如果是null或undefined，是什么之间的差异null和undefined？==和之间有什么区别===（很难在Google上搜...
img: 
author: Jim理查德泡芙
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何检查一个变量，如果是</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，是什么之间的差异</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></li>
<li><p><font style="vertical-align: inherit;"></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">之间有什么区别</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（很难在Google上搜索“ ===”）？</font></font></p></li>
</ol></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第943篇《JavaScript检查null与undefined以及==和===之间的差异》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯斯丁</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试不同的逻辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以使用下面的代码检查所有四（4）条条件以进行验证，例如not null，not blank，not undefined和not zero，仅在javascript和jquery中使用此代码（！（！（variable）））。</font></font></p>

<pre><code>function myFunction() {<font></font>
var data;  //The Values can be like as null, blank, undefined, zero you can test<font></font>
<font></font>
if(!(!(data)))<font></font>
{<font></font>
   //If data has valid value<font></font>
    alert("data "+data);<font></font>
} <font></font>
else <font></font>
{<font></font>
    //If data has null, blank, undefined, zero etc.<font></font>
    alert("data is "+data);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">}</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGO西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">区别是微妙的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中，</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量是从未声明或从未分配值的变量。</font><font style="vertical-align: inherit;">假设您声明</font></font><code>var a;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了一个实例，那么</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将为</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为它从未分配任何值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果您随后分配，</font></font><code>a = null;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在将为</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在JavaScript中，</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个对象（</font></font><code>typeof null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不相信我，请在JavaScript控制台中</font><font style="vertical-align: inherit;">尝试</font><font style="vertical-align: inherit;">），这意味着null是一个值（实际上甚至</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个值）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>var a;<font></font>
typeof a;     # =&gt; "undefined"<font></font>
<font></font>
a = null;<font></font>
typeof null;  # =&gt; "object"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这在函数参数中可能很有用。</font><font style="vertical-align: inherit;">您可能需要一个默认值，但认为null是可以接受的。</font><font style="vertical-align: inherit;">在这种情况下，您可以执行以下操作：</font></font></p>

<pre><code>function doSomething(first, second, optional) {<font></font>
    if (typeof optional === "undefined") {<font></font>
        optional = "three";<font></font>
    }<font></font>
    // do something<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您省略</font></font><code>optional</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数，则</font></font><code>doSomething(1, 2) then</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">optional将是</font></font><code>"three"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符串，但是如果您通过，</font></font><code>doSomething(1, 2, null)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则optional将是</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于相等</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和严格相等的</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比较器，第一个是弱类型，而严格相等也检查值的类型。</font><font style="vertical-align: inherit;">这意味着</font></font><code>0 == "0"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将返回true；</font><font style="vertical-align: inherit;">while </font></font><code>0 === "0"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将返回false，因为数字不是字符串。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用这些运营商之间要检查</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>null === null            # =&gt; true<font></font>
undefined === undefined  # =&gt; true<font></font>
undefined === null       # =&gt; false<font></font>
undefined == null        # =&gt; true<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后一种情况很有趣，因为它允许您检查变量是未定义的还是null，而没有其他任何东西：</font></font></p>

<pre><code>function test(val) {<font></font>
    return val == null;<font></font>
}<font></font>
test(null);       # =&gt; true<font></font>
test(undefined);  # =&gt; true<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三老丝</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果（逻辑）检查是否为负号（！），并且您希望同时捕获JS </font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  （因为不同的浏览器将为您提供不同的结果），则可以使用限制性较小的比较：例如：</font></font></p>

<pre><code>var ItemID = Item.get_id();<font></font>
if (ItemID != null)<font></font>
{<font></font>
 //do stuff<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将同时捕获</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>undefined</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><a href="http://www.ecma-international.org/publications/standards/Ecma-262.htm" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规范</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是为这些问题提供完整答案的地方。</font><font style="vertical-align: inherit;">总结如下：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于变量</font></font><code>x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以：</font></font><br>
<br>

<ul>
<li><font style="vertical-align: inherit;"></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过使用进行直接比较来</font><font style="vertical-align: inherit;">检查是否</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例：</font></font><code>x === null</code></li>
<li><font style="vertical-align: inherit;"></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过以下两种基本方法之一</font><font style="vertical-align: inherit;">检查它</font><font style="vertical-align: inherit;">：与</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">直接比较</font></font><code>typeof</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">由于</font></font><a href="https://stackoverflow.com/a/4726198/96100"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">种种原因</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我更喜欢</font></font><code>typeof x === "undefined"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查它是否是其中之一，</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过使用</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和依赖略为神秘的强制类型来强制</font></font><code>x == null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行您想要的操作。</font></font><br>
<br></li>
</ul></li>
<li><font style="vertical-align: inherit;"></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">之间的基本区别</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是，如果操作数是不同类型，</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则将始终返回，</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">导致某些稍微不直观的行为的</font></font><a href="http://ecma-international.org/ecma-262/5.1/#sec-11.9.3" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规则</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会将一个或两个操作数转换为相同类型</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果操作数具有相同的类型（例如，两个都是字符串，例如</font></font><code>typeof</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">比较），</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们的行为将完全相同。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多阅读：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安格斯·克罗尔的</font></font><a href="http://javascriptweblog.wordpress.com/2011/02/07/truth-equality-and-javascript/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">真相，平等和JavaScript</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Andrea Giammarchi的</font></font><a href="http://webreflection.blogspot.co.uk/2010/10/javascript-coercion-demystified.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript强制性神秘化</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">comp.lang.javascript常见问题解答：</font></font><a href="http://jibbering.com/faq/notes/type-conversion/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript类型转换</font></font></a></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LJinJin</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未定义</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着该变量尚未初始化。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">范例：</font></font></p>

<pre><code>var x;<font></font>
if(x){ //you can check like this<font></font>
   //code.<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等于（==）</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它只检查值等于数据类型。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">范例：</font></font></p>

<pre><code>var x = true;<font></font>
var y = new Boolean(true);<font></font>
x == y ; //returns true<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它只检查值。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严格等于（===）</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查值和数据类型应该相同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">范例：</font></font></p>

<pre><code>var x = true;<font></font>
var y = new Boolean(true);<font></font>
x===y; //returns false.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它检查数据类型x是原始类型，而y是布尔对象。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何检查变量是否为null或未定义</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需检查变量是否具有如下有效值： </font></font></p>

<pre><code>if(variable)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果变量不包含，它将返回true：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空值</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未定义</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“”（空字符串）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">N</font></font></li>
</ul></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
