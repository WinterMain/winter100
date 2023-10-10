---
layout: question
title:  定义Vue-Router路由时访问Vuex状态
date:   2020-03-12T06:45:20.000Z
description: 我有以下Vuex商店（main.js）：import Vue from 'vue'import Vuex from 'vuex'Vue.use(...
img: 
author: TonyEva
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有以下Vuex商店（main.js）：</font></font></p>

<pre><code>import Vue from 'vue'<font></font>
import Vuex from 'vuex'<font></font>
<font></font>
Vue.use(Vuex)<font></font>
<font></font>
//init store<font></font>
const store = new Vuex.Store({<font></font>
    state: {<font></font>
        globalError: '',<font></font>
        user: {<font></font>
            authenticated: false<font></font>
        }<font></font>
     },<font></font>
     mutations: {<font></font>
         setGlobalError (state, error) {<font></font>
             state.globalError = error<font></font>
         }<font></font>
     }<font></font>
})<font></font>
<font></font>
//init app<font></font>
const app = new Vue({<font></font>
    router: Router,<font></font>
    store,<font></font>
    template: '&lt;app&gt;&lt;/app&gt;',<font></font>
    components: { App }<font></font>
}).$mount('#app')<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还为Vue-Router（routes.js）定义了以下路由：</font></font></p>

<pre><code>import Vue from 'vue'<font></font>
import VueRouter from 'vue-router'<font></font>
<font></font>
Vue.use(VueRouter)<font></font>
<font></font>
//define routes<font></font>
const routes = [<font></font>
    { path: '/home', name: 'Home', component: Home },<font></font>
    { path: '/login', name: 'Login', component: Login },<font></font>
    { path: '/secret', name: 'Secret', component: SecretPage, meta: { requiresLogin: true }<font></font>
]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图这样做，以便如果Vuex商店的</font></font><code>user</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象具有</font></font><code>authenticated</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性false，则让路由器将用户重定向到“登录”页面。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有这个：</font></font></p>

<pre><code>Router.beforeEach((to, from, next) =&gt; {<font></font>
    if (to.matched.some(record =&gt; record.meta.requiresLogin) &amp;&amp; ???) {<font></font>
        // set Vuex state's globalError, then redirect<font></font>
        next("/Login")<font></font>
    } else {<font></font>
        next()<font></font>
    }<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是我不知道如何</font></font><code>user</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从beforeEach函数内部</font><font style="vertical-align: inherit;">访问Vuex存储的</font><font style="vertical-align: inherit;">对象。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道我可以在组件内部使用路由器保护逻辑</font></font><code>BeforeRouteEnter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但这会使每个组件混乱。</font><font style="vertical-align: inherit;">我想在路由器级别集中定义它。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1016篇《定义Vue-Router路由时访问Vuex状态》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin宝儿</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这就是我想要的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在App.vue中，我将对存储身份验证详细信息的cookie保持监视。</font><font style="vertical-align: inherit;">（显然，在身份验证之后，我会将包含身份验证详细信息的令牌存储为cookie）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，只要此Cookie变空，我都会将用户路由到/ login页面。</font><font style="vertical-align: inherit;">注销将删除cookie。</font><font style="vertical-align: inherit;">现在，如果用户注销后回击，则由于cookie不存在（这要求用户登录），因此该用户将被路由到登录页面。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十万个冷笑话</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与其他应用程序状态分开管理位置状态会使这样的事情变得比原本需要的困难。</font><font style="vertical-align: inherit;">在处理完Redux和Vuex中的类似问题之后，我开始</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">模块</font><font style="vertical-align: inherit;">管理</font><font style="vertical-align: inherit;">Vuex商店</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">位置状态</font></font><code>router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可能要考虑使用这种方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的特定情况下，您可以在Vuex商店本身内部监视位置何时更改，并分派适当的“重定向”操作，如下所示：</font></font></p>

<pre><code>dispatch("router/push", {path: "/login"})
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将位置状态作为Vuex模块进行管理比您想象的要容易。</font><font style="vertical-align: inherit;">如果您想尝试一下，可以使用我的作为起点：</font></font></p>

<p><a href="https://github.com/geekytime/vuex-router" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/geekytime/vuex-router</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
