---
layout: question
title:  \[Vue警告\]：未知的自定义元素：<nuxt-link>-运行Jest单元测试时
date:   2020-03-20T06:20:55.000Z
description: 问题我使用nuxt 1.4，并使用Jest进行路由以进行单元测试。我的应用程序不会抛出错误，并且看起来运行良好。但是，在运行我的单元测试npm run...
img: 
author: 伽罗
category: question
answer: 0
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用nuxt 1.4，并使用Jest进行路由以进行单元测试。</font><font style="vertical-align: inherit;">我的应用程序不会抛出错误，并且看起来运行良好。</font><font style="vertical-align: inherit;">但是，在运行我的单元测试</font></font><code>npm run unit</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（运行笑话）时，它将在终端中引发错误：</font></font><code>[Vue warn]: Unknown custom element: &lt;nuxt-link&gt; - did you register the component correctly? For recursive components, make sure to provide the "name" option.</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">预期</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望它不会抛出此错误，因为我的应用程序正在运行。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">档案</font></font></strong></p>

<p><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>{<font></font>
  "name": "vue-starter",<font></font>
  "version": "1.0.0",<font></font>
  "description": "Nuxt.js project",<font></font>
  "private": true,<font></font>
  "scripts": {<font></font>
    "dev": "nuxt",<font></font>
    "build": "nuxt build",<font></font>
    "start": "nuxt start",<font></font>
    "generate": "nuxt generate",<font></font>
    "lint": "eslint --ext .js,.vue --ignore-path .gitignore .",<font></font>
    "precommit": "npm run lint",<font></font>
    "test": "npm run lint &amp;&amp; npm run unit",<font></font>
    "unit": "jest",<font></font>
    "unit:report": "jest --coverage"<font></font>
  },<font></font>
  "dependencies": {<font></font>
    "babel-jest": "^22.4.1",<font></font>
    "jest-serializer-vue": "^1.0.0",<font></font>
    "node-sass": "^4.7.2",<font></font>
    "npm": "^5.7.1",<font></font>
    "nuxt": "^1.0.0",<font></font>
    "sass-loader": "^6.0.7",<font></font>
    "vue-jest": "^2.1.1"<font></font>
  },<font></font>
  "devDependencies": {<font></font>
    "@vue/test-utils": "^1.0.0-beta.12",<font></font>
    "babel-eslint": "^8.2.1",<font></font>
    "eslint": "^4.15.0",<font></font>
    "eslint-friendly-formatter": "^3.0.0",<font></font>
    "eslint-loader": "^1.7.1",<font></font>
    "eslint-plugin-vue": "^4.0.0",<font></font>
    "jest": "^22.4.2"<font></font>
  },<font></font>
  "browserslist": [<font></font>
    "&gt; 1%",<font></font>
    "last 2 versions",<font></font>
    "not ie &lt;= 8"<font></font>
  ],<font></font>
  "jest": {<font></font>
    "moduleFileExtensions": [<font></font>
      "js",<font></font>
      "vue"<font></font>
    ],<font></font>
    "transform": {<font></font>
      "^.+\\.js$": "&lt;rootDir&gt;/node_modules/babel-jest",<font></font>
      ".*\\.(vue)$": "&lt;rootDir&gt;/node_modules/vue-jest"<font></font>
    },<font></font>
    "snapshotSerializers": [<font></font>
      "&lt;rootDir&gt;/node_modules/jest-serializer-vue"<font></font>
    ]<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我测试的组件：</font></font></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;div&gt;<font></font>
    &lt;nuxt-link class="name" :to="{ path: `entity/${item.id}`, params: { id: item.id }}"&gt;{{item.name}}&lt;/nuxt-link&gt;<font></font>
    &lt;button class="connect" @click="connect"&gt;{{ btnText }}&lt;/button&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
  // import nuxtLink from '../.nuxt/components/nuxt-link';<font></font>
<font></font>
  const connectionStatusMap = [<font></font>
    'Connect',<font></font>
    'Connected',<font></font>
    'Pending',<font></font>
    'Cancel',<font></font>
  ];<font></font>
<font></font>
  export default {<font></font>
    /*components: {<font></font>
      'nuxt-link': nuxtLink,<font></font>
    },*/<font></font>
    props: {<font></font>
      item: {<font></font>
        type: Object<font></font>
      }<font></font>
    },<font></font>
    ...<font></font>
  }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的测试脚本：</font></font></p>

<pre><code>import TestItem from '../components/TestItem';<font></font>
import { shallow, mount, createLocalVue } from '@vue/test-utils';<font></font>
import Vuex from 'vuex';<font></font>
import VueRouter from 'vue-router';<font></font>
<font></font>
const localVue = createLocalVue()<font></font>
<font></font>
localVue.use(Vuex)<font></font>
localVue.use(VueRouter)<font></font>
<font></font>
...<font></font>
it(`should show the entity`, () =&gt; {<font></font>
    const wrapper = mount(TestItem, {<font></font>
      propsData: { item },<font></font>
      localVue,<font></font>
      store,<font></font>
      // stubs: ['nuxt-link'],<font></font>
    })<font></font>
    expect(wrapper.find('.name').text()).toBe(item.name);<font></font>
  });<font></font>
<font></font>
  it(`should show allow me to connect if I'm not yet connected`, () =&gt; {<font></font>
    const wrapper = shallow(TestItem, {<font></font>
      propsData: { item },<font></font>
      localVue,<font></font>
      store,<font></font>
      stubs: ['nuxt-link'],<font></font>
    })<font></font>
    expect(wrapper.find('.connect').text()).toBe('Connect');<font></font>
  });<font></font>
...<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试过了</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图创建一个localVue并捻熄组件作为建议</font></font><a href="https://github.com/vuejs-templates/webpack/issues/709#issuecomment-337778293" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这个github上评论</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
我也试过</font></font><code>shallow</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>mount</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但似乎工作没有任何。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2541篇《\[Vue警告\]：未知的自定义元素：<nuxt-link>-运行Jest单元测试时》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
