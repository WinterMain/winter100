---
layout: question
title:  如何在使用Next.js完成的外部项目中使用Storybook组件（和Lerna）？
date:   2020-04-07T03:48:47.000Z
description: 我刚刚创建了我的Storybook组件库（ES6等）。它被构造为一个Lerna项目（所有组件都隔离在package /文件夹中）。但是，这是一个私人仓库，...
img: 
author: Gil伽罗小宇宙
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚创建了我的Storybook组件库（ES6等）。</font><font style="vertical-align: inherit;">它被构造为一个Lerna项目（所有组件都隔离在package /文件夹中）。</font><font style="vertical-align: inherit;">但是，这是一个私人仓库，没有真正的发布功能，因此，我认为Lerna将无法使用私人（免费）帐户。</font><font style="vertical-align: inherit;">我已经将故事书存储库原样推送到了我的Bitbucket。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我想使用主要应用程序中的组件的故事书库，它是基于Next.js构建的不同存储库（在Bitbucket上）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图按如下方式导入各个故事书组件</font></font></p>

<pre class="lang-js prettyprint-override"><code>import MyComponent from 'storybook-repo/packages/my-component/my-component';
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但显然不起作用，返回此错误：</font></font></p>

<pre class="lang-sh prettyprint-override"><code>Module parse failed: Unexpected token (8:9)<font></font>
You may need an appropriate loader to handle this file type.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font><code>MyComponent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font><font style="vertical-align: inherit;">因为</font><font style="vertical-align: inherit;">是jsx文件。</font><font style="vertical-align: inherit;">我希望Next.js转换导入的模块，但事实并非如此。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的胆量说，</font></font><code>git+ssh://git@bitbucket.org/myusername/storybook-repo.git</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从中</font><font style="vertical-align: inherit;">导入整个故事书</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是一个好主意。</font><font style="vertical-align: inherit;">有更好的解决方案吗？</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lerna仅适用于我可以发布我的软件包的公共/专业软件仓库吗？</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么Next.js不转译导入的jsx模块？</font><font style="vertical-align: inherit;">此时，此过程如何工作？</font><font style="vertical-align: inherit;">我应该从远程存储库中移植故事书组件，还是从主应用程序中完成工作？</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4118篇《如何在使用Next.js完成的外部项目中使用Storybook组件（和Lerna）？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的上一个项目中，我们使用Rollup.js来创建仅是我们在Storybook中开发的组件的dist版本。</font><font style="vertical-align: inherit;">我们的组件位于</font></font><code>src/components</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录中。</font><font style="vertical-align: inherit;">我们</font></font><code>index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用内部脚手架工具对组件进行</font><font style="vertical-align: inherit;">维护</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我们将</font></font><code>dist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹作为私有范围的NPM软件包发布，然后从那里拉入我们的组件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于本地开发，我们使用Webpack别名来检查当前环境，并拉出已发布的NPM软件包或直接从</font></font><code>storybook/dist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们要构建</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">文件夹中</font><font style="vertical-align: inherit;">拉出</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有建设这个伟大的指南</font></font><a href="https://medium.com/tech-grandata-com/how-i-set-up-a-react-component-library-with-rollup-be6ccb700333" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">希望这能为您指明正确的方向。</font><font style="vertical-align: inherit;">作为替代方案，我相信您可以摆弄</font></font><code>next.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重写Webpack的配置，并确保通过同一Webpack吸收外部导入，但是，您还必须</font></font><code>.babelrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Storybook一侧</font><font style="vertical-align: inherit;">添加一些规则</font><font style="vertical-align: inherit;">以确保它被忽略在那里。</font><font style="vertical-align: inherit;">我们发现发布一个软件包并捆绑所有内容会更容易。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
