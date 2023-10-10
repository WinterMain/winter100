---
layout: question
title:  JavaScript的“绑定”方法有什么用？
date:   2020-03-11T12:41:34.000Z
description: bind()在JavaScript中有什么用？...
img: 
author: LEY神无
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>bind()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中有什么</font><font style="vertical-align: inherit;">用</font><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第817篇《JavaScript的“绑定”方法有什么用？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿路易</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p>Another usage is that you can pass binded function as an argument to another function which is operating under another execution context.</p>

<pre><code>var name = "sample";<font></font>
function sample(){<font></font>
  console.log(this.name);<font></font>
}<font></font>
var cb = sample.bind(this);<font></font>
<font></font>
function somefunction(cb){<font></font>
  //other code<font></font>
  cb();<font></font>
}<font></font>
somefunction.call({}, cb);<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐猿</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bind（）方法创建一个新的函数实例，该函数实例的该值绑定到传递给bind（）的值。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>   window.color = "red"; <font></font>
   var o = { color: "blue" }; <font></font>
   function sayColor(){ <font></font>
       alert(this.color); <font></font>
   } <font></font>
   var objectSayColor = sayColor.bind(o); <font></font>
   objectSayColor(); //blue <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，通过调用bind（）并传入对象o从sayColor（）创建了一个名为objectSayColor（）的新函数。</font><font style="vertical-align: inherit;">objectSayColor（）函数的this值等于o，因此调用该函数（即使是全局调用）也将导致显示字符串“ blue”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：Nicholas C. Zakas-Web开发人员的专业JAVASCRIPT®</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯飞云</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如前所述，</font></font><code>Function.bind()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让您指定函数将在其中执行的上下文（即，它使您可以将</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字将解析到的</font><font style="vertical-align: inherit;">对象传递</font><font style="vertical-align: inherit;">给函数主体。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两种类似的工具包API方法，它们执行类似的服务：</font></font></p>

<p><a href="http://api.jquery.com/jquery.proxy/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery.proxy（）</font></font></a></p>

<p><a href="https://dojotoolkit.org/reference-guide/1.9/dojo/_base/lang.html#dojo-base-lang-hitch" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dojo.hitch（）</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProGO</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过将参数绑定到值来创建新函数</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>bind</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法从另一个函数创建一个新函数，其中一个或多个参数绑定到特定值，包括隐式</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分申请</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><a href="https://en.wikipedia.org/wiki/Partial_application" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分应用</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的示例</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">通常我们提供一个带有所有参数的函数，该函数产生一个值。</font><font style="vertical-align: inherit;">这就是所谓的功能应用程序。</font><font style="vertical-align: inherit;">我们正在将该函数应用于其参数。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">高阶函数（HOF）</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分应用程序是</font></font><a href="https://en.wikipedia.org/wiki/Higher-order_function" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">高阶函数</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（HOF）的</font><font style="vertical-align: inherit;">一个示例，</font><font style="vertical-align: inherit;">因为它产生的新函数具有较少的参数。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绑定多个参数</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>bind</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用来将具有多个参数的函数转换为新函数。  </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function multiply(x, y) { <font></font>
    return x * y; <font></font>
}<font></font>
<font></font>
let multiplyBy10 = multiply.bind(null, 10);<font></font>
console.log(multiplyBy10(5));</code></pre>
</div>
</div>
<p></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从实例方法转换为静态函数</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在最常见的用例中，当使用一个参数调用该</font></font><code>bind</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">时，该</font><font style="vertical-align: inherit;">方法将创建一个新函数，该函数具有</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绑定到特定值的值。</font><font style="vertical-align: inherit;">实际上，这会将实例方法转换为静态方法。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function Multiplier(factor) { <font></font>
    this.factor = factor;<font></font>
}<font></font>
<font></font>
Multiplier.prototype.multiply = function(x) { <font></font>
    return this.factor * x; <font></font>
}<font></font>
<font></font>
function ApplyFunction(func, value) {<font></font>
    return func(value);<font></font>
}<font></font>
<font></font>
var mul = new Multiplier(5);<font></font>
<font></font>
// Produces garbage (NaN) because multiplying "undefined" by 10<font></font>
console.log(ApplyFunction(mul.multiply, 10));<font></font>
<font></font>
// Produces expected result: 50<font></font>
console.log(ApplyFunction(mul.multiply.bind(mul), 10));</code></pre>
</div>
</div>
<p></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实施有状态回调</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面的示例说明如何使用绑定</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使对象方法充当可以轻松更新对象状态的回调。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function ButtonPressedLogger()<font></font>
{<font></font>
   this.count = 0;<font></font>
   this.onPressed = function() {<font></font>
      this.count++;<font></font>
      console.log("pressed a button " + this.count + " times");<font></font>
   }<font></font>
   for (let d of document.getElementsByTagName("button"))<font></font>
      d.onclick = this.onPressed.bind(this);<font></font>
}<font></font>
<font></font>
new ButtonPressedLogger();      </code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;button&gt;press me&lt;/button&gt;<font></font>
&lt;button&gt;no press me&lt;/button&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱理查德</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将在理论上和实践上解释绑定</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">javascript中的bind是一种方法-Function.prototype.bind。</font><font style="vertical-align: inherit;">绑定是一种方法。</font><font style="vertical-align: inherit;">它被称为函数原型。</font><font style="vertical-align: inherit;">此方法创建一个函数，其主体与调用该函数的主体相似，但是“ this”是指传递给bind方法的第一个参数。</font><font style="vertical-align: inherit;">它的语法是</font></font></p>

<pre><code>     var bindedFunc = Func.bind(thisObj,optionsArg1,optionalArg2,optionalArg3,...);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例： - </font></font></p>

<pre><code>  var checkRange = function(value){<font></font>
      if(typeof value !== "number"){<font></font>
              return false;<font></font>
      }<font></font>
      else {<font></font>
         return value &gt;= this.minimum &amp;&amp; value &lt;= this.maximum;<font></font>
      }<font></font>
  }<font></font>
<font></font>
  var range = {minimum:10,maximum:20};<font></font>
<font></font>
  var boundedFunc = checkRange.bind(range); //bounded Function. this refers to range<font></font>
  var result = boundedFunc(15); //passing value<font></font>
  console.log(result) // will give true;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗GreenNear</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量具有局部和全局范围。</font><font style="vertical-align: inherit;">假设我们有两个具有相同名称的变量。</font><font style="vertical-align: inherit;">一个是全局定义的，另一个是在函数闭包内部定义的，我们要获取函数闭包内部的变量值。</font><font style="vertical-align: inherit;">在这种情况下，我们使用此bind（）方法。</font><font style="vertical-align: inherit;">请参见下面的简单示例：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var x = 9; // this refers to global "window" object here in the browser<font></font>
var person = {<font></font>
  x: 81,<font></font>
  getX: function() {<font></font>
    return this.x;<font></font>
  }<font></font>
};<font></font>
<font></font>
var y = person.getX; // It will return 9, because it will call global value of x(var x=9).<font></font>
<font></font>
var x2 = y.bind(person); // It will return 81, because it will call local value of x, which is defined in the object called person(x=81).<font></font>
<font></font>
document.getElementById("demo1").innerHTML = y();<font></font>
document.getElementById("demo2").innerHTML = x2();</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;p id="demo1"&gt;0&lt;/p&gt;<font></font>
&lt;p id="demo2"&gt;0&lt;/p&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
