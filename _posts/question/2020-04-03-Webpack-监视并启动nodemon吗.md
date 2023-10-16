---
layout: question
title:  Webpack-监视并启动nodemon吗？
date:   2020-04-03T02:51:05.000Z
description: 感谢\`McMath 的出色回答，现在我可以通过webpack编译客户端和服务器。我现在正努力使自己webpack --watch变得有用。理想情况下，当捆...
img: 
author: 阳光西里小哥
category: question
answer: 2
tags: node.js Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢</font><font style="vertical-align: inherit;">@McMath </font><font style="vertical-align: inherit;">的</font></font><a href="https://stackoverflow.com/questions/35539612/webpack-with-a-client-server-node-setup/35540859#35540859"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出色回答</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，现在我可以通过webpack编译客户端和服务器。</font><font style="vertical-align: inherit;">我现在正努力使自己</font></font><code>webpack --watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变得有用。</font><font style="vertical-align: inherit;">理想情况下，当捆绑更改时，我希望它为我的服务器进程生成类似nodemon的东西，而当客户端更改时，它会生成某种浏览器同步的味道。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我意识到这是一个捆绑器/加载器，而不是一个真正的任务运行器，但是有什么方法可以做到这一点？</font><font style="vertical-align: inherit;">缺少google结果似乎表明我正在尝试新的东西，但这必须已经完成。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我总是可以将webpack程序包保存到另一个目录，并使用gulp观看/复制/浏览器同步化它，但这似乎很简单。是否有更好的方法？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3927篇《Webpack-监视并启动nodemon吗？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了@Ling的好答案之外：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想一次构建项目，则在观看之前</font></font><code>nodemon</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，可以使用webpack </font></font><a href="https://webpack.js.org/api/compiler-hooks/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编译器hook</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在webpack完成编译后</font><font style="vertical-align: inherit;">，插件的代码就会</font></font><code>nodemon</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>done</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">钩子中</font><font style="vertical-align: inherit;">触发</font><font style="vertical-align: inherit;">（另请参阅此有用的</font></font><a href="https://stackoverflow.com/a/49786887/5669456"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<pre><code>const { spawn } = require("child_process")<font></font>
<font></font>
function OnFirstBuildDonePlugin() {<font></font>
  let isInitialBuild = true<font></font>
  return {<font></font>
    apply: compiler =&gt; {<font></font>
      compiler.hooks.done.tap("OnFirstBuildDonePlugin", compilation =&gt; {<font></font>
        if (isInitialBuild) {<font></font>
          isInitialBuild = false<font></font>
          spawn("nodemon dist/index.js --watch dist", {<font></font>
            stdio: "inherit",<font></font>
            shell: true<font></font>
          })<font></font>
        }<font></font>
      })<font></font>
    }<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">webpack.config.js：</font></font></p>

<pre><code>  module.exports = {<font></font>
    ... <font></font>
    plugins: [<font></font>
      ... <font></font>
      OnFirstBuildDonePlugin()<font></font>
    ]<font></font>
  })<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json：</font></font></p>

<pre><code>"scripts": {<font></font>
  "dev"  : "webpack --watch"<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望能帮助到你。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装以下依赖项：</font></font></li>
</ol>

<p><code>npm install npm-run-all webpack nodemon</code></p>

<ol start="2">
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">配置</font><font style="vertical-align: inherit;">为如下所示：</font></font></li>
</ol>

<h3><code>package.json</code></h3>

<pre><code>{<font></font>
  ...<font></font>
<font></font>
  "scripts": {<font></font>
    "start"        : "npm-run-all --parallel watch:server watch:build",<font></font>
    "watch:build"  : "webpack --watch",<font></font>
    "watch:server" : "nodemon \"./dist/index.js\" --watch \"./dist\""<font></font>
  },<font></font>
<font></font>
  ...<font></font>
<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后，您可以使用轻松地运行您的项目</font></font><code>npm start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要忘记让Webpack配置WatchIgnorePlugin来忽略</font></font><code>./dist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依存关系</font></font></h3>

<ol>
<li><code>npm-run-all</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -一个CLI工具，可以并行或顺序运行多个npm脚本。</font></font></li>
<li><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-webpack是一个模块捆绑器。</font><font style="vertical-align: inherit;">它的主要目的是捆绑JavaScript文件以供在浏览器中使用，但它也能够转换，捆绑或打包几乎任何资源或资产。</font></font></li>
<li><code>nodemon</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -在node.js应用程序开发期间使用的简单监控脚本。</font></font></li>
</ol></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
