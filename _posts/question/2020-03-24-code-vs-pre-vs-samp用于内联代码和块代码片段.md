---
layout: question
title:  <code> vs <pre> vs <samp>用于内联代码和块代码片段
date:   2020-03-24T01:41:01.000Z
description: 我的网站将有一些内联代码（“使用foo()函数时...”）和一些代码段。这些通常是XML，并且行很长，我希望浏览器将其包装起来（即，我不想使用<pre>）...
img: 
author: 卡卡西Near
category: question
answer: 5
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的网站将有一些内联代码（“使用</font></font><code>foo()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">函数时...”）和一些代码段。</font><font style="vertical-align: inherit;">这些通常是XML，并且行很长，我希望浏览器将其包装起来（即，我不想使用</font></font><code>&lt;pre&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">我还想将CSS格式放在块片段上。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎我不能同时使用</font></font><code>&lt;code&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这两种方法，因为如果将CSS块属性（带有</font></font><code>display: block;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">放在上面</font><font style="vertical-align: inherit;">，它将破坏内联代码段。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我很好奇人们在做什么。</font><font style="vertical-align: inherit;">使用</font></font><code>&lt;code&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的块，</font></font><code>&lt;samp&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内联？</font><font style="vertical-align: inherit;">使用</font></font><code>&lt;code&gt;&lt;blockquote&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还是类似的东西？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想使实际的HTML尽可能简单，避免使用类，因为其他用户将维护它。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3165篇《<code> vs <pre> vs <samp>用于内联代码和块代码片段》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞Harry小胖</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑Prism.js：</font><a href="https://prismjs.com/#examples" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：//prismjs.com/#examples</font></font><a href="https://prismjs.com/#examples" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它使</font></font><code>&lt;pre&gt;&lt;code&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作变得有吸引力。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin飞云</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑TextArea</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">人们通过Google找到此代码并寻找更好的方法来管理其代码片段的显示时，还应考虑</font></font><code>&lt;textarea&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对宽度/高度，滚动等进行很多控制。注意到@vsync提到了已弃用的标记</font></font><code>&lt;xmp&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我发现它</font></font><code>&lt;textarea readonly&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个很好的替代品用于显示HTML，而无需转义其中的任何内容（</font></font><code>&lt;/textarea&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能出现在</font><font style="vertical-align: inherit;">其中的位置除外</font><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，要显示具有受控制的换行符的单行，请考虑</font></font><code>&lt;textarea rows=1 cols=100 readonly&gt;</code> <em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">html或其他带有制表符和CrLf的字符</font></font></em> <code>&lt;/textarea&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;textarea rows=5 cols=100 readonly&gt;Example text with Newlines,<font></font>
tabs &amp; space,<font></font>
  html tags etc &lt;b&gt;displayed&lt;/b&gt;.<font></font>
    However, note that &amp;amp; still acts as an escape char..<font></font>
      Eg: &amp;lt;u&amp;gt;(text)&amp;lt;/u&amp;gt;<font></font>
&lt;/textarea&gt;</code></pre>
</div>
</div>
<p></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比较所有...</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;h2&gt;Compared: TEXTAREA, XMP, PRE, SAMP, CODE&lt;/h2&gt;<font></font>
&lt;p&gt;Note that CSS can be used to override default fixed space fonts in each or all these.&lt;/p&gt;<font></font>
    <font></font>
    <font></font>
&lt;textarea rows=5 cols=100 readonly&gt;TEXTAREA: Example text with Newlines,<font></font>
tabs &amp; space,<font></font>
  html tags etc &lt;b&gt;displayed natively&lt;/b&gt;.<font></font>
    However, note that &amp;amp; still acts as an escape char..<font></font>
      Eg: &amp;lt;u&amp;gt;(text)&amp;lt;/u&amp;gt;&lt;/textarea&gt;<font></font>
<font></font>
&lt;xmp&gt;XMP: Example text with Newlines,<font></font>
tabs &amp; space,<font></font>
  html tags etc &lt;b&gt;displayed natively&lt;/b&gt;.<font></font>
    However, note that &amp;amp; (&amp;) will not act as an escape char..<font></font>
      Eg: &amp;lt;u&amp;gt;(text)&amp;lt;/u&amp;gt;<font></font>
&lt;/xmp&gt;<font></font>
<font></font>
&lt;pre&gt;PRE: Example text with Newlines,<font></font>
tabs &amp; space,<font></font>
  html tags etc &lt;b&gt;are interpreted, not displayed&lt;/b&gt;.<font></font>
    However, note that &amp;amp; still acts as an escape char..<font></font>
      Eg: &amp;lt;u&amp;gt;(text)&amp;lt;/u&amp;gt;<font></font>
&lt;/pre&gt;<font></font>
<font></font>
&lt;samp&gt;SAMP: Example text with Newlines,<font></font>
tabs &amp; space,<font></font>
  html tags etc &lt;b&gt;are interpreted, not displayed&lt;/b&gt;.<font></font>
    However, note that &amp;amp; still acts as an escape char..<font></font>
      Eg: &amp;lt;u&amp;gt;(text)&amp;lt;/u&amp;gt;<font></font>
&lt;/samp&gt;<font></font>
<font></font>
&lt;code&gt;CODE: Example text with Newlines,<font></font>
tabs &amp; space,<font></font>
  html tags etc &lt;b&gt;are interpreted, not displayed&lt;/b&gt;.<font></font>
    However, note that &amp;amp; still acts as an escape char..<font></font>
      Eg: &amp;lt;u&amp;gt;(text)&amp;lt;/u&amp;gt;<font></font>
&lt;/code&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于常规的内联</font></font><code>&lt;code&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用：</font></font></p>

<pre><code>&lt;code&gt;...&lt;/code&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>&lt;code&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要</font><font style="vertical-align: inherit;">封锁的每个地方</font><font style="vertical-align: inherit;">使用</font></font></p>

<pre><code>&lt;code style=display:block;white-space:pre-wrap&gt;...&lt;/code&gt;
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，</font></font><a href="https://en.wikipedia.org/wiki/Cadenza" rel="noreferrer"><code>&lt;codenza&gt;</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为中断衬砌块</font><font style="vertical-align: inherit;">定义</font><font style="vertical-align: inherit;">标签</font></font><code>&lt;code&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   （无类）</font></font></p>

<pre><code>&lt;script&gt;<font></font>
&lt;/script&gt;<font></font>
&lt;style&gt;<font></font>
  codenza, code {}     /*  noop mnemonic aide that codenza mimes code tag  */<font></font>
  codenza {display:block;white-space:pre-wrap}<font></font>
&lt;/style&gt;`<font></font>
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试：（注意：以下是利用</font></font><code>data:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">URI协议/方案</font><font style="vertical-align: inherit;">的脚本</font><font style="vertical-align: inherit;">，因此</font></font><code>%0A</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nl格式代码</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保留此类内容</font><em><font style="vertical-align: inherit;">至关重要</font></em><font style="vertical-align: inherit;">，例如在将其剪切并粘贴到URL栏中进行测试时-因此</font></font><code>view-source:</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><kbd>ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- </font></font><kbd>U</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）看起来不错，在</font><font style="vertical-align: inherit;">下面的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每一</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">行之前都有</font></font><code>%0A</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<pre><code>data:text/html;charset=utf-8,&lt;html &gt;<font></font>
&lt;script&gt;document.write(window.navigator.userAgent)&lt;/script&gt;<font></font>
&lt;script&gt;&lt;/script&gt;<font></font>
&lt;style&gt;<font></font>
  codenza, code {}     /*  noop mnemonic aide that codenza mimes code tag  */<font></font>
  codenza {display:block;white-space:pre-wrap}<font></font>
&lt;/style&gt;<font></font>
&lt;p&gt;First using the usual &amp;lt;code&gt; tag<font></font>
&lt;code&gt;<font></font>
  %0A     function x(arghhh){ <font></font>
  %0A          return "a very long line of text that will extend the code beyond the boundaries of the margins, guaranteed for the most part, well maybe without you as a warrantee (except in abnormally conditioned perverse environs in which case a warranty is useless)"<font></font>
  %0A     }<font></font>
&lt;/code&gt;<font></font>
and then <font></font>
&lt;p&gt;with the tag blocked using pre-wrapped lines<font></font>
&lt;code style=display:block;white-space:pre-wrap&gt; <font></font>
  %0A     function x(arghhh){ <font></font>
  %0A          return "a very long line of text that will extend the code beyond the boundaries of the margins, guaranteed for the most part, well maybe without you as a warrantee (except in abnormally conditioned perverse environs in which case a warranty is useless)"<font></font>
  %0A     }<font></font>
&lt;/code&gt;<font></font>
&lt;br&gt;using an ersatz tag<font></font>
&lt;codenza&gt;<font></font>
  %0A     function x(arghhh){ <font></font>
  %0A          return "a very long line of text that will extend the code beyond the boundaries of the margins, guaranteed for the most part, well maybe without you as a warrantee (except in abnormally conditioned perverse environs in which case a warranty is useless)"<font></font>
 %0A     }<font></font>
&lt;/codenza&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三逆天</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我个人会使用，</font></font><code>&lt;code&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为这在语义上是最正确的。</font><font style="vertical-align: inherit;">然后要区分内联代码和块代码，我可以添加一个类：</font></font></p>

<pre><code>&lt;code class="inlinecode"&gt;&lt;/code&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于内联代码或：</font></font></p>

<pre><code>&lt;code class="codeblock"&gt;&lt;/code&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于代码块。</font><font style="vertical-align: inherit;">取决于哪个不太常见。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋樱</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>&lt;code&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内联代码可以包装和</font></font><code>&lt;pre&gt;&lt;code&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">块代码不能换行。</font></font><code>&lt;samp&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是用于示例</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此我将避免使用它来表示示例代码（读者要</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">这就是堆栈溢出的作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（更好的是，如果您希望易于维护，让用户以Markdown的形式编辑文章，则不必记住使用</font></font><code>&lt;pre&gt;&lt;code&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。）</font></font></p>

<p>HTML5 agrees with this in <a href="http://www.w3.org/TR/html5/grouping-content.html#the-pre-element" rel="noreferrer">“the <code>pre</code> element”</a>:</p>

<blockquote>
  <p>The pre element represents a block of preformatted text, in which structure is represented by typographic conventions rather than by elements.</p>
  
  <p>Some examples of cases where the pre element could be used:</p>
  
  <ul>
  <li>Including fragments of computer code, with structure indicated according to the conventions of that language.</li>
  </ul>
  
  <p>[…]</p>
  
  <p>To represent a block of computer code, the pre element can be used with a code element; to represent a block of computer output the pre element can be used with a samp element. Similarly, the kbd element can be used within a pre element to indicate text that the user is to enter.</p>
  
  <p>In the following snippet, a sample of computer code is presented.</p>

<pre><code>&lt;p&gt;This is the &lt;code&gt;Panel&lt;/code&gt; constructor:&lt;/p&gt;<font></font>
&lt;pre&gt;&lt;code&gt;function Panel(element, canClose, closeHandler) {<font></font>
  this.element = element;<font></font>
  this.canClose = canClose;<font></font>
  this.closeHandler = function () { if (closeHandler) closeHandler() };<font></font>
}&lt;/code&gt;&lt;/pre&gt;<font></font>
</code></pre>
</blockquote></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
