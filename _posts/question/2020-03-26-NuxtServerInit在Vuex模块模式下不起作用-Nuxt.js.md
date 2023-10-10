---
layout: question
title:  NuxtServerInit在Vuex模块模式下不起作用-Nuxt.js
date:   2020-03-26T08:10:49.000Z
description: NuxtServerInit在nuxt js vuex模块模式下的初始页面渲染上不起作用。但它适用于经典模式。以下代码是我使用的流程。我的API呼叫...
img: 
author: 飞云
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NuxtServerInit在nuxt js vuex模块模式下的初始页面渲染上不起作用。</font><font style="vertical-align: inherit;">但它适用于经典模式。</font><font style="vertical-align: inherit;">以下代码是我使用的流程。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的API呼叫</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">api / CategoryApi.js</font></font></p>

<pre><code>import axios from 'axios';<font></font>
<font></font>
const HEADERS = {<font></font>
    Accept: 'application/json'<font></font>
};<font></font>
<font></font>
export default {<font></font>
    getCategory(payload) {<font></font>
        return axios.get(`${process.env.apiUrl}/category`, {<font></font>
            payload,<font></font>
            headers: HEADERS<font></font>
        });<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">商店/模块/CategoryStore.js</font></font></p>

<pre><code>import api from '~/api/CategoryApi'<font></font>
<font></font>
const state = () =&gt; ({<font></font>
    categories: []<font></font>
});<font></font>
<font></font>
const getters = {<font></font>
    allCategories: state =&gt; state.categories<font></font>
};<font></font>
<font></font>
const actions = {<font></font>
    async nuxtServerInit({commit}) {<font></font>
        const payload = {<font></font>
            per_page: 6,<font></font>
            page: 1<font></font>
        };<font></font>
        const response = await api.getCategory(payload);<font></font>
        commit('setCategories', response.data.data);<font></font>
    },<font></font>
};<font></font>
<font></font>
const mutations = {<font></font>
    setCategories: (state, data) =&gt; {<font></font>
        state.categories = data;<font></font>
    }<font></font>
};<font></font>
<font></font>
export default {<font></font>
    state,<font></font>
    getters,<font></font>
    actions,<font></font>
    mutations<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">pages / index.vue</font></font></p>

<pre><code>&lt;template&gt;<font></font>
    &lt;div&gt;<font></font>
        &lt;v-flex xs6 sm4 md2 class="text-xs-center my-2 pa-2" v-for="category in allCategories" :key="category.id"&gt;<font></font>
            {{ category.name }}<font></font>
        &lt;/v-flex&gt;<font></font>
    &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
    import { mapGetters } from 'vuex';<font></font>
<font></font>
    export default {<font></font>
        layout: 'default',<font></font>
        computed: {<font></font>
            ...mapGetters({<font></font>
                allCategories: 'modules/CategoryStore/allCategories',<font></font>
            })<font></font>
        },<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我做错了吗？</font><font style="vertical-align: inherit;">：/我想知道实现此目标的正确方法。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：我对Aldarund的回答是如何做的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（这可能对某人有帮助）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑的store / modules / CategoryStore.js</font></font></p>

<pre><code>const actions = {<font></font>
    async fetchCategories({commit}) {<font></font>
        const payload = {<font></font>
            per_page: 6,<font></font>
            page: 1<font></font>
        };<font></font>
        const response = await api.getCategory(payload);<font></font>
        commit('setCategories', response.data.data);<font></font>
    },<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加了store / index.js</font></font></p>

<pre><code>const actions = {<font></font>
    async nuxtServerInit({dispatch}) {<font></font>
        await dispatch('modules/CategoryStore/fetchCategories');<font></font>
    },<font></font>
};<font></font>
<font></font>
export default {<font></font>
    actions<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3753篇《NuxtServerInit在Vuex模块模式下不起作用-Nuxt.js》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如</font><a href="https://nuxtjs.org/guide/vuex-store/" rel="noreferrer"><font style="vertical-align: inherit;">文档</font></a><font style="vertical-align: inherit;">中所述</font></font><a href="https://nuxtjs.org/guide/vuex-store/" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在使用Vuex商店的模块模式，则只有主模块（在store / index.js中）将收到此操作。</font><font style="vertical-align: inherit;">您需要从此处链接模块操作。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您需要将nuxtServerInit放入store / index.js</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
