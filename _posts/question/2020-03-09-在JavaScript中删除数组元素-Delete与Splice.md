---
layout: question
title:  在JavaScript中删除数组元素-Delete与Splice
date:   2020-03-09T13:37:42.000Z
description: 是什么使用之间的差值的delete算子阵列元件上，而不是使用该Array.splice方法？例如：myArray = \['a', 'b', 'c'...
img: 
author: L神无Mandy
category: question
answer: 11
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是什么使用之间的差值</font></font><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/delete" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>delete</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">算子</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阵列元件上，而不是使用</font></font><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/splice" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>Array.splice</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>myArray = ['a', 'b', 'c', 'd'];<font></font>
<font></font>
delete myArray[1];<font></font>
//  or<font></font>
myArray.splice (1, 1);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我可以像删除对象一样删除数组元素，为什么还要使用splice方法呢？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第281篇《在JavaScript中删除数组元素-Delete与Splice》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>IndexOf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还接受引用类型。</font><font style="vertical-align: inherit;">假设以下情况：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var arr = [{item: 1}, {item: 2}, {item: 3}];<font></font>
var found = find(2, 3); //pseudo code: will return [{item: 2}, {item:3}]<font></font>
var l = found.length;<font></font>
<font></font>
while(l--) {<font></font>
   var index = arr.indexOf(found[l])<font></font>
      arr.splice(index, 1);<font></font>
   }<font></font>
   <font></font>
console.log(arr.length); //1</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不同的是：</font></font></p>

<pre><code>var item2 = findUnique(2); //will return {item: 2}<font></font>
var l = arr.length;<font></font>
var found = false;<font></font>
  while(!found &amp;&amp; l--) {<font></font>
  found = arr[l] === item2;<font></font>
}<font></font>
<font></font>
console.log(l, arr[l]);// l is index, arr[l] is the item you look for<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅JinJin十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">delete</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：delete将删除对象属性，但不会为数组重新索引或更新其长度。</font><font style="vertical-align: inherit;">这使得它看起来好像是未定义的：</font></font></p>
  
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">splice</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：实际上删除元素，为数组重新索引，并更改其长度。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从最后删除元素        </font></font></p>

<pre><code>arrName.pop();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先删除元素   </font></font></p>

<pre><code>arrName.shift();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从中间删除</font></font></p>

<pre><code>arrName.splice(starting index,number of element you wnt to delete);<font></font>
<font></font>
Ex: arrName.splice(1,1);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从最后删除一个元素</font></font></p>

<pre><code>arrName.splice(-1);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用数组索引号删除</font></font></p>

<pre><code> delete arrName[1];
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前有两种方法可以做到这一点 </font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用splice（）</font></font></p>

<p><code>arrayObject.splice(index, 1);</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用删除</font></font></p>

<p><code>delete arrayObject[index];</code></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我总是建议对数组对象使用拼接，对对象属性使用删除，因为删除不会更新数组长度。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他人已经比较正常</font></font><code>delete</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>splice</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与另一个有趣的比较：</font></font><code>delete</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被删除的数组项</font><font style="vertical-align: inherit;">相比，</font><font style="vertical-align: inherit;">删除的数组项使用的内存更少</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">;</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，此代码不会完成：</font></font></p>

<pre><code>let y = 1;<font></font>
let ary = [];<font></font>
console.log("Fatal Error Coming Soon");<font></font>
while (y &lt; 4294967295)<font></font>
{<font></font>
    ary.push(y);<font></font>
    ary[y] = undefined;<font></font>
    y += 1;<font></font>
}<font></font>
console(ary.length);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它产生此错误：</font></font></p>

<pre><code>FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory.
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您可以看到</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上占用了堆内存。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果您还是</font></font><code>delete</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ary项目（而不是仅将其设置为</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），则代码将慢慢完成：</font></font></p>

<pre><code>let x = 1;<font></font>
let ary = [];<font></font>
console.log("This will take a while, but it will eventually finish successfully.");<font></font>
while (x &lt; 4294967295)<font></font>
{<font></font>
    ary.push(x);<font></font>
    ary[x] = undefined;<font></font>
    delete ary[x];<font></font>
    x += 1;<font></font>
}<font></font>
console.log(`Success, array-length: ${ary.length}.`);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些是极端的例子，但它们指出了</font></font><code>delete</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我从未见过有人提及的地方。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，假设我们下面有这个数组：</font></font></p>

<pre><code>const arr = [1, 2, 3, 4, 5];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们先删除：</font></font></p>

<pre><code>delete arr[1];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果如下：</font></font></p>

<pre><code>[1, empty, 3, 4, 5];
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空！</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们得到它：</font></font></p>

<pre><code>arr[1]; //undefined
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此意味着仅删除了该值，并且现在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未定义</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该值</font><font style="vertical-align: inherit;">，因此长度是相同的，并且它将返回</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">true</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们重置数组，这次用拼接完成它：</font></font></p>

<pre><code>arr.splice(1, 1);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是这次的结果：</font></font></p>

<pre><code>[1, 3, 4, 5];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您所见，数组长度已更改，</font><font style="vertical-align: inherit;">现在</font></font><code>arr[1]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且这将在数组中返回已删除的项目，</font></font><code>[3]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下...</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProStafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么不只是过滤？</font><font style="vertical-align: inherit;">我认为这是在js中考虑数组的最清晰方法。</font></font></p>

<pre><code>myArray = myArray.filter(function(item){<font></font>
    return item.anProperty != whoShouldBeDeleted<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要迭代大数组并有选择地删除元素，则每次删除都调用splice（）会很昂贵，因为splice（）每次都必须重新索引后续元素。</font><font style="vertical-align: inherit;">因为数组在Javascript中是关联的，所以删除单个元素然后再重新索引数组会更有效。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过构建一个新的数组来做到这一点。</font><font style="vertical-align: inherit;">例如</font></font></p>

<pre><code>function reindexArray( array )<font></font>
{<font></font>
       var result = [];<font></font>
        for( var key in array )<font></font>
                result.push( array[key] );<font></font>
        return result;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我认为您不能修改原始数组中的键值，这样做会更有效-看起来您可能必须创建一个新数组。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，您不需要检查“未定义”条目，因为它们实际上并不存在，并且for循环不会返回它们。</font><font style="vertical-align: inherit;">这是阵列打印的人为因素，将其显示为未定义。</font><font style="vertical-align: inherit;">它们似乎不存在于内存中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您可以使用诸如slice（）之类的更快的方法，但是它不会重新索引，那将是很好的。</font><font style="vertical-align: inherit;">有人知道更好的方法吗？</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，您可能可以按以下方式进行，这可能会更高效，在性能方面：</font></font></p>

<pre><code>reindexArray : function( array )<font></font>
{<font></font>
    var index = 0;                          // The index where the element should be<font></font>
    for( var key in array )                 // Iterate the array<font></font>
    {<font></font>
        if( parseInt( key ) !== index )     // If the element is out of sequence<font></font>
        {<font></font>
            array[index] = array[key];      // Move it to the correct, earlier position in the array<font></font>
            ++index;                        // Update the index<font></font>
        }<font></font>
    }<font></font>
<font></font>
    array.splice( index );  // Remove any remaining elements (These will be duplicates of earlier items)<font></font>
},<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除拼接</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您从数组中删除项目时</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var arr = [1,2,3,4]; delete arr[2]; //result [1, 2, 3:, 4]<font></font>
console.log(arr)</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当你拼接时</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var arr = [1,2,3,4]; arr.splice(1,1); //result [1, 3, 4]<font></font>
console.log(arr);</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则</font></font></strong><font style="vertical-align: inherit;"><strong><font style="vertical-align: inherit;">删除</font></strong><font style="vertical-align: inherit;">该</font><strong><font style="vertical-align: inherit;">元素，</font></strong><font style="vertical-align: inherit;">但</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">索引保持为空</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">剪接</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素被删除而</font><strong><font style="vertical-align: inherit;">其余元素</font></strong><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">索引相应减少的情况下</font></font></strong></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanStafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值得一提的是，拼接仅适用于数组。</font><font style="vertical-align: inherit;">（不能依赖对象属性遵循一致的顺序。）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要从对象中删除键值对，删除实际上是您想要的： </font></font></p>

<pre><code>delete myObj.propName;     // , or:<font></font>
delete myObj["propName"];  // Equivalent.<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Array.remove（）方法</font></font></h1>

<p><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery的创建者</font><strong><font style="vertical-align: inherit;">John Resig</font></strong><font style="vertical-align: inherit;">创建了一个非常方便的</font></font><code>Array.remove</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法，我一直在项目中使用它。</font></font></p>

<pre><code>// Array Remove - By John Resig (MIT Licensed)<font></font>
Array.prototype.remove = function(from, to) {<font></font>
  var rest = this.slice((to || from) + 1 || this.length);<font></font>
  this.length = from &lt; 0 ? this.length + from : from;<font></font>
  return this.push.apply(this, rest);<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一些如何使用它的示例：</font></font></p>

<pre><code>// Remove the second item from the array<font></font>
array.remove(1);<font></font>
// Remove the second-to-last item from the array<font></font>
array.remove(-2);<font></font>
// Remove the second and third items from the array<font></font>
array.remove(1,2);<font></font>
// Remove the last and second-to-last items from the array<font></font>
array.remove(-2,-1);<font></font>
</code></pre>

<p><a href="http://ejohn.org/blog/javascript-array-remove/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">约翰的网站</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L神无Mandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Operators/Special_Operators/delete_Operator" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Core JavaScript 1.5参考&gt;运算符&gt;特殊运算符&gt;删除运算符</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除数组元素时，数组长度不受影响。</font><font style="vertical-align: inherit;">例如，如果删除a [3]，则a [4]仍为a [4]，而a [3]未定义。</font><font style="vertical-align: inherit;">即使删除数组的最后一个元素（删除a [a.length-1]），该设置仍然成立。</font></font></p>
</blockquote></div>
        </div></div>
    {% endraw %}
  </div>
<div>
