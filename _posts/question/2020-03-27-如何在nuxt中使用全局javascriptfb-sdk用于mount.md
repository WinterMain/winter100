---
layout: question
title:  如何在nuxt中使用全局javascript？（fb sdk用于mount（））
date:   2020-03-27T12:19:47.000Z
description: 我将项目创建为nuxt / koa。而且，这是我的代码。login.vue...<script>mounted () {    let vm...
img: 
author: ItachiTom
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将项目创建为nuxt / koa。</font><font style="vertical-align: inherit;">而且，这是我的代码。</font></font></p>

<pre><code>login.vue<font></font>
<font></font>
...<font></font>
&lt;script&gt;<font></font>
mounted () {<font></font>
    let vm = this<font></font>
    window.fbAsyncInit = () =&gt; {<font></font>
      FB.init({<font></font>
        appId: 'my-app-id',<font></font>
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
...<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们在.vue中的mount（）中使用fb sdk初始化代码。</font><font style="vertical-align: inherit;">但是，我想使用全局文件。</font><font style="vertical-align: inherit;">有什么办法吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请回答。</font><font style="vertical-align: inherit;">谢谢。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3821篇《如何在nuxt中使用全局javascript？（fb sdk用于mount（））》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
