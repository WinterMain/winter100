---
layout: question
title:  使用Webpack时，节点找不到模块“ fs”
date:   2020-03-24T07:41:44.000Z
description: 我正在使用node.js和webpack创建一个包。根据我的阅读，node.js应该包含fs用于管理文件的模块。但是，当我打电话给require("fs"...
img: 
author: 卡卡西达蒙西里
category: question
answer: 3
tags: node.js Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用node.js和webpack创建一个包。</font><font style="vertical-align: inherit;">根据我的阅读，node.js应该包含</font></font><code>fs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于管理文件的模块。</font><font style="vertical-align: inherit;">但是，当我打电话给</font></font><code>require("fs")</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我时出现</font></font><code>Cannot find module "fs"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误。</font><font style="vertical-align: inherit;">我该怎么办？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第3456篇《使用Webpack时，节点找不到模块“ fs”》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">乱投医后，我在网上（上发现</font></font><code>target</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>externals</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CONFIGS），唯一的解决办法，其实对我来说是更换工作：</font></font></p>

<pre><code>const filesystem = require("fs")<font></font>
        or<font></font>
import fs from "fs"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过特殊的webpack版本</font></font></p>

<pre><code>const fs = __non_webpack_require__("fs")
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将生成webpack无法解析的require函数。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德伽罗</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于我们正在构建的解决方案，我们必须强制使用旧版的webpack：</font></font></p>

<pre><code>npm install --save --force webpack@webpack-3
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在nodejs环境中运行webpack捆绑包，则目标：webpack.config.js文件中需要“ node”，否则webpack在此处将默认值用作web进行目标</font></font><a href="https://webpack.js.org/concepts/targets/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过两种方式解决问题</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将以下配置添加到您的webpack.config.js</font></font></p>

<pre><code>node: {<font></font>
    fs: "empty"<font></font>
}<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将以下配置添加到package.json</font></font></p>

<pre><code>"browser": {<font></font>
    "fs": false<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
