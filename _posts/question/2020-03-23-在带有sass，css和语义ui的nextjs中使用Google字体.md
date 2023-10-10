---
layout: question
title:  在带有sass，css和语义ui的nextjs中使用Google字体
date:   2020-03-23T14:05:22.000Z
description: 我有一个具有以下配置的next.config.js文件：const withSass = require('\`zeit/next-sass');co...
img: 
author: 泡芙
category: question
answer: 1
tags: css React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个具有以下配置的next.config.js文件：</font></font></p>

<pre><code>const withSass = require('@zeit/next-sass');<font></font>
const withCss = require('@zeit/next-css');<font></font>
<font></font>
module.exports = withSass(withCss({<font></font>
  webpack (config) {<font></font>
    config.module.rules.push({<font></font>
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,<font></font>
      use: {<font></font>
        loader: 'url-loader',<font></font>
        options: {<font></font>
          limit: 100000,<font></font>
          publicPath: './',<font></font>
          outputPath: 'static/',<font></font>
          name: '[name].[ext]'<font></font>
        }<font></font>
      }<font></font>
    })<font></font>
<font></font>
    return config<font></font>
  }<font></font>
}));<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这很棒，因为它运行我的语义ui css文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在我有一个问题。</font><font style="vertical-align: inherit;">我似乎无法成功导入任何Google字体网址。</font><font style="vertical-align: inherit;">我尝试将ttf文件下载到我的文件路径中，并尝试使用@import scss函数引用它。</font><font style="vertical-align: inherit;">但是我得到一个GET </font></font><a href="http://localhost:3000/fonts/Cabin/Cabin-Regular.ttf" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：// localhost：3000 / fonts / Cabin / Cabin-</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Regular.ttf net :: ERR_ABORTED 404（Not Found）错误</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我正在尝试使用Google字体的方法：</font></font></p>

<pre><code>@font-face {<font></font>
  font-family: 'Cabin';<font></font>
  src: url('/fonts/Cabin/Cabin-Regular.ttf')  format('truetype');<font></font>
}<font></font>
<font></font>
$font-size: 100px;<font></font>
.example {<font></font>
  font-size: $font-size;<font></font>
  font-family: 'Cabin', sans-serif;<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我还下载了相关的npm依赖项：</font></font></p>

<pre><code>"@zeit/next-css": "^1.0.1",<font></font>
"@zeit/next-sass": "^1.0.1",<font></font>
"file-loader": "^2.0.0",<font></font>
"next": "^7.0.2",<font></font>
"node-sass": "^4.9.4",<font></font>
"react": "^16.6.0",<font></font>
"react-dom": "^16.6.0",<font></font>
"semantic-ui-css": "^2.4.1",<font></font>
"semantic-ui-react": "^0.83.0",<font></font>
"url-loader": "^1.1.2"<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3123篇《在带有sass，css和语义ui的nextjs中使用Google字体》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿Sam</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我必须将文件放到静态文件夹中才能正常工作，必须是在nextjs中渲染图像和字体的特定设置</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
