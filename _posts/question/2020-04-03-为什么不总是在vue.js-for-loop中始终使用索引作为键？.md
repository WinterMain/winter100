---
layout: question
title:  为什么不总是在vue.js for loop中始终使用索引作为键？
date:   2020-04-03T03:47:39.000Z
description: 我已经将vue.js用于几个项目，并且一直在使用索引作为for循环中的键<div v-for="(item, index) in items"  ke...
img: 
author: Gil达蒙
category: question
answer: 1
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经将vue.js用于几个项目，并且一直在使用索引作为for循环中的键</font></font></p>

<pre><code>&lt;div v-for="(item, index) in items" :key="index"&gt;&lt;/div&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...并开始怀疑这样做是否存在问题，因为示例通常使用该商品的ID。</font></font></p>

<pre><code>&lt;div v-for="(item, index) in items" :key="item.ID"&gt;&lt;/div&gt;
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3985篇《为什么不总是在vue.js for loop中始终使用索引作为键？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为数组是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可变的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果</font><font style="vertical-align: inherit;">将</font><font style="vertical-align: inherit;">项目添加到数组中或从数组中删除，则</font><font style="vertical-align: inherit;">任何给定项目的索引都可以并且将</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您希望自己</font></font><code>key</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">成为唯一标识唯一组件的唯一值。</font><font style="vertical-align: inherit;">您创建的主键总是比使用索引更好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个例子。</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="false" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>console.clear()<font></font>
<font></font>
Vue.component("item", {<font></font>
  props: ["value"],<font></font>
  data() {<font></font>
    return {<font></font>
      internalValue: this.value<font></font>
    }<font></font>
  },<font></font>
  template: `&lt;li&gt;Internal: {{internalValue}} Prop: {{value}}&lt;/li&gt;`<font></font>
})<font></font>
<font></font>
<font></font>
new Vue({<font></font>
  el: "#app",<font></font>
  data: {<font></font>
    items: [1, 2, 3, 4, 5]<font></font>
  },<font></font>
  methods: {<font></font>
    addValue() {<font></font>
      this.items.splice(this.items.length / 2, 0, this.items.length + 1)<font></font>
    }<font></font>
  }<font></font>
})</code></pre>
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://unpkg.com/vue@2.2.6/dist/vue.js"&gt;&lt;/script&gt;<font></font>
&lt;div id="app"&gt;<font></font>
  {{items}}<font></font>
  &lt;ul&gt;<font></font>
    &lt;item v-for="i in items" :value="i" :key="i"&gt;&lt;/item&gt;<font></font>
  &lt;/ul&gt;<font></font>
  &lt;button @click="addValue"&gt;AddValue&lt;/button&gt;<font></font>
  &lt;ul&gt;<font></font>
    &lt;item v-for="(i, index) in items" :value="i" :key="index"&gt;&lt;/item&gt;<font></font>
  &lt;/ul&gt;<font></font>
&lt;/div&gt;</code></pre>
</div>
</div>
<p></p>

<p>Note that when <code>addValue</code> is clicked, the list on top represents the new numbers in the array where the <em>truly</em> are in the array; in the middle. In the second list below the button, the values do <em>not</em> represent the actual location in the array and the internal and property values do <em>not</em> agree.</p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
