---
layout: question
title:  VueJS如何在v-for中使用计算属性
date:   2020-03-11T02:22:14.000Z
description: 如何在列表中使用计算属性。我正在使用VueJS v2.0.2。这是HTML：<div id="el">    <p v-for="item in...
img: 
author: 神奇古一
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在列表中使用计算属性。</font><font style="vertical-align: inherit;">我正在使用VueJS v2.0.2。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是HTML：</font></font></p>

<pre><code>&lt;div id="el"&gt;<font></font>
    &lt;p v-for="item in items"&gt;<font></font>
        &lt;span&gt;{{fullName}}&lt;/span&gt;<font></font>
    &lt;/p&gt;<font></font>
&lt;/div&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是Vue代码：</font></font></p>

<pre><code>var items = [<font></font>
    { id:1, firstname:'John', lastname: 'Doe' },<font></font>
    { id:2, firstname:'Martin', lastname: 'Bust' }<font></font>
];<font></font>
<font></font>
var vm = new Vue({<font></font>
    el: '#el',<font></font>
    data: { items: items },<font></font>
    computed: {<font></font>
        fullName: function(item) {<font></font>
            return item.firstname + ' ' + item.lastname;<font></font>
        },<font></font>
    },<font></font>
});<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam小哥逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不能为每次迭代创建一个计算属性。</font><font style="vertical-align: inherit;">理想情况下，每个</font><font style="vertical-align: inherit;">组件</font></font><code>items</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都是它们</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自己的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件，因此每个组件都可以具有自己的</font></font><code>fullName</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">计算属性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不想创建</font></font><code>user</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件，</font><font style="vertical-align: inherit;">可以做的</font><font style="vertical-align: inherit;">是使用方法代替。</font><font style="vertical-align: inherit;">您可以</font></font><code>fullName</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><code>computed</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性</font><font style="vertical-align: inherit;">右</font><font style="vertical-align: inherit;">移到</font></font><code>methods</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后可以像这样使用它：</font></font></p>

<pre><code>{{ fullName(user) }}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，请注意，如果您发现自己需要将参数传递给a </font></font><code>computed</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可能需要使用方法。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
