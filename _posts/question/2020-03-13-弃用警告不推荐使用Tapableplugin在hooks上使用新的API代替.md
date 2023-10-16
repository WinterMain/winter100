---
layout: question
title:  弃用警告：不推荐使用Tapable.plugin。在.hooks上使用新的API代替
date:   2020-03-13T07:37:11.000Z
description: 我尝试运行Vuetify VueJS Cordova示例，但之后出现此错误npm run dev      节点build / dev-serve...
img: 
author: 西门逆天
category: question
answer: 5
tags: 科尔多瓦 Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试运行</font></font><a href="https://github.com/vuetifyjs/cordova" rel="noreferrer"><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vuetify VueJS Cordova示例，</font></font></strong></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但之后出现此错误</font></font><code>npm run dev</code></p>

<blockquote>
  <blockquote>
    <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点build / dev-server.js</font></font></p>
    
    <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正在启动开发服务器...（节点：1024）弃用警告：不推荐使用Tapable.plugin。</font></font><code>.hooks</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">改为</font><font style="vertical-align: inherit;">使用新的API </font><font style="vertical-align: inherit;">（节点：1024）DeprecationWarning：不推荐使用Tapable.apply。</font><font style="vertical-align: inherit;">直接在插件上调用Apply</font></font></p>
  </blockquote>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何解决？</font><font style="vertical-align: inherit;">我已经更新了所有NPM软件包，但无济于事。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1398篇《弃用警告：不推荐使用Tapable.plugin。在.hooks上使用新的API代替》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi米亚斯丁</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我面临着同样的问题。</font><font style="vertical-align: inherit;">使用以下命令解决：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install --save-dev extract-text-webpack-plugin @ next </font></font></p>
</blockquote>

<pre><code>NPM 6.4.1<font></font>
Node 10.9.0<font></font>
Webpack 4.22.0 <font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYStafan</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，问题出在webpack-cleanup-plugin中。</font><font style="vertical-align: inherit;">我用clean-self-webpack-plugin替换了此插件后，已对其进行修复。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry逆天</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack 4上有多个插件可能会引起此警告，因为它们仍在使用旧的插件API，因此需要将其升级到最新版本。</font><font style="vertical-align: inherit;">要查找引起该警告的插件，请将其放在webpack配置文件的顶部：</font></font></p>

<p><code>process.traceDeprecation = true</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将看到类似以下的详细堆栈跟踪：</font></font></p>

<pre><code> (node:10213) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead<font></font>
   at FriendlyErrorsWebpackPlugin.apply (./node_modules/friendly-errors-webpack-plugin/src/friendly-errors-plugin.js:39:14)<font></font>
   at webpack (./node_modules/webpack/lib/webpack.js:37:12)<font></font>
   at processOptions (./node_modules/webpack-cli/bin/webpack.js:436:16)<font></font>
   at &lt;anonymous&gt;<font></font>
   at process._tickCallback (internal/process/next_tick.js:160:7)<font></font>
   at Function.Module.runMain (module.js:703:11)<font></font>
   at startup (bootstrap_node.js:193:16)<font></font>
   at bootstrap_node.js:617:3<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，这意味着</font></font><code>friendly-errors-webpack-plugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对警告负责。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您可以添加</font></font><code>--trace-deprecation</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">来运行节点进程</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在找到哪个插件引起警告升级后，请使用软件包管理器对其进行升级，警告应消失：</font></font></p>

<p><code>yarn upgrade friendly-errors-webpack-plugin</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不想完全禁止这样的弃用警告（不推荐），请使用 </font></font><code>process.noDeprecation = true</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这有助于我快速找到问题，希望对其他人有所帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里猴子</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的情况下，</font></font><code>webpack-md5-hash</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包装</font><font style="vertical-align: inherit;">提出了弃用通知</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomL</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我尝试两次运行webpack-dev-server时遇到了这个问题，一个在一个终端上运行，另一个在另一个终端上运行。</font><font style="vertical-align: inherit;">只运行一个解决了该问题。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
