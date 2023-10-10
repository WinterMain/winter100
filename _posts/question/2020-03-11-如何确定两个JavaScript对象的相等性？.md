---
layout: question
title:  如何确定两个JavaScript对象的相等性？
date:   2020-03-11T09:46:45.000Z
description: 严格的相等运算符将告诉您两个对象类型是否相等。但是，有没有办法判断两个对象是否相等，就像 Java中的哈希码值一样？堆栈溢出问题JavaScript中...
img: 
author: LJinJin
category: question
answer: 14
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严格的相等运算符将告诉您两个对象</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否相等。</font><font style="vertical-align: inherit;">但是，有没有办法判断两个对象是否相等，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Java中</font><strong><font style="vertical-align: inherit;">的哈希码</font></strong><font style="vertical-align: inherit;">值</font><strong><font style="vertical-align: inherit;">一样</font></strong><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">堆栈溢出问题</font></font><em><a href="https://stackoverflow.com/questions/194846"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中是否存在某种hashCode函数？</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与这个问题相似，但需要更多的学术答案。</font><font style="vertical-align: inherit;">上面的场景演示了为什么必须要有一个，而我想知道是否有任何</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等效的解决方案</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第776篇《如何确定两个JavaScript对象的相等性？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Harry</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这有点老了，但我想添加一个针对此问题的解决方案。</font><font style="vertical-align: inherit;">我有一个对象，想知道其数据何时更改。</font><font style="vertical-align: inherit;">“类似于Object.observe”，我所做的是：</font></font></p>

<pre><code>function checkObjects(obj,obj2){<font></font>
   var values = [];<font></font>
   var keys = [];<font></font>
   keys = Object.keys(obj);<font></font>
   keys.forEach(function(key){<font></font>
      values.push(key);<font></font>
   });<font></font>
   var values2 = [];<font></font>
   var keys2 = [];<font></font>
   keys2 = Object.keys(obj2);<font></font>
   keys2.forEach(function(key){<font></font>
      values2.push(key);<font></font>
   });<font></font>
   return (values == values2 &amp;&amp; keys == keys2)<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里可以复制它，并创建另一组数组以比较值和键。</font><font style="vertical-align: inherit;">这非常简单，因为它们现在是数组，如果对象的大小不同，则将返回false。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanNearPro</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了比较简单键/值对对象实例的键，我使用：</font></font></p>

<pre><code>function compareKeys(r1, r2) {<font></font>
    var nloops = 0, score = 0;<font></font>
    for(k1 in r1) {<font></font>
        for(k2 in r2) {<font></font>
            nloops++;<font></font>
            if(k1 == k2)<font></font>
                score++; <font></font>
        }<font></font>
    }<font></font>
    return nloops == (score * score);<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比较密钥后，一个简单的附加</font></font><code>for..in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环就足够了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复杂度为O（N * N），其中N为键的数量。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望/猜测我​​定义的对象不会包含超过1000个属性... </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无LEYTony</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是以上所有内容的补充，而不是替代。</font><font style="vertical-align: inherit;">如果您需要快速浅比较对象，而无需检查额外的递归情况。</font><font style="vertical-align: inherit;">这是一个镜头。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对此进行比较：1）拥有的属性数量相等，2）关键字名称相等，3）如果bCompareValues == true，则对应的属性值及其类型相等（三重相等）</font></font></p>

<pre><code>var shallowCompareObjects = function(o1, o2, bCompareValues) {<font></font>
    var s, <font></font>
        n1 = 0,<font></font>
        n2 = 0,<font></font>
        b  = true;<font></font>
<font></font>
    for (s in o1) { n1 ++; }<font></font>
    for (s in o2) { <font></font>
        if (!o1.hasOwnProperty(s)) {<font></font>
            b = false;<font></font>
            break;<font></font>
        }<font></font>
        if (bCompareValues &amp;&amp; o1[s] !== o2[s]) {<font></font>
            b = false;<font></font>
            break;<font></font>
        }<font></font>
        n2 ++;<font></font>
    }<font></font>
    return b &amp;&amp; n1 == n2;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德理查德</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议不要进行散列或序列化（如JSON解决方案所示）。</font><font style="vertical-align: inherit;">如果需要测试两个对象是否相等，则需要定义相等的含义。</font><font style="vertical-align: inherit;">可能是两个对象中的所有数据成员都匹配，或者可能是内存位置必须匹配（这意味着两个变量都引用了内存中的同一对象），或者可能是每个对象中只有一个数据成员必须匹配。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最近，我开发了一个对象，该对象的构造函数在每次创建实例时都会创建一个新的id（从1开始并以1递增）。</font><font style="vertical-align: inherit;">该对象具有isEqual函数，该函数将该id值与另一个对象的id值进行比较，如果匹配则返回true。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在那种情况下，我将“等于”定义为id值匹配。</font><font style="vertical-align: inherit;">假设每个实例都有一个唯一的ID，则可以用来执行这样的想法，即匹配对象也占据相同的内存位置。</font><font style="vertical-align: inherit;">虽然这不是必需的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西猿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看到了意大利面的代码答案。</font><font style="vertical-align: inherit;">不使用任何第三方库，这很容易。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，通过键的键名对两个对象进行排序。</font></font></p>

<pre><code>let objectOne = { hey, you }<font></font>
let objectTwo = { you, hey }<font></font>
<font></font>
// If you really wanted you could make this recursive for deep sort.<font></font>
const sortObjectByKeyname = (objectToSort) =&gt; {<font></font>
    return Object.keys(objectToSort).sort().reduce((r, k) =&gt; (r[k] = objectToSort[k], r), {});<font></font>
}<font></font>
<font></font>
let objectOne = sortObjectByKeyname(objectOne)<font></font>
let objectTwo = sortObjectByKeyname(objectTwo)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后只需使用字符串进行比较即可。</font></font></p>

<pre><code>JSON.stringify(objectOne) === JSON.stringify(objectTwo)
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGO西里</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，并决定编写自己的解决方案。</font><font style="vertical-align: inherit;">但是因为我也想将数组与对象进行比较，反之亦然，所以我设计了一个通用解决方案。</font><font style="vertical-align: inherit;">我决定将这些功能添加到原型中，但是可以轻松地将它们重写为独立功能。</font><font style="vertical-align: inherit;">这是代码：</font></font></p>

<pre><code>Array.prototype.equals = Object.prototype.equals = function(b) {<font></font>
    var ar = JSON.parse(JSON.stringify(b));<font></font>
    var err = false;<font></font>
    for(var key in this) {<font></font>
        if(this.hasOwnProperty(key)) {<font></font>
            var found = ar.find(this[key]);<font></font>
            if(found &gt; -1) {<font></font>
                if(Object.prototype.toString.call(ar) === "[object Object]") {<font></font>
                    delete ar[Object.keys(ar)[found]];<font></font>
                }<font></font>
                else {<font></font>
                    ar.splice(found, 1);<font></font>
                }<font></font>
            }<font></font>
            else {<font></font>
                err = true;<font></font>
                break;<font></font>
            }<font></font>
        }<font></font>
    };<font></font>
    if(Object.keys(ar).length &gt; 0 || err) {<font></font>
        return false;<font></font>
    }<font></font>
    return true;<font></font>
}<font></font>
<font></font>
Array.prototype.find = Object.prototype.find = function(v) {<font></font>
    var f = -1;<font></font>
    for(var i in this) {<font></font>
        if(this.hasOwnProperty(i)) {<font></font>
            if(Object.prototype.toString.call(this[i]) === "[object Array]" || Object.prototype.toString.call(this[i]) === "[object Object]") {<font></font>
                if(this[i].equals(v)) {<font></font>
                    f = (typeof(i) == "number") ? i : Object.keys(this).indexOf(i);<font></font>
                }<font></font>
            }<font></font>
            else if(this[i] === v) {<font></font>
                f = (typeof(i) == "number") ? i : Object.keys(this).indexOf(i);<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
    return f;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该算法分为两部分：</font><font style="vertical-align: inherit;">equals函数本身和一个用于在数组/对象中查找属性的数字索引的函数。</font><font style="vertical-align: inherit;">因为indexof仅查找数字和字符串，而没有对象，所以仅需要find函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以这样称呼它：</font></font></p>

<pre><code>({a: 1, b: "h"}).equals({a: 1, b: "h"});
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该函数返回true或false，在这种情况下为true。</font><font style="vertical-align: inherit;">该算法还允许在非常复杂的对象之间进行比较：</font></font></p>

<pre><code>({a: 1, b: "hello", c: ["w", "o", "r", "l", "d", {answer1: "should be", answer2: true}]}).equals({b: "hello", a: 1, c: ["w", "d", "o", "r", {answer1: "should be", answer2: true}, "l"]})
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的示例将返回true，即使属性具有不同的顺序。</font><font style="vertical-align: inherit;">需要注意的一个小细节：此代码还检查两个变量的相同类型，因此“ 3”与3不同。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚十三Harry</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我能完成的最少代码是这样。</font><font style="vertical-align: inherit;">它通过对所有对象进行字符串化来进行深度比较，唯一的限制是没有方法或符号可以进行比较。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>const compareObjects = (a, b) =&gt; { <font></font>
  let s = (o) =&gt; Object.entries(o).sort().map(i =&gt; { <font></font>
     if(i[1] instanceof Object) i[1] = s(i[1]);<font></font>
     return i <font></font>
  }) <font></font>
  return JSON.stringify(s(a)) === JSON.stringify(s(b))<font></font>
}<font></font>
<font></font>
console.log(compareObjects({b:4,a:{b:1}}, {a:{b:1},b:4}));</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿小小</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比较</font><strong><font style="vertical-align: inherit;">对象，数组，字符串，整数等</font></strong><font style="vertical-align: inherit;">所有内容的</font><strong><font style="vertical-align: inherit;">最简单</font></strong><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">逻辑的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案</font></font><strong><font style="vertical-align: inherit;"></font></strong></p>

<p><code>JSON.stringify({a: val1}) === JSON.stringify({a: val2})</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意： </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要替换</font></font><code>val1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>val2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用您的对象</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于对象，您必须对两个侧面对象进行递归排序（按键）</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋飞云</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Node.js中，您可以使用其native </font></font><code>require("assert").deepStrictEqual</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">更多信息：</font><a href="http://nodejs.org/api/assert.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : 
 </font></font><a href="http://nodejs.org/api/assert.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//nodejs.org/api/assert.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>var assert = require("assert");<font></font>
assert.deepStrictEqual({a:1, b:2}, {a:1, b:3}); // will throw AssertionError<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个返回</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是返回错误的</font><font style="vertical-align: inherit;">示例</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>var assert = require("assert");<font></font>
<font></font>
function deepEqual(a, b) {<font></font>
    try {<font></font>
      assert.deepEqual(a, b);<font></font>
    } catch (error) {<font></font>
      if (error.name === "AssertionError") {<font></font>
        return false;<font></font>
      }<font></font>
      throw error;<font></font>
    }<font></font>
    return true;<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY古一逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果方便使用深层复制功能，则可以</font><font style="vertical-align: inherit;">在匹配属性顺序时</font><font style="vertical-align: inherit;">使用以下技巧</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">继续</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>JSON.stringify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>function equals(obj1, obj2) {<font></font>
    function _equals(obj1, obj2) {<font></font>
        return JSON.stringify(obj1)<font></font>
            === JSON.stringify($.extend(true, {}, obj1, obj2));<font></font>
    }<font></font>
    return _equals(obj1, obj2) &amp;&amp; _equals(obj2, obj1);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">演示：</font><a href="http://jsfiddle.net/CU3vb/3/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://jsfiddle.net/CU3vb/3/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/CU3vb/3/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理由：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于的属性</font></font><code>obj1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会一一复制到克隆中，因此将保留其在克隆中的顺序。</font><font style="vertical-align: inherit;">而且，当将的属性</font></font><code>obj2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复制到克隆中时，由于已经存在的属性</font></font><code>obj1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将被简单地覆盖，因此它们在克隆中的顺序将被保留。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋LEY</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用的是JSON库，则可以将每个对象编码为JSON，然后比较结果字符串是否相等。</font></font></p>

<pre><code>var obj1={test:"value"};<font></font>
var obj2={test:"value2"};<font></font>
<font></font>
alert(JSON.encode(obj1)===JSON.encode(obj2));<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：尽管此答案在许多情况下都有效，但正如一些人在评论中指出的那样，由于多种原因，这是有问题的。</font><font style="vertical-align: inherit;">在几乎所有情况下，您都想找到一个更强大的解决方案。</font></font></strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Mandy</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否要测试两个对象是否相等？</font><font style="vertical-align: inherit;">即：它们的属性是否相等？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果是这种情况，您可能已经注意到这种情况：</font></font></p>

<pre><code>var a = { foo : "bar" };<font></font>
var b = { foo : "bar" };<font></font>
alert (a == b ? "Equal" : "Not equal");<font></font>
// "Not equal"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能需要执行以下操作：</font></font></p>

<pre><code>function objectEquals(obj1, obj2) {<font></font>
    for (var i in obj1) {<font></font>
        if (obj1.hasOwnProperty(i)) {<font></font>
            if (!obj2.hasOwnProperty(i)) return false;<font></font>
            if (obj1[i] != obj2[i]) return false;<font></font>
        }<font></font>
    }<font></font>
    for (var i in obj2) {<font></font>
        if (obj2.hasOwnProperty(i)) {<font></font>
            if (!obj1.hasOwnProperty(i)) return false;<font></font>
            if (obj1[i] != obj2[i]) return false;<font></font>
        }<font></font>
    }<font></font>
    return true;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，该功能可以进行很多优化，并具有进行深度检查（处理嵌套对象：）的能力，</font></font><code>var a = { foo : { fu : "bar" } }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是您明白了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如FOR指出的那样，您可能必须出于自己的目的对此进行调整，例如：不同的类可能具有不同的“等于”定义。</font><font style="vertical-align: inherit;">如果仅使用普通对象，则上面的内容就足够了，否则，自定义</font></font><code>MyClass.equals()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数可能是解决方法。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry凯</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么要重新发明轮子？</font><font style="vertical-align: inherit;">给</font></font><a href="http://lodash.com/docs#isEqual" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lodash</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一试。</font><font style="vertical-align: inherit;">它具有许多必备功能，例如</font></font><a href="http://lodash.com/docs#isEqual" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">isEqual（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>_.isEqual(object, other);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像本页中的其他示例一样，它将使用</font></font><a href="http://en.wikipedia.org/wiki/ECMAScript#Versions" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 5</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和本机优化（如果浏览器中可用）</font><font style="vertical-align: inherit;">蛮力检查每个键值</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注：以前这个答案推荐</font></font><a href="http://underscorejs.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Underscore.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但</font></font><a href="http://lodash.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">lodash</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做得越来越修复的错误，并与一致性解决问题的一个更好的工作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋GO</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当JavaScript for Objects引用内存中的相同位置时，其默认相等运算符将产生true。</font></font></p>

<pre><code>var x = {};<font></font>
var y = {};<font></font>
var z = x;<font></font>
<font></font>
x === y; // =&gt; false<font></font>
x === z; // =&gt; true<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要其他相等运算符，则需要在类中添加一个</font></font><code>equals(other)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法或类似</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">方法，而问题域的具体内容将确定这到底意味着什么。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个纸牌示例：</font></font></p>

<pre><code>function Card(rank, suit) {<font></font>
  this.rank = rank;<font></font>
  this.suit = suit;<font></font>
  this.equals = function(other) {<font></font>
     return other.rank == this.rank &amp;&amp; other.suit == this.suit;<font></font>
  };<font></font>
}<font></font>
<font></font>
var queenOfClubs = new Card(12, "C");<font></font>
var kingOfSpades = new Card(13, "S");<font></font>
<font></font>
queenOfClubs.equals(kingOfSpades); // =&gt; false<font></font>
kingOfSpades.equals(new Card(13, "S")); // =&gt; true<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
