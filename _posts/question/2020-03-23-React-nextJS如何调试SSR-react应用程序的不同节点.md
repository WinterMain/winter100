---
layout: question
title:  React / nextJS：如何调试SSR react应用程序的不同节点？
date:   2020-03-23T02:50:06.000Z
description: 我正在运行nextJS应用程序，该应用程序正在运行SSR。但是当我得到错误时：  警告：没想到服务器HTML在<div>中包含<div>。...
img: 
author: GO
category: question
answer: 1
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在运行nextJS应用程序，该应用程序正在运行SSR。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是当我得到错误时：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">警告：没想到服务器HTML在&lt;div&gt;中包含&lt;div&gt;。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，服务器端和客户端节点之间似乎存在差异。</font><font style="vertical-align: inherit;">我如何找到这些差异？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个示例应用程序的仓库：</font></font></p>

<p><a href="https://github.com/jaqua/nextjs-app" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/jaqua/nextjs-app</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只要运行</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>npm run dev</code></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2689篇《React / nextJS：如何调试SSR react应用程序的不同节点？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将首先查看到达浏览器的html（chrome devtools中的“网络”选项卡），然后反应可能仍然是渲染客户端，因此您可以在客户端渲染和比较后看到当前的DOM（转到“元素”选项卡chrome devtools-&gt;右键单击html元素，然后选择“复制&gt;复制outterHTML”）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果失败，您可以尝试在浏览器内部添加断点，以使自身反应：function canHydrateInstance @ ReactDOMHostConfig.js</font></font></p>

<p><a href="https://github.com/facebook/react/blob/c954efa70f44a44be9c33c60c57f87bea6f40a10/packages/react-dom/src/client/ReactDOMHostConfig.js" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/facebook/react/blob/c954efa70f44a44be9c33c60c57f87bea6f40a10/packages/react-dom/src/client/ReactDOMHostConfig.js</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能与此类问题相关的链接：</font></font></p>

<p><a href="https://stackoverflow.com/questions/45350360/react-16-warning-warning-js36-warning-did-not-expect-server-html-to-contain-a/45371427#45371427"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React 16警告“ warning.js：36警告：没想到服务器HTML在&lt;div&gt;中包含&lt;div&gt;。”</font></font></a></p>

<p><a href="https://github.com/zeit/next.js/issues/5367" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/zeit/next.js/issues/5367</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
