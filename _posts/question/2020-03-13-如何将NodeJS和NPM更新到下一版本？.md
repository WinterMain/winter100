---
layout: question
title:  如何将NodeJS和NPM更新到下一版本？
date:   2020-03-13T08:07:31.000Z
description: 我刚刚安装了Node.js和npm（用于其他模块）。如何将Node.js和正在使用的模块更新到最新版本？可以npm这样做，还是必须删除并重新安装N...
img: 
author: Eva西里
category: question
answer: 26
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚安装了</font></font><code>Node.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（用于其他模块）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何将Node.js和正在使用的模块更新到最新版本？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样做，还是必须删除并重新安装Node.js和npm才能获得下一个版本？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">在本</font><font style="vertical-align: inherit;">节中</font><font style="vertical-align: inherit;">遵循了</font></font><a href="https://github.com/nodejs/node/wiki/Installation" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长Jim路易</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需在控制台上运行以下脚本：</font></font></p>

<pre><code>sudo npm i -g n<font></font>
sudo n stable<font></font>
sudo npm update -g npm<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这仅适用于Linux和MAC</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A十三</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Windows：请访问</font></font><a href="https://nodejs.org/en/download/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://nodejs.org/en/download/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，下载最新版本</font></font><code>.exe</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>.msi</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件并进行安装以覆盖旧版本</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Ubuntu或Linux：</font></font><code>node.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先</font><font style="vertical-align: inherit;">卸载，</font><font style="vertical-align: inherit;">然后重新安装，例如使用Ubuntu（）：</font></font></p>

<pre><code>sudo apt-get remove nodejs<font></font>
<font></font>
# assume node.js 8 is latest version<font></font>
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -<font></font>
sudo apt-get install nodejs<font></font>
<font></font>
node -v<font></font>
npm -v<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">项目中的文件夹，</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以确保您的应用程序将在新井运行</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西理查德</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://www.npmjs.com/package/n" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中的</font><a href="https://www.npmjs.com/package/n" rel="noreferrer"><font style="vertical-align: inherit;">n模块</font></a><font style="vertical-align: inherit;">以升级node。</font><font style="vertical-align: inherit;">n是一个节点帮助程序包，用于安装或更新给定的node.js版本。</font></font></p>

<pre><code>sudo npm cache clean -f<font></font>
sudo npm install -g n<font></font>
sudo n stable<font></font>
sudo ln -sf /usr/local/n/versions/node/&lt;VERSION&gt;/bin/node /usr/bin/nodejs<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意，nodejs的默认安装位于/ usr / bin / nodejs中，而不是/ usr / bin / node中</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要升级到最新版本（而不是当前稳定版本），可以使用</font></font></p>

<p><code>sudo n latest</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">撤销：</font></font></p>

<pre><code>sudo apt-get install --reinstall nodejs-legacy     # fix /usr/bin/node<font></font>
sudo n rm 6.0.0     # replace number with version of Node that was installed<font></font>
sudo npm uninstall -g n<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果收到以下错误，</font></font><code>bash: /usr/bin/node: No such file or directory</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则输入的路径</font></font></p>

<pre><code>sudo ln -sf /usr/local/n/versions/node/&lt;VERSION&gt;/bin/node /usr/bin/nodejs
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有错。</font><font style="vertical-align: inherit;">因此，请确保检查以上路径中是否已安装更新nodejs以及输入的版本是否正确。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">强烈</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议</font><strong><font style="vertical-align: inherit;">不要</font></strong><font style="vertical-align: inherit;">在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生产实例</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上执行此操作</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">它会严重破坏您的全局npm软件包和您安装新软件包的能力。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖蛋蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，如果您想更新到特定版本，请遵循以下步骤：</font></font></p>

<pre><code>sudo npm cache clean -f<font></font>
sudo npm install -g n<font></font>
sudo n &lt;specific version&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">otaku若</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于nodejs，应将其卸载并从nodejs.org下载您喜欢的版本，以使npm在cmd中的行下运行：</font></font></p>

<pre><code>npm i npm
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光Tom逆天</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>When it comes to <strong><code>Linux</code></strong> I suggest an <strong><em>Update Node Using a Package Manager:</em></strong></p>

<p>Node comes with npm pre-installed, but the manager is updated more frequently than Node. Run npm -v to see which version you have, then <strong><code>npm install npm@latest -g</code></strong> to install the newest npm update. Run <strong><code>npm -v</code></strong> again if you want to make sure npm updated correctly.</p>

<p>To update <code>NodeJS</code>, you’ll need npm’s handy n module. Run this code to clear npm’s cache, install n, and install the latest stable version of <code>Node</code>:</p>

<pre><code>sudo npm cache clean -f<font></font>
sudo npm install -g n<font></font>
sudo n stable<font></font>
</code></pre>

<p>To install the latest release, use <code>n latest</code>. Alternatively, you can run n #.#.# to get a specific <code>Node</code> version.</p>

<hr>

<p>When it comes to <strong><code>Windows/ macOS</code></strong> I suggest using <strong><em>Installers on Nodejs.org</em></strong></p>

<p>The Node.js downloads page includes binary packages for Windows and macOS — but why make your life more difficult? The pre-made installers — .msi for Windows and .pkg for macOS — make the installation process unbelievably efficient and understandable. Download and run the file, and let the installation wizard take care of the rest. With each downloaded update, the newer versions of Node and npm will replace the older version.</p>

<p><em>Alternatively, macOS users can use the npm and n instructions above.</em></p>

<hr>

<p>When it comes to updating your <code>node_modules</code> dependencies folder, I suggest skipping all the things that could cause you a headache and just go to your specific project and re-run <code>npm install</code> again.</p>

<p>Before anyone does that, I suggest first checking your <code>package.json</code> file for the following:</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">作为NodeJS软件包的用户，您可以在package.json文件中指定应用程序可以接受的更新类型。</font><font style="vertical-align: inherit;">例如，如果您从软件包版本1.0.4开始，则可以通过以下三种基本方式指定允许的更新版本范围：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">允许</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">补丁</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发布：1.0或1.0.x或〜1.0.4 </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
允许</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">次要</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本：1或1.x或^ 1.0.4 </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
允许</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主要</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本：*或x  </font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明：</font></font></em></p>

<p><strong><em><font style="vertical-align: inherit;"></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">API版本不兼容时的</font><strong><em><font style="vertical-align: inherit;">主要</font></em></strong><font style="vertical-align: inherit;">版本。</font><font style="vertical-align: inherit;">-&gt;</font></font><strong><code>~</code></strong>  </p>

<p><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">MINOR</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本，用于以向后兼容的方式添加功能时。</font><font style="vertical-align: inherit;">-&gt;</font></font><strong><code>^</code></strong>  </p>

<p><strong><em><font style="vertical-align: inherit;"></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成向后兼容错误修复时的</font><strong><em><font style="vertical-align: inherit;"> PATCH</font></em></strong><font style="vertical-align: inherit;">版本。</font><font style="vertical-align: inherit;">-&gt;</font></font><strong><code>*</code></strong>  </p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易卡卡西</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新npm：</font></font></p>

<pre><code>npm install npm@{version} -g
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将npm更新到最新版本：</font></font></p>

<pre><code>npm install npm@latest -g
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并检查版本：</font></font></p>

<pre><code>npm -v
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新节点js：</font></font></p>

<pre><code>sudo npm cache clean -f<font></font>
sudo npm install -g n<font></font>
sudo n stable<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">去检查 ：</font></font></p>

<pre><code>node -v
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam飞云</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅与此代码</font></font></p>

<pre><code>npm install update
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐十三</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是听与NPM队的最新一集的采访</font></font><a href="http://nodeup.com/seventyfour"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nodeup</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，和他们建议</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>update</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从更新</font></font><code>1.x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>2.x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">而是使用：</font></font><code>
npm install npm -g
</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天米亚</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时从</font><a href="http://nodejs.org/"><font style="vertical-align: inherit;">http://nodejs.org/</font></a><font style="vertical-align: inherit;">下载最新版本会更简单</font></font><a href="http://nodejs.org/"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">特别是当所有其他选项均失败时。</font></font></p>

<p><b><a href="http://nodejs.org/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://nodejs.org/-</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &gt;单击安装-&gt;您将拥有最新的节点和npm</font></font></b></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Sam神奇A</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最近偶然发现了这篇文章：</font></font><a href="http://martineau.tv/blog/2013/12/more-efficient-grunt-workflows/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="http://martineau.tv/blog/2013/12/more-efficient-grunt-workflows/" rel="noreferrer"><font style="vertical-align: inherit;">//martineau.tv/blog/2013/12/more-ficient-grunt-workflows/</font></a><font style="vertical-align: inherit;">，作者提到</font></font><code>$ npm-check-updates -u &amp;&amp; npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要更新所有依赖项。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这与主题略有出入，但我在这里进行了类似的搜索，因此值得分享。</font></font></em></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony老丝</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需以root / administrator身份在终端中运行以下命令：</font></font></p>

<pre><code>npm i -g n<font></font>
n stable<font></font>
npm update -g npm<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它在Linux上对我有用</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅乐</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于Linux，OSX等。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装最新版本的NPM</font></font></strong></p>

<p><code>npm install -g npm@latest</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或安装最新版本</font></font></strong></p>

<p><code>npm install -g npm@next</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他：检查您的npm版本</font></font></p>

<p><code>npm -v</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用Windows机器，建议您</font><font style="vertical-align: inherit;">访问</font></font><a href="https://docs.npmjs.com/troubleshooting/try-the-latest-stable-version-of-npm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">网站</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长斯丁</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为管理node.js的最佳方法是使用</font></font><a href="https://github.com/creationix/nvm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NVM</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></strong>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NVM代表节点版本管理器。</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是node.js开发人员的必备工具！</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用以下命令安装NVM，打开终端并运行以下任意一项：-</font></font></p>

<pre><code>curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装此程序后，建议关闭当前终端并打开一个新终端，因为NVM将添加一些环境变量，因此需要重新启动终端。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将列出一些使用NVM的基本命令。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将从互联网上获取所有节点版本。</font><font style="vertical-align: inherit;">将显示从开始到日期的所有节点版本，同时还会提及LTS版本。</font></font></li>
</ul>

<pre><code>nvm ls-remote 
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将安装您想要的节点版本（使用上面的命令获得版本列表）</font></font></li>
</ul>

<pre><code>nvm install v10.15.1
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该命令将为我们提供本地安装的节点版本的列表</font></font></li>
</ul>

<pre><code>nvm ls
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此命令用于从计算机中删除所需的节点版本</font></font></li>
</ul>

<pre><code>nvm uninstall v10.15.1
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下命令将帮助您升级到</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前节点版本上的最新版本</font></font></li>
</ul>

<pre><code>nvm install-latest-npm
</code></pre>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NVM可用于同时管理多个节点版本 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它还可以帮助您将所有全局</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">软件包从一个版本安装到另一个版本，而不是手动安装每个版本！</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nvm还有许多其他用途，其详细信息和命令可在此处找到。</font></font><a href="https://github.com/creationix/nvm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点版本管理器</font></font></a></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐理查德</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装npm</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> =&gt;</font></font><code>sudo apt-get install npm</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装n</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> =&gt;</font></font><code>sudo npm install n -g</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最新版本的节点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> =&gt;</font></font><code>sudo n latest</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以的特定版本的节点</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">列出可用的节点版本</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> =&gt;</font></font><code>n ls</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装特定版本</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> =&gt;</font></font><code>sudo n 4.5.0</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Green</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚在新的Windows 7计算机上安装了Node.js，结果如下：</font></font></p>

<pre><code>&gt; node -v<font></font>
v0.12.0<font></font>
&gt; npm -v<font></font>
2.5.1<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我执行了上述过程：</font></font></p>

<pre><code>&gt; npm install -g npm
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并升级到v2.7.3。</font><font style="vertical-align: inherit;">除了比做</font></font><code>npm -v</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还给2.5.1。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我去了系统配置面板，高级设置，环境变量。</font><font style="vertical-align: inherit;">除了全局Path变量之外，我还看到了特定于我的用户帐户的PATH变量。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
前者指向新的npm：</font></font><code>C:\Users\PhiLho\AppData\Roaming\npm</code><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
后者包括指向节点的路径：（</font></font><code>C:\PrgCmdLine\nodejs\</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，我避免在Program Files和衍生产品中安装内容。避免在路径中留空格，并且嘈杂的无用保护措施更为合理...）</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
如果我这样做</font></font><code>which npm.cmd</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（我有已安装Unix实用程序...），它指向Node中的一个。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无论如何，解决方法很简单：我只是将第一个路径（到npm）复制到了主要全局变量Path中节点的路径之前，现在它获取了最新版本。</font></font><br>
<code>&lt;some stuff before&gt;;C:\Users\PhiLho\AppData\Roaming\npm;C:\PrgCmdLine\nodejs\</code></p>

<pre><code>&gt; npm -v<font></font>
2.7.3<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请享用。</font><font style="vertical-align: inherit;">:-)</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near飞云</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>$ npm install -g npm stable
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我工作从1.4.28更新到2.1.5</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝飞云</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新节点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://github.com/creationix/nvm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NVM</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或</font></font><a href="https://github.com/hakobera/nvmw" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nvmw</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于Windows）。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新npm</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该</font></font><code>npm update npm -g</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令对我不起作用（在Windows上）。</font><font style="vertical-align: inherit;">根据</font></font><a href="https://github.com/isaacs/npm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，重新安装npm的工作是</font><font style="vertical-align: inherit;">：“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以从</font></font><a href="https://npmjs.org/dist/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://npmjs.org/dist/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载zip文件</font><font style="vertical-align: inherit;">，然后将其解压缩到node.exe所在的文件夹中。</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”确保是否执行此操作您首先要摆脱先前的安装（尽管覆盖它可能会正常工作...）。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新模块</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请使用</font></font><a href="https://npmjs.org/doc/cli/npm-update.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm update命令</font></font></a></p></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOLEY前端</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单使用此</font></font></h1>

<pre><code>npm i -g npm
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当发布新的更新/错误修复时，这是我从npm提示在控制台上的内容：</font></font></p>

<p><a href="https://i.stack.imgur.com/CdKR2.png" rel="noreferrer"><img src="https://i.stack.imgur.com/CdKR2.png" alt="在此处输入图片说明"></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙猪猪</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一次更新</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font></p>

<p><code>npm install -g npm@next</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后更新</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到下一个版本，</font></font></p>

<p><code>npm install -g node@next</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>npm install -g n@next</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
 或者，最新</font></font></p>

<p><code>npm install -g node@latest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 要么 </font></font><code>npm install -g node</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装版本后检查 </font></font></p>

<p><code>node --version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么 </font></font><code>node -v</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Sam</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Windows用户升级</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Windows用户应</font><font style="vertical-align: inherit;">在npm Wiki中</font><font style="vertical-align: inherit;">阅读</font></font><a href="https://github.com/npm/npm/wiki/Troubleshooting#upgrading-on-windows"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">故障排除&gt; Windows</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上的</font><a href="https://github.com/npm/npm/wiki/Troubleshooting#upgrading-on-windows"><font style="vertical-align: inherit;">升级</font></a><font style="vertical-align: inherit;">。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用PowerShell在Windows 10上进行升级（第三方编辑）</font></font></h2>

<p><font style="vertical-align: inherit;"></font><a href="https://github.com/npm/npm/wiki/Troubleshooting#upgrading-on-windows"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Windows疑难解答</font></font></a><font style="vertical-align: inherit;"></font><a href="https://github.com/felixrieseberg/npm-windows-upgrade"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">#upgradeing</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上方的链接</font><font style="vertical-align: inherit;">指向github页面</font><a href="https://github.com/felixrieseberg/npm-windows-upgrade"><font style="vertical-align: inherit;">npm-windows-upgrade</font></a><font style="vertical-align: inherit;">，以下</font><a href="https://github.com/felixrieseberg/npm-windows-upgrade"><font style="vertical-align: inherit;">几</font></a><font style="vertical-align: inherit;">行是自述文件的引号。</font><font style="vertical-align: inherit;">我已使用节点v5.7.0和powershell（大概是powershell版本5.0.10586.122）成功地从npm 2.7.4升级到了npm 3.9.3。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，通过从提升的PowerShell中运行以下命令，确保可以在系统上执行脚本。</font><font style="vertical-align: inherit;">要以管理员身份运行PowerShell，请单击开始，搜索PowerShell，右键单击PowerShell，然后选择以管理员身份运行。</font></font></p>
</blockquote>

<pre><code>Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force    
</code></pre>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，要安装和使用此升级程序工具，请运行（也可以从提升的PowerShell或cmd.exe）运行：</font></font></p>
</blockquote>

<pre><code>npm install --global --production npm-windows-upgrade<font></font>
npm-windows-upgrade<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐ASam</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先检查您的NPM版本</font></font></h1>

<pre><code>npm -v
</code></pre>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）将NPM更新为当前版本：</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看当前NPM版本：</font></font></p>

<pre><code>npm view npm version
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将npm更新到当前版本：</font></font></p>

<pre><code>npm i -g npm
</code></pre>

<p><br></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）列出所有可用的NPM版本并进行自定义安装/更新/回滚</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看所有版本，包括“ alpha”，“ beta”和“ rc”（候选发行版）</font></font></p>

<pre><code>npm view npm versions --json
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将NPM重新安装到从版本列表中选择的特定版本-例如到5.0.3</font></font></p>

<pre><code>npm i -g npm@5.0.3
</code></pre>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装一个版本将自动删除当前安装的版本。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Linux和iOS，使用</font><strong><font style="vertical-align: inherit;">sudo</font></strong><font style="vertical-align: inherit;">前缀命令</font></font><strong><font style="vertical-align: inherit;"></font></strong></p></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚西里</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这个问题是针对Linux机器的，但是以防万一有人在寻找Windows解决方案，只需转到</font></font><a href="http://nodejs.org/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js站点</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，单击</font><font style="vertical-align: inherit;">主页上的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按钮并执行安装程序即可。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">幸运的是，它可以处理所有事情，单击“下一步”按钮，我在Windows 7计算机上运行了最新的0.8.15 Node.js版本。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁Jim</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新npm很容易：</font></font></p>

<pre><code>npm install npm@latest -g
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙JinJin</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在</font></font><a href="http://davidwalsh.name/upgrade-nodejs" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">David Walsh的博客</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上发现了这种更新节点</font><a href="http://davidwalsh.name/upgrade-nodejs" rel="noreferrer"><font style="vertical-align: inherit;">的好方法</font></a><font style="vertical-align: inherit;">，您可以通过安装</font></font><strong><a href="https://www.npmjs.com/package/n" rel="noreferrer"><code>n</code></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下方法</font><font style="vertical-align: inherit;">来完成</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>sudo npm cache clean -f<font></font>
sudo npm install -g n<font></font>
sudo n stable<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将安装的当前稳定版本</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<hr>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请不要再使用n了。</font><font style="vertical-align: inherit;">我建议使用</font></font><strong><a href="https://github.com/creationix/nvm" rel="noreferrer"><code>nvm</code></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">您可以按照以下命令简单地安装稳定版：</font></font></p>

<pre><code>nvm ls-remote<font></font>
nvm install &lt;version&gt; <font></font>
nvm use &lt;version&gt;<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry逆天Eva</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关</font></font><strong><a href="https://docs.npmjs.com/cli/update" rel="noreferrer"><code>update</code></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令，</font><font style="vertical-align: inherit;">请参阅文档</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>npm update [-g] [&lt;pkg&gt;...]
</code></pre>

<blockquote>
  <p>This command will update all the packages listed to the latest version (specified by the tag config), respecting semver.</p>
</blockquote>

<p>Additionally, see the documentation on <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm" rel="noreferrer">Node.js and NPM installation</a> and <a href="https://docs.npmjs.com/try-the-latest-stable-version-of-npm" rel="noreferrer">Upgrading NPM</a>.</p>

<p>The following original answer is from the old FAQ that no longer exists, but should work for Linux and Mac:</p>

<blockquote>
  <h2>How do I update npm?</h2>

<pre><code>npm install -g npm
</code></pre>
  
  <p>Please note that this command will remove your current version of npm. Make sure to use <code>sudo npm install -g npm</code> if on a Mac.</p>
  
  <p>You can also update all outdated local packages by doing <code>npm update</code> without any arguments, or global packages by doing <code>npm update -g</code>.</p>
  
  <p>Occasionally, the version of npm will progress such that the current version cannot be properly installed with the version that you have installed already. (Consider, if there is ever a bug in the update command.) In those cases, you can do this:</p>

<pre><code>curl https://www.npmjs.com/install.sh | sh
</code></pre>
</blockquote>

<p>To update Node.js itself, I recommend you use <a href="https://github.com/creationix/nvm" rel="noreferrer">nvm, the Node Version Manager</a>.</p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
