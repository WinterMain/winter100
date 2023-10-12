---
layout: question
title:  获取JavaScript数组中的所有唯一值（删除重复项）
date:   2020-03-09T13:03:32.000Z
description: 我需要确定一个唯一的数字数组。我在互联网上找到了下面的代码片段，并且在数组中包含零之前，它都可以正常工作。我在Stack Overflow的这里找到了另一...
img: 
author: 古一十三
category: question
answer: 14
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要确定一个唯一的数字数组。</font><font style="vertical-align: inherit;">我在互联网上找到了下面的代码片段，并且在数组中包含零之前，它都可以正常工作。</font><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">在Stack Overflow的这里</font><font style="vertical-align: inherit;">找到</font></font><a href="https://stackoverflow.com/questions/1890203"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了另一个脚本</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，看起来几乎完全一样，但是它不会失败。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，为了帮助我学习，有人可以帮助我确定原型脚本出了什么问题吗？</font></font></p>

<pre><code>Array.prototype.getUnique = function() {<font></font>
 var o = {}, a = [], i, e;<font></font>
 for (i = 0; e = this[i]; i++) {o[e] = 1};<font></font>
 for (e in o) {a.push (e)};<font></font>
 return a;<font></font>
}<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自重复问题的更多答案：</font></font></h3>

<ul>
<li><a href="https://stackoverflow.com/questions/9229645"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从JS数组中删除重复的值</font></font></a></li>
</ul>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似的问题：</font></font></h3>

<ul>
<li><a href="https://stackoverflow.com/questions/840781"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取数组中的所有非唯一值（即：重复/多次出现）</font></font></a></li>
</ul></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第268篇《获取JavaScript数组中的所有唯一值（删除重复项）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h2>Es6 based solution...</h2>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var arr = [2, 3, 4, 2, 3, 4, 2];<font></font>
const result = [...new Set(arr)];<font></font>
console.log(result);</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村AL</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Finding unique Array values in simple method</p>

<pre><code>function arrUnique(a){<font></font>
  var t = [];<font></font>
  for(var x = 0; x &lt; a.length; x++){<font></font>
    if(t.indexOf(a[x]) == -1)t.push(a[x]);<font></font>
  }<font></font>
  return t;<font></font>
}<font></font>
arrUnique([1,4,2,7,1,5,9,2,4,7,2]) // [1, 4, 2, 7, 5, 9]<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西逆天十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>Array.prototype.getUnique = function() {<font></font>
    var o = {}, a = []<font></font>
    for (var i = 0; i &lt; this.length; i++) o[this[i]] = 1<font></font>
    for (var e in o) a.push(e)<font></font>
    return a<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>[...new Set(duplicates)]
</code></pre>

<blockquote>
  <p>This is the simplest one and referenced from <strong><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#Remove_duplicate_elements_from_the_array" rel="noreferrer">MDN Web Docs</a></strong>.</p>
</blockquote>

<pre><code>const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]<font></font>
console.log([...new Set(numbers)]) // [2, 3, 4, 5, 6, 7, 32]<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝乐</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Now using sets you can remove duplicates and convert them back to the array.</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var names = ["Mike","Matt","Nancy", "Matt","Adam","Jenny","Nancy","Carl"];<font></font>
<font></font>
console.log([...new Set(names)])</code></pre>
</div>
</div>
<p></p>

<p>Another solution is to use sort &amp; filter</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var names = ["Mike","Matt","Nancy", "Matt","Adam","Jenny","Nancy","Carl"];<font></font>
var namesSorted = names.sort();<font></font>
const result = namesSorted.filter((e, i) =&gt; namesSorted[i] != namesSorted[i+1]);<font></font>
console.log(result);</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LItachi</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>This prototype <code>getUnique</code> is not totally correct, because if i have a Array like: <code>["1",1,2,3,4,1,"foo"]</code> it will return <code>["1","2","3","4"]</code> and <code>"1"</code> is string and <code>1</code> is a integer; they are different.</p>

<p>Here is a correct solution:</p>

<pre><code>Array.prototype.unique = function(a){<font></font>
    return function(){ return this.filter(a) }<font></font>
}(function(a,b,c){ return c.indexOf(a,b+1) &lt; 0 });<font></font>
</code></pre>

<p>using:</p>

<pre><code>var foo;<font></font>
foo = ["1",1,2,3,4,1,"foo"];<font></font>
foo.unique();<font></font>
</code></pre>

<p>The above will produce <code>["1",2,3,4,1,"foo"]</code>.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以使用ES6集来做到这一点：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var duplicatedArray = [1, 2, 3, 4, 5, 1, 1, 1, 2, 3, 4];<font></font>
var uniqueArray = Array.from(new Set(duplicatedArray));<font></font>
<font></font>
console.log(uniqueArray);</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//输出将是 </font></font></p>

<pre><code>uniqueArray = [1,2,3,4,5];
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>["Defects", "Total", "Days", "City", "Defects"].reduce(function(prev, cur) {<font></font>
  return (prev.indexOf(cur) &lt; 0) ? prev.concat([cur]) : prev;<font></font>
 }, []);<font></font>
<font></font>
[0,1,2,0,3,2,1,5].reduce(function(prev, cur) {<font></font>
  return (prev.indexOf(cur) &lt; 0) ? prev.concat([cur]) : prev;<font></font>
 }, []);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单，</font></font><a href="http://jsperf.com/unique-in-array"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最快的方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在Chrome中）：</font></font></p>

<pre><code>Array.prototype.unique = function() {<font></font>
    var a = [];<font></font>
    for (var i=0, l=this.length; i&lt;l; i++)<font></font>
        if (a.indexOf(this[i]) === -1)<font></font>
            a.push(this[i]);<font></font>
    return a;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需遍历数组中的每个项目，测试该项目是否已经在列表中，如果不是，则将其推入要返回的数组。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据jsPerf的说法，此功能是</font></font><a href="http://jsperf.com/unique-in-array"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在任何地方都能找到的最快的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能</font><font style="vertical-align: inherit;">- </font><a href="http://jsperf.com/unique-in-array"><font style="vertical-align: inherit;">可以</font></a><font style="vertical-align: inherit;">随意添加自己的功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">非原型版本：</font></font></p>

<pre><code>function uniques(arr) {<font></font>
    var a = [];<font></font>
    for (var i=0, l=arr.length; i&lt;l; i++)<font></font>
        if (a.indexOf(arr[i]) === -1 &amp;&amp; arr[i] !== '')<font></font>
            a.push(arr[i]);<font></font>
    return a;<font></font>
}<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">排序</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当还需要对数组进行排序时，以下是最快的：</font></font></p>

<pre><code>Array.prototype.sortUnique = function() {<font></font>
    this.sort();<font></font>
    var last_i;<font></font>
    for (var i=0;i&lt;this.length;i++)<font></font>
        if ((last_i = this.lastIndexOf(this[i])) !== i)<font></font>
            this.splice(i+1, last_i-i);<font></font>
    return this;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或非原型：</font></font></p>

<pre><code>function sortUnique(arr) {<font></font>
    arr.sort();<font></font>
    var last_i;<font></font>
    for (var i=0;i&lt;arr.length;i++)<font></font>
        if ((last_i = arr.lastIndexOf(arr[i])) !== i)<font></font>
            arr.splice(i+1, last_i-i);<font></font>
    return arr;<font></font>
}<font></font>
</code></pre>

<p>This is also <a href="http://jsperf.com/unique-in-array">faster than the above method</a> in most non-chrome browsers.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿小胖</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的解决方案：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="true">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var arr = [1, 3, 4, 1, 2, 1, 3, 3, 4, 1];<font></font>
console.log([...new Set(arr)]);</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var arr = [1, 3, 4, 1, 2, 1, 3, 3, 4, 1];<font></font>
console.log(Array.from(new Set(arr)));</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门十三LEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一线纯JavaScript</font></font></h1>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ES6语法</font></font></strong></p>

<p><code>list = list.filter((x, i, a) =&gt; a.indexOf(x) == i)</code></p>

<pre><code>x --&gt; item in array<font></font>
i --&gt; index of item<font></font>
a --&gt; array reference, (in this case "list")<font></font>
</code></pre>

<p><a href="https://i.stack.imgur.com/TfGaP.png"><img src="https://i.stack.imgur.com/TfGaP.png" alt="在此处输入图片说明"></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用ES5语法</font></font></strong></p>

<pre><code>list = list.filter(function (x, i, a) { <font></font>
    return a.indexOf(x) == i; <font></font>
});<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器兼容性</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：IE9 +</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐小小</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用</font></font><a href="http://underscorejs.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">underscore.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.log(_.uniq([1, 2, 1, 3, 1, 4]));</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="http://underscorejs.org/underscore-min.js"&gt;&lt;/script&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将返回：</font></font></p>

<pre><code>[1, 2, 3, 4]
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6 / ES2015的更新答案</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：使用</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Set" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Set</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，单行解决方案是：</font></font></p>

<pre><code>var items = [4,5,4,6,3,4,5,2,23,1,4,4,4]<font></font>
var uniqueItems = Array.from(new Set(items))<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪个返回 </font></font></p>

<pre><code>[4, 5, 6, 3, 2, 23, 1]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如</font></font><a href="https://stackoverflow.com/users/1647737/le-m"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">le_m</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议的那样，也可以使用</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">spread操作符</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来缩短它</font><font style="vertical-align: inherit;">，例如</font></font></p>

<pre><code>var uniqueItems = [...new Set(items)]
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从那以后，我发现了一个使用jQuery的不错的方法</font></font></p>

<pre><code>arr = $.grep(arr, function(v, k){<font></font>
    return $.inArray(v ,arr) === k;<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：此代码是从</font></font><a href="http://paulirish.com/2010/duck-punching-with-jquery/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Paul Irish的鸭打孔帖子中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提取</font><a href="http://paulirish.com/2010/duck-punching-with-jquery/" rel="noreferrer"><font style="vertical-align: inherit;">的</font></a><font style="vertical-align: inherit;"> -我忘了给您以谢意了：P</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
