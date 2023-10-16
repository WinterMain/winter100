---
layout: question
title:  Chunk.entrypoints：使用Chunks.groupsIterable并按instanceof Entrypoint进行过滤
date:   2020-03-23T06:36:11.000Z
description: 尝试启动我的应用时，我看到以下错误...> css-modules\`1.0.0 start /Users/johnnynolan/Repos/css-...
img: 
author: 斯丁飞云
category: question
answer: 3
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试启动我的应用时，我看到以下错误...</font></font></p>

<pre><code>&gt; css-modules@1.0.0 start /Users/johnnynolan/Repos/css-modules
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack &amp;&amp;打开index.html</font></font></p>
</blockquote>

<pre><code>(node:5706) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead<font></font>
/Users/johnnynolan/Repos/css-modules/node_modules/webpack/lib/Chunk.js:802<font></font>
        throw new Error(<font></font>
        ^<font></font>
<font></font>
Error: Chunk.entrypoints: Use Chunks.groupsIterable and filter by instanceof Entrypoint instead<font></font>
    at Chunk.get (/Users/johnnynolan/Repos/css-modules/node_modules/webpack/lib/Chunk.js:802:9)<font></font>
    at /Users/johnnynolan/Repos/css-modules/node_modules/extract-text-webpack-plugin/dist/index.js:176:48<font></font>
    at Array.forEach (&lt;anonymous&gt;)<font></font>
    at /Users/johnnynolan/Repos/css-modules/node_modules/extract-text-webpack-plugin/dist/index.js:171:18<font></font>
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/johnnynolan/Repos/css-modules/node_modules/tapable/lib/HookCodeFactory.js:24:12), &lt;anonymous&gt;:7:1)<font></font>
    at AsyncSeriesHook.lazyCompileHook [as _callAsync] (/Users/johnnynolan/Repos/css-modules/node_modules/tapable/lib/Hook.js:35:21)<font></font>
    at Compilation.seal (/Users/johnnynolan/Repos/css-modules/node_modules/webpack/lib/Compilation.js:1203:27)<font></font>
    at hooks.make.callAsync.err (/Users/johnnynolan/Repos/css-modules/node_modules/webpack/lib/Compiler.js:547:17)<font></font>
    at _err0 (eval at create (/Users/johnnynolan/Repos/css-modules/node_modules/tapable/lib/HookCodeFactory.js:24:12), &lt;anonymous&gt;:11:1)<font></font>
    at _addModuleChain (/Users/johnnynolan/Repos/css-modules/node_modules/webpack/lib/Compilation.js:1054:12)<font></font>
    at processModuleDependencies.err (/Users/johnnynolan/Repos/css-modules/node_modules/webpack/lib/Compilation.js:980:9)<font></font>
    at _combinedTickCallback (internal/process/next_tick.js:131:7)<font></font>
    at process._tickCallback (internal/process/next_tick.js:180:9)<font></font>
    npm ERR! code ELIFECYCLE<font></font>
    npm ERR! errno 1<font></font>
    npm ERR! css-modules@1.0.0 start: `webpack &amp;&amp; open index.html`<font></font>
    npm ERR! Exit status 1<font></font>
    npm ERR! <font></font>
    npm ERR! Failed at the css-modules@1.0.0 start script.<font></font>
    npm ERR! This is probably not a problem with npm. There is likely additional logging output above.<font></font>
    npm ERR! A complete log of this run can be found in:<font></font>
    npm ERR!     /Users/johnnynolan/.npm/_logs/2018-07-17T14_04_42_021Z-debug.log<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2849篇《Chunk.entrypoints：使用Chunks.groupsIterable并按instanceof Entrypoint进行过滤》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经使用版本修复了这一错误</font></font><code>4.0.0-beta.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>extract-text-webpack-plugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><a href="https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/701" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/701</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
 上的</font><font style="vertical-align: inherit;">大多数评论都</font><font style="vertical-align: inherit;">指向将其</font></font><code>extract-text-plugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改为</font></font><code>mini-css-extract-plugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自</font><a href="https://github.com/webpack-contrib/extract-text-webpack-plugin" rel="noreferrer"><font style="vertical-align: inherit;">https://github.com/webpack-contrib/extract-text-webpack-plugin</font></a><font style="vertical-align: inherit;">的Github存储库</font></font><code>extract-text-webpack-plugin</code>  <a href="https://github.com/webpack-contrib/extract-text-webpack-plugin" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Since️从webpack v4开始，extract-text-webpack-plugin不应该用于CSS。</font><font style="vertical-align: inherit;">请改用mini-css-extract-plugin。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转至 
 </font></font><code>mini-css-extract-plugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何交换/升级它
  </font></font><a href="https://github.com/webpack-contrib/mini-css-extract-plugin" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/webpack-contrib/mini-css-extract-plugin</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil西里斯丁</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><pre><code>npm install extract-text-webpack-plugin@next
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用！</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
