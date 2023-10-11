---
layout: question
title:  substr和substring有什么区别？
date:   2020-03-10T04:16:54.000Z
description: 之间有什么区别alert("abc".substr(0,2));和alert("abc".substring(0,2));They b...
img: 
author: Tony西门古一
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之间有什么区别</font></font></p>

<pre><code>alert("abc".substr(0,2));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font></p>

<pre><code>alert("abc".substring(0,2));
</code></pre>

<p>They both seem to output “ab”.</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第471篇《substr和substring有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro神奇</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">substring（）：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  
它有2个参数“开始”和“结束”。</font></font></p>

<ul>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">start</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数是必需的，它指定开始提取的位置。  </font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">end</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数是可选的，它指定提取应终止的位置。</font></font></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果未指定end参数，则提取从开始位置到字符串结尾的所有字符。</font></font></strong> </p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var str = "Substring Example";<font></font>
var result = str.substring(0, 10);<font></font>
alert(result);<font></font>
<font></font>
Output : Substring</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果start参数的值大于end参数的值，则此方法将交换两个参数。</font><font style="vertical-align: inherit;">这意味着开始将用作结束，而结束将用作开始。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var str = "Substring Example";<font></font>
var result = str.substring(10, 0);<font></font>
alert(result);<font></font>
<font></font>
Output : Substring</code></pre>
</div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">substr（）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：它有2个参数“ start”和“ count”。</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">start参数是必需的，它指定开始提取的位置。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">count参数是可选的，它指定要提取的字符数。</font></font></p></li>
</ul>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var str = "Substr Example";<font></font>
var result = str.substr(0, 10);<font></font>
alert(result);<font></font>
<font></font>
<font></font>
Output : Substr Exa</code></pre>
</div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果未指定count参数，则将提取从字符串的开始位置到字符串结尾的所有字符。</font><font style="vertical-align: inherit;">如果count为0或负数，则返回一个空字符串。</font></font></strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var str = "Substr Example";<font></font>
var result = str.substr(11);<font></font>
alert(result);<font></font>
<font></font>
Output : ple</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚凯</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><a href="http://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/3" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Slice vs Substr vs Substring vs []方法</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些javascript方法均具有性能优势。</font><font style="vertical-align: inherit;">请相应地使用这些功能。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenGil</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最大的区别是，</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/substr" rel="nofollow"><code>substr()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个过时的方法</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是仍然可以使用，但因为它们预计将在未来的某个时候完全除去应谨慎使用。</font><font style="vertical-align: inherit;">您应该努力从代码中删除它们的使用。</font><font style="vertical-align: inherit;">并且该</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring" rel="nofollow"><code>substring()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法成功并指定了前一种方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Tom</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主要区别在于</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">substr（）允许您指定要返回的最大长度 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">substring（）允许您指定索引，第二个参数不包含在内</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">substr（）和substring（）之间还有一些其他的细微之处，例如对相等参数和负参数的处理。</font><font style="vertical-align: inherit;">还要注意substring（）和slice（）相似，但并不总是相同。</font></font></p>

<pre><code>  //*** length vs indices:<font></font>
    "string".substring(2,4);  // "ri"   (start, end) indices / second value is NOT inclusive<font></font>
    "string".substr(2,4);     // "ring" (start, length) length is the maximum length to return<font></font>
    "string".slice(2,4);      // "ri"   (start, end) indices / second value is NOT inclusive<font></font>
<font></font>
  //*** watch out for substring swap:<font></font>
    "string".substring(3,2);  // "r"    (swaps the larger and the smaller number)<font></font>
    "string".substr(3,2);     // "in"<font></font>
    "string".slice(3,2);      // ""     (just returns "")<font></font>
<font></font>
  //*** negative second argument:<font></font>
    "string".substring(2,-4); // "st"   (converts negative numbers to 0, then swaps first and second position)<font></font>
    "string".substr(2,-4);    // ""<font></font>
    "string".slice(2,-4);     // ""<font></font>
<font></font>
  //*** negative first argument:<font></font>
    "string".substring(-3);   // "string"        <font></font>
    "string".substr(-3);      // "ing"  (read from end of string)<font></font>
    "string".slice(-3);       // "ing"        <font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门神奇</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近遇到的另一个问题是，在IE 8中，</font></font><code>"abcd".substr(-1)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误地返回</font></font><code>"abcd"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而Firefox 3.6 </font></font><code>"d"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则应</font><font style="vertical-align: inherit;">返回</font><font style="vertical-align: inherit;">。</font></font><code>slice</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都可以正常工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关此主题的更多信息，请参见</font></font><a href="http://rapd.wordpress.com/2007/07/12/javascript-substr-vs-substring/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim小卤蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如yatima2975的回答所暗示的，还有另外一个区别：</font></font></p>

<p><code>substr()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接受一个负的起始位置作为与字符串末尾的偏移量。  </font></font><code>substring()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">才不是。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果start为负，则substr（）将其用作字符串末尾的字符索引。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以总结一下功能上的区别：</font></font></p>

<p><code>substring(begin-offset, end-offset-exclusive)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">起始偏移</font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">量大于或等于</font></font></p>

<p><code>substr(begin-offset, length)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 开始偏移也可能为负</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Mandy</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><code>substr</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）将参数设为</font></font><code>(from, length)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br>
<code>substring</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）将参数设为</font></font><code>(from, to)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>alert("abc".substr(1,2)); // returns "bc"<font></font>
alert("abc".substring(1,2)); // returns "b"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能还记得</font></font><code>substring</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用索引，还有另一种字符串提取方法</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">slice</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从0开始时，可​​以使用任何一种方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomSam</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">区别在于第二个参数。</font><font style="vertical-align: inherit;">的第二个参数</font></font><code>substring</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是要在（但不包括）处停止的索引，但是的第二个参数</font></font><code>substr</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是要返回的最大长度。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接？</font></font></p>

<p><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/substr" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/JavaScript/Reference/Global_Objects/String/substr</font></font></a></p>

<p><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/substring" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/JavaScript/Reference/Global_Objects/String/substring</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
