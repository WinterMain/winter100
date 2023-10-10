---
layout: question
title:  CSS属性值中的！default是什么意思？
date:   2020-03-18T09:00:33.000Z
description: twitter引导程序代码具有许多CSS属性，\!default最后带有一个。例如p {  color  white \!default;}...
img: 
author: 逆天Eva
category: question
answer: 2
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">twitter引导程序代码具有许多CSS属性，</font></font><code>!default</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后</font><font style="vertical-align: inherit;">带有一个</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如</font></font></p>

<pre><code>p {<font></font>
  color: white !default;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">怎么</font></font><code>!default</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">办？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不好说不清楚。</font><font style="vertical-align: inherit;">我正在使用Bootstrap的SASS部分。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村西里</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p>You can find the following exact definition and a decent explanation in <a href="https://sass-lang.com/documentation/variables" rel="nofollow noreferrer">sass-lang</a> website in its doc section (variable) - default value:</p>

<p><em>Normally when you assign a value to a variable, if that variable already had a value, its old value is overwritten. But if you’re writing a Sass library, you might want to allow your users to configure your library’s variables before you use them to generate CSS.
To make this possible, Sass provides the !default flag. This assigns a value to a variable only if that variable isn’t defined or its value is null. Otherwise, the existing value will be used.</em></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门神乐</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知，Twitter Bootstrap使用LESS。</font><font style="vertical-align: inherit;">另一方面，</font></font><a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variable_defaults_default" rel="noreferrer"><code>!default</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它实际上是Sass的一部分，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于为Sass变量（</font></font><code>$var</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）提供默认值，这将使其在给定的上下文中无效，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使在Sass中也是如此</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，我</font></font><code>!default</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://lesscss.org" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">LESS文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找不到任何引用</font><font style="vertical-align: inherit;">，据我所知，它仅属于Sass。</font><font style="vertical-align: inherit;">您确定在Bootstrap的源代码中找到了这个吗？</font><font style="vertical-align: inherit;">因为老实说，我不记得在Bootstrap的样式表中看到Sass / SCSS代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就其价值而言，</font></font><code>!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS中</font><font style="vertical-align: inherit;">唯一以开头的有效令牌</font><font style="vertical-align: inherit;">是</font></font><code>!important</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="http://www.w3.org/TR/CSS21/cascade.html#important-rules" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能已经知道了</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
