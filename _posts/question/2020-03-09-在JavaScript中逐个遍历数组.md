---
layout: question
title:  在JavaScript中逐个遍历数组
date:   2020-03-09T04:31:53.000Z
description: 如何使用JavaScript遍历数组中的所有条目？我以为是这样的：forEach(instance in theArray)theArray我...
img: 
author: GilSam
category: question
answer: 45
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用JavaScript遍历数组中的所有条目？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我以为是这样的：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">forEach</span><span class="pun">(</span><span class="pln">instance in theArray</span><span class="pun">)</span></code></pre>

<p><font style="vertical-align: inherit;"></font><code>theArray</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的数组</font><font style="vertical-align: inherit;">在哪里</font><font style="vertical-align: inherit;">，但这似乎是不正确的。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第142篇《在JavaScript中逐个遍历数组》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilJinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有大量阵列，则应使用它</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators" rel="noreferrer"><strong><code>iterators</code></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来提高效率。</font><font style="vertical-align: inherit;">迭代器是一定的JavaScript集合的性质（如</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" rel="noreferrer"><code>Map</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set" rel="noreferrer"><code>Set</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" rel="noreferrer"><code>String</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" rel="noreferrer"><code>Array</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">甚至，</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of" rel="noreferrer"><strong><code>for..of</code></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><strong><code>iterator</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在引擎罩。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迭代器可让您一次将列表中的项目当作流消费，从而提高了效率。</font><font style="vertical-align: inherit;">使迭代器与众不同的是它如何遍历集合。</font><font style="vertical-align: inherit;">其他循环需要预先加载整个集合以便对其进行迭代，而迭代器仅需要知道集合中的当前位置。             </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过调用迭代器的</font></font><code>next</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法来</font><font style="vertical-align: inherit;">访问当前项目</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">下一个方法将返回</font></font><strong><code>value</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前项目的和，</font></font><strong><code>boolean</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以指示您何时到达集合的末尾。</font><font style="vertical-align: inherit;">以下是从数组创建迭代器的示例。               </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values" rel="noreferrer"><code>values()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">将常规数组转换为迭代器</font><font style="vertical-align: inherit;">：               </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>    const myArr = [2,3,4]<font></font>
<font></font>
let it = myArr.values();<font></font>
<font></font>
console.log(it.next());<font></font>
console.log(it.next());<font></font>
console.log(it.next());<font></font>
console.log(it.next());</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用以下方式将常规数组转换为迭代器</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator" rel="noreferrer"><code>Symbol.iterator</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：         </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const myArr = [2,3,4]<font></font>
<font></font>
let it = myArr[Symbol.iterator]();<font></font>
<font></font>
console.log(it.next());<font></font>
console.log(it.next());<font></font>
console.log(it.next());<font></font>
console.log(it.next());</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以将常规</font></font><code>array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转换为</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators" rel="noreferrer"><code>iterator</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下形式：          </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let myArr = [8, 10, 12];<font></font>
<font></font>
function makeIterator(array) {<font></font>
    var nextIndex = 0;<font></font>
    <font></font>
    return {<font></font>
       next: function() {<font></font>
           return nextIndex &lt; array.length ?<font></font>
               {value: array[nextIndex++], done: false} :<font></font>
               {done: true};<font></font>
       }<font></font>
    };<font></font>
};<font></font>
<font></font>
var it = makeIterator(myArr);<font></font>
<font></font>
console.log(it.next().value);   // {value: 8, done: false}<font></font>
console.log(it.next().value);   // {value: 10, done: false}<font></font>
console.log(it.next().value);   // {value: 12, done: false}<font></font>
console.log(it.next().value);   // {value: undefined, done: true}</code></pre>
</div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：                </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迭代器本质上是穷举的。 </font></font></li>
<li><font style="vertical-align: inherit;"></font><code>iterable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，</font><font style="vertical-align: inherit;">对象不是</font><font style="vertical-align: inherit;">。</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in" rel="noreferrer"><code>for..in</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">，因为它可以代替键来代替值。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>iteration protocol</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解更多信息</font><font style="vertical-align: inherit;">。  </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这是一篇旧文章，并且已经有很多不错的答案。</font><font style="vertical-align: inherit;">为了更加完整，我想我会使用</font></font><a href="https://angularjs.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AngularJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">抛出另一个</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当然，仅当您使用Angular时，这才适用，尽管如此，无论如何我还是想放它。</font></font></p>

<p><code>angular.forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接受2个参数和一个可选的第三个参数。</font><font style="vertical-align: inherit;">第一个参数是要迭代的对象（数组），第二个参数是迭代器函数，可选的第三个参数是对象上下文（在循环内部基本称为“ this”）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有多种使用forEach角度循环的方法。</font><font style="vertical-align: inherit;">最简单且可能最常用的是</font></font></p>

<pre><code>var temp = [1, 2, 3];<font></font>
angular.forEach(temp, function(item) {<font></font>
    //item will be each element in the array<font></font>
    //do something<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将项目从一个数组复制到另一个数组的另一种有用方法是</font></font></p>

<pre><code>var temp = [1, 2, 3];<font></font>
var temp2 = [];<font></font>
angular.forEach(temp, function(item) {<font></font>
    this.push(item); //"this" refers to the array passed into the optional third parameter so, in this case, temp2.<font></font>
}, temp2);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不过，您不必这样做，只需执行以下操作即可，它等效于前面的示例：</font></font></p>

<pre><code>angular.forEach(temp, function(item) {<font></font>
    temp2.push(item);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在与使用</font></font><code>angular.forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内置的香草味</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环</font><font style="vertical-align: inherit;">相反</font><font style="vertical-align: inherit;">，使用该</font><font style="vertical-align: inherit;">功能</font><font style="vertical-align: inherit;">有优缺点</font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">易读</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">易写性</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果可用，</font></font><code>angular.forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将使用ES5 forEach循环。</font><font style="vertical-align: inherit;">现在，我会去的利弊部分efficientcy，作为foreach循环是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比for循环更慢。</font><font style="vertical-align: inherit;">我将其作为专业人士提及是因为保持一致和标准化非常好。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑以下两个嵌套循环，它们执行的功能完全相同。</font><font style="vertical-align: inherit;">假设我们有2个对象数组，每个对象包含一个结果数组，每个结果都有一个Value属性，该属性是一个字符串（或其他类型）。</font><font style="vertical-align: inherit;">假设我们需要遍历每个结果，如果结果相等，则执行一些操作：</font></font></p>

<pre><code>angular.forEach(obj1.results, function(result1) {<font></font>
    angular.forEach(obj2.results, function(result2) {<font></font>
        if (result1.Value === result2.Value) {<font></font>
            //do something<font></font>
        }<font></font>
    });<font></font>
});<font></font>
<font></font>
//exact same with a for loop<font></font>
for (var i = 0; i &lt; obj1.results.length; i++) {<font></font>
    for (var j = 0; j &lt; obj2.results.length; j++) {<font></font>
        if (obj1.results[i].Value === obj2.results[j].Value) {<font></font>
            //do something<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">诚然，这是一个非常简单的假设的例子，但我已经写了三重嵌入使用第二种方法循环，这是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">难以阅读，并为此事写。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">效率。</font></font><code>angular.forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和原生</font></font><code>forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，对于这个问题，都</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这么多</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比正常情况下慢</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环....约</font></font><a href="http://jsperf.com/angular-foreach-vs-native-for-loop/3" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">90％的速度较慢</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，对于大型数据集，最好坚持使用本机</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有中断，继续或返回支持。</font></font><code>continue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上是由“ </font></font><a href="https://github.com/angular/angular.js/issues/263" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意外</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ” </font><font style="vertical-align: inherit;">支持的</font><font style="vertical-align: inherit;">，要在一个</font></font><code>angular.forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的</font></font><code>return;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句中</font><font style="vertical-align: inherit;">继续在</font><font style="vertical-align: inherit;">函数中</font><font style="vertical-align: inherit;">放置一条</font><font style="vertical-align: inherit;">语句，例如</font></font><code>angular.forEach(array, function(item) { if (someConditionIsTrue) return; });</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将使</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">语句在该</font><font style="vertical-align: inherit;">迭代中继续从函数中退出。</font><font style="vertical-align: inherit;">这也是由于本机</font></font><code>forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">既不支持break也不继续</font><font style="vertical-align: inherit;">的事实</font><font style="vertical-align: inherit;">。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我敢肯定，还有其他各种利弊，请随时添加您认为合适的任何内容。</font><font style="vertical-align: inherit;">我认为，最重要的是，如果您需要效率，请坚持使用本机</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环来满足您的循环需求。</font><font style="vertical-align: inherit;">但是，如果您的数据集较小，并且为了交换可读性和可写性而放弃某种效率是可以的，那么一定要丢掉</font></font><code>angular.forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那个坏孩子。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Eva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向后循环</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反向</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> for循环在这里值得一提：</font></font></p>

<pre><code>for (var i = array.length; i--; ) {<font></font>
     // process array[i]<font></font>
}<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点：</font></font></h2>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不需要声明一个临时</font></font><code>len</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量，</font><font style="vertical-align: inherit;">也不必</font></font><code>array.length</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在每次迭代时都</font><font style="vertical-align: inherit;">进行比较</font><font style="vertical-align: inherit;">，这两者都可能需要一分钟的优化。</font></font></li>
<li><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以相反的顺序从DOM中</font><strong><font style="vertical-align: inherit;">删除兄弟姐妹</font></strong><font style="vertical-align: inherit;">通常</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更为有效</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（浏览器需要减少其内部数组中元素的移动。）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修改数组</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而循环，在或索引后</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（例如取出或插入在一个项</font></font><code>array[i]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），那么前向循环将跳过该左移进入位置处的项目</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，或再处理</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是个项向右移动。</font><font style="vertical-align: inherit;">在传统的for循环中，您</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">i</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以指向需要处理的下一个项目-1，但是简单地反转迭代方向通常是一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更简单</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://stackoverflow.com/questions/23186254/javascript-splice-changing-earlier-values-in-an-array/23186450#23186450"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更优雅的解决方案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似地，在修改或删除</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嵌套的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> DOM元素时，反向处理</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以避免错误</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如，考虑在处理父节点的子节点之前修改其内部HTML。</font><font style="vertical-align: inherit;">到子节点到达时，它将与DOM分离，在编写父节点的innerHTML时已被新创建的子节点替换。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与其他可用选项相比</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">它的</font><font style="vertical-align: inherit;">键入和</font><strong><font style="vertical-align: inherit;">读取</font></strong></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更短</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">尽管它输给</font><font style="vertical-align: inherit;">了ES6 </font><font style="vertical-align: inherit;">。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><code>forEach()</code><font style="vertical-align: inherit;"></font><code>for ... of</code><font style="vertical-align: inherit;"></font></li>
</ul>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点：</font></font></h2>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它以相反的顺序处理项目。</font><font style="vertical-align: inherit;">如果您要根据结果构建新的数组，或在屏幕上打印内容，则自然</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相对于原始顺序</font><strong><font style="vertical-align: inherit;">反转输出</font></strong><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重复将兄弟姐妹作为第一个孩子插入DOM以保持其顺序</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">效率较低</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（浏览器将不得不保持正确的状态。）为了高效，有序地创建DOM节点，只需像往常一样循环并追加（并使用“文档片段”）即可。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反向循环</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">初级开发人员</font><strong><font style="vertical-align: inherit;">感到困惑</font></strong><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（根据您的前景，您可能会认为这是一种优势。）</font></font></li>
</ul>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我应该一直使用吗？</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">某些开发人员</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用反向for循环</font><font style="vertical-align: inherit;">，除非有充分的理由进行向前循环。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管性能提升通常微不足道，但仍会引起尖叫：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“只需对列表中的每个商品都这样做，我不在乎订单！”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然而在实践中是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际的意图的可靠指标，因为它是从这些场合没有区别，当你</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对井井有条，真的</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环反向。</font><font style="vertical-align: inherit;">因此，实际上，将需要另一种构造来准确表达“不在乎”的意图，这在大多数语言（包括ECMAScript）中目前尚不可用，但可以称为</font></font><code>forEachUnordered()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果顺序无关紧要，并且</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">效率</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个问题（在游戏或动画引擎的最内部循环中），则可以将反向for循环用作您的首选模式。</font><font style="vertical-align: inherit;">只要记住，在现有代码</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到反向for循环</font><strong><font style="vertical-align: inherit;">并不一定意味着</font></strong><font style="vertical-align: inherit;">顺序无关紧要！</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好使用forEach（）</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，对于</font><font style="vertical-align: inherit;">更关注</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">透明度和安全性的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">高级代码</font><font style="vertical-align: inherit;">，我以前建议将其</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" rel="noreferrer"><code>Array::forEach</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用作循环的默认模式（尽管这些天我更喜欢使用</font></font><code>for..of</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">优先于</font></font><code>forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反向循环的</font><font style="vertical-align: inherit;">原因</font><font style="vertical-align: inherit;">有：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读起来更清晰。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它表明</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会在块内移动（这总是隐藏在long </font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>while</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">loop中</font><font style="vertical-align: inherit;">的可能的惊喜</font><font style="vertical-align: inherit;">）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它为您提供了关闭的自由范围。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它减少了局部变量的泄漏以及与外部变量（和外部变量的突变）的意外冲突。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，当您在代码中看到反向for循环时，这表明它是有充分原因（也许是上述原因之一）被反向的。</font><font style="vertical-align: inherit;">看到传统的forward for循环可能表明可以进行移位。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（如果对意图的讨论对您没有意义，那么您和您的代码可能会受益于观看Crockford关于“ </font></font><a href="https://www.youtube.com/watch?v=taaEzHI9xyY&amp;t=480" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编程风格和大脑”</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的讲座</font><font style="vertical-align: inherit;">。）</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，使用它甚至更好。</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个关于是否辩论</font></font><code>for..of</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者</font></font><code>forEach()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是较好的：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了最大程度地支持浏览器，</font></font><code>for..of</code> <a href="https://github.com/airbnb/javascript/issues/1122#issuecomment-471169142" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为迭代器</font><a href="https://github.com/airbnb/javascript/issues/1122#issuecomment-471169142" rel="noreferrer"><font style="vertical-align: inherit;">使用polyfill</font></a><font style="vertical-align: inherit;">，从而使您的应用执行速度稍慢，下载速度稍大。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此（并鼓励使用</font></font><code>map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>filter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），</font></font><a href="https://github.com/airbnb/javascript#iterators-and-generators" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些前端样式指南</font></font></a><font style="vertical-align: inherit;"></font><code>for..of</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全</font><font style="vertical-align: inherit;">禁止使用</font><font style="vertical-align: inherit;">！</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是上述问题不适用于</font></font><code>for..of</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在已得到很好支持的</font><font style="vertical-align: inherit;">Node.js应用程序</font><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且</font><font style="vertical-align: inherit;">在内部</font></font><code>await</code> <a href="https://gist.github.com/joeytwiddle/37d2085425c049629b80956d3c618971" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不起作用</font></font></a><font style="vertical-align: inherit;"></font><code>forEach()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在这种情况下，</font><font style="vertical-align: inherit;">使用</font></font><code>for..of</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><a href="https://github.com/airbnb/javascript/issues/1122#issuecomment-259876436" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最清晰的模式</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就个人而言，我倾向于使用最容易阅读的外观，除非性能或尺寸缩小已成为主要问题。</font><font style="vertical-align: inherit;">因此，这些天我更喜欢使用</font></font><code>for..of</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>forEach()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是</font><font style="vertical-align: inherit;">在适用时</font><font style="vertical-align: inherit;">，我将始终使用</font></font><code>map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>filter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" rel="noreferrer"><code>find</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some" rel="noreferrer"><code>some</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（为了我的同事，我很少使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" rel="noreferrer"><code>reduce</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。）</font></font></p>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是如何工作的？</font></font></h2>

<pre><code>for (var i = 0; i &lt; array.length; i++) { ... }   // Forwards<font></font>
<font></font>
for (var i = array.length; i--; )    { ... }   // Reverse<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您会注意到，这</font></font><code>i--</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是中间子句（通常在此处看到比较），最后一个子句为空（通常在此处看到</font></font><code>i++</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">这意味着</font></font><code>i--</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它还用作</font><font style="vertical-align: inherit;">继续</font><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">条件</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">至关重要的是，它会</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次迭代</font><em><font style="vertical-align: inherit;">之前</font></em><font style="vertical-align: inherit;">执行并检查</font><font style="vertical-align: inherit;">。</font></font></p>

<ul>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它如何开始</font></font><code>array.length</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不爆炸？</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为</font></font><code>i--</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次迭代</font><em><font style="vertical-align: inherit;">之前</font></em><font style="vertical-align: inherit;">，所以在第一次迭代中，我们实际上将访问该项，</font></font><code>array.length - 1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从而避免了</font></font><strike><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组越界</font></font></strike> <code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项的</font><font style="vertical-align: inherit;">任何问题</font><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么它在索引0之前不停止迭代？</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当条件</font></font><code>i--</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">评估为假值时（当它产生0时）</font><font style="vertical-align: inherit;">，循环将停止迭代</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">诀窍在于，与不同</font></font><code>--i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，尾随的</font></font><code>i--</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符会递减，</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但会</font><font style="vertical-align: inherit;">在递减</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生值</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您的控制台可以证明这一点：</font></font></p>

<p><code>&gt; var i = 5; [i, i--, i];</code></p>

<p><code>[5, 5, 4]</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，在最后一次迭代中，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以前是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>i--</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表达式将其更改为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但实际上产生了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（真实），因此条件通过了。</font><font style="vertical-align: inherit;">在下一次迭代中，</font></font><code>i--</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">i</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改</font><font style="vertical-align: inherit;">为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-1，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但产生</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（假），从而导致执行立即退出循环的底部。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在传统的for循环中，</font></font><code>i++</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>++i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以互换（正如Douglas Crockford指出的那样）。</font><font style="vertical-align: inherit;">但是在相反的for循环中，因为我们的减量也是我们的条件表达式，所以</font></font><code>i--</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要处理索引0的项</font><font style="vertical-align: inherit;">，则必须坚持</font><font style="vertical-align: inherit;">。</font></font></p></li>
</ul>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">琐事</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有些人喜欢在反向</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环中</font><font style="vertical-align: inherit;">画一个小箭头</font><font style="vertical-align: inherit;">，并以眨眼结束：</font></font></p>

<pre><code>for (var i = array.length; i --&gt; 0 ;) {
</code></pre>

<hr>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢WYL向我展示反向for循环的好处和恐惧。</font></font></em></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是</font></font><a href="http://jquery.com/" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库，则可以使用</font></font><a href="http://api.jquery.com/jQuery.each/" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery.each</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>



<pre class="lang-js prettyprint-override"><code>$.each(yourArray, function(index, value) {<font></font>
  // do your stuff here<font></font>
});<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据问题，用户希望使用javascript而不是jquery编写代码，因此修改为</font></font></p>

<pre class="lang-js prettyprint-override"><code>var length = yourArray.length;   <font></font>
for (var i = 0; i &lt; length; i++) {<font></font>
  // Do something with yourArray[i].<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Stafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lambda语法通常在Internet Explorer 10或更低版本中不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通常使用</font></font></p>

<pre><code>[].forEach.call(arrayName,function(value,index){<font></font>
    console.log("value of the looped element" + value);<font></font>
    console.log("index of the looped element" + index);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您是jQuery </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">爱好者</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且已经在运行jQuery文件，则应反转index和value参数的位置</font></font></p>

<pre><code>$("#ul&gt;li").each(function(**index, value**){<font></font>
    console.log("value of the looped element" + value);<font></font>
    console.log("index of the looped element" + index);<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据新的更新功能ECMAScript 6（ES6）和ECMAScript 2015，您可以在循环中使用以下选项：</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">for循环</font></font></strong></p>
</blockquote>

<pre><code>for(var i = 0; i &lt; 5; i++){<font></font>
  console.log(i);<font></font>
}<font></font>
<font></font>
// Output: 0,1,2,3,4<font></font>
</code></pre>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">for ...在循环中</font></font></strong></p>
</blockquote>

<pre><code>let obj = {"a":1, "b":2}<font></font>
<font></font>
for(let k in obj){<font></font>
  console.log(k)<font></font>
}<font></font>
<font></font>
// Output: a,b<font></font>
</code></pre>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Array.forEach（）</font></font></strong></p>
</blockquote>

<pre><code>let array = [1,2,3,4]<font></font>
<font></font>
array.forEach((x) =&gt; {<font></font>
  console.log(x);<font></font>
})<font></font>
<font></font>
// Output: 1,2,3,4<font></font>
</code></pre>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于...的循环</font></font></strong></p>
</blockquote>

<pre><code>let array = [1,2,3,4]<font></font>
<font></font>
for(let x of array){<font></font>
  console.log(x);<font></font>
}<font></font>
<font></font>
// Output: 1,2,3,4<font></font>
</code></pre>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">while循环</font></font></strong></p>
</blockquote>

<pre><code>let x = 0<font></font>
<font></font>
while(x &lt; 5){<font></font>
  console.log(x)<font></font>
  x++<font></font>
}<font></font>
<font></font>
// Output: 1,2,3,4<font></font>
</code></pre>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做... while循环</font></font></strong></p>
</blockquote>

<pre><code>let x = 0<font></font>
<font></font>
do{<font></font>
  console.log(x)<font></font>
  x++<font></font>
}while(x &lt; 5)<font></font>
<font></font>
// Output: 1,2,3,4<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">D坤</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要使用</font></font><code>forEach()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将看起来像-</font></font></p>

<pre><code>theArray.forEach ( element =&gt; {<font></font>
    console.log(element);<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要使用</font></font><code>for()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将看起来像-   </font></font></p>

<pre><code>for(let idx = 0; idx &lt; theArray.length; idx++){<font></font>
    let element = theArray[idx];<font></font>
    console.log(element);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilJinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有大量阵列，则应使用它</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators" rel="noreferrer"><strong><code>iterators</code></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来提高效率。</font><font style="vertical-align: inherit;">迭代器是一定的JavaScript集合的性质（如</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" rel="noreferrer"><code>Map</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set" rel="noreferrer"><code>Set</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" rel="noreferrer"><code>String</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" rel="noreferrer"><code>Array</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">甚至，</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of" rel="noreferrer"><strong><code>for..of</code></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><strong><code>iterator</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在引擎罩。</font></font></p>

<p>Iterators improve efficiency by letting you consume the items in a list one at a time as if they were a stream. What makes an iterator special is how it traverses a collection. Other loops need to load the entire collection up front in order to iterate over it, whereas an iterator only needs to know the current position in the collection.             </p>

<p>You access the current item by calling the iterator’s <code>next</code> method. The next method will return the <strong><code>value</code></strong> of the current item and a <strong><code>boolean</code></strong> to indicate when you have reached the end of the collection. The following is an example of creating an iterator from an array.               </p>

<p>Transform your regular array to iterator using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values" rel="noreferrer"><code>values()</code></a> method like this:               </p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>    const myArr = [2,3,4]<font></font>
<font></font>
let it = myArr.values();<font></font>
<font></font>
console.log(it.next());<font></font>
console.log(it.next());<font></font>
console.log(it.next());<font></font>
console.log(it.next());</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用以下方式将常规数组转换为迭代器</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator" rel="noreferrer"><code>Symbol.iterator</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：         </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const myArr = [2,3,4]<font></font>
<font></font>
let it = myArr[Symbol.iterator]();<font></font>
<font></font>
console.log(it.next());<font></font>
console.log(it.next());<font></font>
console.log(it.next());<font></font>
console.log(it.next());</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以将常规</font></font><code>array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转换为</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators" rel="noreferrer"><code>iterator</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下形式：          </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let myArr = [8, 10, 12];<font></font>
<font></font>
function makeIterator(array) {<font></font>
    var nextIndex = 0;<font></font>
    <font></font>
    return {<font></font>
       next: function() {<font></font>
           return nextIndex &lt; array.length ?<font></font>
               {value: array[nextIndex++], done: false} :<font></font>
               {done: true};<font></font>
       }<font></font>
    };<font></font>
};<font></font>
<font></font>
var it = makeIterator(myArr);<font></font>
<font></font>
console.log(it.next().value);   // {value: 8, done: false}<font></font>
console.log(it.next().value);   // {value: 10, done: false}<font></font>
console.log(it.next().value);   // {value: 12, done: false}<font></font>
console.log(it.next().value);   // {value: undefined, done: true}</code></pre>
</div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：                </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迭代器本质上是穷举的。 </font></font></li>
<li><font style="vertical-align: inherit;"></font><code>iterable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，</font><font style="vertical-align: inherit;">对象不是</font><font style="vertical-align: inherit;">。</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in" rel="noreferrer"><code>for..in</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">，因为它可以代替键来代替值。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>iteration protocol</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解更多信息</font><font style="vertical-align: inherit;">。  </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以这样调用forEach：</font></font></p>

<p><code>forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将遍历您提供的数组，并且每次迭代都将</font></font><code>element</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保留该迭代的值。</font><font style="vertical-align: inherit;">如果需要索引，可以通过将</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">for作为每个回调函数的第二个参数</font><font style="vertical-align: inherit;">传递来获取当前索引</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Foreach基本上是一个高阶函数，它将另一个函数作为其参数。 </font></font></p>

<pre><code>let theArray= [1,3,2];<font></font>
<font></font>
theArray.forEach((element) =&gt; {<font></font>
  // Use the element of the array<font></font>
  console.log(element)<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></p>

<pre><code>1<font></font>
3<font></font>
2<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以像这样遍历数组：</font></font></p>

<pre><code>for (let i=0; i&lt;theArray.length; i++) {<font></font>
  console.log(i); // i will have the value of each index<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最接近您的想法的方法是使用</font></font><code>Array.forEach()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接受将对数组的每个元素执行的闭包函数。</font></font></p>

<pre><code>myArray.forEach(<font></font>
  (item) =&gt; {<font></font>
    // Do something<font></font>
    console.log(item);<font></font>
  }<font></font>
);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种可行的方法是使用</font></font><code>Array.map()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以相同的方式工作的方法，但是它还会使用您返回的所有值，并将它们返回到新数组中（基本上将每个元素映射到一个新元素），如下所示：</font></font></p>

<pre><code>var myArray = [1, 2, 3];<font></font>
myArray = myArray.map(<font></font>
  (item) =&gt; {<font></font>
    return item + 1;<font></font>
  }<font></font>
);<font></font>
<font></font>
console.log(myArray); // [2, 3, 4]<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次</font></font></p>

<pre><code>theArray.forEach(function (array, index) {<font></font>
    console.log(index);<font></font>
    console.log(array);<font></font>
});<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font></p>

<pre><code>for(var i=0; i&lt;theArray.length; i++) {<font></font>
    console.log(i)<font></font>
}<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">地图</font></font></p>

<pre><code>theArray.map(x =&gt; console.log(x));
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">地图</font></font></p>

<pre><code>theArray.filter(x =&gt; console.log(x));
</code></pre></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有很多其他需要迭代的地方。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Eva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery的使用方式</font></font><code>$.map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var data = [1, 2, 3, 4, 5, 6, 7];<font></font>
<font></font>
var newData = $.map(data, function(element) {<font></font>
    if (element % 2 == 0) {<font></font>
        return element;<font></font>
    }<font></font>
});<font></font>
<font></font>
// newData = [2, 4, 6];<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙老丝</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也想将其添加为反向循环的组成部分，并在上面为也希望使用此语法的人提供答案。</font></font></p>

<pre><code>var foo = [object,object,object];<font></font>
for (var i = foo.length, item; item = foo[--i];) {<font></font>
    console.log(item);<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样做的好处是：您已经在第一个引用中已经有了引用，以后无需在另一行声明它。</font><font style="vertical-align: inherit;">在对象数组中循环时很方便。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当引用为假-假（未定义等）时，这都会中断。</font><font style="vertical-align: inherit;">但是，它可以用作优势。</font><font style="vertical-align: inherit;">但是，这会使阅读起来有些困难。</font><font style="vertical-align: inherit;">而且还可以根据浏览器进行“非”优化，使其比原始浏览器更快地工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有内置的闯入能力</font></font><code>forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">要中断执行，请使用</font></font><code>Array#some</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下代码：</font></font></p>

<pre><code>[1,2,3].some(function(number) {<font></font>
    return number === 1;<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之所以</font></font><code>some</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可行，是因为一旦按数组顺序执行的任何回调均返回true，则返回true，从而使其余部分的执行短路。 
</font></font><a href="https://stackoverflow.com/questions/2641347/how-to-short-circuit-array-foreach-like-calling-break"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原来的答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
参见数组原型</font></font><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.17" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">几种方法</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以遍历JavaScript中的数组，如下所示：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -这是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最常见的一种</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">完整的代码块用于循环</font></font><br></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var languages = ["Java", "JavaScript", "C#", "Python"];<font></font>
var i, len, text;<font></font>
for (i = 0, len = languages.length, text = ""; i &lt; len; i++) {<font></font>
    text += languages[i] + "&lt;br&gt;";<font></font>
}<font></font>
document.getElementById("example").innerHTML = text;</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;p id="example"&gt;&lt;/p&gt;</code></pre>
</div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">while-在条件通过</font><strong><font style="vertical-align: inherit;">时</font></strong><font style="vertical-align: inherit;">循环。</font><font style="vertical-align: inherit;">这似乎是最快的循环</font></font><br></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var text = "";<font></font>
var i = 0;<font></font>
while (i &lt; 10) {<font></font>
    text +=  i + ") something&lt;br&gt;";<font></font>
    i++;<font></font>
}<font></font>
document.getElementById("example").innerHTML = text;</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;p id="example"&gt;&lt;/p&gt;</code></pre>
</div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">do / while-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在条件为true的情况下也循环遍历代码块，至少运行一次</font></font><br></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var text = ""<font></font>
var i = 0;<font></font>
<font></font>
do {<font></font>
    text += i + ") something &lt;br&gt;";<font></font>
    i++;<font></font>
}<font></font>
while (i &lt; 10);<font></font>
<font></font>
document.getElementById("example").innerHTML = text;</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;p id="example"&gt;&lt;/p&gt;</code></pre>
</div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能循环</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> - ，</font></font><code>forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>filter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也</font></font><code>reduce</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（他们遍历功能，但是它们如果你需要做的事情与你的阵列等使用</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>// For example, in this case we loop through the number and double them up using the map function<font></font>
var numbers = [65, 44, 12, 4];<font></font>
document.getElementById("example").innerHTML = numbers.map(function(num){return num * 2});</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;p id="example"&gt;&lt;/p&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关数组上函数编程的更多信息和示例，请参阅博客文章</font></font><em><a href="http://cryto.net/~joepie91/blog/2015/05/04/functional-programming-in-javascript-map-filter-reduce/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><em><a href="http://cryto.net/~joepie91/blog/2015/05/04/functional-programming-in-javascript-map-filter-reduce/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">函数编程：map，filter和reduce</font></a></em><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanItachi</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本</font></font><code>for each</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">机</font></font><a href="http://en.wikipedia.org/wiki/JavaScript" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有任何</font><font style="vertical-align: inherit;">循环</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以使用库来获得此功能（我建议使用</font></font><a href="http://en.wikipedia.org/wiki/Underscore.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Underscore.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），也可以使用简单的</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">in循环。</font></font></p>

<pre><code>for (var instance in objects) {<font></font>
   ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，请注意，可能有理由使用更简单的</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环（请参阅堆栈溢出问题，</font></font><em><a href="https://stackoverflow.com/questions/500504"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么在数组迭代中使用“ for…in”是一个坏主意？</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<pre><code>var instance;<font></font>
for (var i=0; i &lt; objects.length; i++) {<font></font>
    var instance = objects[i];<font></font>
    ...<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从ECMAScript 6开始：</font></font></strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>list = [0, 1, 2, 3]<font></font>
for (let obj of list) {<font></font>
    console.log(obj)<font></font>
}</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">where </font></font><code>of</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">避免与之关联的怪异之处，</font></font><code>in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使其像</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何其他语言</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">循环</font><font style="vertical-align: inherit;">一样工作</font><font style="vertical-align: inherit;">，并且</font><font style="vertical-align: inherit;">在循环内</font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绑定</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是在函数内</font><font style="vertical-align: inherit;">绑定</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>{}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当只有一个命令时（例如，在以上示例中），可以省略</font><font style="vertical-align: inherit;">大括号（</font><font style="vertical-align: inherit;">）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green猿古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，一个简单的解决方案是使用</font></font><a href="https://en.wikipedia.org/wiki/Underscore.js"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">underscore.js库</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它提供了许多有用的工具，例如</font></font><code>each</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和将自动将作业委派给本机（</font></font><code>forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果可用）。</font></font></p>

<p><a href="http://codepen.io/Micka33/pen/nbyxf"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CodePen</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何工作的</font><a href="http://codepen.io/Micka33/pen/nbyxf"><font style="vertical-align: inherit;">示例</font></a><font style="vertical-align: inherit;">是：</font></font></p>

<pre><code>var arr = ["elemA", "elemB", "elemC"];<font></font>
_.each(arr, function(elem, index, ar)<font></font>
{<font></font>
...<font></font>
});<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以看看</font></font></h3>

<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本机的文档</font></font><code>Array.prototype.forEach()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><em><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for_each...in"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">for_each ... in</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（MDN）中，将其解释</font></font><code>for each (variable in object)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为ECMA-357（</font></font><a href="https://developer.mozilla.org/en-US/docs/E4X"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">EAX</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）标准</font><font style="vertical-align: inherit;">的一部分已弃用</font><font style="vertical-align: inherit;">。</font></font></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">for（...）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（MDN）描述了</font></font><code>for (variable of object)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为和声（ECMAScript 6）提议的一部分</font><font style="vertical-align: inherit;">使用的另一种迭代方法</font><font style="vertical-align: inherit;">。</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有三种实现方式</font></font><code>foreach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font></font><a href="http://en.wikipedia.org/wiki/JQuery"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的jQuery</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下。</font></font></p>

<pre><code>var a = [3,2];<font></font>
<font></font>
$(a).each(function(){console.log(this.valueOf())}); //Method 1<font></font>
$.each(a, function(){console.log(this.valueOf())}); //Method 2<font></font>
$.each($(a), function(){console.log(this.valueOf())}); //Method 3<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near路易小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不介意清空数组：</font></font></p>

<pre><code>var x;<font></font>
<font></font>
while(x = y.pop()){ <font></font>
<font></font>
    alert(x); //do something <font></font>
<font></font>
}<font></font>
</code></pre>

<p><code>x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将包含的最后一个值，</font></font><code>y</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将其从数组中删除。</font><font style="vertical-align: inherit;">您还可以使用来</font></font><code>shift()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从中提供和删除第一项</font></font><code>y</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要遍历数组，请使用标准的三部分</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环。</font></font></p>

<pre><code>for (var i = 0; i &lt; myArray.length; i++) {<font></font>
    var arrayItem = myArray[i];<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过</font></font><code>myArray.length</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向后</font><font style="vertical-align: inherit;">缓存</font><font style="vertical-align: inherit;">或对其进行迭代</font><font style="vertical-align: inherit;">来获得一些性能优化</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid番长十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些</font></font><a href="http://en.wikipedia.org/wiki/C_%28programming_language%29" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">C</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">风格的语言用于</font></font><code>foreach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遍历枚举。</font><font style="vertical-align: inherit;">在JavaScript中，这是通过</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Statements/for...in" rel="noreferrer"><code>for..in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环结构</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成的</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var index,<font></font>
    value;<font></font>
for (index in obj) {<font></font>
    value = obj[index];<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个陷阱。</font></font><code>for..in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将遍历对象的每个可枚举成员，以及其原型上的成员。</font><font style="vertical-align: inherit;">为了避免读取通过对象原型继承的值，只需检查属性是否属于对象：</font></font></p>

<pre><code>for (i in obj) {<font></font>
    if (obj.hasOwnProperty(i)) {<font></font>
        //do stuff<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，</font></font><a href="https://en.wikipedia.org/wiki/ECMAScript#ECMAScript.2C_5th_Edition" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 5</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加了一种</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach" rel="noreferrer"><code>forEach</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font></font><code>Array.prototype</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以使用回溯</font><font style="vertical-align: inherit;">方法对</font><font style="vertical-align: inherit;">数组进行枚举（polyfill在文档中，因此您仍可以将其用于较旧的浏览器）：</font></font></p>

<pre><code>arr.forEach(function (val, index, theArray) {<font></font>
    //do stuff<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要的是要注意，</font></font><code>Array.prototype.forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回调返回时不会中断</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><a href="http://en.wikipedia.org/wiki/JQuery" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://en.wikipedia.org/wiki/Underscore.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Underscore.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供了它们自己的变体，</font></font><code>each</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以提供可以短路的循环。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长西里神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>If you’re using the <a href="http://jquery.com/" rel="noreferrer"><strong>jQuery</strong></a> library, you can use <a href="http://api.jquery.com/jQuery.each/" rel="noreferrer"><strong>jQuery.each</strong></a>:</p>



<pre class="lang-js prettyprint-override"><code>$.each(yourArray, function(index, value) {<font></font>
  // do your stuff here<font></font>
});<font></font>
</code></pre>

<p><strong>EDIT :</strong> </p>

<p>As per question, user want code in javascript instead of jquery so the edit is</p>

<pre class="lang-js prettyprint-override"><code>var length = yourArray.length;   <font></font>
for (var i = 0; i &lt; length; i++) {<font></font>
  // Do something with yourArray[i].<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY蛋蛋Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：此答案已过时。</font><font style="vertical-align: inherit;">对于更现代的方法，请查看</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">array上可用的方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">感兴趣的方法可能是：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">地图</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">过滤</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">压缩</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">降低</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每一个</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些</font></font></li>
</ul>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迭代的标准方式在阵列中</font></font><a href="http://en.wikipedia.org/wiki/JavaScript" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的JavaScript</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是香草</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-loop：</font></font></p>

<pre><code>var length = arr.length,<font></font>
    element = null;<font></font>
for (var i = 0; i &lt; length; i++) {<font></font>
  element = arr[i];<font></font>
  // Do something with element<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是请注意，这种方法仅在数组密集且每个索引都被一个元素占用的情况下才有用。</font><font style="vertical-align: inherit;">如果数组稀疏，则使用此方法会遇到性能问题，因为您将遍历</font><font style="vertical-align: inherit;">数组中</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font><font style="vertical-align: inherit;">存在</font><font style="vertical-align: inherit;">的许多索引</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在这种情况下，</font></font><code>for .. in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-loop可能是一个更好的主意。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您必须使用适当的防护措施来确保仅对数组的所需属性（即数组元素）进行操作，因为</font></font><code>for..in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-loop还将在旧版浏览器中枚举，或者如果其他属性定义为</font></font><code>enumerable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://en.wikipedia.org/wiki/ECMAScript#ECMAScript.2C_5th_Edition" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 5中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，数组原型上将有一个forEach方法，但是旧版浏览器不支持该方法。</font><font style="vertical-align: inherit;">因此，要能够始终如一地使用它，您必须具有一个支持它的环境（例如，</font><font style="vertical-align: inherit;">用于服务器端JavaScript的</font></font><a href="http://en.wikipedia.org/wiki/Node.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），或使用“ Polyfill”。</font><font style="vertical-align: inherit;">但是，用于此功能的Polyfill很简单，并且由于它使代码更易于阅读，因此可以很好地包含它。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据新的更新功能ECMAScript 6（ES6）和ECMAScript 2015，您可以在循环中使用以下选项：</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">for循环</font></font></strong></p>
</blockquote>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">5</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++){</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">i</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="com">// Output: 0,1,2,3,4</span></code></pre>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">for ...在循环中</font></font></strong></p>
</blockquote>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="str">"a"</span><span class="pun">:</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="str">"b"</span><span class="pun">:</span><span class="lit">2</span><span class="pun">}</span><span class="pln">

</span><span class="kwd">for</span><span class="pun">(</span><span class="kwd">let</span><span class="pln"> k in obj</span><span class="pun">){</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">k</span><span class="pun">)</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="com">// Output: a,b</span></code></pre>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Array.forEach（）</font></font></strong></p>
</blockquote>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> array </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="lit">2</span><span class="pun">,</span><span class="lit">3</span><span class="pun">,</span><span class="lit">4</span><span class="pun">]</span><span class="pln">

array</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">((</span><span class="pln">x</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">x</span><span class="pun">);</span><span class="pln">
</span><span class="pun">})</span><span class="pln">

</span><span class="com">// Output: 1,2,3,4</span></code></pre>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于...的循环</font></font></strong></p>
</blockquote>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> array </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="lit">2</span><span class="pun">,</span><span class="lit">3</span><span class="pun">,</span><span class="lit">4</span><span class="pun">]</span><span class="pln">

</span><span class="kwd">for</span><span class="pun">(</span><span class="kwd">let</span><span class="pln"> x </span><span class="kwd">of</span><span class="pln"> array</span><span class="pun">){</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">x</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="com">// Output: 1,2,3,4</span></code></pre>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">while循环</font></font></strong></p>
</blockquote>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> x </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pln">

</span><span class="kwd">while</span><span class="pun">(</span><span class="pln">x </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">5</span><span class="pun">){</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">x</span><span class="pun">)</span><span class="pln">
  x</span><span class="pun">++</span><span class="pln">
</span><span class="pun">}</span><span class="pln">

</span><span class="com">// Output: 1,2,3,4</span></code></pre>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做... while循环</font></font></strong></p>
</blockquote>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> x </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pln">

</span><span class="kwd">do</span><span class="pun">{</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">x</span><span class="pun">)</span><span class="pln">
  x</span><span class="pun">++</span><span class="pln">
</span><span class="pun">}</span><span class="kwd">while</span><span class="pun">(</span><span class="pln">x </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">5</span><span class="pun">)</span><span class="pln">

</span><span class="com">// Output: 1,2,3,4</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">D坤</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要使用</font></font><code>forEach()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将看起来像-</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">theArray</span><span class="pun">.</span><span class="pln">forEach </span><span class="pun">(</span><span class="pln"> element </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">element</span><span class="pun">);</span><span class="pln">
</span><span class="pun">});</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要使用</font></font><code>for()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将看起来像-   </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pun">(</span><span class="kwd">let</span><span class="pln"> idx </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> idx </span><span class="pun">&lt;</span><span class="pln"> theArray</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> idx</span><span class="pun">++){</span><span class="pln">
    </span><span class="kwd">let</span><span class="pln"> element </span><span class="pun">=</span><span class="pln"> theArray</span><span class="pun">[</span><span class="pln">idx</span><span class="pun">];</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">element</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">theArray</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">(</span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">array</span><span class="pun">,</span><span class="pln"> index</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">index</span><span class="pun">);</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">array</span><span class="pun">);</span><span class="pln">
</span><span class="pun">});</span></code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i</span><span class="pun">=</span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">&lt;</span><span class="pln">theArray</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">i</span><span class="pun">)</span><span class="pln">
</span><span class="pun">}</span></code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">地图</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">theArray</span><span class="pun">.</span><span class="pln">map</span><span class="pun">(</span><span class="pln">x </span><span class="pun">=&gt;</span><span class="pln"> console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">x</span><span class="pun">));</span></code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">地图</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">theArray</span><span class="pun">.</span><span class="pln">filter</span><span class="pun">(</span><span class="pln">x </span><span class="pun">=&gt;</span><span class="pln"> console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">x</span><span class="pun">));</span></code></pre></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有很多其他需要迭代的地方。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilJinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有大量阵列，则应使用它</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators" rel="noreferrer" data-bitapp="processed"><strong><code>iterators</code></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来提高效率。</font><font style="vertical-align: inherit;">迭代器是一定的JavaScript集合的性质（如</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" rel="noreferrer" data-bitapp="processed"><code>Map</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set" rel="noreferrer" data-bitapp="processed"><code>Set</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String" rel="noreferrer" data-bitapp="processed"><code>String</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" rel="noreferrer" data-bitapp="processed"><code>Array</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">甚至，</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of" rel="noreferrer" data-bitapp="processed"><strong><code>for..of</code></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><strong><code>iterator</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在引擎罩。</font></font></p>

<p>Iterators improve efficiency by letting you consume the items in a list one at a time as if they were a stream. What makes an iterator special is how it traverses a collection. Other loops need to load the entire collection up front in order to iterate over it, whereas an iterator only needs to know the current position in the collection.             </p>

<p>You access the current item by calling the iterator’s <code>next</code> method. The next method will return the <strong><code>value</code></strong> of the current item and a <strong><code>boolean</code></strong> to indicate when you have reached the end of the collection. The following is an example of creating an iterator from an array.               </p>

<p>Transform your regular array to iterator using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values" rel="noreferrer" data-bitapp="processed"><code>values()</code></a> method like this:               </p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="pln">    </span><span class="kwd">const</span><span class="pln"> myArr </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">2</span><span class="pun">,</span><span class="lit">3</span><span class="pun">,</span><span class="lit">4</span><span class="pun">]</span><span class="pln">

</span><span class="kwd">let</span><span class="pln"> it </span><span class="pun">=</span><span class="pln"> myArr</span><span class="pun">.</span><span class="pln">values</span><span class="pun">();</span><span class="pln">

console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">it</span><span class="pun">.</span><span class="pln">next</span><span class="pun">());</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">it</span><span class="pun">.</span><span class="pln">next</span><span class="pun">());</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">it</span><span class="pun">.</span><span class="pln">next</span><span class="pun">());</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">it</span><span class="pun">.</span><span class="pln">next</span><span class="pun">());</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span> Run code snippet</span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed">Expand snippet</a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif25" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用以下方式将常规数组转换为迭代器</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator" rel="noreferrer" data-bitapp="processed"><code>Symbol.iterator</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：         </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">const</span><span class="pln"> myArr </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">2</span><span class="pun">,</span><span class="lit">3</span><span class="pun">,</span><span class="lit">4</span><span class="pun">]</span><span class="pln">

</span><span class="kwd">let</span><span class="pln"> it </span><span class="pun">=</span><span class="pln"> myArr</span><span class="pun">[</span><span class="typ">Symbol</span><span class="pun">.</span><span class="pln">iterator</span><span class="pun">]();</span><span class="pln">

console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">it</span><span class="pun">.</span><span class="pln">next</span><span class="pun">());</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">it</span><span class="pun">.</span><span class="pln">next</span><span class="pun">());</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">it</span><span class="pun">.</span><span class="pln">next</span><span class="pun">());</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">it</span><span class="pun">.</span><span class="pln">next</span><span class="pun">());</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif26" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以将常规</font></font><code>array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转换为</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators" rel="noreferrer" data-bitapp="processed"><code>iterator</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下形式：          </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> myArr </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">8</span><span class="pun">,</span><span class="pln"> </span><span class="lit">10</span><span class="pun">,</span><span class="pln"> </span><span class="lit">12</span><span class="pun">];</span><span class="pln">

</span><span class="kwd">function</span><span class="pln"> makeIterator</span><span class="pun">(</span><span class="pln">array</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> nextIndex </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln">
    
    </span><span class="kwd">return</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
       next</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
           </span><span class="kwd">return</span><span class="pln"> nextIndex </span><span class="pun">&lt;</span><span class="pln"> array</span><span class="pun">.</span><span class="pln">length </span><span class="pun">?</span><span class="pln">
               </span><span class="pun">{</span><span class="pln">value</span><span class="pun">:</span><span class="pln"> array</span><span class="pun">[</span><span class="pln">nextIndex</span><span class="pun">++],</span><span class="pln"> done</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">}</span><span class="pln"> </span><span class="pun">:</span><span class="pln">
               </span><span class="pun">{</span><span class="pln">done</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">};</span><span class="pln">
       </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">};</span><span class="pln">
</span><span class="pun">};</span><span class="pln">

</span><span class="kwd">var</span><span class="pln"> it </span><span class="pun">=</span><span class="pln"> makeIterator</span><span class="pun">(</span><span class="pln">myArr</span><span class="pun">);</span><span class="pln">

console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">it</span><span class="pun">.</span><span class="pln">next</span><span class="pun">().</span><span class="pln">value</span><span class="pun">);</span><span class="pln">   </span><span class="com">// {value: 8, done: false}</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">it</span><span class="pun">.</span><span class="pln">next</span><span class="pun">().</span><span class="pln">value</span><span class="pun">);</span><span class="pln">   </span><span class="com">// {value: 10, done: false}</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">it</span><span class="pun">.</span><span class="pln">next</span><span class="pun">().</span><span class="pln">value</span><span class="pun">);</span><span class="pln">   </span><span class="com">// {value: 12, done: false}</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">it</span><span class="pun">.</span><span class="pln">next</span><span class="pun">().</span><span class="pln">value</span><span class="pun">);</span><span class="pln">   </span><span class="com">// {value: undefined, done: true}</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif27" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：                </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迭代器本质上是穷举的。 </font></font></li>
<li><font style="vertical-align: inherit;"></font><code>iterable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，</font><font style="vertical-align: inherit;">对象不是</font><font style="vertical-align: inherit;">。</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in" rel="noreferrer" data-bitapp="processed"><code>for..in</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">，因为它可以代替键来代替值。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>iteration protocol</code> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解更多信息</font><font style="vertical-align: inherit;">。  </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Stafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lambda语法通常在Internet Explorer 10或更低版本中不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通常使用</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">[].</span><span class="pln">forEach</span><span class="pun">.</span><span class="pln">call</span><span class="pun">(</span><span class="pln">arrayName</span><span class="pun">,</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">value</span><span class="pun">,</span><span class="pln">index</span><span class="pun">){</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"value of the looped element"</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> value</span><span class="pun">);</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"index of the looped element"</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> index</span><span class="pun">);</span><span class="pln">
</span><span class="pun">});</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您是jQuery </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">爱好者</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且已经在运行jQuery文件，则应反转index和value参数的位置</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$</span><span class="pun">(</span><span class="str">"#ul&gt;li"</span><span class="pun">).</span><span class="pln">each</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(**</span><span class="pln">index</span><span class="pun">,</span><span class="pln"> value</span><span class="pun">**){</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"value of the looped element"</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> value</span><span class="pun">);</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">"index of the looped element"</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> index</span><span class="pun">);</span><span class="pln">
</span><span class="pun">});</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以这样调用forEach：</font></font></p>

<p><code>forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将遍历您提供的数组，并且每次迭代都将</font></font><code>element</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保留该迭代的值。</font><font style="vertical-align: inherit;">如果需要索引，可以通过将</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">for作为每个回调函数的第二个参数</font><font style="vertical-align: inherit;">传递来获取当前索引</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Foreach基本上是一个高阶函数，它将另一个函数作为其参数。 </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">let</span><span class="pln"> theArray</span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="lit">3</span><span class="pun">,</span><span class="lit">2</span><span class="pun">];</span><span class="pln">

theArray</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">((</span><span class="pln">element</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="com">// Use the element of the array</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">element</span><span class="pun">)</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="lit">1</span><span class="pln">
</span><span class="lit">3</span><span class="pln">
</span><span class="lit">2</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以像这样遍历数组：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">let</span><span class="pln"> i</span><span class="pun">=</span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">&lt;</span><span class="pln">theArray</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">i</span><span class="pun">);</span><span class="pln"> </span><span class="com">// i will have the value of each index</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最接近您的想法的方法是使用</font></font><code>Array.forEach()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接受将对数组的每个元素执行的闭包函数。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">myArray</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">(</span><span class="pln">
  </span><span class="pun">(</span><span class="pln">item</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="com">// Do something</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">item</span><span class="pun">);</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">);</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种可行的方法是使用</font></font><code>Array.map()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以相同的方式工作的方法，但是它还会使用您返回的所有值，并将它们返回到新数组中（基本上将每个元素映射到一个新元素），如下所示：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> myArray </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">];</span><span class="pln">
myArray </span><span class="pun">=</span><span class="pln"> myArray</span><span class="pun">.</span><span class="pln">map</span><span class="pun">(</span><span class="pln">
  </span><span class="pun">(</span><span class="pln">item</span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> item </span><span class="pun">+</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">);</span><span class="pln">

console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">myArray</span><span class="pun">);</span><span class="pln"> </span><span class="com">// [2, 3, 4]</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天Eva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery的使用方式</font></font><code>$.map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> data </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">,</span><span class="pln"> </span><span class="lit">4</span><span class="pun">,</span><span class="pln"> </span><span class="lit">5</span><span class="pun">,</span><span class="pln"> </span><span class="lit">6</span><span class="pun">,</span><span class="pln"> </span><span class="lit">7</span><span class="pun">];</span><span class="pln">

</span><span class="kwd">var</span><span class="pln"> newData </span><span class="pun">=</span><span class="pln"> $</span><span class="pun">.</span><span class="pln">map</span><span class="pun">(</span><span class="pln">data</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">element</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">element </span><span class="pun">%</span><span class="pln"> </span><span class="lit">2</span><span class="pln"> </span><span class="pun">==</span><span class="pln"> </span><span class="lit">0</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
        </span><span class="kwd">return</span><span class="pln"> element</span><span class="pun">;</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
</span><span class="pun">});</span><span class="pln">

</span><span class="com">// newData = [2, 4, 6];</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙老丝</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也想将其添加为反向循环的组成部分，并在上面为也希望使用此语法的人提供答案。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> foo </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="pln">object</span><span class="pun">,</span><span class="pln">object</span><span class="pun">,</span><span class="pln">object</span><span class="pun">];</span><span class="pln">
</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> foo</span><span class="pun">.</span><span class="pln">length</span><span class="pun">,</span><span class="pln"> item</span><span class="pun">;</span><span class="pln"> item </span><span class="pun">=</span><span class="pln"> foo</span><span class="pun">[--</span><span class="pln">i</span><span class="pun">];)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">item</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样做的好处是：您已经在第一个引用中已经有了引用，以后无需在另一行声明它。</font><font style="vertical-align: inherit;">在对象数组中循环时很方便。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当引用为假-假（未定义等）时，这都会中断。</font><font style="vertical-align: inherit;">但是，它可以用作优势。</font><font style="vertical-align: inherit;">但是，这会使阅读起来有些困难。</font><font style="vertical-align: inherit;">而且还可以根据浏览器进行“非”优化，使其比原始浏览器更快地工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Davaid</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有内置的闯入能力</font></font><code>forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">要中断执行，请使用</font></font><code>Array#some</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下代码：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="lit">2</span><span class="pun">,</span><span class="lit">3</span><span class="pun">].</span><span class="pln">some</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">number</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> number </span><span class="pun">===</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span><span class="pln">
</span><span class="pun">});</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之所以</font></font><code>some</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可行，是因为一旦按数组顺序执行的任何回调均返回true，则返回true，从而使其余部分的执行短路。 
</font></font><a href="https://stackoverflow.com/questions/2641347/how-to-short-circuit-array-foreach-like-calling-break" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原来的答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
参见数组原型</font></font><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.17" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">几种方法</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以遍历JavaScript中的数组，如下所示：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -这是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最常见的一种</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">完整的代码块用于循环</font></font><br></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> languages </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="str">"Java"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"JavaScript"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"C#"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"Python"</span><span class="pun">];</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> i</span><span class="pun">,</span><span class="pln"> len</span><span class="pun">,</span><span class="pln"> text</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="pln">i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> len </span><span class="pun">=</span><span class="pln"> languages</span><span class="pun">.</span><span class="pln">length</span><span class="pun">,</span><span class="pln"> text </span><span class="pun">=</span><span class="pln"> </span><span class="str">""</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> len</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    text </span><span class="pun">+=</span><span class="pln"> languages</span><span class="pun">[</span><span class="pln">i</span><span class="pun">]</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="str">"&lt;br&gt;"</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">"example"</span><span class="pun">).</span><span class="pln">innerHTML </span><span class="pun">=</span><span class="pln"> text</span><span class="pun">;</span></code></pre>
<pre class="snippet-code-html lang-html prettyprint prettyprinted" style=""><code><span class="tag">&lt;p</span><span class="pln"> </span><span class="atn">id</span><span class="pun">=</span><span class="atv">"example"</span><span class="tag">&gt;&lt;/p&gt;</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif12" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">while-在条件通过</font><strong><font style="vertical-align: inherit;">时</font></strong><font style="vertical-align: inherit;">循环。</font><font style="vertical-align: inherit;">这似乎是最快的循环</font></font><br></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> text </span><span class="pun">=</span><span class="pln"> </span><span class="str">""</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">while</span><span class="pln"> </span><span class="pun">(</span><span class="pln">i </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">10</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    text </span><span class="pun">+=</span><span class="pln">  i </span><span class="pun">+</span><span class="pln"> </span><span class="str">") something&lt;br&gt;"</span><span class="pun">;</span><span class="pln">
    i</span><span class="pun">++;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">"example"</span><span class="pun">).</span><span class="pln">innerHTML </span><span class="pun">=</span><span class="pln"> text</span><span class="pun">;</span></code></pre>
<pre class="snippet-code-html lang-html prettyprint prettyprinted" style=""><code><span class="tag">&lt;p</span><span class="pln"> </span><span class="atn">id</span><span class="pun">=</span><span class="atv">"example"</span><span class="tag">&gt;&lt;/p&gt;</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif13" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">do / while-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在条件为true的情况下也循环遍历代码块，至少运行一次</font></font><br></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> text </span><span class="pun">=</span><span class="pln"> </span><span class="str">""</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln">

</span><span class="kwd">do</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    text </span><span class="pun">+=</span><span class="pln"> i </span><span class="pun">+</span><span class="pln"> </span><span class="str">") something &lt;br&gt;"</span><span class="pun">;</span><span class="pln">
    i</span><span class="pun">++;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
</span><span class="kwd">while</span><span class="pln"> </span><span class="pun">(</span><span class="pln">i </span><span class="pun">&lt;</span><span class="pln"> </span><span class="lit">10</span><span class="pun">);</span><span class="pln">

document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">"example"</span><span class="pun">).</span><span class="pln">innerHTML </span><span class="pun">=</span><span class="pln"> text</span><span class="pun">;</span></code></pre>
<pre class="snippet-code-html lang-html prettyprint prettyprinted" style=""><code><span class="tag">&lt;p</span><span class="pln"> </span><span class="atn">id</span><span class="pun">=</span><span class="atv">"example"</span><span class="tag">&gt;&lt;/p&gt;</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif14" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能循环</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> - ，</font></font><code>forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>filter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也</font></font><code>reduce</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（他们遍历功能，但是它们如果你需要做的事情与你的阵列等使用</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="com">// For example, in this case we loop through the number and double them up using the map function</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> numbers </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">65</span><span class="pun">,</span><span class="pln"> </span><span class="lit">44</span><span class="pun">,</span><span class="pln"> </span><span class="lit">12</span><span class="pun">,</span><span class="pln"> </span><span class="lit">4</span><span class="pun">];</span><span class="pln">
document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">"example"</span><span class="pun">).</span><span class="pln">innerHTML </span><span class="pun">=</span><span class="pln"> numbers</span><span class="pun">.</span><span class="pln">map</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">num</span><span class="pun">){</span><span class="kwd">return</span><span class="pln"> num </span><span class="pun">*</span><span class="pln"> </span><span class="lit">2</span><span class="pun">});</span></code></pre>
<pre class="snippet-code-html lang-html prettyprint prettyprinted" style=""><code><span class="tag">&lt;p</span><span class="pln"> </span><span class="atn">id</span><span class="pun">=</span><span class="atv">"example"</span><span class="tag">&gt;&lt;/p&gt;</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif15" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关数组上函数编程的更多信息和示例，请参阅博客文章</font></font><em><a href="http://cryto.net/~joepie91/blog/2015/05/04/functional-programming-in-javascript-map-filter-reduce/" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><em><a href="http://cryto.net/~joepie91/blog/2015/05/04/functional-programming-in-javascript-map-filter-reduce/" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">函数编程：map，filter和reduce</font></a></em><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanItachi</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本</font></font><code>for each</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">机</font></font><a href="http://en.wikipedia.org/wiki/JavaScript" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有任何</font><font style="vertical-align: inherit;">循环</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以使用库来获得此功能（我建议使用</font></font><a href="http://en.wikipedia.org/wiki/Underscore.js" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Underscore.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），也可以使用简单的</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">in循环。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> instance in objects</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
   </span><span class="pun">...</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，请注意，可能有理由使用更简单的</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环（请参阅堆栈溢出问题，</font></font><em><a href="https://stackoverflow.com/questions/500504" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么在数组迭代中使用“ for…in”是一个坏主意？</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> instance</span><span class="pun">;</span><span class="pln">
</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i</span><span class="pun">=</span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> objects</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> instance </span><span class="pun">=</span><span class="pln"> objects</span><span class="pun">[</span><span class="pln">i</span><span class="pun">];</span><span class="pln">
    </span><span class="pun">...</span><span class="pln">
</span><span class="pun">}</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green猿古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，一个简单的解决方案是使用</font></font><a href="https://en.wikipedia.org/wiki/Underscore.js" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">underscore.js库</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它提供了许多有用的工具，例如</font></font><code>each</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和将自动将作业委派给本机（</font></font><code>forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果可用）。</font></font></p>

<p><a href="http://codepen.io/Micka33/pen/nbyxf" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CodePen</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何工作的</font><a href="http://codepen.io/Micka33/pen/nbyxf" data-bitapp="processed"><font style="vertical-align: inherit;">示例</font></a><font style="vertical-align: inherit;">是：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> arr </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="str">"elemA"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"elemB"</span><span class="pun">,</span><span class="pln"> </span><span class="str">"elemC"</span><span class="pun">];</span><span class="pln">
_</span><span class="pun">.</span><span class="pln">each</span><span class="pun">(</span><span class="pln">arr</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">elem</span><span class="pun">,</span><span class="pln"> index</span><span class="pun">,</span><span class="pln"> ar</span><span class="pun">)</span><span class="pln">
</span><span class="pun">{</span><span class="pln">
</span><span class="pun">...</span><span class="pln">
</span><span class="pun">});</span></code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以看看</font></font></h3>

<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本机的文档</font></font><code>Array.prototype.forEach()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><em><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for_each...in" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">for_each ... in</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（MDN）中，将其解释</font></font><code>for each (variable in object)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为ECMA-357（</font></font><a href="https://developer.mozilla.org/en-US/docs/E4X" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">EAX</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）标准</font><font style="vertical-align: inherit;">的一部分已弃用</font><font style="vertical-align: inherit;">。</font></font></li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">for（...）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（MDN）描述了</font></font><code>for (variable of object)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为和声（ECMAScript 6）提议的一部分</font><font style="vertical-align: inherit;">使用的另一种迭代方法</font><font style="vertical-align: inherit;">。</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从ECMAScript 6开始：</font></font></strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint prettyprinted" style=""><code><span class="pln">list </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">0</span><span class="pun">,</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">]</span><span class="pln">
</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">let</span><span class="pln"> obj </span><span class="kwd">of</span><span class="pln"> list</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">)</span><span class="pln">
</span><span class="pun">}</span></code></pre>
<div class="snippet-result"><div class="snippet-ctas"><button type="button" class="s-btn s-btn__primary"><span class="icon-play-white _hover"></span><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 运行代码段</font></font></span></button><input class="copySnippet s-btn s-btn__filled" type="button" value="Copy snippet to answer" style="display: none;"><button type="button" class="s-btn hideResults" style="display: none;">Hide results</button><div class="popout-code"><a class="snippet-expand-link" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">展开摘要</font></font></a></div></div><div class="snippet-result-code" style="display: none;"><iframe name="sif11" sandbox="allow-forms allow-modals allow-scripts" class="snippet-box-edit" frameborder="0"></iframe></div></div></div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">where </font></font><code>of</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">避免与之关联的怪异之处，</font></font><code>in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使其像</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何其他语言</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">循环</font><font style="vertical-align: inherit;">一样工作</font><font style="vertical-align: inherit;">，并且</font><font style="vertical-align: inherit;">在循环内</font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绑定</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是在函数内</font><font style="vertical-align: inherit;">绑定</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>{}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当只有一个命令时（例如，在以上示例中），可以省略</font><font style="vertical-align: inherit;">大括号（</font><font style="vertical-align: inherit;">）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near路易小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不介意清空数组：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> x</span><span class="pun">;</span><font></font><span class="pln">
</span><font></font><span class="pln">
</span><span class="kwd">while</span><span class="pun">(</span><span class="pln">x </span><span class="pun">=</span><span class="pln"> y</span><span class="pun">.</span><span class="pln">pop</span><span class="pun">()){</span><span class="pln"> </span><font></font><span class="pln">
</span><font></font><span class="pln">
    alert</span><span class="pun">(</span><span class="pln">x</span><span class="pun">);</span><span class="pln"> </span><span class="com">//do something </span><font></font><span class="pln">
</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre>

<p><code>x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将包含的最后一个值，</font></font><code>y</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将其从数组中删除。</font><font style="vertical-align: inherit;">您还可以使用来</font></font><code>shift()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从中提供和删除第一项</font></font><code>y</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这是一篇旧文章，并且已经有很多不错的答案。</font><font style="vertical-align: inherit;">为了更加完整，我想我会使用</font></font><a href="https://angularjs.org/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AngularJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">抛出另一个</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当然，仅当您使用Angular时，这才适用，尽管如此，无论如何我还是想放它。</font></font></p>

<p><code>angular.forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接受2个参数和一个可选的第三个参数。</font><font style="vertical-align: inherit;">第一个参数是要迭代的对象（数组），第二个参数是迭代器函数，可选的第三个参数是对象上下文（在循环内部基本称为“ this”）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有多种使用forEach角度循环的方法。</font><font style="vertical-align: inherit;">最简单且可能最常用的是</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> temp </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">];</span><font></font><span class="pln">
angular</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">(</span><span class="pln">temp</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">item</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="com">//item will be each element in the array</span><font></font><span class="pln">
    </span><span class="com">//do something</span><font></font><span class="pln">
</span><span class="pun">});</span><font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将项目从一个数组复制到另一个数组的另一种有用方法是</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> temp </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">1</span><span class="pun">,</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">];</span><font></font><span class="pln">
</span><span class="kwd">var</span><span class="pln"> temp2 </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[];</span><font></font><span class="pln">
angular</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">(</span><span class="pln">temp</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">item</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">push</span><span class="pun">(</span><span class="pln">item</span><span class="pun">);</span><span class="pln"> </span><span class="com">//"this" refers to the array passed into the optional third parameter so, in this case, temp2.</span><font></font><span class="pln">
</span><span class="pun">},</span><span class="pln"> temp2</span><span class="pun">);</span><font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不过，您不必这样做，只需执行以下操作即可，它等效于前面的示例：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">angular</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">(</span><span class="pln">temp</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">item</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    temp2</span><span class="pun">.</span><span class="pln">push</span><span class="pun">(</span><span class="pln">item</span><span class="pun">);</span><font></font><span class="pln">
</span><span class="pun">});</span><font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在与使用</font></font><code>angular.forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内置的香草味</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环</font><font style="vertical-align: inherit;">相反</font><font style="vertical-align: inherit;">，使用该</font><font style="vertical-align: inherit;">功能</font><font style="vertical-align: inherit;">有优缺点</font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优点</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">易读</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">易写性</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果可用，</font></font><code>angular.forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将使用ES5 forEach循环。</font><font style="vertical-align: inherit;">现在，我会去的利弊部分efficientcy，作为foreach循环是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比for循环更慢。</font><font style="vertical-align: inherit;">我将其作为专业人士提及是因为保持一致和标准化非常好。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑以下两个嵌套循环，它们执行的功能完全相同。</font><font style="vertical-align: inherit;">假设我们有2个对象数组，每个对象包含一个结果数组，每个结果都有一个Value属性，该属性是一个字符串（或其他类型）。</font><font style="vertical-align: inherit;">假设我们需要遍历每个结果，如果结果相等，则执行一些操作：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">angular</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">(</span><span class="pln">obj1</span><span class="pun">.</span><span class="pln">results</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">result1</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    angular</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">(</span><span class="pln">obj2</span><span class="pun">.</span><span class="pln">results</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">result2</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
        </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">result1</span><span class="pun">.</span><span class="typ">Value</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> result2</span><span class="pun">.</span><span class="typ">Value</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
            </span><span class="com">//do something</span><font></font><span class="pln">
        </span><span class="pun">}</span><font></font><span class="pln">
    </span><span class="pun">});</span><font></font><span class="pln">
</span><span class="pun">});</span><font></font><span class="pln">
</span><font></font><span class="pln">
</span><span class="com">//exact same with a for loop</span><font></font><span class="pln">
</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> obj1</span><span class="pun">.</span><span class="pln">results</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> j </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> j </span><span class="pun">&lt;</span><span class="pln"> obj2</span><span class="pun">.</span><span class="pln">results</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> j</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
        </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">obj1</span><span class="pun">.</span><span class="pln">results</span><span class="pun">[</span><span class="pln">i</span><span class="pun">].</span><span class="typ">Value</span><span class="pln"> </span><span class="pun">===</span><span class="pln"> obj2</span><span class="pun">.</span><span class="pln">results</span><span class="pun">[</span><span class="pln">j</span><span class="pun">].</span><span class="typ">Value</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
            </span><span class="com">//do something</span><font></font><span class="pln">
        </span><span class="pun">}</span><font></font><span class="pln">
    </span><span class="pun">}</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">诚然，这是一个非常简单的假设的例子，但我已经写了三重嵌入使用第二种方法循环，这是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非常</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">难以阅读，并为此事写。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">效率。</font></font><code>angular.forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和原生</font></font><code>forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，对于这个问题，都</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这么多</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比正常情况下慢</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环....约</font></font><a href="http://jsperf.com/angular-foreach-vs-native-for-loop/3" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">90％的速度较慢</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，对于大型数据集，最好坚持使用本机</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有中断，继续或返回支持。</font></font><code>continue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上是由“ </font></font><a href="https://github.com/angular/angular.js/issues/263" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意外</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ” </font><font style="vertical-align: inherit;">支持的</font><font style="vertical-align: inherit;">，要在一个</font></font><code>angular.forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的</font></font><code>return;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句中</font><font style="vertical-align: inherit;">继续在</font><font style="vertical-align: inherit;">函数中</font><font style="vertical-align: inherit;">放置一条</font><font style="vertical-align: inherit;">语句，例如</font></font><code>angular.forEach(array, function(item) { if (someConditionIsTrue) return; });</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将使</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">语句在该</font><font style="vertical-align: inherit;">迭代中继续从函数中退出。</font><font style="vertical-align: inherit;">这也是由于本机</font></font><code>forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">既不支持break也不继续</font><font style="vertical-align: inherit;">的事实</font><font style="vertical-align: inherit;">。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我敢肯定，还有其他各种利弊，请随时添加您认为合适的任何内容。</font><font style="vertical-align: inherit;">我认为，最重要的是，如果您需要效率，请坚持使用本机</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环来满足您的循环需求。</font><font style="vertical-align: inherit;">但是，如果您的数据集较小，并且为了交换可读性和可写性而放弃某种效率是可以的，那么一定要丢掉</font></font><code>angular.forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那个坏孩子。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有三种实现方式</font></font><code>foreach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font></font><a href="http://en.wikipedia.org/wiki/JQuery" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的jQuery</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="pun">[</span><span class="lit">3</span><span class="pun">,</span><span class="lit">2</span><span class="pun">];</span><span class="pln">

$</span><span class="pun">(</span><span class="pln">a</span><span class="pun">).</span><span class="pln">each</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(){</span><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">valueOf</span><span class="pun">())});</span><span class="pln"> </span><span class="com">//Method 1</span><span class="pln">
$</span><span class="pun">.</span><span class="pln">each</span><span class="pun">(</span><span class="pln">a</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){</span><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">valueOf</span><span class="pun">())});</span><span class="pln"> </span><span class="com">//Method 2</span><span class="pln">
$</span><span class="pun">.</span><span class="pln">each</span><span class="pun">(</span><span class="pln">$</span><span class="pun">(</span><span class="pln">a</span><span class="pun">),</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){</span><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">valueOf</span><span class="pun">())});</span><span class="pln"> </span><span class="com">//Method 3</span></code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要遍历数组，请使用标准的三部分</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> myArray</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">var</span><span class="pln"> arrayItem </span><span class="pun">=</span><span class="pln"> myArray</span><span class="pun">[</span><span class="pln">i</span><span class="pun">];</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过</font></font><code>myArray.length</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向后</font><font style="vertical-align: inherit;">缓存</font><font style="vertical-align: inherit;">或对其进行迭代</font><font style="vertical-align: inherit;">来获得一些性能优化</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY蛋蛋Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：此答案已过时。</font><font style="vertical-align: inherit;">对于更现代的方法，请查看</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">array上可用的方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">感兴趣的方法可能是：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">地图</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">过滤</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">压缩</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">降低</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每一个</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些</font></font></li>
</ul>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">迭代的标准方式在阵列中</font></font><a href="http://en.wikipedia.org/wiki/JavaScript" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的JavaScript</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是香草</font></font><code>for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-loop：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> length </span><span class="pun">=</span><span class="pln"> arr</span><span class="pun">.</span><span class="pln">length</span><span class="pun">,</span><font></font><span class="pln">
    element </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">null</span><span class="pun">;</span><font></font><span class="pln">
</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> length</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
  element </span><span class="pun">=</span><span class="pln"> arr</span><span class="pun">[</span><span class="pln">i</span><span class="pun">];</span><font></font><span class="pln">
  </span><span class="com">// Do something with element</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是请注意，这种方法仅在数组密集且每个索引都被一个元素占用的情况下才有用。</font><font style="vertical-align: inherit;">如果数组稀疏，则使用此方法会遇到性能问题，因为您将遍历</font><font style="vertical-align: inherit;">数组中</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font><font style="vertical-align: inherit;">存在</font><font style="vertical-align: inherit;">的许多索引</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在这种情况下，</font></font><code>for .. in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-loop可能是一个更好的主意。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您必须使用适当的防护措施来确保仅对数组的所需属性（即数组元素）进行操作，因为</font></font><code>for..in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-loop还将在旧版浏览器中枚举，或者如果其他属性定义为</font></font><code>enumerable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://en.wikipedia.org/wiki/ECMAScript#ECMAScript.2C_5th_Edition" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 5中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，数组原型上将有一个forEach方法，但是旧版浏览器不支持该方法。</font><font style="vertical-align: inherit;">因此，要能够始终如一地使用它，您必须具有一个支持它的环境（例如，</font><font style="vertical-align: inherit;">用于服务器端JavaScript的</font></font><a href="http://en.wikipedia.org/wiki/Node.js" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），或使用“ Polyfill”。</font><font style="vertical-align: inherit;">但是，用于此功能的Polyfill很简单，并且由于它使代码更易于阅读，因此可以很好地包含它。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>If you’re using the <a href="http://jquery.com/" rel="noreferrer" data-bitapp="processed"><strong>jQuery</strong></a> library, you can use <a href="http://api.jquery.com/jQuery.each/" rel="noreferrer" data-bitapp="processed"><strong>jQuery.each</strong></a>:</p>



<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">$</span><span class="pun">.</span><span class="pln">each</span><span class="pun">(</span><span class="pln">yourArray</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">index</span><span class="pun">,</span><span class="pln"> value</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
  </span><span class="com">// do your stuff here</span><font></font><span class="pln">
</span><span class="pun">});</span><font></font>
</code></pre>

<p><strong>EDIT :</strong> </p>

<p>As per question, user want code in javascript instead of jquery so the edit is</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> length </span><span class="pun">=</span><span class="pln"> yourArray</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span><span class="pln">   </span><font></font><span class="pln">
</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">var</span><span class="pln"> i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> length</span><span class="pun">;</span><span class="pln"> i</span><span class="pun">++)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
  </span><span class="com">// Do something with yourArray[i].</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid番长十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些</font></font><a href="http://en.wikipedia.org/wiki/C_%28programming_language%29" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">C</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">风格的语言用于</font></font><code>foreach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遍历枚举。</font><font style="vertical-align: inherit;">在JavaScript中，这是通过</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Statements/for...in" rel="noreferrer" data-bitapp="processed"><code>for..in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环结构</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成的</font><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> index</span><span class="pun">,</span><font></font><span class="pln">
    value</span><span class="pun">;</span><font></font><span class="pln">
</span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="pln">index in obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    value </span><span class="pun">=</span><span class="pln"> obj</span><span class="pun">[</span><span class="pln">index</span><span class="pun">];</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个陷阱。</font></font><code>for..in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将遍历对象的每个可枚举成员，以及其原型上的成员。</font><font style="vertical-align: inherit;">为了避免读取通过对象原型继承的值，只需检查属性是否属于对象：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="pln">i in obj</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">obj</span><span class="pun">.</span><span class="pln">hasOwnProperty</span><span class="pun">(</span><span class="pln">i</span><span class="pun">))</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
        </span><span class="com">//do stuff</span><font></font><span class="pln">
    </span><span class="pun">}</span><font></font><span class="pln">
</span><span class="pun">}</span><font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，</font></font><a href="https://en.wikipedia.org/wiki/ECMAScript#ECMAScript.2C_5th_Edition" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 5</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加了一种</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach" rel="noreferrer" data-bitapp="processed"><code>forEach</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font></font><code>Array.prototype</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以使用回溯</font><font style="vertical-align: inherit;">方法对</font><font style="vertical-align: inherit;">数组进行枚举（polyfill在文档中，因此您仍可以将其用于较旧的浏览器）：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">arr</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">(</span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">val</span><span class="pun">,</span><span class="pln"> index</span><span class="pun">,</span><span class="pln"> theArray</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><font></font><span class="pln">
    </span><span class="com">//do stuff</span><font></font><span class="pln">
</span><span class="pun">});</span><font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要的是要注意，</font></font><code>Array.prototype.forEach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回调返回时不会中断</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><a href="http://en.wikipedia.org/wiki/JQuery" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="http://en.wikipedia.org/wiki/Underscore.js" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Underscore.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供了它们自己的变体，</font></font><code>each</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以提供可以短路的循环。</font></font></p></div>
        </div></div>
    
  </div>
<div>
