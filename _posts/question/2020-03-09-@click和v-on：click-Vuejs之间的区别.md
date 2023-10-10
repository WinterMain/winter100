---
layout: question
title:  \`click和v-on：click Vuejs之间的区别
date:   2020-03-09T15:38:42.000Z
description: 问题应该足够清楚 )。但我可以看到有人在使用：<button \`click="function()">press</button>有人使用：<...
img: 
author: 阿飞古一A
category: question
answer: 2
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题应该足够清楚:)。</font><font style="vertical-align: inherit;">但我可以看到有人在使用：</font></font></p>

<p><code>&lt;button @click="function()"&gt;press&lt;/button&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人使用：</font></font></p>

<p><code>&lt;button v-on:click="function()"&gt;press&lt;/button&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但实际上两者之间有什么区别（如果存在）</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony小卤蛋</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者之间没有区别，一个只是第二个的简写。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v前缀用作视觉提示，用于标识模板中特定于Vue的属性。</font><font style="vertical-align: inherit;">当您使用Vue.js将动态行为应用于某些现有标记时非常有用，但对于某些常用指令可能会感到冗长。</font><font style="vertical-align: inherit;">同时，在构建由Vue.js管理每个模板的SPA时，对v-前缀的需求变得不那么重要。</font></font></p>
</blockquote>

<pre class="lang-html prettyprint-override"><code>&lt;!-- full syntax --&gt;<font></font>
&lt;a v-on:click="doSomething"&gt;&lt;/a&gt;<font></font>
&lt;!-- shorthand --&gt;<font></font>
&lt;a @click="doSomething"&gt;&lt;/a&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料来源：</font></font><a href="https://vuejs.org/v2/guide/syntax.html#v-on-Shorthand" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">官方文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们看起来可能与普通的HTML有所不同，但是：和@是属性名称的有效字符，所有受Vue.js支持的浏览器都可以正确解析它。</font><font style="vertical-align: inherit;">此外，它们不会出现在最终的渲染标记中。</font><font style="vertical-align: inherit;">速记语法完全是可选的，但是稍后您将进一步了解其用法时，可能会喜欢它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料来源：</font></font><a href="https://vuejs.org/v2/guide/syntax.html#v-on-Shorthand" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">官方文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
