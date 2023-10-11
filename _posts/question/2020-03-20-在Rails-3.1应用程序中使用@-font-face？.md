---
layout: question
title:  在Rails 3.1应用程序中使用\` font-face？
date:   2020-03-20T05:58:16.000Z
description: 我在使用以下\`font-face声明与Rails 3.1应用程序一起使用时遇到麻烦。我将字体放在Asset Pipeline中的资产文件夹中images，...
img: 
author: LGil
category: question
answer: 2
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在使用以下</font></font><code>@font-face</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">声明与Rails 3.1应用程序一起</font><font style="vertical-align: inherit;">使用时遇到麻烦</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我将字体放在Asset Pipeline中的资产文件夹中</font></font><code>images</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>stylesheets</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font><font style="vertical-align: inherit;">在其旁边的文件夹中命名为“ Fonts”。</font></font><code>javascripts</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我使用的声明（由Font Squirrel生成）。</font></font></p>

<pre><code>@font-face {<font></font>
  font-family: 'ChunkFiveRegular';<font></font>
  src: url('Chunkfive-webfont.eot');<font></font>
  src: url('Chunkfive-webfont.eot?#iefix') format('embedded-opentype'),<font></font>
     url('Chunkfive-webfont.woff') format('woff'),<font></font>
     url('Chunkfive-webfont.ttf') format('truetype'),<font></font>
     url('Chunkfive-webfont.svg#ChunkFiveRegular') format('svg');<font></font>
  font-weight: normal;<font></font>
  font-style: normal;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何人都可以在其Rails 3.1应用程序上成功使用@ font-face吗？</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新资料</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚阅读了该线程</font></font><a href="http://spin.atomicobject.com/2011/09/26/serving-fonts-in-rails-3-1/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://spin.atomicobject.com/2011/09/26/serving-fonts-in-rails-3-1/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">该声明在声明中</font><font style="vertical-align: inherit;">更改</font></font><code>url</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>font-url</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">不幸的是，这似乎也不起作用。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2505篇《在Rails 3.1应用程序中使用\` font-face？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然这很晚，但您可以使用Compass的</font></font><code>+font-face</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">混入来避免所有这些麻烦。</font><font style="vertical-align: inherit;">mixin通过以下方式使您的生活更轻松</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不记得传统字体脸部剔除的可怕警告 </font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它在内部为您处理url_helper和格式声明 </font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">记住起来容易得多 </font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">女士和先生们，以下声明如下： </font></font></p>

    

<pre><code>+font-face("#{$font-name}",<font></font>
  font-files("#{$font-name}.woff", woff, <font></font>
  "#{$fontFileName}.ttf", ttf, <font></font>
  "#{$fontFileName}.svg", svg), "#{$fontFileName}.eot", normal, normal);<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam猪猪</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚在Atomic Object的Spin博客上更新了该文章。</font><font style="vertical-align: inherit;">这是转换后的CSS（您正在查看Sass语法）</font></font></p>

<pre><code>@font-face {<font></font>
  font-family: "Merriweather";<font></font>
  src: url(/assets/merriweather-black-webfont.eot);<font></font>
  src: local("Merriweather Heavy"), local("Merriweather-Heavy"), url(/assets/merriweather-black-webfont.eot?#iefix) format("embedded-opentype"), url(/assets/merriweather-black-webfont.woff) format("woff"), url(/assets/merriweather-black-webfont.ttf) format("truetype"), url(/assets/merriweather-black-webfont.svg#MerriweatherHeavy) format("svg");<font></font>
  font-weight: 900;<font></font>
  font-style: normal;<font></font>
}<font></font>
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
