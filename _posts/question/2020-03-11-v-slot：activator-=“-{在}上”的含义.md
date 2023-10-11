---
layout: question
title:  v-slot：activator =“ {在}上”的含义
date:   2020-03-11T07:03:31.000Z
description: 查看Vuetify示例代码v-toolbar的目的是v-slot activator="{ on }"什么？例如：<template v-slot a...
img: 
author: 老丝村村
category: question
answer: 2
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看</font></font><a href="https://vuetifyjs.com/en/components/toolbars#toolbar" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vuetify示例代码</font></font><code>v-toolbar</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的目的是</font></font><code>v-slot:activator="{ on }"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么？</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;template v-slot:activator="{ on }"&gt;<font></font>
  &lt;v-toolbar-title v-on="on"&gt;<font></font>
    &lt;span&gt;All&lt;/span&gt;<font></font>
    &lt;v-icon dark&gt;arrow_drop_down&lt;/v-icon&gt;<font></font>
  &lt;/v-toolbar-title&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
  export default {<font></font>
    data: () =&gt; ({<font></font>
      items: [<font></font>
        'All', 'Family', 'Friends', 'Coworkers'<font></font>
      ]<font></font>
    })<font></font>
  }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知，</font></font><code>on</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它在任何地方都不是已定义的变量，因此我看不到它是如何工作的。</font><font style="vertical-align: inherit;">当我在项目中尝试使用Internet Explorer时，Internet Explorer会引发错误</font></font><code>&lt;template v-slot:activator="{ on }"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是如果将其删除，则会呈现页面。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第710篇《v-slot：activator =“ {在}上”的含义》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁JinJinHarry</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为最初的问题是关于理解“ on”对象的。</font><font style="vertical-align: inherit;">最好在这里解释：</font></font></p>

<p><a href="https://github.com/vuetifyjs/vuetify/issues/6866" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/vuetifyjs/vuetify/issues/6866</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本质上，“ on”是从激活器传入的道具。</font><font style="vertical-align: inherit;">v-on =“ on”的作用是将prop上的内容绑定到组件。</font><font style="vertical-align: inherit;">“ on”本身就是从激活器传递的所有事件侦听器。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi猪猪Green</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能会参考以下示例：</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;v-toolbar color="grey darken-1" dark&gt;<font></font>
  &lt;v-menu :nudge-width="100"&gt;<font></font>
    &lt;template v-slot:activator="{ on }"&gt;<font></font>
      &lt;v-toolbar-title v-on="on"&gt;<font></font>
        &lt;span&gt;All&lt;/span&gt;<font></font>
        &lt;v-icon dark&gt;arrow_drop_down&lt;/v-icon&gt;<font></font>
      &lt;/v-toolbar-title&gt;<font></font>
    &lt;/template&gt;<font></font>
<font></font>
    ...<font></font>
  &lt;/v-menu&gt;<font></font>
&lt;/v-toolbar&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下行声明了一个</font><font style="vertical-align: inherit;">名为</font><font style="vertical-align: inherit;">的</font></font><a href="https://vuejs.org/v2/guide/components-slots.html#Scoped-Slots" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作用域插槽</font></font></a><font style="vertical-align: inherit;"></font><code>activator</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并提供了一个范围对象（来自</font></font><code>VMenu</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），其中包含一个名为的属性</font></font><code>on</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;template v-slot:activator="{ on }"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font><font style="vertical-align: inherit;">在</font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Browser_compatibility" rel="noreferrer"><font style="vertical-align: inherit;">IE不支持</font></a><font style="vertical-align: inherit;">的范围对象上</font><font style="vertical-align: inherit;">使用了</font></font><a href="https://vuejs.org/v2/guide/components-slots.html#Destructuring-Slot-Props" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解构语法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Browser_compatibility" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于IE，您必须</font></font><code>on</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从范围对象本身</font><font style="vertical-align: inherit;">取消引用</font><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;template v-slot:activator="scope"&gt;<font></font>
  &lt;v-toolbar-title v-on="scope.on"&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理想的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> IMO解决方案是使用</font></font><a href="https://cli.vuejs.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue CLI</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成的项目，该项目包含Babel预设（</font></font><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app" rel="noreferrer"><code>@vue/babel-preset-app</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），以自动包含</font></font><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app#targets" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目标</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器</font><font style="vertical-align: inherit;">所需的转换/多边形</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在这种情况下，</font></font><a href="https://babeljs.io/docs/en/babel-plugin-transform-es2015-destructuring" rel="noreferrer"><code>babel-plugin-transform-es2015-destructuring</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将在构建过程中自动应用。</font></font></p>

<h2><font style="vertical-align: inherit;"></font><code>activator</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插槽</font><font style="vertical-align: inherit;">上的详细信息</font></font></h2>

<p><a href="https://vuetifyjs.com/en/components/menus#slots" rel="noreferrer"><code>VMenu</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许用户指定名为的带槽模板</font></font><code>activator</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其中包含在某些事件（例如</font></font><code>click</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">激活/打开菜单的组件</font><font style="vertical-align: inherit;">。</font><a href="https://github.com/vuetifyjs/vuetify/blob/1b4dbae58cbfdeda4edbc14104a53ce9c0a36f62/packages/vuetify/src/components/VMenu/mixins/menu-generators.js#L22" rel="noreferrer"><font style="vertical-align: inherit;">通过一个对象</font></a><font style="vertical-align: inherit;">（提供给</font><font style="vertical-align: inherit;">插槽）</font></font><code>VMenu</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为这些事件提供侦听器</font><font style="vertical-align: inherit;">：</font></font><a href="https://github.com/vuetifyjs/vuetify/blob/1b4dbae58cbfdeda4edbc14104a53ce9c0a36f62/packages/vuetify/src/components/VMenu/mixins/menu-generators.js#L22" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><code>activator</code><font style="vertical-align: inherit;"></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;v-menu&gt;<font></font>
  &lt;template v-slot:activator="scopeDataFromVMenu"&gt;<font></font>
    &lt;!-- slot content goes here --&gt;<font></font>
  &lt;/template&gt;<font></font>
&lt;/v-menu&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">广告位内容可以访问</font></font><code>VMenu</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的事件监听器，如下所示：</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;v-menu&gt;<font></font>
  &lt;template v-slot:activator="scopeDataFromVMenu"&gt;<font></font>
    &lt;button v-on="scopeDataFromVMenu.on"&gt;Click&lt;/button&gt;<font></font>
  &lt;/template&gt;<font></font>
&lt;/v-menu&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了提高可读性，还可以</font><font style="vertical-align: inherit;">在模板中</font><font style="vertical-align: inherit;">对范围内的数据进行</font></font><a href="https://vuejs.org/v2/guide/components-slots.html#Destructuring-Slot-Props" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解构</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;!-- equivalent to above --&gt;<font></font>
&lt;v-menu&gt;<font></font>
  &lt;template v-slot:activator="{ on }"&gt;<font></font>
    &lt;button v-on="on"&gt;Click&lt;/button&gt;<font></font>
  &lt;/template&gt;<font></font>
&lt;/v-menu&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">范围对象的侦听器将传递给</font></font><code>&lt;button&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">with </font></font><a href="https://vuejs.org/v2/api/#v-on" rel="noreferrer"><code>v-on</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的对象语法，该语法将一个或多个事件/侦听器对绑定到该元素。</font><font style="vertical-align: inherit;">对于此值</font></font><code>on</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint-override"><code>{<font></font>
  click: activatorClickHandler // activatorClickHandler is an internal VMenu mixin<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...按钮的点击处理程序已绑定到</font></font><code>VMenu</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
