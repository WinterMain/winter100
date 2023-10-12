---
layout: question
title:  在Nuxt中使用Vue设计系统会在system.js中引发有关导出的错误
date:   2020-03-24T10:36:32.000Z
description: 我正在尝试按照以下步骤将组件导入到Nuxt项目中：https   //github.com/viljamis/vue-design-system/wik...
img: 
author: 樱小胖Mandy
category: question
answer: 0
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试按照以下步骤将组件导入到Nuxt项目中：</font><a href="https://github.com/viljamis/vue-design-system/wiki/getting-started#using-design-system-as-an-npm-module" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://github.com/viljamis/vue-design-system/wiki/getting-started#using-design-system-as-an-npm-module" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/viljamis/vue-design-system/wiki/getting-started#using-design-system-as-an- npm-模块</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nuxt没有</font></font><code>main.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（一切都基于插件），所以我要做的是创建一个“插件”，然后在其中执行导入代码（Nuxt也建议其他库也可以正常工作）：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vue-design-system.js</font></font></strong></p>

<pre><code>import Vue from 'vue'<font></font>
import system from 'fp-design-system'<font></font>
import 'fp-design-system/dist/system/system.css'<font></font>
<font></font>
Vue.use(system)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在我的配置中（删除配置中的其他代码）：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nuxt.config.js</font></font></strong></p>

<pre><code>module.exports = {<font></font>
  css: [<font></font>
    { src: 'fp-design-system/dist/system/system.css', lang: 'css' }<font></font>
  ],<font></font>
  plugins: [<font></font>
    { src: '~plugins/vue-design-system', ssr: true }<font></font>
  ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我运行</font></font><code>npm run dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主题时，它会生成，但会收到警告：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告在./plugins/vue-design-system.js 7：8-14中已编译，并带有1条警告警告“在'fp-design-system'中找不到导出'默认'（导入为'系统'）</font></font></p>
</blockquote>

<p>Seems to have an issue with the generated <code>system.js</code> regarding the export (the command <code>npm run build:system</code>). </p>

<p>In my page on screen I get the following error when trying to use a component in the design system:</p>

<blockquote>
  <p>NuxtServerError Cannot find module
  'fp-design-system/src/elements/TextStyle' from
  '/Users/paranoidandroid/Documents/websites/Nuxt-SSR'</p>
</blockquote>

<p>If I hard refresh the page, I then get another message:</p>

<blockquote>
  <p>NuxtServerError render function or template not defined in component:
  anonymous</p>
</blockquote>

<p>Any idea what's happening here? It would be really great to get this working somehow. </p>

<p>At this current time, I'm not sure if it's a Nuxt issue or a Vue Design System issue. I think the latter, just because the Nuxt setup I have right now is very bare-bones...so it's not something else causing this.</p>

<p>Thanks.</p>

<p><strong>Repository on GitHub:</strong></p>

<p>Here is the repo for my "theme", but in order to get this going, you will need to create a design system separate from this with the same name and follow the steps to use the design system as a local (file) NPM module.</p>

<p><a href="https://github.com/michaelpumo/Nuxt-SSR" rel="nofollow noreferrer">https://github.com/michaelpumo/Nuxt-SSR</a></p>

<p><strong>console.log of system</strong> (from the JS import statement)</p>

<p><a href="https://www.samyoc.com//uploads/users/3595/images/thumbnails/1585046065267.png" data-src="https://www.samyoc.com//uploads/users/3595/images/1585046065267.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/1OnY7.png" alt="在此处输入图片说明"></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3668篇《在Nuxt中使用Vue设计系统会在system.js中引发有关导出的错误》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
