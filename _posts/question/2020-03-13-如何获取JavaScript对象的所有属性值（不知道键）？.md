---
layout: question
title:  如何获取JavaScript对象的所有属性值（不知道键）？
date:   2020-03-13T10:19:58.000Z
description: 如果有一个Javascript对象： var objects={...};假设它有50多个属性，却不知道属性名称（即不知道“键”）如何在循环中获...
img: 
author: Pro小胖
category: question
answer: 13
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有一个Javascript对象： </font></font></p>

<pre><code>var objects={...};
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设它有50多个属性，却不知道属性名称（即不知道“键”）如何在循环中获取每个属性值？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOHarry猪猪</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>use </p>

<pre><code>console.log(variable)
</code></pre>

<p>and if you using google chrome open Console by using Ctrl+Shift+j</p>

<p>Goto &gt;&gt; Console</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>Object.entries do it in better way.   </p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>  var dataObject = {"a":{"title":"shop"}, "b":{"title":"home"}}<font></font>
 <font></font>
   Object.entries(dataObject).map(itemArray =&gt; { <font></font>
     console.log("key=", itemArray[0], "value=", itemArray[1])<font></font>
  })</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐泡芙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>const myObj = { a:1, b:2, c:3 }</code></p>

<p>Get all values:</p>

<ul>
<li><p>the shortest way:</p>

<ul>
<li><code>const myValues = Object.values(myObj)</code></li>
</ul></li>
<li><p><code>const myValues = Object.keys(myObj).map(key =&gt; myObj[key])</code></p></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">木心小哥</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>var objects={...}; this.getAllvalues = function () {<font></font>
        var vls = [];<font></font>
        for (var key in objects) {<font></font>
            vls.push(objects[key]);<font></font>
        }<font></font>
        return vls;<font></font>
    }<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom凯飞云</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>ECMA2017 onwards:</p>

<p><code>Object.values(obj)</code> will fetch you all the property values as an array.</p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values" rel="nofollow noreferrer">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values</a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>Apparently - as I recently learned - this is the fastest way to do it:</p>

<pre><code>var objs = {...};<font></font>
var objKeys = Object.keys(obj);<font></font>
for (var i = 0, objLen = objKeys.length; i &lt; objLen; i++) {<font></font>
    // do whatever in here<font></font>
    var obj = objs[objKeys[i]];<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>use a polyfill like:</p>

<pre><code>if(!Object.values){Object.values=obj=&gt;Object.keys(obj).map(key=&gt;obj[key])}
</code></pre>

<p>then use</p>

<pre><code>Object.values(my_object)
</code></pre>

<p>3) profit!</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Eva</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES5 </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" rel="noreferrer"><code>Object.keys</code></a></p>

<pre><code>var a = { a: 1, b: 2, c: 3 };<font></font>
Object.keys(a).map(function(key){ return a[key] });<font></font>
// result: [1,2,3]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinTom</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以循环浏览以下按键：</font></font></p>

<pre><code>foo = {one:1, two:2, three:3};<font></font>
for (key in foo){<font></font>
    console.log("foo["+ key +"]="+ foo[key]);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将输出：</font></font></p>

<pre><code>foo[one]=1<font></font>
foo[two]=2<font></font>
foo[three]=3<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋蛋蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果可以访问Underscore.js，则可以使用以下</font></font><a href="http://underscorejs.org/#values" rel="noreferrer"><code>_.values</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数：</font></font></p>

<pre><code>_.values({one : 1, two : 2, three : 3}); // return [1, 2, 3]
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Tony</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个可重用的函数，用于将值放入数组。</font><font style="vertical-align: inherit;">它也考虑了原型。</font></font></p>

<pre><code>Object.values = function (obj) {<font></font>
    var vals = [];<font></font>
    for( var key in obj ) {<font></font>
        if ( obj.hasOwnProperty(key) ) {<font></font>
            vals.push(obj[key]);<font></font>
        }<font></font>
    }<font></font>
    return vals;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云斯丁GO</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您真的想要一个Values数组，我发现比使用for ... in循环构建一个数组更干净。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMA 5.1+</font></font></p>

<pre><code>function values(o) { return Object.keys(o).map(function(k){return o[k]}) }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值得注意的是，在大多数情况下，您实际上并不需要数组值，这样做会更快：</font></font></p>

<pre><code>for(var k in o) something(o[k]);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将遍历对象o的键。</font><font style="vertical-align: inherit;">在每次迭代中，将k设置为o的键。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A十三</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过使用一个简单的</font></font><code>for..in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环：</font></font></p>

<pre><code>for(var key in objects) {<font></font>
    var value = objects[key];<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
