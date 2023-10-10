---
layout: question
title:  使用babel和webpack时如何生成源地图？
date:   2020-05-28T07:00:07.000Z
description: 我是webpack的新手，我需要进行一些设置来生成Sourcemap。我正在webpack serve从命令行运行，该命令行已成功编译。但我确实需要sou...
img: 
author: Vicky
category: question
answer: 2
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是webpack的新手，我需要进行一些设置来生成Sourcemap。</font><font style="vertical-align: inherit;">我正在</font></font><code>webpack serve</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从命令行</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">，该命令行已成功编译。</font><font style="vertical-align: inherit;">但我确实需要sourcemap。</font><font style="vertical-align: inherit;">这是我的</font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> webpack </span><span class="pun">=</span><span class="pln"> require</span><span class="pun">(</span><span class="str">'webpack'</span><span class="pun">);</span><span class="pln">

module</span><span class="pun">.</span><span class="pln">exports </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">

  output</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    filename</span><span class="pun">:</span><span class="pln"> </span><span class="str">'main.js'</span><span class="pun">,</span><span class="pln">
    publicPath</span><span class="pun">:</span><span class="pln"> </span><span class="str">'/assets/'</span><span class="pln">
  </span><span class="pun">},</span><span class="pln">

  cache</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln">
  debug</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln">
  devtool</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln">
  entry</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="pln">
      </span><span class="str">'webpack/hot/only-dev-server'</span><span class="pun">,</span><span class="pln">
      </span><span class="str">'./src/components/main.js'</span><span class="pln">
  </span><span class="pun">],</span><span class="pln">

  stats</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    colors</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln">
    reasons</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln">
  </span><span class="pun">},</span><span class="pln">

  resolve</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    extensions</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="str">''</span><span class="pun">,</span><span class="pln"> </span><span class="str">'.js'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'.jsx'</span><span class="pun">],</span><span class="pln">
    alias</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      </span><span class="str">'styles'</span><span class="pun">:</span><span class="pln"> __dirname </span><span class="pun">+</span><span class="pln"> </span><span class="str">'/src/styles'</span><span class="pun">,</span><span class="pln">
      </span><span class="str">'mixins'</span><span class="pun">:</span><span class="pln"> __dirname </span><span class="pun">+</span><span class="pln"> </span><span class="str">'/src/mixins'</span><span class="pun">,</span><span class="pln">
      </span><span class="str">'components'</span><span class="pun">:</span><span class="pln"> __dirname </span><span class="pun">+</span><span class="pln"> </span><span class="str">'/src/components/'</span><span class="pun">,</span><span class="pln">
      </span><span class="str">'stores'</span><span class="pun">:</span><span class="pln"> __dirname </span><span class="pun">+</span><span class="pln"> </span><span class="str">'/src/stores/'</span><span class="pun">,</span><span class="pln">
      </span><span class="str">'actions'</span><span class="pun">:</span><span class="pln"> __dirname </span><span class="pun">+</span><span class="pln"> </span><span class="str">'/src/actions/'</span><span class="pln">
    </span><span class="pun">}</span><span class="pln">
  </span><span class="pun">},</span><span class="pln">
  module</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    preLoaders</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[{</span><span class="pln">
      test</span><span class="pun">:</span><span class="pln"> </span><span class="str">/\.(js|jsx)$/</span><span class="pun">,</span><span class="pln">
      exclude</span><span class="pun">:</span><span class="pln"> </span><span class="str">/node_modules/</span><span class="pun">,</span><span class="pln">
      loader</span><span class="pun">:</span><span class="pln"> </span><span class="str">'jsxhint'</span><span class="pln">
    </span><span class="pun">}],</span><span class="pln">
    loaders</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[{</span><span class="pln">
      test</span><span class="pun">:</span><span class="pln"> </span><span class="str">/\.(js|jsx)$/</span><span class="pun">,</span><span class="pln">
      exclude</span><span class="pun">:</span><span class="pln"> </span><span class="str">/node_modules/</span><span class="pun">,</span><span class="pln">
      loader</span><span class="pun">:</span><span class="pln"> </span><span class="str">'react-hot!babel-loader'</span><span class="pln">
    </span><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      test</span><span class="pun">:</span><span class="pln"> </span><span class="str">/\.sass/</span><span class="pun">,</span><span class="pln">
      loader</span><span class="pun">:</span><span class="pln"> </span><span class="str">'style-loader!css-loader!sass-loader?outputStyle=expanded&amp;indentedSyntax'</span><span class="pln">
    </span><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      test</span><span class="pun">:</span><span class="pln"> </span><span class="str">/\.scss/</span><span class="pun">,</span><span class="pln">
      loader</span><span class="pun">:</span><span class="pln"> </span><span class="str">'style-loader!css!sass'</span><span class="pln">
    </span><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
      test</span><span class="pun">:</span><span class="pln"> </span><span class="str">/\.(png|jpg|woff|woff2)$/</span><span class="pun">,</span><span class="pln">
      loader</span><span class="pun">:</span><span class="pln"> </span><span class="str">'url-loader?limit=8192'</span><span class="pln">
    </span><span class="pun">}]</span><span class="pln">
  </span><span class="pun">},</span><span class="pln">

  plugins</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="pln">
    </span><span class="kwd">new</span><span class="pln"> webpack</span><span class="pun">.</span><span class="typ">HotModuleReplacementPlugin</span><span class="pun">(),</span><span class="pln">
    </span><span class="kwd">new</span><span class="pln"> webpack</span><span class="pun">.</span><span class="typ">NoErrorsPlugin</span><span class="pun">()</span><span class="pln">
  </span><span class="pun">]</span><span class="pln">

</span><span class="pun">};</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我真的是Webpack的新手，尽管我不确定这个问题是针对什么的，但是文档并没有真正帮助。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">千羽</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Webpack 2上，我尝试了所有12个devtool选项。</font><font style="vertical-align: inherit;">以下选项链接到控制台中的原始文件并保留行号。</font><font style="vertical-align: inherit;">请参阅以下有关re：行的注释。</font></font></p>

<p><a href="https://webpack.js.org/configuration/devtool" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://webpack.js.org/configuration/devtool</font></font></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">devtool最佳开发者选项</font></font></strong></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">                                build   rebuild      quality                       look
</span><span class="kwd">eval</span><span class="pun">-</span><span class="pln">source</span><span class="pun">-</span><span class="pln">map                 slow    pretty fast  original source               worst
</span><span class="kwd">inline</span><span class="pun">-</span><span class="pln">source</span><span class="pun">-</span><span class="pln">map               slow    slow         original source               medium
cheap</span><span class="pun">-</span><span class="pln">module</span><span class="pun">-</span><span class="kwd">eval</span><span class="pun">-</span><span class="pln">source</span><span class="pun">-</span><span class="pln">map    medium  fast         original source </span><span class="pun">(</span><span class="pln">lines only</span><span class="pun">)</span><span class="pln">  worst
</span><span class="kwd">inline</span><span class="pun">-</span><span class="pln">cheap</span><span class="pun">-</span><span class="pln">module</span><span class="pun">-</span><span class="pln">source</span><span class="pun">-</span><span class="pln">map  medium  pretty slow  original source </span><span class="pun">(</span><span class="pln">lines only</span><span class="pun">)</span><span class="pln">  best</span></code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅行</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">源映射简化为每行一个映射。</font><font style="vertical-align: inherit;">这通常意味着每个语句只有一个映射（假设您是通过这种方式编写的）。</font><font style="vertical-align: inherit;">这样可以防止您在语句级别上调试执行以及在行的列上设置断点。</font><font style="vertical-align: inherit;">不可能与最小化结合，因为最小化器通常只发出一条线。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复习此</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在一个大项目中，我发现... eval-source-map的重建时间为〜3.5s ... inline-source-map的重建时间为〜7s</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">杜大爷</span>
            <span class="discuss-time">2020.05.28</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许其他人在某一时刻有这个问题。</font><font style="vertical-align: inherit;">如果使用</font></font><code>UglifyJsPlugin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">in </font></font><code>webpack 2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则需要显式指定</font></font><code>sourceMap</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志。</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">new</span><span class="pln"> webpack</span><span class="pun">.</span><span class="pln">optimize</span><span class="pun">.</span><span class="typ">UglifyJsPlugin</span><span class="pun">({</span><span class="pln"> sourceMap</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pln"> </span><span class="pun">})</span></code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
