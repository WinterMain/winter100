---
layout: question
title:  动态添加图像React Webpack
date:   2020-03-16T02:04:25.000Z
description: 我一直在尝试找出如何通过React和Webpack动态添加图像。我在src / images下有一个图像文件夹，  在src / components /...
img: 
author: Eva斯丁
category: question
answer: 0
tags: React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在尝试找出如何通过React和Webpack动态添加图像。</font><font style="vertical-align: inherit;">我在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">src / images</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下有一个图像文件夹，</font><font style="vertical-align: inherit;">  在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">src / components / index</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下有一个组件</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我正在将url-loader和以下配置用于webpack</font></font></p>

<pre><code>    {<font></font>
      test: /\.(png|jpg|)$/,<font></font>
      loader: 'url-loader?limit=200000'<font></font>
    }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在组件内，我知道可以</font><font style="vertical-align: inherit;">在创建组件之前在文件顶部为特定图像</font><font style="vertical-align: inherit;">添加</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">require（image_path）</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但我想使该组件通用，并使其具有一个属性，该属性具有从中传递的图像的路径父组件。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试过的是：</font></font></p>

<pre><code>&lt;img src={require(this.props.img)} /&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于实际属性，我已经尝试了几乎所有我能想到的从项目根目录，反应应用程序根目录以及组件本身到图像的路径。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件系统 </font></font></p>

<pre><code>|-- src<font></font>
|   ` app.js<font></font>
|   `--images<font></font>
|      ` image.jpg<font></font>
|      ` image.jpg<font></font>
|   `-- components<font></font>
|      `parent_component.js<font></font>
|      `child_component.js<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">父组件基本上只是一个容纳子对象倍数的容器，因此...</font></font></p>

<pre><code>&lt;ChildComponent img=data.img1 /&gt;<font></font>
&lt;ChildComponent img=data.img2 /&gt;<font></font>
etc....<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么方法可以使用react和webpack以及url-loader来执行此操作，还是我走了一条错误的道路来实现这一目标？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1657篇《动态添加图像React Webpack》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
