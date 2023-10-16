---
layout: question
title:  Nuxt和Vue中的Data（）VS asyncData（）
date:   2020-03-24T02:11:14.000Z
description: 二者data()并async data()给出了相同的结果（和显而易见的是，从结果asyncData()覆盖从结果data()）两者都会在源代码中生成...
img: 
author: 西里阳光
category: question
answer: 0
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">二者</font></font><code>data()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>async data()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给出了相同的结果（和显而易见的是，从结果</font></font><code>asyncData()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">覆盖从结果</font></font><code>data()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者都会在源代码中生成HTML代码（即，在服务器端呈现的代码）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者都可以用来</font></font><code>await</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取要提取的数据（例如：使用axios）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么，它们之间有什么区别？</font></font></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;div&gt;<font></font>
    &lt;div&gt;test:  {{test}}&lt;/div&gt;<font></font>
    &lt;div&gt;test2: {{test2}}&lt;/div&gt;<font></font>
    &lt;div&gt;test2: {{test3}}&lt;/div&gt;<font></font>
    &lt;div&gt;test2: {{test4}}&lt;/div&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
export default {<font></font>
    asyncData(app){<font></font>
    return {test:"asyncData",test2:"asyncData2",test3:"asyncData3"}<font></font>
  },data(){<font></font>
    return {test:"data",test2:"data2",test4:"data4"}<font></font>
 }<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果：</font></font></p>

<pre><code>test:  asyncData<font></font>
test2: asyncData2<font></font>
test2: asyncData3<font></font>
test2: data4<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3219篇《Nuxt和Vue中的Data（）VS asyncData（）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
