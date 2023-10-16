---
layout: question
title:  如何禁用vue.js的<template>中的段落的eslint规则最大行长？
date:   2020-03-12T16:33:11.000Z
description: 我正在使用airbnb eslint，目前出现错误：  错误：第6行超出path / to / file.vue：6：1处的最大行长度100（max...
img: 
author: 飞云
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用airbnb eslint，目前出现错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：第6行超出path / to / file.vue：6：1处的最大行长度100（max-len）：</font></font></p>
</blockquote>

<pre><code>&lt;template lang="pug"&gt;<font></font>
  div<font></font>
    .container<font></font>
      .row<font></font>
        .col-xl-10.mx-auto<font></font>
          p Please let us know how you got here, and use the header buttons to navigate back to safe harbor.<font></font>
&lt;/template&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法为上述段落文本禁用皮棉？</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
另外，如何将线长从100增加到120？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1355篇《如何禁用vue.js的<template>中的段落的eslint规则最大行长？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小梅Green</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将其添加到您的ESLint规则中：</font></font></p>

<pre><code>rules: {<font></font>
  "vue/max-attributes-per-line": "off"<font></font>
}<font></font>
</code></pre>

<p>This worked for me (even if I rather set it on for my projects).<br>
You can find more information <a href="https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/max-attributes-per-line.md" rel="nofollow noreferrer">here</a> if you want.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子蛋蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><code>eslint-plugin-vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&gt; =，</font></font><code>4.1.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用指令注释禁用eslint。</font></font></p>

<p><a href="https://github.com/vuejs/eslint-plugin-vue/commit/ad84e0ba6d81f24583e65fc70b1d9803d73d3ed9" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/vuejs/eslint-plugin-vue/commit/ad84e0ba6d81f24583e65fc70b1d9803d73d3ed9</font></font></a></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;!-- eslint-disable-next-line vue/max-attributes-per-line --&gt;<font></font>
  &lt;div a="1" b="2" c="3" d="4"&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
