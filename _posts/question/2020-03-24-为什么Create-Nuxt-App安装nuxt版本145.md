---
layout: question
title:  为什么Create-Nuxt-App安装nuxt版本1.4.5？
date:   2020-03-24T07:56:30.000Z
description: 我有些困惑，因为在nuxt官方网站上它说当前的nuxt版本是2.5.X，但是当我创建一个nuxt应用程序npx create-nuxt-app并检查其pa...
img: 
author: 猴子Tom
category: question
answer: 1
tags: nuxt.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有些困惑，因为在nuxt官方网站上它说当前的nuxt版本是2.5.X，但是当我创建一个nuxt应用程序</font></font><code>npx create-nuxt-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并检查其</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面的依赖项时</font></font><code>nuxt: ^1.0.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当我检查其package.json中的nuxt node_module时，它说</font></font><code>version: 1.4.5</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么，为什么要</font></font><code>npx create-nuxt-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装旧的nuxt版本而不是最新版本？</font><font style="vertical-align: inherit;">nuxt版本不会影响vue版本，对吗？</font><font style="vertical-align: inherit;">它说它使用</font></font><code>^2.5.17</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了最新的</font><font style="vertical-align: inherit;">vue </font><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3486篇《为什么Create-Nuxt-App安装nuxt版本1.4.5？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保没有</font></font><code>create-nuxt-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地或全局安装</font><font style="vertical-align: inherit;">的版本</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">否则</font></font><code>npx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能会采取那个。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前版本的</font></font><code>create-nuxt-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font><code>nuxt: ^2.4.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或类似</font><font style="vertical-align: inherit;">版本</font><font style="vertical-align: inherit;">，与所有以2开头的次要版本和修补程序版本匹配，因此将安装最新的2.xy。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
