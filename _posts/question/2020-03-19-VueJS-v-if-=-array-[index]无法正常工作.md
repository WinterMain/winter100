---
layout: question
title:  VueJS v-if = array \[index\]无法正常工作
date:   2020-03-19T06:43:22.000Z
description: 我想制作一个组件，当鼠标悬停在图像上方时，该组件会显示文本框。以下是HTML模板。<section class="item-container" ...
img: 
author: 凯阳光
category: question
answer: 3
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想制作一个组件，当鼠标悬停在图像上方时，该组件会显示文本框。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是HTML模板。</font></font></p>

<pre><code>&lt;section class="item-container" v-for="(item, index) in items"&gt;<font></font>
  &lt;div class="image-box" @mouseenter="changeStatus(index)"&gt;<font></font>
    &lt;img class="image" src="item.link" alt&gt;<font></font>
  &lt;/div&gt;<font></font>
  &lt;div class="text-box" @mouseleave="changeStatus(index)" v-if="show[index]"&gt;<font></font>
    &lt;h4&gt;{{ item.name }}&lt;/h4&gt;<font></font>
    &lt;p&gt;{{ item.content }}&lt;/p&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/section&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面是app.js</font></font></p>

<pre><code>new Vue({<font></font>
  el: '#app',<font></font>
  data: {<font></font>
    show: [false, false, false],<font></font>
    items: [<font></font>
      {<font></font>
        name: 'Author 1',<font></font>
        content: 'Content 1'<font></font>
      },<font></font>
      {<font></font>
        name: 'Author 2',<font></font>
        content: 'Content 2'<font></font>
      },<font></font>
      {<font></font>
        name: 'Author 3',<font></font>
        content: 'Content 3'<font></font>
      }<font></font>
    ]<font></font>
  },<font></font>
  methods: {<font></font>
    changeStatus: function(index) {<font></font>
      this.show[index] = !this.show[index];<font></font>
      console.log(this.show); <font></font>
      console.log(this.show[index]);  // console gets it as expected<font></font>
    }<font></font>
  }<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我执行以上代码时，我可以发现show属性已更改。</font><font style="vertical-align: inherit;">但是，v-if不会更新。</font><font style="vertical-align: inherit;">我们不能对v-if使用array [index]还是有其他原因？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三小哥</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用JS </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组来</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获得相同的效果。</font><font style="vertical-align: inherit;">换句话说，替换</font></font><code>show: [false, false, false],</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用</font></font><code>show: {0:false, 1:false, 2:false},</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在方法的组件中，可以使用：</font></font></p>

<pre><code>this.$set(this.show, index, !this.show[index])
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇老丝</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题不关乎</font></font><code>v-if</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，是因为Vue无法直接检测到数组元素的变化，这是JavaScript的局限之一。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，Vue为此提供了一些辅助功能，例如 </font></font><code>Vue.set</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">改变这个 </font></font><code>this.show[index] = !this.show[index]</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至 </font></font><code>Vue.set(this.show, index, !this.show[index])</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么它应该工作。</font></font></p>

<p><code>Vue.set</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 不是唯一的解决方案，有多种方法可以实现，以防您可能想知道。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用JavaScript数组的本机方法，Vue会挂接这些方法，以便它可以检测到更改。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是用法的示例 </font></font><code>.splice</code></p>

<p><code>this.show.splice(index, 1, !this.show[index])</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种方法是完全替换阵列。</font><font style="vertical-align: inherit;">如果使用ES6，则可以使用spread运算符轻松克隆阵列：</font></font></p>

<pre><code>this.show[index] = !this.show[index]<font></font>
this.show = [...this.show]<font></font>
</code></pre>

<p><code>.map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 也将起作用，因为它返回一个新数组</font></font></p>

<pre><code>this.show = this.show.map((el, i) =&gt;<font></font>
  i === index ? !el : el<font></font>
)<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
