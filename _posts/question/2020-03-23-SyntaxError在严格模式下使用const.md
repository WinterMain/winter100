---
layout: question
title:  SyntaxError：在严格模式下使用const
date:   2020-03-23T01:22:12.000Z
description: 我正在使用node.js，并且在中使用的一个js文件const中"strict mode"。尝试运行它时，出现错误：SyntaxError  Use ...
img: 
author: 古一
category: question
answer: 8
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用node.js，并且在中使用的一个js文件</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font></font><code>"strict mode"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">尝试运行它时，出现错误：</font></font></p>

<pre><code>SyntaxError: Use of const in strict mode.
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最佳做法是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></p>

<pre><code>'use strict'<font></font>
const MAX_IMAGE_SIZE = 1024*1024; // 1 MB<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2582篇《SyntaxError：在严格模式下使用const》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小飞云</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ECMAScript不支持const。</font><font style="vertical-align: inherit;">因此，在指定严格模式后，您会收到语法错误。</font><font style="vertical-align: inherit;">如果您希望代码与所有浏览器兼容，则需要使用var而不是const。</font><font style="vertical-align: inherit;">我知道，这不是理想的解决方案，但这就是它的本质。</font><font style="vertical-align: inherit;">有多种方法可以在JavaScript中创建只读属性（请参阅</font></font><a href="https://stackoverflow.com/questions/366047/can-read-only-properties-be-implemented-in-pure-javascript"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以在Pure JavaScript中实现只读属性吗？</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），但我认为根据您的情况，它可能会显得过分杀伤。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是</font></font><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MDN的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器兼容性说明</font><font style="vertical-align: inherit;">：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">浏览器兼容性</font></font></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前const的实现是Mozilla特定的扩展，不属于ECMAScript5。它在Firefox和Chrome（V8）中受支持。</font><font style="vertical-align: inherit;">从Safari 5.1.7和Opera 12.00开始，如果在这些浏览器中使用const定义变量，则以后仍可以更改其值。</font><font style="vertical-align: inherit;">它在Internet Explorer 6-10中不受支持，但在Internet Explorer 11中包含。const关键字当前在函数范围内声明常量（如用var声明的变量）。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Firefox（至少从版本13开始），如果您重新声明常量，则会引发TypeError。</font><font style="vertical-align: inherit;">如果将另一个值分配给常量，则所有主流浏览器都不会产生任何通知或错误。</font><font style="vertical-align: inherit;">此类操作的返回值是分配的新值，但是仅在Firefox和Chrome中（至少从版本20开始），重新分配才成功。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">const将由ECMAScript 6定义，但是具有不同的语义。</font><font style="vertical-align: inherit;">与用let语句声明的变量相似，用const声明的常量将是块作用域的。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用的</font></font><code>const</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">严格模式下使用Chrome浏览器41.目前，发布</font></font><a href="http://blog.chromium.org/2015/01/chrome-41-beta-new-es6-features-and.html" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome浏览器测试版41已经释放</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并支持它。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近也遇到过类似的问题，并最终获得了此问答。</font><font style="vertical-align: inherit;">这不是OP所寻找的解决方案，但可能会帮助其他遇到类似问题的人。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font></font><a href="http://pm2.keymetrics.io/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PM2</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行项目，并且在给定的登台服务器中，我使用的是Node，NPM和PM2的旧版本。</font><font style="vertical-align: inherit;">我更新了所有内容，但是仍然保持相同的错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SyntaxError：在严格模式下使用const。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图停止并多次启动该应用程序。</font><font style="vertical-align: inherit;">还尝试再次更新所有内容。</font><font style="vertical-align: inherit;">没事。</font><font style="vertical-align: inherit;">直到我跑步时注意到警告</font></font><code>pm2 start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&gt;&gt;&gt;&gt;内存PM2已过期，请执行：</font></font></strong><br>
  <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&gt;&gt;&gt;&gt; $ pm2更新</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
  内存PM2版本：0.15.10 </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  本地PM2版本：3.2.9</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">知道了！</font><font style="vertical-align: inherit;">运行之后</font></font><code>pm2 update</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我终于能够按预期运行该应用程序。</font><font style="vertical-align: inherit;">不再有“在严格模式下常量”错误。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，当针对其执行代码的节点版本比预期的版本旧时，会发生此错误。</font><font style="vertical-align: inherit;">（即0.12或更高版本）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是nvm，请确保您使用的节点版本正确。</font><font style="vertical-align: inherit;">您可以</font><a href="http://node.green/#ES2015-bindings-const-redefining-a-const--strict-mode-" rel="noreferrer"><font style="vertical-align: inherit;">在严格模式下在node.green上</font></a><font style="vertical-align: inherit;">检查</font><a href="http://node.green/#ES2015-bindings-const-redefining-a-const--strict-mode-" rel="noreferrer"><font style="vertical-align: inherit;">const</font></a><font style="vertical-align: inherit;">的</font></font><a href="http://node.green/#ES2015-bindings-const-redefining-a-const--strict-mode-" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">兼容性</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在另一篇文章中发现了类似的问题，并将答案</font><a href="https://stackoverflow.com/questions/43932038/husky-giving-error-syntaxerror-use-of-const-in-strict-mode/44168690#44168690"><font style="vertical-align: inherit;">详细</font></a><font style="vertical-align: inherit;">发布在该文章</font></font><a href="https://stackoverflow.com/questions/43932038/husky-giving-error-syntaxerror-use-of-const-in-strict-mode/44168690#44168690"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyJinJin泡芙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能不是每个人的解决方案，但对我而言。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用的是NVM，则可能没有为运行的代码启用正确版本的节点。</font><font style="vertical-align: inherit;">重新引导后，默认的节点版本将更改回系统默认值。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在使用本来很好的react-native时遇到了这个问题。</font><font style="vertical-align: inherit;">只需使用nvm来使用正确版本的节点即可解决此问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Jim</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新节点后的重要步骤之一是将节点二进制文件链接到最新安装的节点版本</font></font></p>

<pre><code>sudo ln -sf /usr/local/n/versions/node/6.0.0/bin/node /usr/bin/node  
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三StafanEva</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p>The <code>const</code> and <code>let</code> are part of ECMAScript 2015 (a.k.a. ES6 and Harmony), and was not enabled by default in Node.js 0.10 or 0.12. Since Node.js 4.x, “All shipping [ES2015] features, which V8 considers stable, are turned on by default on Node.js and do NOT require any kind of runtime flag.”. <a href="https://nodejs.org/en/docs/es6/">Node.js docs has an overview of what ES2015 features are enabled by default, and which who require a runtime flag</a>. So by upgrading to Node.js 4.x or newer the error should disappear.</p>

<p>To enable some of the ECMAScript 2015 features (including <code>const</code> and <code>let</code>) in Node.js 0.10 and 0.12; start your node program with a harmony flag, otherwise you will get a syntax error. For example:</p>

<pre><code>node --harmony app.js
</code></pre>

<p>It all depends on which side your strict js is located. I would recommend using strict mode with <code>const</code> declarations on your server side and start the server with the harmony flag. For the client side, you should use <a href="http://babeljs.io/">Babel</a> or similar tool to convert ES2015 to ES5, since not all client browsers support the <code>const</code> declarations.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋小胖</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在nodejs中发生这种情况，那是由于nodejs的版本较旧。</font><font style="vertical-align: inherit;">通过使用更新节点，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）清除NPM的缓存：</font></font></p>

<pre><code>sudo npm cache clean -f
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）安装一个名为“ n”的小助手</font></font></p>

<pre><code>sudo npm install -g n
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3）安装最新的稳定NodeJS版本</font></font></p>

<pre><code>sudo n stable
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新来自</font><a href="https://stackoverflow.com/a/19584407/698072"><font style="vertical-align: inherit;">https://stackoverflow.com/a/19584407/698072的</font></a><font style="vertical-align: inherit;"> nodejs指令</font></font><a href="https://stackoverflow.com/a/19584407/698072"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
