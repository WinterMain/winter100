---
layout: question
title:  可以使用哪些技术在JavaScript中定义类，它们的权衡是什么？
date:   2020-03-11T06:41:32.000Z
description: 我更喜欢将OOP用于目前正在从事的大型项目中。我需要用JavaScript创建几个类，但是，如果我没记错的话，至少有两种方法可以做到这一点。语法是什么，为...
img: 
author: Green逆天
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我更喜欢将OOP用于目前正在从事的大型项目中。</font><font style="vertical-align: inherit;">我需要用JavaScript创建几个类，但是，如果我没记错的话，至少有两种方法可以做到这一点。</font><font style="vertical-align: inherit;">语法是什么，为什么要用这种方式呢？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想避免使用第三方库-至少在一开始。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
在寻找其他答案时，我找到了文章“ </font></font><em><a href="http://www.webreference.com/js/column79/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用JavaScript进行面向对象的编程”，第I部分：继承-文档JavaScript</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该文章讨论了</font><em><a href="http://www.webreference.com/js/column79/" rel="noreferrer"><font style="vertical-align: inherit;">JavaScript</font></a></em><font style="vertical-align: inherit;">中的面向对象的编程。</font><font style="vertical-align: inherit;">有更好的继承方法吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil前端</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><a href="http://mootools.net" rel="nofollow noreferrer">MooTools</a> (My Object Oriented Tools) is centered on the idea of <a href="http://mootools.net/docs/core/Class/Class" rel="nofollow noreferrer">classes</a>.  You can even extend and implement with inheritance.  </p>

<p>When mastered, it makes for ridiculously reusable, powerful javascript.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil飞云</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><pre><code>var Student = (function () {<font></font>
    function Student(firstname, lastname) {<font></font>
        this.firstname = firstname;<font></font>
        this.lastname = lastname;<font></font>
        this.fullname = firstname + " " + lastname;<font></font>
    }<font></font>
<font></font>
    Student.prototype.sayMyName = function () {<font></font>
        return this.fullname;<font></font>
    };<font></font>
<font></font>
    return Student;<font></font>
}());<font></font>
<font></font>
var user = new Student("Jane", "User");<font></font>
var user_fullname = user.sayMyName();<font></font>
</code></pre>

<p>Thats the way TypeScript compiles class with constructor to JavaScript.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐理查德</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES2015课程</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在ES2015规范中，您可以使用类语法，它只是原型系统的基础。</font></font></p>

<pre class="lang-js prettyprint-override"><code>class Person {<font></font>
  constructor(name) {<font></font>
    this.name = name;<font></font>
  }<font></font>
  toString() {<font></font>
    return `My name is ${ this.name }.`;<font></font>
  }<font></font>
}<font></font>
<font></font>
class Employee extends Person {<font></font>
  constructor(name, hours) {<font></font>
    super(name);<font></font>
    this.hours = hours;<font></font>
  }<font></font>
  toString() {<font></font>
    return `${ super.toString() } I work ${ this.hours } hours.`;<font></font>
  }<font></font>
}<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好处</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主要优点是静态分析工具发现更容易针对此语法。</font><font style="vertical-align: inherit;">对于其他来自基于类的语言的人，使用该语言作为多语言也更容易。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意事项</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警惕其当前的局限性。</font><font style="vertical-align: inherit;">要获得私有属性，必须</font></font><a href="http://davidvujic.blogspot.se/2015/03/what-wait-really-oh-no-a-post-about-es6-classes-and-privacy.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Symbols或WeakMaps</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在将来的版本中，很可能会将类扩展为包括这些缺少的功能。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持</font></font></h2>

<p><a href="https://kangax.github.io/compat-table/es6/#class" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器支持</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是不是现在（通过IE除外几乎每个人都支持）很不错，但你可以像现在transpiler使用这些功能</font></font><a href="http://babeljs.io/docs/learn-es2015/#classes" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">巴贝尔</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资源资源</font></font></h2>

<ul>
<li><a href="http://www.2ality.com/2015/02/es6-classes-final.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 6中的类（最终语义）</font></font></a></li>
<li><a href="http://davidvujic.blogspot.se/2015/03/what-wait-really-oh-no-a-post-about-es6-classes-and-privacy.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么？</font><font style="vertical-align: inherit;">等待。</font><font style="vertical-align: inherit;">真？</font><font style="vertical-align: inherit;">不好了！</font><font style="vertical-align: inherit;">（有关ES6类和隐私的文章）</font></font></a></li>
<li><a href="https://kangax.github.io/compat-table/es6/#class" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">兼容性表–类</font></font></a></li>
<li><a href="http://babeljs.io/docs/learn-es2015/#classes" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通天塔–班级</font></font></a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村A小卤蛋</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中定义类的最好方法是不定义类。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说真的</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有几种不同的面向对象风格，其中一些是： </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于类的OO（由Smalltalk首次引入）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于原型的OO（由Self首次引入）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于多方法的OO（我认为是CommonLoops首次引入的）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于谓词的面向对象（不知道）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能还有其他我不认识的人。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript实现了基于原型的OO。</font><font style="vertical-align: inherit;">在基于原型的OO中，通过复制其他对象（而不是从类模板实例化）来创建新对象，并且方法直接存在于对象中而不是类中。</font><font style="vertical-align: inherit;">继承是通过委派完成的：如果对象没有方法或属性，则在其原型（即从其克隆的对象）上查找该对象，然后在该原型的原型上进行查找，依此类推。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">换句话说：没有类。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript实际上对该模型有一个很好的调整：构造函数。</font><font style="vertical-align: inherit;">可以说，不仅可以通过复制现有对象来创建对象，还可以“凭空”构造它们。</font><font style="vertical-align: inherit;">如果使用</font></font><code>new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字</font><font style="vertical-align: inherit;">调用一个函数，则</font><font style="vertical-align: inherit;">该函数将成为构造函数，而该</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字将不会指向当前对象，而是指向一个新创建的“空”对象。</font><font style="vertical-align: inherit;">因此，您可以根据自己的喜好配置对象。</font><font style="vertical-align: inherit;">这样，JavaScript构造函数就可以在传统的基于类的OO中担当类的角色之一：充当新对象的模板或蓝图。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，JavaScript是一种非常强大的语言，因此，</font><font style="vertical-align: inherit;">如果需要，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实现基于类的OO系统非常容易</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，只有在确实有需要时才应该这样做，而不仅仅是因为Java就是这样做的。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
