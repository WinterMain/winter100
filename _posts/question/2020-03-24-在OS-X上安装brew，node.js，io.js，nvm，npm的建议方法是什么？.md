---
layout: question
title:  在OS X上安装brew，node.js，io.js，nvm，npm的建议方法是什么？
date:   2020-03-24T07:21:10.000Z
description: 我正在尝试尽可能使用自制软件。在OS X上安装以下内容的建议方法是什么？node.jsio.js虚拟机npm并希望支持以下方面的开发：...
img: 
author: 小胖Gil
category: question
answer: 7
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试尽可能使用自制软件。</font><font style="vertical-align: inherit;">在OS X上安装以下内容的建议方法是什么？</font></font></p>

<ul>
<li><a href="http://nodejs.org/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node.js</font></font></a></li>
<li><a href="https://iojs.org/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">io.js</font></font></a></li>
<li><a href="https://github.com/creationix/nvm"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">虚拟机</font></font></a></li>
<li><a href="https://www.npmjs.com/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并希望支持以下方面的开发：</font></font></p>

<ul>
<li><a href="http://ionicframework.com/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">离子的</font></font></a></li>
<li><a href="http://ngcordova.com/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ngCordova</font></font></a></li>
</ul></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidJim神奇</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于使用zsh和Homebrew进行安装：</font></font></p>

<pre><code>brew install nvm
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后将以下内容添加到〜/ .zshrc或所需的shell配置文件中：</font></font></p>

<pre><code>export NVM_DIR="$HOME/.nvm"<font></font>
. "/usr/local/opt/nvm/nvm.sh"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后安装并使用节点版本。</font></font></p>

<pre><code>nvm install 7.10.1<font></font>
nvm use 7.10.1<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的工作：</font></font></p>

<pre><code>curl https://raw.githubusercontent.com/creationix/nvm/v0.20.0/install.sh | bash<font></font>
cd / &amp;&amp; . ~/.nvm/nvm.sh &amp;&amp; nvm install 0.10.35<font></font>
. ~/.nvm/nvm.sh &amp;&amp; nvm alias default 0.10.35<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有自制的这个。</font></font></p>

<p><code>nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不久将支持io.js，但在发布时不支持：</font><a href="https://github.com/creationix/nvm/issues/590" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/creationix/nvm/issues/590" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/creationix/nvm/issues/590</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，使用</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">安装每个项目的其他所有项目</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门小小</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我同意noa-如果您需要多个版本</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>io.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则brew是不合适的解决方案。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>io.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在nvm中</font><font style="vertical-align: inherit;">帮助beta测试</font><font style="vertical-align: inherit;">支持：</font><a href="https://github.com/creationix/nvm/pull/616" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/creationix/nvm/pull/616" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/creationix/nvm/pull/616</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您只是想要</font></font><code>io.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是切换版本，则可以</font></font><code>io.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://iojs.org/dist/v1.0.2/iojs-v1.0.2-darwin-x64.tar.gz" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://iojs.org/dist/v1.0.2/iojs-v1.0.2-darwin-x64.tar.gz</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装二进制发行版</font><font style="vertical-align: inherit;">；</font><font style="vertical-align: inherit;">其中包括</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不切换版本，则不需要。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">记住</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在安装后</font><font style="vertical-align: inherit;">进行更新</font><font style="vertical-align: inherit;">：</font></font><code>sudo npm install -g npm@latest</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我迟到了，但我不喜欢其他答案</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装自制软件</font></font></h2>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">冲泡</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font></font></p>

<pre><code>"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
</code></pre>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装节点和NPM</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不应该</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>brew</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">故宫</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。   </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经看到了一些地方建议，你应该使用自制软件安装节点（如alexpods回答，并在这个</font></font><a href="http://blog.teamtreehouse.com/install-node-js-npm-mac" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">团队树博客文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），但安装这样你更容易遇到问题的</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>brew</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">都是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包管理器</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，你应该让一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">程序包管理器</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">管理另一个</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">程序包管理器</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会导致问题，例如此bug官方的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题</font></font><a href="https://github.com/npm/npm/issues/3794" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误：拒绝删除：/ usr / local / bin / npm</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><a href="https://stackoverflow.com/questions/33015001/cant-uninstall-npm-module-on-osx"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法在OSX上卸载npm模块</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在DanHerbert的帖子“ </font></font><a href="https://gist.github.com/DanHerbert/9520689" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Mac OS X上为Homebrew用户修复Fixing npm”中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读有关该主题的更多信息   </font><font style="vertical-align: inherit;">，他继续说道。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同样，使用npm的Homebrew安装将要求您在安装全局软件包时使用sudo。</font><font style="vertical-align: inherit;">由于Homebrew背后的核心思想之一是可以在不授予应用程序root权限的情况下安装应用程序，因此这不是一个好主意。</font></font></p>
</blockquote>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了其他</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会用npm；</font><font style="vertical-align: inherit;">但是您确实应该按照网站上的指示按照每个模块的安装说明进行操作，因为它们比其他任何人都更清楚自己所遇到的问题或错误</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该使用nvm安装node.js，因为那样安装全局软件包时不必提供超级用户特权（您可以简单地执行“ npm install -g packagename”，而无需添加“ sudo”）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">布鲁尔在其他方面却很棒。</font><font style="vertical-align: inherit;">每当我可以选择在Bower中安装某些东西时，我倾向于偏向Bower。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在使用n（节点版本管理）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过两种方式安装它</font></font></p>

<pre><code>brew install n
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>npm install -g n
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在不同版本的节点和io之间切换。</font><font style="vertical-align: inherit;">这是我当前的环境中的一个示例，当我调用不带参数的n时：</font></font></p>

<pre><code>$ n<font></font>
<font></font>
  io/3.3.1<font></font>
  node/0.12.7<font></font>
  node/4.0.0<font></font>
  node/5.0.0<font></font>
ο node/5.10.1 <font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2019更新：使用NVM安装节点，而非Homebrew</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在大多数答案中，推荐的安装nvm的方法是使用</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Homebrew</font></font></em></strong> </p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要那样做</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><a href="https://github.com/creationix/nvm" rel="noreferrer" title="github页面"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Github Page</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> for nvm上，它的名称很明显：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不支持自制软件安装。</font><font style="vertical-align: inherit;">如果您对自制安装的nvm存有疑问，请在将其提交之前，将其冲煮卸载，并按照以下说明进行安装。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请改用以下方法</font></font></p>

<pre><code>curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该脚本会将nvm存储库克隆到〜/ .nvm，并将源代码行添加到您的配置文件（〜/ .bash_profile，〜/ .zshrc，〜/ .profile或〜/ .bashrc）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后使用nvm安装节点。</font><font style="vertical-align: inherit;">例如，要安装最新的LTS版本，请执行以下操作：</font></font></p>

<pre><code>nvm install v8.11.1
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">清洁而无忧。</font><font style="vertical-align: inherit;">它将其也标记为默认节点版本，因此您应该一切就绪</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
