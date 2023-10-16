---
layout: question
title:  将bootstrap.css包含到nuxt项目中的最佳方法是什么？
date:   2020-03-23T04:01:28.000Z
description: 这是我的nuxt.config.js文件的一部分： head  { link  \[     { rel  'icon', type  'imag...
img: 
author: 小宇宙猪猪
category: question
answer: 1
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的nuxt.config.js文件的一部分：</font></font></p>

<pre><code> head: {<font></font>
<font></font>
 link: [<font></font>
     { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },<font></font>
       // load bootsttrap.css from CDN      <font></font>
       //{ type: 'text/css', rel: 'stylesheet', href: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css' },<font></font>
     ]<font></font>
   },<font></font>
   css: [<font></font>
     // this line include bootstrap.css in each html file on generate <font></font>
     'bootstrap/dist/css/bootstrap.css',<font></font>
     'assets/main.css'<font></font>
   ],<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nuxt</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上每个html文件中包含的bootstrap.css </font><em><font style="vertical-align: inherit;">都会生成</font></em><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">为了解决这个问题，我</font><font style="vertical-align: inherit;">在css部分</font><font style="vertical-align: inherit;">注释了行</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">'bootstrap / dist / css / bootstrap.css'</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">在链接部分</font><font style="vertical-align: inherit;">注释了</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">rel stylesheet</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从CDN加载该bootstrap.css文件之后，该文件未包含在html文件中。</font><font style="vertical-align: inherit;">因此，我认为这不是一个很好的主意。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在构建时将bootstrap.css从“ node_modules / bootstrap / dist / ...”复制到“〜/ assets”，然后从此处加载它？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2784篇《将bootstrap.css包含到nuxt项目中的最佳方法是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我将bootstrap.css文件放在“静态”文件夹中，然后将其注册到nuxt.config.js中，如下所示</font></font></p>

<pre><code>head: {<font></font>
title: "Nuxt",<font></font>
meta: [<font></font>
  { charset: "utf-8" },<font></font>
  { name: "viewport", content: "width=device-width, initial-scale=1" },<font></font>
  {<font></font>
    hid: "description",<font></font>
    name: "description",<font></font>
    content: "Nuxt"<font></font>
  }<font></font>
],<font></font>
link: [<font></font>
  { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },<font></font>
  { rel: "stylesheet", href: "/css/bootstrap.css" } //Register your static asset <font></font>
]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">}，</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
