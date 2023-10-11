---
layout: question
title:  setTimeout或setInterval？
date:   2020-03-11T03:18:25.000Z
description: 据我所知，这两段JavaScript的行为方式相同：选项A：function myTimeoutFunction(){    doStuff(...
img: 
author: GOItachi老丝
category: question
answer: 14
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知，这两段JavaScript的行为方式相同：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项A：</font></font></strong></p>

<pre><code>function myTimeoutFunction()<font></font>
{<font></font>
    doStuff();<font></font>
    setTimeout(myTimeoutFunction, 1000);<font></font>
}<font></font>
<font></font>
myTimeoutFunction();<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项B：</font></font></strong></p>

<pre><code>function myTimeoutFunction()<font></font>
{<font></font>
    doStuff();<font></font>
}<font></font>
<font></font>
myTimeoutFunction();<font></font>
setInterval(myTimeoutFunction, 1000);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://developer.mozilla.org/en/window.setTimeout" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setTimeout</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://developer.mozilla.org/En/window.setInterval" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setInterval</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之间有什么区别</font><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第592篇《setTimeout或setInterval？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Davaid</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和setInterval（expression，duration）之间最一般的区别是</font></font></p>
</blockquote>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setTimeout（）将仅在指定的持续时间之后执行一次表达式。</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然而， </font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setInterval（）将在每个指定的持续时间之后在INFINITE-LOOP中执行表达式。</font></font></h2></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenSamA</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需添加已经说过的内容，但代码的setTimeout版本也将达到，</font></font><code>Maximum call stack size</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将使其无法运行。</font><font style="vertical-align: inherit;">由于递归函数没有终止的基本情况，因此您不能使其</font><em><font style="vertical-align: inherit;">永远</font></em><font style="vertical-align: inherit;">运行</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></em></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Harry</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">区别在控制台上很明显：</font></font></p>

<p><img src="https://i.stack.imgur.com/VP6ax.png" alt="在此处输入图片说明"></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村Gil</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嗯，正如我刚学到的，setTimeout在一种情况下更好。</font><font style="vertical-align: inherit;">我总是使用setInterval，我已经在后台运行了超过半小时。</font><font style="vertical-align: inherit;">当我切换回该选项卡时，幻灯片放映（使用了代码）的变化非常快，而不是每5秒更改一次。</font><font style="vertical-align: inherit;">实际上，随着我对其进行更多测试，它确实会再次发生，并且是否是浏览器的错误并不重要，因为使用setTimeout时，这种情况是完全不可能的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥L</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的代码将具有不同的执行间隔，在某些项目（例如在线游戏）中，这是不可接受的。</font><font style="vertical-align: inherit;">首先，应该做什么，以使您的代码以相同的间隔工作，您应该将“ myTimeoutFunction”更改为：</font></font></p>

<pre><code>function myTimeoutFunction()<font></font>
{<font></font>
    setTimeout(myTimeoutFunction, 1000);<font></font>
    doStuff();<font></font>
}<font></font>
myTimeoutFunction()<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改之后，它等于 </font></font></p>

<pre><code>function myTimeoutFunction()<font></font>
{<font></font>
    doStuff();<font></font>
}<font></font>
myTimeoutFunction();<font></font>
setInterval(myTimeoutFunction, 1000);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，由于JS是单线程的，因此结果仍然不稳定。</font><font style="vertical-align: inherit;">目前，如果JS线程忙于处理某些事情，它将无法执行您的回调函数，并且执行将被延迟2-3毫秒。</font><font style="vertical-align: inherit;">如果您每秒执行60次，并且每次都有1-3秒的随机延迟，那将是绝对不可接受的（一分钟后大约为7200毫秒的延迟），我建议您使用以下方式：</font></font></p>

<pre><code>    function Timer(clb, timeout) {<font></font>
        this.clb = clb;<font></font>
        this.timeout = timeout;<font></font>
        this.stopTimeout = null;<font></font>
        this.precision = -1;<font></font>
    }<font></font>
<font></font>
    Timer.prototype.start = function() {<font></font>
        var me = this;<font></font>
        var now = new Date();<font></font>
        if(me.precision === -1) {<font></font>
            me.precision = now.getTime();<font></font>
        }<font></font>
        me.stopTimeout = setTimeout(function(){<font></font>
            me.start()<font></font>
        }, me.precision - now.getTime() + me.timeout);<font></font>
        me.precision += me.timeout;<font></font>
        me.clb();<font></font>
    };<font></font>
<font></font>
    Timer.prototype.stop = function() {<font></font>
        clearTimeout(this.stopTimeout);<font></font>
        this.precision = -1;<font></font>
    };<font></font>
<font></font>
    function myTimeoutFunction()<font></font>
    {<font></font>
        doStuff();<font></font>
    }<font></font>
<font></font>
    var timer = new Timer(myTimeoutFunction, 1000);<font></font>
    timer.start();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此代码将保证稳定的执行期限。</font><font style="vertical-align: inherit;">即使线程将繁忙，您的代码将在1005毫秒后执行，下一次将有995毫秒的超时，结果将保持稳定。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯达蒙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您在setInterval中运行某些函数时，该函数的工作时间比timeout-&gt;更长，浏览器将被卡住。
</font></font><br>
<br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-例如，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">doStuff（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要1500秒。</font><font style="vertical-align: inherit;">要执行并执行：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setInterval（doStuff，1000）; </font></font></strong>
<br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）浏览器运行</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">doStuff（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">耗时1.5秒。</font><font style="vertical-align: inherit;">被执行；
</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）〜1秒后，它将尝试</font><font style="vertical-align: inherit;">再次</font><font style="vertical-align: inherit;">运行</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">doStuff（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是以前的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">doStuff（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍然会执行-&gt;因此浏览器将此运行添加到队列中（先完成后运行）。
</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3,4，..）将相同内容添加到下一个迭代的执行队列中，但是上一个迭代的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">doStuff（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍在进行中……
 </font></font><br> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果，浏览器被卡住了。</font></font></strong>
<br>
<br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为防止此行为，最好的方法是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在setTimeout中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font><strong><font style="vertical-align: inherit;">setTimeout以模拟setInterval</font></strong><font style="vertical-align: inherit;">。
</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要更正setTimeout调用之间的超时，可以使用</font></font><a href="http://www.andrewduthie.com/post/a-self-correcting-setinterval-alternative/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript的setInterval</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">技术的</font><a href="http://www.andrewduthie.com/post/a-self-correcting-setinterval-alternative/" rel="noreferrer"><font style="vertical-align: inherit;">自更正替代</font></a><font style="vertical-align: inherit;">方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony老丝</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">换个角度看：setInterval确保代码以每个给定间隔（即1000ms，或您指定的时间）运行，而setTimeout设置它“等待”运行代码的时间。</font><font style="vertical-align: inherit;">由于运行代码需要花费更多的毫秒，因此加起来总计为1000ms，因此setTimeout在不精确的时间（超过1000ms）再次运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，计时器/倒数不使用setTimeout完成，它们使用setInterval完成，以确保不延迟并且代码以确切的给定间隔运行。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L前端</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setInterval和setTimeout都返回一个计时器ID，您可以使用该ID取消执行，即在触发超时之前。</font><font style="vertical-align: inherit;">要取消，您可以这样调用clearInterval或clearTimeout：</font></font></p>

<pre><code>var timeoutId = setTimeout(someFunction, 1000);<font></font>
clearTimeout(timeoutId);<font></font>
var intervalId = setInterval(someFunction, 1000),<font></font>
clearInterval(intervalId);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样，当您离开页面或关闭浏览器窗口时，超时也会自动取消。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Near</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用setTimeout。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，不同之处是setTimeout调用了该方法一次，setInterval重复调用了该方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一篇很好的文章，解释了它们之间的区别：</font></font><a href="http://www.elated.com/articles/javascript-timers-with-settimeout-and-setinterval/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">教程：带有setTimeout和setInterval的JavaScript计时器</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小宇宙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setInterval使取消将来执行代码变得更加容易。</font><font style="vertical-align: inherit;">如果使用setTimeout，则必须跟踪计时器ID，以防日后要取消它。</font></font></p>

<pre><code>var timerId = null;<font></font>
function myTimeoutFunction()<font></font>
{<font></font>
    doStuff();<font></font>
    timerId = setTimeout(myTimeoutFunction, 1000);<font></font>
}<font></font>
<font></font>
myTimeoutFunction();<font></font>
<font></font>
// later on...<font></font>
clearTimeout(timerId);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font></p>

<pre><code>function myTimeoutFunction()<font></font>
{<font></font>
    doStuff();<font></font>
}<font></font>
<font></font>
myTimeoutFunction();<font></font>
var timerId = setInterval(myTimeoutFunction, 1000);<font></font>
<font></font>
// later on...<font></font>
clearInterval(timerId);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomSam</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们的目的非常不同。</font></font></p>

<pre><code>setInterval()<font></font>
   -&gt; executes a function, over and over again, at specified time intervals  <font></font>
<font></font>
setTimeout()<font></font>
   -&gt; executes a function, once, after waiting a specified number of milliseconds<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就这么简单</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多详细信息，请参见</font></font><a href="http://javascript.info/tutorial/settimeout-setinterval" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://javascript.info/tutorial/settimeout-setinterval</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinTom</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setInterval（）</font></font></h3>

<p><code>setInterval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是基于时间间隔的代码执行方法，具有达到间隔时重复运行指定脚本的本机能力。</font><font style="vertical-align: inherit;">脚本作者</font><font style="vertical-align: inherit;">不应</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其嵌套在其回调函数中以使其循环，因为它</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会</font><strong><em><font style="vertical-align: inherit;">循环</font></em></strong><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">除非您致电，否则它将一直间隔触发</font></font><code>clearInterval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要循环播放动画或时钟滴答声的代码，请使用</font></font><code>setInterval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>function doStuff() {<font></font>
    alert("run your code here when time interval is reached");<font></font>
}<font></font>
var myTimer = setInterval(doStuff, 5000);<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setTimeout（）</font></font></h3>

<p><code>setTimeout()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是，将执行一个脚本仅基于时间的代码执行方法</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一次</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到达的时间间隔时。</font><font style="vertical-align: inherit;">除非您通过将</font><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">嵌套在</font><font style="vertical-align: inherit;">调用运行的函数中来调整</font><font style="vertical-align: inherit;">它来循环脚本，否则</font><font style="vertical-align: inherit;">它</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次重复</font></font><code>setTimeout()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果适合循环播放，除非您致电，否则它将持续间隔触发</font></font><code>clearTimeout()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>function doStuff() {<font></font>
    alert("run your code here when time interval is reached");<font></font>
}<font></font>
var myTimer = setTimeout(doStuff, 5000);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您希望在指定时间段后发生某件事，请使用</font></font><code>setTimeout()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这是因为仅在达到指定间隔时才执行一次。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan小小</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们本质上试图做同样的事情，但是这种</font></font><code>setInterval</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法比该</font></font><code>setTimeout</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">更加准确</font><font style="vertical-align: inherit;">，因为要</font></font><code>setTimeout</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等待1000ms，然后运行该函数，然后设置另一个超时。</font><font style="vertical-align: inherit;">因此，等待时间实际上超过了1000毫秒（如果函数执行时间较长，则等待时间会更长）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管有人可能会认为</font></font><code>setInterval</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将执行</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全相同</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每1000毫秒，这是需要注意的重要</font></font><code>setInterval</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也将推迟，因为JavaScript是不是多线程的语言，这意味着-如果有运行脚本的其他部分-区间将有等待完成。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://jsfiddle.net/GustvandeWal/295jqqqb/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此Fiddle中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以清楚地看到超时将落在后面，而间隔几乎总是以近1个呼叫/秒的速度（脚本正在尝试执行）。</font><font style="vertical-align: inherit;">如果将顶部的速度变量更改为类似20的小值（这意味着它将尝试每秒运行50次），则该间隔将永远不会达到平均每秒50次迭代。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">延迟几乎总是可以忽略不计，但是如果您要编写非常精确的内容，则应该使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自调整计时器</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（本质上是基于超时的计时器，它会根据所创建的延迟不断进行自我调整）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">用户7049302300</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>setTimeout</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想取消超时，</font><font style="vertical-align: inherit;">我发现该</font><font style="vertical-align: inherit;">方法更易于使用：</font></font></p>

<pre><code>function myTimeoutFunction() {<font></font>
   doStuff();<font></font>
   if (stillrunning) {<font></font>
      setTimeout(myTimeoutFunction, 1000);<font></font>
   }<font></font>
}<font></font>
<font></font>
myTimeoutFunction();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样，如果函数中出现问题，它将在第一次出现错误时停止重复，而不是每秒重复一次错误。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
