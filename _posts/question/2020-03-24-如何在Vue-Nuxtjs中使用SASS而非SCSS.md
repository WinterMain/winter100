---
layout: question
title:  如何在Vue Nuxt.js中使用SASS（而非SCSS）
date:   2020-03-24T06:40:49.000Z
description: 我刚刚创建了标准教程nuxt.js应用 引用中央.scss文件nuxt.config.js不是问题（一些简单的样式包含显示效果，因此它确实有效）。...
img: 
author: LNear
category: question
answer: 1
tags: webpack Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚创建了</font></font><a href="https://nuxtjs.org/guide/installation#using-code-create-nuxt-app-code-" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标准教程nuxt.js应用</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">引用中央</font></font><code>.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font></font><code>nuxt.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是问题（一些简单的样式包含显示效果，因此它确实有效）。</font></font></p>

<pre><code>...<font></font>
css: ['~/assets/scss/main.scss'],<font></font>
scss: {},<font></font>
sass: {},<font></font>
plugins: [],<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>main2.sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是</font><font style="vertical-align: inherit;">引用</font><font style="vertical-align: inherit;">文件...</font></font></p>

<pre><code>css: ['~/assets/scss/main2.sass'],
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...给我带来麻烦：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">main2.sass</font></font></p>

<pre><code>h1.title<font></font>
    background: yellow<font></font>
    color: white !important<font></font>
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ValidationError：无效的选项对象。</font><font style="vertical-align: inherit;">Sass Loader已使用与API模式不匹配的选项对象进行了初始化。</font><font style="vertical-align: inherit;">-options具有未知属性'indentedSyntax'。</font><font style="vertical-align: inherit;">这些属性有效：</font></font></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值得注意的是：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尚未添加</font></font><code>indentedSyntax</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性！</font></font></p>

<p><font style="vertical-align: inherit;"></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">尝试在</font></font><code>sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-array以及嵌套的内部</font></font><code>sassOptions</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...</font></font></p>

<pre><code>sass: {<font></font>
    sassOptions: {<font></font>
        indentedSyntax: true<font></font>
    }<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，没有运气。</font><font style="vertical-align: inherit;">–我是否需要以某种方式将其塞入webpack选项（在内</font></font><code>nuxt.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）以使webpack（在nuxt的支持下）实现？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制台中的完整错误消息：</font></font></strong></p>

<pre><code>Module build failed (from ./node_modules/sass-loader/dist/cjs.js):<font></font>
ValidationError: Invalid options object. Sass Loader has been initialised using an options object that does not match the API schema.<font></font>
- options has an unknown property 'indentedSyntax'. These properties are valid:<font></font>
object { implementation?, sassOptions?, prependData?, sourceMap?, webpackImporter? }<font></font>
    at validate (/depot/sandbox/node_modules/schema-utils/dist/validate.js:49:11)<font></font>
    at Object.loader (/depot/sandbox/node_modules/sass-loader/dist/index.js:36:28)<font></font>
<font></font>
@ ./assets/scss/main2.sass 4:14-225 14:3-18:5 15:22-233<font></font>
@ ./.nuxt/App.js<font></font>
@ ./.nuxt/index.js<font></font>
@ ./.nuxt/client.js<font></font>
@ multi eventsource-polyfill webpack-hot-middleware/client?reload=true&amp;timeout=30000&amp;ansiColors=&amp;overlayStyles=&amp;name=client&amp;path=/__webpack_hmr/client ./.nuxt/client.js<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样，这种（在一些广泛的github搜索之后）语法没有帮助：</font></font></p>

<pre><code>css: [<font></font>
    '~/assets/scss/main.scss',<font></font>
    { src: '~/assets/scss/main2.sass', lang: 'sass' }<font></font>
],<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3399篇《如何在Vue Nuxt.js中使用SASS（而非SCSS）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我解决了类似的问题，回滚我</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顶嘴装载机</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包版本</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">7.0.0</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">副版本</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">8.0.0</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，GitHub中存在一个公开问题@ vuejs / vue-cli，该问题与这种不兼容性有关： </font></font></p>

<p><a href="https://github.com/vuejs/vue-cli/issues/4513" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vue-cli和sass-loader @ 8不兼容＃4513</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">祝好运！</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
