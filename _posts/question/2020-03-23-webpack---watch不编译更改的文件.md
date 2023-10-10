---
layout: question
title:  webpack --watch不编译更改的文件
date:   2020-03-23T03:51:58.000Z
description: 我尝试运行，webpack --watch并且在编辑我的JS文件后，它不会触发自动重新编译。我尝试webpack使用重新安装，npm uninstal...
img: 
author: 番长
category: question
answer: 27
tags: JavaScript Webpack
topic: Webpack
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试运行，</font></font><code>webpack --watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且在编辑我的JS文件后，它不会触发自动重新编译。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试</font></font><code>webpack</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">重新安装</font><font style="vertical-align: inherit;">，</font></font><code>npm uninstall</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但仍然无法正常工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有任何想法吗？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TonyItachi</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是：webpack从一些奇怪的URL加载脚本：webpack：///缓存了。</font><font style="vertical-align: inherit;">您应该在脚本末尾添加版本以防止缓存： 
</font></font><code>main-compiled.js?v=&lt;?php echo time()?&gt;"</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云猪猪</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试更改</font></font><code>--watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>-d --watch</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我工作</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德Eva</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我遇到类似的问题时，我遇到了这个问题-似乎webpack没有重新打包，即使运行webpack --config。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我什至删除了bundle.js，网页仍然像编辑前一样显示。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些遇到同样问题的人，我终于在chrome中进行了“空缓存和硬重载”选项（在打开devtools的情况下右键单击重载按钮），就可以做到这一点</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的项目突然发生这种情况，则可以解决此问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许以某种方式跟踪您的项目的文件更改了webpack所查找的文件，但已损坏。</font><font style="vertical-align: inherit;">您可以按照以下简单步骤再次创建它们。</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从您的项目目录中出来。</font><font style="vertical-align: inherit;">（$：cd ..）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将您的项目移动到其他目录（$：mv {projectName} {newName}）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进入新目录（$：cd {newName}）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">启动服务器并检查是否在每次文件更改时都重新加载（在大多数情况下它应该可以工作，因为现在webpack会创建新文件来监视更改）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从目录出来（$：cd ..）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其移回其原始名称（$：mv {newName} {projectNam}）这对我​​有用.........</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三猴子村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，尝试了很多事情，最后</font><strong><font style="vertical-align: inherit;">Mac</font></strong><font style="vertical-align: inherit;">上的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chrome清除浏览数据</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对</font><font style="vertical-align: inherit;">我有用。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这些模块已安装：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ browser-sync”：“ ^ 2.26.7”，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ browser-sync-webpack-plugin”：“ ^ 2.2.2”，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ webpack”：“ ^ 4.41.2”，</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ webpack-cli”：“ ^ 3.3.9”</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯梅阳光</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在尝试了一些解决该问题的策略后，我最终只是放弃了，但是在解决另一个问题时，我又尝试了一下，突然间，</font></font><code>--watch</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旗帜终于奏效了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">老实说，我不知道是什么让它特别起作用，但是在执行了以下步骤之后，它才开始起作用：</font></font></p>

<pre><code>1. Install most recent gcc version<font></font>
$ sudo port install gcc48<font></font>
$ sudo port select --set gcc mp-gcc48<font></font>
<font></font>
2. Install most recent clang version<font></font>
$ sudo port install clang-3.6<font></font>
$ sudo port select --set clang mp-clang-3.6<font></font>
<font></font>
3. Export variables holding the patch to C and C++ compiler<font></font>
$ export CC=/opt/local/bin/clang<font></font>
$ export CXX=/opt/local/bin/clang++<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能已经发生了，在安装这些软件包时，某些依赖性只是增加了难题的缺失部分，谁知道...</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这可以帮助任何苦苦挣扎的人使它正常工作。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我要添加另一个答案，因为我认为这是迄今为止最好的解决方案。</font><font style="vertical-align: inherit;">我每天都在使用它，它震撼了！</font><font style="vertical-align: inherit;">只需安装此库：</font></font></p>

<p><a href="https://github.com/gajus/write-file-webpack-plugin" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/gajus/write-file-webpack-plugin</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">说明：强制webpack-dev-server程序将捆绑文件写入文件系统。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何安装 ：</font></font></p>

<pre><code>npm install write-file-webpack-plugin --save-dev
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在MacOS上，一个简单的解决方案如下：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在项目所在的同一目录中打开两个终端窗口。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在第一个终端窗口中运行：webpack --watch</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在第二个终端窗口中运行：webpack-dev-server</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我尝试了许多可能的解决方案，这似乎是最可靠的</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿前端</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了类似的问题，无论是Webpack还是手表模式下的汇总都无法捕捉到我所做的更改。</font><font style="vertical-align: inherit;">我发现这基本上是我的错，因为我正在更改尚未导入应用程序中任何位置的模块（.tsx文件）（例如，作为入口点的App.ts），并且我期望构建工具来报告错误，在那里。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在使用Vagrant（2.1.15）和rsync同步的VirtualBox（5.2.18）Ubuntu（18.04）VM中也存在此问题。</font><font style="vertical-align: inherit;">突然，第一个构建运行良好，但Webpack甚至在</font></font><code>fs.inotify.max_user_watches=524288</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置好</font><font style="vertical-align: inherit;">之后都没有考虑到更改</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">添加</font></font><code>poll: true</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack配置也没有帮助。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只能</font></font><strong><code>vagrant-notify-forwarder</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">工作（出于某种原因，vagrant-fsnotify无效），但是在将文件保存到主机后，重建发生得太快了，我想rsync没有足够的时间来完成其任务（可能是由于数量我的Vagrantfile中同步目录的内容？）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，通过增加</font></font><strong><code>aggregateTimeout</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Webpack配置，</font><font style="vertical-align: inherit;">使手表再次工作</font><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>module.exports = {<font></font>
  watch: true,<font></font>
  watchOptions: {<font></font>
    aggregateTimeout: 10000<font></font>
  },<font></font>
  ...<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果此解决方案适合您，请尝试再次降低此值，否则您将需要等待10秒钟，直到每次您点击保存都会重新开始构建。</font><font style="vertical-align: inherit;">默认值为</font></font><a href="https://webpack.js.org/configuration/watch/#watchoptions-aggregatetimeout" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">300毫秒</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有同样的问题。</font><font style="vertical-align: inherit;">而且我注意到它没有编译，因为我的文件夹包含一些字符（*）。</font><font style="vertical-align: inherit;">使用旧的watcher插件似乎可以解决此问题。</font><font style="vertical-align: inherit;">将此行添加到您的webpack配置文件中。</font></font></p>

<pre><code>plugins: [<font></font>
    new webpack.OldWatchingPlugin()<font></font>
  ]<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，在VS Code中创建文件夹和文件是个问题。</font><font style="vertical-align: inherit;">为了解决这个问题，我重新克隆了仓库，这次，通过命令行而不是通过代码创建了新的文件夹和文件。</font><font style="vertical-align: inherit;">我认为代码由于某种原因破坏了文件。</font><font style="vertical-align: inherit;">我看到该应用程序刚刚更新，因此可能是一个新错误。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，删除</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并再次执行npm install或yarn来安装所有软件包可以解决问题</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决问题的方法是在导入路径中发现一个大写错误。</font><font style="vertical-align: inherit;">文件系统上的文件夹首字母为小写，导入路径为大写。</font><font style="vertical-align: inherit;">一切都编译良好，所以这只是一个webpack监视包含问题。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green逆天</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Vim，则应尝试将backupcopy设置为yes，而不是默认的auto。</font><font style="vertical-align: inherit;">否则，Vim有时会重命名原始文件并创建一个新文件，这将使webpack watch混乱：</font></font></p>

<p><a href="https://github.com/webpack/webpack/issues/781" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/webpack/webpack/issues/781</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果是这种情况，只需将其添加到您的vim设置中即可：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置backupcopy = yes</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它不是为我重新编译的，但后来我意识到/记得webpack监视依赖关系图，而不仅仅是监视一个文件夹（或文件）。</font><font style="vertical-align: inherit;">当然，我要更改的文件还不属于该图表。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端L</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：删除整个目录并从仓库中重新克隆git解决了我的问题。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，如果您在虚拟机（Vagrant / Virtualbox）中运行webpack并在主机平台上更改文件，则共享文件夹中的文件更新可能不会在Ubuntu上触发inotify。</font><font style="vertical-align: inherit;">这将导致更改不会被webpack接收。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅：</font></font><a href="https://www.virtualbox.org/ticket/10660" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Virtualbox门票＃10660</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，在de guest（在vi中）上编辑和保存文件确实触发了webpack。</font><font style="vertical-align: inherit;">在主机上（在PhpStorm，记事本或任何其他应用程序中）进行编辑，无论如何都不会触发webpack。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过使用</font></font><a href="https://github.com/adrienkohlbecker/vagrant-fsnotify" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">vagrant-fsnotify</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决了它</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在.vue文件上遇到相同的问题。</font><font style="vertical-align: inherit;">重新启动服务器后，一切正常，但在下一次保存时，不再重新编译。</font><font style="vertical-align: inherit;">问题出在一个大写字母的导入文件路径上。</font><font style="vertical-align: inherit;">很难弄清楚这个问题，因为服务器重启后一切正常。</font><font style="vertical-align: inherit;">检查路径的大小写。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹区分大小写是我的问题。</font><font style="vertical-align: inherit;">我对require（）的代码调用具有所有小写的路径名，但是实际目录中有一个大写字母。</font><font style="vertical-align: inherit;">我将所有目录重命名为小写，并且可以立即观看Webpack。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Laravel Homestead为我工作</font></font></p>

<pre><code>--watch --watch-poll
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果按César的指示更改fs.inotify.max_user_watches仍然不起作用，请尝试通过按</font></font><a href="https://webpack.github.io/docs/node.js-api.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文档</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所示创建脚本</font><font style="vertical-align: inherit;">或使用带</font></font><code>--watch --watch-poll</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项的</font><font style="vertical-align: inherit;">webpack运行</font><font style="vertical-align: inherit;">轮询而不是本机监视程序</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的代码没有被重新编译，请尝试增加观察者的数量（在Ubuntu中）：</font></font></p>

<pre><code>echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf &amp;&amp; sudo sysctl -p
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源：</font><a href="https://webpack.github.io/docs/troubleshooting.html"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://webpack.github.io/docs/troubleshooting.html"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//webpack.github.io/docs/troubleshooting.html</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用WebStorm时遇到了这个问题。  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置-&gt;系统设置-&gt;“安全写入”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已为我解决。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在以下位置找到了这样做的建议：</font></font><a href="https://github.com/webpack/docs/wiki/troubleshooting#file-saves-in-webstorm-dont-trigger-the-watcher" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">WebPack故障排除</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是为了增加可能的解决方案：我将项目文件夹放在Dropbox文件夹中，将其移出为我解决了问题。</font><font style="vertical-align: inherit;">（OS X）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个问题是，如果您的路径名不是绝对的，则将发生这种情况。</font><font style="vertical-align: inherit;">我不小心设置</font></font><code>resolve.root</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>./</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是，</font></font><code>__dirname</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这导致我浪费大量时间删除和重新创建像我上面的家伙一样的文件。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将以下代码添加到我的webpack配置文件中可以解决此问题，希望对您有所帮助。</font><font style="vertical-align: inherit;">不要忘记忽略您的node_modules文件夹，因为那样会降低HMR（热模块更换）的性能：</font></font></p>

<pre><code>watchOptions: {<font></font>
  poll: true,<font></font>
  ignored: /node_modules/<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
