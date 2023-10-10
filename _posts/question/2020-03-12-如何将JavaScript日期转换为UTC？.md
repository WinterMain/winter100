---
layout: question
title:  如何将JavaScript日期转换为UTC？
date:   2020-03-12T06:19:10.000Z
description: 假设您网站的用户输入了日期范围。2009-1-1 to 2009-1-3您需要将此日期发送到服务器进行某些处理，但是服务器希望所有日期和时间都采...
img: 
author: Harry乐Gil
category: question
answer: 11
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您网站的用户输入了日期范围。</font></font></p>

<pre><code>2009-1-1 to 2009-1-3
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要将此日期发送到服务器进行某些处理，但是服务器希望所有日期和时间都采用UTC。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，假设用户位于阿拉斯加，夏威夷或斐济。</font><font style="vertical-align: inherit;">由于它们所处的时区与UTC完全不同，因此需要将日期范围转换为以下形式：</font></font></p>

<pre><code>2009-1-1T8:00:00 to 2009-1-4T7:59:59
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用JavaScript Date对象，您如何将第一个“本地化”日期范围转换为服务器可以理解的范围？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第982篇《如何将JavaScript日期转换为UTC？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>const event = new Date();</p>

<p>console.log(event.toUTCString());</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Even simpler<br></p>

<pre><code>myvar.setTime(myvar.getTime() + myvar.getTimezoneOffset() * 60000);
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门小小</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>So this is the way I had to do it because i still wanted a JavaScript date object to manipulate as a date and unfortunantly alot of these answers require you to go to a string. </p>

<pre><code>//First i had a string called stringDateVar that i needed to convert to Date<font></font>
var newDate = new Date(stringDateVar)<font></font>
<font></font>
//output: 2019-01-07T04:00:00.000Z<font></font>
//I needed it 2019-01-07T00:00:00.000Z because i had other logic that was dependent on that <font></font>
<font></font>
var correctDate = new Date(newDate.setUTCHours(0))<font></font>
<font></font>
//This will output 2019-01-07T00:00:00.000Z on everything which allows scalability <font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>I know this question is old, but was looking at this same issue, and one option would be to send date.valueOf() to the server instead. the valueOf() function of the javascript Date sends the number of milliseconds since midnight January 1, 1970 UTC.</p>

<p><a href="http://www.w3schools.com/jsref/jsref_valueof_date.asp" rel="nofollow">valueOf()</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱阿飞</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Looking at your question its clear that you just want to send the date range to your backend for further post processing.</p>

<p>I am assuming you are conforming to the standard data guidelines which expect the data to be in a particular format. For example, I use ODATA which is a RESTfull API which expects date time objects to be in the format:-</p>

<blockquote>
  <p>YYYY-MM-DDT00:00:00.</p>
</blockquote>

<p>That can be easily achieved via the snippet posted below(Please change the format as per your requirement). </p>

<p><code>var mydate;//assuming this is my date object which I want to expose
var UTCDateStr = mydate.getUTCFullYear() + "-" + mydate.getUTCMonth() + "-" + mydate.getUTCDate() + "T00:00:00";</code></p>

<p>If on the other hand, you are in my situation wherein you have received a date from your backend, and the browser converts that to your local date. You on the other hand are interested in the UTC date then you can perform the following:-</p>

<p><code>var mydate;//assuming this is my date object which I want to expose
var UTCDate = new Date(mydate);/*create a copy of your date object. Only needed if you for some reason need the original local date*/
UTCDate.setTime(UTCDate.getTime() + UTCDate.getTimezoneOffset() * 60 * 1000);</code></p>

<p>The code snippet above basically adds/subtracts the time added/subtracted by the browser based on the timezone. </p>

<p>For example if I am in EST(GMT-5) and my Service returns a date time object = Wed Aug 17 2016 00:00:00 GMT-0500
my browser automatically subtracts the timezone offset(5hrs) to get my local time. So if I try to fetch the time I get Wed Aug 16 2016 19:00:00 GMT-0500. This causes a lot of problems. There are a lot of libraries out there which will definitely make this easier but I wanted to share the pure JS approach. </p>

<p>For more info please have a look at: <a href="http://praveenlobo.com/blog/how-to-convert-javascript-local-date-to-utc-and-utc-to-local-date/" rel="nofollow">http://praveenlobo.com/blog/how-to-convert-javascript-local-date-to-utc-and-utc-to-local-date/</a> where in I got my inspiration.</p>

<p>Hope this helps!</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>This is what I have done in the past:</p>

<pre><code>var utcDateString = new Date(new Date().toUTCString()).toISOString();
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam梅小胖</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>This function works beautifully for me.</p>

<pre><code>function ParseDateForSave(dateValue) {<font></font>
    // create a new date object<font></font>
    var newDate = new Date(parseInt(dateValue.substr(6)));<font></font>
<font></font>
    // return the UTC version of the date<font></font>
    return newDate.toISOString();<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿猴子</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>var myDate = new Date(); // Set this to your date in whichever timezone.<font></font>
var utcDate = myDate.toUTCString();<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德小哥</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单而愚蠢 </font></font></p>

<pre><code>var date = new Date(); <font></font>
var now_utc =  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(),<font></font>
 date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());<font></font>
<font></font>
 return new Date(now_utc);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三泡芙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的方法：</font></font></p>

<pre><code>var now = new Date();<font></font>
var utc = new Date(now.getTime() + now.getTimezoneOffset() * 60000);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成的</font></font><code>utc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象实际上并不是UTC日期，而是将本地日期更改为与UTC时间匹配（请参见注释）。</font><font style="vertical-align: inherit;">但是，在实践中它确实可以做到。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西理查德</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转换为ISO而不更改日期/时间</font></font></strong></p>

<pre><code>var now = new Date(); // Fri Feb 20 2015 19:29:31 GMT+0530 (India Standard Time) <font></font>
var isoDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString();<font></font>
//OUTPUT : 2015-02-20T19:29:31.238Z<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改日期/时间转换为ISO（日期/时间将更改）</font></font></strong></p>

<pre><code>isoDate = new Date(now).toISOString();<font></font>
//OUTPUT : 2015-02-20T13:59:31.238Z <font></font>
</code></pre>

<p><a href="http://jsfiddle.net/t7v660ea/2/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小提琴链接</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
