---
layout: question
title:  JavaScript是否具有类似“ range（）”的方法来在提供的范围内生成范围？
date:   2020-03-10T06:23:20.000Z
description: 在PHP中，您可以...range(1, 3); // Array(1, 2, 3)range("A", "C"); // Array("A", "...
img: 
author: GO西门
category: question
answer: 15
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在PHP中，您可以...</font></font></p>

<pre><code>range(1, 3); // Array(1, 2, 3)<font></font>
range("A", "C"); // Array("A", "B", "C")<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也就是说，有一个函数可让您通过传递上下限来获得一定范围的数字或字符。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为此，JavaScript是否内置任何内置功能？</font><font style="vertical-align: inherit;">如果没有，我将如何实施？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomTony</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>This one works also in reverse.</p>

<pre><code>const range = ( a , b ) =&gt; Array.from( new Array( b &gt; a ? b - a : a - b ), ( x, i ) =&gt; b &gt; a ? i + a : a - i );<font></font>
<font></font>
range( -3, 2 ); // [ -3, -2, -1, 0, 1 ]<font></font>
range( 1, -4 ); // [ 1, 0, -1, -2, -3 ]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>d3 also has a built-in range function.  See <a href="https://github.com/mbostock/d3/wiki/Arrays#d3_range" rel="nofollow noreferrer">https://github.com/mbostock/d3/wiki/Arrays#d3_range</a>:</p>

<blockquote>
  <h3>d3.range([start, ]stop[, step])</h3>
  
  <p>Generates an array containing an arithmetic progression, similar to the Python built-in range. This method is often used to iterate over a sequence of numeric or integer values, such as the indexes into an array. Unlike the Python version, the arguments are not required to be integers, though the results are more predictable if they are due to floating point precision. If step is omitted, it defaults to 1. </p>
</blockquote>

<p>Example:</p>

<pre><code>d3.range(10)<font></font>
// returns [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗猪猪理查德</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>My codegolfing coworker came up with this (ES6),
inclusive: </p>

<pre><code>(s,f)=&gt;[...Array(f-s+1)].map((e,i)=&gt;i+s)
</code></pre>

<p>non inclusive:</p>

<pre><code>(s,f)=&gt;[...Array(f-s)].map((e,i)=&gt;i+s)
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥TonyEva</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>you can use <code>lodash</code> function <code>_.range(10)</code> <a href="https://lodash.com/docs#range" rel="nofollow noreferrer">https://lodash.com/docs#range</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>Though this is not from <em>PHP</em>, but an imitation of <code>range</code> from <strong><em>Python</em></strong>.</p>

<pre><code>function range(start, end) {<font></font>
    var total = [];<font></font>
<font></font>
    if (!end) {<font></font>
        end = start;<font></font>
        start = 0;<font></font>
    }<font></font>
<font></font>
    for (var i = start; i &lt; end; i += 1) {<font></font>
        total.push(i);<font></font>
    }<font></font>
<font></font>
    return total;<font></font>
}<font></font>
<font></font>
console.log(range(10)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] <font></font>
console.log(range(0, 10)); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]<font></font>
console.log(range(5, 10)); // [5, 6, 7, 8, 9] <font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin宝儿</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>A rather minimalistic implementation that heavily employs ES6 can be created as follows, drawing particular attention to the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" rel="noreferrer"><code>Array.from()</code></a> static method:</p>

<pre><code>const getRange = (start, stop) =&gt; Array.from(<font></font>
  new Array((stop - start) + 1),<font></font>
  (_, i) =&gt; i + start<font></font>
);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚逆天</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>I would code something like this:</p>

<pre><code>function range(start, end) {<font></font>
    return Array(end-start).join(0).split(0).map(function(val, id) {return id+start});<font></font>
}  <font></font>
<font></font>
range(-4,2);<font></font>
// [-4,-3,-2,-1,0,1]<font></font>
<font></font>
range(3,9);<font></font>
// [3,4,5,6,7,8]<font></font>
</code></pre>

<p>It behaves similarly to Python range:</p>

<pre><code>&gt;&gt;&gt; range(-4,2)<font></font>
[-4, -3, -2, -1, 0, 1]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near理查德路易</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>Did some research on some various Range Functions.
<strong><a href="http://jsperf.com/javascript-range-tests" rel="noreferrer">Checkout the jsperf comparison</a></strong> of the different ways to do these functions. Certainly not a perfect or exhaustive list, but should help :)</p>

<p><strong>The Winner is...</strong></p>

<pre><code>function range(lowEnd,highEnd){<font></font>
    var arr = [],<font></font>
    c = highEnd - lowEnd + 1;<font></font>
    while ( c-- ) {<font></font>
        arr[c] = highEnd--<font></font>
    }<font></font>
    return arr;<font></font>
}<font></font>
range(0,31);<font></font>
</code></pre>

<p>Technically its not the fastest on firefox, but crazy speed difference (imho) on chrome makes up for it.</p>

<p>Also interesting observation is how much faster chrome is with these array functions than firefox. <strong>Chrome is at least 4 or 5 times faster</strong>.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋蛋蛋</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>Another version using ES6 generators ( see great <a href="https://stackoverflow.com/a/31357608/5437379">Paolo Moretti answer with ES6 generators</a> ):</p>

<pre><code>const RANGE = (a,b) =&gt; Array.from((function*(x,y){<font></font>
  while (x &lt;= y) yield x++;<font></font>
})(a,b));<font></font>
<font></font>
console.log(RANGE(3,7));  // [ 3, 4, 5, 6, 7 ]<font></font>
</code></pre>

<p>Or, if we only need iterable, then:</p>

<pre><code>const RANGE_ITER = (a,b) =&gt; (function*(x,y){<font></font>
  while (x &lt;= y) yield x++;<font></font>
})(a,b);<font></font>
<font></font>
for (let n of RANGE_ITER(3,7)){<font></font>
  console.log(n);<font></font>
}<font></font>
<font></font>
// 3<font></font>
// 4<font></font>
// 5<font></font>
// 6<font></font>
// 7<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐卡卡西</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>Using Harmony <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator">spread operator</a> and arrow functions:</p>

<pre><code>var range = (start, end) =&gt; [...Array(end - start + 1)].map((_, i) =&gt; start + i);
</code></pre>

<p>Example:</p>

<pre><code>range(10, 15);<font></font>
[ 10, 11, 12, 13, 14, 15 ]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小胖</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>var range = (l,r) =&gt; new Array(r - l).fill().map((_,k) =&gt; k + l);
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro逆天</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的2美分：</font></font></p>

<pre><code>function range(start, count) {<font></font>
  return Array.apply(0, Array(count))<font></font>
    .map((element, index) =&gt; index + start);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞路易</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它适用于字符和数字，通过可选步骤前进或后退。</font></font></p>

<pre><code>var range = function(start, end, step) {<font></font>
    var range = [];<font></font>
    var typeofStart = typeof start;<font></font>
    var typeofEnd = typeof end;<font></font>
<font></font>
    if (step === 0) {<font></font>
        throw TypeError("Step cannot be zero.");<font></font>
    }<font></font>
<font></font>
    if (typeofStart == "undefined" || typeofEnd == "undefined") {<font></font>
        throw TypeError("Must pass start and end arguments.");<font></font>
    } else if (typeofStart != typeofEnd) {<font></font>
        throw TypeError("Start and end arguments must be of same type.");<font></font>
    }<font></font>
<font></font>
    typeof step == "undefined" &amp;&amp; (step = 1);<font></font>
<font></font>
    if (end &lt; start) {<font></font>
        step = -step;<font></font>
    }<font></font>
<font></font>
    if (typeofStart == "number") {<font></font>
<font></font>
        while (step &gt; 0 ? end &gt;= start : end &lt;= start) {<font></font>
            range.push(start);<font></font>
            start += step;<font></font>
        }<font></font>
<font></font>
    } else if (typeofStart == "string") {<font></font>
<font></font>
        if (start.length != 1 || end.length != 1) {<font></font>
            throw TypeError("Only strings with one character are supported.");<font></font>
        }<font></font>
<font></font>
        start = start.charCodeAt(0);<font></font>
        end = end.charCodeAt(0);<font></font>
<font></font>
        while (step &gt; 0 ? end &gt;= start : end &lt;= start) {<font></font>
            range.push(String.fromCharCode(start));<font></font>
            start += step;<font></font>
        }<font></font>
<font></font>
    } else {<font></font>
        throw TypeError("Only string and number types are supported");<font></font>
    }<font></font>
<font></font>
    return range;<font></font>
<font></font>
}<font></font>
</code></pre>

<p><a href="http://jsfiddle.net/ZaZAZ/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsFiddle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想扩展本机类型，则将其分配给</font></font><code>Array.range</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var range = function(start, end, step) {<font></font>
    var range = [];<font></font>
    var typeofStart = typeof start;<font></font>
    var typeofEnd = typeof end;<font></font>
<font></font>
    if (step === 0) {<font></font>
        throw TypeError("Step cannot be zero.");<font></font>
    }<font></font>
<font></font>
    if (typeofStart == "undefined" || typeofEnd == "undefined") {<font></font>
        throw TypeError("Must pass start and end arguments.");<font></font>
    } else if (typeofStart != typeofEnd) {<font></font>
        throw TypeError("Start and end arguments must be of same type.");<font></font>
    }<font></font>
<font></font>
    typeof step == "undefined" &amp;&amp; (step = 1);<font></font>
<font></font>
    if (end &lt; start) {<font></font>
        step = -step;<font></font>
    }<font></font>
<font></font>
    if (typeofStart == "number") {<font></font>
<font></font>
        while (step &gt; 0 ? end &gt;= start : end &lt;= start) {<font></font>
            range.push(start);<font></font>
            start += step;<font></font>
        }<font></font>
<font></font>
    } else if (typeofStart == "string") {<font></font>
<font></font>
        if (start.length != 1 || end.length != 1) {<font></font>
            throw TypeError("Only strings with one character are supported.");<font></font>
        }<font></font>
<font></font>
        start = start.charCodeAt(0);<font></font>
        end = end.charCodeAt(0);<font></font>
<font></font>
        while (step &gt; 0 ? end &gt;= start : end &lt;= start) {<font></font>
            range.push(String.fromCharCode(start));<font></font>
            start += step;<font></font>
        }<font></font>
<font></font>
    } else {<font></font>
        throw TypeError("Only string and number types are supported");<font></font>
    }<font></font>
<font></font>
    return range;<font></font>
<font></font>
}<font></font>
<font></font>
console.log(range("A", "Z", 1));<font></font>
console.log(range("Z", "A", 1));<font></font>
console.log(range("A", "Z", 3));<font></font>
<font></font>
<font></font>
console.log(range(0, 25, 1));<font></font>
<font></font>
console.log(range(0, 25, 5));<font></font>
console.log(range(20, 5, 5));</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光阿飞</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最喜欢的新表格（</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES2015</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<pre><code>Array(10).fill(1).map((x, y) =&gt; x + y)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要带有</font></font><code>step</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数</font><font style="vertical-align: inherit;">的函数</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>const range = (start, stop, step = 1) =&gt;<font></font>
  Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) =&gt; x + y * step)<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY宝儿</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于数字，您可以使用ES6 </font></font><code>Array.from()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from?v=example#Browser_compatibility" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它在</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当今</font><font style="vertical-align: inherit;">除IE之外的</font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from?v=example#Browser_compatibility" rel="noreferrer"><font style="vertical-align: inherit;">所有内容中都适用</font></a><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">较短的版本：</font></font></p>

<pre><code>Array.from({length: 20}, (x,i) =&gt; i);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">较长版本：</font></font></p>

<pre><code>Array.from(new Array(20), (x,i) =&gt; i)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将创建一个从0到19（含0）的数组。</font><font style="vertical-align: inherit;">可以将其进一步简化为以下形式之一：</font></font></p>

<pre><code>Array.from(Array(20).keys())<font></font>
// or<font></font>
[...Array(20).keys()]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上限和下限也可以指定，例如： </font></font></p>

<pre><code>Array.from(new Array(20), (x,i) =&gt; i + *lowerBound*)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一篇文章对此进行了更详细的描述：</font><a href="http://www.2ality.com/2014/05/es6-array-methods.html" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://www.2ality.com/2014/05/es6-array-methods.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.2ality.com/2014/05/es6-array-methods.html</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
