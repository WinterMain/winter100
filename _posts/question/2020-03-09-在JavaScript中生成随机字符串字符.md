---
layout: question
title:  在JavaScript中生成随机字符串/字符
date:   2020-03-09T11:59:38.000Z
description: 我想要一个5个字符串，其中包含从集合中随机选择的字符\[a-zA-Z0-9\]。用JavaScript做到这一点的最佳方法是什么？...
img: 
author: 梅Near米亚
category: question
answer: 13
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要一个5个字符串，其中包含从集合中随机选择的字符</font></font><code>[a-zA-Z0-9]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用JavaScript做到这一点的最佳方法是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第232篇《在JavaScript中生成随机字符串/字符》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>This one combines many of the answers give.</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var randNo = Math.floor(Math.random() * 100) + 2 + "" + new Date().getTime() +  Math.floor(Math.random() * 100) + 2 + (Math.random().toString(36).replace(/[^a-zA-Z]+/g, '').substr(0, 5));<font></font>
<font></font>
console.log(randNo);</code></pre>
</div>
</div>
<p></p>

<p>I have been using it for 1 month with great results.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>How about something like this: <code>Date.now().toString(36)</code>
Not very random, but short and quite unique every time you call it.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>This works for sure</p>

<pre><code>&lt;script language="javascript" type="text/javascript"&gt;<font></font>
function randomString() {<font></font>
 var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";<font></font>
 var string_length = 8;<font></font>
 var randomstring = '';<font></font>
 for (var i=0; i&lt;string_length; i++) {<font></font>
  var rnum = Math.floor(Math.random() * chars.length);<font></font>
  randomstring += chars.substring(rnum,rnum+1);<font></font>
 }<font></font>
 document.randform.randomfield.value = randomstring;<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I did not find a clean solution for supporting both lowercase and uppercase characters.</p>

<p>Lowercase only support:</p>

<p><code>Math.random().toString(36).substr(2, 5)</code></p>

<p>Building on that solution to support lowercase and uppercase:</p>

<p><code>Math.random().toString(36).substr(2, 5).split('').map(c =&gt; Math.random() &lt; 0.5 ? c.toUpperCase() : c).join('');</code></p>

<p>Change the <code>5</code> in <code>substr(2, 5)</code> to adjust to the length you need.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyMandyJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>To meet requirement [a-zA-Z0-9] and length=5 use</p>

<pre><code>btoa(Math.random()).substr(5, 5);
</code></pre>

<p>Lowercase letters, uppercase letters, and numbers will occur.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>You can loop through an array of items and recursively add them to a string variable, for instance if you wanted a random DNA sequence:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function randomDNA(len) {<font></font>
  len = len || 100<font></font>
  var nuc = new Array("A", "T", "C", "G")<font></font>
  var i = 0<font></font>
  var n = 0<font></font>
  s = ''<font></font>
  while (i &lt;= len - 1) {<font></font>
    n = Math.floor(Math.random() * 4)<font></font>
    s += nuc[n]<font></font>
    i++<font></font>
  }<font></font>
  return s<font></font>
}<font></font>
<font></font>
console.log(randomDNA(5));</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Here are some easy one liners. Change <code>new Array(5)</code> to set the length.</p>

<h3>Including <code>0-9a-z</code></h3>

<pre><code>new Array(5).join().replace(/(.|$)/g, function(){return ((Math.random()*36)|0).toString(36);})
</code></pre>

<h3>Including <code>0-9a-zA-Z</code></h3>

<pre><code>new Array(5).join().replace(/(.|$)/g, function(){return ((Math.random()*36)|0).toString(36)[Math.random()&lt;.5?"toString":"toUpperCase"]();});
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamGreen</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>The simplest way is: </p>

<pre><code>(new Date%9e6).toString(36)
</code></pre>

<p>This generate random strings of 5 characters based on the current time. Example output is <code>4mtxj</code> or <code>4mv90</code> or <code>4mwp1</code></p>

<p>The problem with this is that if you call it two times on the same second, it will generate the same string. </p>

<p>The safer way is: </p>

<pre><code>(0|Math.random()*9e6).toString(36)
</code></pre>

<p>This will generate a random string of 4 or 5 characters, always diferent. Example output is like <code>30jzm</code> or <code>1r591</code> or <code>4su1a</code></p>

<p>In both ways the first part generate a random number. The <code>.toString(36)</code> part cast the number to a base36 (alphadecimal) representation of it. </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>A newer version with <strong>es6</strong> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator" rel="noreferrer">spread operator</a>:</p>

<p><code>[...Array(30)].map(() =&gt; Math.random().toString(36)[2]).join('')</code> </p>

<ul>
<li>The <code>30</code> is arbitrary number, you can pick any token length you want</li>
<li>The <code>36</code> is the maximum radix number you can pass to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString" rel="noreferrer">numeric.toString()</a>, which means <a href="https://en.wikipedia.org/wiki/Base36" rel="noreferrer">all numbers and a-z lowercase letters</a></li>
<li>The <code>2</code> is used to pick the 3th index from the random string which looks like this: <code>"0.mfbiohx64i"</code>, we could take any index after <code>0.</code></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function randomstring(L) {<font></font>
  var s = '';<font></font>
  var randomchar = function() {<font></font>
    var n = Math.floor(Math.random() * 62);<font></font>
    if (n &lt; 10) return n; //1-10<font></font>
    if (n &lt; 36) return String.fromCharCode(n + 55); //A-Z<font></font>
    return String.fromCharCode(n + 61); //a-z<font></font>
  }<font></font>
  while (s.length &lt; L) s += randomchar();<font></font>
  return s;<font></font>
}<font></font>
console.log(randomstring(5));</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim小胖米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简短，简单且可靠</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回恰好5个随机字符，与此处找到的一些评分最高的答案相反。</font></font></p>

<pre><code>Math.random().toString(36).substr(2, 5);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Stafan宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最紧凑的解决方案，因为</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice" rel="noreferrer"><code>slice</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它比短</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring" rel="noreferrer"><code>substring</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">从字符串末尾减去可以避免该</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random" rel="noreferrer"><code>random</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数</font><font style="vertical-align: inherit;">生成的浮点符号</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>Math.random().toString(36).slice(-5);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至</font></font></p>

<pre><code>(+new Date).toString(36).slice(-5);
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa" rel="noreferrer"><code>btoa</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">添加了另一种</font><font style="vertical-align: inherit;">方法：</font></font></p>

<pre><code>btoa(Math.random()).slice(0, 5);<font></font>
btoa(+new Date).slice(-7, -2);<font></font>
btoa(+new Date).substr(-7, 5);<font></font>
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>// Using Math.random and Base 36:<font></font>
console.log(Math.random().toString(36).slice(-5));<font></font>
<font></font>
// Using new Date and Base 36:<font></font>
console.log((+new Date).toString(36).slice(-5));<font></font>
<font></font>
// Using Math.random and Base 64 (btoa):<font></font>
console.log(btoa(Math.random()).slice(0, 5));<font></font>
<font></font>
// Using new Date and Base 64 (btoa):<font></font>
console.log(btoa(+new Date).slice(-7, -2));<font></font>
console.log(btoa(+new Date).substr(-7, 5));</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁JimDavaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let r = Math.random().toString(36).substring(7);<font></font>
console.log("random", r);</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：以上算法具有以下缺点：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于在对浮点进行字符串化时会删除尾随零，因此它将生成0到6个字符之间的任意位置。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这在很大程度上取决于用于对浮点数进行字符串化的算法，该算法极其复杂。</font><font style="vertical-align: inherit;">（请参阅论文</font></font><a href="https://lists.nongnu.org/archive/html/gcl-devel/2012-10/pdfkieTlklRzN.pdf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“如何正确打印浮点数”</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。）</font></font></li>
<li><code>Math.random()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据实现的不同，可能会产生可预测的（“看上去很随机”但不是真正随机的）输出。</font><font style="vertical-align: inherit;">当您需要保证唯一性或不可预测性时，生成的字符串不适合。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使它产生了6个均匀随机且不可预测的字符，由于</font></font><a href="https://en.wikipedia.org/wiki/Birthday_problem" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生日悖论</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您也可以期望仅生成大约50,000个字符串后看到重复项</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（sqrt（36 ^ 6）= 46656）</font></font></li>
</ul></div>
        </div></div>
    {% endraw %}
  </div>
<div>
