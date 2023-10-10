---
layout: question
title:  如何格式化JavaScript日期
date:   2020-03-09T10:22:49.000Z
description: 在JavaScript中，如何格式化日期对象以打印为10-Aug-2010？...
img: 
author: 做个有心人
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中，如何格式化日期对象以打印为</font></font><code>10-Aug-2010</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var today = new Date();<font></font>
var formattedToday = today.toLocaleDateString() + ' ' + today.toLocaleTimeString();<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在代码中使用jQuery UI，则有一个名为的内置函数</font></font><code>formatDate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我使用这种方式来格式化今天的日期：</font></font></p>

<pre><code>var testdate = Date();<font></font>
testdate = $.datepicker.formatDate( "d-M-yy",new Date(testdate));<font></font>
alert(testdate);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><a href="http://api.jqueryui.com/datepicker/#option-dateFormat" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在jQuery UI文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到   </font><a href="http://api.jqueryui.com/datepicker/#option-dateFormat" rel="noreferrer"><font style="vertical-align: inherit;">许多其他格式化日期的示例</font></a><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">留姬</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="true">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>new Date().toLocaleDateString()<font></font>
<font></font>
// "3/21/2018"</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString" rel="noreferrer"><font style="vertical-align: inherit;">developer.mozilla.org上有</font></a><font style="vertical-align: inherit;">更多文档</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ECMAScript Edition 6（ES6 / ES2015）字符串模板：</font></font></p>

<pre><code>let d = new Date();<font></font>
let formatted = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果需要更改定界符：</font></font></p>

<pre><code>const delimiter = '/';<font></font>
let formatted = [d.getFullYear(), d.getMonth() + 1, d.getDate()].join(delimiter);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiHarry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，我想要的是将今天的日期转换为</font></font><a href="http://en.wikipedia.org/wiki/MySQL" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MySQL</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">友好的日期字符串，例如2012-06-23，并在我的一个查询中将该字符串用作参数。</font><font style="vertical-align: inherit;">我发现的简单解决方案是：</font></font></p>

<pre><code>var today = new Date().toISOString().slice(0, 10);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请记住，上述解决方案</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑您的时区偏移量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以考虑改用以下功能：</font></font></p>

<pre><code>function toJSONLocal (date) {<font></font>
    var local = new Date(date);<font></font>
    local.setMinutes(date.getMinutes() - date.getTimezoneOffset());<font></font>
    return local.toJSON().slice(0, 10);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在一天的开始/结束时间执行此代码，这将为您提供正确的日期。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">示例：</font><a href="http://jsfiddle.net/simo/sapuhzmm/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;">：</font></font><a href="http://jsfiddle.net/simo/sapuhzmm/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/simo/sapuhzmm/</font></font></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Date.toISOString</font></font></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Date.toJSON</font></font></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符串切片</font></font></a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天LEY逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你需要使用普通的JavaScript，使用快速格式化你的日期</font></font><code>getDate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>getMonth + 1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>getFullYear</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>getHours</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>getMinutes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var d = new Date();<font></font>
<font></font>
var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +<font></font>
d.getHours() + ":" + d.getMinutes();<font></font>
<font></font>
// 16-5-2015 9:50<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，如果您需要用零填充：</font></font></p>

<pre><code>var datestring = ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +<font></font>
    d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);<font></font>
<font></font>
// 16-05-2015 09:50<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
