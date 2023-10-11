---
layout: question
title:  使用new webpack.optimize.UglifyJsPlugin()时报错
date:   2018-07-12T07:58:05.000Z
description: Error  webpack.optimize.UglifyJsPlugin has been removed, please use config.optim...
img: 
author: L
category: question
answer: 1
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p>Error: webpack.optimize.UglifyJsPlugin has been removed, please use config.optimization.minimize instead.</p>

<p>at Object.get [as UglifyJsPlugin] (/Users/yld/Documents/work/YLD/quality_trade/node_modules/webpack/lib/webpack.js:165:10)<br />
&nbsp; &nbsp; at Object.&lt;anonymous&gt; (/Users/yld/Documents/work/YLD/quality_trade/config/coinex.appprd.js:19:31)<br />
&nbsp; &nbsp; at Module._compile (/Users/yld/Documents/work/YLD/quality_trade/node_modules/v8-compile-cache/v8-compile-cache.js:178:30)<br />
&nbsp; &nbsp; at Object.Module._extensions..js (module.js:654:10)<br />
&nbsp; &nbsp; at Module.load (module.js:556:32)<br />
&nbsp; &nbsp; at tryModuleLoad (module.js:499:12)<br />
&nbsp; &nbsp; at Function.Module._load (module.js:491:3)<br />
&nbsp; &nbsp; at Module.require (module.js:587:17)</p>
</div>
    {% endraw %}
  </div>
  <p class="winter_mark">第70篇《使用new webpack.optimize.UglifyJsPlugin()时报错》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">杨天栾</span>
            <span class="discuss-time">2018.07.12</span>
          </div>
          <div class="discuss-comment">1.webpack内置的JS压缩插件不能使用了，可以安装uglifyjs-webpack-plugin插件，使用同其他非内置插件；

2.--mode production 表示生产环境,只要配置在package.json的script里面 js自动就压缩了


Uglify是压缩js,现在已经不需要了,只需要在script里面写成
"build": "webpack --mode production", 就自动压缩了</div>
        </div></div>
    {% endraw %}
  </div>
<div>
