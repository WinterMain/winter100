---
layout: question
title:  停止JavaScript中的setInterval调用
date:   2020-03-09T13:05:26.000Z
description: 我setInterval(fname, 10000);用来在JavaScript中每10秒调用一次函数。是否可以在某个事件中停止调用它？我希望用户能够...
img: 
author: 米亚神无
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><code>setInterval(fname, 10000);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用来在JavaScript中每10秒调用一次函数。</font><font style="vertical-align: inherit;">是否可以在某个事件中停止调用它？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望用户能够停止重复刷新数据。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用setTimeOut在一段时间后停止间隔。</font></font></p>

<pre><code>var interVal = setInterval(function(){console.log("Running")  }, 1000);<font></font>
 setTimeout(function (argument) {<font></font>
    clearInterval(interVal);<font></font>
 },10000);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">clearInterval（）方法可用于清除使用setInterval（）方法设置的计时器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">setInterval始终返回ID值。</font><font style="vertical-align: inherit;">可以在clearInterval（）中传递此值以停止计时器。</font><font style="vertical-align: inherit;">这是一个计时器的示例，该计时器从30开始并在其变为0时停止。</font></font></p>

<pre><code>  let time = 30;<font></font>
  const timeValue = setInterval((interval) =&gt; {<font></font>
  time = this.time - 1;<font></font>
  if (time &lt;= 0) {<font></font>
    clearInterval(timeValue);<font></font>
  }<font></font>
}, 1000);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果将返回值设置</font></font><code>setInterval</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为变量，则可以使用</font></font><code>clearInterval</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它来停止它。</font></font></p>

<pre><code>var myTimer = setInterval(...);<font></font>
clearInterval(myTimer);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以设置一个新变量，并在每次运行时使它递增++（加1），然后使用条件语句结束该变量：</font></font></p>

<pre><code>var intervalId = null;<font></font>
var varCounter = 0;<font></font>
var varName = function(){<font></font>
     if(varCounter &lt;= 10) {<font></font>
          varCounter++;<font></font>
          /* your code goes here */<font></font>
     } else {<font></font>
          clearInterval(intervalId);<font></font>
     }<font></font>
};<font></font>
<font></font>
$(document).ready(function(){<font></font>
     intervalId = setInterval(varName, 10000);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望它会有所帮助，这是正确的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>setInterval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回一个间隔ID，您可以将其传递给</font></font><code>clearInterval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var refreshIntervalId = setInterval(fname, 10000);<font></font>
<font></font>
/* later */<font></font>
clearInterval(refreshIntervalId);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅该文档为</font></font><a href="https://developer.mozilla.org/en/DOM/window.setInterval" rel="noreferrer"><code>setInterval()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://developer.mozilla.org/en/DOM/window.clearInterval" rel="noreferrer"><code>clearInterval()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
