---
layout: question
title:  JavaScript中是否有“空合并”运算符？
date:   2020-03-09T13:23:47.000Z
description: Javascript中是否存在空合并运算符？例如，在C＃中，我可以这样做：String someString = null;var whatIW...
img: 
author: Pro路易
category: question
answer: 6
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript中是否存在空合并运算符？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，在C＃中，我可以这样做：</font></font></p>

<pre><code>String someString = null;<font></font>
var whatIWant = someString ?? "Cookies!";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以为Javascript找到的最佳近似是使用条件运算符：</font></font></p>

<pre><code>var someString = null;<font></font>
var whatIWant = someString ? someString : 'Cookies!';<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这有点怪异恕我直言。</font><font style="vertical-align: inherit;">我可以做得更好吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第273篇《JavaScript中是否有“空合并”运算符？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确定正确的答案</font></font></h2>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是否存在于JavaScript中？</font></font></em> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，它确实。</font></font></strong> <strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但。</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前</font><font style="vertical-align: inherit;">处于</font><a href="https://tc39.es/proposal-nullish-coalescing/#top" rel="nofollow noreferrer"><font style="vertical-align: inherit;">阶段3</font></a><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2020-02-06</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，目前尚未在任何地方获得支持。</font><em><font style="vertical-align: inherit;">单击下面URL中的链接，然后转到“规格”和“浏览器兼容性”标题，以获取有关其位置的更多信息。</font></em></font><a href="https://tc39.es/proposal-nullish-coalescing/#top" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><em><font style="vertical-align: inherit;"></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用自：</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空合并运算符（??）是一个逻辑运算符，当其左侧操作数为null或未定义时返回其右侧操作数，否则返回其左侧操作数。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与逻辑OR（||）运算符相反，如果左操作数是一个不为null或未定义的虚假值，则将其返回。</font><font style="vertical-align: inherit;">换句话说，如果您使用|| </font><font style="vertical-align: inherit;">为了为另一个变量foo提供一些默认值，如果您认为某些虚假的值可用（例如''或0），则可能会遇到意外行为。</font><font style="vertical-align: inherit;">请参阅下面的更多示例。</font></font></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">想要例子吗？</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跟随我发布的链接，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它包含了所有内容。</font></font></em></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomGil村村</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p>For people using Typescript, you can use the <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing" rel="nofollow noreferrer">nullish coalescing operator</a> from <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html" rel="nofollow noreferrer">Typescript 3.7</a></p>

<p>From the docs - </p>

<blockquote>
  <p>You can think of this feature - the <code>??</code> operator - as a way to “fall
  back” to a default value when dealing with <code>null</code> or <code>undefined</code>. When we
  write code like</p>
  
  <p><code>let x = foo ?? bar();</code></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一种新的表示值</font></font><code>foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“存在”时将被使用的方式；</font><font style="vertical-align: inherit;">但是当它是</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或时</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请计算</font></font><code>bar()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其位置。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村AL</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读您的说明后，@ Ates Goral的答案提供了如何执行与JavaScript中C＃相同的操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@Gumbo的答案提供了检查null的最佳方法；</font><font style="vertical-align: inherit;">但是，重要的是要注意</font><font style="vertical-align: inherit;">JavaScript </font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript之间</font><font style="vertical-align: inherit;">的区别，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尤其是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在涉及检查</font></font><code>undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和/或问题时</font></font><code>null</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关于两个词的区别一个真正的好文章</font></font><a href="http://saladwithsteve.com/2008/02/javascript-undefined-vs-null.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">基本上，请理解，如果您使用</font></font><code>==</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>===</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，JavaScript将尝试合并您正在比较的值，并</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">合并</font><em><font style="vertical-align: inherit;">后</font></em><font style="vertical-align: inherit;">返回比较的结果</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomMandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前尚不支持，但是JS标准化过程正在其上进行：</font><a href="https://github.com/tc39/proposal-optional-chaining" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/tc39/proposal-optional-chaining" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/tc39/proposal-optional-chaining</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinLEY</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><pre><code>function coalesce() {<font></font>
    var len = arguments.length;<font></font>
    for (var i=0; i&lt;len; i++) {<font></font>
        if (arguments[i] !== null &amp;&amp; arguments[i] !== undefined) {<font></font>
            return arguments[i];<font></font>
        }<font></font>
    }<font></font>
    return null;<font></font>
}<font></font>
<font></font>
var xyz = {};<font></font>
xyz.val = coalesce(null, undefined, xyz.val, 5);<font></font>
<font></font>
// xyz.val now contains 5<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此解决方案的工作方式类似于SQL合并函数，它接受任意数量的参数，如果它们都不具有值，则返回null。</font><font style="vertical-align: inherit;">它的行为类似于C＃？</font><font style="vertical-align: inherit;">从“”，“ false”和“ 0”被视为NOT NULL的意义上讲，因此算作实际值。</font><font style="vertical-align: inherit;">如果您来自.net背景，这将是最自然的解决方案。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">菏以飘落</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与C＃null合并运算符（</font></font><code>??</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">等效的JavaScript </font><font style="vertical-align: inherit;">使用逻辑OR（</font></font><code>||</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>

<pre><code>var whatIWant = someString || "Cookies!";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些情况下（以下已说明），该行为与C＃的行为不匹配，但这是在JavaScript中分配默认/替代值的通用，简洁的方法。</font></font></p>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">澄清度</font></font></h2>

<p>Regardless of the type of the first operand, if casting it to a Boolean results in <code>false</code>, the assignment will use the second operand. Beware of all the cases below:</p>

<pre><code>alert(Boolean(null)); // false<font></font>
alert(Boolean(undefined)); // false<font></font>
alert(Boolean(0)); // false<font></font>
alert(Boolean("")); // false<font></font>
alert(Boolean("false")); // true -- gotcha! :)<font></font>
</code></pre>

<p>This means:</p>

<pre><code>var whatIWant = null || new ShinyObject(); // is a new shiny object<font></font>
var whatIWant = undefined || "well defined"; // is "well defined"<font></font>
var whatIWant = 0 || 42; // is 42<font></font>
var whatIWant = "" || "a million bucks"; // is "a million bucks"<font></font>
var whatIWant = "false" || "no way"; // is "false"<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
