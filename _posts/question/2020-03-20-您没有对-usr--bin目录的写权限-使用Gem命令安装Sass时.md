---
layout: question
title:  “您没有对/ usr / bin目录的写权限。” 使用Gem命令安装Sass时
date:   2020-03-20T05:57:07.000Z
description: 我在Mac上，尝试使用终端“ sudo gem install sass”中的命令安装Sass。然后输入密码，一切正常，直到弹出为止，“错误：执行ge...
img: 
author: 西里神奇
category: question
answer: 2
tags: macos CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Mac上，尝试使用终端“ sudo gem install sass”中的命令安装Sass。</font><font style="vertical-align: inherit;">然后输入密码，一切正常，直到弹出为止，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“错误：执行gem时...（Gem :: FilePermissionError）您没有对/ usr / bin目录的写权限。”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我确实使用sudo，但是它仍然无法正常工作，这是您不能授予自己读取和写入权限的事情之一。</font><font style="vertical-align: inherit;">有任何想法吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">韦德</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2502篇《“您没有对/ usr / bin目录的写权限。” 使用Gem命令安装Sass时》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞村村</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Generamba：</font></font></p>

<pre><code>sudo gem install -n /usr/local/bin generamba
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><code>/usr/bin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">受系统完整性保护的保护，并且任何人甚至都不可以由root写入。</font><font style="vertical-align: inherit;">您需要运行：</font></font></p>

<pre><code>sudo gem install -n /usr/local/bin sass
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装到可写目录中</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
