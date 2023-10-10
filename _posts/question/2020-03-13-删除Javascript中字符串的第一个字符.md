---
layout: question
title:  删除Javascript中字符串的第一个字符
date:   2020-03-13T07:18:00.000Z
description: 如果第一个字符为0，我想删除字符串的第一个字符。0可以存在多个。是否有一个简单的函数可以检查第一个字符并将其删除（如果为0）？现在，我正在尝试使用...
img: 
author: 小宇宙神奇飞云
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果第一个字符为0，我想删除字符串的第一个字符。0可以存在多个。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有一个简单的函数可以检查第一个字符并将其删除（如果为0）？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我正在尝试使用JS </font></font><code>slice()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数，但是非常尴尬。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小卤蛋Pro</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试</font></font></p>

<pre><code>s.replace(/^0/,'')
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.log("0string  =&gt;", "0string".replace(/^0/,'') );<font></font>
console.log("00string =&gt;", "00string".replace(/^0/,'') );<font></font>
console.log("string00 =&gt;", "string00".replace(/^0/,'') );</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯小卤蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>//---- remove first and last char of str    <font></font>
str = str.substring(1,((keyw.length)-1));<font></font>
<font></font>
//---- remove only first char    <font></font>
str = str.substring(1,(keyw.length));<font></font>
<font></font>
//---- remove only last char    <font></font>
str = str.substring(0,(keyw.length));<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗卡卡西</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">substring</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法：</font></font></p>

<pre><code>let a = "My test string";<font></font>
<font></font>
a = a.substring(1);<font></font>
<font></font>
console.log(a); // y test string<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无老丝Davaid</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">剥离所有前导</font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">s </font><font style="vertical-align: inherit;">的最简单方法</font><font style="vertical-align: inherit;">是：</font></font></p>

<pre><code>var s = "00test";<font></font>
s = s.replace(/^0+/, "");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如问题所暗示的，</font><font style="vertical-align: inherit;">如果仅剥离单个前导</font><font style="vertical-align: inherit;">字符，则可以使用</font></font></p>

<pre><code>s = s.replace(/^0/, "");
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子神乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>var s = "0test";<font></font>
if(s.substr(0,1) == "0") {<font></font>
    s = s.substr(1);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于所有</font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">s：</font><a href="http://jsfiddle.net/An4MY/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/An4MY/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/An4MY/</font></font></a></p>

<pre><code>String.prototype.ltrim0 = function() {<font></font>
 return this.replace(/^[0]+/,"");<font></font>
}<font></font>
var s = "0000test".ltrim0();<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
