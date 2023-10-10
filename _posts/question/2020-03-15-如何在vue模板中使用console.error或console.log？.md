---
layout: question
title:  如何在vue模板中使用console.error或console.log？
date:   2020-03-15T10:33:27.000Z
description: 我有一个Vue组件 <form \`keydown="console.error($event.target.name);">给  app....
img: 
author: 米亚阿飞
category: question
answer: 2
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个Vue组件</font></font></p>

<pre><code> &lt;form @keydown="console.error($event.target.name);"&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">app.js：47961 [Vue警告]：属性或方法“控制台”未在实例上定义，但在渲染期间被引用。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">window.console也不起作用</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在模板中使用控制台和窗口进行调试的正确方法是什么？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Tom逆天</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">向模板提供全局对象的最简单方法是将它们放在中</font></font><code>computed</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如下所示：</font></font></p>

<p><code>console: () =&gt; console</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">同样</font></font><code>window</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></p>

<pre><code>computed: {<font></font>
  console: () =&gt; console,<font></font>
  window: () =&gt; window,<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"></font><a href="https://codesandbox.io/s/rough-resonance-z19kd" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到它</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里小哥</span>
            <span class="discuss-time">2020.03.15</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会为控制台模板变量设置一个吸气剂：</font></font></p>

<pre><code>    get console() { return window.console; }
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
