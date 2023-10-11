---
layout: question
title:  JavaScript中的For..In循环-键值对
date:   2020-04-03T03:33:46.000Z
description: 我想知道是否有办法foreach在JavaScript中执行类似PHP 循环的操作。我正在寻找的功能类似于以下PHP代码片段：foreach($dat...
img: 
author: 猪猪
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道是否有办法</font></font><code>foreach</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中</font><font style="vertical-align: inherit;">执行类似PHP </font><font style="vertical-align: inherit;">循环的操作。</font><font style="vertical-align: inherit;">我正在寻找的功能类似于以下PHP代码片段：</font></font></p>

<pre><code>foreach($data as $key =&gt; $value) { }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我当时在看JS </font></font><code>for..in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">循环，但是似乎没有办法指定</font></font><code>as</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果我使用“普通” for循环（</font></font><code>for(var i = 0; i &lt; data.length; i++</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">执行此操作</font><font style="vertical-align: inherit;">，是否有办法获取键=&gt;值对？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3966篇《JavaScript中的For..In循环-键值对》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易阿飞</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面是一个尽可能接近的示例。</font></font></p>

<pre><code>for(var key in data){<font></font>
  var value = data[key];    <font></font>
  //your processing here<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是jQuery，请参见：</font><a href="http://api.jquery.com/jQuery.each/" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://api.jquery.com/jQuery.each/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//api.jquery.com/jQuery.each/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云小哥</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>for..in</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>for (var key in data)<font></font>
{<font></font>
    var value = data[key];<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以为此使用“ for in”循环：</font></font></p>

<pre><code>for (var key in bar) {<font></font>
     var value = bar[key];<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6将提供Map.prototype.forEach（callback），可以像这样使用</font></font></p>

<pre><code>myMap.forEach(function(value, key, myMap) {<font></font>
                        // Do something<font></font>
                    });<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里飞云</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有人提到过，</font></font><code>Object.keys</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我会提及。</font></font></p>

<pre><code>Object.keys(obj).forEach(function (key) {<font></font>
   // do something with obj[key]<font></font>
});<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><pre><code>for (var key in myMap) {<font></font>
    if (myMap.hasOwnProperty(key)) {<font></font>
        console.log("key =" + key);<font></font>
        console.log("value =" + myMap[key]);<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在javascript中，每个对象都有一堆内置的具有元信息的键值对。</font><font style="vertical-align: inherit;">当您遍历对象的所有键值对时，您也在遍历它们。</font><font style="vertical-align: inherit;">使用hasOwnProperty（）可以将其过滤掉。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><pre><code>var obj = {...};<font></font>
for (var key in obj) {<font></font>
    var value = obj[key];<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">php语法只是糖。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我假设您知道这</font></font><code>i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是关键，并且可以通过</font></font><code>data[i]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（只需一个快捷方式）</font><font style="vertical-align: inherit;">获取值</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript5 </font><font style="vertical-align: inherit;">为数组</font><font style="vertical-align: inherit;">引入了</font></font><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/foreach" rel="noreferrer"><code>forEach</code> <em><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[MDN]</font></font></sup></em></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（似乎您有一个数组）：</font></font></p>

<pre><code>data.forEach(function(value, index) {<font></font>
<font></font>
});<font></font>
</code></pre>

<p>The MDN documentation provides a shim for browsers not supporting it.</p>

<p>Of course this does not work for objects, but you can create a similar function for them:</p>

<pre><code>function forEach(object, callback) {<font></font>
    for(var prop in object) {<font></font>
        if(object.hasOwnProperty(prop)) {<font></font>
            callback(prop, object[prop]);<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p>Since you tagged the question with <a href="/questions/tagged/jquery" class="post-tag" title="显示标记为“ jquery”的问题" rel="tag">jquery</a>, jQuery provides <a href="http://api.jquery.com/jQuery.each/" rel="noreferrer"><code>$.each</code> <em><sup>[docs]</sup></em></a> which loops over both, array and object structures.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为...</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将为您工作。</font></font></p>

<pre><code>for( var key in obj ) {<font></font>
  var value = obj[key];<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在现代JavaScript中，您还可以执行以下操作：</font></font></p>

<pre><code>for ( const [key,value] of Object.entries( obj ) ) {<font></font>
<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
