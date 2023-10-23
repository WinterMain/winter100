---
layout: question
title:  webpack“ --watch”与“ --hot”：有什么区别？
date:   2020-03-24T06:24:33.000Z
description: 使用之间有什么区别webpack --watch和webpack-dev-server --hot谢谢。...
img: 
author: Stafan
category: question
answer: 1
tags: 网络包 Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用之间有什么区别</font></font></p>

<pre><code>webpack --watch
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font></p>

<pre><code>webpack-dev-server --hot
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3368篇《webpack“ --watch”与“ --hot”：有什么区别？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据webpack文档@ </font></font><a href="https://webpack.github.io/docs/tutorials/getting-started/#watch-mode" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://webpack.github.io/docs/tutorials/getting-started/#watch-mode</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用监视模式时，webpack会将文件监视程序安装到所有在编译过程中使用的文件。</font><font style="vertical-align: inherit;">如果检测到任何更改，它将再次运行编译。</font><font style="vertical-align: inherit;">启用缓存后，webpack会将每个模块保留在内存中，如果未更改，它将重新使用它。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，从根本上说，运行</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">之间的区别</font></font><code>webpack --watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是使用--watch时，CLI将在编译过程中挂起，等待文件中的任何代码更改，如果更改，则它将重新编译并再次等待。</font><font style="vertical-align: inherit;">您应该知道，如果您使用的是webpack-dev-server，则不需要使用此选项，因为默认情况下，根据其文档，webpack-dev-server使用webpack的监视模式：</font></font></p>

<blockquote>
  <p>The dev server uses webpack’s watch mode. It also prevents webpack
  from emitting the resulting files to disk. Instead it keeps and serves
  the resulting files from memory.</p>
</blockquote>

<p>So, what is <code>webpack-dev-server --hot</code>? Basically, this adds the <code>HotModuleReplacementPlugin</code> to the webpack configuration, which will essentially allow you to only reload the component that is changed instead of doing a full page refresh! Pretty darn useful when you are working with states! According to the documentation:</p>

<blockquote>
  <p>Each mode also supports Hot Module Replacement in which the bundle is
  notified that a change happened instead of a full page reload. A Hot
  Module Replacement runtime could then load the updated modules and
  inject them into the running app.</p>
</blockquote>

<p>More information on what it is and how to used it here: <a href="https://webpack.github.io/docs/webpack-dev-server.html#hot-module-replacement" rel="noreferrer">https://webpack.github.io/docs/webpack-dev-server.html#hot-module-replacement</a></p>

<p>I hope this helps in understanding webpack a bit more!</p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
