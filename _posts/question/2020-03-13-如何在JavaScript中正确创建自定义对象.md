---
layout: question
title:  如何在JavaScript中“正确”创建自定义对象？
date:   2020-03-13T07:21:16.000Z
description: 我不知道最好的方法是创建具有属性和方法的JavaScript对象。我看过一些示例，该示例中的人员使用var self = this然后self.在所有...
img: 
author: Tony斯丁
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道最好的方法是创建具有属性和方法的JavaScript对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看过一些示例，该示例中的人员使用</font></font><code>var self = this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后</font></font><code>self.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在所有功能中使用以确保范围始终正确。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我看到了</font></font><code>.prototype</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于添加属性的</font><font style="vertical-align: inherit;">示例</font><font style="vertical-align: inherit;">，而其他</font><font style="vertical-align: inherit;">示例</font><font style="vertical-align: inherit;">则是内联的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人可以给我一个带有某些属性和方法的JavaScript对象的正确示例吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1373篇《如何在JavaScript中“正确”创建自定义对象？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门村村古一</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个对象</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中创建对象的最简单方法是使用以下语法：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>var test = {<font></font>
  a : 5,<font></font>
  b : 10,<font></font>
  f : function(c) {<font></font>
    return this.a + this.b + c;<font></font>
  }<font></font>
}<font></font>
<font></font>
console.log(test);<font></font>
console.log(test.f(3));</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对于以结构化方式存储数据非常有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，对于更复杂的用例，通常最好创建函数实例：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function Test(a, b) {<font></font>
  this.a = a;<font></font>
  this.b = b;<font></font>
  this.f = function(c) {<font></font>
return this.a + this.b + c;<font></font>
  };<font></font>
}<font></font>
<font></font>
var test = new Test(5, 10);<font></font>
console.log(test);<font></font>
console.log(test.f(3));</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这使您可以创建共享相同“蓝图”的多个对象，类似于您在例如中使用类的方式。</font><font style="vertical-align: inherit;">Java。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，仍然可以通过使用原型来更高效地完成此操作。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当函数的不同实例共享相同的方法或属性时，就可以将它们移至该对象的原型。</font><font style="vertical-align: inherit;">这样，函数的每个实例都可以访问该方法或属性，但是不必为每个实例都复制它。</font></font></p>

<p>In our case, it makes sense to move the method <code>f</code> to the prototype :</p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function Test(a, b) {<font></font>
  this.a = a;<font></font>
  this.b = b;<font></font>
}<font></font>
<font></font>
Test.prototype.f = function(c) {<font></font>
  return this.a + this.b + c;<font></font>
};<font></font>
<font></font>
var test = new Test(5, 10);<font></font>
console.log(test);<font></font>
console.log(test.f(3));</code></pre>
</div>
</div>
<p></p>

<h2>Inheritance</h2>

<p>A simple but effective way to do inheritance in JavaScript, is to use the following two-liner :</p>

<pre><code>B.prototype = Object.create(A.prototype);<font></font>
B.prototype.constructor = B;<font></font>
</code></pre>

<p>That is similar to doing this :</p>

<pre><code>B.prototype = new A();
</code></pre>

<p>The main difference between both is that the constructor of <code>A</code> is not run when using <a href="https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Object/create" rel="nofollow noreferrer"><code>Object.create</code></a>, which is more intuitive and more similar to class based inheritance.</p>

<p>You can always choose to optionally run the constructor of <code>A</code> when creating a new instance of <code>B</code> by adding adding it to the constructor of <code>B</code> :</p>

<pre><code>function B(arg1, arg2) {<font></font>
    A(arg1, arg2); // This is optional<font></font>
}<font></font>
</code></pre>

<p>If you want to pass all arguments of <code>B</code> to <code>A</code>, you can also use <a href="https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Function/apply" rel="nofollow noreferrer"><code>Function.prototype.apply()</code></a> :</p>

<pre><code>function B() {<font></font>
    A.apply(this, arguments); // This is optional<font></font>
}<font></font>
</code></pre>

<p>If you want to mixin another object into the constructor chain of <code>B</code>, you can combine <code>Object.create</code> with <a href="https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" rel="nofollow noreferrer"><code>Object.assign</code></a> :</p>

<pre><code>B.prototype = Object.assign(Object.create(A.prototype), mixin.prototype);<font></font>
B.prototype.constructor = B;<font></font>
</code></pre>

<h3>Demo</h3>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>function A(name) {<font></font>
  this.name = name;<font></font>
}<font></font>
<font></font>
A.prototype = Object.create(Object.prototype);<font></font>
A.prototype.constructor = A;<font></font>
<font></font>
function B() {<font></font>
  A.apply(this, arguments);<font></font>
  this.street = "Downing Street 10";<font></font>
}<font></font>
<font></font>
B.prototype = Object.create(A.prototype);<font></font>
B.prototype.constructor = B;<font></font>
<font></font>
function mixin() {<font></font>
<font></font>
}<font></font>
<font></font>
mixin.prototype = Object.create(Object.prototype);<font></font>
mixin.prototype.constructor = mixin;<font></font>
<font></font>
mixin.prototype.getProperties = function() {<font></font>
  return {<font></font>
    name: this.name,<font></font>
    address: this.street,<font></font>
    year: this.year<font></font>
  };<font></font>
};<font></font>
<font></font>
function C() {<font></font>
  B.apply(this, arguments);<font></font>
  this.year = "2018"<font></font>
}<font></font>
<font></font>
C.prototype = Object.assign(Object.create(B.prototype), mixin.prototype);<font></font>
C.prototype.constructor = C;<font></font>
<font></font>
var instance = new C("Frank");<font></font>
console.log(instance);<font></font>
console.log(instance.getProperties());</code></pre>
</div>
</div>
<p></p>

<hr>

<h2>Note</h2>

<p><code>Object.create</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以在包括IE9 +在内的所有现代浏览器中安全使用。</font></font><code>Object.assign</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不适用于任何版本的IE或某些移动浏览器。</font><font style="vertical-align: inherit;">建议使用</font></font><a href="https://remysharp.com/2010/10/08/what-is-a-polyfill" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">polyfill</font></font></a> <code>Object.create</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和/或</font></font><code>Object.assign</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要使用它们并支持未实现它们的浏览器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以找到一个填充工具对</font></font><code>Object.create</code> <a href="https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Object/create" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
 和一个</font></font><code>Object.assign</code> <a href="https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易理查德</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>Closure</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是多功能的。</font><font style="vertical-align: inherit;">在创建对象时，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bobince</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很好地总结了</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原型与封闭</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font><font style="vertical-align: inherit;">但是，您可以模仿</font></font><code>OOP</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以功能编程方式使用闭包的</font><font style="vertical-align: inherit;">某些方面</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">记住</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数是JavaScript中的对象</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ; </font><font style="vertical-align: inherit;">因此以不同的方式将函数用作对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是关闭的示例：</font></font></p>

<pre><code>function outer(outerArg) {<font></font>
    return inner(innerArg) {<font></font>
        return innerArg + outerArg; //the scope chain is composed of innerArg and outerArg from the outer context <font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前一段时间，我碰到了Mozilla关于Closure的文章。</font><font style="vertical-align: inherit;">这就是我的看法：“闭包可让您将某些数据（环境）与对该数据进行操作的函数相关联。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这与面向对象编程（其中对象允许我们将某些数据（对象的属性）相关联”具有明显的相似之处</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><strong><font style="vertical-align: inherit;">）使用一种或多种方法</font></strong><font style="vertical-align: inherit;"> ”。</font><font style="vertical-align: inherit;">这是我第一次阅读闭包与经典OOP之间的并行性，而没有引用原型。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">怎么样？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您要计算某些商品的增值税。</font><font style="vertical-align: inherit;">增值税可能会在申请有效期内保持稳定。</font><font style="vertical-align: inherit;">在OOP（伪代码）中执行此操作的一种方法：</font></font></p>

<pre><code>public class Calculator {<font></font>
    public property VAT { get; private set; }<font></font>
    public Calculator(int vat) {<font></font>
        this.VAT = vat;<font></font>
    }<font></font>
    public int Calculate(int price) {<font></font>
        return price * this.VAT;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，您将VAT值传递给构造函数，然后您的calculate方法可以通过</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">闭包</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对其进行操作</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">现在，不使用类/构造函数，而是将VAT作为参数传递给函数。</font><font style="vertical-align: inherit;">因为您唯一感兴趣的是计算本身，所以返回一个新函数，即calculate方法：</font></font></p>

<pre><code>function calculator(vat) {<font></font>
    return function(item) {<font></font>
        return item * vat;<font></font>
    }<font></font>
}<font></font>
var calculate = calculator(1.10);<font></font>
var jsBook = 100; //100$<font></font>
calculate(jsBook); //110<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的项目中，确定最适合用来计算增值税的顶级值。</font><font style="vertical-align: inherit;">根据经验，每当您不断传递相同的参数时，就有一种使用闭包改进它的方法。</font><font style="vertical-align: inherit;">无需创建传统对象。</font></font></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Closures</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易伽罗</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了2009年接受的答案。如果您可以针对现代浏览器，则可以使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.defineProperty</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Object.defineProperty（）方法直接在对象上定义新属性，或修改对象上的现有属性，然后返回对象。</font><font style="vertical-align: inherit;">资料来源：</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla</font></font></a></p>
</blockquote>

<pre><code>var Foo = (function () {<font></font>
    function Foo() {<font></font>
        this._bar = false;<font></font>
    }<font></font>
    Object.defineProperty(Foo.prototype, "bar", {<font></font>
        get: function () {<font></font>
            return this._bar;<font></font>
        },<font></font>
        set: function (theBar) {<font></font>
            this._bar = theBar;<font></font>
        },<font></font>
        enumerable: true,<font></font>
        configurable: true<font></font>
    });<font></font>
    Foo.prototype.toTest = function () {<font></font>
        alert("my value is " + this.bar);<font></font>
    };<font></font>
    return Foo;<font></font>
}());<font></font>
<font></font>
// test instance<font></font>
var test = new Foo();<font></font>
test.bar = true;<font></font>
test.toTest();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要查看桌面和移动设备兼容性列表，请参见</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla的浏览器兼容性列表</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">是的，IE9 +和Safari移动版都支持它。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy小卤蛋凯</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当在构造函数调用过程中使用关闭“ this”的技巧时，是为了编写一个函数，该函数可以被其他不想在该对象上调用方法的对象用作回调。</font><font style="vertical-align: inherit;">它与“使范围正确”无关。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个普通的JavaScript对象：</font></font></p>

<pre><code>function MyThing(aParam) {<font></font>
    var myPrivateVariable = "squizzitch";<font></font>
<font></font>
    this.someProperty = aParam;<font></font>
    this.useMeAsACallback = function() {<font></font>
        console.log("Look, I have access to " + myPrivateVariable + "!");<font></font>
    }<font></font>
}<font></font>
<font></font>
// Every MyThing will get this method for free:<font></font>
MyThing.prototype.someMethod = function() {<font></font>
    console.log(this.someProperty);<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能会从阅读</font></font><a href="http://www.crockford.com/javascript/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道格拉斯·克罗克福德（Douglas Crockford）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于JavaScript的</font><font style="vertical-align: inherit;">内容</font><a href="http://www.crockford.com/javascript/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">中学</font></a><font style="vertical-align: inherit;">到</font><font style="vertical-align: inherit;">很多</font><font style="vertical-align: inherit;">。</font></font><a href="http://ejohn.org/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">约翰·雷西格</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font><a href="http://ejohn.org/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">John Resig</font></a><font style="vertical-align: inherit;">）也很聪明。</font><font style="vertical-align: inherit;">祝好运！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小小宇宙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">继续</font></font><a href="https://stackoverflow.com/a/1598077/561731"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bobince的答案</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在es6中，您现在可以实际创建一个 </font></font><code>class</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以执行以下操作：</font></font></p>

<pre><code>class Shape {<font></font>
    constructor(x, y) {<font></font>
        this.x = x;<font></font>
        this.y = y;<font></font>
    }<font></font>
<font></font>
    toString() {<font></font>
        return `Shape at ${this.x}, ${this.y}`;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，可以延伸到一个圆圈（如其他答案所示）：</font></font></p>

<pre><code>class Circle extends Shape {<font></font>
    constructor(x, y, r) {<font></font>
        super(x, y);<font></font>
        this.r = r;<font></font>
    }<font></font>
<font></font>
    toString() {<font></font>
        let shapeString = super.toString();<font></font>
        return `Circular ${shapeString} with radius ${this.r}`;<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最终在es6中变得更干净，更易于阅读。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个有效的例子： </font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="true" data-console="false" data-babel="false">
<div class="snippet-code snippet-currently-hidden">
<pre class="snippet-code-js lang-js prettyprint-override"><code>class Shape {<font></font>
  constructor(x, y) {<font></font>
    this.x = x;<font></font>
    this.y = y;<font></font>
  }<font></font>
<font></font>
  toString() {<font></font>
    return `Shape at ${this.x}, ${this.y}`;<font></font>
  }<font></font>
}<font></font>
<font></font>
class Circle extends Shape {<font></font>
  constructor(x, y, r) {<font></font>
    super(x, y);<font></font>
    this.r = r;<font></font>
  }<font></font>
<font></font>
  toString() {<font></font>
    let shapeString = super.toString();<font></font>
    return `Circular ${shapeString} with radius ${this.r}`;<font></font>
  }<font></font>
}<font></font>
<font></font>
let c = new Circle(1, 2, 4);<font></font>
<font></font>
console.log('' + c, c);</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西理查德</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以使用结构以这种方式进行操作：</font></font></p>

<pre><code>function createCounter () {<font></font>
    var count = 0;<font></font>
<font></font>
    return {<font></font>
        increaseBy: function(nb) {<font></font>
            count += nb;<font></font>
        },<font></font>
        reset: function {<font></font>
            count = 0;<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后 ：</font></font></p>

<pre><code>var counter1 = createCounter();<font></font>
counter1.increaseBy(4);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门达蒙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我相当频繁地使用此模式-我发现它在需要时为我提供了极大的灵活性。</font><font style="vertical-align: inherit;">在使用中，它非常类似于Java风格的类。</font></font></p>

<pre><code>var Foo = function()<font></font>
{<font></font>
<font></font>
    var privateStaticMethod = function() {};<font></font>
    var privateStaticVariable = "foo";<font></font>
<font></font>
    var constructor = function Foo(foo, bar)<font></font>
    {<font></font>
        var privateMethod = function() {};<font></font>
        this.publicMethod = function() {};<font></font>
    };<font></font>
<font></font>
    constructor.publicStaticMethod = function() {};<font></font>
<font></font>
    return constructor;<font></font>
}();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将使用创建时调用的匿名函数，并返回一个新的构造函数。</font><font style="vertical-align: inherit;">由于匿名函数仅被调用一次，因此您可以在其中创建私有静态变量（它们在闭包内部，对于该类的其他成员可见）。</font><font style="vertical-align: inherit;">构造函数基本上是一个标准的Javascript对象-您在其中定义私有属性，并将公共属性附加到</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，这种方法将Crockfordian方法与标准Javascript对象结合在一起，以创建功能更强大的类。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以像使用其他任何Javascript对象一样使用它：</font></font></p>

<pre><code>Foo.publicStaticMethod(); //calling a static method<font></font>
var test = new Foo();     //instantiation<font></font>
test.publicMethod();      //calling a method<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
