---
layout: question
title:  通过Assets Pipeline，Rails 3.1 rc1携带Sass变量
date:   2020-03-24T06:12:32.000Z
description: 我最近用3.1 rc1分支了我的Rails 3.0项目之一，以尝试新的资产管道。在进入3.1之前，我一直在项目中使用Sass，所以我一直在一个单独的配置文...
img: 
author: 神奇前端Sam
category: question
answer: 2
tags: ruby-on-rails CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近用3.1 rc1分支了我的Rails 3.0项目之一，以尝试新的资产管道。</font><font style="vertical-align: inherit;">在进入3.1之前，我一直在项目中使用Sass，所以我一直在一个单独的配置文件中设置一些变量和函数，并让我所有其他sass文件在第一行导入该文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在样式表中不要重复一些颜色代码和一般几何图形，这一直很好。</font><font style="vertical-align: inherit;">现在，新的Assets Pipeline存在问题，因为据我所知，它将“ .css.sass”文件转换为原始CSS，然后再将其附加到其余代码中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果我在“ application.css”中指定：</font></font></p>

<pre><code>/*<font></font>
 *= require ./configure<font></font>
 *= require ./what_ever_other_files_i_want_to_import<font></font>
*/<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我收到如下错误：</font></font></p>

<pre><code>Sass::SyntaxError<font></font>
    Undefined variable: "$interactive".<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我尝试从以下位置访问文件： </font></font><code>http://localhost:3000/assets/application.css</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有任何想法吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3351篇《通过Assets Pipeline，Rails 3.1 rc1携带Sass变量》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Davaid</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Sass支持</font></font><a href="http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#partials" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Partials</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这样，您可以将单独的配置包含在__configuration.sass_中，并使用</font></font></p>

<pre><code>@import "configuration";
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从您的主要sass文件中。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，我发现SASS变量是特定于页面的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要在所有文件中携带变量，请</font></font><code>*= require_tree .</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从application.css.scss文件中</font><font style="vertical-align: inherit;">删除该 
 </font><font style="vertical-align: inherit;">行，并用</font></font><code>@import "layout.css.scss";</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">伪指令</font><font style="vertical-align: inherit;">替换</font><font style="vertical-align: inherit;">以手动导入每个sass文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是的，您必须@import每个文件</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
