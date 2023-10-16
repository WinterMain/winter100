---
layout: question
title:  如何将Firebase Firestore数据添加到SSR Nuxt Apps Vuex Store中
date:   2020-04-07T03:53:32.000Z
description: 我正在尝试在Nuxt应用程序中将位置设置为Vuex存储。我已经研究过使用vuexfire，但是，我不确定这在SSR应用程序中是否最佳，或者通常是最简单的最...
img: 
author: 猪猪
category: question
answer: 0
tags: 火力 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在Nuxt应用程序中将位置设置为Vuex存储。</font><font style="vertical-align: inherit;">我已经研究过使用</font></font><a href="https://github.com/posva/vuexfire/tree/firestore" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vuexfire</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是，我不确定这在SSR应用程序中是否最佳，或者通常是最简单的最佳实践。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何从Firebase Firestore请求并设置状态（在此示例中为“位置”）？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好在SSR应用程序中使用nuxtServerInit吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">商店/index.js</font></font></p>

<pre><code>import Vuex from 'vuex'<font></font>
import firebase, {auth, db} from '@/services/firebaseinit.js'<font></font>
<font></font>
const createStore = () =&gt; {<font></font>
  return new Vuex.Store({<font></font>
    state: {<font></font>
      user: null,<font></font>
      locations: [],<font></font>
    },<font></font>
    getters: {<font></font>
      // User<font></font>
      activeUser: (state) =&gt; {<font></font>
        return state.user<font></font>
      },<font></font>
      // Locations<font></font>
      loadedLocations(state) {<font></font>
        return state.loadedLocations<font></font>
      }<font></font>
    },<font></font>
    mutations: {<font></font>
      // User<font></font>
      setUser (state, payload) {<font></font>
        state.user = payload<font></font>
      },<font></font>
      // Locations<font></font>
      setLocations (state, locations) {<font></font>
        state.locations = locations<font></font>
      }<font></font>
    },<font></font>
    actions: {<font></font>
      // Locations<font></font>
      setLocations(vuexContext, locations) {<font></font>
        vuexContext.commit('setLocations', locations)<font></font>
      },  <font></font>
<font></font>
      // Users<font></font>
      autoSignIn ({commit}, payload) {<font></font>
        commit('setUser', payload)<font></font>
      },<font></font>
<font></font>
      signInWithFacebook ({commit}) {<font></font>
          return new Promise((resolve, reject) =&gt; {<font></font>
              auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())<font></font>
              resolve()<font></font>
          })<font></font>
      },<font></font>
<font></font>
      signOut ({commit}) {<font></font>
          auth.signOut().then(() =&gt; {<font></font>
              commit('setUser', null)<font></font>
          }).catch(error =&gt; console.log(error))<font></font>
      },<font></font>
<font></font>
    }<font></font>
  })<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4131篇《如何将Firebase Firestore数据添加到SSR Nuxt Apps Vuex Store中》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
