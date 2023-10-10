---
layout: question
title:  页面加载后如何使JavaScript执行？
date:   2020-03-11T04:35:28.000Z
description: 我正在使用<script>inside 执行外部脚本<head>。现在，由于脚本是在页面加载之前执行的，因此我无法访问<body>。在文档“加载”后（...
img: 
author: 飞云Tom小宇宙
category: question
answer: 15
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">inside </font><font style="vertical-align: inherit;">执行外部脚本</font></font><code>&lt;head&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，由于脚本是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面加载</font><strong><font style="vertical-align: inherit;">之前</font></strong><font style="vertical-align: inherit;">执行</font><font style="vertical-align: inherit;">的，因此我无法访问</font></font><code>&lt;body&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在文档“加载”后（HTML已完全下载并在RAM中），我想执行一些JavaScript。</font><font style="vertical-align: inherit;">执行脚本时，是否有任何我可以挂上的事件，这些事件将在页面加载时触发？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第682篇《页面加载后如何使JavaScript执行？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>use self execution onload function</p>

<pre><code>window.onload = function (){<font></font>
    /* statements */<font></font>
}();   <font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝飞云</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>My advise use <code>asnyc</code> attribute for script tag thats help you to load the external scripts after page load </p>

<pre><code>&lt;script type="text/javascript" src="a.js" async&gt;&lt;/script&gt;<font></font>
&lt;script type="text/javascript" src="b.js" async&gt;&lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LJinJin</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script type="text/javascript"&gt;<font></font>
$(window).bind("load", function() { <font></font>
<font></font>
// your javascript event here<font></font>
<font></font>
});<font></font>
&lt;/script&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan小小斯丁</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Use this code with jQuery library, this would work perfectly fine.</p>

<pre class="lang-js prettyprint-override"><code>$(window).bind("load", function() { <font></font>
<font></font>
  // your javascript event<font></font>
<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖十三Stafan</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Just define <code>&lt;body onload="aFunction()"&gt;</code> that will be called after the page has been loaded. Your code in the script is than enclosed by <code>aFunction() { }</code>.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEvaGreen</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;body onload="myFunction()"&gt;
</code></pre>

<p>This code works well.</p>

<p>But <code>window.onload</code> method has various dependencies. So it may not work all the time.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva小胖</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是jQuery， </font></font></p>

<p><code>$(function() {...});</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相当于 </font></font></p>

<p><code>$(document).ready(function () { })</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或另一只短手：</font></font></p>

<p><code>$().ready(function () { })</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅</font></font><a href="https://stackoverflow.com/questions/3908724/what-event-does-jquery-function-fire-on"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JQuery $ function（）触发什么事件？</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://api.jquery.com/ready/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://api.jquery.com/ready/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LLSam</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;script type="text/javascript"&gt;<font></font>
  function downloadJSAtOnload() {<font></font>
   var element = document.createElement("script");<font></font>
   element.src = "defer.js";<font></font>
   document.body.appendChild(element);<font></font>
  }<font></font>
  if (window.addEventListener)<font></font>
   window.addEventListener("load", downloadJSAtOnload, false);<font></font>
  else if (window.attachEvent)<font></font>
   window.attachEvent("onload", downloadJSAtOnload);<font></font>
  else window.onload = downloadJSAtOnload;<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><a href="http://www.feedthebot.com/pagespeed/defer-loading-javascript.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.feedthebot.com/pagespeed/defer-loading-javascript.html</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Itachi西里</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看钩子</font></font><code>document.onload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或jQuery </font></font><code>$(document).load(...)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">仲羽蛋蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><a href="http://jsfiddle.net/aash1010/w9s0pe96/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作小提琴</font></font></a></strong></p>

<pre><code>&lt;!DOCTYPE html&gt;<font></font>
&lt;html&gt;<font></font>
&lt;head&gt;<font></font>
&lt;script&gt;<font></font>
function myFunction()<font></font>
{<font></font>
   alert("Page is loaded");<font></font>
}<font></font>
&lt;/script&gt;<font></font>
&lt;/head&gt;<font></font>
<font></font>
&lt;body onload="myFunction()"&gt;<font></font>
&lt;h1&gt;Hello World!&lt;/h1&gt;<font></font>
&lt;/body&gt;    <font></font>
&lt;/html&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝小卤蛋梅</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在体内放置“ onload”属性</font></font></p>

<pre><code>...&lt;body onload="myFunction()"&gt;...
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，如果您使用的是jQuery，则可以 </font></font></p>

<pre><code>$(document).ready(function(){ /*code here*/ }) <font></font>
<font></font>
or <font></font>
<font></font>
$(window).load(function(){ /*code here*/ })<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望它能回答您的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，$（window）.load将在页面上呈现文档后执行。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿蛋蛋凯</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请记住，加载页面有多个阶段。</font><font style="vertical-align: inherit;">顺便说一句，这是纯JavaScript</font></font></h1>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ DOMContentLoaded”</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">初始HTML文档已完全加载和解析</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而没有等待样式表，图像和子帧完成加载</font><font style="vertical-align: inherit;">时，将</font><em><font style="vertical-align: inherit;">引发</font></em><font style="vertical-align: inherit;">此事件</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在此阶段，您可以根据用户设备或带宽速度以编程方式优化图像和CSS的加载。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在加载DOM之后执行（在img和css之前）： </font></font></p>

<pre><code>document.addEventListener("DOMContentLoaded", function(){<font></font>
    //....<font></font>
});<font></font>
</code></pre>

<blockquote>
  <p>Note: Synchronous JavaScript pauses parsing of the DOM.
  If you want the DOM to get parsed as fast as possible after the user requested the page, you could <strong>turn your JavaScript asynchronous</strong> and <a href="https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery" rel="noreferrer">optimize loading of stylesheets</a></p>
</blockquote>

<h3>"load"</h3>

<p>A very different event, <strong>load</strong>, should only be used to detect a <em>fully-loaded page</em>. It is an incredibly popular mistake to use load where DOMContentLoaded would be much more appropriate, so be cautious.</p>

<p>Exectues after everything is loaded and parsed: </p>

<pre><code>window.addEventListener("load", function(){<font></font>
    // ....<font></font>
});<font></font>
</code></pre>

<hr>

<p><em>MDN Resources:</em></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded" rel="noreferrer">https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/Events/load" rel="noreferrer">https://developer.mozilla.org/en-US/docs/Web/Events/load</a></p>

<p><em>MDN list of all events:</em></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/Events" rel="noreferrer">https://developer.mozilla.org/en-US/docs/Web/Events</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro小卤蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个基于页面加载后延迟js加载的脚本，</font></font></p>

<pre><code>&lt;script type="text/javascript"&gt;<font></font>
  function downloadJSAtOnload() {<font></font>
      var element = document.createElement("script");<font></font>
      element.src = "deferredfunctions.js";<font></font>
      document.body.appendChild(element);<font></font>
  }<font></font>
<font></font>
  if (window.addEventListener)<font></font>
      window.addEventListener("load", downloadJSAtOnload, false);<font></font>
  else if (window.attachEvent)<font></font>
      window.attachEvent("onload", downloadJSAtOnload);<font></font>
  else window.onload = downloadJSAtOnload;<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我该放在哪里？</font></font></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将代码粘贴到HTML中的</font></font><code>&lt;/body&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">之前</font><font style="vertical-align: inherit;">（靠近HTML文件底部）。</font></font></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它有什么作用？</font></font></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该代码表示​​等待整个文档加载，然后加载外部文件</font></font><code>deferredfunctions.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是上述代码的示例</font></font><a href="https://varvy.com/pagespeed/defer/defer-example-solved.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-JS的延迟渲染</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是根据</font></font><a href="https://developers.google.com/speed/docs/insights/BlockingJS#deferJS" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">javascript</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> pagespeed google概念的</font><a href="https://varvy.com/pagespeed/defer-loading-javascript.html" rel="noreferrer"><font style="vertical-align: inherit;">延迟加载</font></a><font style="vertical-align: inherit;">编写的，也是从这篇文章中获得参考的。</font></font><a href="https://varvy.com/pagespeed/defer-loading-javascript.html" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Mandy</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果脚本已加载</font></font><code>&lt;head&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到文档的中，则可以使用</font></font><code>defer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">script标记中</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">属性。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></strong></p>

<pre><code>&lt;script src="demo_defer.js" defer&gt;&lt;/script&gt;
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></strong></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">推迟</font></font></strong></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置此布尔值属性是为了向浏览器指示脚本应在解析文档之后但在触发DOMContentLoaded之前执行。 </font></font></p>
  
  <p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不存在src属性（即，对于内联脚本），则不得使用此属性，在这种情况下，它将无效。</font></font></em></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要对动态插入的脚本实现类似的效果，请改用async = false。</font><font style="vertical-align: inherit;">具有defer属性的脚本将按照它们在文档中出现的顺序执行。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯达蒙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些解决方案将起作用：</font></font></p>

<pre><code>&lt;body onload="script();"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>document.onload = function ...
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至</font></font></p>

<pre><code>window.onload = function ...
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后一个选项是更好的选择，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它不</font></font><a href="http://en.wikipedia.org/wiki/Unobtrusive_JavaScript" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引人注目</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且被</font></font><a href="https://stackoverflow.com/questions/807878/javascript-that-executes-after-page-load#comment617710_807891"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">认为是更标准的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
