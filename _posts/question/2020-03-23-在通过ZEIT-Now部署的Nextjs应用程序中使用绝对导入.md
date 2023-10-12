---
layout: question
title:  在通过ZEIT Now部署的Next.js应用程序中使用绝对导入
date:   2020-03-23T03:56:27.000Z
description: 在Next.js 9教程中，建议的导入共享组件的方法是通过相对路径，例如import Header from '../components/Heade...
img: 
author: 老丝Pro
category: question
answer: 1
tags: next.js React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Next.js 9教程中，建议的</font></font><a href="https://nextjs.org/learn/basics/using-shared-components/using-the-header-component" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导入共享组件的方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是通过相对路径，例如</font></font></p>

<pre class="lang-js prettyprint-override"><code>import Header from '../components/Header';
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想使用绝对导入，例如</font></font></p>

<pre class="lang-js prettyprint-override"><code>import Header from 'components/Header';
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在本地以及</font></font><a href="https://nextjs.org/learn/basics/deploying-a-nextjs-app" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Now CLI进行部署</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时如何进行这项工作</font><font style="vertical-align: inherit;">？</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用教程中建议的设置，我的项目结构为：</font></font></p>

<pre><code>my-project<font></font>
├── components<font></font>
├── pages<font></font>
└── package.json<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2772篇《在通过ZEIT Now部署的Next.js应用程序中使用绝对导入》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有</font></font><a href="https://whoisryosuke.com/blog/2018/nextjs-tip-relative-es6-modules/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多种方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以实现此目的，但是一种方法-不需要其他依赖项，也不需要太多配置-是</font></font><a href="https://github.com/zeit/next.js/issues/342#issuecomment-264744094" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将环境变量</font></font><code>NODE_PATH</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置为当前目录，即</font></font><code>NODE_PATH=.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.使其在本地工作</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为</font></font><code>NODE_PATH=.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地（例如</font></font><code>$ npm run dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>$ yarn dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">运行dev / build脚本时</font><font style="vertical-align: inherit;">，最简单的设置方法</font><font style="vertical-align: inherit;">是将其添加到的每个脚本中</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-json prettyprint-override"><code>"scripts": {<font></font>
  "dev": "NODE_PATH=. next",<font></font>
  "build": "NODE_PATH=. next build",<font></font>
  "start": "next start"<font></font>
},<font></font>
</code></pre>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.部署时使其工作</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您部署到</font></font><a href="https://zeit.co/now" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ZEIT Now时</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>NODE_PATH</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">必须以其他方式进行设置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font><font style="vertical-align: inherit;">通过添加</font><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">来添加</font></font><a href="https://zeit.co/docs/v2/advanced/configuration" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部署配置</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（该</font></font><code>now.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件应与放在同一目录中</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">如果您还没有</font></font><code>now.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，请创建它并添加以下内容：</font></font></p>

<pre class="lang-json prettyprint-override"><code>{<font></font>
  "version": 2,<font></font>
  "build": {<font></font>
    "env": {<font></font>
      "NODE_PATH": "."<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这告诉Now </font></font><code>NODE_PATH=.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在构建应用程序时</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">（请参阅</font></font><a href="https://zeit.co/docs/v2/advanced/configuration#build.env" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">build.env</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（它还告诉Now，我们使用的是</font></font><a href="https://zeit.co/docs/v2/advanced/platform/overview/#versioning" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Now平台版本</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 2，它是当前的最新版本（请参见</font></font><a href="https://zeit.co/docs/v2/advanced/configuration#version" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">version</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。当您使用部署时，忽略该版本会向您发出警告</font></font><code>$&nbsp;now</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。）</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
