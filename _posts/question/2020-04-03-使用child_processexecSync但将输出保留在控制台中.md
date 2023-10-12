---
layout: question
title:  使用child_process.execSync，但将输出保留在控制台中
date:   2020-04-03T02:37:30.000Z
description: 我想使用execSync在NodeJS 0.12中添加的方法，但仍然在运行Node脚本的控制台窗口中具有输出。例如，如果我运行具有以下行的NodeJS...
img: 
author: 樱
category: question
answer: 0
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想使用</font></font><code>execSync</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在NodeJS 0.12中添加</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">方法，但仍然在运行Node脚本的控制台窗口中具有输出。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如果我运行具有以下行的NodeJS脚本，我想在控制台中看到rsync命令“ live”的完整输出：</font></font></p>

<pre><code>require('child_process').execSync('rsync -avAXz --info=progress2 "/src" "/dest"');
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这会</font></font><code>execSync</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回命令的输出，执行后我可以将其输出到控制台，但是这样我就没有“实时”输出...</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3896篇《使用child_process.execSync，但将输出保留在控制台中》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
