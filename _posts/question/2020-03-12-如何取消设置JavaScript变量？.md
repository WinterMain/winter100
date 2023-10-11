---
layout: question
title:  如何取消设置JavaScript变量？
date:   2020-03-12T03:18:37.000Z
description: 我在JavaScript中有一个全局变量（实际上是一个window属性，但我不认为这很重要），该变量已经由先前的脚本填充，但是我不希望另一个脚本稍后运行以...
img: 
author: AL村村
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在JavaScript中有一个全局变量（实际上是一个</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性，但我不认为这很重要），该</font><font style="vertical-align: inherit;">变量</font><font style="vertical-align: inherit;">已经由先前的脚本填充，但是我不希望另一个脚本稍后运行以查看其值，甚至定义。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经说过了</font></font><code>some_var = undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它可以用于测试目的，</font></font><code>typeof some_var == "undefined"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我真的不认为这是正确的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你怎么看？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第936篇《如何取消设置JavaScript变量？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam神乐番长</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>I am bit confused. If all you are wanting is for a variables value to not pass to another script then there is no need to delete the variable from the scope. Simply nullify the variable then explicit check if it is or is not null. Why go through the trouble of deleting the variable from scope? What purpose does this server that nullifying can not?</p>

<pre><code>foo = null;<font></font>
if(foo === null) or if(foo !== null)<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinDavaid卡卡西</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>You cannot delete a variable if you declared it (with var x;) at the time of first use.
However, if your variable x first appeared in the script without a declaration, then you can use the delete operator (delete x;) and your variable will be deleted, very similar to deleting an element of an array or deleting a property of an object.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYAItachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>In addition to what everyone had written, also note that <code>delete</code> returns boolean. It can tell you if the delete was successful or not.</p>

<p>Testing on Chrome, everything except <code>let</code> was deleltable. when <code>delete</code> returned <code>true</code> it actually removed them:</p>

<pre><code>implicit_global = 1;<font></font>
window.explicit_global = 1;<font></font>
function_set = function() {};<font></font>
function function_dec() { };<font></font>
var declared_variable = 1;<font></font>
let let_variable = 1;<font></font>
<font></font>
delete delete implicit_global; // true, tested on Chrome 52<font></font>
delete window.explicit_global; // true, tested on Chrome 52<font></font>
delete function_set; // true, tested on Chrome 52<font></font>
delete function_dec; // true, tested on Chrome 52<font></font>
delete declared_variable; // true, tested on Chrome 52<font></font>
delete let_variable; // false, tested on Chrome 78<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimStafan</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p>Variables, in contrast with simple properties, have attribute <strong>[[Configurable]]</strong>, meaning impossibility to remove a variable via the <em>delete</em> operator. However there is one execution context on which this rule does not affect. It is the <strong>eval</strong> context: there [[Configurable]] attribute is not set for variables.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天L</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TLDR：简单定义的变量（无</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）可以与被删除</font></font><code>delete</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果使用</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-他们不能既不删除</font></font><code>delete</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也不符合</font></font><code>Reflect.deleteProperty</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome 55：</font></font></p>

<pre><code>simpleVar = "1";<font></font>
"1"<font></font>
delete simpleVar;<font></font>
true<font></font>
simpleVar;<font></font>
VM439:1 Uncaught ReferenceError: simpleVar is not defined<font></font>
    at &lt;anonymous&gt;:1:1<font></font>
(anonymous) @ VM439:1<font></font>
var varVar = "1";<font></font>
undefined<font></font>
delete varVar;<font></font>
false<font></font>
varVar;<font></font>
"1"<font></font>
let letVar = "1";<font></font>
undefined<font></font>
delete letVar;<font></font>
true<font></font>
letVar;<font></font>
"1"<font></font>
const constVar="1";<font></font>
undefined<font></font>
delete constVar;<font></font>
true<font></font>
constVar;<font></font>
"1"<font></font>
Reflect.deleteProperty (window, "constVar");<font></font>
true<font></font>
constVar;<font></font>
"1"<font></font>
Reflect.deleteProperty (window, "varVar");<font></font>
false<font></font>
varVar;<font></font>
"1"<font></font>
Reflect.deleteProperty (window, "letVar");<font></font>
true<font></font>
letVar;<font></font>
"1"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FF Nightly 53.0a1显示相同的行为。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖梅</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>some_var = null;<font></font>
<font></font>
//or remove it..<font></font>
delete some_var;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Pro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@scunlife的答案会起作用，但从技术上讲应该是 </font></font></p>

<pre><code>delete window.some_var; 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当目标不是对象属性时，delete应该被禁止使用。</font><font style="vertical-align: inherit;">例如，</font></font></p>

<pre><code>(function() {<font></font>
   var foo = 123;<font></font>
   delete foo; // wont do anything, foo is still 123<font></font>
   var bar = { foo: 123 };<font></font>
   delete bar.foo; // foo is gone<font></font>
}());<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是由于全局变量实际上是window对象的成员，因此它可以工作。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当涉及原型链时，使用delete会变得更加复杂，因为它只会从目标对象中移除属性，而不会从原型中移除属性。</font><font style="vertical-align: inherit;">例如，</font></font></p>

<pre><code>function Foo() {}<font></font>
Foo.prototype = { bar: 123 };<font></font>
var foo = new Foo();<font></font>
// foo.bar is 123<font></font>
foo.bar = 456;<font></font>
// foo.bar is now 456<font></font>
delete foo.bar;<font></font>
// foo.bar is 123 again.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以要小心</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：我的回答</font></font><a href="http://perfectionkills.com/understanding-delete/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有点不准确</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（请参阅“误解”在最后）。</font><font style="vertical-align: inherit;">该链接说明了所有细节，但摘要是，浏览器之间以及要删除的对象之间可能会有很大差异。</font></font><code>delete object.someProp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一般只要保持安全</font></font><code>object !== window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管您可以在适当的情况下</font><font style="vertical-align: inherit;">使用，但我仍然不会使用它来删除声明的变量</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
