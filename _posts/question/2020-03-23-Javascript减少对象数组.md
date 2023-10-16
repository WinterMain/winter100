---
layout: question
title:  Javascript减少对象数组
date:   2020-03-23T06:20:50.000Z
description: 说我想对a.x中的每个元素求和arr。arr = \[{x 1},{x 2},{x 4}\]arr.reduce(function(a,b){retur...
img: 
author: 西里神奇
category: question
answer: 9
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说我想对</font></font><code>a.x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中的每个元素</font><font style="vertical-align: inherit;">求和</font></font><code>arr</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>arr = [{x:1},{x:2},{x:4}]<font></font>
arr.reduce(function(a,b){return a.x + b.x})<font></font>
&gt;&gt; NaN<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有理由相信斧头在某些时候是不确定的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下工作正常</font></font></p>

<pre><code>arr = [1,2,4]<font></font>
arr.reduce(function(a,b){return a + b})<font></font>
&gt;&gt; 7<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在第一个示例中做错了什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2819篇《Javascript减少对象数组》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐十三</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不应该将ax用作累加器，而是可以像`arr = [{x：1}，{x：2}，{x：4}]这样操作</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">arr.reduce（function（a，b）{a + bx}，0）`</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回所有</font></font><code>x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具</font><font style="vertical-align: inherit;">的总和</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>arr.reduce(<font></font>
(a,b) =&gt; (a.x || a) + b.x <font></font>
)<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">减少功能迭代集合</font></font></p>

<pre><code>arr = [{x:1},{x:2},{x:4}] // is a collection<font></font>
<font></font>
arr.reduce(function(a,b){return a.x + b.x})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转换为：</font></font></p>

<pre><code>arr.reduce(<font></font>
    //for each index in the collection, this callback function is called<font></font>
  function (<font></font>
    a, //a = accumulator ,during each callback , value of accumulator is <font></font>
         passed inside the variable "a"<font></font>
    b, //currentValue , for ex currentValue is {x:1} in 1st callback<font></font>
    currentIndex,<font></font>
    array<font></font>
  ) {<font></font>
    return a.x + b.x; <font></font>
  },<font></font>
  accumulator // this is returned at the end of arr.reduce call <font></font>
    //accumulator = returned value i.e return a.x + b.x  in each callback. <font></font>
);<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在每个索引回调期间，将变量“累加器”的值传递到回调函数中的“ a”参数中。</font><font style="vertical-align: inherit;">如果我们不初始化“累加器”，则其值将是不确定的。</font><font style="vertical-align: inherit;">调用undefined.x会给您错误。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要解决此问题，请使用</font><font style="vertical-align: inherit;">上面显示的Casey答案将</font><font style="vertical-align: inherit;">值</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">初始化为“累加器” </font><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了了解“ reduce”功能的内在，我建议您看一下该功能的源代码。</font><font style="vertical-align: inherit;">Lodash库具有reduce函数，其功能与ES6中的reduce函数完全相同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里是链接：
 </font></font><a href="https://github.com/lodash/lodash/blob/master/reduce.js" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">减少源代码</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一步，它将正常工作，因为will的值为</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1 </font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">will </font><font style="vertical-align: inherit;">的值为</font></font><code>b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2，但是由于将返回2 + 1，而在下一步中，of的值</font></font><code>b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将是返回值</font></font><code>from step 1 i.e 3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此</font></font><code>b.x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将是不确定的。 .and undefined + anyNumber将为NaN，这就是为什么要得到该结果的原因。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相反，您可以尝试通过将初始值设置为零（即</font></font></h1>

<pre><code>arr.reduce(function(a,b){return a + b.x},0);
</code></pre>

<hr></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有一个包含大量数据的复杂对象（如对象数组），则可以采用逐步的方法来解决此问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>const myArray = [{ id: 1, value: 10}, { id: 2, value: 20}];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，您应该将数组映射到您感兴趣的新数组，在此示例中，它可能是新的值数组。</font></font></p>

<pre><code>const values = myArray.map(obj =&gt; obj.value);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此回调函数将返回一个仅包含原始数组中值的新数组，并将其存储在值const上。</font><font style="vertical-align: inherit;">现在，您的值const是一个像这样的数组：</font></font></p>

<pre><code>values = [10, 20];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以执行还原了：</font></font></p>

<pre><code>const sum = values.reduce((accumulator, currentValue) =&gt; { return accumulator + currentValue; } , 0);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您所见，reduce方法多次执行回调函数。</font><font style="vertical-align: inherit;">对于每次，它都会获取数组中该项的当前值，并与累加器求和。</font><font style="vertical-align: inherit;">因此，要正确求和，需要将累加器的初始值设置为reduce方法的第二个参数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在您有了新的const和，其值为30。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在减少的每一步中，您都不会返回新</font></font><code>{x:???}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象。</font><font style="vertical-align: inherit;">因此，您需要执行以下操作：</font></font></p>

<pre><code>arr = [{x:1},{x:2},{x:4}]<font></font>
arr.reduce(function(a,b){return a + b.x})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者你需要做</font></font></p>

<pre><code>arr = [{x:1},{x:2},{x:4}]<font></font>
arr.reduce(function(a,b){return {x: a.x + b.x}; }) <font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他人回答了这个问题，但我想我会采用另一种方法。</font><font style="vertical-align: inherit;">您可以直接映射（从ax到x）并缩小（添加x），而不是直接求和ax。</font></font></p>

<pre><code>arr = [{x:1},{x:2},{x:4}]<font></font>
arr.map(function(a) {return a.x;})<font></font>
   .reduce(function(a,b) {return a + b;});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">诚然，它可能会稍慢一些，但我认为值得一提。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一次迭代后，您将返回一个数字，然后尝试获取该数字的属性</font></font><code>x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以将其添加到下一个对象中，该对象是</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和数学，涉及到</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果</font></font><code>NaN</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试返回一个对象</font></font><code>x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该</font><font style="vertical-align: inherit;">对象包含一个</font><font style="vertical-align: inherit;">属性，该属性与参数的x个属性之和：</font></font></p>

<pre class="lang-js prettyprint-override"><code>var arr = [{x:1},{x:2},{x:4}];<font></font>
<font></font>
arr.reduce(function (a, b) {<font></font>
  return {x: a.x + b.x}; // returns object with property x<font></font>
})<font></font>
<font></font>
// ES6<font></font>
arr.reduce((a, b) =&gt; ({x: a.x + b.x}));<font></font>
<font></font>
// -&gt; {x: 7}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从注释中添加了说明：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次迭代的返回值</font></font><code>[].reduce</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用作</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下一次迭代</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">变量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迭代1： ，</font><font style="vertical-align: inherit;">，</font></font><code>a = {x:1}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> </font><font style="vertical-align: inherit;">分配给</font><font style="vertical-align: inherit;">在迭代2</font></font><code>b = {x:2}</code><font style="vertical-align: inherit;"></font><code>{x: 3}</code><font style="vertical-align: inherit;"></font><code>a</code><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迭代2：</font></font><code>a = {x:3}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>b = {x:4}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的示例的问题在于您要返回数字文字。</font></font></p>

<pre class="lang-js prettyprint-override"><code>function (a, b) {<font></font>
  return a.x + b.x; // returns number literal<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迭代1： ，</font><font style="vertical-align: inherit;">，</font></font><code>a = {x:1}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> </font><font style="vertical-align: inherit;">如</font><font style="vertical-align: inherit;">在下次迭代</font></font><code>b = {x:2}</code><font style="vertical-align: inherit;"></font><code>// returns 3</code><font style="vertical-align: inherit;"></font><code>a</code><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迭代2 ：</font></font><code>a = 3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>b = {x:2}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font><code>NaN</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">许多文字</font></font><code>3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不（通常）有一个叫做财产</font></font><code>x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以它</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和   </font></font><code>undefined + b.x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回报</font></font><code>NaN</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并</font></font><code>NaN + &lt;anything&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">始终</font></font><code>NaN</code></p>

<p><em>Clarification</em>: I prefer my method over the other top answer in this thread as I disagree with the idea that passing an optional parameter to reduce with a magic number to get out a number primitive is cleaner. It may result in fewer lines written but imo it is less readable.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐卡卡西</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种更清洁的方法是通过提供一个初始值：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var arr = [{x:1}, {x:2}, {x:4}];<font></font>
arr.reduce(function (acc, obj) { return acc + obj.x; }, 0); // 7<font></font>
console.log(arr);</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一次调用匿名函数时，将使用调用</font></font><code>(0, {x: 1})</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并返回</font></font><code>0 + 1 = 1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">下次，它被调用</font></font><code>(1, {x: 2})</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并返回</font></font><code>1 + 2 = 3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">然后调用</font></font><code>(3, {x: 4})</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，最后返回</font></font><code>7</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
