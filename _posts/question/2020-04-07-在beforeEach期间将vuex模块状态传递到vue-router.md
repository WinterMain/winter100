---
layout: question
title:  在beforeEach期间将vuex模块状态传递到vue-router
date:   2020-04-07T03:15:20.000Z
description: 我将VueJS与vuex和结合使用vue-router。我有一个vuex对其存储进行更改的模块，并试图使用该模块来确定用户是否已通过身份验证。这是我的...
img: 
author: 飞云JinJin
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将VueJS与</font></font><code>vuex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">结合使用</font></font><code>vue-router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我有一个</font></font><code>vuex</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对其存储进行更改</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">模块，并试图使用该模块来确定用户是否已通过身份验证。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的代码在相关部分中的样子。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">main.js</font></font></strong></p>

<pre><code>import Vue from 'vue'<font></font>
import App from './App.vue'<font></font>
import store from './store'<font></font>
import router from './router'<font></font>
<font></font>
router.beforeEach((to, from, next) =&gt; {<font></font>
    console.log(router.app) // prints a Vue$2 object<font></font>
    console.log(router.app.$store) // undefined<font></font>
    console.log(store.getters.isAuthenticated) // false<font></font>
    ...<font></font>
}<font></font>
<font></font>
const app = new Vue({<font></font>
  store,<font></font>
  router,<font></font>
  ...App<font></font>
})<font></font>
<font></font>
app.$mount('#app')<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/store/index.js</font></font></strong></p>

<pre><code>import Vue from 'vue'<font></font>
import Vuex from 'vuex'<font></font>
import core from './modules/core'<font></font>
<font></font>
Vue.use(Vuex)<font></font>
<font></font>
const store = new Vuex.Store({<font></font>
  modules: {<font></font>
    core: core<font></font>
  }<font></font>
})<font></font>
<font></font>
export default store<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/store/modules/core.js</font></font></strong></p>

<pre><code>import * as types from '../types'<font></font>
import api from '../../api'<font></font>
import router from '../../router'<font></font>
<font></font>
const state = {<font></font>
  token: null,<font></font>
  user: null,<font></font>
  authenticated: false<font></font>
}<font></font>
<font></font>
const mutations = {<font></font>
  [types.LOGIN_SUCCESS] (state, payload) {<font></font>
    console.log('mutate')<font></font>
    state.token = payload.token<font></font>
    state.user = payload.user<font></font>
    state.authenticated = true<font></font>
    router.go('/')<font></font>
  }<font></font>
}<font></font>
<font></font>
const getters = {<font></font>
  isAuthenticated: state =&gt; {<font></font>
    return state.authenticated<font></font>
  }<font></font>
}<font></font>
<font></font>
const actions = {<font></font>
  [types.LOGIN] (context, payload) {<font></font>
    api.getToken(payload).then(response =&gt; {<font></font>
      context.commit(types.LOGIN_SUCCESS, response)<font></font>
    })<font></font>
  }<font></font>
}<font></font>
<font></font>
export default {<font></font>
  state,<font></font>
  mutations,<font></font>
  actions,<font></font>
  getters<font></font>
}<font></font>
</code></pre>

<p>When I go thru my logic to trigger the <code>LOGIN</code> action, I can see that the mutation executed properly, and when I use the Chrome extension to view the vuex state for my <code>core</code> module, the state for <code>user</code> and <code>authenticated</code> have been properly mutated.</p>

<p><strong>QUESTION</strong></p>

<p>It seems like this module just simply has not been loaded by the time the router is running in the <code>.beforeEach</code> loop. Is this true?</p>

<p>If yes, what are some other suggestions on how to handle this situation?
If no, what am I doing incorrect?</p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
