---
layout: question
title:  Nuxt.JS：如何在页面中获取路由URL参数
date:   2020-03-13T09:10:02.000Z
description: 我正在使用Nuxt.js，并且有一个动态页面，该页面在 pages/post/_slug.vue因此，当我访问页面URL（例如http：// l...
img: 
author: Eva斯丁
category: question
answer: 5
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Nuxt.js，并且有一个动态页面，该页面在 </font></font></p>

<pre><code>pages/post/_slug.vue
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，当我访问页面URL（例如</font></font><a href="http://localhost:3000/post/hello-world" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：// localhost：3000 / post / hello-world）时</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如何读取页面中的此slug参数值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，我正在使用asyncData获取它，如下所示：</font></font></p>

<pre><code>  asyncData ({ params }) {<font></font>
    // called every time before loading the component<font></font>
    return {<font></font>
      slug: params.slug<font></font>
    }<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可以正常工作，但是我认为这不是最好的方法，应该有一种更好的方法使参数可用于页面。</font><font style="vertical-align: inherit;">任何帮助表示赞赏！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1465篇《Nuxt.JS：如何在页面中获取路由URL参数》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY猿</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nuxt文档维护得很好，并且按照</font></font><a href="https://nuxtjs.org/api/context/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://nuxtjs.org/api/context/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> asyncData公开的API可以访问各种路由器和服务器功能。</font><font style="vertical-align: inherit;">为了进一步澄清您可以在Nuxtjs门户上查看官方示例。
</font></font><a href="https://nuxtjs.org/examples/custom-routes" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://nuxtjs.org/examples/custom-routes</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC60211911</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我所知，这已经是最好的方法，即使不是唯一的方法。</font><font style="vertical-align: inherit;">但是我可以建议一种稍微不同的方法，该方法可能适合您的需求。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用这种</font></font><code>asyncData</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法从服务器检索数据，而不是在您的VM上放置参数，然后再处理（如果是这种情况）。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以</font><font style="vertical-align: inherit;">在表示逻辑上</font><font style="vertical-align: inherit;">处理</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数据，而不是任何形式的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">request</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">另一方面，如果您不想将任何内容传递给</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">VM</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中间件</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，也可以根据需要</font><font style="vertical-align: inherit;">使用fetch </font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅十三Near</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需访问路由参数 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">供全球使用，但这不是一个好习惯： </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">window。$ nuxt._route.params</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于页面/组件/布局等下的本地使用，始终应该像下面这样练习</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">this。$ route</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">this。$ nuxt._route.params</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想在</font></font><code>apollo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">智能查询中</font><font style="vertical-align: inherit;">访问路线信息，其他答案就足够了</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>  apollo: {<font></font>
    items: {<font></font>
      query: jobsBy,<font></font>
      variables() {<font></font>
        return {<font></font>
          clientId: this.$route.query.id<font></font>
        }<font></font>
      },<font></font>
    }<font></font>
  }<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Chloe</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在.vue文件中，获取Vue路由器</font></font><a href="https://router.vuejs.org/api/#route-object-properties" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路由对象</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>    this.$route
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（请注意，</font></font><a href="https://router.vuejs.org" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue路由器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>this.$router</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">下方</font><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>$route</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象具有一些有用的属性：</font></font></p>

<pre><code>{<font></font>
  fullpath: string,<font></font>
  params: {<font></font>
    [params_name]: string<font></font>
  },<font></font>
  //fullpath without query<font></font>
  path: string<font></font>
  //all the things after ? in url<font></font>
  query: {<font></font>
    [query_name]: string<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用如下</font></font><code>$route</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象：</font></font></p>

<pre><code>    &lt;script&gt;<font></font>
    export default {<font></font>
      mounted() {<font></font>
        console.log(this.$route.fullPath);<font></font>
      }<font></font>
    };<font></font>
    &lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网址路径参数位于下方</font></font><code>route.params</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如您的情况</font></font><code>route.params.slug</code></p>

<pre><code>    &lt;script&gt;<font></font>
    export default {<font></font>
      mounted() {<font></font>
        console.log(this.$route.params.slug);<font></font>
      }<font></font>
    };<font></font>
    &lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue Moute挂钩仅在客户端上运行，当您想在服务器上获取参数时，可以使用asyncData方法：</font></font></p>

<pre><code>    &lt;script&gt;<font></font>
    export default {<font></font>
        asyncData({route, params}) {<font></font>
            if (process.server) {<font></font>
                //use route object<font></font>
                console.log(route.params.slug)<font></font>
                //directly use params<font></font>
                console.log(params.slug)<font></font>
            }<font></font>
        }<font></font>
    };<font></font>
    &lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不需要服务器上的parms信息，或者在渲染之前不需要任何数据（例如在渲染之前基于路由参数发出http请求），那么我认为已安装的钩子就足够了。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
