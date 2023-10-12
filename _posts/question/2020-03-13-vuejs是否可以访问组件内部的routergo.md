---
layout: question
title:  vuejs：是否可以访问组件内部的router.go（）？
date:   2020-03-13T07:37:23.000Z
description: 我想router.go在组件内部调用目前我已经设置了window.router = router//代码index.jsconst App =...
img: 
author: 乐ASam
category: question
answer: 0
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想</font></font><code>router.go</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在组件内部</font><font style="vertical-align: inherit;">调用</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前我已经设置了</font></font><code>window.router = router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//代码</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">index.js</font></font></p>

<pre><code>const App = Vue.extend(require('./views/app.vue'))<font></font>
router.start(App, '#app')<font></font>
window.router = router // I don't want to set this global variable<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导航栏</font></font></p>

<pre><code>methods: {<font></font>
        search () {<font></font>
            window.router.go({<font></font>
                name: 'search',<font></font>
                query: { q: this.query }<font></font>
            })<font></font>
        }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在寻找的是这样的， </font></font><code>this.$router.go</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导航栏</font></font></p>

<pre><code>methods: {<font></font>
        search () {<font></font>
            this.$router.go({<font></font>
                name: 'search',<font></font>
                query: { q: this.query }<font></font>
            })<font></font>
        }<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢，非常感谢您的帮助</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1399篇《vuejs：是否可以访问组件内部的router.go（）？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
