---
layout: question
title:  生成nuxt.js应用程序以在Web服务器上的子目录中工作
date:   2020-03-23T06:48:55.000Z
description: 我想将静态nuxt.js应用程序（使用构建nuxt generate）部署到Web服务器的子目录中。dist默认情况下，nuxt将生成的文件放在目录中：...
img: 
author: DavaidTony宝儿
category: question
answer: 0
tags: vue.js Vue.js
topic: Vue.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想将静态nuxt.js应用程序（使用构建</font></font><code>nuxt generate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">部署</font><font style="vertical-align: inherit;">到Web服务器的子目录中。</font></font><code>dist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，</font><font style="vertical-align: inherit;">nuxt将生成的文件放在</font><font style="vertical-align: inherit;">目录中：</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/6920/images/thumbnails/1584946007694.png" data-src="https://www.samyoc.com//uploads/users/6920/images/1584946007694.png" rel="noreferrer"><img src="https://i.stack.imgur.com/2EFOb.png" alt="默认输出"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我</font><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">文件夹</font><font style="vertical-align: inherit;">的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">父目录</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上启动Web服务器</font></font><code>dist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使用以下命令打开页面：</font></font></p>

<p><code>http://localhost:34360/dist/</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该站点（未成功）尝试从域根目录加载脚本文件：</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/6920/images/thumbnails/1584946007700.png" data-src="https://www.samyoc.com//uploads/users/6920/images/1584946007700.png" rel="noreferrer"><img src="https://i.stack.imgur.com/tHjDy.png" alt="404默认"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试</font></font><code>publicPath</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在nuxt配置中</font><font style="vertical-align: inherit;">设置</font><font style="vertical-align: inherit;">属性：</font></font></p>

<pre><code>build: {<font></font>
  publicPath: '/dist/'<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该应用程序编译为：</font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/6920/images/thumbnails/1584946007702.png" data-src="https://www.samyoc.com//uploads/users/6920/images/1584946007702.png" rel="noreferrer"><img src="https://i.stack.imgur.com/yNIaf.png" alt="使用publicPath输出"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，nuxt将脚本文件下移一层（/ dist / dist），然后再次在根目录下进行搜索（/ dist），因此仍然找不到文件 </font></font></p>

<p><a href="https://www.samyoc.com//uploads/users/6920/images/thumbnails/1584946007704.png" data-src="https://www.samyoc.com//uploads/users/6920/images/1584946007704.png" rel="noreferrer"><img src="https://i.stack.imgur.com/kwEF0.png" alt="公共路径错误"></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论我将其放在服务器上的哪个目录中，如何生成该站点，以便加载脚本和资产并且该站点是自包含的？</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该问题已</font></font><a href="https://github.com/nuxt/nuxt.js/issues/2021" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在GitHub上讨论，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但建议的提示（使用publicPath）不起作用，如上所示。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旁注：我不想指定publicPath绝对值（即</font></font><code>http://localhost:8080/dist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），它可以工作，但会带来新的问题。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2876篇《生成nuxt.js应用程序以在Web服务器上的子目录中工作》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
