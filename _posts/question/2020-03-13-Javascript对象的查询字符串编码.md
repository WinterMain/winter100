---
layout: question
title:  Javascript对象的查询字符串编码
date:   2020-03-13T07:29:19.000Z
description: 您是否知道将Javascript对象编码为string可通过GET请求传递的快速简单的方法？不jQuery，没有其他框架-只是纯Javascript ...
img: 
author: 逆天西门
category: question
answer: 12
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否知道将Javascript对象编码为</font></font><code>string</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可通过</font></font><code>GET</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请求</font><font style="vertical-align: inherit;">传递</font><font style="vertical-align: inherit;">的快速简单的方法</font><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font></font><code>jQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，没有其他框架-只是纯Javascript :)</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1380篇《Javascript对象的查询字符串编码》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenA</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从答案@ user187291引用，添加“ isArray”作为参数以使json嵌套数组得以转换。</font></font></p>

<pre><code>data : {<font></font>
                    staffId : "00000001",<font></font>
                    Detail : [ {<font></font>
                        "identityId" : "123456"<font></font>
                    }, {<font></font>
                        "identityId" : "654321"<font></font>
                    } ],<font></font>
<font></font>
                }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要得出结果： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">staffId = 00000001＆Detail [0] .identityId = 123456＆Detail [1] .identityId = 654321</font></font></p>

<pre><code>serialize = function(obj, prefix, isArray) {<font></font>
        var str = [],p = 0;<font></font>
        for (p in obj) {<font></font>
            if (obj.hasOwnProperty(p)) {<font></font>
                var k, v;<font></font>
                if (isArray)<font></font>
                    k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];<font></font>
                else<font></font>
                    k = prefix ? prefix + "." + p + "" : p, v = obj[p];<font></font>
<font></font>
                if (v !== null &amp;&amp; typeof v === "object") {<font></font>
                    if (Array.isArray(v)) {<font></font>
                        serialize(v, k, true);<font></font>
                    } else {<font></font>
                        serialize(v, k, false);<font></font>
                    }<font></font>
                } else {<font></font>
                    var query = k + "=" + v;<font></font>
                    str.push(query);<font></font>
                }<font></font>
            }<font></font>
        }<font></font>
        return str.join("&amp;");<font></font>
    };<font></font>
<font></font>
    serialize(data, "prefix", false);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，这是一个较旧的职位，但是我正面临这个问题，我已经找到了我的个人解决方案。</font></font></p>

<pre><code>     function objToQueryString(obj){<font></font>
        var k = Object.keys(obj);<font></font>
        var s = "";<font></font>
        for(var i=0;i&lt;k.length;i++) {<font></font>
            s += k[i] + "=" + encodeURIComponent(obj[k[i]]);<font></font>
            if (i != k.length -1) s += "&amp;";<font></font>
        }<font></font>
        return s;<font></font>
     };<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Davaid</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来更好一点</font></font></p>

<pre><code>objectToQueryString(obj, prefix) {<font></font>
    return Object.keys(obj).map(objKey =&gt; {<font></font>
        if (obj.hasOwnProperty(objKey)) {<font></font>
            const key = prefix ? `${prefix}[${objKey}]` : objKey;<font></font>
            const value = obj[objKey];<font></font>
<font></font>
            return typeof value === "object" ?<font></font>
                this.objectToQueryString(value, key) :<font></font>
                `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;<font></font>
        }<font></font>
<font></font>
        return null;<font></font>
    }).join("&amp;");<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO村村</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是已接受答案的咖啡版本。</font><font style="vertical-align: inherit;">这样可以节省时间。</font></font></p>

<pre><code>serialize = (obj, prefix) -&gt;<font></font>
  str = []<font></font>
  for p, v of obj<font></font>
    k = if prefix then prefix + "[" + p + "]" else p<font></font>
    if typeof v == "object"<font></font>
      str.push(serialize(v, k))<font></font>
    else<font></font>
      str.push(encodeURIComponent(k) + "=" + encodeURIComponent(v))<font></font>
<font></font>
  str.join("&amp;")<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro十三</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用JSON。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请看一下</font></font><a href="https://stackoverflow.com/questions/459105/convert-a-multidimensional-javascript-array-to-json"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取有关如何实施的想法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，每个人似乎都把他的单线放在这里，所以这是我的：</font></font></p>

<pre><code>const encoded = Object.entries(obj).map(([k, v]) =&gt; `${k}=${encodeURIComponent(v)}`).join("&amp;");
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Tom</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户187291接受的解决方案的一个小修改：</font></font></p>

<pre><code>serialize = function(obj) {<font></font>
   var str = [];<font></font>
   for(var p in obj){<font></font>
       if (obj.hasOwnProperty(p)) {<font></font>
           str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));<font></font>
       }<font></font>
   }<font></font>
   return str.join("&amp;");<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查对象上的hasOwnProperty使JSLint / JSHint满意，并且如果对象不是简单的字典，则可以防止意外地序列化对象或其他内容的方法。</font><font style="vertical-align: inherit;">有关此页面中的声明，请参见上的段落：</font><a href="http://javascript.crockford.com/code.html"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://javascript.crockford.com/code.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//javascript.crockford.com/code.html</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">URLSearchParams</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接口：</font></font></p>

<pre><code>const searchParams = new URLSearchParams();<font></font>
const search = {foo: "hi there", bar: "100%" };<font></font>
Object.keys(search).forEach(key =&gt; searchParams.append(key, search[key]));<font></font>
console.log(searchParams.toString())<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无老丝Davaid</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否需要发送任意对象？</font><font style="vertical-align: inherit;">如果是这样，则GET是一个坏主意，因为用户代理和Web服务器将接受的URL长度受到限制。</font><font style="vertical-align: inherit;">我的建议是建立一个要发送的名称-值对数组，然后建立一个查询字符串：</font></font></p>

<pre><code>function QueryStringBuilder() {<font></font>
    var nameValues = [];<font></font>
<font></font>
    this.add = function(name, value) {<font></font>
        nameValues.push( {name: name, value: value} );<font></font>
    };<font></font>
<font></font>
    this.toQueryString = function() {<font></font>
        var segments = [], nameValue;<font></font>
        for (var i = 0, len = nameValues.length; i &lt; len; i++) {<font></font>
            nameValue = nameValues[i];<font></font>
            segments[i] = encodeURIComponent(nameValue.name) + "=" + encodeURIComponent(nameValue.value);<font></font>
        }<font></font>
        return segments.join("&amp;");<font></font>
    };<font></font>
}<font></font>
<font></font>
var qsb = new QueryStringBuilder();<font></font>
qsb.add("veg", "cabbage");<font></font>
qsb.add("vegCount", "5");<font></font>
<font></font>
alert( qsb.toQueryString() );<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端Pro</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams" rel="noreferrer"><code>URLSearchParams</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="https://caniuse.com/#feat=urlsearchparams" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作品，涵盖所有当前的浏览器</font></font></a></p>

<pre class="lang-js prettyprint-override"><code>new URLSearchParams(object).toString()
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小红酱</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery为此提供了一个功能</font></font><code>jQuery.param()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果您已经在使用它，则可以使用它：</font><a href="http://api.jquery.com/jquery.param/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="http://api.jquery.com/jquery.param/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//api.jquery.com/jquery.param/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>var params = { width:1680, height:1050 };<font></font>
var str = jQuery.param( params );<font></font>
</code></pre>

<p><code>str</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 现在包含 </font></font><code>width=1680&amp;height=1050</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Near米亚</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样？</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>serialize = function(obj) {<font></font>
  var str = [];<font></font>
  for (var p in obj)<font></font>
    if (obj.hasOwnProperty(p)) {<font></font>
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));<font></font>
    }<font></font>
  return str.join("&amp;");<font></font>
}<font></font>
<font></font>
console.log(serialize({<font></font>
  foo: "hi there",<font></font>
  bar: "100%"<font></font>
}));<font></font>
// foo=hi%20there&amp;bar=100%25</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：这也将转换递归对象（使用php“ array”表示法作为查询字符串）</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>serialize = function(obj, prefix) {<font></font>
  var str = [],<font></font>
    p;<font></font>
  for (p in obj) {<font></font>
    if (obj.hasOwnProperty(p)) {<font></font>
      var k = prefix ? prefix + "[" + p + "]" : p,<font></font>
        v = obj[p];<font></font>
      str.push((v !== null &amp;&amp; typeof v === "object") ?<font></font>
        serialize(v, k) :<font></font>
        encodeURIComponent(k) + "=" + encodeURIComponent(v));<font></font>
    }<font></font>
  }<font></font>
  return str.join("&amp;");<font></font>
}<font></font>
<font></font>
console.log(serialize({<font></font>
  foo: "hi there",<font></font>
  bar: {<font></font>
    blah: 123,<font></font>
    quux: [1, 2, 3]<font></font>
  }<font></font>
}));<font></font>
// foo=hi%20there&amp;bar%5Bblah%5D=123&amp;bar%5Bquux%5D%5B0%5D=1&amp;bar%5Bquux%5D%5B1%5D=2&amp;bar%5Bquux%5D%5B2%5D=3</code></pre>
</div>
</div>
<p></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
