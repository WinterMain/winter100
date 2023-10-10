---
layout: question
title:  如何使用prefetchPlugin和分析工具优化webpack的构建时间？
date:   2020-03-23T02:47:39.000Z
description: 先前的研究：正如webpack的Wiki所说，可以使用分析工具来优化构建性能：  来自：https   //github.com/webpack...
img: 
author: 泡芙番长
category: question
answer: 0
tags: optimization Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">先前的研究：</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如webpack的Wiki所说，可以使用分析工具来优化构建性能：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自：</font><a href="https://github.com/webpack/docs/wiki/build-performance#hints-from-build-stats" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/webpack/docs/wiki/build-performance#hints-from-build-stats" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/webpack/docs/wiki/build-performance#hints-from-build-stats</font></font></a></p>
  
  <h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建造统计提示</font></font></h2>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个</font></font><a href="http://webpack.github.io/analyse" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分析工具</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以可视化您的构建，并</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供一些提示，说明如何优化构建大小和构建性能</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过运行webpack --profile --json-stats.json来生成所需的JSON文件</font></font></p>
</blockquote>

<p><br></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我生成了stats文件（</font></font><a href="https://www.dropbox.com/s/xrxq0v2jt7lyaw4/stats.json?dl=0" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可在此处获得</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），并将其上传到webpack的分析工具，</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并在“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提示”</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标签</font><font style="vertical-align: inherit;">下</font><font style="vertical-align: inherit;">告诉我要使用prefetchPlugin：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自：</font><a href="http://webpack.github.io/analyse/#hints" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://webpack.github.io/analyse/#hints" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//webpack.github.io/analyse/#hints</font></font></a></p>
  
  <h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">长模块构建链</font></font></h2>
  
  <p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用预取</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来提高构建性能。</font><font style="vertical-align: inherit;">从</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font><strong><font style="vertical-align: inherit;">中间</font></strong><font style="vertical-align: inherit;">预取模块</font><font style="vertical-align: inherit;">。</font></font></p>
  
  <p><a href="https://www.samyoc.com//uploads/users/24606/images/thumbnails/1584931658901.png" data-src="https://www.samyoc.com//uploads/users/24606/images/1584931658901.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/6x81E.png" alt=""></a></p>
</blockquote>

<p><br></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我从内向外挖掘网络，找到prefechPlugin上唯一可用的文档是这样的：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自：</font><a href="https://webpack.js.org/plugins/prefetch-plugin/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://webpack.js.org/plugins/prefetch-plugin/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//webpack.js.org/plugins/prefetch-plugin/</font></font></a></p>
  
  <h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">预取插件</font></font></h2>
  
  <p><code>new webpack.PrefetchPlugin([context], request)</code></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对普通模块的请求，该请求甚至在需求发生之前就已解决和构建。</font><font style="vertical-align: inherit;">这样可以提高性能。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先尝试对构建进行概要分析，以确定巧妙的预取点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。
  </font></font><br></p>
</blockquote>

<hr>

<p><br></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题：</font></font></h1>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何正确使用prefetchPlugin？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">什么是将其与“分析”工具一起使用的正确工作流程？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我怎么知道prefetchPlugin是否有效？</font><font style="vertical-align: inherit;">我该如何测量？</font></font></li>
<li><font style="vertical-align: inherit;"></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从链的中间预取模块</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意味着什么</font><font style="vertical-align: inherit;">？</font></font></li>
</ul>

<p>I'll really appreciate some examples</p>

<p>Please help me make this question a valuable resource for the next developer who wants to use the prefechPlugin and the Analyse tools.
Thank you.</p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2684篇《如何使用prefetchPlugin和分析工具优化webpack的构建时间？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
