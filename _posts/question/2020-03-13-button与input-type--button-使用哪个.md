---
layout: question
title:  <button>与<input type =“ button” />。使用哪个？
date:   2020-03-13T09:40:49.000Z
description: 查看大多数站点（包括SO）时，大多数使用：<input type="button" />代替：<button></button>两者...
img: 
author: 
category: question
answer: 13
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看大多数站点（包括SO）时，大多数使用：</font></font></p>

<pre><code>&lt;input type="button" /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替：</font></font></p>

<pre><code>&lt;button&gt;&lt;/button&gt;
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者之间的主要区别是什么？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有正当理由使用一个而不是另一个？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有使用它们的有效理由？</font></font></li>
<li><font style="vertical-align: inherit;"></font><code>&lt;button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到使用不是很广泛时，</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">会带来兼容性问题吗？</font></font></li>
</ul></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1493篇《<button>与<input type =“ button” />。使用哪个？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan逆天</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将引用文章</font></font><a href="http://davidwalsh.name/html5-buttons" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“锚点，输入和按钮之间的区别”</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">锚点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素）代表超链接，人们可以浏览到或在浏览器中下载的资源。</font><font style="vertical-align: inherit;">如果要允许用户移动到新页面或下载文件，请使用锚点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>&lt;input&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）表示数据字段：所以一些用户数据你的意思发送给服务器。</font><font style="vertical-align: inherit;">有几种与按钮相关的输入类型：</font></font></p>

<ul>
<li><code>&lt;input type="submit"&gt;</code></li>
<li><code>&lt;input type="image"&gt;</code></li>
<li><code>&lt;input type="file"&gt;</code></li>
<li><code>&lt;input type="reset"&gt;</code></li>
<li><code>&lt;input type="button"&gt;</code></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们每个都有含义，例如，“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">file</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”用于上载文件，“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">reset</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”清除表单，然后“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">submit</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”将数据发送到服务器。</font><font style="vertical-align: inherit;">检查</font></font><a href="https://developer.mozilla.org/docs/Web/HTML/Element/Input" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="http://www.w3schools.com/tags/tag_input.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3Schools </font></font></a><font style="vertical-align: inherit;"><a href="https://developer.mozilla.org/docs/Web/HTML/Element/Input" rel="nofollow noreferrer"><font style="vertical-align: inherit;">上的</font></a><font style="vertical-align: inherit;"> W3参考</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按钮</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>&lt;button&gt;)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素是相当具有通用性：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将元素嵌套在按钮内，例如图像，段落或标题；</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按钮也可以包含</font></font><code>::before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>::after</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">伪元素；</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按钮支持</font></font><code>disabled</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性。</font><font style="vertical-align: inherit;">这样可以轻松打开和关闭它们。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次，检查W3参考以获取</font><a href="https://developer.mozilla.org/docs/Web/HTML/Element/Button" rel="nofollow noreferrer"><font style="vertical-align: inherit;">MDN</font></a><font style="vertical-align: inherit;">或</font><a href="http://www.w3schools.com/tags/tag_button.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;">W3Schools </font></a><a href="https://developer.mozilla.org/docs/Web/HTML/Element/Button" rel="nofollow noreferrer"><font style="vertical-align: inherit;">上</font></a><font style="vertical-align: inherit;">的</font></font><code>&lt;button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">。</font></font><a href="https://developer.mozilla.org/docs/Web/HTML/Element/Button" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><a href="http://www.w3schools.com/tags/tag_button.asp" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">有壳网</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只想在此处的其余答案中添加一些内容。</font><font style="vertical-align: inherit;">输入元素被认为是空元素或空元素（其他空元素是area，base，br，col，hr，img，input，link，meta和param。您也可以</font></font><a href="https://developer.mozilla.org/en-US/docs/Glossary/Empty_element" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查</font><font style="vertical-align: inherit;">），这意味着它们不能包含任何内容。</font><font style="vertical-align: inherit;">除了没有任何内容外，空元素</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能具有任何伪元素，例如:: after和:: before</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我认为这是一个主要缺点。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长阿飞</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，差异之一可能来自库的提供者及其所编写的内容。</font><font style="vertical-align: inherit;">例如，在这里，我将Cordova平台与移动角度ui结合使用，并且虽然input / div / etc标签与ng-click可以很好地工作，但该按钮可能导致Visual Studio调试器崩溃，这肯定是程序员造成的差异。</font><font style="vertical-align: inherit;">请注意，MattC答案指向的是同一问题，jQuery只是一个库，提供程序没有想到一个元素上的功能，而他/他在另一个元素上提供了功能。</font><font style="vertical-align: inherit;">因此，当您使用图书馆时，您可能会遇到一个元素的问题，而您不会遇到另一个。</font></font><code>input</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是因为它更受欢迎，所以</font><font style="vertical-align: inherit;">像这样的受欢迎的</font><font style="vertical-align: inherit;">大多数将是固定的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小欧学姐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><a href="http://web.archive.org/web/20110721191046/http://particletree.com/features/rediscovering-the-button-element/" rel="noreferrer">This article</a> seems to offer a pretty good overview of the difference.</p>

<p>From the page:</p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用BUTTON元素创建的按钮的功能与使用INPUT元素创建的按钮一样，但是它们提供了更丰富的呈现可能性：BUTTON元素可能具有内容。</font><font style="vertical-align: inherit;">例如，包含图像功能的BUTTON元素类似于并且可能类似于其类型设置为“ image”的INPUT元素，但是BUTTON元素类型允许内容。</font></font></p>
  
  <p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按钮元素-W3C</font></font></em></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>&lt;button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">灵活，因为它可以包含HTML。</font><font style="vertical-align: inherit;">而且，使用CSS进行样式设置要容易得多，并且样式实际上已应用到所有浏览器中。</font><font style="vertical-align: inherit;">但是，有关Internet Explorer（Eww！IE！）有一些缺点。</font><font style="vertical-align: inherit;">Internet Explorer使用标记的内容作为值，无法正确检测到value属性。</font><font style="vertical-align: inherit;">表单中的所有值都发送到服务器端，无论是否单击该按钮。</font><font style="vertical-align: inherit;">这使得使用它既</font></font><code>&lt;button type="submit"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">棘手又痛苦。</font></font></p>

<p><code>&lt;input type="submit"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一方面，它没有任何价值或检测问题，但是您不能像使用一样添加HTML </font></font><code>&lt;button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这也很难设置样式，并且样式在所有浏览器中不一定总是响应良好。</font><font style="vertical-align: inherit;">希望这会有所帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙Eva</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><ul>
<li><a href="http://web.archive.org/web/20110721191046/http://particletree.com/features/rediscovering-the-button-element/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">描述差异</font><a href="http://web.archive.org/web/20110721191046/http://particletree.com/features/rediscovering-the-button-element/" rel="noreferrer"><font style="vertical-align: inherit;">的页面</font></a><font style="vertical-align: inherit;">（基本上，您可以将html放入</font></font><code>&lt;button&gt;&lt;/button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><a href="http://www.peterbe.com/plog/button-tag-in-IE" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一页</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">描述了人们为什么回避的原因</font></font><code>&lt;button&gt;&lt;/button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（提示：IE6）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用时的另一个IE问题</font></font><code>&lt;button /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我们谈论IE时，有一些与按钮宽度有关的错误。</font><font style="vertical-align: inherit;">当您尝试添加样式时，它将神秘地添加额外的填充，这意味着您必须添加一个微小的技巧来控制一切。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Near</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用</font><font style="vertical-align: inherit;">HTML手册中的</font><font style="vertical-align: inherit;">“ </font></font><a href="http://www.w3.org/TR/html401/interact/forms.html#h-17.5" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表单页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用BUTTON元素创建的按钮的功能与使用INPUT元素创建的按钮一样，但是它们提供了更丰富的呈现可能性：BUTTON元素可能具有内容。</font><font style="vertical-align: inherit;">例如，包含图像功能的BUTTON元素类似于并且可能类似于其类型设置为“图像”的INPUT元素，但是BUTTON元素类型允许内容。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就CSS样式而言，这</font></font><code>&lt;button type="submit" class="Btn"&gt;Example&lt;/button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是更好的选择，因为它使您能够使用CSS </font></font><code>:before</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>:after</code> <a href="https://developer.mozilla.org/en/docs/Web/CSS/content" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">伪类</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这可以提供帮助。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于</font><font style="vertical-align: inherit;">在某些情况下类</font><font style="vertical-align: inherit;">的</font></font><code>&lt;input type="button"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视觉呈现方式与</font></font><code>&lt;a&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">不同，因此</font></font><code>&lt;span&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我避免使用它们。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值得注意的是，</font></font><a href="https://stackoverflow.com/questions/469059/button-vs-input-type-button-which-to-use/469084#469084"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前的最佳答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是在2009年编写的。如今，IE6不再是一个问题，因此</font></font><code>&lt;button type="submit"&gt;Wins&lt;/button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我眼中的样式一致性始终居于首位。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam伽罗</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是jQuery，则会有很大的不同。</font><font style="vertical-align: inherit;">jQuery知道输入上的事件比按钮上的事件更多。</font><font style="vertical-align: inherit;">在按钮上，jQuery仅知道“单击”事件。</font><font style="vertical-align: inherit;">在输入上，jQuery知道“单击”，“焦点”和“模糊”事件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您总是可以根据需要将事件绑定到按钮，但是要知道jQuery自动知道的事件是不同的。</font><font style="vertical-align: inherit;">例如，如果您创建了一个在页面上出现“ focusin”事件时就执行的函数，则输入将触发该函数，但按钮不会触发。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无阳光</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要在表单中创建按钮，请使用输入元素中的按钮。</font><font style="vertical-align: inherit;">如果要为操作创建按钮，请使用按钮标签。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyL</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要提示：如果在HTML表单中使用button元素，则不同的浏览器将提交不同的值。</font><font style="vertical-align: inherit;">Internet Explorer将在</font></font><code>&lt;button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;/button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">之间提交文本</font><font style="vertical-align: inherit;">，而其他浏览器将提交value属性的内容。</font><font style="vertical-align: inherit;">使用input元素以HTML形式创建按钮。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自：</font><a href="http://www.w3schools.com/tags/tag_button.asp" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://www.w3schools.com/tags/tag_button.asp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.w3schools.com/tags/tag_button.asp</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我理解正确，答案是浏览器之间的兼容性和输入一致性</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomSam</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像一个旁注，</font></font><code>&lt;button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将隐式提交，如果您要在表单中使用按钮而不提交，则可能会导致问题。</font><font style="vertical-align: inherit;">因此，使用</font></font><code>&lt;input type="button"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或</font></font><code>&lt;button type="button"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）的</font><font style="vertical-align: inherit;">另一个原因</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> - </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多详细信息</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有类型，则</font></font><a href="https://www.w3.org/wiki/HTML/Elements/button" rel="noreferrer"><code>button</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">隐式接收的类型</font></font><code>submit</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">表单中有多少个提交按钮或输入都没有关系，单击时显式或隐式键入为提交的任何一个按钮将被提交。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按钮有3种支持的类型</font></font></p>

<pre><code>submit ||  "submits the form when clicked (default)"<font></font>
reset  ||  "resets the fields in the form when clicked"<font></font>
button ||  "clickable, but without any event handler until one is assigned"<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green小哥Tom</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>&lt;button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">元素内放置内容，例如文本或图像。</font></font></p>

<pre><code>&lt;button type="button"&gt;Click Me!&lt;/button&gt; 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是此元素和使用该</font></font><code>&lt;input&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素</font><font style="vertical-align: inherit;">创建的按钮之间的区别</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
