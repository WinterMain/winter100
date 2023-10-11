---
layout: question
title:  Javascript迄今为止添加了前导零
date:   2020-03-16T07:05:19.000Z
description: 我已创建此脚本来以dd / mm / yyyy的格式提前10天计算日期：var MyDate = new Date();var MyDateStri...
img: 
author: 路易神奇猪猪
category: question
answer: 11
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已创建此脚本来以dd / mm / yyyy的格式提前10天计算日期：</font></font></p>

<pre><code>var MyDate = new Date();<font></font>
var MyDateString = new Date();<font></font>
MyDate.setDate(MyDate.getDate()+10);<font></font>
MyDateString = MyDate.getDate() + '/' + (MyDate.getMonth()+1) + '/' + MyDate.getFullYear();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过将这些规则添加到脚本中，我需要使日期显示在日和月部分的前导零。</font><font style="vertical-align: inherit;">我似乎无法正常工作。</font></font></p>

<pre><code>if (MyDate.getMonth &lt; 10)getMonth = '0' + getMonth;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font></p>

<pre><code>if (MyDate.getDate &lt;10)get.Date = '0' + getDate;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人可以告诉我将这些内容插入脚本的位置，我将非常感激。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1776篇《Javascript迄今为止添加了前导零》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇番长</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><pre><code>function pad(value) {<font></font>
    return value.tostring().padstart(2, 0);<font></font>
}<font></font>
<font></font>
let d = new date();<font></font>
console.log(d);<font></font>
console.log(`${d.getfullyear()}-${pad(d.getmonth() + 1)}-${pad(d.getdate())}t${pad(d.gethours())}:${pad(d.getminutes())}:${pad(d.getseconds())}`);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanEva</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><pre><code> let date = new Date();<font></font>
 let dd = date.getDate();//day of month<font></font>
<font></font>
 let mm = date.getMonth();// month<font></font>
 let yyyy = date.getFullYear();//day of week<font></font>
 if (dd &lt; 10) {//if less then 10 add a leading zero<font></font>
     dd = "0" + dd;<font></font>
   }<font></font>
 if (mm &lt; 10) {<font></font>
    mm = "0" + mm;//if less then 10 add a leading zero<font></font>
  }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Jim</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p>try this for a basic function, no libraries required</p>

<pre><code>Date.prototype.CustomformatDate = function() {<font></font>
 var tmp = new Date(this.valueOf());<font></font>
 var mm = tmp.getMonth() + 1;<font></font>
 if (mm &lt; 10) mm = "0" + mm;<font></font>
 var dd = tmp.getDate();<font></font>
 if (dd &lt; 10) dd = "0" + dd;<font></font>
 return mm + "/" + dd + "/" + tmp.getFullYear();<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">さ恋旧る</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p>What I would do, is create my own custom Date helper that looks like this :</p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var DateHelper = {<font></font>
    addDays : function(aDate, numberOfDays) {<font></font>
        aDate.setDate(aDate.getDate() + numberOfDays); // Add numberOfDays<font></font>
        return aDate;                                  // Return the date<font></font>
    },<font></font>
    format : function format(date) {<font></font>
        return [<font></font>
           ("0" + date.getDate()).slice(-2),           // Get day and pad it with zeroes<font></font>
           ("0" + (date.getMonth()+1)).slice(-2),      // Get month and pad it with zeroes<font></font>
           date.getFullYear()                          // Get full year<font></font>
        ].join('/');                                   // Glue the pieces together<font></font>
    }<font></font>
}<font></font>
<font></font>
// With this helper, you can now just use one line of readable code to :<font></font>
// ---------------------------------------------------------------------<font></font>
// 1. Get the current date<font></font>
// 2. Add 20 days<font></font>
// 3. Format it<font></font>
// 4. Output it<font></font>
// ---------------------------------------------------------------------<font></font>
document.body.innerHTML = DateHelper.format(DateHelper.addDays(new Date(), 20));</code></pre>
</div>
</div>
<p></p>

<p>(see also <a href="https://jsfiddle.net/9fpzcghg/1/" rel="nofollow"><strong>this Fiddle</strong></a>)</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanL</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p>Here is very simple example how you can handle this situation.</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var mydate = new Date();<font></font>
<font></font>
var month = (mydate.getMonth().toString().length &lt; 2 ? "0"+mydate.getMonth().toString() :mydate.getMonth());<font></font>
<font></font>
var date = (mydate.getDate().toString().length &lt; 2 ? "0"+mydate.getDate().toString() :mydate.getDate());<font></font>
<font></font>
var year = mydate.getFullYear();<font></font>
<font></font>
console.log("Format Y-m-d : ",year+"-"+month+"-" + date);<font></font>
<font></font>
console.log("Format Y/m/d : ",year+"/"+month+"/" + date);</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomL</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p>Adding on to @modiX answer, this is what works...DO NOT LEAVE THAT as empty</p>

<pre><code>today.toLocaleDateString("default", {year: "numeric", month: "2-digit", day: "2-digit"})
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无阳光</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><pre><code>function formatDate(jsDate){<font></font>
  // add leading zeroes to jsDate when days or months are &lt; 10.. <font></font>
  // i.e.<font></font>
  //     formatDate(new Date("1/3/2013")); <font></font>
  // returns<font></font>
  //    "01/03/2103"<font></font>
  ////////////////////<font></font>
  return (jsDate.getDate()&lt;10?("0"+jsDate.getDate()):jsDate.getDate()) + "/" + <font></font>
      ((jsDate.getMonth()+1)&lt;10?("0"+(jsDate.getMonth()+1)):(jsDate.getMonth()+1)) + "/" + <font></font>
      jsDate.getFullYear();<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Tony</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p>There is another approach to solve this problem, using <code>slice</code> in JavaScript.</p>

<pre><code>var d = new Date();<font></font>
var datestring = d.getFullYear() + "-" + ("0"+(d.getMonth()+1)).slice(-2) +"-"+("0" + d.getDate()).slice(-2);<font></font>
<font></font>
</code></pre>

<p>the <code>datestring</code> return date with format as you expect: 2019-09-01</p>

<p>another approach is using <code>dateformat</code> library: <a href="https://github.com/felixge/node-dateformat" rel="noreferrer">https://github.com/felixge/node-dateformat</a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Gil</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新的现代方法是使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString" rel="noreferrer"><code>toLocaleDateString</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为它不仅允许您使用适当的本地化来格式化日期，您甚至可以传递格式选项来存档所需的结果：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var date = new Date(2018, 2, 1);<font></font>
var result = date.toLocaleDateString("en-GB", { // you can skip the first argument<font></font>
  year: "numeric",<font></font>
  month: "2-digit",<font></font>
  day: "2-digit",<font></font>
});<font></font>
console.log(result);</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您跳过第一个参数时，它将检测浏览器语言。</font><font style="vertical-align: inherit;">此外，您也可以使用</font></font><code>2-digit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">年份选项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不需要支持IE10之类的旧浏览器，这是完成这项工作的最干净的方法。</font><font style="vertical-align: inherit;">IE10及更低版本不了解options参数。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一斯丁猴子</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以定义一个“ str_pad”函数（如php中一样）：</font></font></p>

<pre><code>function str_pad(n) {<font></font>
    return String("00" + n).slice(-2);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Tony</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">面向未来的人们（ECMAScript 2017及更高版本）</font></font></h1>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解</font></font></h2>

<pre><code>"use strict"<font></font>
<font></font>
const today = new Date()<font></font>
<font></font>
const year = today.getFullYear()<font></font>
<font></font>
const month = `${today.getMonth() + 1}`.padStart(2, 0)<font></font>
<font></font>
const day = `${today.getDate()}`.padStart(2, 0)<font></font>
<font></font>
const stringDate = [day, month, year].join("/") // 13/12/2017<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">讲解</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart" rel="noreferrer"><code>String.prototype.padStart(targetLength[, padString])</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">增加尽可能多的</font></font><code>padString</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>String.prototype</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目标，使得目标的新长度是</font></font><code>targetLength</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例</font></font></h3>

<pre><code>"use strict"<font></font>
<font></font>
let month = "9"<font></font>
<font></font>
month = month.padStart(2, 0) // "09"<font></font>
<font></font>
let byte = "00000100"<font></font>
<font></font>
byte = byte.padStart(8, 0) // "00000100"<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
