---
layout: question
title:  使用vuetifyJS数据表动态构建表
date:   2020-03-18T11:16:33.000Z
description: 我有一个带有动态更改列的表。因此，无法以这种方式对表格模板进行硬编码-<template>  <v-data-table     headers=...
img: 
author: L卡卡西米亚
category: question
answer: 2
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个带有动态更改列的表。</font><font style="vertical-align: inherit;">因此，无法以这种方式对表格模板进行硬编码-</font></font></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;v-data-table<font></font>
    :headers="headers"<font></font>
    :items="items"<font></font>
    hide-actions<font></font>
    class="elevation-1"<font></font>
  &gt;<font></font>
    &lt;template slot="items" slot-scope="props"&gt;<font></font>
      **&lt;td&gt;{{ props.item.name }}&lt;/td&gt;<font></font>
      &lt;td class="text-xs-right"&gt;{{ props.item.calories }}&lt;/td&gt;<font></font>
      &lt;td class="text-xs-right"&gt;{{ props.item.fat }}&lt;/td&gt;<font></font>
      &lt;td class="text-xs-right"&gt;{{ props.item.carbs }}&lt;/td&gt;<font></font>
      &lt;td class="text-xs-right"&gt;{{ props.item.protein }}&lt;/td&gt;<font></font>
      &lt;td class="text-xs-right"&gt;{{ props.item.iron }}&lt;/td&gt;**<font></font>
    &lt;/template&gt;<font></font>
  &lt;/v-data-table&gt;<font></font>
&lt;/template&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在响应中得到了这部分的代码。</font><font style="vertical-align: inherit;">无法弄清楚如何向前交流。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2182篇《使用vuetifyJS数据表动态构建表》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐小哥猴子</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在看同一个问题，找到了一种避免对标记中的数据结构进行硬编码的典型方法。</font><font style="vertical-align: inherit;">您可以使用标头的内容通过v-for循环使用脚本来编写项目模板，如下所示：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;div id="app"&gt;<font></font>
  &lt;v-app id="inspire"&gt;<font></font>
    &lt;v-data-table<font></font>
      :headers="headers"<font></font>
      :items="desserts"<font></font>
      hide-actions<font></font>
      class="elevation-1"<font></font>
    &gt;<font></font>
      &lt;template slot="items" slot-scope="myprops"&gt;<font></font>
        &lt;td v-for="header in headers"&gt;<font></font>
        {{ myprops.item[header.value] }}<font></font>
        &lt;/td&gt;<font></font>
      &lt;/template&gt;<font></font>
    &lt;/v-data-table&gt;<font></font>
  &lt;/v-app&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞宝儿猴子</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这个问题很旧，但是我遇到了同样的问题，因此偶然发现了该页面。</font><font style="vertical-align: inherit;">幸运的是，我已经</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决了我的问题，方法</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是编辑Bart给出的代码，使其符合Vue 2中的最新语法。</font></font></p>

<pre><code>&lt;v-data-table :headers="headers"<font></font>
 :items="myDataObject"<font></font>
 class="elevation-24"&gt;<font></font>
    &lt;template v-slot:body="props"&gt;<font></font>
      &lt;tr v-for="index in props.items"&gt;<font></font>
        &lt;td v-for="header in headers" class="text-left font-weight-black"&gt;<font></font>
          {{ index[header.value]}}<font></font>
        &lt;/td&gt;<font></font>
      &lt;/tr&gt;<font></font>
    &lt;/template&gt;<font></font>
&lt;/v-data-table&gt;<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
