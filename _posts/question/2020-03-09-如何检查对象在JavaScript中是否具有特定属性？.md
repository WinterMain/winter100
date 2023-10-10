---
layout: question
title:  如何检查对象在JavaScript中是否具有特定属性？
date:   2020-03-09T12:52:35.000Z
description: 如何检查对象在JavaScript中是否具有特定属性？考虑：x = {'key'  1};if ( x.hasOwnProperty('key'...
img: 
author: 逆天神奇
category: question
answer: 9
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何检查对象在JavaScript中是否具有特定属性？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑：</font></font></p>

<pre><code>x = {'key': 1};<font></font>
if ( x.hasOwnProperty('key') ) {<font></font>
    //Do this<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那是最好的方法吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearSamHarry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用这个。</font><font style="vertical-align: inherit;">如果对象内部有对象，这对我有很大帮助</font></font></p>

<pre><code>if(typeof(obj["key"])=="string"){<font></font>
    alert("property");<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里梅</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>JSON.stringify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能来扭转参考检查。</font></font></p>

<pre><code>var obj = {};<font></font>
// check object<font></font>
JSON.stringify(obj) == JSON.stringify({}) // return true<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小小十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么要使事情变得过于复杂：</font></font></p>

<pre><code>var isProperty =  (objectname.keyname || "") ? true : false;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在大多数情况下简单明了...</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云古一</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要使用方法</font></font><code>object.hasOwnProperty(property)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果对象具有属性，则返回true，否则返回false。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长西里神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于存在大规模投票的风险，因此这是针对特定情况的另一种选择。</font><font style="vertical-align: inherit;">:)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要测试对象上的成员，并且想知道它是否已设置为除以下以外的其他值：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">''</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空值</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未定义</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">0 ...</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么您可以使用：</font></font></p>

<pre><code>var foo = {};<font></font>
foo.bar = "Yes, this is a proper value!";<font></font>
if (!!foo.bar) {<font></font>
        // member is set, do something<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Jim</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象上存在方法“ hasOwnProperty”，但不建议直接调用此方法，因为有时对象可能为null或对象上存在某些属性，例如： </font></font><code>{ hasOwnProperty: false }</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更好的方法是：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>// good<font></font>
var obj = {"bar": "here bar desc"}<font></font>
console.log(Object.prototype.hasOwnProperty.call(obj, "bar"));<font></font>
<font></font>
// best<font></font>
const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.<font></font>
console.log(has.call(obj, "bar"));</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Itachi</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">hasOwnProperty“可用于确定对象是否具有指定属性作为该对象的直接属性；</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与in运算符不同</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，此方法不会检查对象的原型链。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，最有可能的是，对于您所看到的问题，您不想使用hasOwnProperty，它确定该属性是否以附加方式存在 </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直接</font><font style="vertical-align: inherit;">到对象本身而存在</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要确定属性是否存在于主要要使用的原型链中，例如：</font></font></p>

<pre><code>if( prop in object ){ // do something }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望这有帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>if (typeof x.key != "undefined") {<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为</font></font></p>

<pre><code>if (x.key)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>x.key</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解析</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为，</font><font style="vertical-align: inherit;">则失败</font><font style="vertical-align: inherit;">（例如</font></font><code>x.key = ""</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对所给出的答案感到困惑-他们中的大多数都是完全错误的。</font><font style="vertical-align: inherit;">当然，您可以拥有具有未定义，空值或假值的对象属性。</font><font style="vertical-align: inherit;">因此，只需将属性检查减少到</font></font><code>typeof this[property]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至更糟，</font></font><code>x.key</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将给您完全误导的结果。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这取决于您要查找的内容。</font><font style="vertical-align: inherit;">如果您想知道一个对象是否物理上包含一个属性（它不是来自原型链的某个位置），那么</font></font><code>object.hasOwnProperty</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就可以这样做。</font><font style="vertical-align: inherit;">所有现代的浏览器都支持它。</font><font style="vertical-align: inherit;">（在Safari的较早版本（2.0.1和更早的版本中不存在），但是那些浏览器版本已经很少使用了。）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您要查找的是对象上具有可迭代的属性（当您遍历该对象的属性时，它将出现），则可以这样做： </font></font><code>prop in object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将为您带来所需的效果。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为使用</font></font><code>hasOwnProperty</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能是您想要的，并且考虑到您可能需要一种备用方法，所以我向您提供以下解决方案：</font></font></p>

<pre><code>var obj = {<font></font>
    a: undefined,<font></font>
    b: null,<font></font>
    c: false<font></font>
};<font></font>
<font></font>
// a, b, c all found<font></font>
for ( var prop in obj ) {<font></font>
    document.writeln( "Object1: " + prop );<font></font>
}<font></font>
<font></font>
function Class(){<font></font>
    this.a = undefined;<font></font>
    this.b = null;<font></font>
    this.c = false;<font></font>
}<font></font>
<font></font>
Class.prototype = {<font></font>
    a: undefined,<font></font>
    b: true,<font></font>
    c: true,<font></font>
    d: true,<font></font>
    e: true<font></font>
};<font></font>
<font></font>
var obj2 = new Class();<font></font>
<font></font>
// a, b, c, d, e found<font></font>
for ( var prop in obj2 ) {<font></font>
    document.writeln( "Object2: " + prop );<font></font>
}<font></font>
<font></font>
function hasOwnProperty(obj, prop) {<font></font>
    var proto = obj.__proto__ || obj.constructor.prototype;<font></font>
    return (prop in obj) &amp;&amp;<font></font>
        (!(prop in proto) || proto[prop] !== obj[prop]);<font></font>
}<font></font>
<font></font>
if ( Object.prototype.hasOwnProperty ) {<font></font>
    var hasOwnProperty = function(obj, prop) {<font></font>
        return obj.hasOwnProperty(prop);<font></font>
    }<font></font>
}<font></font>
<font></font>
// a, b, c found in modern browsers<font></font>
// b, c found in Safari 2.0.1 and older<font></font>
for ( var prop in obj2 ) {<font></font>
    if ( hasOwnProperty(obj2, prop) ) {<font></font>
        document.writeln( "Object2 w/ hasOwn: " + prop );<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面是对的跨浏览器解决方案</font></font><code>hasOwnProperty</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但有一个警告：无法区分原型和实例上具有相同属性的情况-只是假设它来自原型。</font><font style="vertical-align: inherit;">您可以根据自己的情况将其更改为宽容或严格，但是至少这应该会有所帮助。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
