---
layout: question
title:  函数表达式前面的JavaScript加号
date:   2020-03-10T02:35:59.000Z
description: 我一直在寻找有关立即调用的函数的信息，在某个地方我偶然发现了这种表示法：+function(){console.log("Something.")}(...
img: 
author: Harry逆天Eva
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在寻找有关立即调用的函数的信息，在某个地方我偶然发现了这种表示法：</font></font></p>

<pre><code>+function(){console.log("Something.")}()
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人可以向我解释</font></font><code>+</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该功能前面</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">符号的含义/含义吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva阿飞</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它强制解析器将后面的部分</font></font><code>+</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视为表达式。</font><font style="vertical-align: inherit;">通常用于立即调用的函数，例如：</font></font></p>

<pre><code>+function() { console.log("Foo!"); }();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果没有</font></font><code>+</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解析器，则该解析器处于期望一条语句（可以是一个表达式或几个非表达式语句）的状态，则该单词</font></font><code>function</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来像是函数</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">声明</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的开头，</font><font style="vertical-align: inherit;">而不是函数</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表达式</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的开头，</font><font style="vertical-align: inherit;">因此</font></font><code>()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">紧随其后（上面一行的末尾）是语法错误（在该示例中，缺少名称也是如此）。</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>+</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它使一个函数表达，这意味着该名称是可选的，并且结果的功能，其可以被调用的参考，因此，括号是有效的。</font></font></p>

<p><code>+</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是选项之一。</font><font style="vertical-align: inherit;">它也可以是</font></font><code>-</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>~</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，或几乎任何其他一元运算符。</font><font style="vertical-align: inherit;">或者，您可以使用括号（这是更常见的，但在语法上既不正确，也不正确）：</font></font></p>

<pre><code>(function() { console.log("Foo!"); })();<font></font>
// or<font></font>
(function() { console.log("Foo!"); }());<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim西门</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此简短的答案是，通过以一种或另一种方式使用函数结果，可以防止语法错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以通过使用</font></font><code>void</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运算符</font><font style="vertical-align: inherit;">来指示引擎您甚至对返回值都不感兴趣</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>void function() { console.log("Foo!"); }();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，将括号放在整个对象上也可以达到此目的。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
