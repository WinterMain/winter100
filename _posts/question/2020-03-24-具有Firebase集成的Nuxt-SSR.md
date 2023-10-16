---
layout: question
title:  具有Firebase集成的Nuxt SSR
date:   2020-03-24T07:55:48.000Z
description: 我试图重组项目文件夹，以便可以将其部署到Firebase，看看此存储库Nuxt Firebase Vuetify。在nuxt.config.js我改变了b...
img: 
author: 小哥路易
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图重组项目文件夹，以便可以将其部署到Firebase，看看此存储库</font></font><a href="https://github.com/jefrydco/nuxt-firebase-vuetify" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nuxt Firebase Vuetify</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在</font></font><code>nuxt.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我改变了buildDir来</font></font><code>../functions/.nuxt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，乍一看它看起来工作。</font><font style="vertical-align: inherit;">但是，每当我使用来自UI框架（如Vuetify）的自定义组件时，它就会出错。</font><font style="vertical-align: inherit;">在浏览器控制台上，出现这样的错误</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户端渲染的虚拟DOM树与服务器渲染的内容不匹配。</font><font style="vertical-align: inherit;">这可能是由于错误的HTML标记（例如，在&lt;p&gt;内嵌套块级元素）或missing引起的。</font><font style="vertical-align: inherit;">保龄水化和执行完整的客户端渲染。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">知道我该如何解决吗？</font><font style="vertical-align: inherit;">还是我错过了该项目上的任何其他配置？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3483篇《具有Firebase集成的Nuxt SSR》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
