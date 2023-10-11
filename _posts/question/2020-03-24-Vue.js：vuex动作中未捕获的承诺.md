---
layout: question
title:  Vue.js：vuex动作中未捕获的承诺
date:   2020-03-24T06:40:00.000Z
description: 我了解vuex动作会返回承诺，但是我还没有找到处理 vuex中错误的理想模式。我当前的方法是在axios插件上使用错误拦截器，然后将错误提交给我的vuex...
img: 
author: GO
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我了解vuex动作会返回承诺，但是我还没有找到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> vuex中</font><strong><font style="vertical-align: inherit;">错误</font></strong><font style="vertical-align: inherit;">的</font><strong><font style="vertical-align: inherit;">理想模式</font></strong><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我当前的方法是在axios插件上使用错误拦截器，然后将错误提交给我的vuex存储。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></em> <strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">plugins / axios.js中</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>export default function({ $axios, store }) {<font></font>
    $axios.onError(error =&gt; {<font></font>
        store.dispatch('setError', error.response.data.code);<font></font>
    });<font></font>
}<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font></em> <strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">store / index.js中</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>export const state = () =&gt; ({<font></font>
    error: null,<font></font>
});<font></font>
<font></font>
export const mutations = {<font></font>
    SET_ERROR(state, payload) {<font></font>
        state.error = payload;<font></font>
    },<font></font>
}<font></font>
<font></font>
export const actions = {<font></font>
    setError({ commit }, payload) {<font></font>
        commit('SET_ERROR', payload);<font></font>
    },<font></font>
};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我将使用一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误组件来</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">监视错误状态并显示是否存在错误。</font><font style="vertical-align: inherit;">因此，实际上</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不需要捕获</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的操作或调度该操作的组件中的</font><strong><font style="vertical-align: inherit;">任何错误</font></strong><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是我不禁担心它的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设计</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否很</font><strong><font style="vertical-align: inherit;">糟糕，导致未捕获异常</font></strong><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">如果我通过这种设计处理错误，会遇到什么问题？</font><font style="vertical-align: inherit;">关于更好的方法的建议？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3395篇《Vue.js：vuex动作中未捕获的承诺》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
