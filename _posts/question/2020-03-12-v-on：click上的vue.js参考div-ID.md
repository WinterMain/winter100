---
layout: question
title:  v-on：click上的vue.js参考div ID
date:   2020-03-12T10:20:49.000Z
description: 使用v-on click我想在Vue.JS中使用div的ID设置变量-如何引用呢？<div id="foo" v-on click="select">...
img: 
author: TonyStafan
category: question
answer: 1
tags: onclick Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>v-on:click</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在Vue.JS中使用div的ID设置变量-如何引用呢？</font></font></p>

<pre><code>&lt;div id="foo" v-on:click="select"&gt;...&lt;/div&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
    new Vue({<font></font>
        el: '#app',<font></font>
        data: {<font></font>
        },<font></font>
        methods: {<font></font>
            select: function(){<font></font>
                divID = this.id // ??<font></font>
                alert(divID)<font></font>
            }<font></font>
        }<font></font>
    })<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro神无樱</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">受@nirazul的答案启发，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检索数据属性</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML：</font></font></strong></p>

<pre><code>&lt;ul&gt;<font></font>
    &lt;li<font></font>
            v-for="style in styles"<font></font>
            :key="style.id"<font></font>
            @click="doFilter"<font></font>
            data-filter-section="data_1"<font></font>
            :data-filter-size="style.size"<font></font>
    &gt;<font></font>
        {{style.name}}<font></font>
    &lt;/li&gt;<font></font>
&lt;/ul&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JS：</font></font></strong></p>

<pre><code>export default {<font></font>
    methods: {<font></font>
        doFilter(e) {<font></font>
            let curTarget = e.currentTarget;<font></font>
            let curTargetData = curTarget.dataset;<font></font>
            if (curTargetData) {<font></font>
                console.log("Section: " + curTargetData.filterSection);<font></font>
                console.log("Size: " + curTargetData.filterSize);<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
