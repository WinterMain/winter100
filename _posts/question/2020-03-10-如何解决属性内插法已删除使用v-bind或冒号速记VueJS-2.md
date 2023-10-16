---
layout: question
title:  如何解决属性内插法已删除。使用v-bind或冒号速记？Vue.JS 2
date:   2020-03-10T06:05:46.000Z
description: 我的Vue组件是这样的：<template>    <div>        <div class="panel-group" v-for="it...
img: 
author: 猪猪蛋蛋
category: question
answer: 2
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的Vue组件是这样的：</font></font></p>

<pre><code>&lt;template&gt;<font></font>
    &lt;div&gt;<font></font>
        &lt;div class="panel-group" v-for="item in list"&gt;<font></font>
            ...<font></font>
            &lt;div class="panel-body"&gt;<font></font>
                &lt;a role="button" data-toggle="collapse" href="#purchase-{{ item.id }}" class="pull-right" aria-expanded="false" aria-controls="collapseOne"&gt;<font></font>
                    Show<font></font>
                &lt;/a&gt;<font></font>
            &lt;/div&gt;<font></font>
            &lt;div id="purchase-{{ item.id }}" class="table-responsive panel-collapse collapse" role="tabpanel"&gt;<font></font>
            ...<font></font>
            &lt;/div&gt;<font></font>
        &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
    export default {<font></font>
        ...<font></font>
        computed: {<font></font>
            list: function() {<font></font>
                return this.$store.state.transaction.list<font></font>
            },<font></font>
            ...<font></font>
        }<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行时，存在如下错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue模板语法错误：</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">id =“ purchase-{{item.id}}”：属性内插已删除。</font><font style="vertical-align: inherit;">请改用v-bind或冒号速记。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我该如何解决？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第489篇《如何解决属性内插法已删除。使用v-bind或冒号速记？Vue.JS 2》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅十三</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需使用</font></font></p>

<pre><code>:src="`img/profile/${item.photo}`"
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门ItachiL</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用v-bind或快捷方式语法“：”来绑定属性。</font><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>&lt;input v-bind:placeholder="title"&gt;<font></font>
&lt;input :placeholder="title"&gt;<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
