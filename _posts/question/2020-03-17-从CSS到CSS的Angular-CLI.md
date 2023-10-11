---
layout: question
title:  从CSS到CSS的Angular CLI
date:   2020-03-17T10:11:29.000Z
description: 我已经阅读了文档，其中说如果要使用scss，必须运行以下命令：ng set defaults.styleExt scss但是当我这样做并制作该文...
img: 
author: 番长千羽
category: question
answer: 8
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经阅读了</font></font><a href="https://github.com/angular/angular-cli" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其中说如果要使用</font></font><code>scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，必须运行以下命令：</font></font></p>

<pre><code>ng set defaults.styleExt scss
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是当我这样做并制作该文件时，我仍然在控制台中收到此错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">styles.bundle.js：33Uncaught错误：模块构建失败：错误：ENOENT：没有此类文件或目录，请打开'/Users/Egen/Code/angular/src/styles.css'(…）</font></font></p>
</blockquote></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1969篇《从CSS到CSS的Angular CLI》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无ProHarry</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于现有项目</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>angular.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font></font></em></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分和</font></font><code>test</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分取代：</font></font></p>

<p><code>"styles": ["src/styles.css"],</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 通过 </font></font><code>"styles": ["src/styles.scss"],</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更换：</font></font></p>

<p><code>"schematics": {},</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 通过 </font></font><code>"schematics": { "@schematics/angular:component": { "style": "scss" } },</code></p></li>
</ol>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>ng config schematics.@schematics/angular:component.styleext
  scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令有效，但是不能将配置放在同一位置。</font></font></p>
</blockquote>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的项目中，</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">重命名</font><font style="vertical-align: inherit;">为</font></font><code>.scss</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于新项目</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，此命令可以完成所有工作：</font></font></p>

<pre><code>ng n project-name --style=scss
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于全局配置</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新版本似乎没有全局命令</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim猪猪伽罗</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular CLI的CSS预处理器集成：6.0.3</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成新项目时，您还可以定义所需的样式文件扩展名：</font></font></p>

<pre><code>ng new sassy-project --style=sass
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或在现有项目上设置默认样式：</font></font></p>

<pre><code>ng config schematics.@schematics/angular:component.styleext scss
</code></pre>

<p><a href="https://github.com/angular/angular-cli/wiki/stories-css-preprocessors" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有主要CSS预处理器的Angular CLI文档</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯Near</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用命令：</font></font></p>

<pre><code>ng config schematics.@schematics/angular:component.styleext scss
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子樱</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font><font style="vertical-align: inherit;">遇到此线程</font><font style="vertical-align: inherit;">的</font></font><a href="https://nrwl.io/nx" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nrwl扩展的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户</font><font style="vertical-align: inherit;">：Nx会拦截所有命令（例如</font></font><code>ng generate component myCompent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），然后将其传递给AngularCLI。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使SCSS在Nx工作空间中工作的命令：</font></font></p>

<p><code>ng config schematics.@nrwl/schematics:component.styleext scss</code> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云西门Tony</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Angular 6，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请查看</font></font><a href="https://github.com/angular/angular-cli/wiki/stories-css-preprocessors" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">官方文档</font></font></a></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注：</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><code>@angular/cli</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比旧版本</font></font><code>6.0.0-beta.6</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>ng set</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到位</font></font><code>ng config</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于现有项目</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在现有的使用默认</font></font><code>css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样式</font><font style="vertical-align: inherit;">设置的angular-cli项目中，</font><font style="vertical-align: inherit;">您需要做一些事情：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将默认样式扩展名更改为 </font></font><code>scss</code></li>
</ol>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动更改.angular-cli.json（Angular 5.x和更早版本）或angular.json（Angular 6+）或运行：</font></font></p>

<pre><code>ng config defaults.styleExt=scss
</code></pre>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果出现错误：请</font></font><code>Value cannot be found.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下命令：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng配置示意图。@ schematics / angular：component.styleext scss</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（*来源：</font></font><a href="https://stackoverflow.com/questions/36220256/angular-cli-sass-options"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular CLI SASS选项</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<ol start="2">
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将现有</font></font><code>.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">重命名</font><font style="vertical-align: inherit;">为</font></font><code>.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（即styles.css和app / app.component.css）</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指向CLI来找到styles.scss</font></font></p></li>
</ol>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动更改</font></font><code>apps[0].styles</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">angular.json中</font><font style="vertical-align: inherit;">的文件扩展名</font></font></p>
</blockquote>

<ol start="4">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指向组件以查找新样式文件</font></font></li>
</ol>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改</font></font><code>styleUrls</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组件中的以匹配新文件名</font></font></p>
</blockquote>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于未来的项目</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如@Serginho所述，您可以在运行</font></font><code>ng new</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令</font><font style="vertical-align: inherit;">时设置样式扩展名</font></font></p>

<pre><code>ng new your-project-name --style=scss
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要为以后创建的所有项目设置默认值，请运行以下命令：</font></font></p>

<pre><code>ng config --global defaults.styleExt=scss
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Near小卤蛋</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Angular 6，</font></font></p>

<pre><code>ng config schematics.@schematics/angular:component.styleext scss
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：@ schematics / angular是Angular CLI的默认原理图</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro小哥GO</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">angular.json</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.改变</font></font></p>

<p><code>"schematics": {}</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至</font></font></p>

<pre><code>"schematics": {<font></font>
           "@schematics/angular:component": {<font></font>
                   "styleext": "scss"       <font></font>
             }  <font></font>
  }<font></font>
</code></pre>

<ol start="2">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从（在两个地方）更改</font></font></li>
</ol>

<p><code>"src/styles.css"</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">至</font></font></p>

<p><code>"src/styles.scss"</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后检查并重命名所有</font></font><code>.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件并从以下位置更新component.ts文件的styleUrls</font></font><code>.css to .scss</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐神奇</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从ng6开始，这可以通过</font></font><code>angular.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在根级别</font><font style="vertical-align: inherit;">添加以下代码来完成</font><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动更改</font></font><code>.angular.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-js prettyprint-override"><code>"schematics": {<font></font>
  "@schematics/angular:component": {<font></font>
    "styleext": "scss"<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
