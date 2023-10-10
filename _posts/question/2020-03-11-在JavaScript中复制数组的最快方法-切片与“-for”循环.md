---
layout: question
title:  在JavaScript中复制数组的最快方法-切片与“ for”循环
date:   2020-03-11T12:39:24.000Z
description: 为了在JavaScript中复制数组，请使用以下哪项更快？切片方法var dup_array = original_array.slice();...
img: 
author: 
category: question
answer: 13
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了在JavaScript中复制数组，请使用以下哪项更快？</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">切片方法</font></font></h3>

<pre><code>var dup_array = original_array.slice();
</code></pre>

<h3><code>For</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 环</font></font></h3>

<pre><code>for(var i = 0, len = original_array.length; i &lt; len; ++i)<font></font>
   dup_array[i] = original_array[i];<font></font>
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这两种方法都只能进行</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浅表复制</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：如果original_array包含对对象的引用，则不会克隆对象，但是只会复制引用，因此两个数组都将引用相同的对象。</font><font style="vertical-align: inherit;">但这不是这个问题的重点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只问速度。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第816篇《在JavaScript中复制数组的最快方法-切片与“ for”循环》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L泡芙Jim</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong>Fast ways to duplicate an array in JavaScript in Order:</strong></p>

<p><strong><code>#1: array1copy = [...array1];</code></strong></p>

<p><strong><code>#2: array1copy = array1.slice(0);</code></strong></p>

<p><strong><code>#3: array1copy = array1.slice();</code></strong></p>

<p><strong>If your array objects contain some JSON-non-serializable content (functions, Number.POSITIVE_INFINITY, etc.) better to use</strong> </p>

<p><strong><code>array1copy = JSON.parse(JSON.stringify(array1))</code></strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端古一</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>A simple solution:</p>

<pre><code>original = [1,2,3]<font></font>
cloned = original.map(x=&gt;x)<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱神奇</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Benchmark time!</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function log(data) {<font></font>
  document.getElementById("log").textContent += data + "\n";<font></font>
}<font></font>
<font></font>
benchmark = (() =&gt; {<font></font>
  time_function = function(ms, f, num) {<font></font>
    var z = 0;<font></font>
    var t = new Date().getTime();<font></font>
    for (z = 0;<font></font>
      ((new Date().getTime() - t) &lt; ms); z++)<font></font>
      f(num);<font></font>
    return (z)<font></font>
  }<font></font>
<font></font>
  function clone1(arr) {<font></font>
    return arr.slice(0);<font></font>
  }<font></font>
<font></font>
  function clone2(arr) {<font></font>
    return [...arr]<font></font>
  }<font></font>
<font></font>
  function clone3(arr) {<font></font>
    return [].concat(arr);<font></font>
  }<font></font>
<font></font>
  Array.prototype.clone = function() {<font></font>
    return this.map(e =&gt; Array.isArray(e) ? e.clone() : e);<font></font>
  };<font></font>
<font></font>
  function clone4(arr) {<font></font>
    return arr.clone();<font></font>
  }<font></font>
<font></font>
<font></font>
  function benchmark() {<font></font>
    function compare(a, b) {<font></font>
      if (a[1] &gt; b[1]) {<font></font>
        return -1;<font></font>
      }<font></font>
      if (a[1] &lt; b[1]) {<font></font>
        return 1;<font></font>
      }<font></font>
      return 0;<font></font>
    }<font></font>
<font></font>
    funcs = [clone1, clone2, clone3, clone4];<font></font>
    results = [];<font></font>
    funcs.forEach((ff) =&gt; {<font></font>
      console.log("Benchmarking: " + ff.name);<font></font>
      var s = time_function(2500, ff, Array(1024));<font></font>
      results.push([ff, s]);<font></font>
      console.log("Score: " + s);<font></font>
<font></font>
    })<font></font>
    return results.sort(compare);<font></font>
  }<font></font>
  return benchmark;<font></font>
})()<font></font>
log("Starting benchmark...\n");<font></font>
res = benchmark();<font></font>
<font></font>
console.log("Winner: " + res[0][0].name + " !!!");<font></font>
count = 1;<font></font>
res.forEach((r) =&gt; {<font></font>
  log((count++) + ". " + r[0].name + " score: " + Math.floor(10000 * r[1] / res[0][1]) / 100 + ((count == 2) ? "% *winner*" : "% speed of winner.") + " (" + Math.round(r[1] * 100) / 100 + ")");<font></font>
});<font></font>
log("\nWinner code:\n");<font></font>
log(res[0][0].toString());</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;textarea rows="50" cols="80" style="font-size: 16; resize:none; border: none;" id="log"&gt;&lt;/textarea&gt;</code></pre>
</div>
</div>
<p></p>

<blockquote>
  <p>The benchmark will run for 10s since you click the button.</p>
</blockquote>

<p>My results:  </p>

<p>Chrome (V8 engine):  </p>

<pre><code>1. clone1 score: 100% *winner* (4110764)<font></font>
2. clone3 score: 74.32% speed of winner. (3055225)<font></font>
3. clone2 score: 30.75% speed of winner. (1264182)<font></font>
4. clone4 score: 21.96% speed of winner. (902929)<font></font>
</code></pre>

<p>Firefox (SpiderMonkey Engine):  </p>

<pre><code>1. clone1 score: 100% *winner* (8448353)<font></font>
2. clone3 score: 16.44% speed of winner. (1389241)<font></font>
3. clone4 score: 5.69% speed of winner. (481162)<font></font>
4. clone2 score: 2.27% speed of winner. (192433)<font></font>
</code></pre>

<blockquote>
  <p>Winner code:</p>
</blockquote>

<pre><code>function clone1(arr) {<font></font>
    return arr.slice(0);<font></font>
}<font></font>
</code></pre>

<blockquote>
  <p>Winner engine:</p>
  
  <p>SpiderMonkey (Mozilla/Firefox)</p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Near</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>As @Dan said "This answer becomes outdated fast. Use <a href="https://jsperf.com/clone-array-3" rel="nofollow noreferrer">benchmarks</a> to check the actual situation", there is one specific answer from jsperf that has not had an answer for itself: <strong>while</strong>:</p>

<pre><code>var i = a.length;<font></font>
while(i--) { b[i] = a[i]; }<font></font>
</code></pre>

<p>had 960,589 ops/sec with the runnerup <code>a.concat()</code> at 578,129 ops/sec, which is 60%.</p>

<p>This is the lastest Firefox (40) 64 bit.</p>

<hr>

<p>@aleclarson created a new, more reliable benchmark.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryGil</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>ECMAScript 2015 way with the <code>Spread</code> operator:</p>

<p>Basic examples:</p>

<pre><code>var copyOfOldArray = [...oldArray]<font></font>
var twoArraysBecomeOne = [...firstArray, ..seccondArray]<font></font>
</code></pre>

<p>Try in the browser console:</p>

<pre><code>var oldArray = [1, 2, 3]<font></font>
var copyOfOldArray = [...oldArray]<font></font>
console.log(oldArray)<font></font>
console.log(copyOfOldArray)<font></font>
<font></font>
var firstArray = [5, 6, 7]<font></font>
var seccondArray = ["a", "b", "c"]<font></font>
var twoArraysBecomOne = [...firstArray, ...seccondArray]<font></font>
console.log(twoArraysBecomOne);<font></font>
</code></pre>

<h3>References</h3>

<ul>
<li><em><a href="https://davidwalsh.name/spread-operator" rel="nofollow noreferrer">6 Great Uses of the Spread Operator</a></em> </li>
<li><em><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator" rel="nofollow noreferrer">Spread syntax</a></em></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">木嘢</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>There is a much cleaner solution:</p>

<pre><code>var srcArray = [1, 2, 3];<font></font>
var clonedArray = srcArray.length === 1 ? [srcArray[0]] : Array.apply(this, srcArray);<font></font>
</code></pre>

<p>The length check is required, because the <code>Array</code> constructor behaves differently when it is called with exactly one argument.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三小哥</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>It depends on the browser. If you look in the blog post <em><a href="http://weblogs.asp.net/alexeigorkov/archive/2008/02/18/array-prototype-slice-vs-manual-array-creation.aspx" rel="nofollow noreferrer">Array.prototype.slice vs manual array creation</a></em>, there is a rough guide to performance of each:</p>

<p><a href="https://i.stack.imgur.com/Yc73n.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/Yc73n.png" alt="Enter image description here"></a></p>

<p>Results:</p>

<p><a href="https://i.stack.imgur.com/JMwiQ.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/JMwiQ.png" alt="Enter image description here"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从技术上讲</font></font><code>slice</code> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最快的方法。</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果添加</font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">begin索引</font><font style="vertical-align: inherit;">，它甚至更快</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>myArray.slice(0);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比...快</font></font></p>

<pre><code>myArray.slice();
</code></pre>

<p><a href="http://jsperf.com/cloning-arrays/3" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsperf.com/cloning-arrays/3</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>var cloned_array = [].concat(target_array);
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">深度克隆数组或对象的最简单方法：</font></font></p>

<pre><code>var dup_array = JSON.parse(JSON.stringify(original_array))
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端LEYLEY</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><code>a.map(e =&gt; e)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是这项工作的另一种选择。</font><font style="vertical-align: inherit;">截至目前</font></font><code>.map()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>.slice(0)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Firefox中</font><font style="vertical-align: inherit;">速度非常快（几乎与一样快</font><font style="vertical-align: inherit;">），但在Chrome中却没有。</font></font></p>

<p>On the other hand, if an array is multi-dimensional, since arrays are objects and objects are reference types, none of the slice or concat methods will be a cure... So one proper way of cloning an array is an invention of <code>Array.prototype.clone()</code> as follows.</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>Array.prototype.clone = function(){<font></font>
  return this.map(e =&gt; Array.isArray(e) ? e.clone() : e);<font></font>
};<font></font>
<font></font>
var arr = [ 1, 2, 3, 4, [ 1, 2, [ 1, 2, 3 ], 4 , 5], 6 ],<font></font>
    brr = arr.clone();<font></font>
brr[4][2][1] = "two";<font></font>
console.log(JSON.stringify(arr));<font></font>
console.log(JSON.stringify(brr));</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ㄏ囧囧ㄟ</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我整理了一个快速演示：</font><a href="http://jsbin.com/agugo3/edit" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsbin.com/agugo3/edit" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsbin.com/agugo3/edit</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Internet Explorer 8上的结果是156、782和750，这表明</font></font><code>slice</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下速度更快。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云斯丁GO</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">es6方式呢？</font></font></p>

<pre><code>arr2 = [...arr1];
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
