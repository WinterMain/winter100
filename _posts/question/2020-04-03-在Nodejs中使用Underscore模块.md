---
layout: question
title:  在Node.js中使用Underscore模块
date:   2020-04-03T02:38:38.000Z
description: 我一直在学习有关node.js和模块的信息，似乎无法让Underscore库正常工作……似乎我第一次使用Underscore中的函数时，它将覆盖_对象，其...
img: 
author: 番长
category: question
answer: 1
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在学习有关node.js和模块的信息，似乎无法让Underscore库正常工作……似乎我第一次使用Underscore中的函数时，它将覆盖_对象，其结果为我的函数调用。</font><font style="vertical-align: inherit;">有人知道发生了什么吗？</font><font style="vertical-align: inherit;">例如，这是来自node.js REPL的会话：</font></font></p>

<pre><code>Admin-MacBook-Pro:test admin$ node<font></font>
&gt; require("./underscore-min")<font></font>
{ [Function]<font></font>
  _: [Circular],<font></font>
  VERSION: '1.1.4',<font></font>
  forEach: [Function],<font></font>
  each: [Function],<font></font>
  map: [Function],<font></font>
  inject: [Function],<font></font>
  (...more functions...)<font></font>
  templateSettings: { evaluate: /&lt;%([\s\S]+?)%&gt;/g, interpolate: /&lt;%=([\s\S]+?)%&gt;/g },<font></font>
  template: [Function] }<font></font>
&gt; _.max([1,2,3])<font></font>
3<font></font>
&gt; _.max([4,5,6])<font></font>
TypeError: Object 3 has no method 'max'<font></font>
    at [object Context]:1:3<font></font>
    at Interface.&lt;anonymous&gt; (repl.js:171:22)<font></font>
    at Interface.emit (events.js:64:17)<font></font>
    at Interface._onLine (readline.js:153:10)<font></font>
    at Interface._line (readline.js:408:8)<font></font>
    at Interface._ttyWrite (readline.js:585:14)<font></font>
    at ReadStream.&lt;anonymous&gt; (readline.js:73:12)<font></font>
    at ReadStream.emit (events.js:81:20)<font></font>
    at ReadStream._emitKey (tty_posix.js:307:10)<font></font>
    at ReadStream.onData (tty_posix.js:70:12)<font></font>
&gt; _<font></font>
3<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我自己制作Javascript文件并导入它们时，它们似乎工作正常。</font><font style="vertical-align: inherit;">Underscore库也许有一些特别之处？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3898篇《在Node.js中使用Underscore模块》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该名称</font></font><code>_</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由使用</font></font><code>node.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">REPL保留以前的输入。</font><font style="vertical-align: inherit;">选择另一个名称。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
