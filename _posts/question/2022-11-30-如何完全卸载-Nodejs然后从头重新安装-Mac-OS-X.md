---
layout: question
title:  如何完全卸载 Node.js，然后从头重新安装 (Mac OS X)
date:   2022-11-30T09:53:49.000Z
description: 即使在安装 brew node 和 NVM install v0.6.19 之后，我的节点版本始终是 v0.6.1-pre。我的节点版本是：nod...
img: 
author: Elena
category: question
answer: 25
tags: javascript JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使在安装 brew node 和 NVM install v0.6.19 之后，我的节点版本始终是 v0.6.1-pre。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的节点版本是：</font></font></p>

<pre class="lang-none s-code-block"><code>node -v<font></font>
v0.6.1-pre<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NVM 是这样说的（在我第一次在一个 bash 终端中安装一个节点版本之后）：</font></font></p>

<pre class="lang-none s-code-block"><code>nvm ls<font></font>
v0.6.19<font></font>
current:    v0.6.19<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是当我重新启动 bash 时，这就是我所看到的：</font></font></p>

<pre class="lang-none s-code-block"><code>nvm ls<font></font>
v0.6.19<font></font>
current:    v0.6.1-pre<font></font>
default -&gt; 0.6.19 (-&gt; v0.6.19)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">那么这个幻影节点 0.6.1-pre 版本在哪里，我该如何摆脱它呢？</font><font style="vertical-align: inherit;">我正在尝试通过 NPM 安装库，以便我可以处理一个项目。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试在 NVM 之前使用 BREW 进行更新，使用</font></font><code>brew update</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>brew install node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">. </font><font style="vertical-align: inherit;">我试过删除我的“节点”目录</font></font><code>/usr/local/include</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和我的</font></font><code>/usr/local/lib</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">. </font><font style="vertical-align: inherit;">我已经尝试按照</font></font><a href="https://superuser.com/questions/268946/uninstall-node-js"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明卸载 npm 并重新安装它。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有这一切都是因为我试图更新旧版本的节点以安装“zipstream”库。</font><font style="vertical-align: inherit;">现在我的用户目录中有文件夹，节点版本仍然不是最新的，即使 NVM 说它使用的是 0.6.19。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理想情况下，我想卸载 nodejs、npm 和 nvm，然后在我的系统上从头开始重新安装整个东西。</font></font></strong></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第4292篇《如何完全卸载 Node.js，然后从头重新安装 (Mac OS X)》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于任何使用 的人</font></font><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，当您更改节点版本时，它会自动重新安装 npm。</font><font style="vertical-align: inherit;">您可以</font></font><code>npm upgrade</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过运行以下命令来恢复损坏：</font></font></p>
<ol>
<li><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（选择不同的节点版本，npm 将重新安装）</font></font></li>
<li><code>n</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（这一次，选择您喜欢的版本）</font></font></li>
<li><code>npm -v</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（它将是旧版本的 NPM）</font></font></li>
<li><code>npm install -g npm@7.x.x</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（插入适当的版本）</font></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿良</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这为我修复了</font></font><a href="https://gist.github.com/DanHerbert/9520689" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Fixing npm On Mac OS X for Homebrew Users</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">而且它不需要太多的步骤。</font></font></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您不关心原因，请转到解决方案部分。</font></font></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了方便起见，这里是相关部分：</font></font></p>
<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案</font></font></h2>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此解决方案修复了尝试运行</font></font><code>npm update npm -g</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">. </font><font style="vertical-align: inherit;">完成后，您也不需要使用</font></font><code>sudo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">全局安装 npm 模块。</font></font></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在开始之前，记下任何全局安装的 npm 包。</font><font style="vertical-align: inherit;">这些说明将让您删除所有这些包。</font><font style="vertical-align: inherit;">完成后，您需要重新安装它们。</font></font></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行以下命令以删除所有现有的全局 npm 模块，卸载节点和 npm，使用正确的默认值重新安装节点，配置要安装的全局 npm 模块的位置，然后将 npm 安装为自己的包。</font></font></p>
<pre class="lang-js s-code-block"><code class="hljs language-javascript">rm -rf /usr/local/lib/node_modules<font></font>
brew uninstall node<font></font>
brew install node --without-npm<font></font>
echo prefix=~<span class="hljs-regexp">/.npm-packages &gt;&gt; ~/</span>.<span class="hljs-property">npmrc</span>
curl -L <span class="hljs-attr">https</span>:<span class="hljs-comment">//www.npmjs.com/install.sh | sh</span>
</code></pre>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此时应该正确安装了 Node 和 npm。</font><font style="vertical-align: inherit;">最后一步是添加</font></font><code>~/.npm-packages/bin</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到你的</font></font><code>PATH</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">so npm 和全局 npm 包是可用的。</font><font style="vertical-align: inherit;">为此，请将以下行添加到您的</font></font><code>~/.bash_profile</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>
<pre class="lang-js s-code-block"><code class="hljs language-javascript"><span class="hljs-keyword">export</span> <span class="hljs-variable constant_">PATH</span>=<span class="hljs-string">"$HOME/.npm-packages/bin:$PATH"</span>
</code></pre>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以毫无问题地重新安装所需的任何全局 npm 包。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您无法找到节点，只需运行</font></font><code>whereis node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">and</font></font><code>whereis npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且</font></font><code>whereis nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以根据需要删除列出的目录。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还需要完全关闭终端并重新打开它以使更改生效。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，其他答案均无效，因为我之前已降级到 node8。</font><font style="vertical-align: inherit;">因此，与其上面那样做，不如以下对我有用：</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">which node
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">返回</font></font><code>/usr/local/bin/node@8</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><code>/usr/local/bin/node</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我执行了这个命令：</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">brew uninstall node@<span class="hljs-number">8</span>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这有效，然后从官方网站下载最新的 pkg 并安装。</font><font style="vertical-align: inherit;">之后我不得不关闭我的终端并重新开始访问新版本</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，您需要在安装新节点版本后停用节点：（mac）。</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">nvm deactivate
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是从 $PATH 中删除的 /Users/user_name/.nvm/*/bin</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在该节点更新后</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">node --version<font></font>
v10<span class="hljs-number">.9</span><span class="hljs-number">.0</span>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Chloe</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我从 git 存储库下载的源代码安装了 Node.js。</font><font style="vertical-align: inherit;">我安装了：</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">./configure<font></font>
$ make<font></font>
$ sudo make install<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为 make 文件支持它，所以我可以这样做：</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">$ sudo make uninstall
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以克隆</font></font><a href="https://github.com/brock/node-reinstall" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/brock/node-reinstall</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并运行存储库中给出的简单命令。之后只需重新启动系统即可。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这是最简单的方法，也对我有用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">鱼二水</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的 Mac 上卸载 Node.js 时，我遇到了一个问题。</font><font style="vertical-align: inherit;">我有一些奇怪的行为</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，即使在不得不将其全部删除之后仍然存在。</font></font></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是因为我用 macport 完成了旧安装。</font><font style="vertical-align: inherit;">所以你还必须使用端口卸载它：</font></font></p>
<pre class="lang-js s-code-block"><code class="hljs language-javascript">sudo port uninstall nodejs
</code></pre>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它可能已经安装了许多不同版本的 Node.js，所以将它们全部卸载（一个一个地）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">6的不行</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最好的方法是下载安装程序包：mac 上的 .pkg。</font><font style="vertical-align: inherit;">最好是最新的稳定版。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是链接：</font></font><a href="https://nodejs.org/en/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个包最终会覆盖以前的版本并相应地设置环境变量。</font><font style="vertical-align: inherit;">只需运行安装程序，点击几下即可完成。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蓝染大人</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许你需要做</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">hash -r 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它有助于解决符号链接问题</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">$ node -v<font></font>
$ <span class="hljs-attr">bash</span>: <span class="hljs-regexp">/opt/</span>local/bin/<span class="hljs-attr">node</span>: <span class="hljs-title class_">No</span> such file or directory
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除了主要答案之外，我还需要删除在以下位置找到的所有 npm 实例：</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">rm -rf /usr/local/share/man/man1/npm*
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我工作。</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">$node --version<font></font>
<font></font>
v11<span class="hljs-number">.1</span><span class="hljs-number">.0</span><font></font>
<font></font>
$nvm deactivate<font></font>
<font></font>
$nvm uninstall v11<span class="hljs-number">.1</span><span class="hljs-number">.0</span>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你已经安装了</font></font><a href="https://github.com/nvm-sh/nvm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nvm</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后执行以下命令</font></font></p>

<ul>
<li><code>nvm deactivate</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- 这将从 $PATH 中删除 /.nvm/*/bin</font></font></li>
<li><code>nvm list</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- 列出系统中安装的所有节点版本</font></font></li>
<li><code>nvm uninstall &lt;version&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您可以指定要卸载的所有版本。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
 使用而不是使用安装节点</font></font><code>nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和卸载</font><font style="vertical-align: inherit;">节点总是一件好事</font><font style="vertical-align: inherit;">。</font></font><code>nvm</code><font style="vertical-align: inherit;"></font><code>brew</code><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个解决方案对我有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附加命令</font></font></p>

<ul>
<li><code>which node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了解系统中安装的节点路径。</font><font style="vertical-align: inherit;">您可以 rm 此目录以手动卸载节点。</font><font style="vertical-align: inherit;">那么您可能需要相应地调整 PATH 文件。</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">后</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">brew uninstall node
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我必须知道哪个节点</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">which node
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后删除它</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">rm -rf /usr/local/bin/node
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">和田</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从 /usr/local/lib 中删除节点和/或 node_modules</font></font></p>
<pre class="lang-js s-code-block"><code class="hljs language-javascript">ex <span class="hljs-attr">code</span>:<font></font>
cd /usr/local/lib<font></font>
sudo rm -rf node<font></font>
sudo rm -rf node_modules<font></font>
</code></pre>
</li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从 /usr/local/include 中删除节点和/或 node_modules</font></font></p>
</li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从 /usr/local/bin 中删除节点、节点调试和节点 gyp</font></font></p>
</li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从您的主目录中删除 .npmrc（这些是您的 npm 设置，如果您打算立即重新安装 Node，请不要删除它）</font></font></p>
</li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从您的主目录中删除 .npm</font></font></p>
</li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从您的主目录中删除 .node-gyp</font></font></p>
</li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从您的主目录中删除 .node_repl_history</font></font></p>
</li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从 /usr/local/share/man/man1/ 中删除节点*</font></font></p>
</li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从 /usr/local/share/man/man1/ 删除 npm*</font></font></p>
</li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从 /usr/local/lib/dtrace/ 中删除 node.d</font></font></p>
</li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从 /usr/local/opt/local/bin/ 删除节点</font></font></p>
</li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从 /usr/local/opt/local/include/ 删除节点</font></font></p>
</li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从 /usr/local/opt/local/lib/ 删除 node_modules</font></font></p>
</li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从 /usr/local/share/doc/ 删除节点</font></font></p>
</li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从 /usr/local/share/systemtap/tapset/ 删除 node.stp</font></font></p>
</li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载 NodeJS 的步骤：</font></font></strong></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于带有 M1 芯片的 MacOS Monterey，请按照以下链接从系统中完全卸载节点。</font><font style="vertical-align: inherit;">我尝试了多种方法，但这个方法终于奏效了。</font></font></p>
<p><a href="https://www.positronx.io/how-to-uninstall-node-js-and-npm-from-macos/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从 Mac M1 Monterey 卸载 NodeJS &amp; NPM</font></font></a></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，请在最后执行以下命令以从 bin 文件夹中删除节点相关目录。</font></font></p>
<pre class="lang-js s-code-block"><code class="hljs language-javascript">sudo rm -R node-sass<font></font>
sudo rm -R npm<font></font>
sudo rm -R npx<font></font>
</code></pre>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要验证节点是否已删除：</font></font></p>
<pre class="lang-js s-code-block"><code class="hljs language-javascript">node --version
</code></pre>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它应该说找不到命令。</font></font></p>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装 NodeJS 的步骤：</font></font></strong></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在装有 M1 芯片的 Mac 上启用 Rosseta 终端。
</font></font><a href="https://www.bigbinary.com/learn-rubyonrails-book/setting-up-mac" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何启用 Rosseta 终端</font></font></a></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用 nvm（节点版本管理器）在您的机器上安装 NodeJS。</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么是 nvm？</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为您可以运行多个版本的 NodeJS（您可以使用新应用程序以及旧版应用程序）。</font></font></p>
<p><a href="https://github.com/nvm-sh/nvm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用 nvm 安装多个版本的 NodeJS</font></font></a></p>
<pre class="lang-js s-code-block"><code class="hljs language-javascript">curl -o- <span class="hljs-attr">https</span>:<span class="hljs-comment">//raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash</span>
</code></pre>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不存在，则创建一个 .zshrc 文件。</font></font></p>
<pre class="lang-js s-code-block"><code class="hljs language-javascript">touch ~/.<span class="hljs-property">zshrc</span>
</code></pre>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用 nvm 安装节点。</font></font></p>
<pre class="lang-js s-code-block"><code class="hljs language-javascript">nvm install node # <span class="hljs-string">"node"</span> is an alias <span class="hljs-keyword">for</span> the latest version<font></font>
nvm install <span class="hljs-number">14.7</span><span class="hljs-number">.0</span> # or <span class="hljs-number">16.3</span><span class="hljs-number">.0</span>, <span class="hljs-number">12.22</span><span class="hljs-number">.1</span>, etc
</code></pre>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要验证可用的 NodeJS 版本数：</font></font></p>
<pre class="lang-js s-code-block"><code class="hljs language-javascript">nvm ls
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">三三呀</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将节点降级到 0.10.36</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">  sudo npm cache clean -f<font></font>
  sudo npm install -g n<font></font>
  sudo n <span class="hljs-number">0.10</span><span class="hljs-number">.36</span>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">升级节点到稳定v</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">  sudo npm cache clean -f<font></font>
  sudo npm install -g n<font></font>
  sudo n stable<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇神奇Near</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在 macOS Monterey 版本 12.0.1 上完全卸载 Node.js</font></font></h2>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要检查系统上安装的当前节点版本：</font></font></p>
<pre class="lang-js s-code-block"><code class="hljs language-javascript"># node -v<font></font>
# v14<span class="hljs-number">.15</span><span class="hljs-number">.0</span>
</code></pre>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入以下命令从系统中删除节点：</font></font></p>
<pre class="lang-js s-code-block"><code class="hljs language-javascript"># cd /usr/local/include<font></font>
# sudo rm -R node<font></font>
# cd ../lib<font></font>
# sudo rm -R node_modules<font></font>
# cd ../bin<font></font>
# sudo rm -R node<font></font>
</code></pre>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查该节点不再存在</font></font></p>
<pre class="lang-js s-code-block"><code class="hljs language-javascript"># node -v<font></font>
# -<span class="hljs-attr">bash</span>: <span class="hljs-attr">node</span>: command not found
</code></pre>
<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在 macOS Monterey 版本 12.0.1 上安装 Node.js</font></font></h2>
<ol>
<li><font style="vertical-align: inherit;"><a href="https://nodejs.org/en/" rel="noreferrer"><font style="vertical-align: inherit;">从官网</font></a><font style="vertical-align: inherit;">下载LTS版本的node</font></font><a href="https://nodejs.org/en/" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></li>
</ol>
<ol start="2">
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">双击</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node-v16.13.1.pkg</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装包，继续默认设置</font></font></p>
</li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的终端中输入</font></font><code>node -v</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以打印当前安装的节点版本：</font></font><code>v16.13.1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&amp;</font></font><code>npm -v</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以打印您机器上安装的当前 npm 版本：</font></font><code>8.1.2</code></p>
</li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Me无敌</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不确定是因为我有一个旧版本（4.4.5），还是因为我使用了官方安装程序，但其他答案中引用的大多数文件在我的系统上都不存在。</font><font style="vertical-align: inherit;">我只需要删除以下内容：</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">~/.<span class="hljs-property">node</span>-gyp<font></font>
~/.<span class="hljs-property">node_repl_history</span><font></font>
/usr/local/bin/node<font></font>
/usr/local/bin/npm<font></font>
/usr/local/include/node<font></font>
/usr/local/lib/dtrace/node.<span class="hljs-property">d</span><font></font>
/usr/local/lib/node_modules<font></font>
/usr/local/share/doc/node<font></font>
/usr/local/share/man/man1/node<span class="hljs-number">.1</span>
/usr/local/share/systemtap/tapset/node.<span class="hljs-property">stp</span>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我决定保留</font></font><code>~/.npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为我打算用 Homebrew 重新安装 Node。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一的：</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">lsbom -f -l -s -pf /<span class="hljs-keyword">var</span>/db/receipts/org.<span class="hljs-property">nodejs</span>.<span class="hljs-property">pkg</span>.<span class="hljs-property">bom</span> | <span class="hljs-keyword">while</span> read f; <span class="hljs-keyword">do</span>  sudo rm /usr/local/${f}; done<font></font>
<font></font>
sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /<span class="hljs-keyword">var</span>/db/receipts/org.<span class="hljs-property">nodejs</span>.*
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">回顾一下，完全卸载 node + npm 的最佳方法（我发现）是执行以下操作：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到</font></font><code>/usr/local/lib</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并删除任何节点和 node_modules</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">cd /usr/local/lib<font></font>
<font></font>
sudo rm -rf node*<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到</font></font><code>/usr/local/include</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并删除任何节点和 node_modules 目录</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">cd /usr/local/include<font></font>
<font></font>
sudo rm -rf node*<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你安装了</font></font><code>brew install node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后</font></font><code>brew uninstall node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在你的终端运行</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">brew uninstall node
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查您的主目录中是否有任何“local”或“lib”或“include”文件夹，并从那里删除任何“node”或“node_modules”</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到 /usr/local/bin 并删除任何节点可执行文件</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">cd /usr/local/bin<font></font>
<font></font>
sudo rm -rf /usr/local/bin/npm<font></font>
<font></font>
ls -las<font></font>
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能还需要执行其他说明：</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">sudo rm -rf /usr/local/share/man/man1/node<span class="hljs-number">.1</span><font></font>
<font></font>
sudo rm -rf /usr/local/lib/dtrace/node.<span class="hljs-property">d</span><font></font>
<font></font>
sudo rm -rf ~/.<span class="hljs-property">npm</span>
</code></pre></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资料来源：</font></font><a href="https://gist.github.com/TonyMtz/d75101d9bdf764c890ef"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">tonyMtz</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道这篇文章有点过时，但只是想分享在删除 Node.js 时在终端中对我有用的命令。</font></font></p>
<pre class="lang-js s-code-block"><code class="hljs language-javascript">lsbom -f -l -s -pf /<span class="hljs-keyword">var</span>/db/receipts/org.<span class="hljs-property">nodejs</span>.<span class="hljs-property">pkg</span>.<span class="hljs-property">bom</span> | <span class="hljs-keyword">while</span> read f; <span class="hljs-keyword">do</span>  sudo rm /usr/local/${f}; done<font></font>
 <font></font>
sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /<span class="hljs-keyword">var</span>/db/receipts/org.<span class="hljs-property">nodejs</span>.*
</code></pre>
<hr>
<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font><code>23 SEP 2016</code></h1>
<hr>
<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果你害怕运行这些命令......</font></font></h1>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢</font></font><a href="https://gist.github.com/jguix" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">jguix</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">提供</font></font><a href="https://gist.github.com/TonyMtz/d75101d9bdf764c890ef#gistcomment-1880118" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个快速教程</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，创建一个中间文件：</font></font></strong></p>
<pre class="lang-js s-code-block"><code class="hljs language-javascript">lsbom -f -l -s -pf /<span class="hljs-keyword">var</span>/db/receipts/org.<span class="hljs-property">nodejs</span>.<span class="hljs-property">node</span>.<span class="hljs-property">pkg</span>.<span class="hljs-property">bom</span> &gt;&gt; ~/filelist.<span class="hljs-property">txt</span>
</code></pre>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动查看您的文件（位于您的</font></font><code>Home</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹中）</font></font></strong></p>
<pre class="lang-js s-code-block"><code class="hljs language-javascript"> ~/filelist.<span class="hljs-property">txt</span>
</code></pre>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后删除文件：</font></font></strong></p>
<pre class="lang-js s-code-block"><code class="hljs language-javascript">cat ~<span class="hljs-regexp">/filelist.txt | while read f; do sudo rm /u</span>sr/local/${f}; done<font></font>
<font></font>
sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /<span class="hljs-keyword">var</span>/db/receipts/org.<span class="hljs-property">nodejs</span>.*
</code></pre>
<hr>
<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于 10.10.5 及更高版本</font></font></h1>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">感谢</font></font><a href="https://stackoverflow.com/users/852592/lenar-hoyt"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Lenar Hoyt</font></font></a></strong></p>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要点评论来源：</font></font></strong> <a href="https://gist.github.com/TonyMtz/d75101d9bdf764c890ef#gistcomment-1572198" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">gistcomment-1572198</font></font></a></p>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原始要点：</font></font></strong> <a href="https://gist.github.com/TonyMtz/d75101d9bdf764c890ef#file-gistfile1-txt" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">TonyMtz/d75101d9bdf764c890ef</font></font></a></p>
<pre class="lang-js s-code-block"><code class="hljs language-javascript">lsbom -f -l -s -pf /<span class="hljs-keyword">var</span>/db/receipts/org.<span class="hljs-property">nodejs</span>.<span class="hljs-property">node</span>.<span class="hljs-property">pkg</span>.<span class="hljs-property">bom</span> | <span class="hljs-keyword">while</span> read f; <span class="hljs-keyword">do</span> sudo rm /usr/local/${f}; done<font></font>
<font></font>
sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /<span class="hljs-keyword">var</span>/db/receipts/org.<span class="hljs-property">nodejs</span>.*
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">三分糖就好</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我总结了现有的答案并确保 Node.js与 NPM 一起被</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全删除</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要复制到终端的行：</font></font></p>
<pre class="lang-js s-code-block"><code class="hljs language-javascript">brew uninstall node;<font></font>
which node;<font></font>
sudo rm -rf /usr/local/bin/node;<font></font>
sudo rm -rf /usr/local/lib/node_modules/npm/;<font></font>
brew doctor;<font></font>
brew cleanup --prune-prefix;<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">启人</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在 Mavericks 上，我从节点 pkg（来自 nodejs 站点）安装它，然后卸载它，这样我就可以使用 brew 重新安装。</font><font style="vertical-align: inherit;">我只在终端中运行 4 个命令：</font></font></p>

<ol>
<li><code>sudo rm -rf  /usr/local/lib/node_modules/npm/</code></li>
<li><code>brew uninstall node</code></li>
<li><code>brew doctor</code></li>
<li><code>brew cleanup --prune-prefix</code></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果还有node安装，重复步骤2，一切ok后，我安装using</font></font><code>brew install node</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><a href="https://stackabuse.com/how-to-uninstall-node-js-from-mac-osx/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackabuse.com/how-to-uninstall-node-js-from-mac-osx/</font></font></a>
<br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
运行以下命令以在 MACOS 中从系统中完全删除节点</font></font></p>
<pre class="lang-js s-code-block"><code class="hljs language-javascript">sudo rm -rf ~<span class="hljs-regexp">/.npm ~/</span>.<span class="hljs-property">nvm</span> ~<span class="hljs-regexp">/node_modules ~/</span>.<span class="hljs-property">node</span>-gyp ~<span class="hljs-regexp">/.npmrc ~/</span>.<span class="hljs-property">node_repl_history</span><font></font>
sudo rm -rf /usr/local/bin/npm /usr/local/bin/node-debug /usr/local/bin/node /usr/local/bin/node-gyp<font></font>
sudo rm -rf /usr/local/share/man/man1/node* <span class="hljs-regexp">/usr/</span>local/share/man/man1/npm*<font></font>
sudo rm -rf /usr/local/include/node /usr/local/include/node_modules<font></font>
sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /usr/local/lib/dtrace/node.<span class="hljs-property">d</span><font></font>
sudo rm -rf /opt/local/include/node /opt/local/bin/node /opt/local/lib/node<font></font>
sudo rm -rf /usr/local/share/doc/node<font></font>
sudo rm -rf /usr/local/share/systemtap/tapset/node.<span class="hljs-property">stp</span><font></font>
<font></font>
brew uninstall node<font></font>
brew doctor<font></font>
brew cleanup --prune-prefix<font></font>
</code></pre>
<p><br><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此之后我会建议使用以下命令使用 nvm 安装节点（查看</font></font><a href="https://github.com/nvm-sh/nvm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/nvm-sh/nvm</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取最新版本）</font></font><br><br>
<code>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash</code></p>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自</font></font><a href="https://github.com/nvm-sh/nvm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/nvm-sh/nvm</font></font></a></p>
<br>
<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么是 nvm？</font></font></strong><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这是一个很好的问题，会有项目需要不同版本的节点，</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即A需要节点版本12，而B需要节点版本14。节点的版本管理仅由nvm提供。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">留姬</span>
            <span class="discuss-time">2022.11.30</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">显然，有一个</font></font><code>/Users/myusername/local</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含</font></font><code>include</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">with</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>lib</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">with</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的文件夹</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font><code>/usr/local</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不知道</font><font style="vertical-align: inherit;">这是如何以及为什么创建的而不是在我的文件夹中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除这些本地引用修复了 phantom v0.6.1-pre。</font><font style="vertical-align: inherit;">如果有人有解释，我会选择它作为正确答案。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能还需要执行其他说明：</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">sudo rm -rf /usr/local/{lib/node{,<span class="hljs-regexp">/.npm,_modules},bin,share/m</span>an}/{npm*,node*,man1/node*}
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这相当于（同上）...</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node* <span class="hljs-regexp">/usr/</span>local/lib/dtrace/node.<span class="hljs-property">d</span> ~<span class="hljs-regexp">/.npm ~/</span>.<span class="hljs-property">node</span>-gyp 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或（同上）分解...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完全卸载 node + npm 就是执行以下操作：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/usr/local/lib</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并删除任何</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node_modules</font></font></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/usr/local/include</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并删除任何</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node_modules</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">brew install node 安装</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则在您的终端中</font><font style="vertical-align: inherit;">运行</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">brew uninstall node</font></font></strong><font style="vertical-align: inherit;"></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查您的主目录中是否有任何</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">lib</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">包含</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹，并从那里</font><font style="vertical-align: inherit;">删除任何</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node_modules</font></font></strong><font style="vertical-align: inherit;"></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/usr/local/bin</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并删除任何</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可执行文件</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能还需要执行以下操作：</font></font></p>

<pre class="lang-js s-code-block"><code class="hljs language-javascript">sudo rm -rf /opt/local/bin/node /opt/local/include/node /opt/local/lib/node_modules<font></font>
sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node<span class="hljs-number">.1</span> /usr/local/lib/dtrace/node.<span class="hljs-property">d</span>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，NVM 修改了 PATH 变量</font></font><code>$HOME/.bashrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，必须</font></font><a href="https://github.com/creationix/nvm#removal" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动恢复</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后下载</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">nvm</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并按照说明安装 node。</font><font style="vertical-align: inherit;">我相信，最新版本的 node 带有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但您也可以重新安装它。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
