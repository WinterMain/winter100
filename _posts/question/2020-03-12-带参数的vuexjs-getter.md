---
layout: question
title:  带参数的vuexjs getter
date:   2020-03-12T06:44:51.000Z
description: 有没有一种方法可以将参数传递给getter vuex store？就像是：new Vuex.Store({  getters  {    some...
img: 
author: 小胖泡芙
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以将参数传递给getter </font></font><code>vuex</code> <code>store</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">就像是：</font></font></p>

<pre><code>new Vuex.Store({<font></font>
  getters: {<font></font>
    someMethod(arg){<font></font>
       // return data from store with query on args<font></font>
    }<font></font>
  }<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样在组件中我可以使用 </font></font></p>

<pre><code>&lt;template&gt;<font></font>
    &lt;div&gt;<font></font>
        &lt;p&gt;{{someMethod(this.id)}}&lt;/p&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
&lt;script lang="ts"&gt;<font></font>
    import { mapGetters } from "vuex"<font></font>
<font></font>
    export default {<font></font>
        props: ['id'],<font></font>
        computed: mapGetters(['someMethod'])<font></font>
        }<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是在vuex中，第一个参数是</font></font><code>state</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，第二个</font><font style="vertical-align: inherit;">参数</font><font style="vertical-align: inherit;">是other </font></font><code>getters</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">可能吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1015篇《带参数的vuexjs getter》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三神无</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6箭头功能在这里也可以很好地工作。</font><font style="vertical-align: inherit;">例如，假设您要在商店中寻找特定的“东西”。</font></font></p>

<pre><code>new Vuex.Store({<font></font>
  getters: {<font></font>
    someMethod: (state) =&gt; (id) =&gt; {<font></font>
        return state.things.find(thing =&gt; thing.id === id)<font></font>
      }<font></font>
    };       <font></font>
  }<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font><a href="https://vuex.vuejs.org/guide/getters.html#method-style-access" rel="noreferrer"><font style="vertical-align: inherit;">Vuex文档中的</font></a><font style="vertical-align: inherit;">另一个示例</font></font><a href="https://vuex.vuejs.org/guide/getters.html#method-style-access" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Itachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种方法是：</font></font></p>

<pre><code>new Vuex.Store({<font></font>
  getters: {<font></font>
    someMethod(state){<font></font>
      var self = this;<font></font>
       return function (args) {<font></font>
          // return data from store with query on args and self as this<font></font>
       };       <font></font>
    }<font></font>
  }<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，getter不接受参数，并且在此</font></font><a href="https://github.com/vuejs/vuex/issues/145" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">线程中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释了为什么</font><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命名约定有些混乱，getter表示状态可以以任何形式检索，但实际上它们是简化器。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许我们应该让减速器成为纯粹的方法。</font><font style="vertical-align: inherit;">可用于过滤，映射等。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后可以给getters任何上下文。</font><font style="vertical-align: inherit;">与compute类似，但是您现在可以在vuex选项中将compute的props组合到getter。</font><font style="vertical-align: inherit;">这有助于组件的结构。</font></font></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实现相同目标的更好方法是使用</font></font><a href="https://stackoverflow.com/a/51288003/1610034"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nivram80</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的答案中详细介绍的ES6箭头</font><font style="vertical-align: inherit;">，使用</font></font><a href="https://vuex.vuejs.org/guide/getters.html#method-style-access" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法样式的getter</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以通过从getter返回函数来传递参数：</font></font></p>

<pre><code>new Vuex.Store({<font></font>
  getters: {<font></font>
    someMethod: (state) =&gt; (id) =&gt; {<font></font>
        return state.things.find(thing =&gt; thing.id === id)<font></font>
      }<font></font>
    };       <font></font>
  }<font></font>
})<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
