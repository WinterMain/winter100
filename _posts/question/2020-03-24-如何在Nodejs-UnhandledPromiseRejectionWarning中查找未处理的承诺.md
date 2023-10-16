---
layout: question
title:  如何在Node.js UnhandledPromiseRejectionWarning中查找未处理的承诺？
date:   2020-03-24T06:05:52.000Z
description: 版本7中的Node.js具有用于处理promise的async / await语法糖，现在在我的代码中经常出现以下警告： (node 11057) U...
img: 
author: ALEYHarry
category: question
answer: 1
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本7中的Node.js具有用于处理promise的async / await语法糖，现在在我的代码中经常出现以下警告： </font></font></p>

<pre><code>(node:11057) UnhandledPromiseRejectionWarning: Unhandled promise <font></font>
rejection (rejection id: 1): ReferenceError: Error: Can't set headers <font></font>
after they are sent.<font></font>
(node:11057) DeprecationWarning: Unhandled promise rejections are <font></font>
deprecated. In the future, promise rejections that are not handled <font></font>
will terminate the Node.js process with a non-zero exit code.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，没有提到丢失渔获物的那一行。</font><font style="vertical-align: inherit;">有没有找到所有方法而不检查每个try / catch块的方法？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3341篇《如何在Node.js UnhandledPromiseRejectionWarning中查找未处理的承诺？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝LEY</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示未处理的ES6 Promise拒绝的完整堆栈跟踪</font><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法是运行带有</font></font><code>--trace-warnings</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志的</font><font style="vertical-align: inherit;">Node.js。</font><font style="vertical-align: inherit;">这将显示每个警告的完整堆栈跟踪，而不必从您自己的代码中截取拒绝。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点--trace-warnings app.js
</font></font></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保</font></font><code>trace-warnings</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志</font><font style="vertical-align: inherit;">位于</font><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">名</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之前</font></font></em><font style="vertical-align: inherit;"></font><code>.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！</font><font style="vertical-align: inherit;">否则，该标志将被解释为脚本的参数，Node.js本身将忽略该标志。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要实际</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">处理</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未处理的拒绝（例如，通过记录它们），则可能要改用我的</font></font><a href="https://www.npmjs.com/package/unhandled-rejection" rel="noreferrer"><code>unhandled-rejection</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块，该模块</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">单个事件处理程序捕获支持它的每个主要Promises实现的所有未处理的拒绝。</font></font></p>

<p>That module supports Bluebird, ES6 Promises, Q, WhenJS, <code>es6-promise</code>, <code>then/promise</code>, and anything that conforms to any of the unhandled rejection specifications (full details in the documentation).</p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
