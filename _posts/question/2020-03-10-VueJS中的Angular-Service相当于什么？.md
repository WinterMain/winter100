---
layout: question
title:  VueJS中的Angular Service相当于什么？
date:   2020-03-10T03:29:21.000Z
description: 我想将所有与服务器通信的功能都放入VueJS中的单个可重用文件中，并将其与服务器进行通信。插件似乎并不是最好的选择。模板较少的组件..？...
img: 
author: Stafan卡卡西
category: question
answer: 3
tags: 服务 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想将所有与服务器通信的功能都放入VueJS中的单个可重用文件中，并将其与服务器进行通信。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插件似乎并不是最好的选择。</font><font style="vertical-align: inherit;">模板较少的组件..？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第453篇《VueJS中的Angular Service相当于什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin乐逆天</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为对于您的简单问题，答案可能是任何包含函数的ES6模块（等同于ANgular中的类中的方法），并使用ES6导入和导出将其直接导入组件中。</font><font style="vertical-align: inherit;">没有可以在组件中注入的服务。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯A</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以提供自己的服务，在该服务中可以放置所有HTTP服务器调用，然后将其导入到要使用它们的组件中。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的方法是将Vuex用于复杂的状态管理应用程序，因为在Vuex中，您可以通过始终异步运行的操作处理所有异步调用，然后在获得结果后立即提交突变，突变将与状态直接交互并更新它以一成不变的方式（首选）。</font><font style="vertical-align: inherit;">这是有状态的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有其他方法。</font><font style="vertical-align: inherit;">但是这些是我在代码中遵循的。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom阳光</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总共有4种方法：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无状态服务：那么您应该使用mixins</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有状态服务：使用Vuex</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导出服务并从vue代码导入</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何javascript全局对象</font></font></li>
</ul></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
