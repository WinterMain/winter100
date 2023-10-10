---
layout: question
title:  JavaScript ES6类中的私有属性
date:   2020-03-16T03:37:00.000Z
description: 是否可以在ES6类中创建私有属性？这是一个例子。如何防止访问instance.property？class Something {  const...
img: 
author: GilTony泡芙
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以在ES6类中创建私有属性？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个例子。</font><font style="vertical-align: inherit;">如何防止访问</font></font><code>instance.property</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<pre><code>class Something {<font></font>
  constructor(){<font></font>
    this.property = "test";<font></font>
  }<font></font>
}<font></font>
<font></font>
var instance = new Something();<font></font>
console.log(instance.property); //=&gt; "test"<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1697篇《JavaScript ES6类中的私有属性》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">AEva伽罗</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p>Yes totally can, and pretty easily too. This is done by exposing your private variables and functions by returning the prototype object graph in the constructor. This is nothing new, but take a bit of js foo to understand the elegance of it. This way does not use global scoped, or weakmaps. It is a form of reflection built into the language. Depending on how you leverage this; one can either force an exception which interrupts the call stack, or bury the exception as an <code>undefined</code>. This is demonstarted below, and can read more about these features <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes" rel="nofollow noreferrer">here</a></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>class Clazz {<font></font>
  constructor() {<font></font>
    var _level = 1<font></font>
<font></font>
    function _private(x) {<font></font>
      return _level * x;<font></font>
    }<font></font>
    return {<font></font>
      level: _level,<font></font>
      public: this.private,<font></font>
      public2: function(x) {<font></font>
        return _private(x);<font></font>
      },<font></font>
      public3: function(x) {<font></font>
        return _private(x) * this.public(x);<font></font>
      },<font></font>
    };<font></font>
  }<font></font>
<font></font>
  private(x) {<font></font>
    return x * x;<font></font>
  }<font></font>
}<font></font>
<font></font>
var clazz = new Clazz();<font></font>
<font></font>
console.log(clazz._level); //undefined<font></font>
console.log(clazz._private); // undefined<font></font>
console.log(clazz.level); // 1<font></font>
console.log(clazz.public(1)); //1<font></font>
console.log(clazz.public2(2)); //2<font></font>
console.log(clazz.public3(3)); //27<font></font>
console.log(clazz.private(0)); //error</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙阿飞</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的-您可以创建封装的属性</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是至少不能通过ES6使用访问修饰符（public | private）来完成。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个简单的示例，如何使用ES6完成它：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1使用</font></font><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-class-definitions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">课程</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">词</font><font style="vertical-align: inherit;">创建课程</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2在其构造函数内部，使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#Block_scope_with_let"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">let</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> OR </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">const</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保留字</font><font style="vertical-align: inherit;">声明块范围变量</font><font style="vertical-align: inherit;">-&gt;由于它们是块范围，因此无法从外部访问（封装）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3要允许对这些变量进行某些访问控制（设置器|获取器），可以使用以下</font></font><code>this.methodName=function(){}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法</font><font style="vertical-align: inherit;">在其构造函数中声明实例方法：</font></font></p>

<pre><code>"use strict";<font></font>
    class Something{<font></font>
        constructor(){<font></font>
            //private property<font></font>
            let property="test";<font></font>
            //private final (immutable) property<font></font>
            const property2="test2";<font></font>
            //public getter<font></font>
            this.getProperty2=function(){<font></font>
                return property2;<font></font>
            }<font></font>
            //public getter<font></font>
            this.getProperty=function(){<font></font>
                return property;<font></font>
            }<font></font>
            //public setter<font></font>
            this.setProperty=function(prop){<font></font>
                property=prop;<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在让我们检查一下：</font></font></p>

<pre><code>var s=new Something();<font></font>
    console.log(typeof s.property);//undefined <font></font>
    s.setProperty("another");//set to encapsulated `property`<font></font>
    console.log(s.getProperty());//get encapsulated `property` value<font></font>
    console.log(s.getProperty2());//get encapsulated immutable `property2` value<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Green</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取决于</font></font><a href="http://wiki.ecmascript.org/doku.php?do=search&amp;id=class" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你问的人</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> :-)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎已纳入</font><a href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-class-definitions" rel="noreferrer"><font style="vertical-align: inherit;">当前草案</font></a></font><code>private</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><a href="http://wiki.ecmascript.org/doku.php?id=strawman:maximally_minimal_classes" rel="noreferrer"><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最大最小类</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提议中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未包含</font><font style="vertical-align: inherit;">任何</font><font style="vertical-align: inherit;">属性修饰符</font><font style="vertical-align: inherit;">。</font></font><a href="http://people.mozilla.org/~jorendorff/es6-draft.html#sec-class-definitions" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，可能会</font></font><a href="http://wiki.ecmascript.org/doku.php?id=strawman:syntactic_support_for_private_names" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持</font></font></a> <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实允许私有属性的</font></font><a href="http://wiki.ecmascript.org/doku.php?id=strawman:private_names" rel="noreferrer"><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">私有名称</font></font></em></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -并且它们可能也可以在类定义中使用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom卡卡西</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了将来供其他参考者参考，我现在听到的建议是使用</font></font><a href="https://stackoverflow.com/questions/15604168/whats-the-difference-between-es6-map-and-weakmap"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WeakMaps</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来保存私有数据。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个更清晰的示例：</font></font></p>

<pre><code>function storePrivateProperties(a, b, c, d) {<font></font>
  let privateData = new WeakMap;<font></font>
  // unique object as key, weak map can only accept object as key, when key is no longer referened, garbage collector claims the key-value <font></font>
  let keyA = {}, keyB = {}, keyC = {}, keyD = {};<font></font>
<font></font>
  privateData.set(keyA, a);<font></font>
  privateData.set(keyB, b);<font></font>
  privateData.set(keyC, c);<font></font>
  privateData.set(keyD, d);<font></font>
<font></font>
  return {<font></font>
    logPrivateKey(key) {<font></font>
      switch(key) {<font></font>
      case "a":<font></font>
        console.log(privateData.get(keyA));<font></font>
        break;<font></font>
      case "b":<font></font>
        console.log(privateData.get(keyB));<font></font>
        break;<font></font>
      case "c":<font></font>
        console.log(privateData.get(keyC));<font></font>
        break;<font></font>
      case "d":<font></font>
        console.log(privateData.set(keyD));<font></font>
        break;<font></font>
      default:<font></font>
        console.log(`There is no value for ${key}`)<font></font>
      }<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">三千曜米亚</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font><a href="https://github.com/zenparsing/es-private-fields" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法更好</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><a href="https://github.com/zenparsing/es-private-fields" rel="noreferrer"><font style="vertical-align: inherit;">提案</font></a><font style="vertical-align: inherit;">正在实施中。</font><font style="vertical-align: inherit;">欢迎捐款。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，对于对象中的作用域访问，</font></font><a href="https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6引入了</font></font><code>Symbol</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">s</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">符号是唯一的，除了反射之外，您不能从外部访问任何符号（例如Java / C＃中的private），但是内部可以访问符号的任何人都可以使用它进行键访问：</font></font></p>

<pre><code>var property = Symbol();<font></font>
class Something {<font></font>
    constructor(){<font></font>
        this[property] = "test";<font></font>
    }<font></font>
}<font></font>
<font></font>
var instance = new Something();<font></font>
<font></font>
console.log(instance.property); //=&gt; undefined, can only access with access to the Symbol<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村Mandy</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案是不”。</font><font style="vertical-align: inherit;">但是您可以创建对属性的私有访问，如下所示：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用模块。</font><font style="vertical-align: inherit;">除非使用</font></font><code>export</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字</font><font style="vertical-align: inherit;">将其公开，否则模块中的所有内容都是私有的</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在模块内部，使用函数闭包：</font><a href="http://www.kirupa.com/html5/closures_in_javascript.htm" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://www.kirupa.com/html5/closures_in_javascript.htm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.kirupa.com/html5/closures_in_javascript.htm</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（关于可以在早期版本的ES6规范中使用Symbols来确保隐私的建议，但现在不再适用：</font></font><a href="https://mail.mozilla.org/pipermail/es-discuss/2014-January/035604.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font><a href="https://mail.mozilla.org/pipermail/es-discuss/2014-January/035604.html" rel="noreferrer"><font style="vertical-align: inherit;">//mail.mozilla.org/pipermail/es-discuss/2014-January/035604。 html</font></a><font style="vertical-align: inherit;">和</font></font><a href="https://stackoverflow.com/a/22280202/1282216"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/22280202/1282216</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。有关符号和隐私的详细讨论，请参见：</font></font><a href="https://curiosity-driven.org/private-properties-in-javascript" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://curiosity-driven.org/private-properties-in-javascript" rel="noreferrer"><font style="vertical-align: inherit;">//curiosity-driven.org/private-properties-in-javascript</font></a><font style="vertical-align: inherit;">）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简短的答案，不，ES6类没有对私有属性的本地支持。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是您可以通过不将新属性附加到对象上，而是将它们保留在类构造函数中，并使用getter和setter来访问隐藏的属性来模仿这种行为。</font><font style="vertical-align: inherit;">注意，在类的每个新实例上，getter和setter方法都会重新定义。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6</font></font></p>

<pre><code>class Person {<font></font>
    constructor(name) {<font></font>
        var _name = name<font></font>
        this.setName = function(name) { _name = name; }<font></font>
        this.getName = function() { return _name; }<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES5</font></font></p>

<pre><code>function Person(name) {<font></font>
    var _name = name<font></font>
    this.setName = function(name) { _name = name; }<font></font>
    this.getName = function() { return _name; }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
