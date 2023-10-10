---
layout: question
title:  使用Linux命令行卸载Node.JS？
date:   2020-03-23T03:35:24.000Z
description: 如何在Linux中使用cmd行卸载node.js？...
img: 
author: 飞云
category: question
answer: 11
tags: Linux Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在Linux中使用cmd行卸载node.js？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2739篇《使用Linux命令行卸载Node.JS？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端MandyJinJin</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">George Bailey的答案很好。</font><font style="vertical-align: inherit;">我只需要添加以下标志，并在需要时使用sudo即可：</font></font></p>

<pre><code> sudo rm -rf bin/node bin/node-waf include/node lib/node lib/pkgconfig/nodejs.pc share/man/man1/node
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry前端Itachi</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用“ ROCK-SOLID NODE.JS PLATFORM ON UBUNTU”脚本安装后，我得到了此输出。</font><font style="vertical-align: inherit;">告诉您如何卸载nodejs。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">做完了 </font><font style="vertical-align: inherit;">新软件包已安装并保存到</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/tmp/node-install/node-v0.8.19/nodejs_0.8.19-1_i386.deb</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以随时使用以下方法将其从系统中删除：</font></font></p>

<pre><code>  dpkg -r nodejs
</code></pre>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天小卤蛋Green</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这至少部分有效（尚未调查）：
 </font></font><code>
nvm uninstall &lt;VERSION_TO_UNINSTALL&gt;
</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
例如：</font></font></p>

<p><code>nvm uninstall 4.4.5
</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Davaid</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您只想更新节点，也有一个简洁的更新器</font></font></p>

<p><a href="https://github.com/creationix/nvm" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/creationix/nvm</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用，</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">git clone git：//github.com/creationix/nvm.git〜/ .nvm</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">源〜/ .nvm / nvm.sh</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nvm安装v0.4.1</font></font></p>
</blockquote></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决此问题的最佳方法是从开始做起：</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装</font></font><a href="http://brew.sh/linuxbrew/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">酿造</font></font></a></strong></p>

<pre><code>#HERE IS HOW: PASTE IN TERMINAL<font></font>
<font></font>
sudo apt-get install build-essential curl git m4 ruby texinfo libbz2-dev libcurl4-openssl-dev libexpat-dev libncurses-dev zlib1g-dev<font></font>
<font></font>
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/linuxbrew/go/install)"<font></font>
</code></pre>

<p>Then at the end of your .bashrc file(In your home directory press Ctrl + H)</p>

<pre><code>export PATH="$HOME/.linuxbrew/bin:$PATH"<font></font>
export MANPATH="$HOME/.linuxbrew/share/man:$MANPATH"<font></font>
export INFOPATH="$HOME/.linuxbrew/share/info:$INFOPATH"<font></font>
</code></pre>

<p>Then restart terminal so the modification to .bashrc are reloaded</p>

<p><strong>TO INSTALL NODE</strong></p>

<pre><code>brew install node
</code></pre>

<p><strong>TO CHECK VERSION</strong></p>

<pre><code>node -v<font></font>
npm -v<font></font>
</code></pre>

<p><strong>TO UPDATE NODE</strong></p>

<pre><code>brew update<font></font>
brew upgrade node<font></font>
</code></pre>

<p><strong>TO UNINSTALL NODE</strong></p>

<pre><code>brew uninstall node
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好手动删除NodeJS及其模块，因为安装后会留下很多文件，链接和模块，后来在重新配置NodeJS及其模块的另一个版本时会产生问题。</font><font style="vertical-align: inherit;">运行以下命令。</font></font></p>

<pre><code>sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node* /usr/local/lib/dtrace/node.d ~/.npm ~/.node-gyp /opt/local/bin/node opt/local/include/node /opt/local/lib/node_modules 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">须藤rm -rf / usr / local / lib / node *     </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">须藤rm -rf / usr / local / include / node *         </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">须藤rm -rf / usr / local / bin / node *</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成了</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关命令的逐步指南，请</font></font><a href="http://amcositsupport.blogspot.in/2016/07/to-completely-uninstall-node-js-from.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见http://amcositsupport.blogspot.in/2016/07/to-completely-uninstall-node-js-from.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这帮助我解决了我的问题。  </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用</font></font><code>curl</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font><font style="vertical-align: inherit;">安装了节点</font></font><code>yum</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>sudo curl --silent --location https://rpm.nodesource.com/setup_4.x | bash -<font></font>
sudo yum -y install nodejs<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以使用删除它</font></font><code>yum</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>sudo yum remove nodejs
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，使用</font></font><code>curl</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本会导致安装错误版本的节点。</font></font><a href="https://github.com/nodesource/distributions/issues/340" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一个错误</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会导致</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装v6.7而不是</font><font style="vertical-align: inherit;">脚本中</font></font><code>(../setup_4.x)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">的路径</font><font style="vertical-align: inherit;">所</font><font style="vertical-align: inherit;">预期的v4.x。</font></font><code>curl</code><font style="vertical-align: inherit;"></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要卸载节点，我将遵循@George接受的答案，因为我已经没有源了，但是在这样做之前，我先运行了：</font></font></p>

<pre><code>sudo npm rm npm -g
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这似乎摆脱了系统目录（例如</font></font><code>/usr/bin/npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和）中</font><font style="vertical-align: inherit;">的npm </font></font><code>/usr/lib/npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我从</font></font><a href="http://comments.gmane.org/gmane.comp.lang.javascript.nodejs/22051" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">得到命令</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">然后</font></font><code>~/.npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">我找到一个</font><font style="vertical-align: inherit;">目录，该目录已手动删除。</font><font style="vertical-align: inherit;">老实说，我不知道npm的所有痕迹是否都已删除，但是我找不到其他东西。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">抱歉，当您要从计算机上完全删除节点时，George Bailey的答案确实很好。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个答案来自：@tedeh
 </font></font><a href="https://github.com/nodesource/distributions/issues/486" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/nodesource/distributions/issues/486</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您想安装新版本的节点，则必须使用以下代码</font></font></p>

<pre><code>sudo rm -rf /var/cache/yum<font></font>
sudo yum remove -y nodejs<font></font>
sudo rm /etc/yum.repos.d/nodesource*<font></font>
sudo yum clean all<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将新的nodejs版本添加到“ yum”节点的新版本中</font></font></p>

<pre><code>#using this command for Node version 8<font></font>
curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -<font></font>
<font></font>
#using this command for Node version 10<font></font>
curl --silent --location https://rpm.nodesource.com/setup_10.x | sudo bash -<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装nodejs</font></font></p>

<pre><code>sudo yum -y install nodejs
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望对您有帮助！！！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果从源安装，则可以发出以下命令：</font></font></p>

<pre><code>sudo make uninstall
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您按照</font></font><a href="https://github.com/nodejs/node/wiki" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/nodejs/node/wiki</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">的说明</font><font style="vertical-align: inherit;">安装到$ HOME / local / node，则必须在上一行之前键入以下内容：</font></font></p>

<pre><code>./configure --prefix=$HOME/local/node
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ubuntu 12.04中，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需键入</font></font></p>

<pre><code>$ sudo apt-get remove nodejs
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">轻松卸载nodejs和npm</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
