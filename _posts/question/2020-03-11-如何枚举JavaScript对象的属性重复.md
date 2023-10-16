---
layout: question
title:  如何枚举JavaScript对象的属性？\[重复\]
date:   2020-03-11T07:31:59.000Z
description:                                                                          ...
img: 
author: 梅米亚
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何遍历或枚举JavaScript对象？</font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （41个回答）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2016-06-06 23：28：19Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何枚举JavaScript对象的属性？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我实际上想列出所有已定义的变量及其值，但是我了解到定义一个变量实际上会创建window对象的属性。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第734篇《如何枚举JavaScript对象的属性？\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Stafan</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>If you are using the <a href="https://en.wikipedia.org/wiki/Underscore.js" rel="nofollow">Underscore.js</a> library, you can use function <a href="http://underscorejs.org/#keys" rel="nofollow" title="键">keys</a>:</p>

<pre><code>_.keys({one : 1, two : 2, three : 3});<font></font>
=&gt; ["one", "two", "three"]<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Gil</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>You can use the <code>for</code> of loop.</p>

<p>If you want an array use: </p>

<p><code>Object.keys(object1)</code></p>

<p>Ref. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" rel="noreferrer">Object.keys()</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门十三LEY</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>I found it... <code>for (property in object) { // do stuff }</code> will list all the properties, and therefore all the globally declared variables on the window object..</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村Tony</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在现代浏览器（ECMAScript 5）中，要获取所有可枚举的属性，您可以执行以下操作：</font></font></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.keys（obj）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
（检查链接以获得片段，以在较旧的浏览器上向后兼容）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或也获得不可枚举的属性：</font></font></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.getOwnPropertyNames（obj）</font></font></a></p>

<p><a href="http://kangax.github.io/es5-compat-table/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查ECMAScript 5兼容性表</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附加信息：
 </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#Enumerable_attribute" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么是可枚举属性？</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan小宇宙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为举个例子令我吃惊：</font></font></p>

<pre><code>var myObject = { name: "Cody", status: "Surprised" };<font></font>
for (var propertyName in myObject) {<font></font>
  document.writeln( propertyName + " : " + myObject[propertyName] );<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但令我惊讶的是，输出是</font></font></p>

<pre><code>name : Cody<font></font>
status : Surprised<font></font>
forEach : function (obj, callback) {<font></font>
    for (prop in obj) {<font></font>
        if (obj.hasOwnProperty(prop) &amp;&amp; typeof obj[prop] !== "function") {<font></font>
            callback(prop);<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么？</font><font style="vertical-align: inherit;">页面上的另一个脚本扩展了Object原型：</font></font></p>

<pre><code>Object.prototype.forEach = function (obj, callback) {<font></font>
  for ( prop in obj ) {<font></font>
    if ( obj.hasOwnProperty( prop ) &amp;&amp; typeof obj[prop] !== "function" ) {<font></font>
      callback( prop );<font></font>
    }<font></font>
  }<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经多次提出的标准方法是：</font></font></p>

<pre><code>for (var name in myObject) {<font></font>
  alert(name);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，Internet Explorer 6、7和8在JavaScript解释器中存在一个错误，该错误导致未枚举某些键。</font><font style="vertical-align: inherit;">如果运行此代码：</font></font></p>

<pre><code>var obj = { toString: 12};<font></font>
for (var name in obj) {<font></font>
  alert(name);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果将在除IE之外的所有浏览器中警告“ 12”。</font><font style="vertical-align: inherit;">IE只会忽略此键。</font><font style="vertical-align: inherit;">受影响的键值为：</font></font></p>

<ul>
<li><code>isPrototypeOf</code></li>
<li><code>hasOwnProperty</code></li>
<li><code>toLocaleString</code></li>
<li><code>toString</code></li>
<li><code>valueOf</code></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了在IE中真正安全，您必须使用以下方法：</font></font></p>

<pre><code>for (var key in myObject) {<font></font>
  alert(key);<font></font>
}<font></font>
<font></font>
var shadowedKeys = [<font></font>
  "isPrototypeOf",<font></font>
  "hasOwnProperty",<font></font>
  "toLocaleString",<font></font>
  "toString",<font></font>
  "valueOf"<font></font>
];<font></font>
for (var i=0, a=shadowedKeys, l=a.length; i&lt;l; i++) {<font></font>
  if map.hasOwnProperty(a[i])) {<font></font>
    alert(a[i]);<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好消息是EcmaScript 5定义了该</font></font><code>Object.keys(myObject)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数，该函数以数组的形式返回对象的键，并且某些浏览器（例如Safari 4）已经实现了该功能。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三村村蛋蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>for (prop in obj) {<font></font>
    alert(prop + ' = ' + obj[prop]);<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗GreenNear</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的JavaScript代码：</font></font></p>

<pre><code>for(var propertyName in myObject) {<font></font>
   // propertyName is what you want.<font></font>
   // You can get the value like this: myObject[propertyName]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery的：</font></font></p>

<pre><code>jQuery.each(obj, function(key, value) {<font></font>
   // key is what you want.<font></font>
   // The value is in: value<font></font>
});<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
