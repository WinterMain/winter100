---
layout: question
title:  如何为VueJs Props添加多种数据类型？
date:   2020-03-12T10:19:29.000Z
description: 将不同的值传递给组件时，此错误使我感到困惑。...
img: 
author: 小小伽罗
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将不同的值传递给组件时，此错误使我感到困惑。</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/13402/images/thumbnails/1584008368269.png" data-src="https://www.samyoc.com//uploads/users/13402/images/1584008368269.png" rel="noreferrer"><img src="https://i.stack.imgur.com/xvnLa.png" alt="在此处输入图片说明"></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1268篇《如何为VueJs Props添加多种数据类型？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱凯</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我找到的解决方案。</font></font></p>

<pre class="lang-js prettyprint-override"><code>props: {<font></font>
   value: [Number, String, Array]<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
