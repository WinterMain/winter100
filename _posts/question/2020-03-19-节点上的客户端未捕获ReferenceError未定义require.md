---
layout: question
title:  节点上的客户端：未捕获ReferenceError：未定义require
date:   2020-03-19T01:38:02.000Z
description: 因此，我正在使用node / express + jade组合编写应用程序。我有client.js，已在客户端上加载。在该文件中，我有调用其他Java...
img: 
author: JinJin小宇宙
category: question
answer: 2
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我正在使用node / express + jade组合编写应用程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有</font></font><code>client.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，已在客户端上加载。</font><font style="vertical-align: inherit;">在该文件中，我有调用其他JavaScript文件中的函数的代码。</font><font style="vertical-align: inherit;">我的尝试是使用</font></font></p>

<pre><code>var m = require('./messages');
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了加载内容</font></font><code>messages.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（就像我在服务器端一样），然后再加载该文件的调用函数。</font><font style="vertical-align: inherit;">但是，</font></font><code>require</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未在客户端定义，并且抛出形式的错误</font></font><code>Uncaught ReferenceError: require is not defined</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些其他JS文件也在客户端的运行时加载，因为我将链接放置在网页的标题处。</font><font style="vertical-align: inherit;">因此，客户端知道从这些其他文件导出的所有功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何从</font><font style="vertical-align: inherit;">打开服务器套接字</font></font><code>messages.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的主</font></font><code>client.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">中的</font><font style="vertical-align: inherit;">其他JS文件（如</font><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">调用这些函数</font><font style="vertical-align: inherit;">？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2214篇《节点上的客户端：未捕获ReferenceError：未定义require》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro阳光</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我使用了另一种解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于项目不需要CommonJs，并且必须具有ES3兼容性（不支持模块）</font><font style="vertical-align: inherit;">，因此您</font><strong><font style="vertical-align: inherit;">所需要做的就是</font></strong><strong><font style="vertical-align: inherit;">从代码中</font></strong></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除所有</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">export</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">import</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语句</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">tsconfig</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不包含</font></font></p>

<pre><code>"module": "commonjs"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是在引用的文件中使用导入和导出语句</font></font></p>

<pre><code>import { Utils } from "./utils"<font></font>
export interface Actions {}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最终生成的代码将始终具有（至少对于 TypeScript3.0而言）这样的行 </font></font></p>

<pre><code>"use strict";<font></font>
exports.__esModule = true;<font></font>
var utils_1 = require("./utils");<font></font>
....<font></font>
utils_1.Utils.doSomething();<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝米亚</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是因为</font></font><code>require()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器/客户端JavaScript中不存在。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您将不得不对客户端JavaScript脚本管理做出一些选择。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您有三种选择：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>&lt;script&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="http://wiki.commonjs.org/wiki/CommonJS" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CommonJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实现。</font><font style="vertical-align: inherit;">同步依赖项，例如Node.js</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="http://requirejs.org/docs/whyamd.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AMD</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实施。</font></font></li>
</ol>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CommonJS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">客户端实现包括：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（其中大多数需要在部署之前进行构建）</font></font></p>

<ol>
<li><a href="https://github.com/substack/node-browserify" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Browserify-</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在浏览器中使用大多数Node.js模块。</font><font style="vertical-align: inherit;">这是我个人的最爱。</font></font></li>
<li><a href="https://webpack.github.io/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack-</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做所有事情（捆绑JS，CSS等）。</font><font style="vertical-align: inherit;">由于React.js的激增而流行。</font><font style="vertical-align: inherit;">因学习曲线困难而臭名昭著。</font></font></li>
<li><a href="http://rollupjs.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">汇总</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -新竞争者。</font><font style="vertical-align: inherit;">利用ES6模块。</font><font style="vertical-align: inherit;">包括摇树能力（删除未使用的代码）。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以阅读有关我的</font></font><a href="http://procbits.com/2013/06/17/client-side-javascript-management-browserify-vs-component" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Browserify与（不推荐使用）Component</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">比较的更多信息</font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AMD的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实现包括：</font></font></p>

<ol>
<li><a href="http://requirejs.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RequireJS-</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在客户端JavaScript开发人员中非常受欢迎。</font><font style="vertical-align: inherit;">不是我的口味，因为它具有异步特性。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，在搜索选择与之搭配的产品时，您会了解到</font></font><a href="https://github.com/bower/bower" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bower</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">Bower仅用于程序包依赖关系，并且在CommonJS和AMD等模块定义上不受质疑。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这会有所帮助。 </font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
