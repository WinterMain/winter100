---
layout: question
title:  如何在PHPStorm IDE中使用SCSS File Watcher缩小CSS
date:   2020-03-23T01:34:35.000Z
description: 有没有一种方法可以配置SASS FileWatcher，以便构建Minified CSS？我目前已配置SASS + YUI Compressor来完成...
img: 
author: 猴子
category: question
answer: 2
tags: SASS CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以配置SASS FileWatcher，以便构建Minified CSS？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我目前已配置SASS + YUI Compressor来完成此操作，但如果可能，我想使用纯SASS进行此操作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是两种配置的屏幕截图：</font></font></p>

<p><a href="http://img109.imageshack.us/img109/2613/0hdj.png"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">萨斯</font></font></a></p>

<p><a href="http://img194.imageshack.us/img194/8789/i4ve.png"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">YUI Compressor CSS</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提前致谢。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2601篇《如何在PHPStorm IDE中使用SCSS File Watcher缩小CSS》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实现此目标的最快方法可能是使用前面的注释中提到的压缩选项作为参数。</font><font style="vertical-align: inherit;">在PHPStorm中进行配置的最快方法如下：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">去 </font></font><code>File &gt; Settings</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内部</font></font><code>Project Settings</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择</font></font><code>File Watchers</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该已经在此处创建了一个SCSS监视程序（如果启用了SCSS监视插件，则PHPStorm会在打开新的.scss文件时提示您创建一个监视程序。）否则，请启用它（有关</font></font><a href="http://www.jetbrains.com/phpstorm/webhelp/transpiling-sass-less-and-scss-to-css.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">官方</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">内容的更多信息</font><a href="http://www.jetbrains.com/phpstorm/webhelp/transpiling-sass-less-and-scss-to-css.html" rel="noreferrer"><font style="vertical-align: inherit;">文档</font></a><font style="vertical-align: inherit;">，），然后按“ +”符号创建新的观察者。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">双击观察者名称以访问其配置。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在该</font></font><code>Arguments</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">行中，确保添加</font></font><code>--style compressed</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击确定，完成</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此图显示了该配置的外观：</font></font></p>

<p><img src="https://i.imgur.com/e4fKqdH.png" alt="PHPStorm中的压缩SCSS设置"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从那时起，您的.css输出文件将被压缩。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西樱</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font><font style="vertical-align: inherit;">在Linux（Arch）下</font><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sassc</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以用作Arguments：</font></font></p>

<pre><code>-t compressed -m auto $FileNameWithoutExtension$.scss $FileNameWithoutExtension$.min.css
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
