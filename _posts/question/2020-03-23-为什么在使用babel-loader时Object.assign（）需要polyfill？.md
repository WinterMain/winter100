---
layout: question
title:  为什么在使用babel-loader时Object.assign（）需要polyfill？
date:   2020-03-23T12:59:40.000Z
description: 我试图Object.assign()在由Babel编译的ES6 Web应用程序中使用webpack，但出现错误：Uncaught TypeError ...
img: 
author: 番长猴子
category: question
answer: 3
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图</font></font><code>Object.assign()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在由Babel编译的ES6 Web应用程序中使用webpack，但出现错误：</font></font></p>

<pre><code>Uncaught TypeError: Object.assign is not a function
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经在使用</font></font><a href="https://github.com/babel/babel-loader" rel="noreferrer"><code>babel-loader</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES6到ES5了，所以我所有其他的ES6代码都可以使用。</font><font style="vertical-align: inherit;">但是，</font></font><code>Object.assign()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只有</font></font><code>import "babel-core/polyfill"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在代码库中</font><font style="vertical-align: inherit;">也可以</font><font style="vertical-align: inherit;">使用。</font><font style="vertical-align: inherit;">我看到我也可以</font></font><a href="https://stackoverflow.com/questions/32123050/use-babel-loader-but-object-assign-is-not-a-function"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过导入babel-runtime</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来解决此问题</font><font style="vertical-align: inherit;">，但是我想理解</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么</font></font></em> <code>Object.assign()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需求比</font></font><code>babel-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行的</font><font style="vertical-align: inherit;">要多</font><font style="vertical-align: inherit;">-不应</font></font><code>babel-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">预处理所有内容，包括</font></font><code>Object.assign()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3032篇《为什么在使用babel-loader时Object.assign（）需要polyfill？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题。</font><font style="vertical-align: inherit;">我认为在得到babel支持的情况下，可以安全使用所有ES2015 +功能。</font><font style="vertical-align: inherit;">但是如上所述，babel polyfill仅填充语法，而不包含函数（Object.assign，Array.includes仅举几例）。</font><font style="vertical-align: inherit;">对于Object.assign，我更喜欢不使用polyfill，而是使用散布运算符。</font><font style="vertical-align: inherit;">在这种情况下，如果未找到babel，则实际上会填充Object.assign。</font><font style="vertical-align: inherit;">看一下这段代码：</font></font></p>

<pre><code>let obj = {a: 1};<font></font>
let obj2 = {...obj};<font></font>
let obj3 = Object.assign({}, obj);<font></font>
</code></pre>

<p>It will be tranpiled by babel to:</p>

<pre><code>"use strict";<font></font>
<font></font>
var _extends = Object.assign || function (target) { for (var i = 1; i &lt; arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };<font></font>
<font></font>
var obj = { a: 1 };<font></font>
var obj2 = _extends({}, obj);<font></font>
var obj3 = Object.assign({}, obj);<font></font>
</code></pre>

<p>For spread operator babel tries to used native Object.assign method and use polyfill if it was not found.
But the explicit Object.assign method is left unchanged ¯\_(ツ)_/¯</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><code>Object.assign()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是ES6规范的一部分的新API，因此尚未在大多数浏览器中实现。</font><font style="vertical-align: inherit;">请参阅：</font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，当您导入时</font></font><code>babel-core/polyfill</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它会为此添加polyfill和其他新API，以便您的ES6代码可以使用它们。</font></font></p>

<p><code>babel-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 只是将ES6语法转换为ES5兼容代码的编译器。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Babel通过via </font></font><code>babel-loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转换ES6 </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法中的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">差异</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">Babel本身绝对不会在ES6标准库功能（如</font></font><code>Object.assign</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）中</font><font style="vertical-align: inherit;">添加任何内容</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">加载polyfill </font></font><a href="https://www.npmjs.com/package/core-js" rel="noreferrer"><code>core-js</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将为您</font><font style="vertical-align: inherit;">加载一个单独的polyfill </font><font style="vertical-align: inherit;">，但是您可以加载所需的任何polyfill。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">甚至某些语法转换都依赖于特定的polyfill功能进行加载，因为某些语法依赖于库代码中实现的算法和行为。</font></font><a href="http://babeljs.io/docs/learn-es2015/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://babeljs.io/docs/learn-es2015/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上的ES6功能</font><font style="vertical-align: inherit;">列出了假定已加载的标准库功能。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
