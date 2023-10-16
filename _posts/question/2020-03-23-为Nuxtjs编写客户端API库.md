---
layout: question
title:  为Nuxt.js编写客户端API库
date:   2020-03-23T06:45:59.000Z
description: 这更多是一个体系结构/设计问题，而不是“为什么不起作用”。我正在编写一个由外部API（ExpressJS）驱动的Nuxt.js SSR Web应用程序...
img: 
author: 小胖Itachi西里
category: question
answer: 0
tags: axios Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这更多是一个体系结构/设计问题，而不是“为什么不起作用”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在编写一个由外部API（ExpressJS）驱动的Nuxt.js SSR Web应用程序。</font><font style="vertical-align: inherit;">API负责身份验证（通过</font></font><a href="https://github.com/nuxt-community/auth-module" rel="noreferrer"><code>nuxt-auth</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-JWT）和检索用户数据等。据我所知，SSR代码代表客户端在客户端上设置Cookie并使用它来检索JWT以向API服务器进行身份验证浏览器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我为数据库中的每个模型编写了一些辅助方法，如下所示（简化）：</font></font></p>

<pre><code>// services/UserService.js<font></font>
export default class UserService {<font></font>
  constructor(ctx) {<font></font>
    this.$axios = ctx.$axios<font></font>
  }<font></font>
<font></font>
  getUsers () {<font></font>
    return this.$axios.get('/api/users')<font></font>
  }<font></font>
<font></font>
  createUser (params) {<font></font>
    return this.$axios.post('/api/users', params)<font></font>
  }<font></font>
<font></font>
  updateUser (params) {<font></font>
    return this.$axios.put('/api/users/' + params.id, params)<font></font>
  }<font></font>
<font></font>
  getUser (id) {<font></font>
    return this.$axios.get('/api/users/' + id)<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对于SSR非常有效，因为我可以在Nuxt页面中执行此操作：</font></font></p>

<pre><code>&lt;template&gt;{{user.display_name}}&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
import UserService from '@/services/UserService'<font></font>
<font></font>
export default {<font></font>
  asyncData ({ params, $axios }) {<font></font>
    const api = new ApiService({ $axios })<font></font>
<font></font>
    return api.Users.getUser(params).then(user =&gt; {<font></font>
      return { user, api } // this makes them available in the vue instance<font></font>
    })<font></font>
  }<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，将其呈现并发送到浏览器后，下面可能会有一个反应式表单。</font><font style="vertical-align: inherit;">当用户提交该表单以更新其个人资料时，我突然无法访问该</font></font><code>UserService</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是因为它是在</font></font><code>asyncData</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调用</font><font style="vertical-align: inherit;">内部定义的</font><font style="vertical-align: inherit;">，只能在SSR上下文中使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过</font></font><code>api</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><code>asyncData</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法以及</font><font style="vertical-align: inherit;">返回</font><font style="vertical-align: inherit;">来</font><font style="vertical-align: inherit;">修复了此问题</font></font><code>user</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后Nuxt将其放到vue实例中。</font><font style="vertical-align: inherit;">但是，这感觉</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很不对劲</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这是正确的方法吗？</font><font style="vertical-align: inherit;">你应该怎么做？</font><font style="vertical-align: inherit;">还是不是</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为Vue会监视in中的所有内容，所以这感觉特别糟糕</font></font><code>data</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我真的不需要它来跟踪api实例...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是Vue和Nuxt的新手，所以如果我忽略了某些内容，请说，但是我的问题是：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我应该如何设计使其在SSR上下文和浏览器中都能使用？</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2871篇《为Nuxt.js编写客户端API库》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
