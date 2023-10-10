---
layout: question
title:  Webpack 4：mini-css-extract-plugin + sass-loader + splitChunks
date:   2020-03-24T01:55:06.000Z
description: 我有以下示例配置，可在Webpack 4中使用mini-css-extract-plugin：entry  {   a  \['./js/a.js',...
img: 
author: 凯达蒙
category: question
answer: 0
tags: css CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有以下示例配置，可在Webpack 4中使用mini-css-extract-plugin：</font></font></p>

<pre><code>entry: {<font></font>
   a: ['./js/a.js', './scss/a.scss'],<font></font>
   b: ['./js/b.js', './scss/b.scss']<font></font>
},<font></font>
module: {<font></font>
    rules: [<font></font>
       [...],<font></font>
       {<font></font>
        test: /\.(css|sass|scss)$/,<font></font>
        use: [<font></font>
            MiniCssExtractPlugin.loader,<font></font>
            {<font></font>
                loader: 'css-loader',<font></font>
                options: {<font></font>
                    importLoaders: 2,<font></font>
                    sourceMap: true<font></font>
                }<font></font>
            },<font></font>
            {<font></font>
                loader: 'postcss-loader',<font></font>
                options: {<font></font>
                    plugins: () =&gt; [<font></font>
                        require('autoprefixer')<font></font>
                    ],<font></font>
                    sourceMap: true<font></font>
                }<font></font>
            },<font></font>
            {<font></font>
                loader: 'sass-loader',<font></font>
                options: {<font></font>
                    sourceMap: true<font></font>
                }<font></font>
            }<font></font>
        ]<font></font>
},<font></font>
optimization: {<font></font>
    splitChunks: {<font></font>
        cacheGroups: {<font></font>
            js: {<font></font>
                test: /\.js$/,<font></font>
                name: "commons",<font></font>
                chunks: "all",<font></font>
                minChunks: 7,<font></font>
            },<font></font>
            css: {<font></font>
                test: /\.(css|sass|scss)$/,<font></font>
                name: "commons",<font></font>
                chunks: "all",<font></font>
                minChunks: 2,<font></font>
            }<font></font>
        }<font></font>
    }<font></font>
},<font></font>
plugins: [<font></font>
    new MiniCssExtractPlugin({<font></font>
        filename: "dist/[name].css",<font></font>
    }),<font></font>
]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以及以下sass文件：</font></font></p>

<pre><code>// a.scss<font></font>
@import 'libA.scss';<font></font>
@import 'libB.css';<font></font>
[...] <font></font>
<font></font>
// b.scss<font></font>
@import 'libA.scss';<font></font>
@import 'libB.css';<font></font>
[...]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我运行webpack时，</font></font><code>libB.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它没有插入</font></font><code>commons.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">捆绑中</font></font><code>libA.scss</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，每次导入</font></font><code>.css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件都会由splitChunks选项处理（仅</font></font><code>css</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在名称中指定了</font><font style="vertical-align: inherit;">扩展</font><font style="vertical-align: inherit;">名时），而sass导入则不会。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个包含多个sass入口点和许多@import sass组件的项目，我想创建一个共享sass模块的公共包。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
