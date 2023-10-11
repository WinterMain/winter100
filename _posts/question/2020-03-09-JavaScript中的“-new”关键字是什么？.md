---
layout: question
title:  JavaScript中的“ new”关键字是什么？
date:   2020-03-09T11:52:34.000Z
description: 在newJavaScript中的关键字可能会相当混乱首次遇到它的时候，人们往往会认为JavaScript是不是面向对象的编程语言。它是什么？它解决...
img: 
author: 飞云Tom小宇宙
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中的关键字可能会相当混乱首次遇到它的时候，人们往往会认为JavaScript是不是面向对象的编程语言。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是什么？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它解决什么问题？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么时候合适，什么时候不合适？</font></font></li>
</ul></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第228篇《JavaScript中的“ new”关键字是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字是创建新的对象实例。</font><font style="vertical-align: inherit;">是的，javascript是一种动态编程语言，它支持面向对象的编程范例。</font><font style="vertical-align: inherit;">关于对象命名的约定是，对于应该由new关键字实例化的对象，始终使用大写字母。</font></font></p>

<pre><code>obj = new Element();
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小小十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字改变正在运行在其下的功能的上下文和指针返回到该上下文。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您不使用</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字时，函数在其下</font></font><code>Vehicle()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行的上下文与您从中调用该</font></font><code>Vehicle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数的</font><font style="vertical-align: inherit;">上下文相同</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字将指向同一个语境。</font><font style="vertical-align: inherit;">当您使用时</font></font><code>new Vehicle()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，会创建一个新上下文，因此</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数内的</font><font style="vertical-align: inherit;">关键字</font><font style="vertical-align: inherit;">引用了新上下文。</font><font style="vertical-align: inherit;">作为回报，您将获得新创建的上下文。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">摘要：</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字以JavaScript用于创建从一个构造函数的对象。</font><font style="vertical-align: inherit;">该</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字的构造函数调用之前放置，并会做以下几件事：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个新对象</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将此对象的原型设置为构造函数的prototype属性</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字</font><font style="vertical-align: inherit;">绑定</font><font style="vertical-align: inherit;">到新创建的对象并执行构造函数</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回新创建的对象</font></font></li>
</ol>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></h2>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function Dog (age) {<font></font>
  this.age = age;<font></font>
}<font></font>
<font></font>
const doggie = new Dog(12);<font></font>
<font></font>
console.log(doggie);<font></font>
console.log(doggie.__proto__ === Dog.prototype) // true</code></pre>
</div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到底发生了什么：</font></font></strong></p>

<ol>
<li><code>const doggie</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 说：我们需要内存来声明变量。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分配运算符</font></font><code>=</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说：我们将使用</font></font><code>=</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表达式是</font></font><code>new Dog(12)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">JS引擎看到new关键字，创建一个新对象并将原型设置为Dog.prototype</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置为新对象</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">值</font><font style="vertical-align: inherit;">执行构造函数</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在此步骤中，将年龄分配给新创建的小狗对象。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回新创建的对象，并将其分配给变量doggie。</font></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">BB</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript是一种动态编程语言，它支持面向对象的编程范例，并且用于创建对象的新实例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类对于对象不是必需的-Javascript是一种</font></font><a href="http://en.wikipedia.org/wiki/Prototype-based_programming" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于原型的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语言。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让初学者更好地了解它</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在浏览器控制台中尝试以下代码。</font></font></p>

<pre><code>function Foo() { <font></font>
    return this; <font></font>
}<font></font>
<font></font>
var a = Foo();       //returns window object<font></font>
var b = new Foo();   //returns empty object of foo<font></font>
<font></font>
a instanceof Window;  // true<font></font>
a instanceof Foo;     // false<font></font>
<font></font>
b instanceof Window;  // false<font></font>
b instanceof Foo;     // true<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在您可以阅读</font></font><a href="https://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript#3658673"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">社区Wiki答案了</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种面向对象的编程语言，它完全用于创建实例。</font><font style="vertical-align: inherit;">它是基于原型的，而不是基于类的，但这并不意味着它不是面向对象的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天L</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您具有以下功能：</font></font></p>

<pre><code>var Foo = function(){<font></font>
  this.A = 1;<font></font>
  this.B = 2;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您将其称为独立函数，例如：</font></font></p>

<pre><code>Foo();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行此功能将为</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象（</font></font><code>A</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>B</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">添加两个属性</font><font style="vertical-align: inherit;">。</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之所以</font><font style="vertical-align: inherit;">将其添加到，是</font><font style="vertical-align: inherit;">因为</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样执行时调用该函数的对象，而</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在函数中是调用该函数的对象。</font><font style="vertical-align: inherit;">至少在Javascript中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，用这样的方式调用它</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var bar = new Foo();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您添加</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到函数调用中时，会发生一个新对象（只是</font></font><code>var bar = new Object()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）的</font><font style="vertical-align: inherit;">创建</font><font style="vertical-align: inherit;">，</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且函数内的指向</font></font><code>Object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">刚创建</font><font style="vertical-align: inherit;">的新</font><font style="vertical-align: inherit;">对象，而不是指向调用该函数的对象。</font><font style="vertical-align: inherit;">所以，</font></font><code>bar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在与属性的对象</font></font><code>A</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>B</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">任何函数都可以是构造函数，但这并不总是很有意义。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了丹尼尔·霍华德（Daniel Howard）的答案，这是做什么的</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或者至少看起来是这样做的）：</font></font></p>

<pre><code>function New(func) {<font></font>
    var res = {};<font></font>
    if (func.prototype !== null) {<font></font>
        res.__proto__ = func.prototype;<font></font>
    }<font></font>
    var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));<font></font>
    if ((typeof ret === "object" || typeof ret === "function") &amp;&amp; ret !== null) {<font></font>
        return ret;<font></font>
    }<font></font>
    return res;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而</font></font></p>

<pre><code>var obj = New(A, 1, 2);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相当于</font></font></p>

<pre><code>var obj = new A(1, 2);
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
