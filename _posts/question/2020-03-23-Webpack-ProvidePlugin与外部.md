---
layout: question
title:  Webpack ProvidePlugin与外部？
date:   2020-03-23T03:54:18.000Z
description: 我正在探索将Webpack与Backbone.js结合使用的想法。我遵循了快速入门指南，并对Webpack的工作原理有一个大致的了解，但是我不清楚如何...
img: 
author: 神乐前端
category: question
answer: 1
tags: 骨架 Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在探索将</font></font><a href="http://webpack.github.io/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><a href="http://backbonejs.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Backbone.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结合使用的想法</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遵循了快速入门指南，并对Webpack的工作原理有一个大致的了解，但是我不清楚如何加载依赖库，例如jquery / boneer / underscore。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它们应该从外部加载</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还是Webpack可以像RequireJS的shim一样处理？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照</font></font><a href="http://webpack.github.io/docs/shimming-modules.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的WebPack DOC：垫补模块</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>ProvidePlugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>externals</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎与此有关（因此是</font></font><code>bundle!</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">装载机的地方），但我不能想出什么时候使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2768篇《Webpack ProvidePlugin与外部？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两者都有：您可以在库中包含一个</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（即使用CDN中的库）或将它们包含在生成的包中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果通过</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">加载，则</font><font style="vertical-align: inherit;">可以使用该</font></font><code>externals</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项允许写入</font></font><code>require(...)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CDN库的示例：</font></font></p>

<pre><code>&lt;script src="https://code.jquery.com/jquery-git2.min.js"&gt;&lt;/script&gt;<font></font>
<font></font>
// the artifial module "jquery" exports the global var "jQuery"<font></font>
externals: { jquery: "jQuery" }<font></font>
<font></font>
// inside any module<font></font>
var $ = require("jquery");<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">捆绑包中包含库的示例：</font></font></p>

<pre><code>copy `jquery-git2.min.js` to your local filesystem<font></font>
<font></font>
// make "jquery" resolve to your local copy of the library<font></font>
// i. e. through the resolve.alias option<font></font>
resolve: { alias: { jquery: "/path/to/jquery-git2.min.js" } }<font></font>
<font></font>
// inside any module<font></font>
var $ = require("jquery");<font></font>
</code></pre>

<hr>

<p>The <code>ProvidePlugin</code> can map modules to (free) variables. So you could define: "Every time I use the (free) variable <code>xyz</code> inside a module you (webpack) should set <code>xyz</code> to <code>require("abc")</code>."</p>

<p>Example without <code>ProvidePlugin</code>:</p>

<pre><code>// You need to require underscore before you can use it<font></font>
var _ = require("underscore");<font></font>
_.size(...);<font></font>
</code></pre>

<p>Example with <code>ProvidePlugin</code>:</p>

<pre><code>plugins: [<font></font>
  new webpack.ProvidePlugin({<font></font>
    "_": "underscore"<font></font>
  }) <font></font>
]<font></font>
<font></font>
// If you use "_", underscore is automatically required<font></font>
_.size(...)<font></font>
</code></pre>

<hr>

<p>Summary:</p>

<ul>
<li>Library from CDN: Use <code>&lt;script&gt;</code> tag and <code>externals</code> option</li>
<li>Library from filesystem: Include the library in the bundle.
(Maybe modify <code>resolve</code> options to find the library)</li>
<li><code>externals</code>: Make global vars available as module</li>
<li><code>ProvidePlugin</code>: Make modules available as free variables inside modules</li>
</ul></div>
        </div></div>
    {% endraw %}
  </div>
<div>
