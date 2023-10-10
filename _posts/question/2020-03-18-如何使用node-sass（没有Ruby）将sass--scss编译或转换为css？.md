---
layout: question
title:  如何使用node-sass（没有Ruby）将sass / scss编译或转换为css？
date:   2020-03-18T08:56:55.000Z
description: 我正在努力设置libsass，因为它不像基于Ruby的编译器那样简单。有人可以解释如何：安装libsass？从命令行使用它？与gulp和grun...
img: 
author: Jim老丝L
category: question
answer: 2
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在努力设置libsass，因为它不像基于Ruby的编译器那样简单。</font><font style="vertical-align: inherit;">有人可以解释如何：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装libsass？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从命令行使用它？</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与gulp和grunt等任务赛跑者一起使用吗？</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对程序包经理的经验很少，而对任务执行者的经验则更少。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2078篇《如何使用node-sass（没有Ruby）将sass / scss编译或转换为css？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam卡卡西</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些工具的安装在不同的OS上可能会有所不同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Windows下，node-sass当前默认情况下支持VS2015，如果您的包装盒中只有VS2013，并且在运行命令时遇到任何错误，则可以通过添加--msvs_version = 2013来定义VS的版本。</font><font style="vertical-align: inherit;">这在</font></font><a href="https://www.npmjs.com/package/node-sass" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node-sass npm页面</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上有所记录</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，在Windows上使用VS2013的安全命令行为：npm install --msvs_version = 2013 gulp node-sass gulp-sass</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry小哥</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点v6.11.2</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm v3.10.10的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Windows 10中</font><font style="vertical-align: inherit;">，为了直接在任何文件夹中执行：</font></font></p>

<pre><code>&gt; node-sass [options] &lt;input.scss&gt; [output.css]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只按照</font></font><a href="https://github.com/sass/node-sass#install" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node-sass Github中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的说明进行操作</font><font style="vertical-align: inherit;">：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过在Powershell中以管理员身份运行来</font><font style="vertical-align: inherit;">添加</font></font><a href="https://github.com/nodejs/node-gyp#on-windows" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node-gyp先决条件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（需要一些时间）：</font></font></p>

<pre><code>&gt; npm install --global --production windows-build-tools
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">普通的命令行</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> shell（</font></font><kbd>Win</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>R</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ cmd + </font></font><kbd>Enter</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）中运行：</font></font></p>

<pre><code>&gt; npm install -g node-gyp<font></font>
&gt; npm install -g node-sass<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将</font></font><code>-g</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些软件包放置在下</font></font><code>%userprofile%\AppData\Roaming\npm\node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以检查</font></font><code>npm\node_modules\node-sass\bin\node-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在是否存在。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查您的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地帐户（不是系统）</font></font></strong> <code>PATH</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">环境变量是否包含：</font></font></p>

<pre><code>%userprofile%\AppData\Roaming\npm
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不存在此路径，则</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能仍在运行，但是模块</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bin</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件将不会运行！</font></font></p></li>
</ol>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭上一个外壳，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后重新打开一个新</font><strong><font style="vertical-align: inherit;">外壳</font></strong><font style="vertical-align: inherit;">，然后运行</font></font><code>&gt; node-gyp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>&gt; node-sass</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>windows-build-tools</code> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能没有必要</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（如果没有编译做？我想阅读，如果有人提出它没有安装这些工具），但它并添加到管理员帐户</font></font><code>GYP_MSVS_VERSION</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的环境变量，</font></font><code>2015</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为一种价值。</font></font></li>
<li>I am also able to run directly other modules with <em>bin</em> files, such as <code>&gt; uglifyjs main.js main.min.js</code> and <code>&gt; mocha</code></li>
</ul></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
