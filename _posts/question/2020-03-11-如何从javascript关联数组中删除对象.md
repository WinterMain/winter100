---
layout: question
title:  如何从javascript关联数组中删除对象？
date:   2020-03-11T15:34:37.000Z
description: 假设我有以下代码：  var myArray = new Object();myArray\["firstname"\] = "Bob";myArra...
img: 
author: 古一Green
category: question
answer: 15
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我有以下代码：  </font></font></p>

<pre><code>var myArray = new Object();<font></font>
myArray["firstname"] = "Bob";<font></font>
myArray["lastname"] = "Smith";<font></font>
myArray["age"] = 25;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，如果我想删除“姓氏”？</font></font><br>
<code>myArray["lastname"].remove()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我需要删除元素，因为元素的数量很重要，并且我想保持干净。）</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第859篇《如何从javascript关联数组中删除对象？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿猴子</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说唯一的工作方法是：</font></font></h1>

<pre><code>function removeItem (array, value) {<font></font>
    var i = 0;<font></font>
    while (i &lt; array.length) {<font></font>
        if(array[i] === value) {<font></font>
            array.splice(i, 1);<font></font>
        } else {<font></font>
            ++i;<font></font>
        }<font></font>
    }<font></font>
    return array;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法：</font></font></p>

<pre><code>var new = removeItem( ["apple","banana", "orange"],  "apple");<font></font>
// ---&gt; ["banana", "orange"]<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐ASam</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于“数组”：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您知道索引：</font></font></strong></p>

<pre><code>array.splice(index, 1);
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您知道该值：</font></font></strong></p>

<pre><code>function removeItem(array, value) {<font></font>
    var index = array.indexOf(value);<font></font>
    if (index &gt; -1) {<font></font>
        array.splice(index, 1);<font></font>
    }<font></font>
    return array;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><code>delete</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象而言，</font><font style="vertical-align: inherit;">最受支持的答案</font><font style="vertical-align: inherit;">很好，但对于实际数组却不能。</font><font style="vertical-align: inherit;">如果我使用</font></font><code>delete</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它从循环中删除元素，但保持元素为</font></font><code>empty</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和数组的长度不变。</font><font style="vertical-align: inherit;">在某些情况下，这可能是个问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如果我在通过myArray删除myArray.toString（）之后</font></font><code>delete</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建了空条目，即，</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi猪猪</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过使用</font></font><strong><code>"delete"</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字，它将从javascript中的array中删除array元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如， </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑以下陈述。</font></font></p>

<pre><code>var arrayElementToDelete = new Object();<font></font>
<font></font>
arrayElementToDelete["id"]           = "XERTYB00G1"; <font></font>
arrayElementToDelete["first_name"]   = "Employee_one";<font></font>
arrayElementToDelete["status"]       = "Active"; <font></font>
<font></font>
delete arrayElementToDelete["status"];<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码的最后一行将从数组中删除键为“状态”的数组元素。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿蛋蛋凯</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>var myArray = newmyArray = new Object(); <font></font>
myArray["firstname"] = "Bob";<font></font>
myArray["lastname"] = "Smith";<font></font>
myArray["age"] = 25;<font></font>
<font></font>
var s = JSON.stringify(myArray);<font></font>
<font></font>
s.replace(/"lastname[^,}]+,/g,'');<font></font>
newmyArray = JSON.parse(p);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有循环/迭代，我们得到相同的结果</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们也可以将其用作功能。</font><font style="vertical-align: inherit;">如果用作原型，Angular会引发一些错误。</font><font style="vertical-align: inherit;">谢谢@HarpyWar。</font><font style="vertical-align: inherit;">它帮助我解决了一个问题。</font></font></p>

<pre><code>var removeItem = function (object, key, value) {<font></font>
    if (value == undefined)<font></font>
        return;<font></font>
<font></font>
    for (var i in object) {<font></font>
        if (object[i][key] == value) {<font></font>
            object.splice(i, 1);<font></font>
        }<font></font>
    }<font></font>
};<font></font>
<font></font>
var collection = [<font></font>
    { id: "5f299a5d-7793-47be-a827-bca227dbef95", title: "one" },<font></font>
    { id: "87353080-8f49-46b9-9281-162a41ddb8df", title: "two" },<font></font>
    { id: "a1af832c-9028-4690-9793-d623ecc75a95", title: "three" }<font></font>
];<font></font>
<font></font>
removeItem(collection, "id", "87353080-8f49-46b9-9281-162a41ddb8df");<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一斯丁猴子</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您</font><font style="vertical-align: inherit;">的项目中</font><font style="vertical-align: inherit;">具有</font></font><a href="http://underscorejs.org/#omit" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">underscore.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依赖项，</font><font style="vertical-align: inherit;">则非常简单</font><font style="vertical-align: inherit;">-</font></font></p>

<pre><code>_.omit(myArray, "lastname")
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐古一</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果出于某种原因删除键不起作用（例如它对我不起作用） </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将其拼接起来，然后过滤未定义的值</font></font></p>

<pre><code>// to cut out one element via arr.splice(indexToRemove, numberToRemove);<font></font>
array.splice(key, 1)<font></font>
array.filter(function(n){return n});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要尝试将它们链接起来，因为拼接会返回已删除的元素；</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞猿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过将其明确分配给“未定义”来从地图中删除该条目。</font><font style="vertical-align: inherit;">如您的情况：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">myArray [“ lastname”] =未定义；</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿卡卡西理查德</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Airbnb样式指南（ES7）中有一种优雅的方法：</font></font></p>

<pre><code>const myObject = {<font></font>
  a: 1,<font></font>
  b: 2,<font></font>
  c: 3<font></font>
};<font></font>
const { a, ...noA } = myObject;<font></font>
console.log(noA); // =&gt; { b: 2, c: 3 }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版权：</font><a href="https://codeburst.io/use-es2015-object-rest-operator-to-omit-properties-38a3ecffe90" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://codeburst.io/use-es2015-object-rest-operator-to-omit-properties-38a3ecffe90" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//codeburst.io/use-es2015-object-rest-operator-to-omit-properties-38a3ecffe90</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子小哥</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用方法</font></font><code>splice</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从对象数组中完全删除项目：</font></font></p>

<pre><code>Object.prototype.removeItem = function (key, value) {<font></font>
    if (value == undefined)<font></font>
        return;<font></font>
<font></font>
    for (var i in this) {<font></font>
        if (this[i][key] == value) {<font></font>
            this.splice(i, 1);<font></font>
        }<font></font>
    }<font></font>
};<font></font>
<font></font>
var collection = [<font></font>
    { id: "5f299a5d-7793-47be-a827-bca227dbef95", title: "one" },<font></font>
    { id: "87353080-8f49-46b9-9281-162a41ddb8df", title: "two" },<font></font>
    { id: "a1af832c-9028-4690-9793-d623ecc75a95", title: "three" }<font></font>
];<font></font>
<font></font>
collection.removeItem("id", "87353080-8f49-46b9-9281-162a41ddb8df");<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro西门</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然接受的答案是正确的，但缺少解释其工作原理的解释。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，您的代码应反映出这</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组</font><font style="vertical-align: inherit;">的事实</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var myObject = new Object();<font></font>
myObject["firstname"] = "Bob";<font></font>
myObject["lastname"] = "Smith";<font></font>
myObject["age"] = 25;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，所有对象（包括</font></font><code>Array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）都可以这种方式使用。</font><font style="vertical-align: inherit;">但是，不要期望标准的JS数组函数（pop，push等）可以在对象上工作！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如接受的答案中所述，然后可以使用</font></font><code>delete</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从对象中删除条目：</font></font></p>

<pre><code>delete myObject["lastname"]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该决定要采用的路线-使用对象（关联数组/字典）还是使用数组（地图）。</font><font style="vertical-align: inherit;">切勿将两者混在一起。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长GO</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那只是删除删除对象，但仍保持数组长度不变。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要删除，您需要执行以下操作：</font></font></p>

<pre><code>array.splice(index, 1);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无JimEva</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前面的答案都没有解决Javascript没有关联数组开头的事实-没有这样的</font></font><code>array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型，请参见</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Operators/typeof" rel="noreferrer"><code>typeof</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript具有的是具有动态属性的对象实例。</font><font style="vertical-align: inherit;">当属性与Array对象实例的元素混淆时，那么Bad Things™必然会发生：</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题</font></font></h2>

<pre><code>var elements = new Array()<font></font>
<font></font>
elements.push(document.getElementsByTagName("head")[0])<font></font>
elements.push(document.getElementsByTagName("title")[0])<font></font>
elements["prop"] = document.getElementsByTagName("body")[0]<font></font>
<font></font>
console.log("number of elements: ", elements.length)   // returns 2<font></font>
delete elements[1]<font></font>
console.log("number of elements: ", elements.length)   // returns 2 (?!)<font></font>
<font></font>
for (var i = 0; i &lt; elements.length; i++)<font></font>
{<font></font>
   // uh-oh... throws a TypeError when i == 1<font></font>
   elements[i].onmouseover = function () { window.alert("Over It.")}<font></font>
   console.log("success at index: ", i)<font></font>
}<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要具有不会让您失望的通用删除功能，请使用：</font></font></p>

<pre><code>Object.prototype.removeItem = function (key) {<font></font>
   if (!this.hasOwnProperty(key))<font></font>
      return<font></font>
   if (isNaN(parseInt(key)) || !(this instanceof Array))<font></font>
      delete this[key]<font></font>
   else<font></font>
      this.splice(key, 1)<font></font>
};<font></font>
<font></font>
//<font></font>
// Code sample.<font></font>
//<font></font>
var elements = new Array()<font></font>
<font></font>
elements.push(document.getElementsByTagName("head")[0])<font></font>
elements.push(document.getElementsByTagName("title")[0])<font></font>
elements["prop"] = document.getElementsByTagName("body")[0]<font></font>
<font></font>
console.log(elements.length)                        // returns 2<font></font>
elements.removeItem("prop")<font></font>
elements.removeItem(0)<font></font>
console.log(elements.hasOwnProperty("prop"))        // returns false as it should<font></font>
console.log(elements.length)                        // returns 1 as it should<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋前端</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中的所有对象都实现为哈希表/关联数组。</font><font style="vertical-align: inherit;">因此，以下内容是等效的：</font></font></p>

<pre><code>alert(myObj["SomeProperty"]);<font></font>
alert(myObj.SomeProperty);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且，</font></font><code>delete</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如前所述，您可以</font><font style="vertical-align: inherit;">通过</font><font style="vertical-align: inherit;">关键字</font><font style="vertical-align: inherit;">从对象中“删除”属性</font><font style="vertical-align: inherit;">，可以通过两种方式使用它：</font></font></p>

<pre><code>delete myObj["SomeProperty"];<font></font>
delete myObj.SomeProperty;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望额外的信息有所帮助...</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙猪猪</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Javascript中使用“删除”关键字。</font></font></p>

<pre><code>delete myArray["lastname"];
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些JavaScript引擎中，delete关键字可能会破坏性能，因为它会撤消编译/ JIT优化。</font></font></p>

<p><a href="http://www.html5rocks.com/en/tutorials/speed/v8/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.html5rocks.com/zh-CN/tutorials/speed/v8/ </font></font></a>
<a href="http://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.smashingmagazine.com/2012/11/writing-fast-memory-ficient-javascript/</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
