---
layout: question
title:  Webpack对XX个隐藏模块的含义是什么
date:   2020-03-23T06:34:41.000Z
description: 我一直在使用webpack，在构建期间，我看到它的输出： + 27 hidden modules。这是什么意思？是否在不需要它们的情况下检测到我正在使用...
img: 
author: 路易达蒙
category: question
answer: 1
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直在使用webpack，在构建期间，我看到它的输出：
 </font></font><code>+ 27 hidden modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这是什么意思？</font><font style="vertical-align: inherit;">是否在不需要它们的情况下检测到我正在使用的全局常量？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2844篇《Webpack对XX个隐藏模块的含义是什么》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><a href="https://github.com/webpack/webpack/commit/992231a1c82f698d37f8b619f59a78099db2293e"><code>["node_modules", "bower_components", "jam", "components"]</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认情况下，</font><font style="vertical-align: inherit;">Webpack隐藏来自</font><font style="vertical-align: inherit;">控制台输出中的</font><font style="vertical-align: inherit;">文件夹的模块</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这有助于您将精力集中在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块上，</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是依赖项上。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>--display-modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数</font><font style="vertical-align: inherit;">显示它们</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
