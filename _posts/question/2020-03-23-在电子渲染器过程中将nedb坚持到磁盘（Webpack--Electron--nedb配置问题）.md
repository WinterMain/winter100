---
layout: question
title:  在电子渲染器过程中将nedb坚持到磁盘（Webpack / Electron / nedb配置问题）
date:   2020-03-23T07:52:10.000Z
description: 问题我正在尝试在Electron渲染器进程中使用名为nedb的纯JS数据库。它使用browser领域中的package.json要交换基于浏览器的存储...
img: 
author: 泡芙
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试</font><font style="vertical-align: inherit;">在Electron渲染器进程中</font><font style="vertical-align: inherit;">使用名为</font></font><a href="https://github.com/louischatriot/nedb" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nedb</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的纯JS数据库</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它使用</font></font><a href="https://github.com/defunctzombie/package-browser-field-spec" rel="noreferrer"><code>browser</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">领域</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font></font><a href="https://github.com/louischatriot/nedb/blob/master/package.json#L41-L44" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>package.json</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要交换基于浏览器的存储系统。</font><font style="vertical-align: inherit;">这导致我的数据库实际上未持久保存到文件中。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Next.js作为我的视图框架，并且</font></font><code>"target": "electron-renderer"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为渲染线程</font><font style="vertical-align: inherit;">配置了它的Webpack </font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">显然，这使Webpack处理这些浏览器指令，即使渲染器进程应有权访问浏览器和Node API。</font><font style="vertical-align: inherit;">此行为并未真正记录下来，所以我不知道如何覆盖它。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试过的</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经确认，如果我手动编辑</font></font><code>browser</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的本地副本上的字段</font></font><code>node_modules/nedb/package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则问题将消失。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为临时的解决方法，我已经指出了自己的能力</font></font><code>nedb</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但这是非常不令人满意的。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他研究</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">奇怪的是，这似乎对电子战来说不是问题，电子战的文档</font></font><a href="https://simulatedgreg.gitbooks.io/electron-vue/content/en/savingreading-local-files.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">明确演示</font></font></a><font style="vertical-align: inherit;"></font><code>nedb</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了渲染器过程中</font><font style="vertical-align: inherit;">对电子战的</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">实际上，该框架似乎确实</font></font><code>"target": "electron-renderer"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://github.com/SimulatedGREG/electron-vue/blob/master/template/.electron-vue/webpack.renderer.config.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其Webpack config中使用</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否可以通过Webpack配置解决此问题？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2951篇《在电子渲染器过程中将nedb坚持到磁盘（Webpack / Electron / nedb配置问题）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
