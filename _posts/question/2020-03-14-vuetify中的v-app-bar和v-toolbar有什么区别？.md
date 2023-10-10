---
layout: question
title:  vuetify中的v-app-bar和v-toolbar有什么区别？
date:   2020-03-14T10:26:50.000Z
description: 我刚刚开始探索vuetify。所有vuetify组件都位于中<v-app>。我想为自己的网站创建菜单，所以在找到的文档中<v-app-bar>，<v-t...
img: 
author: 村村伽罗Mandy
category: question
answer: 1
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚开始探索</font></font><a href="http://vuetifyjs.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vuetify</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">所有vuetify组件都位于中</font></font><code>&lt;v-app&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我想为自己的网站创建菜单，所以在找到的文档中</font></font><code>&lt;v-app-bar&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>&lt;v-toolbar&gt;</code><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我很困惑是否应该将菜单项保留在内部</font></font><code>&lt;v-app-bar&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>&lt;v-toolbar&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为官方文档所述  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于</font></font><code>&lt;v-app-bar&gt;</code> <a href="https://vuetifyjs.com/en/components/app-bars" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://vuetifyjs.com/en/components/app-bars</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>v-app-bar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件对于任何图形用户界面（GUI）都是至关重要的，因为它通常是站点导航的主要来源。</font><font style="vertical-align: inherit;">app-bar组件与v-navigation-drawer结合使用非常好，可在您的应用程序中提供站点导航。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于</font></font><code>&lt;v-toolbar&gt;</code> <a href="https://vuetifyjs.com/en/components/toolbars" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://vuetifyjs.com/en/components/toolbars</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>v-toolbar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件对于任何GUI都是至关重要的，因为它通常是站点导航的主要来源。</font><font style="vertical-align: inherit;">工具栏组件可与v-navigation-drawer和v-card结合使用。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者的描述几乎相同。</font><font style="vertical-align: inherit;">两者之间有什么区别，什么时候应该使用什么？</font><font style="vertical-align: inherit;">还是我们应该</font></font><code>v-toolbar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在里面</font><font style="vertical-align: inherit;">使用</font></font><code>v-app-bar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1620篇《vuetify中的v-app-bar和v-toolbar有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid神奇Eva</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上</font></font><code>v-app-bar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">扩展</font></font><code>v-toolbar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了您可以使用的其他属性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些属性使您可以更精细地控制工具栏的总体布局，以及它如何响应周围空间的大小和内容更改。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以查看每个属性，并查看可以如何使用</font></font><code>v-app-bar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一打或更多其他属性来自定义其功能和设计，而</font></font><code>toolbar</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对它们的用途有所看法并限制了这些功能。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
