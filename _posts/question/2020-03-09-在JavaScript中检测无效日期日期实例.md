---
layout: question
title:  在JavaScript中检测“无效日期”日期实例
date:   2020-03-09T12:55:20.000Z
description: 我想说出JS中有效和无效日期对象之间的区别，但不知道如何：var d = new Date("foo");console.log(d.toStrin...
img: 
author: 达蒙Itachi理查德
category: question
answer: 15
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想说出JS中有效和无效日期对象之间的区别，但不知道如何：</font></font></p>

<pre><code>var d = new Date("foo");<font></font>
console.log(d.toString()); // shows 'Invalid Date'<font></font>
console.log(typeof d); // shows 'object'<font></font>
console.log(d instanceof Date); // shows 'true'<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有编写</font></font><code>isValidDate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数的</font><font style="vertical-align: inherit;">想法</font><font style="vertical-align: inherit;">吗？</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议</font></font><code>Date.parse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">Ash </font><font style="vertical-align: inherit;">来分析日期字符串，这为检查日期字符串是否有效提供了一种权威方法。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果可能的话，我希望我的API接受Date实例，并能够检查/确认它是否有效。</font><font style="vertical-align: inherit;">Borgar的解决方案可以做到这一点，但是我需要在浏览器中对其进行测试。</font><font style="vertical-align: inherit;">我也想知道是否有更优雅的方法。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ash使我考虑完全不让我的API接受</font></font><code>Date</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实例，这将最容易验证。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Borgar建议先测试一个</font></font><code>Date</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实例，然后再测试</font></font><code>Date</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的时间值。</font><font style="vertical-align: inherit;">如果日期无效，则时间值为</font></font><code>NaN</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我使用</font></font><a href="http://www.ecma-international.org/ecma-262/6.0/index.html#sec-time-values-and-time-range" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMA-262</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行了检查，</font><font style="vertical-align: inherit;">这种行为符合标准，这正是我要寻找的。</font></font></li>
</ul></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第263篇《在JavaScript中检测“无效日期”日期实例》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋前端神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>For int 1-based components of a date:</p>

<pre><code>var is_valid_date = function(year, month, day) {<font></font>
    var d = new Date(year, month - 1, day);<font></font>
    return d.getFullYear() === year &amp;&amp; (d.getMonth() + 1) === month &amp;&amp; d.getDate() === day<font></font>
};<font></font>
</code></pre>

<p>Tests:</p>

<pre><code>    is_valid_date(2013, 02, 28)<font></font>
&amp;&amp;  is_valid_date(2016, 02, 29)<font></font>
&amp;&amp; !is_valid_date(2013, 02, 29)<font></font>
&amp;&amp; !is_valid_date(0000, 00, 00)<font></font>
&amp;&amp; !is_valid_date(2013, 14, 01)<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I think some of this is a long process. We can cut it short as shown below:</p>

<pre><code> function isValidDate(dateString) {<font></font>
        debugger;<font></font>
        var dateStringSplit;<font></font>
        var formatDate;<font></font>
<font></font>
        if (dateString.length &gt;= 8 &amp;&amp; dateString.length&lt;=10) {<font></font>
            try {<font></font>
                dateStringSplit = dateString.split('/');<font></font>
                var date = new Date();<font></font>
                date.setYear(parseInt(dateStringSplit[2]), 10);<font></font>
                date.setMonth(parseInt(dateStringSplit[0], 10) - 1);<font></font>
                date.setDate(parseInt(dateStringSplit[1], 10));<font></font>
<font></font>
                if (date.getYear() == parseInt(dateStringSplit[2],10) &amp;&amp; date.getMonth()+1 == parseInt(dateStringSplit[0],10) &amp;&amp; date.getDate() == parseInt(dateStringSplit[1],10)) {<font></font>
                    return true;<font></font>
                }<font></font>
                else {<font></font>
                    return false;<font></font>
                }<font></font>
<font></font>
            } catch (e) {<font></font>
                return false;<font></font>
            }<font></font>
        }<font></font>
        return false;<font></font>
    }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天樱</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Simple and elegant solution:</p>

<pre><code>const date = new Date(`${year}-${month}-${day} 00:00`)<font></font>
const isValidDate = (Boolean(+date) &amp;&amp; date.getDate() == day)<font></font>
</code></pre>

<p>sources: </p>

<p>[1] <a href="https://medium.com/@esganzerla/simple-date-validation-with-javascript-caea0f71883c" rel="nofollow noreferrer">https://medium.com/@esganzerla/simple-date-validation-with-javascript-caea0f71883c</a></p>

<p>[2] <a href="https://stackoverflow.com/questions/39223481/incorrect-date-shown-in-new-date-in-javascript">Incorrect date shown in new Date() in JavaScript</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>function isValidDate(strDate) {<font></font>
    var myDateStr= new Date(strDate);<font></font>
    if( ! isNaN ( myDateStr.getMonth() ) ) {<font></font>
       return true;<font></font>
    }<font></font>
    return false;<font></font>
}<font></font>
</code></pre>

<p>Call it like this</p>

<pre><code>isValidDate(""2015/5/2""); // =&gt; true<font></font>
isValidDate(""2015/5/2a""); // =&gt; false<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I combined the best performance results I found around that check if a given object:</p>

<ul>
<li>is a Date instance (<a href="http://jsperf.com/isdate-duck-typing-vs-instanceof/2" rel="nofollow">benchmark here</a>)</li>
<li>has a valid date (<a href="http://jsperf.com/detecting-an-invalid-date" rel="nofollow">benchmark here</a>)</li>
</ul>

<p>The result is the following:</p>

<pre><code>function isValidDate(input) {<font></font>
  if(!(input &amp;&amp; input.getTimezoneOffset &amp;&amp; input.setUTCFullYear))<font></font>
    return false;<font></font>
<font></font>
  var time = input.getTime();<font></font>
  return time === time;<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Tom</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>None of the above solutions worked for me what did work however is</p>

<pre><code>function validDate (d) {<font></font>
        var date = new Date(d);<font></font>
        var day = ""+date.getDate();<font></font>
        if( day.length == 1)day = "0"+day;<font></font>
        var month = "" +( date.getMonth() + 1);<font></font>
        if( month.length == 1)month = "0"+month;<font></font>
        var year = "" + date.getFullYear();<font></font>
<font></font>
        return ((month + "/" + day + "/" + year) == d);<font></font>
    }<font></font>
</code></pre>

<p>the code above will see when JS makes 02/31/2012 into 03/02/2012 that its not valid</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝达蒙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>IsValidDate: function(date) {<font></font>
        var regex = /\d{1,2}\/\d{1,2}\/\d{4}/;<font></font>
        if (!regex.test(date)) return false;<font></font>
        var day = Number(date.split("/")[1]);<font></font>
        date = new Date(date);<font></font>
        if (date &amp;&amp; date.getDate() != day) return false;<font></font>
        return true;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>None of these answers worked for me (tested in Safari 6.0) when trying to validate a date such as 2/31/2012, however, they work fine when trying any date greater than 31.</p>

<p>So I had to brute force a little. Assuming the date is in the format <code>mm/dd/yyyy</code>. I am using @broox answer:</p>

<pre><code>Date.prototype.valid = function() {<font></font>
    return isFinite(this);<font></font>
}    <font></font>
<font></font>
function validStringDate(value){<font></font>
    var d = new Date(value);<font></font>
    return d.valid() &amp;&amp; value.split('/')[0] == (d.getMonth()+1);<font></font>
}<font></font>
<font></font>
validStringDate("2/29/2012"); // true (leap year)<font></font>
validStringDate("2/29/2013"); // false<font></font>
validStringDate("2/30/2012"); // false<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱樱</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>For Angular.js projects you can use:</p>

<pre><code>angular.isDate(myDate);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用以下代码验证年份，月份和日期的值。</font></font></p>

<pre><code>function createDate(year, month, _date) {<font></font>
  var d = new Date(year, month, _date);<font></font>
  if (d.getFullYear() != year <font></font>
    || d.getMonth() != month<font></font>
    || d.getDate() != _date) {<font></font>
    throw "invalid date";<font></font>
  }<font></font>
  return d;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关详细信息，请参阅</font></font><a href="http://internotredici.com/article/checkdateinjavascript" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">javascript中的检查日期。</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Too many complicated answers here already, but a simple line is sufficient (ES5): </p>

<pre><code>Date.prototype.isValid = function (d) { return !isNaN(Date.parse(d)) } ;
</code></pre>

<p>or even in ES6 :</p>

<pre><code>Date.prototype.isValid = d =&gt; !isNaN(Date.parse(d));
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidHarry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我真的很喜欢Christoph的方法（但没有足够的声誉来投票赞成）。</font><font style="vertical-align: inherit;">对于我的使用，我知道我将始终有一个Date对象，因此我只是使用有效的（）方法扩展了日期。</font></font></p>

<pre><code>Date.prototype.valid = function() {<font></font>
  return isFinite(this);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在我可以编写它了，它比在代码中检查isFinite更具描述性...</font></font></p>

<pre><code>d = new Date(userDate);<font></font>
if (d.valid()) { /* do stuff */ }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查有效日期的最短答案</font></font></p>

<pre><code>if(!isNaN(date.getTime()))
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenNear</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的解决方案是仅检查您是否获得了有效的日期对象：</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实作</font></font></h1>

<pre><code>Date.prototype.isValid = function () {<font></font>
    // An invalid date object returns NaN for getTime() and NaN is the only<font></font>
    // object not strictly equal to itself.<font></font>
    return this.getTime() === this.getTime();<font></font>
};  <font></font>
</code></pre>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法</font></font></h1>

<pre><code>var d = new Date("lol");<font></font>
<font></font>
console.log(d.isValid()); // false<font></font>
<font></font>
d = new Date("2012/09/11");<font></font>
<font></font>
console.log(d.isValid()); // true<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一斯丁猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的处理方式：</font></font></p>

<pre><code>if (Object.prototype.toString.call(d) === "[object Date]") {<font></font>
  // it is a date<font></font>
  if (isNaN(d.getTime())) {  // d.valueOf() could also work<font></font>
    // date is not valid<font></font>
  } else {<font></font>
    // date is valid<font></font>
  }<font></font>
} else {<font></font>
  // not a date<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新[2018-05-31]</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：如果您不关心其他JS上下文（外部窗口，框架或iframe）中的Date对象，则首选以下简单形式：</font></font></p>

<pre><code>function isValidDate(d) {<font></font>
  return d instanceof Date &amp;&amp; !isNaN(d);<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
