---
layout: question
title:  如何在JavaScript中初始化数组的长度？
date:   2020-03-12T08:57:48.000Z
description: 我在JavaScript数组上读过的大多数教程（包括w3schools和devguru）都建议您可以通过使用var test = new Array(4)...
img: 
author: 阿飞小卤蛋
category: question
answer: 13
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在JavaScript数组上读过的大多数教程（包括</font></font><a href="http://www.w3schools.com/js/js_obj_array.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">w3schools</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://www.devguru.com/technologies/ecmascript/quickref/array.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">devguru</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）都建议您可以通过使用</font></font><code>var test = new Array(4);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法</font><font style="vertical-align: inherit;">将整数传递给Array构造函数来初始化具有一定长度的数组</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的js文件中广泛使用此语法后，我通过</font></font><a href="http://www.jslint.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsLint</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行了其中一个文件</font><font style="vertical-align: inherit;">，结果很</font><a href="http://www.jslint.com/" rel="noreferrer"><font style="vertical-align: inherit;">糟糕</font></a><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：第1行第22个字符的问题：预期为'）'，而是显示为'4'。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  var test = new Array（4）; </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  第1行第23个字元的问题：预期为';' </font><font style="vertical-align: inherit;">而是看到'）'。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  var test = new Array（4）; </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  第1行第23个字符处的问题：需要标识符，而看到了'）'。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读完</font></font><a href="http://www.jslint.com/lint.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsLint对其行为的解释之后</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，看起来jsLint并不真正喜欢</font></font><code>new Array()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法，而是</font></font><code>[]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在声明数组时</font><font style="vertical-align: inherit;">更喜欢</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我有几个问题：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，为什么？</font><font style="vertical-align: inherit;">我使用</font></font><code>new Array()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法代替会</font><font style="vertical-align: inherit;">冒任何风险</font><font style="vertical-align: inherit;">吗？</font><font style="vertical-align: inherit;">我应该注意浏览器的不兼容性吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其次，如果我切换到方括号语法，是否有任何方法可以声明一个数组并将其长度全部设置在一行上，或者我必须执行以下操作：</font></font></p>

<pre><code>var test = [];<font></font>
test.length = 4;<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>As explained above, using <code>new Array(size)</code> is somewhat dangerous. Instead of using it directly, place it inside an "array creator function". You can easily make sure that this function is bug-free and you avoid the danger of calling <code>new Array(size)</code> directly. Also, you can give it an optional default initial value. This <code>createArray</code> function does exactly that:</p>

<pre><code>function createArray(size, defaultVal) {<font></font>
    var arr = new Array(size);<font></font>
    if (arguments.length == 2) {<font></font>
        // optional default value<font></font>
        for (int i = 0; i &lt; size; ++i) {<font></font>
            arr[i] = defaultVal;<font></font>
        }<font></font>
    }<font></font>
    return arr;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿Sam</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>You can set the array length by using <code>array.length = youValue</code></p>

<p>So it would be</p>

<pre><code>var myArray = [];<font></font>
myArray.length = yourValue;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是另一种解决方案 </font></font></p>

<pre><code>var arr = Array.apply( null, { length: 4 } );<font></font>
arr;  // [undefined, undefined, undefined, undefined] (in Chrome)<font></font>
arr.length; // 4<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的第一个参数</font></font><code>apply()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是this对象绑定，此处我们不在乎，因此将其设置为</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><code>Array.apply(..)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正在调用该</font></font><code>Array(..)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数并将</font></font><code>{ length: 3 }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象值作为其参数展开。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">令我惊讶的是，还没有一个功能性的解决方案可以让您在一行中设置长度。</font><font style="vertical-align: inherit;">以下基于UnderscoreJS：</font></font></p>

<pre><code>var test = _.map(_.range(4), function () { return undefined; });<font></font>
console.log(test.length);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于上述原因，除非我想将数组初始化为特定值，否则我将避免这样做。</font><font style="vertical-align: inherit;">有趣的是，还有其他实现范围的库，包括Lo-dash和Lazy，它们可能具有不同的性能特征。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子神无</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组构造函数的</font></font><a href="http://bonsaiden.github.io/JavaScript-Garden/#array.constructor" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法不明确</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，毕竟JSLint只会伤害您的感觉。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，示例代码已损坏，第二条</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句将引发</font></font><code>SyntaxError</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您正在设置</font></font><code>length</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组</font><font style="vertical-align: inherit;">的属性</font></font><code>test</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此不需要另一个</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p>As far as your options go, <code>array.length</code> is the only "clean" one. Question is, why do you need to set the size in the first place? Try to refactor your code to get rid of that dependency. </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>var arr=[];<font></font>
arr[5]=0;<font></font>
alert("length="+arr.length); // gives 6<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱GO</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（这可能是更好的评论，但时间太长了）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，看完这篇文章后，我很好奇预分配实际上是否更快，因为从理论上讲应该如此。</font><font style="vertical-align: inherit;">但是，此博客提供了一些建议，建议不要使用它</font></font><a href="http://www.html5rocks.com/en/tutorials/speed/v8/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.html5rocks.com/en/tutorials/speed/v8/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此仍然不确定，我将其进行了测试。</font><font style="vertical-align: inherit;">事实证明，它似乎实际上要慢一些。</font></font></p>

<pre><code>var time = Date.now();<font></font>
var temp = [];<font></font>
for(var i=0;i&lt;100000;i++){<font></font>
    temp[i]=i;<font></font>
}<font></font>
console.log(Date.now()-time);<font></font>
<font></font>
<font></font>
var time = Date.now();<font></font>
var temp2 = new Array(100000);<font></font>
for(var i=0;i&lt;100000;i++){<font></font>
    temp2[i] = i;<font></font>
}<font></font>
console.log(Date.now()-time); <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">几次随意运行后，此代码将产生以下内容：</font></font></p>

<pre><code>$ node main.js <font></font>
9<font></font>
16<font></font>
$ node main.js <font></font>
8<font></font>
14<font></font>
$ node main.js <font></font>
7<font></font>
20<font></font>
$ node main.js <font></font>
9<font></font>
14<font></font>
$ node main.js <font></font>
9<font></font>
19<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱JimPro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请人们暂时不要放弃您的旧习惯。</font><font style="vertical-align: inherit;">在分配内存一次然后使用该数组中的条目（如旧），以及随着数组的增长多次分配内存之间，在速度上存在很大差异（这不可避免地是系统采用其他建议的方法在后台进行的操作） 。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，这一切都不重要，除非您想对更大的阵列做一些很棒的事情。</font><font style="vertical-align: inherit;">然后就可以了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">鉴于目前在JS中似乎仍然无法设置数组的初始容量，我使用以下方法...</font></font></p>

<pre><code>var newArrayWithSize = function(size) {<font></font>
  this.standard = this.standard||[];<font></font>
  for (var add = size-this.standard.length; add&gt;0; add--) {<font></font>
   this.standard.push(undefined);// or whatever<font></font>
  }<font></font>
  return this.standard.slice(0,size);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要权衡：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一次调用该方法所需的时间与其他方法所花费的时间相同，但以后的调用则花费很少的时间（除非要求更大的数组）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>standard</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阵列确实会永久保留您所需的最大阵列的空间。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果它适合您的工作，那么可能会有所收获。</font><font style="vertical-align: inherit;">非正式时机</font></font></p>

<pre><code>for (var n=10000;n&gt;0;n--) {var b = newArrayWithSize(10000);b[0]=0;}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以相当快的速度（对于10000，大约需要50ms，因为n = 1000000大约需要5秒钟），并且</font></font></p>

<pre><code>for (var n=10000;n&gt;0;n--) {<font></font>
  var b = [];for (var add=10000;add&gt;0;add--) {<font></font>
    b.push(undefined);<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">超过一分钟（同一Chrome控制台上的10000大约需要90秒，或者慢2000倍）。</font><font style="vertical-align: inherit;">这不仅是分配，还包括10000次推送，for循环等。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇逆天猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最短的：</font></font></p>

<pre><code>[...Array(1000)]
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6引入了</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" rel="noreferrer"><code>Array.from</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它，您可以</font></font><code>Array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从任何</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“类似数组”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">iterables</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">创建一个</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>Array.from({length: 10}, (x, i) =&gt; i);<font></font>
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，</font></font><code>{length: 10}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代表了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“数组状”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">的最小定义</font><font style="vertical-align: inherit;">：一个仅</font></font><code>length</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义</font><font style="vertical-align: inherit;">了</font><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">的空对象</font><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" rel="noreferrer"><code>Array.from</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 允许第二个参数映射到结果数组上。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子蛋蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这会将length属性初始化为4：</font></font></p>

<pre><code>var x = [,,,,];
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">借助</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES2015，</font></font><em><code>.fill()</code></em></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您现在可以轻松执行以下操作：</font></font></p>

<pre><code>// `n` is the size you want to initialize your array<font></font>
// `0` is what the array will be filled with (can be any other value)<font></font>
Array(n).fill(0)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比这简明得多 </font></font><code>Array.apply(0, new Array(n)).map(i =&gt; value)</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以插入</font></font><code>0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">in </font></font><code>.fill()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在不使用参数的情况下运行，这将用填充数组</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这将在Typescript中失败</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞小卤蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>[...Array(6)].map(x=&gt;0);<font></font>
<font></font>
// [0, 0, 0, 0, 0, 0]<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></strong>  </p>

<pre><code>Array(6).fill(0);<font></font>
<font></font>
// [0, 0, 0, 0, 0, 0]<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：您不能循环空插槽 </font></font><code>Array(4).forEach( (_,i) =&gt; {} )</code></em>   </p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></strong>  </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> TypeScript安全</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<pre><code>Array(6).fill(null).map( (x,i) =&gt; i );<font></font>
<font></font>
// [0, 1, 2, 3, 4, 5]<font></font>
</code></pre>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用函数的经典方法（可在任何浏览器中使用） </font></font></p>

<pre><code>function NewArray( size ) { var x=[];for(var i = 0;i&lt;size;++i)x[i]=i;return x; }<font></font>
<font></font>
var a = NewArray( 10 );<font></font>
// [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]<font></font>
</code></pre>

<hr>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建嵌套数组</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当</font><font style="vertical-align: inherit;">直观地创建</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2D</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组时，</font></font><code>fill</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应创建新实例。</font><font style="vertical-align: inherit;">但是实际上要发生的是同一数组将被存储为参考。</font></font></p>

<pre><code>var a = Array(3).fill([6]); <font></font>
// [[6], [6], [6]]<font></font>
<font></font>
a[ 0 ].push( 9 );<font></font>
// [[6,9], [6,9], [6,9]]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解 </font></font></p>

<pre><code>var a = [...Array(3)].map(x=&gt;[]); <font></font>
<font></font>
a[ 0 ].push( 4, 2 );<font></font>
// [[4,2], [ ], [ ]]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，一个3x2阵列将如下所示： </font></font></p>

<pre><code>[...Array(3)].map(x=&gt;Array(2).fill(0));<font></font>
<font></font>
// [ [0,0] ,<font></font>
//   [0,0] ,<font></font>
//   [0,0] ]<font></font>
</code></pre>

<hr>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">N维数组</font></font></h3>

<pre class="lang-js prettyprint-override"><code>function NArray( ...dimensions ) {<font></font>
    var index = 0;<font></font>
    function NArrayRec( dims ) {<font></font>
        var first = dims[ 0 ], next = dims.slice().splice( 1 ); <font></font>
        if( dims.length &gt; 1 ) <font></font>
            return Array( dims[ 0 ] ).fill( null ).map( ( x , i ) =&gt; NArrayRec( next ) );<font></font>
        return Array( dims[ 0 ] ).fill( null ).map( ( x, i ) =&gt; ( index++ ) );<font></font>
    }<font></font>
    return NArrayRec( dimensions );<font></font>
}<font></font>
<font></font>
var arr = NArray( 3,2,4 );<font></font>
// [   [   [  0, 1, 2, 3 ],[  4, 5, 6, 7 ]   ],<font></font>
//     [   [  8, 9,10,11 ],[ 12,13,14,15 ]   ],<font></font>
//     [   [ 16,17,18,19 ],[ 20,21,22,23 ]   ]   ]<font></font>
</code></pre>

<hr>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">初始化棋盘</font></font></h3>

<pre><code>var Chessboard = [...Array( 8 )].map( (x,j) =&gt;<font></font>
    Array( 8 ).fill( null ).map( (y,i) =&gt;<font></font>
        `${ String.fromCharCode( 65 + i ) }${ 8 - j }`));<font></font>
<font></font>
// [ [ A8,B8,C8,D8,E8,F8,G8,H8 ],<font></font>
//   [ A7,B7,C7,D7,E7,F7,G7,H7 ],<font></font>
//   [ A6,B6,C6,D6,E6,F6,G6,H6 ],<font></font>
//   [ A5,B5,C5,D5,E5,F5,G5,H5 ],<font></font>
//   [ A4,B4,C4,D4,E4,F4,G4,H4 ],<font></font>
//   [ A3,B3,C3,D3,E3,F3,G3,H3 ],<font></font>
//   [ A2,B2,C2,D2,E2,F2,G2,H2 ],<font></font>
//   [ A1,B1,C1,D1,E1,F1,G1,H1 ] ]<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
