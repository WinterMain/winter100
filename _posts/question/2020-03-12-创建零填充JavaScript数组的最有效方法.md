---
layout: question
title:  创建零填充JavaScript数组的最有效方法？
date:   2020-03-12T04:38:55.000Z
description: 在JavaScript中创建任意长度的零填充数组的最有效方法是什么？...
img: 
author: 斯丁前端
category: question
answer: 15
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中创建任意长度的零填充数组的最有效方法是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第946篇《创建零填充JavaScript数组的最有效方法？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin伽罗小胖</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>I just use :</p>

<pre><code>var arr = [10];<font></font>
for (var i=0; i&lt;=arr.length;arr[i] = i, i++);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Shortest for loop code</p>

<pre><code>a=i=[];for(;i&lt;100;)a[i++]=0;<font></font>
<font></font>
edit:<font></font>
for(a=i=[];i&lt;100;)a[i++]=0;<font></font>
or<font></font>
for(a=[],i=100;i--;)a[i]=0;<font></font>
</code></pre>

<p>Safe var version</p>

<pre><code>var a=[],i=0;for(;i&lt;100;)a[i++]=0;<font></font>
<font></font>
edit:<font></font>
for(var i=100,a=[];i--;)a[i]=0;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯樱</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let filled = [];<font></font>
filled.length = 10;<font></font>
filled.fill(0);<font></font>
<font></font>
console.log(filled);</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙樱</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>This <code>concat</code> version is much faster in my tests on Chrome (2013-03-21). About 200ms for 10,000,000 elements vs 675 for straight init.</p>

<pre><code>function filledArray(len, value) {<font></font>
    if (len &lt;= 0) return [];<font></font>
    var result = [value];<font></font>
    while (result.length &lt; len/2) {<font></font>
        result = result.concat(result);<font></font>
    }<font></font>
    return result.concat(result.slice(0, len-result.length));<font></font>
}<font></font>
</code></pre>

<p><strong>Bonus:</strong> if you want to fill your array with Strings, this is a concise way to do it (not quite as fast as <code>concat</code> though):</p>

<pre><code>function filledArrayString(len, value) {<font></font>
    return new Array(len+1).join(value).split('');<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">谷若汐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><h1>ES6 solution:</h1>

<pre><code>[...new Array(5)].map(x =&gt; 0); // [0, 0, 0, 0, 0]
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProTony</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong>To create an all new Array</strong></p>

<pre><code>new Array(arrayLength).fill(0);
</code></pre>

<p><strong>To add some values at the end of an existing Array</strong></p>

<p><code>[...existingArray, ...new Array(numberOfElementsToAdd).fill(0)]</code></p>

<h2>Example</h2>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>//**To create an all new Array**<font></font>
<font></font>
console.log(new Array(5).fill(0));<font></font>
<font></font>
//**To add some values at the end of an existing Array**<font></font>
<font></font>
let existingArray = [1,2,3]<font></font>
<font></font>
console.log([...existingArray, ...new Array(5).fill(0)]);</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy伽罗</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Using <a href="http://lodash.com/docs#range">lodash</a> or <a href="http://underscorejs.org/#range">underscore</a></p>

<pre><code>_.range(0, length - 1, 0);
</code></pre>

<p>Or if you have an array existing and you want an array of the same length</p>

<pre><code>array.map(_.constant(0));
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村AL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要在执行代码期间创建许多不同长度的零填充数组，我发现实现此目标的最快方法是</font><font style="vertical-align: inherit;">使用本主题中提到的一种方法，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一次</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个零数组</font><font style="vertical-align: inherit;">，其长度为您知道永远不会超出它，然后根据需要切片该数组。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如（使用上面选择的答案中的函数初始化数组），创建一个长度为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">maxLength</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的零填充数组</font><font style="vertical-align: inherit;">，作为需要零数组的代码可见的变量：</font></font></p>

<pre><code>var zero = newFilledArray(maxLength, 0);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，每当您需要长度为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">requiredLength</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &lt; </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">maxLength</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的零填充数组时，就</font><em><font style="vertical-align: inherit;">对它进行</font></em><font style="vertical-align: inherit;">切片</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>zero.slice(0, requiredLength);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在执行代码期间，我数千次创建了零填充数组，这极大地加快了处理速度。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿小小</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经测试了IE 6/7/8，Firefox 3.5，Chrome和Opera中预分配/不预分配，向上/向下计数以及for / while循环的所有组合。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面的功能始终是Firefox，Chrome和IE8中最快或非常接近的功能，并且不比Opera和IE 6中最快的功能慢很多。在我看来，这也是最简单，最清晰的功能。</font><font style="vertical-align: inherit;">我发现有几种浏览器的while循环版本稍快一些，因此也将其包括在内以供参考。</font></font></p>

<pre><code>function newFilledArray(length, val) {<font></font>
    var array = [];<font></font>
    for (var i = 0; i &lt; length; i++) {<font></font>
        array[i] = val;<font></font>
    }<font></font>
    return array;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>function newFilledArray(length, val) {<font></font>
    var array = [];<font></font>
    var i = 0;<font></font>
    while (i &lt; length) {<font></font>
        array[i++] = val;<font></font>
    }<font></font>
    return array;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">木千</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用对象符号</font></font></p>

<pre><code>var x = [];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">零填充？</font><font style="vertical-align: inherit;">喜欢...</font></font></p>

<pre><code>var x = [0,0,0,0,0,0];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">充满“未定义” ...</font></font></p>

<pre><code>var x = new Array(7);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有零的obj符号</font></font></p>

<pre><code>var x = [];<font></font>
for (var i = 0; i &lt; 10; i++) x[i] = 0;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附带说明一下，如果您修改Array的原型，</font></font></p>

<pre><code>var x = new Array();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font></p>

<pre><code>var y = [];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将进行原型修改</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，我不会过分担心此操作的效率或速度，您可能会做很多其他事情，这些事情比实例化包含零的任意长度的数组要浪费得多，也更昂贵。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅老丝</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用预先计算的值填充数组的优雅方法</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，还没有人提到使用ES6的另一种方法：</font></font></p>

<pre><code>&gt; Array.from(Array(3), () =&gt; 0)<font></font>
&lt; [0, 0, 0]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过将map函数作为的第二个参数来工作</font></font><a href="//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" rel="noreferrer"><code>Array.from</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上面的示例中，第一个参数分配一个由3个位置填充的数组，该位置填充了值</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后lambda函数将其中的每个映射到value </font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然</font></font><code>Array(len).fill(0)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更短，但是如果您需要先通过一些计算来填充数组</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就行不通（我知道这个问题并没有要求，但是很多人最终还是在这里寻找它）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如果您需要一个包含10个随机数的数组：</font></font></p>

<pre><code>&gt; Array.from(Array(10), () =&gt; Math.floor(10 * Math.random()))<font></font>
&lt; [3, 6, 8, 1, 9, 3, 0, 6, 7, 1]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它比等效的方法更加简洁（和优雅）：</font></font></p>

<pre><code>const numbers = Array(10);<font></font>
for (let i = 0; i &lt; numbers.length; i++) {<font></font>
    numbers[i] = Math.round(10 * Math.random());<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过利用回调中提供的index参数，此方法还可用于生成数字序列：</font></font></p>

<pre><code>&gt; Array.from(Array(10), (d, i) =&gt; i)<font></font>
&lt; [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]<font></font>
</code></pre>

<hr>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">奖励答案：使用字符串填充数组 </font></font><code>repeat()</code></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于这个答案引起了广泛关注，因此我也想展示这个很酷的技巧。</font><font style="vertical-align: inherit;">虽然不如我的主要回答有用，但将介绍仍然不是很了解，但是非常有用的String </font></font><code>repeat()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font><font style="vertical-align: inherit;">这是窍门：</font></font></p>

<pre><code>&gt; "?".repeat(10).split("").map(() =&gt; Math.floor(10 * Math.random()))<font></font>
&lt; [5, 6, 3, 5, 0, 8, 2, 7, 4, 1]<font></font>
</code></pre>

<p>Cool, huh? <code>repeat()</code> is a very useful method to create a string that is the repetition of the original string a certain number of times. After that, <code>split()</code> creates an array for us, which is then <code>map()</code>ped to the values we want. Breaking it down in steps:</p>

<pre><code>&gt; "?".repeat(10)<font></font>
&lt; "??????????"<font></font>
<font></font>
&gt; "?".repeat(10).split("")<font></font>
&lt; ["?", "?", "?", "?", "?", "?", "?", "?", "?", "?"]<font></font>
<font></font>
&gt; "?".repeat(10).split("").map(() =&gt; Math.floor(10 * Math.random()))<font></font>
&lt; [5, 6, 3, 5, 0, 8, 2, 7, 4, 1]<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁JinJinHarry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经提到的ES 6填充方法很好地解决了这一问题。</font><font style="vertical-align: inherit;">到目前为止，大多数现代桌面浏览器已经支持所需的Array原型方法（Chromium，FF，Edge和Safari）[ </font></font><a href="http://kangax.github.io/compat-table/es6/#test-Array.prototype_methods"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ]。</font><font style="vertical-align: inherit;">您可以在</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上查找详细信息</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">一个简单的用法示例是</font></font></p>

<pre><code>a = new Array(10).fill(0);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">鉴于当前的浏览器支持，除非您确定您的受众使用的是现代桌面浏览器，否则应谨慎使用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用ES6，则可以</font><font style="vertical-align: inherit;">像这样</font><font style="vertical-align: inherit;">使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Array.from（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>Array.from({ length: 3 }, () =&gt; 0);<font></font>
//[0, 0, 0]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果与</font></font></p>

<pre><code>Array.from({ length: 3 }).map(() =&gt; 0)<font></font>
//[0, 0, 0]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为 </font></font></p>

<pre><code>Array.from({ length: 3 })<font></font>
//[undefined, undefined, undefined]<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Ss Yy</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下</font></font><code>Uint8Array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>Uint16Array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>Uint32Array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类将零作为其值，因此您不需要任何复杂的填充技术，只需执行以下操作：</font></font></p>

<pre><code>var ary = new Uint8Array(10);
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>ary</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下</font><font style="vertical-align: inherit;">，数组的所有元素</font><font style="vertical-align: inherit;">将为零。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小卤蛋Pro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><h1>SHORTEST</h1>

<p><code>Array(n).fill(0)</code></p>

<p>(16 char), where <code>n</code> is size of array</p>

<hr>

<p>2018.10.28 i made performance comparison of 15 propositions from other answers. Tests was done on Mac OS X 10.13.6 High Sierra, on three browsers: Chrome 69.0.3497, Safari 12.0 (13606.2.11) and Firefox 63.0 (64 bit). </p>

<h2>Result for n=100000</h2>

<p>Below i show results for fastest browser (safari):</p>

<p><a href="https://i.stack.imgur.com/9GNQM.png" rel="noreferrer"><img src="https://i.stack.imgur.com/9GNQM.png" alt="在此处输入图片说明"></a>
<a href="https://i.stack.imgur.com/m258t.png" rel="noreferrer"><img src="https://i.stack.imgur.com/m258t.png" alt="在此处输入图片说明"></a></p>

<p>For all browsers the fastest solution was <strong>M</strong> - however it is not "typical array" (but very fast) - Safari 33.8k operations/second, Chrome 5.2k, FF 3.5k,</p>

<p>Fastest solutions for typical arrays:</p>

<ul>
<li><strong>A</strong> and <strong>B</strong> (was similar) for Safari 5.5k and Chrome 1.1k (on Firefox <strong>A</strong> 0.1k, <strong>B</strong> 0.06k)</li>
<li><strong>F</strong> for Firefox 0.6k (on Safari 3.1k, Chrome 1.1k)</li>
<li>for Chrome and Safari <strong>A,B,F</strong> results was close </li>
</ul>

<p>The slowest solution:</p>

<ul>
<li><strong>G</strong> for Safari 0.02k and Firefox 0.04k (on Chrome 0.1k)</li>
<li><strong>D</strong> for Chrome 0.04k (on Safari 0.33k, on Firefox 0.15k)</li>
</ul>

<p>Solution <strong>N</strong> works only on Firefox and Chrome.</p>

<h2>Result for n=10</h2>

<p>Fastest:</p>

<ul>
<li><strong>M</strong> was fastest on Chrome 17.3M and Safari 13.3M (Firefox 4.7M)</li>
<li><strong>A,B</strong> was similar and fastest on Firefox 16.9M (Chrome 15.6M, Safari 3.5M)</li>
</ul>

<p>Slowest:</p>

<ul>
<li><strong>O</strong> for Safari 0.35M</li>
<li><strong>K</strong> for Chrome 0.35M</li>
<li><strong>N</strong> for Firefox 0.31M</li>
</ul>

<h2>CONCLUSION</h2>

<ul>
<li>the fastest solution on all browsers (except small <code>n</code> on Firefox) was <strong>M</strong> <code>let a = new Float32Array(n)</code> (however is not typical array) - for it the fastest browser was Safari (for large <code>n</code> &gt;6x faster than Chrome, &gt;9x faster than firefox)</li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于典型的数组，首选解决方案是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">A</font></font></strong> <code>let a = Array(n).fill(0)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（快速和短代码）  </font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在</font></font><a href="https://jsperf.com/array-init-kk/19" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对机器进行测试</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
