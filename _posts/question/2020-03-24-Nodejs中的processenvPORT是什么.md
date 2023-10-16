---
layout: question
title:  Node.js中的process.env.PORT是什么？
date:   2020-03-24T09:07:02.000Z
description: process.env.PORT || 3000Node.js的用途是什么？我在某处看到了这个： app.set('port', process.en...
img: 
author: Mandy小胖
category: question
answer: 1
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>process.env.PORT || 3000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js的用途是</font><font style="vertical-align: inherit;">什么</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">我在某处看到了这个：</font></font></p>

<pre><code> app.set('port', process.env.PORT || 3000);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果用于设置</font></font><code>3000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为监听端口，我可以改用它吗？</font></font></p>

<pre><code>app.listen(3000);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不是，为什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3528篇《Node.js中的process.env.PORT是什么？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin伽罗小胖</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您运行</font></font><code>node index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，Node将使用</font></font><code>3000</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果运行</font></font><code>PORT=4444 node index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则Node </font><font style="vertical-align: inherit;">在此示例</font><font style="vertical-align: inherit;">中将使用</font></font><code>process.env.PORT</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等于</font></font><code>4444</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><code>sudo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于1024以下的端口</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">。</font></font></p></li>
</ul></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
