---
layout: question
title:  addEventListener与onclick
date:   2020-03-11T07:24:25.000Z
description: addEventListener和之间有什么区别onclick？var h = document.getElementById("a");h.onc...
img: 
author: 飞云前端西门
category: question
answer: 8
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>addEventListener</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">之间有什么区别</font></font><code>onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<pre><code>var h = document.getElementById("a");<font></font>
h.onclick = dothing1;<font></font>
h.addEventListener("click", dothing2);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的代码一起驻留在单独的.js文件中，并且它们都可以正常工作。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第729篇《addEventListener与onclick》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">onclick本质上是一个addEventListener，它在单击元素时专门执行一个功能。</font><font style="vertical-align: inherit;">因此，当您具有执行简单操作的按钮（例如计算器按钮）时很有用。</font><font style="vertical-align: inherit;">addEventlistener可用于多种操作，例如在加载DOM或所有内容时执行操作，类似于window.onload，但具有更多控制权。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，实际上，您可以内联使用多个事件，或者至少通过使用分号（如分号）分隔每个函数来使用onclick，... </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不会用内联编写函数，因为以后您可能会遇到问题，而且imo会很乱。</font><font style="vertical-align: inherit;">只需使用它来调用脚本文件中已完成的功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想您使用哪一种取决于您的需求。</font><font style="vertical-align: inherit;">addEventListener用于复杂操作，onclick用于简单操作。</font><font style="vertical-align: inherit;">我已经看到一些项目没有将特定项目附加到元素上，而是实现了一个更具全局性的事件侦听器，该事件侦听器将确定是否在按钮上轻按，并根据所按的内容执行某些任务。</font><font style="vertical-align: inherit;">Imo可能会导致我认为的问题，而且即使事件侦听器必须处理每一次点击，也可能会造成资源浪费，尽管这可能很小</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><code>addEventListener</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 可让您设置多个处理程序，但IE8或更低版本不支持。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">IE确实有</font></font><code>attachEvent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但并不完全相同。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也应该可以通过对原型进行扩展来扩展侦听器（如果我们有对它的引用，并且它不是匿名函数）-或使“ onclick”调用对函数库的调用（调用其他函数的函数）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">喜欢</font></font></p>

<pre><code>    elm.onclick = myFunctionList<font></font>
    function myFunctionList(){<font></font>
      myFunc1();<font></font>
      myFunc2();<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着我们不必改变onclick调用，只需更改函数myFunctionList（）即可完成我们想要的操作，但是这使我们无法控制冒泡/捕获阶段，因此对于较新的浏览器应避免使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以防万一将来有人找到这个线程...</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一达蒙</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用内联处理程序与</font></font><a href="https://developer.chrome.com/extensions/contentSecurityPolicy" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内容安全策略</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不兼容，</font><font style="vertical-align: inherit;">因此</font></font><code>addEventListener</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从该角度来看，</font><font style="vertical-align: inherit;">此</font><font style="vertical-align: inherit;">方法更加安全。</font><font style="vertical-align: inherit;">当然，您可以使用启用内联处理程序，</font></font><code>unsafe-inline</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，顾名思义，这样做并不安全，因为它会带回CSP阻止的所有JavaScript开发。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYJim</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，差异如下：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">addEventListener：</font></font></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">EventTarget.addEventListener（）方法将指定的与EventListener兼容的对象添加到事件侦听器列表中，以用于对其进行调用的EventTarget上的指定事件类型。</font><font style="vertical-align: inherit;">事件目标可以是文档中的Element，文档本身，Window或任何其他支持事件的对象（例如XMLHttpRequest）。</font></font></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">onclick：</font></font></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">onclick属性返回当前元素上的click事件处理程序代码。</font><font style="vertical-align: inherit;">使用click事件触发操作时，还应考虑将相同的操作添加到keydown事件中，以允许不使用鼠标或触摸屏的人使用相同的操作。</font><font style="vertical-align: inherit;">语法element.onclick = functionRef; </font><font style="vertical-align: inherit;">其中functionRef是函数-通常是在其他地方声明的函数的名称或函数表达式。</font><font style="vertical-align: inherit;">有关详细信息，请参见“ JavaScript指南：函数”。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下面的代码所示，在使用上还有语法上的区别：</font></font><br><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">addEventListener：</font></font></strong></p>

<pre><code>// Function to change the content of t2<font></font>
function modifyText() {<font></font>
  var t2 = document.getElementById("t2");<font></font>
  if (t2.firstChild.nodeValue == "three") {<font></font>
    t2.firstChild.nodeValue = "two";<font></font>
  } else {<font></font>
    t2.firstChild.nodeValue = "three";<font></font>
  }<font></font>
}<font></font>
<font></font>
// add event listener to table<font></font>
var el = document.getElementById("outside");<font></font>
el.addEventListener("click", modifyText, false);<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">onclick：</font></font></strong></p>

<pre><code>function initElement() {<font></font>
    var p = document.getElementById("foo");<font></font>
    // NOTE: showAlert(); or showAlert(param); will NOT work here.<font></font>
    // Must be a reference to a function name, not a function call.<font></font>
    p.onclick = showAlert;<font></font>
};<font></font>
<font></font>
function showAlert(event) {<font></font>
    alert("onclick Event detected!");<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小小宇宙Green</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管</font></font><code>onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在所有浏览器中都可以使用，</font></font><code>addEventListener</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但在旧版本的Internet Explorer中却不能使用，而使用它</font></font><code>attachEvent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">缺点</font></font><code>onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是只能有一个事件处理程序，而其他两个将触发所有已注册的回调。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L前端</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">摘要：</font></font></h2>

<ol>
<li><code>addEventListener</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以添加多个事件，而</font></font><code>onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能这样做。</font></font></li>
<li><code>onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以作为</font></font><code>HTML</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">，而</font></font><code>addEventListener</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只能在</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">内添加</font><font style="vertical-align: inherit;">。</font></font></li>
<li><code>addEventListener</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 可以采用第三个参数来停止事件传播。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者都可以用来处理事件。</font><font style="vertical-align: inherit;">但是，它</font></font><code>addEventListener</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该是首选，因为它可以做所有事情</font></font><code>onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  并且</font><font style="vertical-align: inherit;">可以做</font><font style="vertical-align: inherit;">更多。</font><font style="vertical-align: inherit;">不要将内联</font></font><code>onclick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用作HTML属性，因为这会将javascript和HTML混合在一起，这是一种不好的做法。</font><font style="vertical-align: inherit;">它使代码的可维护性降低。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐小小猪猪</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知，DOM“加载”事件仍然只在非常有限的范围内起作用。</font><font style="vertical-align: inherit;">这意味着它只会火了</font></font><code>window object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>images</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如元素。</font><font style="vertical-align: inherit;">直接</font></font><code>onload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分配也是如此。</font><font style="vertical-align: inherit;">两者之间没有技术上的区别。</font><font style="vertical-align: inherit;">可能</font></font><code>.onload =</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有更好的跨浏览器可用性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，您不能将分配</font></font><code>load event</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>&lt;span&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素或其他。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
