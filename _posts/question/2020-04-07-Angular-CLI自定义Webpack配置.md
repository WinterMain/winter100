---
layout: question
title:  Angular CLI自定义Webpack配置
date:   2020-04-07T03:45:25.000Z
description: 在以前的Angular版本中，有一个弹出选项，以便您可以根据需要修改Webpack配置。此功能最常见的用例之一是添加自定义Webpack加载程序。  ...
img: 
author: Tony飞云
category: question
answer: 2
tags: 角度式 Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在以前的Angular版本中，有一个</font></font><a href="https://github.com/angular/angular-cli/wiki/1-x-eject" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">弹出</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项，</font><font style="vertical-align: inherit;">以便您可以根据需要修改Webpack配置。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
此功能最常见的用例之一是添加自定义Webpack加载程序。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Angular 6中，此选项已被删除，因此，目前几乎没有办法获取webpack配置（除了在angular源代码中查找它）。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么方法可以向使用@ angular / cli 6+的Angular应用程序添加自定义webpack配置？</font><font style="vertical-align: inherit;">或者，是否有办法“弹出”新的Angular CLI在后台使用的webpack配置？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4107篇《Angular CLI自定义Webpack配置》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于Angular 8 </font></font><code>@angular-builders/dev-server:generic</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已被弃用，</font></font><code>@angular-builders/custom-webpack:dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取而代之的是源：</font></font><a href="https://github.com/just-jeb/angular-builders/blob/master/MIGRATION.MD" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://github.com/just-jeb/angular-builders/blob/master/MIGRATION.MD" rel="nofollow noreferrer"><font style="vertical-align: inherit;">//github.com/just-jeb/angular-builders/blob/master/MIGRATION.MD</font></a><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最重要的是，</font></font><code>npm i @angular-devkit/architect@latest @angular-devkit/build-angular@latest @angular-devkit/core@latest @angular-devkit/schematics@latest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在迁移后发现以下错误，则</font><font style="vertical-align: inherit;">可能需要运行</font></font><code>architect_1.createBuilder is not a function</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免责声明：我是以下图书馆的所有者</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://github.com/just-jeb/angular-builders" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">angular-builders</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">库，该库允许您</font><font style="vertical-align: inherit;">使用自定义的webpack配置</font><font style="vertical-align: inherit;">扩展现有</font><font style="vertical-align: inherit;">对象</font></font><code>browser</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目标对象。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用法很简单：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装库： </font></font><code>npm i -D @angular-builders/custom-webpack</code></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修改您的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">angular.json</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>"architect": {<font></font>
   ...<font></font>
   "build": {<font></font>
       "builder": "@angular-builders/custom-webpack:browser"<font></font>
       "options": {<font></font>
              "customWebpackConfig": {<font></font>
                 "path": "./extra-webpack.config.js",<font></font>
                 "replaceDuplicatePlugins": true<font></font>
              },<font></font>
              "outputPath": "dist/my-cool-library",<font></font>
              "index": "src/index.html",<font></font>
              "main": "src/main.ts",<font></font>
              "polyfills": "src/polyfills.ts",<font></font>
              "tsConfig": "src/tsconfig.app.json"<font></font>
              ...<font></font>
       }<font></font>
</code></pre></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">extra-webpack.config.js</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到应用程序的根目录</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将额外的配置放入</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">extra-webpack.config.js中</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（只是一个简单的webpack配置）</font></font></li>
</ol>

<p><a href="https://github.com/just-jeb/electron-angular-native" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以找到添加</font></font><code>node-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到浏览器配置</font><font style="vertical-align: inherit;">的示例</font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进一步阅读：</font></font></strong><br>
<a href="https://medium.com/@_Just_JeB_/customizing-angular-cli-6-build-an-alternative-to-ng-eject-a48304cd3b21" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自定义Angular CLI构建-ng弹出的替代方法</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
