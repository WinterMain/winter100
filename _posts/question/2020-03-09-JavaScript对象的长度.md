---
layout: question
title:  JavaScript对象的长度
date:   2020-03-09T09:59:07.000Z
description: 我有一个JavaScript对象，是否有内置的或公认的最佳实践方法来获取此对象的长度？const myObject = new Object();m...
img: 
author: 村村达蒙LEY
category: question
answer: 24
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个JavaScript对象，是否有内置的或公认的最佳实践方法来获取此对象的长度？</font></font></p>

<pre><code>const myObject = new Object();<font></font>
myObject["firstname"] = "Gareth";<font></font>
myObject["lastname"] = "Simpson";<font></font>
myObject["age"] = 21;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第193篇《JavaScript对象的长度》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿猪猪西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是James Coglan在CoffeeScript中针对那些已经放弃了JavaScript的人的答案：)</font></font></p>

<pre><code>Object.size = (obj) -&gt;<font></font>
  size = 0<font></font>
  size++ for own key of obj<font></font>
  size<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝镜风</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以使用找到对象的长度：</font></font></p>

<pre><code>Object.values(myObject).length
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Jim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您始终</font></font><code>Object.getOwnPropertyNames(myObject).length</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以得到与</font></font><code>[].length</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">普通阵列</font><font style="vertical-align: inherit;">相同的结果</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamStafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>Object.keys(myObject).length</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取的对象/数组的长度</font></font></p>

<pre><code>var myObject = new Object();<font></font>
myObject["firstname"] = "Gareth";<font></font>
myObject["lastname"] = "Simpson";<font></font>
myObject["age"] = 21;<font></font>
<font></font>
console.log(Object.keys(myObject).length); //3<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY蛋蛋Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是詹姆斯·科根（James Cogan）答案的不同版本。</font><font style="vertical-align: inherit;">无需传递参数，只需原型化Object类，并使代码更简洁。</font></font></p>

<pre><code>Object.prototype.size = function () {<font></font>
    var size = 0,<font></font>
        key;<font></font>
    for (key in this) {<font></font>
        if (this.hasOwnProperty(key)) size++;<font></font>
    }<font></font>
    return size;<font></font>
};<font></font>
<font></font>
var x = {<font></font>
    one: 1,<font></font>
    two: 2,<font></font>
    three: 3<font></font>
};<font></font>
<font></font>
x.size() === 3;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsfiddle示例：</font><a href="http://jsfiddle.net/qar4j/1/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/qar4j/1/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/qar4j/1/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin村村</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的一些变化是：</font></font></p>

<pre><code>var objLength = function(obj){    <font></font>
    var key,len=0;<font></font>
    for(key in obj){<font></font>
        len += Number( obj.hasOwnProperty(key) );<font></font>
    }<font></font>
    return len;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">集成hasOwnProp的方式更优雅。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid前端神奇</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的方法是这样的</font></font></p>

<pre><code>Object.keys(myobject).length
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中myobject是您想要的长度的对象</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱泡芙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>var myObject = new Object();<font></font>
myObject["firstname"] = "Gareth";<font></font>
myObject["lastname"] = "Simpson";<font></font>
myObject["age"] = 21;<font></font>
</code></pre>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.values（myObject）.length</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.entries（myObject）.length</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.keys（myObject）.length</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门村村古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不关心支持Internet Explorer 8或更低版本，则可以通过执行以下两个步骤来轻松获取对象中的属性数：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" rel="nofollow noreferrer"><strong><code>Object.keys()</code></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取仅包含那些</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Enumerability_and_ownership_of_properties" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可枚举的</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性名称的数组，</font><font style="vertical-align: inherit;">或者</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames" rel="nofollow noreferrer"><strong><code>Object.getOwnPropertyNames()</code></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您还希望包含不可枚举的属性的名称，请</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">该数组</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取该</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/length" rel="nofollow noreferrer"><strong><code>.length</code></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">属性。</font></font></li>
</ol>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要多次执行此操作，则可以将此逻辑包装在函数中：</font></font></p>

<pre><code>function size(obj, enumerablesOnly) {<font></font>
    return enumerablesOnly === false ?<font></font>
        Object.getOwnPropertyNames(obj).length :<font></font>
        Object.keys(obj).length;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用此特定功能：</font></font></p>

<pre><code>var myObj = Object.create({}, {<font></font>
    getFoo: {},<font></font>
    setFoo: {}<font></font>
});<font></font>
myObj.Foo = 12;<font></font>
<font></font>
var myArr = [1,2,5,4,8,15];<font></font>
<font></font>
console.log(size(myObj));        // Output : 1<font></font>
console.log(size(myObj, true));  // Output : 1<font></font>
console.log(size(myObj, false)); // Output : 3<font></font>
console.log(size(myArr));        // Output : 6<font></font>
console.log(size(myArr, true));  // Output : 6<font></font>
console.log(size(myArr, false)); // Output : 7<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另请参阅</font></font><a href="https://jsfiddle.net/0x11tv73/5/" rel="nofollow noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此小提琴</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取演示。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我们有哈希 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">hash = {“ a”：“ b”，“ c”：“ d”};</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以使用键的长度（即哈希的长度）来获得长度：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">keys（hash）.length</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Near小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那这样的事情呢-</font></font></p>

<pre><code>function keyValuePairs() {<font></font>
    this.length = 0;<font></font>
    function add(key, value) { this[key] = value; this.length++; }<font></font>
    function remove(key) { if (this.hasOwnProperty(key)) { delete this[key]; this.length--; }}<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门樱前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要一个公开其大小的关联数据结构，则最好使用地图而不是对象。</font></font></p>

<pre><code>const myMap = new Map();<font></font>
myMap.set("firstname", "Gareth");<font></font>
myMap.set("lastname", "Simpson");<font></font>
myMap.set("age", 21);<font></font>
myMap.size; // 3<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙村村Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script&gt;<font></font>
myObj = {"key1" : "Hello", "key2" : "Goodbye"};<font></font>
var size = Object.keys(myObj).length;<font></font>
console.log(size);<font></font>
&lt;/script&gt;<font></font>
<font></font>
&lt;p id="myObj"&gt;The number of &lt;b&gt;keys&lt;/b&gt; in &lt;b&gt;myObj&lt;/b&gt; are: &lt;script&gt;document.write(size)&lt;/script&gt;&lt;/p&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用：</font></font></p>

<pre><code>var size = Object.keys(myObj).length;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYEvaL</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var myArray = new Object();<font></font>
myArray["firstname"] = "Gareth";<font></font>
myArray["lastname"] = "Simpson";<font></font>
myArray["age"] = 21;<font></font>
obj = Object.keys(myArray).length;<font></font>
console.log(obj)</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些情况下，最好将大小存储在单独的变量中。</font><font style="vertical-align: inherit;">特别是，如果要在一处将一个元素添加到数组中，并且可以轻松增加大小。</font><font style="vertical-align: inherit;">如果您需要经常检查尺寸，显然可以更快地工作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝村村</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个完全不同的解决方案，仅适用于更现代的浏览器（IE9 +，Chrome，Firefox 4 +，Opera 11.60 +，Safari 5.1+）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">见</font></font><a href="http://jsfiddle.net/QHDt7/" rel="noreferrer" title="jsFiddle"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jsFiddle</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置您的关联数组类</font></font></p>

<pre><code>/**<font></font>
 * @constructor<font></font>
 */<font></font>
AssociativeArray = function () {};<font></font>
<font></font>
// Make the length property work<font></font>
Object.defineProperty(AssociativeArray.prototype, "length", {<font></font>
    get: function () {<font></font>
        var count = 0;<font></font>
        for (var key in this) {<font></font>
            if (this.hasOwnProperty(key))<font></font>
                count++;<font></font>
        }<font></font>
        return count;<font></font>
    }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以按以下方式使用此代码...</font></font></p>

<pre><code>var a1 = new AssociativeArray();<font></font>
a1["prop1"] = "test";<font></font>
a1["prop2"] = 1234;<font></font>
a1["prop3"] = "something else";<font></font>
alert("Length of array is " + a1.length);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需使用它即可获得</font></font><code>length</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>Object.keys(myObject).length
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Chloe</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是并且不要忘记检查该属性是否不在原型链上的方法：</font></font></p>

<pre><code>var element_count = 0;<font></font>
for(var e in myArray)<font></font>
    if(myArray.hasOwnProperty(e))<font></font>
        element_count++;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil小哥伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了不干扰原型或其他代码，您可以构建和扩展自己的对象：</font></font></p>

<pre><code>function Hash(){<font></font>
    var length=0;<font></font>
    this.add = function(key, val){<font></font>
         if(this[key] == undefined)<font></font>
         {<font></font>
           length++;<font></font>
         }<font></font>
         this[key]=val;<font></font>
    }; <font></font>
    this.length = function(){<font></font>
        return length;<font></font>
    };<font></font>
}<font></font>
<font></font>
myArray = new Hash();<font></font>
myArray.add("lastname", "Simpson");<font></font>
myArray.add("age", 21);<font></font>
alert(myArray.length()); // will alert 2<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您始终使用add方法，则length属性将是正确的。</font><font style="vertical-align: inherit;">如果您担心自己或其他人忘记使用它，则也可以将其他人发布的属性计数器添加到length方法中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，您总是可以覆盖这些方法。</font><font style="vertical-align: inherit;">但是即使这样做，您的代码也可能会明显失败，从而易于调试。</font><font style="vertical-align: inherit;">;）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该方法将对象的所有属性名称存储在一个数组中，因此您可以获得该数组的长度，该长度等于对象的键的长度。</font></font></p>

<pre><code>Object.getOwnPropertyNames({"hi":"Hi","msg":"Message"}).length; // =&gt; 2
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不是JavaScript专家，但是由于Object没有length方法，因此您似乎必须遍历元素并计数它们：</font></font></p>

<pre><code>var element_count = 0;<font></font>
for (e in myArray) {  if (myArray.hasOwnProperty(e)) element_count++; }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@palmsey：为了公平起见，JavaScript文档实际上以这种方式显式地将使用Object类型的变量称为“关联数组”。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是最跨浏览器的解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这比接受的答案要好，因为它使用本机Object.keys（如果存在）。</font><font style="vertical-align: inherit;">因此，它是所有现代浏览器中最快的。</font></font></p>

<pre><code>if (!Object.keys) {<font></font>
    Object.keys = function (obj) {<font></font>
        var arr = [],<font></font>
            key;<font></font>
        for (key in obj) {<font></font>
            if (obj.hasOwnProperty(key)) {<font></font>
                arr.push(key);<font></font>
            }<font></font>
        }<font></font>
        return arr;<font></font>
    };<font></font>
}<font></font>
<font></font>
Object.keys(obj).length;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：如果您正在使用</font></font><a href="http://underscorejs.org/#size"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Underscore.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（建议使用，它是轻量级的！），那么您可以</font></font></p>

<pre><code>_.size({one : 1, two : 2, three : 3});<font></font>
=&gt; 3<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不是</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且您不想由于任何原因弄乱Object属性，并且已经在使用jQuery，那么同样可以访问一个插件：</font></font></p>

<pre><code>$.assocArraySize = function(obj) {<font></font>
    // http://stackoverflow.com/a/6700/11236<font></font>
    var size = 0, key;<font></font>
    for (key in obj) {<font></font>
        if (obj.hasOwnProperty(key)) size++;<font></font>
    }<font></font>
    return size;<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小小十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您知道不必担心</font></font><code>hasOwnProperty</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查，则可以非常简单地执行此操作：</font></font></p>

<pre><code>Object.keys(myArray).length
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
