---
layout: question
title:  我如何使用webpack从控制台上require（）？
date:   2020-03-24T09:26:34.000Z
description: 我如何require（）/从控制台导入模块？例如，假设我已经安装了ImmutableJS npm，那么我希望能够在控制台中使用模块中的功能。...
img: 
author: 十三
category: question
answer: 4
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我如何require（）/从控制台导入模块？</font><font style="vertical-align: inherit;">例如，假设我已经安装了ImmutableJS npm，那么我希望能够在控制台中使用模块中的功能。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">既为此制作了自己的npm包（</font></font><a href="https://stackoverflow.com/a/43055806/2441655"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），又找到了现有</font><font style="vertical-align: inherit;">的npm包（</font><a href="https://stackoverflow.com/a/43055806/2441655"><font style="vertical-align: inherit;">请</font></a></font><a href="https://stackoverflow.com/a/43072005/2441655"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参阅此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）之后，我还找到了一种方法，只需使用内置的webpack函数就可以单行完成。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它使用WebPack“上下文”：</font><a href="https://webpack.github.io/docs/context.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://webpack.github.io/docs/context.html" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//webpack.github.io/docs/context.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需将以下行直接添加到“源”文件夹中的文件中即可：</font></font></p>

<pre><code>window.Require = require.context("./", true, /\.js$/);
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在您可以使用它（例如在控制台中），如下所示：</font></font></p>

<pre><code>let MyComponent = Require("./Path/To/MyComponent");<font></font>
console.log("Retrieved MyComponent: " + MyComponent);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，与上述两个解决方案相比，此方法的一个重要缺点是它似乎不适用于node_modules文件夹中的文件。</font><font style="vertical-align: inherit;">当路径调整为“ ../”时，webpack无法编译-至少在我的项目中。</font><font style="vertical-align: inherit;">（也许是因为node_modules文件夹是如此之大）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将以下代码添加到您的模块之一，即可按ID加载模块。</font></font></p>

<pre><code>window.require = __webpack_require__;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在控制台中，使用以下命令：</font></font></p>

<pre><code>require(34)
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Stafan</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><a href="https://github.com/webpack-contrib/expose-loader" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我看来，</font><a href="https://github.com/webpack-contrib/expose-loader" rel="nofollow noreferrer"><font style="vertical-align: inherit;">暴露加载器</font></a><font style="vertical-align: inherit;">是一种更优雅的解决方案：</font></font></p>

<pre><code>require("expose-loader?libraryName!./file.js");<font></font>
// Exposes the exports for file.js to the global context on property "libraryName".<font></font>
// In web browsers, window.libraryName is then available.<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西小哥</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font><font style="vertical-align: inherit;">通过将以下代码添加到捆绑软件中的某个模块</font><font style="vertical-align: inherit;">来执行与</font></font><a href="https://stackoverflow.com/users/4423351/psimyn"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">psimyn</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议的</font><font style="vertical-align: inherit;">类似的操作</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>require.ensure([], function () {<font></font>
    window.require = function (module) {<font></font>
        return require(module);<font></font>
    };<font></font>
});<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从控制台使用require：</font></font></p>

<pre><code>require("./app").doSomething();
</code></pre>

<p><a href="https://stackoverflow.com/a/40801947/164680"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看更多</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
