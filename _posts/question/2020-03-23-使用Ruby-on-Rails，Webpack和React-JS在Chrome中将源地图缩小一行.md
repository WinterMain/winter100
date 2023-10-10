---
layout: question
title:  使用Ruby on Rails，Webpack和React JS在Chrome中将源地图缩小一行
date:   2020-03-23T02:47:47.000Z
description: 我遇到一个问题，inline-source-map当我使用Chrome devtools调试器时，使用配置设置由Webpack生成的源映射关闭了一行。We...
img: 
author: 泡芙
category: question
answer: 0
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到一个问题，</font></font><code>inline-source-map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我使用Chrome devtools调试器时，使用配置设置</font><font style="vertical-align: inherit;">由Webpack生成的源映射</font><font style="vertical-align: inherit;">关闭了一行。</font><font style="vertical-align: inherit;">Webpack是在Ruby on Rails应用程序中设置的，以生成由几十个模块组成的串联的，最小化的JavaScript文件。</font><font style="vertical-align: inherit;">这些模块中的大多数是ReactJS组件，由</font></font><code>jsx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">加载器</font><font style="vertical-align: inherit;">进行解析</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">然后，Webpack的输出</font></font><code>application.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与gems生成的其他一些JavaScript库一起</font><font style="vertical-align: inherit;">包含在</font><font style="vertical-align: inherit;">文件中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我使用时</font></font><code>eval-source-map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，没有问题。</font><font style="vertical-align: inherit;">关于使用use的某些事情</font></font><code>inline-source-map</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会使行号被一甩掉。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查不是React组件的JavaScript仍然存在此问题，因此我认为它与jsx的使用无关。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
