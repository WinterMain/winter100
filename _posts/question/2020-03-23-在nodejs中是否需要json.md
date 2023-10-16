---
layout: question
title:  在node.js中是否需要json
date:   2020-03-23T02:28:47.000Z
description: 我想在我的JavaScript代码中包含与我的JavaScript源文件在同一目录中的几个JSON文件。如果我想包含另一个JavaScript文件，可...
img: 
author: 宝儿JinJin
category: question
answer: 1
tags: json Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想在我的JavaScript代码中包含与我的JavaScript源文件在同一目录中的几个JSON文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我想包含另一个JavaScript文件，可以直接使用</font></font><code>require</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">现在，我正在使用</font></font><code>readFileSync</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>__dirname</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取JSON，我认为这是执行此操作的丑陋方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有类似的要求，使我能够加载JSON文件？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2650篇《在node.js中是否需要json》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanLEYDavaid</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">否。请使用</font></font><code>readFile</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>readFileSync</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（后者仅在启动时使用）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或使用现有的库</font></font></p>

<ul>
<li><a href="https://github.com/kof/node-cjson" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cjson</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者将您的配置写入js文件而不是json文件，例如</font></font></p>

<pre><code>module.exports = {<font></font>
  // json<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
