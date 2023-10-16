---
layout: question
title:  使用Firebase函数部署基于React的SSR应用时出错
date:   2020-03-23T01:44:59.000Z
description: 我在应用程序中进行了一些修改之后，尝试将我的SSR应用程序部署在最初从https //github.com/subhendukundu/template-...
img: 
author: 十三西门
category: question
answer: 2
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在应用程序中</font><font style="vertical-align: inherit;">进行了一些修改之后，</font><font style="vertical-align: inherit;">尝试将我的SSR应用程序部署在最初从</font></font><a href="https://github.com/subhendukundu/template-react-ssr/tree/feature/react-router" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/subhendukundu/template-react-ssr/tree/feature/react-router</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">派生的Firebase </font><font style="vertical-align: inherit;">中。</font><font style="vertical-align: inherit;">当我这样做时工作正常，但当我</font></font><code>sudo firebase serve --only functions,hosting</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">抛出错误时</font></font><code>firebase deploy</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">可复制的仓库是</font></font><a href="https://github.com/subhendukundu/template-react-ssr/tree/feature/react-router" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/subhendukundu/template-react-ssr/tree/feature/react-router</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它具有package.json </font></font><a href="https://github.com/subhendukundu/template-react-ssr/tree/feature/react-router/public" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/subhendukundu/template-react-ssr/ tree / feature / react-router / public</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
我也使用public目录作为我的函数目录，</font></font><a href="https://github.com/subhendukundu/template-react-ssr/blob/feature/react-router/firebase.json" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/subhendukundu/template-react-ssr/blob/feature/react-router/firebase.json</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但是，即使我为云函数使用了不同的函数目录，我也会看到相同的错误。</font><font style="vertical-align: inherit;">反正有我可以解决吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2614篇《使用Firebase函数部署基于React的SSR应用时出错》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是，firebase托管仅支持SPA，这意味着SSR不可用，您需要在其他环境中运行SSR服务器，在其中可以运行nextJS，或者如果您使用的是静态页面生成器，则可以上传这些文件直接损害了刷新内容的能力，不过，我确信采用云功能和gatsby的解决方案是可行的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Tl; DR：您不会从Firebase托管中获得SSR</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiTom</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以，但是您不能将静态资产与云功能一起使用。</font><font style="vertical-align: inherit;">您需要混合使用Firebase功能和Firebase托管。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firebase的家伙已经考虑过这一点，您也可以使用一个实现。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看以下文档： </font></font></p>

<ul>
<li><a href="https://firebase.google.com/docs/hosting/serverless-overview" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总览</font></font></a></li>
<li><a href="https://firebase.google.com/docs/hosting/functions" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">动态内容</font></font></a></li>
<li><a href="https://github.com/firebase/functions-samples/tree/Node-8/isomorphic-react-app" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代码示例</font></font></a></li>
<li><a href="https://www.youtube.com/watch?v=82tZAPMHfT4" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">YouTube视频</font></font></a></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用云功能时，需要考虑一些延迟。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当新实例处理其第一个请求时，响应时间会缩短，这称为冷启动</font></font></p>
</blockquote>

<p><a href="https://mikhail.io/serverless/coldstarts/gcp/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多信息</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
