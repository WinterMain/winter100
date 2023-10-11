---
layout: question
title:  如何告诉Webpack开发服务器为任何路由提供index.html
date:   2020-03-11T07:35:30.000Z
description: React Router允许React应用处理/arbitrary/route。为了使其正常工作，我需要我的服务器在任何匹配的路由上发送React应用程序...
img: 
author: 番长神乐小小
category: question
answer: 4
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Router允许React应用处理</font></font><code>/arbitrary/route</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">为了使其正常工作，我需要我的服务器在任何匹配的路由上发送React应用程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是</font></font><a href="http://webpack.github.io/docs/webpack-dev-server.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack开发服务器</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法处理任意端点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里有一个使用附加快递服务器的解决方案。
</font></font><a href="https://stackoverflow.com/questions/26203725/how-to-allow-for-webpack-dev-server-to-allow-entry-points-from-react-router"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何允许webpack-dev-server允许来自react-router的入口点</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我不想启动另一个Express服务器来允许路由匹配。</font><font style="vertical-align: inherit;">我只想告诉webpack开发服务器匹配任何URL，并向我发送我的react应用。</font><font style="vertical-align: inherit;">请。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第736篇《如何告诉Webpack开发服务器为任何路由提供index.html》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyEvaL</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，我有点“。” </font><font style="vertical-align: inherit;">在我的路径中，例如，</font></font><code>/orgs.csv</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我不得不把它放在我的webpack confg中。</font></font></p>

<pre><code>devServer: {<font></font>
  historyApiFallback: {<font></font>
    disableDotRule: true,<font></font>
  },<font></font>
},<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神离伊芙妮</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在配置中添加公共路径可帮助webpack理解真正的根（</font></font><code>/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），即使您在子路由上也是如此。</font></font><code>/article/uuid</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，修改您的webpack配置并添加以下内容：</font></font></p>

<pre><code>output: {<font></font>
    publicPath: "/"<font></font>
}<font></font>
<font></font>
devServer: {<font></font>
    historyApiFallback: true<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有</font></font><code>publicPath</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资源可能无法正确加载，只有index.html。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Webpack上测试 </font></font><code>4.6</code></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">配置的更大部分（只是为了获得更好的画面）：</font></font></em></p>

<pre><code>entry: "./main.js",<font></font>
output: {<font></font>
  publicPath: "/",<font></font>
  path: path.join(__dirname, "public"),<font></font>
  filename: "bundle-[hash].js"<font></font>
},<font></font>
devServer: {<font></font>
  host: "domain.local",<font></font>
  https: true,<font></font>
  port: 123,<font></font>
  hot: true,<font></font>
  contentBase: "./public",<font></font>
  inline: true,<font></font>
  disableHostCheck: true,<font></font>
  historyApiFallback: true<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚逆天</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果选择使用</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则不应使用它来服务整个React应用程序。</font><font style="vertical-align: inherit;">您应该使用它来服务</font></font><code>bundle.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件以及静态依赖项。</font><font style="vertical-align: inherit;">在这种情况下，您将必须启动两台服务器，一台用于Node.js入口点，这些服务器实际上将处理路由并为HTML服务，另一台用于捆绑和静态资源。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您确实想要一台服务器，则必须停止使用</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并开始</font><font style="vertical-align: inherit;">在应用程序服务器内</font><font style="vertical-align: inherit;">使用</font></font><a href="https://github.com/webpack/webpack-dev-middleware" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack-dev-middleware</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它将“即时”处理包（我认为它支持缓存和热模块替换），并确保您的调用</font></font><code>bundle.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">始终是最新的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.11</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样为我工作</font></font></p>

<pre><code>devServer: {<font></font>
    contentBase: "./src",<font></font>
    hot: true,<font></font>
    port: 3000,<font></font>
    historyApiFallback: true<font></font>
<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在防暴应用程序上工作</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
