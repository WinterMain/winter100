---
layout: question
title:  如何在单文件组件中扩展另一个VueJS组件？（ES6 vue-loader）
date:   2020-03-12T03:10:35.000Z
description: 我正在使用vue-loader（http //vuejs.github.io/vue-loader/start/spec.html）构造\*.vue单文件组...
img: 
author: 西门达蒙
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用vue-loader（</font></font><a href="http://vuejs.github.io/vue-loader/start/spec.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://vuejs.github.io/vue-loader/start/spec.html</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）构造</font></font><code>*.vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单文件组件，但是我在扩展单文件组件的过程中遇到麻烦从另一个。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果一个组件遵循规范</font></font><code>export default { [component "Foo" definition] }</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我认为这只是导入该组件的问题（就像处理任何子组件一样），然后</font></font><code>export default Foo.extend({ [extended component definition] })</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，这不起作用。</font><font style="vertical-align: inherit;">谁能提供建议？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第927篇《如何在单文件组件中扩展另一个VueJS组件？（ES6 vue-loader）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiGreen</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会避免使用Vue的“扩展”功能，只是因为它是Vue的一个命名不佳的方法。</font><font style="vertical-align: inherit;">它实际上并没有扩展任何东西，就继承而言。</font><font style="vertical-align: inherit;">它所做的正是mixin所做的，它将两个组件合并在一起。</font><font style="vertical-align: inherit;">它与模板代码无关，后者也不可扩展。</font><font style="vertical-align: inherit;">“扩展” Vue方法应该称为“合并”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，Vue必须使用DOM的层次结构，因此它构成了DOM。</font><font style="vertical-align: inherit;">同样的想法应该统治您的SFC建设。</font><font style="vertical-align: inherit;">将组件混合器用于基本行为，并在需要时将混合器添加到您的组件中，同时将最小的公共部分组合成更大的部分，同时将模板代码保持在最低限度。</font><font style="vertical-align: inherit;">在编写SFC时，您应该考虑“精简视图，考虑模型”。</font><font style="vertical-align: inherit;">:)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamStafan十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确的方法是使用mixins：</font><a href="http://vuejs.org/guide/mixins.html" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://vuejs.org/guide/mixins.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//vuejs.org/guide/mixins.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将mixin视为可以扩展的抽象组件。</font><font style="vertical-align: inherit;">因此，您可以创建一个同时具有您想要的任何功能的mixin，然后将其应用于每个组件。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
