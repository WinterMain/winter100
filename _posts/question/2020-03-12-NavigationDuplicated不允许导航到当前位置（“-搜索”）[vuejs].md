---
layout: question
title:  NavigationDuplicated不允许导航到当前位置（“ /搜索”）\[vuejs\]
date:   2020-03-12T04:48:08.000Z
description: 问题嗨，开发人员，我有一个问题，当我想多次搜索时会显示NavigationDuplicated错误。我的搜索是在导航栏中，而我配置搜索的方式是使用...
img: 
author: Pro乐
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嗨，开发人员，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个问题，当我想多次搜索时会显示</font></font><code>NavigationDuplicated</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误。</font><font style="vertical-align: inherit;">我的搜索是在导航栏中，而我配置搜索的方式是使用模型获取值，然后将该值作为参数传递给ContentSearched组件，然后在该组件中接收搜索的值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道正确的方法是使用发射器，但我仍然不知道如何学习使用它。</font><font style="vertical-align: inherit;">要访问发射是</font></font><code>context.emit('', someValue)</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人可以帮助我解决问题，我将不胜感激。</font></font></p>

<pre class="lang-sh prettyprint-override"><code>NavigationDuplicated&nbsp;{_name: "NavigationDuplicated", name: "NavigationDuplicated", message: "Navigating to current location ("/search") is not allowed", stack: "Error↵    at new NavigationDuplicated (webpack-int…node_modules/vue/dist/vue.runtime.esm.js:1853:26)"}
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导航栏</font></font></strong></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;nav class="navbar navbar-expand-lg navbar-dark bg-nav" v-bind:class="{'navbarOpen': show }"&gt;<font></font>
    &lt;div class="container"&gt;<font></font>
      &lt;router-link to="/" class="navbar-brand"&gt;<font></font>
        &lt;img src="../assets/logo.png" alt="Horizon Anime" id="logo"&gt;<font></font>
      &lt;/router-link&gt;<font></font>
<font></font>
      &lt;button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" v-on:click.prevent="toggleNavbar"&gt;<font></font>
        &lt;span class="navbar-toggler-icon"&gt;&lt;/span&gt;<font></font>
      &lt;/button&gt;<font></font>
<font></font>
      &lt;div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{'show': show }"&gt;<font></font>
        &lt;ul class="navbar-nav mr-auto"&gt;<font></font>
          &lt;li class="nav-item"&gt;<font></font>
            &lt;router-link class="nav-link" to="/" &gt;&lt;i class="fas fa-compass"&gt;&lt;/i&gt; Series&lt;/router-link&gt;<font></font>
          &lt;/li&gt;<font></font>
          &lt;li class="nav-item"&gt;<font></font>
            &lt;router-link class="nav-link" :to="{name: 'EpisodesSection'}" &gt;&lt;i class="fas fa-compact-disc"&gt;&lt;/i&gt; Episodios&lt;/router-link&gt;<font></font>
          &lt;/li&gt;<font></font>
          &lt;li class="nav-item"&gt;<font></font>
            &lt;router-link class="nav-link" :to="{name: 'MovieSection'}" &gt;&lt;i class="fas fa-film"&gt;&lt;/i&gt; Peliculas&lt;/router-link&gt;<font></font>
          &lt;/li&gt;<font></font>
        &lt;/ul&gt;<font></font>
        &lt;div class="search-bar"&gt;<font></font>
          &lt;form class="form-inline my-2 my-lg-0"&gt;<font></font>
            &lt;input class="form-control mr-sm-2" v-model="query" type="search" placeholder="Buscar películas, series ..." aria-label="Search"&gt;<font></font>
            &lt;button class="btn btn-main my-2 my-sm-0" @click.prevent="goto()" type="submit"&gt;&lt;i class="fas fa-search"&gt;&lt;/i&gt;&lt;/button&gt;<font></font>
          &lt;/form&gt;<font></font>
        &lt;/div&gt;<font></font>
      &lt;/div&gt;<font></font>
    &lt;/div&gt;<font></font>
  &lt;/nav&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
  import {value} from 'vue-function-api';<font></font>
  import {useRouter} from '@u3u/vue-hooks';<font></font>
<font></font>
  export default {<font></font>
    name: "NavBar",<font></font>
    setup(context){<font></font>
      const {router} = useRouter();<font></font>
      const query = value("");<font></font>
<font></font>
      let show = value(true);<font></font>
      const toggleNavbar = () =&gt; show.value = !show.value;      <font></font>
<font></font>
      const goto = () =&gt;{<font></font>
        let to = {name: 'ContentSearched' , params:{query: query}}<font></font>
        router.push(to);<font></font>
      };<font></font>
<font></font>
      return{<font></font>
        show,<font></font>
        toggleNavbar,<font></font>
        goto,<font></font>
        query<font></font>
      }<font></font>
    }<font></font>
  }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ContentSearched.vue</font></font></strong></p>

<pre><code>&lt;template&gt;<font></font>
   &lt;div class="container"&gt;<font></font>
     &lt;BoxLink/&gt;<font></font>
    &lt;main class="Main"&gt;<font></font>
      &lt;div class="alert alert-primary" role="alert"&gt;<font></font>
        Resultados para "{{query}}"<font></font>
      &lt;/div&gt;<font></font>
      &lt;div v-if="isLoading"&gt;<font></font>
        &lt;!-- &lt;img class="loading" src="../assets/loading.gif" alt="loading"&gt; --&gt;<font></font>
      &lt;/div&gt;<font></font>
      &lt;div v-else&gt;<font></font>
        &lt;ul class="ListEpisodios AX Rows A06 C04 D02"&gt;<font></font>
          &lt;li v-for="(content, index) in contentSearched" :key="index"&gt;<font></font>
            &lt;div v-if="content.type === 'serie'"&gt;<font></font>
              &lt;Series :series="content"/&gt;<font></font>
            &lt;/div&gt;<font></font>
            &lt;div v-if="content.type === 'pelicula'"&gt;<font></font>
              &lt;Movies :movies="content"/&gt;<font></font>
            &lt;/div&gt;<font></font>
          &lt;/li&gt;<font></font>
        &lt;/ul&gt;<font></font>
      &lt;/div&gt;<font></font>
    &lt;/main&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
<font></font>
&lt;script&gt;<font></font>
  import {onCreated} from "vue-function-api"<font></font>
  import {useState , useRouter , useStore} from '@u3u/vue-hooks';<font></font>
  import BoxLink from "../components/BoxLink";<font></font>
  import Movies from "../components/Movies";<font></font>
  import Series from "../components/Series";<font></font>
<font></font>
  export default{<font></font>
    name: 'ContentSearched',<font></font>
    components:{<font></font>
      BoxLink,<font></font>
      Movies,<font></font>
      Series<font></font>
    },<font></font>
    setup(context){<font></font>
      const store = useStore();<font></font>
      const {route} = useRouter();<font></font>
<font></font>
      const state = {<font></font>
        ...useState(['contentSearched' , 'isLoading'])<font></font>
      };<font></font>
<font></font>
      const query = route.value.params.query;<font></font>
<font></font>
      onCreated(() =&gt;{<font></font>
        store.value.dispatch('GET_CONTENT_SEARCH' , query.value);<font></font>
      });<font></font>
      return{<font></font>
        ...state,<font></font>
        query,<font></font>
      }<font></font>
    }<font></font>
  };<font></font>
&lt;/script&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第964篇《NavigationDuplicated不允许导航到当前位置（“ /搜索”）[vuejs]》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙老丝</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个简单而有效的解决方案：</font></font></p>

<pre><code>if(from.fullPath === to.fullPath){<font></font>
    return<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid神无</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不愿意捕获所有类型的错误，那么我认为此实现更为体贴：</font></font></p>

<pre><code>this.$router.push("path").catch(error =&gt; {<font></font>
  if (error.name != "NavigationDuplicated") {<font></font>
    throw error;<font></font>
  }<font></font>
});<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
