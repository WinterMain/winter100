---
layout: question
title:  如何在vue.js应用程序中访问外部json文件对象
date:   2020-03-11T03:48:58.000Z
description: 如何在vue.js应用程序中访问JSON对象我是新手import json from './json/data.json'JSON文件已加载，现...
img: 
author: 木何鱼
category: question
answer: 1
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何</font><font style="vertical-align: inherit;">在</font><strong><font style="vertical-align: inherit;">vue.js</font></strong><font style="vertical-align: inherit;">应用程序中</font><font style="vertical-align: inherit;">访问</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对象</font><font style="vertical-align: inherit;">我是新手</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<pre><code>import json from './json/data.json'
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">JSON文件已加载，现在我必须访问其中的对象 </font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第619篇《如何在vue.js应用程序中访问外部json文件对象》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿JinJin</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> TypeScript项目（我在SFC vue组件中有 TypeScript），需要将</font></font><code>resolveJsonModule</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编译器选项</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">为</font></font><code>true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在tsconfig.json中：</font></font></p>

<pre><code>{<font></font>
  "compilerOptions": {<font></font>
    ...<font></font>
    "resolveJsonModule": true,<font></font>
    ...<font></font>
  },<font></font>
  ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快乐的编码:)</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（来源</font></font><a href="https://www.typescriptlang.org/docs/handbook/compiler-options.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.typescriptlang.org/docs/handbook/compiler-options.html</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
