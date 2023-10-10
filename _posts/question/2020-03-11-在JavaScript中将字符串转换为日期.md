---
layout: question
title:  在JavaScript中将字符串转换为日期
date:   2020-03-11T12:25:28.000Z
description: 如何在JavaScript中将字符串转换为日期？var st = "date in some format"var dt = new date();...
img: 
author: 小宇宙老丝
category: question
answer: 11
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在JavaScript中将字符串转换为日期？</font></font></p>

<pre><code>var st = "date in some format"<font></font>
var dt = new date();<font></font>
<font></font>
var dt_st= //st in date format same as dt<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第808篇《在JavaScript中将字符串转换为日期》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenGil</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>ISO 8601-esque datestrings, as excellent as the standard is, are still not widely supported. </p>

<p>This is a great resource to figure out which datestring format you should use: </p>

<p><a href="http://dygraphs.com/date-formats.html" rel="nofollow">http://dygraphs.com/date-formats.html</a></p>

<p>Yes, that means that your datestring could be as simple as  as opposed to </p>

<p><code>"2014/10/13 23:57:52"</code>
instead of
<code>"2014-10-13 23:57:52"</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三老丝</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>You can using regex to parse string to detail time then create date or any return format like :</p>

<pre><code>//example : let dateString = "2018-08-17 01:02:03.4"<font></font>
<font></font>
function strToDate(dateString){<font></font>
    let reggie = /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2}).(\d{1})/<font></font>
  , [,year, month, day, hours, minutes, seconds, miliseconds] = reggie.exec(dateString)<font></font>
  , dateObject = new Date(year, month-1, day, hours, minutes, seconds, miliseconds);<font></font>
  return dateObject;<font></font>
}<font></font>
alert(strToDate(dateString));<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪小卤蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Yet another way to do it:</p>

<pre><code>String.prototype.toDate = function(format) {<font></font>
    format = format || "dmy";<font></font>
    var separator = this.match(/[^0-9]/)[0];<font></font>
    var components = this.split(separator);<font></font>
    var day, month, year;<font></font>
    for (var key in format) {<font></font>
        var fmt_value = format[key];<font></font>
        var value = components[key];<font></font>
        switch (fmt_value) {<font></font>
            case "d":<font></font>
                day = parseInt(value);<font></font>
                break;<font></font>
            case "m":<font></font>
                month = parseInt(value)-1;<font></font>
                break;<font></font>
            case "y":<font></font>
                year = parseInt(value);<font></font>
        }<font></font>
    }<font></font>
    return new Date(year, month, day);<font></font>
};<font></font>
a = "3/2/2017";<font></font>
console.log(a.toDate("dmy"));<font></font>
// Date 2017-02-03T00:00:00.000Z<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>I made this function to convert any Date object to a UTC Date object.</p>

<pre><code>function dateToUTC(date) {<font></font>
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());<font></font>
}<font></font>
<font></font>
<font></font>
dateToUTC(new Date());<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅卡卡西Eva</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>I have created a fiddle for this, you can use toDate() function on any date string and provide the date format. This will return you a Date object.
<a href="https://jsfiddle.net/Sushil231088/q56yd0rp/" rel="noreferrer">https://jsfiddle.net/Sushil231088/q56yd0rp/</a></p>

<pre><code>"17/9/2014".toDate("dd/MM/yyyy", "/")
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西门</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>check out datejs library <a href="http://www.datejs.com/" rel="noreferrer">http://www.datejs.com/</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>If you want to convert from the format "dd/MM/yyyy". Here is an example:</p>

<pre><code>var pattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;<font></font>
var arrayDate = stringDate.match(pattern);<font></font>
var dt = new Date(arrayDate[3], arrayDate[2] - 1, arrayDate[1]);<font></font>
</code></pre>

<p>This solution works in IE versions less than 9.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near路易蛋蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><code>new Date(2000, 10, 1)</code> will give you "Wed Nov 01 2000 00:00:00 GMT+0100 (CET)" </p>

<p>See that 0 for month gives you January</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三凯</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>If you can use the terrific <a href="http://momentjs.com/">moment</a> library (e.g. in an Node.js project) you can easily parse your date using e.g.</p>

<pre><code>var momentDate = moment("2014-09-15 09:00:00");
</code></pre>

<p>and can access the JS date object via</p>

<pre><code>momentDate ().toDate();
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三卡卡西</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>function stringToDate(_date,_format,_delimiter)<font></font>
{<font></font>
            var formatLowerCase=_format.toLowerCase();<font></font>
            var formatItems=formatLowerCase.split(_delimiter);<font></font>
            var dateItems=_date.split(_delimiter);<font></font>
            var monthIndex=formatItems.indexOf("mm");<font></font>
            var dayIndex=formatItems.indexOf("dd");<font></font>
            var yearIndex=formatItems.indexOf("yyyy");<font></font>
            var month=parseInt(dateItems[monthIndex]);<font></font>
            month-=1;<font></font>
            var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);<font></font>
            return formatedDate;<font></font>
}<font></font>
<font></font>
stringToDate("17/9/2014","dd/MM/yyyy","/");<font></font>
stringToDate("9/17/2014","mm/dd/yyyy","/")<font></font>
stringToDate("9-17-2014","mm-dd-yyyy","-")<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom神奇</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其作为参数传递给Date（）：</font></font></p>

<pre><code>var st = "date in some format"<font></font>
var dt = new Date(st);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用，例如访问日期，月份，年份：</font></font><code>dt.getMonth()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
