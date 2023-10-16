---
layout: question
title:  反应功能性无状态组件，PureComponent，Component；有什么区别，什么时候应该使用什么？
date:   2020-03-11T02:54:09.000Z
description: 从React v15.3.0知道，我们有了一个名为PureComponent的新基类，以扩展内置的PureRenderMixin。我了解的是，在幕后，它对...
img: 
author: 米亚十三Harry
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React v15.3.0</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">知道</font><font style="vertical-align: inherit;">，我们有了一个名为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PureComponent</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的新基类，</font><font style="vertical-align: inherit;">以扩展</font><font style="vertical-align: inherit;">内置的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PureRenderMixin</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我了解的是，在幕后，它对内部的道具进行了浅浅的比较</font></font><code>shouldComponentUpdate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我们有3种方法来定义React组件：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能性无状态组件，不扩展任何类</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展</font></font><code>PureComponent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类</font><font style="vertical-align: inherit;">的组件</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展</font></font><code>Component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类的</font><font style="vertical-align: inherit;">常规组件</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一段时间以前，我们曾经将无状态组件称为“纯组件”，甚至称为“哑组件”。</font><font style="vertical-align: inherit;">似乎“纯”一词的整个定义现在已经在React中改变了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管我了解这三者之间的基本区别，但是我仍然不确定</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">何时选择什么</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">另外，每种性能对性能的影响和权衡如何？</font></font></p>

<hr>

<h3><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些是我希望得到澄清的问题：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我应该选择将简单的组件定义为功能性的（出于简化的目的）还是扩展</font></font><code>PureComponent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类的（出于性能的考虑）？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我为失去的简单性而获得了真正的性能提升吗？</font></font></li>
<li><font style="vertical-align: inherit;"></font><code>Component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我总是可以使用</font></font><code>PureComponent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获得更好的性能</font><font style="vertical-align: inherit;">时，</font><font style="vertical-align: inherit;">是否需要扩展常规</font><font style="vertical-align: inherit;">类</font><font style="vertical-align: inherit;">？</font></font></li>
</ul></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第565篇《反应功能性无状态组件，PureComponent，Component；有什么区别，什么时候应该使用什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><ul>
<li><p><code>React.Component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是默认的“常规”组件。</font><font style="vertical-align: inherit;">您可以使用</font></font><code>class</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字和</font><font style="vertical-align: inherit;">声明它们</font></font><code>extends React.Component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">将它们视为具有生命周期方法，事件处理程序以及任何方法的类。  </font></font></p></li>
<li><p><code>React.PureComponent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>React.Component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实现</font></font><code>shouldComponentUpdate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与做它的一个比较浅的功能</font></font><code>props</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">你必须使用</font></font><code>forceUpdate()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果你知道组件有道具或状态嵌套数据更改，您希望重新呈现。</font><font style="vertical-align: inherit;">因此，如果当您作为道具传递或设置为状态的数组或对象发生变化时需要重新渲染组件，则它们并不是很好。  </font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能组件是没有生命周期功能的组件。</font><font style="vertical-align: inherit;">它们据说是无状态的，但是它们是如此的干净整洁，以至于我们现在有了钩子（从React 16.8起），因此您仍然可以有一个状态。</font><font style="vertical-align: inherit;">所以我想它们只是“干净的组件”。</font></font></p></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不是反应超常的天才，但据我了解，我们可以在以下情况下使用每个组件</font></font></p>

<ol>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无状态组件-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   这些组件没有生命周期，因此应在呈现父组件的重复元素时使用这些组件，例如呈现仅显示信息且没有任何动作要执行的文本列表。</font></font></p></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">纯组件-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些是具有生命周期的项目，并且在提供一组特定的道具时，它们将始终返回相同的结果。</font><font style="vertical-align: inherit;">当显示结果列表或不包含复杂子元素的特定对象数据时，可以使用这些组件，并用于执行只会影响自身的操作。</font><font style="vertical-align: inherit;">这样的用户卡显示列表或产品卡列表（基本产品信息），用户只能执行的操作是单击以查看详细信息页面或添加到购物车。</font></font></p></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">普通组件或复杂组件-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用术语“复杂组件”是因为它们通常是页面级组件，并且包含许多子组件，并且由于每个子组件都可以以自己独特的方式运行，因此您不能百分百确定它会在给定状态下呈现相同的结果。</font><font style="vertical-align: inherit;">正如我通常所说的，这些应该用作容器组件</font></font></p></li>
</ol></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
