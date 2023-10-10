---
layout: question
title:  没有NodeJS的vue文件？
date:   2020-03-19T02:10:58.000Z
description: 我想将我的应用程序托管在节点JS之外，但是我想使用.vue文件和可能的npm作为构建系统（如果需要）。有可能吗？我不需要任何向后兼容性，如果它可以在最...
img: 
author: LEY老丝
category: question
answer: 5
tags: node.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想将我的应用程序托管在节点JS之外，但是我想使用.vue文件和可能的npm作为构建系统（如果需要）。</font><font style="vertical-align: inherit;">有可能吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不需要任何向后兼容性，如果它可以在最新的Chrome开发者平台上使用，对我来说也可以。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么例子可以做到吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图构建一些webpack模板，但是它仅在NodeJS内部起作用。</font><font style="vertical-align: inherit;">在其他服务器上，访问</font></font><code>.vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中的</font><font style="vertical-align: inherit;">URL时得到404 </font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">看来其他服务器无法处理它们。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2249篇《没有NodeJS的vue文件？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞宝儿猴子</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的出发点是错误的。</font><font style="vertical-align: inherit;">Vue + node.js可以构建一个完整的站点。</font><font style="vertical-align: inherit;">Vue是前端框架，即节点的服务器语言。</font><font style="vertical-align: inherit;">两者可以结合使用。</font><font style="vertical-align: inherit;">但不是vue必须依靠节点来使用。</font><font style="vertical-align: inherit;">他们两个可以完美地实现开发模型的前后分离。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在使用vue的项目中，个人不建议单独配置webpack和vue-loader。</font><font style="vertical-align: inherit;">您可以直接使用vue官方脚手架vue-cli。</font><font style="vertical-align: inherit;">不必考虑自动配置的这些配置。</font></font></p>

<p><a href="https://vuejs.org/2015/12/28/vue-cli/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue-cli</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您刚刚开始学习Vue，这是入门级的演示。</font><font style="vertical-align: inherit;">尽管它只是一个小型应用程序，但它涵盖了很多知识点（vue2.0 + vue-cli + vue-router + vuex + axios + mysql + express + pm2 + webpack），包括前端，后端，数据库等网站的一些必要元素，对我来说，学习意义重大，谨互相鼓励！</font></font></p>

<p><a href="https://github.com/alloyteamzy/vue2_blog/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue演示</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德猪猪伽罗</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您能尝试像Web服务的S3存储桶设置这样简单的事情吗？</font><font style="vertical-align: inherit;">您的项目有多大？</font><font style="vertical-align: inherit;">您认为会获得多少流量？</font><font style="vertical-align: inherit;">如果很小，则可以在S3上托管并使用webpack等。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西门</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">VueJS应用程序不是NodeJS应用程序。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">VueJS应用由浏览器解释。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需要在计算机上构建应用程序并以任何静态网站的形式托管文件，因此任何服务器都可以提供html和文件。 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要构建您的应用程序，请使用例如Webpack（</font></font><a href="https://github.com/vuejs-templates/webpack" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/vuejs-templates/webpack</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一GO</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发Vue应用程序的最佳方法是运行dev服务器，而毕竟只是构建静态资产。</font><font style="vertical-align: inherit;">您不需要使用vuex文件，更好的是使用静态模板，因为您可以轻松地将其与某些后端（WordPress等）集成。</font><font style="vertical-align: inherit;">有用的将使用一些启动器，例如。</font></font><a href="https://github.com/tstabla/Vue.js-starter" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue.js入门</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门达蒙Davaid</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NodeJ仅用于在前端构建* .js文件，而您的WebApp不必在Nodejs上运行。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1，您可以创建一个index.html文件，当webpack构建它时，它需要* .js文件。</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2，使用Chrome打开您的index.html文件，以便可以看到它的工作。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果只需要静态页面，则无需使用vue-cli或其他服务器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是您必须知道如何设置webpack.config.js，您可以查看该文档</font></font><a href="https://webpack.js.org/guides/getting-started/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://webpack.js.org/guides/getting-started/</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
