---
layout: question
title:  Webpack-Webpack-dev-server：找不到命令
date:   2020-03-23T03:51:28.000Z
description: 我正在使用webpack在React Webapp上工作，与本教程一起宽松地工作。偶然地，我将node_modules文件夹添加到了我的git中。然后...
img: 
author: 阿飞
category: question
answer: 9
tags: node.js Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用webpack在React Webapp上工作，与</font></font><a href="http://fredguest.com/2015/03/06/building-a-stateless-rails-api-with-react-and-twitter-oauth/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本教程</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一起宽松地工作</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">偶然地，我将node_modules文件夹添加到了我的git中。</font><font style="vertical-align: inherit;">然后，我再次使用将其删除</font></font><code>git rm -f node_modules/*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，当我尝试启动webpack服务器时，出现以下错误：</font></font></p>

<pre><code>&gt; webpack-dev-server -d --config webpack.dev.config.js --content-base public/ --progress --colors<font></font>
<font></font>
sh: webpack-dev-server: command not found<font></font>
<font></font>
npm ERR! Darwin 14.4.0<font></font>
npm ERR! argv "node" "/usr/local/bin/npm" "run" "devserve"<font></font>
npm ERR! node v0.12.4<font></font>
npm ERR! npm  v2.10.1<font></font>
npm ERR! file sh<font></font>
npm ERR! code ELIFECYCLE<font></font>
npm ERR! errno ENOENT<font></font>
npm ERR! syscall spawn<font></font>
npm ERR! Blabber@0.0.1 devserve: `webpack-dev-server -d --config webpack.dev.config.js --content-base public/ --progress --colors`<font></font>
npm ERR! spawn ENOENT<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">起初我以为这只是我的项目，但是后来我签出了该教程的代码检查点：同样的错误！</font><font style="vertical-align: inherit;">因此，全球似乎有些混乱。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我到目前为止尝试过的：</font></font></p>

<ul>
<li><code>rm node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 并重新安装 </font></font><code>npm install</code></li>
<li><code>npm cache clean</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如有人</font><a href="https://github.com/bradleyboy/yarsk/issues/4" rel="noreferrer" title="this issue on github"><font style="vertical-align: inherit;">在github上</font></a><font style="vertical-align: inherit;">提到</font></font><a href="https://github.com/bradleyboy/yarsk/issues/4" rel="noreferrer" title="这个问题在github上"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下命令全局安装webpack </font></font><code>npm install -g webpack</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://stackoverflow.com/a/11178106/1720523"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">系统中完全删除node和npm（使用</font><a href="https://stackoverflow.com/a/11178106/1720523"><font style="vertical-align: inherit;">本指南</font></a><font style="vertical-align: inherit;">），然后使用brew重新安装</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误消息仍然存在。</font><font style="vertical-align: inherit;">我还能尝试什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS：的内容</font></font><code>webpack.dev.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是：</font></font></p>

<pre><code>var config = require('./webpack.config.js');<font></font>
var webpack = require('webpack');<font></font>
<font></font>
config.plugins.push(<font></font>
  new webpack.DefinePlugin({<font></font>
    "process.env": {<font></font>
      "NODE_ENV": JSON.stringify("development")<font></font>
    }<font></font>
  })<font></font>
);<font></font>
<font></font>
module.exports = config;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2764篇《Webpack-Webpack-dev-server：找不到命令》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan村村达蒙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install webpack-dev-server -g-Windows操作系统</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好在Linux中使用sudo以避免权限错误</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sudo npm安装webpack-dev-server -g</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用sudo npm install webpack-dev-server --save将其添加到package.json。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时您可能需要运行以下命令。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install webpack-cli --save或npm install webpack-cli -g</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于全局安装：
 </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install webpack-dev-server -g</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于本地安装
 </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install --save-dev webpack</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您在package.json文件中引用webpack时，它将尝试在位置node_modules \ .bin \中查找它</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地安装后，文件wbpack将在以下位置创建：\ node_modules \ .bin \ webpack</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯达蒙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Yarn</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遇到了类似的问题</font><font style="vertical-align: inherit;">，以上都不对我有用，所以我简单地删除</font></font><code>./node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并运行</font></font><code>yarn install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，问题就消失了。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">纱</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行时出现问题： </font></font><code>yarn start</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先运行已修复： </font></font><code>yarn install</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅西里</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，这很简单： </font></font></p>

<pre><code>npm install webpack-dev-server -g
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">令我感到困惑的是，一开始我并不需要，可能是新版本改变了。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该脚本</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已安装在./node_modules目录中。</font><font style="vertical-align: inherit;">您可以通过以下方式在全局范围内再次安装它</font></font></p>

<pre><code>sudo npm install -g webpack-dev-server
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或像这样运行</font></font></p>

<pre><code>./node_modules/webpack-dev-server/bin/webpack-dev-server.js -d --config webpack.dev.config.js --content-base public/ --progress --colors
</code></pre>

<p><code>.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 表示在当前目录中查找。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯理查德番长</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，但是以下步骤帮助我摆脱了它。</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在本地安装“ webpack-dev-server”（在项目目录中，因为它不是从全局安装中挑选的）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install --save webpack-dev-server</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以验证node_modules内部是否存在“ webpack-dev-server”文件夹。</font></font></p>

<ol start="2">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用npx运行以直接运行</font></font></li>
</ol>

<p><code>npx webpack-dev-server --mode development --config ./webpack.dev.js</code></p>

<p><code>npm run start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 在package.json脚本中的输入应与上面类似（没有npx）的情况下也可以正常工作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅供参考，要像您尝试的那样通过命令行访问任何脚本，您需要将该脚本注册为shell脚本</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或任何类型的脚本，例如.js，.rb）</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，就像dir中的这些文件一样
   </font></font><code>/usr/bin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在UNIX中。</font><font style="vertical-align: inherit;">并且，系统必须知道在哪里可以找到它们。</font><font style="vertical-align: inherit;">即该位置必须以</font></font><code>$PATH</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">数组</font><font style="vertical-align: inherit;">形式加载</font><font style="vertical-align: inherit;">。</font></font></p>
</blockquote>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的情况下，该脚本</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经安装在</font></font><code>./node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录</font><font style="vertical-align: inherit;">内的某个位置</font><font style="vertical-align: inherit;">，但是系统不知道如何访问它。</font><font style="vertical-align: inherit;">因此，要访问命令</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您还需要在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全局范围内</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装脚本</font><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>$ npm install webpack-dev-server -g
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里，</font></font><code>-g</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指的是全球范围。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，不建议使用这种方法，因为您可能会遇到版本冲突的问题。</font><font style="vertical-align: inherit;">因此，您可以在</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中</font><font style="vertical-align: inherit;">设置命令，</font><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>  "scripts": {<font></font>
    "start": "webpack-dev-server -d --config webpack.dev.config.js --content-base public/ --progress --colors"<font></font>
   }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过此设置，您可以使用简单的命令访问所需的脚本 </font></font></p>

<pre><code>$ npm start
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">太短，难以记忆和发挥。</font><font style="vertical-align: inherit;">并且，</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">知道模块的位置</font></font><code>webpack-dev-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现接受的答案并非在所有情况下都适用。</font><font style="vertical-align: inherit;">为了确保它100％正常工作，还必须清除npm缓存。</font><font style="vertical-align: inherit;">直接进入缓存并清除锁，缓存，anonymous-cli-metrics.json; </font><font style="vertical-align: inherit;">或可以尝试一下</font></font><code>npm cache clean</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于作者在尝试推荐的解决方案之前已经清除了缓存，因此可能无法使其成为先决条件的一部分。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
