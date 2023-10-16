---
layout: question
title:  如何随机化（随机播放）JavaScript数组？
date:   2020-03-09T14:58:01.000Z
description: 我有一个像这样的数组：var arr1 = \["a", "b", "c", "d"\];如何将其随机/随机播放？...
img: 
author: 阿飞十三
category: question
answer: 19
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个像这样的数组：</font></font></p>

<pre><code>var arr1 = ["a", "b", "c", "d"];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何将其随机/随机播放？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第335篇《如何随机化（随机播放）JavaScript数组？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Eva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>Array.prototype.shuffle=function(){<font></font>
   var len = this.length,temp,i<font></font>
   while(len){<font></font>
    i=Math.random()*len-- |0;<font></font>
    temp=this[len],this[len]=this[i],this[i]=temp;<font></font>
   }<font></font>
   return this;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil启人</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Funny enough there was no non mutating recursive answer:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var shuffle = arr =&gt; {<font></font>
  const recur = (arr,currentIndex)=&gt;{<font></font>
    console.log("What?",JSON.stringify(arr))<font></font>
    if(currentIndex===0){<font></font>
      return arr;<font></font>
    }<font></font>
    const randomIndex = Math.floor(Math.random() * currentIndex);<font></font>
    const swap = arr[currentIndex];<font></font>
    arr[currentIndex] = arr[randomIndex];<font></font>
    arr[randomIndex] = swap;<font></font>
    return recur(<font></font>
      arr,<font></font>
      currentIndex - 1<font></font>
    );<font></font>
  }<font></font>
  return recur(arr.map(x=&gt;x),arr.length-1);<font></font>
};<font></font>
<font></font>
var arr = [1,2,3,4,5,[6]];<font></font>
console.log(shuffle(arr));<font></font>
console.log(arr);</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>From a theoretical point of view, the most elegant way of doing it, in my humble opinion, is to get a <em>single</em> random number between <em>0</em> and <em>n!-1</em> and to compute a one to one mapping from <code>{0, 1, …, n!-1}</code> to all permutations of <code>(0, 1, 2, …, n-1)</code>. As long as you can use a (pseudo-)random generator reliable enough for getting such a number without any significant bias, you have enough information in it for achieving what you want without needing several other random numbers.</p>

<p>When computing with IEEE754 double precision floating numbers, you can expect your random generator to provide about 15 decimals. Since you have <em>15!=1,307,674,368,000</em> (with 13 digits), you can use the following functions with arrays containing up to 15 elements and assume there will be no significant bias with arrays containing up to 14 elements. If you work on a fixed-size problem requiring to compute many times this shuffle operation, you may want to try the following code which <em>may</em> be faster than other codes since it uses <code>Math.random</code> only once (it involves several copy operations however).</p>

<p>The following function will not be used, but I give it anyway; it returns the index of a given permutation of <code>(0, 1, 2, …, n-1)</code> according to the one to one mapping used in this message (the most natural one when enumerating permuations); it is intended to work with up to 16 elements:</p>

<pre><code>function permIndex(p) {<font></font>
    var fact = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800, 87178291200, 1307674368000];<font></font>
    var tail = [];<font></font>
    var i;<font></font>
    if (p.length == 0) return 0;<font></font>
    for(i=1;i&lt;(p.length);i++) {<font></font>
        if (p[i] &gt; p[0]) tail.push(p[i]-1);<font></font>
        else tail.push(p[i]);<font></font>
    }<font></font>
    return p[0] * fact[p.length-1] + permIndex(tail);<font></font>
}<font></font>
</code></pre>

<p>The reciprocal of the previous function (required for your own question) is below; it is intended to work with up to 16 elements; it returns the permutation of order <em>n</em> of <code>(0, 1, 2, …, s-1)</code>:</p>

<pre><code>function permNth(n, s) {<font></font>
    var fact = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800, 87178291200, 1307674368000];<font></font>
    var i, j;<font></font>
    var p = [];<font></font>
    var q = [];<font></font>
    for(i=0;i&lt;s;i++) p.push(i);<font></font>
    for(i=s-1; i&gt;=0; i--) {<font></font>
        j = Math.floor(n / fact[i]);<font></font>
        n -= j*fact[i];<font></font>
        q.push(p[j]);<font></font>
        for(;j&lt;i;j++) p[j]=p[j+1];<font></font>
    }<font></font>
    return q;<font></font>
}<font></font>
</code></pre>

<p>Now, what you want merely is:</p>

<pre><code>function shuffle(p) {<font></font>
    var fact = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600, 6227020800, 87178291200, 1307674368000, 20922789888000];<font></font>
    return permNth(Math.floor(Math.random()*fact[p.length]), p.length).map(<font></font>
            function(i) { return p[i]; });<font></font>
}<font></font>
</code></pre>

<p>It should work for up to 16 elements with a little theoretical bias (though unnoticeable from a practical point of view); it can be seen as fully usable for 15 elements; with arrays containing less than 14 elements, you can safely consider there will be absolutely no bias.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>the shortest <code>arrayShuffle</code> function</p>

<pre><code>function arrayShuffle(o) {<font></font>
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);<font></font>
    return o;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva梅村村</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Just to have a finger in the pie. Here i present a recursive implementation of Fisher Yates shuffle (i think). It gives uniform randomness.</p>

<p>Note: The <code>~~</code> (double tilde operator) is in fact behaves like <code>Math.floor()</code> for positive real numbers. Just a short cut it is.</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var shuffle = a =&gt; a.length ? a.splice(~~(Math.random()*a.length),1).concat(shuffle(a))<font></font>
                            : a;<font></font>
<font></font>
console.log(JSON.stringify(shuffle([0,1,2,3,4,5,6,7,8,9])));</code></pre>
</div>
</div>
<p></p>

<p><strong>Edit:</strong> The above code is O(n^2) due to the employment of <code>.splice()</code> but we can eliminate splice and shuffle in O(n) by the swap trick.</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var shuffle = (a, l = a.length, r = ~~(Math.random()*l)) =&gt; l ? ([a[r],a[l-1]] = [a[l-1],a[r]], shuffle(a, l-1))<font></font>
                                                              : a;<font></font>
<font></font>
var arr = Array.from({length:3000}, (_,i) =&gt; i);<font></font>
console.time("shuffle");<font></font>
shuffle(arr);<font></font>
console.timeEnd("shuffle");</code></pre>
</div>
</div>
<p></p>

<p>The problem is, JS can not coop on with big recursions. In this particular case you array size is limited with like 3000~7000 depending on your browser engine and some unknown facts.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>arr1.sort(() =&gt; Math.random() - 0.5);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐小小猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>yet another implementation of Fisher-Yates, using strict mode:</p>

<pre><code>function shuffleArray(a) {<font></font>
    "use strict";<font></font>
    var i, t, j;<font></font>
    for (i = a.length - 1; i &gt; 0; i -= 1) {<font></font>
        t = a[i];<font></font>
        j = Math.floor(Math.random() * (i + 1));<font></font>
        a[i] = a[j];<font></font>
        a[j] = t;<font></font>
    }<font></font>
    return a;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>All the other answers are based on Math.random() which is fast but not suitable for cryptgraphic level randomization.</p>

<p>The below code is using the well known <code>Fisher-Yates</code> algorithm while utilizing <code>Web Cryptography API</code> for <strong>cryptographic level of randomization</strong>.</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var d = [1,2,3,4,5,6,7,8,9,10];<font></font>
<font></font>
function shuffle(a) {<font></font>
	var x, t, r = new Uint32Array(1);<font></font>
	for (var i = 0, c = a.length - 1, m = a.length; i &lt; c; i++, m--) {<font></font>
		crypto.getRandomValues(r);<font></font>
		x = Math.floor(r / 65536 / 65536 * m) + i;<font></font>
		t = a [i], a [i] = a [x], a [x] = t;<font></font>
	}<font></font>
<font></font>
	return a;<font></font>
}<font></font>
<font></font>
console.log(shuffle(d));</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>A recursive solution:</p>

<pre><code>function shuffle(a,b){<font></font>
    return a.length==0?b:function(c){<font></font>
        return shuffle(a,(b||[]).concat(c));<font></font>
    }(a.splice(Math.floor(Math.random()*a.length),1));<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以轻松地做到这一点：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>// array<font></font>
var fruits = ["Banana", "Orange", "Apple", "Mango"];<font></font>
// random<font></font>
fruits.sort(function(a, b){return 0.5 - Math.random()});<font></font>
// out<font></font>
console.log(fruits);</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参考</font></font><a href="https://www.w3schools.com/js/js_array_sort.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript排序数组</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiGreen</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在此问题的副本中的“作者删除”答案中发现了这种变体。</font><font style="vertical-align: inherit;">与已经有许多投票的其他一些答案不同，这是：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其实随机</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不到位（因此，</font></font><code>shuffled</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">名称而不是</font></font><code>shuffle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里尚不存在多种变体</font></font></li>
</ol>

<p><a href="https://jsfiddle.net/fmjL1eyL/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个使用中的jsfiddle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>Array.prototype.shuffled = function() {<font></font>
  return this.map(function(n){ return [Math.random(), n] })<font></font>
             .sort().map(function(n){ return n[1] });<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid老丝</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">借助ES2015，您可以使用以下工具：</font></font></p>

<pre><code>Array.prototype.shuffle = function() {<font></font>
  let m = this.length, i;<font></font>
  while (m) {<font></font>
    i = (Math.random() * m--) &gt;&gt;&gt; 0;<font></font>
    [this[m], this[i]] = [this[i], this[m]]<font></font>
  }<font></font>
  return this;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法：</font></font></p>

<pre><code>[1, 2, 3, 4, 5, 6, 7].shuffle();
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim前端Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var shuffle = function(array) {<font></font>
   temp = [];<font></font>
   originalLength = array.length;<font></font>
   for (var i = 0; i &lt; originalLength; i++) {<font></font>
     temp.push(array.splice(Math.floor(Math.random()*array.length),1));<font></font>
   }<font></font>
   return temp;<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村凯</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：此答案不正确</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见</font></font><a href="https://stackoverflow.com/a/18650169/28234"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/18650169/28234</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它被留在这里作为参考，因为这个想法并不罕见。</font></font></p>

<pre><code>//one line solution<font></font>
shuffle = (array) =&gt; array.sort(() =&gt; Math.random() - 0.5);<font></font>
<font></font>
<font></font>
//Demo<font></font>
let arr = [1, 2, 3];<font></font>
shuffle(arr);<font></font>
alert(arr);<font></font>
</code></pre>

<p><a href="https://javascript.info/task/shuffle" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://javascript.info/task/shuffle</font></font></a></p>

<blockquote>
  <p><code>Math.random() - 0.5</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是一个可以为正数或为负数的随机数，因此排序功能会随机对元素进行重新排序。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西老丝</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加到@Laurens Holsts答案。</font><font style="vertical-align: inherit;">这是50％压缩的。</font></font></p>

<pre><code>function shuffleArray(d) {<font></font>
  for (var c = d.length - 1; c &gt; 0; c--) {<font></font>
    var b = Math.floor(Math.random() * (c + 1));<font></font>
    var a = d[c];<font></font>
    d[c] = d[b];<font></font>
    d[b] = a;<font></font>
  }<font></font>
  return d<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro神无樱</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个人可以（或应该）将其用作Array的原型：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自ChristopheD：</font></font></p>

<pre><code>Array.prototype.shuffle = function() {<font></font>
  var i = this.length, j, temp;<font></font>
  if ( i == 0 ) return this;<font></font>
  while ( --i ) {<font></font>
     j = Math.floor( Math.random() * ( i + 1 ) );<font></font>
     temp = this[i];<font></font>
     this[i] = this[j];<font></font>
     this[j] = temp;<font></font>
  }<font></font>
  return this;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><a href="http://en.wikipedia.org/wiki/Fisher-Yates_shuffle#The_modern_algorithm" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Durstenfeld shuffle</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的JavaScript实现</font><font style="vertical-align: inherit;">，它是Fisher-Yates的优化版本：</font></font></p>

<pre><code>/* Randomize array in-place using Durstenfeld shuffle algorithm */<font></font>
function shuffleArray(array) {<font></font>
    for (var i = array.length - 1; i &gt; 0; i--) {<font></font>
        var j = Math.floor(Math.random() * (i + 1));<font></font>
        var temp = array[i];<font></font>
        array[i] = array[j];<font></font>
        array[j] = temp;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它为每个原始数组元素选择一个随机元素，并将其从下一次绘制中排除，就像从一副纸牌中随机选择一样。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种巧妙的排除方式将选择的元素与当前元素交换，然后从其余元素中选择下一个随机元素，向后循环以实现最佳效率，确保简化了随机选择（它始终可以从0开始），从而跳过了最后一个元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">算法运行时为</font></font><code>O(n)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，随机播放是就地完成的，因此，如果您不想修改原始数组，请先使用复制它</font></font><a href="https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/slice" rel="nofollow noreferrer"><code>.slice(0)</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<h2><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新到ES6 / ECMAScript 2015</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新的ES6允许我们一次分配两个变量。</font><font style="vertical-align: inherit;">当我们要交换两个变量的值时，这特别方便，因为我们可以在一行代码中完成它。</font><font style="vertical-align: inherit;">这是使用此功能的相同功能的缩写。</font></font></p>

<pre><code>function shuffleArray(array) {<font></font>
    for (let i = array.length - 1; i &gt; 0; i--) {<font></font>
        const j = Math.floor(Math.random() * (i + 1));<font></font>
        [array[i], array[j]] = [array[j], array[i]];<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[社区编辑：此答案不正确；</font><font style="vertical-align: inherit;">看评论。</font><font style="vertical-align: inherit;">它被留在这里供以后参考，因为这种想法并不罕见。]</font></font></p>

<pre><code>[1,2,3,4,5,6].sort(function() {<font></font>
  return .5 - Math.random();<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际无偏混洗算法是Fisher-Yates（aka Knuth）混洗。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见</font></font><a href="https://github.com/coolaj86/knuth-shuffle" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/coolaj86/knuth-shuffle</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><a href="http://bost.ocks.org/mike/shuffle/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到</font><a href="http://bost.ocks.org/mike/shuffle/" rel="noreferrer"><font style="vertical-align: inherit;">出色的可视化效果</font></a><font style="vertical-align: inherit;">（以及</font></font><a href="http://sedition.com/perl/javascript-fy.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与此链接相关</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的原始文章</font><font style="vertical-align: inherit;">）</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function shuffle(array) {<font></font>
  var currentIndex = array.length, temporaryValue, randomIndex;<font></font>
<font></font>
  // While there remain elements to shuffle...<font></font>
  while (0 !== currentIndex) {<font></font>
<font></font>
    // Pick a remaining element...<font></font>
    randomIndex = Math.floor(Math.random() * currentIndex);<font></font>
    currentIndex -= 1;<font></font>
<font></font>
    // And swap it with the current element.<font></font>
    temporaryValue = array[currentIndex];<font></font>
    array[currentIndex] = array[randomIndex];<font></font>
    array[randomIndex] = temporaryValue;<font></font>
  }<font></font>
<font></font>
  return array;<font></font>
}<font></font>
<font></font>
// Used like so<font></font>
var arr = [2, 11, 37, 42];<font></font>
shuffle(arr);<font></font>
console.log(arr);</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"></font><a href="http://en.wikipedia.org/wiki/Fisher-Yates_shuffle" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关使用的算法的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多信息</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
