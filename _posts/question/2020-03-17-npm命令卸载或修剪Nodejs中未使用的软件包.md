---
layout: question
title:  npm命令卸载或修剪Node.js中未使用的软件包
date:   2020-03-17T10:03:06.000Z
description: 有没有一种方法可以简单地从Node.js项目中卸载所有未使用的（未声明的）依赖项（在我中不再定义的依赖项）package.json。当我更新应用程序时，我...
img: 
author: Eva米亚
category: question
answer: 1
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以简单地从Node.js项目中卸载所有未使用的（未声明的）依赖项（在我中不再定义的依赖项）</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。当我更新应用程序时，我希望自动删除未引用的程序包。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1956篇《npm命令卸载或修剪Node.js中未使用的软件包》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三斯丁</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你不担心一两分钟的时间这样做，一个解决办法是</font></font><code>rm -rf node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次来重建本地模块。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
