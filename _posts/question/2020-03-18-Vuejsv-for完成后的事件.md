---
layout: question
title:  Vue.js：v-for完成后的事件
date:   2020-03-18T11:12:02.000Z
description: 我正在尝试使用Vue.js构建一个简单的聊天应用程序。我的问题是，在编写新消息时，消息区域需要滚动到底部。我用v-for指令遍历消息。v-for更新D...
img: 
author: 西门达蒙
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用Vue.js构建一个简单的聊天应用程序。</font><font style="vertical-align: inherit;">我的问题是，在编写新消息时，消息区域需要滚动到底部。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用v-for指令遍历消息。</font><font style="vertical-align: inherit;">v-for更新DOM时会发生事件吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我做到了，以便消息区域div侦听组件的消息数组。</font><font style="vertical-align: inherit;">我尝试过在将消息添加到数组的同一函数中，将消息区域div的scrollTop设置为99999。但是问题是v-for没有完成对DOM的更新，因此它不会滚动到正确点。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2172篇《Vue.js：v-for完成后的事件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
