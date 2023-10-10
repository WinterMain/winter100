---
layout: question
title:  如何在嵌入式CSS中编写a：hover？
date:   2020-03-15T10:52:46.000Z
description: 我有一种情况，我必须编写内联CSS代码，并且我想在锚点上应用悬停样式。如何a hover在HTML样式属性内的内联CSS中使用？例如，您不能在HT...
img: 
author: 谷若汐
category: question
answer: 15
tags: HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一种情况，我必须编写内联CSS代码，并且我想在锚点上应用悬停样式。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何</font></font><code>a:hover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML样式属性内的内联CSS中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，您不能在HTML电子邮件中可靠地使用CSS类。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1630篇《如何在嵌入式CSS中编写a：hover？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyGil</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过添加一个类来做id，但不要内联。</font></font></p>

<pre><code>&lt;style&gt;.hover_pointer{cursor:pointer;}&lt;/style&gt;<font></font>
&lt;div class="hover_pointer" style="font:bold 12pt Verdana;"&gt;Hello World&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2行，但您可以在任何地方重用该类。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只能</font></font><code>a:hover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在外部样式表中</font><font style="vertical-align: inherit;">使用伪类</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，我建议使用外部样式表。</font><font style="vertical-align: inherit;">代码是：</font></font></p>

<pre><code>a:hover {color:#FF00FF;}   /* Mouse-over link */
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖蛋蛋</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我必须避免使用javascript，但可以使用服务器端代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我生成了一个ID，创建了一个样式块，并生成了具有该ID的链接。</font><font style="vertical-align: inherit;">是的，它是有效的HTML。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>a {<font></font>
  text-decoration: none;<font></font>
  color: blue; <font></font>
}<font></font>
<font></font>
a:hover {<font></font>
  color: blue;<font></font>
  font-weight: bold;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;!-- some code in the interpreter you use, to generate the data-hover id --&gt;<font></font>
&lt;style&gt;<font></font>
  a[data-hover="rnd-id-123"] { color: green;  } <font></font>
  a[data-hover="rnd-id-123"]:hover { color: red; }<font></font>
&lt;/style&gt;<font></font>
&lt;a data-hover="rnd-id-123"&gt;some link 1&lt;/a&gt;<font></font>
<font></font>
&lt;br&gt;<font></font>
<font></font>
&lt;!-- some code in the interpreter you use, to generate the data-hover id --&gt;<font></font>
&lt;style&gt;<font></font>
  a[data-hover="rnd-id-456"] { color: purple;  }<font></font>
  a[data-hover="rnd-id-456"]:hover { color: orange; }<font></font>
&lt;/style&gt;<font></font>
&lt;a data-hover="rnd-id-456"&gt;some link 2&lt;/a&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Stafan小哥</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以这并不是用户想要的，但是我发现这个问题在寻找答案，并提出了一些相关的问题。</font><font style="vertical-align: inherit;">我有一堆重复的元素，它们中的选项卡需要新的颜色/悬停。</font><font style="vertical-align: inherit;">我使用车把，这是解决方案的关键，但是其他模板语言也可以使用。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我定义了一些颜色，并将它们传递到每个元素的车把模板中。</font><font style="vertical-align: inherit;">在模板的顶部，我定义了一个样式标签，并添加了自定义类和悬停颜色。</font></font></p>

<pre><code>&lt;style type="text/css"&gt;<font></font>
    .{{chart.type}}-tab-hover:hover {<font></font>
        background-color: {{chart.chartPrimaryHighlight}} !important;<font></font>
    }<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我在模板中使用了样式：</font></font></p>

<pre><code>&lt;span class="financial-aid-details-header-text {{chart.type}}-tab-hover"&gt;<font></font>
   Payouts<font></font>
&lt;/span&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能不需要 </font></font><code>!important</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇启人</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我同意</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">影子</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以使用</font></font><code>onmouseover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">and </font></font><code>onmouseout</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件</font><font style="vertical-align: inherit;">通过JavaScript </font><font style="vertical-align: inherit;">更改</font></font><a href="http://en.wikipedia.org/wiki/Cascading_Style_Sheets" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且不要说人们需要激活JavaScript。</font><font style="vertical-align: inherit;">这只是一个样式问题，因此，是否有一些没有JavaScript的访问者都没有关系；）尽管大多数</font></font><a href="https://en.wikipedia.org/wiki/Web_2.0" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Web 2.0</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用JavaScript。</font><font style="vertical-align: inherit;">例如，</font><font style="vertical-align: inherit;">参见</font></font><a href="http://en.wikipedia.org/wiki/Facebook" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Facebook</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（许多JavaScript）或</font></font><a href="http://en.wikipedia.org/wiki/Myspace" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Myspace</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi卡卡西</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是想出了一个不同的解决方案。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题：我</font></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在一些幻灯片/主要内容查看器周围</font><font style="vertical-align: inherit;">有一个</font></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签，在页脚中</font><font style="vertical-align: inherit;">也有一个</font><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我希望它们在IE中位于同一位置，因此</font></font><code>onHover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使它们不是链接，</font><font style="vertical-align: inherit;">整个段落也都带有下划线</font><font style="vertical-align: inherit;">：幻灯片整体是一个链接。</font><font style="vertical-align: inherit;">IE不知道区别。</font><font style="vertical-align: inherit;">我的页脚中也有一些实际的链接，这些链接确实需要下划线和颜色更改</font></font><code>onHover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我以为我必须将样式与页脚标记内联以进行颜色更改，但是从上面的建议来看，这是不可能的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案：我为页脚链接提供了两个不同的类，而我的问题已解决。</font><font style="vertical-align: inherit;">我能够</font></font><code>onHover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在一类中</font><font style="vertical-align: inherit;">进行</font><font style="vertical-align: inherit;">颜色更改，使幻灯片</font></font><code>onHover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有颜色更改/下划线，并且仍然能够在页脚和幻灯片中同时具有外部HREFS！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">启人乐</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有办法做到这一点。</font><font style="vertical-align: inherit;">您的选择是使用JavaScript或CSS块。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许有一些JavaScript库会将专有的style属性转换为style block。</font><font style="vertical-align: inherit;">但是，这样的代码将不符合标准。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇乐</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据您的评论，无论如何，您正在发送一个JavaScript文件。</font><font style="vertical-align: inherit;">在JavaScript中进行过渡。</font></font><a href="http://en.wikipedia.org/wiki/JQuery" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>$.hover()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法非常简单，其他所有JavaScript包装器也是如此。</font><font style="vertical-align: inherit;">在直接的JavaScript中也不是很难。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC36540264</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;style&gt;a:hover { }&lt;/style&gt;<font></font>
&lt;a href="/"&gt;Go Home&lt;/a&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">悬停是伪类，因此不能与样式属性一起应用。</font><font style="vertical-align: inherit;">它是选择器的一部分。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L卡卡西米亚</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如前所述，您不能为悬停设置任意的内联样式，但是您可以</font><font style="vertical-align: inherit;">在适当的标记中使用以下内容</font><font style="vertical-align: inherit;">来更改</font></font><a href="http://en.wikipedia.org/wiki/Cascading_Style_Sheets" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中的悬停光标的</font><a href="http://en.wikipedia.org/wiki/Cascading_Style_Sheets" rel="noreferrer"><font style="vertical-align: inherit;">样式</font></a><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>style="cursor: pointer;"
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi村村</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前的CSS迭代不支持内联伪类声明（尽管据我所知，它可能会在将来的版本中出现）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就目前而言，最好的选择可能是直接在要设置样式的链接上方定义一个样式块：</font></font></p>

<pre><code>&lt;style type="text/css"&gt;<font></font>
    .myLinkClass:hover {text-decoration:underline;}<font></font>
&lt;/style&gt;<font></font>
&lt;a href="/foo" class="myLinkClass"&gt;Foo!&lt;/a&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan神无前端</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不能完全执行所描述的内容，因为它</font></font><code>a:hover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是选择器的一部分，而不是CSS规则的一部分。</font><font style="vertical-align: inherit;">样式表包含两个组件：</font></font></p>

<pre><code>selector {rules}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内联样式只有规则；</font><font style="vertical-align: inherit;">选择器隐式为当前元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择器是一种表达性语言，它描述一组条件以匹配XML相似的文档中的元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，您可以接近，因为从</font></font><code>style</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">技术上讲</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">集合几乎可以在任何地方移动：</font></font></p>

<pre><code>&lt;html&gt;<font></font>
  &lt;style&gt;<font></font>
    #uniqueid:hover {do:something;}<font></font>
  &lt;/style&gt;<font></font>
  &lt;a id="uniqueid"&gt;hello&lt;/a&gt;<font></font>
&lt;/html&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">APro</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我特别迟促成这一点，但是我很遗憾地看到没有人提出这一点，如果你真的需要内嵌代码，这是可以做到的。</font><font style="vertical-align: inherit;">我需要一些悬停按钮，方法是这样的：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false">
<div class="snippet-code">
<pre class="snippet-code-css lang-css prettyprint-override"><code>.hover-item {<font></font>
	background-color: #FFF;<font></font>
}<font></font>
<font></font>
.hover-item:hover {<font></font>
	background-color: inherit;<font></font>
}</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;a style="background-color: red;"&gt;<font></font>
	&lt;div class="hover-item"&gt;<font></font>
		Content<font></font>
	&lt;/div&gt;<font></font>
&lt;/a</code></pre>
</div>
</div>
<p></p>

<p>In this case, the inline code: "background-color: red;" is the switch colour on hover, put the colour you need into there and then this solution works. I realise this may not be the perfect solution in terms of compatibility however this works if it is absolutely needed.</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Eva</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p><a href="http://www.w3.org/TR/2002/WD-css-style-attr-20020515" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在过去的某个时间</font><a href="http://www.w3.org/TR/2002/WD-css-style-attr-20020515" rel="noreferrer"><font style="vertical-align: inherit;">做到</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是现在（根据同一标准的最新修订版，即候选推荐标准），您不能这样做。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Davaid</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简短答案：您不能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">长答案：你不应该。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给它一个类名或一个ID，然后使用样式表来应用样式。</font></font></p>

<p><code>:hover</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个伪选择器，对于</font></font><a href="http://en.wikipedia.org/wiki/Cascading_Style_Sheets" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS而言</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，仅在样式表中具有含义。</font><font style="vertical-align: inherit;">没有任何等效的内联样式（因为它没有定义选择标准）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对OP的评论的回复：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">动态添加CSS规则的良好脚本，</font><font style="vertical-align: inherit;">请参见</font></font><em><a href="https://web.archive.org/web/20160104183713/http://www.hunlock.com/blogs/Totally_Pwn_CSS_with_Javascript" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有Javascript的Totally Pwn CSS</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">另请参阅</font></font><em><a href="http://www.quirksmode.org/dom/changess.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改样式表</font></font></a></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取有关该主题的一些理论。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，请不要忘记，如果可以的话，您可以向外部样式表添加链接。</font><font style="vertical-align: inherit;">例如，</font></font></p>

<pre><code>&lt;script type="text/javascript"&gt;<font></font>
  var link = document.createElement("link");<font></font>
  link.setAttribute("rel","stylesheet");<font></font>
  link.setAttribute("href","http://wherever.com/yourstylesheet.css");<font></font>
  var head = document.getElementsByTagName("head")[0];<font></font>
  head.appendChild(link);<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：以上假设存在</font></font><a href="https://en.wikipedia.org/wiki/HTML_element#Document_structure_elements" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">头部</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
