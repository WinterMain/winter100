---
layout: question
title:  在JavaScript中比较字符串的最佳方法？\[重复\]
date:   2020-04-03T03:30:50.000Z
description:                                                                          ...
img: 
author: 卡卡西小卤蛋GO
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/1179366/is-there-a-javascript-strcmp" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有JavaScript strcmp（）？</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （5个答案）
                                </font></font></span>
                        </div>
                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2013-04-24 00：50：57Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">6年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
        </aside>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试优化在JavaScript中对字符串进行二进制搜索的函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">二进制搜索要求您知道键是</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">枢轴还是</font></font><code>&lt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">枢轴。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这需要JavaScript中的两个字符串比较，这与</font><font style="vertical-align: inherit;">同类</font></font><code>C</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语言</font><font style="vertical-align: inherit;">不同，</font><font style="vertical-align: inherit;">后者具有</font></font><code>strcmp()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回三个值</font></font><code>(-1, 0, +1)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（小于，等于，大于）</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">函数</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中是否有这样的本机函数可以返回三进制值，以便在二进制搜索的每次迭代中只需要一个比较？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3965篇《在JavaScript中比较字符串的最佳方法？\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamNear</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用该</font></font><code>localeCompare()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font></font></p>

<pre><code>string_a.localeCompare(string_b);<font></font>
<font></font>
/* Expected Returns:<font></font>
<font></font>
 0:  exact match<font></font>
<font></font>
-1:  string_a &lt; string_b<font></font>
<font></font>
 1:  string_a &gt; string_b<font></font>
<font></font>
 */<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进一步阅读：</font></font></p>

<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN：String.prototype.localeCompare</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/1179366/is-there-a-javascript-strcmp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">堆栈溢出-是否有JavaScript strcmp（）？</font></font></a></li>
<li><a href="http://www.tutorialspoint.com/javascript/string_localecompare.htm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">教程重点：JavaScript字符串-localeCompare（）方法</font></font></a></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中，您可以检查两个字符串以获取与整数相同的值，因此您可以执行以下操作：</font></font></p>

<ul>
<li><code>"A" &lt; "B"</code></li>
<li><code>"A" == "B"</code></li>
<li><code>"A" &gt; "B"</code></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您可以制作自己的函数，以与相同的方式检查字符串</font></font><code>strcmp()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，这将是执行相同功能的函数：</font></font></p>

<pre><code>function strcmp(a, b)<font></font>
{   <font></font>
    return (a&lt;b?-1:(a&gt;b?1:0));  <font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p>You can <a href="https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/String#Comparing_strings" rel="noreferrer">use the comparison operators to compare strings</a>. A <code>strcmp</code> function could be defined like this:</p>

<pre><code>function strcmp(a, b) {<font></font>
    if (a.toString() &lt; b.toString()) return -1;<font></font>
    if (a.toString() &gt; b.toString()) return 1;<font></font>
    return 0;<font></font>
}<font></font>
</code></pre>

<hr>

<p><strong>Edit</strong>&nbsp;&nbsp;&nbsp;&nbsp;Here’s a string comparison function that takes at most min { length(<em>a</em>), length(<em>b</em>) } comparisons to tell how two strings relate to each other:</p>

<pre><code>function strcmp(a, b) {<font></font>
    a = a.toString(), b = b.toString();<font></font>
    for (var i=0,n=Math.max(a.length, b.length); i&lt;n &amp;&amp; a.charAt(i) === b.charAt(i); ++i);<font></font>
    if (i === n) return 0;<font></font>
    return a.charAt(i) &gt; b.charAt(i) ? -1 : 1;<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
