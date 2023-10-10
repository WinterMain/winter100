---
layout: question
title:  “严格使用”在JavaScript中有什么作用，其背后的原因是什么？
date:   2020-03-09T04:11:07.000Z
description: 最近，我通过Crockford的JSLint运行了一些JavaScript代码，它给出了以下错误：  第1行第1个字符处的问题：缺少“使用严格”语句...
img: 
author: 西门小小
category: question
answer: 19
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最近，我通过Crockford的</font></font><a href="http://www.jslint.com/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSLint</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行了一些JavaScript代码</font><font style="vertical-align: inherit;">，它给出了以下错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第1行第1个字符处的问题：缺少“使用严格”语句。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过搜索，我意识到有些人将</font></font><code>"use strict";</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其代码</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到了JavaScript中。</font><font style="vertical-align: inherit;">添加语句后，错误停止出现。</font><font style="vertical-align: inherit;">不幸的是，谷歌没有透露此字符串语句背后的许多历史。</font><font style="vertical-align: inherit;">当然，它一定与浏览器如何解释JavaScript有关，但是我不知道会有什么影响。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么到底是</font></font><code>"use strict";</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么，它意味着什么，并且仍然有意义？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前的浏览器是否响应该</font></font><code>"use strict";</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符串，或者</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">字符串可供将来使用？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第134篇《“严格使用”在JavaScript中有什么作用，其背后的原因是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Stafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严格模式可以防止内存泄漏。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请检查以下以非严格模式编写的功能：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> getname</span><span class="pun">(){</span><span class="pln">
    name </span><span class="pun">=</span><span class="pln"> </span><span class="str">"Stack Overflow"</span><span class="pun">;</span><span class="pln"> </span><span class="com">// Not using var keyword</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> name</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
getname</span><span class="pun">();</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">name</span><span class="pun">);</span><span class="pln"> </span><span class="com">// Stack Overflow</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此函数中，我们使用</font></font><code>name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在函数内部</font><font style="vertical-align: inherit;">称为的变量</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在内部，编译器将首先检查在该特定函数范围内是否有使用该特定名称声明的变量。</font><font style="vertical-align: inherit;">由于编译器知道没有这样的变量，因此它将检查外部范围。</font><font style="vertical-align: inherit;">就我们而言，这是全球范围。</font><font style="vertical-align: inherit;">再次，编译器理解在全局空间中也没有使用该名称声明的变量，因此它在全局空间中为我们创建了这样的变量。</font><font style="vertical-align: inherit;">从概念上讲，此变量将在全局范围内创建，并将在整个应用程序中可用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种情况是，例如，该变量在子函数中声明。</font><font style="vertical-align: inherit;">在这种情况下，编译器会在外部范围（即父函数）中检查该变量的有效性。</font><font style="vertical-align: inherit;">只有这样，它将检查全局空间并在那里为我们创建一个变量。</font><font style="vertical-align: inherit;">这意味着需要进行其他检查。</font><font style="vertical-align: inherit;">这将影响应用程序的性能。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，让我们在严格模式下编写相同的函数。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="str">"use strict"</span><span class="pln">
</span><span class="kwd">function</span><span class="pln"> getname</span><span class="pun">(){</span><span class="pln">
    name </span><span class="pun">=</span><span class="pln"> </span><span class="str">"Stack Overflow"</span><span class="pun">;</span><span class="pln"> </span><span class="com">// Not using var keyword</span><span class="pln">
    </span><span class="kwd">return</span><span class="pln"> name</span><span class="pun">;</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
getname</span><span class="pun">();</span><span class="pln">
console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">name</span><span class="pun">);</span><span class="pln"> </span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们将收到以下错误。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">Uncaught</span><span class="pln"> </span><span class="typ">ReferenceError</span><span class="pun">:</span><span class="pln"> name is not defined
at getname </span><span class="pun">(&lt;</span><span class="pln">anonymous</span><span class="pun">&gt;:</span><span class="lit">3</span><span class="pun">:</span><span class="lit">15</span><span class="pun">)</span><span class="pln">
at </span><span class="pun">&lt;</span><span class="pln">anonymous</span><span class="pun">&gt;:</span><span class="lit">6</span><span class="pun">:</span><span class="lit">5</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此，编译器将引发参考错误。</font><font style="vertical-align: inherit;">在严格模式下，编译器不允许我们在未声明的情况下使用变量。</font><font style="vertical-align: inherit;">因此可以防止内存泄漏。</font><font style="vertical-align: inherit;">另外，我们可以编写更多优化的代码。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无宝儿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“使用严格”；</font><font style="vertical-align: inherit;">定义应在“严格模式”下执行JavaScript代码。</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“严格使用”指令是ECMAScript版本5中的新增功能。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不是语句，而是文字表达，被早期JavaScript版本忽略。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“使用严格”的目的是指示应在“严格模式”下执行代码。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在严格模式下，例如，您不能使用未声明的变量。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Internet Explorer 9及更低版本</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">外，所有现代浏览器均支持“严格使用” </font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">坏处</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果开发人员使用的是严格模式下的库，但开发人员习惯于在正常模式下工作，则他们可能会对该库调用某些无法按预期方式执行的操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更糟糕的是，由于开发人员处于正常模式，因此他们没有抛出额外错误的优点，因此错误可能会静默地失败。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，如上所述，严格模式会阻止您执行某些操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">人们通常认为您不应该一开始就使用这些东西，但是一些开发人员不喜欢这种约束，而是想使用该语言的所有功能。</font></font></p>

<ul>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关基本示例和参考，请通过：</font></font></strong></p>

<p><a href="https://www.tutorialsteacher.com/javascript/javascript-strict" rel="nofollow noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.tutorialsteacher.com/javascript/javascript-strict</font></font></a></p></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">哎小爱</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，JavaScript不遵循严格的规则，因此会增加出错的机会。</font><font style="vertical-align: inherit;">使用之后</font></font><code>"use strict"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，JavaScript代码应遵循其他编程语言中的严格规则集，例如终止符的使用，初始化之前的声明等。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>"use strict"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用，则应遵循一组严格的规则来编写代码，从而减少出现错误和歧义的机会。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">gia</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Use Strict用于显示常见和重复的错误，以便对它进行不同的处理，并更改java脚本的运行方式，例如：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">防止意外的全局变量</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有重复</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">消除</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">消除这种胁迫</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更安全的eval（）</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不可变的错误</font></font></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以阅读</font></font><a href="https://www.nczonline.net/blog/2012/03/13/its-time-to-start-using-javascript-strict-mode/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本文</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以了解详细信息</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇猴子</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><code>use strict</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一种使代码更安全的方法，因为您不能使用无法正常使用的危险功能。</font><font style="vertical-align: inherit;">而且，如前所述，它使代码更加严格。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯Harry</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>JavaScript “strict” mode was introduced in ECMAScript 5.</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">(</span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  </span><span class="str">"use strict"</span><span class="pun">;</span><span class="pln">
  your code</span><span class="pun">...</span><span class="pln">
</span><span class="pun">})();</span></code></pre>

<p>Writing <code>"use strict";</code> at the very top of your JS file turns on strict
syntax checking. It does the following tasks for us:</p>

<ol>
<li><p>shows an error if you try to assign to an undeclared variable</p></li>
<li><p>stops you from overwriting key JS system libraries</p></li>
<li><p>forbids some unsafe or error-prone language features</p></li>
</ol>

<p><code>use strict</code> also works inside of individual functions. It is always a better practice to include <code>use strict</code> in your code.</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器兼容性问题：“使用”指令旨在向后兼容。</font><font style="vertical-align: inherit;">不支持它们的浏览器只会看到未进一步引用的字符串文字。</font><font style="vertical-align: inherit;">因此，他们将越过它并继续前进。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam神乐番长</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>Note that <code>use strict</code> was introduced in <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode" rel="noreferrer" data-bitapp="processed">EcmaScript 5</a> and was kept since then.</p>

<p>Below are the conditions to trigger strict mode in <a href="http://www.ecma-international.org/ecma-262/6.0/#sec-strict-mode-code" rel="noreferrer" data-bitapp="processed">ES6</a> and <a href="https://tc39.github.io/ecma262/#sec-strict-mode-code" rel="noreferrer" data-bitapp="processed">ES7</a>:</p>

<blockquote>
  <ul>
  <li>Global code is strict mode code if it begins with a Directive    Prologue that contains a Use Strict Directive (see 14.1.1).</li>
  <li>Module code is always strict mode code.</li>
  <li>All parts of a <em>ClassDeclaration</em> or a <em>ClassExpression</em> are strict mode    code.</li>
  <li>Eval code is strict mode code if it begins with a Directive Prologue    that contains a Use Strict Directive or if the call to eval is a direct eval (see 12.3.4.1) that is contained in strict mode code.</li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在严格模式代码中包含相关的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FunctionDeclaration，FunctionExpression，GeneratorDeclaration，GeneratorExpression，MethodDefinition或ArrowFunction</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，或者如果产生该函数的[[ECMAScriptCode]]内部插槽值的代码以</font><em><font style="vertical-align: inherit;">伪指令开头，</font></em><font style="vertical-align: inherit;">则</font><font style="vertical-align: inherit;">功能代码为严格模式代码。</font><font style="vertical-align: inherit;">包含“使用严格”指令。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果最后一个参数是一个字符串，则该函数代码将作为内置函数和生成器构造函数的参数提供给函数代码，该字符串在处理时是一个</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主体，该主体</font><font style="vertical-align: inherit;">以包含使用严格指令的指令序言开头。</font></font></li>
  </ul>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三泡芙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“使用严格”；</font><font style="vertical-align: inherit;">ECMA致力于使JavaScript更加强大。</font><font style="vertical-align: inherit;">它引入了JS使其至少有点“严格”的尝试（自90年代以来其他语言都实施了严格的规则）。</font><font style="vertical-align: inherit;">实际上，它“迫使” JavaScript开发人员遵循某种编码最佳实践。</font><font style="vertical-align: inherit;">不过，JavaScript非常脆弱。</font><font style="vertical-align: inherit;">没有诸如类型变量，类型方法之类的东西。我强烈建议JavaScript开发人员学习更健壮的语言（例如Java或ActionScript3），并在JavaScript代码中实现相同的最佳实践，它将更好，更容易地工作。调试。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙武藏</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript委员会中的一些人有一个很好的演讲：</font></font><a href="http://www.youtube.com/watch?v=Kq4FpMe6cRs" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript的变化，第1部分：ECMAScript 5“，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于增量使用</font></font><code>"use strict"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开关</font><font style="vertical-align: inherit;">如何</font><font style="vertical-align: inherit;">使JavaScript实现者能够清理JavaScript的许多危险特性而不会突然破坏每个网站在世界上。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，它也讨论了其中的许多错误特征以及ECMAScript 5如何修复它们。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><a href="http://www.w3schools.com/js/js_strict.asp" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从w3schools报价</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <h2><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“严格使用”指令</font></font></strong></h2>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“严格使用”指令是JavaScript 1.8.5（ECMAScript版本5）中的新增功能。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不是语句，而是文字表达，被早期JavaScript版本忽略。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“使用严格”的目的是指示应在“严格模式”下执行代码。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在严格模式下，例如，您不能使用未声明的变量。</font></font></p>
  
  <h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么选择严格模式？</font></font></h2>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严格模式使编写“安全” JavaScript更加容易。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严格模式将以前接受的“错误语法”更改为实际错误。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，在普通的JavaScript中，错误输入变量名称会创建一个新的全局变量。</font><font style="vertical-align: inherit;">在严格模式下，这将引发错误，从而不可能意外创建全局变量。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在普通JavaScript中，开发人员将不会收到将值分配给不可写属性的任何错误反馈。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在严格模式下，对不可写属性，仅吸气剂属性，不存在属性，不存在变量或不存在对象的任何赋值都会引发错误。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参考</font></font><a href="http://www.w3schools.com/js/js_strict.asp" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.w3schools.com/js/js_strict.asp</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解更多信息</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱理查德</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>use strict</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从这一点开始，在所有敏感的JavaScript文件的开头都</font><font style="vertical-align: inherit;">包含</font><font style="vertical-align: inherit;">一个小方法，可以成为一个更好的JavaScript程序员，并避免随机变量变成全局变量，并且事情无声无息地变化。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“使用严格”；</font><font style="vertical-align: inherit;">是一种保证程序员不会使用JavaScript的松散属性或不良属性的保险。</font><font style="vertical-align: inherit;">它是一个指南，就像一把尺子可以帮助您绘制直线一样。</font><font style="vertical-align: inherit;">“使用严格”将帮助您进行“直接编码”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那些不喜欢使用标尺直行的人通常会出现在那些页面中，要求其他人调试其代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相信我。</font><font style="vertical-align: inherit;">与设计不良的代码相比，开销可忽略不计。</font></font><a href="http://www.yuiblog.com/blog/2010/12/14/strict-mode-is-coming-to-town/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多年担任高级JavaScript开发人员的Doug Crockford在此发表了一篇非常有趣的文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">就个人而言，我喜欢一直回到他的网站，以确保我不会忘记自己的良好做法。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现代JavaScript实践应始终唤起“使用严格”的原则；</font><font style="vertical-align: inherit;">实用 </font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMA集团将“严格”模式</font><em><font style="vertical-align: inherit;">设为</font></em><font style="vertical-align: inherit;">可选的唯一原因</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是，允许经验不足的编码人员访问JavaScript，然后给予时间以适应新的更安全的编码实践。</font></font></em></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严格模式对常规JavaScript语义进行了几处更改：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过将它们更改为引发错误来消除一些JavaScript静默错误。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修复了使JavaScript引擎难以执行优化的错误。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁止在将来的ECMAScript版本中定义某些语法。</font></font></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多信息，请访问</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/Strict_mode" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严格模式-Javascript</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋L西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加时</font></font><code>"use strict";</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以下情况将</font><font style="vertical-align: inherit;">在脚本执行之前</font><font style="vertical-align: inherit;">引发</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SyntaxError</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<ul>
<li><p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从而为未来的ECMAScript版本的方式</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，使用新的保留关键字之一（预知的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript中6</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）： ，</font></font><code>implements</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>interface</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>let</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>package</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>private</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>protected</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>public</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>static</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>yield</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块中声明功能 </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">if</span><span class="pun">(</span><span class="pln">a</span><span class="pun">&lt;</span><span class="pln">b</span><span class="pun">){</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> f</span><span class="pun">(){}</span><span class="pln"> </span><span class="pun">}</span></code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">八进制语法 </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> n </span><span class="pun">=</span><span class="pln"> </span><span class="lit">023</span><span class="pun">;</span></code></pre></li>
<li><p><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 指向全局对象。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln"> </span><span class="kwd">function</span><span class="pln"> f</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="str">"use strict"</span><span class="pun">;</span><span class="pln">
      </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">1</span><span class="pun">;</span><span class="pln">
 </span><span class="pun">};</span><span class="pln">
 f</span><span class="pun">();</span><span class="pln"> </span></code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在对象文字中为属性名称声明两次相同的名称 </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln"> </span><span class="pun">{</span><span class="pln">a</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1</span><span class="pun">,</span><span class="pln"> b</span><span class="pun">:</span><span class="pln"> </span><span class="lit">3</span><span class="pun">,</span><span class="pln"> a</span><span class="pun">:</span><span class="pln"> </span><span class="lit">7</span><span class="pun">}</span><span class="pln"> </span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 6（</font></font><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1041128" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误1041128</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">不再是这种情况</font><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">声明两个具有相同名称函数的函数参数 </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">f</span><span class="pun">(</span><span class="pln">a</span><span class="pun">,</span><span class="pln"> b</span><span class="pun">,</span><span class="pln"> b</span><span class="pun">){}</span></code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为未声明的变量设置值</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">function</span><span class="pln"> f</span><span class="pun">(</span><span class="pln">x</span><span class="pun">){</span><span class="pln">
   </span><span class="str">"use strict"</span><span class="pun">;</span><span class="pln">
   </span><span class="kwd">var</span><span class="pln"> a </span><span class="pun">=</span><span class="pln"> </span><span class="lit">12</span><span class="pun">;</span><span class="pln">
   b </span><span class="pun">=</span><span class="pln"> a </span><span class="pun">+</span><span class="pln"> x</span><span class="pun">*</span><span class="lit">35</span><span class="pun">;</span><span class="pln"> </span><span class="com">// error!</span><span class="pln">
</span><span class="pun">}</span><span class="pln">
f</span><span class="pun">();</span></code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>delete</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个变量名</font></font><code>delete myVariable;</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>eval</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>arguments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为变量或函数参数名称</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="str">"use strict"</span><span class="pun">;</span><span class="pln">
arguments</span><span class="pun">++;</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="kwd">set</span><span class="pln"> p</span><span class="pun">(</span><span class="pln">arguments</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="pun">};</span><span class="pln">
</span><span class="kwd">try</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="kwd">catch</span><span class="pln"> </span><span class="pun">(</span><span class="pln">arguments</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">}</span><span class="pln">
</span><span class="kwd">function</span><span class="pln"> arguments</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span></code></pre></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料来源：</font></font></p>

<ul>
<li><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在MDN上</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">转换为严格模式</font></a></font></p></li>
<li><p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN上的</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">严格模式</font></a></font></p></li>
<li><p><a href="http://web.archive.org/web/20170707015027/http://cjihrig.com/blog/javascripts-strict-mode-and-why-you-should-use-it/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript的严格模式以及为什么要</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Colin J. Ihrig的博客上</font><a href="http://web.archive.org/web/20170707015027/http://cjihrig.com/blog/javascripts-strict-mode-and-why-you-should-use-it/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">使用它</font></a><font style="vertical-align: inherit;">（存档版本）</font></font></p></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是去年左右发布的浏览器，则该浏览器很可能支持JavaScript严格模式。</font><font style="vertical-align: inherit;">只有在ECMAScript 5成为当前标准之前的较旧的浏览器才不支持它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该命令周围的引号确保该代码在旧版本的浏览器中也仍然可以运行（尽管在严格模式下生成语法错误的内容通常只会导致脚本在旧版本的浏览器中以某种难以检测的方式发生故障）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想提供一个更有根据的答案来补充其他答案。</font><font style="vertical-align: inherit;">我希望编辑最受欢迎的答案，但失败了。</font><font style="vertical-align: inherit;">我试图使它尽可能全面和完整。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以参考</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取更多信息。</font></font></p>

<p><code>"use strict"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ECMAScript 5中引入的指令。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指令类似于语句，但有所不同。</font></font></p>

<ul>
<li><code>use strict</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不包含关键字：指令是一个简单的表达式语句，由特殊的字符串文字（单引号或双引号）组成。</font><font style="vertical-align: inherit;">没有实现ECMAScript 5的JavaScript引擎只能看到一个没有副作用的表达式语句。</font><font style="vertical-align: inherit;">预计将来的ECMAScript标准版本将</font></font><code>use</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为一个真正的关键词</font><font style="vertical-align: inherit;">引入</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这样一来，报价就会过时。</font></font></li>
<li><code>use strict</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只能在脚本或函数的开头使用，即它必须在所有其他（真实）语句之前。</font><font style="vertical-align: inherit;">它不必是函数脚本中的第一条指令：它可以在其他由字符串文字组成的语句表达式之前（并且JavaScript实现可以将它们视为实现特定的指令）。</font><font style="vertical-align: inherit;">紧跟在脚本或函数中的第一个实数语句之后的字符串文字语句是简单的表达式语句。</font><font style="vertical-align: inherit;">口译员不得将其解释为指令，并且它们无效。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>use strict</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指令指示以下代码（在脚本或函数中）是严格代码。</font><font style="vertical-align: inherit;">当脚本包含</font></font><code>use strict</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指令</font><font style="vertical-align: inherit;">时，脚本最高级别的代码（不在函数中的代码）被视为严格代码</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当函数本身在严格代码中定义或函数包含</font></font><code>use strict</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指令</font><font style="vertical-align: inherit;">时，该函数的内容被视为严格代码</font><font style="vertical-align: inherit;">。</font></font><code>eval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当</font></font><code>eval()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从严格代码中调用或包含</font></font><code>use strict</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指令本身</font><font style="vertical-align: inherit;">时</font><font style="vertical-align: inherit;">，传递给</font><font style="vertical-align: inherit;">方法的代码被视为严格代码</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript 5的严格模式是JavaScript语言的受限子集，它消除了该语言的相关缺陷，并具有更严格的错误检查和更高的安全性。</font><font style="vertical-align: inherit;">下面列出了严格模式和普通模式之间的区别（其中前三个尤为重要）：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不能</font></font><code>with</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在严格模式下</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">-statement。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在严格模式下，必须声明所有变量：如果将值分配给尚未声明为变量，函数，函数参数，子句参数或全局属性的标识符，</font></font><code>Object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则将获得</font></font><code>ReferenceError</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在正常模式下，标识符隐式声明为全局变量（作为global的属性</font></font><code>Object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在严格模式下，关键字</font><font style="vertical-align: inherit;">在作为函数（而不是方法）调用的函数中</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有值</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（在正常模式下，</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">始终指向global </font></font><code>Object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">此差异可用于测试实现是否支持严格模式：</font></font></li>
</ul>

<blockquote>
<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> hasStrictMode </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="str">"use strict"</span><span class="pun">;</span><span class="pln"> </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">===</span><span class="kwd">undefined</span><span class="pln"> </span><span class="pun">}());</span></code></pre>
</blockquote>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样，当使用</font></font><code>call()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>apply</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在严格模式下</font><font style="vertical-align: inherit;">调用</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数时，</font></font><code>call()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>apply()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">的第一个参数的值也正是该值</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（在普通模式下</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被全局</font></font><code>Object</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象和不是对象的值</font><font style="vertical-align: inherit;">替换</font><font style="vertical-align: inherit;">为对象。）</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在严格模式下</font></font><code>TypeError</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，当您尝试分配给只读属性或为不可扩展对象定义新属性时，将显示。</font><font style="vertical-align: inherit;">（在正常模式下，两者都只会失败而不会显示错误消息。）</font></font></p></li>
<li>In strict mode, when passing code to <code>eval()</code>, you cannot declare or define variables or functions in the scope of the caller (as you can do it in normal mode). Instead, a new scope is created for <code>eval()</code> and the variables and functions are within that scope. That scope is destroyed after <code>eval()</code> finishes execution.</li>
<li>In strict mode the arguments-object of a function contains a static copy of the values, which are passed to that function. In normal mode the arguments-object has a somewhat "magical" behaviour: The elements of the array and the named function parameters reference both the same value.</li>
<li>In strict mode you will get a <code>SyntaxError</code> when the <code>delete</code> operator is followed by a non qualified identifier (a variable, function or function parameter). In normal mode the <code>delete</code> expression would do nothing and is evaluated to <code>false</code>.</li>
<li>In strict mode you will get a <code>TypeError</code> when you try to delete a non configurable property. (In normal mode the attempt simply fails and the <code>delete</code> expression is evaluated to <code>false</code>).</li>
<li>In strict mode it is considered a syntactical error when you try to define several properties with the same name for an object literal. (In normal mode there is no error.)</li>
<li>In strict mode it is considered a syntactical error when a function declaration has multiple parameters with the same name. (In normal mode there is no error.)</li>
<li>In strict mode octal literals are not allowed (these are literals that start with <code>0x</code>. (In normal mode some implementations do allow octal literals.)</li>
<li>In strict mode the identifiers <code>eval</code> and <code>arguments</code> are treated like keywords. You cannot change their value, cannot assign a value to them, and you cannot use them as names for variables, functions, function parameters or identifiers of a catch block.</li>
<li>In strict mode are more restrictions on the possibilities to examine the call stack. <code>arguments.caller</code> and <code>arguments.callee</code> cause a <code>TypeError</code> in a function in strict mode. Furthermore, some caller- and arguments properties of functions in strict mode cause a <code>TypeError</code> when you try to read them.</li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是ECMAScript 5的新功能。JohnResig </font><font style="vertical-align: inherit;">对此进行</font></font><a href="http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了很好的总结</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它只是您放入JavaScript文件（位于文件顶部或位于函数内部）的字符串，如下所示：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="str">"use strict"</span><span class="pun">;</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在将其放入您的代码应该不会对当前的浏览器造成任何问题，因为它只是一个字符串。</font><font style="vertical-align: inherit;">如果您的代码违反了编译指示，将来可能会导致您的代码出现问题。</font><font style="vertical-align: inherit;">例如，如果您当前</font></font><code>foo = "bar"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有</font></font><code>foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先</font><font style="vertical-align: inherit;">定义</font><font style="vertical-align: inherit;">，则您的代码将开始失败...在我看来，这是一件好事。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋L西里</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该语句</font></font><code>"use strict";</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指示浏览器使用严格模式，这是JavaScript的简化和安全功能集。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能列表（非穷举）</font></font></h2>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁止使用全局变量。</font><font style="vertical-align: inherit;">（</font></font><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在变量名中</font><font style="vertical-align: inherit;">捕获缺少的</font><font style="vertical-align: inherit;">声明和拼写错误）</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">静默失败的分配将在严格模式下抛出错误（分配</font></font><code>NaN = 5;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试删除无法删除的属性将引发（</font></font><code>delete Object.prototype</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要求对象文字中的所有属性名称必须唯一（</font></font><code>var x = {x1: "1", x1: "2"}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数参数名称必须是唯一的（</font></font><code>function sum (x, x) {...}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁止使用八进制语法（</font></font><code>var x = 023;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">某些开发人员错误地认为前面的零不会更改数字。）</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁止</font></font><code>with</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字</font></font></p></li>
<li><p><code>eval</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 在严格模式下不会引入新变量  </font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁止删除纯名（</font></font><code>delete x;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁止或名称的分配结合</font></font><code>eval</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>arguments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以任何形式</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严格模式不会</font></font><code>arguments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用形式参数来</font><font style="vertical-align: inherit;">别名</font><font style="vertical-align: inherit;">对象的</font><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（即，</font></font><code>function sum (a,b) { return arguments[0] + b;}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">工作中是因为</font></font><code>arguments[0]</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绑定到</font></font><code>a</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等等。）</font></font></p></li>
<li><p><code>arguments.callee</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 不支持</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[参考：</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严格模式</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mozilla开发人员网络</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ]</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这篇有关Javascript严格模式的文章可能会让您感兴趣：</font></font><a href="http://ejohn.org/blog/ecmascript-5-strict-mode-json-and-more/" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">John Resig-ECMAScript 5严格模式，JSON等</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用一些有趣的部分：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严格模式是ECMAScript 5中的一项新功能，可让您将程序或功能置于“严格”的操作环境中。</font><font style="vertical-align: inherit;">这种严格的上下文会阻止采取某些措施，并引发更多异常。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严格模式可以通过以下两种方式提供帮助：</font></font></p>
  
  <ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它捕获了一些常见的编码漏洞，并引发异常。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当采取相对“不安全”的操作（例如获得对全局对象的访问权限）时，它可以防止或引发错误。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它禁用令人困惑或考虑不周的功能。</font></font></li>
  </ul>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还要注意，您可以将“严格模式”应用于整个文件...或者您只能将其用于特定功能</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（仍引用John Resig的文章）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="com">// Non-strict code...</span><span class="pln">

</span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(){</span><span class="pln">
  </span><span class="str">"use strict"</span><span class="pun">;</span><span class="pln">

  </span><span class="com">// Define your library strictly...</span><span class="pln">
</span><span class="pun">})();</span><span class="pln">

</span><span class="com">// Non-strict code... </span></code></pre>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您必须混合使用旧代码和新代码，这可能会有所帮助;-)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我想它有点像</font></font><code>"use strict"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在Perl中使用的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（因此得名？）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：通过检测更多可能导致损坏的内容，它可以帮助您减少错误。</font></font></p>

<p><font style="vertical-align: inherit;"></font><a href="http://caniuse.com/#use-strict" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有主要浏览器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在都</font><a href="http://caniuse.com/#use-strict" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;">支持</font></a><font style="vertical-align: inherit;">严格模式</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://caniuse.com/#feat=es6-module" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本机ECMAScript模块</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（带有</font></font><code>import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>export</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句）和</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes" rel="noreferrer" data-bitapp="processed"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6类中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，严格模式始终处于启用状态，不能被禁用。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
