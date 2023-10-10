---
layout: question
title:  Angular没有模块工厂可用于依赖项类型：ContextElementDependency
date:   2020-03-24T09:22:53.000Z
description: ng build在我的Angular 4项目上运行会出现以下错误：     14% building modules 40/46 modules 6 ...
img: 
author: Tony梅樱
category: question
answer: 2
tags: 角度 Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"></font><code>ng build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的Angular 4项目上</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">会出现以下错误：</font></font></p>

<pre><code>     14% building modules 40/46 modules 6 active ...es\@angular\http\@angular\http.es5.js<font></font>
An error occured during the build:<font></font>
Error: No module factory available for dependency type: ContextElementDependency<font></font>
    at Compilation.addModuleDependencies (D:\dev\workspace\rep\node_modules\@angular\cli\node_modules\webpack\lib\Compilation.js:213:21)<font></font>
    at Compilation.processModuleDependencies (D:\dev\workspace\rep\node_modules\@angular\cli\node_modules\webpack\lib\Compilation.js:202:8)<font></font>
    at _this.buildModule.err (D:\dev\workspace\rep\node_modules\@angular\cli\node_modules\webpack\lib\Compilation.js:350:14)<font></font>
    at building.forEach.cb (D:\dev\workspace\rep\node_modules\@angular\cli\node_modules\webpack\lib\Compilation.js:147:27)<font></font>
    at Array.forEach (native)<font></font>
    at callback <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经阅读了许多关于github和stackoverflow的问题，但是没有一个对我有帮助。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如答案所示，我已经删除了webpack，但这没有帮助。</font><font style="vertical-align: inherit;">删除了node_modules，从package.json中删除了webpack，运行</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，仍然没有帮助。</font><font style="vertical-align: inherit;">清理了npm的缓存，从package.json中删除了webpack，运行</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，仍然没有结果。</font><font style="vertical-align: inherit;">其他许多类似的建议也无济于事。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我从package.json中删除webpack并运行时，</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我得到以下信息：</font></font></p>

<pre><code> Cannot find module 'webpack/lib/node/NodeTemplatePlugin' Error: Cannot<font></font>
 find module 'webpack/lib/node/NodeTemplatePlugin'<font></font>
     at Function.Module._resolveFilename (module.js:469:15)<font></font>
     at Function.Module._load (module.js:417:25)<font></font>
     at Module.require (module.js:497:17)<font></font>
     at require (internal/module.js:20:19)<font></font>
     at Object.&lt;anonymous&gt; (D:\dev\workspace\rep\node_modules\html-webpack-plugin\lib\compiler.js:11:26)<font></font>
     at Module._compile (module.js:570:32)<font></font>
     at Object.Module._extensions..js (module.js:579:10)<font></font>
     at Module.load (module.js:487:32)<font></font>
     at tryModuleLoad (module.js:446:12)<font></font>
     at Function.Module._load (module.js:438:3)<font></font>
     at Module.require (module.js:497:17)<font></font>
     at require (internal/module.js:20:19)<font></font>
     at Object.&lt;anonymous&gt; (D:\dev\workspace\rep\node_modules\html-webpack-plugin\index.js:7:21)<font></font>
     at Module._compile (module.js:570:32)<font></font>
     at Object.Module._extensions..js (module.js:579:10)<font></font>
     at Module.load (module.js:487:32)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当将webpack返回到package.json时，运行</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后运行，</font></font><code>npm list webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我得到以下结果：</font></font></p>

<pre><code>+-- @angular/cli@1.4.7<font></font>
| `-- webpack@3.6.0<font></font>
`-- webpack@3.8.1<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是项目的package.json：</font></font></p>

<pre><code>{<font></font>
  "name": "somename",<font></font>
  "version": "1.0.0",<font></font>
  "description": "",<font></font>
  "author": "",<font></font>
  "url": "",<font></font>
  "copyright": "somec",<font></font>
  "license": "MIT",<font></font>
  "scripts": {<font></font>
    "ng": "ng",<font></font>
    "start": "ng serve",<font></font>
    "build": "ng build",<font></font>
    "test": "ng test",<font></font>
    "lint": "ng lint",<font></font>
    "e2e": "ng e2e"<font></font>
  },<font></font>
  "private": true,<font></font>
  "dependencies": {<font></font>
    "@angular/common": "^4.4.5",<font></font>
    "@angular/compiler": "^4.4.5",<font></font>
    "@angular/core": "^4.4.5",<font></font>
    "@angular/forms": "^4.4.5",<font></font>
    "@angular/http": "^4.4.5",<font></font>
    "@angular/platform-browser": "^4.4.5",<font></font>
    "@angular/platform-browser-dynamic": "^4.4.5",<font></font>
    "@angular/router": "^4.4.5",<font></font>
    "@angular/upgrade": "^4.4.5",<font></font>
    "amazon-cognito-identity-js": "^1.21.0",<font></font>
    "chart.js": "2.7.0",<font></font>
    "core-js": "2.5.1",<font></font>
    "font-awesome": "^4.7.0",<font></font>
    "jquery": "^3.2.1",<font></font>
    "moment": "2.18.1",<font></font>
    "ng2-charts": "1.6.0",<font></font>
    "ngx-bootstrap": "1.9.3",<font></font>
    "raw-loader": "^0.5.1",<font></font>
    "rxjs": "5.4.3",<font></font>
    "simple-line-icons": "^2.4.1",<font></font>
    "ts-helpers": "1.1.2",<font></font>
    "zone.js": "0.8.17"<font></font>
  },<font></font>
  "devDependencies": {<font></font>
    "@angular/cli": "^1.4.7",<font></font>
    "@angular/compiler-cli": "^4.4.5",<font></font>
    "@types/jasmine": "2.6.0",<font></font>
    "@types/jquery": "^3.2.13",<font></font>
    "@types/node": "8.0.28",<font></font>
    "codelyzer": "3.2.0",<font></font>
    "jasmine-core": "2.8.0",<font></font>
    "jasmine-spec-reporter": "4.2.1",<font></font>
    "karma": "1.7.1",<font></font>
    "karma-chrome-launcher": "2.2.0",<font></font>
    "karma-cli": "1.0.1",<font></font>
    "karma-coverage-istanbul-reporter": "1.3.0",<font></font>
    "karma-jasmine": "1.1.0",<font></font>
    "karma-jasmine-html-reporter": "0.2.2",<font></font>
    "node-sass": "^4.5.3",<font></font>
    "postcss-loader": "^2.0.6",<font></font>
    "protractor": "5.1.2",<font></font>
    "sass-loader": "^6.0.6",<font></font>
    "ts-node": "3.3.0",<font></font>
    "tslint": "5.7.0",<font></font>
    "typescript": "2.5.2",<font></font>
    "webpack": "^3.6.0"<font></font>
  },<font></font>
  "engines": {<font></font>
    "node": "&gt;= 6.9.0",<font></font>
    "npm": "&gt;= 3.0.0"<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我在其他机器上克隆此仓库时，运行</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后</font></font><code>ng build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就可以了，可以正常工作，但是在我的计算机上却出现此错误。</font><font style="vertical-align: inherit;">我尝试从计算机上完全删除该存储库，从头开始克隆并运行</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>ng build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，仍然是相同的错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人可以告诉我这种行为的原因是什么以及如何解决它？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3551篇《Angular没有模块工厂可用于依赖项类型：ContextElementDependency》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人遇到此问题，我已采取以下步骤解决此问题：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Package.json：从DevDependencies中删除Webpack</font></font></li>
<li><code>rm -R node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> （删除node_modules文件夹）</font></font></li>
<li><code>npm i -g webpack</code></li>
<li><code>npm i -g webpack-dev-server</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font><code>package-lock.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（如果有）</font></font></li>
<li><code>npm i</code></li>
<li><code>npm start</code></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我仍然不完全了解发生这种情况的原因。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A凯</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做 </font></font><code>npm ls webpack</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您看到两个版本的</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（在@ angular / cli和根node_modules下），那就是问题所在。</font><font style="vertical-align: inherit;">删除/重命名下的的WebPack </font></font><code>@angular/cli</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和中</font></font><code>.bin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的文件夹中</font></font><code>@angular/cli</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题为我解决</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
