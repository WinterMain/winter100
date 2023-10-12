---
layout: question
title:  Vue.js-v模型和v-bind之间的差异
date:   2020-03-09T14:53:02.000Z
description: 我正在通过在线课程学习Vue，导师给了我一个练习，使输入文本具有默认值。我使用v-model完成了此操作，但是讲师选择了v-bind：value，但我不明...
img: 
author: 小卤蛋AGO
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在通过在线课程学习Vue，导师给了我一个练习，使输入文本具有默认值。</font><font style="vertical-align: inherit;">我使用v-model完成了此操作，但是讲师选择了v-bind：value，但我不明白为什么。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人可以给我简单的解释一下两者之间的区别，以及何时最好使用它们之间的区别？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第328篇《Vue.js-v模型和v-bind之间的差异》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿逆天</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v-model</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
是两种方式的数据绑定，它用于在更改输入值时绑定html输入元素，然后绑定的数据将被更改。</font></font></p>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v模型仅用于HTML输入元素</font></font></em></strong></p>

<pre><code>ex: &lt;input type="text" v-model="name" &gt; 
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v-bind</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
是数据绑定的一种方式，意味着您只能将数据绑定到输入元素，而不能更改有界数据更改输入元素。
</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v-bind用于绑定html属性，</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
例如：</font></font><br>
<code>&lt;input type="text" v-bind:class="abc" v-bind:value=""&gt;</code> <br></p>

<pre><code>&lt;a v-bind:href="home/abc" &gt; click me &lt;/a&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子NearJinJin</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在某些情况下，您不想使用</font></font><code>v-model</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果您有两个输入，并且每个输入都相互依赖，则可能会有循环引用问题。</font><font style="vertical-align: inherit;">常见的用例是您要构建会计计算器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这些情况下，使用监视程序或计算属性不是一个好主意。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取而代之的</font></font><code>v-model</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是按照上面的答案进行拆分</font></font></p>

<pre><code>&lt;input<font></font>
   :value="something"<font></font>
   @input="something = $event.target.value"<font></font>
&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在实践中，如果您以这种方式将逻辑去耦，则可能会调用一个方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是真实情况下的样子：</font></font></p>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-html lang-html prettyprint-override"><code>&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.js"&gt;&lt;/script&gt;<font></font>
<font></font>
&lt;div id="app"&gt;<font></font>
  &lt;input :value="extendedCost" @input="_onInputExtendedCost" /&gt;<font></font>
  &lt;p&gt; {{ extendedCost }}<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
  var app = new Vue({<font></font>
    el: "#app",<font></font>
    data: function(){<font></font>
      return {<font></font>
        extendedCost: 0,<font></font>
      }<font></font>
    },<font></font>
    methods: {<font></font>
      _onInputExtendedCost: function($event) {<font></font>
        this.extendedCost = parseInt($event.target.value);<font></font>
        // Go update other inputs here<font></font>
    }<font></font>
  }<font></font>
  });<font></font>
&lt;/script&gt;</code></pre>
</div>
</div>
<p></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan猿</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单来说
 </font></font><code>v-model</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绑定</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font><strong><font style="vertical-align: inherit;">两种方式</font></strong><font style="vertical-align: inherit;">：</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果更改输入值，则绑定的数据将被更改，反之亦然</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是</font></font><code>v-bind:value</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被称为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种方式绑定</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这意味着：</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过更改绑定数据来更改输入值，但不能通过element通过更改输入值来更改绑定数据</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看看这个简单的例子：</font><a href="https://jsfiddle.net/gs0kphvc/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://jsfiddle.net/gs0kphvc/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//jsfiddle.net/gs0kphvc/</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
