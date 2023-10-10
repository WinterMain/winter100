---
layout: question
title:  无法安装NodeJ：/ usr / bin / env：节点：没有这样的文件或目录
date:   2020-03-19T01:30:40.000Z
description: 我试图将nodeJs安装到我的Ubuntu 14.04中，以便使用GruntJs。我已经阅读了有关Ubuntu的不同执行方式（问题？）的信息，因此，为...
img: 
author: 逆天十三蛋蛋
category: question
answer: 16
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图将nodeJs安装到我的Ubuntu 14.04中，以便使用GruntJs。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经阅读了有关</font></font><a href="https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager#debian-and-ubuntu-based-linux-distributions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ubuntu的不同执行方式</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="https://github.com/atom/atom/issues/2241"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题？</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）的信息，因此，为了安装它，我做了以下操作：</font></font></p>

<pre><code>sudo apt-get install npm<font></font>
<font></font>
sudo npm install -g grunt-cli<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在输入咕gr声之后，我得到了错误：</font></font></p>

<pre><code>/usr/bin/env: node: No such file or directory
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我尝试了：</font></font></p>

<pre><code>curl -sL https://deb.nodesource.com/setup | sudo bash -<font></font>
<font></font>
sudo apt-get install -y nodejs<font></font>
<font></font>
sudo apt-get update<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再试一次，仍然出现错误，我试过了：</font></font></p>

<pre><code>sudo add-apt-repository https://launchpad.net/~chris-lea/+archive/node.js/<font></font>
<font></font>
sudo apt-get install -y nodejs<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我收到此消息：</font></font></p>

<pre><code>nodejs is already the newest version.<font></font>
0 to upgrade, 0 to newly install, 0 to remove and 3 not to upgrade.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我确实尝试进行清理，以防万一：</font></font></p>

<pre><code>sudo apt-get autoremove
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是没有，错误仍然存​​在：当我键入grunt时，我仍然得到 </font></font><code>/usr/bin/env: node: No such file or directory</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我该怎么办？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无逆天</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p>Just rename the command or file name <code>ln -s /usr/bin/nodejs /usr/bin/node</code> by this command</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY泡芙</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于我的情况下链接</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也</font></font></strong> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要</font></font></strong> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ln -s / usr / bin / nodejs / usr / bin / node</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是您可以以root身份打开/ usr / local / bin / lessc，并将第一行从node更改为nodejs。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-＃！/ usr / bin / env节点</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+＃！/ usr / bin / env nodejs</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Stafan</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><pre><code>sudo PATH="$PATH:/usr/local/bin" npm install -g &lt;package-name&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimEva神奇</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请按照以下命令解决问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在终端中：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">清理整个NPM缓存：</font></font></p>

<pre><code>$ sudo npm cache clean -f
</code></pre></li>
<li><pre><code>sudo npm install -g n
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装最新的稳定版Node.js：</font></font></p>

<pre><code>sudo n stable
</code></pre></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，已安装最新版本的Node.js。</font><font style="vertical-align: inherit;">使用以下命令检查版本：</font></font></p>

<pre><code>node -v
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子神乐</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据您安装节点的方式，大多数情况下它可能不在/ usr / bin /中，就我而言，我是使用nvm进行安装的，因此我的节点位于./nvm/versions中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用此命令，</font></font><code>which node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到了路径，但是为了简化工作，可以运行此命令。</font></font></p>

<pre><code>nodepath=$(which node); sudo ln -s $nodepath /usr/bin/node
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的命令将获取您节点的位置并为您创建一个链接。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐猴子</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虽然</font></font><code>ln -s</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然是最简单的解决方法，但有一个解释：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于与另一个软件包的冲突，Ubuntu存储库中的可执行文件称为nodejs而不是node。</font><font style="vertical-align: inherit;">在运行软件时，请记住这一点。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装时会出现此建议</font></font><code>sudo apt-get install nodejs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，其他一些已知工具（我不知道它的作用。虽然在ubuntu存储库中是已知的，但默认情况下未在16.04中安装它）占用了该命名空间。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果Ubuntu提供了一个“干净”解决此问题的建议，如果不是通过手工完成，该软件包会做的话，那会很好。</font><font style="vertical-align: inherit;">（碰撞仍然是碰撞……如果+何时会发生）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞番长</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有两种解决方案：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">a）将您的PATH变量设置为包括“ / usr / local / bin”</font></font></p>

<p><code>export PATH="$PATH:/usr/local/bin"</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">b）创建一个指向您路径中的“ / usr / bin”的符号链接</font></font></p>

<p><code>ln -s /usr/bin/nodejs /usr/bin/node</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对您有所帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅路易</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您已经安装了nodejs（请使用进行检查</font></font><code>which nodejs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）并且不想安装其他软件包，则可以以root用户身份进行：</font></font></p>

<pre><code>update-alternatives --install /usr/bin/node node /usr/bin/nodejs 99
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A阿飞</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我使用gulp时，出现此错误。</font></font></p>

<pre><code>~$ gulp
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ usr / bin / env：“节点”：没有这样的文件或目录</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过执行以下命令已将其删除，您必须记住/ usr / bin目录具有所有权限。</font></font></p>

<pre><code>~$ ln -s /usr/bin/nodejs /usr/bin/node
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Eva</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做就是了</font></font></p>

<pre><code>$ sudo apt-get install nodejs-legacy
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将开始工作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁理查德</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，</font></font><a href="https://nodejs.org/en/download/package-manager/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装nodejs-legacy</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决了该问题。</font></font></p>

<pre><code>sudo apt-get install nodejs-legacy
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天番长</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现这通常是一个错误命名的错误，如果您是从软件包管理器安装的，则bin可能称为nodejs，因此您只需要像这样对其进行符号链接 </font></font></p>

<pre><code>ln -s /usr/bin/nodejs /usr/bin/node
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Harry</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您能够使用nodejs命令在ubuntu终端上访问节点，则可以使用-创建一个nodejs和node的符号链接来解决此问题</font></font></p>

<p><code>ln -s /usr/bin/nodejs /usr/bin/node</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可以解决问题</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光神奇</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为您应该升级最新的节点版本</font></font></p>

<pre><code>sudo npm cache clean -f<font></font>
sudo npm install -g n<font></font>
sudo n stable<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi卡卡西</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题不在于节点的版本。</font><font style="vertical-align: inherit;">相反，这是在Ubuntu中默认安装NodeJS的方式。</font><font style="vertical-align: inherit;">在Ubuntu中运行Node应用程序时，您必须运行</font></font><code>nodejs somethign.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>node something.js</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，在终端中调用的应用程序名称为</font></font><code>nodejs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">and not </font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">这就是为什么有必要为一个符号简单地将所有收到的命令</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>nodejs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>ln -s /usr/bin/nodejs /usr/bin/node
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A伽罗</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到了答案。</font><font style="vertical-align: inherit;">万一它对某人有帮助，我可以在这里发布：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行符号链接可以解决此问题：（</font></font><code>ln -s /usr/bin/nodejs /usr/bin/node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我的感谢和对</font></font><a href="https://stackoverflow.com/questions/20886217/browserify-error-usr-bin-env-node-no-such-file-or-directory"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bodokaiser的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> +1投票</font><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：我认为这篇文章并非完全相同，因为该文章有点像是浏览器问题。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
