---
layout: question
title:  如何在JavaScript中合并两个数组并删除重复项
date:   2020-03-09T13:40:11.000Z
description: 我有两个JavaScript数组：var array1 = \["Vijendra","Singh"\];var array2 = \["Singh", ...
img: 
author: A小胖
category: question
answer: 18
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有两个JavaScript数组：</font></font></p>

<pre><code>var array1 = ["Vijendra","Singh"];<font></font>
var array2 = ["Singh", "Shakya"];<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望输出为：</font></font></p>

<pre><code>var array3 = ["Vijendra","Singh","Shakya"];
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出数组应删除重复的单词。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在JavaScript中合并两个数组，以使每个数组中的唯一项按插入原始数组中的相同顺序获得？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第282篇《如何在JavaScript中合并两个数组并删除重复项》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyJinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">合并两个数组有很多解决方案。</font><font style="vertical-align: inherit;">它们可以分为两个主要类别（使用诸如lodash或underscore.js之类的第三方库除外）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">a）合并两个数组并删除重复的项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">b）合并之前过滤掉项目。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">合并两个数组并删除重复的项</font></font></h2>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结合</font></font></h3>

<pre><code>// mutable operation(array1 is the combined array)<font></font>
array1.push(...array2);<font></font>
array1.unshift(...array2);<font></font>
<font></font>
// immutable operation<font></font>
const combined = array1.concat(array2);<font></font>
const combined = [...array1, ...array2];    // ES6<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">统一</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">统一数组的方法有很多，我个人建议以下两种方法。</font></font></p>

<pre><code>// a little bit tricky<font></font>
const merged = combined.filter((item, index) =&gt; combined.indexOf(item) === index);<font></font>
const merged = [...new Set(combined)];<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">合并之前先过滤掉项目</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有很多方法，但是由于其简单性，我个人建议以下代码。</font></font></p>

<pre><code>const merged = array1.concat(array2.filter(secItem =&gt; !array1.includes(secItem)));
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用Set完成。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var array1 = ["Vijendra","Singh"];<font></font>
var array2 = ["Singh", "Shakya"];<font></font>
<font></font>
var array3 = array1.concat(array2);<font></font>
var tempSet = new Set(array3);<font></font>
array3 = Array.from(tempSet);<font></font>
<font></font>
//show output<font></font>
document.body.querySelector("div").innerHTML = JSON.stringify(array3);</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div style="width:100%;height:4rem;line-height:4rem;background-color:steelblue;color:#DDD;text-align:center;font-family:Calibri" &gt; <font></font>
  temp text <font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱泡芙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>//Array.indexOf was introduced in javascript 1.6 (ECMA-262) <font></font>
//We need to implement it explicitly for other browsers, <font></font>
if (!Array.prototype.indexOf)<font></font>
{<font></font>
  Array.prototype.indexOf = function(elt, from)<font></font>
  {<font></font>
    var len = this.length &gt;&gt;&gt; 0;<font></font>
<font></font>
    for (; from &lt; len; from++)<font></font>
    {<font></font>
      if (from in this &amp;&amp;<font></font>
          this[from] === elt)<font></font>
        return from;<font></font>
    }<font></font>
    return -1;<font></font>
  };<font></font>
}<font></font>
//now, on to the problem<font></font>
<font></font>
var array1 = ["Vijendra","Singh"];<font></font>
var array2 = ["Singh", "Shakya"];<font></font>
<font></font>
var merged = array1.concat(array2);<font></font>
var t;<font></font>
for(i = 0; i &lt; merged.length; i++)<font></font>
  if((t = merged.indexOf(i + 1, merged[i])) != -1)<font></font>
  {<font></font>
    merged.splice(t, 1);<font></font>
    i--;//in case of multiple occurrences<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>indexOf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他浏览器方法的</font><font style="vertical-align: inherit;">实现</font><font style="vertical-align: inherit;">来自</font></font><a href="https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Array/indexOf" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDC</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路在何方</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的一个半便士：</font></font></p>

<pre><code>Array.prototype.concat_n_dedupe = function(other_array) {<font></font>
  return this<font></font>
    .concat(other_array) // add second<font></font>
    .reduce(function(uniques, item) { // dedupe all<font></font>
      if (uniques.indexOf(item) == -1) {<font></font>
        uniques.push(item);<font></font>
      }<font></font>
      return uniques;<font></font>
    }, []);<font></font>
};<font></font>
<font></font>
var array1 = ["Vijendra","Singh"];<font></font>
var array2 = ["Singh", "Shakya"];<font></font>
<font></font>
var result = array1.concat_n_dedupe(array2);<font></font>
<font></font>
console.log(result);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需使用Underscore.js的=&gt; </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">uniq</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即可实现</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>array3 = _.uniq(array1.concat(array2))<font></font>
<font></font>
console.log(array3)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将打印</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[“ Vijendra”，“ Singh”，“ Shakya”]</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于ES6，只需一行：</font></font></p>

<pre><code>a = [1, 2, 3, 4]<font></font>
b = [4, 5]<font></font>
[...new Set(a.concat(b))]  // [1, 2, 3, 4, 5]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗卡卡西</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简化了</font></font><a href="https://stackoverflow.com/a/23080662/3093731"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">simo的答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并将其转变为一个不错的功能。</font></font></p>

<pre><code>function mergeUnique(arr1, arr2){<font></font>
    return arr1.concat(arr2.filter(function (item) {<font></font>
        return arr1.indexOf(item) === -1;<font></font>
    }));<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村路易</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的解决方案...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过点击...直接在浏览器控制台中进行检查。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无重复</font></font></h3>

<pre><code>a = [1, 2, 3];<font></font>
b = [3, 2, 1, "prince"];<font></font>
<font></font>
a.concat(b.filter(function(el) {<font></font>
    return a.indexOf(el) === -1;<font></font>
}));<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重复</font></font></h3>

<pre><code>["prince", "asish", 5].concat(["ravi", 4])
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您希望没有重复的内容，可以从此处尝试更好的解决方案- </font></font><a href="http://code.shouttoday.com/2016/04/best-way-to-merge-two-array-without.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">喊代码</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>[1, 2, 3].concat([3, 2, 1, "prince"].filter(function(el) {<font></font>
    return [1, 2, 3].indexOf(el) === -1;<font></font>
}));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Chrome浏览器控制台上尝试</font></font></p>

<pre><code> f12 &gt; console
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：</font></font></p>

<pre><code>["prince", "asish", 5, "ravi", 4]<font></font>
<font></font>
[1, 2, 3, "prince"]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实现此目的的现代方法是简单地使用</font></font><strong><em><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">散布运算符</font></font></a></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了避免重复，我们可以有效地使用</font></font><strong><em><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sets</font></font></a></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">；</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，集合不允许重复</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了从Set返回数组的输出，我们可以使用</font></font><strong><em><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Array.from（）</font></font></a></em></strong></li>
  </ul>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，这是您的情况的演示- </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var array1 = ["Vijendra","Singh"];<font></font>
var array2 = ["Singh", "Shakya"];<font></font>
var resArr = Array.from(new Set([...array1, ...array2]));<font></font>
console.log(resArr);</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么不使用对象？</font><font style="vertical-align: inherit;">您似乎正在尝试对集合建模。</font><font style="vertical-align: inherit;">但是，这不会保留顺序。</font></font></p>

<pre><code>var set1 = {"Vijendra":true, "Singh":true}<font></font>
var set2 = {"Singh":true,  "Shakya":true}<font></font>
<font></font>
// Merge second object into first<font></font>
function merge(set1, set2){<font></font>
  for (var key in set2){<font></font>
    if (set2.hasOwnProperty(key))<font></font>
      set1[key] = set2[key]<font></font>
  }<font></font>
  return set1<font></font>
}<font></font>
<font></font>
merge(set1, set2)<font></font>
<font></font>
// Create set from array<font></font>
function setify(array){<font></font>
  var result = {}<font></font>
  for (var item in array){<font></font>
    if (array.hasOwnProperty(item))<font></font>
      result[array[item]] = true<font></font>
  }<font></font>
  return result<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天古一Mandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是避免嵌套循环（O（n ^ 2））和</font></font><code>.indexOf()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（+ O（n））。</font></font></p>

<pre><code>function merge(a, b) {<font></font>
    var hash = {}, i;<font></font>
    for (i=0; i&lt;a.length; i++) {<font></font>
        hash[a[i]]=true;<font></font>
    } <font></font>
    for (i=0; i&lt;b.length; i++) {<font></font>
        hash[b[i]]=true;<font></font>
    } <font></font>
    return Object.keys(hash);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">合并两个数组并在es6中删除重复项
    </font></font></p>

<pre><code>let arr1 = [3, 5, 2, 2, 5, 5];<font></font>
let arr2 = [2, 1, 66, 5];<font></font>
let unique = [...new Set([...arr1,...arr2])];<font></font>
console.log(unique);<font></font>
// [ 3, 5, 2, 1, 66 ]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天猿理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>Array.prototype.merge = function(/* variable number of arrays */){<font></font>
    for(var i = 0; i &lt; arguments.length; i++){<font></font>
        var array = arguments[i];<font></font>
        for(var j = 0; j &lt; array.length; j++){<font></font>
            if(this.indexOf(array[j]) === -1) {<font></font>
                this.push(array[j]);<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
    return this;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更好的数组合并功能。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙Green</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需投入我的两分钱。</font></font></p>

<pre><code>function mergeStringArrays(a, b){<font></font>
    var hash = {};<font></font>
    var ret = [];<font></font>
<font></font>
    for(var i=0; i &lt; a.length; i++){<font></font>
        var e = a[i];<font></font>
        if (!hash[e]){<font></font>
            hash[e] = true;<font></font>
            ret.push(e);<font></font>
        }<font></font>
    }<font></font>
<font></font>
    for(var i=0; i &lt; b.length; i++){<font></font>
        var e = b[i];<font></font>
        if (!hash[e]){<font></font>
            hash[e] = true;<font></font>
            ret.push(e);<font></font>
        }<font></font>
    }<font></font>
<font></font>
    return ret;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我经常使用的一种方法，它使用一个对象作为hashlookup表来进行重复检查。</font><font style="vertical-align: inherit;">假设哈希为O（1），则在O（n）中运行，其中n为a.length + b.length。</font><font style="vertical-align: inherit;">老实说，我不知道浏览器如何进行哈希处理，但是它在成千上万的数据点上表现良好。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需使用ECMAScript 6即可做到</font></font></p>

<pre><code>var array1 = ["Vijendra", "Singh"];<font></font>
var array2 = ["Singh", "Shakya"];<font></font>
var array3 = [...new Set([...array1 ,...array2])];<font></font>
console.log(array3); // ["Vijendra", "Singh", "Shakya"];<font></font>
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">散布运算符</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">连接数组。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Set</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一组独特的元素。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次使用散布运算符将Set转换为数组。</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Near阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Set</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（ECMAScript 2015），就这么简单：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const array1 = ["Vijendra", "Singh"];<font></font>
const array2 = ["Singh", "Shakya"];<font></font>
console.log(Array.from(new Set(array1.concat(array2))));</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimAJim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Underscore.js或Lo-Dash，您可以执行以下操作：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.log(_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]));</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.min.js"&gt;&lt;/script&gt;</code></pre>
</div>
</div>
<p></p>

<p><a href="http://underscorejs.org/#union" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://underscorejs.org/#union</font></font></a></p>

<p><a href="http://lodash.com/docs#union" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://lodash.com/docs#union</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiHarry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先连接两个数组，然后仅过滤出唯一项：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var a = [1, 2, 3], b = [101, 2, 1, 10]<font></font>
var c = a.concat(b)<font></font>
var d = c.filter((item, pos) =&gt; c.indexOf(item) === pos)<font></font>
<font></font>
console.log(d) // d is [1, 2, 3, 101, 10]</code></pre>
</div>
</div>
<p></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如建议的那样，在性能上更明智的解决方案是在</font></font><code>b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与级联之前</font><font style="vertical-align: inherit;">过滤掉其中的唯一项</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var a = [1, 2, 3], b = [101, 2, 1, 10]<font></font>
var c = a.concat(b.filter((item) =&gt; a.indexOf(item) &lt; 0))<font></font>
<font></font>
console.log(c) // c is [1, 2, 3, 101, 10]</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
