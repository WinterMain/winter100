---
layout: question
title:  HTML 5：是<br>，<br/>还是<br />？
date:   2020-03-13T09:37:13.000Z
description: 我尝试检查其他答案，但仍然感到困惑-特别是在看到W3schools HTML 5参考之后。我认为HTML 4.01应该“允许”单个标记为<img>an...
img: 
author: 
category: question
answer: 21
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试检查</font></font><a href="https://stackoverflow.com/questions/1659208/why-br-and-not-br"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但仍然感到困惑-特别是在看到</font></font><a href="http://www.w3schools.com/tags/tag_img.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3schools HTML 5参考之后</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为HTML 4.01应该“允许”单个标记为</font></font><code>&lt;img&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">and </font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">然后XHTML与</font></font><code>&lt;img /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">and </font><font style="vertical-align: inherit;">一起出现了</font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="https://stackoverflow.com/questions/462741/space-before-closing-slash/463692#463692"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人说那里是旧浏览器的空间</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我想知道练习HTML 5时应该如何格式化代码。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是不是</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还是</font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1490篇《HTML 5：是<br>，<br/>还是<br />？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋TomItachi</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML的大多数情况下，标记是成对的。</font><font style="vertical-align: inherit;">但是对于换行符，您不需要一对标签。</font><font style="vertical-align: inherit;">因此，为了表明这一点，HTML使用了</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">格式。</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是正确的。</font><font style="vertical-align: inherit;">使用该格式。</font></font></p>

<p><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签在HTML中没有结束标签在XHTML中，</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">必须正确关闭标签，如下所示：</font></font><code>&lt;br /&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在XML中，每个标签都必须关闭。</font><font style="vertical-align: inherit;">XHTML是XML的扩展，因此，有效的XHTML必须遵循XML的所有规则。</font><font style="vertical-align: inherit;">因此，即使是空标签（没有子节点的节点）也</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应关闭。</font><font style="vertical-align: inherit;">XML具有一种简短形式，称为空节点自闭标签。</font><font style="vertical-align: inherit;">你可以写</font></font><code>&lt;br&gt;&lt;/br&gt; as &lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此在XHTML </font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML在这方面非常宽容，并且没有这样的规则。</font><font style="vertical-align: inherit;">因此，在HTML中，诸如</font></font><code>&lt;br&gt; &lt;hr&gt; &lt;meta&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">etc之类的</font><font style="vertical-align: inherit;">空节点</font><font style="vertical-align: inherit;">被写成没有正斜杠。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的HTML</font></font></strong></p>

<pre><code>&lt;br&gt;<font></font>
&lt;hr&gt;<font></font>
&lt;meta name="keywords" content=""&gt;<font></font>
&lt;link rel="canonical" href="http://www.google.com/"&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XHTML</font></font></strong></p>

<pre><code>&lt;br /&gt;<font></font>
&lt;hr /&gt;<font></font>
&lt;meta name="keywords" content="" /&gt;<font></font>
&lt;link rel="canonical" href="http://www.google.com/" /&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并非所有标签都可以自动关闭。</font><font style="vertical-align: inherit;">例如，</font></font><code>&lt;script src="jQuery.min.js" /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XHTML DTD不允许</font><font style="vertical-align: inherit;">使用标记</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L猴子</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有结束标签的元素称为空标签。</font><font style="vertical-align: inherit;">在html 4和html 5中，结束标记不是必需的，可以省略。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在xhtml中，标记是如此严格。</font><font style="vertical-align: inherit;">这意味着必须以开始标签开始，并以结束标签结束。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY神无</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，不再需要使用斜杠：
 </font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>&lt;hr&gt;</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚宝儿</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些浏览器中呈现不同的内容，因此选择其他任何一种都不会损害您的项目，但是确实希望大量查找..replace会影响某些浏览器中的页面呈现，这可能会为您自己甚至是额外的工作尴尬的是，所做的更改不会影响您的测试浏览器，但会在客户的首选浏览器中破坏它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我更喜欢，</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为这是自Erwise和Netscape Navigator（早期的Web浏览器）以来我一直使用的方式，但是没有理由不选择</font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">对于某些预处理，可比性等可能有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使您的选择归结为倾向于一种外观，或者您（或您最喜欢的HTML编辑器，例如Dreamweaver）也可能希望您的代码符合xml。</font><font style="vertical-align: inherit;">由你决定。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快速附注：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要与混淆</font></font><code>br</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，此外，您还可以考虑</font></font><code>wbr</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML中</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">标记：分词机会标记，它指定可以在文本中的何处添加换行符。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">若要进一步阅读，请阅读</font></font><a href="http://www.w3.org/TR/html5/syntax.html#void-elements" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5规范</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil村村</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">效果很好。</font><font style="vertical-align: inherit;">像XHTML这样的更严格的版本要求您添加结束符，而真正的HTML旧版本则不包含</font></font><code>DOCTYPE</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">make </font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">non-void标签，例如</font></font><code>&lt;br&gt;&lt;/br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总结：</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很好。</font><font style="vertical-align: inherit;">其他的也很好。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐逆天</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在HTML </font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和XHTML中</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议您使用</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimEva神奇</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如许多人都覆盖，无论是</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是可以接受的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我猜想，权衡是</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与相比，向终端用户少发送一个字符</font><font style="vertical-align: inherit;">会带来更好的可读性和向后兼容性</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于</font></font><a href="http://google.com" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Google会</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用，</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此我也会这样做。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（当然请记住，他们可能正在为我服务，</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为我使用的是他们知道支持的Chrome。在IE中，他们可能仍在服务</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamYoc</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，我所知道的是，这</font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会用白线</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中断，在某些情况下只会中断。</font><font style="vertical-align: inherit;">当我设置IPN脚本（PHP）并发送邮件并检查收件箱时，这发生在我身上。</font><font style="vertical-align: inherit;">不知道为什么，但我只得到了消息，看起来同时使用</font></font><code>&lt;br /&gt; and &lt;br&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里查看邮件：</font><a href="http://snag.gy/cLxUa.jpg" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://snag.gy/cLxUa.jpg" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//snag.gy/cLxUa.jpg</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文本的前两部分用分隔</font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此，空白行，底部的最后三行文本和最后的部分用分隔，</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并给出新行。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Davaid</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">恕我直言，</font><font style="vertical-align: inherit;">出于以下原因，</font><font style="vertical-align: inherit;">最好使用常规符号（</font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）而不是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">宽恕</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">符号（</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）：</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一致性</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的HTML中，可能有些SVG和SVG仅支持常规表示法（例如</font></font><code>&lt;rect /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可破解性</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像</font></font><a href="https://reactjs.org" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://www.nativescript.org" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NativeScript</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样的框架</font><a href="https://www.nativescript.org" rel="nofollow noreferrer"><font style="vertical-align: inherit;">不是</font></a><font style="vertical-align: inherit;">使用XML表示法的情况。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
您的标记代码将更易于解析。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">明晰</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使在深夜，常规符号也更易于阅读和理解。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">技术指标</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这两个</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有效的HTML标签。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结论</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用成熟的文本编辑器，则将其配置为使用常规表示法（</font></font><a href="https://emmet.io/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Emmet</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">称为XHTML </font><font style="vertical-align: inherit;">）。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
例如，在</font></font><a href="https://code.visualstudio.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Visual Studio Code中，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需</font><font style="vertical-align: inherit;">将以</font><font style="vertical-align: inherit;">下行添加到设置中：</font></font></p>

<pre><code>"emmet.syntaxProfiles": {"html": "xhtml"}
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是足够的，但是在XHTML </font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优选</font></font><a href="https://wiki.whatwg.org/wiki/HTML_vs._XHTML" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据WHATWG</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://dev.w3.org/html5/html-polyglot/html-polyglot.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据W3C</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用</font></font><a href="https://www.w3.org/TR/html5/syntax.html#start-tags" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第8.1.2.1</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML 5.2 W3C推荐标准，2017年14月</font></font></em></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开始标记必须具有以下格式：</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">…</font></font></p>
  
  <ol start="5">
  <li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在属性之后，或者在标记名之后（如果没有属性），可能存在一个或多个空格字符。</font><font style="vertical-align: inherit;">（某些属性必须后面跟一个空格。请参见下面的第8.1.2.3节。）</font></font></p></li>
  <li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，如果该元素是void元素之一，或者如果该元素是外来元素，则可能存在单个U + 002F SOLIDUS字符（/）。</font><font style="vertical-align: inherit;">此字符对void元素没有影响，但对异物则将start标签标记为自动关闭。</font></font></p></li>
  </ol>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用Dreamweaver CS6，它将自动完成</font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要在W3C上验证HTML文件，请参见：</font><a href="http://validator.w3.org/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://validator.w3.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//validator.w3.org/</font></font></a> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱神奇</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在验证中，这个问题实际上取决于</font></font><code>!DOCTYPE</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您要通过的验证。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我个人最喜欢的是</font></font><code>4.01 Trans</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只使用的地方</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它清除了验证期间可能弹出的警告和错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严格是一个更加复杂的野兽，它讨厌</font></font><code>"SHORTTAGS"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且实际上只想要</font></font><code>&lt;br&gt;&lt;/br&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>HTML5</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码世界的“ LAX”中，确实没有正确的答案，因为它</font></font><code>detects every example you put up</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在那里是正确的……</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，我认为所有问题</font></font><code>is what validation YOU PREFER</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>the person that you are working for prefers</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...随着</font></font><code>lackadaisical</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码严格性的变化，</font></font><code>html5</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们看到了一些非常懒惰的编码器</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid番长十三</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都可以正常工作，但我更喜欢，</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它稍微合逻辑。</font><font style="vertical-align: inherit;">逻辑上是每当有一个开始标签时就期望有一个结束标签。</font><font style="vertical-align: inherit;">因此，如果在没有结束标记的情况下不使用开始标记，则代码将更易于阅读。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有浏览器（可能没关系的一些非常旧的浏览器除外）将显示完全相同的内容。</font><font style="vertical-align: inherit;">但是，</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不符合xHTML。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Admin</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您对可比性（不是兼容性，而是可比性）感兴趣，那么我会坚持使用</font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很好。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光达蒙达蒙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XML要求所有标签都具有相应的结束标签。</font><font style="vertical-align: inherit;">因此，对于没有内部内容的标记，有一种特殊的速记语法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5不是XML，因此不应提出这样的要求。</font><font style="vertical-align: inherit;">HTML 4.01也不是。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，在</font></font><a href="http://dev.w3.org/html5/spec/Overview.html#the-img-element" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5规范中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，所有带有</font></font><code>br</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记的</font><font style="vertical-align: inherit;">示例都</font><font style="vertical-align: inherit;">使用</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法，而不是</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UPD</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><a href="http://www.w3.org/TR/html5/syntax.html#void-elements" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5中允许的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">9.1.2.1，7。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyL</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并以</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不同的方式呈现。</font><font style="vertical-align: inherit;">一些浏览器解释</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>&lt;br&gt;&lt;/br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并插入两个换行符</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天路易</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5中可以接受</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">两者</font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应</font><font style="vertical-align: inherit;">本着HTML的精神</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">HTML5允许使用斜杠，以便与以前的HTML 4.01和XHTML 1.0的文档更加兼容，从而更容易迁移到HTML5。</font><font style="vertical-align: inherit;">当然，</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也是可以接受的，但是为了与某些较旧的浏览器兼容，请在斜杠（</font></font><code>/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">前留一个空格</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿路易</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML中（最多HTML 4）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：使用</font></font><code>&lt;br&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML 5</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是优选的，但</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也是可以接受</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XHTML中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是首选。</font><font style="vertical-align: inherit;">也可以使用</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>&lt;br&gt;&lt;/br&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">笔记：</font></font></p>

<ul>
<li><code>&lt;br&gt;&lt;/br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 在HTML 5中无效，它将被视为两个换行符。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XHTML区分大小写，HTML不区分大小写。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了向后兼容，某些旧的浏览器会将XHTML解析为HTML并失败，</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但不会</font></font><code>&lt;br /&gt;</code></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font></font></p>

<ul>
<li><a href="http://www.w3schools.com/tags/tag_br.asp"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.w3schools.com/tags/tag_br.asp</font></font></a></li>
<li><a href="http://en.wikipedia.org/wiki/XHTML"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://en.wikipedia.org/wiki/XHTML</font></font></a></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan西门</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="http://dev.w3.org/html5/spec/Overview.html#the-br-element" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规范</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，预期格式</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为HTML 5，但允许使用斜杠。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村路易</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为</font></font><a href="https://dev.w3.org/html5/html-author/#void" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML 5参考草案中的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这句话</font><font style="vertical-align: inherit;">提供了答案：</font></font></p>

<blockquote>
  <p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3.2.2.2空隙元素</font></font></em></p>
  
  <p>The term <strong>void elements</strong> is used to designate elements that must be <a href="https://dev.w3.org/html5/html-author/#empty-element" rel="noreferrer">empty</a>. These requirements only apply to the HTML syntax. In XHTML, all such elements are treated as normal elements, but must be marked up as empty elements.</p>
  
  <p>These elements are forbidden from containing any content at all. In HTML, these elements have a <a href="https://dev.w3.org/html5/html-author/#start-tag" rel="noreferrer">start tag</a> only. The <a href="https://dev.w3.org/html5/html-author/#self-closing-tag" rel="noreferrer">self-closing tag</a> syntax may be used. The <a href="https://dev.w3.org/html5/html-author/#end-tag" rel="noreferrer">end tag</a> must be omitted because the element is automatically closed by the parser.</p>
  
  <p>HTML Example:<br>
  A void element in the HTML syntax. This is not permitted in the XHTML syntax.</p>

<pre><code>&lt;hr&gt;
</code></pre>
  
  <p>Example:<br>
  A void element using the HTML- and XHTML-compatible self-closing tag syntax.</p>

<pre><code>&lt;hr/&gt;
</code></pre>
  
  <p>XHTML Example:<br>
  A void element using the XHTML-only syntax with an explicit end tag. This is not permitted for void elements in the HTML syntax.</p>

<pre><code>&lt;hr&gt;&lt;/hr&gt;
</code></pre>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProTony</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于以下原因，</font><font style="vertical-align: inherit;">我建议使用</font><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）使用不同颜色突出显示XML语法的文本和XML编辑器将正确地使用突出显示，</font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是如果使用</font></font><code>&lt;br&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）</font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与XHTML向后兼容，格式正确的HTML（即XHTML）通常更易于验证错误和调试</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3）一些旧的解析器和一些编码规范要求在斜杠前加空格（即：</font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），例如WordPress插件编码规范：</font><a href="http://make.wordpress.org/core/handbook/coding-standards/html/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://make.wordpress.org/core/handbook/coding-standards/html/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//make.wordpress.org/core/handbook/coding-standards/html/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据我的经验，我从来没有遇到过使用</font></font><code>&lt;br /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有问题的情况，但是，在许多情况下，</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更旧的浏览器和工具可能有问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子神乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单地</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就足够了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有其他形式是为了与XHTML兼容。</font><font style="vertical-align: inherit;">使编写与XHTML相同的代码成为可能，并使它也可以用作HTML。</font><font style="vertical-align: inherit;">某些生成HTML的系统可能基于XML生成器，因此不能仅输出裸</font></font><code>&lt;br&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签。</font><font style="vertical-align: inherit;">如果您使用的是这样的系统，则可以使用</font></font><code>&lt;br/&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果不需要，就没有必要。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，实际上很少有人使用XHTML。</font><font style="vertical-align: inherit;">您需要将其内容提供服务</font></font><code>application/xhtml+xml</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以使其解释为XHTML，这在旧版本的IE中将不起作用-这也意味着您犯的任何小错误都将阻止您的页面在支持XHTML的浏览器中显示。</font><font style="vertical-align: inherit;">因此，Web上大多数看起来像XHTML的东西实际上都是作为HTML提供和解释的。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">更多信息，</font><font style="vertical-align: inherit;">请参见将</font></font><a href="http://hixie.ch/advocacy/xhtml" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">XHTML作为text / html认为有害</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
