---
layout: question
title:  我如何实际部署Angular 2 + Typescript + systemjs应用程序？
date:   2020-05-28T07:38:55.000Z
description: 在angular.io上有一个快速入门教程，它使用TypeScript和systemjs。既然我已经运行了该miniapp，我将如何创建可部署的东西？我找不到任何有关它...
img: 
author: 猴子村村
category: question
answer: 3
tags: TypeScript
topic: TypeScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在angular.io上有一个快速入门教程，它使用TypeScript和systemjs。</font><font style="vertical-align: inherit;">既然我已经运行了该miniapp，我将如何创建可部署的东西？</font><font style="vertical-align: inherit;">我找不到任何有关它的信息。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是否需要任何其他工具，System.config中的任何其他设置？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我知道我可以使用webpack并创建一个bundle.js，但我想使用本教程中使用的systemjs）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人可以通过此设置（Angular 2，TypeScript，systemjs）共享其构建过程吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4238篇《我如何实际部署Angular 2 + Typescript + systemjs应用程序？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Angular.io网站的“高级/部署”部分下，建议最简单的部署方法是“将开发环境复制到服务器”。</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请仔细阅读以下部分：可能的最简单部署。</font><font style="vertical-align: inherit;">最终的项目文件显示在代码部分中。</font><font style="vertical-align: inherit;">请注意，它已经设置了从网络（而不是从本地npm_modules文件夹）加载npm软件包文件的代码。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保它正在本地计算机上运行（npm start）。</font><font style="vertical-align: inherit;">然后，在项目文件夹下，将“ / src”子文件夹下的所有内容复制到已设置的S3存储桶中。</font><font style="vertical-align: inherit;">您可以使用拖放操作进行复制，在此过程中，您可以选择文件的权限设置，并确保将文件“可读”为“所有人”。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在存储桶的“属性”标签下，找到“静态网站托管”面板，选中“使用此存储桶托管网站”选项，然后为索引文档和错误文档指定“ index.html”。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击静态网站Endpoint，您的项目运行良好！</font></font></p></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在后端使用expressjs服务于ng2项目。</font><font style="vertical-align: inherit;">您可以从我的github页面检查它：</font><a href="https://github.com/echonax/ng2-beta-and-test-framework" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://github.com/echonax/ng2-beta-and-test-framework" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/echonax/ng2-beta-and-test-framework</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">千羽</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用angular2-cli build命令 </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">ng build </span><span class="pun">-</span><span class="pln">prod</span></code></pre>

<p><a href="https://github.com/angular/angular-cli/wiki/build#bundling" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/angular/angular-cli/wiki/build#bundling</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-prod</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志</font><font style="vertical-align: inherit;">创建的</font><strong><font style="vertical-align: inherit;">构建</font></strong><font style="vertical-align: inherit;">通过</font></font><code>ng build -prod</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或将</font></font><code>ng serve -prod</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有依赖项捆绑到一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并利用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">树状摇动</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">技术。</font></font></p>
</blockquote>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新资料</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题是在rc4中使用angular2时提交的</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经在angular-cli beta21和angular2 ^ 2.1.0上再次尝试过，它按预期工作</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要获得此答案，您需要使用可以使用的angular-cli初始化应用 </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">ng </span><span class="kwd">new</span><span class="pln"> myApp</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或在现有的 </font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">ng init</span></code></pre>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新08/06/2018</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于角度6，语法是不同的。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">ng build </span><span class="pun">--</span><span class="pln">prod </span><span class="pun">--</span><span class="pln">build</span><span class="pun">-</span><span class="pln">optimizer</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查</font></font><a href="https://angular.io/guide/deployment#build-with---prod" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font></font></a> </p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
