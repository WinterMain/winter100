---
layout: question
title:  如何从Windows完全删除node.js
date:   2020-03-20T05:48:36.000Z
description: 我卸载了先前版本的node.js（0.8.11），并从node.js网站下载了最新版本0.10.24并进行了安装。但是，在运行之后node --versi...
img: 
author: 米亚
category: question
answer: 7
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我卸载了先前版本的node.js（0.8.11），并从node.js网站下载了最新版本0.10.24并进行了安装。</font><font style="vertical-align: inherit;">但是，在运行之后</font></font><code>node --version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它仍然表明我正在运行v0.8.11。</font><font style="vertical-align: inherit;">显然，在卸载过程中遗留了一些东西，这导致我尝试通过npm添加模块时遇到各种错误。</font><font style="vertical-align: inherit;">我已经看到了针对OSX和Linux的解决方案，但找不到Windows的任何东西。</font><font style="vertical-align: inherit;">我正在运行Windows 7 64位。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2493篇《如何从Windows完全删除node.js》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云小哥</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的办法是从控制面板中删除Node.js。</font><font style="vertical-align: inherit;">删除后，下载所需版本的Node.js并安装它即可使用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村神无</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，仅靠上述方法是行不通的。</font><font style="vertical-align: inherit;">我已经安装和卸载几个版本中的NodeJS修复这个错误：在故宫Windows错误：EISDIR，请阅读错误（原生），我一直得到任何NPM命令我试图运行工作，其中包括故宫版本：   </font></font><code>npm -v</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，在nodejs文件夹中删除了npm目录，并从</font></font><a href="http://nodejs.org/dist/npm/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm dist</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复制了最新的npm版本</font><font style="vertical-align: inherit;">：然后一切开始工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony老丝</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">昨天我遇到了同样的问题，我的解决方法是：1.从Controlpanel而不是从您的cli卸载2.从其网站下载并安装最新或所需版本的节点3.如果错误地尝试通过cli进行卸载（ （通常不会完全删除），那么在这种情况下，您不会在cpanel中获得卸载选项，请安装相同版本的节点，然后按照我的步骤1。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望它可以帮助某人。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小小哥</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我实际上在Microsoft卸载中失败。</font><font style="vertical-align: inherit;">我已经安装了node-v8.2.1-x64，并且需要运行版本node-v6.11.1-x64。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载失败，并显示以下错误：“ Windows无法访问指定的设备，路径或文件”或类似内容。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最终转到“下载”文件夹，右键单击“ node-v8.2.1-x64 MSI”并选择“卸载”。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问候，乔恩</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论您安装了哪种nodejs软件，都请再次安装。。它要求您像这样删除nodejs。
</font></font><a href="https://i.stack.imgur.com/Ghyjy.png" rel="noreferrer"><img src="https://i.stack.imgur.com/Ghyjy.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方案：Windows没有用于Node安装的程序条目时删除NodeJS</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我跑到哪里我的版本中的NodeJS（0.10.26）可能有问题</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">被卸载，也不能被删除，因为程序和功能在Windows 7（又名添加/删除程序）无我有安装的的NodeJS记录......所以有除了手动删除注册表项和文件外，没有其他选项可以删除它。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">验证您的NodeJS版本的命令：</font></font></em> <code>node --version</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图安装最新推荐的NodeJS版本，但是在安装过程结束时失败并回滚。</font><font style="vertical-align: inherit;">多个版本的NodeJS也都失败了，安装程序也同样将它们回滚了。</font><font style="vertical-align: inherit;">由于没有安装SUDO，因此无法从命令行升级NodeJS。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案：在花了几个小时对问题进行故障排除（包括升级NPM）之后，我决定在现有安装之上，在系统上重新安装NodeJS的EXACT版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该解决方案有效，并且重新安装了NodeJS，没有任何错误。</font><font style="vertical-align: inherit;">更好的是，它还</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在“添加/删除程序”对话框中添加了一个正式条目。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在Windows知道了被遗忘的NodeJS安装，因此我可以完全卸载现有版本的NodeJS。</font><font style="vertical-align: inherit;">然后，我成功安装了Windows平台上推荐的最新NodeNode </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本（在撰写本文时为4.4.5版</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），而没有回滚启动。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我花了一段时间才取得成功，因此我发布了此信息，以防其他有类似问题的人获得帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何从Windows中删除Node.js：</font></font></h3>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">深吸一口气。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跑 </font></font><code>npm cache clean --force</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用卸载程序从“程序和功能”中卸载。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新启动（或者您可能可以通过从任务管理器中杀死所有与节点相关的进程来逃脱）。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查找这些文件夹并删除它们（及其内容）（如果仍然存在）。</font><font style="vertical-align: inherit;">根据您安装的版本，UAC设置和CPU体系结构，这些可能存在或可能不存在：</font></font></p>

<ul>
<li><code>C:\Program Files (x86)\Nodejs</code></li>
<li><code>C:\Program Files\Nodejs</code></li>
<li><code>C:\Users\{User}\AppData\Roaming\npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或</font></font><code>%appdata%\npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><code>C:\Users\{User}\AppData\Roaming\npm-cache</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或</font></font><code>%appdata%\npm-cache</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
<li><code>C:\Users\{User}\.npmrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（并可能在没有</font></font><code>.</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">前缀的</font><font style="vertical-align: inherit;">情况下进行检查</font><font style="vertical-align: inherit;">）</font></font></li>
<li><code>C:\Users\{User}\AppData\Local\Temp\npm-*</code></li>
</ul></li>
<li><p><a href="https://stackoverflow.com/questions/141344/how-to-check-if-directory-exists-in-path"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查您的</font></font><code>%PATH%</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">环境变量，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以确保没有引用</font></font><code>Nodejs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或不</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存在。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仍未</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载，请</font></font><code>where node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在命令提示符下键入，然后您将看到它的驻留位置-删除该位置（可能还要删除其父目录）。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新启动，这是很好的措施。</font></font></p></li>
</ol></div>
        </div></div>
    {% endraw %}
  </div>
<div>
