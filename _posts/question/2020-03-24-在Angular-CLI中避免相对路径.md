---
layout: question
title:  在Angular CLI中避免相对路径
date:   2020-03-24T02:01:32.000Z
description: 我正在使用最新的Angular CLI，并且创建了一个自定义组件文件夹，该文件夹包含所有组件。例如，TextInputComponent具有TextI...
img: 
author: 西门
category: question
answer: 3
tags: 角度 Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用最新的Angular CLI，并且创建了一个自定义组件文件夹，该文件夹包含所有组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，</font></font><code>TextInputComponent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有</font></font><code>TextInputConfiguration</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其放在里面类</font></font><code>src/components/configurations.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，以及在</font></font><code>src/app/home/addnewuser/add.user.component.ts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪里使用它有：</font></font></p>

<pre><code>import {TextInputConfiguration} from "../../../components/configurations";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很好，但是随着我的应用程序变得更大和更深</font></font><code>../</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我该如何处理呢？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以前，对于SystemJS，我将通过</font></font><code>system.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下方式</font><font style="vertical-align: inherit;">配置路径</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>System.config({<font></font>
..<font></font>
 map : {'ng_custom_widgets':'components' },<font></font>
 packages : {'ng_custom_widgets':{main:'configurations.ts', defaultExtension: 'ts'},<font></font>
)};<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用Angular CLI为webpack生成相同的内容？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3206篇《在Angular CLI中避免相对路径》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每</font></font><a href="https://github.com/angular/angular-cli/issues/1465#issuecomment-236054952" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此评论</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，你可以通过添加应用程序源</font></font><code>paths</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font></font><code>tsconfig.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>{<font></font>
  "compilerOptions": {<font></font>
    ...,  <font></font>
    "baseUrl": ".",<font></font>
    "paths": {<font></font>
      ...,<font></font>
      "@app/*": ["app/*"],<font></font>
      "@components/*": ["components/*"]<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后你可以从绝对导入</font></font><code>app/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>components/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替相对于当前文件：</font></font></p>

<pre><code>import {TextInputConfiguration} from "@components/configurations";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font><strong><code>baseUrl</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>paths</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是，则</font><font style="vertical-align: inherit;">必须指定</font><font style="vertical-align: inherit;">。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以看看</font></font></p>

<ul>
<li><a href="https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping</font></font></a></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Angular 8中，不需要*。</font><font style="vertical-align: inherit;">*将导致将其</font></font><code>Cannot find module</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
添加到tsconfig.json文件的</font><font style="vertical-align: inherit;">错误</font></font></p>

<pre><code>"baseUrl": "./",<font></font>
"paths": {<font></font>
      "@test": [ "src/app/test/" ],<font></font>
      "@somthing": [ "src/app/something/" ],<font></font>
      "@name": [ "src/app/name/" ]<font></font>
    },<font></font>
<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总的来说，答案是正确的，但是在尝试通过互联网进行搜索并试图理解到底是什么问题并尝试了不同的故障排除选项之后，我才知道</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">baseUrl</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Path</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何一起工作</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">baseUrl：“。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像下面一样，它可以在VScode中工作，但在编译时不工作</font></font></p>

<pre><code>{<font></font>
  "compileOnSave": false,<font></font>
  "compilerOptions": {<font></font>
    "outDir": "./dist/out-tsc",<font></font>
    "baseUrl": ".",<font></font>
    "paths": {<font></font>
      "@myproject/*": ["src/app/*"]<font></font>
    }    <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据我的理解和我的工作应用程序并检查了</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">角度的aio</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码，我建议将其用作</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">baseUrl：“ src”，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下所示</font></font></p>

<pre><code>{<font></font>
  "compileOnSave": false,<font></font>
  "compilerOptions": {<font></font>
    "outDir": "./dist/out-tsc",<font></font>
    "baseUrl": "src",<font></font>
    "paths": {<font></font>
      "@myproject/*": ["app/*"],<font></font>
      "testing/*": ["testing/*"]<font></font>
    }    <font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过将基本URL作为源（src目录），编译器可以正确解析模块。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望这有助于人们解决此类问题。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
