---
layout: question
title:  JavaScript中的静态变量
date:   2020-03-11T06:35:22.000Z
description: 如何在Javascript中创建静态变量？...
img: 
author: Davaid番长十三
category: question
answer: 10
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在Javascript中创建静态变量？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第687篇《JavaScript中的静态变量》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门樱前端</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>If you want to use prototype then there is a way</p>

<pre><code>var p = function Person() {<font></font>
    this.x = 10;<font></font>
    this.y = 20;<font></font>
}<font></font>
p.prototype.counter = 0;<font></font>
var person1 = new p();<font></font>
person1.prototype = p.prototype;<font></font>
console.log(person1.counter);<font></font>
person1.prototype.counter++;<font></font>
var person2 = new p();<font></font>
person2.prototype = p.prototype;<font></font>
console.log(person2.counter);<font></font>
console.log(person1.counter);<font></font>
</code></pre>

<p>Doing this you will be able to access the counter variable from any instance and any change in the property will be immediately reflected!!</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯JinJin</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>There is no such thing as an static variable in Javascript. This language is prototype-based object orientated, so there are no classes, but prototypes from where objects "copy" themselves.</p>

<p>You may simulate them with global variables or with prototyping (adding a property to the prototype):</p>

<pre><code>function circle(){<font></font>
}<font></font>
circle.prototype.pi=3.14159<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanHarry</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Window level vars are sorta like statics in the sense that you can use direct reference and these are available to all parts of your app</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小胖</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>In JavaScript, there is no term or keyword static, but we can put such data directly into function object (like in any other object).</p>

<pre><code>function f() {<font></font>
    f.count = ++f.count || 1 // f.count is undefined at first<font></font>
    alert("Call No " + f.count)<font></font>
}<font></font>
<font></font>
f(); // Call No 1<font></font>
<font></font>
f(); // Call No 2<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长村村</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>The closest thing in JavaScript to a static variable is a global variable - this is simply a variable declared outside the scope of a function or object literal:</p>

<pre><code>var thisIsGlobal = 1;<font></font>
<font></font>
function foo() {<font></font>
    var thisIsNot = 2;<font></font>
}<font></font>
</code></pre>

<p>The other thing you could do would be to store global variables inside an object literal like this:</p>

<pre><code>var foo = { bar : 1 }
</code></pre>

<p>And then access the variabels like this: <code>foo.bar</code>.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva西里</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>In JavaScript variables are <strong>static</strong> by default. <em>Example</em>:</p>

<pre><code>var x = 0;<font></font>
<font></font>
function draw() {<font></font>
    alert(x); //<font></font>
    x+=1;<font></font>
}<font></font>
<font></font>
setInterval(draw, 1000);<font></font>
</code></pre>

<p>The value of x is incremented by 1 every 1000 milliseconds<br>
It will print 1,2,3 so forth</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端凯</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>If you are using the new <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes#Prototype_methods" rel="noreferrer">class syntax</a> then you can now do the following:</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>    class MyClass {<font></font>
      static get myStaticVariable() {<font></font>
        return "some static variable";<font></font>
      }<font></font>
    }<font></font>
<font></font>
    console.log(MyClass.myStaticVariable);<font></font>
<font></font>
    aMyClass = new MyClass();<font></font>
    console.log(aMyClass.myStaticVariable, "is undefined");</code></pre>
</div>
</div>
<p></p>

<p>This effectively creates a static variable in JavaScript.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云神无</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>function Person(){<font></font>
  if(Person.count == undefined){<font></font>
    Person.count = 1;<font></font>
  }<font></font>
  else{<font></font>
    Person.count ++;<font></font>
  }<font></font>
  console.log(Person.count);<font></font>
}<font></font>
<font></font>
var p1 = new Person();<font></font>
var p2 = new Person();<font></font>
var p3 = new Person();<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过IIFE（立即调用的函数表达式）执行此操作：</font></font></p>

<pre><code>var incr = (function () {<font></font>
    var i = 1;<font></font>
<font></font>
    return function () {<font></font>
        return i++;<font></font>
    }<font></font>
})();<font></font>
<font></font>
incr(); // returns 1<font></font>
incr(); // returns 2<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门飞云泡芙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用arguments.callee来存储“静态”变量（这在匿名函数中也很有用）：</font></font></p>

<pre><code>function () {<font></font>
  arguments.callee.myStaticVar = arguments.callee.myStaticVar || 1;<font></font>
  arguments.callee.myStaticVar++;<font></font>
  alert(arguments.callee.myStaticVar);<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
