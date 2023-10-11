---
layout: question
title:  JavaScript中“ =>”（等于或大于的箭头）的含义是什么？
date:   2020-03-14T10:14:14.000Z
description: 我知道>=运算符的含义是大于或等于，但是我已经=>在一些源代码中看到了。该运算符是什么意思？这是代码：promiseTargetFile(fpPa...
img: 
author: Davaid飞羽
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道</font></font><code>&gt;=</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符的含义是大于或等于，但是我已经</font></font><code>=&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在一些源代码中</font><font style="vertical-align: inherit;">看到</font><font style="vertical-align: inherit;">了。</font><font style="vertical-align: inherit;">该运算符是什么意思？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是代码：</font></font></p>

<pre class="lang-js prettyprint-override"><code>promiseTargetFile(fpParams, aSkipPrompt, relatedURI).then(aDialogAccepted =&gt; {<font></font>
    if (!aDialogAccepted)<font></font>
        return;<font></font>
<font></font>
    saveAsType = fpParams.saveAsType;<font></font>
    file = fpParams.file;<font></font>
<font></font>
    continueSave();<font></font>
}).then(null, Components.utils.reportError);<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1595篇《JavaScript中“ =>”（等于或大于的箭头）的含义是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天小卤蛋Green</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用符号（=&gt;）表示的箭头函数可帮助您创建匿名函数和方法。</font><font style="vertical-align: inherit;">这导致语法更短。</font><font style="vertical-align: inherit;">例如，下面是一个简单的“加”函数，该函数返回两个数字的加法。</font></font></p>

<pre><code>function Add(num1 , num2 ){<font></font>
return num1 + num2;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下所示，通过使用“箭头”语法，上述功能变得更短。</font></font></p>

<p><a href="https://i.stack.imgur.com/K4eFd.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/K4eFd.png" alt="在此处输入图片说明"></a></p>

<p>Above code has two parts as shown in the above diagram: -</p>

<p>Input: — This section specifies the input parameters to the anonymous function.</p>

<p>Logic: — This section comes after the symbol “=&gt;”. This section has the logic of the actual function.</p>

<p><em>Many developers think that arrow function makes your syntax shorter, simpler and thus makes your code readable.</em></p>

<p>If you believe the above sentence, then let me assure you it’s a myth. If you think for a moment a properly written function with name is much readable than cryptic functions created in one line using an arrow symbol.</p>

<blockquote>
  <p>The main use of arrow function is to ensure that code runs in the
  callers context.</p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参见下面的代码，其中定义了全局变量“ context”，可以在从其他方法“ SomeMethod”调用的函数“ SomeOtherMethod”中访问此全局变量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此“ SomeMethod”具有局部“ context”变量。</font><font style="vertical-align: inherit;">现在，由于从“ SomeMethod”调用了“ SomeOtherMethod”，我们希望它显示“ local context”，但显示“ global context”。</font></font></p>

<pre><code>var context = “global context”;<font></font>
<font></font>
function SomeOtherMethod(){<font></font>
alert(this.context);<font></font>
}<font></font>
<font></font>
function SomeMethod(){<font></font>
this.context = “local context”;<font></font>
SomeOtherMethod();<font></font>
}<font></font>
<font></font>
var instance = new SomeMethod();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果使用Arrow函数替换调用，它将显示“本地上下文”。</font></font></p>

<pre><code>var context = "global context";<font></font>
<font></font>
    function SomeMethod(){<font></font>
        this.context = "local context";<font></font>
        SomeOtherMethod = () =&gt; {<font></font>
            alert(this.context);<font></font>
        }<font></font>
        SomeOtherMethod();<font></font>
    }<font></font>
    var instance = new SomeMethod();<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我鼓励您阅读此链接（</font></font><a href="https://medium.com/@shivprasadkoirala/arrow-function-in-javascript-471d13ad0af2" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript中的Arrow函数</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），</font><font style="vertical-align: inherit;">该链接</font><font style="vertical-align: inherit;">解释了javascript上下文的所有情况以及在哪些情况下不尊重调用者上下文。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以</font></font><a href="https://www.youtube.com/watch?v=ik3RWl_-U3o" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此youtube视频中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到</font><a href="https://www.youtube.com/watch?v=ik3RWl_-U3o" rel="nofollow noreferrer"><font style="vertical-align: inherit;">带有JavaScript</font></a><font style="vertical-align: inherit;">的</font><a href="https://www.youtube.com/watch?v=ik3RWl_-U3o" rel="nofollow noreferrer"><font style="vertical-align: inherit;">Arrow函数</font></a><font style="vertical-align: inherit;">演示，</font><font style="vertical-align: inherit;">该演示实际上演示了上下文。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Tony</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如所有其他答案已经说过的那样，它是ES2015箭头函数语法的一部分。</font><font style="vertical-align: inherit;">更具体地说，它不是运算符，而是将参数与主体分开的标点符号</font></font><code>ArrowFunction : ArrowParameters =&gt; ConciseBody</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如</font></font><code>(params) =&gt; { /* body */ }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光凯</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我读过，这是象征</font></font><code>Arrow Functions</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font></font><code>ES6</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个 </font></font></p>

<pre><code>var a2 = a.map(function(s){ return s.length });
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>Arrow Function</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以写成</font></font></p>

<pre><code>var a3 = a.map( s =&gt; s.length );
</code></pre>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/arrow_functions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN文件</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是添加另一个lambda在不使用地图的情况下可以做什么的示例：</font></font></p>

<pre><code>a = 10<font></font>
b = 2<font></font>
<font></font>
var mixed = (a,b) =&gt; a * b; <font></font>
// OR<font></font>
var mixed = (a,b) =&gt; { (any logic); return a * b };<font></font>
<font></font>
console.log(mixed(a,b)) <font></font>
// 20<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam神乐番长</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如其他人所说，创建函数是一种新语法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这种功能与普通功能不同：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们约束</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">价值。</font><font style="vertical-align: inherit;">如</font></font><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-arrow-function-definitions-runtime-semantics-evaluation" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规范所述</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ArrowFunction</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有定义本地绑定</font></font><code>arguments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，
   </font></font><code>super</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，或</font></font><code>new.target</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">任何参照</font></font><code>arguments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，
   </font></font><code>super</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，或</font></font><code>new.target</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的内</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ArrowFunction</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">必须解析为在词法封闭环境的结合。</font><font style="vertical-align: inherit;">通常，这将是立即封闭函数的函数环境。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ArrowFunction</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能包含</font><em><font style="vertical-align: inherit;">对它的</font></em><font style="vertical-align: inherit;">引用</font></font><code>super</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，也无法通过执行</font></font><a href="http://www.ecma-international.org/ecma-262/6.0/#sec-makemethod" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MakeMethod将</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤4中创建的函数对象制成方法</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">引用</font><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ArrowFunction</font></font></em><font style="vertical-align: inherit;"></font><code>super</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
  始终包含在非</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ArrowFunction中，</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>super</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以通过</font><em><font style="vertical-align: inherit;">ArrowFunction</font></em><font style="vertical-align: inherit;">的函数对象捕获</font><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">范围</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来</font><font style="vertical-align: inherit;">访问</font><font style="vertical-align: inherit;">实现的必要状态</font><font style="vertical-align: inherit;">。</font></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font></p>
</blockquote></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他们是非构造函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着它们没有[[Construct]]内部方法，因此无法实例化，例如</font></font></p>

<pre class="lang-js prettyprint-override"><code>var f = a =&gt; a;<font></font>
f(123);  // 123<font></font>
new f(); // TypeError: f is not a constructor<font></font>
</code></pre></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿乐</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将是ECMAScript 6中引入的“箭头函数表达式”。</font></font></p>

<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/arrow_functions" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/arrow_functions</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出于历史目的（如果Wiki页面稍后更改），它是：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">箭头函数表达式的语法比函数表达式短，并且在词法上绑定了此值。</font><font style="vertical-align: inherit;">箭头功能始终是匿名的。</font></font></p>
</blockquote></div>
        </div></div>
    {% endraw %}
  </div>
<div>
