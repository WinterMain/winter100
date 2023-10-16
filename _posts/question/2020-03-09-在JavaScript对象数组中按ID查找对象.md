---
layout: question
title:  在JavaScript对象数组中按ID查找对象
date:   2020-03-09T12:52:02.000Z
description: 我有一个数组：myArray = \[{'id' '73','foo' 'bar'},{'id' '45','foo' 'bar'}, etc.\]...
img: 
author: ProJinJin
category: question
answer: 15
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个数组：</font></font></p>

<pre><code>myArray = [{'id':'73','foo':'bar'},{'id':'45','foo':'bar'}, etc.]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我无法更改数组的结构。</font><font style="vertical-align: inherit;">我正在传递ID为</font></font><code>45</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我想获取</font></font><code>'bar'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组中的该对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在JavaScript或jQuery中做到这一点？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第260篇《在JavaScript对象数组中按ID查找对象》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易EvaSam</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>This solution may helpful as well:</p>

<pre><code>Array.prototype.grep = function (key, value) {<font></font>
    var that = this, ret = [];<font></font>
    this.forEach(function (elem, index) {<font></font>
        if (elem[key] === value) {<font></font>
            ret.push(that[index]);<font></font>
        }<font></font>
    });<font></font>
    return ret.length &lt; 2 ? ret[0] : ret;<font></font>
};<font></font>
var bar = myArray.grep("id","45");<font></font>
</code></pre>

<p>I made it just like <code>$.grep</code> and if one object is find out, <em>function</em> will return the object, rather than an array.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy逆天路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Shortest,</p>

<pre><code>var theAnswerObj = _.findWhere(array, {id : 42});
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Consider "axesOptions" to be array of objects with an object format being
{:field_type =&gt; 2, :fields =&gt; [1,3,4]}</p>

<pre><code>function getFieldOptions(axesOptions,choice){<font></font>
  var fields=[]<font></font>
  axesOptions.each(function(item){<font></font>
    if(item.field_type == choice)<font></font>
        fields= hashToArray(item.fields)<font></font>
  });<font></font>
  return fields;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Stafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>We can use Jquery methods <code>$.each()/$.grep()</code></p>

<pre><code>var data= [];<font></font>
$.each(array,function(i){if(n !== 5 &amp;&amp; i &gt; 4){data.push(item)}}<font></font>
</code></pre>

<p>or </p>

<pre><code>var data = $.grep(array, function( n, i ) {<font></font>
  return ( n !== 5 &amp;&amp; i &gt; 4 );<font></font>
});<font></font>
</code></pre>

<p>use ES6 syntax: </p>

<pre><code>Array.find, Array.filter, Array.forEach, Array.map
</code></pre>

<p>Or use Lodash <a href="https://lodash.com/docs/4.17.10#filter" rel="nofollow noreferrer">https://lodash.com/docs/4.17.10#filter</a>, Underscore <a href="https://underscorejs.org/#filter" rel="nofollow noreferrer">https://underscorejs.org/#filter</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿前端前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>I really liked the answer provided by Aaron Digulla but needed to keep my array of objects so I could iterate through it later.  So I modified it to </p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>	var indexer = {};<font></font>
	for (var i = 0; i &lt; array.length; i++) {<font></font>
	    indexer[array[i].id] = parseInt(i);<font></font>
	}<font></font>
	<font></font>
	//Then you can access object properties in your array using <font></font>
	array[indexer[id]].property</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Use <code>Array.prototype.filter()</code> function.</p>

<p><strong>DEMO</strong>: <a href="https://jsfiddle.net/sumitridhal/r0cz0w5o/4/" rel="nofollow noreferrer">https://jsfiddle.net/sumitridhal/r0cz0w5o/4/</a></p>

<p><strong>JSON</strong></p>

<pre><code>var jsonObj =[<font></font>
 {<font></font>
  "name": "Me",<font></font>
  "info": {<font></font>
   "age": "15",<font></font>
   "favColor": "Green",<font></font>
   "pets": true<font></font>
  }<font></font>
 },<font></font>
 {<font></font>
  "name": "Alex",<font></font>
  "info": {<font></font>
   "age": "16",<font></font>
   "favColor": "orange",<font></font>
   "pets": false<font></font>
  }<font></font>
 },<font></font>
{<font></font>
  "name": "Kyle",<font></font>
  "info": {<font></font>
   "age": "15",<font></font>
   "favColor": "Blue",<font></font>
   "pets": false<font></font>
  }<font></font>
 }<font></font>
];<font></font>
</code></pre>

<p><strong>FILTER</strong></p>

<pre><code>var getPerson = function(name){<font></font>
    return jsonObj.filter(function(obj) {<font></font>
      return obj.name === name;<font></font>
    });<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>You can do this even in pure JavaScript by using the in built "filter" function for arrays:</p>

<pre><code>Array.prototype.filterObjects = function(key, value) {<font></font>
    return this.filter(function(x) { return x[key] === value; })<font></font>
}<font></font>
</code></pre>

<p>So now simply pass "id" in place of <code>key</code> and "45" in place of <code>value</code>, and you will get the full object matching an id of 45. So that would be,</p>

<pre><code>myArr.filterObjects("id", "45");
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamEva</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>As long as the browser supports <a href="https://en.wikipedia.org/wiki/ECMAScript#Versions" rel="nofollow">ECMA-262</a>, 5th edition (December 2009), this should work, almost one-liner:</p>

<pre><code>var bFound = myArray.some(function (obj) {<font></font>
    return obj.id === 45;<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Building on the accepted answer:</p>

<p>jQuery:</p>

<pre><code>var foo = $.grep(myArray, function(e){ return e.id === foo_id})<font></font>
myArray.pop(foo)<font></font>
</code></pre>

<p>Or CoffeeScript:</p>

<pre><code>foo = $.grep myArray, (e) -&gt; e.id == foo_id<font></font>
myArray.pop foo<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>If you do this multiple times, you may set up a Map (ES6):</p>

<pre><code>const map = new Map( myArray.map(el =&gt; [el.id, el]) );
</code></pre>

<p>Then you can simply do:</p>

<pre><code>map.get(27).foo
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearItachi</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>You may try out Sugarjs from <a href="http://sugarjs.com/" rel="nofollow">http://sugarjs.com/</a>.</p>

<p>It has a very sweet method on Arrays, <code>.find</code>. So you can find an element like this:</p>

<pre><code>array.find( {id: 75} );
</code></pre>

<p>You may also pass an object with more properties to it to add another "where-clause".</p>

<p><em>Note that Sugarjs extends native objects, and some people consider this very evil...</em></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>You can use filters,</p>

<pre><code>  function getById(id, myArray) {<font></font>
    return myArray.filter(function(obj) {<font></font>
      if(obj.id == id) {<font></font>
        return obj <font></font>
      }<font></font>
    })[0]<font></font>
  }<font></font>
<font></font>
get_my_obj = getById(73, myArray);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">用户7049302300</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>myArray.filter(function(a){ return a.id == some_id_you_want })[0]
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinGreen伽罗</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 2015</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在数组上</font><font style="vertical-align: inherit;">提供了</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">find（）</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var myArray = [<font></font>
 {id:1, name:"bob"},<font></font>
 {id:2, name:"dan"},<font></font>
 {id:3, name:"barb"},<font></font>
]<font></font>
<font></font>
// grab the Array item which matchs the id "2"<font></font>
var item = myArray.find(item =&gt; item.id === 2);<font></font>
<font></font>
// print<font></font>
console.log(item.name);</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它无需外部库即可工作。</font><font style="vertical-align: inherit;">但是，如果您希望使用</font></font><a href="http://kangax.github.io/compat-table/es6/#Array.prototype_methods" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">较旧的浏览器支持</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可能需要包含</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find#Polyfill" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此polyfill</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于您已经在使用jQuery，因此可以使用</font><font style="vertical-align: inherit;">旨在搜索数组</font><font style="vertical-align: inherit;">的</font></font><a href="http://api.jquery.com/jQuery.grep/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">grep</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数：</font></font></p>

<pre><code>var result = $.grep(myArray, function(e){ return e.id == id; });
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果是包含找到的项目的数组。</font><font style="vertical-align: inherit;">如果您知道对象始终存在并且只发生一次，则可以使用</font></font><code>result[0].foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取值。</font><font style="vertical-align: inherit;">否则，您应该检查结果数组的长度。</font><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>if (result.length === 0) {<font></font>
  // no result found<font></font>
} else if (result.length === 1) {<font></font>
  // property found, access the foo property using result[0].foo<font></font>
} else {<font></font>
  // multiple items found<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
