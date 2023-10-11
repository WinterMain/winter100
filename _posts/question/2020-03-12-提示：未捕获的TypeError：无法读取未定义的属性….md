---
layout: question
title:  提示：未捕获的TypeError：无法读取未定义的属性…
date:   2020-03-12T09:38:13.000Z
description: 我正在使用vue\`2.1.3和vue官方Webpack模板来构建应用程序。在本地进行开发时，经常会看到警告Uncaught TypeError  Ca...
img: 
author: StafanPro小哥
category: question
answer: 2
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用vue@2.1.3和</font></font><a href="https://github.com/vuejs-templates/webpack" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vue官方Webpack模板</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来构建应用程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在本地进行开发时，经常会看到警告</font></font><code>Uncaught TypeError: Cannot read property ... of undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是可以成功呈现HTML。</font><font style="vertical-align: inherit;">但是，将HTML部署到带</font></font><code>npm run build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令的</font><font style="vertical-align: inherit;">Netlify时无法呈现HTML </font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">因此，我必须认真对待这个警告。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我从</font></font><a href="https://forum-archive.vuejs.org/topic/3953/cannot-read-property-warning/2" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解到这是因为“呈现组件时数据不完整，而是从API加载的”。</font><font style="vertical-align: inherit;">解决方案是“ </font></font><code>v-if</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅在加载数据后才</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">渲染模板的那一部分”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有两个问题：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试环绕</font></font><code>v-if</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生警告的多条语句，但个人认为此解决方案很冗长。</font><font style="vertical-align: inherit;">有没有一种整洁的方法？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地开发中的“警告”变成生产中的“致命错误”（无法呈现HTML）。</font><font style="vertical-align: inherit;">如何使它们相同？</font><font style="vertical-align: inherit;">例如他们两个都发出警告或错误？</font></font></li>
</ol></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1228篇《提示：未捕获的TypeError：无法读取未定义的属性…》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam小哥逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需</font></font><code>v-if</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对依赖于该AJAX调用的模板中的所有元素</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">一个公共父元素，而不是围绕每个元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，而不是像这样：</font></font></p>

<pre><code>&lt;div&gt;<font></font>
  &lt;h1 v-if="foo.title"&gt;{{ foo.title }}&lt;/h1&gt;<font></font>
  &lt;p v-if="foo.description"&gt;{{ foo.description }}&lt;/p&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做</font></font></p>

<pre><code>&lt;div&gt;<font></font>
  &lt;template v-if="foo"&gt;<font></font>
    &lt;h1&gt;{{ foo.title }}&lt;/h1&gt;<font></font>
    &lt;p&gt;{{ foo.description }}&lt;/p&gt;<font></font>
  &lt;/template&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi泡芙Pro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否尝试初始化所需的所有数据？</font><font style="vertical-align: inherit;">例如，如果需要</font></font><code>a</code> <code>b</code> <code>c</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以执行以下操作：</font></font></p>

<pre><code>new Vue({<font></font>
  data: {<font></font>
    a: 1,<font></font>
    b: '',<font></font>
    c: {}<font></font>
  },<font></font>
  created(){<font></font>
    // send a request to get result, and assign the value to a, b, c here<font></font>
<font></font>
  }<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样您就不会</font></font><code>xx is undefined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出错</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
