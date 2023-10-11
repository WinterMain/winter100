---
layout: question
title:  CommonJS，AMD和RequireJS之间的关系？
date:   2020-03-10T04:13:01.000Z
description: 我对CommonJS，AMD和RequireJS仍然很困惑。即使阅读了很多。我知道CommonJS（以前称为ServerJS）是用于在浏览器之外使用该...
img: 
author: Harry逆天Eva
category: question
answer: 2
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对CommonJS，AMD和RequireJS仍然很困惑。</font><font style="vertical-align: inherit;">即使阅读了很多。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道CommonJS（以前称为ServerJS）是用于在浏览器之外使用该语言时定义一些JavaScript规范（即模块）的组。</font><font style="vertical-align: inherit;">CommonJS模块规范具有某些实现，例如Node.js或RingoJS，对吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CommonJS，异步模块定义（AMD）和RequireJS之间有什么关系？</font><font style="vertical-align: inherit;">RequireJS是CommonJS模块定义的实现吗？</font><font style="vertical-align: inherit;">如果是，那么AMD是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第467篇《CommonJS，AMD和RequireJS之间的关系？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱十三</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><a href="http://addyosmani.com/writing-modular-js/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">报价单</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AMD</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种浏览器优先的方法 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择异步行为并简化向后兼容性</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它没有文件I / O的任何概念。 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它支持对象，函数，构造函数，字符串，JSON和许多其他类型的模块。</font></font></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CommonJS</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种服务器优先的方法</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设同步行为</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">涵盖更广泛的关注点，例如I / O，文件系统，承诺等。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">支持展开的模块，可以感觉到更接近</font></font><a href="http://wiki.ecmascript.org/doku.php?id=harmony:modules"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ES.next/Harmony</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规范，从而使您摆脱了</font></font><code>AMD</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">强制执行</font><font style="vertical-align: inherit;">的define（）包装器</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅支持将对象作为模块。</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门GO</span>
            <span class="discuss-time">2020.03.10</span>
          </div>
          <div class="discuss-comment"><p><a href="http://www.commonjs.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CommonJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不仅限于此-它是一个为JavaScript定义通用API和生态系统的项目。</font><font style="vertical-align: inherit;">CommonJS的一部分是</font></font><a href="http://wiki.commonjs.org/wiki/Modules/1.1" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">规范。</font><font style="vertical-align: inherit;">Node.js和RingoJS是服务器端JavaScript运行时，是的，它们都基于CommonJS Module规范实现模块。</font></font></p>

<p><a href="https://github.com/amdjs/amdjs-api/blob/master/AMD.md" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AMD</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（异步模块定义）是另一种模块规范。</font></font><a href="http://requirejs.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">RequireJS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能是AMD最受欢迎的实现。</font><font style="vertical-align: inherit;">与CommonJS的主要区别在于AMD指定</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">异步</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">加载模块</font><font style="vertical-align: inherit;">-这意味着模块是并行加载的，而不是通过等待加载完成来阻止执行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，AMD通常更多地用于客户端（浏览器）JavaScript开发中，而CommonJS模块通常用于服务器端。</font><font style="vertical-align: inherit;">但是，您可以在任何一种环境中使用任何一种模块规范-例如，RequireJS提供</font></font><a href="http://requirejs.org/docs/node.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了在Node.js中运行的说明，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而</font></font><a href="http://browserify.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">browserify</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是可以在浏览器中运行的CommonJS Module实现。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
