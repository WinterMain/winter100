---
layout: question
title:  Vue.js \[vuex\]如何从突变派发？
date:   2020-03-12T10:22:28.000Z
description: 我有一个要应用于json对象的过滤器列表。我的变异看起来像这样：const mutations = {    setStars(state, p...
img: 
author: Near神乐路易
category: question
answer: 0
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个要应用于json对象的过滤器列表。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的变异看起来像这样：</font></font></p>

<pre><code>const mutations = {<font></font>
    setStars(state, payload) {<font></font>
        state.stars = payload;<font></font>
        this.dispatch('filter');<font></font>
    },<font></font>
<font></font>
    setReviews(state, payload) {<font></font>
        state.reviews = payload;<font></font>
        this.dispatch('filter');<font></font>
    }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于过滤器的工作方式，我需要再次重新应用所有过滤器，因为我不能简单地继续向下过滤列表，因为这会在用户取消选择过滤器选项时给我带来麻烦。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，当对星形过滤器或评论过滤器（用户正在过滤）进行更改时，我需要调用一个运行所有过滤器的函数。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最简单的选择是什么？</font><font style="vertical-align: inherit;">我可以添加某种辅助函数，还是可以设置一个操作来调用实际上过滤我的结果的突变？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1278篇《Vue.js \[vuex\]如何从突变派发？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
