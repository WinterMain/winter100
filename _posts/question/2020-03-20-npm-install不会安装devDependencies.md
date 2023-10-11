---
layout: question
title:  npm install不会安装devDependencies
date:   2020-03-20T05:53:56.000Z
description: 由于某些原因在Windows上运行时，npm install它不会安装devDependencies。AFAIK应该。如果运行npm install --...
img: 
author: 卡卡西Near
category: question
answer: 8
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于某些原因在Windows上运行时，</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不会安装</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">devDependencies</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">AFAIK应该。</font><font style="vertical-align: inherit;">如果运行</font></font><code>npm install --dev</code> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">devDependencies，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则会安装。</font><font style="vertical-align: inherit;">我不明白为什么</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也不安装</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">devDependencies</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，而只安装依赖项。</font><font style="vertical-align: inherit;">可能是什么原因？</font><font style="vertical-align: inherit;">我该如何解决？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许我的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json有问题</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font><font style="vertical-align: inherit;">如果有帮助，请在下面列出：</font></font></p>

<pre><code>{<font></font>
  "name": "try-brunch",<font></font>
  "version": "0.1.0",<font></font>
  "private": "true",<font></font>
  "devDependencies": {<font></font>
    "brunch": "^2.0.4",<font></font>
    "cssnano-brunch": "^1.1.5",<font></font>
    "javascript-brunch": "^1.8.0",<font></font>
    "sass-brunch": "^1.9.2",<font></font>
    "uglify-js-brunch": "^1.7.8"<font></font>
  },<font></font>
  "dependencies": {<font></font>
    "jquery": "^2.1.4"<font></font>
  }<font></font>
}<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2499篇《npm install不会安装devDependencies》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有同样的问题，因为我</font></font><code>NODE_ENV=production</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在构建Docker时</font><font style="vertical-align: inherit;">设置了</font><font style="vertical-align: inherit;">时间。</font><font style="vertical-align: inherit;">然后我再加一个</font></font><code>npm install --only=dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">一切正常。</font><font style="vertical-align: inherit;">我需要devDependencies来构建TypeSciprt模块</font></font></p>

<pre><code>RUN npm install<font></font>
RUN npm install --only=dev<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以将简短的安装依赖关系方式仅用于开发，如下所示：</font></font></p>

<pre><code>npm i -D &lt;dependencies-names&gt;
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云TomSam</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查npm config生产值是否设置为true。</font><font style="vertical-align: inherit;">如果该值为true，它将跳过dev依赖项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跑 </font></font><code>npm config get production</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要设置它： </font></font><code>npm config set -g production false</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚宝儿</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个类似的问题。  </font></font><code>npm install --only=dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有用，也没有用</font></font><code>npm rebuild</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">最终，我不得不删除</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font><font style="vertical-align: inherit;">重新</font></font><code>package-lock.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这为我解决了。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinA</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查NPM文档以进行</font></font><a href="https://docs.npmjs.com/cli/install" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用该</font></font><code>--production</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标志（或将NODE_ENV环境变量设置为生产时），npm将不会安装devDependencies中列出的模块。”</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>--only={prod[uction]|dev[elopment]}</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数将导致仅安装devDependencies或仅安装非devDependencies，而与NODE_ENV无关。”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你有没有尝试过 </font></font></p>

<pre><code>npm install --only=dev
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您担心</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能不正确，那么最好的办法就是这样做。</font><font style="vertical-align: inherit;">创建一个新文件夹，然后运行：</font></font></p>

<pre><code>npm init --yes
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后：</font></font></p>

<pre><code>npm install --save-dev brunch@^2.0.4<font></font>
npm install --save-dev cssnano-brunch@^1.1.5<font></font>
npm install --save-dev javascript-brunch@^1.8.0<font></font>
npm install --save-dev sass-brunch@^1.9.2<font></font>
npm install --save-dev uglify-js-brunch@^1.7.8<font></font>
npm install jquery@^2.1.4 --save<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而且您应该很好走！</font><font style="vertical-align: inherit;">否则，将继续发布其他选项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查您的npm配置：</font></font></p>

<pre><code>npm config list
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm从命令行，环境变量和npmrc文件获取其配置设置。</font><font style="vertical-align: inherit;">因此，请检查环境变量和</font></font><a href="https://docs.npmjs.com/files/npmrc" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npmrc</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还是失败了？</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，创建一个新文件夹，最好是在文件系统上的其他位置。</font><font style="vertical-align: inherit;">即。</font><font style="vertical-align: inherit;">不在同一文件夹层次结构中。</font><font style="vertical-align: inherit;">例如，C：\ myNewFolder-越靠近基本C：驱动器越好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后运行：</font></font></p>

<pre><code>npm init --yes
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在运行：</font></font></p>

<pre><code>npm install underscore --save
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后：</font></font></p>

<pre><code>npm install mocha --save-dev
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一切正常吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试做的是了解您的问题是全局的，还是先前文件夹和依赖项的局部问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保您</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的有效...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有以下错误...</font></font></p>

<p><code>npm WARN Invalid name: "blah blah blah"</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样，导致</font></font><code>devDependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未安装。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅供参考，将</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“名称” </font><font style="vertical-align: inherit;">更改</font><font style="vertical-align: inherit;">为</font></font><code>blah-blah-blah</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">固定的</font><font style="vertical-align: inherit;">名称</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个</font></font><code>package-lock.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自旧版本package.json </font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">文件，我删除了该文件，然后正确安装了所有文件。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保您没有将env变量</font></font><code>NODE_ENV</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置为“ production”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果这样做，没有</font></font><code>--dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标记</font><font style="vertical-align: inherit;">将不会安装dev依赖项</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
