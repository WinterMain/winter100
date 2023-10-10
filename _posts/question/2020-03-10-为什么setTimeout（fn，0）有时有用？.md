---
layout: question
title:  为什么setTimeout（fn，0）有时有用？
date:   2020-03-10T02:29:27.000Z
description: 我最近遇到了一个令人讨厌的错误，该错误中的代码是<select>通过JavaScript动态加载的。动态加载的<select>具有预先选择的值。在IE6中...
img: 
author: 阳光LEY
category: question
answer: 13
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近遇到了一个令人讨厌的错误，该错误中的代码是</font></font><code>&lt;select&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过JavaScript动态</font><font style="vertical-align: inherit;">加载的</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">动态加载的</font></font><code>&lt;select&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有预先选择的值。</font><font style="vertical-align: inherit;">在IE6中，我们已经有代码来修复selected </font></font><code>&lt;option&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为有时</font></font><code>&lt;select&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>selectedIndex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值可能与selected </font></font><code>&lt;option&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>index</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">不同步</font><font style="vertical-align: inherit;">，如下所示：</font></font></p>

<pre><code>field.selectedIndex = element.index;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，此代码无法正常工作。</font><font style="vertical-align: inherit;">即使</font></font><code>selectedIndex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确设置</font><font style="vertical-align: inherit;">了字段</font><font style="vertical-align: inherit;">，最终也会选择错误的索引。</font><font style="vertical-align: inherit;">但是，如果我</font></font><code>alert()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在正确的时间插入</font><font style="vertical-align: inherit;">一条</font><font style="vertical-align: inherit;">语句，则会选择正确的选项。</font><font style="vertical-align: inherit;">考虑到这可能是某种时序问题，我尝试了一些以前在代码中看到的随机现象：</font></font></p>

<pre><code>var wrapFn = (function() {<font></font>
    var myField = field;<font></font>
    var myElement = element;<font></font>
<font></font>
    return function() {<font></font>
        myField.selectedIndex = myElement.index;<font></font>
    }<font></font>
})();<font></font>
setTimeout(wrapFn, 0);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这有效！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经为我的问题找到了解决方案，但是我不知道自己到底为什么能解决我的问题，对此我感到不安。</font><font style="vertical-align: inherit;">有人有官方解释吗？</font><font style="vertical-align: inherit;">通过使用调用函数“稍后”可以避免出现什么浏览器问题</font></font><code>setTimeout()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第429篇《为什么setTimeout（fn，0）有时有用？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam神乐番长</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript是单线程应用程序，因此不允许同时运行功能，因此要使用此事件循环。</font><font style="vertical-align: inherit;">因此，正是setTimeout（fn，0）所做的事情使它被塞入任务请求中，该任务在您的调用堆栈为空时执行。</font><font style="vertical-align: inherit;">我知道这个解释很无聊，所以我建议您看这段视频，这将帮助您在浏览器中进行工作。</font><font style="vertical-align: inherit;">观看以下视频：</font><a href="https://www.youtube.com/watch?time_continue=392&amp;v=8aGhZQkoFbQ" rel="nofollow noreferrer"><font style="vertical-align: inherit;">-https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://www.youtube.com/watch?time_continue=392&amp;v=8aGhZQkoFbQ" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.youtube.com/watch?time_continue=392&amp;v=8aGhZQkoFbQ</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy小卤蛋凯</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于执行循环和在其他一些代码完成之前呈现DOM的答案是正确的。</font><font style="vertical-align: inherit;">JavaScript中的零秒超时有助于使代码成为伪多线程的，即使事实并非如此。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想补充一点，JavaScript中跨浏览器/跨平台零秒超时的BEST值实际上是20毫秒而不是0（零），因为由于时钟限制，许多移动浏览器无法注册小于20毫秒的超时在AMD芯片上。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，不涉及DOM操作的长期运行的进程应立即发送给Web Worker，因为它们提供了真正的JavaScript多线程执行。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L前端</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是您试图对不存在的元素执行Javascript操作。</font><font style="vertical-align: inherit;">元素尚未加载，并</font></font><code>setTimeout()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过以下方式为元素</font><font style="vertical-align: inherit;">加载</font><font style="vertical-align: inherit;">提供了更多时间：</font></font></p>

<ol>
<li><code>setTimeout()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导致事件是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">异步的，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此在所有同步代码之后执行</font><font style="vertical-align: inherit;">该事件</font><font style="vertical-align: inherit;">，从而使您的元素有更多的加载时间。</font><font style="vertical-align: inherit;">异步回调（如in </font></font><code>setTimeout()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内</font><font style="vertical-align: inherit;">的回调）</font><font style="vertical-align: inherit;">放置在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件队列中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并在</font><font style="vertical-align: inherit;">同步代码堆栈为空之后</font><font style="vertical-align: inherit;">由</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件循环</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">放入</font><font style="vertical-align: inherit;">堆栈中。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ms的值0作为函数中的第二个参数</font></font><code>setTimeout()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常会稍高一些（4-10ms，具体取决于浏览器）。</font><font style="vertical-align: inherit;">执行</font></font><code>setTimeout()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回调</font><font style="vertical-align: inherit;">所需的时间稍长，这</font><font style="vertical-align: inherit;">是由事件循环的“滴答声”量引起的（滴答声将堆栈中的回调推入堆栈，如果堆栈为空）。</font><font style="vertical-align: inherit;">由于性能和电池寿命原因，事件循环中的滴答声数量限制为</font><font style="vertical-align: inherit;">每秒</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">少于</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 1000次</font><font style="vertical-align: inherit;">的特定数量</font><font style="vertical-align: inherit;">。</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙达蒙</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样做的另一件事是将函数调用推到堆栈的底部，以防递归调用函数时防止堆栈溢出。</font><font style="vertical-align: inherit;">这具有</font></font><code>while</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环</font><font style="vertical-align: inherit;">的效果，</font><font style="vertical-align: inherit;">但可以让JavaScript引擎触发其他异步计时器。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin卡卡西小胖</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setTimeout有用的其他一些情况：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您希望将长时间运行的循环或计算分解为较小的组件，以使浏览器看起来不会“冻结”或说“页面上的脚本忙”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您希望在单击时禁用表单提交按钮，但是如果在onClick处理程序中禁用该按钮，则不会提交表单。</font><font style="vertical-align: inherit;">时间为零的setTimeout可以解决问题，它可以使事件结束，可以开始提交表单，然后可以禁用按钮。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi猪猪Green</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过调用setTimeout，您可以给页面时间以响应用户所做的任何事情。</font><font style="vertical-align: inherit;">这对于页面加载期间运行的功能特别有用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于要传递的持续时间为</font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，所以我想是为了</font></font><code>setTimeout</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从执行流程中</font><font style="vertical-align: inherit;">删除传递给的代码</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，如果该函数可能需要一段时间，则不会阻止后续代码的执行。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长GO</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个带有旧答案的旧问题。</font><font style="vertical-align: inherit;">我想重新看待这个问题，并回答为什么会发生这种情况，而不是为什么这样做很有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您有两个功能：</font></font></p>

<pre><code>var f1 = function () {    <font></font>
   setTimeout(function(){<font></font>
      console.log("f1", "First function call...");<font></font>
   }, 0);<font></font>
};<font></font>
<font></font>
var f2 = function () {<font></font>
    console.log("f2", "Second call...");<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后按以下顺序调用它们，</font></font><code>f1(); f2();</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是看到第二个首先执行。</font></font></p>

<p>And here is why: it is not possible to have <code>setTimeout</code> with a time delay of 0 milliseconds. The <strong>Minimum value is determined by the browser</strong> and it is not 0 milliseconds. <a href="https://developer.mozilla.org/en-US/docs/Web/API/window.setTimeout?redirectlocale=en-US&amp;redirectslug=DOM/window.setTimeout#Minimum.2F_maximum_delay_and_timeout_nesting">Historically</a> browsers sets this minimum to 10 milliseconds, but the <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#timers">HTML5 specs</a> and modern browsers have it set at 4 milliseconds. </p>

<blockquote>
  <p>If nesting level is greater than 5, and timeout is less than 4, then
  increase timeout to 4.</p>
</blockquote>

<p>Also from mozilla:</p>

<blockquote>
  <p>To implement a 0 ms timeout in a modern browser, you can use
  window.postMessage() as described <a href="http://dbaron.org/log/20100309-faster-timeouts">here</a>.</p>
</blockquote>

<p>P.S. information is taken after reading the following <a href="http://geekabyte.blogspot.com/2014/01/javascript-effect-of-setting-settimeout.html">article</a>.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimAJim</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><code>setTimeout()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 即使将DOM元素设置为0，也会让您花一些时间直到DOM元素被加载。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查一下：</font></font><a href="http://snook.ca/archives/javascript/settimeout_solve_domcontentloaded" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setTimeout</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三泡芙猿</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大多数浏览器都有一个称为主线程的进程，该进程负责执行一些JavaScript任务，UI更新，例如：绘画，重绘或重排等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些JavaScript执行和UI更新任务被排队到浏览器消息队列中，然后被分派到浏览器主线程来执行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当在主线程繁忙时生成UI更新时，任务将添加到消息队列中。</font></font></p>

<p><code>setTimeout(fn, 0);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其添加</font></font><code>fn</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到要执行的队列的末尾。</font><font style="vertical-align: inherit;">它计划在给定时间后将任务添加到消息队列中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐小小猪猪</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看看John Resig的有关</font></font><a href="http://ejohn.org/blog/how-javascript-timers-work/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript计时器如何工作</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的文章</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">设置超时时，它实际上将异步代码排队，直到引擎执行当前的调用堆栈。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Tom</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样做的一个原因是将代码的执行推迟到一个单独的后续事件循环中。</font><font style="vertical-align: inherit;">响应某种浏览器事件（例如，鼠标单击）时，有时仅</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理当前事件</font><em><font style="vertical-align: inherit;">之后</font></em><font style="vertical-align: inherit;">才需要执行操作</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该</font></font><code>setTimeout()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设施是最简单的方法。</font></font></p>

<p><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在</font><em><font style="vertical-align: inherit;">编辑</font></em><font style="vertical-align: inherit;">到2015年，我应该注意，还有</font></font><code>requestAnimationFrame()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它并不完全相同，但它非常接近</font></font><code>setTimeout(fn, 0)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，值得一提。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光伽罗</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在问题中，存在以下</font></font><a href="https://en.wikipedia.org/wiki/Race_condition" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">竞争条件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器尝试初始化下拉列表，准备对其选定的索引进行更新，以及</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的代码来设置选定的索引</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的代码始终在这场比赛中取胜，并在浏览器就绪之前尝试设置下拉菜单，这意味着该错误将出现。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之所以存在这种竞争，是因为JavaScript具有</font><font style="vertical-align: inherit;">与页面渲染共享</font><font style="vertical-align: inherit;">的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单个执行线程</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">实际上，运行JavaScript会阻止DOM的更新。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的解决方法是：</font></font></p>

<pre><code>setTimeout(callback, 0)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用</font></font><code>setTimeout</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个回调，以及零作为第二个参数将安排回调运行</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">异步</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，最短的延迟之后-这将是10毫秒左右，当标签具有焦点和执行JavaScript的线程不是忙。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，OP的解决方案是将选定索引的设置延迟大约10ms。</font><font style="vertical-align: inherit;">这为浏览器提供了初始化DOM的机会，从而修复了该错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Internet Explorer的每个版本都表现出古怪的行为，因此有时需要这种解决方法。</font><font style="vertical-align: inherit;">另外，它可能是OP代码库中的真正错误。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见Philip Roberts的演讲</font></font><a href="https://www.youtube.com/watch?v=8aGhZQkoFbQ" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“事件循环到底是什么？” </font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获得更详尽的解释。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
