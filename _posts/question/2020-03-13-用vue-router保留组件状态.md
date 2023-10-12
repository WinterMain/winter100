---
layout: question
title:  用vue-router保留组件状态？
date:   2020-03-12T16:38:42.000Z
description: 我有一个清单/详细使用案例，用户可以双击产品列表中的一个项目，转到详细信息屏幕进行编辑，然后在完成后返回清单屏幕。我已经使用此处描述的动态组件技术完成了此...
img: 
author: 达蒙猪猪
category: question
answer: 3
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个清单/详细使用案例，用户可以双击产品列表中的一个项目，转到详细信息屏幕进行编辑，然后在完成后返回清单屏幕。</font><font style="vertical-align: inherit;">我已经使用此处描述的动态组件技术完成了此操作：</font></font><a href="https://vuejs.org/v2/guide/components.html#Dynamic-Components" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://vuejs.org/v2/guide/components.html#Dynamic-Components" rel="noreferrer"><font style="vertical-align: inherit;">//vuejs.org/v2/guide/components.html#Dynamic-Components</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，既然我打算在应用程序的其他地方使用vue-router，我想将其重构为改为使用路由。</font><font style="vertical-align: inherit;">通过动态组件技术，我使用了保持活动状态以确保当用户切换回列表视图时，与编辑之前存在相同的选择。</font><font style="vertical-align: inherit;">但是在我看来，通过路由，产品列表组件将被重新呈现，这不是我想要的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，看来路由器视图可以包裹在keep-alive中，这可以解决一个问题，但会引入很多其他问题，因为我只希望该路由保持活动状态，而不是所有路由都保持活动状态（目前，我只是在使用一个单个顶级路由器视图）。</font><font style="vertical-align: inherit;">Vue 2.1通过为路由器视图引入include和exclude参数，显然已经为解决此问题做了一些事情。</font><font style="vertical-align: inherit;">但是我也不想要这样做，因为不得不在我的主页中预先声明所有应该或不应该使用keep-alive的路由都是很笨拙的。</font><font style="vertical-align: inherit;">在配置路由的那一点（即，在routes数组中）声明是否要保持活动状态会变得更加整洁。</font><font style="vertical-align: inherit;">那我最好的选择是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1368篇《用vue-router保留组件状态？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿Green</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以指定要保留的路线，例如：</font></font></p>

<pre><code>&lt;keep-alive include="home"&gt;<font></font>
  &lt;router-view/&gt;<font></font>
&lt;/keep-alive&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，只有本国路线才能保持活动状态</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva梅</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了类似的问题，并查看了Vuex，但认为它需要对我的代码进行太多更改/添加才能添加到项目中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现这个库</font></font><a href="https://www.npmjs.com/package/vue-save-state" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/vue-save-state</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我解决了这个问题，使1个组件的状态与localStorage保持同步，并且只花了几分钟和几行代码（全部记录在软件包的Github页中）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Itachi</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我看来，您正在寻找某种</font></font><a href="https://vuejs.org/v2/guide/state-management.html#ad" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">状态管理</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果您有多个组件共享的数据，并且想要以不同的顺序渲染组件，但是又不想为每个组件再次加载数据。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下所示：</font></font></p>

<p><a href="https://i.stack.imgur.com/86tHf.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/86tHf.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue提供了</font></font><a href="https://vuejs.org/v2/guide/state-management.html#Simple-State-Management-from-Scratch" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单的状态管理</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是我建议使用</font></font><a href="https://vuex.vuejs.org/en/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vuex</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是vue社区中状态管理的标准。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
