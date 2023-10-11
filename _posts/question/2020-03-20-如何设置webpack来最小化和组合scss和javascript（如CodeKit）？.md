---
layout: question
title:  如何设置webpack来最小化和组合scss和javascript（如CodeKit）？
date:   2020-03-20T06:00:16.000Z
description: 我在使用webpack而不是Codekit v1.9.3时遇到问题。我开始从CodeKit迁移到Grunt和Gulp，然后了解了webpack听起来很酷的...
img: 
author: TonyNear
category: question
answer: 0
tags: CoffeeScript的 CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在使用webpack而不是</font></font><a href="https://incident57.com/codekit/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Codekit v1.9.3时</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遇到问题</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我开始从CodeKit迁移到Grunt和Gulp，然后了解了</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">听起来很酷的内容。</font><font style="vertical-align: inherit;">我似乎无法正常工作。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“像Codekit”意味着我可以：</font></font></h2>

<ul>
<li><font style="vertical-align: inherit;"></font><code>javascript</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用</font></font><code>coffeescript</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语法</font><font style="vertical-align: inherit;">写</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将所有脚本源文件和库缩小/缩小并合并为一个文件</font></font></li>
<li><font style="vertical-align: inherit;"></font><code>bootstrap-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据需要</font><font style="vertical-align: inherit;">选择性地包含</font><font style="vertical-align: inherit;">（scss）框架的</font><font style="vertical-align: inherit;">组件</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过sass变量使用引导程序自定义来维护一个小文件，例如 </font></font><code>$brand-primary</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于</font></font><code>webpack --watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在更改脚本和样式时自动对其进行编译</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后得到一个CSS文件和一个脚本文件，这些文件可以包含在样式表和脚本标签中。   </font></font></li>
</ul>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Codekit项目设置</font></font></h2>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bower资源：</font></font></em></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我目前将这些存储在项目外部的全球范围内：</font></font></p>

<pre><code>~/bower_components/twbs-bootstrap-sass/vendor/assets/stylesheets
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为CodeKit支持指南针，所以我在</font></font><code>config.rb</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件中输入了以下内容：</font></font></p>

<pre><code>add_import_path "~/bower_components/twbs-bootstrap-sass/vendor/assets/stylesheets"
</code></pre>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目结构</font></font></em></strong></p>

<pre><code>js/fancybox.js<font></font>
js/main.js               &lt;-- currently the compiled js 'output' file<font></font>
js/main.coffee<font></font>
<font></font>
css/styles.css           &lt;-- currently the compiled css 'output' file<font></font>
<font></font>
scss/styles.scss<font></font>
scss/modules/_bootstrap-customizations.scss<font></font>
scss/modules/_typography.scss<font></font>
scss/partials/_header.scss<font></font>
scss/partials/_footer.scss<font></font>
</code></pre>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">styles.scss的内容</font></font></em></strong></p>

<pre><code>@import "modules/bootstrap-customizations";  # local customizations<font></font>
@import "bootstrap/variables";<font></font>
@import "bootstrap/mixins";<font></font>
...                                          # load bootstrap files as required<font></font>
@import "bootstrap/wells";<font></font>
</code></pre>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">系统设置：</font></font></h2>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">系统：OS X 10.9</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点-v0.10.32</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm-v2.1.7</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">zsh-zsh 5.0.7（x86_64-apple-darwin13.4.0）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点安装了自制软件</font></font><code>brew install node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，否则似乎工作正常。</font></font></p>

<hr>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试过的</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已阅读以下页面：</font></font></p>

<ul>
<li><a href="http://webpack.github.io/docs/configuration.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://webpack.github.io/docs/configuration.html</font></font></a></li>
<li><a href="https://github.com/petehunt/webpack-howto"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/petehunt/webpack-howto</font></font></a></li>
<li><a href="http://webpack.github.io/docs/tutorials/getting-started/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://webpack.github.io/docs/tutorials/getting-started/</font></font></a></li>
<li><a href="https://www.npmjs.org/package/bootstrap-sass-webpack"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.org/package/bootstrap-sass-webpack</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经尝试</font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多次</font><font style="vertical-align: inherit;">创建</font><font style="vertical-align: inherit;">文件，最近的尝试是此文件的多个版本：</font></font></p>

<pre><code>module.exports = {<font></font>
    entry: [<font></font>
    "./node_modules/bootstrap-sass-webpack!./bootstrap-sass.config.js",<font></font>
    "./js/main.coffee"<font></font>
    ],<font></font>
    output: {<font></font>
        path: __dirname,<font></font>
        filename: "main.js"<font></font>
    },<font></font>
    module: {<font></font>
        loaders: [<font></font>
        { test: /\.css$/, loader: "style!css" }<font></font>
        ]<font></font>
    }<font></font>
};<font></font>
</code></pre>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack错误</font></font></em></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行时，</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我得到以下信息：</font></font></p>

<pre><code>ERROR in ./~/bootstrap-sass-webpack/~/css-loader!/Users/cwd/~/sass-loader!./~/bootstrap-sass-webpack/bootstrap-sass-styles.loader.js!./bootstrap-sass.config.js<font></font>
stdin:1: file to import not found or unreadable: "~bootstrap-sass/assets/stylesheets/bootstrap/variables<font></font>
</code></pre>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NPM错误</font></font></em></strong></p>

<p>I get an error when attempting to <code>npm install bootstrap-sass</code>, and not had any luck when searching for a solution. I'm not even sure I need this module.</p>

<pre><code>npm ERR! Darwin 13.4.0<font></font>
npm ERR! argv "node" "/usr/local/bin/npm" "install" "bootstrap-sass"<font></font>
npm ERR! node v0.10.32<font></font>
npm ERR! npm  v2.1.7<font></font>
npm ERR! code EPEERINVALID<font></font>
<font></font>
npm ERR! peerinvalid The package bootstrap-sass does not satisfy its siblings' peerDependencies requirements!<font></font>
npm ERR! peerinvalid Peer bootstrap-sass-webpack@0.0.3 wants bootstrap-sass@~3.2.0<font></font>
<font></font>
npm ERR! Please include the following file with any support request:<font></font>
npm ERR!     /Users/cwd/webpack-test/npm-debug.log<font></font>
</code></pre>

<hr>

<h2>Sources of Confusion</h2>

<p>The most confusing parts of webpack for me are:</p>

<ol>
<li>Where should things like <code>require("bootstrap-sass-webpack")</code> be added - is it in the <code>webpack.config.js</code> file, or in the <code>js/main.js</code> file?</li>
<li>Should modules like this available to webpack as soon as they are installed with <code>npm install</code> ?</li>
<li>I thought that I should do <code>npm install webpack -g</code> so that webpack was installed globally, and use <code>npm install</code> without the <code>-g</code> for the other modules. However, I don't see any <code>node_modules</code> folder being created in my project. Shouldn't there be one?</li>
<li>How are the search paths determined / specified for things like <code>require("bootstrap-sass-webpack")</code> ?</li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我应该安装哪些节点模块才能执行此操作？</font><font style="vertical-align: inherit;">我应该</font></font><code>webpack.config.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">长什么样？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2509篇《如何设置webpack来最小化和组合scss和javascript（如CodeKit）？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    
    {% endraw %}
  </div>
<div>
