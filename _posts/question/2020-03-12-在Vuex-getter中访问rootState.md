---
layout: question
title:  在Vuex getter中访问rootState
date:   2020-03-12T07:51:22.000Z
description: 您如何访问rootState吸气剂？const getters = {  getParams  rootState => {    return ...
img: 
author: 宝儿小胖
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您如何访问</font></font><code>rootState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吸气剂？</font></font></p>

<pre><code>const getters = {<font></font>
  getParams: rootState =&gt; {<font></font>
    return rootState.route.params<font></font>
  },<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的方法不起作用。</font><font style="vertical-align: inherit;">怎么做？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1092篇《在Vuex getter中访问rootState》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam小哥逆天</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果此getter在模块中，</font></font><code>rootState</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则是第三个参数。</font></font></p>

<pre><code>const getters = {<font></font>
  getParams: (state, getters, rootState) =&gt; {<font></font>
    return rootState.route.params<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
