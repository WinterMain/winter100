---
layout: question
title:  是否保证JavaScript是单线程的？
date:   2020-03-11T15:35:57.000Z
description: 众所周知，JavaScript在所有现代浏览器实现中都是单线程的，但是它是在任何标准中指定的，还是仅根据传统？假设JavaScript始终是单线程的，是否...
img: 
author: 宝儿乐
category: question
answer: 10
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">众所周知，JavaScript在所有现代浏览器实现中都是单线程的，但是它是在任何标准中指定的，还是仅根据传统？</font><font style="vertical-align: inherit;">假设JavaScript始终是单线程的，是否完全安全？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第862篇《是否保证JavaScript是单线程的？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Tony伽罗</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试将两个setTimeout函数相互嵌套，它们将表现为多线程（即，外部计时器在执行其功能之前不会等待内部的计时器完成）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiGreen</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嗯，Chrome是多进程的，我认为每个进程都处理自己的Javascript代码，但据代码所知，它是“单线程”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript不支持多线程，至少没有明确支持，因此没有任何区别。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光达蒙达蒙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@Bobince提供了一个非常模糊的答案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">摆脱了MárÖrlygsson的回答，由于以下简单事实，Javascript始终是单线程的：Javascript中的所有内容都在单个时间轴上执行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那是单线程编程语言的严格定义。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProHarry逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我要反对这里的人群，但要忍受我。</font><font style="vertical-align: inherit;">单个JS脚本旨在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有效</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">地成为</font><font style="vertical-align: inherit;">单线程，但这并不意味着不能以不同的方式解释它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您有以下代码...</font></font></p>

<pre><code>var list = [];<font></font>
for (var i = 0; i &lt; 10000; i++) {<font></font>
  list[i] = i * i;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编写此代码时，期望在循环结束时，列表必须具有10000个索引平方的条目，但是VM可能会注意到循环的每次迭代都不会影响其他迭代，并使用两个线程重新解释。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一线程</font></font></p>

<pre><code>for (var i = 0; i &lt; 5000; i++) {<font></font>
  list[i] = i * i;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二线程</font></font></p>

<pre><code>for (var i = 5000; i &lt; 10000; i++) {<font></font>
  list[i] = i * i;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在这里简化一下，因为JS数组要复杂得多，然后才是笨拙的内存块，但是如果这两个脚本能够以线程安全的方式向数组中添加条目，那么当两个脚本执行完毕时，它将具有结果与单线程版本相同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然我不知道有任何VM会检测到这样的可并行化代码，但它似乎有可能在将来用于JIT VM，因为在某些情况下它可以提供更高的速度。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进一步扩展此概念，可以对代码进行注释，以使VM知道要转换为多线程代码的内容。</font></font></p>

<pre><code>// like "use strict" this enables certain features on compatible VMs.<font></font>
"use parallel";<font></font>
<font></font>
var list = [];<font></font>
<font></font>
// This string, which has no effect on incompatible VMs, enables threading on<font></font>
// this loop.<font></font>
"parallel for";<font></font>
for (var i = 0; i &lt; 10000; i++) {<font></font>
  list[i] = i * i;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于Web Workers正在使用Javascript，因此这种不太丑的系统不太可能出现，但是我认为可以肯定地说Javascript是单线程的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐Eva</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我要说的是，该规范不会阻止某人创建在多个线程上运行javascript的引擎，而是要求代码执行同步以访问共享对象状态。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为，单线程非阻塞范例是出于在ui永不阻塞的浏览器中运行javascript的需要。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nodejs遵循了浏览器的方法。</font></font></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是</font><a href="https://developer.mozilla.org/en-US/docs/Mozilla/Projects/Rhino" rel="nofollow noreferrer"><font style="vertical-align: inherit;">Rhino</font></a><font style="vertical-align: inherit;">引擎</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持在不同线程中运行js代码</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">执行不能共享上下文，但是它们可以共享作用域。</font><font style="vertical-align: inherit;">对于这种特定情况，文档说明：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...” Rhino保证跨线程访问JavaScript对象的属性是原子的，但不再保证在同一范围内同时</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行的脚本。如果</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两个脚本同时使用同一范围，则</font><strong><font style="vertical-align: inherit;">这些脚本是负责协调对共享变量的所有访问</font></strong><font style="vertical-align: inherit;">。”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过阅读Rhino文档，我得出的结论是，有人可以编写也产生新的JavaScript线程的javascript API，但是该api是特定于Rhino的（例如，节点只能产生新的进程）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为即使对于支持JavaScript中多个线程的引擎，也应该与不考虑多线程或阻塞的脚本兼容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Concearning </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的NodeJS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的方式，我看到它是：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否所有js代码都在单个线程中执行？</font><font style="vertical-align: inherit;">：是的。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">js代码可以导致其他线程运行吗？</font><font style="vertical-align: inherit;">：是的。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些线程可以改变js执行上下文吗？：否。但是它们可以（直接/间接（？））附加到事件队列中。</font></font></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，在使用浏览器和Node.js（可能还有许多其他引擎）的情况下，JavaScript不是多线程的，但引擎本身是多线程的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，尽管Internet Explorer 9会在单独的线程上编译Javascript以准备在主线程上执行。</font><font style="vertical-align: inherit;">但是，这对于您作为程序员来说并没有任何改变。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子JinJin</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，尽管在使用任何异步API（例如setInterval和xmlhttp回调）时仍然会遇到一些并发编程问题（主要是竞争条件）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript / ECMAScript旨在驻留在主机环境中。</font><font style="vertical-align: inherit;">也就是说，</font><font style="vertical-align: inherit;">除非宿主环境决定解析并执行给定脚本，并提供使JavaScript实际上有用的环境对象（例如浏览器中的DOM），否则</font><font style="vertical-align: inherit;">JavaScript实际上不会</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做任何事情</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为给定的功能或脚本块将逐行执行，这对于JavaScript是有保证的。</font><font style="vertical-align: inherit;">但是，主机环境可能可以同时执行多个脚本。</font><font style="vertical-align: inherit;">或者，主机环境可以始终提供提供多线程的对象。</font></font><code>setTimeout</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>setInterval</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个例子，或主机环境的至少伪例子，提供一种方式做一些并发性（即使它不完全并发）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenSamA</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会说是-因为如果浏览器的javascript引擎异步运行它，则几乎所有现有（至少所有不重要的）javascript代码都会中断。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，</font></font><a href="http://www.whatwg.org/specs/web-workers/current-work/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5已经指定了将Web</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多线程引入基本Javascript中的</font><a href="http://www.whatwg.org/specs/web-workers/current-work/" rel="noreferrer"><font style="vertical-align: inherit;">Web Workers</font></a><font style="vertical-align: inherit;">（用于多线程javascript代码的显式，标准化API）</font><font style="vertical-align: inherit;">这一事实</font><font style="vertical-align: inherit;">几乎没有意义。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意其他评论者：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管如此</font></font><code>setTimeout/setInterval</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，HTTP请求的onload事件（XHR）和UI事件（单击，焦点等）提供了多线程性的粗略印象-它们仍然都是沿着单个时间轴执行的-时间-因此，即使我们事先不知道它们的执行顺序，也不必担心事件处理程序，定时函数或XHR回调的执行期间外部条件会发生变化。）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Gil樱</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，父窗口可以与运行自己的执行线程的子窗口或同级窗口或框架进行通信。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
