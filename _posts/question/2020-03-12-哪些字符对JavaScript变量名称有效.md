---
layout: question
title:  哪些字符对JavaScript变量名称有效？
date:   2020-03-12T07:02:16.000Z
description: 哪些字符可用于命名JavaScript变量？我想在这里为我的非JavaScript用户创建一个小的“扩展库”（在语言方面，他们似乎都显得有些懈怠）。我...
img: 
author: EvaPro
category: question
answer: 7
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪些字符可用于命名JavaScript变量？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在这里为我的非JavaScript用户创建一个小的“扩展库”（在语言方面，他们似乎都显得有些懈怠）。</font><font style="vertical-align: inherit;">我喜欢jQuery和Prototype都使用</font></font><code>$</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">美元符号，并且由于我使用jQuery，因此我正在寻找另一个好用的单字符符号。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我意识到我可以测试一些字符，但是我希望缩小我的字符列表以作为开始（考虑到将来可能与另一个流行的库集成）。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1032篇《哪些字符对JavaScript变量名称有效？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamStafan十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是创建变量名称的快速建议。</font><font style="vertical-align: inherit;">如果您希望变量在FireFox中使用时不冲突，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请不要</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用变量名“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">_content</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”，因为浏览器已在使用此变量名。</font><font style="vertical-align: inherit;">我发现这很困难，因此不得不更改在大型JavaScript应用程序中使用变量“ _content”的所有位置。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGO西里</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript变量可以包含字母，数字，美元符号（$）和下划线（_）。</font><font style="vertical-align: inherit;">他们不能以数字开头。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常库使用</font></font><code>$</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并</font></font><code>_</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为功能快捷键，你将使用随处可见。</font><font style="vertical-align: inherit;">尽管名称</font></font><code>$</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>_</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没什么意义，但是它们对于缩短</font><font style="vertical-align: inherit;">名称</font><font style="vertical-align: inherit;">很有用，并且由于您将在各处使用该函数，因此您应该知道它们的含义。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的库不是要在每个地方都使用一个函数，那么我建议您使用更有意义的名称，因为这些名称将帮助您和其他人理解您的代码在做什么，而不必损害源代码的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">优美性</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，您可以看看很棒的</font></font><a href="http://www.datejs.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">DateJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库和它允许的语法糖，而无需任何</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">符号</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">短名称</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该首先使代码实用，并且只有在尝试使其变得漂亮之后才能使用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知，</font><strong><font style="vertical-align: inherit;">可接受的答案将排除许多有效的标识符</font></strong><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这是我按照</font></font><a href="http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规范编写</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的正则表达式</font><font style="vertical-align: inherit;">（请参阅有关标识符的第7.6章）。</font><font style="vertical-align: inherit;">使用RegexBuddy创建了它，您可以在</font></font><a href="http://samples.geekality.net/js-identifiers" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://samples.geekality.net/js-identifiers</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到说明的导出</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>^[$_\p{L}][$_\p{L}\p{Mn}\p{Mc}\p{Nd}\p{Pc}\u200C\u200D]*+$
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，名称不能是以下保留字之一。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中断，执行，instanceof，typeof，case，其他，new，var，catch，finally，return，void，continue，for，switch，while，debugger，function，this，with，default，if，throw，delete in尝试，类，枚举，扩展，超级，常量，导出，导入，实现，让，私有，公共，收益，接口，包，保护，静态，空，真，假</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi猪猪猪猪</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript变量</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以以任何字母</font></font><code>$</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">、、或</font></font><code>_</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">字符</font><font style="vertical-align: inherit;">开头的变量</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">只要它不是以数字开头，就可以包含数字。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开始： </font></font><code>[a-z], $, _</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含： </font></font><code>[a-z], [0-9], $, _</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery的</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>_</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为您的库</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">它，使其与jQuery并存。</font><font style="vertical-align: inherit;">但是，您可以设置一个配置，以使jQuery不使用</font></font><code>$</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它将改为使用</font></font><code>jQuery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">为此，只需设置：</font></font></p>

<pre><code>jQuery.noConflict();
</code></pre>

<p><a href="http://docs.jquery.com/Using_jQuery_with_Other_Libraries" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明了如何执行此操作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三伽罗Harry</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，在正则表达式形式：</font></font><code>[a-zA-Z_$][0-9a-zA-Z_$]*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">换句话说，第一个字符可以是字母或_或$，其他字符可以是字母或_或$或数字。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然其他答案都指出您可以在JavaScript标识符中使用Unicode字符，但实际的问题是“在扩展库（如jQuery）的名称中应使用哪些字符？” </font><font style="vertical-align: inherit;">这是对该问题的答案。</font><font style="vertical-align: inherit;">您可以在标识符中使用Unicode字符，但不要这样做。</font><font style="vertical-align: inherit;">编码一直被搞砸。</font><font style="vertical-align: inherit;">将您的公共标识符保持在安全的32-126 ASCII范围内。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro乐</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JavaScript 1.5之前： </font></font><code>^[a-zA-Z_$][0-9a-zA-Z_$]*$</code></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">英文：</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">必须以美元符号，下划线或26个字符的字母中的一个大写或小写开头。</font><font style="vertical-align: inherit;">后续字符（如果有）可以是其中任何一个或十进制数字。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript 1.5及更高版本</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">*</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font><code>^[\p{L}\p{Nl}$_][\p{L}\p{Nl}$\p{Mn}\p{Mc}\p{Nd}\p{Pc}]*$</code></p>

<p>This is more difficult to express in English, but it is conceptually similar to the older syntax with the addition that the letters and digits can be from any language. After the first character, there  are also allowed additional underscore-like characters (collectively called “connectors”) and additional character combining marks (“modifiers”). (Other currency symbols are not included in this extended set.)</p>

<p>JavaScript 1.5 and later also allows Unicode escape sequences, <strong><em>provided that</em></strong> the result is a character that would be allowed in the above regular expression.</p>

<p>Identifiers also must not be a current reserved word or one that is considered for future use.</p>

<p>There is no practical limit to the length of an identifier. (Browsers vary, but you’ll safely have 1000 characters and probably several more orders of magnitude than that.)</p>

<p><strong>Links to the character categories:</strong></p>

<ul>
<li>Letters: <a href="http://www.fileformat.info/info/unicode/category/Lu/list.htm">Lu</a>, <a href="http://www.fileformat.info/info/unicode/category/Ll/list.htm">Ll</a>, <a href="http://www.fileformat.info/info/unicode/category/Lt/list.htm">Lt</a>, <a href="http://www.fileformat.info/info/unicode/category/Lm/list.htm">Lm</a>, <a href="http://www.fileformat.info/info/unicode/category/Lo/list.htm">Lo</a>, <a href="http://www.fileformat.info/info/unicode/category/Nl/list.htm">Nl</a><br>(combined in the regex above as “L”)</li>
<li>Combining marks (“modifiers”): <a href="http://www.fileformat.info/info/unicode/category/Mn/list.htm">Mn</a>, <a href="http://www.fileformat.info/info/unicode/category/Mc/list.htm">Mc</a></li>
<li>Digits: <a href="http://www.fileformat.info/info/unicode/category/Nd/list.htm">Nd</a></li>
<li>Connectors: <a href="http://www.fileformat.info/info/unicode/category/Pc/list.htm">Pc</a></li>
</ul>

<hr>

<p>*<strong>n.b.</strong> <em>This Perl regex is intended to describe the syntax only — it won’t work in JavaScript, which doesn’t (yet) include support for Unicode Properties. (There are some third-party packages that claim to add such support.)</em></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿蛋蛋凯</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，ECMAScript在第15页上说：标识符可以以$，下划线或UnicodeLetter开头，然后继续（恰好在其下）指定UnicodeLetter可以是Unicode分类中的任何字符，Lo，Ll。 ，Lu，Lt，Lm和Nl。</font><font style="vertical-align: inherit;">当您查找这些类别时，您会发现这不仅提供了拉丁字母，而且还提供了更多的可能性。</font><font style="vertical-align: inherit;">只需在Google中搜索“ unicode类别”，即可找到它们。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
