---
layout: question
title:  JavaScript私有方法
date:   2020-03-12T12:50:56.000Z
description: 要使用公共方法创建JavaScript类，我需要执行以下操作：function Restaurant() {}Restaurant.prototy...
img: 
author: 西门小宇宙
category: question
answer: 13
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使用公共方法创建JavaScript类，我需要执行以下操作：</font></font></p>

<pre><code>function Restaurant() {}<font></font>
<font></font>
Restaurant.prototype.buy_food = function(){<font></font>
   // something here<font></font>
}<font></font>
<font></font>
Restaurant.prototype.use_restroom = function(){<font></font>
   // something here<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，我班的用户可以：</font></font></p>

<pre><code>var restaurant = new Restaurant();<font></font>
restaurant.buy_food();<font></font>
restaurant.use_restroom();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何创建一个私有方法，该私有方法可以由</font></font><code>buy_food</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>use_restroom</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">调用，</font><font style="vertical-align: inherit;">但不能由该类的用户外部</font><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">换句话说，我希望我的方法实现能够做到：</font></font></p>

<pre><code>Restaurant.prototype.use_restroom = function() {<font></font>
   this.private_stuff();<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这不起作用：</font></font></p>

<pre><code>var r = new Restaurant();<font></font>
r.private_stuff();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何将其定义</font></font><code>private_stuff</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为私有方法，使两者都适用？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经读过</font></font><a href="http://javascript.crockford.com/private.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Doug Crockford的文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">几次，但似乎公共方法不能调用“私有”方法，而外部可以调用“特权”方法。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1338篇《JavaScript私有方法》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony达蒙Mandy</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>There are many answers on this question already, but nothing fitted my needs. So i came up with my own solution, I hope it is usefull for someone:</p>

<pre><code>function calledPrivate(){<font></font>
    var stack = new Error().stack.toString().split("\n");<font></font>
    function getClass(line){<font></font>
        var i = line.indexOf(" ");<font></font>
        var i2 = line.indexOf(".");<font></font>
        return line.substring(i,i2);<font></font>
    }<font></font>
    return getClass(stack[2])==getClass(stack[3]);<font></font>
}<font></font>
<font></font>
class Obj{<font></font>
    privateMethode(){<font></font>
        if(calledPrivate()){<font></font>
            console.log("your code goes here");<font></font>
        }<font></font>
    }<font></font>
    publicMethode(){<font></font>
        this.privateMethode();<font></font>
    }<font></font>
}<font></font>
<font></font>
var obj = new Obj();<font></font>
obj.publicMethode(); //logs "your code goes here"<font></font>
obj.privateMethode(); //does nothing<font></font>
</code></pre>

<p>As you can see this system works when using this type of classes in javascript. As far as I figured out none of the methods commented above did.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱西里猴子</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>Class({  <font></font>
    Namespace:ABC,  <font></font>
    Name:"ClassL2",  <font></font>
    Bases:[ABC.ClassTop],  <font></font>
    Private:{  <font></font>
        m_var:2  <font></font>
    },  <font></font>
    Protected:{  <font></font>
        proval:2,  <font></font>
        fight:Property(function(){  <font></font>
            this.m_var--;  <font></font>
            console.log("ClassL2::fight (m_var)" +this.m_var);  <font></font>
        },[Property.Type.Virtual])  <font></font>
    },  <font></font>
    Public:{  <font></font>
        Fight:function(){  <font></font>
            console.log("ClassL2::Fight (m_var)"+this.m_var);  <font></font>
            this.fight();  <font></font>
        }  <font></font>
    }  <font></font>
});  <font></font>
</code></pre>

<p><a href="https://github.com/nooning/JSClass" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/nooning/JSClass</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>You have to put a closure around your actual constructor-function, where you can define your private methods.
To change data of the instances through these private methods, you have to give them "this" with them, either as an function argument or by calling this function with .apply(this) :</p>

<pre><code>var Restaurant = (function(){<font></font>
    var private_buy_food = function(that){<font></font>
        that.data.soldFood = true;<font></font>
    }<font></font>
    var private_take_a_shit = function(){<font></font>
        this.data.isdirty = true;   <font></font>
    }<font></font>
    // New Closure<font></font>
    function restaurant()<font></font>
    {<font></font>
        this.data = {<font></font>
            isdirty : false,<font></font>
            soldFood: false,<font></font>
        };<font></font>
    }<font></font>
<font></font>
    restaurant.prototype.buy_food = function()<font></font>
    {<font></font>
       private_buy_food(this);<font></font>
    }<font></font>
    restaurant.prototype.use_restroom = function()<font></font>
    {<font></font>
       private_take_a_shit.call(this);<font></font>
    }<font></font>
    return restaurant;<font></font>
})()<font></font>
<font></font>
// TEST:<font></font>
<font></font>
var McDonalds = new Restaurant();<font></font>
McDonalds.buy_food();<font></font>
McDonalds.use_restroom();<font></font>
console.log(McDonalds);<font></font>
console.log(McDonalds.__proto__);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony西门古一</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">私有函数无法使用模块模式访问公共变量</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi小卤蛋凯</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>var TestClass = function( ) {<font></font>
<font></font>
    var privateProperty = 42;<font></font>
<font></font>
    function privateMethod( ) {<font></font>
        alert( "privateMethod, " + privateProperty );<font></font>
    }<font></font>
<font></font>
    this.public = {<font></font>
        constructor: TestClass,<font></font>
<font></font>
        publicProperty: 88,<font></font>
        publicMethod: function( ) {<font></font>
            alert( "publicMethod" );<font></font>
            privateMethod( );<font></font>
        }<font></font>
    };<font></font>
};<font></font>
TestClass.prototype = new TestClass( ).public;<font></font>
<font></font>
<font></font>
var myTestClass = new TestClass( );<font></font>
<font></font>
alert( myTestClass.publicProperty );<font></font>
myTestClass.publicMethod( );<font></font>
<font></font>
alert( myTestClass.privateMethod || "no privateMethod" );<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与georgebrock相似，但略微冗长（IMHO）这样操作有任何问题吗？</font><font style="vertical-align: inherit;">（我没在任何地方看到它）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：我意识到这是没有用的，因为每个独立的实例都有自己的公用方法副本，从而破坏了原型的使用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomSam</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那这个呢？</font></font></p>

<pre><code>var Restaurant = (function() {<font></font>
<font></font>
 var _id = 0;<font></font>
 var privateVars = [];<font></font>
<font></font>
 function Restaurant(name) {<font></font>
     this.id = ++_id;<font></font>
     this.name = name;<font></font>
     privateVars[this.id] = {<font></font>
         cooked: []<font></font>
     };<font></font>
 }<font></font>
<font></font>
 Restaurant.prototype.cook = function (food) {<font></font>
     privateVars[this.id].cooked.push(food);<font></font>
 }<font></font>
<font></font>
 return Restaurant;<font></font>
<font></font>
})();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在立即函数的范围之外，无法进行私有变量查找。</font><font style="vertical-align: inherit;">没有功能重复，节省了内存。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点是私有变量的查找笨拙</font></font><code>privateVars[this.id].cooked</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，很难键入。</font><font style="vertical-align: inherit;">还有一个额外的“ id”变量。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要使用公共功能访问私有功能的所有公共和私有功能，请为对象布局代码，如下所示：</font></font></p>

<pre><code>function MyObject(arg1, arg2, ...) {<font></font>
  //constructor code using constructor arguments...<font></font>
  //create/access public variables as <font></font>
  // this.var1 = foo;<font></font>
<font></font>
  //private variables<font></font>
<font></font>
  var v1;<font></font>
  var v2;<font></font>
<font></font>
  //private functions<font></font>
  function privateOne() {<font></font>
  }<font></font>
<font></font>
  function privateTwon() {<font></font>
  }<font></font>
<font></font>
  //public functions<font></font>
<font></font>
  MyObject.prototype.publicOne = function () {<font></font>
  };<font></font>
<font></font>
  MyObject.prototype.publicTwo = function () {<font></font>
  };<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Tony伽罗</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在大多数情况下，模块模式是正确的。</font><font style="vertical-align: inherit;">但是，如果您有数千个实例，则类可以节省内存。</font><font style="vertical-align: inherit;">如果需要节省内存，并且您的对象包含少量私有数据，但是具有很多公共函数，那么您将希望所有公共函数都驻留在.prototype中以节省内存。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我想出的：</font></font></p>

<pre><code>var MyClass = (function () {<font></font>
    var secret = {}; // You can only getPriv() if you know this<font></font>
    function MyClass() {<font></font>
        var that = this, priv = {<font></font>
            foo: 0 // ... and other private values<font></font>
        };<font></font>
        that.getPriv = function (proof) {<font></font>
            return (proof === secret) &amp;&amp; priv;<font></font>
        };<font></font>
    }<font></font>
    MyClass.prototype.inc = function () {<font></font>
        var priv = this.getPriv(secret);<font></font>
        priv.foo += 1;<font></font>
        return priv.foo;<font></font>
    };<font></font>
    return MyClass;<font></font>
}());<font></font>
var x = new MyClass();<font></font>
x.inc(); // 1<font></font>
x.inc(); // 2<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该对象</font></font><code>priv</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含私有属性。</font><font style="vertical-align: inherit;">可以通过public函数访问它</font></font><code>getPriv()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是</font></font><code>false</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除非您将它传递给</font></font><code>secret</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">否则</font><font style="vertical-align: inherit;">该函数将返回</font><font style="vertical-align: inherit;">，并且仅在主闭包内部才知道。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green达蒙Harry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块模式的神化：</font></font><a href="http://www.wait-till-i.com/2007/08/22/again-with-the-module-pattern-reveal-something-to-the-world/" rel="nofollow noreferrer" title="来自克里斯·海勒曼（Chris Heilemann），自然"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">揭示模块模式</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">精巧的扩展，非常强大的模式。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德西门Near</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有这些关闭将使您付出代价。</font><font style="vertical-align: inherit;">确保测试速​​度的影响，尤其是在IE中。</font><font style="vertical-align: inherit;">您会发现使用命名约定会更好。</font><font style="vertical-align: inherit;">仍然有很多公司网络用户被迫使用IE6 ...</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan西门逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这些情况下，当您拥有公共API并想要私有和公共方法/属性时，我总是使用模块模式。</font><font style="vertical-align: inherit;">这种模式在YUI库中很流行，详细信息可以在这里找到：</font></font></p>

<p><a href="http://yuiblog.com/blog/2007/06/12/module-pattern/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://yuiblog.com/blog/2007/06/12/module-pattern/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这确实很简单，其他开发人员也很容易理解。</font><font style="vertical-align: inherit;">举个简单的例子：</font></font></p>

<pre><code>var MYLIB = function() {  <font></font>
    var aPrivateProperty = true;<font></font>
    var aPrivateMethod = function() {<font></font>
        // some code here...<font></font>
    };<font></font>
    return {<font></font>
        aPublicMethod : function() {<font></font>
            aPrivateMethod(); // okay<font></font>
            // some code here...<font></font>
        },<font></font>
        aPublicProperty : true<font></font>
    };  <font></font>
}();<font></font>
<font></font>
MYLIB.aPrivateMethod() // not okay<font></font>
MYLIB.aPublicMethod() // okay<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以像下面这样模拟私有方法：</font></font></p>

<pre><code>function Restaurant() {<font></font>
}<font></font>
<font></font>
Restaurant.prototype = (function() {<font></font>
    var private_stuff = function() {<font></font>
        // Private code here<font></font>
    };<font></font>
<font></font>
    return {<font></font>
<font></font>
        constructor:Restaurant,<font></font>
<font></font>
        use_restroom:function() {<font></font>
            private_stuff();<font></font>
        }<font></font>
<font></font>
    };<font></font>
})();<font></font>
<font></font>
var r = new Restaurant();<font></font>
<font></font>
// This will work:<font></font>
r.use_restroom();<font></font>
<font></font>
// This will cause an error:<font></font>
r.private_stuff();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关此技术的更多信息，请访问：</font><a href="http://webreflection.blogspot.com/2008/04/natural-javascript-private-methods.html" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://webreflection.blogspot.com/2008/04/natural-javascript-private-methods.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//webreflection.blogspot.com/2008/04/natural-javascript-private-methods.html</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一番长小小</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以做到，但缺点是它不能成为原型的一部分：</font></font></p>

<pre><code>function Restaurant() {<font></font>
    var myPrivateVar;<font></font>
<font></font>
    var private_stuff = function() {  // Only visible inside Restaurant()<font></font>
        myPrivateVar = "I can set this here!";<font></font>
    }<font></font>
<font></font>
    this.use_restroom = function() {  // use_restroom is visible to all<font></font>
        private_stuff();<font></font>
    }<font></font>
<font></font>
    this.buy_food = function() {   // buy_food is visible to all<font></font>
        private_stuff();<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
