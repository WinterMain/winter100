---
layout: question
title:  如何将package.json中的每个依赖关系更新为最新版本？
date:   2020-03-13T08:05:08.000Z
description: 我从另一个项目复制了package.json，现在想将所有依赖项都升级到最新版本，因为这是一个新项目，如果出现问题，我不介意进行修复。最简单的方法是什...
img: 
author: 飞羽
category: question
answer: 26
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我从另一个项目复制了package.json，现在想将所有依赖项都升级到最新版本，因为这是一个新项目，如果出现问题，我不介意进行修复。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的方法是什么？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我现在知道的最好的方法是</font></font><code>npm info express version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">每个包，然后手动更新package.json。</font><font style="vertical-align: inherit;">肯定有更好的办法。</font></font></p>

<pre><code>{<font></font>
  "name": "myproject",<font></font>
  "description": "my node project",<font></font>
  "version": "1.0.0",<font></font>
  "engines": {<font></font>
    "node": "0.8.4",<font></font>
    "npm": "1.1.65"<font></font>
  },<font></font>
  "private": true,<font></font>
  "dependencies": {<font></font>
    "express": "~3.0.3", // how do I get these bumped to latest?<font></font>
    "mongodb": "~1.2.5",<font></font>
    "underscore": "~1.4.2",<font></font>
    "rjs": "~2.9.0",<font></font>
    "jade": "~0.27.2",<font></font>
    "async": "~0.1.22"<font></font>
  }<font></font>
}<font></font>
</code></pre>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">19年5月1日更新</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：六年后，我仍在维护</font></font><a href="https://github.com/tjunnone/npm-check-updates" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm-check-updates</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为该问题的综合解决方案。</font><font style="vertical-align: inherit;">请享用！</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1430篇《如何将package.json中的每个依赖关系更新为最新版本？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥阿飞神奇</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过查看</font><a href="https://github.com/tjunnone/npm-check-updates" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https://github.com/tjunnone/npm-check-updates中</font></a><font style="vertical-align: inherit;">的说明解决了此问题</font></font><a href="https://github.com/tjunnone/npm-check-updates" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a> </p>

<pre><code>$ npm install -g npm-check-updates<font></font>
$ ncu<font></font>
$ ncu -u # to update all the dependencies to latest<font></font>
$ ncu -u "specific module name"  #in case you want to update specific dependencies to latest<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry飞云</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用Github，则为Greenkeeper。</font></font><a href="https://greenkeeper.io/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://greenkeeper.io/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是Github的集成，设置起来非常容易。</font><font style="vertical-align: inherit;">安装后，它会在您指定的存储库（或所有需要的存储库）中自动创建拉取请求，并使代码始终保持最新状态，而无需强制您手动执行任何操作。</font><font style="vertical-align: inherit;">然后，PR应当触发基于CI服务的构建，并且根据检查的成功或失败，您可以不断找出引发问题的原因或CI通过时仅合并PR。</font></font></p>

<p><a href="https://i.stack.imgur.com/8Bez5.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/8Bez5.png" alt="格林门卫PR 1"></a>
<a href="https://i.stack.imgur.com/404IN.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/404IN.png" alt="格林门卫PR 2"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在底部，您可以看到第一个构建首先失败，并且在提交（“升级到节点v6.9”）之后测试通过了，因此我最终可以合并PR。</font><font style="vertical-align: inherit;">也带有很多表情符号。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个选择是</font></font><a href="https://dependencyci.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://dependencyci.com/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是我没有对其进行深入测试。</font><font style="vertical-align: inherit;">初看之后，Greenkeeper在一般的IMO中看起来更好，并且具有更好的集成性。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞西里</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm过时了 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm更新</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该会为您提供与您的应用程序兼容的最新通缉版本。</font><font style="vertical-align: inherit;">但不是最新版本。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云Pro</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案，无需其他软件包</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将每个依赖项的版本更改为</font></font><code>*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>"dependencies": {<font></font>
    "react": "*",<font></font>
    "react-google-maps": "*"<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后运行</font></font><code>npm update --save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的某些软件包已更新，但有些未更新？</font></font></p>

<pre><code>"dependencies": {<font></font>
    "react": "^15.0.1",<font></font>
    "react-google-maps": "*"<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是棘手的部分，这意味着您本地的“反应”版本低于最新版本。</font><font style="vertical-align: inherit;">在这种情况下，npm下载并更新了“ react”包。</font><font style="vertical-align: inherit;">但是，“ react-google-maps”的本地版本与最新版本相同。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果仍要“更新”不变</font></font><code>*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则必须从</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹中</font><font style="vertical-align: inherit;">删除这些模块</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如delete </font></font><code>node_modules/react-google-maps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">终于再次运行</font></font><code>npm update --save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>"dependencies": {<font></font>
    "react": "^15.0.1",<font></font>
    "react-google-maps": "^4.10.1"<font></font>
  }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"></font><code>npm update --save-dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要更新开发依赖项，请</font><font style="vertical-align: inherit;">不要忘记运行   </font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无宝儿</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到了最新版本的NPM的另一种解决方案。</font><font style="vertical-align: inherit;">我想要做的是用明确的最新版本号替换所有“ *”依赖项。</font><font style="vertical-align: inherit;">所讨论的方法都没有对我有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我做了什么：</font></font></p>

<ol>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将所有“ *”替换为“ ^ 0.0.0”</font></font></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跑 </font></font><code>npm-check-updates -u</code></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在package.json中的所有内容都更新为最新版本。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子古一</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面的代码（被接受）写了一些类似的信息，“花了太多时间等等”，却什么也没做。</font><font style="vertical-align: inherit;">问题可能是使用全局标志idk。</font></font></p>

<pre><code>npm i -g npm-check-updates<font></font>
ncu -u<font></font>
npm install<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我决定使用我的文本编辑器，而是改用半手动方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将这样的列表（只是更长的时间）从我的开发依赖项复制</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到了notepad ++文本编辑器中：</font></font></p>

<pre><code>"browserify": "10.2.6",<font></font>
"expect.js": "^0.3.1",<font></font>
"karma": "^0.13.22",<font></font>
"karma-browserify": "^5.2.0",<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将搜索模式设置为正则表达式，使用该</font></font><code>^\s*"([^"]+)".*$</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模式获取程序包名称并将其替换为</font></font><code>npm uninstall \1 --save-dev \nnpm install \1 --save-dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">点击“全部替换”。</font><font style="vertical-align: inherit;">otput是这样的：</font></font></p>

<pre><code>npm uninstall browserify --save-dev <font></font>
npm install browserify --save-dev<font></font>
npm uninstall expect.js --save-dev <font></font>
npm install expect.js --save-dev<font></font>
npm uninstall karma --save-dev <font></font>
npm install karma --save-dev<font></font>
npm uninstall karma-browserify --save-dev <font></font>
npm install karma-browserify --save-dev<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将其复制回bash，然后按Enter。</font><font style="vertical-align: inherit;">一切都已升级，并且工作正常。</font><font style="vertical-align: inherit;">就这样。</font></font></p>

<pre><code>"browserify": "^16.1.0",<font></font>
"expect.js": "^0.3.1",<font></font>
"karma": "^2.0.0",<font></font>
"karma-browserify": "^5.2.0",<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这没什么大不了的，因为您只需要不时地执行此操作，但是您可以轻松编写脚本来解析</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和升级您的软件包。</font><font style="vertical-align: inherit;">我认为这样更好，因为如果需要一些特殊的东西，例如保留当前版本的lib，可以编辑列表。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinLEY</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替代是</font></font></p>

<pre><code>"dependencies":{<font></font>
    "foo" : "&gt;=1.4.5"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次使用npm update时，它将自动更新为最新版本。</font><font style="vertical-align: inherit;">有关更多版本语法，请在此处检查：</font><a href="https://www.npmjs.org/doc/misc/semver.html" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://www.npmjs.org/doc/misc/semver.html" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.npmjs.org/doc/misc/semver.html</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用npm 5和节点8，请尝试执行以下命令</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm更新-保存</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim小哥GO</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从npm 5.2.0版开始，有一种方法可以在一行中运行此程序，而无需在全局npm注册表或本地应用程序中安装任何其他软件包。</font><font style="vertical-align: inherit;">这可以通过利用</font></font><code>npx</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与npm捆绑在一起</font><font style="vertical-align: inherit;">的新</font><font style="vertical-align: inherit;">实用程序</font><font style="vertical-align: inherit;">来完成</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（</font></font><a href="https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单击此处了解更多信息。</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在项目的根目录中运行以下命令：</font></font></p>

<pre class="lang-sh prettyprint-override"><code>npx npm-check-updates -u &amp;&amp; npm i
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomSam</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Updtr！</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基于过期的npm，updtr将安装最新版本并为每个依赖项运行npm test。</font><font style="vertical-align: inherit;">如果测试成功，则updtr会将新版本号保存到package.json中。</font><font style="vertical-align: inherit;">但是，如果测试失败，则updtr会回滚其更改。</font></font></p>
</blockquote>

<p><a href="https://github.com/peerigon/updtr" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/peerigon/updtr</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长理查德</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令，我不得不使用更新</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>NPM 3.10.10</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>npm install -g npm-check-updates<font></font>
ncu -a<font></font>
npm install<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">背景：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用@ josh3736的最新命令，</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但未更新。</font><font style="vertical-align: inherit;">然后我在运行时注意到描述文本</font></font><code>npm-check-updates -u</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">声明的版本范围满足以下依赖关系，但已安装的版本落后。</font><font style="vertical-align: inherit;">您可以使用npm update安装最新版本，而无需修改软件包文件。</font><font style="vertical-align: inherit;">如果仍然要更新软件包文件中的依赖关系，请运行ncu -a。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读有关npm-check-updates的文档，您可以看到不同之处：</font></font></p>

<p><a href="https://www.npmjs.com/package/npm-check-updates" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/npm-check-updates</font></font></a></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-u，-upgrade：覆盖软件包文件</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-a，--upgradeAll：甚至包括那些最新版本满足声明的semver依赖关系的依赖项</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ncu是</font></font><code>npm-check-updates</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入时在消息中看到</font><font style="vertical-align: inherit;">的别名</font></font><code>npm-check-updates -u</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>[INFO]: You can also use ncu as an alias
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY古一阿飞</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的命令不安全，因为切换版本时可能会损坏模块。</font><font style="vertical-align: inherit;">相反，我建议以下</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>npm shrinkwrap</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令</font><font style="vertical-align: inherit;">将当前当前实际的节点模块版本设置为package.json </font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不使用</font></font><a href="https://github.com/bahmutov/next-update" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/bahmutov/next-update</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令行工具</font><font style="vertical-align: inherit;">破坏测试，则将每个依赖项更新到最新版本</font></font></li>
</ul>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install -g下一步更新</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
//从您的包中</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
下次更新</font></font><font></font>
</pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇A阿飞</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用</font></font><code>yarn</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><a href="https://yarnpkg.com/lang/en/docs/cli/upgrade-interactive/" rel="noreferrer"><code>yarn upgrade-interactive</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则它是一个非常时尚的工具，可以让您查看过时的依赖项，然后选择要更新的依赖项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用Yarn over的更多原因</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">h</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green蛋蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><code>npm-check</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用来实现这一目标。</font></font></p>

<pre class="lang-bash prettyprint-override"><code>npm i -g npm npm-check<font></font>
npm-check -ug #to update globals<font></font>
npm-check -u #to update locals<font></font>
</code></pre>

<p><a href="https://i.stack.imgur.com/QSI4Z.png" rel="noreferrer"><img src="https://i.stack.imgur.com/QSI4Z.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个有用的命令列表，它将精确的版本号保存在 </font></font><code>package.json</code>
</p>

<pre><code>npm cache clean<font></font>
rm -rf node_modules/<font></font>
npm i -g npm npm-check-updates<font></font>
ncu -g #update globals<font></font>
ncu -ua #update locals<font></font>
npm i<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim西门</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想通过漂亮的（用于终端的）交互式报告界面使用温和的方法，我建议您使用</font></font><a href="https://github.com/dylang/npm-check" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm-check</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不费吹灰之力，为您提供了更多有关依赖更新的知识，并可以对其进行控制。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了让您了解正在等待的内容，以下是屏幕截图（从git页面中抓取，用于npm-check）：</font></font></p>

<p><a href="https://i.stack.imgur.com/qZTKn.png" rel="noreferrer"><img src="https://i.stack.imgur.com/qZTKn.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO番长</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用yarn，则以下命令将所有软件包更新为最新版本：</font></font></p>

<p><code>yarn upgrade --latest</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从他们的</font></font><a href="https://yarnpkg.com/lang/en/docs/cli/upgrade/#toc-yarn-upgrade-package-latest-l-caret-tilde-exact-pattern" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>upgrade --latest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令upgrade软件包与upgrade命令相同，但是忽略package.json中指定的版本范围。</font><font style="vertical-align: inherit;">取而代之的是，将使用由最新标签指定的版本（可能会在主要版本中升级软件包）。</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙A宝儿</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此功能已在中引入</font></font><code>npm v5</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">使用</font></font><code>npm install -g npm@latest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">更新到npm</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新 </font></font><code>package.json</code> </p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font><code>/node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>package-lock.json (if you have any)</code> </p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font></font><code>npm update</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这将根据</font></font><a href="https://docs.npmjs.com/misc/semver" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">semver</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将依赖项package.json更新为最新</font><a href="https://docs.npmjs.com/misc/semver" rel="nofollow noreferrer"><font style="vertical-align: inherit;">版本</font></a><font style="vertical-align: inherit;">。</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新到最新版本。</font><font style="vertical-align: inherit;">你可以去</font></font><code>npm-check-updates</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋卡卡西</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是匹配语义版本号的基本正则表达式，因此您可以快速将它们全部替换为星号。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">语义版本正则表达式</font></font></h3>

<pre><code>([&gt;|&lt;|=|~|^|\s])*?(\d+\.)?(\d+\.)?(\*|\d+)
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在JSON文件中选择要替换的软件包版本。</font></font></p>

<p><a href="https://i.stack.imgur.com/YgEOd.png" rel="noreferrer"><img src="https://i.stack.imgur.com/YgEOd.png" alt="屏幕截图：选择要替换的文本"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在上方输入正则表达式，然后验证其是否与正确的文本匹配。</font></font></p>

<p><a href="https://i.stack.imgur.com/N00l2.png" rel="noreferrer"><img src="https://i.stack.imgur.com/N00l2.png" alt="屏幕截图：在上面输入semver regex"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用星号替换所有匹配项。</font></font></p>

<p><a href="https://i.stack.imgur.com/gfy2d.png" rel="noreferrer"><img src="https://i.stack.imgur.com/gfy2d.png" alt="屏幕截图：用星号替换软件包版本"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跑 </font></font><code>npm update --save</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙猪猪</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我真的很喜欢</font></font><a href="https://www.npmjs.com/package/npm-upgrade" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm-upgrade的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作方式。</font><font style="vertical-align: inherit;">它是一个简单的命令行实用程序，它遍历了所有依赖项，可让您查看当前版本与最新版本的对比，并根据需要进行更新。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font></font><code>npm-upgrade</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在项目根目录（</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">旁边</font><font style="vertical-align: inherit;">）中</font><font style="vertical-align: inherit;">运行后发生的情况的屏幕截图</font><font style="vertical-align: inherit;">：</font></font></p>

<p><a href="https://i.stack.imgur.com/qiwIs.png" rel="noreferrer"><img src="https://i.stack.imgur.com/qiwIs.png" alt="npm升级示例"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于每个依赖项，您可以选择升级，忽略，查看更改日志或完成该过程。</font><font style="vertical-align: inherit;">到目前为止，对我来说效果很好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：要清楚这是一个第三方软件包，需要先安装该命令，然后命令才能运行。</font><font style="vertical-align: inherit;">它不随npm一起提供：</font></font></p>

<pre><code>npm install -g npm-upgrade
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后从具有package.json文件的项目的根目录开始：</font></font></p>

<pre><code>npm-upgrade
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilStafan</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要查看哪些软件包具有较新的版本，请使用以下命令：</font></font></p>

<pre><code>npm outdated
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要更新仅</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依赖项，只需使用以下命令：</font></font></p>

<pre><code>npm install yourPackage@latest --save
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件具有依赖性：</font></font></p>

<pre><code>"@progress/kendo-angular-dateinputs": "^1.3.1",
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那我应该写：</font></font></p>

<pre><code>npm install @progress/kendo-angular-dateinputs@latest --save
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现以上最佳答案的唯一警告是，它将模块更新为最新版本。</font><font style="vertical-align: inherit;">这意味着它可能会更新为不稳定的alpha版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会使用该npm-check-updates实用程序。</font><font style="vertical-align: inherit;">我的小组使用了此工具，并且通过安装稳定的更新使其有效地工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如Etienne所述：安装并运行此程序：</font></font></p>

<pre><code>$ npm install -g npm-check-updates<font></font>
$ npm-check-updates -u<font></font>
$ npm install <font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿樱</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>*</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的版本为最新版本，包括不稳定</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>latest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的版本定义了最新的稳定版本</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用确切地使用最新的稳定版本号修改package.json </font></font><a href="https://github.com/mrsunlin/LatestStablePackages" rel="noreferrer"><code>LatestStablePackages</code></a></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个例子：</font></font></p>

<pre><code>"dependencies": {<font></font>
        "express": "latest"  // using the latest STABLE version<font></font>
    ,   "node-gyp": "latest"    <font></font>
    ,   "jade": "latest"<font></font>
    ,   "mongoose": "*" // using the newest version, may involve the unstable releases<font></font>
    ,   "cookie-parser": "latest"<font></font>
    ,   "express-session": "latest"<font></font>
    ,   "body-parser": "latest"<font></font>
    ,   "nodemailer":"latest"<font></font>
    ,   "validator": "latest"<font></font>
    ,   "bcrypt": "latest"<font></font>
    ,   "formidable": "latest"<font></font>
    ,   "path": "latest"<font></font>
    ,   "fs-extra": "latest"<font></font>
    ,   "moment": "latest"<font></font>
    ,   "express-device": "latest"<font></font>
},<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长古一GO</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从npm 1.3.15开始运行。</font></font></p>

<pre><code>"dependencies": {<font></font>
  "foo": "latest"<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Ss Yy</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>npm-check-updates</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 是一个实用程序，它会使用所有依赖项的最新版本自动调整package.json</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见</font></font><a href="https://www.npmjs.org/package/npm-check-updates" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.org/package/npm-check-updates</font></font></a></p>

<pre><code>$ npm install -g npm-check-updates<font></font>
$ ncu -u<font></font>
$ npm install <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[编辑]如果您使用的是最新版本的，</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则</font><font style="vertical-align: inherit;">这样做的侵入性较小（避免全局安装）</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>$ npx npm-check-updates -u<font></font>
$ npm install <font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子樱</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您恰好使用</font></font><a href="https://code.visualstudio.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Visual Studio Code</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为您的IDE，那么这是一个有趣的小扩展，用于更新</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一键式过程。</font></font></p>

<h2><strong><a href="https://github.com/vscode-contrib/vscode-versionlens" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本许可证</font></font></a></strong></h2>

<p><a href="https://i.stack.imgur.com/NxI5v.gif" rel="noreferrer"><img src="https://i.stack.imgur.com/NxI5v.gif" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">W先生</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依赖项</font><font style="vertical-align: inherit;">更新</font><font style="vertical-align: inherit;">到最新版本，而不必手动打开</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并更改它，可以运行</font></font></p>

<pre><code>npm install {package-name}@* {save flags?}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即</font></font></p>

<pre><code>npm install express@* --save
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">供参考，</font></font><a href="https://docs.npmjs.com/cli/install" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm-install</font></font></a></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如用户</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vespakoen</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在拒绝编辑中</font><font style="vertical-align: inherit;">指出的</font><em><font style="vertical-align: inherit;">那样</font></em><font style="vertical-align: inherit;">，也可以通过以下方式一次更新多个软件包：</font></font></p>

<pre><code>npm install --save package-nave@* other-package@* whatever-thing@*
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">他还根据批准了对外壳的单线处理</font></font><code>npm outdated</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有关</font><font style="vertical-align: inherit;">代码和说明，</font><font style="vertical-align: inherit;">请参见</font></font><a href="https://stackoverflow.com/review/suggested-edits/12171909"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS：我也讨厌不得不手动编辑</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">；）</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
