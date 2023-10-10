---
layout: question
title:  React-使用cssModules和url-loader的Ne​​xt.js配置
date:   2020-03-24T10:30:08.000Z
description: 我需要配置next.config.js文件，以便同时使用两个不同的加载程序。这是第一个：const withSass = require('\`zeit...
img: 
author: Gil伽罗小宇宙
category: question
answer: 0
tags: JavaScript React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要配置</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">next.config.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，以便同时使用两个不同的加载程序。</font><font style="vertical-align: inherit;">这是第一个：</font></font></p>

<pre><code>const withSass = require('@zeit/next-sass');<font></font>
<font></font>
module.exports = withSass({<font></font>
    cssModules: true,<font></font>
    cssLoaderOptions: {<font></font>
        importLoaders: 1,<font></font>
        localIdentName: "[local]___[hash:base64:5]",<font></font>
    }<font></font>
})<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是第二个：</font></font></p>

<pre><code>const withSass = require('@zeit/next-sass');<font></font>
const withCSS = require('@zeit/next-css');<font></font>
<font></font>
module.exports = withCSS(withSass({<font></font>
    webpack (config, options) {<font></font>
        config.module.rules.push({<font></font>
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,<font></font>
            use: {<font></font>
                loader: 'url-loader',<font></font>
                options: {<font></font>
                    limit: 100000<font></font>
                }<font></font>
            }<font></font>
        })<font></font>
        return config<font></font>
    }<font></font>
}))<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单独地，他们工作很棒！</font><font style="vertical-align: inherit;">但是我无法将它们结合在一条规则中，因此两者可以一起工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢你的帮助！！</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
