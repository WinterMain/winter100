---
layout: question
title:  如何在Vue.js中使用带有TypeScript的计算道具
date:   2020-03-13T07:38:34.000Z
description: 关于如何使用JavaScript语言与Vue.js进行交互的文档很多，而有关TypeScript的知识则很少。问题是如果在TypeScript上写的话，如何computed在vue组...
img: 
author: 西门小宇宙
category: question
answer: 1
tags: TypeScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于如何使用JavaScript语言与Vue.js进行交互的文档很多，而有关TypeScript的知识则很少。</font><font style="vertical-align: inherit;">问题是</font><font style="vertical-align: inherit;">如果在TypeScript上写的话，</font><font style="vertical-align: inherit;">如何</font></font><code>computed</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件中</font><font style="vertical-align: inherit;">定义</font><font style="vertical-align: inherit;">道具</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">根据</font></font><a href="https://vuejs.org/v2/guide/computed.html#Basic-Example" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">官方示例，</font></font></a> <code>computed</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是一个具有功能的对象，该功能将根据其依赖的道具进行缓存。</font><font style="vertical-align: inherit;">这是我做的一个例子：</font></font></p>

<pre><code>import Vue from 'vue';<font></font>
import { Component } from "vue-property-decorator";<font></font>
<font></font>
@Component({})<font></font>
export default class ComputedDemo extends Vue {<font></font>
    private firstName: string = 'John';<font></font>
    private lastName: string = 'Doe';<font></font>
    private computed: object = {<font></font>
        fullName(): string {<font></font>
            return `${this.firstName} ${this.lastName}`;<font></font>
        },<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和html：</font></font></p>

<pre><code>&lt;div&gt;<font></font>
    &lt;h1&gt;Computed props ts demo&lt;/h1&gt;<font></font>
    &lt;ul&gt;<font></font>
        &lt;li&gt;First name: {{firstName}}&lt;/li&gt;<font></font>
        &lt;li&gt;Last name: {{lastName}}&lt;/li&gt;<font></font>
        &lt;li&gt;Together: {{fullName}}&lt;/li&gt;<font></font>
    &lt;/ul&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第三个列表项不输出任何内容。</font><font style="vertical-align: inherit;">请问有人</font></font><code>computed</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下</font><font style="vertical-align: inherit;">如何定义</font><font style="vertical-align: inherit;">吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1403篇《如何在Vue.js中使用带有TypeScript的计算道具》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德十三Davaid</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用属性访问器来声明计算的属性（</font></font><a href="https://github.com/vuejs/vue-class-component" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/vuejs/vue-class-component</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">只要在输入中键入，就会触发该吸气剂。</font><font style="vertical-align: inherit;">看例子</font></font></p>

<pre><code>&lt;template&gt;<font></font>
    &lt;div&gt;<font></font>
        &lt;input type="text" name="Test Value" id="" v-model="text"&gt;<font></font>
<font></font>
        &lt;label&gt;{{label}}&lt;/label&gt;<font></font>
    &lt;/div&gt;<font></font>
<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script lang="ts"&gt;<font></font>
import { Component, Vue, Watch } from "vue-property-decorator";<font></font>
<font></font>
@Component({})<font></font>
export default class About extends Vue {<font></font>
    private text = "test";<font></font>
<font></font>
    get label() {<font></font>
        return this.text;<font></font>
    }<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
