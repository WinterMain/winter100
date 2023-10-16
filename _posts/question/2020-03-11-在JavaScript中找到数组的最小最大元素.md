---
layout: question
title:  在JavaScript中找到数组的最小/最大元素
date:   2020-03-11T03:24:02.000Z
description: 如何轻松获得JavaScript数组的min或max元素？伪代码示例：let array = \[100, 0, 50\]array.min() ...
img: 
author: Tom西门
category: question
answer: 24
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何轻松获得JavaScript数组的min或max元素？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">伪代码示例：</font></font></p>

<pre><code>let array = [100, 0, 50]<font></font>
<font></font>
array.min() //=&gt; 0<font></font>
array.max() //=&gt; 100<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第595篇《在JavaScript中找到数组的最小/最大元素》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilStafan</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>Math.max()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>Math.min()</code></p>

<pre><code>Math.max(10, 20);   //  20<font></font>
Math.min(-10, -20); // -20<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下函数用于</font></font><code>Function.prototype.apply()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在数字数组中查找最大元素。</font></font><code>getMaxOfArray([1, 2, 3])</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等价于</font></font><code>Math.max(1, 2, 3)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是您可以</font></font><code>getMaxOfArray()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在以编程方式构造的任意大小的数组上</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>function getMaxOfArray(numArray) {<font></font>
  return Math.max.apply(null, numArray);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者使用新的散布运算符，获得数组的最大值变得容易得多。</font></font></p>

<pre><code>var arr = [1, 2, 3];<font></font>
var max = Math.max(...arr); // 3<font></font>
var min = Math.min(...arr); // 1<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimLEYSam</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>let arr = [2,5,3,5,6,7,1];<font></font>
<font></font>
let max = Math.max(...arr); // 7<font></font>
let min = Math.min(...arr); // 1<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin村村</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prototype.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">框架，则此代码可以正常运行：</font></font></p>

<pre><code>arr.min();<font></font>
arr.max();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处记录：</font></font><a href="http://www.prototypejs.org/api/enumerable/max" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">max的Javascript原型框架</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小卤蛋Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在使用原型，ChaosPandion的解决方案就可以使用。</font><font style="vertical-align: inherit;">如果没有，请考虑以下问题：</font></font></p>

<pre><code>Array.max = function( array ){<font></font>
    return Math.max.apply( Math, array );<font></font>
};<font></font>
<font></font>
Array.min = function( array ){<font></font>
    return Math.min.apply( Math, array );<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果数组值不是整数，则上面的代码将返回NaN，因此您应该构建一些功能来避免这种情况。</font><font style="vertical-align: inherit;">否则，它将起作用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿Near</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一种从对象数组中获取最大值的方法。</font><font style="vertical-align: inherit;">创建一个副本（带有切片），然后按降序对副本进行排序并获取第一项。</font></font></p>

<pre><code>var myArray = [<font></font>
    {"ID": 1, "Cost": 200},<font></font>
    {"ID": 2, "Cost": 1000},<font></font>
    {"ID": 3, "Cost": 50},<font></font>
    {"ID": 4, "Cost": 500}<font></font>
]<font></font>
<font></font>
maxsort = myArray.slice(0).sort(function(a, b) { return b.ID - a.ID })[0].ID; <font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙乐理查德</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的东西，真的。 </font></font></p>

<pre><code>var arr = [10,20,30,40];<font></font>
arr.max = function() { return  Math.max.apply(Math, this); }; //attach max funct<font></font>
arr.min = function() { return  Math.min.apply(Math, this); }; //attach min funct<font></font>
<font></font>
alert("min: " + arr.min() + " max: " + arr.max());<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我以为我会分享我简单易懂的解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于分钟：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var arr = [3, 4, 12, 1, 0, 5];<font></font>
var min = arr[0];<font></font>
for (var k = 1; k &lt; arr.length; k++) {<font></font>
  if (arr[k] &lt; min) {<font></font>
    min = arr[k];<font></font>
  }<font></font>
}<font></font>
console.log("Min is: " + min);</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于最大： </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var arr = [3, 4, 12, 1, 0, 5];<font></font>
var max = arr[0];<font></font>
for (var k = 1; k &lt; arr.length; k++) {<font></font>
  if (arr[k] &gt; max) {<font></font>
    max = arr[k];<font></font>
  }<font></font>
}<font></font>
console.log("Max is: " + max);</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearSamHarry</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下代码对我有用： </font></font></p>

<pre><code>var valueList = [10,4,17,9,3];<font></font>
var maxValue = valueList.reduce(function(a, b) { return Math.max(a, b); });<font></font>
var minValue = valueList.reduce(function(a, b) { return Math.min(a, b); });<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱猪猪</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在项目中的任何地方使用以下功能：</font></font></p>

<pre><code>function getMin(array){<font></font>
    return Math.min.apply(Math,array);<font></font>
}<font></font>
<font></font>
function getMax(array){<font></font>
    return Math.max.apply(Math,array);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以调用传递数组的函数：</font></font></p>

<pre><code>var myArray = [1,2,3,4,5,6,7];<font></font>
var maximo = getMax(myArray); //return the highest number<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan西门</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反复进行，随时随地进行跟踪。</font></font></p>

<pre><code>var min = null;<font></font>
var max = null;<font></font>
for (var i = 0, len = arr.length; i &lt; len; ++i)<font></font>
{<font></font>
    var elem = arr[i];<font></font>
    if (min === null || min &gt; elem) min = elem;<font></font>
    if (max === null || max &lt; elem) max = elem;<font></font>
}<font></font>
alert( "min = " + min + ", max = " + max );<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果数组中没有元素，则将min / max保留为null。</font><font style="vertical-align: inherit;">如果数组中有任何元素，将一遍设置最小值和最大值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以</font></font><code>range</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用上述方法</font><font style="vertical-align: inherit;">扩展Array，</font><font style="vertical-align: inherit;">以允许重用并提高可读性。</font><font style="vertical-align: inherit;">在</font><a href="http://jsfiddle.net/9C9fU/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http://jsfiddle.net/9C9fU/上</font></a><font style="vertical-align: inherit;">看到有效的小提琴</font></font><a href="http://jsfiddle.net/9C9fU/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<pre><code>Array.prototype.range = function() {<font></font>
<font></font>
    var min = null,<font></font>
        max = null,<font></font>
        i, len;<font></font>
<font></font>
    for (i = 0, len = this.length; i &lt; len; ++i)<font></font>
    {<font></font>
        var elem = this[i];<font></font>
        if (min === null || min &gt; elem) min = elem;<font></font>
        if (max === null || max &lt; elem) max = elem;<font></font>
    }<font></font>
<font></font>
    return { min: min, max: max }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用作</font></font></p>

<pre><code>var arr = [3, 9, 22, -7, 44, 18, 7, 9, 15];<font></font>
<font></font>
var range = arr.range();<font></font>
<font></font>
console.log(range.min);<font></font>
console.log(range.max);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长西里神无</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替代方法</font></font></h1>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>Math.min</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>Math.max</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法都是递归操作正在添加到JS引擎调用堆栈，并且最有可能的</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">崩溃</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对包含大量项目的数组</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（超过〜10⁷项目，取决于用户的浏览器）。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Math.max（... Array（1000000）.keys（））;</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未捕获的RangeError：超出最大调用堆栈大小</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相反，请使用如下所示的内容：</font></font></p>

<pre><code>arr.reduce((max, val) =&gt; max &gt; val ? max : val, arr[0])
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或具有更好的运行时间：</font></font></p>

<pre><code>function maxValue(arr) {<font></font>
  let max = arr[0];<font></font>
<font></font>
  for (let val of arr) {<font></font>
    if (val &gt; max) {<font></font>
      max = val;<font></font>
    }<font></font>
  }<font></font>
  return max;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或同时获得最小和最大：</font></font></p>

<pre><code>function getMinMax(arr) {<font></font>
    return arr.reduce(({min, max}, v) =&gt; ({<font></font>
        min: min &lt; v ? min : v,<font></font>
        max: max &gt; v ? max : v,<font></font>
    }), { min: arr[0], max: arr[0] });<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或具有更好的运行时*：</font></font></p>

<pre><code>function getMinMax(arr) {<font></font>
    let min = arr[0];<font></font>
    let max = arr[0];<font></font>
    let i = arr.length;<font></font>
<font></font>
    while (i--) {<font></font>
        min = arr[i] &lt; min ? arr[i] : min;<font></font>
        max = arr[i] &gt; max ? arr[i] : max;<font></font>
    }<font></font>
    return { min, max };<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">*经过1,000,000项测试：</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
仅供参考，第一个函数运行时（在我的机器上）为15.84ms，而第二个函数运行时仅为4.32ms。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry小卤蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我很惊讶没有人提到减少功能。</font></font></p>

<pre><code>var arr = [1, 10, 5, 11, 2]<font></font>
<font></font>
var b = arr.reduce(function(previous,current){ <font></font>
                      return previous &gt; current ? previous:current<font></font>
                   });<font></font>
<font></font>
b =&gt; 11<font></font>
arr =&gt; [1, 10, 5, 11, 2]<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于大数组（〜10个元素），</font></font><code>Math.min</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>Math.max</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在node.js中产生RangeError（超出最大调用堆栈大小）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于大型阵列，一种快速而肮脏的解决方案是：</font></font></p>

<pre><code>Array.prototype.min = function() {<font></font>
    var r = this[0];<font></font>
    this.forEach(function(v,i,a){if (v&lt;r) r=v;});<font></font>
    return r;<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom老丝Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能适合您的目的。</font></font></p>

<pre><code>Array.prototype.min = function(comparer) {<font></font>
<font></font>
    if (this.length === 0) return null;<font></font>
    if (this.length === 1) return this[0];<font></font>
<font></font>
    comparer = (comparer || Math.min);<font></font>
<font></font>
    var v = this[0];<font></font>
    for (var i = 1; i &lt; this.length; i++) {<font></font>
        v = comparer(this[i], v);    <font></font>
    }<font></font>
<font></font>
    return v;<font></font>
}<font></font>
<font></font>
Array.prototype.max = function(comparer) {<font></font>
<font></font>
    if (this.length === 0) return null;<font></font>
    if (this.length === 1) return this[0];<font></font>
<font></font>
    comparer = (comparer || Math.max);<font></font>
<font></font>
    var v = this[0];<font></font>
    for (var i = 1; i &lt; this.length; i++) {<font></font>
        v = comparer(this[i], v);    <font></font>
    }<font></font>
<font></font>
    return v;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro小卤蛋A</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/max" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/max</font></font></a></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function getMaxOfArray(numArray) {<font></font>
  return Math.max.apply(null, numArray);<font></font>
}<font></font>
<font></font>
var arr = [100, 0, 50];<font></font>
console.log(getMaxOfArray(arr))</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Davaid</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种方法是：</font></font></p>

<pre><code>var arrayMax = Function.prototype.apply.bind(Math.max, null);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法：  </font></font></p>

<pre><code>var max = arrayMax([2, 5, 1]);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋LEY</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到一个</font></font><code>Array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">的最小值的简单解决方案</font><font style="vertical-align: inherit;">是使用</font></font><code>Array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原型函数</font></font><code>reduce</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>A = [4,3,-9,-2,2,1];<font></font>
A.reduce((min, val) =&gt; val &lt; min ? val : min, A[0]); // returns -9<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或使用JavaScript的内置Math.Min（）函数（感谢@Tenflex）：</font></font></p>

<pre><code>A.reduce((min,val) =&gt; Math.min(min,val), A[0]);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置</font></font><code>min</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>A[0]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后检查</font></font><code>A[1]...A[n]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否严格小于当前值</font></font><code>min</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果</font></font><code>A[i] &lt; min</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随后</font></font><code>min</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新为</font></font><code>A[i]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">处理</font></font><code>min</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完</font><font style="vertical-align: inherit;">所有数组元素后，</font><font style="vertical-align: inherit;">将返回结果。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：包括最小值的位置：</font></font></p>

<pre><code>A = [4,3,-9,-2,2,1];<font></font>
A.reduce((min, val) =&gt; val &lt; min._min ? {_min: val, _idx: min._curr, _curr: min._curr + 1} : {_min: min._min, _idx: min._idx, _curr: min._curr + 1}, {_min: A[0], _idx: 0, _curr: 0}); // returns { _min: -9, _idx: 2, _curr: 6 }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪理查德</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过扩展Array类型来实现：</font></font></p>

<pre><code>Array.max = function( array ){<font></font>
    return Math.max.apply( Math, array );<font></font>
};<font></font>
Array.min = function( array ){<font></font>
    return Math.min.apply( Math, array );<font></font>
}; <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="http://ejohn.org/blog/fast-javascript-maxmin/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提振</font><font style="vertical-align: inherit;">（约翰·雷西格）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Eva</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两种方法更短，更容易：</font></font></p>

<pre><code>let arr = [2, 6, 1, 0]
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方式1</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>let max = Math.max.apply(null, arr)
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方式二</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>let max = arr.reduce(function(a, b) {<font></font>
    return Math.max(a, b);<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端前端猴子</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于大阵列（〜10⁷元素），</font></font><code>Math.min</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>Math.max</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">二者在产生Node.js的下面的错误</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RangeError：超出最大调用堆栈大小</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个更健壮的解决方案是不将每个元素都添加到调用堆栈中，而是传递一个数组：</font></font></p>

<pre><code>function arrayMin(arr) {<font></font>
  return arr.reduce(function (p, v) {<font></font>
    return ( p &lt; v ? p : v );<font></font>
  });<font></font>
}<font></font>
<font></font>
function arrayMax(arr) {<font></font>
  return arr.reduce(function (p, v) {<font></font>
    return ( p &gt; v ? p : v );<font></font>
  });<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您担心速度，下面的代码将比</font></font><code>Math.max.apply</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的计算机</font><font style="vertical-align: inherit;">快3倍</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">参见</font></font><a href="http://jsperf.com/min-and-max-in-array/2"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsperf.com/min-and-max-in-array/2</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>function arrayMin(arr) {<font></font>
  var len = arr.length, min = Infinity;<font></font>
  while (len--) {<font></font>
    if (arr[len] &lt; min) {<font></font>
      min = arr[len];<font></font>
    }<font></font>
  }<font></font>
  return min;<font></font>
};<font></font>
<font></font>
function arrayMax(arr) {<font></font>
  var len = arr.length, max = -Infinity;<font></font>
  while (len--) {<font></font>
    if (arr[len] &gt; max) {<font></font>
      max = arr[len];<font></font>
    }<font></font>
  }<font></font>
  return max;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的数组包含字符串而不是数字，则还需要将它们强制转换为数字。</font><font style="vertical-align: inherit;">下面的代码可以做到这一点，但是它会使我的机器上的代码速度降低约10倍。</font><font style="vertical-align: inherit;">参见</font></font><a href="http://jsperf.com/min-and-max-in-array/3"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsperf.com/min-and-max-in-array/3</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>function arrayMin(arr) {<font></font>
  var len = arr.length, min = Infinity;<font></font>
  while (len--) {<font></font>
    if (Number(arr[len]) &lt; min) {<font></font>
      min = Number(arr[len]);<font></font>
    }<font></font>
  }<font></font>
  return min;<font></font>
};<font></font>
<font></font>
function arrayMax(arr) {<font></font>
  var len = arr.length, max = -Infinity;<font></font>
  while (len--) {<font></font>
    if (Number(arr[len]) &gt; max) {<font></font>
      max = Number(arr[len]);<font></font>
    }<font></font>
  }<font></font>
  return max;<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪小小</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您像我一样偏执于使用</font></font><code>Math.max.apply</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#Using_apply_and_built-in_functions" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据MDN</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给定大数组</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#Using_apply_and_built-in_functions" rel="noreferrer"><font style="vertical-align: inherit;">，</font></a><font style="vertical-align: inherit;">这可能会导致错误</font><font style="vertical-align: inherit;">），请尝试以下操作：</font></font></p>

<pre><code>function arrayMax(array) {<font></font>
  return array.reduce(function(a, b) {<font></font>
    return Math.max(a, b);<font></font>
  });<font></font>
}<font></font>
<font></font>
function arrayMin(array) {<font></font>
  return array.reduce(function(a, b) {<font></font>
    return Math.min(a, b);<font></font>
  });<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，在ES6中：</font></font></p>

<pre><code>function arrayMax(array) {<font></font>
  return array.reduce((a, b) =&gt; Math.max(a, b));<font></font>
}<font></font>
<font></font>
function arrayMin(array) {<font></font>
  return array.reduce((a, b) =&gt; Math.min(a, b));<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，匿名函数是必需的（而不是</font></font><code>Math.max.bind(Math)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为</font></font><code>reduce</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不只是传递</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">传递</font></font><code>b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给函数</font><font style="vertical-align: inherit;">而使用</font><font style="vertical-align: inherit;">，而且还</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要对数组本身的引用，因此我们必须确保我们也不要尝试调用</font></font><code>max</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些</font><font style="vertical-align: inherit;">函数</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三LEY</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用传播算子（ES6）</font></font></p>

<pre><code>Math.max(...array);  // the same with "min" =&gt; Math.min(...array);
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const array = [10, 2, 33, 4, 5];<font></font>
<font></font>
console.log(<font></font>
  Math.max(...array)<font></font>
)</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>var max_of_array = Math.max.apply(Math, array);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关完整的讨论，请参见：</font><a href="http://aaroncrane.co.uk/2008/11/javascript_max_api/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="http://aaroncrane.co.uk/2008/11/javascript_max_api/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//aaroncrane.co.uk/2008/11/javascript_max_api/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙前端</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何扩充内置Array对象以使用</font></font><a href="https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/max" rel="noreferrer"><code>Math.max</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><a href="https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Math/min" rel="noreferrer"><code>Math.min</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替：</font></font></p>

<pre><code>Array.prototype.max = function() {<font></font>
  return Math.max.apply(null, this);<font></font>
};<font></font>
<font></font>
Array.prototype.min = function() {<font></font>
  return Math.min.apply(null, this);<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个</font></font><strong><a href="https://jsfiddle.net/nikhilagarwal530/np9L66bv/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSFiddle</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">增强内置功能可能会导致与其他库发生冲突（有些人看到了），因此您可能更</font><font style="vertical-align: inherit;">愿意直接直接</font></font><code>apply</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">读取</font></font><code>Math.xxx()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组：</font></font></p>

<pre><code>var min = Math.min.apply(null, arr),<font></font>
    max = Math.max.apply(null, arr);<font></font>
</code></pre>

<hr>

<p>Alternately, assuming your browser supports ECMAScript 6, you can use the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator" rel="noreferrer">spread operator</a> which functions similarly to the <code>apply</code> method:</p>

<pre><code>var min = Math.min( ...arr ),<font></font>
    max = Math.max( ...arr );<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
