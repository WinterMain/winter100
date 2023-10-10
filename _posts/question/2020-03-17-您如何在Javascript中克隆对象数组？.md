---
layout: question
title:  您如何在Javascript中克隆对象数组？
date:   2020-03-17T03:53:55.000Z
description: ...每个对象还引用了同一数组中的其他对象吗？当我第一次想到这个问题时 var clonedNodesArray = nodesArray.clo...
img: 
author: LGO西里
category: question
answer: 18
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...每个对象还引用了同一数组中的其他对象吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我第一次想到这个问题时 </font></font></p>

<pre><code>var clonedNodesArray = nodesArray.clone()
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将存在并搜索有关如何在javascript中克隆对象的信息。</font><font style="vertical-align: inherit;">我确实</font><font style="vertical-align: inherit;">在StackOverflow上</font><font style="vertical-align: inherit;">发现了一个</font></font><a href="https://stackoverflow.com/questions/122102/what-is-the-most-efficent-way-to-clone-a-javascript-object"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（由相同的@JohnResig回答），他指出，使用jQuery，您可以做到</font></font></p>

<pre><code>var clonedNodesArray = jQuery.extend({}, nodesArray);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">克隆对象。</font><font style="vertical-align: inherit;">我尝试了一下，但这只复制了数组中对象的引用。</font><font style="vertical-align: inherit;">所以如果我</font></font></p>

<pre><code>nodesArray[0].value = "red"<font></font>
clonedNodesArray[0].value = "green"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nodeArray [0]和clonedNodesArray [0]的值都将变为“绿色”。</font><font style="vertical-align: inherit;">然后我尝试</font></font></p>

<pre><code>var clonedNodesArray = jQuery.extend(true, {}, nodesArray);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它深深复制了一个对象，但是我</font><font style="vertical-align: inherit;">分别从Firebug和Opera Dragonfly </font><font style="vertical-align: inherit;">得到了“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">太多的递归</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”和“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制堆栈溢出</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”消息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你会怎么做？</font><font style="vertical-align: inherit;">这是什至不应该做的事情吗？</font><font style="vertical-align: inherit;">有没有一种可重用的方式来做到这一点在Javascript中？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProJinJin</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>If you want to implement deep clone use JSON.parse(JSON.stringify(your {} or []))</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const myObj ={<font></font>
    a:1,<font></font>
    b:2,<font></font>
    b:3<font></font>
}<font></font>
<font></font>
const deepClone=JSON.parse(JSON.stringify(myObj));<font></font>
deepClone.a =12;<font></font>
console.log("deepClone-----"+myObj.a);<font></font>
const withOutDeepClone=myObj;<font></font>
withOutDeepClone.a =12;<font></font>
console.log("withOutDeepClone----"+myObj.a);</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐卡卡西卡卡西</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>Depending if you have Underscore or Babel here is a Benchmark of the different way of deep cloning an array. </p>

<p><a href="https://jsperf.com/object-rest-spread-vs-clone/2" rel="nofollow noreferrer">https://jsperf.com/object-rest-spread-vs-clone/2</a></p>

<p>Look like babel is the fastest.</p>

<pre><code>var x = babel({}, obj)
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro小宇宙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>with jQuery:</p>

<pre><code>var target= [];<font></font>
$.each(source, function() {target.push( $.extend({},this));});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>Some elegant ways for deep cloning in javascript</p>

<p><a href="https://mootools.net/core/docs/1.6.0/Types/Object" rel="nofollow noreferrer">https://mootools.net/core/docs/1.6.0/Types/Object</a></p>

<p><a href="https://scotch.io/bar-talk/copying-objects-in-javascript" rel="nofollow noreferrer">https://scotch.io/bar-talk/copying-objects-in-javascript</a></p>

<p>1) A vanilla Javascript method for cloning objects</p>

<p>2) A clever exploit of the JSON library to deep-clone objects</p>

<p>3) Using jQuery’s $.extend() function</p>

<p>4) Using Mootools’ clone() function to clone objects</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan猿</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>I use the new ECMAScript 6 <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" rel="nofollow noreferrer">Object.assign</a> method :</p>

<pre><code>let oldObject = [1,3,5,"test"];<font></font>
let newObject = Object.assign({}, oldObject);<font></font>
</code></pre>

<p>the first argument of this method is the array to be update,
we pass an empty object because we want to have a new object.</p>

<p>we can also use this syntax, which is the same but shorter :</p>

<pre><code>let newObject = [...oldObject];
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>In JavaScript, array and object copy change the origin values, so Deep copy is the solution for this.</p>

<p><strong>A deep copy means actually creating a new array and copying over the values, since whatever happens to it will never affect the origin one.</strong></p>

<p><code>JSON.parse</code> and <code>JSON.stringify</code> is the best and simple way to Deep copy. The <code>JSON.stringify()</code> method converts a JavaScript value to a JSON string.The <code>JSON.parse()</code> method parses a JSON string, constructing the JavaScript value or object described by the string.</p>

<p><strong>//Deep Clone</strong></p>

<pre><code>let a = [{ x:{z:1} , y: 2}];<font></font>
let b = JSON.parse(JSON.stringify(a));<font></font>
b[0].x.z=0<font></font>
<font></font>
console.log(JSON.stringify(a)); //[{"x":{"z":1},"y":2}]<font></font>
console.log(JSON.stringify(b)); // [{"x":{"z":0},"y":2}]<font></font>
</code></pre>

<p>For more details: <a href="https://medium.com/@gamshan001/javascript-deep-copy-for-array-and-object-97e3d4bc401a" rel="nofollow noreferrer">Read Here</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙Green</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>I was pretty frustrated by this problem. Apparently the problem arises when you send in a generic Array to the $.extend method. So, to fix it, I added a little check, and it works perfectly with generic arrays, jQuery arrays, and any objects.</p>

<pre><code>jQuery.extend({<font></font>
    deepclone: function(objThing) {<font></font>
        // return jQuery.extend(true, {}, objThing);<font></font>
        /// Fix for arrays, without this, arrays passed in are returned as OBJECTS! WTF?!?!<font></font>
        if ( jQuery.isArray(objThing) ) {<font></font>
            return jQuery.makeArray( jQuery.deepclone($(objThing)) );<font></font>
        }<font></font>
        return jQuery.extend(true, {}, objThing);<font></font>
    },<font></font>
});<font></font>
</code></pre>

<p>Invoke using:</p>

<pre><code>var arrNewArrayClone = jQuery.deepclone(arrOriginalArray);<font></font>
// Or more simply/commonly<font></font>
var arrNewArrayClone = $.deepclone(arrOriginalArray);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗小哥</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>Array.slice can be used to copy an array or part of an array..
<a href="http://www.devguru.com/Technologies/Ecmascript/Quickref/Slice.html" rel="nofollow noreferrer">http://www.devguru.com/Technologies/Ecmascript/Quickref/Slice.html</a>
This would work with strings and numbers .. - changing a string in one array would not affect the other - but objects are still just copied by reference so changes to referenced objects in one array would have an affect on the other array.</p>

<p>Here is an example of a JavaScript undo manager that could be useful for this :<a href="http://www.ridgway.co.za/archive/2007/11/07/simple-javascript-undo-manager-for-dtos.aspx" rel="nofollow noreferrer">http://www.ridgway.co.za/archive/2007/11/07/simple-javascript-undo-manager-for-dtos.aspx</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天村村</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>My approach: </p>

<pre><code>var temp = { arr : originalArray };<font></font>
var obj = $.extend(true, {}, temp);<font></font>
return obj.arr;<font></font>
</code></pre>

<p>gives me a nice, clean, deep clone of the original array - with none of the objects referenced back to the original :-)</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">启人Green</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p>JQuery extend is working fine, just you need to specify that you are cloning an array rather than an object (<strong>note the [] instead of {} as parameter to the extend method</strong>):</p>

<pre><code>var clonedNodesArray = jQuery.extend([], nodesArray);
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙小小</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Map</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将从旧的数组创建新数组（不引用旧的数组），然后在地图内部创建新对象并遍历</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（键），并将旧Array对象中的值分配给新对象的coresponding属性。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将创建完全相同的对象数组。</font></font></p>

<pre><code>let newArray = oldArray.map(a =&gt; {<font></font>
               let newObject = {};<font></font>
               Object.keys(a).forEach(propertyKey =&gt; {<font></font>
                    newObject[propertyKey] = a[propertyKey];<font></font>
               });<font></font>
               return newObject ;<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖番长</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><pre><code>$.evalJSON($.toJSON(origArray));
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva伽罗</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用：</font></font></p>

<pre><code>var clonedArray = $.map(originalArray, function (obj) {<font></font>
                      return $.extend({}, obj);<font></font>
                  });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要数组中对象的深层副本，请执行以下操作：</font></font></p>

<pre><code>var clonedArray = $.map(originalArray, function (obj) {<font></font>
                      return $.extend(true, {}, obj);<font></font>
                  });<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞小胖</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" rel="noreferrer"><font style="vertical-align: inherit;">Object.assign</font></a><font style="vertical-align: inherit;">解决了对象数组的克隆问题</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<pre><code>const newArray = myArray.map(a =&gt; Object.assign({}, a));
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至更短的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传播语法</font></font></a></p>

<pre><code>const newArray = myArray.map(a =&gt; ({...a}));
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid神无</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要的只是浅表副本，那么一个真正简单的方法是：</font></font></p>

<pre><code>new_array = old_array.slice(0);
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony伽罗</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行此克隆的最佳方法和最新方法如​​下：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6传播算子。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是最简单的示例：</font></font></p>

<pre><code>var clonedObjArray = [...oldObjArray];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，我们将数组分散为各个值，然后使用[]运算符将其放入新数组中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个更长的示例，显示了其不同的工作方式： </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>let objArray = [ {a:1} , {b:2} ];<font></font>
<font></font>
let refArray = objArray; // this will just point to the objArray<font></font>
let clonedArray = [...objArray]; // will clone the array<font></font>
<font></font>
console.log( "before:" );<font></font>
console.log( "obj array" , objArray );<font></font>
console.log( "ref array" , refArray );<font></font>
console.log( "cloned array" , clonedArray );<font></font>
<font></font>
objArray[0] = {c:3};<font></font>
<font></font>
console.log( "after:" );<font></font>
console.log( "obj array" , objArray ); // [ {c:3} , {b:2} ]<font></font>
console.log( "ref array" , refArray ); // [ {c:3} , {b:2} ]<font></font>
console.log( "cloned array" , clonedArray ); // [ {a:1} , {b:2} ]</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry古一</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只要您的对象包含JSON可序列化的内容（没有函数，no </font></font><code>Number.POSITIVE_INFINITY</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等），就不需要任何循环来克隆数组或对象。</font><font style="vertical-align: inherit;">这是纯香草的单线解决方案。</font></font></p>

<pre><code>var clonedArray = JSON.parse(JSON.stringify(nodesArray))
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总结下面的评论，这种方法的主要优点是它还可以克隆数组的内容，而不仅仅是数组本身。</font><font style="vertical-align: inherit;">主要缺点是只能处理JSON可序列化内容的局限性以及它的性能（这比</font></font><code>slice</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于方法</font><font style="vertical-align: inherit;">的性能差很多</font><font style="vertical-align: inherit;">）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅前端斯丁</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浅表副本的问题是未克隆所有对象。</font><font style="vertical-align: inherit;">尽管每个对象的引用在每个数组中都是唯一的，但是一旦最终抓住它，您将像以前一样处理同一对象。</font><font style="vertical-align: inherit;">克隆它的方式没有错...使用Array.slice（）会产生相同的结果。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的深层副本有问题的原因是因为您最终得到了循环对象引用。</font><font style="vertical-align: inherit;">Deep将尽可能深入，如果您有一个圆圈，它将无限循环直到浏览器晕倒为止。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果数据结构不能表示为有向无环图，那么我不确定您是否能够找到用于深度克隆的通用方法。</font><font style="vertical-align: inherit;">循环图提供了许多棘手的极端情况，由于这不是常见的操作，我怀疑有人编写了完整的解决方案（如果可能的话-可能不是！但是我现在没有时间尝试编写严格的证明。）。</font><font style="vertical-align: inherit;">在</font></font><a href="http://www.greywyvern.com/?post=363" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上，我</font><a href="http://www.greywyvern.com/?post=363" rel="noreferrer"><font style="vertical-align: inherit;">对此</font></a><font style="vertical-align: inherit;">问题发表了一些很好的评论</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要带有循环引用的对象数组的深层副本，我相信您将必须编写自己的方法来处理您的专用数据结构，例如多遍克隆：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在第一轮中，克隆所有不引用数组中其他对象的对象。</font><font style="vertical-align: inherit;">跟踪每个对象的起源。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在第二轮中，将对象链接在一起。  </font></font></li>
</ol></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
