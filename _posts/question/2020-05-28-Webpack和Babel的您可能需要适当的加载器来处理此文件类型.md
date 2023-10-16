---
layout: question
title:  Webpack和Babel的“您可能需要适当的加载器来处理此文件类型”
date:   2020-05-28T02:09:53.000Z
description: 我正在尝试将Webpack与Babel一起使用来编译ES6资产，但是却收到以下错误消息：You may need an appropriate loa...
img: 
author: 飞云
category: question
answer: 0
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试将Webpack与Babel一起使用来编译ES6资产，但是却收到以下错误消息：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="typ">You</span><span class="pln"> may need an appropriate loader to handle </span><span class="kwd">this</span><span class="pln"> file type</span><span class="pun">.</span><span class="pln">
</span><span class="pun">|</span><span class="pln"> </span><span class="kwd">import</span><span class="pln"> </span><span class="typ">React</span><span class="pln"> </span><span class="kwd">from</span><span class="pln"> </span><span class="str">'react'</span><span class="pun">;</span><span class="pln">
</span><span class="pun">|</span><span class="pln"> </span><span class="com">/*
| import { render } from 'react-dom'</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的Webpack配置的样子：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> path </span><span class="pun">=</span><span class="pln"> require</span><span class="pun">(</span><span class="str">'path'</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> webpack </span><span class="pun">=</span><span class="pln"> require</span><span class="pun">(</span><span class="str">'webpack'</span><span class="pun">);</span><span class="pln">

module</span><span class="pun">.</span><span class="pln">exports </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  entry</span><span class="pun">:</span><span class="pln"> </span><span class="str">'./index'</span><span class="pun">,</span><span class="pln">
  output</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    path</span><span class="pun">:</span><span class="pln"> path</span><span class="pun">.</span><span class="pln">join</span><span class="pun">(</span><span class="pln">__dirname</span><span class="pun">,</span><span class="pln"> </span><span class="str">'dist'</span><span class="pun">),</span><span class="pln">
    filename</span><span class="pun">:</span><span class="pln"> </span><span class="str">'bundle.js'</span><span class="pun">,</span><span class="pln">
    publicPath</span><span class="pun">:</span><span class="pln"> </span><span class="str">'/dist/'</span><span class="pln">
  </span><span class="pun">},</span><span class="pln">
  module</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    loaders</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="pln">
      </span><span class="pun">{</span><span class="pln">
        test</span><span class="pun">:</span><span class="pln"> </span><span class="str">/\.jsx?$/</span><span class="pun">,</span><span class="pln">
        loader</span><span class="pun">:</span><span class="pln"> </span><span class="str">'babel-loader'</span><span class="pun">,</span><span class="pln">
        exclude</span><span class="pun">:</span><span class="pln"> </span><span class="str">/node_modules/</span><span class="pln">
      </span><span class="pun">}</span><span class="pln">
    </span><span class="pun">]</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是利用Webpack的中间件步骤：</font></font></p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="kwd">var</span><span class="pln"> webpack </span><span class="pun">=</span><span class="pln"> require</span><span class="pun">(</span><span class="str">'webpack'</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> webpackDevMiddleware </span><span class="pun">=</span><span class="pln"> require</span><span class="pun">(</span><span class="str">'webpack-dev-middleware'</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> config </span><span class="pun">=</span><span class="pln"> require</span><span class="pun">(</span><span class="str">'./webpack.config'</span><span class="pun">);</span><span class="pln">

</span><span class="kwd">var</span><span class="pln"> express </span><span class="pun">=</span><span class="pln"> require</span><span class="pun">(</span><span class="str">'express'</span><span class="pun">);</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> app </span><span class="pun">=</span><span class="pln"> express</span><span class="pun">();</span><span class="pln">
</span><span class="kwd">var</span><span class="pln"> port </span><span class="pun">=</span><span class="pln"> </span><span class="lit">3000</span><span class="pun">;</span><span class="pln">

</span><span class="kwd">var</span><span class="pln"> compiler </span><span class="pun">=</span><span class="pln"> webpack</span><span class="pun">(</span><span class="pln">config</span><span class="pun">);</span><span class="pln">
app</span><span class="pun">.</span><span class="pln">use</span><span class="pun">(</span><span class="pln">webpackDevMiddleware</span><span class="pun">(</span><span class="pln">compiler</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  noInfo</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln">
  publicPath</span><span class="pun">:</span><span class="pln"> config</span><span class="pun">.</span><span class="pln">output</span><span class="pun">.</span><span class="pln">publicPath
</span><span class="pun">}));</span><span class="pln">

app</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="str">'/'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">req</span><span class="pun">,</span><span class="pln"> res</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  res</span><span class="pun">.</span><span class="pln">sendFile</span><span class="pun">(</span><span class="pln">__dirname </span><span class="pun">+</span><span class="pln"> </span><span class="str">'/index.html'</span><span class="pun">);</span><span class="pln">
</span><span class="pun">});</span><span class="pln">

app</span><span class="pun">.</span><span class="pln">listen</span><span class="pun">(</span><span class="pln">port</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">err</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">'Server started on http://localhost:%s'</span><span class="pun">,</span><span class="pln"> port</span><span class="pun">);</span><span class="pln">
</span><span class="pun">});</span></code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的index.js文件正在做的就是导入react，但似乎“ babel-loader”无法正常工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用'babel-loader'6.0.0。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4189篇《Webpack和Babel的“您可能需要适当的加载器来处理此文件类型”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    
    </div>
    {% endraw %}
  </div>
<div>
