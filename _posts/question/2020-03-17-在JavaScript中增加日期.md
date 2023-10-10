---
layout: question
title:  在JavaScript中增加日期
date:   2020-03-17T03:44:12.000Z
description: 我需要在JavaScript中将日期值增加一天。例如，我的日期值为2010-09-11，我需要将第二天的日期存储在JavaScript变量中。如何...
img: 
author: Stafan逆天
category: question
answer: 10
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要在JavaScript中将日期值增加一天。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，我的日期值为2010-09-11，我需要将第二天的日期存储在JavaScript变量中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何将日期增加一天？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1853篇《在JavaScript中增加日期》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro小卤蛋A</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>Timezone/daylight savings aware date increment for JavaScript dates:</p>

<pre><code>function nextDay(date) {<font></font>
    const sign = v =&gt; (v &lt; 0 ? -1 : +1);<font></font>
    const result = new Date(date.getTime());<font></font>
    result.setDate(result.getDate() + 1);<font></font>
    const offset = result.getTimezoneOffset();<font></font>
    return new Date(result.getTime() + sign(offset) * offset * 60 * 1000);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪十三</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>Via native JS, to add one day you may do following:</p>

<pre><code>let date = new Date(); // today<font></font>
date.setDate(date.getDate() + 1) // tomorrow<font></font>
</code></pre>

<p>Another option is to use <a href="https://momentjs.com/" rel="nofollow noreferrer"><code>moment</code></a> library:</p>

<pre><code>const date = moment().add(14, "days").toDate()
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿阿飞</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>Not entirelly sure if it is a BUG(Tested Firefox 32.0.3 and Chrome 38.0.2125.101), but the following code will fail on Brazil (-3 GMT):</p>

<pre><code>Date.prototype.shiftDays = function(days){    <font></font>
  days = parseInt(days, 10);<font></font>
  this.setDate(this.getDate() + days);<font></font>
  return this;<font></font>
}<font></font>
<font></font>
$date = new Date(2014, 9, 16,0,1,1);<font></font>
$date.shiftDays(1);<font></font>
console.log($date+"");<font></font>
$date.shiftDays(1);<font></font>
console.log($date+"");<font></font>
$date.shiftDays(1);<font></font>
console.log($date+"");<font></font>
$date.shiftDays(1);<font></font>
console.log($date+"");<font></font>
</code></pre>

<p>Result:</p>

<pre><code>Fri Oct 17 2014 00:01:01 GMT-0300<font></font>
Sat Oct 18 2014 00:01:01 GMT-0300<font></font>
Sat Oct 18 2014 23:01:01 GMT-0300<font></font>
Sun Oct 19 2014 23:01:01 GMT-0200<font></font>
</code></pre>

<p>Adding one Hour to the date, will make it work perfectly (but does not solve the problem).</p>

<pre><code>$date = new Date(2014, 9, 16,0,1,1);
</code></pre>

<p>Result:</p>

<pre><code>Fri Oct 17 2014 01:01:01 GMT-0300<font></font>
Sat Oct 18 2014 01:01:01 GMT-0300<font></font>
Sun Oct 19 2014 01:01:01 GMT-0200<font></font>
Mon Oct 20 2014 01:01:01 GMT-0200<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙LEY</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>Get the string value of the date using the dateObj.toJSON() method Ref: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON" rel="nofollow">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON</a>
Slice the date from the returned value and then increment by the number of days you want.</p>

<pre><code>var currentdate = new Date();<font></font>
currentdate.setDate(currentdate.getDate() + 1);<font></font>
var tomorrow = currentdate.toJSON().slice(0,10);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖阳光</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>I feel that nothing is safer than <code>.getTime()</code> and <code>.setTime()</code>, so this should be the best, and performant as well.</p>

<pre class="lang-js prettyprint-override"><code>const d = new Date()<font></font>
console.log(d.setTime(d.getTime() + 1000 * 60 * 60 * 24)) // MILLISECONDS<font></font>
</code></pre>

<p><code>.setDate()</code> for invalid Date (like 31 + 1) is too dangerous, and it depends on the browser implementation.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门蛋蛋</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><pre><code> Date.prototype.AddDays = function (days) {<font></font>
    days = parseInt(days, 10);<font></font>
    return new Date(this.valueOf() + 1000 * 60 * 60 * 24 * days);<font></font>
}<font></font>
</code></pre>

<p>Example</p>

<pre><code>var dt = new Date();<font></font>
console.log(dt.AddDays(-30));<font></font>
console.log(dt.AddDays(-10));<font></font>
console.log(dt.AddDays(-1));<font></font>
console.log(dt.AddDays(0));<font></font>
console.log(dt.AddDays(1));<font></font>
console.log(dt.AddDays(10));<font></font>
console.log(dt.AddDays(30));<font></font>
</code></pre>

<p>Result</p>

<pre><code>2017-09-03T15:01:37.213Z<font></font>
2017-09-23T15:01:37.213Z<font></font>
2017-10-02T15:01:37.213Z<font></font>
2017-10-03T15:01:37.213Z<font></font>
2017-10-04T15:01:37.213Z<font></font>
2017-10-13T15:01:37.213Z<font></font>
2017-11-02T15:01:37.213Z<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙十三</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>Two methods: </p>

<p>1:</p>

<pre><code>var a = new Date()<font></font>
// no_of_days is an integer value<font></font>
var b = new Date(a.setTime(a.getTime() + no_of_days * 86400000)<font></font>
</code></pre>

<p>2: Similar to the previous method</p>

<pre><code>var a = new Date()<font></font>
// no_of_days is an integer value<font></font>
var b = new Date(a.setDate(a.getDate() + no_of_days)<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村LEY</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>Getting the next 5 days:</p>

<pre><code>var date = new Date(),<font></font>
d = date.getDate(),<font></font>
m = date.getMonth(),<font></font>
y = date.getFullYear();<font></font>
<font></font>
<font></font>
for(i=0; i &lt; 5; i++){<font></font>
var curdate = new Date(y, m, d+i)<font></font>
console.log(curdate)<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi理查德</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><pre><code>var myDate = new Date();<font></font>
<font></font>
//add a day to the date<font></font>
myDate.setDate(myDate.getDate() + 1);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva宝儿理查德</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的方法是转换为毫秒并添加1000 * 60 * 60 * 24毫秒，例如：</font></font></p>

<pre><code>var tomorrow = new Date(today.getTime()+1000*60*60*24);
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
