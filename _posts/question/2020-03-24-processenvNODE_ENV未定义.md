---
layout: question
title:  process.env.NODE_ENV未定义
date:   2020-03-24T10:02:14.000Z
description: 我正在尝试遵循有关NodeJ的教程。我不认为我会错过任何事情，但是每当我调用时，process.env.NODE_ENV我得到的唯一值就是不确定的。根据我...
img: 
author: LGil
category: question
answer: 4
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试遵循有关NodeJ的教程。</font><font style="vertical-align: inherit;">我不认为我会错过任何事情，但是每当我调用时，</font></font><code>process.env.NODE_ENV</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我得到的唯一值就是不确定的。</font><font style="vertical-align: inherit;">根据我的研究，默认值应为“开发”。</font><font style="vertical-align: inherit;">如何动态设置此值以及最初在哪里设置？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3612篇《process.env.NODE_ENV未定义》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯猴子西里</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在UBUNTU中使用：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ export NODE_ENV =测试</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在package.json中，我们必须进行如下配置（在Linux和Mac OS中有效）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要的是下面的构建命令是一个示例之后，“ export NODE_ENV = production”：</font></font></p>

<pre><code>  "scripts": {<font></font>
     "start": "export NODE_ENV=production &amp;&amp; npm run build &amp;&amp; npm run start-server",<font></font>
     "dev": "export NODE_ENV=dev &amp;&amp; npm run build &amp;&amp; npm run start-server",<font></font>
  } <font></font>
</code></pre>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于开发环境，我们必须点击“ npm run dev”命令</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于生产环境，我们必须点击“ npm run start”命令</font></font></p></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">process.env是对您的环境的引用，因此您必须在此处设置变量。</font></font></p>

<p><font style="vertical-align: inherit;"></font><a href="http://msdn.microsoft.com/en-us/library/windows/desktop/ms682653%28v=vs.85%29.aspx"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Windows中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置</font><a href="http://msdn.microsoft.com/en-us/library/windows/desktop/ms682653%28v=vs.85%29.aspx"><font style="vertical-align: inherit;">环境变量</font></a><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>SET NODE_ENV=development
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在OS X或</font></font><a href="http://www.codecoffee.com/tipsforlinux/articles/030.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Linux上</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>export NODE_ENV=development
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于使用* nix（Linux，OS X等）的用户，没有必要通过第二个export命令来执行此操作，您可以将其链接为调用命令的一部分：</font></font></p>

<pre><code>NODE_ENV=development node server.js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比较容易，不是吗？</font><font style="vertical-align: inherit;">:)</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
