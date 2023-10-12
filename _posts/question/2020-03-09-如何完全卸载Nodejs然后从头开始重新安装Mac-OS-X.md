---
layout: question
title:  如何完全卸载Node.js，然后从头开始重新安装（Mac OS X）
date:   2020-03-09T14:05:39.000Z
description: 即使安装了brew节点并且安装了NVM v0.6.19，我的节点版本始终是v0.6.1-pre。我的节点版本是：node -vv0.6.1-pr...
img: 
author: 蛋蛋飞云
category: question
answer: 23
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使安装了brew节点并且安装了NVM v0.6.19，我的节点版本始终是v0.6.1-pre。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的节点版本是：</font></font></p>

<pre class="lang-none prettyprint-override"><code>node -v<font></font>
v0.6.1-pre<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NVM这样说（我在一个bash终端中第一次安装了一个版本的节点之后）：</font></font></p>

<pre class="lang-none prettyprint-override"><code>nvm ls<font></font>
v0.6.19<font></font>
current:    v0.6.19<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是当我重新启动bash时，这是我看到的：</font></font></p>

<pre class="lang-none prettyprint-override"><code>nvm ls<font></font>
v0.6.19<font></font>
current:    v0.6.1-pre<font></font>
default -&gt; 0.6.19 (-&gt; v0.6.19)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么，该幻影节点0.6.1-pre版本在哪里，如何摆脱它？</font><font style="vertical-align: inherit;">我正在尝试通过NPM安装库，以便可以在项目上工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试使用BREW在NVM之前进行更新，使用“ brew update”和“ brew install node”。</font><font style="vertical-align: inherit;">我尝试删除/ usr / local / include中的“节点”目录以及“ / usr / local / lib”中的“节点”和“ node_modules”。</font><font style="vertical-align: inherit;">我已尝试按照</font></font><a href="https://superuser.com/questions/268946/uninstall-node-js"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明</font><font style="vertical-align: inherit;">卸载npm并重新安装</font><font style="vertical-align: inherit;">。</font></font></p>

<p>All of this because I was trying to update an older version of node to install the "zipstream" library. Now there's folders in my users directory, and the node version STILL isn't up to date, even though NVM says it's using 0.6.19.</p>

<p><strong>Ideally, I'd like to uninstall nodejs, npm, and nvm, and just reinstall the entire thing from scratch on my system.</strong></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第299篇《如何完全卸载Node.js，然后从头开始重新安装（Mac OS X）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子樱</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您无法找到节点，请运行</font></font><code>whereis node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>whereis npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后</font></font><code>whereis nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据需要删除列出的目录。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还需要完全关闭终端，然后重新打开以使更改生效。 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙神乐GO</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的情况下，其他答案均无效，因为我之前已降级为node8。</font><font style="vertical-align: inherit;">因此，以下不是我做的，而是为我工作的：</font></font></p>

<pre><code>which node
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font><code>/usr/local/bin/node@8</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>/usr/local/bin/node</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我执行了以下命令：</font></font></p>

<pre><code>brew uninstall node@8
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可以正常工作，然后从官方站点下载最新的pkg并安装。</font><font style="vertical-align: inherit;">之后，我必须关闭终端并再次开始以访问新版本</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德村村小宇宙</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（服务器：ubuntu 14）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.）安装nvm（节点版本管理器）</font></font><a href="https://github.com/creationix/nvm" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/creationix/nvm</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.）nvm安装节点</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3.）npm -v（查询npm版本=&gt; 3.8.6）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">4.）节点-v（查询节点版本=&gt; v6.0.0）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">柳叶风吹</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这为我</font></font><a href="https://gist.github.com/DanHerbert/9520689" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修复了</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此问题</font><a href="https://gist.github.com/DanHerbert/9520689" rel="nofollow noreferrer"><font style="vertical-align: inherit;">在Mac OS X上为Homebrew用户修复npm</font></a><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">而且它不需要太多步骤。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不关心原因，请转到解决方案部分。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为方便起见，以下是相关部分：</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此解决方案解决了由于尝试运行而导致的错误</font></font><code>npm update npm -g</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">完成后，您也无需使用</font></font><code>sudo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全局安装npm模块。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在开始之前，请记下所有全局安装的npm软件包。</font><font style="vertical-align: inherit;">这些说明将使您删除所有这些软件包。</font><font style="vertical-align: inherit;">完成后，您需要重新安装它们。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行以下命令以删除所有现有的全局npm模块，卸载节点和npm，使用正确的默认值重新安装节点，配置要安装的全局npm模块的位置，然后将npm作为其自身的组件安装。</font></font></p>

<pre><code>rm -rf /usr/local/lib/node_modules<font></font>
brew uninstall node<font></font>
brew install node --without-npm<font></font>
echo prefix=~/.npm-packages &gt;&gt; ~/.npmrc<font></font>
curl -L https://www.npmjs.com/install.sh | sh<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此时应正确安装Node和npm。</font><font style="vertical-align: inherit;">最后一步是添加</font></font><code>~/.npm-packages/bin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到您的</font></font><code>PATH</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm和全局npm包中。</font><font style="vertical-align: inherit;">为此，请将以下行添加到您的</font></font><code>~/.bash_profile</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>export PATH="$HOME/.npm-packages/bin:$PATH"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以重新安装任何所需的全局npm软件包，而不会出现任何问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Mandy</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，在安装新的节点版本后，需要停用节点：（mac）。</font></font></p>

<pre><code>nvm deactivate
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这已从$ PATH中删除/Users/user_name/.nvm/*/bin</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在该节点更新后</font></font></p>

<pre><code>node --version<font></font>
v10.9.0<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天小卤蛋Green</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经从从git存储库下载的源安装了Node.js。</font><font style="vertical-align: inherit;">我安装了：</font></font></p>

<pre><code>./configure<font></font>
$ make<font></font>
$ sudo make install<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为make文件支持它，所以我可以这样做：</font></font></p>

<pre><code>$ sudo make uninstall
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO阿飞</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许你需要</font></font></p>

<pre><code>hash -r 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它有助于解决符号链接问题</font></font></p>

<pre><code>$ node -v<font></font>
$ bash: /opt/local/bin/node: No such file or directory<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near米亚</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的方法是下载安装程序包：在Mac上为.pkg。</font><font style="vertical-align: inherit;">最好使用最新的稳定版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里是链接：</font></font><a href="https://nodejs.org/en/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该软件包最终将覆盖以前的版本，并相应地设置环境变量。</font><font style="vertical-align: inherit;">只需运行安装程序，然后单击几下即可完成。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁斯丁</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以克隆</font></font><a href="https://github.com/brock/node-reinstall" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/brock/node-reinstall</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并运行存储库中给出的简单命令，然后重新启动系统。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这是最简单的方法，也对我有用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙Stafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您已经安装了</font></font><a href="https://github.com/nvm-sh/nvm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nvm，请</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">执行以下命令</font></font></p>

<ul>
<li><code>nvm deactivate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -这将从$ PATH中删除/.nvm/*/bin</font></font></li>
<li><code>nvm list</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -列出系统中安装的节点的所有版本</font></font></li>
<li><code>nvm uninstall &lt;version&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 您可以指定要卸载的所有版本。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"></font><code>nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
 而不是</font><font style="vertical-align: inherit;">来</font><font style="vertical-align: inherit;">安装节点</font><font style="vertical-align: inherit;">并使用</font><font style="vertical-align: inherit;">来</font><font style="vertical-align: inherit;">卸载</font><font style="vertical-align: inherit;">总是一件好事</font></font><code>brew</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个解决方案对我有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附加命令 </font></font></p>

<ul>
<li><code>which node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解系统中安装的节点的路径。</font><font style="vertical-align: inherit;">您可以rm该目录来手动卸载节点。</font><font style="vertical-align: inherit;">然后，您可能需要相应地调整PATH文件。</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚Stafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Mac上卸载Node.js时遇到问题。</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使删除了所有这些内容，</font><font style="vertical-align: inherit;">我仍然有一些奇怪的行为，</font><font style="vertical-align: inherit;">即使它们仍然如此。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是因为我用macport完成了旧安装。</font><font style="vertical-align: inherit;">因此，您还必须使用port卸载它：</font></font></p>

<pre><code>sudo port uninstall nodejs
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可能安装了许多不同版本的Node.js，因此（一一卸载）它们。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易飞云</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在扩展</font></font><a href="https://stackoverflow.com/a/11178106/2083544" title="多米尼克·坦克里迪（Dominic Tancredi）"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Dominic Tancredi的出色答案后</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我将其分解为bash包和独立脚本。</font><font style="vertical-align: inherit;">如果您已经在使用名为“ </font></font><a href="http://bpkg.io" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">bpkg</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> ”的“ Back Package Manager” </font><font style="vertical-align: inherit;">，则可以通过运行以下</font><a href="http://bpkg.io" rel="nofollow noreferrer"><font style="vertical-align: inherit;">命令</font></a><font style="vertical-align: inherit;">来安装脚本：</font></font></p>

<pre><code>bpkg install -g brock/node-reinstall
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您可以在</font></font><a href="http://github.com/brock/node-reinstall" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">brock / node-reinstall</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上查看Github上的脚本</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该脚本允许您使用nvm或nave重新安装节点，并将节点版本指定为默认版本。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝村村Stafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经总结了现有的答案，并确保Node js </font><font style="vertical-align: inherit;">与NPM一起</font><font style="vertical-align: inherit;">被</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全擦除</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<ol>
<li><code>brew uninstall node</code></li>
<li><code>which node</code></li>
<li><code>sudo rm -rf /usr/local/bin/node</code></li>
<li><code>sudo rm -rf /usr/local/lib/node_modules/npm/</code></li>
<li><code>brew doctor</code></li>
<li><code>brew cleanup --prune-prefix</code></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复制到终端的行：</font></font></p>

<pre><code>brew uninstall node;<font></font>
which node;<font></font>
sudo rm -rf /usr/local/bin/node;<font></font>
sudo rm -rf /usr/local/lib/node_modules/npm/;<font></font>
brew doctor;<font></font>
brew cleanup --prune-prefix;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinGil</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了主要答案外，我还需要删除在以下位置找到的所有npm实例：</font></font></p>

<pre><code>rm -rf /usr/local/share/man/man1/npm*
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿西门Tom</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我工作。</font></font></p>

<pre><code>$node --version<font></font>
<font></font>
v11.1.0<font></font>
<font></font>
$nvm deactivate<font></font>
<font></font>
$nvm uninstall v11.1.0<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Tom猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后 </font></font></p>

<pre><code>brew uninstall node
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我必须知道哪个节点 </font></font></p>

<pre><code>which node
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后删除 </font></font></p>

<pre><code>rm -rf /usr/local/bin/node
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一十三</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从/ usr / local / lib删除node和/或node_modules</font></font></p>

<pre><code>      ex code:<font></font>
      cd /usr/local/lib<font></font>
      sudo rm -rf node<font></font>
      sudo rm -rf node_modules<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从/ usr / local / include删除node和/或node_modules</font></font></p></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从/ usr / local / bin删除node，node-debug和node-gyp</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从主目录中删除.npmrc（这些是您的npm设置，如果您打算立即重新安装Node，请不要删除此设置）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从主目录中删除.npm</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从主目录删除.node-gyp</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从主目录删除.node_repl_history</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从/ usr / local / share / man / man1 /删除node *</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从/ usr / local / share / man / man1 /删除npm *</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从/ usr / local / lib / dtrace /中删除node.d</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从/ usr / local / opt / local / bin /中删除节点</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从/ usr / local / opt / local / include /中删除节点</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从/ usr / local / opt / local / lib /中删除node_modules</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从/ usr / local / share / doc /删除节点</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从/ usr / local / share / systemtap / tapset /中删除node.stp</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天A前端</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不确定这是因为我有一个旧版本（4.4.5），还是因为我使用了官方安装程序，但是其他答案中引用的大多数文件在我的系统上不存在。</font><font style="vertical-align: inherit;">我只需要删除以下内容：</font></font></p>

<pre><code>~/.node-gyp<font></font>
~/.node_repl_history<font></font>
/usr/local/bin/node<font></font>
/usr/local/bin/npm<font></font>
/usr/local/include/node<font></font>
/usr/local/lib/dtrace/node.d<font></font>
/usr/local/lib/node_modules<font></font>
/usr/local/share/doc/node<font></font>
/usr/local/share/man/man1/node.1<font></font>
/usr/local/share/systemtap/tapset/node.stp<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我决定保留，</font></font><code>~/.npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为我打算用Homebrew重新安装Node。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin猪猪</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这篇文章有些过时，但是只是想分享删除Node.js时在Terminal中对我有用的命令。</font></font></p>

<pre><code>lsbom -f -l -s -pf /var/db/receipts/org.nodejs.pkg.bom | while read f; do  sudo rm /usr/local/${f}; done<font></font>
<font></font>
sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.*<font></font>
</code></pre>

<hr>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新： </font></font><code>23 SEP 2016</code></h1>

<hr>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您担心运行这些命令...</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢</font></font><a href="https://gist.github.com/jguix" rel="noreferrer"><code>jguix</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><a href="https://gist.github.com/TonyMtz/d75101d9bdf764c890ef#gistcomment-1880118" rel="noreferrer"><code>this quick tutorial</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，创建一个中间文件：</font></font></strong></p>

<pre><code>lsbom -f -l -s -pf /var/db/receipts/org.nodejs.node.pkg.bom &gt;&gt; ~/filelist.txt
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动查看您的文件（位于您的</font></font><code>Home</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹中）</font></font></strong></p>

<pre><code> ~/filelist.txt
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后删除文件：</font></font></strong></p>

<pre><code>cat ~/filelist.txt | while read f; do sudo rm /usr/local/${f}; done<font></font>
<font></font>
sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.*<font></font>
</code></pre>

<hr>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于10.10.5及以上</font></font></h1>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢 </font></font><a href="https://stackoverflow.com/users/852592/lenar-hoyt"><code>Lenar Hoyt</code></a></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要点评论来源：</font></font></strong> <a href="https://gist.github.com/TonyMtz/d75101d9bdf764c890ef#gistcomment-1572198" rel="noreferrer"><code>gistcomment-1572198</code></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原始要点：</font></font></strong> <a href="https://gist.github.com/TonyMtz/d75101d9bdf764c890ef#file-gistfile1-txt" rel="noreferrer"><code>TonyMtz/d75101d9bdf764c890ef</code></a></p>

<pre><code>lsbom -f -l -s -pf /var/db/receipts/org.nodejs.node.pkg.bom | while read f; do sudo rm /usr/local/${f}; done<font></font>
<font></font>
sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.*<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanStafan</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Mavericks上，我从node pkg（从nodejs站点）安装它，并卸载了它，因此可以使用brew重新安装。</font><font style="vertical-align: inherit;">我只在终端中运行4个命令：</font></font></p>

<ol>
<li><code>sudo rm -rf  /usr/local/lib/node_modules/npm/</code></li>
<li><code>brew uninstall node</code></li>
<li><code>brew doctor</code></li>
<li><code>brew cleanup --prune-prefix</code></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果仍然有节点安装，请重复步骤2。一切正常之后，我将使用 </font></font><code>brew install node</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一：</font></font></p>

<pre><code>lsbom -f -l -s -pf /var/db/receipts/org.nodejs.pkg.bom | while read f; do  sudo rm /usr/local/${f}; done<font></font>
<font></font>
sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.*<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回顾一下，完全卸载node + npm的最佳方法（我发现）是执行以下操作：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到</font></font><code>/usr/local/lib</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并删除任何节点和node_modules</font></font></p>

<pre><code>cd /usr/local/lib<font></font>
<font></font>
sudo rm -rf node*<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到</font></font><code>/usr/local/include</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并删除任何node和node_modules目录</font></font></p>

<pre><code>cd /usr/local/include<font></font>
<font></font>
sudo rm -rf node*<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用进行安装</font></font><code>brew install node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则</font></font><code>brew uninstall node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在终端中</font><font style="vertical-align: inherit;">运行</font></font></p>

<pre><code>brew uninstall node
</code></pre></li>
<li><p>check your Home directory for any "local" or "lib" or "include" folders, and delete any "node" or "node_modules" from there</p>

<p>go to /usr/local/bin and delete any node executable</p>

<pre><code>cd /usr/local/bin<font></font>
<font></font>
sudo rm -rf /usr/local/bin/npm<font></font>
<font></font>
ls -las<font></font>
</code></pre></li>
<li><p>You may need to do the additional instructions as well:</p>

<pre><code>sudo rm -rf /usr/local/share/man/man1/node.1<font></font>
<font></font>
sudo rm -rf /usr/local/lib/dtrace/node.d<font></font>
<font></font>
sudo rm -rf ~/.npm<font></font>
</code></pre></li>
</ol>

<p>Source: <a href="https://gist.github.com/TonyMtz/d75101d9bdf764c890ef">tonyMtz</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearItachi</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将节点降级到0.10.36</font></font></p>

<pre><code>  sudo npm cache clean -f<font></font>
  sudo npm install -g n<font></font>
  sudo n 0.10.36<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将节点升级到稳定v</font></font></p>

<pre><code>  sudo npm cache clean -f<font></font>
  sudo npm install -g n<font></font>
  sudo n stable<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">不知</span>
            <span class="discuss-time">2020.03.09</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，存在一个</font></font><code>/Users/myusername/local</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含</font></font><code>include</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">with </font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>lib</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">with </font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和and </font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">文件夹</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><code>/usr/local</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道</font><font style="vertical-align: inherit;">如何以及为什么创建它，而不是在我的</font><font style="vertical-align: inherit;">文件夹中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除这些本地引用可修复幻影v0.6.1-pre。</font><font style="vertical-align: inherit;">如果有人有解释，我会选择它作为正确答案。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能还需要执行其他说明：</font></font></p>

<pre><code>sudo rm -rf /usr/local/{lib/node{,/.npm,_modules},bin,share/man}/{npm*,node*,man1/node*}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">等价于（与上述相同）...</font></font></p>

<pre><code>sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node* /usr/local/lib/dtrace/node.d ~/.npm ~/.node-gyp 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或（与上述相同）损坏...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要完全卸载node + npm，请执行以下操作：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ usr / local / lib</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并删除任何</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node_modules</font></font></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ usr / local / include</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并删除任何</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node_modules</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你安装了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">酿造安装节点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后运行</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">BREW卸载节点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在终端</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查您的主目录中是否有任何</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">lib</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹，并</font><font style="vertical-align: inherit;">从此处</font><font style="vertical-align: inherit;">删除任何</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node_modules</font></font></strong><font style="vertical-align: inherit;"></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/ usr / local / bin</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并删除任何</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可执行文件</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能还需要执行以下操作：</font></font></p>

<pre><code>sudo rm -rf /opt/local/bin/node /opt/local/include/node /opt/local/lib/node_modules<font></font>
sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node.1 /usr/local/lib/dtrace/node.d<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，NVM修改了中的PATH变量</font></font><code>$HOME/.bashrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，该</font><font style="vertical-align: inherit;">变量</font><font style="vertical-align: inherit;">必须</font></font><a href="https://github.com/creationix/nvm#removal" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动还原</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后下载</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nvm</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并按照说明安装节点。</font><font style="vertical-align: inherit;">我相信</font><font style="vertical-align: inherit;">node的最新版本是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附带的</font><font style="vertical-align: inherit;">，但是您也可以重新安装它。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
