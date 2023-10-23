---
layout: question
title:  Webpack / Babel和react-scripts之间的区别
date:   2020-03-24T07:45:09.000Z
description: 最近，我开始研究Web Pack和react-scripts，我想知道使用它们的优缺点以及它们之间的区别。...
img: 
author: 小胖Gil
category: question
answer: 2
tags: webpack Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最近，我开始研究Web Pack和react-scripts，我想知道使用它们的优缺点以及它们之间的区别。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3463篇《Webpack / Babel和react-scripts之间的区别》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebPack和react-scripts稍有不同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack用于为您的Web应用程序编译软件包，该软件包可以是自由格式，并且具有某些入口点。</font><font style="vertical-align: inherit;">然后，webpack与babel预设一起使用，这使您可以在相对较旧的浏览器中使用现代ES6 +构造。</font><font style="vertical-align: inherit;">另外，webpack负责在一个文件中依赖于程序集的node_modules，并可能对其进行压缩和优化。</font><font style="vertical-align: inherit;">您可以在此处阅读有关webpack原理的更多信息：</font><a href="https://webpack.js.org/concepts/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> ://webpack.js.org/concepts/</font></font><a href="https://webpack.js.org/concepts/" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React-scripts只是用于启动一些自定义webpack-dev-server的入门工具包，该服务器已配置为与React操场提供的样板一起使用。</font><font style="vertical-align: inherit;">这只是演示目的。</font><font style="vertical-align: inherit;">大多数现代的Web库都有它自己的入门工具包，甚至还有服务器端库，例如</font></font><a href="https://github.com/reimagined/resolve/tree/master/packages/resolve-scripts" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/reimagined/resolve/tree/master/packages/resolve-scripts</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上说来，它们有不同的用途，通常会一起出现。</font><font style="vertical-align: inherit;">我将解释它们的用途。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">巴别塔</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Babel是翻译者。</font><font style="vertical-align: inherit;">它可以将各种高版本的ECMAScript（不仅是ECMAScript，而且很容易理解）转换为ES5，ES5得到了浏览器（尤其是较旧版本）的广泛支持。</font><font style="vertical-align: inherit;">它的主要工作是将不受支持或最先进的语言功能转换为ES5。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack尤其是依赖分析器和模块捆绑器。</font><font style="vertical-align: inherit;">例如，如果模块A要求B作为依赖关系，而模块B要求C作为依赖关系，则webpack会生成一个依赖关系图，例如C-&gt; B-&gt;A。实际上，它比这复杂得多，但是一般Webpack的概念是将具有复杂依赖关系的模块打包成束。</font><font style="vertical-align: inherit;">关于webpack与babel的关系：当webpack处理依赖关系时，它必须将所有内容转换为javascript，因为webpack可以在javascript之上工作。</font><font style="vertical-align: inherit;">结果，它使用不同的加载程序将不同类型的资源/代码转换为javascript。</font><font style="vertical-align: inherit;">当我们需要ES6或ES7功能时，可以使用它</font></font><code>babel-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来完成。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">反应脚本</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我们开始基于反应的项目时，设置构建环境是一项艰巨且耗时的工作。</font><font style="vertical-align: inherit;">为了解决这个问题，React的开发人员创建了一个名为npm的软件包</font></font><code>react-scripts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，其中包含了大多数人对于普通React应用程序所需的许多基本设置。</font><font style="vertical-align: inherit;">Babel和webpack </font></font><a href="https://www.npmjs.com/package/react-scripts?activeTab=dependencies" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为依赖项包含在</font></font><code>react-scripts</code></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
