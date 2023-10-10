---
layout: question
title:  从Javascript数组中删除空元素
date:   2020-03-09T16:52:50.000Z
description: 如何从JavaScript中的数组中删除空元素？ 有没有简单的方法，还是我需要遍历它并手动将其删除？...
img: 
author: 流云
category: question
answer: 17
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何从JavaScript中的数组中删除空元素？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有简单的方法，还是我需要遍历它并手动将其删除？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyMandy</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>Filtering out invalid entries with a regular expression</p>

<pre><code>array = array.filter(/\w/);<font></font>
filter + regexp<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaPro</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>var data= { <font></font>
    myAction: function(array){<font></font>
        return array.filter(function(el){<font></font>
           return (el !== (undefined || null || ''));<font></font>
        }).join(" ");<font></font>
    }<font></font>
}; <font></font>
var string = data.myAction(["I", "am","", "working", "", "on","", "nodejs", "" ]);<font></font>
console.log(string);<font></font>
</code></pre>

<p>Output: </p>

<blockquote>
  <p>I am working on nodejs</p>
</blockquote>

<p>It will remove empty element from array and display other element.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi神乐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>When using the highest voted answer above, first example, i was getting individual characters for string lengths greater than 1. Below is my solution for that problem.</p>

<pre><code>var stringObject = ["", "some string yay", "", "", "Other string yay"];<font></font>
stringObject = stringObject.filter(function(n){ return n.length &gt; 0});<font></font>
</code></pre>

<p>Instead of not returning if undefined, we return if length is greater than 0. Hope that helps somebody out there.</p>

<p><strong>Returns</strong></p>

<pre><code>["some string yay", "Other string yay"]
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙神无伽罗</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>var data = [null, 1,2,3];<font></font>
var r = data.filter(function(i){ return i != null; })<font></font>
</code></pre>

<hr>

<pre><code>console.log(r) 
</code></pre>

<blockquote>
  <p>[1,2,3]</p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Harry米亚</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p>You should use filter to get&nbsp;array without empty elements. Example on ES6 </p>

<pre><code>const array = [1, 32, 2, undefined, 3];<font></font>
const newArray = array.filter(arr =&gt; arr);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near泡芙</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><strong>What about this(ES6) : To remove Falsy value from an array.</strong></p>

<pre><code>var arr = [0,1,2,"test","false",false,true,null,3,4,undefined,5,"end"];<font></font>
<font></font>
arr.filter((v) =&gt; (!!(v)==true));<font></font>
<font></font>
//output:<font></font>
<font></font>
//[1, 2, "test", "false", true, 3, 4, 5, "end"]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐小小猪猪</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与尝试像建议的那样通过循环和拼接相比，您可能会发现更容易遍历数组并从要保留在数组中的项目中构建新的数组，这是因为在循环时修改了数组的长度过度会带来问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以执行以下操作：</font></font></p>

<pre><code>function removeFalsyElementsFromArray(someArray) {<font></font>
    var newArray = [];<font></font>
    for(var index = 0; index &lt; someArray.length; index++) {<font></font>
        if(someArray[index]) {<font></font>
            newArray.push(someArray[index]);<font></font>
        }<font></font>
    }<font></font>
    return newArray;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，这是一个更通用的解决方案：</font></font></p>

<pre><code>function removeElementsFromArray(someArray, filter) {<font></font>
    var newArray = [];<font></font>
    for(var index = 0; index &lt; someArray.length; index++) {<font></font>
        if(filter(someArray[index]) == false) {<font></font>
            newArray.push(someArray[index]);<font></font>
        }<font></font>
    }<font></font>
    return newArray;<font></font>
}<font></font>
<font></font>
// then provide one or more filter functions that will <font></font>
// filter out the elements based on some condition:<font></font>
function isNullOrUndefined(item) {<font></font>
    return (item == null || typeof(item) == "undefined");<font></font>
}<font></font>
<font></font>
// then call the function like this:<font></font>
var myArray = [1,2,,3,,3,,,,,,4,,4,,5,,6,,,,];<font></font>
var results = removeElementsFromArray(myArray, isNullOrUndefined);<font></font>
<font></font>
// results == [1,2,3,3,4,4,5,6]<font></font>
</code></pre>

<p>You get the idea - you could then have other types of filter functions. Probably more than you need, but I was feeling generous... ;)</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿小胖</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用库是一种选择，我知道underscore.js具有一个称为compact（）的函数</font></font><a href="http://documentcloud.github.com/underscore/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://documentcloud.github.com/underscore/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它还具有其他一些与数组和集合有关的有用函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是他们的文档摘录：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">_.compact（array）  </font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回删除了所有伪造值的数组的副本。</font><font style="vertical-align: inherit;">在JavaScript中，false，null，0，“”，undefined和NaN都是虚假的。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">_.compact（[0，1，false，2，''，3]）;</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">=&gt; [1、2、3]</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云斯丁GO</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><pre><code>ES6: let newArr = arr.filter(e =&gt; e);
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@Alnitak</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您添加一些额外的代码，Array.filter实际上可以在所有浏览器上运行。</font><font style="vertical-align: inherit;">见下文。</font></font></p>

<pre><code>var array = ["","one",0,"",null,0,1,2,4,"two"];<font></font>
<font></font>
function isempty(x){<font></font>
if(x!=="")<font></font>
    return true;<font></font>
}<font></font>
var res = array.filter(isempty);<font></font>
document.writeln(res.toJSONString());<font></font>
// gives: ["one",0,null,0,1,2,4,"two"]  <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是您需要为IE添加的代码，但是imo过滤器和函数式编程值得。</font></font></p>

<pre><code>//This prototype is provided by the Mozilla foundation and<font></font>
//is distributed under the MIT license.<font></font>
//http://www.ibiblio.org/pub/Linux/LICENSES/mit.license<font></font>
<font></font>
if (!Array.prototype.filter)<font></font>
{<font></font>
  Array.prototype.filter = function(fun /*, thisp*/)<font></font>
  {<font></font>
    var len = this.length;<font></font>
    if (typeof fun != "function")<font></font>
      throw new TypeError();<font></font>
<font></font>
    var res = new Array();<font></font>
    var thisp = arguments[1];<font></font>
    for (var i = 0; i &lt; len; i++)<font></font>
    {<font></font>
      if (i in this)<font></font>
      {<font></font>
        var val = this[i]; // in case fun mutates this<font></font>
        if (fun.call(thisp, val, i, this))<font></font>
          res.push(val);<font></font>
      }<font></font>
    }<font></font>
<font></font>
    return res;<font></font>
  };<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Tony古一</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于没有人提及它，并且大多数人的项目中都包含下划线，因此您也可以使用</font></font><code>_.without(array, *values);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>_.without(["text", "string", null, null, null, "text"], null)<font></font>
// =&gt; ["text", "string", "text"]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿良</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是</font></font><code>ES6</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">较新的版本方法，假设数组如下：</font></font></p>

<pre><code> const arr = [1,2,3,undefined,4,5,6,undefined,7,8,undefined,undefined,0,9];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单方法：</font></font></p>

<pre><code> const clearArray = arr.filter( i =&gt; i );
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near小哥西门</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做到这一点的干净方法。</font></font></p>

<pre><code>var arr = [0,1,2,"Thomas","false",false,true,null,3,4,undefined,5,"end"];<font></font>
arr = arr.filter(Boolean);<font></font>
// [1, 2, "Thomas", "false", true, 3, 4, 5, "end"]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan卡卡西</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您拥有Javascript 1.6或更高版本，则可以使用</font></font><a href="https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter" rel="noreferrer"><code>Array.filter</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的</font></font><code>return true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回调函数</font><font style="vertical-align: inherit;">来使用</font><font style="vertical-align: inherit;">，例如：</font></font></p>

<pre><code>arr = arr.filter(function() { return true; });
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为会</font></font><code>.filter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自动跳过原始数组中缺少的元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面链接的MDN页面还包含一个不错的错误检查版本，</font></font><code>filter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">版本</font><font style="vertical-align: inherit;">可以在不支持正式版本的JavaScript解释器中使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，这不会删除</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">条目，也</font><font style="vertical-align: inherit;">不会删除</font><font style="vertical-align: inherit;">具有显式</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值的</font><font style="vertical-align: inherit;">条目</font><font style="vertical-align: inherit;">，但是OP特别要求“丢失”的条目。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙逆天Pro</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要去除孔，应使用</font></font></p>

<pre><code>arr.filter(() =&gt; true)<font></font>
arr.flat(0) // Currently stage 3, check compatibility before using this<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了消除空洞，以及虚假（空，未定义，0，-0，NaN，“”，false，document.all）值：</font></font></p>

<pre><code>arr.filter(x =&gt; x)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要删除空，空和未定义的孔：</font></font></p>

<pre><code>arr.filter(x =&gt; x != null)
</code></pre>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>arr = [, null, (void 0), 0, -0, NaN, false, '', 42];<font></font>
console.log(arr.filter(() =&gt; true)); // [null, (void 0), 0, -0, NaN, false, '', 42]<font></font>
console.log(arr.filter(x =&gt; x)); // [42]<font></font>
console.log(arr.filter(x =&gt; x != null)); // [0, -0, NaN, false, "", 42]</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan村村达蒙</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要删除所有空值（“”，null，undefined和0）： </font></font></p>

<pre><code>arr = arr.filter(function(e){return e}); 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要删除空值和换行符：</font></font></p>

<pre><code>arr = arr.filter(function(e){ return e.replace(/(\r\n|\n|\r)/gm,"")});
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>arr = ["hello",0,"",null,undefined,1,100," "]  <font></font>
arr.filter(function(e){return e});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回：</font></font></p>

<pre><code>["hello", 1, 100, " "]
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新（基于Alnitak的评论）</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些情况下，您可能希望在数组中保留“ 0”并删除其他任何内容（null，undefined和“”），这是一种方法：</font></font></p>

<pre><code>arr.filter(function(e){ return e === 0 || e });
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回：</font></font></p>

<pre><code>["hello", 0, 1, 100, " "]
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小乐</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需一根衬垫：</font></font></p>

<pre><code>[1, false, "", undefined, 2].filter(Boolean); // [1, 2]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或使用</font></font><a href="http://underscorejs.org/#filter"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">underscorejs.org</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>_.filter([1, false, "", undefined, 2], Boolean); // [1, 2]<font></font>
// or even:<font></font>
_.compact([1, false, "", undefined, 2]); // [1, 2]<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
