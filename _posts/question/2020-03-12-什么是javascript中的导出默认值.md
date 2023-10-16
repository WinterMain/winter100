---
layout: question
title:  什么是javascript中的“导出默认值”？
date:   2020-03-12T07:41:29.000Z
description: 档案：SafeString.js// Build out our basic SafeString typefunction SafeString(...
img: 
author: 
category: question
answer: 3
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">档案：</font></font><a href="https://github.com/wycats/handlebars.js/blob/583141de7cb61eb70eaa6b33c25f475f3048071b/lib/handlebars/safe-string.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SafeString.js</font></font></a></p>

<pre><code>// Build out our basic SafeString type<font></font>
function SafeString(string) {<font></font>
  this.string = string;<font></font>
}<font></font>
<font></font>
SafeString.prototype.toString = function() {<font></font>
  return "" + this.string;<font></font>
};<font></font>
<font></font>
export default SafeString;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我从未见过</font></font><code>export default</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">是否有任何等效的东西</font></font><code>export default</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更容易理解？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1074篇《什么是javascript中的“导出默认值”？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里阳光</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导出默认</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值用于导出单个类，函数或基元。</font></font></p>

<p><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当函数没有名称时，可以使用</font><strong><font style="vertical-align: inherit;">export default</font></strong><font style="vertical-align: inherit;"> function（）{}。</font><font style="vertical-align: inherit;">文件中只能有一个默认导出。</font></font></p>

<p><a href="https://nexladder.com/blog/export-default-in-javascript/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读更多</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYAItachi</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是ES6模块系统的一部分，在</font></font><a href="https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#Using_the_default_export" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此进行描述</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该文档中还有一个有用的示例：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果模块定义了默认导出：</font></font></p>

<pre><code>export default function() { console.log("hello!") }
</code></pre>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么您可以通过省略花括号来导入默认导出：</font></font></p>

<pre><code>import foo from "foo";<font></font>
foo(); // hello!<font></font>
</code></pre>
</blockquote>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自2015年6月，该模块系统中定义</font></font><a href="https://www.ecma-international.org/ecma-262/6.0/#sec-modules" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">§15.2</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>export</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在特定语法中定义</font></font><a href="https://www.ecma-international.org/ecma-262/6.0/#sec-exports" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">§15.2.3</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ECMAScript的2015规范的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易EvaSam</span>
            <span class="discuss-time">2020.03.12</span>
          </div>
          <div class="discuss-comment"><p><code>export default function(){}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当函数没有名称时可以使用。</font><font style="vertical-align: inherit;">文件中只能有一个默认导出。</font><font style="vertical-align: inherit;">替代方法是命名出口。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><a href="http://www.2ality.com/2014/09/es6-modules-final.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">详细描述</font></font><code>export default</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了有关模块，以及我认为非常有用的模块的其他详细信息。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
