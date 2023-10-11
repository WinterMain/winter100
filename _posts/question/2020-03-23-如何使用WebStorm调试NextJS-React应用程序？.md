---
layout: question
title:  如何使用WebStorm调试NextJS React应用程序？
date:   2020-03-23T06:42:14.000Z
description: 我正在尝试使用WebStorm IDE调试器调试NextJS React应用程序。我尝试使用JavaScript配置，但这似乎不起作用-当我使用Node配...
img: 
author: 凯西里
category: question
answer: 1
tags: node.js React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用WebStorm IDE调试器调试NextJS React应用程序。</font><font style="vertical-align: inherit;">我尝试使用JavaScript配置，但这似乎不起作用-当我使用Node配置时也是如此。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用WebStorm调试NextJS React应用程序的正确步骤是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2862篇《如何使用WebStorm调试NextJS React应用程序？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下步骤对我有用：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用next（</font></font><code>npm run dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或任何启动脚本的样子）</font><font style="vertical-align: inherit;">启动应用程序</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加断点，创建</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JavaScript Debug</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行配置，指定</font></font><code>http://localhost:3000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">URL</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">调试</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想调试在服务器端执行的代码，建议您使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行配置，并将其</font></font><code>node_modules\next\dist\bin\next</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指定为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript文件：</font></font></strong> </p>

<p><a href="https://i.stack.imgur.com/MKbDF.png" rel="noreferrer"><img src="https://i.stack.imgur.com/MKbDF.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以调试</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Javascript Debug</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行配置，以</font><strong><font style="vertical-align: inherit;">调试</font></strong><font style="vertical-align: inherit;">服务器端和客户端代码。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
