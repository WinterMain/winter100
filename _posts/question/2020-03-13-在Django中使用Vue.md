---
layout: question
title:  在Django中使用Vue
date:   2020-03-13T12:23:57.000Z
description: 我最近开始使用Django在一些社交媒体网站上。我正在使用默认的django模板引擎来填充我的页面。但是目前，我想添加JavaScript以使网站更具动态...
img: 
author: 乐米亚
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近开始使用Django在一些社交媒体网站上。</font><font style="vertical-align: inherit;">我正在使用默认的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">django</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模板引擎来填充我的页面。</font><font style="vertical-align: inherit;">但是目前，我想添加</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以使网站更具动态性。</font><font style="vertical-align: inherit;">这表示：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每页</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的页眉和页脚均</font><strong><font style="vertical-align: inherit;">相同</font></strong><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">标头应具有一个下拉菜单，这是一个在键入时进行搜索的搜索表单。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我当前的django应用程序具有一个</font><font style="vertical-align: inherit;">带有页眉和页脚HTML </font><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本模板</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为每个页面都应具有此</font><strong><font style="vertical-align: inherit;">模板</font></strong><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该站点由</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多个页面</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组成，包括</font><font style="vertical-align: inherit;">索引页面，个人资料页面，注册页面。</font><font style="vertical-align: inherit;">这些页面中的每一个都有一些共同的但也有很多不同的动态组件。</font><font style="vertical-align: inherit;">例如，注册页面应即时进行表单验证，但个人资料页面不需要此验证。</font><font style="vertical-align: inherit;">配置文件页面应具有无限滚动的状态供稿。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想使用Vue处理动态组件，但是我不知道该如何开始。</font><font style="vertical-align: inherit;">该应用程序不应为SPA。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我应该如何</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构造</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Vue代码？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我应该如何</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">捆绑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个。</font><font style="vertical-align: inherit;">使用Gulp吗？</font><font style="vertical-align: inherit;">或者也许</font></font><a href="https://github.com/owais/django-webpack-loader" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">django-webpack-loader</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我仍然应该能够使用Django模板标签，例如，我希望能够</font></font><code>{ % url 'index' %}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在下拉菜单中使用。</font></font></li>
</ul></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Eva</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这看起来像是基于</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意见</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的问题，没有明确的答案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您提到您</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望该应用程序成为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单页应用程序（SPA）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果是这样，使用Vue的动机是什么？</font><font style="vertical-align: inherit;">要处理页面内的用户交互？</font></font></p>

<p>Vue can work perfectly alright in non-SPA context. It will help you handle rich interactions within the page, like binding your data to drop-downs, forms, etc. But the real power of Vue comes out when you use it in SPA context.</p>

<p>For your case, I would recommend using Vue.js in <strong>standalone</strong> mode, where you can quickly define <code>template</code> within Vue components and write all your code easily in one javascript file.</p>

<p>Here is what you need: <a href="https://vuejs.org/guide/installation.html#Standalone">https://vuejs.org/guide/installation.html#Standalone</a></p>

<p>In "Vue.js standalone mode", There is no need for any webpack build system or <code>vue-cli</code>. You can build the app directly in your existing dev environment for django. <code>gulp</code> can optionally minify and bundle your javascript files normally, just like you do with your jQuery based apps.</p>

<p>Vue.js uses double curly braces <code>{{..}}</code> for templates, so it will not interfere with your django template strings.</p>

<p>All the jsFiddle examples for Vue.js run in <strong>standalone mode</strong>. That is precisely what you need at this moment. You may look at some of the recent questions with <strong><code>vue.js</code></strong> tag, find a sample jsFiddle and see how it is done.</p>

<p>For complex SPA apps, you need to build your Vue code separately from server side, test it thoroughly with dummy AJAX calls, build it for production and then drop the final production build into your server for end-to-end testing. This is something you can do in future.</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
