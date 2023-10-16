---
layout: question
title:  Node.js在Windows上找不到已安装的模块
date:   2020-03-23T01:26:45.000Z
description: 我目前正在Windows上学习nodejs。通过npm.cmd在全局安装了几个模块，nodejs无法找到已安装的模块。以玉为例npm install ...
img: 
author: Jim老丝梅
category: question
answer: 17
tags: Windows Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我目前正在Windows上学习nodejs。</font><font style="vertical-align: inherit;">通过npm.cmd在全局安装了几个模块，nodejs无法找到已安装的模块。</font><font style="vertical-align: inherit;">以玉为例</font></font></p>

<pre><code>npm install jade -g
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Jade安装在目录中</font></font><code>"C:\Program Files (x86)\nodejs\node_modules"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但以下代码将失败并显示</font></font><code>"Cannot find module 'jade'"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误，</font></font></p>

<pre><code>var jade = require('jade');
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，在本地安装jade时，代码将成功运行（npm中没有-g选项）。</font><font style="vertical-align: inherit;">我不想使用本地安装的模块，这对我来说是浪费磁盘空间。</font><font style="vertical-align: inherit;">如何使全局安装的模块在Windows上运行？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2586篇《Node.js在Windows上找不到已安装的模块》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L前端</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以上所有答案均不适用于我。</font><font style="vertical-align: inherit;">只是，最终工作的事情是添加％APPDATA％\ NPM环境Path变量，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除这两个文件纳克在C：\ Program Files文件\的NodeJS。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ng软件包未安装在C：\ Program Files \ nodejs \ node_modules中，因此很明显，无法使用nodejs目录中的ng二进制文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不确定为什么要在此目录中搜索，因为我已经在C：\ Users \ MyUser中配置了-PATH环境变量-.npmrc-试图添加系统变量和/或NODE_PATH</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Windows，则需要执行以下步骤：1）创建一个名为package.json的文件</font></font></p>

<pre><code> {<font></font>
  "name": "hello"<font></font>
, "version": "0.0.1"<font></font>
, "dependencies": {<font></font>
    "express": "*"<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中hello是软件包的名称，*表示依赖项的最新版本</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）代码到您的项目目录并运行以下命令</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm安装</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它安装依赖项 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗小卤蛋米亚</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需下载并重新安装从节点</font></font><a href="https://nodejs.org/en/download/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，这将解决所有路径问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要忘记重新启动命令提示符或终端。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Windows 10，我必须在以下文件夹中本地安装gulp：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">C：\ Users \ myaccount \ AppData \ Roaming \ npm \ node_modules</font></font></p>

<pre><code>npm install gulp
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这解决了我的“无法识别吞咽”的问题</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我偶然发现了这个问题，因为我想在装有Windows 10的新计算机上使用带有Visual Studio 2015的node.js。我在Windows 7、8和8.1上使用了node.js，从来没有问题的node.js找到模块。</font><font style="vertical-align: inherit;">我使用旧版node.js 0.10.39，因为由于串行和RFXCOM模块，我必须使用此版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Windows 10的答案是使用C：\ Users \ User \ node_modules在环境变量中设置NODE_PATH。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOJinJin</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有同样的问题，试图用安装凉亭 </font></font><code>npm install -g bower</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为这是因为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点是由另一个用户</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而非我</font><strong><font style="vertical-align: inherit;">安装的</font></strong><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我卸载了节点，然后重新安装了它。</font><font style="vertical-align: inherit;">在安装过程中，我看到了</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加到PATH&gt; npm modules</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选项的文本</font><font style="vertical-align: inherit;">：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点安装中的消息</font></font></p>

<p><a href="https://i.stack.imgur.com/QOSbC.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/QOSbC.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装节点后，我</font></font><code>npm install -g bower</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次</font><font style="vertical-align: inherit;">执行</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">现在凉亭起作用了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然不必像我一样用自己的用户重新安装节点。</font><font style="vertical-align: inherit;">正如其他用户所解释的，</font><font style="vertical-align: inherit;">解决方案必须通过</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NODE_PATH</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PATH</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">变量进行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这仅是为了说明仅当节点已由其他用户安装（或者在安装过程</font><font style="vertical-align: inherit;">中未标记</font><font style="vertical-align: inherit;">选项</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加到PATH&gt; npm modules</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">时，才会出现此问题</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子前端</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您可以添加到</font></font><code>~/.npmrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">right </font></font><a href="https://www.npmjs.org/doc/files/npmrc.html" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">prefix</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我有</font></font><code>C:\Program Files\nodejs</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">64位Win7。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我花了很多时间使全局模块起作用。</font><font style="vertical-align: inherit;">最终，我</font></font><code>C:\Users\yourusername\AppData\Roaming\npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在系统变量下</font><font style="vertical-align: inherit;">显式添加</font><font style="vertical-align: inherit;">了PATH变量。</font><font style="vertical-align: inherit;">我还需要让此变量位于列表中的nodejs路径变量之前。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在运行Windows 10。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说在Windows 10上工作 </font></font><code>npm config set prefix %AppData%\npm\node_modules</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A伽罗</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Windows 7上运行时遇到此问题</font></font></p>

<pre><code>npm install -g gulp
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以管理员身份同时以普通用户身份登录。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当以与普通用户相同的方式执行安装时（不是cmd的“以管理员身份运行”），一切都很好。</font><font style="vertical-align: inherit;">我想这与默认的安装和搜索路径有关。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从我对win8.1的经验来看，npm会在上安装模块，</font></font><code>C:\Users\[UserName]\AppData\Roaming\npm\node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
  但</font><font style="vertical-align: inherit;">会在上 
 </font><font style="vertical-align: inherit;">逐行搜索它们
 </font></font><code>C:\Users\[UserName]\node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完整路径中的一个简单的解决方案参考模块：</font></font></p>

<pre><code>var jsonminify = require("C:/Users/Saulius/AppData/Roaming/npm/node_modules/jsonminify");
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里米亚</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Windows，每个人都说您应该为nodejs和npm模块设置环境变量，但是您知道为什么吗？</font><font style="vertical-align: inherit;">对于某些模块，它们具有命令行工具，安装模块后，</font><font style="vertical-align: inherit;">在</font><strong><font style="vertical-align: inherit;">C：\ Program Files \ nodejs中有</font></strong></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">[module] .cmd</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，该</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于在window命令中启动。</font><font style="vertical-align: inherit;">因此，如果不将包含cmd文件的路径添加到环境变量</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">％PATH％</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则不会通过命令窗口成功启动它们。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Windows7平台，则应像这样更改NODE_PATH：
</font></font><code>%AppData%\npm\node_modules</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿逆天</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道我可以唤醒僵尸，但是我认为这仍然是一个问题，如果您需要对Windows 7上的节点模块进行全局访问，则需要将其添加到全局变量路径中： </font></font></p>

<pre><code>C:\Users\{USER}\AppData\Roaming\npm
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要提示：只有这个没有内容</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我花了半个小时才看到这个。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了使其在Windows 10上正常工作，我通过将文件夹添加</font></font><code>%USERPROFILE%\AppData\Roaming\npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到PATH来</font><font style="vertical-align: inherit;">解决了该问题</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">已经</font></font><code>\node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">附加这样的：</font></font><code>%USERPROFILE%\AppData\Roaming\npm\node_modules\</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有为我工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了简短起见，请</font></font><code>npm link jade</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的应用目录中使用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加一个名为的环境变量</font></font><code>NODE_PATH</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并将其设置为</font></font><code>%USERPROFILE%\Application Data\npm\node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（Windows XP），</font></font><code>%AppData%\npm\node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（Windows 7/8/10）或npm最终在您的Windows风味上安装模块的位置。</font><font style="vertical-align: inherit;">要一劳永逸地完成此操作，请在“系统属性”对话框（运行</font></font><code>control.exe sysdm.cpl,System,3</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">的“高级”选项卡中将其添加为系统变量</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Windows 7+中的快速解决方案是仅运行：</font></font></p>

<pre><code>rem for future<font></font>
setx NODE_PATH %AppData%\npm\node_modules<font></font>
rem for current session<font></font>
set NODE_PATH=%AppData%\npm\node_modules<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值得一提的</font></font><code>NODE_PATH</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是，仅在Node应用程序中导入模块时使用。</font><font style="vertical-align: inherit;">如果要在CLI中使用全局安装的模块的二进制文件，则需要将其也添加到您的中</font></font><code>PATH</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但不</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">任何</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">部分（例如，</font></font><code>%AppData%\npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Windows 7/8/10中）。</font></font></p>

<hr>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旧故事</font></font></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我本人对node.js相当陌生，因此我可能并不完全正确，但是根据我的经验，它是这样工作的：</font></font></p>

<ol>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-g</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并不是安装全局库的方法，它只是将它们放置在系统路径上的一种方法，因此您可以从命令行调用它们，而无需编写它们的完整路径。</font><font style="vertical-align: inherit;">它是有用的，例如，然后点应用的转换本地文件，如</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">少</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -如果你安装它在全球范围，你可以在任何目录中使用它。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node.js本身并未查看npm全局目录，而是使用另一种算法来查找所需文件：</font></font><a href="http://nodejs.org/api/modules.html#modules_file_modules" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="http://nodejs.org/api/modules.html#modules_file_modules" rel="noreferrer"><font style="vertical-align: inherit;">//nodejs.org/api/modules.html#modules_file_modules</font></a><font style="vertical-align: inherit;">（基本上是从路径开始扫描每个文件夹从当前的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node_modules</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹中进行检查）。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关更多详细信息，请参见类似的问题：</font></font><a href="https://stackoverflow.com/questions/5817874/node-js-npm-is-not-installing-module-in-the-default-path"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何使用npm全局安装模块？</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
