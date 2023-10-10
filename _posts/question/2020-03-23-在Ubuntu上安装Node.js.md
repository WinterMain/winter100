---
layout: question
title:  在Ubuntu上安装Node.js
date:   2020-03-23T07:34:20.000Z
description: 我正在尝试在Ubuntu 12.10上安装Node.js，但是终端向我显示有关丢失软件包的错误。我尝试了这个：sudo apt-get install...
img: 
author: 斯丁
category: question
answer: 13
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试在Ubuntu 12.10上安装Node.js，但是终端向我显示有关丢失软件包的错误。</font><font style="vertical-align: inherit;">我尝试了这个：</font></font></p>

<pre><code>sudo apt-get install python-software-properties <font></font>
sudo add-apt-repository ppa:chris-lea/node.js <font></font>
sudo apt-get update <font></font>
sudo apt-get install nodejs npm<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当我来到最后一行时</font></font><code>sudo apt-get install nodejs npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显示此错误：</font></font></p>

<pre class="lang-none prettyprint-override"><code>Failed to install some packages. This may mean that<font></font>
you requested an impossible situation or if you are using the distribution<font></font>
distribution that some required packages have not yet been created or been<font></font>
been moved out of Incoming.<font></font>
The following information may help to resolve the situation:<font></font>
The following packages have unmet dependencies:<font></font>
nodejs: Conflicts: npm<font></font>
E: Failed to correct problems, you have held broken packages.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我卸载了</font></font><code>ppa:chris-lea/node.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并尝试了第二种选择：</font></font></p>

<pre><code>sudo apt-get install node.js<font></font>
sudo apt-add-repository ppa:chris-lea/node.js<font></font>
sudo apt-get update<font></font>
sudo apt-get install nodejs npm<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">终端机说，同样的错误，</font></font><code>npm is the latest version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但也向我显示了我在顶部显示的文本。</font><font style="vertical-align: inherit;">我认为是问题所在，</font></font><code>ppa:chris-lea/node.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但我不知道如何解决。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p>Install Node.js on Ubuntu <code>12.10</code> or <code>14.04 LTS</code> or <code>16.04.1 LTS</code></p>

<p>Please avoid to install <code>Node.js</code> with <code>apt-get</code> on <code>Ubuntu</code>. If you already installed Node.js with the built in package manager, please remove that. (<code>sudo apt-get purge nodejs &amp;&amp; sudo apt-get autoremove &amp;&amp; sudo apt-get autoclean</code>)</p>

<p>The installation process on Linux is the same as on <code>OSX</code>.
With the provided script:</p>

<pre><code>$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.3/install.sh | bash<font></font>
<font></font>
$ nvm list<font></font>
$ nvm ls-remote<font></font>
$ nvm install 6.4.0<font></font>
$ nvm use 6.4.0<font></font>
$ nvm alias default 6.4.0<font></font>
$ node -v<font></font>
$ npm install -g npm<font></font>
$ npm -v<font></font>
</code></pre>

<p>One more thing! Don’t forget to run the following command, which increases the amount of inotify watches.</p>

<pre><code>$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf &amp;&amp; sudo sysctl -p
</code></pre>

<p>Hope this help you!</p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请遵循</font><font style="vertical-align: inherit;">NodeSource </font></font><a href="https://github.com/nodesource/distributions#debinstall" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给出的指示，该指示</font><font style="vertical-align: inherit;">致力于为Node.js创建可持续发展的生态系统</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Node.js&gt; = 4.X</font></font></p>

<pre><code># Using Ubuntu<font></font>
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -<font></font>
sudo apt-get install -y nodejs<font></font>
<font></font>
# Using Debian, as root<font></font>
curl -sL https://deb.nodesource.com/setup_4.x | bash -<font></font>
apt-get install -y nodejs<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p>Node.js package is available in the LTS release and the current release. It’s your choice to select which version you want to install on the system as per your requirements. </p>

<p>Use Current Release: At the last update of this tutorial, Node.js 13 is the current Node.js release available.</p>

<pre><code>sudo apt-get install curl<font></font>
curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -<font></font>
</code></pre>

<p>Use LTS Release: At the last update of this tutorial, Node.js 12.x is the LTS release available.</p>

<pre><code>sudo apt-get install curl<font></font>
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -<font></font>
</code></pre>

<p>You can successfully add Node.js PPA to the Ubuntu system. Now execute the below command install Node on and Ubuntu using apt-get. This will also install NPM with node.js. This command also installs many other dependent packages on your system.</p>

<pre><code>sudo apt-get install nodejs
</code></pre>

<p>After installing node.js verify and check the installed version. You can find more details about the current version on node.js official website.</p>

<pre><code>node -v <font></font>
<font></font>
v13.0.1<font></font>
</code></pre>

<p>Also, check the npm version</p>

<pre><code>npm -v <font></font>
<font></font>
6.12.0<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您只需使用以下命令进行安装：</font></font></p>

<pre><code>sudo apt-get install nodejs<font></font>
sudo apt-get install npm<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保您已预安装python和c。</font><font style="vertical-align: inherit;">如果不执行：</font></font></p>

<pre><code>sudo apt-get install python g++ make
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我个人这样做：</font></font></p>

<pre><code>sudo apt-get install python g++ make<font></font>
wget http://nodejs.org/dist/node-latest.tar.gz<font></font>
tar xvfvz node-latest.tar.gz<font></font>
cd node-v0.12.0<font></font>
./configure<font></font>
make<font></font>
sudo make install<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要安装特定版本，而不要从nodejs站点下载所需版本，然后执行最后的树步骤。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我强烈建议不要使用发行版市场上的默认nodejs软件包，因为它可能已过时。</font><font style="vertical-align: inherit;">（即，在撰写本文时，Ubuntu市场上的当前版本是v0.10.25，与最新版本（v0.12.0）相比已经过时了）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以像这样从源代码编译它</font></font></p>

<pre><code>git clone git://github.com/ry/node.git<font></font>
cd node<font></font>
./configure<font></font>
make<font></font>
sudo make install<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处找到详细说明，
 </font></font><a href="http://howtonode.org/how-to-install-nodejs" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：//howtonode.org/how-to-install-nodejs</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><pre><code>wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.19.0/install.sh | bash    <font></font>
<font></font>
nvm install v0.10.33<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需使用nvm进行节点版本控制</font></font><a href="https://github.com/creationix/nvm" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nvm</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长GO</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在最新版本的node中，npm随node.js自动安装。</font><font style="vertical-align: inherit;">你看到了什么，当你键入</font></font><code>node --version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>npm --version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在终端？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以使用npm本身升级npm </font></font></p>

<pre><code>[sudo] npm install -g npm
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天神无</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="https://github.com/creationix/nvm" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nvm</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装nodejs。</font><font style="vertical-align: inherit;">它使您可以使用不同版本而不会发生冲突。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的机器</font></font><code>apt-get</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">又老又破，所以我必须从源代码安装。</font><font style="vertical-align: inherit;">这是对我有用的东西：</font></font></p>

<pre><code># get the latest version from nodejs.org. At the time of this writing, it was 0.10.24<font></font>
curl -o ~/node.tar.gz http://nodejs.org/dist/v0.10.24/node-v0.10.24.tar.gz<font></font>
cd<font></font>
tar -zxvf node.tar.gz<font></font>
cd node-v0.6.18<font></font>
./configure &amp;&amp; make &amp;&amp; sudo make install<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些步骤主要来自</font></font><a href="https://github.com/joyent/node/wiki/Installation"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Joyent的安装Wiki</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋猿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从今天开始，您可以使用以下命令简单地安装它：</font></font></p>

<pre><code>sudo apt-get install nodejs
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是轻松安装NODE.JS的最佳方法。</font><font style="vertical-align: inherit;">对于Ubuntu 12.04、13.04和14.04也是如此</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加Node JS存储库</font></font></strong></p>

<pre><code>[sudo] apt-get install python-software-properties<font></font>
[sudo] apt-add-repository ppa:chris-lea/node.js<font></font>
[sudo] apt-get update<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node.js安装</font></font></strong></p>

<pre><code>[sudo] apt-get install nodejs
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在检查node.js版本</font></font></strong></p>

<pre><code>node -v
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产出</font></font></strong></p>

<pre><code>v0.10.20
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此命令应安装npm。</font></font></strong></p>

<pre><code>npm install
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查npm版本</font></font></strong></p>

<pre><code>npm -v
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">产出</font></font></strong></p>

<pre><code>1.4.3
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果由于某种原因，如果看到未安装npm，则可以尝试运行：</font></font></strong></p>

<pre><code>[sudo] apt-get install npm
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要更新npm，您可以尝试运行：</font></font></strong></p>

<pre><code>[sudo] npm install -g npm
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Davaid梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需按照</font></font><a href="https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager#ubuntu-mint-elementary-os"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">给出的说明进行操作</font><font style="vertical-align: inherit;">：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装示例：</font></font></p>

<pre><code>sudo apt-get install python-software-properties python g++ make<font></font>
sudo add-apt-repository ppa:chris-lea/node.js<font></font>
sudo apt-get update<font></font>
sudo apt-get install nodejs<font></font>
</code></pre>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它会在当前稳定的Ubuntu上安装当前稳定的Node。</font><font style="vertical-align: inherit;">Quantal（12.10）用户可能需要安装software-properties-common软件包才能使</font></font><code>add-apt-repository</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令起作用：</font></font><code>sudo apt-get
  install software-properties-common</code></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从Node.js v0.10.0开始，Chris Lea的仓库中的nodejs软件包包括npm和nodejs-dev。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要</font></font><code>sudo apt-get install nodejs npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只</font><font style="vertical-align: inherit;">给</font></font><code>sudo apt-get install nodejs</code></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
