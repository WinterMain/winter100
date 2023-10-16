---
layout: question
title:  如何在Angular CLI 6中添加Sass编译：angular.json？
date:   2020-03-18T09:02:52.000Z
description: 我刚刚使用新的Angular CLI 6.0创建了一个新的Angular项目，但是我需要将Sass编译添加到我的项目中。我知道您可以在创建项目时设置标志，...
img: 
author: 乐樱
category: question
answer: 1
tags: 角度 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚使用新的Angular CLI 6.0创建了一个新的Angular项目，但是我需要将Sass编译添加到我的项目中。</font><font style="vertical-align: inherit;">我知道您可以在创建项目时设置标志，但是我的项目已经创建并且工作已经完成。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过新的Angular CLI生成的新配置文件现在称为</font></font><code>angular.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>angular-cli.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">文件的方案也有所不同，具有新的属性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在旧的版本中</font></font><code>angular-cli.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以设置</font></font><code>stylExt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似的内容，</font></font></p>

<pre><code>"defaults": {<font></font>
    "styleExt": "scss"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但我不确定确切将其放置在何处，如</font></font><code>"test"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>"lint"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">属性之后，会出现以下错误：</font></font></p>

<p><code>Matches multiple schemas when only one must validate.</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建筑产生： </font></font></p>

<p><code>Schema validation failed with the following errors:
  Data path "['defaults']" should NOT have additional properties(styleExt).</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看</font></font><a href="https://github.com/angular/angular-cli/wiki/angular-workspace" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CLI的文档，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看不到任何指示放置位置的信息</font></font><code>"styleExt"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还看到了其他一些建议：</font></font><code>ng set defaults.styleExt scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">抛出</font></font><code>get/set have been deprecated in favor of the config command.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试过</font></font><code>ng config set defaults.styleExt scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>npm config set defaults.styleExt scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前者抛出一个错误，而后者显然对文件没有影响，但是没有错误。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2090篇《如何在Angular CLI 6中添加Sass编译：angular.json？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里飞云</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全按照</font></font><a href="https://stackoverflow.com/questions/50165010/how-do-i-add-sass-compilation-in-angular-cli-6-angular-json/50205876#comment87348040_50165010"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Smokey Dawson的评论</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></p>

<pre><code>"projects": {<font></font>
  "angular-app": {<font></font>
    "root": "",<font></font>
    "sourceRoot": "src",<font></font>
    "projectType": "application",<font></font>
    "prefix": "app",<font></font>
    "schematics": {<font></font>
      "@schematics/angular:component": {<font></font>
        "styleext": "scss"<font></font>
      }<font></font>
    },<font></font>
    "architect": {...}<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以上是结果。</font><font style="vertical-align: inherit;">因此，在您的应用中，在键下</font></font><code>schematics</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，添加一个键</font></font><code>@schematics/angular:component</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
，并将键</font></font><code>styleext</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置为</font></font><code>scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这应该应用于</font></font><code>angular.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目根目录中的文件。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
