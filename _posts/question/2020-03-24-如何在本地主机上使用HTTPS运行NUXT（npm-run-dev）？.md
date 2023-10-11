---
layout: question
title:  如何在本地主机上使用HTTPS运行NUXT（npm run dev）？
date:   2020-03-24T03:21:51.000Z
description: 编辑：总体上更新了文本，以使其更短，更简洁。我正在尝试在运行时配置HTTPS，npm run dev以便可以在本地测试MediaStream等（为此，...
img: 
author: 乐
category: question
answer: 0
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总体上更新了文本，以使其更短，更简洁。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在运行时配置HTTPS，</font></font><code>npm run dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以便可以在本地测试MediaStream等（为此，浏览器需要我提供HTTPS）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试通过nuxt.config.js对其进行配置，但没有成功。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的nuxt.config.js文件：</font></font></p>

<pre><code>import fs from "fs";<font></font>
import pkg from "./package";<font></font>
<font></font>
export default {<font></font>
  mode: "spa",<font></font>
<font></font>
  /*<font></font>
  ** Headers of the page<font></font>
  */<font></font>
  head: {<font></font>
    title: pkg.name,<font></font>
    meta: [<font></font>
      { charset: "utf-8" },<font></font>
      { name: "viewport", content: "width=device-width, initial-scale=1" },<font></font>
      { hid: "description", name: "description", content: pkg.description },<font></font>
    ],<font></font>
    link: [<font></font>
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },<font></font>
    ],<font></font>
  },<font></font>
<font></font>
  /*<font></font>
  ** Customize the progress-bar color<font></font>
  */<font></font>
  loading: { color: "#fff" },<font></font>
<font></font>
  /*<font></font>
  ** Global CSS<font></font>
  */<font></font>
  css: [<font></font>
    "element-ui/lib/theme-chalk/index.css",<font></font>
    "@makay/flexbox/flexbox.min.css",<font></font>
  ],<font></font>
<font></font>
  /*<font></font>
  ** Plugins to load before mounting the App<font></font>
  */<font></font>
  plugins: [<font></font>
    "@/plugins/element-ui",<font></font>
    "@/plugins/vue-upload",<font></font>
    "@/plugins/axios-error-event-emitter",<font></font>
    "@/plugins/eventemitter2",<font></font>
    "@/plugins/vue-awesome",<font></font>
    "@/plugins/webrtc-adapter",<font></font>
    "@/plugins/vue-browser-detect-plugin",<font></font>
  ],<font></font>
<font></font>
  /*<font></font>
  ** Nuxt.js modules<font></font>
  */<font></font>
  modules: [<font></font>
    // Doc: https://axios.nuxtjs.org/usage<font></font>
    "@nuxtjs/axios",<font></font>
    "@nuxtjs/pwa",<font></font>
  ],<font></font>
  /*<font></font>
  ** Axios module configuration<font></font>
  */<font></font>
  axios: {<font></font>
    // See https://github.com/nuxt-community/axios-module#options<font></font>
    baseURL: process.env.NODE_ENV === "production" ? "https://startupsportugal.com/api/v1" : "http://localhost:8080/v1",<font></font>
  },<font></font>
<font></font>
  /*<font></font>
  ** Build configuration<font></font>
  */<font></font>
  build: {<font></font>
    transpile: [/^element-ui/, /^vue-awesome/],<font></font>
<font></font>
    filenames: {<font></font>
      app: ({ isDev }) =&gt; (isDev ? "[name].[hash].js" : "[chunkhash].js"),<font></font>
      chunk: ({ isDev }) =&gt; (isDev ? "[name].[hash].js" : "[chunkhash].js"),<font></font>
    },<font></font>
<font></font>
    /*<font></font>
    ** You can extend webpack config here<font></font>
    */<font></font>
    extend(config, ctx) {<font></font>
      // Run ESLint on save<font></font>
<font></font>
      if (ctx.isClient) config.devtool = "#source-map";<font></font>
<font></font>
      if (ctx.isDev) {<font></font>
        config.devServer = {<font></font>
          https: {<font></font>
            key: fs.readFileSync("server.key"),<font></font>
            cert: fs.readFileSync("server.crt"),<font></font>
            ca: fs.readFileSync("ca.pem"),<font></font>
          },<font></font>
        };<font></font>
      }<font></font>
<font></font>
      if (ctx.isDev &amp;&amp; ctx.isClient) {<font></font>
        config.module.rules.push({<font></font>
          enforce: "pre",<font></font>
          test: /\.(js|vue)$/,<font></font>
          loader: "eslint-loader",<font></font>
          exclude: /(node_modules)/,<font></font>
        });<font></font>
      }<font></font>
    },<font></font>
  },<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，在这里您可以在package.json中看到我的依赖项：</font></font></p>

<pre><code>"dependencies": {<font></font>
    "@makay/flexbox": "^3.0.0",<font></font>
    "@nuxtjs/axios": "^5.3.6",<font></font>
    "@nuxtjs/pwa": "^2.6.0",<font></font>
    "cross-env": "^5.2.0",<font></font>
    "element-ui": "^2.4.11",<font></font>
    "eventemitter2": "^5.0.1",<font></font>
    "lodash": "^4.17.11",<font></font>
    "nuxt": "^2.8.0",<font></font>
    "pug": "^2.0.3",<font></font>
    "pug-plain-loader": "^1.0.0",<font></font>
    "quagga": "^0.12.1",<font></font>
    "stylus": "^0.54.5",<font></font>
    "stylus-loader": "^3.0.2",<font></font>
    "vue-awesome": "^3.5.3",<font></font>
    "vue-browser-detect-plugin": "^0.1.2",<font></font>
    "vue-upload-component": "^2.8.20",<font></font>
    "webrtc-adapter": "^7.2.4"<font></font>
  },<font></font>
  "devDependencies": {<font></font>
    "@nuxtjs/eslint-config": "^0.0.1",<font></font>
    "babel-eslint": "^10.0.1",<font></font>
    "eslint": "^5.15.1",<font></font>
    "eslint-config-airbnb-base": "^13.1.0",<font></font>
    "eslint-config-standard": "&gt;=12.0.0",<font></font>
    "eslint-import-resolver-webpack": "^0.11.1",<font></font>
    "eslint-loader": "^2.1.2",<font></font>
    "eslint-plugin-import": "&gt;=2.16.0",<font></font>
    "eslint-plugin-jest": "&gt;=22.3.0",<font></font>
    "eslint-plugin-node": "&gt;=8.0.1",<font></font>
    "eslint-plugin-nuxt": "&gt;=0.4.2",<font></font>
    "eslint-plugin-promise": "&gt;=4.0.1",<font></font>
    "eslint-plugin-standard": "&gt;=4.0.0",<font></font>
    "eslint-plugin-vue": "^5.2.2",<font></font>
    "nodemon": "^1.18.9"<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当我运行</font></font><code>npm run dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它</font><font style="vertical-align: inherit;">时，</font><font style="vertical-align: inherit;">它仍然不提供HTTPS，但是也没有提供任何错误输出...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出与nuxt.config.js中没有HTTPS配置的情况完全相同：</font></font></p>

<pre><code>$ npm run dev<font></font>
<font></font>
&gt; clothing-demo@1.0.0 dev /mnt/d/tralha/clothing-demo-app/frontend<font></font>
&gt; nuxt --hostname 0.0.0.0 --port 3000<font></font>
<font></font>
<font></font>
   ╭────────────────────────────────────────────────╮<font></font>
   │                                                │<font></font>
   │   Nuxt.js v2.8.1                               │<font></font>
   │   Running in development mode (spa)            │<font></font>
   │                                                │<font></font>
   │   Listening on: http://192.168.126.241:3000/   │<font></font>
   │                                                │<font></font>
   ╰────────────────────────────────────────────────╯<font></font>
<font></font>
ℹ Preparing project for development                                                                                                                                                                                  14:30:34<font></font>
ℹ Initial build may take a while                                                                                                                                                                                     14:30:35<font></font>
✔ Builder initialized                                                                                                                                                                                                14:30:35<font></font>
✔ Nuxt files generated                              <font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3307篇《如何在本地主机上使用HTTPS运行NUXT（npm run dev）？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
