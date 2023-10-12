---
layout: question
title:  在package.json中找到未使用的npm软件包
date:   2020-03-23T11:54:17.000Z
description: 有没有办法确定您的package.json文件中是否不再有需要的软件包？ 例如，当试用一个程序包，后来注释或删除代码但忘记卸载它时，我最终得到了几个可...
img: 
author: 西门
category: question
answer: 3
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有办法确定您的package.json文件中是否不再有需要的软件包？ </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，当试用一个程序包，后来注释或删除代码但忘记卸载它时，我最终得到了几个可以删除的程序包。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确定包是否可以安全删除的有效方法是什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2996篇《在package.json中找到未使用的npm软件包》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅蛋蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为此，我们可以使用以下npm模块：</font></font></p>

<p><a href="https://www.npmjs.com/package/npm-check-unused" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/npm-check-unused</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY乐伽罗</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有一个名为的软件包</font></font><a href="https://www.npmjs.com/package/npm-check" rel="noreferrer"><code>npm-check</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm检查</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查过时，不正确和未使用的依赖项。</font></font></p>
</blockquote>

<p><img src="https://i.stack.imgur.com/ldoRq.png" alt="在此处输入图片说明"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它功能强大且积极开发。</font><font style="vertical-align: inherit;">它的功能之一是检查未使用的依赖关系-对于这一部分，它使用</font></font><a href="https://www.npmjs.com/package/depcheck" rel="noreferrer"><code>depcheck</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个答案中提到</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">模块。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用称为</font></font><a href="https://www.npmjs.org/package/depcheck" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">depcheck</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的npm模块</font><font style="vertical-align: inherit;">（至少需要Node版本10）。</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装模块：</font></font></p>

<pre><code>npm install depcheck -g<font></font>
<font></font>
or<font></font>
<font></font>
yarn global add depcheck<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行它并找到未使用的依赖项：</font></font></p>

<pre><code>depcheck
</code></pre></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种方法的好处是您不必记住</font></font><code>find</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">or </font></font><code>grep</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要运行</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不安装，请</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用npx：</font></font></p>

<pre><code>npx depcheck
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
