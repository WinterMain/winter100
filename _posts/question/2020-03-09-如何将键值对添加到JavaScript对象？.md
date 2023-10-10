---
layout: question
title:  如何将键/值对添加到JavaScript对象？
date:   2020-03-09T13:28:58.000Z
description: 这是我的对象文字：var obj = {key1  value1, key2  value2};我如何添加字段key3与value3对象？...
img: 
author: 。
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的对象文字：</font></font></p>

<pre><code>var obj = {key1: value1, key2: value2};
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何添加字段</font></font><code>key3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><code>value3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第276篇《如何将键/值对添加到JavaScript对象？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>arr.push({key3: value3});
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Since its a question of the past but the problem of present. Would suggest one more solution: Just pass the key and values to the function and you will get a map object.</p>

<pre><code>var map = {};<font></font>
function addValueToMap(key, value) {<font></font>
map[key] = map[key] || [];<font></font>
map[key].push(value);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天前端宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>According to <em>Property Accessors</em> defined in ECMA-262(<a href="http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf" rel="nofollow">http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf</a>, P67), there are two ways you can do to add properties to a exists object. All these two way, the Javascript engine will treat them the same.</p>

<p>The first way is to use dot notation:</p>

<pre class="lang-js prettyprint-override"><code>obj.key3 = value3;
</code></pre>

<p>But this way, you should use a <em>IdentifierName</em> after dot notation.</p>

<p>The second way is to use bracket notation:</p>

<pre class="lang-js prettyprint-override"><code>obj["key3"] = value3;
</code></pre>

<p>and another form:</p>

<pre class="lang-js prettyprint-override"><code>var key3 = "key3";<font></font>
obj[key3] = value3;<font></font>
</code></pre>

<p>This way, you could use a <em>Expression</em> (include <em>IdentifierName</em>) in the bracket notation.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Davaid老丝</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>supported by most of browsers, and it checks if object key available or not you want to add, if <strong>available</strong> it <strong>overides existing key value</strong> and it <strong>not available</strong> it <strong>add key with value</strong></p>

<p>example 1</p>

<pre><code>let my_object = {};<font></font>
<font></font>
// now i want to add something in it  <font></font>
<font></font>
my_object.red = "this is red color";<font></font>
<font></font>
// { red : "this is red color"}<font></font>
</code></pre>

<p>example 2</p>

<pre><code>let my_object = { inside_object : { car : "maruti" }}<font></font>
<font></font>
// now i want to add something inside object of my object <font></font>
<font></font>
my_object.inside_object.plane = "JetKing";<font></font>
<font></font>
// { inside_object : { car : "maruti" , plane : "JetKing"} }<font></font>
</code></pre>

<p>example 3</p>

<pre><code>let my_object = { inside_object : { name : "abhishek" }}<font></font>
<font></font>
// now i want to add something inside object with new keys birth , gender <font></font>
<font></font>
my_object.inside_object.birth = "8 Aug";<font></font>
my_object.inside_object.gender = "Male";<font></font>
<font></font>
<font></font>
    // { inside_object : <font></font>
//             { name : "abhishek",<font></font>
//               birth : "8 Aug",<font></font>
//               gender : "Male" <font></font>
//            }   <font></font>
//       }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Your example shows an Object, not an Array.  In that case, the preferred way to add a field to an Object is to just assign to it, like so:</p>

<pre><code>arr.key3 = value3;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanHarry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>arr.key3 = value3;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为您的arr并不是一个数组，而是一个原型对象。</font><font style="vertical-align: inherit;">真正的数组是：</font></font></p>

<pre><code>var arr = [{key1: value1}, {key2: value2}];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是还是不对 </font><font style="vertical-align: inherit;">实际上应该是：</font></font></p>

<pre><code>var arr = [{key: key1, value: value1}, {key: key2, value: value2}];
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道已经有一个可以接受的答案，但是我想我已经在某个地方记录了我的想法。</font><font style="vertical-align: inherit;">请[人们]随意戳破这个想法，因为我不确定这是否是最佳解决方案...但是我只是在几分钟前将其汇总：</font></font></p>

<pre><code>Object.prototype.push = function( key, value ){<font></font>
   this[ key ] = value;<font></font>
   return this;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将以这种方式利用它：</font></font></p>

<pre><code>var obj = {key1: value1, key2: value2};<font></font>
obj.push( "key3", "value3" );<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于原型函数正在返回，因此</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以继续将的链链接</font></font><code>.push</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>obj</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量</font><font style="vertical-align: inherit;">的末尾</font><font style="vertical-align: inherit;">：</font></font><code>obj.push(...).push(...).push(...);</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个功能是，您可以传递一个数组或另一个对象作为push函数参数中的值。</font><font style="vertical-align: inherit;">请参阅我的小提琴以获取工作示例：</font><a href="http://jsfiddle.net/7tEme/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/7tEme/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/7tEme/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LNear</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h1>Year 2017 answer: <code>Object.assign()</code></h1>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" rel="noreferrer">Object.assign(dest, src1, src2, ...)</a> merges objects.</p>

<p>It overwrites <code>dest</code> with properties and values of (however many) source objects, then returns <code>dest</code>.</p>

<blockquote>
  <p>The <code>Object.assign()</code> method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.</p>
</blockquote>

<h3>Live example</h3>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var obj = {key1: "value1", key2: "value2"};<font></font>
Object.assign(obj, {key3: "value3"});<font></font>
<font></font>
document.body.innerHTML = JSON.stringify(obj);</code></pre>
</div>
</div>
<p></p>

<h1>Year 2018 answer: object spread operator <code>{...}</code></h1>

<pre><code>obj = {...obj, ...pair};
</code></pre>

<p>From <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator#Spread_in_object_literals" rel="noreferrer">MDN</a>:</p>

<blockquote>
  <p>It copies own enumerable properties from a provided object onto a new object. </p>
  
  <p>Shallow-cloning (excluding prototype) or merging of objects is now possible using a shorter syntax than <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" rel="noreferrer"><code>Object.assign()</code></a>.</p>
  
  <p>Note that <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" rel="noreferrer"><code>Object.assign()</code></a> triggers <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set" rel="noreferrer">setters</a> whereas spread syntax doesn’t.</p>
</blockquote>

<h3>Live example</h3>

<p>It works in current Chrome and current Firefox. They say it doesn’t work in current Edge.</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var obj = {key1: "value1", key2: "value2"};<font></font>
var pair = {key3: "value3"};<font></font>
obj = {...obj, ...pair};<font></font>
<font></font>
document.body.innerHTML = JSON.stringify(obj);</code></pre>
</div>
</div>
<p></p>

<h1>Year 2019 answer</h1>

<p><s><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Object_assignment" rel="noreferrer">Object assignment operator</a> <code>+=</code>:</s></p><s>

<pre><code>obj += {key3: "value3"};
</code></pre>

</s><p><s></s>Oops... I got carried away. Smuggling information from the future is illegal. Duly obscured!</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有两种</font><font style="vertical-align: inherit;">向对象</font><font style="vertical-align: inherit;">添加新</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var obj = {<font></font>
    key1: value1,<font></font>
    key2: value2<font></font>
};<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用点表示法：</font></font></h3>

<pre><code>obj.key3 = "value3";
</code></pre>

<h3>Using square bracket notation:</h3>

<pre><code>obj["key3"] = "value3";
</code></pre>

<p>The first form is used when you know the name of the property. The second form is used when the name of the property is dynamically determined. Like in this example:</p>

<pre><code>var getProperty = function (propertyName) {<font></font>
    return obj[propertyName];<font></font>
};<font></font>
<font></font>
getProperty("key1");<font></font>
getProperty("key2");<font></font>
getProperty("key3");<font></font>
</code></pre>

<hr>

<p>A <em>real</em> JavaScript array can be constructed using either:</p>

<h3>The Array literal notation:</h3>

<pre><code>var arr = [];
</code></pre>

<h3>The Array constructor notation:</h3>

<pre><code>var arr = new Array();
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
