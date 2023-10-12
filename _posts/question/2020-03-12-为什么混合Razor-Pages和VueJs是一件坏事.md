---
layout: question
title:  为什么混合Razor Pages和VueJs是一件坏事？
date:   2020-03-12T03:12:38.000Z
description: 我正在尝试使用Razor Pages建立一个.NET核心项目，并为我的所有逻辑将vueJ包含在Razor页面中。像这样： \`{    ViewD...
img: 
author: Stafan逆天
category: question
answer: 2
tags: asp.net Asp.net
topic: Asp.net
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用Razor Pages建立一个.NET核心项目，并为我的所有逻辑将vueJ包含在Razor页面中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样： </font></font></p>

<pre><code>@{<font></font>
    ViewData["Title"] = "VueJs With Razor";<font></font>
}<font></font>
&lt;h2&gt;@ViewData["Title"].&lt;/h2&gt;<font></font>
<font></font>
&lt;div id="app"&gt;<font></font>
   &lt;span&gt;{{ message }}&lt;/span&gt;<font></font>
&lt;/div&gt;<font></font>
<font></font>
&lt;script&gt;<font></font>
     new Vue({<font></font>
        el: '#app',<font></font>
        data: {<font></font>
          message : 'Hello vue.js'<font></font>
        }<font></font>
    })<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经读过，混合使用Vue和Razor页面是一种不好的做法，应该使用Razor OR Vue。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么是这样？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第931篇《为什么混合Razor Pages和VueJs是一件坏事？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Near</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您还可以在Razor视图中添加VueJS模板：</font></font></p>

<p><a href="https://www.npmjs.com/package/razor-vue-lint" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/razor-vue-lint</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你可以这样做。</font><font style="vertical-align: inherit;">有时，您必须这样做，如果像我们一样，您正在迁移现有的代码库，而又无法一次转换所有内容。</font><font style="vertical-align: inherit;">正如罗恩C所说，它运作良好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您要开始一个新项目，则可以选择。</font><font style="vertical-align: inherit;">支持SPA且没有剃刀的原因将是...</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应性。</font><font style="vertical-align: inherit;">SPA应用程序通常会感觉（非常）活跃。</font><font style="vertical-align: inherit;">初始渲染通常在数据到达之前从缓存中提供。</font><font style="vertical-align: inherit;">第一次加载时，所有资源都以一个请求-响应的形式到达一个包中。</font><font style="vertical-align: inherit;">没有或几乎没有请求链接。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作流程。</font><font style="vertical-align: inherit;">Webpack，捆绑和热重装都很棒。</font><font style="vertical-align: inherit;">您将获得生产版本，并进行精简，Vue渲染功能的编译，消除404样式错误，捕获js语法错误。</font><font style="vertical-align: inherit;">对于许多错误，从引入错误到发现错误的周期大大缩短了。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SPA宇宙。</font><font style="vertical-align: inherit;">路由，Vuex，这确实是未来的方式。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">纯度。</font><font style="vertical-align: inherit;">Razor和Vue在一天结束时会做类似的事情。</font><font style="vertical-align: inherit;">如果混合使用它们，可能会很难保持直立。</font></font></p></li>
</ul></div>
        </div></div>
    {% endraw %}
  </div>
<div>
