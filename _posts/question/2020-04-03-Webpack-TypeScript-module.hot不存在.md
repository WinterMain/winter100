---
layout: question
title:  Webpack TypeScript module.hot不存在
date:   2020-04-03T02:48:25.000Z
description: 我想启用的WebPack HMR中的NodeJS项目写的TypeScript。但module.hot不可用：\` types / webpack-env定义：...
img: 
author: Gil
category: question
answer: 5
tags: node.js Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想启用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的WebPack HMR</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的NodeJS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目写的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TypeScript</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但</font></font><code>module.hot</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不可用：</font></font></p>

<ul>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ types / webpack-env</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义：</font></font></p>

<pre><code>declare var module: __WebpackModuleApi.Module
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪些与</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ types / node</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">定义</font><font style="vertical-align: inherit;">冲突</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>declare var module: NodeModule
</code></pre></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ types / node</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以解决此问题，但会禁用</font></font><code>process</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>process.env.NODE_ENV === 'production' // [ts] Cannot find name 'process'
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3918篇《Webpack TypeScript module.hot不存在》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这修复了它</font></font></strong></p>

<p><code>yarn add @types/webpack-env --dev</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">VScode将立即工作</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Intellij需要重新启动</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以扩大全局范围并使用接口合并来重新打开</font></font><code>NodeModule</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接口并添加缺少的</font></font><code>hot</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性。</font></font></p>

<pre><code>import webpack = require("webpack");<font></font>
<font></font>
declare global {<font></font>
    interface NodeModule {<font></font>
        hot: {<font></font>
            accept(dependencies: string[], callback: (updatedDependencies: string[]) =&gt; void): void;<font></font>
            accept(dependency: string, callback: () =&gt; void): void;<font></font>
            accept(errHandler?: (err: any) =&gt; void): void;<font></font>
            decline(dependencies: string[]): void;<font></font>
            decline(dependency: string): void;<font></font>
            decline(): void;<font></font>
<font></font>
            dispose(callback: (data: any) =&gt; void): void;<font></font>
            addDisposeHandler(callback: (data: any) =&gt; void): void;<font></font>
<font></font>
            removeDisposeHandler(callback: (data: any) =&gt; void): void;<font></font>
            // ...<font></font>
        }<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，实际上，应该在Webpack声明文件本身中完成这种扩充。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就像在文件顶部添加以下行一样简单。 </font></font></p>

<pre><code>///&lt;reference types="webpack-env" /&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很少有人在这里写道，这是最好的方法：</font></font></p>

<pre><code>npm i -D @types/webpack-env
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，它按预期工作，解决了无法识别的</font></font><code>hot</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">财产的问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的项目中，我使用的是这些版本：</font></font></p>

<pre><code>"@types/node": "^8.0.19",<font></font>
"@types/webpack-env": "^1.13.0"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道问题是否仍然是最新的，但是对于我为webpack安装类型的问题有所帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决冲突</font></font></h2>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ types / webpack-env</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已更新：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"></font><code>module</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font><a href="https://github.com/DefinitelyTyped/DefinitelyTyped/pull/13741" rel="noreferrer"><font style="vertical-align: inherit;">此PR</font></a><font style="vertical-align: inherit;">中解决了</font><font style="vertical-align: inherit;">冲突</font></font><a href="https://github.com/DefinitelyTyped/DefinitelyTyped/pull/13741" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p></li>
<li><p><code>process</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已在</font><a href="https://github.com/DefinitelyTyped/DefinitelyTyped/commit/c0cba20b9f2e44c8b679c88d58aa30d69d3d272c" rel="noreferrer"><font style="vertical-align: inherit;">此提交</font></a><font style="vertical-align: inherit;">中添加</font></font><a href="https://github.com/DefinitelyTyped/DefinitelyTyped/commit/c0cba20b9f2e44c8b679c88d58aa30d69d3d272c" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，原始问题中的代码仅需要</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ types / webpack-env</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但同时导入</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@ types / node</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不会再发生冲突。</font></font></p>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装</font></font></h2>

<pre><code>npm install --save-dev @types/webpack-env
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且如果您还需要NodeJS环境定义：</font></font></p>

<pre><code>npm install --save-dev @types/node
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
