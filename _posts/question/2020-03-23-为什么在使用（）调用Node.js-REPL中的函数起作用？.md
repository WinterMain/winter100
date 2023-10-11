---
layout: question
title:  为什么在使用（）调用Node.js REPL中的函数起作用？
date:   2020-03-23T13:42:39.000Z
description: 为什么可以用经node.js测试的JavaScript调用此函数：~$ node> function hi() { console.log("Hel...
img: 
author: Itachi
category: question
answer: 2
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么可以用经node.js测试的JavaScript调用此函数：</font></font></p>

<pre><code>~$ node<font></font>
&gt; function hi() { console.log("Hello, World!"); };<font></font>
undefined<font></font>
&gt; hi<font></font>
[Function: hi]<font></font>
&gt; hi()<font></font>
Hello, World!<font></font>
undefined<font></font>
&gt; hi)( // WTF?<font></font>
Hello, World!<font></font>
undefined<font></font>
&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么最后一次呼叫“” </font></font><code>hi)(</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有效？</font><font style="vertical-align: inherit;">是node.js中的错误，V8引擎中的错误，正式未定义的行为还是对所有解释程序实际上有效的JavaScript？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3087篇《为什么在使用（）调用Node.js REPL中的函数起作用？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4个月前针对此问题提出了一个错误</font></font><a href="https://github.com/joyent/node/issues/5698" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/joyent/node/issues/5698</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题在于，REPL将语句括以括号。</font><font style="vertical-align: inherit;">所以</font></font></p>

<pre><code>foo)(
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变成</font></font></p>

<pre><code>(foo)()
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实际的解释可以在这里</font></font><a href="https://github.com/joyent/node/issues/5698#issuecomment-19487718" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/joyent/node/issues/5698#issuecomment-19487718</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎是Node REPL错误，将这两行放在</font></font><code>.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会导致语法错误。</font></font></p>

<pre><code>function hi() { console.log("Hello, World!"); }<font></font>
hi)(<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：</font></font></p>

<pre><code>SyntaxError: Unexpected token )<font></font>
    at Module._compile (module.js:439:25)<font></font>
    at Object.Module._extensions..js (module.js:474:10)<font></font>
    at Module.load (module.js:356:32)<font></font>
    at Function.Module._load (module.js:312:12)<font></font>
    at Function.Module.runMain (module.js:497:10)<font></font>
    at startup (node.js:119:16)<font></font>
    at node.js:901:3<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题已提交</font></font><a href="https://github.com/joyent/node/issues/6334"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＃6634</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转载于v0.10.20。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">v0.11.7已修复此问题。</font></font></p>

<pre><code>$ nvm run 0.11.7<font></font>
Running node v0.11.7<font></font>
&gt; function hi() { console.log("Hello, World!"); }<font></font>
undefined<font></font>
&gt;  hi)(<font></font>
SyntaxError: Unexpected token )<font></font>
    at Object.exports.createScript (vm.js:44:10)<font></font>
    at REPLServer.defaultEval (repl.js:117:23)<font></font>
    at REPLServer.b [as eval] (domain.js:251:18)<font></font>
    at Interface.&lt;anonymous&gt; (repl.js:277:12)<font></font>
    at Interface.EventEmitter.emit (events.js:103:17)<font></font>
    at Interface._onLine (readline.js:194:10)<font></font>
    at Interface._line (readline.js:523:8)<font></font>
    at Interface._ttyWrite (readline.js:798:14)<font></font>
    at ReadStream.onkeypress (readline.js:98:10)<font></font>
    at ReadStream.EventEmitter.emit (events.js:106:17)<font></font>
&gt; <font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
