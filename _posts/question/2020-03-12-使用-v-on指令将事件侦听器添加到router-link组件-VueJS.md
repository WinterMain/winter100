---
layout: question
title:  使用“ v-on：”指令将事件侦听器添加到<router-link>组件-VueJS
date:   2020-03-12T02:25:09.000Z
description: 我试图将自定义处理程序添加InlineButtonClickHandler到<router-link>组件的click事件中，以便发出自定义appSide...
img: 
author: Eva猿
category: question
answer: 2
tags: vuejs2 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图将自定义处理程序添加</font></font><code>InlineButtonClickHandler</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>&lt;router-link&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件的</font></font><code>click</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件中，以便发出自定义</font></font><code>appSidebarInlineButtonClick</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">事件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，我的代码无法正常工作。</font><font style="vertical-align: inherit;">我究竟做错了什么？</font></font></p>

<pre><code>&lt;template&gt;<font></font>
   &lt;router-link :to="to" @click="InlineButtonClickHandler"&gt;<font></font>
     {{ name }}<font></font>
   &lt;/router-link&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script type="text/babel"&gt;<font></font>
export default {<font></font>
  props: {<font></font>
    to: { type: Object, required: true },<font></font>
    name: { type: String, required: true }<font></font>
  },<font></font>
  methods: {<font></font>
    InlineButtonClickHandler(event) {<font></font>
      this.$emit('appSidebarInlineButtonClick');<font></font>
    }<font></font>
  }<font></font>
} <font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第879篇《使用“ v-on：”指令将事件侦听器添加到<router-link>组件-VueJS》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德村村小宇宙</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;router-link:to="to"&gt;<font></font>
    &lt;span @click="InlineButtonClickHandler"&gt;{{name}}&lt;/span&gt;<font></font>
&lt;/router-link&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许您可以尝试一下。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要添加</font></font><a href="https://vuejs.org/v2/guide/components-custom-events.html#Binding-Native-Events-to-Components" rel="noreferrer"><code>.native</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修饰符</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>&lt;router-link<font></font>
    :to="to"<font></font>
    @click.native="InlineButtonClickHandler"<font></font>
&gt;<font></font>
    {{name}}<font></font>
&lt;/router-link&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将侦听</font></font><code>router-link</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件</font><font style="vertical-align: inherit;">根元素的本机click事件</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
