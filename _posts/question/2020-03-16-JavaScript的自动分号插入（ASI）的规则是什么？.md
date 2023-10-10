---
layout: question
title:  JavaScript的自动分号插入（ASI）的规则是什么？
date:   2020-03-16T04:05:15.000Z
description: 好吧，首先我应该问一下这是否与浏览器有关。我已经读到，如果找到了无效的令牌，但是代码段在该无效令牌之前一直有效，如果在该令牌之前加了换行符，则在该令牌...
img: 
author: JinJin斯丁
category: question
answer: 4
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，首先我应该问一下这是否与浏览器有关。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经读到，如果找到了无效的令牌，但是代码段在该无效令牌之前一直有效，如果在该令牌之前加了换行符，则在该令牌之前插入一个分号。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，引用由分号插入引起的错误的常见示例是：</font></font></strong></p>

<pre><code>return<font></font>
  _a+b;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">..似乎不遵循此规则，因为_a是有效令牌。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，分解呼叫链可以按预期工作：</font></font></strong></p>

<pre><code>$('#myButton')<font></font>
  .click(function(){alert("Hello!")});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有人对规则有更深入的描述？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1707篇《JavaScript的自动分号插入（ASI）的规则是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom老丝Pro</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现</font><font style="vertical-align: inherit;">对JavaScript的</font></font><a href="http://www.ecma-international.org/ecma-262/10.0/index.html#sec-automatic-semicolon-insertion" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自动分号插入的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上下文描述最多</font><font style="vertical-align: inherit;">来自一本有关</font></font><a href="http://www.craftinginterpreters.com/scanning.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">制作解释器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的书</font><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript的“自动分号插入”规则很奇怪。</font><font style="vertical-align: inherit;">在其他语言假定大多数换行符有意义且多行语句中应忽略少数几种的情况下，JS则相反。</font><font style="vertical-align: inherit;">除非遇到解析错误，否则它将所有换行符视为无意义的空格。</font><font style="vertical-align: inherit;">如果是这样，它将返回并尝试将前一个换行符转换为分号以获取语法上有效的内容。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他继续描述它，就像您会</font></font><a href="http://wiki.c2.com/?CodeSmell" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编码气味一样</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我详细介绍了它的工作原理，那么本设计笔记将变成一个设计思路，更不用说所有的各种坏方法了。</font><font style="vertical-align: inherit;">一团糟。</font><font style="vertical-align: inherit;">我知道JavaScript是唯一的一种语言，尽管从理论上讲，您可以忽略每条语句，但许多样式指南在每条语句后都要求使用明确的分号。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村A小卤蛋</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直接来自</font></font><a href="http://WWW.ECMA-International.Org/publications/standards/Ecma-262.htm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMA-262，第五版ECMAScript规范</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">7.9.1自动分号插入规则</font></font></h1>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分号插入有三个基本规则：</font></font></p>
  
  <ol>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当从左到右解析程序时，</font><font style="vertical-align: inherit;">遇到任何语法生成都不允许</font><font style="vertical-align: inherit;">的令牌（称为有问题的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">令牌</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），则如果以下一项或多项操作，则在有问题的令牌之前自动插入分号条件为真：
  
  </font></font><ul>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有问题的令牌与先前的令牌之间至少相隔一个</font></font><code>LineTerminator</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">令人讨厌的令牌是</font></font><kbd>}</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
  </ul></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当从左向右解析程序时，遇到令牌输入流的末尾并且解析器无法将输入令牌流作为单个完整的ECMAScript进行解析</font></font><code>Program</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则分号将自动插入到末尾。输入流。</font></font></li>
  <li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当从左到右解析程序时，遇到某种语法的某种生产所允许的令牌，但是该生产是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">受限制的生产，</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且该令牌将成为紧随注解之后的终端或非终端的第一个令牌</font><font style="vertical-align: inherit;">在受限产品中使用</font><font style="vertical-align: inherit;">“ </font></font><sub><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[no </font></font><code>LineTerminator</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">here]</font></font></sub><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”（因此这种令牌称为受限令牌），并且受限令牌由至少一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">LineTerminator</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与前一个令牌分隔开</font><font style="vertical-align: inherit;">，然后在受限令牌之前自动插入分号。</font></font></li>
  </ol>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，上述规则还有一个额外的优先条件：如果分号随后将被解析为空语句，或者该分号将成为</font></font><kbd>for</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句</font><font style="vertical-align: inherit;">标题中的两个分号之一，则永远不会自动插入分号。</font><font style="vertical-align: inherit;">.3）。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">别坑我路易</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，您应该知道哪些语句受自动分号插入（为简洁起见也称为ASI）的影响：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">空语句</font></font></li>
<li><code>var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 声明</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表达陈述</font></font></li>
<li><code>do-while</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 声明</font></font></li>
<li><code>continue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 声明</font></font></li>
<li><code>break</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 声明</font></font></li>
<li><code>return</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 声明</font></font></li>
<li><code>throw</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 声明</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关ASI的具体规则，请参见规范</font></font><a href="http://www.ecma-international.org/ecma-262/7.0/index.html#sec-rules-of-automatic-semicolon-insertion" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">§11.9.1自动分号插入规则</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">描述了三种情况：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当</font><font style="vertical-align: inherit;">遇到语法不允许</font><font style="vertical-align: inherit;">的记号（</font></font><code>LineTerminator</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）时，如果出现以下情况，将在其前插入分号：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">令牌与上一个令牌分隔至少一个</font></font><code>LineTerminator</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">令牌是 </font></font><code>}</code></li>
</ul>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>{ 1<font></font>
2 } 3<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转化为</font></font></p>

<pre><code>{ 1<font></font>
;2 ;} 3;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>NumericLiteral</code> <code>1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">满足所述第一条件，令牌是行终止如下。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
在</font></font><code>2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">满足第二条件，令牌是以下</font></font><code>}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当遇到令牌输入流的末尾并且解析器无法将输入令牌流作为单个完整程序进行解析时，则分号会自动插入到输入流的末尾。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>a = b<font></font>
++c<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转换为：</font></font></p>

<pre><code>a = b;<font></font>
++c;<font></font>
</code></pre></li>
<li><p>This case occurs when a token is allowed by some production of the grammar, but the production is a <em>restricted production</em>, a semicolon is automatically inserted before the restricted token.</p>

<p>Restricted productions:</p>

<pre><code>UpdateExpression :<font></font>
    LeftHandSideExpression [no LineTerminator here] ++<font></font>
    LeftHandSideExpression [no LineTerminator here] --<font></font>
<font></font>
ContinueStatement :<font></font>
    continue ;<font></font>
    continue [no LineTerminator here] LabelIdentifier ;<font></font>
<font></font>
BreakStatement :<font></font>
    break ;<font></font>
    break [no LineTerminator here] LabelIdentifier ;<font></font>
<font></font>
ReturnStatement :<font></font>
    return ;<font></font>
    return [no LineTerminator here] Expression ;<font></font>
<font></font>
ThrowStatement :<font></font>
    throw [no LineTerminator here] Expression ; <font></font>
<font></font>
ArrowFunction :<font></font>
    ArrowParameters [no LineTerminator here] =&gt; ConciseBody<font></font>
<font></font>
YieldExpression :<font></font>
    yield [no LineTerminator here] * AssignmentExpression<font></font>
    yield [no LineTerminator here] AssignmentExpression<font></font>
</code></pre>

<p>The classic example, with the <code>ReturnStatement</code>:</p>

<pre><code>return <font></font>
  "something";<font></font>
</code></pre>

<p>is transformed to</p>

<pre><code>return;<font></font>
  "something";<font></font>
</code></pre></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Tony</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于分号插入和var语句，请注意在使用var时要忘记逗号，但要跨多行。</font><font style="vertical-align: inherit;">昨天有人在我的代码中找到了这个：</font></font></p>

<pre><code>    var srcRecords = src.records<font></font>
        srcIds = [];<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它运行了，但结果是srcIds声明/赋值是全局的，因为由于自动分号插入导致该语句被视为完成，因此不再应用前一行上带有var的本地声明。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
