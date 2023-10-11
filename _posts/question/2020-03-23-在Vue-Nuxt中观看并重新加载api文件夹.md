---
layout: question
title:  在Vue Nuxt中观看并重新加载api文件夹
date:   2020-03-23T13:16:26.000Z
description: 如何使nuxt监视“非标准”目录并重新编译/重新加载自身，更具体地说，使用附加服务器API的目录？我有我的Express API ~/api/。由于我...
img: 
author: Gil
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使nuxt监视“非标准”目录并重新编译/重新加载自身，更具体地说，使用附加服务器API的目录？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有我的Express API </font></font><code>~/api/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">由于我</font></font><code>serverMiddleware</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用“〜/ api” </font><font style="vertical-align: inherit;">引用目录</font><font style="vertical-align: inherit;">，因此我希望在对该目录中的文件进行一些更改时重新加载Nuxt，但事实并非如此。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是使用触发nuxt的npm run dev，我对</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nodemon</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（如果在内部使用）或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我很确定是）</font><font style="vertical-align: inherit;">没有任何直接控制</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我尝试添加</font></font><code>watch: [ '~/api/*.js']</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>watch: [ '~/api/index.js']</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>watch: [ '~/api/**/*.js']</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在构建</font></font><code>nuxt.conf.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但没有运气。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3056篇《在Vue Nuxt中观看并重新加载api文件夹》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞GilGreen</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>nodemon</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用来监视api文件夹中的更改。</font><font style="vertical-align: inherit;">首次安装：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install --save-dev nodemon</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么：</font></font></p>

<blockquote>
  <p>yarn add nodemon --dev</p>
</blockquote>

<p>Then add this code inside of your <code>package.json</code></p>

<pre><code>{<font></font>
  "scripts": {<font></font>
    "dev": "nodemon --watch api --exec \"nuxt\"",<font></font>
  },<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
