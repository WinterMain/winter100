---
layout: question
title:  如何在Javascript数组的开头添加新的数组元素？
date:   2020-03-09T12:39:57.000Z
description: 我需要在数组的开头添加或添加元素。例如，如果我的数组如下所示：\[23, 45, 12, 67\]我的AJAX调用的响应是34，我希望更新后的数...
img: 
author: 古一
category: question
answer: 11
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要在数组的开头添加或添加元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如果我的数组如下所示：</font></font></p>

<pre><code>[23, 45, 12, 67]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的AJAX调用的响应是</font></font><code>34</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我希望更新后的数组如下所示：</font></font></p>

<pre><code>[34, 23, 45, 12, 67]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，我正打算这样做：</font></font></p>

<pre><code>var newArray = [];<font></font>
newArray.push(response);<font></font>
<font></font>
for (var i = 0; i &lt; theArray.length; i++) {<font></font>
    newArray.push(theArray[i]);<font></font>
}<font></font>
<font></font>
theArray = newArray;<font></font>
delete newArray;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么更好的方法吗？</font><font style="vertical-align: inherit;">Javascript是否具有执行此操作的任何内置功能？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的方法很复杂，</font></font><code>O(n)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到更好的实现将真的很有趣。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蓝染大人</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Using ES6 destructuring: (avoiding mutation off the original array)</p>

<p><code>const newArr = [item, ...oldArr]</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁AJinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var array = [23, 45, 12, 67];  <font></font>
array.unshift(11);  <font></font>
alert(array);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Davaid神乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要在数组的开头连续插入一个元素，则使用</font></font><code>push</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句后再调用</font><font style="vertical-align: inherit;">会更快</font></font><code>reverse</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而不是一直调用</font></font><code>unshift</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基准测试：</font></font></strong> <font style="vertical-align: inherit;"><a href="http://jsben.ch/kLIYf" rel="noreferrer"><font style="vertical-align: inherit;">http </font></a><strong><font style="vertical-align: inherit;">：</font></strong></font><a href="http://jsben.ch/kLIYf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsben.ch/kLIYf</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯老丝</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var testdata = new Array();<font></font>
testdata = [23, 45, 12, 67];<font></font>
testdata = [34, ...testdata]; <font></font>
console.log(testdata)</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>    </code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ES6中，使用传播运算符</font></font><code>...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></h3>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示</font></font></strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var arr = [23, 45, 12, 67];<font></font>
arr = [34, ...arr]; // RESULT : [34,23, 45, 12, 67]<font></font>
<font></font>
console.log(arr)</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你有一个数组：  </font></font><code>var arr = [23, 45, 12, 67];</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要将项目添加到开头，请使用</font></font><code>splice</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var arr = [23, 45, 12, 67];<font></font>
arr.splice(0, 0, 34)<font></font>
console.log(arr);</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿猪猪西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>push()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在数组的末尾添加一个新元素。</font></font><br>
<code>pop()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从数组末尾删除元素。</font></font></p>

<p><code>unshift()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在数组的开头添加一个新元素。</font></font><br>
<code>shift()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从数组的开头删除元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用 </font></font><code>theArray.unshift(response)</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快速备忘单：</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">术语“移位/不移位”和“推入/弹出”可能会有些混乱，至少对于那些可能不熟悉C编程的人而言。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您对术语不熟悉，可以使用以下快速翻译的替代术语，这样可能更容易记住：</font></font></p>

<pre><code>* array_unshift()  -  (aka Prepend ;; InsertBefore ;; InsertAtBegin )     <font></font>
* array_shift()    -  (aka UnPrepend ;; RemoveBefore  ;; RemoveFromBegin )<font></font>
<font></font>
* array_push()     -  (aka Append ;; InsertAfter   ;; InsertAtEnd )     <font></font>
* array_pop()      -  (aka UnAppend ;; RemoveAfter   ;; RemoveFromEnd ) <font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种方式来做到这一点 </font></font><code>concat</code></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var arr = [1, 2, 3, 4, 5, 6, 7];<font></font>
console.log([0].concat(arr));</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"></font><code>concat</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">之间的区别</font></font><code>unshift</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>concat</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回一个新数组。</font><font style="vertical-align: inherit;">他们之间的表现可以在</font></font><a href="http://jsperf.com/unshift-item-inside-an-array/12" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到</font><font style="vertical-align: inherit;">。    </font></font></p>

<pre><code>function fn_unshift() {<font></font>
  arr.unshift(0);<font></font>
  return arr;<font></font>
}<font></font>
<font></font>
function fn_concat_init() {<font></font>
  return [0].concat(arr)<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是测试结果</font></font></p>

<p><a href="https://i.stack.imgur.com/f5u3L.png" rel="noreferrer"><img src="https://i.stack.imgur.com/f5u3L.png" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><img src="https://i.stack.imgur.com/1pQk8.jpg" alt="阵列运算图"></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var a = [23, 45, 12, 67];<font></font>
a.unshift(34);<font></font>
console.log(a); // [34, 23, 45, 12, 67]</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/unshift" rel="noreferrer"><code>unshift</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">就像一样</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/push" rel="noreferrer"><code>push</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，除了它在数组的开头而不是结尾添加元素。</font></font></p>

<ul>
<li><code>unshift</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">// </font></font><code>push</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-将元素添加到数组的开头/结尾</font></font></li>
<li><code>shift</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">// </font></font><code>pop</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  -删除并返回数组的第一个/最后一个元素</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个简单的图...</font></font></p>

<pre class="lang-none prettyprint-override"><code>   unshift -&gt; array &lt;- push<font></font>
   shift   &lt;- array -&gt; pop<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和图表：</font></font></p>

<pre class="lang-none prettyprint-override"><code>          add  remove  start  end<font></font>
   push    X                   X<font></font>
    pop           X            X<font></font>
unshift    X             X<font></font>
  shift           X      X<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN阵列文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">实际上，每种能够从数组中推入/弹出元素的语言都将具有取消/移入（有时称为</font></font><code>push_front</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>pop_front</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）元素的能力，您永远不必自己实现这些。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如注释中所指出的那样，如果要避免更改原始数组，可以使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat" rel="noreferrer"><code>concat</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将两个或更多数组连接在一起的。</font><font style="vertical-align: inherit;">您可以使用它在功能上将单个元素推到现有数组的前面或后面；</font><font style="vertical-align: inherit;">为此，您需要将新元素转换为单个元素数组：</font></font></p>

<pre><code>const array = [ 3, 2, 1 ]<font></font>
<font></font>
const newFirstElement = 4<font></font>
<font></font>
const newArray = [newFirstElement].concat(array) // [ 4, 3, 2, 1 ]<font></font>
</code></pre>

<p><code>concat</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以附加项目。</font><font style="vertical-align: inherit;">的参数</font></font><code>concat</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以是任何类型；</font><font style="vertical-align: inherit;">如果它们还不是数组，则将它们隐式包装在单元素数组中：</font></font></p>

<pre><code>const array = [ 3, 2, 1 ]<font></font>
<font></font>
const newLastElement  = 0<font></font>
<font></font>
// Both of these lines are equivalent:<font></font>
const newArray1 = array.concat(newLastElement)   // [ 3, 2, 1, 0 ]<font></font>
const newArray2 = array.concat([newLastElement]) // [ 3, 2, 1, 0 ]<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
