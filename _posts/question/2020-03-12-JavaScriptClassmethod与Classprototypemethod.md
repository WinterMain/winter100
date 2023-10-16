---
layout: question
title:  JavaScript：Class.method与Class.prototype.method
date:   2020-03-12T10:01:25.000Z
description: 以下两个声明有什么区别？Class.method = function () { /\* code \*/ }Class.prototype.metho...
img: 
author: 
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下两个声明有什么区别？</font></font></p>

<pre><code>Class.method = function () { /* code */ }<font></font>
Class.prototype.method = function () { /* code using this.values */ }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以将第一条语句视为静态方法的声明，而将第二条语句视为实例方法的声明，可以吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1248篇《JavaScript：Class.method与Class.prototype.method》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Itachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，第一个是</font></font><code>static method</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也称为</font></font><code>class method</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而第二个是</font></font><code>instance method</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑以下示例，以更详细地理解它。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ES5中</font></font></strong> </p>

<pre><code>function Person(firstName, lastName) {<font></font>
   this.firstName = firstName;<font></font>
   this.lastName = lastName;<font></font>
}<font></font>
<font></font>
Person.isPerson = function(obj) {<font></font>
   return obj.constructor === Person;<font></font>
}<font></font>
<font></font>
Person.prototype.sayHi = function() {<font></font>
   return "Hi " + this.firstName;<font></font>
}<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上面的代码中，</font></font><code>isPerson</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的静态方法，</font></font><code>sayHi</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而是的实例方法</font></font><code>Person</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面是如何从</font></font><code>Person</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构造函数</font><font style="vertical-align: inherit;">创建对象</font><font style="vertical-align: inherit;">。</font></font></p>

<p><code>var aminu = new Person("Aminu", "Abubakar");</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用静态方法</font></font><code>isPerson</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><code>Person.isPerson(aminu); // will return true</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用实例方法</font></font><code>sayHi</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><code>aminu.sayHi(); // will return "Hi Aminu"</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ES6中</font></font></strong></p>

<pre><code>class Person {<font></font>
   constructor(firstName, lastName) {<font></font>
      this.firstName = firstName;<font></font>
      this.lastName = lastName;<font></font>
   }<font></font>
<font></font>
   static isPerson(obj) {<font></font>
      return obj.constructor === Person;<font></font>
   }<font></font>
<font></font>
   sayHi() {<font></font>
      return `Hi ${this.firstName}`;<font></font>
   }<font></font>
}<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看看如何使用</font></font><code>static</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字声明静态方法</font></font><code>isPerson</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建</font></font><code>Person</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类</font><font style="vertical-align: inherit;">的对象</font><font style="vertical-align: inherit;">。</font></font></p>

<p><code>const aminu = new Person("Aminu", "Abubakar");</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用静态方法</font></font><code>isPerson</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><code>Person.isPerson(aminu); // will return true</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用实例方法</font></font><code>sayHi</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><code>aminu.sayHi(); // will return "Hi Aminu"</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这两个示例本质上是相同的，JavaScript仍然是一种无类语言。</font><font style="vertical-align: inherit;">在</font></font><code>class</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中介绍</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主要是在现有的基于原型的继承模型是语法糖。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当创建多个MyClass实例时，内存中仍然仍然只有一个publicMethod实例，但是如果使用privateMethod，则最终将创建大量实例，而staticMethod与对象实例没有任何关系。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是原型节省内存的原因。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，如果您更改父对象的属性，并且未更改子对象的相应属性，则会对其进行更新。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
