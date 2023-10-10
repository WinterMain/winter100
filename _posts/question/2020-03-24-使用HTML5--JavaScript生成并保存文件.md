---
layout: question
title:  使用HTML5 / JavaScript生成并保存文件
date:   2020-03-24T02:47:02.000Z
description: 我最近一直在摆弄WebGL，并让Collada阅读器工作。问题是它的运行速度非常慢（Collada是一种非常冗长的格式），因此我将开始将文件转换为更易于使...
img: 
author: 斯丁前端
category: question
answer: 2
tags: JavaScript HTML
topic: HTML
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近一直在摆弄WebGL，并让Collada阅读器工作。</font><font style="vertical-align: inherit;">问题是它的运行速度非常慢（Collada是一种非常冗长的格式），因此我将开始将文件转换为更易于使用的格式（可能是JSON）。</font><font style="vertical-align: inherit;">我已经有了使用JavaScript解析文件的代码，因此我也可以将其用作导出器！</font><font style="vertical-align: inherit;">问题正在保存。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我知道我可以解析文件，将结果发送到服务器，然后让浏览器从服务器请求文件下载作为下载。</font><font style="vertical-align: inherit;">但是实际上，服务器与该特定过程无关，那么为什么要参与其中呢？</font><font style="vertical-align: inherit;">我已经在内存中保存了所需文件的内容。</font><font style="vertical-align: inherit;">有什么办法可以使用户使用纯JavaScript进行下载？</font><font style="vertical-align: inherit;">（我对此表示怀疑，但也可能会问...）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要明确的是：我不会在用户不知情的情况下访问文件系统！</font><font style="vertical-align: inherit;">用户将提供一个文件（可能通过拖放），脚本将转换文件在内存中的位置，并提示用户下载结果。</font><font style="vertical-align: inherit;">就浏览器而言，所有这些都应该是“安全”的活动。</font></font></p>

<p><b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[编辑]：</font></font></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我没有提前提到它，所以回答“ Flash”的海报是足够有效的，但是我正在做的部分工作是试图强调使用纯HTML5可以完成的工作...因此Flash是就我而言 </font><font style="vertical-align: inherit;">（尽管对于使用“真实” Web应用程序的任何人来说，这都是一个完全正确的答案。）在这种情况下，除非我不想让服务器参与其中，否则看起来我很不走运。</font><font style="vertical-align: inherit;">不管怎么说，还是要谢谢你！</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3250篇《使用HTML5 / JavaScript生成并保存文件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看一下Doug Neiner的</font></font><a href="https://github.com/dcneiner/Downloadify" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Downloadify</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它是基于Flash的JavaScript接口。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Downloadify是一个很小的JavaScript + Flash库，可在浏览器中即时生成和保存文件，而无需服务器交互。 </font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">HTML5定义了一种</font></font><code>window.saveAs(blob, filename)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法。</font><font style="vertical-align: inherit;">目前没有任何浏览器支持。</font><font style="vertical-align: inherit;">但是，有一个名为</font></font><a href="http://eligrey.com/blog/post/saving-generated-files-on-the-client-side" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">FileSaver.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的兼容性库</font><font style="vertical-align: inherit;">，可以将该功能添加到大多数现代浏览器（包括Internet Explorer 10+）中。</font><font style="vertical-align: inherit;">Internet Explorer 10支持一种</font></font><code>navigator.msSaveBlob(blob, filename)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法（</font></font><a href="http://msdn.microsoft.com/en-us/library/windows/apps/hh441122.aspx" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MSDN</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），该方法在FileSaver.js中用于Internet Explorer支持。</font></font></p>

<p>I wrote a <a href="http://hackworthy.blogspot.com/2012/05/savedownload-data-generated-in.html" rel="noreferrer">blog posting</a> with more details about this problem.</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
