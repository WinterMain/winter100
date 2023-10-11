---
layout: question
title:  nvm与npm config的“ prefix”选项不兼容：
date:   2020-03-23T11:54:40.000Z
description: 我正在尝试运行另一个NodeJS版本，nvm但出现此错误：$ nvm use v4.2.4nvm is not compatible with t...
img: 
author: 西门蛋蛋JinJin
category: question
answer: 14
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试运行另一个NodeJS版本，</font></font><code>nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但出现此错误：</font></font></p>

<pre><code>$ nvm use v4.2.4<font></font>
<font></font>
nvm is not compatible with the npm config "prefix" option: <font></font>
   currently set to "/Users/z/.npm-global"<font></font>
Run `npm config delete prefix` or `nvm use --delete-prefix v4.2.4` to unset it.<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我设置了我的前缀以避免</font></font><code>sudo npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（请参阅</font></font><a href="https://docs.npmjs.com/getting-started/fixing-npm-permissions"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://docs.npmjs.com/getting-started/fixing-npm-permissions</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有什么方法可以使用</font></font><code>nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不会丢失全局安装软件包的前缀？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2997篇《nvm与npm config的“ prefix”选项不兼容：》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当它在VSCode和JetBrains终端上显示但不在本机终端上显示时，我使用以下命令解决了此问题：</font></font></p>

<pre><code>ls -la /usr/local/bin | grep "np[mx]"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后将为您提供解析路径：</font></font></p>

<pre><code>... npm -&gt; ../lib/node_modules/npm/bin/npm-cli.js<font></font>
... npx -&gt; ../lib/node_modules/npm/bin/npx-cli.js<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从那里删除文件并重新启动VS Code应该可以解决此问题：</font></font></p>

<pre><code>rm -R /usr/local/bin/npm /usr/local/lib/node_modules/npm/bin/npm-cli.js<font></font>
rm -R /usr/local/bin/npx /usr/local/lib/node_modules/npm/bin/npx-cli.js<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修复链接：</font><a href="https://github.com/nvm-sh/nvm/issues/1690#issuecomment-392014774" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/nvm-sh/nvm/issues/1690#issuecomment-392014774" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/nvm-sh/nvm/issues/1690#issuecomment-392014774</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
要删除，删除或卸载nvm-只需删除</font></font><code>$NVM_DIR</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹（通常是</font></font><code>~/.nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
您可以尝试：</font></font><br>
<code>rm -rf ~/.nvm</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门JinJin</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">刚刚解决了这个问题。</font><font style="vertical-align: inherit;">我链接</font></font><code>$HOME/.nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>$DEV_ZONE/env/node/nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录。</font><font style="vertical-align: inherit;">我面临着同样的问题。</font><font style="vertical-align: inherit;">我换过</font></font><code>NVM_DIR</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>$HOME/.zshrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如下</font></font></p>

<pre><code>export NVM_DIR="$DEV_ZONE/env/node/nvm"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">顺便说一句，请使用</font></font><code>curl</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>wget</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令而不使用来</font><font style="vertical-align: inherit;">安装NVM </font></font><code>brew</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">有关更多信息，请在Github上查看本期中的评论：</font></font><strong><a href="https://github.com/creationix/nvm/issues/855#issuecomment-146115434" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">855＃issuecomment-146115434</font></font></a></strong> </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将主文件夹移动到Linux上的新驱动器后，出现了这个问题。</font><font style="vertical-align: inherit;">通过删除.nvm文件夹并重新安装nvm可以修复此问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在寻找nvm前缀问题的解决方案，发现了这个问题（找到解决方案之前）。</font><font style="vertical-align: inherit;">这是我的shell“对话框”。</font><font style="vertical-align: inherit;">我希望这对某人有用。</font><font style="vertical-align: inherit;">我可以在这篇文章的帮助下设置前缀：</font><a href="https://github.com/npm/npm/issues/6592" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://github.com/npm/npm/issues/6592" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/npm/npm/issues/6592</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我尝试</font><font style="vertical-align: inherit;">使用之前</font></font><code>npm config delete prefix</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>nvm use --delete-prefix</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用之前</font></font><code>npm --prefix="" set prefix ""</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我只有：npm ERR！</font><font style="vertical-align: inherit;">错误代码0</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，您将必须对每个节点版本重复相同的过程，在安装后，将前缀设置回（对于我而言）/ usr / local。 </font></font></p>

<pre><code>    $ nvm install 0.10<font></font>
    ######################################################################## 100.0%<font></font>
    nvm is not compatible with the npm config "prefix" option: currently set to "/usr/local"<font></font>
    Run `npm config delete prefix` or `nvm use --delete-prefix v0.10.44` to unset it.<font></font>
    $ npm --prefix="" set prefix ""<font></font>
    $ nvm use 0.10.44<font></font>
    nvm is not compatible with the npm config "prefix" option: currently set to "/home/john"<font></font>
    Run `npm config delete prefix` or `nvm use --delete-prefix v0.10.44` to unset it.<font></font>
    $ nvm use --delete-prefix v0.10.44<font></font>
    Now using node v0.10.44 (npm v1.3.10)<font></font>
    $ nvm ls<font></font>
    v0.10.44<font></font>
             v4.4.3<font></font>
    -&gt;       system<font></font>
    default -&gt; 4.4.3 (-&gt; v4.4.3)<font></font>
    node -&gt; stable (-&gt; v4.4.3) (default)<font></font>
    stable -&gt; 4.4 (-&gt; v4.4.3) (default)<font></font>
    iojs -&gt; N/A (default)<font></font>
    $ npm config get prefix<font></font>
    /usr/local<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我描述一下我的情况。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，检查当前配置</font></font></p>

<pre><code>$ nvm use --delete-prefix v10.7.0<font></font>
$ npm config list<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我在输出中发现错误配置：</font></font></p>

<pre><code>; project config /mnt/c/Users/paul/.npmrc<font></font>
prefix = "/mnt/c/Users/paul/C:\\Program Files\\nodejs"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我删除了</font></font><code>C:\\Program Files\\nodejs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">/mnt/c/Users/paul/.npmrc中的。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO西门</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遵循了</font></font><a href="https://stackoverflow.com/a/47861348/2391795"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://stackoverflow.com/a/47861348/2391795的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案，但效果不佳。</font></font></p>

<pre><code>$ npm config delete prefix <font></font>
$ npm config set prefix $NVM_DIR/versions/node/v6.11.1<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行推荐的命令后，我的nvm不再起作用，运行</font></font><code>nvm use</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将显示正在使用的正确节点版本，但是运行</font></font><code>node -v</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将显示另一个</font><font style="vertical-align: inherit;">节点版本</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">不再可能更改节点的版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我完全卸载并重新安装了nvm来修复它。</font><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">通过运行</font><font style="vertical-align: inherit;">遵循</font></font><a href="https://github.com/creationix/nvm#manual-uninstall" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/creationix/nvm#manual-uninstall</font></font></a><font style="vertical-align: inherit;"></font></p>

<pre><code>$ rm -rf "$NVM_DIR"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后编辑my </font></font><code>.zshrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以删除与nvm相关的行，在我的情况下是</font></font></p>

<pre><code>export NVM_DIR="$HOME/.nvm"<font></font>
[ -s "$NVM_DIR/nvm.sh" ] &amp;&amp; \. "$NVM_DIR/nvm.sh" # This loads nvm<font></font>
[ -s "$NVM_DIR/bash_completion" ] &amp;&amp; \. "$NVM_DIR/bash_completion"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后启动一个新的外壳（这样就不会在该新外壳中加载nvm）并运行</font></font><a href="https://github.com/creationix/nvm#install-script" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/creationix/nvm#install-script</font></font></a></p>

<pre><code>curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中添加了nvm我以前在.net中删除的行</font></font><code>.zshrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我可以像以前一样使用nvm。</font><font style="vertical-align: inherit;">我想这是一个奇怪的情况，如果出现问题并迫使我重新安装所有内容，由于这个问题，大多数人似乎都无法通过。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L村村小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有相同的错误消息，但其他解决方案。</font><font style="vertical-align: inherit;">curl（install.sh）期间自动生成的路径不匹配。</font><font style="vertical-align: inherit;">使用以下方法检查：</font></font></p>

<pre><code>echo $NVM_DIR
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言：</font></font><code>/var/www//.nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在自动生成的bash文件中显示并更改并替换：（〜/ .bash_profile，〜/ .zshrc，〜/ .profile或〜/ .bashrc）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更换</font></font></p>

<pre><code>export NVM_DIR="$HOME/.nvm"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与（例如）</font></font></p>

<pre><code>export NVM_DIR="$HOME.nvm"
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><a href="https://i.stack.imgur.com/kEart.png" rel="noreferrer"><img src="https://i.stack.imgur.com/kEart.png" alt="在此处输入图片说明"></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，每次使用终端时都非常烦人。</font><font style="vertical-align: inherit;">我运行命令到终端，它是固定的</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些尝试从brew中删除nvm的人</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅仅冲煮卸载nvm可能还不够</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果看到npm前缀仍然是/ usr / local，请运行此命令</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sudo rm -rf /usr/local/{lib/node{,/.npm,_modules},bin,share/man}/{npm*,node*,man1/node*}</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长SamJim</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在使用通过</font><font style="vertical-align: inherit;">安装的</font><font style="vertical-align: inherit;">节点</font></font><code>nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过自制程序安装的</font><font style="vertical-align: inherit;">节点时遇到了这个问题</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我通过运行</font></font><code>brew uninstall nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">解决了问题</font></font><code>rm -rf $NVM_DIR</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后使用</font></font><a href="https://github.com/creationix/nvm#install-script" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正式的安装脚本</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新安装了</font><font style="vertical-align: inherit;">nvm </font><font style="vertical-align: inherit;">并重新安装了所需的节点版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：我也已经</font></font><code>$NVM_DIR</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装并符号链接。</font><font style="vertical-align: inherit;">我将其移回了我的homedir。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪斯丁</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NVM安装文件夹路径</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">符号链接</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时，可能会发生此错误</font><font style="vertical-align: inherit;">。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NVM的默认安装路径是：</font></font><code>$HOME/.nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是您的主文件夹可能是另一个驱动器的符号链接，例如我的情况。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，我的主文件夹是到另一个驱动器的符号链接：</font></font></p>

<p><code>/home/myuser -&gt; /bigdrive/myuser</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这导致前缀问题。</font></font></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在启动脚本（.bashrc或.zshrc或其他）上，将NVM文件夹更改为直接路径。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font><code>NVM_DIR="/bigdrive/myuser/.nvm"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">.bashrc</font></font></p>

<pre><code>export NVM_DIR="/bigdrive/myuser/.nvm"<font></font>
[ -s "$NVM_DIR/nvm.sh" ] &amp;&amp; \. "$NVM_DIR/nvm.sh" # This loads nvm<font></font>
[ -s "$NVM_DIR/bash_completion" ] &amp;&amp; \. "$NVM_DIR/bash_completion"<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的主目录挂载在某个地方，则可能是问题所在，因为nvm在符号链接中无法正常工作。</font><font style="vertical-align: inherit;">因为我不在乎$ NVM_DIR在哪里，所以我运行了此命令，并且一切正常：</font></font></p>

<pre><code>$ mv ~/.nvm /tmp/<font></font>
$ export NVM_DIR="/tmp/.nvm"<font></font>
$ nvm use --delete-prefix v6.9.1<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除并重置前缀</font></font></h1>

<pre><code>$ npm config delete prefix <font></font>
$ npm config set prefix $NVM_DIR/versions/node/v6.11.1<font></font>
</code></pre>

<hr>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：使用错误消息中指示的版本号更改版本号。</font></font></em></p>

<blockquote>
  <p>nvm is not compatible with the npm config "prefix" option: currently
  set to "/usr/local" Run "npm config delete prefix" or "nvm use
  --delete-prefix v6.11.1 --silent" to unset it.</p>
</blockquote>

<hr>

<p>Credits to @gabfiocchi on Github - <a href="https://github.com/creationix/nvm/issues/855#issuecomment-314309706" rel="noreferrer">"You need to overwrite nvm prefix"</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，执行</font></font><code>npm config delete prefix</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并没有帮助我。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是这样做：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用brew安装nvm之后，创建</font></font><code>~/.nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录：</font></font><br>
<code>$ mkdir ~/.nvm</code>  </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并将以下行添加到</font></font><code>~/.bash_profile</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：  </font></font></p>

<pre><code>export NVM_DIR=~/.nvm<font></font>
. $(brew --prefix nvm)/nvm.sh<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（检查是否在</font></font><code>~/.bashrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>~/.profile</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或中</font><font style="vertical-align: inherit;">没有其他与nvm相关的命令</font></font><code>~/.bash_profile</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开一个新终端，这次它不应该打印任何警告消息。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
通过执行</font></font><code>nvm --version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令</font><font style="vertical-align: inherit;">检查nvm是否正常工作</font><font style="vertical-align: inherit;">。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
之后，使用安装/重新安装NodeJS </font></font><code>nvm install node &amp;&amp; nvm alias default node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。  </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多信息</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我安装</font></font><code>nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>homebrew</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，之后收到此通知：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，上游要求我们不支持通过Homebrew显式管理nvm，因此在报告之前，您应对照标准nvm安装方法检查任何问题。</font></font></p>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果不存在，则应创建NVM的工作目录：</font></font></p>

<pre><code> mkdir ~/.nvm
</code></pre>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将以下内容添加到</font></font><code>~/.bash_profile</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您所需的外壳程序配置文件中：</font></font></p>

<pre><code> export NVM_DIR=~/.nvm<font></font>
 . $(brew --prefix nvm)/nvm.sh<font></font>
</code></pre>
  
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以设置</font></font><code>$NVM_DIR</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为任何位置，但是将其保留不变
      </font></font><code>/usr/local/Cellar/nvm/0.31.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将在升级/重新安装时破坏所有安装了nvm的Node安装。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">忽略它使我出现以下错误消息：</font></font></p>

<blockquote>
  <p><code>nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">与</font></font><code>npm config</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“前缀”选项</font><font style="vertical-align: inherit;">不兼容</font><font style="vertical-align: inherit;">：当前设置为</font></font><code>"/usr/local/Cellar/nvm/0.31.0/versions/node/v5.7.1"</code><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
     “运行” </font></font><code>nvm use --delete-prefix v5.7.1 --silent</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以取消设置。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遵循了先前的指南（来自</font></font><code>homebrew/nvm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），然后发现我需要重新安装NodeJS。</font><font style="vertical-align: inherit;">所以我做了：  </font></font></p>

<pre><code>nvm install node &amp;&amp; nvm alias default node
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它是固定的。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
使用brew安装NVM会导致终端启动缓慢。</font><font style="vertical-align: inherit;">您可以</font></font><a href="https://github.com/creationix/nvm/issues/1277#issuecomment-447495610" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照以下说明</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行解决。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
