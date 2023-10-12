---
layout: question
title:  Next.js PWA（Service Worker + Manifest.json）
date:   2020-03-23T06:41:16.000Z
description: 我正在使用Next.js开发服务器端渲染网站，我想使其成为渐进式Web应用程序，但是这个问题我找不到正确实现的方法。当我构建应用程序时，它可以正确地服...
img: 
author: 猴子
category: question
answer: 0
tags: 清单 React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用Next.js开发服务器端渲染网站，我想使其成为渐进式Web应用程序，但是这个问题我找不到正确实现的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我构建应用程序时，它可以正确地服务于服务工作者，但是没有manifest.json，在某些项目示例中，它可以服务manifest.json，但是我在Lighthouse审核中尝试了它，并说 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务工作者未成功提供清单的start_url</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font><a href="https://github.com/zeit/next.js/tree/master/examples/with-sw-precache" rel="noreferrer"><font style="vertical-align: inherit;">带有Service Worker Precache的Create Next App</font></a><font style="vertical-align: inherit;">的示例
 </font></font><a href="https://github.com/zeit/next.js/tree/master/examples/with-sw-precache" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之一</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为问题是start_url是。</font><font style="vertical-align: inherit;">或/而不是有效文件，因为在Next.js中从一开始就没有index.html可以提供服务。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">总而言之，我正在寻找一个使用Next.js将其构建到dist文件夹的示例，当我为其提供服务时，它具有有效的Service Worker和有效的Web Manifest。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2860篇《Next.js PWA（Service Worker + Manifest.json）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
