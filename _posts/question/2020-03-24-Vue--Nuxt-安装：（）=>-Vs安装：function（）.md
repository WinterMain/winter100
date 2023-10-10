---
layout: question
title:  Vue / Nuxt-安装：（）=> Vs安装：function（）
date:   2020-03-24T03:23:52.000Z
description: 为什么使用() =>和function()中的结果不同mounted：export default {  mounted  () => {    ...
img: 
author: 樱小胖Mandy
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么使用</font></font><code>() =&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>function()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font><font style="vertical-align: inherit;">的结果不同</font></font><code>mounted</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>export default {<font></font>
  mounted: () =&gt; {<font></font>
    this.socket = 'something'<font></font>
    console.log('mounted')<font></font>
  },<font></font>
  methods: {<font></font>
    submitMessage() {<font></font>
      console.log(this.socket) // undefined<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>function()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>export default {<font></font>
  mounted: function() {<font></font>
    this.socket = 'something'<font></font>
    console.log('mounted')<font></font>
  },<font></font>
  methods: {<font></font>
    submitMessage() {<font></font>
      console.log(this.socket) // something<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有任何想法吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不应使用箭头功能来定义生命周期挂钩，方法，...（例如</font></font><code>mounted: () =&gt; this.socket++</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">原因是箭头函数绑定了父上下文，因此这将不是您期望的Vue实例，并且</font></font><code>this.socket</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将是未定义的。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
