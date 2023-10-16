---
layout: question
title:  angular-cli哪里是webpack.config.js文件-新的angular6不支持ng弹出
date:   2020-05-28T07:01:15.000Z
description: 更新：2018年12月（请参阅\`\`Aniket''答案）使用Angular CLI 6时，您需要使用构建器，因为不建议使用ng jet，并且很快将在8...
img: 
author: Stafan
category: question
answer: 6
tags: 角度的 Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：2018年12月（请参阅``Aniket''答案）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Angular CLI 6时，您需要使用构建器，因为不建议使用ng jet，并且很快将在8.0中将其删除。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：2018年6月：Angular 6不支持ng弹出**</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：2017年2月：使用ng弹出</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：2016年11月：angular-cli现在仅使用webpack。</font><font style="vertical-align: inherit;">您只需要使用npm install -g angular-cli正常安装即可。</font><font style="vertical-align: inherit;">“我们将beta.10和beta.14之间的构建系统从SystemJS更改为Webpack。”但实际上，我仅使用angular-cli来生成结构和文件夹，然后再手动使用webpack config</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经安装了角度cli： </font></font></p>

<pre><code>npm install -g angular-cli@webpack
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我使用angular1和web pack时，我曾经修改过“ webpack.config.js”文件以执行所有任务和插件，但是我在使用angular-cli创建的这个项目上看不到谁可以工作。</font><font style="vertical-align: inherit;">这是魔法？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我看到Webpack在工作时正在工作：</font></font></p>

<pre><code>ng serve <font></font>
<font></font>
"Version: webpack 2.1.0-beta.18"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但我不明白angular-cli配置的工作方式...</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4211篇《angular-cli哪里是webpack.config.js文件-新的angular6不支持ng弹出》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在想，发布产品时使用webpack会很容易。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅供参考：</font><a href="https://github.com/Piusha/ngx-lazyloading" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/Piusha/ngx-lazyloading" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/Piusha/ngx-lazyloading</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">仲羽</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><code>ng eject</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您</font><font style="vertical-align: inherit;">的建议</font><font style="vertical-align: inherit;">可以使用</font></font><a href="https://github.com/manfredsteyer/ngx-build-plus" rel="nofollow noreferrer"><code>ngx-build-plus</code></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有几个项目可以与新的配置格式结合使用，这些项目可以带来弹出的好处而无需维护。</font><font style="vertical-align: inherit;">ngx-build-plus就是一个这样的项目，可以在这里找到：</font><a href="https://github.com/manfredsteyer/ngx-build-plus" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/manfredsteyer/ngx-build-plus" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/manfredsteyer/ngx-build-plus</font></font></a></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">若合</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Angular CLI 6时，您需要使用构建器，因为不建议使用ngject，并且很快将在8.0版中将其删除。</font><font style="vertical-align: inherit;">这就是我尝试进行</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng弹出时的意思</font></font></strong></p>

<p><a href="https://i.stack.imgur.com/lQK7v.png" rel="noreferrer"><img src="https://i.stack.imgur.com/lQK7v.png" alt="在此处输入图片说明"></a></p>

<p>You can use angular-builders package (<a href="https://github.com/meltedspark/angular-builders" rel="noreferrer">https://github.com/meltedspark/angular-builders</a>) to provide your custom webpack config. </p>

<p>I have tried to summarize all in a single blog post on my blog - <a href="http://opensourceforgeeks.blogspot.com/2018/12/how-to-customize-build-configuration.html" rel="noreferrer">How to customize build configuration with custom webpack config in Angular CLI 6</a> </p>

<p>but essentially you add following dependencies -</p>

<pre><code>  "devDependencies": {<font></font>
    "@angular-builders/custom-webpack": "^7.0.0",<font></font>
    "@angular-builders/dev-server": "^7.0.0",<font></font>
    "@angular-devkit/build-angular": "~0.11.0",<font></font>
</code></pre>

<p>In <strong>angular.json</strong> make following changes -</p>

<pre><code>  "architect": {<font></font>
    "build": {<font></font>
      "builder": "@angular-builders/custom-webpack:browser",<font></font>
      "options": {<font></font>
        "customWebpackConfig": {"path": "./custom-webpack.config.js"},<font></font>
</code></pre>

<p>Notice change in builder and new option customWebpackConfig. Also change</p>

<pre><code>    "serve": {<font></font>
      "builder": "@angular-builders/dev-server:generic",<font></font>
</code></pre>

<p>Notice the change in builder again for serve target. Post these changes you can create a file called <strong>custom-webpack.config.js</strong> in your same root directory and add your webpack config there.</p>

<p>However, unlike <strong>ng eject</strong> configuration provided here will be merged with default config so just add stuff you want to edit/add.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Vicky</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在可以弹出CLI的webpack配置。</font><font style="vertical-align: inherit;">检查</font></font><a href="https://stackoverflow.com/a/42406194/215552"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Anton Nikiforov的答案</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></strong></p>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">过时的：</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在中修改配置模板</font></font><code>angular-cli/addon/ng2/models</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">到目前为止，尚无官方方法来修改webpack配置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">github上有一个关于此的封闭的“ wont-fix”问题：</font><a href="https://github.com/angular/angular-cli/issues/1656" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/angular/angular-cli/issues/1656" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/angular/angular-cli/issues/1656</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">启人</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据此</font></font><a href="https://github.com/angular/angular-cli/issues/1656" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这是一项设计决策，不允许用户修改Webpack配置以减少学习难度。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">考虑到Webpack上有用配置的数量，这是一个很大的缺点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不建议将其</font></font><code>angular-cli</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于生产应用程序，因为它是自以为是的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神离樱</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一种不错的方法可以</font><font style="vertical-align: inherit;">从</font><em><font style="vertical-align: inherit;">angular-cli</font></em><font style="vertical-align: inherit;">弹出</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">赶紧跑：</font></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font></p>

<pre><code>$ ng eject
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将在项目的根文件夹中生成webpack.config.js，您可以随意按自己的方式进行配置。</font><font style="vertical-align: inherit;">这样做的缺点是package.json中的构建/启动脚本将被新命令替换，而不是</font></font></p>

<pre><code>$ ng serve
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你将不得不做类似的事情 </font></font></p>

<pre><code>$ npm run build &amp; npm run start
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此方法在所有最新版本的angular-cli中都应适用（我亲自尝试了一些，最旧的是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.0.0-beta.21</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，最新的是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.0.0-beta.32.3</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
