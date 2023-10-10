---
layout: question
title:  如何获取JavaScript中两个数组之间的差异？
date:   2020-03-11T06:32:44.000Z
description: 有没有办法返回JavaScript中两个数组之间的差？例如：var a1 = \['a', 'b'\];var a2 = \['a', 'b', 'c...
img: 
author: 不知
category: question
answer: 19
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法返回JavaScript中两个数组之间的差？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre class="lang-js prettyprint-override"><code>var a1 = ['a', 'b'];<font></font>
var a2 = ['a', 'b', 'c', 'd'];<font></font>
<font></font>
// need ["c", "d"]<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第685篇《如何获取JavaScript中两个数组之间的差异？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid泡芙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>littlebit fix for the best answer</p>

<pre><code>function arr_diff(a1, a2)<font></font>
{<font></font>
  var a=[], diff=[];<font></font>
  for(var i=0;i&lt;a1.length;i++)<font></font>
    a[a1[i]]=a1[i];<font></font>
  for(var i=0;i&lt;a2.length;i++)<font></font>
    if(a[a2[i]]) delete a[a2[i]];<font></font>
    else a[a2[i]]=a2[i];<font></font>
  for(var k in a)<font></font>
   diff.push(a[k]);<font></font>
  return diff;<font></font>
}<font></font>
</code></pre>

<p>this will take current type of element in consideration. b/c when we make a[a1[i]] it converts a value to string from its oroginal value, so we lost actual value.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋Near</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>You can use underscore.js : <a href="http://underscorejs.org/#intersection" rel="nofollow">http://underscorejs.org/#intersection</a></p>

<p>You have needed methods for array : </p>

<pre><code>_.difference([1, 2, 3, 4, 5], [5, 2, 10]);<font></font>
=&gt; [1, 3, 4]<font></font>
<font></font>
_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);<font></font>
=&gt; [1, 2]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony伽罗Sam</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Just thinking... for the sake of a challenge ;-) would this work... (for basic arrays of strings, numbers, etc.) no nested arrays</p>

<pre><code>function diffArrays(arr1, arr2, returnUnion){<font></font>
  var ret = [];<font></font>
  var test = {};<font></font>
  var bigArray, smallArray, key;<font></font>
  if(arr1.length &gt;= arr2.length){<font></font>
    bigArray = arr1;<font></font>
    smallArray = arr2;<font></font>
  } else {<font></font>
    bigArray = arr2;<font></font>
    smallArray = arr1;<font></font>
  }<font></font>
  for(var i=0;i&lt;bigArray.length;i++){<font></font>
    key = bigArray[i];<font></font>
    test[key] = true;<font></font>
  }<font></font>
  if(!returnUnion){<font></font>
    //diffing<font></font>
    for(var i=0;i&lt;smallArray.length;i++){<font></font>
      key = smallArray[i];<font></font>
      if(!test[key]){<font></font>
        test[key] = null;<font></font>
      }<font></font>
    }<font></font>
  } else {<font></font>
    //union<font></font>
    for(var i=0;i&lt;smallArray.length;i++){<font></font>
      key = smallArray[i];<font></font>
      if(!test[key]){<font></font>
        test[key] = true;<font></font>
      }<font></font>
    }<font></font>
  }<font></font>
  for(var i in test){<font></font>
    ret.push(i);<font></font>
  }<font></font>
  return ret;<font></font>
}<font></font>
<font></font>
array1 = "test1", "test2","test3", "test4", "test7"<font></font>
array2 = "test1", "test2","test3","test4", "test5", "test6"<font></font>
diffArray = diffArrays(array1, array2);<font></font>
//returns ["test5","test6","test7"]<font></font>
<font></font>
diffArray = diffArrays(array1, array2, true);<font></font>
//returns ["test1", "test2","test3","test4", "test5", "test6","test7"]<font></font>
</code></pre>

<p>Note the sorting will likely not be as noted above... but if desired, call .sort() on the array to sort it.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>This is working: basically merge the two arrays, look for the duplicates and push what is not duplicated into a new array which is the difference.</p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function diff(arr1, arr2) {<font></font>
  var newArr = [];<font></font>
  var arr = arr1.concat(arr2);<font></font>
  <font></font>
  for (var i in arr){<font></font>
    var f = arr[i];<font></font>
    var t = 0;<font></font>
    for (j=0; j&lt;arr.length; j++){<font></font>
      if(arr[j] === f){<font></font>
        t++; <font></font>
        }<font></font>
    }<font></font>
    if (t === 1){<font></font>
      newArr.push(f);<font></font>
        }<font></font>
  } <font></font>
  return newArr;<font></font>
}</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易EvaSam</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong>Symmetric</strong> and <strong>linear complexity</strong>. Requires ES6.  </p>

<pre><code>function arrDiff(arr1, arr2) {<font></font>
    var arrays = [arr1, arr2].sort((a, b) =&gt; a.length - b.length);<font></font>
    var smallSet = new Set(arrays[0]);<font></font>
<font></font>
    return arrays[1].filter(x =&gt; !smallSet.has(x));<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝飞云</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>yet another answer, but seems nobody mentioned jsperf where they compare several algorithms and technology support: <a href="https://jsperf.com/array-difference-javascript" rel="nofollow noreferrer">https://jsperf.com/array-difference-javascript</a>  seems using filter gets the best results. thanks</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamEva</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>function diffArray(arr1, arr2) {<font></font>
  var newArr = arr1.concat(arr2);<font></font>
  return newArr.filter(function(i){<font></font>
    return newArr.indexOf(i) == newArr.lastIndexOf(i);<font></font>
  });<font></font>
}<font></font>
</code></pre>

<p>this is works for me</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞神奇</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Using <a href="http://phrogz.net/JS/ArraySetMath.js" rel="nofollow">http://phrogz.net/JS/ArraySetMath.js</a> you can:</p>

<pre><code>var array1 = ["test1", "test2","test3", "test4"];<font></font>
var array2 = ["test1", "test2","test3","test4", "test5", "test6"];<font></font>
<font></font>
var array3 = array2.subtract( array1 );<font></font>
// ["test5", "test6"]<font></font>
<font></font>
var array4 = array1.exclusion( array2 );<font></font>
// ["test5", "test6"]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Near</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Joshaven Potter的上述回答很棒。</font><font style="vertical-align: inherit;">但是它返回的数组B中的元素不在数组C中，反之亦然。</font><font style="vertical-align: inherit;">例如，如果</font></font><code>var a=[1,2,3,4,5,6].diff( [3,4,5,7]);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，它将输出：==&gt; </font></font><code>[1,2,6]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会</font></font></strong> <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出</font></font><code>[1,2,6,7]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是两者之间的实际差异。</font><font style="vertical-align: inherit;">您仍然可以使用上面的Potter的代码，但是只需将比较也向后重做一次即可：</font></font></p>

<pre><code>Array.prototype.diff = function(a) {<font></font>
    return this.filter(function(i) {return !(a.indexOf(i) &gt; -1);});<font></font>
};<font></font>
<font></font>
////////////////////  <font></font>
// Examples  <font></font>
////////////////////<font></font>
<font></font>
var a=[1,2,3,4,5,6].diff( [3,4,5,7]);<font></font>
var b=[3,4,5,7].diff([1,2,3,4,5,6]);<font></font>
var c=a.concat(b);<font></font>
console.log(c);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这应该输出： </font></font><code>[ 1, 2, 6, 7 ]</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端凯</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>Array.prototype.difference = function(e) {<font></font>
    return this.filter(function(i) {return e.indexOf(i) &lt; 0;});<font></font>
};<font></font>
<font></font>
eg:- <font></font>
<font></font>
[1,2,3,4,5,6,7].difference( [3,4,5] );  <font></font>
 =&gt; [1, 2, 6 , 7]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇JinJin</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个怎么样：</font></font></p>

<pre><code>Array.prototype.contains = function(needle){<font></font>
  for (var i=0; i&lt;this.length; i++)<font></font>
    if (this[i] == needle) return true;<font></font>
<font></font>
  return false;<font></font>
} <font></font>
<font></font>
Array.prototype.diff = function(compare) {<font></font>
    return this.filter(function(elem) {return !compare.contains(elem);})<font></font>
}<font></font>
<font></font>
var a = new Array(1,4,7, 9);<font></font>
var b = new Array(4, 8, 7);<font></font>
alert(a.diff(b));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您可以通过这种方式</font></font><code>array1.diff(array2)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来获得它们的差异（尽管我相信算法的时间复杂度很差-我相信O（array1.length x array2.length）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin伽罗小胖</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决问题的另一种方法   </font></font></p>

<pre><code>function diffArray(arr1, arr2) {<font></font>
    return arr1.concat(arr2).filter(function (val) {<font></font>
        if (!(arr1.includes(val) &amp;&amp; arr2.includes(val)))<font></font>
            return val;<font></font>
    });<font></font>
}<font></font>
<font></font>
diffArray([1, 2, 3, 7], [3, 2, 1, 4, 5]);    // return [7, 4, 5]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，您可以使用箭头函数语法：</font></font></p>

<pre><code>const diffArray = (arr1, arr2) =&gt; arr1.concat(arr2)<font></font>
    .filter(val =&gt; !(arr1.includes(val) &amp;&amp; arr2.includes(val)));<font></font>
<font></font>
diffArray([1, 2, 3, 7], [3, 2, 1, 4, 5]);    // return [7, 4, 5]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇启人</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>function diff(a1, a2) {<font></font>
  return a1.concat(a2).filter(function(val, index, arr){<font></font>
    return arr.indexOf(val) === arr.lastIndexOf(val);<font></font>
  });<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">合并两个数组，唯一值将仅出现一次，因此indexOf（）将与lastIndexOf（）相同。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长阳光</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES2015的功能性方法</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">计算</font></font><code>difference</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两个数组之间的和是</font></font><code>Set</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">操作之一。</font><font style="vertical-align: inherit;">该术语已经表明</font></font><code>Set</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该使用</font><font style="vertical-align: inherit;">本机</font><font style="vertical-align: inherit;">类型，以提高查找速度。</font><font style="vertical-align: inherit;">无论如何，当您计算两组之间的差异时，存在三个排列：</font></font></p>

<pre><code>[+left difference] [-intersection] [-right difference]<font></font>
[-left difference] [-intersection] [+right difference]<font></font>
[+left difference] [-intersection] [+right difference]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个反映这些排列的功能解决方案。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">左</font></font><code>difference</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></h3>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>// small, reusable auxiliary functions<font></font>
<font></font>
const apply = f =&gt; x =&gt; f(x);<font></font>
const flip = f =&gt; y =&gt; x =&gt; f(x) (y);<font></font>
const createSet = xs =&gt; new Set(xs);<font></font>
const filter = f =&gt; xs =&gt; xs.filter(apply(f));<font></font>
<font></font>
<font></font>
// left difference<font></font>
<font></font>
const differencel = xs =&gt; ys =&gt; {<font></font>
  const zs = createSet(ys);<font></font>
  return filter(x =&gt; zs.has(x)<font></font>
     ? false<font></font>
     : true<font></font>
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
// run the computation<font></font>
<font></font>
console.log( differencel(xs) (ys) );</code></pre>
</div>
</div>
<p></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对</font></font><code>difference</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></h3>

<p><code>differencer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是微不足道的。</font><font style="vertical-align: inherit;">它只是</font></font><code>differencel</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有翻转的参数。</font><font style="vertical-align: inherit;">为了方便起见，您可以编写一个函数：</font></font><code>const differencer = flip(differencel)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">就这样！</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对称的</font></font><code>difference</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在我们有了左右一个，实现对称也</font></font><code>difference</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变得很简单：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>// small, reusable auxiliary functions<font></font>
<font></font>
const apply = f =&gt; x =&gt; f(x);<font></font>
const flip = f =&gt; y =&gt; x =&gt; f(x) (y);<font></font>
const concat = y =&gt; xs =&gt; xs.concat(y);<font></font>
const createSet = xs =&gt; new Set(xs);<font></font>
const filter = f =&gt; xs =&gt; xs.filter(apply(f));<font></font>
<font></font>
<font></font>
// left difference<font></font>
<font></font>
const differencel = xs =&gt; ys =&gt; {<font></font>
  const zs = createSet(ys);<font></font>
  return filter(x =&gt; zs.has(x)<font></font>
     ? false<font></font>
     : true<font></font>
  ) (xs);<font></font>
};<font></font>
<font></font>
<font></font>
// symmetric difference<font></font>
<font></font>
const difference = ys =&gt; xs =&gt;<font></font>
 concat(differencel(xs) (ys)) (flip(differencel) (xs) (ys));<font></font>
<font></font>
// mock data<font></font>
<font></font>
const xs = [1,2,2,3,4,5];<font></font>
const ys = [0,1,2,3,3,3,6,7,8,9];<font></font>
<font></font>
<font></font>
// run the computation<font></font>
<font></font>
console.log( difference(xs) (ys) );</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想这个例子是一个很好的起点，可以使人对函数式编程的印象：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用可以以许多不同方式连接在一起的构件块进行编程。</font></font></strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，</font><font style="vertical-align: inherit;">您可以使用</font></font><a href="http://jsclass.jcoglan.com/set.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Set</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">针对此类操作（联合，相交，差）进行了优化。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一旦不允许重复，请确保适用于您的情况。</font></font></p>

<pre><code>var a = new JS.Set([1,2,3,4,5,6,7,8,9]);<font></font>
var b = new JS.Set([2,4,6,8]);<font></font>
<font></font>
a.difference(b)<font></font>
// -&gt; Set{1,3,5,7,9}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Eva</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，这是使用jQuery精确获得所需结果的最简单方法：</font></font></p>

<pre><code>var diff = $(old_array).not(new_array).get();
</code></pre>

<p><code>diff</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在包含的内容</font></font><code>old_array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不在其中</font></font><code>new_array</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端LEY米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><a href="http://underscorejs.org/#difference"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Underscore</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或它的替代产品</font></font><a href="https://github.com/lodash/lodash/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lo-Dash</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）中</font><a href="http://underscorejs.org/#difference"><font style="vertical-align: inherit;">的差异方法</font></a><font style="vertical-align: inherit;">也可以做到这一点：</font></font></p>

<pre><code>(R)eturns the values from array that are not present in the other arrays<font></font>
<font></font>
_.difference([1, 2, 3, 4, 5], [5, 2, 10]);<font></font>
=&gt; [1, 3, 4]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与任何Underscore函数一样，您也可以以更面向对象的方式使用它：</font></font></p>

<pre><code>_([1, 2, 3, 4, 5]).difference([5, 2, 10]);
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green猴子</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>Array.prototype.diff = function(a) {<font></font>
    return this.filter(function(i) {return a.indexOf(i) &lt; 0;});<font></font>
};<font></font>
<font></font>
////////////////////  <font></font>
// Examples  <font></font>
////////////////////<font></font>
<font></font>
[1,2,3,4,5,6].diff( [3,4,5] );  <font></font>
// =&gt; [1, 2, 6]<font></font>
<font></font>
["test1", "test2","test3","test4","test5","test6"].diff(["test1","test2","test3","test4"]);  <font></font>
// =&gt; ["test5", "test6"]<font></font>
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>Array.prototype.diff = function(a) {<font></font>
    return this.filter(function(i) {return a.indexOf(i) &lt; 0;});<font></font>
};<font></font>
<font></font>
////////////////////  <font></font>
// Examples  <font></font>
////////////////////<font></font>
<font></font>
var dif1 = [1,2,3,4,5,6].diff( [3,4,5] );  <font></font>
console.log(dif1); // =&gt; [1, 2, 6]<font></font>
<font></font>
<font></font>
var dif2 = ["test1", "test2","test3","test4","test5","test6"].diff(["test1","test2","test3","test4"]);  <font></font>
console.log(dif2); // =&gt; ["test5", "test6"]</code></pre>
</div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> indexOf和filter在ie9之前的ie中不可用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝飞云</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ES7有更好的方法：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路口</font></font></strong></p>

<pre><code> let intersection = arr1.filter(x =&gt; arr2.includes(x));
</code></pre>

<p><a href="https://i.stack.imgur.com/uasoX.png" rel="noreferrer"><img src="https://i.stack.imgur.com/uasoX.png" alt="相交差维恩图"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为</font></font><code>[1,2,3] [2,3]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它会屈服</font></font><code>[2,3]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">另一方面，for </font></font><code>[1,2,3] [2,3,5]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将返回相同的内容。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">区别</font></font></strong></p>

<pre><code>let difference = arr1.filter(x =&gt; !arr2.includes(x));
</code></pre>

<p><a href="https://i.stack.imgur.com/mEtro.png" rel="noreferrer"><img src="https://i.stack.imgur.com/mEtro.png" alt="右差维恩图"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为</font></font><code>[1,2,3] [2,3]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它会屈服</font></font><code>[1]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">另一方面，for </font></font><code>[1,2,3] [2,3,5]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将返回相同的内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对称差异</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以执行以下操作：</font></font></p>

<pre><code>let difference = arr1<font></font>
                 .filter(x =&gt; !arr2.includes(x))<font></font>
                 .concat(arr2.filter(x =&gt; !arr1.includes(x)));<font></font>
</code></pre>

<p><a href="https://i.stack.imgur.com/zb1hW.png" rel="noreferrer"><img src="https://i.stack.imgur.com/zb1hW.png" alt="对称差维恩图"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，您将获得一个包含arr1不在arr2中的所有元素的数组，反之亦然</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如@Joshaven Potter在他的答案中指出的那样，您可以将其添加到Array.prototype中，以便可以这样使用：</font></font></p>

<pre><code>Array.prototype.diff = function(arr2) { return this.filter(x =&gt; arr2.includes(x)); }<font></font>
[1, 2, 3].diff([2, 3])<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
