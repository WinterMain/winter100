---
layout: question
title:  JavaScript promises和async await有什么区别？
date:   2020-03-12T10:12:05.000Z
description: 我已经在移动应用程序和Web应用程序中使用了ECMAScript 6和ECMAScript 7功能（由于Babel）。第一步显然是达到ECMAScri...
img: 
author: Harry前端Itachi
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经在</font><font style="vertical-align: inherit;">移动应用程序和Web应用程序中</font><font style="vertical-align: inherit;">使用了</font></font><a href="https://en.wikipedia.org/wiki/ECMAScript#6th_Edition_-_ECMAScript_2015" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 6</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和ECMAScript 7功能（由于Babel）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一步显然是达到ECMAScript 6级别。</font><font style="vertical-align: inherit;">我学习了许多异步模式，promise（确实是很有希望的），生成器（不确定为什么使用*符号）等。其中，promise非常适合我的目的。</font><font style="vertical-align: inherit;">而且我已经在我的应用程序中使用它们很多次了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我如何实现基本诺言的示例/伪代码-</font></font></p>

<pre><code>var myPromise = new Promise(<font></font>
    function (resolve,reject) {<font></font>
      var x = MyDataStore(myObj);<font></font>
      resolve(x);<font></font>
    });<font></font>
<font></font>
myPromise.then(<font></font>
  function (x) {<font></font>
    init(x);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随着时间的流逝，我遇到了ECMAScript 7功能，其中之一是</font></font><code>ASYNC</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>AWAIT</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字/功能。</font><font style="vertical-align: inherit;">这些结合在一起创造了很大的奇迹。</font><font style="vertical-align: inherit;">我已经开始用代替我的一些诺言</font></font><code>async &amp; await</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它们似乎为编程风格增加了巨大的价值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样，这是我的async，await函数的伪代码，如下所示：</font></font></p>

<pre><code>async function myAsyncFunction (myObj) {<font></font>
    var x = new MyDataStore(myObj);<font></font>
    return await x.init();<font></font>
}<font></font>
var returnVal = await myAsyncFunction(obj);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">撇开语法错误（如果有的话），我感觉都是一样。</font><font style="vertical-align: inherit;">我几乎可以用异步唤醒来代替我的大部分诺言。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么诺言做类似的工作时需要异步等待？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">异步等待解决更大的问题吗？</font><font style="vertical-align: inherit;">还是只是针对回调地狱的另一种解决方案？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如前所述，我能够使用promise和async，等待解决相同的问题。</font><font style="vertical-align: inherit;">异步等待解决了什么具体问题？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">补充说明：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经在我的React项目和Node.js模块中广泛使用异步，唤醒和承诺。</font><font style="vertical-align: inherit;">React特别是早起的鸟儿，并采用了许多ECMAScript 6和ECMAScript 7功能。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1261篇《JavaScript promises和async await有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全面比较优缺点。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">纯JavaScript</font></font></strong> </p>

<ul>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点</font></font></em></li>
</ul>

<blockquote>
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不需要任何其他库或技术</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表现最佳</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供与第三方库的最佳兼容性</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许创建临时和更高级的算法</font></font></li>
  </ul>
</blockquote>

<ul>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点</font></font></em></li>
</ul>

<blockquote>
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能需要额外的代码和相对复杂的算法</font></font></li>
  </ul>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">异步（库）</font></font></strong></p>

<ul>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点</font></font></em></li>
</ul>

<blockquote>
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简化最常见的控制流模式</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍然是基于回调的解决方案</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很好的表现</font></font></li>
  </ul>
</blockquote>

<ul>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点</font></font></em></li>
</ul>

<blockquote>
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引入外部依赖</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于高级流可能仍然不够</font></font></li>
  </ul>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">承诺</font></font></strong></p>

<ul>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点</font></font></em></li>
</ul>

<blockquote>
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">极大地简化了最常见的控制流模式</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">强大的错误处理</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES2015规范的一部分</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保onFulfilled和onRejected的延迟调用</font></font></li>
  </ul>
</blockquote>

<ul>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点</font></font></em></li>
</ul>

<blockquote>
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要承诺基于回调的API</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引入了较小的性能影响</font></font></li>
  </ul>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发电机</font></font></strong></p>

<ul>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点</font></font></em></li>
</ul>

<blockquote>
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使非阻塞API看起来像一个阻塞的API</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简化错误处理</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES2015规范的一部分</font></font></li>
  </ul>
</blockquote>

<ul>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点</font></font></em></li>
</ul>

<blockquote>
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要一个补充的控制流库</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍然需要回调或承诺以实现非顺序流 </font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要对基于非生成器的API进行分类处理</font></font></li>
  </ul>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">异步等待</font></font></strong></p>

<ul>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点</font></font></em></li>
</ul>

<blockquote>
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使非阻塞API看起来像阻塞</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简洁直观的语法</font></font></li>
  </ul>
</blockquote>

<ul>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点</font></font></em></li>
</ul>

<blockquote>
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要求今天使用Babel或其他编译器以及一些配置</font></font></li>
  </ul>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry凯</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在需要复杂的控制流的情况下，异步/等待可以帮助使代码更清晰，可读性更好。</font><font style="vertical-align: inherit;">它还会产生更多的调试友好代码。</font><font style="vertical-align: inherit;">并且可以用just处理同步和异步错误</font></font><code>try/catch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近写了这篇文章，通过代码示例展示了异步/等待优于promise的优势：</font></font><em><a href="https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">6个为什么JavaScript异步/等待使承诺消失的原因（教程）</font></font></a></em></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim老丝梅</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么Promises做类似的工作时需要异步等待？</font><font style="vertical-align: inherit;">异步等待解决更大的问题吗？</font></font></p>
</blockquote>

<p><code>async/await</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是给您异步代码的同步感觉。</font><font style="vertical-align: inherit;">这是一种非常优雅的语法糖。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于简单的查询和数据操作，Promises可能很简单，但是如果您遇到了复杂的数据操作和不涉及任何内容的场景，那么如果代码</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好像是同步的</font><font style="vertical-align: inherit;">，则更容易理解正在发生</font><font style="vertical-align: inherit;">的情况（换句话说，语法本身就是一种“偶然的复杂性”，</font></font><code>async/await</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以绕开。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想知道，可以使用类似</font></font><a href="https://github.com/tj/co" rel="noreferrer"><code>co</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（与生成器一起）</font><font style="vertical-align: inherit;">的库</font><font style="vertical-align: inherit;">来提供相同的感觉。</font><font style="vertical-align: inherit;">已经开发了类似的方法来解决</font></font><code>async/await</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最终</font><font style="vertical-align: inherit;">解决的问题</font><font style="vertical-align: inherit;">（本机）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">朔风</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在更复杂的情况下，异步/等待提供了更好的语法。</font><font style="vertical-align: inherit;">特别是涉及循环或某些其他构造（例如</font></font><code>try</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/）的</font><font style="vertical-align: inherit;">任何事物</font></font><code>catch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>while (!value) {<font></font>
  const intermediate = await operation1();<font></font>
  value = await operation2(intermediate);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅使用Promises，此示例将更加复杂。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
