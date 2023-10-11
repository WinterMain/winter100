---
layout: question
title:  具有Vuetify的FontAwesome-如何在v-icon组件中包含Font Awesome图标
date:   2020-03-19T06:37:33.000Z
description: Hopefully someone will know where I have gone wrong here - I'm trying to impl...
img: 
author: 伽罗理查德
category: question
answer: 0
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>Hopefully someone will know where I have gone wrong here - I'm trying to implement the Font Awesome package with Vuetify. Font Awesome is all imported and ready to go (setup is indentical to projects which I have Font Awesome successfully integrated):</p>

<p>My bare basics <code>main.js</code> file:</p>

<pre><code>import '@babel/polyfill'<font></font>
import Vue from 'vue'<font></font>
import './plugins/vuetify'<font></font>
import App from './App.vue'<font></font>
import store from './store'<font></font>
import './registerServiceWorker'<font></font>
<font></font>
import { library } from '@fortawesome/fontawesome-svg-core'<font></font>
import { faCode } from '@fortawesome/pro-solid-svg-icons'<font></font>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'<font></font>
<font></font>
library.add(faCode)<font></font>
<font></font>
Vue.component('font-awesome-icon', FontAwesomeIcon)<font></font>
<font></font>
Vue.config.productionTip = false<font></font>
<font></font>
new Vue({<font></font>
  store,<font></font>
  render: h =&gt; h(App)<font></font>
}).$mount('#app')<font></font>
</code></pre>

<p>And within a component I am referencing an icon as follows:</p>

<p>My <code>Component.vue</code>:</p>

<pre><code>&lt;template&gt;<font></font>
    ...<font></font>
    &lt;v-btn&gt;<font></font>
        &lt;v-icon&gt;fas fa-code&lt;/v-icon&gt;<font></font>
    &lt;/v-btn&gt;<font></font>
    ...<font></font>
&lt;/template&gt;<font></font>
</code></pre>

<p>^ Where I have left out superfluous code*. </p>

<p>So, my question is - how do we integrate Font Awesome within Vuetify's v-icon component?</p>

<p>For reference, I’m using what is outlined here:</p>

<p><a href="https://vuetifyjs.com/en/components/icons" rel="noreferrer">https://vuetifyjs.com/en/components/icons</a></p>

<p>Which is identical to what I have prescribed above, but sadly my icon does not display...</p>

<p><strong><em>Update</em></strong>: I specifically want a solution which doesn't include adding the rather heavy Font Awesome <code>all.css</code> file (<code>&lt;link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet"&gt;</code>) - instead importing on an icon by icon need. (the overall weight of the minified all.css file is 52kb in <code>v.5.2.0</code>.</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2408篇《具有Vuetify的FontAwesome-如何在v-icon组件中包含Font Awesome图标》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
