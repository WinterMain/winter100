---
layout: question
title:  Sass和Compass中的背景图像路径
date:   2020-03-24T11:12:59.000Z
description: 这是在config.rb文件中提到的images_dir = "images"我在我的项目中的图像文件夹中使用2个文件夹来存储图像image...
img: 
author: 蛋蛋
category: question
answer: 0
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是在config.rb文件中提到的</font></font></p>

<pre><code>images_dir = "images"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在我的项目中的图像文件夹中使用2个文件夹来存储图像</font></font></p>

<pre><code>images<font></font>
images/background/<font></font>
images/content/<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><code>images/background/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹中有</font><font style="vertical-align: inherit;">任何图像，</font><font style="vertical-align: inherit;">那么我应该如何在css </font></font><code>background</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和Sass变量中</font><font style="vertical-align: inherit;">添加图像的路径</font><font style="vertical-align: inherit;">？</font></font></strong></p>

<pre><code>$header-img: "sass.gif"; 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font></p>

<pre><code>background-image: url('sass.gif?1327592426');
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及如何摆脱</font></font><code>?1327592426</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从每个背景图像</font><font style="vertical-align: inherit;">自动生成的</font><font style="vertical-align: inherit;">图像？</font></font></strong></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3716篇《Sass和Compass中的背景图像路径》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
