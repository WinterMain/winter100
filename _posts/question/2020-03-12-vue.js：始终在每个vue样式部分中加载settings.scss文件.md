---
layout: question
title:  vue.js：始终在每个vue样式部分中加载settings.scss文件
date:   2020-03-12T12:26:57.000Z
description: 我发现自己在每个.vue文件中都重复了相同的模式，以便使用变量等：<style lang="scss">  \`import "../styles/s...
img: 
author: Davaid小卤蛋
category: question
answer: 4
tags: sass Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现自己在每个.vue文件中都重复了相同的模式，以便使用变量等：</font></font></p>

<pre><code>&lt;style lang="scss"&gt;<font></font>
  @import "../styles/settings.scss";<font></font>
<font></font>
  .someclass { color: $some-variable; }<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者如果它嵌套在一个文件夹中，我必须记住要谨慎对待路径：</font></font></p>

<pre><code>&lt;style lang="scss"&gt;<font></font>
  @import "../../styles/settings.scss";<font></font>
<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以在</font></font><code>settings.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我创建的每个.vue文件中</font><font style="vertical-align: inherit;">全局导入该</font><font style="vertical-align: inherit;">文件？</font><font style="vertical-align: inherit;">我看了看文档却没有看到，但是也许我错过了，或者这是我需要利用webpack来做的事情吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1321篇《vue.js：始终在每个vue样式部分中加载settings.scss文件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamStafan十三</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到过那里-不幸的是，如果不将文件导入每个组件中，则无法执行此操作。</font><font style="vertical-align: inherit;">为了解决这个问题，您可以尝试使用创建辅助类，</font></font><code>color: $some-variable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>background-color: $some-variable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">辅助类</font><font style="vertical-align: inherit;">可以涵盖您的一些用例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果确实要在每个文件中导入文件，请确保该文件仅包含变量。</font><font style="vertical-align: inherit;">您不想多次包含样式规则。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否则，我将为</font></font><code>.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每个组件</font><font style="vertical-align: inherit;">创建单独的</font><font style="vertical-align: inherit;">文件。</font><font style="vertical-align: inherit;">您仍然可以将</font></font><code>.vue</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模板用于html和js，但要保持样式分开。</font><font style="vertical-align: inherit;">这可能是最有效的方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐米亚</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果将所有组件存储在同一目录中，则settings.scss的路径将始终保持不变。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是webpack所需的功能。</font><font style="vertical-align: inherit;">原则是使全局变量越少越好，只包含所需的内容，使项目精简，高效且易于推理。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许您应该重组您的组件/样式，以使每个Vue组件中没有太多自定义样式（构建自己的引导程序？），因此您不必在每个Vue组件中都包含特定的样式表。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这并不能真正回答您的问题，但是可以指导您与选择使用的工具背后的原理保持一致。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">祝你好运！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村路易</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为您正在使用webpack？</font><font style="vertical-align: inherit;">您可以</font></font><code>settings.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在app.js文件中</font><font style="vertical-align: inherit;">要求该</font><font style="vertical-align: inherit;">文件，如下所示</font></font></p>

<pre><code>require("!style!css!sass!./file.scss");
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，在编译时。</font><font style="vertical-align: inherit;">您所有的组件都会得到它。</font><font style="vertical-align: inherit;">您不必每个都要求它。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid小卤蛋</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自从我问了这个问题以来，官方文档已经更新：</font><a href="https://vue-loader.vuejs.org/en/configurations/pre-processors.html" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://vue-loader.vuejs.org/en/configurations/pre-processors.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//vue-loader.vuejs.org/en/configurations/pre-processors.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于其他在2017年及以后观看此内容的人，请查看“加载全局设置文件”下的说明。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
