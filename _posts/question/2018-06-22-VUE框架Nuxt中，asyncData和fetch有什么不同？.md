---
layout: question
title:  VUE框架Nuxt中，asyncData和fetch有什么不同？
date:   2018-06-22T10:21:41.000Z
description: 经常用到asyncData和fetch都是在什么时候执行的...
img: 
author: 杨天栾
category: question
answer: 1
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>经常用到asyncData和fetch都是在什么时候执行的</p>
</div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第59篇《VUE框架Nuxt中，asyncData和fetch有什么不同？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Winter</span>
            <span class="discuss-time">2018.06.22</span>
          </div>
          <div class="discuss-comment">如果你想要在服务器端获取并渲染数据。那么Nuxt.js的asyncData方法可以达到这个效果，它使得你能够在渲染组件之前异步获取数据。
asyncData方法会在组件（限于页面组件）每次加载之前被调用。它可以在服务端或路由更新之前被调用。

fetch 方法用于在渲染页面前填充应用的状态树（store）数据， 与 asyncData 方法类似，不同的是它不会设置组件的数据。
如果页面组件设置了 fetch 方法，它会在组件每次加载前被调用（在服务端或切换至目标路由之前）。

</div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
