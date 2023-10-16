---
layout: question
title:  我们为什么要在字体中包含ttf，eot，woff，svg ...
date:   2020-03-23T13:22:50.000Z
description: 在CSS3 font-face，有包括如多发性字体类型ttf，eot，woff，svg和cff。我们为什么要使用所有这些类型？如果它们专用于不同的...
img: 
author: 十三西门
category: question
answer: 2
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CSS3</font></font></strong> <code>font-face</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，有包括如多发性字体类型</font></font><code>ttf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>eot</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>woff</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>svg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>cff</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们为什么要使用所有这些类型？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果它们专用于不同的浏览器，为什么它们的数量大于主要Web浏览器的数量？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3064篇《我们为什么要在字体中包含ttf，eot，woff，svg ...》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome，Opera和Firefox支持基于Brotli压缩算法的WOFF 2.0和对WOFF 1.0的其他改进，使文件大小减少了30％以上。</font></font></p>

<p><a href="http://en.wikipedia.org/wiki/Web_Open_Font_Format" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://en.wikipedia.org/wiki/Web_Open_Font_Format </font></font></a>
<a href="http://en.wikipedia.org/wiki/Brotli" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://en.wikipedia.org/wiki/Brotli</font></font></a></p>

<p><a href="http://sth.name/2014/09/03/Speed-up-webfonts/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://sth.name/2014/09/03/Speed-up-webfonts/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供了有关如何使用它的示例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，您将一个src网址添加到woff2文件中并指定woff2格式。</font><font style="vertical-align: inherit;">在woff格式之前使用此格式很重要：浏览器将使用它支持的第一种格式。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯泡芙JinJin</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Woff是TrueType-OpenType字体的压缩（压缩）形式。</font><font style="vertical-align: inherit;">它很小，可以像图形文件一样通过网络传送。</font><font style="vertical-align: inherit;">最重要的是，通过这种方式可以完全保留字体，包括几乎没有人关注的渲染规则表，因为他们仅使用拉丁脚本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看一下[删除无效网址]。</font><font style="vertical-align: inherit;">您看到的字体是实验性网络提供的smartfont（woff），它具有成千上万个组合的字符，可以形成复杂的形状。</font><font style="vertical-align: inherit;">基础文本是罗马化的Singhala的简单拉丁代码。</font><font style="vertical-align: inherit;">（复制并粘贴到记事本中查看）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只有woff可以做到这一点，因为没有人拥有此字体，但是在任何地方（Mac，Win，Linux甚至是除IE之外，所有浏览器都可以在智能手机上看到它），但IE除外。IE不完全支持开放类型。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
