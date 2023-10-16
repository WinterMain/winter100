---
layout: question
title:  使用JavaScript从数组中删除对象
date:   2020-03-12T08:45:17.000Z
description: 如何从数组中删除对象？我想删除，其中包括名称的对象Kristian从someArray。例如：someArray = \[{name "Kristian...
img: 
author: ItachiJinJin
category: question
answer: 17
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何从数组中删除对象？</font><font style="vertical-align: inherit;">我想删除，其中包括名称的对象</font></font><code>Kristian</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><code>someArray</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>someArray = [{name:"Kristian", lines:"2,5,10"},<font></font>
             {name:"John", lines:"1,19,26,96"}];<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我要实现：</font></font></strong></p>

<pre><code>someArray = [{name:"John", lines:"1,19,26,96"}];
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1157篇《使用JavaScript从数组中删除对象》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁米亚Green</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>If you wanna access and remove object of an array simply you can try something like this.</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>// inside some function<font></font>
<font></font>
let someArray = [ {"ColumnName" : "a", "PropertySerno" : 100005,"UpdateType" : 1},<font></font>
                  {"ColumnName" : "b", "PropertySerno" : 100202,"UpdateType" : 1,<font></font>
        "ShowRemoveButton" : true} ];<font></font>
        <font></font>
        for (let item of someArray) {<font></font>
          delete item.ShowRemoveButton;<font></font>
        }<font></font>
        console.log(item.outputMappingData.Data);<font></font>
        <font></font>
//output will be like that = [ {"ColumnName" : "a", "PropertySerno" : 100005,"UpdateType" : 1},<font></font>
//                             {"ColumnName" : "b", "PropertySerno" : 100202,"UpdateType" : 1 }];<font></font>
        </code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无Green前端</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>This Concepts using Kendo Grid </p>

<pre><code>var grid = $("#addNewAllergies").data("kendoGrid");<font></font>
<font></font>
var selectedItem = SelectedCheckBoxList;<font></font>
<font></font>
for (var i = 0; i &lt; selectedItem.length; i++) {<font></font>
    if(selectedItem[i].boolKendoValue==true)<font></font>
    {<font></font>
        selectedItem.length= 0;<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Returns only objects from the array whose property <code>name</code> is not "Kristian"</p>

<pre><code>var noKristianArray = $.grep(someArray, function (el) { return el.name!= "Kristian"; });
</code></pre>

<p></p><hr>
<strong>Demo:</strong><p></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code> var someArray = [<font></font>
                {name:"Kristian", lines:"2,5,10"},<font></font>
                {name:"John", lines:"1,19,26,96"},<font></font>
                {name:"Kristian", lines:"2,58,160"},<font></font>
                {name:"Felix", lines:"1,19,26,96"}<font></font>
                ];<font></font>
			 <font></font>
var noKristianArray = $.grep(someArray, function (el) { return el.name!= "Kristian"; });<font></font>
<font></font>
console.log(noKristianArray);</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"&gt;&lt;/script&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Near番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>You could also use <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some" rel="nofollow noreferrer"><code>some</code></a>:</p>

<pre><code>someArray = [{name:"Kristian", lines:"2,5,10"},<font></font>
             {name:"John", lines:"1,19,26,96"}];<font></font>
<font></font>
someArray.some(item =&gt; { <font></font>
    if(item.name === "Kristian") // Case sensitive, will only remove first instance<font></font>
        someArray.splice(someArray.indexOf(item),1) <font></font>
})<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LPro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>If you want to remove all occurrences of a given object (based on some condition) then use the javascript splice method inside a for the loop. </p>

<p>Since removing an object would affect the array length, make sure to decrement the counter one step, so that length check remains intact.</p>

<pre><code>var objArr=[{Name:"Alex", Age:62},<font></font>
  {Name:"Robert", Age:18},<font></font>
  {Name:"Prince", Age:28},<font></font>
  {Name:"Cesar", Age:38},<font></font>
  {Name:"Sam", Age:42},<font></font>
  {Name:"David", Age:52}<font></font>
];<font></font>
<font></font>
for(var i = 0;i &lt; objArr.length; i ++)<font></font>
{<font></font>
  if(objArr[i].Age &gt; 20)<font></font>
  {<font></font>
    objArr.splice(i, 1);<font></font>
    i--;  //re-adjust the counter.<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p>The above code snippet removes all objects with age greater than 20.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam神乐番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有ES 6箭头功能 </font></font></p>

<pre><code>let someArray = [<font></font>
                 {name:"Kristian", lines:"2,5,10"},<font></font>
                 {name:"John", lines:"1,19,26,96"}<font></font>
                ];<font></font>
let arrayToRemove={name:"Kristian", lines:"2,5,10"};<font></font>
someArray=someArray.filter((e)=&gt;e.name !=arrayToRemove.name &amp;&amp; e.lines!= arrayToRemove.lines)<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Eva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>There seems to be an error in your array syntax so assuming you mean an array as opposed to an object, <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/splice" rel="nofollow">Array.splice</a> is your friend here:</p>

<pre><code>someArray = [{name:"Kristian", lines:"2,5,10"}, {name:"John", lines:"1,19,26,96"}];<font></font>
someArray.splice(1,1)<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三猴子</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>This is what I use.</p>

<pre><code>Array.prototype.delete = function(pos){<font></font>
    this[pos] = undefined;<font></font>
    var len = this.length - 1;<font></font>
    for(var a = pos;a &lt; this.length - 1;a++){<font></font>
      this[a] = this[a+1];<font></font>
    }<font></font>
    this.pop();<font></font>
  }<font></font>
</code></pre>

<p>Then it is as simple as saying</p>

<pre><code>var myArray = [1,2,3,4,5,6,7,8,9];<font></font>
myArray.delete(3);<font></font>
</code></pre>

<p>Replace any number in place of three. After the expected output should be:</p>

<pre><code>console.log(myArray); //Expected output 1,2,3,5,6,7,8,9
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Davaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>This answer </p>

<pre><code>for (var i =0; i &lt; someArray.length; i++)<font></font>
   if (someArray[i].name === "Kristian") {<font></font>
      someArray.splice(i,1);<font></font>
   }<font></font>
</code></pre>

<p>is not working for multiple records fulfilling the condition. If you have two such consecutive records, only the first one is removed, and the other one skipped. You have to use:</p>

<pre><code>for (var i = someArray.length - 1; i&gt;= 0; i--)<font></font>
   ...<font></font>
</code></pre>

<p>instead .</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>You can use <strong>map</strong> function also.</p>

<pre><code>someArray = [{name:"Kristian", lines:"2,5,10"},{name:"John",lines:"1,19,26,96"}];<font></font>
newArray=[];<font></font>
someArray.map(function(obj, index){<font></font>
    if(obj.name !== "Kristian"){<font></font>
       newArray.push(obj);<font></font>
    }<font></font>
});<font></font>
someArray = newArray;<font></font>
console.log(someArray);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><a href="http://underscorejs.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UndercoreJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">投票以</font><font style="vertical-align: inherit;">简化数组的工作。</font></font></p>

<p><a href="http://underscorejs.org/#without" rel="noreferrer" title="_.without（）"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">_.without（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数有助于删除元素：</font></font></p>

<pre><code> _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);<font></font>
    =&gt; [2, 3, 4]<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个对我有用的函数：</font></font></p>

<pre><code>function removeFromArray(array, value) {<font></font>
    var idx = array.indexOf(value);<font></font>
    if (idx !== -1) {<font></font>
        array.splice(idx, 1);<font></font>
    }<font></font>
    return array;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无村村</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在数组上使用拼接功能。</font><font style="vertical-align: inherit;">指定起始元素的位置和要删除的子序列的长度。</font></font></p>

<pre><code>someArray.splice(pos, 1);
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Eva</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我制作了一个动态函数，将对象Array，Key和value取出，并在删除所需对象后返回相同的数组：</font></font></p>

<pre><code>function removeFunction (myObjects,prop,valu)<font></font>
        {<font></font>
             return myObjects.filter(function (val) {<font></font>
              return val[prop] !== valu;<font></font>
          });<font></font>
<font></font>
        }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完整示例：</font></font><a href="http://jsfiddle.net/aPH7m/1/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DEMO</font></font></a></p>

<pre><code>var obj = {<font></font>
            "results": [<font></font>
              {<font></font>
                  "id": "460",<font></font>
                  "name": "Widget 1",<font></font>
                  "loc": "Shed"<font></font>
              }, {<font></font>
                  "id": "461",<font></font>
                  "name": "Widget 2",<font></font>
                  "loc": "Kitchen"<font></font>
              }, {<font></font>
                  "id": "462",<font></font>
                  "name": "Widget 3",<font></font>
                  "loc": "bath"<font></font>
              }<font></font>
            ]<font></font>
            };<font></font>
<font></font>
<font></font>
        function removeFunction (myObjects,prop,valu)<font></font>
        {<font></font>
             return myObjects.filter(function (val) {<font></font>
              return val[prop] !== valu;<font></font>
          });<font></font>
<font></font>
        }<font></font>
<font></font>
<font></font>
console.log(removeFunction(obj.results,"id","460"));<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenTonyL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所示的“数组”是无效的JavaScript语法。</font><font style="vertical-align: inherit;">圆括号</font></font><code>{}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于具有属性名称/值对的对象，但方括号</font></font><code>[]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于数组-像这样：</font></font></p>

<pre><code>someArray = [{name:"Kristian", lines:"2,5,10"}, {name:"John", lines:"1,19,26,96"}];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，您可以使用该</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/splice" rel="noreferrer"><code>.splice()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除项目。</font><font style="vertical-align: inherit;">要删除第一项（索引0），请说：</font></font></p>

<pre><code>someArray.splice(0,1);<font></font>
<font></font>
// someArray = [{name:"John", lines:"1,19,26,96"}];<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不知道索引，但想在数组中搜索以找到名称为“ Kristian”的项，则可以删除该项：</font></font></p>

<pre><code>for (var i =0; i &lt; someArray.length; i++)<font></font>
   if (someArray[i].name === "Kristian") {<font></font>
      someArray.splice(i,1);<font></font>
      break;<font></font>
   }<font></font>
</code></pre>

<p>EDIT: I just noticed your question is tagged with "jQuery", so you could try the <a href="http://api.jquery.com/jQuery.grep/" rel="noreferrer"><code>$.grep()</code> method</a>:</p>

<pre><code>someArray = $.grep(someArray,<font></font>
                   function(o,i) { return o.name === "Kristian"; },<font></font>
                   true);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO蛋蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议对</font></font><a href="http://sugarjs.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此类</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">常见任务</font><font style="vertical-align: inherit;">使用lodash.js或</font><a href="http://sugarjs.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">sugar.js</font></a><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>// lodash.js<font></font>
someArray = _.reject(someArray, function(el) { return el.Name === "Kristian"; });<font></font>
<font></font>
// sugar.js<font></font>
someArray.remove(function(el) { return el.Name === "Kristian"; });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在大多数项目中，像这样的库提供一组辅助方法非常有用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">别坑我路易</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">干净的解决方案是使用</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/filter" rel="noreferrer"><code>Array.filter</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var filtered = someArray.filter(function(el) { return el.Name != "Kristian"; }); 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样做的问题是它</font></font><a href="http://kangax.github.com/es5-compat-table/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在IE &lt;9上运行。但是，您可以包括来自Java库的代码（例如</font></font><a href="http://documentcloud.github.com/underscore/#filter" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">underscore.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），该代码可为任何浏览器实现此功能。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
