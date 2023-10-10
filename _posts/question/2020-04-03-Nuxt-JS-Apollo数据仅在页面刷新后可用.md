---
layout: question
title:  Nuxt JS Apollo数据仅在页面刷新后可用
date:   2020-04-03T02:53:46.000Z
description: 我正在Nuxt内部使用Apollo获取一些数据。不知何故，导航到该页面时出现错误Cannot read property 'image' of und...
img: 
author: 老丝
category: question
answer: 1
tags: 阿波罗 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在Nuxt内部使用Apollo获取一些数据。</font><font style="vertical-align: inherit;">不知何故，导航到该页面时出现错误</font></font></p>

<pre><code>Cannot read property 'image' of undefined
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我刷新页面时，一切正常。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现有人遇到类似问题，但似乎没有解决方案对我有用：/</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在这是我的模板文件：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/products/_slug.vue</font></font></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;section class="container"&gt;<font></font>
    &lt;div class="top"&gt;<font></font>
      &lt;img :src="product.image.url"/&gt;<font></font>
      &lt;h1&gt;{{ product.name }}&lt;/h1&gt;<font></font>
    &lt;/div&gt;<font></font>
  &lt;/section&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
import gql from 'graphql-tag'<font></font>
<font></font>
export default {<font></font>
  apollo: {<font></font>
    product: {<font></font>
      query: gql`<font></font>
        query Product($slug: String!) {<font></font>
          product(filter: { slug: { eq: $slug } }) {<font></font>
            slug<font></font>
            name<font></font>
            image {<font></font>
              url<font></font>
            }<font></font>
          }<font></font>
        }<font></font>
      `,<font></font>
      prefetch({ route }) {<font></font>
        return {<font></font>
          slug: route.params.slug<font></font>
        }<font></font>
      },<font></font>
      variables() {<font></font>
        return {<font></font>
          slug: this.$route.params.slug<font></font>
        }<font></font>
      }<font></font>
    }<font></font>
  }<font></font>
}<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，除非刷新页面，否则$ apolloData保持为空。</font><font style="vertical-align: inherit;">任何想法将不胜感激</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
走近了一步（我认为）。</font><font style="vertical-align: inherit;">以前，第一次导航到页面时，所有内容（image.url和名称）都将是不确定的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我补充说：</font></font></p>

<pre><code>data() {<font></font>
    return {<font></font>
      product: []<font></font>
    };<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在导出的顶部，现在至少总是定义名称，因此，如果我删除图像，一切都会按预期进行。</font><font style="vertical-align: inherit;">只是image.url一直未定义。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我注意到的一件事（不确定相关性）是仅使用会发生此问题，如果我使用正常的标签会起作用，但当然会消除vue的魔力。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">EDIT-2</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
所以以某种方式，如果我将Nuxt降级到1.0.0版，一切正常</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3932篇《Nuxt JS Apollo数据仅在页面刷新后可用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯Sam</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这只是页面加载时间的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有多个产品，则应该在产品上进行迭代，或者</font></font><code>v-if="product != null"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在产品容器上具有，则仅在从GraphQL提取数据后才会呈现。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样，仅在真正获取HTML对象时才使用它，并避免读取未定义的属性。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
