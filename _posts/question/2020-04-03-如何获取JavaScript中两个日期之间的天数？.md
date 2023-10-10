---
layout: question
title:  如何获取JavaScript中两个日期之间的天数？
date:   2020-04-03T03:25:22.000Z
description: 如何获取JavaScript中两个日期之间的天数？例如，在输入框中指定两个日期：<input id="first" value="1/1/2000"/...
img: 
author: 十三
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何获取JavaScript中两个日期之间的天数？</font><font style="vertical-align: inherit;">例如，在输入框中指定两个日期：</font></font></p>

<pre><code>&lt;input id="first" value="1/1/2000"/&gt;<font></font>
&lt;input id="second" value="1/1/2001"/&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
  alert(datediff("day", first, second)); // what goes here?<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用</font><font style="vertical-align: inherit;">DatePicker小部件中的</font></font><a href="http://docs.jquery.com/UI/Datepicker/%24.datepicker.formatDate" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">formatDate</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">您可以使用它来转换时间戳格式的日期（自1970年1月1日以来的毫秒数），然后进行简单的减法。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪小宇宙</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要计算两个给定日期之间的天数，您可以使用以下代码。我在这里使用的日期是2016年1月1日至2016年12月31日</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var day_start = new Date("Jan 01 2016");<font></font>
var day_end = new Date("Dec 31 2016");<font></font>
var total_days = (day_end - day_start) / (1000 * 60 * 60 * 24);<font></font>
document.getElementById("demo").innerHTML = Math.round(total_days);</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;h3&gt;DAYS BETWEEN GIVEN DATES&lt;/h3&gt;<font></font>
&lt;p id="demo"&gt;&lt;/p&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为解决方案并不正确，我会使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ceil</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">floor来解决问题</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，round可以正常工作，但这不是正确的操作。</font></font></p>

<pre><code>function dateDiff(str1, str2){<font></font>
    var diff = Date.parse(str2) - Date.parse(str1); <font></font>
    return isNaN(diff) ? NaN : {<font></font>
        diff: diff,<font></font>
        ms: Math.ceil(diff % 1000),<font></font>
        s: Math.ceil(diff / 1000 % 60),<font></font>
        m: Math.ceil(diff / 60000 % 60),<font></font>
        h: Math.ceil(diff / 3600000 % 24),<font></font>
        d: Math.ceil(diff / 86400000)<font></font>
    };<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><pre><code>var start= $("#firstDate").datepicker("getDate");<font></font>
var end= $("#SecondDate").datepicker("getDate");<font></font>
var days = (end- start) / (1000 * 60 * 60 * 24);<font></font>
 alert(Math.round(days));<font></font>
</code></pre>

<p><a href="https://jsfiddle.net/AravindhGopi/tbwa1m8c/4/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsfiddle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例:)</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好通过使用UTC时间来摆脱DST，Math.ceil，Math.floor等：</font></font></p>

<pre><code>var firstDate = Date.UTC(2015,01,2);<font></font>
var secondDate = Date.UTC(2015,04,22);<font></font>
var diff = Math.abs((firstDate.valueOf() <font></font>
    - secondDate.valueOf())/(24*60*60*1000));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本示例给出109天的差异。</font></font><code>24*60*60*1000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一天（以毫秒为单位）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在两个日期上进行一些计算时发现了这个问题，但该日期具有小时和分钟值，因此我修改了@ michael-liu的答案以满足我的要求，并通过了我的测试。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">差异天</font></font><code>2012-12-31 23:00</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>2013-01-01 01:00</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应等于1.（2小时）差异天</font></font><code>2012-12-31 01:00</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>2013-01-01 23:00</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应等于1.（46小时）</font></font></p>

<pre><code>function treatAsUTC(date) {<font></font>
    var result = new Date(date);<font></font>
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());<font></font>
    return result;<font></font>
}<font></font>
<font></font>
var millisecondsPerDay = 24 * 60 * 60 * 1000;<font></font>
function diffDays(startDate, endDate) {<font></font>
    return Math.floor(treatAsUTC(endDate) / millisecondsPerDay) - Math.floor(treatAsUTC(startDate) / millisecondsPerDay);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议使用moment.js库（</font></font><a href="http://momentjs.com/docs/#/displaying/difference/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://momentjs.com/docs/#/displaying/difference/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">它可以正确处理夏令时，并且通常很适合使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>var start = moment("2013-11-03");<font></font>
var end = moment("2013-11-04");<font></font>
end.diff(start, "days")<font></font>
1<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获得两个日期之间差异的最简单方法：</font></font></p>

<pre><code>var diff =  Math.floor(( Date.parse(str2) - Date.parse(str1) ) / 86400000); 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您会得到差值天数（如果无法解析一个或两个，则为NaN）。</font><font style="vertical-align: inherit;">解析日期以毫秒为单位给出结果，要按天获取结果，必须将其除以24 * 60 * 60 * 1000</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要除以天，小时，分钟，秒和毫秒：</font></font></p>

<pre><code>function dateDiff( str1, str2 ) {<font></font>
    var diff = Date.parse( str2 ) - Date.parse( str1 ); <font></font>
    return isNaN( diff ) ? NaN : {<font></font>
        diff : diff,<font></font>
        ms : Math.floor( diff            % 1000 ),<font></font>
        s  : Math.floor( diff /     1000 %   60 ),<font></font>
        m  : Math.floor( diff /    60000 %   60 ),<font></font>
        h  : Math.floor( diff /  3600000 %   24 ),<font></font>
        d  : Math.floor( diff / 86400000        )<font></font>
    };<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的James版本的重构版本：</font></font></p>

<pre><code>function mydiff(date1,date2,interval) {<font></font>
    var second=1000, minute=second*60, hour=minute*60, day=hour*24, week=day*7;<font></font>
    date1 = new Date(date1);<font></font>
    date2 = new Date(date2);<font></font>
    var timediff = date2 - date1;<font></font>
    if (isNaN(timediff)) return NaN;<font></font>
    switch (interval) {<font></font>
        case "years": return date2.getFullYear() - date1.getFullYear();<font></font>
        case "months": return (<font></font>
            ( date2.getFullYear() * 12 + date2.getMonth() )<font></font>
            -<font></font>
            ( date1.getFullYear() * 12 + date1.getMonth() )<font></font>
        );<font></font>
        case "weeks"  : return Math.floor(timediff / week);<font></font>
        case "days"   : return Math.floor(timediff / day); <font></font>
        case "hours"  : return Math.floor(timediff / hour); <font></font>
        case "minutes": return Math.floor(timediff / minute);<font></font>
        case "seconds": return Math.floor(timediff / second);<font></font>
        default: return undefined;<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会继续使用</font></font><a href="http://mattkruse.com/javascript/date/date.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个小工具</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，在其中您会找到适合您的功能。</font><font style="vertical-align: inherit;">这是一个简短的示例：</font></font></p>

<pre><code>        &lt;script type="text/javascript" src="date.js"&gt;&lt;/script&gt;<font></font>
        &lt;script type="text/javascript"&gt;<font></font>
            var minutes = 1000*60;<font></font>
            var hours = minutes*60;<font></font>
            var days = hours*24;<font></font>
<font></font>
            var foo_date1 = getDateFromFormat("02/10/2009", "M/d/y");<font></font>
            var foo_date2 = getDateFromFormat("02/12/2009", "M/d/y");<font></font>
<font></font>
            var diff_date = Math.round((foo_date2 - foo_date1)/days);<font></font>
            alert("Diff date is: " + diff_date );<font></font>
        &lt;/script&gt;<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
