---
layout: question
title:  Webpack提取文本Webpack插件和CSS加载程序最小化
date:   2020-04-07T03:45:08.000Z
description: 我在最小化extract-text-webpack-plugin输出的css文件时遇到问题 /\* webpack.config.js \*/...l...
img: 
author: 前端梅
category: question
answer: 2
tags: Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在最小化extract-text-webpack-plugin输出的css文件时遇到问题 </font></font></p>

<pre class="lang-js prettyprint-override"><code>/* webpack.config.js */<font></font>
...<font></font>
loader: [{test: /\.css$/, loader: ExtractTextPlugin.extract('css?minimize')}]<font></font>
...<font></font>
plugins: [new ExtractTextPlugin("styles.css")]<font></font>
...<font></font>
<font></font>
/* test.js */<font></font>
require('./file1.css')<font></font>
</code></pre>

<pre class="lang-css prettyprint-override"><code>/* file1.css */<font></font>
@import './file2.css';<font></font>
body {color: green;}<font></font>
body {font-size: 1rem;}<font></font>
<font></font>
/* file2.css */<font></font>
body {border: 1px solid;}<font></font>
body {background: purple;}<font></font>
<font></font>
/* the output styles.css */<font></font>
body{color:green;font-size:1rem}body{border:1px solid;background:purple}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在生成的styles.css中，有2个body标签。</font><font style="vertical-align: inherit;">缩小似乎是在文件内执行的（在file1.css之内和file2.css之内），但是当两个文件合并并提取到最终的styles.css中时却没有。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在最终的style.css中进行缩小？</font><font style="vertical-align: inherit;">所以输出是</font></font></p>

<pre class="lang-css prettyprint-override"><code>body{color:green;font-size:1rem;border:1px solid;background:purple}
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4105篇《Webpack提取文本Webpack插件和CSS加载程序最小化》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三小卤蛋</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font><font style="vertical-align: inherit;">为解决此确切问题而创建的</font></font><a href="https://github.com/NMFR/optimize-css-assets-webpack-plugin"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">optimize-css-assets-webpack-plugin</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>plugins: [<font></font>
    new ExtractTextPlugin("styles.css"),<font></font>
    new OptimizeCssAssetsPlugin()<font></font>
]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于CSS缩小，您可以将Webpack的CSS加载器与“ minimize”选项一起使用。</font><font style="vertical-align: inherit;">它解决了我的问题：</font></font></p>

<pre><code>webpack.config.js<font></font>
<font></font>
...<font></font>
module: {<font></font>
   rules: [<font></font>
      {<font></font>
         test: /\.css$/,<font></font>
         use: [{<font></font>
            loader: "css-loader",<font></font>
            options: {<font></font>
               minimize: true<font></font>
            }<font></font>
         }<font></font>
      },<font></font>
   ]<font></font>
},<font></font>
...<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
