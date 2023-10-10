---
layout: question
title:  asyncData和nuxt js中的方法有什么区别？
date:   2020-03-24T08:00:18.000Z
description: 我目前使用 asyncData 用于获取api数据，但只能在页面中使用（不适用于组件）。但是方法可以用在页面和组件中。这两种方法的工作方式相...
img: 
author: LEY理查德
category: question
answer: 1
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我目前使用 </font></font></p>

<ul>
<li><code>asyncData</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 用于获取api数据，但只能在页面中使用（不适用于组件）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是方法可以用在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面和组件中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这两种方法的工作方式相同，因此，我正在考虑使用获取api数据的方法。</font><font style="vertical-align: inherit;">所以我想知道</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">asyncData和method</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之间有什么重要意义</font><font style="vertical-align: inherit;">吗？</font></font></p>

<pre><code>export default {<font></font>
  async asyncData ({ req }) {<font></font>
    let { data } = await axios.get(process.env.API_SERVER + `/v1/projects`)<font></font>
    return { items: data }<font></font>
  },<font></font>
  data () {<font></font>
    return {<font></font>
      items: null<font></font>
    }<font></font>
  },<font></font>
  methods: {<font></font>
    async getItems () {<font></font>
       let { data } = await axios.get(process.env.API_SERVER + `/v1/projects`)<font></font>
       this.items = data<font></font>
    }<font></font>
  }<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3491篇《asyncData和nuxt js中的方法有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有很大的不同：</font></font></p>

<p><code>asyncData</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是一种在初始化组件之前以及因此在设置组件数据之前自动调用的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，您将无法</font></font><code>this</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在自己的方法中</font><font style="vertical-align: inherit;">获得</font><font style="vertical-align: inherit;">喜欢。</font></font></p>

<p><code>asyncData</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于服务器端渲染很重要，在服务器端渲染中，您想先使用组件中的数据对数据进行渲染，然后再获取数据。</font><font style="vertical-align: inherit;">Nuxt将等到获取数据后再进行初始化，然后渲染组件。</font><font style="vertical-align: inherit;">否则它将被清空。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">初始化组件时，方法首先可用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><a href="https://nuxtjs.org/guide/async-data" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在文档中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到有关asyncData的更多信息</font><font style="vertical-align: inherit;">，并对其进行了很好的描述。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
