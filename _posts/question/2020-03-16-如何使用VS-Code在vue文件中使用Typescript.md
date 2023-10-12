---
layout: question
title:  如何使用VS Code在.vue文件中使用Typescript？
date:   2020-03-16T02:06:44.000Z
description: 我正在使用Visual Studio Code，Vue 2（Webpack模板）和Typescript。这是我的App.vue组件：<templa...
img: 
author: 神无伽罗
category: question
answer: 2
tags: Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Visual Studio Code，Vue 2（Webpack模板）和Typescript。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的App.vue组件：</font></font></p>

<pre><code>&lt;template&gt;<font></font>
    &lt;div id="app"&gt;<font></font>
        &lt;navbar&gt;&lt;/navbar&gt;<font></font>
        [content here]<font></font>
    &lt;/div&gt;<font></font>
&lt;/template&gt;<font></font>
<font></font>
&lt;script lang="ts"&gt;<font></font>
    import Navbar from './components/Navbar'<font></font>
<font></font>
    export default {<font></font>
        components: {<font></font>
            Navbar<font></font>
        }<font></font>
    }<font></font>
&lt;/script&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题1：一切工作正常，但是我想</font></font><code>&lt;script lang="ts"&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在.ts文件中</font><font style="vertical-align: inherit;">出现intellisense </font><font style="vertical-align: inherit;">标记，那么如何实现呢？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题2：在我的main.ts中</font></font><code>import App from './App'</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但由于VS Code无法找到.ts文件，因此“ ./App”用红色下划线标出。</font><font style="vertical-align: inherit;">有没有一种方法可以使编辑器在编译之前（编辑时）识别.vue？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（2018年3月25日）：我强烈建议大家谁愿意建立TypeScript阅读</font></font><a href="https://alexjoverm.github.io/2017/06/28/Integrate-TypeScript-in-your-Vue-project/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本</font></font></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1663篇《如何使用VS Code在.vue文件中使用Typescript？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三猴子</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于第二季度，vue-class-component附带了一个解决方案</font></font><a href="https://github.com/vuejs/vue-class-component/blob/master/example/sfc.d.ts" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sfc.d.ts</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，希望它可以为您提供帮助。</font><font style="vertical-align: inherit;">如果您对第一季度有任何想法，请通知我</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无伽罗</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于第一季度，我发现了一个很好的VS代码扩展，名为</font></font><a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vetur，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有智能感知支持</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Q2，.vue文件无法实现，仅需使用内部带有模板的.ts</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
