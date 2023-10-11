---
layout: question
title:  Webpack Babel 6 ES6 decorator
date:   2020-03-23T02:47:13.000Z
description: 我有一个用Webpack作为捆绑器的用ES6编写的项目。大部分转译工作正常，但是当我尝试在任何地方包含 decorator时，都会出现此错误：Decorators ...
img: 
author: 斯丁前端
category: question
answer: 2
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个用Webpack作为捆绑器的用ES6编写的项目。</font><font style="vertical-align: inherit;">大部分转译工作正常，但是当我尝试在任何地方包含 decorator时，都会出现此错误：</font></font></p>

<pre><code>Decorators are not supported yet in 6.x pending proposal update.
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我查看了babel问题追踪器，但在那儿找不到任何内容，因此我假设我使用的是错误的。</font><font style="vertical-align: inherit;">我的webpack配置（相关位）：</font></font></p>

<pre><code>loaders: [<font></font>
  {<font></font>
    loader: 'babel',<font></font>
    exclude: /node_modules/,<font></font>
    include: path.join(__dirname, 'src'),<font></font>
    test: /\.jsx?$/,<font></font>
    query: {<font></font>
      plugins: ['transform-runtime'],<font></font>
      presets: ['es2015', 'stage-0', 'react']<font></font>
    }<font></font>
  }<font></font>
]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我没有其他问题，箭头功能，销毁所有功能都正常，这是唯一不起作用的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道我总是可以降级到前一段时间使用过的babel 5.8，但是如果有任何方法可以使它在当前版本（v6.2.0）中运行，它将有所帮助。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2683篇《Webpack Babel 6 ES6 decorator》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在babeljs松弛式网络聊天上花了5分钟之后，我发现在当前版本的babel（v6.2）中 decorator已损坏。</font><font style="vertical-align: inherit;">唯一的解决方案似乎是此时降级到5.8。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看来他们也将问题追踪器从github移到了</font></font><a href="https://phabricator.babeljs.io"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://phabricator.babeljs.io</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我把所有这些都记下来了，因为经过数小时的搜索，我发现当前的文档非常贫乏和缺乏。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需要一个转换 decorator插件：</font><a href="http://babeljs.io/docs/plugins/transform-decorators/" rel="nofollow"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://babeljs.io/docs/plugins/transform-decorators/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//babeljs.io/docs/plugins/transform-decorators/</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
