---
layout: question
title:  通过属性值从对象数组中获取JavaScript对象\[重复\]
date:   2020-03-11T03:27:34.000Z
description:                                                                          ...
img: 
author: 乐米亚
category: question
answer: 14
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript对象数组中按ID查找对象</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （32个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2018-05-01 14：03：28Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设我有四个对象组成的数组：</font></font></p>

<pre><code>var jsObjects = [<font></font>
   {a: 1, b: 2}, <font></font>
   {a: 3, b: 4}, <font></font>
   {a: 5, b: 6}, <font></font>
   {a: 7, b: 8}<font></font>
];<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以</font></font><code>{a: 5, b: 6}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过属性的值</font><font style="vertical-align: inherit;">获取第三个对象（</font><font style="vertical-align: inherit;">）</font></font><code>b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，例如没有</font></font><code>for...in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第598篇《通过属性值从对象数组中获取JavaScript对象[重复]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小卤蛋Pro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用find with bind将特定的键值传递给回调函数。 </font></font></p>

<pre><code>   function byValue(o) { <font></font>
       return o.a === this.a &amp;&amp; o.b === this.b; <font></font>
   };   <font></font>
<font></font>
   var result = jsObjects.find(byValue.bind({ a: 5, b: 6 }));<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Stafan宝儿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要通过特定属性值从对象数组中获取第一个对象：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function getObjectFromObjectsArrayByPropertyValue(objectsArray, propertyName, propertyValue) {<font></font>
  return objectsArray.find(function (objectsArrayElement) {<font></font>
    return objectsArrayElement[propertyName] == propertyValue;<font></font>
  });<font></font>
}<font></font>
<font></font>
function findObject () {<font></font>
  var arrayOfObjectsString = document.getElementById("arrayOfObjects").value,<font></font>
      arrayOfObjects,<font></font>
      propertyName = document.getElementById("propertyName").value,<font></font>
      propertyValue = document.getElementById("propertyValue").value,<font></font>
      preview = document.getElementById("preview"),<font></font>
      searchingObject;<font></font>
  <font></font>
  arrayOfObjects = JSON.parse(arrayOfObjectsString);<font></font>
  <font></font>
  console.debug(arrayOfObjects);<font></font>
  <font></font>
  if(arrayOfObjects &amp;&amp; propertyName &amp;&amp; propertyValue) {<font></font>
    searchingObject = getObjectFromObjectsArrayByPropertyValue(arrayOfObjects, propertyName, propertyValue);<font></font>
    if(searchingObject) {<font></font>
      preview.innerHTML = JSON.stringify(searchingObject, false, 2);<font></font>
    } else {<font></font>
      preview.innerHTML = "there is no object with property " + propertyName + " = " + propertyValue + " in your array of objects";<font></font>
    }<font></font>
  }<font></font>
}</code></pre>
<pre class="snippet-code-css lang-css prettyprint-override"><code>pre {<font></font>
  padding: 5px;<font></font>
  border-radius: 4px;<font></font>
  background: #f3f2f2;<font></font>
}<font></font>
<font></font>
textarea, button {<font></font>
  width: 100%<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;fieldset&gt;<font></font>
  &lt;legend&gt;Input Data:&lt;/legend&gt;<font></font>
  &lt;label&gt;Put here your array of objects&lt;/label&gt;<font></font>
  &lt;textarea rows="7" id="arrayOfObjects"&gt;<font></font>
  [<font></font>
    {"a": 1, "b": 2},<font></font>
    {"a": 3, "b": 4},<font></font>
    {"a": 5, "b": 6},<font></font>
    {"a": 7, "b": 8, "c": 157}<font></font>
  ]<font></font>
  &lt;/textarea&gt;<font></font>
<font></font>
  &lt;hr&gt;<font></font>
<font></font>
  &lt;label&gt;property name: &lt;/label&gt; &lt;input type="text" id="propertyName"  value="b"/&gt;<font></font>
  &lt;label&gt;property value: &lt;/label&gt; &lt;input type="text" id="propertyValue" value=6 /&gt;<font></font>
     <font></font>
&lt;/fieldset&gt;<font></font>
&lt;hr&gt;<font></font>
&lt;button onclick="findObject()"&gt;find object in array!&lt;/button&gt;<font></font>
&lt;hr&gt;<font></font>
&lt;fieldset&gt;<font></font>
  &lt;legend&gt;Searching Result:&lt;/legend&gt;<font></font>
  &lt;pre id="preview"&gt;click find&lt;/pre&gt;<font></font>
&lt;/fieldset&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐前端</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>var jsObjects = [{a: 1, b: 2}, {a: 3, b: 4}, {a: 5, b: 6}, {a: 7, b: 8}];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要访问第三个对象，请使用：</font></font><code>jsObjects[2];</code><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
要访问第三个对象b值，请使用：</font></font><code>jsObjects[2].b;</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋Itachi</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>var result = jsObjects.filter(x=&gt; x.b === 6);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会更好，有时在过滤器中使用return可能无法获得结果（我不知道为什么）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗卡卡西</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使</font></font><a href="https://stackoverflow.com/a/13964619/3093731"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的最佳/最快部分</font><font style="vertical-align: inherit;">更加可重用和清晰：</font></font></p>

<pre><code>function getElByPropVal(myArray, prop, val){<font></font>
    for (var i = 0, length = myArray.length; i &lt; length; i++) {<font></font>
        if (myArray[i][prop] == val){<font></font>
            return myArray[i];<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam凯卡卡西</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在寻找一个单一的结果，而不是数组，我建议减少吗？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是普通的ole javascript解决方案，如果存在则返回匹配对象，否则返回null。</font></font></p>

<pre><code>var result = arr.reduce(function(prev, curr) { return (curr.b === 6) ? curr : prev; }, null);
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Eva</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来ECMAScript 6提案中有</font></font><code>Array</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font></font><code>find()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>findIndex()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">MDN还提供了polyfill，您可以将其包括在内以在所有浏览器中获得其功能。</font></font></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find"><code>find()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint-override"><code>function isPrime(element, index, array) {<font></font>
    var start = 2;<font></font>
    while (start &lt;= Math.sqrt(element)) {<font></font>
        if (element % start++ &lt; 1) return false;<font></font>
    }<font></font>
    return (element &gt; 1);<font></font>
}<font></font>
<font></font>
console.log( [4, 6, 8, 12].find(isPrime) ); // undefined, not found<font></font>
console.log( [4, 5, 8, 12].find(isPrime) ); // 5<font></font>
</code></pre>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex"><code>findIndex()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint-override"><code>function isPrime(element, index, array) {<font></font>
    var start = 2;<font></font>
    while (start &lt;= Math.sqrt(element)) {<font></font>
        if (element % start++ &lt; 1) return false;<font></font>
    }<font></font>
    return (element &gt; 1);<font></font>
}<font></font>
<font></font>
console.log( [4, 6, 8, 12].findIndex(isPrime) ); // -1, not found<font></font>
console.log( [4, 6, 7, 12].findIndex(isPrime) ); // 2<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Mandy</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我理解正确，则想在</font></font><code>b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性为</font></font><code>6</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">的数组中找到对象</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>var found;<font></font>
jsObjects.some(function (obj) {<font></font>
  if (obj.b === 6) {<font></font>
    found = obj;<font></font>
    return true;<font></font>
  }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，如果您使用下划线：</font></font></p>

<pre><code>var found = _.select(jsObjects, function (obj) {<font></font>
  return obj.b === 6;<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryL梅</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试使用</font></font><a href="https://msdn.microsoft.com/en-us/library/ff679973(v=vs.94).aspx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Array filter</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法来过滤</font></font><code>array of objects</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">with </font></font><code>property</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>var jsObjects = [<font></font>
   {a: 1, b: 2}, <font></font>
   {a: 3, b: 4}, <font></font>
   {a: 5, b: 6}, <font></font>
   {a: 7, b: 8}<font></font>
];<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用数组过滤方法：</font></font></strong></p>

<pre><code>var filterObj = jsObjects.filter(function(e) {<font></font>
  return e.b == 6;<font></font>
});<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在循环中使用：</font></font></strong></p>

<pre><code>for (var i in jsObjects) {<font></font>
  if (jsObjects[i].b == 6) {<font></font>
    console.log(jsObjects[i]); // {a: 5, b: 6}<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作提琴：</font></font></strong> <font style="vertical-align: inherit;"><a href="https://jsfiddle.net/uq9n9g77/" rel="noreferrer"><font style="vertical-align: inherit;">https </font></a><strong><font style="vertical-align: inherit;">: </font></strong></font><a href="https://jsfiddle.net/uq9n9g77/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/uq9n9g77/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A村村</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用underscore.js：</font></font></p>

<pre><code>var foundObject = _.findWhere(jsObjects, {b: 6});
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐十三</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道您为什么反对for循环（大概是指for循环，而不是专门针对..in），它们快速且易于阅读。</font><font style="vertical-align: inherit;">无论如何，这里有一些选择。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于循环：</font></font></p>

<pre><code>function getByValue(arr, value) {<font></font>
<font></font>
  for (var i=0, iLen=arr.length; i&lt;iLen; i++) {<font></font>
<font></font>
    if (arr[i].b == value) return arr[i];<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。过滤</font></font></p>

<pre><code>function getByValue2(arr, value) {<font></font>
<font></font>
  var result  = arr.filter(function(o){return o.b == value;} );<font></font>
<font></font>
  return result? result[0] : null; // or undefined<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.for每个</font></font></p>

<pre><code>function getByValue3(arr, value) {<font></font>
<font></font>
  var result = [];<font></font>
<font></font>
  arr.forEach(function(o){if (o.b == value) result.push(o);} );<font></font>
<font></font>
  return result? result[0] : null; // or undefined<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，如果您确实确实想使用..in，并希望找到具有任何属性值为6的对象，那么除非您通过名称进行检查，否则必须使用for..in。</font><font style="vertical-align: inherit;">例如</font></font></p>

<pre><code>function getByValue4(arr, value) {<font></font>
  var o;<font></font>
<font></font>
  for (var i=0, iLen=arr.length; i&lt;iLen; i++) {<font></font>
    o = arr[i];<font></font>
<font></font>
    for (var p in o) {<font></font>
      if (o.hasOwnProperty(p) &amp;&amp; o[p] == value) {<font></font>
        return o;<font></font>
      }<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有几种方法可以做到这一点，但让我们从最简单的一种最新方法开始，此函数称为</font></font><code>find()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>find</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至在IE11都不支持的情况下</font><font style="vertical-align: inherit;">也要小心</font><font style="vertical-align: inherit;">，因此需要对其进行编译...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以你有这个对象，如你所说：</font></font></p>

<pre><code>var jsObjects = [<font></font>
   {a: 1, b: 2}, <font></font>
   {a: 3, b: 4}, <font></font>
   {a: 5, b: 6}, <font></font>
   {a: 7, b: 8}<font></font>
];<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以编写一个函数并按以下方式获取它：</font></font></p>

<pre><code>function filterValue(obj, key, value) {<font></font>
  return obj.find(function(v){ return v[key] === value});<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使用如下函数：</font></font></p>

<pre><code>filterValue(jsObjects, "b", 6); //{a: 5, b: 6}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至</font><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中甚至更短的版本：</font></font></p>

<pre><code>const filterValue = (obj, key, value)=&gt; obj.find(v =&gt; v[key] === value);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此方法仅返回匹配的第一个值...，为获得更好的结果和浏览器支持，可以使用</font></font><code>filter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>const filterValue = (obj, key, value)=&gt; obj.filter(v =&gt; v[key] === value);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们将返回</font></font><code>[{a: 5, b: 6}]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该方法将返回一个数组。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以简单地使用for循环，创建如下函数：</font></font></p>

<pre><code>function filteredArray(arr, key, value) {<font></font>
  const newArray = [];<font></font>
  for(i=0, l=arr.length; i&lt;l; i++) {<font></font>
    if(arr[i][key] === value) {<font></font>
      newArray.push(arr[i]);<font></font>
    }<font></font>
  }<font></font>
 return newArray;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并这样称呼它：</font></font></p>

<pre><code>filteredArray(jsObjects, "b", 6); //[{a: 5, b: 6}]
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">。</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><code>Filter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 属性与值匹配的对象数组返回数组：</font></font></p>

<pre><code>var result = jsObjects.filter(obj =&gt; {<font></font>
  return obj.b === 6<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" rel="noreferrer"><font style="vertical-align: inherit;">Array.prototype.filter（）上</font></a><font style="vertical-align: inherit;">的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN文档</font></font></a></p>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const jsObjects = [<font></font>
  {a: 1, b: 2}, <font></font>
  {a: 3, b: 4}, <font></font>
  {a: 5, b: 6}, <font></font>
  {a: 7, b: 8}<font></font>
]<font></font>
<font></font>
let result = jsObjects.filter(obj =&gt; {<font></font>
  return obj.b === 6<font></font>
})<font></font>
<font></font>
console.log(result)</code></pre>
</div>
</div>
<p></p>

<p><code>Find</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组中第一个元素/对象的值，否则</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回。</font></font></p>

<pre><code>var result = jsObjects.find(obj =&gt; {<font></font>
  return obj.b === 6<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" rel="noreferrer"><font style="vertical-align: inherit;">Array.prototype.find（）上</font></a><font style="vertical-align: inherit;">的</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN文档</font></font></a></p>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="true" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const jsObjects = [<font></font>
  {a: 1, b: 2}, <font></font>
  {a: 3, b: 4}, <font></font>
  {a: 5, b: 6}, <font></font>
  {a: 7, b: 8}<font></font>
]<font></font>
<font></font>
let result = jsObjects.find(obj =&gt; {<font></font>
  return obj.b === 6<font></font>
})<font></font>
<font></font>
console.log(result)</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德猪猪伽罗</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>jsObjects.find(x =&gt; x.b === 6)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从MDN：</font></font></p>

<blockquote>
  <p>The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" rel="noreferrer"><code>find()</code></a> method returns a value in the array, if an element in the array satisfies the provided testing function. Otherwise <code>undefined</code> is returned.</p>
</blockquote>

<hr>

<p>Side note: methods like <code>find()</code> and arrow functions are not supported by older browsers (like IE), so if you want to support these browsers, you should transpile your code using <a href="https://babeljs.io/" rel="noreferrer">Babel</a>.</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
