---
layout: question
title:  如何使用相对路径在Webpack中使用SCSS（SASS）加载超棒的字体？
date:   2020-03-18T08:59:53.000Z
description: 我的node_modules文件夹中的字体很棒，因此我尝试将其导入到主.scss文件中，如下所示：\`import "../../node_module...
img: 
author: 番长猴子
category: question
answer: 2
tags: node.js CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的node_modules文件夹中的字体很棒，因此我尝试将其导入到主.scss文件中，如下所示：</font></font></p>

<pre><code>@import "../../node_modules/font-awesome/scss/font-awesome.scss";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是Webpack捆绑编译失败，告诉我</font></font></p>

<pre><code>Error: Cannot resolve 'file' or 'directory' ../fonts/fontawesome-webfont.eot 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为font-awesome.scss文件引用相对路径'../fonts/'。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何告诉scss \ webpack @import另一个文件，并使用该文件的文件夹作为主文件夹，以便其相对路径按预期工作？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2086篇《如何使用相对路径在Webpack中使用SCSS（SASS）加载超棒的字体？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi十三村村</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关说明，请参见角度网站。
 </font></font><a href="https://github.com/angular/angular-cli/wiki/stories-include-font-awesome" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包括真棒字体</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green米亚</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用</font></font></p>

<pre><code>$fa-font-path: "~font-awesome/fonts";<font></font>
@import "~font-awesome/scss/font-awesome";<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在哪里</font></font><code>$fa-font-path</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看到变量</font></font><code>font-awesome/scss/_variables.scss</code></p>

<pre><code>$fa-font-path: "../fonts" !default;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如此处所述：</font><a href="http://fontawesome.io/get-started/" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="http://fontawesome.io/get-started/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//fontawesome.io/get-started/</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
