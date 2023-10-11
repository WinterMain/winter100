---
layout: question
title:  Array.prototype.slice.call（）如何工作？
date:   2020-03-12T16:41:45.000Z
description: 我知道它用于使参数成为真实的数组，但是我不明白使用时会发生什么 Array.prototype.slice.call(arguments)...
img: 
author: 西里Stafan小哥
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道它用于使参数成为真实的数组，但是我不明白使用时会发生什么 </font></font><code>Array.prototype.slice.call(arguments)</code></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1370篇《Array.prototype.slice.call（）如何工作？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilL</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>Maybe a bit late, but the answer to all of this mess is that call() is used in JS for inheritance.
If we compare this to Python or PHP, for example, call is used respectively as super().<strong>init</strong>() or parent::_construct().</p>

<p>This is an example of its usage that clarifies all:</p>

<pre><code>function Teacher(first, last, age, gender, interests, subject) {<font></font>
  Person.call(this, first, last, age, gender, interests);<font></font>
<font></font>
  this.subject = subject;<font></font>
}<font></font>
</code></pre>

<p>Reference: <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance" rel="nofollow noreferrer">https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Itachi</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>It uses the <code>slice</code> method arrays have and calls it with its <code>this</code> being the <code>arguments</code> object. This means it calls it as if you did <code>arguments.slice()</code> assuming <code>arguments</code> had such a method.</p>

<p>Creating a slice without any arguments will simply take all elements - so it simply copies the elements from <code>arguments</code> to an array.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光小卤蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>Array.prototype.slice.call(arguments) is the old-fashioned way to convert an arguments into an array.</p>

<p>In ECMAScript 2015, you can use Array.from or the spread operator:</p>

<pre><code>let args = Array.from(arguments);<font></font>
<font></font>
let args = [...arguments];<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Itachi理查德</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>Dont forget, that a low-level basics of this behaviour is the type-casting that integrated in JS-engine entirely.</p>

<p>Slice just takes object (thanks to existing arguments.length property) and returns array-object casted after doing all operations on that.</p>

<p>The same logics you can test if you try to treat String-method with an INT-value:</p>

<pre><code>String.prototype.bold.call(11);  // returns "&lt;b&gt;11&lt;/b&gt;"
</code></pre>

<p>And that explains statement above.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim米亚西里</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>arguments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象实际上不是Array的实例，并且不具有任何Array方法。</font><font style="vertical-align: inherit;">因此，</font></font><code>arguments.slice(...)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将不会起作用，因为arguments对象没有slice方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组确实具有此方法，并且由于</font></font><code>arguments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象与数组非常相似，因此两者是兼容的。</font><font style="vertical-align: inherit;">这意味着我们可以将数组方法与arguments对象一起使用。</font><font style="vertical-align: inherit;">而且由于数组方法是在考虑数组的基础上构建的，因此它们将返回数组而不是其他参数对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那为什么要使用</font></font><code>Array.prototype</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">呢？</font><font style="vertical-align: inherit;">的</font></font><code>Array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是，我们创建从（新阵列的对象</font></font><code>new Array()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），而这些新的阵列被传递的方法和属性，像切片。</font><font style="vertical-align: inherit;">这些方法存储在</font></font><code>[Class].prototype</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象中。</font><font style="vertical-align: inherit;">因此，出于效率的考虑，我们不必</font><font style="vertical-align: inherit;">直接通过原型直接获取</font><font style="vertical-align: inherit;">切片方法，而不必通过</font></font><code>(new Array()).slice.call()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">or </font><font style="vertical-align: inherit;">来访问slice方法</font></font><code>[].slice.call()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这样一来，我们不必初始化新的数组。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是为什么我们必须首先这样做呢？</font><font style="vertical-align: inherit;">好了，正如您所说，它将参数对象转换为Array实例。</font><font style="vertical-align: inherit;">但是，我们使用slice的原因更多的是“ hack”。</font><font style="vertical-align: inherit;">您猜到了，slice方法将获取一个数组的切片，并将该切片作为新数组返回。</font><font style="vertical-align: inherit;">不向其传递任何参数（以arguments对象作为上下文除外）会使slice方法获取传递的“数组”（在本例中为arguments对象）的完整块，并将其作为新数组返回。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim米亚西里</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，打电话</font></font></p>

<pre><code>var b = a.slice();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将数组复制</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到中</font></font><code>b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，我们不能</font></font></p>

<pre><code>var a = arguments.slice();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为</font></font><code>arguments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不是一个真正的数组，也没有</font></font><code>slice</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为方法。</font></font><code>Array.prototype.slice</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>slice</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">函数，并</font></font><code>call</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">运行函数</font></font><code>arguments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near理查德路易</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>Its because, as <a href="https://developer.mozilla.org/en/JavaScript/Reference/Functions_and_function_scope/arguments" rel="noreferrer">MDN notes</a></p>

<blockquote>
  <p>The arguments object is not an array. It is similar to an array, but
  does not have any array properties except length. For example, it does
  not have the pop method. However it can be converted to a real array:</p>
</blockquote>

<p>Here we are calling <code>slice</code> on the native object <code>Array</code> and not on its <em>implementation</em> and thats why the extra <code>.prototype</code></p>

<pre><code>var args = Array.prototype.slice.call(arguments);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西逆天</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，您应该阅读</font></font><a href="http://www.w3schools.com/js/js_function_invocation.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中函数调用的工作方式</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我怀疑仅此一项就足以回答您的问题。</font><font style="vertical-align: inherit;">但是，这里是正在发生的事情的摘要：</font></font></p>

<p><code>Array.prototype.slice</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提取</font><a href="http://www.w3schools.com/js/js_object_methods.asp" rel="noreferrer"><font style="vertical-align: inherit;">方法</font></a><font style="vertical-align: inherit;">从</font><font style="vertical-align: inherit;">的</font><a href="http://www.w3schools.com/js/js_object_prototypes.asp" rel="noreferrer"><font style="vertical-align: inherit;">原型</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是直接调用它是行不通的，</font><a href="https://stackoverflow.com/questions/155609/difference-between-a-method-and-a-function"><font style="vertical-align: inherit;">因为它是方法（不是函数）</font></a><font style="vertical-align: inherit;">，因此需要上下文（调用对象</font><font style="vertical-align: inherit;">），否则会抛出</font><font style="vertical-align: inherit;">。</font></font><a href="http://www.w3schools.com/jsref/jsref_slice_array.asp" rel="noreferrer"><code>slice</code></a> <a href="http://www.w3schools.com/js/js_object_methods.asp" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><code>Array</code><font style="vertical-align: inherit;"></font><a href="http://www.w3schools.com/js/js_object_prototypes.asp" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><a href="https://stackoverflow.com/questions/155609/difference-between-a-method-and-a-function"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><code>this</code><font style="vertical-align: inherit;"></font><code>Uncaught TypeError: Array.prototype.slice called on null or undefined</code><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call" rel="noreferrer"><code>call()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法允许您指定方法的上下文，基本上使这两个调用等效：</font></font></p>

<pre><code>someObject.slice(1, 2);<font></font>
slice.call(someObject, 1, 2);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了前者要求该</font></font><code>slice</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法存在于</font></font><code>someObject</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原型链中（就像它所做的那样</font></font><code>Array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），而后者则允许将上下文（</font></font><code>someObject</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）手动传递给该方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，后者的缩写为：</font></font></p>

<pre><code>var slice = Array.prototype.slice;<font></font>
slice.call(someObject, 1, 2);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与以下内容相同：</font></font></p>

<pre><code>Array.prototype.slice.call(someObject, 1, 2);
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
