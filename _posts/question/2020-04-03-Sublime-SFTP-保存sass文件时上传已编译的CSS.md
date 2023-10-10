---
layout: question
title:  Sublime SFTP-保存sass文件时上传已编译的CSS
date:   2020-04-03T06:52:09.000Z
description: 我在Sublime中开发html / css。我正在用sass编写CSS，并使用Sublime的构建系统在文件保存时生成CSS文件。它还配置为使用SFTP...
img: 
author: Gil伽罗小宇宙
category: question
answer: 6
tags: CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Sublime中开发html / css。</font><font style="vertical-align: inherit;">我正在用</font></font><a href="http://sass-lang.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sass</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编写CSS，</font><font style="vertical-align: inherit;">并使用Sublime的构建系统在文件保存时生成CSS文件。</font><font style="vertical-align: inherit;">它还配置为使用</font></font><a href="http://wbond.net/sublime_packages/sftp/usage" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SFTP</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插件</font><font style="vertical-align: inherit;">保存时上传</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是生成的css文件没有上传，因为那不是我直接保存的文件。</font><font style="vertical-align: inherit;">我试图查看SFTP插件是否可以上传在本地修改的所有文件，但似乎不支持该方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我能做些什么来实现这一目标？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4034篇《Sublime SFTP-保存sass文件时上传已编译的CSS》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">SFTP为此提供了一个选项。</font><font style="vertical-align: inherit;">在程序包控件中搜索SFTP&gt;监视文件。</font><font style="vertical-align: inherit;">选择后，“ SFTP监视”将出现在底部命令信息中。</font><font style="vertical-align: inherit;">现在，每次保存时，sass和兼容的css都将被上载到其重复的文件夹中。  </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于Sublime SFTP似乎不支持此功能，因此您可能必须走另一条路。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议您使用某种东西来监视您的css文件夹，并自动将所有更改上传到您的服务器。</font><font style="vertical-align: inherit;">使用优质的WinSCP（如果您使用的是Windows）可以使用，但是任何同步文件夹的方法都可以使用。</font></font></p>

<p><a href="http://winscp.net/eng/docs/task_keep_up_to_date" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://winscp.net/eng/docs/task_keep_up_to_date</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还要注意，您可以通过以下方法将文件的本地副本映射到远程副本：打开Sublime中的本地文件夹，然后在侧边栏中右键单击它，然后选择SFTP / FTP-&gt;映射到远程...进行设置建立连接，请确保输入适当的remote_path以将文件夹映射到。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以进行构建/编译，打开本地已编译文件，右键单击代码，然后在SFTP / FTP菜单中选择“监视文件”选项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，当您将来再次构建时，在编译文件仍然打开的情况下，它们将在不久之后上载到服务器（以及在切换选项卡以查看它们时在Sublime中刷新）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我仍在使用Sublime SFTP上传脚本文件（js / css / php等）。</font><font style="vertical-align: inherit;">通常，我按快捷方式上传打开的文件（Ctrl Alt U + N）。</font><font style="vertical-align: inherit;">但这很烦人，尤其是在频繁使用免责声明窗口的情况下。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在nodejs上编写了一个简单的工具，它可以监视项目文件夹并在更改后上载任何文件。</font><font style="vertical-align: inherit;">它并不完美，但是使我的工作流程更加舒适：</font></font><a href="https://github.com/liberborn/live-uploader" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://github.com/liberborn/live-uploader" rel="nofollow"><font style="vertical-align: inherit;">//github.com/liberborn/live-uploader</font></a><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最终报废了SFTP并使用</font></font><a href="http://www.expandrive.com/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ExpanDrive</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">非常适合我的工作流程。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会把解决方案混在一起，以防万一有人像我那样迷失于此，并希望尽可能地坚持仅基于ST的工作流。</font><font style="vertical-align: inherit;">如果您使用ST的SFTP软件包，则有一个选项可以监视文件以进行外部保存。</font></font></p>

<p><img src="https://i.stack.imgur.com/WCblc.png" alt="在此处输入图片说明"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不幸的是，使用ST构建系统来编译我的SASS时，SFTP不知何故。</font><font style="vertical-align: inherit;">但是，SASS CLI的watch实用程序可以触发上传。</font><font style="vertical-align: inherit;">设置后，假设目标文件保持打开状态，SFTP将在每次构建后将其上传。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回顾一下，</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开目标文件，然后打开命令选项板。</font><font style="vertical-align: inherit;">输入</font></font><code>SFTP: Monitor File (Upload on External Save)</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我而言，启动您喜欢的任何CLI监视/构建实用程序： </font></font><code>sass --watch app.scss:app.css</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">保持目标文件打开，否则S​​FTP监视器似乎停止。</font></font></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请享用！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：您也可以通过在侧边栏上右键单击要监视的文件并选择...来启用文件监视。</font></font></p>

<p><img src="https://i.stack.imgur.com/Lbufv.png" alt="边栏对话框选项，用于启用文件监视"></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
