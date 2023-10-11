---
layout: question
title:  如何在Material UI的webpack构建中包括Roboto字体？
date:   2020-03-24T07:41:31.000Z
description: 对于基于Material UI（React）并使用Webpack构建的渐进式 Web应用程序，如何正确包含Roboto字体，以使该应用程序不依赖于Goog...
img: 
author: 古一
category: question
answer: 1
tags: webpack Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font><font style="vertical-align: inherit;">基于</font><a href="http://www.material-ui.com/" rel="noreferrer"><font style="vertical-align: inherit;">Material UI</font></a><font style="vertical-align: inherit;">（React）并使用</font><strong><font style="vertical-align: inherit;">Webpack</font></strong><font style="vertical-align: inherit;">构建</font><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">渐进式</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Web应用程序</font><font style="vertical-align: inherit;">，如何正确包含Roboto字体，以使该应用程序不依赖于Google服务器，并且字体也可以</font><em><font style="vertical-align: inherit;">脱机</font></em><font style="vertical-align: inherit;">工作</font><font style="vertical-align: inherit;">？</font></font><a href="http://www.material-ui.com/" rel="noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="http://www.material-ui.com/#/get-started/installation" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是引用了</font></font><a href="http://www.google.com/fonts#UsePlace:use/Collection:Roboto:400,300,500" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谷歌的字体页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但明显力量的字体从谷歌服务器上下载。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于Roboto字体，存在</font><font style="vertical-align: inherit;">类似的</font></font><a href="https://github.com/callemall/material-ui/issues/4819" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Material UI问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但仍然依靠Google提供字体文件。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到了一个</font></font><a href="https://www.npmjs.com/package/roboto-fontface" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供Roboto字体文件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><a href="https://www.npmjs.com/package/roboto-fontface" rel="noreferrer"><font style="vertical-align: inherit;">NPM软件包</font></a><font style="vertical-align: inherit;">，但是由于提供了许多样式和字体格式，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何包括这些文件，而且</font><strong><font style="vertical-align: inherit;">我不知道Material UI真正需要哪些样式</font></strong><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">另外，仅通过@import导入这些字体系列似乎存在</font></font><a href="https://github.com/callemall/material-ui/issues/104#issue-50455732" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">性能问题</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么，将</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Roboto文件与我的应用程序</font><font style="vertical-align: inherit;">捆绑在一起的好又简单的解决方案是</font><font style="vertical-align: inherit;">什么？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3455篇《如何在Material UI的webpack构建中包括Roboto字体？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试用npm安装typeface-roboto，但没有用。</font><font style="vertical-align: inherit;">另外，使用材料ui中的CDN无效。</font><font style="vertical-align: inherit;">但是，使用npm安装webfontloader是可行的。</font><font style="vertical-align: inherit;">这是解决方案，首先，</font></font></p>

<pre><code>npm install webfontloader --save
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，从entry.js文件中的webfontloader导入WebFont，例如App.js或index.js</font></font></p>

<pre><code>import WebFont from "webfontloader";<font></font>
WebFont.load({google: {families: ["Roboto:300,400,500"]}});<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
