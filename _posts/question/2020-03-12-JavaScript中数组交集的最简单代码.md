---
layout: question
title:  JavaScript中数组交集的最简单代码
date:   2020-03-12T06:15:45.000Z
description: 在javascript中实现数组交集的最简单，无库代码是什么？我想写intersection(\[1,2,3\], \[2,3,4,5\])并得到\[...
img: 
author: 
category: question
answer: 21
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在javascript中实现数组交集的最简单，无库代码是什么？</font><font style="vertical-align: inherit;">我想写</font></font></p>

<pre><code>intersection([1,2,3], [2,3,4,5])
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并得到</font></font></p>

<pre><code>[2, 3]
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第980篇《JavaScript中数组交集的最简单代码》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一蛋蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Here is <a href="http://underscorejs.org/" rel="nofollow">underscore.js</a> implementation:</p>

<pre><code>_.intersection = function(array) {<font></font>
  if (array == null) return [];<font></font>
  var result = [];<font></font>
  var argsLength = arguments.length;<font></font>
  for (var i = 0, length = array.length; i &lt; length; i++) {<font></font>
    var item = array[i];<font></font>
    if (_.contains(result, item)) continue;<font></font>
    for (var j = 1; j &lt; argsLength; j++) {<font></font>
      if (!_.contains(arguments[j], item)) break;<font></font>
    }<font></font>
    if (j === argsLength) result.push(item);<font></font>
  }<font></font>
  return result;<font></font>
};<font></font>
</code></pre>

<p>Source: <a href="http://underscorejs.org/docs/underscore.html#section-62" rel="nofollow">http://underscorejs.org/docs/underscore.html#section-62</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Me无敌</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>function getIntersection(arr1, arr2){<font></font>
    var result = [];<font></font>
    arr1.forEach(function(elem){<font></font>
        arr2.forEach(function(elem2){<font></font>
            if(elem === elem2){<font></font>
                result.push(elem);<font></font>
            }<font></font>
        });<font></font>
    });<font></font>
    return result;<font></font>
}<font></font>
<font></font>
getIntersection([1,2,3], [2,3,4,5]); // [ 2, 3 ]<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProTony</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><h2>A functional approach with ES2015</h2>

<p>A functional approach must consider using only pure functions without side effects, each of which is only concerned with a single job.</p>

<p>These restrictions enhance the composability and reusability of the functions involved.</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>// small, reusable auxiliary functions<font></font>
<font></font>
const createSet = xs =&gt; new Set(xs);<font></font>
const filter = f =&gt; xs =&gt; xs.filter(apply(f));<font></font>
const apply = f =&gt; x =&gt; f(x);<font></font>
<font></font>
<font></font>
// intersection<font></font>
<font></font>
const intersect = xs =&gt; ys =&gt; {<font></font>
  const zs = createSet(ys);<font></font>
  return filter(x =&gt; zs.has(x)<font></font>
     ? true<font></font>
     : false<font></font>
  ) (xs);<font></font>
};<font></font>
<font></font>
<font></font>
// mock data<font></font>
<font></font>
const xs = [1,2,2,3,4,5];<font></font>
const ys = [0,1,2,3,3,3,6,7,8,9];<font></font>
<font></font>
<font></font>
// run it<font></font>
<font></font>
console.log( intersect(xs) (ys) );</code></pre>
</div>
</div>
<p></p>

<p>Please note that the native <code>Set</code> type is used, which has an advantageous
lookup performance.</p>

<h3>Avoid duplicates</h3>

<p>Obviously repeatedly occurring items from the first <code>Array</code> are preserved, while the second <code>Array</code> is de-duplicated. This may be or may be not the desired behavior. If you need a unique result just apply <code>dedupe</code> to the first argument:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>// auxiliary functions<font></font>
<font></font>
const apply = f =&gt; x =&gt; f(x);<font></font>
const comp = f =&gt; g =&gt; x =&gt; f(g(x));<font></font>
const afrom = apply(Array.from);<font></font>
const createSet = xs =&gt; new Set(xs);<font></font>
const filter = f =&gt; xs =&gt; xs.filter(apply(f));<font></font>
<font></font>
<font></font>
// intersection<font></font>
<font></font>
const intersect = xs =&gt; ys =&gt; {<font></font>
  const zs = createSet(ys);<font></font>
  return filter(x =&gt; zs.has(x)<font></font>
     ? true<font></font>
     : false<font></font>
  ) (xs);<font></font>
};<font></font>
<font></font>
<font></font>
// de-duplication<font></font>
<font></font>
const dedupe = comp(afrom) (createSet);<font></font>
<font></font>
<font></font>
// mock data<font></font>
<font></font>
const xs = [1,2,2,3,4,5];<font></font>
const ys = [0,1,2,3,3,3,6,7,8,9];<font></font>
<font></font>
<font></font>
// unique result<font></font>
<font></font>
console.log( intersect(dedupe(xs)) (ys) );</code></pre>
</div>
</div>
<p></p>

<h3>Compute the intersection of any number of <code>Array</code>s</h3>

<p>If you want to compute the intersection of an arbitrarily number of <code>Array</code>s just compose <code>intersect</code> with <code>foldl</code>. Here is a convenience function:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>// auxiliary functions<font></font>
<font></font>
const apply = f =&gt; x =&gt; f(x);<font></font>
const uncurry = f =&gt; (x, y) =&gt; f(x) (y);<font></font>
const createSet = xs =&gt; new Set(xs);<font></font>
const filter = f =&gt; xs =&gt; xs.filter(apply(f));<font></font>
const foldl = f =&gt; acc =&gt; xs =&gt; xs.reduce(uncurry(f), acc);<font></font>
<font></font>
<font></font>
// intersection<font></font>
<font></font>
const intersect = xs =&gt; ys =&gt; {<font></font>
  const zs = createSet(ys);<font></font>
  return filter(x =&gt; zs.has(x)<font></font>
     ? true<font></font>
     : false<font></font>
  ) (xs);<font></font>
};<font></font>
<font></font>
<font></font>
// intersection of an arbitrarily number of Arrays<font></font>
<font></font>
const intersectn = (head, ...tail) =&gt; foldl(intersect) (head) (tail);<font></font>
<font></font>
<font></font>
// mock data<font></font>
<font></font>
const xs = [1,2,2,3,4,5];<font></font>
const ys = [0,1,2,3,3,3,6,7,8,9];<font></font>
const zs = [0,1,2,3,4,5,6];<font></font>
<font></font>
<font></font>
// run<font></font>
<font></font>
console.log( intersectn(xs, ys, zs) );</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Rather using indexOf you can also use  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" rel="nofollow noreferrer">Array.protype.includes</a>.</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function intersection(arr1, arr2) {<font></font>
  return arr1.filter((ele =&gt; {<font></font>
    return arr2.includes(ele);<font></font>
  }));<font></font>
}<font></font>
<font></font>
console.log(intersection([1,2,3], [2,3,4,5]));</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐达蒙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>ES6 style simple way.</p>

<pre><code>const intersection = (a, b) =&gt; {<font></font>
  const s = new Set(b);<font></font>
  return a.filter(x =&gt; s.has(x));<font></font>
};<font></font>
</code></pre>

<p>Example:</p>

<pre><code>intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinGil</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>If you need to have it handle intersecting multiple arrays:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const intersect = (a, b, ...rest) =&gt; {<font></font>
  if (rest.length === 0) return [...new Set(a)].filter(x =&gt; new Set(b).has(x));<font></font>
  return intersect(a, intersect(b, ...rest));<font></font>
};<font></font>
<font></font>
console.log(intersect([1,2,3,4,5], [1,2], [1, 2, 3,4,5], [2, 10, 1])) // [1,2]</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猴子前端</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>"indexOf" for IE 9.0, chrome, firefox, opera, </p>

<pre><code>    function intersection(a,b){<font></font>
     var rs = [], x = a.length;<font></font>
     while (x--) b.indexOf(a[x])!=-1 &amp;&amp; rs.push(a[x]);<font></font>
     return rs.sort();<font></font>
    }<font></font>
<font></font>
intersection([1,2,3], [2,3,4,5]);<font></font>
//Result:  [2,3]<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙老丝</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对此处的最小调整进行细微调整（</font></font><a href="https://stackoverflow.com/a/1885569/1424242"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">filter / indexOf解决方案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），即使用JavaScript对象在数组之一中创建值的索引，会将其从O（N * M）减少为“大概”线性时间。</font></font><a href="https://stackoverflow.com/a/12255071/1424242"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">源1 </font></font></a> <a href="https://stackoverflow.com/a/3859150/1424242"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">源2</font></font></a></p>

<pre><code>function intersect(a, b) {<font></font>
  var aa = {};<font></font>
  a.forEach(function(v) { aa[v]=1; });<font></font>
  return b.filter(function(v) { return v in aa; });<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不是最简单的解决方案（比</font></font><a href="https://stackoverflow.com/a/1885569/1424242"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">filter + indexOf的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码更多</font><font style="vertical-align: inherit;">），也不是最快的解决方案（可能比</font></font><a href="https://stackoverflow.com/a/1885660/1424242"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">intersect_safe（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">慢一个常数</font><font style="vertical-align: inherit;">），但似乎是一个很好的平衡。</font><font style="vertical-align: inherit;">它具有</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的一面，同时提供了良好的性能，并且不需要预先排序的输入。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯梅小胖</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>You can use (for all browsers except IE):</p>

<pre><code>const intersection = array1.filter(element =&gt; array2.includes(element));
</code></pre>

<p>or for IE : </p>

<pre><code>const intersection = array1.filter(element =&gt; array2.indexOf(element) !== -1);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">hide on</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在数据上有一些限制，您可以</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在线性</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时间内完成！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正整数</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：使用将值映射到“可见/不可见”布尔值的数组。</font></font></p>

<pre><code>function intersectIntegers(array1,array2) { <font></font>
   var seen=[],<font></font>
       result=[];<font></font>
   for (var i = 0; i &lt; array1.length; i++) {<font></font>
     seen[array1[i]] = true;<font></font>
   }<font></font>
   for (var i = 0; i &lt; array2.length; i++) {<font></font>
     if ( seen[array2[i]])<font></font>
        result.push(array2[i]);<font></font>
   }<font></font>
   return result;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一种类似的技术</font><font style="vertical-align: inherit;">：取一个虚拟密钥，为array1中的每个元素将其设置为“ true”，然后在array2的元素中查找此密钥。</font><font style="vertical-align: inherit;">完成后清理。</font></font></p>

<pre><code>function intersectObjects(array1,array2) { <font></font>
   var result=[];<font></font>
   var key="tmpKey_intersect"<font></font>
   for (var i = 0; i &lt; array1.length; i++) {<font></font>
     array1[i][key] = true;<font></font>
   }<font></font>
   for (var i = 0; i &lt; array2.length; i++) {<font></font>
     if (array2[i][key])<font></font>
        result.push(array2[i]);<font></font>
   }<font></font>
   for (var i = 0; i &lt; array1.length; i++) {<font></font>
     delete array1[i][key];<font></font>
   }<font></font>
   return result;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，您需要确保密钥之前没有出现，否则您将破坏数据... </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A逆天猿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用的组合</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" rel="noreferrer"><code>Array.prototype.filter</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf" rel="noreferrer"><code>Array.prototype.indexOf</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>array1.filter(value =&gt; -1 !== array2.indexOf(value))
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，如</font></font><a href="https://stackoverflow.com/users/3546284/vrugtehagel"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vrugtehagel</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在注释中建议的那样，您可以使用更新</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes" rel="noreferrer"><code>Array.prototype.includes</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的代码甚至更简单的代码：</font></font></p>

<pre><code>array1.filter(value =&gt; array2.includes(value))
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于较旧的浏览器：</font></font></p>

<pre><code>array1.filter(function(n) {<font></font>
    return array2.indexOf(n) !== -1;<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEvaGreen</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从索引0逐一检查，从中创建新数组。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样的东西，虽然没有很好的测试。</font></font></p>

<pre><code>function intersection(x,y){<font></font>
 x.sort();y.sort();<font></font>
 var i=j=0;ret=[];<font></font>
 while(i&lt;x.length &amp;&amp; j&lt;y.length){<font></font>
  if(x[i]&lt;y[j])i++;<font></font>
  else if(y[j]&lt;x[i])j++;<font></font>
  else {<font></font>
   ret.push(x[i]);<font></font>
   i++,j++;<font></font>
  }<font></font>
 }<font></font>
 return ret;<font></font>
}<font></font>
<font></font>
alert(intersection([1,2,3], [2,3,4,5]));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS：仅适用于数字和普通字符串的算法，任意对象数组的交集可能不起作用。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无老丝Davaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于仅包含字符串或数字的数组，您可以按照其他一些答案进行排序。</font><font style="vertical-align: inherit;">对于任意对象数组的一般情况，我认为您不能避免这样做。</font><font style="vertical-align: inherit;">下面将为您提供作为参数提供的任意数量的数组的交集</font></font><code>arrayIntersection</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var arrayContains = Array.prototype.indexOf ?<font></font>
    function(arr, val) {<font></font>
        return arr.indexOf(val) &gt; -1;<font></font>
    } :<font></font>
    function(arr, val) {<font></font>
        var i = arr.length;<font></font>
        while (i--) {<font></font>
            if (arr[i] === val) {<font></font>
                return true;<font></font>
            }<font></font>
        }<font></font>
        return false;<font></font>
    };<font></font>
<font></font>
function arrayIntersection() {<font></font>
    var val, arrayCount, firstArray, i, j, intersection = [], missing;<font></font>
    var arrays = Array.prototype.slice.call(arguments); // Convert arguments into a real array<font></font>
<font></font>
    // Search for common values<font></font>
    firstArray = arrays.pop();<font></font>
    if (firstArray) {<font></font>
        j = firstArray.length;<font></font>
        arrayCount = arrays.length;<font></font>
        while (j--) {<font></font>
            val = firstArray[j];<font></font>
            missing = false;<font></font>
<font></font>
            // Check val is present in each remaining array <font></font>
            i = arrayCount;<font></font>
            while (!missing &amp;&amp; i--) {<font></font>
                if ( !arrayContains(arrays[i], val) ) {<font></font>
                    missing = true;<font></font>
                }<font></font>
            }<font></font>
            if (!missing) {<font></font>
                intersection.push(val);<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
    return intersection;<font></font>
}<font></font>
<font></font>
arrayIntersection( [1, 2, 3, "a"], [1, "a", 2], ["a", 1] ); // Gives [1, "a"]; <font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙飞云</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>function intersection(A,B){<font></font>
var result = new Array();<font></font>
for (i=0; i&lt;A.length; i++) {<font></font>
    for (j=0; j&lt;B.length; j++) {<font></font>
        if (A[i] == B[j] &amp;&amp; $.inArray(A[i],result) == -1) {<font></font>
            result.push(A[i]);<font></font>
        }<font></font>
    }<font></font>
}<font></font>
return result;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天小卤蛋Green</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以使用一个</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set" rel="noreferrer"><code>Set</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为</font></font><code>thisArg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" rel="noreferrer"><code>Array#filter</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并采取</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has" rel="noreferrer"><code>Set#has</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回调。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function intersection(a, b) {<font></font>
    return a.filter(Set.prototype.has, new Set(b));<font></font>
}<font></font>
<font></font>
console.log(intersection([1, 2, 3], [2, 3, 4, 5]));</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom蛋蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var a = [1,2,3];<font></font>
var b = [2,3,4,5];<font></font>
var c = $(b).not($(b).not(a));<font></font>
alert(c);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">不知</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的环境支持</font></font><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-set-objects" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 6 Set</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，那么一种简单且据认为有效的方式（请参阅规范链接）：</font></font></p>

<pre><code>function intersect(a, b) {<font></font>
  var setA = new Set(a);<font></font>
  var setB = new Set(b);<font></font>
  var intersection = new Set([...setA].filter(x =&gt; setB.has(x)));<font></font>
  return Array.from(intersection);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">较短，但可读性较差（也没有创建其他交集</font></font><code>Set</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>

<pre><code>function intersect(a, b) {<font></font>
      return [...new Set(a)].filter(x =&gt; new Set(b).has(x));<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次都</font><font style="vertical-align: inherit;">避免新</font></font><code>Set</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来的东西</font></font><code>b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>function intersect(a, b) {<font></font>
      var setB = new Set(b);<font></font>
      return [...new Set(a)].filter(x =&gt; setB.has(x));<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，使用集时，您将仅获得不同的值，因此</font></font><code>new Set[1,2,3,3].size</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">计算为</font></font><code>3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MonsterKK梅</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>// Return elements of array a that are also in b in linear time:<font></font>
function intersect(a, b) {<font></font>
  return a.filter(Set.prototype.has, new Set(b));<font></font>
}<font></font>
<font></font>
// Example:<font></font>
console.log(intersect([1,2,3], [2,3,4,5]));</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我推荐上述简洁的解决方案，该解决方案在大输入量方面胜过其他实现。</font><font style="vertical-align: inherit;">如果小投入的性能很重要，请检查以下替代方案。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替代方案和性能比较：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅以下代码段以了解替代实现，并检查</font></font><a href="https://jsperf.com/array-intersection-comparison" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://jsperf.com/array-intersection-comparison</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以进行性能比较。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function intersect_for(a, b) {<font></font>
  const result = [];<font></font>
  const alen = a.length;<font></font>
  const blen = b.length;<font></font>
  for (let i = 0; i &lt; alen; ++i) {<font></font>
    const ai = a[i];<font></font>
    for (let j = 0; j &lt; blen; ++j) {<font></font>
      if (ai === b[j]) {<font></font>
        result.push(ai);<font></font>
        break;<font></font>
      }<font></font>
    }<font></font>
  } <font></font>
  return result;<font></font>
}<font></font>
<font></font>
function intersect_filter_indexOf(a, b) {<font></font>
  return a.filter(el =&gt; b.indexOf(el) !== -1);<font></font>
}<font></font>
<font></font>
function intersect_filter_in(a, b) {<font></font>
  const map = b.reduce((map, el) =&gt; {map[el] = true; return map}, {});<font></font>
  return a.filter(el =&gt; el in map);<font></font>
}<font></font>
<font></font>
function intersect_for_in(a, b) {<font></font>
  const result = [];<font></font>
  const map = {};<font></font>
  for (let i = 0, length = b.length; i &lt; length; ++i) {<font></font>
    map[b[i]] = true;<font></font>
  }<font></font>
  for (let i = 0, length = a.length; i &lt; length; ++i) {<font></font>
    if (a[i] in map) result.push(a[i]);<font></font>
  }<font></font>
  return result;<font></font>
}<font></font>
<font></font>
function intersect_filter_includes(a, b) {<font></font>
  return a.filter(el =&gt; b.includes(el));<font></font>
}<font></font>
<font></font>
function intersect_filter_has_this(a, b) {<font></font>
  return a.filter(Set.prototype.has, new Set(b));<font></font>
}<font></font>
<font></font>
function intersect_filter_has_arrow(a, b) {<font></font>
  const set = new Set(b);<font></font>
  return a.filter(el =&gt; set.has(el));<font></font>
}<font></font>
<font></font>
function intersect_for_has(a, b) {<font></font>
  const result = [];<font></font>
  const set = new Set(b);<font></font>
  for (let i = 0, length = a.length; i &lt; length; ++i) {<font></font>
    if (set.has(a[i])) result.push(a[i]);<font></font>
  }<font></font>
  return result;<font></font>
}</code></pre>
</div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox 53中的结果：</font></font></strong></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">大型阵列（10,000个元素）上的运算/秒：</font></font></p>

<pre class="lang-none prettyprint-override"><code>filter + has (this)               523 (this answer)<font></font>
for + has                         482<font></font>
for-loop + in                     279<font></font>
filter + in                       242<font></font>
for-loops                          24<font></font>
filter + includes                  14<font></font>
filter + indexOf                   10<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小型阵列（100个元素）上的运算/秒：</font></font></p>

<pre class="lang-none prettyprint-override"><code>for-loop + in                 384,426<font></font>
filter + in                   192,066<font></font>
for-loops                     159,137<font></font>
filter + includes             104,068<font></font>
filter + indexOf               71,598<font></font>
filter + has (this)            43,531 (this answer)<font></font>
filter + has (arrow function)  35,588<font></font>
</code></pre></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙小宇宙十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用   </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Underscore.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">lodash.js</font></font></strong></p>

<pre><code>_.intersection( [0,345,324] , [1,0,324] )  // gives [0,324]
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅使用关联数组怎么样？</font></font></p>

<pre><code>function intersect(a, b) {<font></font>
    var d1 = {};<font></font>
    var d2 = {};<font></font>
    var results = [];<font></font>
    for (var i = 0; i &lt; a.length; i++) {<font></font>
        d1[a[i]] = true;<font></font>
    }<font></font>
    for (var j = 0; j &lt; b.length; j++) {<font></font>
        d2[b[j]] = true;<font></font>
    }<font></font>
    for (var k in d1) {<font></font>
        if (d2[k]) <font></font>
            results.push(k);<font></font>
    }<font></font>
    return results;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></p>

<pre><code>// new version<font></font>
function intersect(a, b) {<font></font>
    var d = {};<font></font>
    var results = [];<font></font>
    for (var i = 0; i &lt; b.length; i++) {<font></font>
        d[b[i]] = true;<font></font>
    }<font></font>
    for (var j = 0; j &lt; a.length; j++) {<font></font>
        if (d[a[j]]) <font></font>
            results.push(a[j]);<font></font>
    }<font></font>
    return results;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙小胖</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对ES6的贡献。</font><font style="vertical-align: inherit;">通常，它查找具有作为参数提供的不确定数量的数组的数组的交集。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>Array.prototype.intersect = function(...a) {<font></font>
  return [this,...a].reduce((p,c) =&gt; p.filter(e =&gt; c.includes(e)));<font></font>
}<font></font>
var arrs = [[0,2,4,6,8],[4,5,6,7],[4,6]],<font></font>
     arr = [0,1,2,3,4,5,6,7,8,9];<font></font>
<font></font>
document.write("&lt;pre&gt;" + JSON.stringify(arr.intersect(...arrs)) + "&lt;/pre&gt;");</code></pre>
</div>
</div>
<p></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
