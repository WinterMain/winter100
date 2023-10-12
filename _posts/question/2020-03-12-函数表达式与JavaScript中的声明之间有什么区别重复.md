---
layout: question
title:  函数表达式与JavaScript中的声明之间有什么区别？\[重复\]
date:   2020-03-12T12:38:29.000Z
description:                                                                          ...
img: 
author: 伽罗理查德
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经在这里有了答案</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：
                            
                        </font></font></div>
                    </div>
                </div>
                        <div class="grid--cell mb0 mt4">
                            <a href="/questions/336859/var-functionname-function-vs-function-functionname" dir="ltr"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">var functionName = function（）{} vs function functionName（）{} </font></font></a>
                                <span class="question-originals-answer-count"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
                                    （39个答案）
                                </font></font></span>
                        </div>
                                <div class="grid--cell mb0 mt8"><font style="vertical-align: inherit;"></font><span title="2013-04-22 06：35：27Z" class="relativetime"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">6年前</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font><font style="vertical-align: inherit;">。</font></font></div>
            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下几行代码有什么区别？</font></font></p>

<pre><code>//Function declaration<font></font>
function foo() { return 5; }<font></font>
<font></font>
//Anonymous function expression<font></font>
var foo = function() { return 5; }<font></font>
<font></font>
//Named function expression<font></font>
var foo = function foo() { return 5; }<font></font>
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么是命名/匿名函数表达式？  </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么是声明函数？  </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器如何不同地处理这些结构？</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对类似问题（</font></font><a href="https://stackoverflow.com/questions/336859/javascript-var-functionname-function-vs-function-functionname"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">var functionName = function（）{}与function functionName（）{}</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">的回答有什么不</font><font style="vertical-align: inherit;">完全正确？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1328篇《函数表达式与JavaScript中的声明之间有什么区别？\[重复\]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">杨天栾</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能声明</font></font></h1>

<pre><code>function foo() { ... }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数提升</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以在定义之后和定义之前调用以这种方式声明的函数。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数表达式</font></font></h1>

<ol>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命名函数表达式</font></font></strong></p>

<pre><code>var foo = function bar() { ... }
</code></pre></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">匿名函数表达式</font></font></strong></p>

<pre><code>var foo = function() { ... }
</code></pre></li>
</ol>

<p><code>foo()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 创建后才能调用。</font></font></p>

<h1><a href="http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">立即调用函数表达式（IIFE）</font></font></a></h1>

<pre><code>(function() { ... }());
</code></pre>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结论</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Crockford建议使用函数表达式，因为它可以清楚地表明它</font></font><code>foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个包含函数值的变量。</font><font style="vertical-align: inherit;">好吧，就我个人而言，除非有理由表达，否则我更喜欢使用声明。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德十三Davaid</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管完全的区别更加复杂，但是与我有关的唯一区别是机器创建功能对象时。</font><font style="vertical-align: inherit;">在声明的情况下，这是在执行任何语句之前但在调用语句主体之后（是全局代码主体或子函数的那个​​），在表达式的情况下，是执行该语句所在的语句时。</font><font style="vertical-align: inherit;">出于所有意图和目的，浏览器均将它们视为相同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了帮助您理解，请看一下此性能</font></font><a href="http://jsperf.com/local-vs-global/7" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">该</font><a href="http://jsperf.com/local-vs-global/7" rel="nofollow"><font style="vertical-align: inherit;">测试</font></a><font style="vertical-align: inherit;">否定了我对内部声明的函数所做的假设，当调用外部函数时，不需要由机器重新创建内部声明的函数。</font><font style="vertical-align: inherit;">我也很喜欢那样写代码，这也有点可耻。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小小十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一条语句取决于声明它的上下文。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在全局上下文中声明，它将创建一个称为“ foo”的隐式全局变量，该变量将指向该函数。</font><font style="vertical-align: inherit;">因此，可以在您的javascript程序中的任何位置进行函数调用“ foo（）”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果函数是在闭包中创建的，则会创建一个隐含的局部变量“ foo”，您可以使用该变量通过“ foo（）”在闭包内调用该函数。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还应该说过，函数语句（第一个）在函数表达式（其他两个）之前进行解析。</font><font style="vertical-align: inherit;">这意味着，如果您在脚本的底部声明该函数，则仍然可以在顶部使用它。</font><font style="vertical-align: inherit;">函数表达式只有在被执行代码击中时才会被求值。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结束编辑</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句2和3彼此相当。</font><font style="vertical-align: inherit;">同样，如果在全局上下文中使用它们，则将创建全局变量，如果在闭包中使用，则将创建局部变量。</font><font style="vertical-align: inherit;">但是，值得注意的是，语句3将忽略函数名称，因此从本质上讲，您可以调用任何函数。</font><font style="vertical-align: inherit;">因此</font></font></p>

<pre><code>var foo = function foo() { return 5; }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是相同的 </font></font></p>

<pre><code>var foo = function fooYou() { return 5; }
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于第三个定义：</font></font></p>

<pre><code>var foo = function foo() { return 5; }
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个示例，显示了如何使用递归调用的可能性：</font></font></p>

<pre><code>a = function b(i) { <font></font>
  if (i&gt;10) {<font></font>
    return i;<font></font>
  }<font></font>
  else {<font></font>
    return b(++i);<font></font>
  }<font></font>
}<font></font>
<font></font>
console.log(a(5));  // outputs 11<font></font>
console.log(a(10)); // outputs 11<font></font>
console.log(a(11)); // outputs 11<font></font>
console.log(a(15)); // outputs 15<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：与闭包更有趣的示例：</font></font></p>

<pre><code>a = function(c) {<font></font>
 return function b(i){<font></font>
  if (i&gt;c) {<font></font>
   return i;<font></font>
  }<font></font>
  return b(++i);<font></font>
 }<font></font>
}<font></font>
d = a(5);<font></font>
console.log(d(3)); // outputs 6<font></font>
console.log(d(8)); // outputs 8<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
