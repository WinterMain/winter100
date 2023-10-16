---
layout: question
title:  如何在JavaScript中创建二维数组？
date:   2020-03-09T15:47:27.000Z
description: 我一直在网上阅读，有些地方说这是不可能的，有些地方说是不可能，然后举一个例子，其他人则反驳该例子，等等。 如何在JavaScript中声明二维数组？...
img: 
author: Stafan古一
category: question
answer: 16
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在网上阅读，有些地方说这是不可能的，有些地方说是不可能，然后举一个例子，其他人则反驳该例子，等等。 </font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在JavaScript中声明二维数组？</font><font style="vertical-align: inherit;">（假设有可能）</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将如何访问其成员？</font><font style="vertical-align: inherit;">（</font></font><code>myArray[0][1]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>myArray[0,1]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？）</font></font></p></li>
</ol></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第377篇《如何在JavaScript中创建二维数组？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearGreen</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I found that this code works for me:</p>

<pre><code>var map = [<font></font>
    []<font></font>
];<font></font>
<font></font>
mapWidth = 50;<font></font>
mapHeight = 50;<font></font>
fillEmptyMap(map, mapWidth, mapHeight);<font></font>
</code></pre>

<p>...</p>

<pre><code>function fillEmptyMap(array, width, height) {<font></font>
    for (var x = 0; x &lt; width; x++) {<font></font>
        array[x] = [];<font></font>
        for (var y = 0; y &lt; height; y++) {<font></font>
<font></font>
            array[x][y] = [0];<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Jim猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>You could allocate an array of rows, where each row is an array of the same length. Or you could allocate a one-dimensional array with rows*columns elements and define methods to map row/column coordinates to element indices.</p>

<p>Whichever implementation you pick, if you wrap it in an object you can define the accessor methods in a prototype to make the API easy to use. </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearItachi</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>There is another solution, that does not force you to pre-define the size of the 2d array, and that is very concise.</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var table = {}<font></font>
table[[1,2]] = 3 // Notice the double [[ and ]]<font></font>
console.log(table[[1,2]]) // -&gt; 3</code></pre>
</div>
</div>
<p></p>

<p>This works because, <code>[1,2]</code> is transformed into a string, that is used as a <strong>string key</strong> for the <code>table</code> object.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Sam斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>ES6+, ES2015+ can do this in even simpler way</p>

<hr>

<p><strong>Creating 3 x 2 Array filled with true</strong></p>

<pre class="lang-js prettyprint-override"><code>[...Array(3)].map(item =&gt; Array(2).fill(true))
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Below one, creates a 5x5 matrix and fill them with <code>null</code></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var md = [];<font></font>
for(var i=0; i&lt;5; i++) {<font></font>
    md.push(new Array(5).fill(null));<font></font>
}<font></font>
<font></font>
console.log(md);</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green达蒙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I found below is the simplest way:</p>

<pre><code>var array1 = [[]];   <font></font>
array1[0][100] = 5; <font></font>
<font></font>
alert(array1[0][100]);<font></font>
alert(array1.length);<font></font>
alert(array1[0].length);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>For one liner lovers <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from" rel="nofollow noreferrer">Array.from()</a></p>

<pre><code>// creates 8x8 array filed with "0"    <font></font>
const arr2d = Array.from({ length: 8 }, () =&gt; Array.from({ length: 8 }, () =&gt; "0"))<font></font>
</code></pre>

<p>Another one (from comment by dmitry_romanov) use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/fill" rel="nofollow noreferrer">Array().fill()</a></p>

<pre><code>// creates 8x8 array filed with "0"    <font></font>
const arr2d = Array(8).fill(0).map(() =&gt; Array(8).fill("0"))<font></font>
</code></pre>

<p>Using ES6+ <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" rel="nofollow noreferrer">spread</a> operator ("inspired" by InspiredJW <a href="https://stackoverflow.com/a/59257344/5322506">answer</a> :) )</p>

<pre><code>// same as above just a little shorter<font></font>
const arr2d = [...Array(8)].map(() =&gt; Array(8).fill("0"))<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一NearEva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>To create a non-sparse "2D" array (x,y) with all indices addressable and values set to null:</p>

<pre><code>let 2Darray = new Array(x).fill(null).map(item =&gt;(new Array(y).fill(null))) 
</code></pre>

<p>bonus "3D" Array (x,y,z)</p>

<pre><code>let 3Darray = new Array(x).fill(null).map(item=&gt;(new Array(y).fill(null)).map(item=&gt;Array(z).fill(null)))
</code></pre>

<p>Variations and corrections on this have been mentioned in comments and at various points in response to this question but not as an actual answer so I am adding it here.</p>

<p>It should be noted that (similar to most other answers) this has O(x*y) time complexity so it probably not suitable for very large arrays.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Jim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>This is what i achieved :</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var appVar = [[]];<font></font>
appVar[0][4] = "bineesh";<font></font>
appVar[0][5] = "kumar";<font></font>
console.log(appVar[0][4] + appVar[0][5]);<font></font>
console.log(appVar);</code></pre>
</div>
</div>
<p></p>

<p>This spelled me bineeshkumar </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Two-liner:</p>

<pre><code>var a = []; <font></font>
while(a.push([]) &lt; 10);<font></font>
</code></pre>

<p>It will generate an array a of the length 10, filled with arrays.
(Push adds an element to an array and returns the new length)</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙小哥</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Two dimensional arrays are created the same way single dimensional arrays are.  And you access them like <code>array[0][1]</code>.</p>

<pre><code>var arr = [1, 2, [3, 4], 5];<font></font>
<font></font>
alert (arr[2][1]); //alerts "4"<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry乐Gil</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Few people show the use of push:<br>
To bring something new, I will show you how to initialize the matrix with some value, example: 0 or an empty string "".<br>
Reminding that if you have a 10 elements array, in javascript the last index will be 9!</p>

<pre><code>function matrix( rows, cols, defaultValue){<font></font>
<font></font>
  var arr = [];<font></font>
<font></font>
  // Creates all lines:<font></font>
  for(var i=0; i &lt; rows; i++){<font></font>
<font></font>
      // Creates an empty line<font></font>
      arr.push([]);<font></font>
<font></font>
      // Adds cols to the empty line:<font></font>
      arr[i].push( new Array(cols));<font></font>
<font></font>
      for(var j=0; j &lt; cols; j++){<font></font>
        // Initializes:<font></font>
        arr[i][j] = defaultValue;<font></font>
      }<font></font>
  }<font></font>
<font></font>
return arr;<font></font>
}<font></font>
</code></pre>

<p>usage examples: </p>

<pre><code>x = matrix( 2 , 3,''); // 2 lines, 3 cols filled with empty string<font></font>
y = matrix( 10, 5, 0);// 10 lines, 5 cols filled with 0<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>The easiest way:</p>

<pre><code>var myArray = [[]];
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需将数组中的每个项目都设为一个数组。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var x = new Array(10);<font></font>
<font></font>
for (var i = 0; i &lt; x.length; i++) {<font></font>
  x[i] = new Array(3);<font></font>
}<font></font>
<font></font>
console.log(x);</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一L</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Javascript only has 1-dimensional arrays, but you can build arrays of arrays, as others pointed out.</p>

<p>The following function can be used to construct a 2-d array of fixed dimensions:</p>

<pre><code>function Create2DArray(rows) {<font></font>
  var arr = [];<font></font>
<font></font>
  for (var i=0;i&lt;rows;i++) {<font></font>
     arr[i] = [];<font></font>
  }<font></font>
<font></font>
  return arr;<font></font>
}<font></font>
</code></pre>

<p>The number of columns is not really important, because it is not required to specify the size of an array before using it.</p>

<p>Then you can just call:</p>

<pre><code>var arr = Create2DArray(100);<font></font>
<font></font>
arr[50][2] = 5;<font></font>
arr[70][5] = 7454;<font></font>
// ...<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝猿路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var items = [<font></font>
  [1, 2],<font></font>
  [3, 4],<font></font>
  [5, 6]<font></font>
];<font></font>
console.log(items[0][0]); // 1<font></font>
console.log(items[0][1]); // 2<font></font>
console.log(items[1][0]); // 3<font></font>
console.log(items[1][1]); // 4<font></font>
console.log(items);</code></pre>
</div>
</div>
<p></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
