---
layout: question
title:  如何在Nuxt.js中使用Facebook SDK？
date:   2020-03-23T06:44:19.000Z
description: 您可以看到我的代码。      npm install vue init nuxt / koa my-project（koa \` 2）  ...
img: 
author: DavaidTony宝儿
category: question
answer: 0
tags: Facebook Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以看到我的代码。</font></font></p>

<blockquote>
  <blockquote>
    <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install vue init nuxt / koa my-project（koa @ 2）</font></font></p>
  </blockquote>
</blockquote>

<pre><code>pages<font></font>
<font></font>
 |- login.vue<font></font>
<font></font>
&lt;script&gt;<font></font>
export default {<font></font>
  name: 'login',<font></font>
  method: {<font></font>
    login () {<font></font>
      let vm = this<font></font>
      FB.login(function (response) {<font></font>
        vm.statusChangeCallback(response)<font></font>
      }, {scope: 'publish_actions'})<font></font>
    }<font></font>
  },<font></font>
  mounted () {<font></font>
    console.log('mounted')<font></font>
    let vm = this<font></font>
    window.fbAsyncInit = () =&gt; {<font></font>
      FB.init({<font></font>
        appId: 'my-facebook-app-id',<font></font>
        cookie: true,<font></font>
        xfbml: true,<font></font>
        version: 'v2.8'<font></font>
      })<font></font>
      FB.getLoginStatus(function (response) {<font></font>
        vm.statusChangeCallback(response)<font></font>
      })<font></font>
    }<font></font>
<font></font>
    (function(d, s, id){<font></font>
      var js, fjs = d.getElementsByTagName(s)[0];<font></font>
      if (d.getElementById(id)) {return;}<font></font>
      js = d.createElement(s); js.id = id;<font></font>
      js.src = "//connect.facebook.net/en_US/sdk.js";<font></font>
      fjs.parentNode.insertBefore(js, fjs);<font></font>
    }(document, 'script', 'facebook-jssdk'));<font></font>
  }<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但，</font></font></p>

<blockquote>
  <blockquote>
    <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sdk.js：96未捕获的TypeError：vm.statusChangeCallback不是一个函数</font></font></p>
  </blockquote>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Nuxt项目（</font></font><a href="https://github.com/nuxt/koa" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nuxt / koa</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）时，使用Facebook SDK的最佳方法是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2866篇《如何在Nuxt.js中使用Facebook SDK？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
