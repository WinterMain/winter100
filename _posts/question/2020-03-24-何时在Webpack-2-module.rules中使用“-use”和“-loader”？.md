---
layout: question
title:  何时在Webpack 2 module.rules中使用“ use”和“ loader”？
date:   2020-03-24T11:19:57.000Z
description: 我正在将当前项目升级到Webpack2，之前它是使用Webpack1的。我研究了一些有关升级的教程，总的来说，我确实了解。我一直遇到的问题是，我不确定...
img: 
author: Mandy
category: question
answer: 2
tags: webpack Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在将当前项目升级到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack2</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">之前</font><font style="vertical-align: inherit;">它是使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack1的</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我研究了一些有关升级的教程，总的来说，我确实了解。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一直遇到的问题是，我不确定在指定模块规则（加载器）时应何时使用“ use”和“ loader”。</font><font style="vertical-align: inherit;">起初，我以为</font></font><code>use</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">取代了</font></font><code>loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我了解这种语法：</font></font></p>

<pre><code>module: {<font></font>
  rules: [{<font></font>
    test: /\.scss$/,<font></font>
    use: [<font></font>
      {<font></font>
        loader: 'postcss-loader',<font></font>
        options: {<font></font>
          plugins: ...<font></font>
        }<font></font>
      },<font></font>
      'sass-loader'<font></font>
    ]<font></font>
  }]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当我使用</font></font><code>ExtractTextPlugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时，似乎不喜欢它</font></font><code>use</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我已经试过了：</font></font></p>

<pre><code>      {<font></font>
        test: /\.scss$/,<font></font>
        use: [<font></font>
          {<font></font>
            loader: ExtractTextPlugin.extract({<font></font>
              fallbackLoader: 'style-loader',<font></font>
              loader: scssLoaders<font></font>
            })<font></font>
          }]<font></font>
      },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><code>scssLoaders</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存在：</font></font></p>

<pre><code>var scssLoaders = [<font></font>
  {<font></font>
    loader: 'css-loader',<font></font>
    options: {<font></font>
      modules: true,<font></font>
      importLoaders: '2',<font></font>
      localIdentName: '[name]__[local]__[hash:base64:5]'<font></font>
    }<font></font>
  },<font></font>
  {<font></font>
    loader: 'postcss-loader'<font></font>
  },<font></font>
  {<font></font>
    loader: 'sass-loader',<font></font>
    options: {<font></font>
      outputStyle: 'expanded',<font></font>
      sourceMap: true,<font></font>
      sourceMapContents: true<font></font>
    }<font></font>
  }<font></font>
];<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在解决其他问题之前，我只会在这里停留。</font><font style="vertical-align: inherit;">有人可以帮忙解释一下我在这里缺少什么吗？</font><font style="vertical-align: inherit;">随意询问您需要帮助的任何其他代码！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">先感谢您。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3731篇《何时在Webpack 2 module.rules中使用“ use”和“ loader”？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaLEY</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><a href="https://webpack.js.org/configuration/module/#module-rules" rel="noreferrer"><code>module.rules</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于装载机。</font><font style="vertical-align: inherit;">将规则指定</font></font><a href="https://webpack.js.org/configuration/module/#rule-loader" rel="noreferrer"><code>loader</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为只是快捷方式</font></font></p>

<pre><code>use: [{loader}]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于插件，请</font></font><a href="https://webpack.js.org/configuration/" rel="noreferrer"><code>plugins</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在配置中</font><font style="vertical-align: inherit;">使用该</font><font style="vertical-align: inherit;">属性。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如</font></font><a href="https://webpack.js.org/guides/migrating/#module-loaders-is-now-module-rules" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack 2迁移教程所</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指出的，两者之间的区别在于，如果我们要使用一组加载程序，则必须使用</font></font><code>use</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果它只是一个加载程序，则必须使用</font></font><code>loader</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>module: {<font></font>
   rules: [<font></font>
      {<font></font>
        test: /\.jsx$/,<font></font>
        loader: "babel-loader", // Do not use "use" here<font></font>
        options: {<font></font>
          // ...<font></font>
        }<font></font>
      },<font></font>
      {<font></font>
        test: /\.less$/,<font></font>
        loader: "style-loader!css-loader!less-loader"<font></font>
        use: [<font></font>
          "style-loader",<font></font>
          "css-loader",<font></font>
          "less-loader"<font></font>
        ]<font></font>
      }<font></font>
    ]<font></font>
  }<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
