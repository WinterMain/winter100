---
layout: question
title:  NPM，Bower，Browserify，Gulp，Grunt，Webpack
date:   2020-05-28T06:59:11.000Z
description: 我试图总结我对最流行的JavaScript包管理器，捆绑器和任务运行器的了解。如果我错了，请纠正我：npm＆bower是包裹经理。他们只是下载依赖项...
img: 
author: 卡卡西
category: question
answer: 4
tags: gruntjs Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图总结我对最流行的JavaScript包管理器，捆绑器和任务运行器的了解。</font><font style="vertical-align: inherit;">如果我错了，请纠正我：</font></font></p>

<ul>
<li><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＆</font></font><code>bower</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是包裹经理。</font><font style="vertical-align: inherit;">他们只是下载依赖项，而不知道如何自行构建项目。</font><font style="vertical-align: inherit;">他们知道什么是调用</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>gulp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>grunt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取所有的依赖后。</font></font></li>
<li><code>bower</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似于</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是构建了一个扁平化的依赖树（与</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">递归地</font><font style="vertical-align: inherit;">构建不同</font><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">含义将</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取每个依赖项的依赖项（可能会获取相同的几次），同时</font></font><code>bower</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望您手动包括子依赖项。</font><font style="vertical-align: inherit;">有时，</font></font><code>bower</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和和</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分别分别用于前端和后端（因为前端中每个兆字节可能都很重要）。</font></font></li>
<li><code>grunt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>gulp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是任务执行者，可以自动化所有可以自动化的内容（例如，编译CSS / Sass，优化图像，制作捆绑包并缩小/翻译）。</font></font></li>
<li><code>grunt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vs. </font></font><code>gulp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（类似于</font></font><code>maven</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vs. </font></font><code>gradle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或配置vs.代码）。</font><font style="vertical-align: inherit;">Grunt基于配置单独的独立任务，每个任务打开/处理/关闭文件。</font><font style="vertical-align: inherit;">Gulp需要较少的代码量，并且基于Node流，这使其可以构建管道链（无需重新打开同一文件）并使其更快。</font></font></li>
<li><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）-对我来说，这是一个任务执行程序，它具有对更改进行热重新加载的功能，使您无需理会所有JS / CSS监视程序。</font></font></li>
<li><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">// </font></font><code>bower</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插件可以代替任务运行器。</font><font style="vertical-align: inherit;">它们的能力经常相交，因此如果您需要使用</font></font><code>gulp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>grunt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">over </font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+插件，</font><font style="vertical-align: inherit;">则会有不同的含义</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是任务运行者绝对适合复杂任务（例如“在每个构建中创建捆绑包，从ES6移植到ES5，在所有浏览器模拟器上运行它，制作屏幕截图并通过ftp部署到保管箱”）。</font></font></li>
<li><code>browserify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许为浏览器打包节点模块。</font></font><code>browserify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vs </font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">'s </font></font><code>require</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上是</font></font><a href="https://addyosmani.com/writing-modular-js/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AMD vs CommonJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ul>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题：</font></font></em></strong></p>

<ol>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么是</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＆</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">官方文档说这是一个模块捆绑器，但对我来说只是一个任务运行器。</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么不同？</font></font></em></li>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将在哪里使用</font></font><code>browserify</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">我们不能对node / ES6导入做同样的事情吗？</font></font></em> </li>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您何时会使用</font></font><code>gulp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ </font></font><code>grunt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">over </font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+插件？</font></font></em></li>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您需要组合使用时，请提供示例</font></font></em></li>
</ol></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4206篇《NPM，Bower，Browserify，Gulp，Grunt，Webpack》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><code>Webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是捆绑器。</font><font style="vertical-align: inherit;">就像</font></font><code>Browserfy</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在代码库中查找模块请求（</font></font><code>require</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>import</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）并递归地解决它们。</font><font style="vertical-align: inherit;">而且，您不仅可以配置</font></font><code>Webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为解析类似于JavaScript的模块，而且</font><font style="vertical-align: inherit;">还可以</font><font style="vertical-align: inherit;">解析CSS，图像，HTML以及几乎所有内容。</font><font style="vertical-align: inherit;">让我特别兴奋的是</font></font><code>Webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以在同一应用程序中组合编译模块和动态加载模块。</font><font style="vertical-align: inherit;">因此，特别是通过HTTP / 1.x可以真正提高性能。</font><font style="vertical-align: inherit;">我在此处的示例中描述了您如何精确地做到这一点</font></font><a href="http://dsheiko.com/weblog/state-of-javascript-modules-2017/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://dsheiko.com/weblog/state-of-javascript-modules-2017/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
作为捆绑器的替代者，您可以想到</font></font><code>Rollup.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="https://rollupjs.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://rollupjs.org/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">） ，可在编译期间优化代码，但会剥离所有找到的未使用的块。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font></font><code>AMD</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而不是</font></font><code>RequireJS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以与native一起使用</font></font><code>ES2016 module system</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而是使用</font></font><code>System.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="https://github.com/systemjs/systemjs" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/systemjs/systemjs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">加载</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，我要指出的是，</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它通常用作</font></font><code>grunt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">的自动化工具</font></font><code>gulp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">查看</font></font><a href="https://docs.npmjs.com/misc/scripts" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://docs.npmjs.com/misc/scripts</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我个人现在使用npm脚本只是避免使用其他自动化工具，尽管过去我非常喜欢</font></font><code>grunt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">使用其他工具，您必须依靠无数的插件来编写软件包，而这些插件通常编写得不好并且没有得到积极维护。</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">知道它的软件包，因此您可以按以下名称调用本地安装的任何软件包：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pun">{</span><span class="pln">
  </span><span class="str">"scripts"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="str">"start"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"npm http-server"</span><span class="pln">
  </span><span class="pun">},</span><span class="pln">
  </span><span class="str">"devDependencies"</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    </span><span class="str">"http-server"</span><span class="pun">:</span><span class="pln"> </span><span class="str">"^0.10.0"</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际上，如果软件包支持CLI，则通常不需要任何插件。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Yarn是最近的软件包管理器，可能值得一提。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
因此，这里是：</font><a href="https://yarnpkg.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://yarnpkg.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//yarnpkg.com/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">据我所知，它可以获取npm和bower依赖关系，并具有其他令人赞赏的功能。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在</font><a href="https://npmcompare.com" rel="noreferrer"><font style="vertical-align: inherit;">npmcompare</font></a><font style="vertical-align: inherit;">上找到一些技术比较</font></font><a href="https://npmcompare.com" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><a href="https://npmcompare.com/compare/browserify,grunt,gulp,webpack" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比较Browserify，Grunt，Gulp和Webpack</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您所见，webpack维护得很好，平均每4天就会发布一个新版本。</font><font style="vertical-align: inherit;">但是Gulp似乎拥有最大的社区（Github上有超过2万颗星）Grunt似乎被忽略了（与其他人相比）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果需要选择一个，我会选择Gulp</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋和田</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于npm的小提示：npm3尝试以扁平方式安装依赖项</font></font></p>

<p><a href="https://docs.npmjs.com/how-npm-works/npm3#npm-v3-dependency-resolution"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://docs.npmjs.com/how-npm-works/npm3#npm-v3-dependency-resolution</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
