---
layout: question
title:  如何在nuxt 2.0中添加polyfill？
date:   2020-03-20T05:10:04.000Z
description: 在Nuxt中1.4.2，我的内容如下nuxt.config.js：build  {  vendor  \['babel-polyfill'\],  b...
img: 
author: StafanNearPro
category: question
answer: 0
tags: nuxt.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Nuxt中</font></font><code>1.4.2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我的内容如下</font></font><code>nuxt.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>build: {<font></font>
  vendor: ['babel-polyfill'],<font></font>
  babel: {<font></font>
    presets: [<font></font>
      ['vue-app', {<font></font>
        useBuiltIns: true,<font></font>
        targets: { ie: 11, uglify: true },<font></font>
      },<font></font>
      ],<font></font>
    ],<font></font>
  },<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎所有这些在Nuxt中都是不完整的</font></font><code>2.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">至少我希望能够充分填充以使IE 11正常工作。</font><font style="vertical-align: inherit;">这是我尝试过的：</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像以前一样使用供应商</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font><code>build.babel</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许构建过程正常工作：</font></font></p>

<pre><code>build: {<font></font>
  vendor: ['babel-polyfill'],<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">认为</font></font></em> <code>build.vendor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在只是被忽略了，所以这似乎无能为力。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用polyfill.io</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试添加：</font></font></p>

<pre><code>script: [<font></font>
  { src: 'https://cdn.polyfill.io/v2/polyfill.min.js' },<font></font>
],<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给我</font></font><code>head</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以及：</font></font></p>

<pre><code>render: {<font></font>
  resourceHints: false,<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁用</font></font><code>preload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提示（我不确定是否很重要）。</font><font style="vertical-align: inherit;">这将导致页面看起来正确- </font></font><code>polyfill.min.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在所有其他脚本之前加载。</font><font style="vertical-align: inherit;">不知何故，当我在ie11上进行测试时，它</font></font><code>Object.entries</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是未定义的，页面爆炸了。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2460篇《如何在nuxt 2.0中添加polyfill？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
