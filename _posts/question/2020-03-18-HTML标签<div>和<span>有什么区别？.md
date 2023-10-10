---
layout: question
title:  HTML标签<div>和<span>有什么区别？
date:   2020-03-18T11:53:16.000Z
description: 我想问一些简单的例子，说明<div>and 的用法<span>。我看过他们都用来标记网页的有一个部分id或class，但我想知道是否有当一个优于其他倍。...
img: 
author: 飞云Gil
category: question
answer: 11
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想问一些简单的例子，说明</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">and </font><font style="vertical-align: inherit;">的用法</font></font><code>&lt;span&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我看过他们都用来标记网页的有一个部分</font></font><code>id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>class</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但我想知道是否有当一个优于其他倍。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅番长</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML中，有一些标签可以为内容添加结构或语义。</font><font style="vertical-align: inherit;">例如，</font></font><code>&lt;p&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签用于标识段落。</font><font style="vertical-align: inherit;">另一个示例是</font></font><code>&lt;ol&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有序列表</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">标签。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如上所示，当HTML中没有合适的标记可用时，</font><font style="vertical-align: inherit;">通常使用</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">and </font></font><code>&lt;span&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记用于标识文档的块级部分/分区，该分区/分区在其前后都有换行符。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用div标签的示例包括页眉，页脚，导航等。但是，在HTML 5中已经提供了这些标签。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所述</font></font><code>&lt;span&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签用于标识文档的一个内联区段/分。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，可以使用span标签将嵌入式象形文字添加到元素中。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿神乐A</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">记住，基本上，他们自己也不执行任何功能。</font><font style="vertical-align: inherit;">他们</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具体说明的功能</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是通过他们的标签</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们只能在CSS的帮助下进行自定义。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您遇到的问题是：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将SPAN标记与某些样式结合在一起，对于将其保留在html的某行（例如段落中）很有用。</font><font style="vertical-align: inherit;">这是HTML中的行级别或语句级别。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>&lt;p&gt;Am writing&lt;span class="time"&gt;this answer&lt;/span&gt; in my free time of my day.&lt;/p&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如前所述，DIV标签功能只能在样式支持下可见，可以容纳大量HTML代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DIV是块级</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>    &lt;div class="large-time"&gt;<font></font>
    &lt;p&gt;Am writing &lt;span class="time"&gt; this answer&lt;/span&gt; in my free time of my day. <font></font>
    &lt;/p&gt;<font></font>
    &lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据您的要求，两者都有使用的时间和情况。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望答案清楚。</font><font style="vertical-align: inherit;">谢谢。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi猪猪</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是想为</font></font><code>span</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vs的</font><font style="vertical-align: inherit;">出现添加一些历史背景</font></font><code>div</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">历史</font></font><code>span</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1995年7月3日，Benjamin CW Sittler </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提出了一个通用文本容器</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签，用于将样式应用于某些文本块。</font><font style="vertical-align: inherit;">除非与样式表一起使用，否则呈现为中性。</font><font style="vertical-align: inherit;">关于可读性，即含义，存在着争论。</font><font style="vertical-align: inherit;">Bert Bos通过class属性（具有诸如City，person，date等的值）提到了元素的可扩展性。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保罗·普雷斯科德（Paul Prescod）担心这两个因素都会被滥用。</font><font style="vertical-align: inherit;">他反对在文本中提到“任何新元素都应该在旧元素上”，并添加“如果我们创建没有语义的标签，则可以在任何地方使用它而不会出错。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们必须强迫作者正确标记其文档的语义。</font><font style="vertical-align: inherit;">我们必须强迫编辑器供应商在其界面中明确表明这一选择。”</font></font></p>
</blockquote>

<p><a href="https://www.w3.org/wiki/Html/Elements/span" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-来源（W3 Wiki）</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从RFC草案中引入</font></font><code>span</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，在没有其他元素合适的情况下，需要一个通用容器来携带LANG和BIDI属性。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为此引入了SPAN元素。</font></font></strong></p>
</blockquote>

<p><a href="https://tools.ietf.org/html/draft-ietf-html-i18n-01#page-12" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-来源（IETF草案）</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">历史</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DIV元素可用于将HTML文档构造为分区层次结构。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Netscape引入了CENTER，之后他们才添加了对HTML 3.0 DIV元素的支持。</font><font style="vertical-align: inherit;">由于其广泛部署，因此保留在HTML 3.2中。</font></font></p>
</blockquote>

<p><a href="https://www.w3.org/TR/2018/SPSD-html32-20180315/#center" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML 3.2规范</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简而言之，这两个元素都是出于对语义上更通用的容器的需求。</font><font style="vertical-align: inherit;">提议将Span用作</font></font><code>&lt;text&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样式元素</font><font style="vertical-align: inherit;">的更通用替代</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">提出Div是一种划分页面的通用方法，它具有替换</font></font><code>&lt;center&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签以使内容居中对齐的其他</font><font style="vertical-align: inherit;">好处</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">由于Div作为页分隔符的历史，它一直是一个块元素。</font><font style="vertical-align: inherit;">Span一直是内联元素，因为其最初的目的是文本样式，而今天div和span都已成为具有默认block和inline display属性的通用元素。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小卡卡西小卤蛋</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想说的是，如果您知道西班牙语，可以在</font></font><a href="http://developer.mozilla.org/es/HTML/Elemento/span#div_y_span" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中找到适当的解释。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，一个快速的定义</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是用于划分部分，并且</font></font><code>span</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将某种样式应用于其他块元素（例如）中的元素</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗逆天</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Div是一个块元素，而span是一个内联元素，其宽度取决于其自身的内容，而div不</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">木禾</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">克里斯的答案中已经提到了真正重要的区别。</font><font style="vertical-align: inherit;">但是，对于所有人来说，影响并不明显。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为内联元素，</font></font><code>&lt;span&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只能包含其他内联元素。</font><font style="vertical-align: inherit;">因此，以下代码是错误的：</font></font></p>

<pre><code>&lt;span&gt;&lt;p&gt;This is a paragraph&lt;/p&gt;&lt;/span&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的代码无效。</font><font style="vertical-align: inherit;">要包装块级元素，必须使用另一个块级元素（例如</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">另一方面，</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只能在块级元素合法的地方使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，这些规则在（X）HTML中已修复，并且</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因CSS规则的存在</font><em><font style="vertical-align: inherit;">而</font></em><font style="vertical-align: inherit;">改变！</font><font style="vertical-align: inherit;">因此以下代码</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误的！</font></font></p>

<pre><code>&lt;span style="display: block"&gt;&lt;p&gt;Still wrong&lt;/p&gt;&lt;/span&gt;<font></font>
&lt;span&gt;&lt;p style="display: inline"&gt;Just as wrong&lt;/p&gt;&lt;/span&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">暗含“块元素”的含义，但未明确说明。</font><font style="vertical-align: inherit;">如果我们忽略所有理论（理论是好的），那么以下是实用的比较。</font><font style="vertical-align: inherit;">下列：</font></font></p>

<pre><code>&lt;p&gt;This paragraph &lt;span&gt;has&lt;/span&gt; a span.&lt;/p&gt;<font></font>
&lt;p&gt;This paragraph &lt;div&gt;has&lt;/div&gt; a div.&lt;/p&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生：</font></font></p>

<pre><code>This paragraph has a span.<font></font>
<font></font>
This paragraph<font></font>
<font></font>
has<font></font>
a div.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这表明，不仅</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个div </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被使用内联，它根本不会产生预期的影响。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy蛋蛋</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如其他答案中所述，默认情况下</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将被呈现为块元素，而</font></font><code>span</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将在其上下文中内联呈现。</font><font style="vertical-align: inherit;">但是它们都没有任何语义价值。</font><font style="vertical-align: inherit;">它们的存在是为了允许您将样式和标识应用于任何给定的内容。</font><font style="vertical-align: inherit;">使用样式，您可以</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像a一样</font><font style="vertical-align: inherit;">做出</font><font style="vertical-align: inherit;">行为</font></font><code>span</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，反之亦然。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有用的样式之一</font></font><code>div</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>inline-block</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例子：</font></font></p>

<ol>
<li><p><a href="http://dustwell.com/div-span-inline-block.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://dustwell.com/div-span-inline-block.html</font></font></a></p></li>
<li><p><a href="https://stackoverflow.com/questions/9189810/css-display-inline-vs-inline-block"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS显示：内联与内联块</font></font></a></p></li>
</ol>

<p><font style="vertical-align: inherit;"></font><code>inline-block</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在游戏网站项目中，</font><font style="vertical-align: inherit;">我曾经</font><font style="vertical-align: inherit;">取得过巨大的成功。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙小胖</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里已经有很好的详细答案，但是没有直观的示例，因此下面是一个简单的示例：</font></font></p>

<p><img src="https://i.stack.imgur.com/wA8PD.png" alt="div和span之间的差异"></p>

<p><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个块标签，</font></font><code>&lt;span&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而是一个内联标签。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无小哥</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了完整起见，我邀请您这样考虑：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML中定义了很多块元素（前后都有换行符），还有很多内联标签（没有换行符）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是在现代HTML中，所有元素都应该具有</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">含义</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：a </font></font><code>&lt;p&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个段落，an </font></font><code>&lt;li&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个列表项，等等，我们应该将正确的标记用于正确的目的-与过去的时代不同使用</font></font><code>&lt;blockquote&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内容是否为引号来</font><font style="vertical-align: inherit;">缩进</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以，你会怎么做时，有</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有意义的，你正在试图做的事情？</font><font style="vertical-align: inherit;">400px宽的列</font><font style="vertical-align: inherit;">没有</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意义，</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对吗？</font><font style="vertical-align: inherit;">您只希望文本列的宽度为400px，因为这适合您的设计。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，他们在HTML中又添加了两个元素：通用或无意义的元素</font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;span&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为否则，人们会回到滥用确实具有意义的元素。</font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋前端</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个块级元素，</font></font><code>&lt;span&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个内联元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想对某些内联文本执行某些操作，</font></font><code>&lt;span&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则</font><font style="vertical-align: inherit;">应该这样做，</font><font style="vertical-align: inherit;">因为它不会像a </font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那样</font><font style="vertical-align: inherit;">引入换行符</font><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如其他人所指出的，每种语义中都隐含着一些语义，最重要的事实是，a </font></font><code>&lt;div&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">暗示了文档中的逻辑划分，类似于文档的某个部分或其他内容，例如：</font></font></p>

<pre><code>&lt;div id="Chapter1"&gt;<font></font>
   &lt;p&gt;Lorem ipsum dolor sit amet, &lt;span id="SomeSpecialText1"&gt;consectetuer adipiscing&lt;/span&gt; elit. Duis congue vehicula purus.&lt;/p&gt;<font></font>
   &lt;p&gt;Nam &lt;span id="SomeSpecialText2"&gt;eget magna nec&lt;/span&gt; sapien fringilla euismod. Donec hendrerit.&lt;/p&gt; <font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
