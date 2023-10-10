---
layout: question
title:  如何将30分钟添加到JavaScript Date对象？
date:   2020-03-11T03:20:39.000Z
description: 我想要一个比另一个Date对象晚30分钟的Date对象。我该如何使用JavaScript？...
img: 
author: 米亚神无
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要一个比另一个Date对象晚30分钟的Date对象。</font><font style="vertical-align: inherit;">我该如何使用JavaScript？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第593篇《如何将30分钟添加到JavaScript Date对象？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>You could do this:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let thirtyMinutes = 30 * 60 * 1000; // convert 30 minutes to milliseconds<font></font>
let date1 = new Date();<font></font>
let date2 = new Date(date1.getTime() + thirtyMinutes);<font></font>
console.log(date1);<font></font>
console.log(date2);</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝番长</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Use an existing library known to handle the quirks involved in dealing with time calculations. My current favorite is <a href="http://momentjs.com/" rel="nofollow">moment.js</a>.</p>

<pre><code>&lt;script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.13.0/moment.js"&gt;&lt;/script&gt;<font></font>
&lt;script&gt;<font></font>
 var now = moment(); // get "now"<font></font>
 console.log(now.toDate()); // show original date<font></font>
 var thirty = moment(now).add(30,"minutes"); // clone "now" object and add 30 minutes, taking into account weirdness like crossing DST boundries or leap-days, -minutes, -seconds.<font></font>
 console.log(thirty.toDate()); // show new date<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Here is the <strong>ES6</strong> version:</p>

<pre><code>let getTimeAfter30Mins = () =&gt; {<font></font>
  let timeAfter30Mins = new Date();<font></font>
  timeAfter30Mins = new Date(timeAfter30Mins.setMinutes(timeAfter30Mins.getMinutes() + 30));<font></font>
};<font></font>
</code></pre>

<p>Call it like:</p>

<pre><code>getTimeAfter30Mins();
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Green逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>This is what I do which seems to work quite well:</p>

<pre><code>Date.prototype.addMinutes = function(minutes) {<font></font>
    var copiedDate = new Date(this.getTime());<font></font>
    return new Date(copiedDate.getTime() + minutes * 60000);<font></font>
}<font></font>
</code></pre>

<p>Then you can just call this like this:</p>

<pre><code>var now = new Date();<font></font>
console.log(now.addMinutes(50));<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥阿飞神奇</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Maybe something like this?</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var d = new Date();<font></font>
var v = new Date();<font></font>
v.setMinutes(d.getMinutes()+30);<font></font>
<font></font>
console.log(v)</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐十三</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var oldDateObj = new Date();<font></font>
var newDateObj = new Date();<font></font>
newDateObj.setTime(oldDateObj.getTime() + (30 * 60 * 1000));<font></font>
console.log(newDateObj);</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">白月光</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>I always create 7 functions, to work with date in JS: addSeconds, addMinutes, addHours, addDays, addWeeks, addMonths, addYears.</p>

<p>You can see an example here: <a href="http://jsfiddle.net/tiagoajacobi/YHA8x/">http://jsfiddle.net/tiagoajacobi/YHA8x/</a></p>

<p>How to use:</p>

<pre><code>var now = new Date();<font></font>
console.log(now.addMinutes(30));<font></font>
console.log(now.addWeeks(3));<font></font>
</code></pre>

<p>This are the functions:</p>

<pre><code>        Date.prototype.addSeconds = function(seconds) {<font></font>
            this.setSeconds(this.getSeconds() + seconds);<font></font>
            return this;<font></font>
        };<font></font>
<font></font>
        Date.prototype.addMinutes = function(minutes) {<font></font>
            this.setMinutes(this.getMinutes() + minutes);<font></font>
            return this;<font></font>
        };<font></font>
<font></font>
        Date.prototype.addHours = function(hours) {<font></font>
            this.setHours(this.getHours() + hours);<font></font>
            return this;<font></font>
        };<font></font>
<font></font>
        Date.prototype.addDays = function(days) {<font></font>
            this.setDate(this.getDate() + days);<font></font>
            return this;<font></font>
        };<font></font>
<font></font>
        Date.prototype.addWeeks = function(weeks) {<font></font>
            this.addDays(weeks*7);<font></font>
            return this;<font></font>
        };<font></font>
<font></font>
        Date.prototype.addMonths = function (months) {<font></font>
            var dt = this.getDate();<font></font>
<font></font>
            this.setMonth(this.getMonth() + months);<font></font>
            var currDt = this.getDate();<font></font>
<font></font>
            if (dt !== currDt) {  <font></font>
                this.addDays(-currDt);<font></font>
            }<font></font>
<font></font>
            return this;<font></font>
        };<font></font>
<font></font>
        Date.prototype.addYears = function(years) {<font></font>
            var dt = this.getDate();<font></font>
<font></font>
            this.setFullYear(this.getFullYear() + years);<font></font>
<font></font>
            var currDt = this.getDate();<font></font>
<font></font>
            if (dt !== currDt) {  <font></font>
                this.addDays(-currDt);<font></font>
            }<font></font>
<font></font>
            return this;<font></font>
        };<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var now = new Date();<font></font>
now.setMinutes(now.getMinutes() + 30); // timestamp<font></font>
now = new Date(now); // Date object<font></font>
console.log(now);</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿逆天西门</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>var d1 = new Date ();<font></font>
var d2 = new Date ( d1 );<font></font>
d2.setMinutes ( d1.getMinutes() + 30 );<font></font>
alert ( d2 );<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
