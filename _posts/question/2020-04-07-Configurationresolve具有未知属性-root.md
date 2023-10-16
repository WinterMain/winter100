---
layout: question
title:  Configuration.resolve具有未知属性“ root”
date:   2020-04-07T03:45:14.000Z
description: 我收到以下错误：  无效的配置对象。已使用与API模式不匹配的配置对象初始化Webpack。-configuration.resolve具有未知属性...
img: 
author: 乐
category: question
answer: 1
tags: node.js Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我收到以下错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无效的配置对象。</font><font style="vertical-align: inherit;">已使用与API模式不匹配的配置对象初始化Webpack。</font><font style="vertical-align: inherit;">-configuration.resolve具有未知属性“ root”。</font><font style="vertical-align: inherit;">这些属性是有效的：object {alias？，aliasFields？，cachePredicate？，descriptionFiles？，forceExtension？，forcedModuleExtension？，extensions，fileSystem？，mainFields，mainFiles？，moduleExtensions？，modules？，plugins？，resolver？，symlinks ？，unsafeCache？，useSyncFileSystemCalls？</font><font style="vertical-align: inherit;">}</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用</font></font><a href="https://webpack.js.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack 2.3.2</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.js</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来像这样：</font></font></p>

<pre><code>module.exports= {<font></font>
  entry:'./public/app.jsx',<font></font>
  output: {<font></font>
    path: __dirname,<font></font>
    filename:'./public/bundle.js'<font></font>
  },<font></font>
  resolve: {<font></font>
    root: __dirname,<font></font>
    alias:{<font></font>
      Mod1: 'public/components/mod1.jsx',<font></font>
      Mod2:'public/components/mod2.jsx',<font></font>
      Mod3: 'public/components/mod3.jsx'<font></font>
    },<font></font>
    extensions: ['*','.js','.jsx']<font></font>
  },<font></font>
  module :{<font></font>
    loaders:[{<font></font>
      loader :'babel-loader',<font></font>
      query :{<font></font>
        presets:['react','es2015','es2017']<font></font>
      },<font></font>
      test:/\.jsx?$/,<font></font>
      exclude:/(node_modules|bower_components)/<font></font>
    }]<font></font>
  }<font></font>
};<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4106篇《Configuration.resolve具有未知属性“ root”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.04.07</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否尝试过删除LINE 8？</font><font style="vertical-align: inherit;">是否通过任何错误？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能已经猜到它在尝试设置无效的属性时抛出错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">配置webpack时，您可能已经遵循了说明。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不用LINE 8试一试，让我知道问题是否仍然存在，我们可以一起解决。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
