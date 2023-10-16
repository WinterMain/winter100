---
layout: question
title:  如何在node.js上调试“错误：生成ENOENT”？
date:   2020-03-18T08:51:50.000Z
description: 当我得到以下错误：events.js 72        throw er; // Unhandled 'error' event        ...
img: 
author: 凯梅阳光
category: question
answer: 9
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我得到以下错误：</font></font></h2>

<pre><code>events.js:72<font></font>
        throw er; // Unhandled 'error' event<font></font>
              ^<font></font>
Error: spawn ENOENT<font></font>
    at errnoException (child_process.js:1000:11)<font></font>
    at Process.ChildProcess._handle.onexit (child_process.js:791:34)<font></font>
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以按照什么程序来修复它？</font></font></h2>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作者注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：许多与此错误有关的问题鼓励我发布此问题，以备将来参考。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相关问题：</font></font></strong></p>

<ul>
<li><a href="https://stackoverflow.com/questions/20825157/using-spawn-function-with-node-env-production"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将生成功能与NODE_ENV = production一起使用</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/24496015/node-js-child-process-spawn-enoent-error-only-under-supervisord"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node.js child_process.spawn ENOENT错误-仅在监督下</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/25090140/spawn-enoent-node-js-error"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产生ENOENT node.js错误</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/27603713/nodejs-spawn-enoent-error-on-travis-calling-global-npm-package"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/questions/27603713/nodejs-spawn-enoent-error-on-travis-calling-global-npm-package</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/20156067/node-js-child-process-spawnnpm-install-in-grunt-task-results-in-enoent-err"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点JS-Grunt任务中的child_process spawn（'npm install'）导致ENOENT错误</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/24366113/running-foreman-task-fatal-error-spawn-enoent/27689089#27689089"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行“ foreman”任务致命错误：生成ENOENT</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/26624302/unhandled-error-event-in-node-js-error-spawn-enoent-at-errnoexception-child-pr/27689141#27689141"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点js中未处理的错误事件错误：在errnoException处生成ENOENT（child_process.js：975：11）</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/21379677/node-js-spookyjs-error-executing-hello-js"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js SpookyJS：执行hello.js时出错</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/26572214/run-grunt-on-a-directory-nodewebkit"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/questions/26572214/run-grunt-on-a-directory-nodewebkit</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/23764429/run-exe-file-with-child-process-nodejs"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用子进程NodeJS运行exe文件</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/24717446/node-child-process-spawn-not-working-on-java-even-though-its-in-the-path-enoe"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点：child_process.spawn即使在路径中也无法在Java上运行（ENOENT）</font></font></a></li>
<li><a href="https://stackoverflow.com/questions/26232590/spawn-enoent-error-with-nodejs"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用NodeJS生成ENOENT错误</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（与PYTHON相关）</font></font></li>
<li><a href="https://stackoverflow.com/questions/21346717/image-resizing-is-not-working-in-node-js-partial-js"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">图像调整大小在node.js（partial.js）中不起作用</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（未安装的依赖项）</font></font></li>
<li><a href="https://stackoverflow.com/questions/25924494/npm-install-error-enoent"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm安装错误ENOENT</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（构建依赖项问题）</font></font></li>
<li><a href="https://stackoverflow.com/questions/27393631/cannot-install-node-js-oracle-module-on-windows-7"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法在Windows 7上安装node.js-oracle模块</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（生成依赖项问题）</font></font></li>
<li><a href="https://stackoverflow.com/questions/26699999/error-installing-gulp-using-nodejs-on-windows"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Windows上使用Node.js安装Gulp时发生错误</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（奇怪的情况）</font></font></li>
</ul></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2070篇《如何在node.js上调试“错误：生成ENOENT”？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYMandy</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加</font></font><code>C:\Windows\System32\</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>path</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">环境变量。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚步</font></font></h2>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到我的</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">电脑和属性</font></font></em></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">点击</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">高级设置</font></font></em></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">环境变量</font></font></em></p></li>
<li><p>Select <code>Path</code> and then click on edit </p></li>
<li><p>Paste the following if not already present: <code>C:\Windows\System32\</code></p></li>
<li><p>Close the command prompt </p></li>
<li><p>Run the command that you wanted to run </p></li>
</ol>

<p><img src="https://i.stack.imgur.com/XCTAf.png" alt="Windows 8环境变量屏幕截图"></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅西里</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您无法修改其源的应用程序遇到此问题，请考虑使用环境变量</font></font><code>NODE_DEBUG</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置为</font><font style="vertical-align: inherit;">调用它</font></font><code>child_process</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，例如</font></font><code>NODE_DEBUG=child_process yarn test</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这将为您提供在哪个目录中调用了哪些命令行的信息，通常最后一个细节是失败的原因。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村米亚小小</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Windows 8上遇到了相同的错误。问题是由于缺少系统路径的环境变量。</font><font style="vertical-align: inherit;">将“ C：\ Windows \ System32 \”值添加到系统PATH变量。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端伽罗</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试从Debian Linux系统上的VS Code编辑器中调试node.js程序时遇到此错误。</font><font style="vertical-align: inherit;">我注意到同一件事在Windows上也可以。</font><font style="vertical-align: inherit;">之前在此给出的解决方案并没有太大帮助，因为我没有编写任何“生成”命令。</font><font style="vertical-align: inherit;">有问题的代码大概是由Microsoft编写的，并隐藏在VS Code程序的内部。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接下来，我注意到node.js在Windows上被称为node，但在Debian（以及大概在基于Debian的系统上，例如Ubuntu）上，它被称为nodejs。</font><font style="vertical-align: inherit;">所以我创建了一个别名-从根终端运行</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ln -s / usr / bin / nodejs / usr / local / bin / node</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样就解决了问题。</font><font style="vertical-align: inherit;">在您的node.js被称为nodejs的其他情况下，相同或相似的过程可能会起作用，但是您正在运行一个期望将其称为node的程序，反之亦然。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙Green阳光</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在任何人花费大量时间调试此问题之前，大多数时候可以通过删除</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并重新安装软件包</font><font style="vertical-align: inherit;">来解决</font><font style="vertical-align: inherit;">。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装：</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果存在锁定文件，则可以使用</font></font></p>

<pre><code>yarn install --frozen-lockfile
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>npm ci
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分别地 </font><font style="vertical-align: inherit;">如果没有</font></font></p>

<pre><code>yarn install
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>npm i
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Tony古一</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不是节点模块，请确保已安装要执行的模块或完整的命令路径 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near小小</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，由于未安装必要的依赖系统资源，导致出现此错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更具体地说，我有一个使用ImageMagick的NodeJS应用程序。</font><font style="vertical-align: inherit;">尽管已安装了npm软件包，但尚未安装核心Linux ImageMagick。</font><font style="vertical-align: inherit;">我做了一个易于安装ImageMagick的工作，之后一切都变好了！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱A</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于任何人谁可能在此跌倒，如果所有其他的答案没有帮助，你是在Windows上，知道的是，目前</font></font><a href="https://github.com/joyent/node/issues/2318"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的一个大问题与</font></font><code>spawn</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Windows</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>PATHEXT</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">环境变量，可能会导致某些呼叫产卵不工作，这取决于如何目标命令已安装。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙JinJinHarry</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如</font></font><a href="https://stackoverflow.com/questions/27688804/how-do-i-debug-error-spawn-enoent-on-node-js#comment55397048_27688805"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">@DanielImfeld指出的那样</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果在选项中指定“ cwd”，则将抛出ENOENT，但是给定目录不存在。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
