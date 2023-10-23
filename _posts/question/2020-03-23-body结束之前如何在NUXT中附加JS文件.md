---
layout: question
title:  </ body>结束之前如何在NUXT中附加JS文件
date:   2020-03-23T04:01:10.000Z
description: 我试图在NUXT中附加javascript文件。但是，当我使用nuxt.config附加javascript时，它可以正常运行，但不如我所愿。 hea...
img: 
author: 蛋蛋
category: question
answer: 1
tags: webpack Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图在NUXT中附加javascript文件。</font><font style="vertical-align: inherit;">但是，当我使用nuxt.config附加javascript时，它可以正常运行，但不如我所愿。</font></font></p>

<pre><code> head: {<font></font>
    title: 'mynuxt',<font></font>
    meta: [<font></font>
      { charset: 'utf-8' },<font></font>
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },<font></font>
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }<font></font>
    ],<font></font>
    link: [<font></font>
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },<font></font>
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },<font></font>
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },<font></font>
      { rel: 'stylesheet', href: '/css/mdb.min.css' },<font></font>
      { rel: 'stylesheet', href: '/css/style.min.css' },<font></font>
    ],<font></font>
    script: [<font></font>
          { src: '/js/bootstrap.min.js' },<font></font>
          { src: '/js/popper.min.js' },<font></font>
          { src: '/js/mdb.min.js' }<font></font>
    ],<font></font>
  },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我检查元素插入但在头。
</font></font><a href="https://www.samyoc.com//uploads/users/24263/images/thumbnails/1584935943476.png" data-src="https://www.samyoc.com//uploads/users/24263/images/1584935943476.png" rel="noreferrer"><img src="https://i.stack.imgur.com/9hFRb.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">香港专业教育学院搜索已经在谷歌，但尚未找到任何解决方案。</font><font style="vertical-align: inherit;">提前致谢</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2783篇《</ body>结束之前如何在NUXT中附加JS文件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">多罗罗</span>
            <span class="discuss-time">2021.06.28</span>
          </div>
          <div class="discuss-comment"><p>解决方法 <a href="https://jingzhisheng.cn/blog/detail/1404673151476043776">https://jingzhisheng.cn/blog/detail/1404673151476043776</a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
