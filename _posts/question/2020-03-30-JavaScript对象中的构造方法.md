---
layout: question
title:  JavaScript对象中的构造方法
date:   2020-03-30T09:14:17.000Z
description: JavaScript类/对象可以具有构造函数吗？它们是如何创建的？...
img: 
author: Tom泡芙
category: question
answer: 10
tags: JavaScript KoaJS
topic: KoaJS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript类/对象可以具有构造函数吗？</font><font style="vertical-align: inherit;">它们是如何创建的？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3833篇《JavaScript对象中的构造方法》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在大多数情况下，您必须以某种方式声明所需的属性，然后才能调用传递此信息的方法。</font><font style="vertical-align: inherit;">如果您不必一开始设置属性，则可以像这样在对象内调用方法。</font><font style="vertical-align: inherit;">可能不是最漂亮的方法，但这仍然有效。</font></font></p>

<pre><code>var objectA = {<font></font>
    color: ''; <font></font>
    callColor : function(){<font></font>
        console.log(this.color);<font></font>
    }<font></font>
    this.callColor(); <font></font>
}<font></font>
var newObject = new objectA(); <font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光GO</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里我们需要注意Java脚本中的一点，它是一种无类语言，但是我们可以通过使用Java脚本中的函数来实现。</font><font style="vertical-align: inherit;">实现此目的的最常见方法是，需要在Java脚本中创建一个函数，并使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">new </font></font></strong> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个对象，然后使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此</font></font></strong> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义属性和方法。下面是示例。</font></font></p>

<pre><code>// Function constructor<font></font>
<font></font>
   var calculator=function(num1 ,num2){<font></font>
   this.name="This is function constructor";<font></font>
   this.mulFunc=function(){<font></font>
      return num1*num2<font></font>
   };<font></font>
<font></font>
};<font></font>
<font></font>
var objCal=new calculator(10,10);// This is a constructor in java script<font></font>
alert(objCal.mulFunc());// method call<font></font>
alert(objCal.name);// property call<font></font>
<font></font>
//Constructors With Prototypes<font></font>
<font></font>
var calculator=function(){<font></font>
   this.name="Constructors With Prototypes";<font></font>
};<font></font>
<font></font>
calculator.prototype.mulFunc=function(num1 ,num2){<font></font>
 return num1*num2;<font></font>
};<font></font>
var objCal=new calculator();// This is a constructor in java script<font></font>
alert(objCal.mulFunc(10,10));// method call<font></font>
alert(objCal.name); // property call<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从上面使用Blixt的出色模板时，我发现它不能与多级继承（MyGrandChildClass扩展MyChildClass扩展MyClass）配合使用-反复调用第一个父级的构造函数。</font><font style="vertical-align: inherit;">因此，这是一个简单的解决方法-如果您需要多级继承，而不是将</font></font><code>this.constructor.super.call(this, surName);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">use </font></font><code>chainSuper(this).call(this, surName);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与链定义的函数一起</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">，如下所示：</font></font></p>

<pre><code>function chainSuper(cls) {<font></font>
  if (cls.__depth == undefined) cls.__depth = 1; else cls.__depth++;<font></font>
  var depth = cls.__depth;<font></font>
  var sup = cls.constructor.super;<font></font>
  while (depth &gt; 1) {<font></font>
    if (sup.super != undefined) sup = sup.super;<font></font>
    depth--;<font></font>
  }<font></font>
  return sup;<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><a href="http://www.jsoops.net/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.jsoops.net/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Js中的oop非常有用。</font><font style="vertical-align: inherit;">如果提供私有，受保护的公共变量和函数，以及继承功能。</font><font style="vertical-align: inherit;">示例代码：</font></font></p>

<pre><code>var ClassA = JsOops(function (pri, pro, pub)<font></font>
{// pri = private, pro = protected, pub = public<font></font>
<font></font>
    pri.className = "I am A ";<font></font>
<font></font>
    this.init = function (var1)// constructor<font></font>
    {<font></font>
        pri.className += var1;<font></font>
    }<font></font>
<font></font>
    pub.getData = function ()<font></font>
    {<font></font>
        return "ClassA(Top=" + pro.getClassName() + ", This=" + pri.getClassName()<font></font>
        + ", ID=" + pro.getClassId() + ")";<font></font>
    }<font></font>
<font></font>
    pri.getClassName = function () { return pri.className; }<font></font>
    pro.getClassName = function () { return pri.className; }<font></font>
    pro.getClassId = function () { return 1; }<font></font>
});<font></font>
<font></font>
var newA = new ClassA("Class");<font></font>
<font></font>
//***Access public function<font></font>
console.log(typeof (newA.getData));<font></font>
// function<font></font>
console.log(newA.getData());<font></font>
// ClassA(Top=I am A Class, This=I am A Class, ID=1)<font></font>
<font></font>
//***You can not access constructor, private and protected function<font></font>
console.log(typeof (newA.init));            // undefined<font></font>
console.log(typeof (newA.className));       // undefined<font></font>
console.log(typeof (newA.pro));             // undefined<font></font>
console.log(typeof (newA.getClassName));    // undefined<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near猪猪</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用</font></font><a href="http://www.typescriptlang.org/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Typescript，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们会这样做</font><a href="http://www.typescriptlang.org/" rel="nofollow"><font style="vertical-align: inherit;">-MicroSoft的</font></a><font style="vertical-align: inherit;">开源软件：-)</font></font></p>

<pre><code>class BankAccount {<font></font>
 balance: number;<font></font>
 constructor(initially: number) {<font></font>
 this.balance = initially;<font></font>
 }<font></font>
 deposit(credit: number) {<font></font>
 this.balance += credit;<font></font>
 return this.balance;<font></font>
 }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Typescript可让您“伪造”被编译为javascript构造的OO构造。</font><font style="vertical-align: inherit;">如果您正在启动一个大型项目，则可能会节省大量时间，并且它刚刚达到里程碑1.0版本。</font></font></p>

<p><a href="http://www.typescriptlang.org/Content/TypeScript%20Language%20Specification.pdf" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.typescriptlang.org/Content/TypeScript%20Language%20Specification.pdf</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的代码被“编译”为：</font></font></p>

<pre><code>var BankAccount = (function () {<font></font>
    function BankAccount(initially) {<font></font>
        this.balance = initially;<font></font>
    }<font></font>
    BankAccount.prototype.deposit = function (credit) {<font></font>
        this.balance += credit;<font></font>
        return this.balance;<font></font>
    };<font></font>
    return BankAccount;<font></font>
})();<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想我会发布有关javascript闭包的信息，因为还没有人使用闭包。 </font></font></p>

<pre><code>var user = function(id) {<font></font>
  // private properties &amp; methods goes here.<font></font>
  var someValue;<font></font>
  function doSomething(data) {<font></font>
    someValue = data;<font></font>
  };<font></font>
<font></font>
  // constructor goes here.<font></font>
  if (!id) return null;<font></font>
<font></font>
  // public properties &amp; methods goes here.<font></font>
  return {<font></font>
    id: id,<font></font>
    method: function(params) {<font></font>
      doSomething(params);<font></font>
    }<font></font>
  };<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">欢迎对此解决方案提出意见和建议。</font><font style="vertical-align: inherit;">:)</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，您可以在类声明中定义一个构造函数，如下所示：</font></font></p>

<pre><code>class Rectangle {<font></font>
  constructor(height, width) {<font></font>
    this.height = height;<font></font>
    this.width = width;<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么“构造函数”属性的意义是什么？</font><font style="vertical-align: inherit;">无法找出在哪里有用的任何想法？</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构造器属性的要点是提供某种方式来假装JavaScript具有类。</font><font style="vertical-align: inherit;">您</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做的一件事是在创建对象后更改对象的构造函数。</font><font style="vertical-align: inherit;">情况很复杂。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">几年前，我在上面写了一篇相当全面的文章：</font><a href="http://joost.zeekat.nl/constructors-considered-mildly-confusing.html" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://joost.zeekat.nl/constructors-considered-mildly-confusing.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//joost.zeekat.nl/constructors-considered-mildly-confusing.html</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个构造函数：</font></font></p>

<pre><code>function MyClass() {}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当你做</font></font></p>

<pre><code>var myObj = new MyClass();
</code></pre>

<p><code>MyClass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 执行，并返回该类的新对象。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用原型：</font></font></p>

<pre><code>function Box(color) // Constructor<font></font>
{<font></font>
    this.color = color;<font></font>
}<font></font>
<font></font>
Box.prototype.getColor = function()<font></font>
{<font></font>
    return this.color;<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">隐藏“颜色”（有点像私有成员变量）：</font></font></p>

<pre><code>function Box(col)<font></font>
{<font></font>
   var color = col;<font></font>
<font></font>
   this.getColor = function()<font></font>
   {<font></font>
       return color;<font></font>
   };<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法：</font></font></p>

<pre><code>var blueBox = new Box("blue");<font></font>
alert(blueBox.getColor()); // will alert blue<font></font>
<font></font>
var greenBox = new Box("green");<font></font>
alert(greenBox.getColor()); // will alert green<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
