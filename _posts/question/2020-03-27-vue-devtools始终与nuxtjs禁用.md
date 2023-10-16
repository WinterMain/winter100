---
layout: question
title:  vue-devtools始终与nuxt.js禁用
date:   2020-03-27T12:19:20.000Z
description: 我正在使用nuxt.js v2.3.0创建一个新项目。当我npm run dev在我的想法控制台中运行时，所有内容都能正确编译，但是当我转到页面时，出现以...
img: 
author: 小胖
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用nuxt.js v2.3.0创建一个新项目。</font><font style="vertical-align: inherit;">当我</font></font><code>npm run dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的想法控制台中</font><font style="vertical-align: inherit;">运行时</font><font style="vertical-align: inherit;">，所有内容都能正确编译，但是当我转到页面时，出现以下错误：</font></font><code>Nuxt.js + Vue.js is detected on this page. Devtools inspection is not available because it's in production mode or explicitly disabled by the author.</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的nuxt.config.js：</font></font></p>

<pre><code>const pkg = require('./package');<font></font>
<font></font>
module.exports = {<font></font>
  mode: 'spa',<font></font>
<font></font>
  dev: true,<font></font>
  /*<font></font>
  ** Headers of the page<font></font>
  */<font></font>
  head: {<font></font>
    title: pkg.name,<font></font>
    meta: [<font></font>
      { charset: 'utf-8' },<font></font>
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },<font></font>
      { hid: 'description', name: 'description', content: pkg.description }<font></font>
    ],<font></font>
    link: [<font></font>
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }<font></font>
    ],<font></font>
    bodyAttrs: {<font></font>
      class: 'h-100'<font></font>
    },<font></font>
    htmlAttrs: {<font></font>
      class: 'h-100'<font></font>
    }<font></font>
  },<font></font>
<font></font>
  /*<font></font>
  ** Global CSS<font></font>
  */<font></font>
  css: [<font></font>
    '@/assets/app.css'<font></font>
  ],<font></font>
<font></font>
  /*<font></font>
  ** Plugins to load before mounting the App<font></font>
  */<font></font>
  plugins: [<font></font>
    '~/plugins/vue-notifications',<font></font>
    '~/plugins/vue2-sidebar'<font></font>
  ],<font></font>
<font></font>
  /*<font></font>
  ** Nuxt.js modules<font></font>
  */<font></font>
  modules: [<font></font>
    // Doc: https://github.com/nuxt-community/axios-module#usage<font></font>
    '@nuxtjs/axios',<font></font>
    // Doc: https://bootstrap-vue.js.org/docs/<font></font>
    'bootstrap-vue/nuxt',<font></font>
    // Doc: https://auth.nuxtjs.org/getting-starterd/setup<font></font>
    '@nuxtjs/auth',<font></font>
    '@nuxtjs/toast',<font></font>
    '@nuxtjs/font-awesome'<font></font>
  ],<font></font>
  /*<font></font>
  ** Axios module configuration<font></font>
  */<font></font>
  axios: {<font></font>
    baseURL: 'http://users:8000'<font></font>
  },<font></font>
<font></font>
  /*<font></font>
  ** Auth module configuration<font></font>
  */<font></font>
  auth: {<font></font>
    strategies: {<font></font>
      password_grant: {<font></font>
        _scheme: 'local',<font></font>
        endpoints: {<font></font>
          login: {<font></font>
            url: '/oauth/token',<font></font>
            method: 'post',<font></font>
            propertyName: 'access_token'<font></font>
          },<font></font>
          logout: 'api/logout',<font></font>
          user: {<font></font>
            url: 'api/user',<font></font>
            method: 'get',<font></font>
            propertyName: false<font></font>
          },<font></font>
        },<font></font>
        tokenRequired: true,<font></font>
        tokenType: 'Bearer'<font></font>
      }<font></font>
    },<font></font>
    redirect: {<font></font>
      login: "/account/login",<font></font>
      logout: "/",<font></font>
      callback: "/account/login",<font></font>
      user: "/"<font></font>
    },<font></font>
  },<font></font>
<font></font>
  /*<font></font>
  ** Toast configuration<font></font>
  */<font></font>
  toast: {<font></font>
    position: 'top-right',<font></font>
    duration: 2000<font></font>
  },<font></font>
<font></font>
<font></font>
  loading: {<font></font>
    name: 'chasing-dots',<font></font>
    color: '#ff5638',<font></font>
    background: 'white',<font></font>
    height: '4px'<font></font>
  },<font></font>
<font></font>
  /*<font></font>
  ** Router configuration<font></font>
  */<font></font>
  router: {<font></font>
    middleware: ['auth']<font></font>
  },<font></font>
<font></font>
  /*<font></font>
  ** Build configuration<font></font>
  */<font></font>
  build: {<font></font>
    /*<font></font>
    ** You can extend webpack config here<font></font>
    */<font></font>
    extend(config, ctx) {<font></font>
<font></font>
    }<font></font>
  }<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我以生产模式运行，那么我可以理解，但我不是。</font><font style="vertical-align: inherit;">我希望vue-devtools能够正常运行。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3819篇《vue-devtools始终与nuxt.js禁用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.27</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我必须将以下内容添加到nuxt.config.js：</font></font></p>

<pre><code>vue: {<font></font>
  config: {<font></font>
    productionTip: false,<font></font>
    devtools: true<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在显示devtools</font></font></p></div>
        </div><div class="discuss-children">
          <div class="discuss-child">
            <div class="discuss-comment"><p>你写的这个配置完全看不出来添加到哪里？</p></div>
            <div class="discuss-meta">
              <span class="discuss-user">西西</span>
              <span class="discuss-time">2020.08.25</span>
            </div>
          </div></div>
        </div>
    </div>
    {% endraw %}
  </div>
<div>
