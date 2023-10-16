---
layout: question
title:  Vue.extend有什么用？
date:   2020-03-11T04:26:53.000Z
description: 这足够简单，但是我没有从文档中得到所需的答案。我正在学习Vue.js，但我不太了解Vue.extend的适用范围。我得到了Vue.component，但是...
img: 
author: 达蒙猪猪
category: question
answer: 2
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这足够简单，但是我没有从文档中得到所需的答案。</font><font style="vertical-align: inherit;">我正在学习Vue.js，但我不太了解Vue.extend的适用范围。我得到了Vue.component，但是我看不到</font></font><a href="https://vuejs.org/v2/api/#Vue-extend" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue.extend</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做了</font><font style="vertical-align: inherit;">什么</font><font style="vertical-align: inherit;">，而</font></font><a href="https://vuejs.org/v2/api/#Vue-component" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue.component</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有。</font><font style="vertical-align: inherit;">它仅仅是1.0版本的遗留功能吗？</font><font style="vertical-align: inherit;">如果没有，在Vue 2.0中它在哪里有用？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第675篇《Vue.extend有什么用？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无StafanTom</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了提供的答案之外，</font></font><code>Vue.extend()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用TypeScript </font><font style="vertical-align: inherit;">，还有一个实际的用例可以</font><font style="vertical-align: inherit;">直接</font><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在大多数情况下，建议在需要时从其他文件导入组件定义，而不是使用全局注册它们</font></font><code>Vue.component()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它可以使大型项目中的事情井井有条，并更容易跟踪问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有了正确的库， TypeScript可以看看你的组件定义，弄清组件的类型将是当它的初始化，意味着那么它可以检查您已经定义，看看它们是否有意义（也就是说，如果你引用的功能</font></font><code>this.foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有实际上是一个prop，数据字段，计算值或名为的方法</font></font><code>foo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果使用</font></font><code>Vue.component()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它，则可以做到这一点，但如果使用其他使组件可用的典型方式（即导出对象文字），则不能这样做。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，另一种选择是导出包裹在中的组件定义</font></font><code>Vue.extend()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">然后，TypeScript将能够将其识别为Vue组件并相应地运行其类型检查，但是您不必放弃导出组件的最佳实践模式，而不必在全局范围内进行注册。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy梅Green</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以前的Vuejs.org网站上的指南中有一个文档。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="http://optimizely.github.io/vuejs.org/guide/composition.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://optimizely.github.io/vuejs.org/guide/composition.html</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复制，</font><font style="vertical-align: inherit;">该文件是从Vuejs / Vuejs.org的Vuejs版本0.10.6分叉的。</font></font></p>

<blockquote>
  <p>It is important to understand the difference between <code>Vue.extend()</code>
  and <code>Vue.component()</code>. Since <code>Vue</code> itself is a constructor,
  <code>Vue.extend()</code> is a <strong>class inheritance method</strong>. Its task is to
  create a sub-class of <code>Vue</code> and return the constructor.
  <code>Vue.component()</code>, on the other hand, is an <strong>asset registration
  method</strong> similar to <code>Vue.directive()</code> and <code>Vue.filter()</code>. Its task is
  to associate a given constructor with a string ID so Vue.js can pick
  it up in templates. When directly passing in options to
  <code>Vue.component()</code>, it calls <code>Vue.extend()</code> under the hood.</p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue.js支持两种不同的API范例：基于类的命令式Backbone样式API，以及基于标记的声明式Web组件样式API。</font><font style="vertical-align: inherit;">如果您感到困惑，请考虑如何使用</font></font><code>new Image()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>&lt;img&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">创建图像元素</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">每种方法都有其自身的用处，Vue.js尝试同时提供这两种方法以最大程度地提高灵活性。</font></font></p>
</blockquote></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
