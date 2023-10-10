---
layout: question
title:  按键对JavaScript对象进行排序
date:   2020-03-12T10:07:18.000Z
description: 我需要按键对JavaScript对象进行排序。 因此，以下内容：{ 'b'   'asdsad', 'c'   'masdas', 'a'   '...
img: 
author: 路易逆天
category: question
answer: 14
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要按键对JavaScript对象进行排序。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，以下内容：</font></font></p>

<pre><code>{ 'b' : 'asdsad', 'c' : 'masdas', 'a' : 'dsfdsfsdf' }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会成为：</font></font></p>

<pre><code>{ 'a' : 'dsfdsfsdf', 'b' : 'asdsad', 'c' : 'masdas' }
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门小卤蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>The one line: </p>

<pre><code>Object.entries(unordered)<font></font>
  .sort(([keyA], [keyB]) =&gt; keyA &gt; keyB)<font></font>
  .reduce((obj, [key,value]) =&gt; Object.assign(obj, {[key]: value}), {})<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid阳光小卤蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Not sure if this answers the question, but this is what I needed. </p>

<pre><code>Maps.iterate.sorted = function (o, callback) {<font></font>
    var keys = Object.keys(o), sorted = keys.sort(), k; <font></font>
    if ( callback ) {<font></font>
            var i = -1;<font></font>
            while( ++i &lt; sorted.length ) {<font></font>
                    callback(k = sorted[i], o[k] );<font></font>
            }<font></font>
    }<font></font>
<font></font>
    return sorted;<font></font>
}<font></font>
</code></pre>

<p>Called as : </p>

<pre><code>Maps.iterate.sorted({c:1, b:2, a:100}, function(k, v) { ... } ) 
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋樱</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>This is a lightweight solution to everything I need for JSON sorting.</p>

<pre><code>function sortObj(obj) {<font></font>
    if (typeof obj !== "object" || obj === null)<font></font>
        return obj;<font></font>
<font></font>
    if (Array.isArray(obj))<font></font>
        return obj.map((e) =&gt; sortObj(e)).sort();<font></font>
<font></font>
    return Object.keys(obj).sort().reduce((sorted, k) =&gt; {<font></font>
        sorted[k] = sortObj(obj[k]);<font></font>
        return sorted;<font></font>
    }, {});<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near飞云</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Pure JavaScript answer to sort an Object.  This is the only answer that I know of that will handle negative numbers.  This function is for sorting numerical Objects.  </p>

<p>Input
    obj = {1000: {}, -1200: {}, 10000: {}, 200: {}};</p>

<pre><code>function osort(obj) {<font></font>
var keys = Object.keys(obj);<font></font>
var len = keys.length;<font></font>
var rObj = [];<font></font>
var rK = [];<font></font>
var t = Object.keys(obj).length;<font></font>
while(t &gt; rK.length) {<font></font>
    var l = null;<font></font>
    for(var x in keys) {<font></font>
        if(l &amp;&amp; parseInt(keys[x]) &lt; parseInt(l)) {<font></font>
            l = keys[x];<font></font>
            k = x;<font></font>
        }<font></font>
        if(!l) { // Find Lowest<font></font>
            var l = keys[x];<font></font>
            var k = x;<font></font>
        }<font></font>
    }<font></font>
    delete keys[k];<font></font>
    rK.push(l);<font></font>
}<font></font>
<font></font>
for (var i = 0; i &lt; len; i++) {<font></font>
<font></font>
    k = rK[i];<font></font>
    rObj.push(obj[k]);<font></font>
}<font></font>
return rObj;<font></font>
}<font></font>
</code></pre>

<p>The output will be an object sorted by those numbers with new keys starting at 0.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin神奇宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>Object.keys(unordered).sort().reduce(<font></font>
    (acc,curr) =&gt; ({...acc, [curr]:unordered[curr]})<font></font>
    , {}<font></font>
)<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Here is a clean lodash-based version that works with nested objects</p>

<pre><code>/**<font></font>
 * Sort of the keys of an object alphabetically<font></font>
 */<font></font>
const sortKeys = function(obj) {<font></font>
  if(_.isArray(obj)) {<font></font>
    return obj.map(sortKeys);<font></font>
  }<font></font>
  if(_.isObject(obj)) {<font></font>
    return _.fromPairs(_.keys(obj).sort().map(key =&gt; [key, sortKeys(obj[key])]));<font></font>
  }<font></font>
  return obj;<font></font>
};<font></font>
</code></pre>

<p>It would be even cleaner if lodash had a <a href="https://github.com/lodash/lodash/issues/2718" rel="nofollow noreferrer"><code>toObject()</code> method</a>...</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Harry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Use this code if you have nested objects or if you have nested array obj.</p>

<pre><code>var sortObjectByKey = function(obj){<font></font>
    var keys = [];<font></font>
    var sorted_obj = {};<font></font>
    for(var key in obj){<font></font>
        if(obj.hasOwnProperty(key)){<font></font>
            keys.push(key);<font></font>
        }<font></font>
    }<font></font>
    // sort keys<font></font>
    keys.sort();<font></font>
<font></font>
    // create new array based on Sorted Keys<font></font>
    jQuery.each(keys, function(i, key){<font></font>
        var val = obj[key];<font></font>
        if(val instanceof Array){<font></font>
            //do for loop;<font></font>
            var arr = [];<font></font>
            jQuery.each(val,function(){<font></font>
                arr.push(sortObjectByKey(this));<font></font>
            }); <font></font>
            val = arr;<font></font>
<font></font>
        }else if(val instanceof Object){<font></font>
            val = sortObjectByKey(val)<font></font>
        }<font></font>
        sorted_obj[key] = val;<font></font>
    });<font></font>
    return sorted_obj;<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Sorts keys recursively while preserving references.</p>

<pre><code>function sortKeys(o){<font></font>
    if(o &amp;&amp; o.constructor === Array)<font></font>
        o.forEach(i=&gt;sortKeys(i));<font></font>
    else if(o &amp;&amp; o.constructor === Object)<font></font>
        Object.entries(o).sort((a,b)=&gt;a[0]&gt;b[0]?1:-1).forEach(e=&gt;{<font></font>
            sortKeys(e[1]);<font></font>
            delete o[e[0]];<font></font>
            o[e[0]] = e[1];<font></font>
        });<font></font>
}<font></font>
</code></pre>

<p>Example:</p>

<pre><code>let x = {d:3, c:{g:20, a:[3,2,{s:200, a:100}]}, a:1};<font></font>
let y = x.c;<font></font>
let z = x.c.a[2];<font></font>
sortKeys(x);<font></font>
console.log(x); // {a: 1, c: {a: [3, 2, {a: 1, s: 2}], g: 2}, d: 3}<font></font>
console.log(y); // {a: [3, 2, {a: 100, s: 200}}, g: 20}<font></font>
console.log(z); // {a: 100, s: 200}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyL</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许更优雅的形式：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code> /**<font></font>
     * Sorts a key-value object by key, maintaining key to data correlations.<font></font>
     * @param {Object} src  key-value object<font></font>
     * @returns {Object}<font></font>
     */<font></font>
var ksort = function ( src ) {<font></font>
      var keys = Object.keys( src ),<font></font>
          target = {};<font></font>
      keys.sort();<font></font>
      keys.forEach(function ( key ) {<font></font>
        target[ key ] = src[ key ];<font></font>
      });<font></font>
      return target;<font></font>
    };<font></font>
<font></font>
<font></font>
// Usage<font></font>
console.log(ksort({<font></font>
  a:1,<font></font>
  c:3,<font></font>
  b:2  <font></font>
}));</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS和ES6 +语法相同：</font></font></p>

<pre><code>function ksort( src ) {<font></font>
  const keys = Object.keys( src );<font></font>
  keys.sort();<font></font>
  return keys.reduce(( target, key ) =&gt; {<font></font>
        target[ key ] = src[ key ];<font></font>
        return target;<font></font>
  }, {});<font></font>
};<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子阳光</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设它在显示无序对象属性的VisualStudio调试器中很有用。</font></font></p>

<pre><code>(function(s){var t={};Object.keys(s).sort().forEach(function(k){t[k]=s[k]});return t})({b:2,a:1,c:3})
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Davaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><a href="http://underscorejs.org/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下划线版本</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>function order(unordered)<font></font>
{<font></font>
return _.object(_.sortBy(_.pairs(unordered),function(o){return o[0]}));<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不信任浏览器来保持键的顺序，我强烈建议您使用键-值对数组的有序数组。</font></font></p>

<pre><code>_.sortBy(_.pairs(c),function(o){return o[0]})
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">仲羽蛋蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个古老的问题，但是从Mathias Bynens的回答中可以得出，我做了一个简短的版本来对</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">进行排序</font><font style="vertical-align: inherit;">，而没有太多的开销。</font></font></p>

<pre><code>    Object.keys(unordered).sort().forEach(function(key) {<font></font>
        var value = unordered[key];<font></font>
        delete unordered[key];<font></font>
        unordered[key] = value;<font></font>
    });<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行代码后，“无序”对象本身将按字母顺序对键进行排序。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在是2019年，我们有一种解决这个问题的2019年方法:)</font></font></p>

<pre><code>Object.fromEntries(Object.entries({b: 3, a:8, c:1}).sort())
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOItachi老丝</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很多人提到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“无法对对象进行排序”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是之后他们为您提供了可行的解决方案。</font><font style="vertical-align: inherit;">悖论，不是吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有人提到为什么这些解决方案有效。</font><font style="vertical-align: inherit;">之所以这样，是因为在大多数浏览器的实现中，对象中的值都是按添加顺序存储的。</font><font style="vertical-align: inherit;">这就是为什么如果您从键的排序列表中创建新对象，则会返回预期的结果。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且我认为我们可以添加另一种解决方案– ES5功能方式：</font></font></p>

<pre><code>function sortObject(obj) {<font></font>
    return Object.keys(obj).sort().reduce(function (result, key) {<font></font>
        result[key] = obj[key];<font></font>
        return result;<font></font>
    }, {});<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES2015以上版本（格式为“单线”）：</font></font></p>

<pre><code>function sortObject(o) {<font></font>
    return Object.keys(o).sort().reduce((r, k) =&gt; (r[k] = o[k], r), {});<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以上示例的简短说明（如评论中所述）：</font></font></p>

<p><code>Object.keys</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向我们提供了提供的对象（</font></font><code>obj</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>o</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">中的键列表</font><font style="vertical-align: inherit;">，然后我们使用默认的排序算法</font><font style="vertical-align: inherit;">对键进行</font><font style="vertical-align: inherit;">排序，接下来</font></font><code>.reduce</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其用于将该数组转换回对象，但是这次所有键都已排序。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
