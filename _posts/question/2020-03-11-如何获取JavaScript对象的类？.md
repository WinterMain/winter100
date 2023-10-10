---
layout: question
title:  如何获取JavaScript对象的类？
date:   2020-03-11T04:33:19.000Z
description: 我创建了一个JavaScript对象，但是如何确定该对象的类呢？我想要一些类似于Java的.getClass()方法。...
img: 
author: 斯丁卡卡西
category: question
answer: 10
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建了一个JavaScript对象，但是如何确定该对象的类呢？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想要一些类似于Java的</font></font><code>.getClass()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第681篇《如何获取JavaScript对象的类？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅十三</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><code>getClass()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">的实现</font></font><code>getInstance()</code></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用来获取对象类的引用</font></font><code>this.constructor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从实例上下文中：</font></font></h2>

<pre><code>function A() {<font></font>
  this.getClass = function() {<font></font>
    return this.constructor;<font></font>
  }<font></font>
<font></font>
  this.getNewInstance = function() {<font></font>
    return new this.constructor;<font></font>
  }<font></font>
}<font></font>
<font></font>
var a = new A();<font></font>
console.log(a.getClass());  //  function A { // etc... }<font></font>
<font></font>
// you can even:<font></font>
var b = new (a.getClass());<font></font>
console.log(b instanceof A); // true<font></font>
var c = a.getNewInstance();<font></font>
console.log(c instanceof A); // true<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从静态上下文：</font></font></h2>

<pre><code>function A() {};<font></font>
<font></font>
A.getClass = function() {<font></font>
  return this;<font></font>
}<font></font>
<font></font>
A.getInstance() {<font></font>
  return new this;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋蛋蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript是一种无类语言：没有类可以像Java中一样静态地定义类的行为。</font><font style="vertical-align: inherit;">JavaScript使用原型而不是类来定义对象属性，包括方法和继承。</font><font style="vertical-align: inherit;">可以使用JavaScript中的原型来模拟许多基于类的功能。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanJinJin</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在javascript中，没有任何类，但是我认为您需要构造函数名称，</font></font><code>obj.constructor.toString()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将告诉您所需的内容。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖MandyGil</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于ES6中的Javascript类，可以使用</font></font><code>object.constructor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在下面的示例类中，该</font></font><code>getClass()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法将返回您期望的ES6类：</font></font></p>

<pre><code>var Cat = class {<font></font>
<font></font>
    meow() {<font></font>
<font></font>
        console.log("meow!");<font></font>
<font></font>
    }<font></font>
<font></font>
    getClass() {<font></font>
<font></font>
        return this.constructor;<font></font>
<font></font>
    }<font></font>
<font></font>
}<font></font>
<font></font>
var fluffy = new Cat();<font></font>
<font></font>
...<font></font>
<font></font>
var AlsoCat = fluffy.getClass();<font></font>
var ruffles = new AlsoCat();<font></font>
<font></font>
ruffles.meow();    // "meow!"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果从</font></font><code>getClass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">实例化该类，请</font><font style="vertical-align: inherit;">确保将其包装在方括号中，例如</font></font><code>ruffles = new ( fluffy.getClass() )( args... );</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端LEY米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我现在有一种情况可以通用工作，并使用了以下方法：</font></font></p>

<pre><code>class Test {<font></font>
  // your class definition<font></font>
}<font></font>
<font></font>
nameByType = function(type){<font></font>
  return type.prototype["constructor"]["name"];<font></font>
};<font></font>
<font></font>
console.log(nameByType(Test));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您没有对象的实例，那就是我发现通过类型输入获取类名称的唯一方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（用ES2017编写）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">点符号也可以</font></font></p>

<pre><code>console.log(Test.prototype.constructor.name); // returns "Test" 
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony神乐</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><a href="http://docs.oracle.com/javase/7/docs/api/java/lang/Object.html#getClass()" rel="noreferrer"><code>getClass()</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中</font><font style="vertical-align: inherit;">没有Java的完全对应版本</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">通常，这是由于JavaScript是基于</font></font><a href="http://en.wikipedia.org/wiki/Prototype-based_programming" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原型的语言</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而不是Java是基于</font></font><a href="http://en.wikipedia.org/wiki/Class-based_programming" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类的</font></font></a><font style="vertical-align: inherit;"><a href="http://en.wikipedia.org/wiki/Prototype-based_programming" rel="noreferrer"><font style="vertical-align: inherit;">语言</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据您的需要</font></font><code>getClass()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，JavaScript中有几个选项：</font></font></p>

<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/typeof" rel="noreferrer"><code>typeof</code></a></li>
<li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/instanceof" rel="noreferrer"><code>instanceof</code></a></li>
<li><code>obj.</code><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/constructor" rel="noreferrer"><code>constructor</code></a></li>
<li><code>func.</code><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/prototype" rel="noreferrer"><code>prototype</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>proto</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/isPrototypeOf" rel="noreferrer"><code>isPrototypeOf</code></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些例子：</font></font></p>

<pre><code>function Foo() {}<font></font>
var foo = new Foo();<font></font>
<font></font>
typeof Foo;             // == "function"<font></font>
typeof foo;             // == "object"<font></font>
<font></font>
foo instanceof Foo;     // == true<font></font>
foo.constructor.name;   // == "Foo"<font></font>
Foo.name                // == "Foo"    <font></font>
<font></font>
Foo.prototype.isPrototypeOf(foo);   // == true<font></font>
<font></font>
Foo.prototype.bar = function (x) {return x+x;};<font></font>
foo.bar(21);            // == 42<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：如果使用Uglify编译代码，它将更改非全局类名。</font><font style="vertical-align: inherit;">为了防止这种情况，Uglify有一个</font></font><a href="https://github.com/mishoo/UglifyJS2" rel="noreferrer"><code>--mangle</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数，可以使用</font></font><a href="https://github.com/terinjokes/gulp-uglify" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">gulp</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://github.com/gruntjs/grunt-contrib-uglify" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">grunt</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置为false </font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此函数返回</font></font><code>"Undefined"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未定义的值和</font></font><code>"Null"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">null。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于所有其他值，</font></font><code>CLASSNAME</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-part是从中提取的</font></font><code>[object CLASSNAME]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是使用的结果</font></font><code>Object.prototype.toString.call(value)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-js prettyprint-override"><code>function getClass(obj) {<font></font>
  if (typeof obj === "undefined") return "Undefined";<font></font>
  if (obj === null) return "Null";<font></font>
  return Object.prototype.toString.call(obj).match(/^\[object\s(.*)\]$/)[1];<font></font>
}<font></font>
<font></font>
getClass("")   === "String";<font></font>
getClass(true) === "Boolean";<font></font>
getClass(0)    === "Number";<font></font>
getClass([])   === "Array";<font></font>
getClass({})   === "Object";<font></font>
getClass(null) === "Null";<font></font>
// etc...<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁斯丁</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Object/constructor" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构造函数属性</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取对创建对象的构造函数的引用</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>function MyObject(){<font></font>
}<font></font>
<font></font>
var obj = new MyObject();<font></font>
obj.constructor; // MyObject<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果需要在运行时确认对象的类型，则可以使用</font></font><a href="https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Operators/Special_Operators/instanceof_Operator" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">instanceof</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符：</font></font></p>

<pre><code>obj instanceof MyObject // true
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO小胖</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>obj.constructor.name
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是现代浏览器中的可靠方法。</font></font><code>Function.name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已在ES6中正式添加到该标准中，从而使其成为符合标准的方法，可将JavaScript对象的“类”作为字符串获取。</font><font style="vertical-align: inherit;">如果用实例化该对象</font></font><code>var obj = new MyClass()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将返回“ MyClass”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将为数字返回“ Number”，为数组返回“ Array”，为函数返回“ Function”，等等。它的行为通常与预期的一样。</font><font style="vertical-align: inherit;">失败的唯一情况是通过原型创建的对象没有原型</font></font><code>Object.create( null )</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，或者该对象是从匿名定义（未命名）的函数实例化的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另请注意，如果要压缩代码，则与硬编码类型字符串进行比较是不安全的。</font><font style="vertical-align: inherit;">例如，而不是检查是否</font></font><code>obj.constructor.name == "MyType"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而是检查</font></font><code>obj.constructor.name == MyType.name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">或者只是比较构造函数本身，但是这将无法跨DOM边界，因为每个DOM上都有不同的构造函数实例，因此无法在其构造函数上进行对象比较。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">用户7049302300</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要获取“伪类”，您可以通过以下方式获取构造函数</font></font></p>

<pre><code>obj.constructor
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设</font></font><code>constructor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在进行继承时正确设置了-这是通过类似以下方式进行的：</font></font></p>

<pre><code>Dog.prototype = new Animal();<font></font>
Dog.prototype.constructor = Dog;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这两行，以及：</font></font></p>

<pre><code>var woofie = new Dog()
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>woofie.constructor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指向</font></font><code>Dog</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">请注意，它</font></font><code>Dog</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个构造函数，并且是一个</font></font><code>Function</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象。</font><font style="vertical-align: inherit;">但是你可以</font></font><code>if (woofie.constructor === Dog) { ... }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想以字符串形式获取类名，我发现以下方法运行良好：</font></font></p>

<p><a href="http://blog.magnetiq.com/post/514962277/finding-out-class-names-of-javascript-objects"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://blog.magnetiq.com/post/514962277/finding-out-class-names-of-javascript-objects</font></font></a></p>

<pre><code>function getObjectClass(obj) {<font></font>
    if (obj &amp;&amp; obj.constructor &amp;&amp; obj.constructor.toString) {<font></font>
        var arr = obj.constructor.toString().match(<font></font>
            /function\s*(\w+)/);<font></font>
<font></font>
        if (arr &amp;&amp; arr.length == 2) {<font></font>
            return arr[1];<font></font>
        }<font></font>
    }<font></font>
<font></font>
    return undefined;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它到达构造函数，将其转换为字符串，并提取构造函数的名称。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，这</font></font><code>obj.constructor.name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能效果很好，但不是标准的。</font><font style="vertical-align: inherit;">它可以在Chrome和Firefox上使用，但不能在IE（包括IE 9或IE 10 RTM）上使用。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
