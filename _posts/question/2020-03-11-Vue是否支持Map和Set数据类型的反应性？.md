---
layout: question
title:  Vue是否支持Map和Set数据类型的反应性？
date:   2020-03-11T04:24:49.000Z
description: Vue.js的文档提到了针对普通Javascript对象的智能自动更改跟踪：  当您将纯JavaScript对象作为数据选项传递给Vue实例时，Vu...
img: 
author: 神奇启人
category: question
answer: 2
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue.js的文档提到了针对</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">普通Javascript对象</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的智能自动更改跟踪</font><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您将纯JavaScript对象作为数据选项传递给Vue实例时，Vue.js将遍历其所有属性，并使用Object.defineProperty将它们转换为getter / setter。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于Javascript </font></font><code>Map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>Set</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数据类型被设计为与它们的内置</font></font><code>get</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>set</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法一起使用，因此如何获取Vue来跟踪对</font></font><code>Map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">s和</font></font><code>Set</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">s </font><font style="vertical-align: inherit;">内部状态的调用（以及更改）</font><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第669篇《Vue是否支持Map和Set数据类型的反应性？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Davaid</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知，Vue的反应性跟踪分配。</font><font style="vertical-align: inherit;">如果您在集合上执行分配，则它应跟踪反应性，例如：</font></font></p>

<pre><code>methods: {<font></font>
  add(item) {<font></font>
    this.mySet = new Set(this.mySet.add(item));<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这使您的代码更简洁，但存在一个明显的问题：性能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需根据需要选择解决方案即可：)</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva猴子古一</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue.js不支持对</font></font><code>Map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>Set</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型的数据进行</font><font style="vertical-align: inherit;">响应</font><font style="vertical-align: inherit;">（还可以吗？）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="https://github.com/vuejs/vue/issues/2410#issuecomment-318487855" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能票</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一些讨论，这项工作各地（用户“印加”）：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue无法观察到Sets和Maps。</font><font style="vertical-align: inherit;">为了</font></font><code>v-for</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在计算属性，方法，观察程序，模板表达式等中或</font><font style="vertical-align: inherit;">其中使用这些</font><font style="vertical-align: inherit;">属性，您需要创建此结构的可序列化副本并将其公开给Vue。</font><font style="vertical-align: inherit;">这是一个幼稚的示例，它使用一个简单的计数器为Vue提供</font></font><code>Set</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新的</font><font style="vertical-align: inherit;">信息</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>data() {<font></font>
  mySetChangeTracker: 1,<font></font>
  mySet: new Set(),<font></font>
},<font></font>
<font></font>
computed: {<font></font>
  mySetAsList() { <font></font>
    // By using `mySetChangeTracker` we tell Vue that this property depends on it,<font></font>
    // so it gets re-evaluated whenever `mySetChangeTracker` changes<font></font>
    return this.mySetChangeTracker &amp;&amp; Array.from(this.mySet);<font></font>
  },<font></font>
},<font></font>
<font></font>
methods: {<font></font>
  add(item) {<font></font>
    this.mySet.add(item);<font></font>
    // Trigger Vue updates<font></font>
    this.mySetChangeTracker += 1;<font></font>
  }<font></font>
}<font></font>
</code></pre>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这说明了一种有点怪异但100％有效的方法，用于使不可观察的数据具有响应性。</font><font style="vertical-align: inherit;">尽管如此，在现实世界中，我最终还是获得了Sets / Maps的序列化版本（例如，您可能希望将Set / Maps的修改后的版本存储在本地存储中，从而无论如何都要对其进行序列化），因此不涉及任何人工计数器/黑客。</font></font></p>
</blockquote></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
