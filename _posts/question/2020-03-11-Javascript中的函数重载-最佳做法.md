---
layout: question
title:  Javascript中的函数重载-最佳做法
date:   2020-03-11T02:39:00.000Z
description: 用JavaScript伪造函数重载的最佳方法是什么？ 我知道不可能像其他语言一样重载Javascript中的函数。如果我需要一个函数有两个用途foo(...
img: 
author: 小胖十三Stafan
category: question
answer: 17
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用JavaScript伪造函数重载的最佳方法是什么？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道不可能像其他语言一样重载Javascript中的函数。</font><font style="vertical-align: inherit;">如果我需要一个函数有两个用途</font></font><code>foo(x)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>foo(x,y,z)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是最好的/优选的方法：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先使用不同的名称</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用类似的可选参数 </font></font><code>y = y || 'default'</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用参数数量</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查参数类型</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或如何？</font></font></li>
</ol></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第553篇《Javascript中的函数重载-最佳做法》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱飞云泡芙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们制作了</font></font><a href="http://github.com/stretchr/over.js" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">over.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是解决此问题的一种非常优雅的方法。</font><font style="vertical-align: inherit;">你可以做：</font></font></p>

<pre><code>var obj = {<font></font>
<font></font>
  /**<font></font>
   * Says something in the console.<font></font>
   *<font></font>
   * say(msg) - Says something once.<font></font>
   * say(msg, times) - Says something many times.<font></font>
   */<font></font>
  say: Over(<font></font>
    function(msg$string){<font></font>
      console.info(msg$string);<font></font>
    },<font></font>
    function(msg$string, times$number){<font></font>
      for (var i = 0; i &lt; times$number; i++) this.say(msg$string);<font></font>
    }<font></font>
  )<font></font>
<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green老丝Itachi</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于您的用例，这就是我要解决的方法</font></font><code>ES6</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（因为它已经是2017年底了）：</font></font></p>

<pre><code>const foo = (x, y, z) =&gt; {<font></font>
  if (y &amp;&amp; z) {<font></font>
    // Do your foo(x, y, z); functionality<font></font>
    return output;<font></font>
  }<font></font>
  // Do your foo(x); functionality<font></font>
  return output;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，您可以对此进行修改以使其与任何数量的参数一起使用，并且只需相应地更改条件语句即可。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子猪猪</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一个选项确实值得关注，因为这是我在非常复杂的代码设置中遇到的问题。</font><font style="vertical-align: inherit;">所以，我的答案是</font></font></p>

<blockquote>
  <ol>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先使用不同的名称</font></font></li>
  </ol>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一点但必不可少的提示，对于计算机，名称应该看起来有所不同，但对于您而言，名称应该没有变化。</font><font style="vertical-align: inherit;">重载函数的名称，例如：func，func1，func2。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三米亚阳光</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">截至2017年7月，以下是常用技术。</font><font style="vertical-align: inherit;">请注意，我们还可以在函数内执行类型检查。</font></font></p>

<pre><code>function f(...rest){   // rest is an array<font></font>
   console.log(rest.length);<font></font>
   for (v of rest) if (typeof(v)=="number")console.log(v);<font></font>
}<font></font>
f(1,2,3);  // 3 1 2 3<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅老丝</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript是非类型化语言，我只认为重载方法/函数的参数数量是有意义的。</font><font style="vertical-align: inherit;">因此，我建议检查是否已定义参数：</font></font></p>

<pre><code>myFunction = function(a, b, c) {<font></font>
     if (b === undefined &amp;&amp; c === undefined ){<font></font>
          // do x...<font></font>
     }<font></font>
     else {<font></font>
          // do y...<font></font>
     }<font></font>
};<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋十三</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想分享一个类似重载方法的有用示例。</font></font></p>

<pre><code>function Clear(control)<font></font>
{<font></font>
  var o = typeof control !== "undefined" ? control : document.body;<font></font>
  var children = o.childNodes;<font></font>
  while (o.childNodes.length &gt; 0)<font></font>
    o.removeChild(o.firstChild);<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法：Clear（）; </font><font style="vertical-align: inherit;">//清除所有文件</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">清除（myDiv）; </font><font style="vertical-align: inherit;">//清除myDiv引用的面板</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您现在可以在ECMAScript 2018中执行函数重载，而无需使用polyfills，检查var长度/类型等，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需使用</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">传播语法即可</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></strong></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function foo(var1, var2, opts){<font></font>
  // set default values for parameters<font></font>
  const defaultOpts = {<font></font>
    a: [1,2,3],<font></font>
    b: true,<font></font>
    c: 0.3289,<font></font>
    d: "str",<font></font>
  }<font></font>
  // merge default and passed-in parameters<font></font>
  // defaultOpts must go first!<font></font>
  const mergedOpts = {...defaultOpts, ...opts};<font></font>
<font></font>
  // you can now refer to parameters like b as mergedOpts.b,<font></font>
  // or just assign mergedOpts.b to b<font></font>
  console.log(mergedOpts.a);<font></font>
  console.log(mergedOpts.b);<font></font>
  console.log(mergedOpts.c);  <font></font>
  console.log(mergedOpts.d);<font></font>
}<font></font>
// the parameters you passed in override the default ones<font></font>
// all JS types are supported: primitives, objects, arrays, functions, etc.<font></font>
let var1, var2="random var";<font></font>
foo(var1, var2, {a: [1,2], d: "differentString"});<font></font>
<font></font>
// parameter values inside foo:<font></font>
//a: [1,2]<font></font>
//b: true<font></font>
//c: 0.3289<font></font>
//d: "differentString"</code></pre>
</div>
</div>
<p></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么是传播语法？</font></font></h2>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript建议的“剩余/扩展属性”提案（阶段4）将扩展属性添加到对象文字中。</font><font style="vertical-align: inherit;">它将自己的可枚举属性从提供的对象复制到新对象。
  </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关mdn的更多信息</font></font></a></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：对象文字中的传播语法在Edge和IE中不起作用，这是一项实验性功能。</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Browser_compatibility" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看浏览器的兼容性</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid番长</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于函数重载，可以执行类似的操作。</font></font></p>

<pre class="lang-js prettyprint-override"><code>function addCSS(el, prop, val) {<font></font>
  return {<font></font>
    2: function() {<font></font>
      // when two arguments are set<font></font>
      // now prop is an oject<font></font>
      for (var i in prop) {<font></font>
          el.style[i] = prop[i];<font></font>
      }<font></font>
    },<font></font>
    3: function() {<font></font>
      // when three arguments are set<font></font>
      el.style[prop] = val;<font></font>
    }<font></font>
    }[arguments.length]();<font></font>
}<font></font>
// usage<font></font>
var el = document.getElementById("demo");<font></font>
addCSS(el, "color", "blue");<font></font>
addCSS(el, {<font></font>
    "backgroundColor": "black",<font></font>
  "padding": "10px"<font></font>
});<font></font>
</code></pre>

<p><a href="https://developer.hyvor.com/tricks/js-function-overloading" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资源</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GoldenGG</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于这篇文章已经包含很多不同的解决方案，所以我想我再发表一个。</font></font></p>

<pre><code>function onlyUnique(value, index, self) {<font></font>
    return self.indexOf(value) === index;<font></font>
}<font></font>
<font></font>
function overload() {<font></font>
   var functions = arguments;<font></font>
   var nroffunctionsarguments = [arguments.length];<font></font>
    for (var i = 0; i &lt; arguments.length; i++) {<font></font>
        nroffunctionsarguments[i] = arguments[i].length;<font></font>
    }<font></font>
    var unique = nroffunctionsarguments.filter(onlyUnique);<font></font>
    if (unique.length === arguments.length) {<font></font>
        return function () {<font></font>
            var indexoffunction = nroffunctionsarguments.indexOf(arguments.length);<font></font>
            return functions[indexoffunction].apply(this, arguments);<font></font>
        }<font></font>
    }<font></font>
    else throw new TypeError("There are multiple functions with the same number of parameters");<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以如下所示使用：</font></font></p>

<pre><code>var createVector = overload(<font></font>
        function (length) {<font></font>
            return { x: length / 1.414, y: length / 1.414 };<font></font>
        },<font></font>
        function (a, b) {<font></font>
            return { x: a, y: b };<font></font>
        },<font></font>
        function (a, b,c) {<font></font>
            return { x: a, y: b, z:c};<font></font>
        }<font></font>
    );<font></font>
console.log(createVector(3, 4));<font></font>
console.log(createVector(3, 4,5));<font></font>
console.log(createVector(7.07));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个解决方案不是完美的，但我只想演示如何完成。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋L西里</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看一下这个。</font><font style="vertical-align: inherit;">非常酷
</font></font><a href="http://ejohn.org/blog/javascript-method-overloading/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://ejohn.org/blog/javascript-method-overloading/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
Trick Javascript允许您进行如下调用：</font></font></p>

<pre><code>var users = new Users();<font></font>
users.find(); // Finds all<font></font>
users.find("John"); // Finds users by name<font></font>
users.find("John", "Resig"); // Finds users by first and last name<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyMandyJim</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决此问题的另一种方法是使用特殊变量：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">arguments</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是一种实现：</font></font></p>

<pre><code>function sum() {<font></font>
    var x = 0;<font></font>
    for (var i = 0; i &lt; arguments.length; ++i) {<font></font>
        x += arguments[i];<font></font>
    }<font></font>
    return x;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此您可以将该代码修改为：</font></font></p>

<pre><code>function sum(){<font></font>
    var s = 0;<font></font>
    if (typeof arguments[0] !== "undefined") s += arguments[0];<font></font>
.<font></font>
.<font></font>
.<font></font>
    return s;<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁小胖Jim</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是尝试过，也许它适合您的需求。</font><font style="vertical-align: inherit;">根据参数的数量，您可以访问其他函数。</font><font style="vertical-align: inherit;">首次调用时将其初始化。</font><font style="vertical-align: inherit;">并且功能图隐藏在闭包中。</font></font></p>

<pre><code>TEST = {};<font></font>
<font></font>
TEST.multiFn = function(){<font></font>
    // function map for our overloads<font></font>
    var fnMap = {};<font></font>
<font></font>
    fnMap[0] = function(){<font></font>
        console.log("nothing here");<font></font>
        return this;    //    support chaining<font></font>
    }<font></font>
<font></font>
    fnMap[1] = function(arg1){<font></font>
        //    CODE here...<font></font>
        console.log("1 arg: "+arg1);<font></font>
        return this;<font></font>
    };<font></font>
<font></font>
    fnMap[2] = function(arg1, arg2){<font></font>
        //    CODE here...<font></font>
        console.log("2 args: "+arg1+", "+arg2);<font></font>
        return this;<font></font>
    };<font></font>
<font></font>
    fnMap[3] = function(arg1,arg2,arg3){<font></font>
        //    CODE here...<font></font>
        console.log("3 args: "+arg1+", "+arg2+", "+arg3);<font></font>
        return this;<font></font>
    };<font></font>
<font></font>
    console.log("multiFn is now initialized");<font></font>
<font></font>
    //    redefine the function using the fnMap in the closure<font></font>
    this.multiFn = function(){<font></font>
        fnMap[arguments.length].apply(this, arguments);<font></font>
        return this;<font></font>
    };<font></font>
<font></font>
    //    call the function since this code will only run once<font></font>
    this.multiFn.apply(this, arguments);<font></font>
<font></font>
    return this;    <font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试一下。 </font></font></p>

<pre><code>TEST.multiFn("0")<font></font>
    .multiFn()<font></font>
    .multiFn("0","1","2");<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva理查德阳光</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于JavaScript没有函数重载选项，因此可以使用对象。</font><font style="vertical-align: inherit;">如果有一个或两个必需的参数，最好将它们与options对象分开。</font><font style="vertical-align: inherit;">这是一个有关如何使用选项对象和填充值作为默认值（如果未在选项对象中传递值的情况下）的示例。</font></font></p>

<pre><code>    function optionsObjectTest(x, y, opts) {<font></font>
        opts = opts || {}; // default to an empty options object<font></font>
<font></font>
        var stringValue = opts.stringValue || "string default value";<font></font>
        var boolValue = !!opts.boolValue; // coerces value to boolean with a double negation pattern<font></font>
        var numericValue = opts.numericValue === undefined ? 123 : opts.numericValue;<font></font>
<font></font>
        return "{x:" + x + ", y:" + y + ", stringValue:'" + stringValue + "', boolValue:" + boolValue + ", numericValue:" + numericValue + "}";<font></font>
<font></font>
}<font></font>
</code></pre>

<p><a href="http://jsfiddle.net/vlad_bezden/4ZqH7/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是有关如何使用选项对象的示例</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomTony</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我需要同时使用foo（x）和foo（x，y，z）的两个函数，那是最佳/首选方式？</font></font></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是JavaScript本身不支持方法重载。</font><font style="vertical-align: inherit;">因此，如果它看到/解析了两个或多个具有相同名称的函数，则只需考虑最后定义的函数并覆盖先前的函数。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为适合大多数情况的一种方法如下： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以说你有方法 </font></font></p>

<pre><code>function foo(x)<font></font>
{<font></font>
} <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用新的方法来</font><font style="vertical-align: inherit;">代替</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">javascript中不可能</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的重载</font><font style="vertical-align: inherit;">方法</font></font></p>

<pre><code>fooNew(x,y,z)<font></font>
{<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后按如下所示修改第一个函数-</font></font></p>

<pre><code>function foo(arguments)<font></font>
{<font></font>
  if(arguments.length==2)<font></font>
  {<font></font>
     return fooNew(arguments[0],  arguments[1]);<font></font>
  }<font></font>
} <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您有许多这样的重载方法，请考虑使用</font></font><code>switch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不仅仅是</font></font><code>if-else</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="http://opensourceforgeeks.blogspot.in/2014/09/method-overloading-in-javascript.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多详细信息</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS：上面的链接转到我的个人博客，其中包含其他详细信息。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamJim</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有两种方法可以更好地解决此问题： </font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想保留很大的灵活性，请传递字典（关联数组） </font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以对象作为参数，并使用基于原型的继承来增加灵活性。</font></font></p></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L西门</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中没有实际的函数重载，因为它允许传递任意数量的任何类型的参数。</font><font style="vertical-align: inherit;">您必须在函数内部检查</font><font style="vertical-align: inherit;">已传递</font><font style="vertical-align: inherit;">了多少个</font></font><a href="https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Functions_and_function_scope/arguments" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及它们是什么类型。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯Sam</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确的答案是JAVASCRIPT中没有超载。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在功能内部检查/切换不是过载。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重载的概念：在某些编程语言中，函数重载或方法重载是创建具有不同实现的相同名称的多个方法的能力。</font><font style="vertical-align: inherit;">对重载函数的调用将针对该调用的上下文运行该函数的特定实现，从而允许一个函数调用根据上下文执行不同的任务。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，doTask（）和doTask（object O）是重载方法。</font><font style="vertical-align: inherit;">要调用后者，必须将一个对象作为参数传递，而前者不需要参数，而是使用空的参数字段进行调用。</font><font style="vertical-align: inherit;">一个常见的错误是在第二种方法中为对象分配默认值，这将导致模棱两可的调用错误，因为编译器不知道要使用这两种方法中的哪一种。</font></font></p>

<p><a href="https://en.wikipedia.org/wiki/Function_overloading" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://zh.wikipedia.org/wiki/Function_overloading</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议的所有实现都是不错的选择，但实际上，JavaScript没有本地实现。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
