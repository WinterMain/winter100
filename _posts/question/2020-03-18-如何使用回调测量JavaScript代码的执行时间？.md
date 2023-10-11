---
layout: question
title:  如何使用回调测量JavaScript代码的执行时间？
date:   2020-03-18T10:13:56.000Z
description: 我有一段使用node.js解释器执行的JavaScript代码。for(var i = 1; i < LIMIT; i++) {  var user...
img: 
author: 凯L
category: question
answer: 4
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一段使用</font></font><code>node.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释器</font><font style="vertical-align: inherit;">执行的JavaScript代码</font><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-js prettyprint-override"><code>for(var i = 1; i &lt; LIMIT; i++) {<font></font>
  var user = {<font></font>
    id: i,<font></font>
    name: "MongoUser [" + i + "]"<font></font>
  };<font></font>
  db.users.save(user, function(err, saved) {<font></font>
    if(err || !saved) {<font></font>
      console.log("Error");<font></font>
    } else {<font></font>
      console.log("Saved");<font></font>
    }<font></font>
  });<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何测量这些数据库插入操作所花费的时间？</font><font style="vertical-align: inherit;">我可以计算这段代码前后的日期值之差，但是由于代码的异步特性，这将是不正确的。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2137篇《如何使用回调测量JavaScript代码的执行时间？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Itachi</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>I had same issue while moving from AWS to Azure</p>

<p>For express &amp; aws, you can already use, existing time() and timeEnd()</p>

<p>For Azure, use this:
<a href="https://github.com/manoharreddyporeddy/my-nodejs-notes/blob/master/performance_timers_helper_nodejs_azure_aws.js" rel="nofollow noreferrer">https://github.com/manoharreddyporeddy/my-nodejs-notes/blob/master/performance_timers_helper_nodejs_azure_aws.js</a></p>

<p>These time() and timeEnd() use the existing hrtime() function, which give high-resolution real time.</p>

<p>Hope this helps.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猿阳光</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>You could give <a href="http://benchmarkjs.com/" rel="nofollow">Benchmark.js</a> a try. It supports many platforms among them also node.js. </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐小胖</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><pre><code>var start = +new Date();<font></font>
var counter = 0;<font></font>
for(var i = 1; i &lt; LIMIT; i++){<font></font>
    ++counter;<font></font>
    db.users.save({id : i, name : "MongoUser [" + i + "]"}, function(err, saved) {<font></font>
          if( err || !saved ) console.log("Error");<font></font>
          else console.log("Saved");<font></font>
          if (--counter === 0) <font></font>
          {<font></font>
              var end = +new Date();<font></font>
              console.log("all users saved in " + (end-start) + " milliseconds");<font></font>
          }<font></font>
    });<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan小胖</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Node.js </font></font><a href="http://nodejs.org/api/console.html#console_console_time_label"><code>console.time()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://nodejs.org/api/console.html#console_console_timeend_label"><code>console.timeEnd()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var i;<font></font>
console.time("dbsave");<font></font>
<font></font>
for(i = 1; i &lt; LIMIT; i++){<font></font>
    db.users.save({id : i, name : "MongoUser [" + i + "]"}, end);<font></font>
}<font></font>
<font></font>
end = function(err, saved) {<font></font>
    console.log(( err || !saved )?"Error":"Saved");<font></font>
    if(--i === 1){console.timeEnd("dbsave");}<font></font>
};<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
