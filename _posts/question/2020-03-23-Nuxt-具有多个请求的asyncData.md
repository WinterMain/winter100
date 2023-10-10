---
layout: question
title:  Nuxt-具有多个请求的asyncData
date:   2020-03-23T06:44:59.000Z
description: 在我的应用程序中，我有一个卖方页面，其中显示该卖方列出的产品。我正在使用asyncData获取页面所需的所有数据（对于SEO更好）asyncData ...
img: 
author: 宝儿
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的应用程序中，我有一个卖方页面，其中显示该卖方列出的产品。</font><font style="vertical-align: inherit;">我正在使用asyncData获取页面所需的所有数据（对于SEO更好）</font></font></p>

<pre><code>asyncData ({params, app, error }) {<font></font>
<font></font>
    return app.$axios.$get(`/seller/${params.username}`).then(async sellerRes =&gt; {<font></font>
<font></font>
        let [categoriesRes, reviewsRes, productsRes] = await Promise.all([<font></font>
            app.$axios.$get(`/categories`),<font></font>
            app.$axios.$get(`/seller/${params.username}/reviews`),<font></font>
            app.$axios.$get(`/seller/${params.username}/products`)<font></font>
        ])<font></font>
<font></font>
        return {<font></font>
            seller: sellerRes.data,<font></font>
            metaTitle: sellerRes.data.name,<font></font>
            categories: categoriesRes.data,<font></font>
            reviewsSummary: reviewsRes.summary,<font></font>
            products: productsRes.data,<font></font>
        }<font></font>
<font></font>
    }).catch(e =&gt; {<font></font>
        error({ statusCode: 404, message: 'Seller not found' })<font></font>
    });<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尽管此方法可以完成预期的工作，但我还是忍不住认为自己做错了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导航到页面时，nuxt进度栏显示两次（这很奇怪）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在搜索一段时间，以尝试在asyncData中查找多个请求的示例，但是那里并没有太多内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许我不应该在asyncData中调用多个请求？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2867篇《Nuxt-具有多个请求的asyncData》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙猿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，您也可以使用</font></font><code>async await</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它看起来也很干净。</font></font></p>

<pre><code>&lt;template&gt;<font></font>
  &lt;div class="container"&gt;<font></font>
    &lt;h1&gt;Request 1:&lt;/h1&gt;<font></font>
    &lt;h1&gt;{{ post.title }}&lt;/h1&gt;<font></font>
    &lt;pre&gt;{{ post.body }}&lt;/pre&gt;<font></font>
    &lt;br /&gt;<font></font>
    &lt;h1&gt;Request 2:&lt;/h1&gt;<font></font>
    &lt;h1&gt;{{ todos.title }}&lt;/h1&gt;<font></font>
    &lt;pre&gt;{{ todos.completed }}&lt;/pre&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
import axios from "axios";<font></font>
<font></font>
export default {<font></font>
  async asyncData({ params }) {<font></font>
    // We can use async/await ES6 feature<font></font>
    const posts = await axios.get(<font></font>
      `https://jsonplaceholder.typicode.com/posts/${params.id}`<font></font>
    );<font></font>
    const todos = await axios.get(<font></font>
      `https://jsonplaceholder.typicode.com/todos/${params.id}`<font></font>
    );<font></font>
    return { post: posts.data, todos: todos.data };<font></font>
  },<font></font>
  head() {<font></font>
    return {<font></font>
      title: this.post.title<font></font>
    };<font></font>
  }<font></font>
};<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><a href="https://codesandbox.io/embed/5vowp1vqkp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是它的工作沙箱。</font><font style="vertical-align: inherit;">（别忘了为</font></font><code>:id</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路由参数</font><font style="vertical-align: inherit;">添加值</font><font style="vertical-align: inherit;">）</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
