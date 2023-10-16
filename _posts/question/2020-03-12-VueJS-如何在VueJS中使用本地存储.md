---
layout: question
title:  Vue.JS-如何在Vue.JS中使用本地存储
date:   2020-03-12T06:45:32.000Z
description: 我正在使用Vue.JS进行Markdown编辑器，并且尝试使用localstorage来保存数据，但是我不知道如何在用户键入时将新值保存到Vue.JS中的...
img: 
author: ProHarry逆天
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Vue.JS进行Markdown编辑器，并且尝试使用localstorage来保存数据，但是我不知道如何在用户键入时将新值保存到Vue.JS中的数据变量中！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1017篇《Vue.JS-如何在Vue.JS中使用本地存储》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy小胖Pro</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用v-model将变量与每次更改绑定在一起，也可以将其置于计算的{{}部分。compute就像vue.js的生命钩子一样，它在更改值时再次重新呈现组件。 </font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
