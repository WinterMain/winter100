---
layout: question
title:  Moment.js与Vuejs
date:   2020-03-10T02:11:08.000Z
description: 我尝试使用以下方式打印日期时间 vue-for{{ moment().format('MMMM Do YYYY, h mm ss a') }}但...
img: 
author: 樱樱
category: question
answer: 1
tags: momentjs Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试使用以下方式打印日期时间 </font></font><code>vue-for</code></p>

<pre><code>{{ moment().format('MMMM Do YYYY, h:mm:ss a') }}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，它不会出现。</font><font style="vertical-align: inherit;">只是一片空白。</font><font style="vertical-align: inherit;">我该如何尝试在瞬间发挥作用？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第409篇《Moment.js与Vuejs》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro神无樱</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只需要导入moment模块，然后使用一个计算函数来处理我的moment（）逻辑并返回模板中引用的值即可。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然我没有使用过它，因此无法说出它的有效性，但我确实找到了</font></font><a href="https://github.com/brockpetrie/vue-moment" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/brockpetrie/vue-moment</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为替代考虑</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
