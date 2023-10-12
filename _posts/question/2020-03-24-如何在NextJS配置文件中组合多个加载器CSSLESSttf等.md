---
layout: question
title:  如何在NextJS配置文件中组合多个加载器（CSS，LESS，ttf等）？
date:   2020-03-24T07:47:23.000Z
description: 我正在使用NextJS将React应用程序移至SSR，并且根据文档，我将CSS和LESS 模块用于Next。问题在于，似乎一次只能工作一个。目前，某些...
img: 
author: 乐米亚
category: question
answer: 1
tags: reactjs React.js
topic: React.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用NextJS将React应用程序移至SSR，并且根据文档，我将CSS和LESS </font></font><a href="https://github.com/zeit/next.js/#css" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于Next。</font><font style="vertical-align: inherit;">问题在于，似乎一次只能工作一个。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目前，某些应用仍依赖于Bootstrap，并且我无法使Bootstrap（CSS或LESS）与这些加载程序一起使用。</font><font style="vertical-align: inherit;">主要问题是在Bootstrap样式表中引用了.ttf，.svg，.gif等文件，但Loader不在Next模块中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我要对代码执行的一般性想法：</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">App.js</font></font></em></p>

<pre><code>import React, {Component} from "react"<font></font>
import "../node_modules/bootstrap/less/bootstrap.less"<font></font>
import "../less/landing/foo.less"<font></font>
import "../less/landing/bar.less"<font></font>
<font></font>
...<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">next.config.js</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（来自</font></font><a href="https://github.com/zeit/next-plugins/tree/master/packages/next-less" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">docs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<pre><code>const withLess = require('@zeit/next-less')<font></font>
module.exports = withLess()<font></font>
</code></pre>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">样本误差</font></font></em></p>

<pre><code> error  in ./node_modules/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2<font></font>
<font></font>
Module parse failed: Unexpected character '' (1:4)<font></font>
You may need an appropriate loader to handle this file type.<font></font>
(Source code omitted for this binary file)<font></font>
<font></font>
 @ ./node_modules/css-loader?{"modules":false,"minimize":false,"sourceMap":true,"importLoaders":1}!./node_modules/bootstrap/dist/css/bootstrap.css 7:4645-4699<font></font>
 @ ./node_modules/bootstrap/less/bootstrap.less<font></font>
 @ ./pages/App.js<font></font>
 @ ./pages/index.js<font></font>
 @ multi ./pages/index.js<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，我尝试破解该</font></font><a href="https://github.com/zeit/next-plugins/blob/master/packages/next-less/index.js" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用的Webpack配置，</font><font style="vertical-align: inherit;">以包括那些加载程序，但是我没有任何运气。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">next.config.js</font></font></em></p>

<pre><code>const ExtractTextPlugin = require('extract-text-webpack-plugin')<font></font>
const cssLoaderConfig = require('@zeit/next-css/css-loader-config')<font></font>
<font></font>
withLess = (nextConfig = {}) =&gt; {<font></font>
  return Object.assign({}, nextConfig, {<font></font>
    webpack(config, options) {<font></font>
      if (!options.defaultLoaders) {<font></font>
        throw new Error(<font></font>
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'<font></font>
        )<font></font>
      }<font></font>
<font></font>
      const { dev, isServer } = options<font></font>
      const { cssModules } = nextConfig<font></font>
      // Support the user providing their own instance of ExtractTextPlugin.<font></font>
      // If extractCSSPlugin is not defined we pass the same instance of ExtractTextPlugin to all css related modules<font></font>
      // So that they compile to the same file in production<font></font>
      let extractCSSPlugin =<font></font>
        nextConfig.extractCSSPlugin || options.extractCSSPlugin<font></font>
<font></font>
      if (!extractCSSPlugin) {<font></font>
        extractCSSPlugin = new ExtractTextPlugin({<font></font>
          filename: 'static/style.css'<font></font>
        })<font></font>
        config.plugins.push(extractCSSPlugin)<font></font>
        options.extractCSSPlugin = extractCSSPlugin<font></font>
      }<font></font>
<font></font>
      if (!extractCSSPlugin.options.disable) {<font></font>
        extractCSSPlugin.options.disable = dev<font></font>
      }<font></font>
<font></font>
      options.defaultLoaders.less = cssLoaderConfig(config, extractCSSPlugin, {<font></font>
        cssModules,<font></font>
        dev,<font></font>
        isServer,<font></font>
        loaders: ['less-loader']<font></font>
      })<font></font>
<font></font>
      config.module.rules.push({<font></font>
        test: /\.less$/,<font></font>
        use: options.defaultLoaders.less<font></font>
      })<font></font>
<font></font>
      // ------ start of my custom code --------<font></font>
      config.module.rules.push({ <font></font>
          test: /\.gif$/, <font></font>
          use: [{loader: "url-loader?mimetype=image/png" }]<font></font>
      })<font></font>
<font></font>
      config.module.rules.push({<font></font>
          test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, <font></font>
          use: [{loader: "url-loader?mimetype=application/font-woff"}]<font></font>
      })<font></font>
<font></font>
      config.module.rules.push({<font></font>
          test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, <font></font>
          use: [{loader: "file-loader?name=[name].[ext]"}]<font></font>
      })<font></font>
      // ------ end ---------<font></font>
<font></font>
      if (typeof nextConfig.webpack === 'function') {<font></font>
        return nextConfig.webpack(config, options)<font></font>
      }<font></font>
<font></font>
      return config<font></font>
    }<font></font>
  })<font></font>
}<font></font>
<font></font>
module.exports = withLess()<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TL; DR我需要帮助配置我的下一个应用程序以支持一次加载多种文件类型</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任何帮助深表感谢！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3468篇《如何在NextJS配置文件中组合多个加载器（CSS，LESS，ttf等）？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">组合功能目前无法正常使用，您需要</font></font><code>@zeit/next-css@canary</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>next@canary</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">单独添加配置并不方便。</font></font></p>

<p><a href="https://github.com/zeit/next-plugins/issues/241" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/zeit/next-plugins/issues/241</font></font></a></p>

<hr>

<p><code>next-compose-plugins</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 可能是一个更好的选择：</font></font></p>

<p><a href="https://www.npmjs.com/package/next-compose-plugins" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/next-compose-plugins</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
