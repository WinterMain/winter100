---
layout: question
title:  Node.js / Windows错误：ENOENT，状态为“ C：\ Users \ RT \ AppData \ Roaming \ npm”
date:   2020-03-13T09:58:50.000Z
description: 我有Windows 7 32位。我安装了最新的32位Node.js。当我尝试运行命令时npm install jquery，收到错误消息：  错误：...
img: 
author: A理查德蛋蛋
category: question
answer: 6
tags: Windows Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有Windows 7 32位。</font><font style="vertical-align: inherit;">我安装了最新的</font><font style="vertical-align: inherit;">32位</font></font><a href="http://en.wikipedia.org/wiki/Node.js"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js。</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我尝试运行命令时</font></font><code>npm install jquery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，收到错误消息：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：ENOENT，状态为'C：\ Users \ RT \ AppData \ Roaming \ npm </font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个人如何解决呢？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯Sam</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我需要来自github的以 TypeScript编写的软件包。</font><font style="vertical-align: inherit;">我从master分支中将最新版本进行了git pull到主项目的根目录中。</font><font style="vertical-align: inherit;">然后，我进入目录并进行了npm安装，以便gulp命令可以正常工作以生成ES5模块。</font><font style="vertical-align: inherit;">无论如何，总而言之，我的构建过程试图从这个新文件夹构建文件，因此我不得不将其移出根目录。</font><font style="vertical-align: inherit;">这是导致这些相同的错误。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐古一</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过npm安装软件包时遇到了同样的问题。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动</font><font style="vertical-align: inherit;">创建</font><font style="vertical-align: inherit;">文件夹</font><font style="vertical-align: inherit;">后</font><font style="vertical-align: inherit;">，</font></font><code>C:\Users\UserName\AppData\Roaming\</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该特定错误消失了，但是它尝试在该</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹中</font><font style="vertical-align: inherit;">创建其他目录时却出现了类似的多个错误，但</font><font style="vertical-align: inherit;">失败了。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以管理员身份运行命令提示符</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后，此问题已解决</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near飞云</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以通过手动安装节点软件包来解决此问题。</font></font></p>

<pre><code>npm install npm -g
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样做的过程将设置所有必需的目录。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门达蒙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议为您的npm模块设置一个替代位置。</font></font></p>

<pre><code>npm config set prefix C:\Dev\npm-repository\npm --global <font></font>
npm config set cache C:\Dev\npm-repository\npm-cache --global  <font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，您可以将位置设置为最适合的位置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我来说效果很好，可以解决您可能遇到的所有权限问题。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐古一</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以转到“ </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开始”菜单</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并搜索Node.js图标，然后打开外壳程序，然后使用</font></font></p>

<pre><code>install &lt;packagename&gt; -g
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里古一</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在显示的路径中手动创建名为“ npm”的文件夹可以解决该问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以在“ </font><a href="https://github.com/npm/npm/wiki/Troubleshooting#error-enoent-stat-cusersuserappdataroamingnpm-on-windows-7" rel="noreferrer"><font style="vertical-align: inherit;">故障排除”页面</font></a><font style="vertical-align: inherit;">上找到更多信息。</font></font><a href="https://github.com/npm/npm/wiki/Troubleshooting#error-enoent-stat-cusersuserappdataroamingnpm-on-windows-7" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
