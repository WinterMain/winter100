---
layout: question
title:  如何在Vue.js-Nuxt-TypeScript应用程序中访问路由参数？
date:   2020-03-23T04:03:44.000Z
description: 我正在建立一个基于Nuxt TypeScript Starter模板的网站。我已经在页面文件夹中创建了动态路由的页面_id.vue，并且希望可以访问TS类...
img: 
author: 村村番长
category: question
answer: 3
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在建立一个基于</font></font><a href="https://github.com/nuxt-community/typescript-template" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nuxt TypeScript Starter</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模板的网站。</font><font style="vertical-align: inherit;">我已经在页面文件夹中创建了动态路由的页面_id.vue，并且希望可以访问TS类中的id属性。</font><font style="vertical-align: inherit;">我可以通过写在模板中访问它，</font></font><code>{{$route.params.id}}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是当我尝试</font></font><code>$route</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在类内部</font><font style="vertical-align: inherit;">引用时</font><font style="vertical-align: inherit;">，出现错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误TS2304：找不到名称'$ route'。</font></font></p>
</blockquote></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2789篇《如何在Vue.js-Nuxt-TypeScript应用程序中访问路由参数？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更好和正确的解决方案，用于nuxtjs项目以查找当前页面的URL或参数 </font></font></p>

<pre><code>{{ $nuxt.$route.name }}
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为一个简单的解决方案，请尝试从vue-router导入路由，如下所示：</font></font></p>

<pre class="lang-js prettyprint-override"><code>&lt;script lang="ts"&gt;<font></font>
import Component from "vue-class-component"<font></font>
import { Route } from "vue-router"<font></font>
<font></font>
@Component({})<font></font>
export default class RoutingExample extends Vue {<font></font>
    created() {<font></font>
        console.log(this.$route) // this should not throw TS errors now<font></font>
    }<font></font>
<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为其他解决方案将需要您</font></font><a href="https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展Vue模块</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这与您</font></font><a href="https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Vue文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以找到的类似</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以在此仓库中找到更多Vue + TypeScript示例：</font><a href="https://github.com/jsonberry/vue-typescript-examples" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/jsonberry/vue-typescript-examples" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/jsonberry/vue-typescript-examples</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我能够通过获取函数访问route.params，从默认情况下传递给该函数的上下文对象中获取参数：</font></font></p>

<pre><code>&lt;script lang="ts"&gt;<font></font>
import Component from "nuxt-class-component"<font></font>
@Component({})<font></font>
export default class RoutingExample extends Vue {<font></font>
    fetch ({ store, params }) {<font></font>
       console.log("params:", params.id);<font></font>
       ...<font></font>
    }<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但需要注意的是，参数只能在该获取挂钩中使用，而不能在其他已创建或已安装的挂钩中使用。</font><font style="vertical-align: inherit;">所以杰森的答案也是有效的</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
