---
layout: question
title:  Webpack vs webpack-dev-server vs webpack-dev-middleware vs webpack-hot-Middleware vs etc
date:   2020-03-23T03:51:11.000Z
description: 我开始在开发使用的服务器端渲染应用程序webpack的node/express环境中工作。我对每个Webpack包在开发和生产（运行时）环境中的作用感到非...
img: 
author: Jim猿
category: question
answer: 2
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我开始在</font><font style="vertical-align: inherit;">开发使用的</font><font style="vertical-align: inherit;">服务器端渲染应用程序</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>node/express</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">环境中</font><font style="vertical-align: inherit;">工作</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我对每个Webpack包在开发和生产（运行时）环境中的作用感到非常困惑。</font></font><code>ReactJS</code><font style="vertical-align: inherit;"></font><code>react-router</code><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的理解摘要：</font></font></p>

<p><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：是一个软件包，是一种工具，用于将Web应用程序的不同部分结合在一起，然后捆绑成一个.js文件（通常是</font></font><code>bundle.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font><font style="vertical-align: inherit;">然后，结果文件将在产品环境中提供以由应用程序加载，并包含运行代码的所有必需组件。</font><font style="vertical-align: inherit;">功能包括缩小代码，缩小代码等。</font></font></p>

<p><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：是一个提供</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以处理网站文件</font><font style="vertical-align: inherit;">的软件包</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它还</font></font><code>bundle.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从客户端组件</font><font style="vertical-align: inherit;">构建单个.js文件（</font><font style="vertical-align: inherit;">），但将其提供给内存。</font><font style="vertical-align: inherit;">它还具有选项（</font></font><code>-hot</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）来监视所有构建文件并在代码更改的情况下在内存中构建新的捆绑软件。</font><font style="vertical-align: inherit;">服务器直接在浏览器中提供服务（例如：）</font></font><code>http:/localhost:8080/webpack-dev-server/whatever</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">内存加载，热处理和浏览器服务的结合使用户可以在代码更改时在浏览器上更新应用程序，非常适合开发环境。</font></font></p>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我对上面的文字有疑问，我真的不确定下面的内容，因此如有必要请告诉我</font></font></em></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当使用一个常见的问题</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有</font></font><code>node/express</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个服务器，是</font></font><code>node/express</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这使得该环境很难同时运行客户端和某些节点/表达代码（API等）。</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：这是我所面临的，但是很高兴理解为什么会更详细地发生这种情况...</font></font></em></strong></p>

<p><code>webpack-dev-middleware</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：这是一种中间件，具有</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（内存捆绑，热重装）</font><font style="vertical-align: inherit;">相同的功能</font><font style="vertical-align: inherit;">，但是其格式可以注入到</font></font><code>server/express</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应用程序中。</font><font style="vertical-align: inherit;">这样，您就可以</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在节点服务器内部</font><font style="vertical-align: inherit;">拥有一种服务器（</font><font style="vertical-align: inherit;">）。  </font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">糟糕：这是一个疯狂的梦想吗？</font><font style="vertical-align: inherit;">这一部分如何解决dev和prod方程并使生活更简单</font></font></em></strong></p>

<p><code>webpack-hot-middleware</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：这... </font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卡在这里...在寻找时发现了这件作品</font></font><code>webpack-dev-middleware</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...不知道如何使用它。</font></font></em></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ENDNOTE：对不起，有什么错误的想法。</font><font style="vertical-align: inherit;">我真的需要帮助，以便在复杂的环境中理解这些变体。</font><font style="vertical-align: inherit;">如果方便，请添加更多构建整个方案的包/数据。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2763篇《Webpack vs webpack-dev-server vs webpack-dev-middleware vs webpack-hot-Middleware vs etc》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><h2><a href="https://webpack.js.org/" rel="noreferrer"><code>webpack</code></a></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如您所描述的，Webpack是一个模块捆绑器，主要捆绑各种模块格式，以便它们可以在浏览器中运行。</font><font style="vertical-align: inherit;">它同时提供</font></font><a href="https://webpack.js.org/api/cli/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CLI</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><a href="https://webpack.js.org/api/node/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node API</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<h2><a href="https://github.com/webpack/webpack-dev-middleware" rel="noreferrer"><code>webpack-dev-middleware</code></a></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack Dev Middleware是中间件，可以将其安装在快速服务器中，以</font><font style="vertical-align: inherit;">在开发过程中为您的软件包</font><font style="vertical-align: inherit;">提供</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最新的编译</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://webpack.js.org/api/node/#watching" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">监视模式下</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">Node API，</font><font style="vertical-align: inherit;">而不是输出到文件系统，而是</font></font><a href="https://github.com/webpack/memory-fs" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出到内存</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了进行比较，您可以</font></font><a href="https://expressjs.com/en/starter/static-files.html" rel="noreferrer"><code>express.static</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在生产中</font><font style="vertical-align: inherit;">使用类似这样的</font><font style="vertical-align: inherit;">替代中间件的</font><font style="vertical-align: inherit;">东西</font><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<h2><a href="https://webpack.js.org/guides/development/#webpack-dev-server" rel="noreferrer"><code>webpack-dev-server</code></a></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack Dev Server本身是一个快速</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，用于</font></font><code>webpack-dev-middleware</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供最新的软件包，并另外处理客户端中实时模块更新的热模块替换（HMR）请求。</font></font></p>

<h2><a href="https://github.com/glenjamin/webpack-hot-middleware" rel="noreferrer"><code>webpack-hot-middleware</code></a></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack Hot Middleware可以替代Webpack Hot Middleware，</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是启动服务器本身，它使您可以将其安装在现有的/定制的Express服务器中</font></font><code>webpack-dev-middleware</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也...</font></font></p>

<h2><a href="https://github.com/60frames/webpack-hot-server-middleware" rel="noreferrer"><code>webpack-hot-server-middleware</code></a></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是为了使事情更加混乱，还有Webpack Hot Server中间件，旨在与</font><font style="vertical-align: inherit;">服务器渲染的应用程序</font><font style="vertical-align: inherit;">一起使用</font></font><code>webpack-dev-middleware</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>webpack-hot-middleware</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理服务器的热模块替换。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从2018年更新开始，并考虑</font><a href="https://github.com/webpack/webpack-dev-server" rel="noreferrer"><font style="vertical-align: inherit;">其官方GitHub页面</font></a><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack-dev-server</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意事项</font></font><a href="https://github.com/webpack/webpack-dev-server" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">维护中的项目请注意，webpack-dev-server当前处于仅维护模式，并且在短期内将不接受任何其他功能。</font><font style="vertical-align: inherit;">大多数新功能请求都可以通过Express中间件完成。</font><font style="vertical-align: inherit;">请研究使用文档中的before和after挂钩。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构建Webpack HMR的自然选择是什么？ </font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
