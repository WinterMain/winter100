---
layout: question
title:  Node.js：什么是ENOSPC错误以及如何解决？
date:   2020-03-18T08:47:16.000Z
description: 我在使用Node.js并将文件上传到服务器时遇到问题。为了将文件上传到服务器，我使用了这个插件。开始将文件上传到服务器时，Node.js进程崩溃并显示错误...
img: 
author: 阿飞飞云
category: question
answer: 11
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在使用Node.js并将文件上传到服务器时遇到问题。</font><font style="vertical-align: inherit;">为了将文件上传到服务器，我使用了这个</font></font><a href="https://github.com/Valums-File-Uploader/file-uploader" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">插件</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">开始将文件上传到服务器时，Node.js进程崩溃并显示错误：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：ENOSPC。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器代码未运行。</font></font></p>

<pre><code>$ df -h<font></font>
Filesystem      Size  Used Avail Use% Mounted on<font></font>
/dev/xvda1      7.9G  4.1G  3.5G  55% /<font></font>
udev            288M  8.0K  288M   1% /dev<font></font>
tmpfs           119M  168K  118M   1% /run<font></font>
none            5.0M     0  5.0M   0% /run/lock<font></font>
none            296M     0  296M   0% /run/shm<font></font>
/dev/xvdf       9.9G  3.0G  6.5G  32% /vol<font></font>
overflow        1.0M  1.0M     0 100% /tmp<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2067篇《Node.js：什么是ENOSPC错误以及如何解决？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里前端Tom</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，在Linux上，sudoing解决了该问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例：</font></font></p>

<pre><code>sudo gulp dev
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomProSam</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您在尝试运行</font></font><code>ember server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令时</font><font style="vertical-align: inherit;">遇到此错误，</font><font style="vertical-align: inherit;">请找到</font></font><code>rm -rf tmp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录。</font><font style="vertical-align: inherit;">然后</font></font><code>ember s</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它帮助了我。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L前端</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这听起来很奇怪，但是是的，系统重新启动或</font></font><code>killall node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我解决了问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">武藏神离</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了相同的错误。</font><font style="vertical-align: inherit;">当我运行Reactjs应用程序时。</font><font style="vertical-align: inherit;">我要做的只是删除node_modules文件夹，然后再次键入并安装node_modules。</font><font style="vertical-align: inherit;">这样可以消除错误。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神乐</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，我已经达到了用户可以拥有的最大文件数量</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查您的电话号码，</font></font><code>quota -s</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并确保文件下的</font><font style="vertical-align: inherit;">电话号码与</font><font style="vertical-align: inherit;">配额不太接近</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子Davaid神乐</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Linux上，这可能是文件监视数量的限制。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发服务器使用</font></font><a href="https://en.wikipedia.org/wiki/Inotify" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">inotify</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来实现热重装。</font><font style="vertical-align: inherit;">inotify API允许开发服务器监视文件并在文件更改时收到通知。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认的inotify文件监视限制因分发而异（在Fedora上为8192）。</font><font style="vertical-align: inherit;">开发服务器的需求通常超过此限制。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的方法是尝试临时增加文件监视限制，然后在满意的情况下进行永久配置更改。</font><font style="vertical-align: inherit;">但是请注意，这会更改整个系统的配置，而不仅仅是节点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要查看当前限制，请执行以下操作：</font></font></p>

<pre><code>sysctl fs.inotify.max_user_watches
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">临时设置新限制：</font></font></p>

<pre><code># this limit will revert after reset<font></font>
sudo sysctl fs.inotify.max_user_watches=524288<font></font>
sudo sysctl -p<font></font>
# now restart the server and see if it works<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置永久限制：</font></font></p>

<pre><code>echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf<font></font>
sudo sysctl -p<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Davaid</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Ubuntu 18.04上，我尝试了一种技巧，该技巧用于重新激活ionic / node监视的文件，并且在这里也可以使用。</font><font style="vertical-align: inherit;">这对于那些无法访问系统conf文件的用户很有用。</font></font></p>

<pre><code>CHOKIDAR_USEPOLLING=1 npm start
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy梅Davaid</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法对此表示</font></font><a href="https://stackoverflow.com/users/68115/grenade"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">赞赏</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但</font><a href="https://stackoverflow.com/users/68115/grenade"><font style="vertical-align: inherit;">@grenade</font></a><font style="vertical-align: inherit;">指出这</font></font><code>npm dedupe</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将解决原因（文件过多），而不是症状。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源：</font></font><a href="https://stackoverflow.com/a/31926452/518191"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Grunt观看错误-等待中…致命错误：观看ENOSPC</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三神无</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新启动计算机可以为我解决问题。</font><font style="vertical-align: inherit;">我首先尝试擦拭，</font></font><code>/tmp/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但节点仍在抱怨。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanPro小哥</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决我的问题的一种简单方法是：</font></font></p>

<pre><code>npm cache clear
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或它所控制的进程正在监视太多文件。</font><font style="vertical-align: inherit;">在构建节点上更新max_user_watches可以永久修复它。</font><font style="vertical-align: inherit;">对于debian，请在终端上输入以下内容：</font></font></p>

<pre><code>echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf &amp;&amp; sudo sysctl -p
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想知道如何</font></font><a href="https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">增加inotify观察者的数量，</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需单击链接。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村Pro</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行以下命令以避免使用ENOSPC：</font></font></p>

<pre><code>echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf &amp;&amp; sudo sysctl -p
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Arch Linux，将此行添加到</font></font><code>/etc/sysctl.d/99-sysctl.conf</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>fs.inotify.max_user_watches=524288
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后执行：</font></font></p>

<pre><code>sysctl --system
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也将在重新启动后持续存在。
</font></font><a href="https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">技术细节来源</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
