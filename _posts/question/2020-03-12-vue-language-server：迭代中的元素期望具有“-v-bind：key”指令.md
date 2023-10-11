---
layout: question
title:  vue-language-server：迭代中的元素期望具有“ v-bind：key”指令
date:   2020-03-12T07:27:24.000Z
description: Vue.js 2.5 / Visual Studio代码编辑器  我收到此es-lint警告，如何摆脱它？    <template  slot=...
img: 
author: Stafan小宇宙
category: question
answer: 6
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue.js 2.5 / Visual Studio代码编辑器  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我收到此es-lint警告，如何摆脱它？</font></font></p>

<pre><code>    &lt;template :slot="slotName" slot-scope="props" v-for="slotName in  $scopedSlots?Object.keys($scopedSlots):null"&gt;<font></font>
       &lt;slot :name="slotName" :row-data="props.rowData" :row-index="props.rowIndex" :row-field="props.rowField"&gt;&lt;/slot&gt;<font></font>
  &lt;/template&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图添加索引，但不能解决此问题</font></font></p>

<pre><code>&lt;template :slot="slotName" slot-scope="props" v-for="(slotName, index) in  $scopedSlots?Object.keys($scopedSlots):null" :key="index"&gt;<font></font>
  &lt;slot :name="slotName" :row-data="props.rowData" :row-index="props.rowIndex" :row-field="props.rowField"&gt;&lt;/slot&gt;<font></font>
  &lt;/template&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1059篇《vue-language-server：迭代中的元素期望具有“ v-bind：key”指令》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaPro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这项工作对我来说</font></font></p>

<pre><code>&lt;div :class="sliderClass()" v-for="(slide,index) in slides" :key="index"&gt;<font></font>
&lt;div :class="sliderClass()" v-for="slide in slides" :key="slide.SliderID"&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三米亚阳光</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您要遍历名为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">users</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的数组</font><font style="vertical-align: inherit;">，则可以执行以下操作：</font></font></p>

<pre><code>&lt;div v-for="(user,id) in users" :key="id" &gt;<font></font>
      &lt;div class="card" &gt;<font></font>
       ...........................<font></font>
      &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam小哥Tom</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;li class="list-group-item" v-for="server in Servers" v-bind:key="server"&gt;    
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样在标签中指定唯一键。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚神奇</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们在这里看一个简单的例子！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在构建一个待办事项列表应用程序。</font><font style="vertical-align: inherit;">所以我建立了一个名为的组件</font></font><code>Todo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，在我的</font></font><code>TodoList</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件</font><font style="vertical-align: inherit;">内部我</font><font style="vertical-align: inherit;">将这样调用</font></font><code>Todo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件</font></font></p>

<pre><code>    &lt;todo v-for="todo in todos" v-bind:key="todo" v-bind:todo="todo"&gt;&lt;/todo&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望能帮助到你！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗小哥</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以放心地忽略该警告。</font><font style="vertical-align: inherit;">它来自vue的eslint插件，它是一个错误，已</font></font><a href="https://github.com/vuejs/eslint-plugin-vue/commit/73a9dd46a91016504f33e5877544ebf71392841a" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在一个月前</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修复，</font><font style="vertical-align: inherit;">但也许vetur仍在使用旧版本的插件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">必须将key属性添加到传递给组件的内容中</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞飞云</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题已经很好回答，但是我想添加一个示例和指向文档的链接：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此结构导致上述错误：</font></font></p>

<pre><code>&lt;div v-for="(item, index) in items"&gt;<font></font>
    {{index}}. {{item.name}}<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过更改如下语法来修复它：</font></font></p>

<pre><code>&lt;div v-for="(item, index) in items" :key="item.id"&gt;<font></font>
    {{index}}. {{item.name}}<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的商品没有任何唯一的ID字段，则可以编写</font></font><code>:key="item"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，出于性能原因，您的数据应具有一个id字段。</font></font></p>

<p><a href="https://vuejs.org/v2/guide/list.html#key" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://vuejs.org/v2/guide/list.html#key</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
