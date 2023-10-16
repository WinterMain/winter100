---
layout: question
title:  使用Webpack和Uglify删除console.logs
date:   2020-03-24T03:08:37.000Z
description: 我正在尝试使用Webpack的Uglify插件删除console.logs，但似乎Webpack附带的Uglify插件没有该选项，文档中未提及。我正在...
img: 
author: Pro路易
category: question
answer: 4
tags: reactjs Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试使用Webpack的Uglify插件删除console.logs，但似乎Webpack附带的Uglify插件没有该选项，文档中未提及。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在像这样从webpack初始化uglify： </font></font><code>new webpack.optimize.UglifyJsPlugin()</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的理解是，我可以使用独立的Uglify lib获取所有选项，但是我不知道哪个？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是那</font></font><code>drop_console</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不起作用。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3282篇《使用Webpack和Uglify删除console.logs》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidHarry</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于uglifyjs-webpack-plugin，将选项包装在uglifyOptions对象中： </font></font></p>

<pre><code>    plugins: [<font></font>
    new UglifyJSPlugin({<font></font>
        uglifyOptions: {<font></font>
            compress: {<font></font>
                drop_console: true<font></font>
            }<font></font>
        }<font></font>
    })<font></font>
]<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是Webpack v4的新语法：</font></font></p>

<pre><code>optimization: {<font></font>
  minimizer: [<font></font>
    new UglifyJSPlugin({<font></font>
      uglifyOptions: {<font></font>
        compress: {<font></font>
          drop_console: true<font></font>
        },<font></font>
        output: {<font></font>
          comments: false<font></font>
        }<font></font>
      },<font></font>
    }),<font></font>
  ],<font></font>
},<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我从代码中删除alert（）和console.log（）所做的工作。</font><font style="vertical-align: inherit;">global_defs =&gt;用console.log替换警报，然后drop_console删除所有console.logs，现在我的浏览器控制台中没有任何显示</font></font></p>

<pre><code>     new UglifyJsPlugin({<font></font>
      uglifyOptions: {<font></font>
        compress: {<font></font>
          global_defs: {<font></font>
            "@alert": "console.log",<font></font>
          },<font></font>
          drop_console: true<font></font>
        }<font></font>
      }<font></font>
    }),<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插件版本：</font></font></p>

<blockquote>
<pre><code>"webpack":3.12.0,<font></font>
"webpack-cli": "^3.0.3",<font></font>
"uglifyjs-webpack-plugin": "^1.2.5",<font></font>
</code></pre>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在uglifyjs-webpack-plugin v1.2.6已经发布，我为此使用了最新的文档，因此我想最新的插件也不会有任何问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font></font><code>UglifyJsPlugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们可以处理</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注释，警告，控制台日志，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是在开发模式下删除所有这些并不是一个好主意。</font><font style="vertical-align: inherit;">首先检查是否正在运行</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>prov env or dev env</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果是</font></font><code>prod env</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，那么你可以删除所有这些，就像这样：</font></font></p>

<pre><code>var debug = process.env.NODE_ENV !== "production";<font></font>
<font></font>
plugins: !debug ? [<font></font>
   new webpack.optimize.UglifyJsPlugin({<font></font>
<font></font>
     // Eliminate comments<font></font>
        comments: false,<font></font>
<font></font>
    // Compression specific options<font></font>
       compress: {<font></font>
         // remove warnings<font></font>
            warnings: false,<font></font>
<font></font>
         // Drop console statements<font></font>
            drop_console: true<font></font>
       },<font></font>
    })<font></font>
]<font></font>
: []<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="https://github.com/mishoo/UglifyJS2#compressor-options" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/mishoo/UglifyJS2#compressor-options" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/mishoo/UglifyJS2#compressor-options</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新2019</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
需要立即使用terser插件以在webpack v4中获得ES6支持
 </font></font><a href="https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.js</font></font></strong></p>

<pre><code>module.exports = {<font></font>
  optimization: {<font></font>
    minimizer: [<font></font>
      new TerserPlugin({<font></font>
        sourceMap: true, // Must be set to true if using source-maps in production<font></font>
        terserOptions: {<font></font>
          compress: {<font></font>
            drop_console: true,<font></font>
          },<font></font>
        },<font></font>
      }),<font></font>
    ],<font></font>
  },<font></font>
};<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
