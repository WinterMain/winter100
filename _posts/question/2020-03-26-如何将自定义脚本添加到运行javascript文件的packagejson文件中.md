---
layout: question
title:  如何将自定义脚本添加到运行javascript文件的package.json文件中？
date:   2020-03-26T08:53:45.000Z
description: 我希望能够script1在将要运行的项目目录中执行命令node script1.js。script1.js是同一目录中的文件。该命令必须特定于项目目录...
img: 
author: 神乐
category: question
answer: 4
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望能够</font></font><code>script1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在将要运行的项目目录中</font><font style="vertical-align: inherit;">执行命令</font></font><code>node script1.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><code>script1.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是同一目录中的文件。</font><font style="vertical-align: inherit;">该命令必须特定于项目目录，这意味着如果我将项目文件夹发送给其他人，他们将能够运行相同的命令。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到目前为止，我尝试添加：</font></font></p>

<pre><code>"scripts": {<font></font>
    "script1": "node script1.js"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到我的package.json文件，但是当我尝试运行时</font></font><code>script1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，得到以下输出：</font></font></p>

<pre><code>zsh: command not found: script1
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有谁知道将上述脚本添加到项目文件夹所需的步骤？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">*注意：该命令不能添加到bash配置文件中（不能是计算机专用命令）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要任何澄清，请告诉我。 </font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3791篇《如何将自定义脚本添加到运行javascript文件的package.json文件中？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry逆天</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自定义脚本</font></font></h2>

<p><code>npm run-script &lt;custom_script_name&gt;</code></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></em></p>

<p><code>npm run &lt;custom_script_name&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的示例中，您将要运行</font></font><code>npm run-script script1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>npm run script1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见</font></font><a href="https://docs.npmjs.com/cli/run-script" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://docs.npmjs.com/cli/run-script</font></font></a></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生命周期脚本</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node还允许您针对某些生命周期事件运行自定义脚本，例如</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行后。</font><font style="vertical-align: inherit;">这些可以在</font></font><a href="https://docs.npmjs.com/misc/scripts" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如： </font></font></p>

<pre><code>"scripts": {<font></font>
    "postinstall": "electron-rebuild",<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将</font></font><code>electron-rebuild</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令</font><font style="vertical-align: inherit;">后</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您要在脚本中使用一条命令运行2条命令：</font></font></p>

<pre><code>"scripts":{<font></font>
  "start":"any command",<font></font>
  "singleCommandToRunTwoCommand":"some command here &amp;&amp; npm start"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在转到您的终端并在那里运行</font></font><code>npm run singleCommandToRunTwoCommand</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>  "scripts": {<font></font>
    "ng": "ng",<font></font>
    "start": "ng serve",<font></font>
    "build": "ng build --prod",<font></font>
    "build_c": "ng build --prod &amp;&amp; del \"../../server/front-end/*.*\" /s /q &amp; xcopy /s dist \"../../server/front-end\"",<font></font>
    "test": "ng test",<font></font>
    "lint": "ng lint",<font></font>
    "e2e": "ng e2e"<font></font>
  },<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如您所见，脚本“ build_c”正在构建角度应用程序，然后从目录中删除所有旧文件，然后最终复制结果构建文件。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤如下：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在package.json中添加：</font></font></p>

<pre><code>"bin":{<font></font>
    "script1": "bin/script1.js" <font></font>
}<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"></font><code>bin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在项目目录中</font><font style="vertical-align: inherit;">创建一个</font><font style="vertical-align: inherit;">文件夹，并</font></font><code>runScript1.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下代码</font><font style="vertical-align: inherit;">添加文件</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>#! /usr/bin/env node<font></font>
var shell = require("shelljs");<font></font>
shell.exec("node step1script.js");<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"></font><code>npm install shelljs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在终端中</font><font style="vertical-align: inherit;">运行</font></font></p></li>
<li><p><font style="vertical-align: inherit;"></font><code>npm link</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在终端中</font><font style="vertical-align: inherit;">运行</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在可以从终端运行</font></font><code>script1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将运行</font></font><code>node script1.js</code></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="http://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm" rel="noreferrer"><font style="vertical-align: inherit;">http</font></a><font style="vertical-align: inherit;"> : </font></font><a href="http://blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//blog.npmjs.org/post/118810260230/building-a-simple-command-line-tool-with-npm</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
