---
layout: question
title:  如何将TypeScript与Vue.js和单个文件组件一起使用？
date:   2020-04-03T03:48:55.000Z
description: 我在网上搜索了Vue.js + TypeScript设置的最小工作示例。按照“现代JavaScript堆栈”的常规做法，尽管仅在几个月前编写了这些教程，但...
img: 
author: 樱
category: question
answer: 3
tags: JavaScript Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在网上搜索了Vue.js + TypeScript设置的最小工作示例。</font><font style="vertical-align: inherit;">按照“现代JavaScript堆栈”的常规做法，尽管仅在几个月前编写了这些教程，但大多数教程还是过时的，或者取决于特定的设置。</font><font style="vertical-align: inherit;">似乎没有可以建立的通用可验证示例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我考虑过的一些资源：</font></font></p>

<ul>
<li><a href="https://vuejs.org/v2/guide/typescript.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://vuejs.org/v2/guide/typescript.html</font></font></a></li>
<li><a href="https://herringtondarkholme.github.io/2016/10/03/vue2-ts2/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://herringtondarkholme.github.io/2016/10/03/vue2-ts2/</font></font></a></li>
<li><a href="http://www.mindissoftware.com/Vue-Sample-in-Typescript/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.mindissoftware.com/Vue-Sample-in-Typescript/</font></font></a></li>
<li><a href="https://medium.com/@hayavuk/setting-vue-up-for-typescript-goodness-a6ddc4072f4f" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://medium.com/@hayavuk/setting-vue-up-for-typescript-goodness-a6ddc4072f4f</font></font></a></li>
<li><a href="https://johnpapa.net/vue-typescript/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://johnpapa.net/vue-typescript/</font></font></a></li>
<li><a href="https://alexjoverm.github.io/2017/06/28/Integrate-TypeScript-in-your-Vue-project/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://alexjoverm.github.io/2017/06/28/Integrate-TypeScript-in-your-Vue-project/</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用的基本模板是通过运行</font></font><code>vue-cli init webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有默认选项</font><font style="vertical-align: inherit;">提供的模板</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">由于这会产生大量代码，因此我不会在此处粘贴所有内容。</font><font style="vertical-align: inherit;">如果需要某些特定摘录，我将很乐意更新这个问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue.js官方文档对我而言毫无用处，因为它不考虑使用SFC设置TypeScript。</font><font style="vertical-align: inherit;">我尝试的最新版本是列表中的最后一个。</font><font style="vertical-align: inherit;">我精确地遵循了设置，但是在以下方面遇到了以下错误</font></font><code>npm run dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>[tsl] ERROR in /Users/[REDACTED]/ts-test/src/main.ts(12,3)<font></font>
      TS2345: Argument of type '{ el: string; router: any; template: string; components: { App: { name: string; }; }; }' is not assignable to parameter of type 'ComponentOptions&lt;Vue, DefaultData&lt;Vue&gt;, DefaultMethods&lt;Vue&gt;, DefaultComputed, PropsDefinition&lt;Rec...'.<font></font>
  Object literal may only specify known properties, and 'router' does not exist in type 'ComponentOptions&lt;Vue, DefaultData&lt;Vue&gt;, DefaultMethods&lt;Vue&gt;, DefaultComputed, PropsDefinition&lt;Rec...'.<font></font>
</code></pre>

<p>Can anyone shine some light on why this happens and how to resolve it? Better yet, I'd very much welcome a concise, minimal, step-by-step example of how to set up a working Vue.js + TypeScript configuration with the <code>webpack</code> template.</p>

<p>I have already successfully completed several client projects that run in production in Vue.js with vanilla JavaScript but this TypeScript tooling in combination with Vue.js just confuses the hell out of me.</p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3989篇《如何将TypeScript与Vue.js和单个文件组件一起使用？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这看起来像最新的vue-cli模板，其中包含大量星星，并支持vue 2.5。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为我没有看到其他答案中特别提到的内容</font></font></p>

<p><code>vue init ducksoupdev/vue-webpack-typescript my-project</code></p>

<p><a href="https://github.com/ducksoupdev/vue-webpack-typescript" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/ducksoupdev/vue-webpack-typescript</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用最新版本的VueJS，可以使用Vue，Typescript和JSX创建可靠且可维护的项目。</font><font style="vertical-align: inherit;">我已经在</font><a href="https://github.com/tejzpr/Vue.TSX" rel="nofollow noreferrer"><font style="vertical-align: inherit;">Vue.TSX上</font></a><font style="vertical-align: inherit;">为初学者创建了样板</font></font><a href="https://github.com/tejzpr/Vue.TSX" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在2018年9月，应尝试使用</font></font><code>vue-cli</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">带有</font></font><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TypeScript插件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的新功能</font><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">绝对同意@sobolevn的意见。</font><font style="vertical-align: inherit;">但是，我有很多信息可以判断，社区对TypeScript的支持值得等待。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vue的生态系统越来越像TypeScript：</font></font></p>

<ol>
<li><p><code>*.vue</code><font style="vertical-align: inherit;"></font><code>TypeScript</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在VSCode中支持</font><font style="vertical-align: inherit;">文件的</font><font style="vertical-align: inherit;">皮棉。</font><font style="vertical-align: inherit;">看看这个问题</font></font><a href="https://github.com/vuejs/vetur/issues/170" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vetur</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开源生态系统。</font></font></p>

<ul>
<li><a href="https://github.com/vuejs/vue-router/tree/dev/types" rel="nofollow noreferrer"><code>vue-router</code></a></li>
<li><a href="https://github.com/ktsn/vuex-class/" rel="nofollow noreferrer"><code>vuex-class</code></a></li>
<li><a href="https://github.com/vuejs/vue-test-utils/tree/dev/types" rel="nofollow noreferrer"><code>vue-test-utils</code></a></li>
</ul></li>
<li><p><font style="vertical-align: inherit;"></font><code>vue-cli</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设计上的</font><font style="vertical-align: inherit;">新功能</font><font style="vertical-align: inherit;">。</font></font><a href="https://github.com/vuejs-templates/webpack/pull/797" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">点击我</font></font></a></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果您有时间等待，可以暂时观察一下。</font><font style="vertical-align: inherit;">或者，您可以参考以下项目：</font></font><a href="https://github.com/Microsoft/TypeScript-Vue-Starter" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TypeScript-Vue-Starter</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://github.com/Toilal/vue-webpack-template" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有Typescript支持的Webpack模板叉</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
