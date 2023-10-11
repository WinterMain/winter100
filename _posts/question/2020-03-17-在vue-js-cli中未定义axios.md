---
layout: question
title:  在vue js cli中未定义axios
date:   2020-03-17T07:12:09.000Z
description: 我使用以下npm install axios命令安装了axios 这是我的package.json依赖项 "dependencies"  {    ...
img: 
author: 西里JinJin
category: question
answer: 2
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用以下</font></font><code>npm install axios</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令</font><font style="vertical-align: inherit;">安装了axios </font><font style="vertical-align: inherit;">这是我的</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依赖项</font></font></p>

<pre><code> "dependencies": {<font></font>
    "axios": "^0.18.0",<font></font>
    "bootstrap-vue": "^2.0.0-rc.11",<font></font>
    "vue": "^2.5.2",<font></font>
    "vue-router": "^3.0.1"<font></font>
  },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在</font></font><code>main.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">注册了axios </font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>import Vue from 'vue'<font></font>
import VueRouter from 'vue-router'<font></font>
import BootstrapVue from 'bootstrap-vue'<font></font>
<font></font>
import axios from 'axios'<font></font>
import App from './App'<font></font>
import routerList from './routes'<font></font>
<font></font>
Vue.use(axios)<font></font>
Vue.use(BootstrapVue)<font></font>
Vue.use(VueRouter)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我尝试在我的一个组件中使用axios时，出现此错误：</font></font></p>

<pre><code>Uncaught ReferenceError: axios is not defined
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何解决？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1888篇《在vue js cli中未定义axios》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包括以下行： </font></font></p>

<pre><code>import {AxiosInstance as axios} from "axios";
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><code>Vue.use</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示添加插件。</font><font style="vertical-align: inherit;">但是，</font></font><code>axios</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不是的插件</font></font><code>Vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此您无法通过进行全局添加</font></font><code>use</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的建议是</font></font><code>axios</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅在需要时</font><font style="vertical-align: inherit;">导入</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，如果您确实需要全局访问它，则可以将其添加到原型中。</font></font></p>

<pre><code>Vue.prototype.$axios = axios
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后您可以</font></font><code>axios</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>this.$axios</code></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
