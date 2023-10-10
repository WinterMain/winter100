---
layout: question
title:  Rails-找不到JavaScript运行时？
date:   2020-03-20T05:56:54.000Z
description: 我在rails 3.1.0.rc4本地计算机上使用创建了一个新的Rails项目，但是当我尝试启动服务器时，我得到了：找不到JavaScript运行时。请参...
img: 
author: 小宇宙
category: question
answer: 10
tags: JavaScript Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在</font></font><code>rails 3.1.0.rc4</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地计算机上</font><font style="vertical-align: inherit;">使用创建了一个新的Rails项目</font><font style="vertical-align: inherit;">，但是当我尝试启动服务器时，我得到了：找不到JavaScript运行时。</font><font style="vertical-align: inherit;">请参阅</font></font><a href="https://github.com/sstephenson/execjs"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获取可用运行时列表。</font><font style="vertical-align: inherit;">（</font></font><code>ExecJS::RuntimeUnavailable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：这与Heroku无关。</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2501篇《Rails-找不到JavaScript运行时？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望您已经预装了nodejs || </font><font style="vertical-align: inherit;">nmv。</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您已经有了nvm时，</font><font style="vertical-align: inherit;">我的解决方案</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不需要gem设置或安装带有</font></font><code>sudo apt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ </font><font style="vertical-align: inherit;">node </font><font style="vertical-align: inherit;">” </font><font style="vertical-align: inherit;">的节点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您只需要编辑RubyMine的DesctopEntry。</font><font style="vertical-align: inherit;">为此，我们将执行以下小步骤：</font></font></p>

<ol>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">去</font></font></strong> <code>usr/share/applications</code></li>
<li><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在任何编辑器中</font><strong><font style="vertical-align: inherit;">打开</font></strong><font style="vertical-align: inherit;">（我使用vim）Rubymine DesktopEntry</font></font><code>vim RubyMine</code></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第6行（从Exec开始）。</font><font style="vertical-align: inherit;">您应该添加到开始</font></font><code>/bin/bash -i -c</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">所以你的线应该像这样
</font></font><code>Exec=/bin/bash -i -c "/home/USERNAME/rubymine/RubyMine-2019.1.2/bin/rubymine.sh" %f</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做完了！</font><font style="vertical-align: inherit;">你真光荣！</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为一项好处，您的所有环境变量现在都可用于RubyMine。</font><font style="vertical-align: inherit;">因此，添加它们不会感到痛苦。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿小胖猿</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在CentOS 6.5上，以下对我有用：</font></font></p>

<pre><code>sudo yum install -y nodejs
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Windows机器上遇到了这个问题，安装node.js是最终对我有用的解决方案。</font><font style="vertical-align: inherit;">这是在尝试了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多种</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他途径</font><font style="vertical-align: inherit;">之后</font><font style="vertical-align: inherit;">做出的，包括尝试使“ therubyracer”发挥作用。</font><font style="vertical-align: inherit;">尽管node.js的github建议在Windows上进行安装仍然不稳定，但</font></font><a href="http://nodejs.org/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://nodejs.org/上</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的网站</font><font style="vertical-align: inherit;">具有Windows安装程序，可以很好地运行。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Redhat服务器上使用Phusion Passenger（作为Nginx模块运行）遇到了这个问题。</font><font style="vertical-align: inherit;">我们已经安装了Javascript运行时。</font><font style="vertical-align: inherit;">同一父目录中的其他Rails应用程序运行良好。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原来，我们遇到了权限问题。</font><font style="vertical-align: inherit;">运行“ ls -l”，查看文件夹是否与系统上其他正在运行的应用程序具有相同的所有者和组。</font><font style="vertical-align: inherit;">我必须在文件夹上运行chown和chgrp（使用递归开关）来修复它。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端小胖</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装Javascript运行时</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该错误是由本地计算机上缺少Javascript运行时引起的。</font><font style="vertical-align: inherit;">要解决此问题，您需要安装NodeJS。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过Node Version Manager或</font></font><a href="https://github.com/creationix/nvm" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nvm</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装</font><a href="https://github.com/creationix/nvm" rel="nofollow"><font style="vertical-align: inherit;">NodeJS</font></a><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，安装</font></font><code>nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：  </font></font></p>

<pre><code>$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font></font><code>nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下方式</font><font style="vertical-align: inherit;">安装Node </font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>nvm install 5.9.1
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将安装</font></font><code>5.9.1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node </font><font style="vertical-align: inherit;">版本</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom斯丁</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><code>sudo apt-get install nodejs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我不起作用。</font><font style="vertical-align: inherit;">为了使其正常工作，我必须执行以下操作：</font></font></p>

<pre class="lang-sh prettyprint-override"><code>sudo apt-get install python-software-properties<font></font>
sudo add-apt-repository ppa:chris-lea/node.js<font></font>
sudo apt-get update<font></font>
sudo apt-get install nodejs<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助与我有相同问题的人。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><h2><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装诸如nodejs之类的javascript运行时库可以解决此问题</font></font></strong></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要在ubuntu上安装nodejs，可以在终端中键入以下命令：</font></font></p>

<pre><code>sudo apt-get install nodejs
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要在使用yum的系统上安装nodejs，请在终端中键入以下内容：</font></font></p>

<pre><code>yum -y install nodejs
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Windows平台上，我也遇到了这个问题。 </font></font></p>

<pre><code>C:\Windows\System32
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路径</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并重新启动计算机。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果一切失败，您可以尝试</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＃aptitude安装nodejs</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为根。</font><font style="vertical-align: inherit;">您可以使用以下命令测试安装：</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＃节点-v</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要安装NPM，请参阅以下</font></font><a href="http://antler.co.za/2014/04/install-node-js-npm-on-debian-stable-wheezy-7/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">希望能帮助到你。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.20</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如果您已经从源代码安装了nodejs，而execjs无法识别它，那么您可能需要尝试以下技巧：</font><a href="https://coderwall.com/p/hyjdlw" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> ://coderwall.com/p/hyjdlw</font></font><a href="https://coderwall.com/p/hyjdlw" rel="nofollow"><font style="vertical-align: inherit;"></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
