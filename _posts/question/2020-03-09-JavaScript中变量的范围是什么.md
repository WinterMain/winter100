---
layout: question
title:  JavaScript中变量的范围是什么？
date:   2020-03-09T10:29:19.000Z
description: javascript中变量的范围是什么？它们在函数内部和外部的作用域是否相同？还是有关系吗？另外，如果变量是全局定义的，则将变量存储在哪里？...
img: 
author: L神无Mandy
category: question
answer: 16
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">javascript中变量的范围是什么？</font><font style="vertical-align: inherit;">它们在函数内部和外部的作用域是否相同？</font><font style="vertical-align: inherit;">还是有关系吗？</font><font style="vertical-align: inherit;">另外，如果变量是全局定义的，则将变量存储在哪里？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第210篇《JavaScript中变量的范围是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Tom</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript有两种作用域。 </font></font></p>

<ol>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全局范围</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：在全局范围内声明的变量可以在程序中的任何位置非常平稳地使用。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>var carName = " BMW";<font></font>
<font></font>
// code here can use carName<font></font>
<font></font>
function myFunction() {<font></font>
     // code here can use carName <font></font>
}<font></font>
</code></pre></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能范围或局部范围</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：在此范围中声明的变量只能在其自己的函数中使用。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>// code here can not use carName<font></font>
function myFunction() {<font></font>
   var carName = "BMW";<font></font>
   // code here can use carName<font></font>
}<font></font>
</code></pre></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomL</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在EcmaScript5中，主要有两个范围，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地范围</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全局范围，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是在EcmaScript6中，我们主要有三个范围，本地范围，全局范围和称为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块范围</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的新</font><strong><font style="vertical-align: inherit;">范围</font></strong><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块范围的示例是：-</font></font></p>

<pre><code>for ( let i = 0; i &lt; 10; i++)<font></font>
{<font></font>
 statement1...<font></font>
statement2...// inside this scope we can access the value of i, if we want to access the value of i outside for loop it will give undefined.<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪Mandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的理解是有3个范围：全局范围，全局可用；</font><font style="vertical-align: inherit;">局部作用域，无论块如何，整个功能都可以使用；</font><font style="vertical-align: inherit;">和块作用域，仅对使用它的块，语句或表达式可用。</font><font style="vertical-align: inherit;">全局和局部作用域在函数内或外部用关键字“ var”指示，而块作用域用关键字“ let”指示。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些相信只有全局和局部作用域的用户，请解释为什么Mozilla会有整个页面描述JS中块作用域的细微差别。 </font></font></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/let</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom蛋蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">试试这个奇怪的例子。</font><font style="vertical-align: inherit;">在下面的示例中，如果a是初始化为0的数字，则将看到0，然后是1。除了a是一个对象，并且javascript会将f的指针（而不是其副本）传递给f1。</font><font style="vertical-align: inherit;">结果是您两次都收到相同的警报。</font></font></p>

<pre><code>var a = new Date();<font></font>
function f1(b)<font></font>
{<font></font>
    b.setDate(b.getDate()+1);<font></font>
    alert(b.getDate());<font></font>
}<font></font>
f1(a);<font></font>
alert(a.getDate());<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小卤蛋Pro</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript中，作用域有两种类型：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当地范围 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全球范围</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下函数具有局部作用域变量</font></font><code>carName</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">而且该变量不能从函数外部访问。</font></font></p>

<pre><code>function myFunction() {<font></font>
    var carName = "Volvo";<font></font>
    alert(carName);<font></font>
    // code here can use carName<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下类具有全局范围变量</font></font><code>carName</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">而且该变量可从类中的任何地方访问。</font></font></p>

<pre><code>class {<font></font>
<font></font>
    var carName = " Volvo";<font></font>
<font></font>
    // code here can use carName<font></font>
<font></font>
    function myFunction() {<font></font>
        alert(carName);<font></font>
        // code here can use carName <font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小西门</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JS中只有函数作用域。</font><font style="vertical-align: inherit;">不阻止范围！</font><font style="vertical-align: inherit;">您也可以看到正在起吊的东西。</font></font></p>

<pre><code>var global_variable = "global_variable";<font></font>
var hoisting_variable = "global_hoist";<font></font>
<font></font>
// Global variables printed<font></font>
console.log("global_scope: - global_variable: " + global_variable);<font></font>
console.log("global_scope: - hoisting_variable: " + hoisting_variable);<font></font>
<font></font>
if (true) {<font></font>
    // The variable block will be global, on true condition.<font></font>
    var block = "block";<font></font>
}<font></font>
console.log("global_scope: - block: " + block);<font></font>
<font></font>
function local_function() {<font></font>
    var local_variable = "local_variable";<font></font>
    console.log("local_scope: - local_variable: " + local_variable);<font></font>
    console.log("local_scope: - global_variable: " + global_variable);<font></font>
    console.log("local_scope: - block: " + block);<font></font>
    // The hoisting_variable is undefined at the moment.<font></font>
    console.log("local_scope: - hoisting_variable: " + hoisting_variable);<font></font>
<font></font>
    var hoisting_variable = "local_hoist";<font></font>
    // The hoisting_variable is now set as a local one.<font></font>
    console.log("local_scope: - hoisting_variable: " + hoisting_variable);<font></font>
}<font></font>
<font></font>
local_function();<font></font>
<font></font>
// No variable in a separate function is visible into the global scope.<font></font>
console.log("global_scope: - local_variable: " + local_variable);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现代Js，ES6 +，“ </font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">”和“ </font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">”</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像大多数其他主要语言一样，您应该对创建的每个变量使用块作用域。</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">过时了</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这使您的代码更安全，更可维护。</font></font></p>

<p><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该用于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">95％的情况</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它使得变量</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法更改。</font><font style="vertical-align: inherit;">数组，对象和DOM节点属性可以更改，并且应该更改为</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该用于期望重新分配的任何变量。</font><font style="vertical-align: inherit;">这包括在for循环中。</font><font style="vertical-align: inherit;">如果您在初始化后更改了值，请使用</font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块作用域意味着该变量将仅在声明该变量的方括号内可用。</font><font style="vertical-align: inherit;">这扩展到内部范围，包括在您的范围内创建的匿名函数。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY樱</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全球范围：</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全局变量就像全局明星一样（成龙，纳尔逊·曼德拉）。</font><font style="vertical-align: inherit;">您可以从应用程序的任何部分访问它们（获取或设置值）。</font><font style="vertical-align: inherit;">全局功能就像全局事件（新年，圣诞节）。</font><font style="vertical-align: inherit;">您可以从应用程序的任何部分执行（调用）它们。</font></font></p>

<pre><code>//global variable<font></font>
var a = 2;<font></font>
<font></font>
//global function<font></font>
function b(){<font></font>
   console.log(a);  //access global variable<font></font>
}<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当地范围：</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在美国，可能会认识臭名昭著的金·卡戴珊（她以某种方式设法制作了小报）。</font><font style="vertical-align: inherit;">但是美国以外的人不会认出她。</font><font style="vertical-align: inherit;">她是当地的明星，一定会进入她的领土。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">局部变量就像局部恒星。</font><font style="vertical-align: inherit;">您只能在范围内访问它们（获取或设置值）。</font><font style="vertical-align: inherit;">局部函数就像局部事件-您只能在该作用域内执行（庆祝）。</font><font style="vertical-align: inherit;">如果要从范围之外访问它们，则会得到参考错误</font></font></p>

<pre><code>function b(){<font></font>
   var d = 21; //local variable<font></font>
   console.log(d);<font></font>
<font></font>
   function dog(){  console.log(a); }<font></font>
     dog(); //execute local function<font></font>
}<font></font>
<font></font>
 console.log(d); //ReferenceError: dddddd is not defined    <font></font>
</code></pre>

<hr>

<p><a href="http://www.thatjsdude.com/jsConcepts/concepts/scope.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看本文以深入了解范围</font></font></a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomTony</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ALMOST只有两种类型的JavaScript范围：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个var声明的范围都与最直接封闭的函数相关联</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果var声明没有封闭函数，则为全局范围</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，除功能以外的任何块都不会创建新的作用域。</font><font style="vertical-align: inherit;">这就解释了为什么for循环会覆盖外部作用域变量：</font></font></p>

<pre><code>var i = 10, v = 10;<font></font>
for (var i = 0; i &lt; 5; i++) { var v = 5; }<font></font>
console.log(i, v);<font></font>
// output 5 5<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用函数代替：</font></font></p>

<pre><code>var i = 10, v = 10;<font></font>
$.each([0, 1, 2, 3, 4], function(i) { var v = 5; });<font></font>
console.log(i,v);<font></font>
// output 10 10<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在第一个示例中，没有块作用域，因此最初声明的变量被覆盖。</font><font style="vertical-align: inherit;">在第二个示例中，由于该函数而存在新作用域，因此最初声明的变量为SHADOWED，并且不会被覆盖。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就JavaScript作用域而言，几乎是您需要了解的所有内容，除了：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">try / catch仅为异常变量本身引入新作用域，其他变量没有新作用域</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，with-clause是另一个例外，但是强烈建议不要使用with-clause（</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您可以看到JavaScript范围定义实际上非常简单，尽管并不总是直观的。</font><font style="vertical-align: inherit;">需要注意的几件事：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">var声明被提升到范围的顶部。</font><font style="vertical-align: inherit;">这意味着无论var声明发生在什么地方，对于编译器而言，好像var本身发生在顶部</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">合并同一范围内的多个var声明</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以这段代码：</font></font></p>

<pre><code>var i = 1;<font></font>
function abc() {<font></font>
  i = 2;<font></font>
  var i = 3;<font></font>
}<font></font>
console.log(i);     // outputs 1<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等效于：</font></font></p>

<pre><code>var i = 1;<font></font>
function abc() {<font></font>
  var i;     // var declaration moved to the top of the scope<font></font>
  i = 2;<font></font>
  i = 3;     // the assignment stays where it is<font></font>
}<font></font>
console.log(i);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能看起来与直觉相反，但是从命令式语言设计师的角度来看这是有道理的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋樱</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript只有两种类型的作用域： </font></font></p>

<ol>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全局范围全局范围</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不过是一个窗口级范围。这里，整个应用程序中都存在变量。</font></font></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能范围</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：在具有</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字</font><font style="vertical-align: inherit;">的函数中声明的变量</font><font style="vertical-align: inherit;">具有功能范围。</font></font></li>
</ol>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当调用函数时，都会创建变量作用域对象（并将其包含在作用域链中），然后在JavaScript中跟随变量。</font></font></em></p>

<pre><code>        a = "global";<font></font>
         function outer(){ <font></font>
              b = "local";<font></font>
              console.log(a+b); //"globallocal"<font></font>
         }<font></font>
outer();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">范围链-&gt;  </font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">窗位- </font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>outer</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能是在作用域链顶层。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当外部函数称为新函数</font></font><code>variable scope object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（并包含在作用域链中）并</font></font><code>b</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在其中</font><font style="vertical-align: inherit;">添加了变量</font><font style="vertical-align: inherit;">时。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，当</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要</font><font style="vertical-align: inherit;">一个变量</font><font style="vertical-align: inherit;">时，它首先搜索最近的变量范围，如果不存在该变量，则将其移到变量范围链的下一个对象。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚JinJin樱</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现许多不熟悉JavaScript的人很难理解，语言默认情况下可以继承，并且函数作用域是迄今为止唯一的作用域。</font><font style="vertical-align: inherit;">我提供了我在去年年底编写的名为JSPretty的美化工具的扩展。</font><font style="vertical-align: inherit;">要素颜色在代码中作用于作用域，并且始终将颜色与该作用域中声明的所有变量关联。</font><font style="vertical-align: inherit;">当一个颜色的变量来自一个范围时，在另一范围中使用闭包以可视方式演示。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请尝试以下功能：</font></font></p>

<ul>
<li><a href="http://prettydiff.com/jspretty.xhtml?c=white&amp;jsscope" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://prettydiff.com/jspretty.xhtml?c=white&amp;jsscope</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">观看演示：</font></font></p>

<ul>
<li><a href="http://prettydiff.com/jspretty.xhtml?c=white&amp;jsscope&amp;s=http://prettydiff.com/lib/markup_beauty.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://prettydiff.com/jspretty.xhtml?c=white&amp;jsscope&amp;s=http://prettydiff.com/lib/markup_beauty.js</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在以下位置查看代码：</font></font></p>

<ul>
<li><a href="http://prettydiff.com/lib/jspretty.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://prettydiff.com/lib/jspretty.js</font></font></a></li>
<li><a href="https://github.com/austincheney/Pretty-Diff/blob/master/lib/jspretty.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/austincheney/Pretty-Diff/blob/master/lib/jspretty.js</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前，该功能支持深度为16的嵌套函数，但当前不为全局变量着色。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony阳光</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>The idea of scoping in JavaScript when originally designed by <a href="https://en.wikipedia.org/wiki/Brendan_Eich">Brendan Eich</a> came from the <a href="https://en.wikipedia.org/wiki/HyperCard">HyperCard</a> scripting language <a href="https://en.wikipedia.org/wiki/HyperTalk">HyperTalk</a>. </p>

<p>In this language, the displays were done similar to a stack of index cards. There was a master card referred to as the background. It was transparent and can be seen as the bottom card. Any content on this base card was shared with cards placed on top of it. Each card placed on top had its own content which took precedence over the previous card, but still had access to the prior cards if desired.</p>

<p>This is exactly how the JavaScript scoping system is designed. It just has different names. The cards in JavaScript are known as <strong><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-10.3">Execution Contexts<sup>ECMA</sup></a></strong>. Each one of these contexts contains three main parts. A variable environment, a lexical environment, and a this binding. Going back to the cards reference, the lexical environment contains all of the content from prior cards lower in the stack. The current context is at the top of the stack and any content declared there will be stored in the variable environment. The variable environment will take precedence in the case of naming collisions.</p>

<p>The this binding will point to the containing object. Sometimes scopes or execution contexts change without the containing object changing, such as in a declared function where the containing object may be <code>window</code> or a constructor function.</p>

<p>These execution contexts are created any time control is transferred. Control is transferred when code begins to execute, and this is primarily done from function execution. </p>

<p>So that is the technical explanation. In practice, it is important to remember that in JavaScript</p>

<ul>
<li>Scopes are technically "Execution Contexts"</li>
<li>Contexts form a stack of environments where variables are stored</li>
<li>The top of the stack takes precedence (the bottom being the global context)</li>
<li>Each function creates an execution context (but not always a new this binding)</li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其应用于此页面上的先前示例之一（5.“结束”），可以遵循执行上下文堆栈。</font><font style="vertical-align: inherit;">在此示例中，堆栈中有三个上下文。</font><font style="vertical-align: inherit;">它们由外部上下文定义，由var 6调用的立即调用函数中的上下文，以及在var 6的立即调用的函数内部返回的函数中的上下文。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">i</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）外部环境。</font><font style="vertical-align: inherit;">它具有a = 1的可变环境</font></font><br>
 <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ii</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）IIFE上下文，它具有a = 1的词法环境，但是a = 6的变量环境在堆栈中具有优先权</font></font><br>
 <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">iii</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）返回的函数上下文，它具有词法a = 6的环境，这是调用时警报中引用的值。</font></font></p>

<p><a href="https://i.stack.imgur.com/v45hL.png"><img src="https://i.stack.imgur.com/v45hL.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞宝儿猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知，关键是Javascript具有功能级别范围，而不是更常见的C块范围。</font></font></p>

<p><a href="http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一篇关于该主题的好文章。</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenTonyL</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在“ Javascript 1.7”（Mozilla对Javascript的扩展）中，还可以使用</font></font><a href="https://developer.mozilla.org/en/New_in_JavaScript_1.7#section_11" rel="noreferrer"><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">声明块范围变量</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code> var a = 4;<font></font>
 let (a = 3) {<font></font>
   alert(a); // 3<font></font>
 }<font></font>
 alert(a);   // 4<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green老丝Itachi</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全局声明的变量具有全局范围。</font><font style="vertical-align: inherit;">函数内声明的变量的作用域为该函数，并且阴影全局变量具有相同的名称。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我敢肯定，真正的JavaScript程序员可以在其他答案中指出很多细微之处。特别是我在</font></font><a href="http://www.digital-web.com/articles/scope_in_javascript/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本页</font></font></a><font style="vertical-align: inherit;"></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上随时</font><font style="vertical-align: inherit;">了解确切</font><font style="vertical-align: inherit;">含义。希望</font></font><a href="http://bowles.byethost3.com/javascript/section6/lesson6.htm#part4" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这篇介绍性链接</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">足以使您入门）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Sam</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript使用范围链为给定功能建立范围。</font><font style="vertical-align: inherit;">通常有一个全局范围，并且定义的每个函数都有其自己的嵌套范围。</font><font style="vertical-align: inherit;">在另一个函数中定义的任何函数都具有与外部函数链接的局部作用域。</font><font style="vertical-align: inherit;">定义范围的始终是源中的位置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">范围链中的元素基本上是一个Map，具有指向其父范围的指针。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解析变量时，javascript从最内部的范围开始并向外搜索。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
