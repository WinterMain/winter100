---
layout: question
title:  （Nuxt.js / Vue.js）刷新后在Vuex存储中设置axios身份验证令牌会重置
date:   2020-03-23T13:16:07.000Z
description: 我有以下商店代码来处理登录，注销，获取用户并将令牌设置为所有axios请求作为auth标头。它与客户端渲染效果很好，比如说我进入登录页面，登录，获取令...
img: 
author: 乐米亚
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有以下商店代码来处理登录，注销，获取用户并将令牌设置为所有axios请求作为auth标头。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它与客户端渲染效果很好，比如说我进入登录页面，登录，获取令牌，将其存储在cookie中。。但是，当我刷新页面时，似乎不再设置令牌了。在NuxtServerInit上执行操作，仍然没有运气。任何有关我的代码失败的想法吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的store / index.js文件：</font></font></p>

<p><a href="https://jsfiddle.net/3dc07yv4/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://jsfiddle.net/3dc07yv4/</font></font></a></p>

<pre><code>import Cookie from 'cookie'<font></font>
import Cookies from 'js-cookie'<font></font>
<font></font>
export const state = () =&gt; ({<font></font>
  sidebar: true,<font></font>
  token: null,<font></font>
  user: null<font></font>
})<font></font>
<font></font>
export const mutations = {<font></font>
  // SET SIDEBAR<font></font>
  toggleSidebar (state) {<font></font>
    state.sidebar = !state.sidebar<font></font>
  },<font></font>
  // SET USER<font></font>
  setUser (state, user) {<font></font>
    state.user = user<font></font>
  },<font></font>
  // SET TOKEN<font></font>
  setToken (state, token) {<font></font>
    state.token = token<font></font>
  }<font></font>
}<font></font>
<font></font>
export const getters = {<font></font>
  loggedIn (state) {<font></font>
    return Boolean(state.user &amp;&amp; state.token)<font></font>
  }<font></font>
}<font></font>
<font></font>
export const actions = {<font></font>
  async nuxtServerInit ({ dispatch }, { req }) {<font></font>
    await dispatch('fetch')<font></font>
  },<font></font>
  // Update token<font></font>
  async updateToken ({ commit }, token) {<font></font>
    // Update token in store's state<font></font>
    commit('setToken', token)<font></font>
    // Set Authorization token for all axios requests<font></font>
    console.log('Setting axios token to: ', token)<font></font>
    this.$axios.setToken(token, '')<font></font>
    // Update cookies<font></font>
    if (process.browser) {<font></font>
      // ...Browser<font></font>
      if (token) {<font></font>
        Cookies.set('ccmsToken', token, { expires: 1 })<font></font>
      } else {<font></font>
        Cookies.remove('ccmsToken')<font></font>
      }<font></font>
    } else {<font></font>
      // ...Server<font></font>
      let params = {<font></font>
        domain: '/'<font></font>
      }<font></font>
      if (!token) {<font></font>
        let expires<font></font>
        let date = new Date()<font></font>
        expires = date.setDate(date.getDate() + 1)<font></font>
        params.expires = new Date(expires)<font></font>
      }<font></font>
      this.app.context.res.setHeader('Set-Cookie', Cookie.serialize('ccmsToken', token, params))<font></font>
    }<font></font>
  },<font></font>
<font></font>
  // Fetch Token<font></font>
  async fetchToken ({ dispatch }) {<font></font>
    let token<font></font>
    // Try to extract token from cookies<font></font>
    if (!token) {<font></font>
      const cookieStr = process.browser ? document.cookie : this.app.context.req.headers.cookie<font></font>
      const cookies = Cookie.parse(cookieStr || '') || {}<font></font>
      token = cookies['ccmsToken']<font></font>
    }<font></font>
    if (token) {<font></font>
      await dispatch('updateToken', token)<font></font>
    }<font></font>
  },<font></font>
<font></font>
  // Reset<font></font>
  async reset ({ dispatch, commit }) {<font></font>
    commit('setUser', null)<font></font>
    await dispatch('updateToken', null)<font></font>
  },<font></font>
<font></font>
  // Fetch<font></font>
  async fetch ({ getters, state, commit, dispatch }, username = 'admin', { endpoint = 'http://localhost:8000/api/user' } = {}) {<font></font>
    // Fetch and update latest token<font></font>
    await dispatch('fetchToken')<font></font>
    // Skip if there is no token set<font></font>
    if (!state.token) {<font></font>
      return<font></font>
    }<font></font>
<font></font>
    // Try to get user profile<font></font>
    try {<font></font>
      const data = await this.$axios.$get(endpoint + '?username=' + username)<font></font>
      commit('setUser', data)<font></font>
    } catch (e) {<font></font>
      // Reset store<font></font>
      await dispatch('reset')<font></font>
    }<font></font>
  },<font></font>
<font></font>
  // Login<font></font>
  async login ({ dispatch }, { fields, endpoint = 'http://localhost:8000/api/login' } = {}) {<font></font>
    try {<font></font>
      // Send credentials to API<font></font>
      let data = await this.$axios.$post(endpoint, fields)<font></font>
      if (data.success) {<font></font>
        await dispatch('updateToken', data['token'])<font></font>
        // Fetch authenticated user<font></font>
        await dispatch('fetch', data.user.username)<font></font>
      } else {<font></font>
        throw new Error(data.message)<font></font>
      }<font></font>
    } catch (error) {<font></font>
      if (error.response &amp;&amp; error.response.status === 401) {<font></font>
        throw new Error('Bad credentials')<font></font>
      }<font></font>
      throw error<font></font>
    }<font></font>
  },<font></font>
<font></font>
  // Logout<font></font>
  async logout ({ dispatch, state }) {<font></font>
    try {<font></font>
      await dispatch('reset')<font></font>
    } catch (e) {<font></font>
      console.error('Error while logging out', e)<font></font>
    }<font></font>
  }<font></font>
<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3055篇《（Nuxt.js / Vue.js）刷新后在Vuex存储中设置axios身份验证令牌会重置》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
