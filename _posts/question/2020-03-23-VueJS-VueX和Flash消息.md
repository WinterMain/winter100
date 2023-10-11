---
layout: question
title:  VueJS-VueX和Flash消息
date:   2020-03-23T13:06:49.000Z
description: 我将VueJS 2，VueX，NuxtJS和Vue-Snotify（artemsky / vue-snotify）用于Flash通知。这可能不是Vue...
img: 
author: 十三西门
category: question
answer: 0
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">VueJS 2</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">VueX</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NuxtJS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue-Snotify</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="https://github.com/artemsky/vue-snotify" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">artemsky / vue-snotify</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）用于Flash通知。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能不是VueX的正确用法，但我想</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分派</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> try / catch中捕获的错误。</font></font></p>

<pre><code>try {<font></font>
    throw new Error('test')<font></font>
} catch (error) {<font></font>
    this.$store.dispatch('errorHandler', error)<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，如果有多个错误，则使用VueX进行的分派应使用Snotify-View循环显示通知。</font></font></p>

<pre><code>actions: {<font></font>
    async errorHandler (error) {<font></font>
        this.$snotify.error(error)<font></font>
        // and if multiple errors, then while on error<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您如何看待以及如何在VueX中恢复$ snotify实例？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3046篇《VueJS-VueX和Flash消息》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
