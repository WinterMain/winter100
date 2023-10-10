---
layout: question
title:  JavaScript检查变量是否存在（已定义/初始化）
date:   2020-03-09T11:53:35.000Z
description: 哪种方法检查变量是否已初始化是更好/正确的方法？（假设变量可以容纳任何内容（字符串，整数，对象，函数等））if (elem) { // or \!ele...
img: 
author: SamTony
category: question
answer: 12
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪种方法检查变量是否已初始化是更好/正确的方法？</font><font style="vertical-align: inherit;">（假设变量可以容纳任何内容（字符串，整数，对象，函数等））</font></font></p>

<pre><code>if (elem) { // or !elem
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>if (typeof(elem) !== 'undefined') {
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>if (elem != null) {
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomGreen</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这取决于实际情况。</font><font style="vertical-align: inherit;">如果要检查某些可能在代码外部全局定义的或可能尚未全局定义的东西（例如jQuery），则需要：</font></font></p>

<pre><code>if (typeof(jQuery) != "undefined")
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在那里不需要严格的相等性，typeof总是返回一个字符串。）但是，如果您对某个函数的参数进行了传递，则可能会对其进行定义，但如果将其传递，则为null。</font></font></p>

<pre><code>function sayHello(name) {<font></font>
    if (name) return "Hello, " + name;<font></font>
    else return "Hello unknown person";<font></font>
}<font></font>
sayHello(); // =&gt; "Hello unknown person"<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我根据对象使用两种不同的方式。</font></font></p>

<pre><code>if( !variable ){<font></font>
  // variable is either<font></font>
  // 1. '';<font></font>
  // 2. 0;<font></font>
  // 3. undefined;<font></font>
  // 4. null;<font></font>
  // 5. false;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时我不想将空字符串评估为falsey，所以我使用这种情况</font></font></p>

<pre><code>function invalid( item ){<font></font>
  return (item === undefined || item === null);<font></font>
}<font></font>
<font></font>
if( invalid( variable )){<font></font>
  // only here if null or undefined;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果需要相反的情况，则首先将！variable变为!! variable，而在无效函数中===变为！=且函数名称更改为notInvalid。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了检查变量是否已经声明/设置，我做了这个肮脏的把戏。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我什至没有找到一种将代码提取到函数的方法</font></font><code>eval</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>"use strict";<font></font>
<font></font>
// var someVar;<font></font>
<font></font>
var declared;<font></font>
try {<font></font>
  someVar;<font></font>
  declared = true;<font></font>
} catch(e) {<font></font>
  declared = false;<font></font>
}<font></font>
<font></font>
if (declared) {<font></font>
  console.log("someVar is declared; now has the value: " + someVar);<font></font>
} else {<font></font>
  console.log("someVar is not declared");<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在问题概述的特定情况下，</font></font></p>

<pre><code>typeof window.console === "undefined"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等同于 </font></font></p>

<pre><code>window.console === undefined
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我更喜欢后者，因为它更短。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，我们</font></font><code>console</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅在全局范围（这是</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有浏览器中</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">对象）中查找。</font><font style="vertical-align: inherit;">在这种特殊情况下，这是可取的。</font><font style="vertical-align: inherit;">我们不想</font></font><code>console</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在其他地方定义。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@BrianKelley在他的出色回答中解释了技术细节。</font><font style="vertical-align: inherit;">我仅添加了缺少的结论，并将其摘要为更易于阅读的内容。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">马克</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些答案（除了Fred Gandt解决方案之外）都是不正确或不完整的。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我需要</font></font><code>variableName;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">携带一个</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值，因此已经以某种方式声明了</font></font><code>var variableName;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">这意味着它已经被</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">初始化了</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">；</font><font style="vertical-align: inherit;">-如何检查它是否已经声明？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至更好-如何通过一次调用立即检查“ Book1.chapter22.paragraph37”是否存在，但不会出现引用错误？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们通过使用最强大的JasvaScript运算符</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">in来实现</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>"[variable||property]" in [context||root] <font></font>
&gt;&gt; true||false<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在AJAX达到顶峰的时候，我编写了一种方法（后来称为isNS（）），该方法能够确定名称空间是否存在，包括对属性名称（例如“ Book1.chapter22.paragraph37”）的深入测试等等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，由于它以前已经发布过，并且由于它的重要性，它值得在单独的线程中发布，因此我不会在此处发布它，但是会提供关键字（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">javascript + isNS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），它将帮助您找到源代码，并附带所有必要的解释。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam蛋蛋Itachi</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>typeof</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，</font></font></p>

<pre><code>var dataSet;<font></font>
<font></font>
alert("Variable dataSet is : " + typeof dataSet);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的代码片段将返回如下输出</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量dataSet是：未定义。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Itachi村村</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Null是JavaScript中的值并</font></font><code>typeof null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font><code>"object"</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果您传递空值，则可接受的答案将不起作用。</font><font style="vertical-align: inherit;">如果传递空值，则需要对空值进行额外检查：</font></font></p>

<pre><code>if ((typeof variable !== "undefined") &amp;&amp; (variable !== null))  <font></font>
{<font></font>
   // the variable is defined and not null<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很难区分undefined和null。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Null</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个值，您可以在想要指示变量没有特定值时将其分配给该变量。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未定义</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
是一个特殊值，它将是未分配变量的默认值。</font></font></p>

<pre><code><font></font>
var _undefined;<font></font>
var _null = null;<font></font>
<font></font>
alert(_undefined); <font></font>
alert(_null); <font></font>
alert(_undefined == _null);<font></font>
alert(_undefined === _null);<font></font>
</code>
</pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>if (typeof console != "undefined") {    <font></font>
   ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或更好</font></font></p>

<pre><code>if ((typeof console == "object") &amp;&amp; (typeof console.profile == "function")) {    <font></font>
   console.profile(f.constructor);    <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于所有浏览器</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最高答案是正确的，请使用typeof。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，我想指出的是，JavaScript </font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是可变的（出于某些不敬虔的原因）。</font><font style="vertical-align: inherit;">因此，简单地进行检查</font></font><code>varName !== undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有可能不会总是按预期返回，因为其他库可能已更改为未定义。</font><font style="vertical-align: inherit;">一些答案（@skalee的答案）似乎更喜欢不使用</font></font><code>typeof</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这可能</font><font style="vertical-align: inherit;">会给您带来</font><font style="vertical-align: inherit;">麻烦。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理此问题的“旧”方法是将undefined声明为var，以抵消的任何可能的静音/覆盖</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，最好的方法仍然是使用，</font></font><code>typeof</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它将忽略任何</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他代码的</font><font style="vertical-align: inherit;">替代</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">尤其是如果您正在编写要在野外使用的代码，而谁又知道该页面上可能还会运行什么……</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚十三Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这取决于您是否只关心已定义变量，还是希望它具有有意义的值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查类型是否未定义将检查变量是否已定义。</font></font></p>

<p><code>=== null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>!== null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅检查变量的值是否准确</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><code>== null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>!= null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将检查值是否为</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><code>if(value)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将检查变量是</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，或一个空字符串。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未声明（未定义）测试变量的简短方法是</font></font></p>

<pre><code>if (typeof variable === "undefined") {<font></font>
  ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现它对于检测在浏览器外部运行的脚本（没有声明</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量）</font><font style="vertical-align: inherit;">很有用</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
