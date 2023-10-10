---
layout: question
title:  如何检查字符串“ StartsWith”是否为另一个字符串？
date:   2020-03-09T12:02:23.000Z
description: 如何String.StartsWith在JavaScript中编写等效于C＃的代码？var haystack = 'hello world';var...
img: 
author: 路易Near番长
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何</font></font><a href="http://msdn.microsoft.com/en-us/library/baketfxw.aspx" rel="noreferrer"><code>String.StartsWith</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中</font><font style="vertical-align: inherit;">编写等效于C＃的代码</font><font style="vertical-align: inherit;">？</font></font></p>

<pre><code>var haystack = 'hello world';<font></font>
var needle = 'he';<font></font>
<font></font>
haystack.startsWith(needle) == true<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：这是一个古老的问题，正如评论中指出的ECMAScript 2015（ES6）引入了该</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith" rel="noreferrer"><code>.startsWith</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font><font style="vertical-align: inherit;">但是，在撰写此更新（2015）时，</font></font><a href="http://kangax.github.io/compat-table/es6/#test-String.prototype_methods_String.prototype.startsWith" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器支持还远远没有完成</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋L</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I am not sure for javascript but in typescript i did something like </p>

<pre><code>var str = "something";<font></font>
(&lt;String&gt;str).startsWith("some");<font></font>
</code></pre>

<p>I guess it should work on js too. 
I hope it helps!</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>If you are working with <code>startsWith()</code> and <code>endsWith()</code> then you have to be careful about leading spaces. Here is a complete example:</p>

<pre><code>var str1 = " Your String Value Here.!! "; // Starts &amp; ends with spaces    <font></font>
if (str1.startsWith("Your")) { }  // returns FALSE due to the leading spaces…<font></font>
if (str1.endsWith("Here.!!")) { } // returns FALSE due to trailing spaces…<font></font>
<font></font>
var str2 = str1.trim(); // Removes all spaces (and other white-space) from start and end of `str1`.<font></font>
if (str2.startsWith("Your")) { }  // returns TRUE<font></font>
if (str2.endsWith("Here.!!")) { } // returns TRUE<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯JinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Also check out <a href="https://github.com/edtsech/underscore.string" rel="noreferrer">underscore.string.js</a>. It comes with a bunch of useful string testing and manipulation methods, including a <code>startsWith</code> method. From the docs:</p>

<blockquote>
  <p><strong>startsWith</strong> <code>_.startsWith(string, starts)</code></p>
  
  <p>This method checks whether <code>string</code> starts with <code>starts</code>.</p>

<pre><code>_("image.gif").startsWith("image")<font></font>
=&gt; true<font></font>
</code></pre>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>data.substring(0, input.length) === input
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong>Best solution:</strong></p>

<pre><code>function startsWith(str, word) {<font></font>
    return str.lastIndexOf(word, 0) === 0;<font></font>
}<font></font>
</code></pre>

<p>Used: </p>

<pre><code>startsWith("aaa", "a")<font></font>
true<font></font>
startsWith("aaa", "ab")<font></font>
false<font></font>
startsWith("abc", "abc")<font></font>
true<font></font>
startsWith("abc", "c")<font></font>
false<font></font>
startsWith("abc", "a")<font></font>
true<font></font>
startsWith("abc", "ba")<font></font>
false<font></font>
startsWith("abc", "ab")<font></font>
true<font></font>
</code></pre>

<p>And here is <strong>endsWith</strong> if you need that too: </p>

<pre><code>function endsWith(str, word) {<font></font>
    return str.indexOf(word, str.length - word.length) !== -1;<font></font>
}<font></font>
</code></pre>

<p><strong>For those that prefer to prototype it into String:</strong> </p>

<pre><code>String.prototype.startsWith || (String.prototype.startsWith = function(word) {<font></font>
    return this.lastIndexOf(word, 0) === 0;<font></font>
});<font></font>
<font></font>
String.prototype.endsWith   || (String.prototype.endsWith = function(word) {<font></font>
    return this.indexOf(word, this.length - word.length) !== -1;<font></font>
});<font></font>
</code></pre>

<p><strong>Usage:</strong> </p>

<pre><code>"abc".startsWith("ab")<font></font>
true<font></font>
"c".ensdWith("c") <font></font>
true<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi达蒙Green</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种选择是</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf" rel="noreferrer"><code>.lastIndexOf</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>haystack.lastIndexOf(needle, 0) === 0
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这看起来向后通过</font></font><code>haystack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为的发生</font></font><code>needle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，从指数开始</font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>haystack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">换句话说，它仅检查是否</font></font><code>haystack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以开头</font></font><code>needle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原则上，与其他方法相比，这应该具有性能优势：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不会搜索整个</font></font><code>haystack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不会创建新的临时字符串，然后立即将其丢弃。</font></font></li>
</ul></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
