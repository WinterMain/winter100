---
layout: question
title:  警告：生成ENOENT与Grunt sass任务一起使用
date:   2020-04-03T02:44:34.000Z
description: 我最近下载了OSX Yosemite，现在grunt-contrib-sass无法正常工作，并且出现错误：Running "sass dist" (s...
img: 
author: 番长
category: question
answer: 2
tags: MacOS的 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近下载了OSX Yosemite，现在grunt-contrib-sass无法正常工作，并且出现错误：</font></font></p>

<pre><code>Running "sass:dist" (sass) task<font></font>
Warning: spawn ENOENT Use --force to continue.<font></font>
<font></font>
Aborted due to warnings.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不是专家，我是否需要重新安装任何插件或其他工具？</font><font style="vertical-align: inherit;">如果需要，我很乐意提供其他信息。</font><font style="vertical-align: inherit;">谢谢。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在后文的注释中，将其添加为答案。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该错误通常表示未安装Sass。</font><font style="vertical-align: inherit;">运行</font></font><code>gem install sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以安装它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我而言，它一直无法安装，因此运行</font></font><code>gem install sass --debug --backtrace --verbose</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并修复了</font></font><code>no implicit conversion of nil into String (TypeError)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装错误。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我注意到</font></font><code>compass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直接</font><font style="vertical-align: inherit;">运行会</font><font style="vertical-align: inherit;">引发异常，因此我卸载了指南针并重新安装了它（确保删除了上的所有指南针二进制文件</font></font><code>PATH</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），并进行了修复。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
