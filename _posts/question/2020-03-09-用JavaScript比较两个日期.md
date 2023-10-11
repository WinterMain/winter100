---
layout: question
title:  用JavaScript比较两个日期
date:   2020-03-09T11:17:27.000Z
description: 有人可以建议一种使用JavaScript 比较两个大于，小于和过去的日期的值的方法吗？这些值将来自文本框。...
img: 
author: GO西门
category: question
answer: 15
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人可以建议一种</font><font style="vertical-align: inherit;">使用JavaScript </font><font style="vertical-align: inherit;">比较</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两个</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大于，小于和过去的</font><strong><font style="vertical-align: inherit;">日期</font></strong><font style="vertical-align: inherit;">的值的</font><font style="vertical-align: inherit;">方法吗？</font><font style="vertical-align: inherit;">这些值将来自文本框。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第219篇《用JavaScript比较两个日期》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyJinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Here is what I did in one of my projects,</p>

<pre><code>function CompareDate(tform){<font></font>
     var startDate = new Date(document.getElementById("START_DATE").value.substring(0,10));<font></font>
     var endDate = new Date(document.getElementById("END_DATE").value.substring(0,10));<font></font>
<font></font>
     if(tform.START_DATE.value!=""){<font></font>
         var estStartDate = tform.START_DATE.value;<font></font>
         //format for Oracle<font></font>
         tform.START_DATE.value = estStartDate + " 00:00:00";<font></font>
     }<font></font>
<font></font>
     if(tform.END_DATE.value!=""){<font></font>
         var estEndDate = tform.END_DATE.value;<font></font>
         //format for Oracle<font></font>
         tform.END_DATE.value = estEndDate + " 00:00:00";<font></font>
     }<font></font>
<font></font>
     if(endDate &lt;= startDate){<font></font>
         alert("End date cannot be smaller than or equal to Start date, please review you selection.");<font></font>
         tform.START_DATE.value = document.getElementById("START_DATE").value.substring(0,10);<font></font>
         tform.END_DATE.value = document.getElementById("END_DATE").value.substring(0,10);<font></font>
         return false;<font></font>
     }<font></font>
}<font></font>
</code></pre>

<p>calling this on form onsubmit.
hope this helps.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyEvaL</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>An Improved version of the code posted by "some" </p>

<pre><code>/* Compare the current date against another date.<font></font>
 *<font></font>
 * @param b  {Date} the other date<font></font>
 * @returns   -1 : if this &lt; b<font></font>
 *             0 : if this === b<font></font>
 *             1 : if this &gt; b<font></font>
 *            NaN : if a or b is an illegal date<font></font>
*/ <font></font>
Date.prototype.compare = function(b) {<font></font>
  if (b.constructor !== Date) {<font></font>
    throw "invalid_date";<font></font>
  }<font></font>
<font></font>
 return (isFinite(this.valueOf()) &amp;&amp; isFinite(b.valueOf()) ? <font></font>
          (this&gt;b)-(this&lt;b) : NaN <font></font>
        );<font></font>
};<font></font>
</code></pre>

<p>usage:</p>

<pre><code>  var a = new Date(2011, 1-1, 1);<font></font>
  var b = new Date(2011, 1-1, 1);<font></font>
  var c = new Date(2011, 1-1, 31);<font></font>
  var d = new Date(2011, 1-1, 31);<font></font>
<font></font>
  assertEquals( 0, a.compare(b));<font></font>
  assertEquals( 0, b.compare(a));<font></font>
  assertEquals(-1, a.compare(c));<font></font>
  assertEquals( 1, c.compare(a));<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Sam斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I usually store <code>Dates</code> as <code>timestamps(Number)</code> in databases.</p>

<p>When I need to compare, I simply compare among those timestamps or</p>

<p>convert it to Date Object and then compare with <code>&gt; &lt;</code>if necessary.</p>

<p><strong>Note that == or === does not work properly unless your variables are references of the same Date Object.</strong></p>

<p><strong>Convert those Date objects to timestamp(number) first and then compare equality of them.</strong></p>

<hr>

<h2>Date to Timestamp</h2>

<pre><code>var timestamp_1970 = new Date(0).getTime(); // 1970-01-01 00:00:00<font></font>
var timestamp = new Date().getTime(); // Current Timestamp<font></font>
</code></pre>

<h2>Timestamp to Date</h2>

<pre><code>var timestamp = 0; // 1970-01-01 00:00:00<font></font>
var DateObject = new Date(timestamp);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>In order to create dates from free text in Javascript you need to parse it into the Date() object.</p>

<p>You could use Date.parse() which takes free text tries to convert it into a new date but if you have control over the page I would recommend using HTML select boxes instead or a date picker such as the <a href="http://developer.yahoo.com/yui/calendar/" rel="noreferrer">YUI calendar control</a> or the <a href="http://docs.jquery.com/UI/Datepicker" rel="noreferrer">jQuery UI Datepicker</a>.</p>

<p>Once you have a date as other people have pointed out you can use simple arithmetic to subtract the dates and convert it back into a number of days by dividing the number (in seconds) by the number of seconds in a day (60*60*24 = 86400).</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>To compare two date we can use date.js JavaScript library which can be found at : <a href="https://code.google.com/archive/p/datejs/downloads" rel="noreferrer">https://code.google.com/archive/p/datejs/downloads</a></p>

<p>and use the <code>Date.compare( Date date1, Date date2 )</code> method and it return a <strong>number</strong> which mean the following result:</p>

<p>-1 = date1 is lessthan date2.</p>

<p>0 = values are equal. </p>

<p>1 = date1 is greaterthan date2.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYEvaL</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong>Via <a href="https://momentjs.com/" rel="nofollow noreferrer">Moment.js</a></strong></p>

<p>Jsfiddle: <a href="http://jsfiddle.net/guhokemk/1/" rel="nofollow noreferrer">http://jsfiddle.net/guhokemk/1/</a></p>

<pre><code>function compare(dateTimeA, dateTimeB) {<font></font>
    var momentA = moment(dateTimeA,"DD/MM/YYYY");<font></font>
    var momentB = moment(dateTimeB,"DD/MM/YYYY");<font></font>
    if (momentA &gt; momentB) return 1;<font></font>
    else if (momentA &lt; momentB) return -1;<font></font>
    else return 0;<font></font>
}<font></font>
<font></font>
alert(compare("11/07/2015", "10/07/2015"));<font></font>
</code></pre>

<p>The method returns 1 if <code>dateTimeA</code> is greater than <code>dateTimeB</code></p>

<p>The method returns 0 if <code>dateTimeA</code> equals <code>dateTimeB</code></p>

<p>The method returns -1 if <code>dateTimeA</code> is less than <code>dateTimeB</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德村村小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Just to add yet another possibility to the many existing options, you could try:</p>

<pre class="lang-js prettyprint-override"><code>if (date1.valueOf()==date2.valueOf()) .....
</code></pre>

<p>...which seems to work for me.  Of course you do have to ensure that both dates are not undefined...</p>

<pre class="lang-js prettyprint-override"><code>if ((date1?date1.valueOf():0)==(date2?date2.valueOf():0) .....
</code></pre>

<p>This way we can ensure that a positive comparison is made if both are undefined also, or...</p>

<pre class="lang-js prettyprint-override"><code>if ((date1?date1.valueOf():0)==(date2?date2.valueOf():-1) .....
</code></pre>

<p>...if you prefer them not to be equal.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var date = new Date(); // will give you todays date.<font></font>
<font></font>
// following calls, will let you set new dates.<font></font>
setDate()   <font></font>
setFullYear()   <font></font>
setHours()  <font></font>
setMilliseconds()   <font></font>
setMinutes()    <font></font>
setMonth()  <font></font>
setSeconds()    <font></font>
setTime()<font></font>
<font></font>
var yesterday = new Date();<font></font>
yesterday.setDate(...date info here);<font></font>
<font></font>
if(date&gt;yesterday)  // will compare dates<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LJinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>function datesEqual(a, b)<font></font>
{<font></font>
   return (!(a&gt;b || b&gt;a))<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意-仅比较日期部分：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我们在javascript中比较两个日期时。</font><font style="vertical-align: inherit;">还需要花费数小时，数分钟和数秒。因此，如果我们只需要比较日期，则可以采用以下方法：</font></font></p>

<pre><code>var date1= new Date("01/01/2014").setHours(0,0,0,0);<font></font>
<font></font>
var date2= new Date("01/01/2014").setHours(0,0,0,0);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在：</font></font><code>if date1.valueOf()&gt; date2.valueOf()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将像魅力一样工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva千羽</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，最简单的方法是从另一个日期中减去一个日期并比较结果。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var oDateOne = new Date();<font></font>
var oDateTwo = new Date();<font></font>
<font></font>
alert(oDateOne - oDateTwo === 0);<font></font>
alert(oDateOne - oDateTwo &lt; 0);<font></font>
alert(oDateOne - oDateTwo &gt; 0);</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅比较日期（忽略时间部分）：</font></font></p>

<pre><code>Date.prototype.sameDay = function(d) {<font></font>
  return this.getFullYear() === d.getFullYear()<font></font>
    &amp;&amp; this.getDate() === d.getDate()<font></font>
    &amp;&amp; this.getMonth() === d.getMonth();<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法：</font></font></p>

<pre><code>if(date1.sameDay(date2)) {<font></font>
    // highlight day on calendar or something else clever<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小阿飞</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关系运算符</font></font><code>&lt;</code> <code>&lt;=</code> <code>&gt;</code> <code>&gt;=</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可用于比较JavaScript日期：</font></font></p>

<pre><code>var d1 = new Date(2013, 0, 1);<font></font>
var d2 = new Date(2013, 0, 2);<font></font>
d1 &lt;  d2; // true<font></font>
d1 &lt;= d2; // true<font></font>
d1 &gt;  d2; // false<font></font>
d1 &gt;= d2; // false<font></font>
</code></pre>

<p>However, the equality operators <code>==</code> <code>!=</code> <code>===</code> <code>!==</code> cannot be used to compare (the value of) dates <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">because</a>:</p>

<blockquote>
  <ul>
  <li>Two distinct objects are never equal for either strict or abstract comparisons.</li>
  <li>An expression comparing Objects is only true if the operands reference the same Object.</li>
  </ul>
</blockquote>

<p>You can compare the value of dates for equality using any of these methods:</p>

<pre><code>var d1 = new Date(2013, 0, 1);<font></font>
var d2 = new Date(2013, 0, 1);<font></font>
/*<font></font>
 * note: d1 == d2 returns false as described above<font></font>
 */<font></font>
d1.getTime() == d2.getTime(); // true<font></font>
d1.valueOf() == d2.valueOf(); // true<font></font>
Number(d1)   == Number(d2);   // true<font></font>
+d1          == +d2;          // true<font></font>
</code></pre>

<p>Both <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime"><code>Date.getTime()</code></a> and <code>Date.valueOf()</code> return the number of milliseconds since January 1, 1970, 00:00 UTC. Both <code>Number</code> function and unary <code>+</code> operator call the <code>valueOf()</code> methods behind the scenes.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Cathy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在javascript中比较日期的最简单方法是先将其转换为Date对象，然后再比较这些date-objects。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在下面找到具有三个功能的对象：</font></font></p>

<ul>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">date.compare（a，b）</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回一个数字：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果a &lt;b则为-1</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果a = b，则为0</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果a&gt; b为1</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果a或b是非法日期，则为NaN</font></font></li>
</ul></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">date.inRange</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（d，start，end）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回一个布尔值或NaN：</font></font></p>

<ul>
<li><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">d</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开始</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结束</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之间</font><font style="vertical-align: inherit;">（包括端点），</font><font style="vertical-align: inherit;">则为</font><em><font style="vertical-align: inherit;">true</font></em></font></li>
<li><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">d</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开始</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前</font><font style="vertical-align: inherit;">或</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结束</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后，</font><font style="vertical-align: inherit;">则返回</font><em><font style="vertical-align: inherit;">false</font></em><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果一个或多个日期不合法，则为NaN。</font></font></li>
</ul></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">date.convert</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由其他函数用于将其输入转换为日期对象。</font><font style="vertical-align: inherit;">输入可以是</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">日期</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -object：输入返回原样。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：解释为[年，月，日。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">月份是0-11。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数字</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：解释为自1970年1月1日以来的毫秒数（时间戳）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符串</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：几个不同的格式支持，如“YYYY / MM / DD”， “MM / DD / YYYY”， “2009年1月31日”等等。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：解释为具有年，月和日属性的对象。  </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">月份是0-11。</font></font></li>
</ul></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>// Source: http://stackoverflow.com/questions/497790<font></font>
var dates = {<font></font>
    convert:function(d) {<font></font>
        // Converts the date in d to a date-object. The input can be:<font></font>
        //   a date object: returned without modification<font></font>
        //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.<font></font>
        //   a number     : Interpreted as number of milliseconds<font></font>
        //                  since 1 Jan 1970 (a timestamp) <font></font>
        //   a string     : Any format supported by the javascript engine, like<font></font>
        //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.<font></font>
        //  an object     : Interpreted as an object with year, month and date<font></font>
        //                  attributes.  **NOTE** month is 0-11.<font></font>
        return (<font></font>
            d.constructor === Date ? d :<font></font>
            d.constructor === Array ? new Date(d[0],d[1],d[2]) :<font></font>
            d.constructor === Number ? new Date(d) :<font></font>
            d.constructor === String ? new Date(d) :<font></font>
            typeof d === "object" ? new Date(d.year,d.month,d.date) :<font></font>
            NaN<font></font>
        );<font></font>
    },<font></font>
    compare:function(a,b) {<font></font>
        // Compare two dates (could be of any type supported by the convert<font></font>
        // function above) and returns:<font></font>
        //  -1 : if a &lt; b<font></font>
        //   0 : if a = b<font></font>
        //   1 : if a &gt; b<font></font>
        // NaN : if a or b is an illegal date<font></font>
        // NOTE: The code inside isFinite does an assignment (=).<font></font>
        return (<font></font>
            isFinite(a=this.convert(a).valueOf()) &amp;&amp;<font></font>
            isFinite(b=this.convert(b).valueOf()) ?<font></font>
            (a&gt;b)-(a&lt;b) :<font></font>
            NaN<font></font>
        );<font></font>
    },<font></font>
    inRange:function(d,start,end) {<font></font>
        // Checks if date in d is between dates in start and end.<font></font>
        // Returns a boolean or NaN:<font></font>
        //    true  : if d is between start and end (inclusive)<font></font>
        //    false : if d is before start or after end<font></font>
        //    NaN   : if one or more of the dates is illegal.<font></font>
        // NOTE: The code inside isFinite does an assignment (=).<font></font>
       return (<font></font>
            isFinite(d=this.convert(d).valueOf()) &amp;&amp;<font></font>
            isFinite(start=this.convert(start).valueOf()) &amp;&amp;<font></font>
            isFinite(end=this.convert(end).valueOf()) ?<font></font>
            start &lt;= d &amp;&amp; d &lt;= end :<font></font>
            NaN<font></font>
        );<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Green</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Date对象</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会做你想要的东西-构造一个每个日期，然后用它们进行比较</font></font><code>&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>&lt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>&lt;=</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>&gt;=</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>!=</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，和</font></font><code>!==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运营商要求使用</font></font><code>date.getTime()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为</font></font></p>

<pre><code>var d1 = new Date();<font></font>
var d2 = new Date(d1);<font></font>
var same = d1.getTime() === d2.getTime();<font></font>
var notSame = d1.getTime() !== d2.getTime();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要清楚的是，仅直接检查日期对象是否相等将不起作用</font></font></p>

<pre><code>var d1 = new Date();<font></font>
var d2 = new Date(d1);<font></font>
<font></font>
console.log(d1 == d2);   // prints false (wrong!) <font></font>
console.log(d1 === d2);  // prints false (wrong!)<font></font>
console.log(d1 != d2);   // prints true  (wrong!)<font></font>
console.log(d1 !== d2);  // prints true  (wrong!)<font></font>
console.log(d1.getTime() === d2.getTime()); // prints true (correct)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议您使用下拉列表或日期输入的某些类似约束形式，而不要使用文本框，以免您陷入输入验证的困境。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
