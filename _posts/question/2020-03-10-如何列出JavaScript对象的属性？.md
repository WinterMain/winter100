---
layout: question
title:  如何列出JavaScript对象的属性？
date:   2020-03-10T04:13:37.000Z
description: 说我这样创建一个对象：var myObject =        {"ircEvent"  "PRIVMSG", "method"  "newURI...
img: 
author: 乐十三
category: question
answer: 10
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说我这样创建一个对象：</font></font></p>

<pre><code>var myObject =<font></font>
        {"ircEvent": "PRIVMSG", "method": "newURI", "regex": "^http://.*"};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检索属性名称列表的最佳方法是什么？</font><font style="vertical-align: inherit;">即我想以一些变量“键”结束：</font></font></p>

<pre><code>keys == ["ircEvent", "method", "regex"]
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第468篇《如何列出JavaScript对象的属性？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearSamHarry</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以公认的答案为基础。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果对象具有要调用的属性，请说.properties（）尝试！</font></font></p>

<pre><code>var keys = Object.keys(myJSONObject);<font></font>
<font></font>
for (var j=0; j &lt; keys.length; j++) {<font></font>
  Object[keys[j]].properties();<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva凯</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用 </font></font><code>Reflect.ownKeys()</code></p>

<pre><code>var obj = {a: 1, b: 2, c: 3};<font></font>
Reflect.ownKeys(obj) // ["a", "b", "c"]<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.keys</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.getOwnPropertyNames</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法获取</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不可枚举的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性。</font><font style="vertical-align: inherit;">它甚至适用于</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不可枚举的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性。</font></font></p>

<pre><code>var obj = {a: 1, b: 2, c: 3};<font></font>
obj[Symbol()] = 4;<font></font>
Reflect.ownKeys(obj) // ["a", "b", "c", Symbol()]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天小卤蛋Green</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在支持js 1.8的浏览器下：</font></font></p>

<pre><code>[i for(i in obj)]
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam小哥逆天</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE不支持for（i在obj中）的本机属性。</font><font style="vertical-align: inherit;">这是我能找到的所有道具的清单。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看来stackoverflow做了一些愚蠢的过滤。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该列表位于此Google组帖子的底部：-https:
 </font></font><a href="https://groups.google.com/group/hackvertor/browse_thread/thread/a9ba81ca642a63e0" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//groups.google.com/group/hackvertor/browse_thread/thread/a9ba81ca642a63e0</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云逆天</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用jQuery进行如下操作：</font></font></p>

<pre><code>var objectKeys = $.map(object, function(value, key) {<font></font>
  return key;<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin理查德</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使在IE8中，这也适用于大多数浏览器，并且不需要任何类型的库。</font><font style="vertical-align: inherit;">我是您的钥匙。</font></font></p>

<pre><code>var myJSONObject =  {"ircEvent": "PRIVMSG", "method": "newURI", "regex": "^http://.*"}; <font></font>
var keys=[];<font></font>
for (var i in myJSONObject ) { keys.push(i); }<font></font>
alert(keys);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid梅</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，Firefox 4，Chrome 6，Safari 5，IE 9和更高版本支持Object.keys和其他ECMAScript 5方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如： </font></font></p>

<pre><code>var o = {"foo": 1, "bar": 2}; <font></font>
alert(Object.keys(o));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 5兼容性表：</font><a href="http://kangax.github.com/es5-compat-table/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://kangax.github.com/es5-compat-table/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//kangax.github.com/es5-compat-table/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新方法的说明：</font><a href="http://markcaudill.com/index.php/2009/04/javascript-new-features-ecma5/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://markcaudill.com/index.php/2009/04/javascript-new-features-ecma5/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//markcaudill.com/index.php/2009/04/javascript-new-features-ecma5/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿小小</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是转储功能的忠实拥护者。</font></font></p>

<p><a href="http://ajaxian.com/archives/javascript-variable-dump-in-coldfusion" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://ajaxian.com/archives/javascript-variable-dump-in-coldfusion</font></font></a>
<img src="https://www.petefreitag.com/images/blog/jsdump.gif" alt="替代文字"></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanMandy</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如</font></font><a href="https://stackoverflow.com/questions/208016/how-to-list-the-properties-of-a-javascript-object#208020"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">slashnick所</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指出的，您可以使用“ for in”构造来遍历对象的属性名称。</font><font style="vertical-align: inherit;">但是，您将遍历对象原型链中的所有属性名称。</font><font style="vertical-align: inherit;">如果你想迭代</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在对象自己的属性，你可以利用的</font></font><a href="http://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Object/hasOwnProperty" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象＃hasOwnProperty（）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font><font style="vertical-align: inherit;">因此具有以下。</font></font></p>

<pre><code>for (var key in obj) {<font></font>
    if (obj.hasOwnProperty(key)) {<font></font>
        /* useful code here */<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Mandy</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在现代浏览器（IE9 +，FF4 +，Chrome5 +，Opera12 +，Safari5 +）中，您可以使用内置的</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.keys</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法：</font></font></p>

<pre><code>var keys = Object.keys(myObject);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面有完整的polyfill，但简化的版本是：</font></font></p>

<pre><code>var getKeys = function(obj){<font></font>
   var keys = [];<font></font>
   for(var key in obj){<font></font>
      keys.push(key);<font></font>
   }<font></font>
   return keys;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者替换为</font></font><code>var getKeys</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>Object.prototype.keys</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以允许您调用</font></font><code>.keys()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何对象。</font><font style="vertical-align: inherit;">扩展原型会产生一些副作用，我不建议您这样做。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
