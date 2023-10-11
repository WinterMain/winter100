---
layout: question
title:  在Vue中隐藏div onclick
date:   2020-03-19T06:40:42.000Z
description: 单击Vue.js时如何隐藏元素？只有一个要隐藏的元素。jQuery解决方案如下所示：$('.button').click(function() {...
img: 
author: 小宇宙神乐
category: question
answer: 1
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击Vue.js时如何隐藏元素？</font><font style="vertical-align: inherit;">只有一个要隐藏的元素。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jQuery解决方案如下所示：</font></font></p>

<pre><code>$('.button').click(function() {<font></font>
  $('.hideme').hide();<font></font>
);<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是Vue.js等效于什么？</font></font></em></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2411篇《在Vue中隐藏div onclick》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MonsterKKNear</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><pre><code>&lt;div&gt;<font></font>
    &lt;div&gt;<font></font>
<font></font>
        &lt;button v-on:click="isHidden = !isHidden"&gt;Toggle hide and show&lt;/button&gt;<font></font>
<font></font>
        &lt;h1 v-if="!isHidden"&gt;Hide me on click event!&lt;/h1&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/div&gt;<font></font>
<font></font>
name: "Modal",<font></font>
    data () {<font></font>
        return {<font></font>
            isHidden: false<font></font>
        }<font></font>
    }<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
