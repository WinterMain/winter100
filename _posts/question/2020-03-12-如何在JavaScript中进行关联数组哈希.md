---
layout: question
title:  如何在JavaScript中进行关联数组/哈希
date:   2020-03-12T06:25:44.000Z
description: 我需要使用JavaScript来存储一些统计信息，就像在C＃中那样：  Dictionary<string, int> statistics;st...
img: 
author: 猴子蛋蛋
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要使用JavaScript来存储一些统计信息，就像在C＃中那样：  </font></font></p>

<pre><code>Dictionary&lt;string, int&gt; statistics;<font></font>
<font></font>
statistics["Foo"] = 10;<font></font>
statistics["Goo"] = statistics["Goo"] + 1;<font></font>
statistics.Add("Zoo", 1);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中</font><font style="vertical-align: inherit;">是否有</font></font><code>Hashtable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似的东西</font></font><code>Dictionary&lt;TKey, TValue&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
如何以这种方式存储值？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第986篇《如何在JavaScript中进行关联数组/哈希》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>You can create one using like the following:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var dictionary = { Name:"Some Programmer", Age:24, Job:"Writing Programs"  };<font></font>
<font></font>
//Iterate Over using keys<font></font>
for (var key in dictionary) {<font></font>
  console.log("Key: " + key + " , " + "Value: "+ dictionary[key]);<font></font>
}<font></font>
<font></font>
//access a key using object notation:<font></font>
console.log("Her Name is: " + dictionary.Name)</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋猿阿飞</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于JS中的每个对象的行为都像-并且通常实现为-哈希表一样，所以我就这么做了...</font></font></p>

<pre><code>var hashSweetHashTable = {};
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无老丝Davaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您要求键必须是任何对象，而不仅仅是字符串，那么可以使用我的</font></font><a href="http://code.google.com/p/jshashtable/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jshashtable</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyJinJin路易</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>var associativeArray = {};<font></font>
associativeArray["one"] = "First";<font></font>
associativeArray["two"] = "Second";<font></font>
associativeArray["three"] = "Third";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您来自面向对象的语言，则应查阅</font></font><a href="http://javascript.info/tutorial/objects" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本文</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此在C＃中，代码如下所示：</font></font></p>

<pre><code>Dictionary&lt;string,int&gt; dictionary = new Dictionary&lt;string,int&gt;();<font></font>
dictionary.add("sample1", 1);<font></font>
dictionary.add("sample2", 2);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么 </font></font></p>

<pre><code>var dictionary = new Dictionary&lt;string, int&gt; {<font></font>
    {"sample1", 1},<font></font>
    {"sample2", 2}<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中 </font></font></p>

<pre><code>var dictionary = {<font></font>
    "sample1": 1,<font></font>
    "sample2": 2<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">C＃字典对象包含有用的方法，例如</font></font><code>dictionary.ContainsKey()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
在JavaScript中，我们可以使用</font></font><code>hasOwnProperty</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">like</font></font></p>

<pre><code>if (dictionary.hasOwnProperty("sample1"))<font></font>
    console.log("sample1 key found and its value is"+ dictionary["sample1"]);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiJim</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="http://blog.xkoder.com/2008/07/10/javascript-associative-arrays-demystified/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript对象作为关联数组</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关联数组：简单来说，关联数组使用String而不是Integer数字作为索引。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个对象 </font></font></p>

<pre><code>var dictionary = {};
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript允许您使用以下语法向对象添加属性：</font></font></p>
</blockquote>

<pre><code>Object.yourProperty = value;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相同的替代语法是：</font></font></p>

<pre><code>Object["yourProperty"] = value;
</code></pre>

<p>If you can also create key to value object maps with the following syntax</p>

<pre><code>var point = { x:3, y:2 };<font></font>
<font></font>
point["x"] // returns 3<font></font>
point.y // returns 2<font></font>
</code></pre>

<blockquote>
  <p>You can iterate through an associative array using the for..in loop construct as follows</p>
</blockquote>

<pre><code>for(var key in Object.keys(dict)){<font></font>
  var value = dict[key];<font></font>
  /* use key/value for intended purpose */<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
