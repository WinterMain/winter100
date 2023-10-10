---
layout: question
title:  sleep（）的JavaScript版本是什么？
date:   2020-03-09T10:15:44.000Z
description: 是否有sleep比下面的pausecomp函数（从此处获取）更好的方法来设计JavaScript ？function pausecomp(millis...
img: 
author: 乐米亚
category: question
answer: 16
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有</font></font><code>sleep</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比下面的</font></font><code>pausecomp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数（</font></font><a href="http://www.sean.co.uk/a/webdesign/javascriptdelay.shtm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从此处获取</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">更好的方法来设计</font><font style="vertical-align: inherit;">JavaScript </font><font style="vertical-align: inherit;">？</font></font></p>

<pre><code>function pausecomp(millis)<font></font>
{<font></font>
    var date = new Date();<font></font>
    var curDate = null;<font></font>
    do { curDate = new Date(); }<font></font>
    while(curDate-date &lt; millis);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不是</font></font><a href="https://stackoverflow.com/questions/758688/sleep-in-javascript-delay-between-actions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font><a href="https://stackoverflow.com/questions/758688/sleep-in-javascript-delay-between-actions"><font style="vertical-align: inherit;">Sleep</font></a><font style="vertical-align: inherit;">的重复</font><a href="https://stackoverflow.com/questions/758688/sleep-in-javascript-delay-between-actions"><font style="vertical-align: inherit;">-动作之间的延迟</font></a><font style="vertical-align: inherit;"> ; </font><font style="vertical-align: inherit;">我希望</font><font style="vertical-align: inherit;">在函数中间</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">真正入睡</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而不是在执行一段代码之前没有延迟。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第200篇《sleep（）的JavaScript版本是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I can understand the purpose of a sleep function if you have to deal with synchronous execution. The setInterval and setTimeout functions create a parallel execution thread which returns the execution sequence back to the main program, which is ineffective if you have to wait for a given result. Of course one may use events and handlers, but in some cases is not what is intended.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能需要sleep（）函数而不是使用setTimeout（）的一种情况是，如果您有一个响应用户单击的函数，该函数最终将最终打开一个新的弹出窗口，并且您启动了一些需要很短时间的处理在显示弹出窗口之前完成。</font><font style="vertical-align: inherit;">将打开的窗口移到关闭窗口中通常意味着它会被浏览器阻止。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEvaGreen</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您无法像在JavaScript中那样进行睡眠，或者，您不应这样做。</font><font style="vertical-align: inherit;">运行sleep或while循环将导致用户的浏览器挂起，直到循环完成。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用您所引用的链接中指定的计时器。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimAJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>function sleep(milliseconds) {<font></font>
  var start = new Date().getTime();<font></font>
  for (var i = 0; i &lt; 1e7; i++) {<font></font>
    if ((new Date().getTime() - start) &gt; milliseconds){<font></font>
      break;<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait" rel="noreferrer"><font style="vertical-align: inherit;">Atomics.wait</font></a><font style="vertical-align: inherit;">更新2019</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics/wait" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该在Node 9.3或更高版本中工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Node.js中需要一个非常准确的计时器，因此非常有用。</font><font style="vertical-align: inherit;">但是，似乎浏览器中的支持非常有限。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let ms = 10000;<font></font>
Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行了10秒的计时器基准测试。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用setTimeout，我得到的错误最多为7000微秒。</font><font style="vertical-align: inherit;">（7毫秒）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Atomics，我的错误似乎保持在600微秒以下。</font><font style="vertical-align: inherit;">（0.6毫秒）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro逆天猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经搜索/搜索了很多关于javascript睡眠/等待的网页...如果您希望javascript“运行，延迟，运行”，则没有任何答案。大多数人得到的是“运行，运行（无用）。东西”，“运行”或“运行，运行+延迟运行”...。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我吃了一些汉堡，然后开始思考:::这是一个可行的解决方案...但是您必须将正在运行的代码切碎... :::是的，我知道，这只是一个易于阅读的重构。还是...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">// ............................................ // example1：</font></font></p>

<pre><code>&lt;html&gt;<font></font>
&lt;body&gt;<font></font>
&lt;div id="id1"&gt;DISPLAY&lt;/div&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
//javascript sleep by "therealdealsince1982"; copyrighted 2009<font></font>
//setInterval<font></font>
var i = 0;<font></font>
<font></font>
function run() {<font></font>
    //pieces of codes to run<font></font>
    if (i==0){document.getElementById("id1").innerHTML= "&lt;p&gt;code segment "+ i +" is ran&lt;/p&gt;"; }<font></font>
    if (i==1){document.getElementById("id1").innerHTML= "&lt;p&gt;code segment "+ i +" is ran&lt;/p&gt;"; }<font></font>
    if (i==2){document.getElementById("id1").innerHTML= "&lt;p&gt;code segment "+ i +" is ran&lt;/p&gt;"; }<font></font>
    if (i &gt;2){document.getElementById("id1").innerHTML= "&lt;p&gt;code segment "+ i +" is ran&lt;/p&gt;"; }<font></font>
    if (i==5){document.getElementById("id1").innerHTML= "&lt;p&gt;all code segment finished running&lt;/p&gt;"; clearInterval(t); } //end interval, stops run<font></font>
    i++; //segment of code finished running, next...<font></font>
}<font></font>
<font></font>
run();<font></font>
t=setInterval("run()",1000);<font></font>
<font></font>
&lt;/script&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">// .................................... // example2：</font></font></p>

<pre><code>&lt;html&gt;<font></font>
&lt;body&gt;<font></font>
&lt;div id="id1"&gt;DISPLAY&lt;/div&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
//javascript sleep by "therealdealsince1982"; copyrighted 2009<font></font>
//setTimeout<font></font>
var i = 0;<font></font>
<font></font>
function run() {<font></font>
    //pieces of codes to run, can use switch statement<font></font>
    if (i==0){document.getElementById("id1").innerHTML= "&lt;p&gt;code segment "+ i +" ran&lt;/p&gt;"; sleep(1000);}<font></font>
    if (i==1){document.getElementById("id1").innerHTML= "&lt;p&gt;code segment "+ i +" ran&lt;/p&gt;"; sleep(2000);}<font></font>
    if (i==2){document.getElementById("id1").innerHTML= "&lt;p&gt;code segment "+ i +" ran&lt;/p&gt;"; sleep(3000);}<font></font>
    if (i==3){document.getElementById("id1").innerHTML= "&lt;p&gt;code segment "+ i +" ran&lt;/p&gt;";} //stops automatically<font></font>
    i++;<font></font>
}<font></font>
<font></font>
function sleep(dur) {t=setTimeout("run()",dur);} //starts flow control again after dur<font></font>
<font></font>
run(); //starts<font></font>
&lt;/script&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">// ................. example3：</font></font></p>

<pre><code>&lt;html&gt;<font></font>
&lt;body&gt;<font></font>
&lt;div id="id1"&gt;DISPLAY&lt;/div&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
//javascript sleep by "therealdealsince1982"; copyrighted 2009<font></font>
//setTimeout<font></font>
var i = 0;<font></font>
<font></font>
function flow() {<font></font>
    run(i);<font></font>
    i++; //code segment finished running, increment i; can put elsewhere<font></font>
    sleep(1000);<font></font>
    if (i==5) {clearTimeout(t);} //stops flow, must be after sleep()<font></font>
}<font></font>
<font></font>
function run(segment) {<font></font>
    //pieces of codes to run, can use switch statement<font></font>
    if (segment==0){document.getElementById("id1").innerHTML= "&lt;p&gt;code segment "+ segment +" is ran&lt;/p&gt;"; }<font></font>
    if (segment==1){document.getElementById("id1").innerHTML= "&lt;p&gt;code segment "+ segment +" is ran&lt;/p&gt;"; }<font></font>
    if (segment==2){document.getElementById("id1").innerHTML= "&lt;p&gt;code segment "+ segment +" is ran&lt;/p&gt;"; }<font></font>
    if (segment &gt;2){document.getElementById("id1").innerHTML= "&lt;p&gt;code segment "+ segment +" is ran&lt;/p&gt;"; }<font></font>
}<font></font>
<font></font>
function sleep(dur) {t=setTimeout("flow()",dur);} //starts flow control again after dur<font></font>
<font></font>
flow(); //starts flow<font></font>
&lt;/script&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">// .............. example4：</font></font></p>

<pre><code>&lt;html&gt;<font></font>
&lt;body&gt;<font></font>
&lt;div id="id1"&gt;DISPLAY&lt;/div&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
//javascript sleep by "therealdealsince1982"; copyrighted 2009<font></font>
//setTimeout, switch<font></font>
var i = 0;<font></font>
<font></font>
function flow() {<font></font>
    switch(i)<font></font>
    {<font></font>
        case 0:<font></font>
            run(i);<font></font>
            sleep(1000);<font></font>
            break;<font></font>
        case 1:<font></font>
            run(i);<font></font>
            sleep(2000);<font></font>
            break;<font></font>
        case 5:<font></font>
            run(i);<font></font>
            clearTimeout(t); //stops flow<font></font>
            break;<font></font>
        default:<font></font>
            run(i);<font></font>
            sleep(3000);<font></font>
            break;<font></font>
    }<font></font>
}<font></font>
<font></font>
function run(segment) {<font></font>
    //pieces of codes to run, can use switch statement<font></font>
    if (segment==0){document.getElementById("id1").innerHTML= "&lt;p&gt;code segment "+ segment +" is ran&lt;/p&gt;"; }<font></font>
    if (segment==1){document.getElementById("id1").innerHTML= "&lt;p&gt;code segment "+ segment +" is ran&lt;/p&gt;"; }<font></font>
    if (segment==2){document.getElementById("id1").innerHTML= "&lt;p&gt;code segment "+ segment +" is ran&lt;/p&gt;"; }<font></font>
    if (segment &gt;2){document.getElementById("id1").innerHTML= "&lt;p&gt;code segment "+ segment +" is ran&lt;/p&gt;"; }<font></font>
    i++; //current segment of code finished running, next...<font></font>
}<font></font>
<font></font>
function sleep(dur) {t=setTimeout("flow()",dur);} //starts flow control again after dur<font></font>
<font></font>
flow(); //starts flow control for first time...<font></font>
&lt;/script&gt;<font></font>
&lt;/body&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将setTimeOut封装在Promise中以实现与其他异步任务的代码一致性：</font><a href="http://jsfiddle.net/a4gjhpgd/" rel="noreferrer"><font style="vertical-align: inherit;">Fiddle中的</font></a><font style="vertical-align: inherit;"> Demo</font></font><a href="http://jsfiddle.net/a4gjhpgd/" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<pre><code>function sleep(ms)<font></font>
{<font></font>
    return(new Promise(function(resolve, reject) {        <font></font>
        setTimeout(function() { resolve(); }, ms);        <font></font>
    }));    <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样使用：</font></font></p>

<pre><code>sleep(2000).then(function() { <font></font>
   // Do something<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您曾经使用Promises，很容易记住语法。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>  await new Promise(resolve =&gt; setTimeout(resolve, 2000));</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保您的调用函数是异步的 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">经过验证且工作正常</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinLEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义要执行的函数，如下所示：</font></font></p>

<pre><code>function alertWorld(){<font></font>
  alert("Hello World");<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后使用setTimeout方法安排其执行：</font></font></p>

<pre><code>setTimeout(alertWorld,1000)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意两件事</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二个参数是时间（以毫秒为单位）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为第一个参数，您只需要传递函数的名称（引用），而不带括号</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam神乐番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我个人很简单：</font></font></p>

<pre><code>function sleep(seconds){<font></font>
    var waitUntil = new Date().getTime() + seconds*1000;<font></font>
    while(new Date().getTime() &lt; waitUntil) true;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后：</font></font></p>

<pre><code>sleep(2); // Sleeps for 2 seconds
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在使用它来在P5js中创建脚本时创建假加载时间</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">干得好。</font><font style="vertical-align: inherit;">如代码所示，不要做坏开发者，并在网站上使用它。</font><font style="vertical-align: inherit;">这是一个开发实用程序功能。</font></font></p>

<pre><code>// Basic sleep function based on ms.<font></font>
// DO NOT USE ON PUBLIC FACING WEBSITES.<font></font>
function sleep(ms) {<font></font>
    var unixtime_ms = new Date().getTime();<font></font>
    while(new Date().getTime() &lt; unixtime_ms + ms) {}<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐阿飞</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也搜索了睡眠解决方案（不是用于生产代码，仅用于开发/测试），并找到了这篇文章：</font></font></p>

<p><a href="http://narayanraman.blogspot.com/2005/12/javascript-sleep-or-wait.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://narayanraman.blogspot.com/2005/12/javascript-sleep-or-wait.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...这是客户端解决方案的另一个链接：</font><a href="http://www.devcheater.com/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://www.devcheater.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.devcheater.com/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，在调用时</font></font><code>alert()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，代码也会被暂停，同时显示警报-需要找到一种不显示警报但获得相同效果的方法。</font><font style="vertical-align: inherit;">:)</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这是一个古老的问题，但是如果（像我一样）您在Rhino中使用Javascript，则可以使用...</font></font></p>

<pre><code>try<font></font>
{<font></font>
  java.lang.Thread.sleep(timeInMilliseconds);<font></font>
}<font></font>
catch (e)<font></font>
{<font></font>
  /*<font></font>
   * This will happen if the sleep is woken up - you might want to check<font></font>
   * if enough time has passed and sleep again if not - depending on how<font></font>
   * important the sleep time is to you.<font></font>
   */<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅用于debug / dev</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果对某人有用，我将其发布</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有趣的是，在Firebug（可能还有其他js控制台）中，仅在指定的睡眠持续时间之后，按Enter后什么也没有发生（...）</font></font></p>

<pre><code>function sleepFor( sleepDuration ){<font></font>
    var now = new Date().getTime();<font></font>
    while(new Date().getTime() &lt; now + sleepDuration){ /* do nothing */ } <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用示例：</font></font></p>

<pre><code>function sleepThenAct(){ sleepFor(2000); console.log("hello js sleep !"); }
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋小卤蛋小哥</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我同意其他海报，繁忙的睡眠只是一个坏主意。</font></font></p>

<p>However, setTimeout does not hold up execution, it executes the next line of the function immediately after the timeout is SET, not after the timeout expires, so that does not accomplish the same task that a sleep would accomplish.</p>

<p>The way to do it is to breakdown your function in to before and after parts. </p>

<pre><code>function doStuff()<font></font>
{<font></font>
  //do some things<font></font>
  setTimeout(continueExecution, 10000) //wait ten seconds before continuing<font></font>
}<font></font>
<font></font>
function continueExecution()<font></font>
{<font></font>
   //finish doing things after the pause<font></font>
}<font></font>
</code></pre>

<p>Make sure your function names still accurately describe what each piece is doing (I.E. GatherInputThenWait and CheckInput, rather than funcPart1 and funcPart2)</p>

<p><strong>Edit</strong> </p>

<p>This method achieves the purpose of not executing the lines of code you decide until AFTER your timeout, while still returning control back to the client PC to execute whatever else it has queued up.</p>

<p><strong>Further Edit</strong></p>

<p>As pointed out in the comments this will absolutely NOT WORK in a loop. You could do some fancy (ugly) hacking to make it work in a loop, but in general that will just make for disastrous spaghetti code.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy小胖Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（请参阅</font></font><a href="https://stackoverflow.com/a/39914235/11236"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2016年更新的答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为执行一个动作，等待，然后执行另一个动作是完全合理的。</font><font style="vertical-align: inherit;">如果您习惯于使用多线程语言编写代码，那么您可能会想到在一段特定的时间内让执行程序唤醒您的线程。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里的问题是JavaScript是基于事件的单线程模型。</font><font style="vertical-align: inherit;">虽然在特定情况下，让整个引擎等待几秒钟可能会很好，但是通常这是一种不好的做法。</font><font style="vertical-align: inherit;">假设我想在编写自己的函数时使用您的函数？</font><font style="vertical-align: inherit;">当我调用您的方法时，我的方法将全部冻结。</font><font style="vertical-align: inherit;">如果JavaScript可以某种方式保留函数的执行上下文，将其存储在某个地方，然后将其带回并稍后继续，则可能会发生睡眠，但这基本上就是线程化。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您几乎会被别人的建议所束缚-您需要将代码分解为多个功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么，您的问题是一个错误的选择。</font><font style="vertical-align: inherit;">您无法以自己想要的方式入睡，也不应追求您建议的解决方案。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
