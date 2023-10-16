---
layout: question
title:  Angular CLI的延迟加载应用程序主题样式
date:   2020-03-24T10:13:34.000Z
description: 我正在尝试出于主题目的而切换A的href设置<link />，而SCSS主题位于我的monorepo的packages文件夹中，该文件夹以符号链接node...
img: 
author: 小胖Gil
category: question
answer: 2
tags: 角 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试</font><font style="vertical-align: inherit;">出于主题目的而</font><font style="vertical-align: inherit;">切换A的</font></font><code>href</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置</font></font><code>&lt;link /&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而SCSS主题位于我的monorepo的packages文件夹中，该文件夹以符号链接</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我需要能够编译和引用这些。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了以下已解决的问题：</font></font><a href="https://github.com/angular/angular-cli/issues/3401" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">angular / angular-cli＃3401，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且一直在尝试实现类似的问题：</font></font></p>

<pre><code>"styles": [<font></font>
    "styles.scss",<font></font>
    {<font></font>
        "input": "../node_modules/@org/themes/dark.scss",<font></font>
        "output": "dark",<font></font>
        "lazy": true<font></font>
    }<font></font>
],<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的理解（也许是错误的）是，这会将</font></font><code>dark.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">编译</font><font style="vertical-align: inherit;">进去</font></font><code>dist/dark.bundle.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且我能够通过</font></font><a href="http://localhost:4200/dist/dark.bundle.css" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：// localhost：4200 / dist / dark.bundle.css</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">加载它，</font><font style="vertical-align: inherit;">但无法正常工作。</font><font style="vertical-align: inherit;">我是误解某件事还是做错了？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何从</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以延迟加载到应用程序的位置</font><font style="vertical-align: inherit;">编译SCSS文件</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">我可以尝试使用另一种/更好的方法吗？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">补充说明：</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Angular版本 </font></font><code>4.2.4</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Angular CLI版本 </font></font><code>1.3.0</code></li>
<li><font style="vertical-align: inherit;"><a href="https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/global-styles.md" rel="noreferrer"><font style="vertical-align: inherit;">此方法</font></a><font style="vertical-align: inherit;">的</font></font><a href="https://github.com/angular/angular-cli/blob/master/docs/documentation/stories/global-styles.md" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a>  </li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在monorepo工作，所以</font></font><code>node_modules/@org/themes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是符号链接</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试使用</font></font><code>ng serve --preserve-symlinks</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项，以防上述问题。</font><font style="vertical-align: inherit;">没关系</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我研究了</font></font><a href="https://github.com/angular/material.angular.io/blob/master/package.json#L13" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Angular Material docs网站解决此问题的方式</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，似乎他们有一个自定义生成脚本，该脚本在将SCSS文件编译为目录中的CSS文件</font></font><code>assets</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前，会为应用程序提供服务。</font><font style="vertical-align: inherit;">我认为上述已解决的问题消除了对此步骤的需要，但也许没有。</font><font style="vertical-align: inherit;">这是唯一的方法吗？</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决了</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢@Kuncevic。</font><font style="vertical-align: inherit;">我错过了</font></font><code>--extract-css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旗帜。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作配置：</font></font></p>

<pre><code>"styles": [<font></font>
    "styles.scss",<font></font>
    {<font></font>
        "input": "../node_modules/@org/themes/src/dark.scss",<font></font>
        "output": "themes/dark",<font></font>
        "lazy": true<font></font>
    }<font></font>
],<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下服务脚本，我可以通过</font></font><a href="http://localhost:4200/themes/dark.bundle.css" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：// localhost：4200 / themes / dark.bundle.css</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">访问它</font><font style="vertical-align: inherit;">：</font></font></p>

<p><code>ng serve --extract-css --preserve-symlinks</code></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3628篇《Angular CLI的延迟加载应用程序主题样式》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim十三</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过设置</font></font><code>"lazy": true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意味着它不会出现，</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是没有机制可以为您延迟加载该捆绑包，请检查以下</font></font><a href="https://github.com/angular/angular-cli/issues/6018#issuecomment-295953509" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注释</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">lazy选项实际上并不延迟加载任何内容。</font><font style="vertical-align: inherit;">它只是阻止它在应用程序启动时执行。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我同意</font></font><code>"lazy": true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">起初有点令人困惑。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果运行，</font></font><code>ng build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您实际上可以查看生成的内容，并分析cli生成的所有文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您这样做时：</font></font></p>

<pre><code>{<font></font>
    "input": "../node_modules/@org/themes/dark.scss",<font></font>
    "output": "dark",<font></font>
    "lazy": true<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该可以直接在</font></font><a href="http://localhost:4200/dark.bundle.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：// localhost：4200 / dark.bundle.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上访问文件，</font><font style="vertical-align: inherit;">但是在</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您设置时</font><font style="vertical-align: inherit;">它不会出现</font></font><code>"lazy": true</code></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要获取</font></font><code>dark.bundle.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">捆绑包而不是
   </font></font><code>dark.bundle.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在开发人员模式下，可以使用</font></font><code>--extract-css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">flag。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"></font><code>js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在dev模式下将</font><font style="vertical-align: inherit;">cli生成样式</font><font style="vertical-align: inherit;">捆绑在一起</font><font style="vertical-align: inherit;">的原因</font><font style="vertical-align: inherit;">是因为这种方式要快得多。</font><font style="vertical-align: inherit;">当您进行prod build时，Bud </font></font><code>ng buld --prod</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会</font></font><code>.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认</font><font style="vertical-align: inherit;">输出到</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于我无法评论已接受的答案，因此，我将作为一个单独的注释对其进行重要说明。</font><font style="vertical-align: inherit;">请移至此处，并在需要时从此处删除。</font><font style="vertical-align: inherit;">因此，可接受的答案基于单独的CSS文件。</font><font style="vertical-align: inherit;">由于角6，你</font></font><a href="https://github.com/angular/angular-cli/issues/10532#issuecomment-385712721" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不能</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用既不</font></font><code>--extract-css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>-ec</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在标志</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>ng serve</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，也不是</font></font><code>extractCss: true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>angular.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>serve</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">配置部分。</font><font style="vertical-align: inherit;">不过，您可以使用</font></font><a href="https://github.com/angular/angular-cli/issues/10666#issuecomment-386843570" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法来使其工作。</font><font style="vertical-align: inherit;">然后，您可以使用</font><font style="vertical-align: inherit;">带有promise的</font></font><a href="https://theinfogrid.com/tech/developers/angular/lazy-loading-scripts-and-styles-angular/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法</font><font style="vertical-align: inherit;">来加载懒惰的样式</font></font><code>APP_INITIALIZER</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
