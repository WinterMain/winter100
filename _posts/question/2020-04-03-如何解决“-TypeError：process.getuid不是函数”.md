---
layout: question
title:  如何解决“ TypeError：process.getuid不是函数”
date:   2020-04-03T02:51:24.000Z
description: 我在laravel上运行react.js并观察了运行正常的更改，yarn run watch直到我在进行一些Windows 10更新后每次使用yarn或n...
img: 
author: 乐米亚
category: question
answer: 4
tags: node.js Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在laravel上运行react.js并观察了运行正常的更改，</font></font><code>yarn run watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直到我在进行一些Windows 10更新后每次使用yarn或npm时都开始遇到webpack的错误（我真的不知道是否可以是一个原因）-我很乐意提供帮助。</font></font></p>

<pre><code>if (!e &amp;&amp; fileOwnerId === process.getuid()) utimesSync(openCollectivePath, now, now)
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：</font></font></strong></p>

<pre><code>TypeError: process.getuid is not a function at C:\project_path\node_modules\webpack-cli\bin\cli.js:352:43 at FSReqCallback.oncomplete (fs.js:153:23)
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3928篇《如何解决“ TypeError：process.getuid不是函数”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Gil</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是跑步</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
为我解决了。</font><font style="vertical-align: inherit;">不必删除任何文件夹</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是星期一偶然发生的吗？</font><font style="vertical-align: inherit;">如果是这样，我认为与这个问题有关：</font><a href="https://github.com/webpack/webpack-cli/issues/962" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://github.com/webpack/webpack-cli/issues/962" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/webpack/webpack-cli/issues/962</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从我收集的数据中，Laravel Mix使用的Webpack CLI尝试每六天打印一次消息，要求用户考虑捐赠，但是最新版本依赖于Windows中不可用的功能。</font><font style="vertical-align: inherit;">最初添加逻辑是为了让那些不断看到消息困扰的人考虑，后来又进行了调整以避免Mac和Linux用户的文件权限问题，但是后者的更改仅在星期一对Windows用户造成了问题。</font></font></p>

<p><a href="https://github.com/webpack/webpack-cli/issues/962#issuecomment-502946992" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户rseeburg在该线程中</font><a href="https://github.com/webpack/webpack-cli/issues/962#issuecomment-502946992" rel="noreferrer"><font style="vertical-align: inherit;">提出</font></a><font style="vertical-align: inherit;">的</font><a href="https://github.com/webpack/webpack-cli/issues/962#issuecomment-502946992" rel="noreferrer"><font style="vertical-align: inherit;">解决方案</font></a><font style="vertical-align: inherit;">只是将有问题的代码包装在try / catch中。</font><font style="vertical-align: inherit;">但是，似乎捐赠消息</font><font style="vertical-align: inherit;">从Webpack CLI 3.3.5开始</font></font><a href="https://github.com/webpack/webpack-cli/releases/tag/v3.3.5" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已被删除</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因此更新软件包应该对其进行修复。</font><font style="vertical-align: inherit;">我通过添加</font></font><code>"webpack-cli": "^3.3.5"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到package.json和其后</font><font style="vertical-align: inherit;">再次使它工作</font></font><code>yarn install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom凯</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以做三件事来解决该问题：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将您的日期更改为星期一以外的任何一天，因为如果</font></font></p>

<pre><code> const now = new Date();<font></font>
if (now.getDay() === MONDAY) {<font></font>
    const { access, constants, statSync, utimesSync } = require("fs");<font></font>
    const lastPrint = statSync(openCollectivePath).atime;<font></font>
    const lastPrintTS = new Date(lastPrint).getTime();<font></font>
    const timeSinceLastPrint = now.getTime() - lastPrintTS;<font></font>
    if (timeSinceLastPrint &gt; SIX_DAYS) {<font></font>
        require(openCollectivePath);<font></font>
        // On windows we need to manually update the atime<font></font>
        access(openCollectivePath, constants.W_OK, e =&gt; {<font></font>
            if (!e) utimesSync(openCollectivePath, now, now);<font></font>
        });<font></font>
    }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于捐赠给他们的包裹 </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除该条件</font></font><code>fileOwnerId === process.getuid())</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但对Windows用户不起作用，因此您可以做最后一件事</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3-</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其添加      </font></font><code>"webpack-cli": "^3.3.5"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到您</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的依赖项中并</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也有这个问题。</font><font style="vertical-align: inherit;">我不确定是什么原因引起的，但是删除我的node_modules文件夹并重新运行“ npm install”对我来说已经解决了。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
