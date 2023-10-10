---
layout: question
title:  我可以将NextJS放在像localhost / next这样的子文件夹中吗？
date:   2020-03-24T03:17:35.000Z
description: 我尝试从Next.js构建静态文件，但我想将其放在共享主机或本地主机（如localhost / nextweb）的子文件夹中。我试图找到一些示例，但是...
img: 
author: Sam伽罗
category: question
answer: 0
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试从Next.js构建静态文件，但我想将其放在共享主机或本地主机（如localhost / nextweb）的子文件夹中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图找到一些示例，但是我发现仅将NextJS置于根目录中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的next.config.js看起来像</font></font></p>

<pre><code>const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')<font></font>
const { ANALYZE } = process.env<font></font>
module.exports = {<font></font>
  webpack: function (config) {<font></font>
    if (ANALYZE) {<font></font>
      config.plugins.push(new BundleAnalyzerPlugin({<font></font>
        analyzerMode: 'server',<font></font>
        analyzerPort: 8888,<font></font>
        openAnalyzer: true<font></font>
      }))<font></font>
    }<font></font>
<font></font>
    return config<font></font>
  },<font></font>
  exportPathMap: () =&gt; ({<font></font>
    "/": { page: "/" },<font></font>
    "/about": { page: "/about" }<font></font>
  }),<font></font>
  assetPrefix: 'http://localhost/nextweb/'<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我打开某个页面时，它正在工作，但是当我单击链接时，它显示了一个网络请求错误：  </font></font></p>

<blockquote>
  <p><a href="http://localhost/nextweb/_next/a5126d9c-d338-4eee-86ff-f4e6e7dbafa6/page/nextweb/about/index.js" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找不到</font><a href="http://localhost/nextweb/_next/a5126d9c-d338-4eee-86ff-f4e6e7dbafa6/page/nextweb/about/index.js" rel="nofollow noreferrer"><font style="vertical-align: inherit;">http：//localhost/nextweb/_next/a5126d9c-d338-4eee-86ff-f4e6e7dbafa6/page/nextweb/about/index.js</font></a><font style="vertical-align: inherit;"> 404。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但实际文件包含在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">... / page / about / index.js中，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/page/nextweb/about/index.js中</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我该怎么办？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3298篇《我可以将NextJS放在像localhost / next这样的子文件夹中吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
