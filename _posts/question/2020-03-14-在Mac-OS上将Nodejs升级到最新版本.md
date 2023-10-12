---
layout: question
title:  在Mac OS上将Node.js升级到最新版本
date:   2020-03-14T04:49:46.000Z
description: 当前，我在Mac OS X 10.7.4上使用Node.js v0.6.16。现在，我想将其升级到最新的Node.js v0.8.1。但是从nodejs....
img: 
author: Itachi达蒙Green
category: question
answer: 23
tags: macos Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前，我在Mac OS X 10.7.4上使用Node.js v0.6.16。</font><font style="vertical-align: inherit;">现在，我想将其升级到最新的Node.js v0.8.1。</font><font style="vertical-align: inherit;">但是从nodejs.org下载并安装了最新的软件包文件后，我发现当我在终端中键入“ node -v”时，系统仍在使用v0.6.16而不是v0.8.1。</font><font style="vertical-align: inherit;">我错过了任何步骤吗？</font><font style="vertical-align: inherit;">或者，在安装最新版本之前，我应该彻底卸载旧版本吗？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顺便说一句，我知道nvm可以帮助管理nodejs包</font></font></p>

<p><a href="https://github.com/creationix/nvm/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/creationix/nvm/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有不使用它就可以升级Node.js的方法？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经用谷歌搜索了这个问题，但是在我看来，对于最新的Node.js，这个问题没有很明确的答案。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1580篇《在Mac OS上将Node.js升级到最新版本》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小Itachi</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这只是为未安装</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Homebrew的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Node添加人员的一些信息，</font><font style="vertical-align: inherit;">但是</font><font style="vertical-align: inherit;">在</font><em><font style="vertical-align: inherit;">Mac OS X</font></em><font style="vertical-align: inherit;">上</font><font style="vertical-align: inherit;">尝试使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装软件包时会遇到该错误</font><font style="vertical-align: inherit;">。</font></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现这篇</font></font><a href="https://stackabuse.com/how-to-uninstall-node-js-from-mac-osx/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很好的文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解释了如何以</font><font style="vertical-align: inherit;">最初安装它的方式</font><font style="vertical-align: inherit;">完全删除</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NPM</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ñ</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全从我的机器上取下，我刚刚重新安装</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js的</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用官方</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.pckg安装程序</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://nodejs.org/en/download/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点的网站</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，一切只是回到正常。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助某人。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一蛋蛋凯</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我仅用一行代码就能在约20秒内完成更新</font></font></p>

<pre><code>sudo n latest
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他命令对我不起作用，但是此命令有效。</font><font style="vertical-align: inherit;">希望它能帮助到别人。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro乐</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单安全的步骤</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤1：安装NVM</font></font></p>

<pre><code>brew install nvm
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤2：为NVM创建目录</font></font></p>

<pre><code>mkdir ~/.nvm/
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤3：设定环境变数</font></font></p>

<pre><code>nano ~/.bash_profile
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">粘贴下面的代码</font></font></p>

<pre><code>export NVM_DIR=~/.nvm<font></font>
source $(brew --prefix nvm)/nvm.sh<font></font>
<font></font>
source ~/.bash_profile<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤4：仔细检查您的工作</font></font></p>

<pre><code>nvm ls
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤5：安装节点</font></font></p>

<pre><code>nvm install 9.x.x
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤6：升级</font></font></p>

<pre><code>nvm ls-remote<font></font>
<font></font>
   v10.16.2   (LTS: Dubnium)<font></font>
   v10.16.3   (Latest LTS: Dubnium) ..........<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nvm安装v10.16.3</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">故障排除</font></font></strong></p>

<pre><code>Error Example #1<font></font>
rm -rf /usr/local/lib/node_modules<font></font>
brew uninstall node<font></font>
brew install node --without-npm<font></font>
echo prefix=~/.npm-packages &gt;&gt; ~/.npmrc<font></font>
curl -L https://www.npmjs.com/install.sh | sh<font></font>
</code></pre>

<p><a href="https://www.chrisjmendez.com/2018/02/07/install/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.chrisjmendez.com/2018/02/07/install/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村AL</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有同样的问题。</font><font style="vertical-align: inherit;">这对我有用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为我是</font><font style="vertical-align: inherit;">从node.js网站上</font><strong><font style="vertical-align: inherit;">全局</font></strong><font style="vertical-align: inherit;">下载并安装node.js的</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我所做的就是尝试NVM（节点版本管理器）。</font><font style="vertical-align: inherit;">请在终端中按以下顺序执行命令</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">curl -o- </font></font><a href="https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> | </font><font style="vertical-align: inherit;">重击</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令-v nvm</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nvm安装节点</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点-v（确认更新） </font></font></p></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里GO</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据项目要求使用nvm升级节点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过自制软件安装nvm。brew更新brew安装nvm mkdir〜/ .nvm nano〜/ .bash_profile</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的.bash_profile文件（根据您的shell，您可能正在使用其他文件）中，添加以下内容：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导出NVM_DIR =〜/ .nvm源$ {brew --prefix nvm）/nvm.sh</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">源〜/ .bash_profile echo $ NVM_DIR</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">朔风</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p>These 2 methods I tried are not working:</p>

<ol>
<li>Use npm</li>
</ol>

<p><code>sudo npm cache clean -f</code></p>

<p><code>sudo npm install -g n</code></p>

<p><code>sudo n stable</code></p>

<ol start="2">
<li>Manual install node from official website (<a href="https://nodejs.org/en/" rel="nofollow noreferrer">https://nodejs.org/en/</a>)</li>
</ol>

<p>After trying, <code>node -v</code> still shows the old version of node.</p>

<hr>

<p>Below method works for me:</p>

<p>Step 1: Install nvm (for more details: <a href="https://github.com/creationix/nvm#installation" rel="nofollow noreferrer">https://github.com/creationix/nvm#installation</a>)</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开终端并输入以下命令：</font></font></p>

<p><code>curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭终端，然后重新打开。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">键入以下命令以检查是否已安装nvm：</font></font></p>

<p><code>command -v nvm</code></p>

<p><a href="https://i.stack.imgur.com/HRGjQ.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/HRGjQ.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤2：要下载，编译和安装最新版本的node，请输入以下命令：</font></font></p>

<p><code>nvm install node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> （“节点”是最新版本的别名）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查节点是否获取最新版本（v10.11.0）。</font></font></p>

<p><a href="https://i.stack.imgur.com/xmrUF.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/xmrUF.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装最新的节点还会安装最新的npm。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查npm是否获得最新版本（6.4.1）。</font></font></p>

<p><a href="https://i.stack.imgur.com/DiIQ9.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/DiIQ9.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪Jim</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最新版本：
</font></font><code>nvm install node</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具体版本：
</font></font><code>nvm install 6.14.4</code></p>

<p><a href="https://github.com/creationix/nvm" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/creationix/nvm</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小猿</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以运行，但不能隐藏...最后，</font><font style="vertical-align: inherit;">无论如何</font><font style="vertical-align: inherit;">您将使用</font></font><a href="https://github.com/creationix/nvm" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NVM</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇古一</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><pre><code>sudo npm install -g n
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">接着 </font></font></p>

<pre><code>sudo n latest for linux/mac users
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Windows，请重新安装节点。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋伽罗猿</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Nvm Nvm是基于脚本的节点版本管理器。</font><font style="vertical-align: inherit;">您可以按照本文档中的说明使用卷毛和bash单线笔轻松安装它。</font><font style="vertical-align: inherit;">在Homebrew上也可以使用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您已经成功安装了nvm。</font><font style="vertical-align: inherit;">以下将安装最新版本的节点。</font></font></p>

<pre><code> nvm install node --reinstall-packages-from=node
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后一个选项将所有全局npm软件包安装到您的新版本中。</font><font style="vertical-align: inherit;">这样，像mocha和node-inspector这样的程序包就可以继续工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">N N是基于npm的节点版本管理器。</font><font style="vertical-align: inherit;">您可以通过先安装某些版本的node然后运行来安装它</font></font><code>npm install -g n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您已经成功安装了n。</font><font style="vertical-align: inherit;">以下将安装最新版本的节点。</font></font></p>

<pre><code>sudo n latest
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Homebrew Homebrew是Mac上两种流行的软件包管理器之一。</font><font style="vertical-align: inherit;">假设您先前已将节点安装为brew install节点。</font><font style="vertical-align: inherit;">您可以获取有关公式的最新信息，并通过以下内容升级到最新的Node.js版本。</font></font></p>

<pre><code>1 brew update<font></font>
2 brew upgrade node<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MacPorts MacPorts是Mac的另一个软件包管理器。</font><font style="vertical-align: inherit;">以下将更新本地端口树以访问更新的版本。</font><font style="vertical-align: inherit;">然后它将安装最新版本的Node.js。</font><font style="vertical-align: inherit;">即使您已经安装了该软件包的先前版本，该方法也可以工作。</font></font></p>

<pre><code>1 sudo port selfupdate<font></font>
2 sudo port install nodejs-devel<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐理查德</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到网站</font></font><a href="https://nodejs.org" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nodejs.org</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并下载最新的pkg，然后安装。</font><font style="vertical-align: inherit;">这个对我有用</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我用brew升级了我的节点。</font><font style="vertical-align: inherit;">它已经安装，但是它位于其中，</font></font><code>/usr/local/Cellar/node/5.5.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且有一个默认节点</font></font><code>/usr/local/bin/node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">困扰我。</font><font style="vertical-align: inherit;">我不想建立软链接，因为我真的不知道brew是如何组织的。</font><font style="vertical-align: inherit;">所以我下载了</font></font><code>pkg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，安装并得到以下信息：</font></font></p>

<p><code>Node.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 安装在</font></font></p>

<pre><code>/usr/local/bin/node
</code></pre>

<p><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 安装在</font></font></p>

<pre><code>/usr/local/bin/npm
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保它</font></font><code>/usr/local/bin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的$ PATH中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在升级完成</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为使用最新版本的Node.js的最简单方法是，</font><font style="vertical-align: inherit;">
如果要使用其他版本的Node </font><font style="vertical-align: inherit;">，请从以下网址获取最新的Node.js pkg文件</font></font><a href="https://nodejs.org/en/download/current/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：//nodejs.org/en/download/current/ .js，您可以使用nvm或n对其进行管理。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green达蒙</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以使用以下命令升级节点</font></font></p>

<pre><code>nvm install node --reinstall-packages-from=node
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">仲羽蛋蛋</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在macOS上，建议使用自制程序运行</font></font></p>

<pre><code>brew install node<font></font>
npm install -g npm@latest<font></font>
</code></pre>

<p><img src="https://i.stack.imgur.com/F1I9N.png" alt="终端命令的屏幕截图"></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天小哥蛋蛋</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以转到nodejs.org并下载最新的软件包。</font><font style="vertical-align: inherit;">它将为您适当更新。</font><font style="vertical-align: inherit;">NPM也将更新。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near卡卡西</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可悲的是，</font></font><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我没有用。</font><font style="vertical-align: inherit;">我使用</font></font><code>node version manager or nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它，它就像一种魅力。</font><font style="vertical-align: inherit;">这是有关如何安装的链接</font></font><code>nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font><a href="https://github.com/creationix/nvm#installation" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/creationix/nvm#installation" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/creationix/nvm#installation</font></font></a></p>

<ul>
<li><code>nvm i 8.11.2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 升级到最新的LTS</font></font></li>
<li><code>nvm use 8.11.2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 用它</font></font></li>
<li><code>node -v</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 检查您的最新版本</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L十三</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需转到node JS网站并安装最新版本。</font></font></h2>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请安装最新版本而不是推荐的稳定版本。</font><font style="vertical-align: inherit;">它使您可以自由使用节点上的最新ES6功能。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以在这里找到</font></font><a href="https://nodejs.org/en/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node JS</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还要更新</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您将必须使用此命令。</font></font></h3>

<p><code>sudo npm i -g npm@latest</code></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您所有的项目都可以正常工作。</font></font></p>
</blockquote>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Mac的其他选项:: </font></font><code>brew update &amp;&amp; brew install node &amp;&amp; npm -g npm</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Eva</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为这在搜索如何在Mac上升级Node.js时似乎是Google的头等大事，所以我将向未来的任何人提供提示，无论它的年龄如何。 </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过NPM升级</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
可以使用上面@Mathias描述的方法，也可以通过终端选择以下更简单的方法。</font></font></p>

<pre><code>sudo npm cache clean -f<font></font>
sudo npm install -g n<font></font>
sudo n stable<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后，您可以选择确认升级</font></font></p>

<pre><code>node -v
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的nodejs应该已经升级到最新版本。</font><font style="vertical-align: inherit;">如果您想升级到特定版本，请说v0.8.19，而不是</font></font></p>

<pre><code>sudo n stable
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">采用</font></font></p>

<pre><code>sudo n 0.8.19
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
除非需要，否则避免使用sudo。</font><font style="vertical-align: inherit;">请参阅Steve在评论中的评论</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">W先生</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以安装</font></font><a href="https://github.com/creationix/nvm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nvm</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并安装多个版本的</font><a href="https://github.com/creationix/nvm" rel="noreferrer"><font style="vertical-align: inherit;">Node.js。</font></a></font></p>

<pre><code>curl https://raw.github.com/creationix/nvm/master/install.sh | sh<font></font>
source ~/.nvm/nvm.sh<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后运行：</font></font></p>

<pre><code>nvm install 0.8.22  #(or whatever version of Node.js you want)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以查看已安装的版本：</font></font></p>

<pre><code>nvm list
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用：</font></font></p>

<pre><code>nvm use 0.8.22
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用NVM的好处在于，您可以同时测试不同的版本。</font><font style="vertical-align: inherit;">如果不同的应用程序需要不同版本的Node.js，则可以同时运行它们。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam蛋蛋Itachi</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用Node版本管理器（称为n）。</font></font></p>

<pre><code>npm install -g n
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后</font></font></p>

<pre><code>n latest
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>n stable
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无前端Jim</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到</font></font><a href="http://nodejs.org"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://nodejs.org</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并下载并运行安装程序。</font><font style="vertical-align: inherit;">现在有效-至少对我而言。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyEvaL</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果最初</font><font style="vertical-align: inherit;">使用</font><a href="http://brew.sh" rel="nofollow noreferrer"><font style="vertical-align: inherit;">Homebrew</font></a><font style="vertical-align: inherit;">安装</font></font><a href="https://nodejs.org/en/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请运行：</font></font><a href="http://brew.sh" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<pre><code>brew update<font></font>
brew upgrade node<font></font>
npm install -g npm<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还是单线：</font></font></p>

<pre><code>brew update &amp;&amp; brew upgrade node &amp;&amp; npm install -g npm
</code></pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改版本的便捷方法是使用</font></font><a href="https://github.com/creationix/nvm" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nvm</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>brew install nvm
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使用nvm安装最新版本的Node.js：</font></font></p>

<pre><code>nvm install node
</code></pre>

<hr>

<p><em>If you installed via a package, then download the latest version from <a href="https://docs.npmjs.com/getting-started/installing-node" rel="nofollow noreferrer">nodejs.org</a>.
See <a href="https://docs.npmjs.com/getting-started/installing-node" rel="nofollow noreferrer">Installing Node.js and updating npm</a>.</em></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小村村</span>
            <span class="discuss-time">2020.03.14</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我成功从升级</font></font><code>v0.8.18</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>v0.10.20</code> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不需要</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> brew等</font><strong><font style="vertical-align: inherit;">任何其他要求的方式</font></strong><font style="vertical-align: inherit;">（在终端中键入以下命令）：</font></font></p>

<ol>
<li><code>sudo npm cache clean -f</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> （强制）清除npm缓存</font></font></li>
<li><code>sudo npm install -g n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装</font></font><a href="https://www.npmjs.com/package/n" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">n</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（这可能需要一段时间）</font></font></li>
<li><code>sudo n stable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 升级到当前的稳定版本</font></font></li>
</ol>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，这</font></font><code>sudo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能会提示您输入密码。</font></font></em>  </p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关步骤3的附加说明，</font></font><code>stable</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以交换</font></font><code>latest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>lts</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（长期支持）或任何特定的版本号，例如</font></font><code>0.10.20</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在键入时未显示版本号</font></font><code>node -v</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可能必须重新启动。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也可以在以下位置找到这些说明：</font></font><a href="https://davidwalsh.name/upgrade-nodejs" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">davidwalsh.name/upgrade-nodejs</font></font></a><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
有关</font><font style="vertical-align: inherit;">此处找到</font><font style="vertical-align: inherit;">的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">n</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包的</font><font style="vertical-align: inherit;">
更多信息</font><font style="vertical-align: inherit;">：</font></font><a href="https://www.npmjs.com/package/n" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npmjs.com/package/n</font></font></a><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关Node.js的发布时间表的更多信息：</font></font><a href="https://github.com/nodejs/Release#release-schedule" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">github.com/nodejs/Release</font></font></a></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
