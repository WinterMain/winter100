---
layout: question
title:  Nuxt＆Vuetify：如何控制CSS文件的加载顺序？
date:   2020-03-23T13:08:14.000Z
description: 在我的Nuxt/Vuetify应用中，我尝试在的CSS 之后 加载我的自定义VuetifyCSS，但是Vuetify无论如何，之后都会加载。我试图颠倒CS...
img: 
author: 西里宝儿
category: question
answer: 1
tags: css Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的</font></font><code>Nuxt/Vuetify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用中，我尝试在的CSS </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后</font></font></em> <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">加载我的自定义</font></font><code>Vuetify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS，但是</font></font><code>Vuetify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，之后都会加载。</font><font style="vertical-align: inherit;">我试图颠倒CSS数组中的顺序：</font></font></p>

<pre><code>css: [<font></font>
    '~/assets/style/main.scss',<font></font>
    '~/assets/style/app.styl'<font></font>
  ],<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...然后将其交换，无济于事。 </font></font></p>

<p><font style="vertical-align: inherit;"></font><a href="https://stackoverflow.com/questions/53087096/vuetify-css-comes-after-my-own-css-with-nuxt-2-0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于该主题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><a href="https://stackoverflow.com/questions/53087096/vuetify-css-comes-after-my-own-css-with-nuxt-2-0"><font style="vertical-align: inherit;">上一个问题</font></a><font style="vertical-align: inherit;">的受欢迎程度</font><font style="vertical-align: inherit;">加上缺乏答案，使我认为问题就在</font></font><code>Vuetify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一边，作者并没有费心去解决该问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这也许不是正确的解释，确实有解决方案？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3049篇《Nuxt＆Vuetify：如何控制CSS文件的加载顺序？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
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
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nuxt似乎是一个悬而未决的问题，不幸的是尚未解决。</font><font style="vertical-align: inherit;">Vuetify说他们不认为这是对的：</font><a href="https://github.com/vuetifyjs/vuetify-loader/issues/23" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://github.com/vuetifyjs/vuetify-loader/issues/23" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/vuetifyjs/vuetify-loader/issues/23</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从Nuxt开始</font></font><code>^2.7.1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，人们遇到了CSS文件加载不一致的问题。</font><font style="vertical-align: inherit;">有对它的引用</font></font><a href="https://github.com/nuxt/nuxt.js/issues/4204" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这个问题上</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以及</font></font><a href="https://github.com/nuxt/nuxt.js/issues/4219" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它似乎像他们正试图修复它，</font></font><a href="https://github.com/nuxt/nuxt.js/pull/5825" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为这里要注意</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">不过，不幸的是，在发布此版本之前，我不相信除了恢复到较低版本以外，您还可以做很多事情。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
