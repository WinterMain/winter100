---
layout: question
title:  将Unix时间戳转换为JavaScript中的时间
date:   2020-03-09T15:50:02.000Z
description: 我将时间作为Unix时间戳存储在MySQL数据库中，并将其发送到一些JavaScript代码。我怎么会得到时间呢？例如，以HH / MM / SS格式...
img: 
author: 小胖阳光
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将时间作为Unix时间戳存储在MySQL数据库中，并将其发送到一些JavaScript代码。</font><font style="vertical-align: inherit;">我怎么会得到时间呢？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，以HH / MM / SS格式。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第378篇《将Unix时间戳转换为JavaScript中的时间》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>function getTIMESTAMP() {<font></font>
  var date = new Date();<font></font>
  var year = date.getFullYear();<font></font>
  var month = ("0" + (date.getMonth() + 1)).substr(-2);<font></font>
  var day = ("0" + date.getDate()).substr(-2);<font></font>
  var hour = ("0" + date.getHours()).substr(-2);<font></font>
  var minutes = ("0" + date.getMinutes()).substr(-2);<font></font>
  var seconds = ("0" + date.getSeconds()).substr(-2);<font></font>
<font></font>
  return year + "-" + month + "-" + day + " " + hour + ":" + minutes + ":" + seconds;<font></font>
}<font></font>
<font></font>
//2016-01-14 02:40:01<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A樱</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Another way - from an <a href="http://en.wikipedia.org/wiki/ISO_8601" rel="nofollow noreferrer">ISO 8601</a> date.</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var timestamp = 1293683278;<font></font>
var date = new Date(timestamp * 1000);<font></font>
var iso = date.toISOString().match(/(\d{2}:\d{2}:\d{2})/)<font></font>
alert(iso[1]);</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>In moment you must use unix timestamp:</p>

<pre><code>var dateTimeString = moment.unix(1466760005).format("DD-MM-YYYY HH:mm:ss");
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Using <a href="http://momentjs.com/" rel="noreferrer">Moment.js</a>, you can get time and date like this:</p>

<pre><code>var dateTimeString = moment(1439198499).format("DD-MM-YYYY HH:mm:ss");
</code></pre>

<p>And you can get only time using this:</p>

<pre><code>var timeString = moment(1439198499).format("HH:mm:ss");
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Use:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var s = new Date(1504095567183).toLocaleDateString("en-US")<font></font>
// expected output "8/30/2017"  <font></font>
console.log(s);</code></pre>
</div>
</div>
<p></p>

<p>and for time:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var s = new Date(1504095567183).toLocaleTimeString("en-US")<font></font>
// expected output "3:19:27 PM"<font></font>
console.log(s)</code></pre>
</div>
</div>
<p></p>

<p>see <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString" rel="noreferrer">Date.prototype.toLocaleDateString()</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神离伊芙妮</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript以毫秒为单位工作，因此您首先必须将UNIX时间戳从秒转换为毫秒。</font></font></p>

<pre><code>var date = new Date(UNIX_Timestamp * 1000);<font></font>
// Manipulate JavaScript Date object here...<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Here is the shortest one-liner solution to format seconds as <code>hh:mm:ss</code>:</p>

<pre><code>/**<font></font>
 * Convert seconds to time string (hh:mm:ss).<font></font>
 *<font></font>
 * @param Number s<font></font>
 *<font></font>
 * @return String<font></font>
 */<font></font>
function time(s) {<font></font>
    return new Date(s * 1e3).toISOString().slice(-13, -5);<font></font>
}<font></font>
<font></font>
console.log( time(12345) );  // "03:25:45"<font></font>
</code></pre>

<blockquote>
  <p>Method <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString" rel="noreferrer"><code>Date.prototype.toISOString()</code></a> returns time in
  simplified extended <a href="http://en.wikipedia.org/wiki/ISO_8601" rel="noreferrer"><strong>ISO 8601</strong></a> format, which is <strong>always</strong> 24 or 27 characters long (i.e. <code>YYYY-MM-DDTHH:mm:ss.sssZ</code> or
  <code>±YYYYYY-MM-DDTHH:mm:ss.sssZ</code> respectively). The timezone is always
  zero UTC offset.</p>
</blockquote>

<p><em>N.B.: This solution does not require any third-party libraries and is supported in all modern browsers and JavaScript engines.</em></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
