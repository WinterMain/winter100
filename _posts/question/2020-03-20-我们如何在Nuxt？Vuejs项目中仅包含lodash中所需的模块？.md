---
layout: question
title:  我们如何在Nuxt？Vuejs项目中仅包含lodash中所需的模块？
date:   2020-03-20T06:21:37.000Z
description: 我们已经建立了一个Nuxt / VueJS项目。 Nuxt有自己的配置文件nuxt.config.js，我们在其中配置webpack和其他构建设置。...
img: 
author: 卡卡西Near
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们已经建立了一个Nuxt / VueJS项目。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nuxt有自己的配置文件</font></font><code>nuxt.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我们在其中配置webpack和其他构建设置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我们的package.json中，我们包含了lodash包。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我们的代码中，我们一直小心地仅加载所需的导入，例如：</font></font></p>

<pre><code>import orderBy from 'lodash/orderBy'
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在中</font></font><code>nuxt.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，lodash被添加到</font></font><code>vendor</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">列表中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当我们创建构建时，webpack总是包含整个</font></font><code>lodash</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库，而不是仅包含我们在代码中使用的库。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我阅读了许多教程，但没有答案。</font><font style="vertical-align: inherit;">如果这是仅用于webpack的项目，则其中的某些答案肯定会起作用。</font><font style="vertical-align: inherit;">但是在我们的情况下，它是通过nuxt配置文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">期待一些帮助。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是部分nuxt.config.js文件。</font><font style="vertical-align: inherit;">仅包括相关/重要部分：</font></font></p>

<pre><code>const resolve = require('resolve')<font></font>
const webpack = require('webpack')<font></font>
<font></font>
module.exports = {<font></font>
  /*<font></font>
  ** Headers of the page<font></font>
  */<font></font>
  head: {<font></font>
  },<font></font>
  modules: [<font></font>
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 10 }]<font></font>
  ],<font></font>
  plugins: [<font></font>
    { src: '~/plugins/intersection', ssr: false },<font></font>
  ],<font></font>
  build: {<font></font>
    vendor: ['moment', 'lodash'],<font></font>
    analyze: {<font></font>
      analyzerMode: 'static'<font></font>
    },<font></font>
    postcss: {<font></font>
      plugins: {<font></font>
        'postcss-custom-properties': false<font></font>
      }<font></font>
    },<font></font>
    plugins: [<font></font>
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)<font></font>
    ],<font></font>
    /*<font></font>
    ** Run ESLINT on save<font></font>
    */<font></font>
    extend (config, ctx) {<font></font>
      // config.resolve.alias['create-api'] = `./create-api-${ctx.isClient ? 'client' : 'server'}.js`<font></font>
<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2542篇《我们如何在Nuxt？Vuejs项目中仅包含lodash中所需的模块？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
