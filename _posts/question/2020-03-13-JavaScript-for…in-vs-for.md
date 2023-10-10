---
layout: question
title:  JavaScript for…in vs for
date:   2020-03-13T08:47:03.000Z
description: 您是否认为for ... in和for循环有很大的不同？您更喜欢使用哪种“用于”，为什么？假设我们有一个关联数组的数组：var myArray =...
img: 
author: 阿飞Harry小胖
category: question
answer: 19
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否认为for ... in和for循环有很大的不同？</font><font style="vertical-align: inherit;">您更喜欢使用哪种“用于”，为什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我们有一个关联数组的数组：</font></font></p>

<pre><code>var myArray = [{'key': 'value'}, {'key': 'value1'}];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样我们就可以迭代：</font></font></p>

<pre><code>for (var i = 0; i &lt; myArray.length; i++)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和：</font></font></p>

<pre><code>for (var i in myArray)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我没什么大不同。</font><font style="vertical-align: inherit;">有性能问题吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1440篇《JavaScript for…in vs for》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅猿</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">for in语句允许遍历对象的所有属性的名称。</font><font style="vertical-align: inherit;">不幸的是，它还会遍历通过原型链继承的所有成员。</font><font style="vertical-align: inherit;">当关注数据成员时，这不利于提供方法功能。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom阳光达蒙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者之间有重要区别。</font><font style="vertical-align: inherit;">for-in遍历对象的属性，因此当case是数组时，它将不仅遍历其元素，而且遍历其具有的“ remove”功能。</font></font></p>

<pre><code>for (var i = 0; i &lt; myArray.length; i++) { <font></font>
    console.log(i) <font></font>
}<font></font>
<font></font>
//Output<font></font>
0<font></font>
1<font></font>
<font></font>
for (var i in myArray) { <font></font>
    console.log(i) <font></font>
} <font></font>
<font></font>
// Output<font></font>
0 <font></font>
1 <font></font>
remove<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将for-in与一起使用</font></font><code>if(myArray.hasOwnProperty(i))</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">尽管如此，当遍历数组时，我总是更喜欢避免这种情况，而只使用for（;;）语句。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里伽罗</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管它们都非常相似，但还是有细微的差别：</font></font></p>

<pre><code>var array = ["a", "b", "c"];<font></font>
array["abc"] = 123;<font></font>
console.log("Standard for loop:");<font></font>
for (var index = 0; index &lt; array.length; index++)<font></font>
{<font></font>
  console.log(" array[" + index + "] = " + array[index]); //Standard for loop<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，输出为：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环标准：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组[0] = A</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阵列[1] = B</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组[2] = C</font></font></p>

<pre><code>console.log("For-in loop:");<font></font>
for (var key in array)<font></font>
{<font></font>
  console.log(" array[" + key + "] = " + array[key]); //For-in loop output<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而在这种情况下，输出为：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转入圈：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阵列[1] = B</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组[2] = C</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阵列[10] = D</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组[ABC] = 123</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim老丝L</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Array（）。forEach循环利用并行性</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里凯</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据jsperf，较短和最佳的代码是</font></font></p>

<pre><code>keys  = Object.keys(obj);<font></font>
for (var i = keys.length; i--;){<font></font>
   value = obj[keys[i]];// or other action<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚番长</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">for（;;）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：[20,55,33]</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">for..in</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：{x：20，y：55：z：33}</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门LEY</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经看到使用对象，原型和数组的“ for each”问题</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的理解是for for是对象的属性，而不是数组的属性</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西猿</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您真的想加速代码，那该怎么办？</font></font></p>

<pre><code>for( var i=0,j=null; j=array[i++]; foo(j) );
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这有点在for语句中包含while逻辑，并且冗余程度较低。</font><font style="vertical-align: inherit;">Firefox也具有Array.forEach和Array.filter</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan猴子</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组上的for in循环与Prototype不兼容。</font><font style="vertical-align: inherit;">如果您认为将来可能需要使用该库，则最好坚持使用for循环。</font></font></p>

<p><a href="http://www.prototypejs.org/api/array" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.prototypejs.org/api/array</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端猴子</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">小心！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如果您有多个脚本标签，并且正在标签属性中搜索信息，则必须将.length属性与for循环一起使用，因为它不是一个简单的数组，而是一个HTMLCollection对象。</font></font></p>

<p><a href="https://developer.mozilla.org/en/DOM/HTMLCollection" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/en/DOM/HTMLCollection</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果将foreach语句用于（list中的var i），它将在大多数浏览器中返回HTMLCollection的属性和方法！</font></font></p>

<pre><code>var scriptTags = document.getElementsByTagName("script");<font></font>
<font></font>
for(var i = 0; i &lt; scriptTags.length; i++)<font></font>
alert(i); // Will print all your elements index (you can get src attribute value using scriptTags[i].attributes[0].value)<font></font>
<font></font>
for(var i in scriptTags)<font></font>
alert(i); // Will print "length", "item" and "namedItem" in addition to your elements!<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使getElementsByTagName应该返回NodeList，大多数浏览器也会返回HTMLCollection：</font><a href="https://developer.mozilla.org/en/DOM/document.getElementsByTagName" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://developer.mozilla.org/en/DOM/document.getElementsByTagName" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/en/DOM/document.getElementsByTagName</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Harry</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会根据想要引用项目的方式使用不同的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果只需要当前项目，请使用foreach。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果需要索引器进行相对比较，则用于。</font><font style="vertical-align: inherit;">（即与上一个/下一个项目相比如何？）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我从未注意到性能差异。</font><font style="vertical-align: inherit;">我会等到出现性能问题后再担心它。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Green</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">for（myArray中的var i），</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以循环对象，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将包含键名，并且可以通过</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">myArray [i]</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">访问该属性</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">另外，您将添加到对象中的任何方法也将包含在循环中，即，如果您使用任何外部框架（如jQuery或原型），或者如果直接将方法添加到对象原型，则</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将指向这些方法。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天前端</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用forEach跳过原型链</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是</font></font><a href="https://stackoverflow.com/a/8826575/648802"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上述@nailer答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的快速附录</font><font style="vertical-align: inherit;">，将forEach与Object.keys一起使用意味着您可以避免在原型链上进行迭代，而不必使用hasOwnProperty。</font></font></p>

<pre><code>var Base = function () {<font></font>
    this.coming = "hey";<font></font>
};<font></font>
<font></font>
var Sub = function () {<font></font>
    this.leaving = "bye";<font></font>
};<font></font>
<font></font>
Sub.prototype = new Base();<font></font>
var tst = new Sub();<font></font>
<font></font>
for (var i in tst) {<font></font>
    console.log(tst.hasOwnProperty(i) + i + tst[i]);<font></font>
}<font></font>
<font></font>
Object.keys(tst).forEach(function (val) {<font></font>
    console.log(val + tst[val]);<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam神乐番长</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Douglas Crockford建议在</font></font><a href="http://oreilly.com/catalog/9780596517748/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript：The Good Parts</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（第24页）中避免使用该</font></font><code>for in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句。</font></font></p>

<p>If you use <code>for in</code> to loop over property names in an object, the results are not ordered. Worse: You might get unexpected results; it includes members inherited from the prototype chain and the name of methods.</p>

<p>Everything but the properties can be filtered out with <code>.hasOwnProperty</code>. This code sample does what you probably wanted originally:</p>

<pre><code>for (var name in obj) {<font></font>
    if (Object.prototype.hasOwnProperty.call(obj, name)) {<font></font>
        // DO STUFF<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小小胖</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组稀疏时，两者不相同。</font></font></p>

<pre><code>var array = [0, 1, 2, , , 5];<font></font>
<font></font>
for (var k in array) {<font></font>
  // Not guaranteed by the language spec to iterate in order.<font></font>
  alert(k);  // Outputs 0, 1, 2, 5.<font></font>
  // Behavior when loop body adds to the array is unclear.<font></font>
}<font></font>
<font></font>
for (var i = 0; i &lt; array.length; ++i) {<font></font>
  // Iterates in order.<font></font>
  // i is a number, not a string.<font></font>
  alert(i);  // Outputs 0, 1, 2, 3, 4, 5<font></font>
  // Behavior when loop body modifies array is clearer.<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom小小蛋蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有主要浏览器的</font><strong><font style="vertical-align: inherit;">2012</font></strong><font style="vertical-align: inherit;">当前版本的</font><strong><font style="vertical-align: inherit;">更新答案</font></strong><font style="vertical-align: inherit;"> -Chrome，Firefox，IE9，Safari和Opera支持ES5的本机array.forEach。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非您有某些本机支持IE8的理由（请记住可以为这些用户提供ES5-shim或Chrome框架，这将提供适当的JS环境），否则使用该语言的适当语法会更干净：</font></font></p>

<pre><code>myArray.forEach(function(item, index) {<font></font>
    console.log(item, index);<font></font>
});<font></font>
</code></pre>

<p><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关array.forEach（）的完整文档，请访问MDN。</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid梅</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，本机Array.forEach方法现已</font></font><a href="http://kangax.github.com/es5-compat-table/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">得到广泛支持</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L神无Mandy</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该选择应基于对哪种习语最了解。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下方法迭代数组：</font></font></p>

<pre><code>for (var i = 0; i &lt; a.length; i++)<font></font>
   //do stuff with a[i]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下方法来迭代用作关联数组的对象：</font></font></p>

<pre><code>for (var key in o)<font></font>
  //do stuff with o[key]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非您有惊天动地的理由，否则请遵循既定的使用模式。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GIZO-俊宏</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据使用哪种循环以及使用哪种浏览器，性能会有差异。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>for (var i = myArray.length-1; i &gt;= 0; i--)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些浏览器中的速度几乎是：</font></font></p>

<pre><code>for (var i = 0; i &lt; myArray.length; i++)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，除非您的数组很大，否则您必须不断地循环它们，否则它们的速度都足够快。</font><font style="vertical-align: inherit;">我严重怀疑数组循环是否会成为您项目中的瓶颈（或任何其他与此项目有关的项目）</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
