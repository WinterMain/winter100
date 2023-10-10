---
layout: question
title:  “ Nuxtjs SPA模式”和“不带Nuxtjs的Vuejs”的区别
date:   2020-03-23T14:11:55.000Z
description: 我写了一个简单的Nuxtjs项目。根据我从Nuxtjs文档中学到的知识以及测试过程中的经验，我无法理解“ Nuxtjs SPA模式”和“没有Nuxtjs的...
img: 
author: 逆天村村
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我写了一个简单的Nuxtjs项目。</font><font style="vertical-align: inherit;">根据我从Nuxtjs文档中学到的知识以及测试过程中的经验，我无法理解“ Nuxtjs SPA模式”和“没有Nuxtjs的Vuejs”之间的区别。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如在以下页面中：</font></font></p>

<pre><code>// pages/index.vue<font></font>
<font></font>
&lt;template&gt;<font></font>
    &lt;div class="userip"&gt;{{userip}}&lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
    export default {<font></font>
        data() {<font></font>
           return {<font></font>
               userip: 'in process ...'<font></font>
           }<font></font>
        },<font></font>
<font></font>
        async asyncData() {<font></font>
            let res = await fetch("https://api6.ipify.org?format=json")<font></font>
            .then(response =&gt; response.json());<font></font>
<font></font>
            return {userip: res.ip}<font></font>
        }<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我运行以下命令：</font></font></p>

<pre><code>cmd: nuxt generate
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然Nuxtjs是在通用模式下配置的，但它为我提供了预渲染的文件，该文件在用户的浏览器上也具有SPA功能。</font><font style="vertical-align: inherit;">例如，构建后的文件如下所示：</font></font></p>

<pre><code>// dist/index.html<font></font>
<font></font>
&lt;body&gt;<font></font>
  ...<font></font>
    &lt;div class="userip"&gt;14.182.108.22&lt;/div&gt;<font></font>
  ...<font></font>
&lt;/body&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我跑步时</font></font></p>

<pre><code>cmd: nuxt start
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>cmd: nuxt dev
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不生成预渲染的文件，那么它会生成一个真实的SSR，该SSR会在每个请求上都被渲染。</font><font style="vertical-align: inherit;">现在，如果我运行以下命令：</font></font></p>

<pre><code>cmd: nuxt generate 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Nuxtjs的SPA模式下，它为我提供了一些未渲染的SPA文件（例如甚至不使用Nuxtjs即可构建Vuejs项目）。</font><font style="vertical-align: inherit;">以下是示例输出：</font></font></p>

<pre><code>// dist/index.html<font></font>
<font></font>
&lt;body&gt;<font></font>
  ...<font></font>
    &lt;div id="__nuxt"&gt;&lt;style&gt;#nuxt-loading { ... } ...&lt;/style&gt;&lt;/div&gt;<font></font>
  ...<font></font>
&lt;/body&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至不包含内部渲染的组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在实时模式下（不生成预渲染的文件），</font></font></p>

<pre><code>cmd: nuxt start
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>cmd: nuxt dev
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将未渲染的文件提供给客户端。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么，使用Nuxtjs的SPA模式的Vuejs项目和根本不使用Nuxtjs的Vuejs项目之间有什么区别？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Nuxt时，SSR对我来说只是一个优势。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在SPA模式下使用Nuxt时，还剩下一些东西：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不必关心路由，只需在</font></font><code>pages</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹中</font><font style="vertical-align: inherit;">创建组件</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>asyncData</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>fetch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">将数据加载到组件的更简便</font><font style="vertical-align: inherit;">方法</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">轻松设置Vuex，包括自动命名空间的存储模块</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，它提供了一种结构化的方式来开发Vue.js应用程序。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
