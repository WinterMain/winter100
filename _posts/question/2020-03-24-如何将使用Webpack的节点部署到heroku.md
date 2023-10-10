---
layout: question
title:  如何将使用Webpack的节点部署到heroku
date:   2020-03-24T11:21:34.000Z
description: 我正在使用webpack。另外，我不提交所有生成的文件所在的npm_modules文件夹和公用文件夹。在部署和设置服务器（已经在寻找公用文件夹）之后，...
img: 
author: 西门小宇宙
category: question
answer: 3
tags: node.js Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用webpack。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，我不提交所有生成的文件所在的npm_modules文件夹和公用文件夹。</font><font style="vertical-align: inherit;">在部署和设置服务器（已经在寻找公用文件夹）之后，我不知道如何构建我的应用程序（我有webpack build命令）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上传之前提交似乎是个坏主意。</font><font style="vertical-align: inherit;">也许有一些温柔的决定...有什么想法吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">派生自：</font></font><a href="https://stackoverflow.com/questions/24504476/how-to-deploy-node-that-uses-gulp-to-heroku"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何将使用Gulp的节点部署到heroku</font></font></a></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>postinstall</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照@orlando的建议</font><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">脚本中</font><font style="vertical-align: inherit;">执行此</font><font style="vertical-align: inherit;">操作：</font></font></p>

<pre><code>"postinstall": "webpack -p --config ./webpack.prod.config.js --progress"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种方法中，请确保 </font></font><code>heroku config:set NODE_ENV=production</code> <code>heroku config:set NPM_CONFIG_PRODUCTION=true</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以找到</font><font style="vertical-align: inherit;">可用的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自定义buildpack </font></font></strong> <a href="https://github.com/jerrysu/heroku-buildpack-webpack" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">heroku-buildpack-webpack</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些链接可以帮助您建立理解：</font></font></p>

<ul>
<li><a href="https://devcenter.heroku.com/articles/node-best-practices#hook-things-up" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">heroku挂钩的东西</font></font></a></li>
<li><a href="https://docs.npmjs.com/misc/scripts" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm脚本</font></font></a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在2019年，执行此操作的最简单方法是使用</font></font><code>heroku/nodejs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">buildpack（如果</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在存储库的根目录中</font><font style="vertical-align: inherit;">有则自动选择</font><font style="vertical-align: inherit;">）</font></font><code>build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并向包json </font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">脚本：</font></font></p>

<pre><code>"build": "webpack --mode production --config ./webpack.prod.config.js"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Heroku将在部署时自动运行此脚本。</font><font style="vertical-align: inherit;">值得一提的是，这是运行在本地或CI中测试构建的直观脚本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Heroku的</font></font><a href="https://devcenter.heroku.com/articles/node-best-practices#hook-things-up" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js开发最佳实践</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档中</font><font style="vertical-align: inherit;">对此进行了描述</font><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm的生命周期脚本非常适合自动化。</font><font style="vertical-align: inherit;">Heroku提供了自定义钩子，使您可以在安装依赖项之前或之后运行自定义命令。</font><font style="vertical-align: inherit;">如果您需要在构建应用程序之前运行某些程序，则可以使用</font></font><code>heroku-prebuild</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本。</font><font style="vertical-align: inherit;">需要使用grunt，gulp，browserify或webpack构建资产吗？</font><font style="vertical-align: inherit;">用</font></font><code>build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本执行。</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><pre><code>"heroku-postbuild": "webpack -p --config ./webpack.prod.config.js --progress"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样比较好，因为如果使用postinstall，则每次执行</font></font><code>npm i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">构建脚本时都会被解雇</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
