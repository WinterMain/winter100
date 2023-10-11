---
layout: question
title:  Vuetify-清除v-text-field时如何触发方法
date:   2020-03-20T06:22:59.000Z
description: Vuetify清除文本字段时，有什么方法可以调用方法？<v-text-field    class="mt-2 mb-0"    clearabl...
img: 
author: 小胖神奇前端
category: question
answer: 2
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vuetify清除文本字段时，有什么方法可以调用方法？</font></font></p>

<pre><code>&lt;v-text-field<font></font>
    class="mt-2 mb-0"<font></font>
    clearable<font></font>
    solo<font></font>
    v-model="searchQuery"<font></font>
    append-icon="search"<font></font>
    @click:append-outer="searchCos"<font></font>
   label="Nom de compagnies ou mots-clés"&gt;<font></font>
 &lt;/v-text-field&gt;<font></font>
<font></font>
...<font></font>
onClear() {<font></font>
doSomethingHere<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">弗朗西斯</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2547篇《Vuetify-清除v-text-field时如何触发方法》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙神乐GO</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>clear-icon-cb</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">道具。</font><font style="vertical-align: inherit;">当单击清除图标时，这使您可以使用自定义回调函数。</font></font></p>

<pre><code>&lt;v-text-field<font></font>
  clearable<font></font>
  :clear-icon-cb="onClearClicked"&gt;<font></font>
&lt;/v-text-field&gt;<font></font>
<font></font>
onClearClicked () {<font></font>
  // do something<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用，</font></font><code>@click:clear="()"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样就可以在清除文本的同时调用该函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是例子</font></font></p>

<p><a href="https://codepen.io/anon/pen/ePmLOg?editors=1010" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://codepen.io/anon/pen/ePmLOg?editors=1010</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
