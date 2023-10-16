---
layout: question
title:  循环内的JavaScript闭合–简单的实际示例
date:   2020-03-09T08:01:46.000Z
description: var funcs = \[\];// let's create 3 functionsfor (var i = 0; i < 3; i++) { ...
img: 
author: 西门达蒙
category: question
answer: 14
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var funcs = [];<font></font>
// let's create 3 functions<font></font>
for (var i = 0; i &lt; 3; i++) {<font></font>
  // and store them in funcs<font></font>
  funcs[i] = function() {<font></font>
    // each should log its value.<font></font>
    console.log("My value: " + i);<font></font>
  };<font></font>
}<font></font>
for (var j = 0; j &lt; 3; j++) {<font></font>
  // and now let's run each one to see<font></font>
  funcs[j]();<font></font>
}</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它输出：</font></font></p>

<blockquote>
  <p>My value: 3<br>
  My value: 3<br>
  My value: 3</p>
</blockquote>

<p>Whereas I'd like it to output:</p>

<blockquote>
  <p>My value: 0<br>
  My value: 1<br>
  My value: 2</p>
</blockquote>

<hr>

<p>The same problem occurs when the delay in running the function is caused by using event listeners:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var buttons = document.getElementsByTagName("button");<font></font>
// let's create 3 functions<font></font>
for (var i = 0; i &lt; buttons.length; i++) {<font></font>
  // as event listeners<font></font>
  buttons[i].addEventListener("click", function() {<font></font>
    // each should log its value.<font></font>
    console.log("My value: " + i);<font></font>
  });<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;button&gt;0&lt;/button&gt;<font></font>
&lt;br /&gt;<font></font>
&lt;button&gt;1&lt;/button&gt;<font></font>
&lt;br /&gt;<font></font>
&lt;button&gt;2&lt;/button&gt;</code></pre>
</div>
</div>
<p></p>

<p>… or asynchronous code, e.g. using Promises:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>// Some async wait function<font></font>
const wait = (ms) =&gt; new Promise((resolve, reject) =&gt; setTimeout(resolve, ms));<font></font>
<font></font>
for (var i = 0; i &lt; 3; i++) {<font></font>
  // Log `i` as soon as each promise resolves.<font></font>
  wait(i * 100).then(() =&gt; console.log(i));<font></font>
}</code></pre>
</div>
</div>
<p></p>

<p>What’s the solution to this basic problem?</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第170篇《循环内的JavaScript闭合–简单的实际示例》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚十三Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用let（blocked-scope）代替var。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var funcs = [];<font></font>
for (let i = 0; i &lt; 3; i++) {      <font></font>
  funcs[i] = function() {          <font></font>
    console.log("My value: " + i); <font></font>
  };<font></font>
}<font></font>
for (var j = 0; j &lt; 3; j++) {<font></font>
  funcs[j]();                      <font></font>
}</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我更喜欢使用</font></font><code>forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数，该函数在创建伪范围时有其自身的闭合方式：</font></font></p>

<pre><code>var funcs = [];<font></font>
<font></font>
new Array(3).fill(0).forEach(function (_, i) { // creating a range<font></font>
    funcs[i] = function() {            <font></font>
        // now i is safely incapsulated <font></font>
        console.log("My value: " + i);<font></font>
    };<font></font>
});<font></font>
<font></font>
for (var j = 0; j &lt; 3; j++) {<font></font>
    funcs[j](); // 0, 1, 2<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这看起来比其他语言的范围丑陋，但是恕我直言，它不如其他解决方案那么可怕。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomMandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的原始示例无效的原因是，您在循环中创建的所有闭包都引用了同一框架。</font><font style="vertical-align: inherit;">实际上，对一个对象具有3个方法而只有一个</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量。</font><font style="vertical-align: inherit;">它们都打印出相同的值。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云前端西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以对数据列表使用声明性模块，例如</font></font><a href="https://github.com/runefs/query-js" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">query-js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（*）。</font><font style="vertical-align: inherit;">在这些情况下，我个人发现声明式方法不足为奇</font></font></p>

<pre><code>var funcs = Query.range(0,3).each(function(i){<font></font>
     return  function() {<font></font>
        console.log("My value: " + i);<font></font>
    };<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以使用第二个循环并获得预期的结果，或者您可以执行 </font></font></p>

<pre><code>funcs.iterate(function(f){ f(); });
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（*）我是query-js的作者，因此偏向于使用它，因此不要只将我的话作为对上述库的建议：)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Pro小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">闭包</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结构，这样可以减少多余的for循环。</font><font style="vertical-align: inherit;">您可以在单个for循环中执行此操作：</font></font></p>

<pre><code>var funcs = [];<font></font>
for (var i = 0; i &lt; 3; i++) {     <font></font>
  (funcs[i] = function() {         <font></font>
    console.log("My value: " + i); <font></font>
  })(i);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">OP显示的代码的主要问题是，</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直到第二个循环才读取。</font><font style="vertical-align: inherit;">为了演示，假设看到代码内部有错误</font></font></p>

<pre><code>funcs[i] = function() {            // and store them in funcs<font></font>
    throw new Error("test");<font></font>
    console.log("My value: " + i); // each should log its value.<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>funcs[someIndex]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行</font><font style="vertical-align: inherit;">之前，实际上不会发生该错误</font></font><code>()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">使用相同的逻辑，很明显，</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直到这一点也不会收集</font><font style="vertical-align: inherit;">的值</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">原始循环完成后，</font></font><code>i++</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其取值</font></font><code>3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会导致条件</font></font><code>i &lt; 3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">失败和循环结束。</font><font style="vertical-align: inherit;">在这一点上，</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">is </font></font><code>3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和so何时</font></font><code>funcs[someIndex]()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用和</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">评估，每次为3。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了克服这个问题，您必须评估</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遇到的情况。</font><font style="vertical-align: inherit;">请注意，这已经以</font></font><code>funcs[i]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（其中有3个唯一索引）</font><font style="vertical-align: inherit;">的形式发生</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有几种获取此值的方法。</font><font style="vertical-align: inherit;">一种是将其作为参数传递给函数，此处已经以几种方式显示了该函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种选择是构造一个函数对象，该对象将能够覆盖变量。</font><font style="vertical-align: inherit;">这样就可以做到</font></font></p>

<p><em><strong><a href="http://jsfiddle.net/QcUjH/"><code>jsFiddle Demo</code></a></strong></em></p>

<pre><code>funcs[i] = new function() {   <font></font>
    var closedVariable = i;<font></font>
    return function(){<font></font>
        console.log("My value: " + closedVariable); <font></font>
    };<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript函数在声明时“封闭”它们可以访问的范围，并且即使该范围中的变量发生更改，也保留对该范围的访问。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var funcs = []<font></font>
<font></font>
for (var i = 0; i &lt; 3; i += 1) {<font></font>
  funcs[i] = function () {<font></font>
    console.log(i)<font></font>
  }<font></font>
}<font></font>
<font></font>
for (var k = 0; k &lt; 3; k += 1) {<font></font>
  funcs[k]()<font></font>
}</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面数组中的每个函数都关闭了全局范围（全局，仅是因为恰好是它们在其中声明的范围）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后，调用这些函数，记录</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全局范围内的</font><font style="vertical-align: inherit;">最新值</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这就是关闭的魔力和挫败感。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ JavaScript函数在声明它们的范围内关闭，并且即使该范围内的变量值发生更改，也保留对该范围的访问。”</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过在每次</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环运行</font><font style="vertical-align: inherit;">时创建一个新的作用域</font><font style="vertical-align: inherit;">，为每个要关闭的函数创建一个单独的作用域来</font><font style="vertical-align: inherit;">解决此</font><font style="vertical-align: inherit;">问题。</font><font style="vertical-align: inherit;">其他各种技术也可以通过其他功能来完成相同的任务。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var funcs = []<font></font>
<font></font>
for (let i = 0; i &lt; 3; i += 1) {<font></font>
  funcs[i] = function () {<font></font>
    console.log(i)<font></font>
  }<font></font>
}<font></font>
<font></font>
for (var k = 0; k &lt; 3; k += 1) {<font></font>
  funcs[k]()<font></font>
}</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使变量成为块作用域。块用花括号表示，但是在for循环的</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">情况下，</font><font style="vertical-align: inherit;">初始化变量</font><font style="vertical-align: inherit;">在本例中被视为在花括号中声明。）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">试试这个较短的</font></font></h2>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有数组</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有额外的循环</font></font></p></li>
</ul>

<p><br></p>

<pre><code>for (var i = 0; i &lt; 3; i++) {<font></font>
    createfunc(i)();<font></font>
}<font></font>
<font></font>
function createfunc(i) {<font></font>
    return function(){console.log("My value: " + i);};<font></font>
}<font></font>
</code></pre>

<p><a href="http://jsfiddle.net/7P6EN/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://jsfiddle.net/7P6EN/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的解决方案是</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是使用：</font></font></p>

<pre><code>var funcs = [];<font></font>
for(var i =0; i&lt;3; i++){<font></font>
    funcs[i] = function(){<font></font>
        alert(i);<font></font>
    }<font></font>
}<font></font>
<font></font>
for(var j =0; j&lt;3; j++){<font></font>
    funcs[j]();<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会发出“ 2”警报3次。</font><font style="vertical-align: inherit;">这是因为在for循环中创建的匿名函数共享相同的闭包，并且在该闭包中，的值</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相同。</font><font style="vertical-align: inherit;">使用这个来防止共享关闭：</font></font></p>

<pre><code>var funcs = [];<font></font>
for(var new_i =0; new_i&lt;3; new_i++){<font></font>
    (function(i){<font></font>
        funcs[i] = function(){<font></font>
            alert(i);<font></font>
        }<font></font>
    })(new_i);<font></font>
}<font></font>
<font></font>
for(var j =0; j&lt;3; j++){<font></font>
    funcs[j]();<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其背后的想法是，使用</font></font><a href="https://en.wikipedia.org/wiki/Immediately-invoked_function_expression" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IIFE</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（立即调用函数表达式）</font><font style="vertical-align: inherit;">封装for循环的整个主体，</font><font style="vertical-align: inherit;">并</font></font><code>new_i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为参数</font><font style="vertical-align: inherit;">传递</font><font style="vertical-align: inherit;">并将其捕获为</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">由于匿名函数会立即执行，</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此匿名函数内部定义的每个函数</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">值都不同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此解决方案似乎适合任何此类问题，因为它将需要对遭受此问题的原始代码进行最少的更改。</font><font style="vertical-align: inherit;">实际上，这是设计使然，根本不成问题！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光LEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这描述了在JavaScript中使用闭包的常见错误。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个函数定义了一个新的环境</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑：</font></font></p>

<pre><code>function makeCounter()<font></font>
{<font></font>
  var obj = {counter: 0};<font></font>
  return {<font></font>
    inc: function(){obj.counter ++;},<font></font>
    get: function(){return obj.counter;}<font></font>
  };<font></font>
}<font></font>
<font></font>
counter1 = makeCounter();<font></font>
counter2 = makeCounter();<font></font>
<font></font>
counter1.inc();<font></font>
<font></font>
alert(counter1.get()); // returns 1<font></font>
alert(counter2.get()); // returns 0<font></font>
</code></pre>

<p>For each time <code>makeCounter</code> is invoked, <code>{counter: 0}</code> results in a new object being created. Also, a new copy of <code>obj</code> 
is created as well to reference the new object. Thus, <code>counter1</code> and <code>counter2</code> are independent of each other.</p>

<h2>Closures in loops</h2>

<p>Using a closure in a loop is tricky.</p>

<p>Consider: </p>

<pre><code>var counters = [];<font></font>
<font></font>
function makeCounters(num)<font></font>
{<font></font>
  for (var i = 0; i &lt; num; i++)<font></font>
  {<font></font>
    var obj = {counter: 0};<font></font>
    counters[i] = {<font></font>
      inc: function(){obj.counter++;},<font></font>
      get: function(){return obj.counter;}<font></font>
    }; <font></font>
  }<font></font>
}<font></font>
<font></font>
makeCounters(2);<font></font>
<font></font>
counters[0].inc();<font></font>
<font></font>
alert(counters[0].get()); // returns 1<font></font>
alert(counters[1].get()); // returns 1<font></font>
</code></pre>

<p>Notice that <code>counters[0]</code> and <code>counters[1]</code> are <em>not</em> independent. In fact, they operate on the same <code>obj</code>!</p>

<p>This is because there is only one copy of <code>obj</code> shared across all iterations of the loop, perhaps for performance reasons.
Even though <code>{counter: 0}</code> creates a new object in each iteration, the same copy of <code>obj</code> will just get updated with a
reference to the newest object.</p>

<p>Solution is to use another helper function:</p>

<pre><code>function makeHelper(obj)<font></font>
{<font></font>
  return {<font></font>
    inc: function(){obj.counter++;},<font></font>
    get: function(){return obj.counter;}<font></font>
  }; <font></font>
}<font></font>
<font></font>
function makeCounters(num)<font></font>
{<font></font>
  for (var i = 0; i &lt; num; i++)<font></font>
  {<font></font>
    var obj = {counter: 0};<font></font>
    counters[i] = makeHelper(obj);<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之所以可行，是因为直接在函数作用域中的局部变量以及函数自变量在输入时被分配了新副本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关详细讨论，请参见</font></font><a href="https://gist.github.com/lucastan/5420969"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript封闭陷阱和用法</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Tom小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是该技术的另一种变体，类似于Bjorn（apphacker）的技术，它使您可以在函数内部分配变量值，而不是将其作为参数传递，这有时可能更清楚：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var funcs = [];<font></font>
for (var i = 0; i &lt; 3; i++) {<font></font>
    funcs[i] = (function() {<font></font>
        var index = i;<font></font>
        return function() {<font></font>
            console.log("My value: " + index);<font></font>
        }<font></font>
    })();<font></font>
}</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，无论使用哪种技术，该</font></font><code>index</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量都将成为一种静态变量，绑定到内部函数的返回副本上。</font><font style="vertical-align: inherit;">即，在两次调用之间保留对其值的更改。</font><font style="vertical-align: inherit;">可能非常方便。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamJinJin路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要了解的是javascript中变量的范围是基于该函数的。</font><font style="vertical-align: inherit;">这与在拥有块作用域的地方说c＃相比是一个重要的区别，只需将变量复制到for内部即可。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其包装在一个评估返回函数的函数中（例如apphacker的答案）可以解决问题，因为变量现在具有函数作用域。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有一个let关键字代替var，它将允许使用块范围规则。</font><font style="vertical-align: inherit;">在那种情况下，在for中定义一个变量就可以解决问题。</font><font style="vertical-align: inherit;">就是说，由于兼容性，let关键字不是实际的解决方案。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var funcs = {};<font></font>
<font></font>
for (var i = 0; i &lt; 3; i++) {<font></font>
  let index = i; //add this<font></font>
  funcs[i] = function() {<font></font>
    console.log("My value: " + index); //change to the copy<font></font>
  };<font></font>
}<font></font>
<font></font>
for (var j = 0; j &lt; 3; j++) {<font></font>
  funcs[j]();<font></font>
}</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如今，ES6得到了广泛支持，对此问题的最佳答案已经改变。</font><font style="vertical-align: inherit;">ES6 </font><font style="vertical-align: inherit;">为此情况</font><font style="vertical-align: inherit;">提供了</font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字。</font><font style="vertical-align: inherit;">不用弄乱闭包，我们可以使用</font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样设置一个循环作用域变量：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var funcs = [];<font></font>
<font></font>
for (let i = 0; i &lt; 3; i++) {          <font></font>
    funcs[i] = function() {            <font></font>
      console.log("My value: " + i); <font></font>
    };<font></font>
}</code></pre>
</div>
</div>
<p></p>

<p><code>val</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后将指向特定于该循环特定循环的对象，并且将返回正确的值，而无需附加的闭合符号。</font><font style="vertical-align: inherit;">这显然大大简化了这个问题。</font></font></p>

<p><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似于</font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附加的限制，即变量名称在初始分配后不能反弹到新引用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，针对那些针对最新版本浏览器的浏览器提供了支持。</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前支持在最新的Firefox，Safari浏览器，边缘和Chrome。</font><font style="vertical-align: inherit;">它在Node中也受支持，您可以利用Babel等构建工具在任何地方使用它。</font><font style="vertical-align: inherit;">您可以在此处看到一个有效的示例：</font><a href="http://jsfiddle.net/ben336/rbU4t/2/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/ben336/rbU4t/2/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/ben336/rbU4t/2/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处的文档：</font></font></p>

<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">const</font></font></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是请注意，IE9-IE11和Edge 14之前的Edge支持，</font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是出现了上述错误（它们不会</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次都</font><font style="vertical-align: inherit;">创建一个新的</font><font style="vertical-align: inherit;">，因此上面的所有功能都将记录3，就像我们使用一样</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">Edge 14终于正确了。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin阿飞番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var funcs = [];<font></font>
    <font></font>
for (var i = 0; i &lt; 3; i++) {<font></font>
    funcs[i] = (function(index) {<font></font>
        return function() {<font></font>
            console.log("My value: " + index);<font></font>
        };<font></font>
    }(i));<font></font>
}<font></font>
<font></font>
for (var j = 0; j &lt; 3; j++) {<font></font>
    funcs[j]();<font></font>
}</code></pre>
</div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（2014年）：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我个人认为，@ Aust </font></font><a href="https://stackoverflow.com/a/19323214/918959"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最近关于使用的答案</font></font><code>.bind</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是现在执行此类操作的最佳方法。</font><font style="vertical-align: inherit;">还有LO-破折号/下划线是</font></font><code>_.partial</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当你不需要或不想要惹做</font></font><code>bind</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>thisArg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
