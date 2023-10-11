---
layout: question
title:  将JavaScript数组转换为逗号分隔列表的简单方法？
date:   2020-04-03T03:35:57.000Z
description: 我有一个一维的JavaScript字符串数组，我想将其转换为以逗号分隔的列表。是否可以使用多种花园的JavaScript（或jQuery）将其转换为以逗号...
img: 
author: 樱西门
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个一维的JavaScript字符串数组，我想将其转换为以逗号分隔的列表。</font><font style="vertical-align: inherit;">是否可以使用多种花园的JavaScript（或jQuery）将其转换为以逗号分隔的列表的简单方法？</font><font style="vertical-align: inherit;">（如果这是唯一的方法，我知道如何遍历数组并自己通过串联构建字符串。）</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3967篇《将JavaScript数组转换为逗号分隔列表的简单方法？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无小胖</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有很多方法可以将数组转换为逗号分隔的列表</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.使用array＃join</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">join（）方法将数组（或类似数组的对象）的所有元素连接到字符串中。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码</font></font></p>

<pre><code>var arr = ["this","is","a","comma","separated","list"];<font></font>
arr = arr.join(",");<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">片段</font></font></h3>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var arr = ["this", "is", "a", "comma", "separated", "list"];<font></font>
arr = arr.join(",");<font></font>
console.log(arr);</code></pre>
</div>
</div>
<p></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.使用array＃toString</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toString" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">toString（）方法返回一个字符串，该字符串表示指定的数组及其元素。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码</font></font></p>

<pre><code>var arr = ["this","is","a","comma","separated","list"];<font></font>
arr = arr.toString();<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">片段</font></font></h3>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var arr = ["this", "is", "a", "comma", "separated", "list"];<font></font>
arr = arr.toString();<font></font>
console.log(arr);</code></pre>
</div>
</div>
<p></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3.在数组前添加[] +或在数组后添加+ []</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[] +</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ []</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其转换成字符串</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">证明</font></font></h2>

<pre><code>([]+[] === [].toString())
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将输出</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">true</font></font></em></p>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.log([]+[] === [].toString());</code></pre>
</div>
</div>
<p></p>

<pre><code>var arr = ["this","is","a","comma","separated","list"];<font></font>
arr = []+arr;<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">片段</font></font></h3>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var arr = ["this", "is", "a", "comma", "separated", "list"];<font></font>
arr = []+arr;<font></font>
console.log(arr);</code></pre>
</div>
</div>
<p></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也</font></font></h3>

<pre><code>var arr = ["this","is","a","comma","separated","list"];<font></font>
arr = arr+[];<font></font>
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var arr = ["this", "is", "a", "comma", "separated", "list"];<font></font>
arr = arr + [];<font></font>
console.log(arr);</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，</font></font><code>toString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下</font><font style="vertical-align: inherit;">，该</font><font style="vertical-align: inherit;">实现会使用逗号进行联接：</font></font></p>

<pre><code>var arr = [ 42, 55 ];<font></font>
var str1 = arr.toString(); // Gives you "42,55"<font></font>
var str2 = String(arr); // Ditto<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道这是否由JS规范强制执行，但这是什么 </font></font><del><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最</font></font></del><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 几乎所有浏览器似乎都在这样做。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者（更有效地）：</font></font></p>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">var arr = new Array（3）;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
arr [0] =“零”;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
arr [1] =“一个”;</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
arr [2] =“两个”;</font></font><font></font>
<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
document.write（arr）; </font><font style="vertical-align: inherit;">//在这种情况下与document.write（arr.toString（））相同</font></font><font></font>
</pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用时，数组的toString方法将完全返回所需的内容-逗号分隔的列表。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无前端</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所述</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Array.prototype.join（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var arr = ["Zero", "One", "Two"];<font></font>
<font></font>
document.write(arr.join(", "));</code></pre>
</div>
</div>
<p></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
