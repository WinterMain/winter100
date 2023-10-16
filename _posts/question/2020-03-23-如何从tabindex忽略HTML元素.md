---
layout: question
title:  如何从tabindex忽略HTML元素？
date:   2020-03-23T07:18:52.000Z
description: HTML中是否有任何方法告诉浏览器不允许对特定元素进行标签索引？在我的页面上，尽管有一个用jQuery呈现的杂耍，但是当您通过Tab进行制表时，您会在...
img: 
author: 伽罗
category: question
answer: 6
tags: html HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML中是否有任何方法告诉浏览器不允许对特定元素进行标签索引？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的页面上，尽管有一个用jQuery呈现的杂耍，但是当您通过Tab进行制表时，您会在按下Tab控件移动到页面上的下一个可见链接之前获得大量的制表符按下，因为所有通过制表的内容都被隐藏了。视觉上的用户。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2902篇《如何从tabindex忽略HTML元素？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需将属性添加</font></font><code>disabled</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到元素（或使用jQuery为您完成）。</font><font style="vertical-align: inherit;">禁用将使输入根本无法集中或选择。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果这些元素自然是按Tab键顺序排列的元素（如按钮和锚点），则使用tabindex = -1将它们从Tab键顺序中移除是一种可访问性。</font><font style="vertical-align: inherit;">如果它们提供重复的功能，则可以将它们从制表符顺序中删除是可以的，请考虑将aria-hidden = true添加到这些元素，以便辅助技术将其忽略。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy小卤蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="http://jehiah.cz/a/tabindex" rel="noreferrer"><code>tabindex="-1"</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><a href="http://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3C HTML5规范</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持负</font></font><code>tabindex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的值：</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果值为负整数</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
  ，则用户代理必须设置元素的tabindex焦点标志，但不允许使用顺序焦点导航访问该元素。</font></font></p>
</blockquote>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，尽管这是HTML5功能，可能无法在旧的浏览器上使用。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
为了符合</font></font><a href="http://www.w3.org/TR/html401/interact/forms.html#adef-tabindex" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">W3C HTML 4.01标准（自1999年起）</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，tabindex必须为正数。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是纯HTML中的用法示例。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;input /&gt;<font></font>
&lt;input tabIndex="-1" placeholder="NoTabIndex" /&gt;<font></font>
&lt;input /&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyL</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使</font></font><code>tabindex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在规范和HTML中都是小写</font><font style="vertical-align: inherit;">，也不要忘记</font><font style="vertical-align: inherit;">在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> /称为DOM的DOM中</font></font><code>tabIndex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要不介意尝试弄清楚为什么以编程方式更改的选项卡索引调用</font></font><code>element.tabindex = -1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法正常工作。</font><font style="vertical-align: inherit;">使用</font></font><code>element.tabIndex = -1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在不支持的浏览器中工作   </font></font><code>tabindex="-1"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，只需给那些需要跳过的事情设置</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个很高的tab索引</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，或许就能摆脱困境</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">例如，</font></font><code>tabindex="500"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上将对象的选项卡顺序移动到页面的末尾。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我这样做是为了获得一个较长的数据输入表单，并在其中插入了一个按钮。</font><font style="vertical-align: inherit;">这不是人们经常点击的按钮，所以我不希望他们无意间跳到该按钮并按Enter。</font></font><code>disabled</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为它是一个按钮，所以不起作用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法是添加</font></font><code>tabindex="-1"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">通过将其添加到特定元素，</font><font style="vertical-align: inherit;">键盘导航</font><font style="vertical-align: inherit;">将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法访问</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有一个伟大的文章，</font></font><a href="https://kolosek.com/tabindex/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以帮助你进一步了解</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">tabindex属性</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
