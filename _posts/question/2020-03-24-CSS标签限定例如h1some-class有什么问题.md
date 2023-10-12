---
layout: question
title:  CSS标签限定（例如h1.some-class）有什么问题？
date:   2020-03-24T07:31:21.000Z
description: 有人可以向我解释为什么标签合格是CSS不良做法的原因吗？为什么在带有自解释元素的情况下tag.class不好？例如<section class="ca...
img: 
author: 番长樱梅
category: question
answer: 2
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人可以向我解释为什么标签合格是CSS不良做法的原因吗？</font><font style="vertical-align: inherit;">为什么在带有自解释元素的情况下tag.class不好？</font><font style="vertical-align: inherit;">例如</font></font></p>

<pre><code>&lt;section class="carousel-item"&gt;<font></font>
<font></font>
  &lt;header class="header of-carousel"&gt;<font></font>
    &lt;h2 class="heading of-carousel"&gt;Services&lt;/h2&gt;<font></font>
  &lt;/header&gt;<font></font>
    …<font></font>
  &lt;footer class="footer of-carousel"&gt;<font></font>
    …<font></font>
  &lt;/footer&gt;<font></font>
<font></font>
&lt;/section&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么它比带有上下文修饰符的DRY和简洁代码更好？</font></font></p>

<pre><code>&lt;section class="carousel-item"&gt;<font></font>
<font></font>
  &lt;header class="of-carousel"&gt;<font></font>
    &lt;h2 class="of-carousel"&gt;Services&lt;/h2&gt;<font></font>
  &lt;/header&gt;<font></font>
    …<font></font>
  &lt;footer class="of-carousel"&gt;<font></font>
    …<font></font>
  &lt;/footer&gt;<font></font>
<font></font>
&lt;/section&gt;<font></font>
<font></font>
.of-carousel {<font></font>
  header.&amp; {…}<font></font>
  h2.&amp; {…}<font></font>
  footer.&amp; {…}<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至</font></font></p>

<pre><code>section.carousel-item<font></font>
  header<font></font>
    h2<font></font>
  footer<font></font>
<font></font>
.carousel-item {<font></font>
  header {…}<font></font>
      h2 {…}<font></font>
  footer {…}<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看到很多人沉迷于BEM，但是我不明白为什么？</font><font style="vertical-align: inherit;">他们的选择器非常丑陋，尤其是在HTTP-2时代。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3446篇《CSS标签限定（例如h1.some-class）有什么问题？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">BEM背后的原理是删除CSS文档中的所有实际层次结构，并对要设置样式的每个元素只有一个明确的规则。</font><font style="vertical-align: inherit;">这就是效率高的原因-渲染器无需遍历DOM来处理子规则，也不必尝试与多个限定符进行匹配（这就是为什么将标记限定符与类选择器一起使用被认为是“不好的” ）。</font><font style="vertical-align: inherit;">但是我确实同意，BEM的标准命名约定非常难看。</font><font style="vertical-align: inherit;">您可以根据自己的喜好进行更改。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要了解CSS规则是从右到左处理的。</font><font style="vertical-align: inherit;">以您的示例为例：</font></font></p>

<pre><code>.carousel-item {<font></font>
    header {…}<font></font>
    h2 {…}<font></font>
    footer {…}<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将导致渲染器来匹配</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有的</font></font></em> <code>&lt;header&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>&lt;h2&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>&lt;footer&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">元素第一。</font><font style="vertical-align: inherit;">使用这些匹配项，它将尝试找到匹配的父项</font></font><code>.carousel-item</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并一路迭代到文档的根目录，直到找到一个为止。</font><font style="vertical-align: inherit;">如果将这种样式应用于深层嵌套的文档，</font></font><code>&lt;h2&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而</font><font style="vertical-align: inherit;">文档中</font></font><code>&lt;header&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有包含</font><font style="vertical-align: inherit;">多个</font><font style="vertical-align: inherit;">元素，则</font></font><code>.carousel-item</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意味着浪费大量的查找内容。</font><font style="vertical-align: inherit;">简单地说：这不是很有效。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过使用直接子选择器（&gt;）来减轻这种影响，因为它不会尝试遍历整个DOM；</font><font style="vertical-align: inherit;">它只会尝试第一个父母。</font><font style="vertical-align: inherit;">BEM完全避免了此问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，现在这是一个非常小的问题，与非最佳CSS相比，处理客户端JavaScript可能花费更多的CPU周期。</font><font style="vertical-align: inherit;">但是，如果要构建更大的东西，请牢记这是一件好事。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该避免嵌套，这样可以最大程度地减少其他规则相互冲突的机会。</font><font style="vertical-align: inherit;">确保我们的CSS模块在任何情况下看起来都一样。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.block__elem-如果不使用多个嵌套元素，则修饰符语法并不难看。 </font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
