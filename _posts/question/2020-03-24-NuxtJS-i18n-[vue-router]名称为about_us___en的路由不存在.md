---
layout: question
title:  NuxtJS i18n \[vue-router\]名称为about_us___en的路由不存在
date:   2020-03-24T06:38:04.000Z
description: 我正在使用nuxtjs 2.10.x和i18n模块。Nu自定义中间件或类似的东西。路由工作正常。我的nuxt.config.js模块/ i18n部分：...
img: 
author: 卡卡西猪猪
category: question
answer: 0
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用nuxtjs 2.10.x和i18n模块。</font><font style="vertical-align: inherit;">Nu自定义中间件或类似的东西。</font><font style="vertical-align: inherit;">路由工作正常。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的</font></font><code>nuxt.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块/ i18n部分：</font></font></p>

<pre><code>    ...<font></font>
modules: [<font></font>
'@nuxtjs/axios',<font></font>
'@nuxtjs/pwa',<font></font>
'@nuxtjs/auth',<font></font>
'@nuxtjs/dotenv',<font></font>
'nuxt-fontawesome',<font></font>
[<font></font>
  'nuxt-i18n',<font></font>
  {<font></font>
    locales: [<font></font>
      {<font></font>
        code: 'en',<font></font>
        iso: 'en-US',<font></font>
        file: 'en.json',<font></font>
        name: 'English'<font></font>
      },<font></font>
      {<font></font>
        code: 'zh',<font></font>
        iso: 'zh-CN',<font></font>
        file: 'zh.json',<font></font>
        name: '简体中文'<font></font>
      }<font></font>
    ],<font></font>
    lazy: true,<font></font>
    langDir: 'locales/',<font></font>
    defaultLocale: 'en',<font></font>
    strategy: 'prefix_except_default',<font></font>
    differentDomains: false,<font></font>
    vueI18n: {<font></font>
      fallbackLocale: 'en'<font></font>
    },<font></font>
    detectBrowserLanguage: {<font></font>
      useCookie: true,<font></font>
      cookieKey: 'lang'<font></font>
    }<font></font>
  }<font></font>
    ]<font></font>
  ],<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面文件夹结构：</font></font></p>

<pre><code>  'pages/'<font></font>
    |--'contact_us.vue'<font></font>
    |--'_lang/'<font></font>
         |--'contact_us.vue'<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我收到了这个疯狂的警告：</font></font><code>[vue-router] Route with name 'contact_us___en' does not exist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">实际上，nuxt对所有页面都给出了类似的警告。</font><font style="vertical-align: inherit;">而且没有任何线索为什么会这样。</font><font style="vertical-align: inherit;">可能是什么问题？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3393篇《NuxtJS i18n [vue-router]名称为about_us___en的路由不存在》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
