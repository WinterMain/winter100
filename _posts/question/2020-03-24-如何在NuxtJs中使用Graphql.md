---
layout: question
title:  如何在NuxtJs中使用Graphql
date:   2020-03-24T10:39:17.000Z
description: 所以我想将GraphQL实现到NuxtJs中。现在，我需要在根元素中提供一个提供程序，但是NuxtJs没有给我这个选项。我如何将apolloPro...
img: 
author: 小小老丝
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我想将GraphQL实现到NuxtJs中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我需要在根元素中提供一个提供程序，但是NuxtJs没有给我这个选项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何将apolloProvider注入到根</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue元素中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我要完成的工作：</font></font></strong></p>

<p><a href="https://github.com/Akryum/vue-apollo" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/Akryum/vue-apollo</font></font></a></p>

<pre><code>const apolloProvider = new VueApollo({<font></font>
  defaultClient: apolloClient,<font></font>
})<font></font>
<font></font>
new Vue({<font></font>
  el: '#app',<font></font>
  apolloProvider,<font></font>
  render: h =&gt; h(App),<font></font>
})<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试过的</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建一个插件：/plugins/graphql.js：</font></font></p>

<pre><code>import Vue from 'vue'<font></font>
import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client'<font></font>
import VueApollo from 'vue-apollo'<font></font>
<font></font>
// Create the apollo client<font></font>
const apolloClient = new ApolloClient({<font></font>
  networkInterface: createBatchingNetworkInterface({<font></font>
    uri: 'http://localhost:3000/graphql'<font></font>
  }),<font></font>
  connectToDevTools: true<font></font>
})<font></font>
<font></font>
// Install the vue plugin<font></font>
Vue.use(VueApollo)<font></font>
<font></font>
const apolloProvider = new VueApollo({<font></font>
  defaultClient: apolloClient<font></font>
})<font></font>
<font></font>
export default apolloProvider<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.nu​​xt / index.js中</font></font></strong><font style="vertical-align: inherit;"><strong><font style="vertical-align: inherit;">导入</font></strong><font style="vertical-align: inherit;"> apolloProvider </font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>...<font></font>
import apolloProvider from '../plugins/graphql'<font></font>
...<font></font>
  let app = {<font></font>
    router,<font></font>
    store,<font></font>
    apolloProvider,<font></font>
    _nuxt: {<font></font>
      defaultTransition: defaultTransition,<font></font>
      transitions: [ defaultTransition ],<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，这给我带来了两个问题。</font><font style="vertical-align: inherit;">每次服务器重新启动时，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.nu​​xt目录中的代码都会被擦除</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">除此之外，它还给我带来以下错误：</font></font></p>

<pre><code>TypeError: Cannot set property '__APOLLO_CLIENT__' of undefined<font></font>
    at new ApolloClient (/current/project-nuxt/node_modules/apollo-client/src/ApolloClient.js:112:37)<font></font>
    at Object.&lt;anonymous&gt; (plugins/graphql.js:6:21)<font></font>
    at __webpack_require__ (webpack:/webpack/bootstrap 8a1e0085b0ebc1e03bd0:25:0)<font></font>
    at Object.module.exports.__webpack_exports__.a (server-bundle.js:1060:76)<font></font>
    at __webpack_require__ (webpack:/webpack/bootstrap 8a1e0085b0ebc1e03bd0:25:0)<font></font>
    at Object.&lt;anonymous&gt; (server-bundle.js:1401:65)<font></font>
    at __webpack_require__ (webpack:/webpack/bootstrap 8a1e0085b0ebc1e03bd0:25:0)<font></font>
    at server-bundle.js:95:18<font></font>
    at Object.&lt;anonymous&gt; (server-bundle.js:98:10)<font></font>
    at evaluateModule (/current/project-nuxt/node_modules/vue-server-renderer/build.js:5820:21)<font></font>
    at /current/project-nuxt/node_modules/vue-server-renderer/build.js:5878:18<font></font>
    at /current/project-nuxt/node_modules/vue-server-renderer/build.js:5870:14<font></font>
    at Nuxt.renderToString (/current/project-nuxt/node_modules/vue-server-renderer/build.js:6022:9)<font></font>
    at P (/current/ducklease-nuxt/node_modules/pify/index.js:49:6)<font></font>
    at Nuxt.&lt;anonymous&gt; (/current/project-nuxt/node_modules/pify/index.js:11:9)<font></font>
    at Nuxt.ret [as renderToString] (/current/project-nuxt/node_modules/pify/index.js:72:32)<font></font>
    at Nuxt._callee2$ (/current/project-nuxt/node_modules/nuxt/dist/webpack:/lib/render.js:120:24)<font></font>
    at tryCatch (/current/project-nuxt/node_modules/regenerator-runtime/runtime.js:65:40)<font></font>
    at GeneratorFunctionPrototype.invoke [as _invoke] (/current/project-nuxt/node_modules/regenerator-runtime/runtime.js:303:22)<font></font>
    at GeneratorFunctionPrototype.prototype.(anonymous function) [as next] (/current/project-nuxt/node_modules/regenerator-runtime/runtime.js:117:21)<font></font>
    at step (/current/project-nuxt/node_modules/babel-runtime/helpers/asyncToGenerator.js:17:30)<font></font>
    at /current/project-nuxt/node_modules/babel-runtime/helpers/asyncToGenerator.js:28:13<font></font>
</code></pre></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许有点晚，但是有</font></font><a href="https://github.com/nuxt-community/apollo-module" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ nuxtjs / apollo</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在使用Nuxt 1.0的博客中使用了此工具，但仍在Nuxt2上进行一些测试，但这给我带来了问题。.猜想我暂时仍将使用V1。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
