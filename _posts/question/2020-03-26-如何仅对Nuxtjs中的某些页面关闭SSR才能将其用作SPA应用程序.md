---
layout: question
title:  如何仅对Nuxt.js中的某些页面关闭SSR才能将其用作SPA应用程序？
date:   2020-03-26T08:09:49.000Z
description: 我想使用Nuxt.js开发仅对某些页面使用SSR的应用程序（例如，艺术家页面用户页面），因此没有SSR的页面将像SPA一样使用。使用Nuxt.js可以做到...
img: 
author: 理查德十三Davaid
category: question
answer: 2
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想使用Nuxt.js开发仅对某些页面使用SSR的应用程序（例如，艺术家页面用户页面），因此没有SSR的页面将像SPA一样使用。</font><font style="vertical-align: inherit;">使用Nuxt.js可以做到吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3749篇《如何仅对Nuxt.js中的某些页面关闭SSR才能将其用作SPA应用程序？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子卡卡西</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nuxt</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&gt; v2.9.0</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请使用</font></font><code>&lt;client-only&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><code>&lt;no-ssr&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个例子：</font></font></p>

<pre class="lang-html prettyprint-override"><code>&lt;template&gt;<font></font>
  &lt;div&gt;<font></font>
    &lt;sidebar /&gt;<font></font>
    &lt;client-only placeholder="Loading..."&gt;<font></font>
      &lt;!-- this component will only be rendered on client-side --&gt;<font></font>
      &lt;comments /&gt;<font></font>
    &lt;/client-only&gt;<font></font>
  &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>Loading...</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被用作占位符直到内的成分（S）</font></font><code>&lt;client-only&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装在客户机侧。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在此处了解更多信息：</font></font><a href="https://nuxtjs.org/api/components-client-only/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nuxt API- </font></font><code>&lt;client-only&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>&lt;no-ssr&gt;&lt;/no-ssr&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签中</font><font style="vertical-align: inherit;">包装您不想呈现服务器端的组件的内容</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@DenisTsoi的链接应该为您提供有关其工作原理的更多信息。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
