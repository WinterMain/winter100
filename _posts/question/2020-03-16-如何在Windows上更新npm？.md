---
layout: question
title:  如何在Windows上更新npm？
date:   2020-03-16T03:31:11.000Z
description:                                                                          ...
img: 
author: 阿飞Tony
category: question
answer: 24
tags: Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><aside class="s-notice s-notice__info js-post-notice mb16" aria-hidden="false" role="status">
            <div class="grid fd-column fw-nowrap"> 
                <div class="grid fw-nowrap">
                        <div class="grid--cell mr8">
                            <svg aria-hidden="true" class="svg-icon iconLock" width="18" height="18" viewBox="0 0 18 18"><path d="M16 9a2 2 0 0 0-2-2V6A5 5 0 0 0 4 6v1a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V9zm-7 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.1-7H5.9V6a3.1 3.1 0 0 1 6.2 0v1z"></path></svg>
                        </div>
                    <div class="grid--cell fl1 lh-lg">
                        <div class="grid--cell fl1 lh-lg">
                            <b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个问题的答案是</font></font><a href="/help/privileges/edit-community-wiki"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">社区的努力</font></font></a></b><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">编辑现有答案以改善此职位。</font><font style="vertical-align: inherit;">它目前不接受新的答案或互动。
                            
                        </font></font></div>
                    </div>
                </div>
                            </div>
                    </aside>
<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试了</font></font><a href="http://davidwalsh.name/upgrade-nodejs" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这个</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>sudo npm cache clean -f<font></font>
sudo npm install -g n<font></font>
sudo n stable<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...但是没有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何在Windows上执行此操作？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1695篇《如何在Windows上更新npm？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱理查德</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开一个本地文件夹，而不是安装了nodejs的文件夹。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用命令在该文件夹中安装npm    </font></font><code>npm install npm</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导航到包含节点js的文件夹。</font><font style="vertical-align: inherit;">（C：\ Program Files \ nodejs \ node_modules）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除npm文件夹，并将其替换为本地文件夹中的npm和bin文件夹。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font></font><code>npm -v</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">现在您将获得npm的更新版本。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：我尝试直接在“ C：\ Program Files \ nodejs \ node_modules”中安装npm，但创建了错误。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomGO小小</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我发现我安装了两个Node.js副本。</font><font style="vertical-align: inherit;">一个在“ C：\ Program Files \ nodejs”下，另一个在“ C：\ Program Files（x86）\ nodejs”下。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云LEY</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于NodeJS</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://nodejs.org/en/download/releases/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载所需的节点版本msi </font><font style="vertical-align: inherit;">并安装</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Npm</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以管理员身份运行PowerShell</font></font></p>

<pre><code>Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force<font></font>
npm install -g npm-windows-upgrade<font></font>
npm-windows-upgrade<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长Gil</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Powershell不会直接执行npm，我建议使用 </font></font></p>

<pre><code>.\npm install -g npm-windows-upgrade<font></font>
.\npm-windows-upgrade<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它失败了： </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您想安装npm 6.1.0，但是安装的版本是3.10.10。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">常见原因是尝试“ npm install npm”或“ npm upgrade npm”。</font><font style="vertical-align: inherit;">到目前为止，唯一的解决方案是完全卸载然后重新安装Node.js。</font><font style="vertical-align: inherit;">有关小型教程，请参见</font></font><a href="http://aka.ms/fix-npm-upgrade" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://aka.ms/fix-npm-upgrade</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请考虑将您的问题报告给</font></font><a href="http://aka.ms/npm-issues" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://aka.ms/npm-issues</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><a href="http://aka.ms/fix-npm-upgrade" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://aka.ms/fix-npm-upgrade</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> &lt;-这是一个无效的链接</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小乐</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用以下命令：</font></font></p>

<pre><code>npm cache clean<font></font>
npm update -g [package....]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要从先前版本的节点升级，则将要更新所有现有的全局软件包。</font><font style="vertical-align: inherit;">您还可以指定要更新的软件包名称。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid村村</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能会帮助某人。</font><font style="vertical-align: inherit;">“ npm-windows-upgrade”和安装程序都不是为我自己完成的。</font><font style="vertical-align: inherit;">Powershell仍在使用旧版本的node和npm。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，这就是我所做的（为我工作）：1.从nodejs.org下载最新的安装程序。</font><font style="vertical-align: inherit;">安装节点。</font><font style="vertical-align: inherit;">它将更新您的节点；</font><font style="vertical-align: inherit;">无处不在（Powershell，cmd等）。</font><font style="vertical-align: inherit;">2.安装npm-windows-upgrade软件包（npm install -g npm-windows-upgrade）并运行npm-windows-upgrade。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我没有卸载任何东西，也没有设置任何路径。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿西门Tom</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">针对窗口10或窗口8遵循以下步骤</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按WIN + R并输入cmd并输入 </font></font></li>
<li><code>npm i -g npm@next</code></li>
<li><code>npm i -g npm@next</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  要么 </font></font><code>npm i -g node@{version}</code> </li>
<li><font style="vertical-align: inherit;"></font><code>C:\Program Files\nodejs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从环境变量PATH中</font><font style="vertical-align: inherit;">删除环境路径</font><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入</font></font><code>refreshenv</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cmd</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您将拥有已安装的新版本。 </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：如果不删除路径。</font><font style="vertical-align: inherit;">您将看到节点的先前版本。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗Jim小哥</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要安装更新，只需</font><font style="vertical-align: inherit;">从Nodejs.org网站</font></font><a href="https://nodejs.org/en/download/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载安装程序</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后再次运行即可。</font><font style="vertical-align: inherit;">Node.js和NPM的新版本将替换旧版本。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯小卤蛋</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遵循@ josh3737，并从node.js主页安装了最新的MSI。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是我还有另一个问题，就是我在命令行上仍然有旧节点和npm。</font><font style="vertical-align: inherit;">该问题是由新安装引起的，它已安装到</font></font></p>

<pre><code>C:\Program Files (x86)\nodejs\
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是之前的安装</font></font></p>

<pre><code>C:\Program Files\nodejs\
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新安装将新目录添加到旧目录之后的我的path变量中。</font><font style="vertical-align: inherit;">因此，旧的安装仍是该路径中的活动安装。</font><font style="vertical-align: inherit;">取出后</font></font><code>C:\Program Files\nodejs\</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">系统</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路径和</font></font><code>C:\Users\...\AppData\Roaming\npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路径并重新启动命令行新的安装是有活性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许最少的路径是与新安装无关的本地问题，但我有两个链接</font></font><code>AppData\Roaming\npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">也许也可以通过先卸载node.js然后安装新版本来解决。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom卡卡西</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也面临着类似的问题。</font><font style="vertical-align: inherit;">我遵循以下提到的步骤，它对我有用：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">去 </font></font><code>Windows &gt; Start &gt; Node.js</code></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">右键点击 </font></font><code>Node.js command prompt</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">点击 </font></font><code>Run as administrator</code></li>
</ul></li>
<li><p><code>ping registry.npmjs.org</code></p></li>
<li><p><code>npm view npm version</code></p></li>
<li><p><code>cd %ProgramFiles%\nodejs</code></p></li>
<li><p><code>npm install npm@latest</code></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和npm更新成功。</font><font style="vertical-align: inherit;">早些时候，我尝试使用CMD，这会引发错误。</font><font style="vertical-align: inherit;">可能是一些通过运行NodeJs命令提示符而解决的路径问题。</font><font style="vertical-align: inherit;">希望对你有用。</font><font style="vertical-align: inherit;">尝试这个。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天小卤蛋Green</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，我阅读（在Windows上尝试过）所有以前的内容，所有这些答案都有其自身的缺点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于更新Node.js的最佳方法（至少对我而言），请转至</font></font><strong><a href="https://nodejs.org/en/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://nodejs.org/en/，</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
然后下载最新版本并将其安装在与之前版本在1分钟内安装的同一文件夹中，完成。</font><font style="vertical-align: inherit;">您不需要删除任何旧文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后更新</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在cmd中键入：</font></font><code>npm install --save latest-version</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JimGil</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我来说很好</font></font></p>

<ol>
<li><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以</font><strong><font style="vertical-align: inherit;">管理员</font></strong><font style="vertical-align: inherit;">身份</font><font style="vertical-align: inherit;">运行    </font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令提示符</font></font></strong><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"></font></strong></p>
</blockquote></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">导航到包含nodejs的文件夹（例如C：\ Program Files \ nodejs）</font></font></li>
<li><blockquote>
  <p><font style="vertical-align: inherit;"><strong><em><font style="vertical-align: inherit;">不受限制地</font></em></strong><font style="vertical-align: inherit;">运行    </font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Powershell -ExecutionPolicy</font></font></em></strong></p>
</blockquote></li>
<li><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行    </font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm-windows-upgrade</font></font></em></strong></p>
</blockquote></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将显示可安装的版本列表。</font><font style="vertical-align: inherit;">只需通过向上/向下键选择所需的版本，然后按Enter。</font></font><br>
<br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这会更新您的</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm</font></font></em></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看当前版本的npm

</font></font><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行    </font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm --version</font></font></em></strong></p>
</blockquote></li>
</ol>

<p><a href="http://i.stack.imgur.com/qFBBF.png" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令提示符屏幕截图</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋梅蛋蛋</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是维护NODE版本的最佳工具。</font></font></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">适用于Windows</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
但适用于Windows的</font><strong><font style="vertical-align: inherit;">节点版本管理器（nvm）</font></strong><font style="vertical-align: inherit;">，带有安装程序。</font></font><a href="https://github.com/coreybutler/nvm-windows/releases" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">立即下载</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">！</font><font style="vertical-align: inherit;">它一直是节点版本管理器，而不是io.js管理器，因此没有对io.js的支持。</font><font style="vertical-align: inherit;">但是，支持节点4+。
</font></font><a href="https://i.stack.imgur.com/k88UI.jpg" rel="noreferrer"><img src="https://i.stack.imgur.com/k88UI.jpg" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙西里</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，完全卸载节点后。</font><font style="vertical-align: inherit;">10.29，然后安装节点4.2.2，在我的c：\ windows文件夹中还有一个10.29 node.exe文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过使用以下命令找到了它：</font></font></p>

<pre><code>where.exe node
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该命令返回：</font></font></p>

<pre><code>C:\Windows\node.exe<font></font>
C:\Program Files\nodejs\node.exe<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，即使我已经通过msi可执行文件成功安装了4.2.2版，命令“ node -v”仍将继续返回10.29。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过删除此文件解决了这个问题：</font></font></p>

<pre><code>C:\Windows\node.exe
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗老丝</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了它的价值，我不得不结合几个答案...</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载控制面板中的Node.js </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加/删除程序</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除目录（</font><font style="vertical-align: inherit;">如果存在）</font></font><code>C:\Program Files (x86)\nodejs\</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">两者都</font></font><code>C:\Program Files\nodejs\</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存在。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装最新版本</font></font><a href="http://nodejs.org/download/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://nodejs.org/download/</font></font></a></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomSam</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何更新Node.js：</font></font></h3>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载Node.js。</font><font style="vertical-align: inherit;">单击开始菜单，键入“更改或删除程序”，单击显示的项目，在列表中找到Node.js并将其卸载。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除目录（</font><font style="vertical-align: inherit;">如果存在）</font></font><code>C:\Program Files (x86)\nodejs\</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font><font style="vertical-align: inherit;">两者都</font></font><code>C:\Program Files\nodejs\</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">存在。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装最新的</font></font><a href="https://nodejs.org/en/download/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://nodejs.org/en/download</font></font></a></p></li>
</ol>

<p>&nbsp;&nbsp;&nbsp;&nbsp;<em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载/删除/安装似乎是不必要的，但通常是这样，这样可以节省您的时间。</font><font style="vertical-align: inherit;">这些说明来自Microsoft。</font></font></em></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何更新NPM：</font></font></h3>

<p>&nbsp;&nbsp;&nbsp;&nbsp;<strong><a href="https://www.npmjs.com/package/npm-windows-upgrade" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/npm-windows-upgrade</font></font></a></strong></p>

<p>&nbsp;&nbsp;&nbsp;&nbsp;<em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是在Windows上升级npm的官方文档。</font></font></em></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有组件均已通过测试并在Windows 10（2017）上运行。</font></font></strong></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村Itachi</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><em><a href="https://www.npmjs.com/package/npm-windows-upgrade" rel="nofollow noreferrer"><font style="vertical-align: inherit;">在Windows上</font></a></em><font style="vertical-align: inherit;">使用</font></font><em><a href="https://www.npmjs.com/package/npm-windows-upgrade" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Upgrade npm</font></font></a></em></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是供用户在Windows上升级npm的正式文档！</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的截图！</font></font></p>

<p><a href="https://i.stack.imgur.com/snpdn.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/snpdn.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村A</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.安装最新的npm版本</font></font></strong></p>

<pre><code>npm install –g npm@latest 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（您可以输入“ npm –version”进行检查）</font></font></p>

<p><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.安装节点</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一种。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  通过以下URL安装节点新版本：</font></font><a href="https://nodejs.org/en/download/current/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://nodejs.org/en/download/current/" rel="noreferrer"><font style="vertical-align: inherit;">//nodejs.org/en/download/current/</font></a><font style="vertical-align: inherit;"> 
遵循默认选项
 </font></font><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">b。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  删除C：\ Users \\ AppData \ Roaming \ NPM
 </font></font><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">c。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  删除C：\ Users \\ AppData \ Roaming \ npm-cache</font></font></p>

<p><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可选地：</font></font></strong></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">d。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  （删除当前项目文件夹中的node_modules文件夹）
 </font></font><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">e。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">     npm缓存验证
 </font></font><br>
<strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">f。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">     npm安装</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY卡卡西梅</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">先前的答案将适用于安装新版本的Node.js（可能是最佳选择），但是如果您依赖于特定的Node.js版本，则以下内容将起作用：“ npm install npm -g”。</font><font style="vertical-align: inherit;">在命令之前和之后运行npm -v进行验证。</font></font></p>

<p><a href="https://i.stack.imgur.com/PcfrZ.png" rel="noreferrer"><img src="https://i.stack.imgur.com/PcfrZ.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝前端</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对于我在Windows 7 x64上更新npm的工作正常：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Windows启动  </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有程序</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js命令提示符（替代点击） </font></font></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以管理员身份运行</font></font></p>

<p><code>$ npm -g install npm</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font><code>C:\Program Files\nodejs\npm.cmd</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新的npm将位于</font></font><code>C:\Users\username\appdata\roaming\npm\npm.cmd</code></p></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里小哥</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><a href="http://chocolatey.org/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chocolatey</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它是Windows的软件包管理器（例如Debian Linux的apt-get）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新安装（您可能需要卸载以前安装的版本）</font></font></p>

<pre><code>&gt; choco install nodejs
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新到最新版本</font></font></p>

<pre><code>&gt; choco update nodejs
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于npm</font></font></p>

<pre><code>&gt; choco update npm
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是</font><a href="https://github.com/felixrieseberg/npm-windows-upgrade" rel="noreferrer"><font style="vertical-align: inherit;">在Windows</font></a><font style="vertical-align: inherit;">上</font></font><a href="https://github.com/felixrieseberg/npm-windows-upgrade" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">升级</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm的</font></font></strong><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最佳新方法</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以管理员身份运行PowerShell</font></font></p>

<pre><code>Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force<font></font>
npm install -g npm-windows-upgrade<font></font>
npm-windows-upgrade<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：请勿运行</font></font><code>npm i -g npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">而是使用</font></font><code>npm-windows-upgrade</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来更新npm。</font><font style="vertical-align: inherit;">另外，如果您运行NodeJS安装程序，它将替换节点版本。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在节点安装它的位置就地升级npm。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">易于更新，通过运行可以更新到最新版本</font></font><code>npm-windows-upgrade -p -v latest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不修改默认路径。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不更改默认的全局程序包位置。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">轻松升级和降级。</font></font></li>
<li><a href="https://github.com/npm/npm/wiki/Troubleshooting#upgrading-on-windows" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由NPM小组正式推荐</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NPM和NODE之间匹配的版本列表（</font></font><a href="https://nodejs.org/en/download/releases/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://nodejs.org/en/download/releases/）-</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是您将需要下载NODE INSTALLER并运行它以更新节点（</font></font><a href="https://nodejs.org/en/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://nodejs.org/en /</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYEvaL</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要更新NPM，这对我有用：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的shell中导航到您的节点安装目录，例如 </font></font><code>C:\Program Files (x86)\nodejs</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font></font><code>npm install npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（无</font></font><code>-g</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项）</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖神奇</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><a href="https://nodejs.org/en/download" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并运行最新的MSI。</font><font style="vertical-align: inherit;">MSI将更新您已安装的节点和npm。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
