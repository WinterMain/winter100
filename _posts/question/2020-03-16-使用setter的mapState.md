---
layout: question
title:  使用setter的mapState
date:   2020-03-16T07:30:59.000Z
description: 我想通过指定分配器方法mapState。我目前使用一种变通方法，在该方法中，将我感兴趣的变量命名todo为临时storetodo变量，然后在另一个计算变量...
img: 
author: 阿飞Pro
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想通过指定分配器方法</font></font><code>mapState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我目前使用一种变通方法，在该方法中，将我感兴趣的变量命名</font></font><code>todo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为临时</font></font><code>storetodo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量，然后在另一个计算变量中引用它</font></font><code>todo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>methods: {<font></font>
    ...mapMutations([<font></font>
        'clearTodo',<font></font>
        'updateTodo'<font></font>
    ])<font></font>
},<font></font>
computed: {<font></font>
    ...mapState({<font></font>
        storetodo: state =&gt; state.todos.todo<font></font>
    }),<font></font>
    todo: {<font></font>
        get () { return this.storetodo},<font></font>
        set (value) { this.updateTodo(value) }<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想跳过多余的步骤，直接在中定义getter，setter </font></font><code>mapState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我为什么要这样做？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正常的方法是使用</font></font><code>mapMutations</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>mapActions</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＆</font></font><code>mapState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ / </font></font><code>mapGetters</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
而不</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">上面已经说明的计算的get / set组合，并直接在HTML中引用该突变：</font></font></p>

<pre><code>&lt;input v-model='todo' v-on:keyup.stop='updateTodo($event.target.value)' /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">getter / setter版本允许我简单地编写：</font></font></p>

<pre><code>&lt;input v-model='todo' /&gt;
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1807篇《使用setter的mapState》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天小胖Mandy</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不能在其中使用getter / setter格式 </font></font><code>mapState</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以尝试直接返回状态</font></font><code>get()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>mapState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从计算的属性中</font><font style="vertical-align: inherit;">删除</font></font></p>

<pre><code>computed: {<font></font>
    todo: {<font></font>
        get () { return this.$store.state.todos.todo},<font></font>
        set (value) { this.updateTodo(value) }<font></font>
    }<font></font>
} <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个相关但不相同的</font></font><a href="https://jsfiddle.net/61eyztca/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JsFiddle示例</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
