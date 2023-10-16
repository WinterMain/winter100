---
layout: question
title:  为什么null为对象，并且null和undefined有什么区别？
date:   2020-03-10T02:25:19.000Z
description: 为什么在JavaScript中被null视为object？正在检查 if ( object == null )      Do somethin...
img: 
author: 梅Near米亚
category: question
answer: 16
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么</font><font style="vertical-align: inherit;">在JavaScript中</font><font style="vertical-align: inherit;">被</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视为</font></font><code>object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正在检查 </font></font></p>

<pre><code>if ( object == null )<font></font>
      Do something<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与...相同 </font></font></p>

<pre><code>if ( !object )<font></font>
      Do something<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且：</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">之间有什么区别</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第426篇《为什么null为对象，并且null和undefined有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未定义表示已声明变量，但尚未分配任何值，而可以将Null分配给表示“无值”的变量。（Null是赋值运算符）</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2. Undefined是类型本身，而Null是对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3 Javascript本身可以将任何未分​​配的变量初始化为undefined，但永远不能将变量的值设置为null。</font><font style="vertical-align: inherit;">这必须以编程方式完成。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小小神乐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑“空”的最好方法是回忆一下数据库中类似概念的用法，它表示一个字段根本不包含任何值。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，该物品的价值是已知的；</font><font style="vertical-align: inherit;">它</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> “定义的”。</font><font style="vertical-align: inherit;">它</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被初始化。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该项目的值是：</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“没有值”。</font></font></em></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对于编写更易于调试的程序是非常有用的技术。</font><font style="vertical-align: inherit;">“未定义”变量可能是错误的结果…… </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（您怎么知道？）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ……但是，如果变量包含值“ null”，则您会知道“有人在该程序的某个位置，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其设置</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为因此，我建议，当您需要删除变量的值时，请不要“删除”……将其设置为“ null”。</font><font style="vertical-align: inherit;">旧值将被孤立，不久将被垃圾回收；</font><font style="vertical-align: inherit;">新值是“没有值（现在）”。</font><font style="vertical-align: inherit;">在这两种情况下，变量的状态都是确定的：“显然，它是故意那样做的。”</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙猪猪乐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript</font></font></strong> <code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中，不是</font></font><code>object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型，而是</font></font><code>primitave</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么区别？</font></font></strong>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未定义</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是指尚未设置的指针。
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是指空指针，例如，某些东西已手动将变量设置为类型</font></font><code>null</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一NearEva</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与undefined相比，null的另一个有趣之处在于它可以递增。
</font></font></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>x = undefined<font></font>
x++<font></font>
y = null<font></font>
y++<font></font>
console.log(x) // NaN<font></font>
console.log(y) // 0</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对于设置计数器的默认数值很有用。</font><font style="vertical-align: inherit;">您在变量声明中将变量设置为-1多少次？</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin神奇宝儿</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如</font></font><code>window.someWeirdProperty</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是未定义的，所以</font></font></p>

<p><code>"window.someWeirdProperty === null"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 评估为false</font></font></p>

<p><code>"window.someWeirdProperty === undefined"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 评估为true。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外checkif </font></font><code>if (!o)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是不一样的检查</font></font><code>if (o == null)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>o</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下功能说明了原因并能够解决差异：</font></font></p>

<pre><code>function test() {<font></font>
        var myObj = {};<font></font>
        console.log(myObj.myProperty);<font></font>
        myObj.myProperty = null;<font></font>
        console.log(myObj.myProperty);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你打电话</font></font></p>

<pre><code>test();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你正在</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未定义</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空值</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一个</font></font><code>console.log(...)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font><code>myProperty</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><code>myObj</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尚未定义的位置获取数据-因此它返回“未定义”状态。</font><font style="vertical-align: inherit;">在为它分配了null之后，第二个</font></font><code>console.log(...)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回值显然是“ null”，因为</font></font><code>myProperty</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它存在，但已为其</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分配</font><font style="vertical-align: inherit;">了值</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了能够查询这种差异，JavaScript具有</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：尽管</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是-与其他语言一样，对象</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也不能是对象，因为没有可用的实例（甚至不是</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实例）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L路易</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些精度：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">null和undefined </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两个不同的值。</font><font style="vertical-align: inherit;">一个代表缺少名称的值，另一个代表缺少名称。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发生</font></font><code>if</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下情况</font></font><code>if( o )</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对括号o中的表达式进行求值，然后</font></font><code>if</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对括号中的表达式的值进行类型强制-在本例中</font><font style="vertical-align: inherit;">为</font><font style="vertical-align: inherit;">踢</font></font><code>o</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中的Falsy（将被强制转换为false）的值为：</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">”，null，undefined，0和false</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO蛋蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个对象。</font><font style="vertical-align: inherit;">其类型为null。</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是对象 </font><font style="vertical-align: inherit;">其类型未定义。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">用户7049302300</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要添加到的答案</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之间有什么differrence </font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>null</code></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，从</font></font><a href="http://books.google.com/books?id=6TAODdEIxrgC&amp;lpg=PA41&amp;ots=obbpJPKzZH&amp;dq=null%20undefined&amp;pg=PA41#v=onepage&amp;q=null%20undefined&amp;f=false" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript的权威指南第6版，在此页第41页</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能会考虑</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示系统级别的，意外的或类似错误的值</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺失，</font><font style="vertical-align: inherit;">并</font><font style="vertical-align: inherit;">表示程序级别的，正常的或预期的值缺失。</font><font style="vertical-align: inherit;">如果您需要将这些值之一分配给变量或属性，或者将这些值之一传递给函数，</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则几乎总是正确的选择。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Gil</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中许多不同的空检查的比较：</font></font></p>

<p><a href="http://jsfiddle.net/aaronhoffman/DdRHB/5/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/aaronhoffman/DdRHB/5/</font></font></a></p>

<pre><code>// Variables to test<font></font>
var myNull = null;<font></font>
var myObject = {};<font></font>
var myStringEmpty = "";<font></font>
var myStringWhiteSpace = " ";<font></font>
var myStringHello = "hello";<font></font>
var myIntZero = 0;<font></font>
var myIntOne = 1;<font></font>
var myBoolTrue = true;<font></font>
var myBoolFalse = false;<font></font>
var myUndefined;<font></font>
<font></font>
...trim...<font></font>
</code></pre>

<p><a href="http://aaron-hoffman.blogspot.com/2013/04/javascript-null-checking-undefined-and.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://aaron-hoffman.blogspot.com/2013/04/javascript-null-checking-undefined-and.html</font></font></a></p>

<p><img src="https://i.stack.imgur.com/ThA4b.png" alt="JavaScript空检查比较表"></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯卡卡西</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于值相等，null和undefined均为false（null == undefined）：它们都折叠为布尔值false。</font><font style="vertical-align: inherit;">它们不是同一对象（null！== undefined）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">undefined是全局对象的属性（浏览器中为“窗口”），但它是原始类型，而不是对象本身。</font><font style="vertical-align: inherit;">这是未初始化的变量和函数的默认值，这些变量和函数以没有return语句的形式结束。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">null是Object的实例。</font><font style="vertical-align: inherit;">对于用于返回集合对象以指示空结果的DOM方法，将使用null，该方法提供错误值而未指示错误。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro路易</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理解null和undefined的一种方法是了解每种情况的发生位置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在以下情况下，期望返回空值：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查询DOM的方法</font></font></p>

<pre><code>console.log(window.document.getElementById("nonExistentElement"));<font></font>
//Prints: null<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从Ajax请求收到的JSON响应</font></font></p></li>
</ul>

<pre><code><font></font>
    {<font></font>
      name: "Bob",<font></font>
      address: null<font></font>
    }<font></font>
</code></pre>

<ul>
<li><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RegEx.exec</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不断变化的新功能。</font><font style="vertical-align: inherit;">以下返回null：</font></font></p></li>
</ul>

<pre><code><font></font>
        var proto = Object.getPrototypeOf(Object.getPrototypeOf({}));<font></font>
<font></font>
       // But this returns undefined:<font></font>
<font></font>
        Object.getOwnPropertyDescriptor({}, "a");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有其他不存在的情况都由undefined表示（如@Axel所示）。</font><font style="vertical-align: inherit;">以下每个打印“未定义”：</font></font></p>

<pre><code>    var uninitalised;<font></font>
    console.log(uninitalised);<font></font>
<font></font>
    var obj = {};<font></font>
    console.log(obj.nonExistent);<font></font>
<font></font>
    function missingParam(missing){<font></font>
        console.log(missing);<font></font>
    }<font></font>
<font></font>
    missingParam();<font></font>
<font></font>
    var arr = [];<font></font>
    console.log(arr.pop());        <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，如果您决定编写var unitialized = null; </font><font style="vertical-align: inherit;">或自己从方法返回null，则在其他情况下会出现null。</font><font style="vertical-align: inherit;">但这应该很明显。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第三种情况是您要访问变量，但您甚至不知道它是否已声明。</font><font style="vertical-align: inherit;">对于这种情况，请使用typeof以避免引用错误：</font></font></p>

<pre><code>if(typeof unknown !== "undefined"){<font></font>
    //use unknown<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总而言之，在处理DOM，处理Ajax或使用某些ECMAScript 5功能时，请检查是否为null。</font><font style="vertical-align: inherit;">对于所有其他情况，可以使用严格的相等性检查undefined是安全的：</font></font></p>

<pre><code>if(value === undefined){<font></font>
  // stuff<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅十三</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">差异可以概括为以下代码段：</font></font></p>

<pre><code>alert(typeof(null));      // object<font></font>
alert(typeof(undefined)); // undefined<font></font>
<font></font>
alert(null !== undefined) //true<font></font>
alert(null == undefined)  //true<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查</font></font></p>

<p><code>object == null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查是不同的</font></font><code>if ( !object )</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后者等于</font></font><code>! Boolean(object)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为一元运算</font></font><code>!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">符会自动将正确的操作数转换为布尔值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">既然</font></font><code>Boolean(null)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等于假，那么</font></font><code>!false === true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果您的对象</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是null</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而是</font></font></em> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">false</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则检查将通过，因为：</font></font></p>

<pre><code>alert(Boolean(null)) //false<font></font>
alert(Boolean(0))    //false<font></font>
alert(Boolean(""))   //false<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长十三</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">null和undefined有什么区别？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有定义的属性未定义。</font><font style="vertical-align: inherit;">null是一个对象。</font><font style="vertical-align: inherit;">它的类型是对象。</font><font style="vertical-align: inherit;">null是一个特殊值，表示“无值。undefined不是对象，类型是undefined。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以声明一个变量，将其设置为null，其行为是相同的，除了看到的是“ null”和“ undefined”。</font><font style="vertical-align: inherit;">您甚至可以将未定义的变量与null进行比较，反之亦然，条件将为true：</font></font></p>

<pre><code> undefined == null<font></font>
 null == undefined<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多详细信息，</font><font style="vertical-align: inherit;">请参见</font></font><a href="https://www.google.nl/search?q=JavaScript+Difference+between+null+and+undefined&amp;gws_rd=cr&amp;ei=lM1MWYjDOs_OwAL-_KioDg" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript null与undefined之间的区别</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和您的新</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font></strong></p>

<pre><code>if (object == null)  does mean the same  if(!object)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在测试object是否为false时，它们都仅在测试</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">false</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时满足条件</font><font style="vertical-align: inherit;">，而在true时不满足</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里检查：</font></font><a href="http://blog.kodekabuki.com/post/30056940/javascript-gotcha-undefined-vs-null" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript陷阱</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅A飞云</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>var x = null;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">x定义为null</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">y未定义；</font><font style="vertical-align: inherit;">//因为我没有定义它</font></font></p>

<pre><code>if (!x)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">null被评估为false</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗猪猪理查德</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>(name is undefined)
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（*）</font></font></sup><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的JavaScript： </font></font></strong> <code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">什么</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">啊 </font><font style="vertical-align: inherit;">我不知道你在说什么 </font><font style="vertical-align: inherit;">您以前从未提到</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">过。</font><font style="vertical-align: inherit;">您是否在（客户端）看到其他脚本语言？</font></font></p>

<pre><code>name = null;
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之; </font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有事物的概念存在的地方；</font><font style="vertical-align: inherit;">它没有类型，并且在该范围内从未被引用过；</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是已知事物存在的地方，但价值不明。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一点要记住的是，</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是，概念，同为</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>""</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或这样，即使它们的类型转换，即在画上等号</font></font></p>

<pre><code>name = false;
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">布尔值false。</font></font></p>

<pre><code>name = '';
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空字符串</font></font></p>

<hr>

<p><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">*：</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此上下文中是指从未定义的变量。</font><font style="vertical-align: inherit;">它可以是任何未定义的变量，但是name是几乎任何HTML表单元素的属性。</font><font style="vertical-align: inherit;">它沿路前进，早在id之前就已建立。</font><font style="vertical-align: inherit;">这很有用，因为id必须是唯一的，但名称不必是唯一的。 
</font></font></sup></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
