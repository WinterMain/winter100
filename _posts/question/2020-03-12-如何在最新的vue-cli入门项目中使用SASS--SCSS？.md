---
layout: question
title:  如何在最新的vue-cli入门项目中使用SASS / SCSS？
date:   2020-03-12T07:27:42.000Z
description: 我需要在项目中使用SASS或SCSS。我使用vue-cli制作了最新版本的入门项目。任何人都可以通过webpack在最新的入门项目中使sass /...
img: 
author: 猿村村
category: question
answer: 1
tags: webpack Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要在项目中使用SASS或SCSS。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用vue-cli制作了最新版本的入门项目。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何人都可以通过webpack在最新的入门项目中使sass / scss工作成功吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第1060篇《如何在最新的vue-cli入门项目中使用SASS / SCSS？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">奔跑的小象</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为的最新文档</font></font><code>@vue/cli-service": "^3.9.0"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，首先需要安装两个npm dev依赖项，即sass，sass-loader</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">萨斯</font></font></strong></p>

<p><code>npm install -D sass-loader sass</code></p>

<p><code>yarn add --dev sass-loader sass</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以导入相应的文件类型，或通过以下方式在* .vue文件中使用它们：</font></font></p>

<pre><code>&lt;style lang="scss"&gt;<font></font>
  $color: red;<font></font>
&lt;/style&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅</font></font><a href="https://cli.vuejs.org/guide/css.html#pre-processors" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处的最新文档</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
