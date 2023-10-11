---
layout: question
title:  节点/ Express：EADDRINUSE，地址已在使用中-终止服务器
date:   2020-03-17T10:00:57.000Z
description: 我有一个使用connect在node.js中运行的简单服务器：var server = require('connect').createServer...
img: 
author: Near西门
category: question
answer: 28
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个使用connect在node.js中运行的简单服务器：</font></font></p>

<pre><code>var server = require('connect').createServer();<font></font>
//actions...<font></font>
server.listen(3000);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的代码中，我有实际的处理程序，但这就是基本思想。</font><font style="vertical-align: inherit;">我一直遇到的问题是</font></font></p>

<pre><code>EADDRINUSE, Address already in use
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在先前崩溃或错误后再次运行我的应用程序时，我收到此错误。</font><font style="vertical-align: inherit;">由于我没有打开终端的新实例，因此我使用结束了该过程</font></font><code>ctr + z</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我可以肯定，我要做的就是关闭服务器或连接。</font><font style="vertical-align: inherit;">我打过电话</font></font><code>server.close()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>process.on('exit', ...);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，没有运气。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1950篇《节点/ Express：EADDRINUSE，地址已在使用中-终止服务器》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">三千曜米亚</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于所有来此帖子并尝试过所有内容的人，可能都使用nodemon或永远使用它。</font><font style="vertical-align: inherit;">例如，如果您运行，则 
 </font></font><code>PORT=6060 Nodemon</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
可能会收到与正在使用端口6060相同的错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，如果您确实需要在运行期间定义端口，则可以在没有nodemon的情况下运行您的项目。</font><font style="vertical-align: inherit;">另外，如果您想坚持使用nodemon，则可以在文件本身中定义端口。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说我现在就这样做 </font></font><code>PORT=6060 node app.js</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Jim</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，这是因为我打开了Eclipse ... </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid小哥</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UI解决方案对于Windows用户：我发现最重要的答案对我而言不起作用，它们似乎是Mac或Linux用户的命令。</font><font style="vertical-align: inherit;">我找到了一个简单的解决方案，不需要记住任何命令：打开任务管理器（ctrl + shift + esc）。</font><font style="vertical-align: inherit;">查看正在运行的后台进程。</font><font style="vertical-align: inherit;">找到任何Node.js并结束任务。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成此操作后，该问题对我而言消失了。</font><font style="vertical-align: inherit;">如其他答案中所述，由于先前遇到错误并且未调用常规退出/清除功能，因此后台进程仍在运行。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门樱Eva</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我想知道，为什么没有人提到这种可能性： </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您提供</font></font><code>::listen(port)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的字符串（有意或无意）不是有效的端口号表示形式，则可以在内部将其转换为端口号</font></font><code>-1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后ant引擎将尝试连接至该</font></font><code>-1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">端口，然后产生相同的</font></font><code>EADDRINUSE</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误，反过来，这可能会造成一点混乱，并使您转向错误修复搜索的错误方向（</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嗨，我xD</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）。</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在开始检查使用port的进程之前</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请</font><em><font style="vertical-align: inherit;">调试代码并检查传递给函数的内容是什么</font></em><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村LEY</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着您有两个在同一端口上运行的节点服务器，如果其中一个在端口上运行，则假设3000将另一台服务器更改为另一个端口，例如3001，则一切正常</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端阳光</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此问题的原因是：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像Skype这样的端口可能正在运行任何应用程序。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点可能已崩溃，端口可能尚未释放。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能尝试启动多个服务器。</font><font style="vertical-align: inherit;">为了解决这个问题，可以维护一个布尔值来检查服务器是否已经启动。</font><font style="vertical-align: inherit;">仅当boolean返回false或undefined时，才应启动该方法。</font></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯乐</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Win10，git bash v2.15，节点v8.9.1，npm v5.5.1</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个package.json脚本来启动节点： </font></font><code>"start": "node index.js"</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每当我使用此功能时，无论是否用ctrl + c杀死它，我都会遇到此问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我只是</font></font><code>node index.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从git bash而不是</font></font><code>npm run start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ctrl + c杀掉，那我就永远不会遇到这个错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我不确定为什么，但是我认为这可能会对某人有所帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY老丝</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">server.close（）需要一段时间才能关闭连接，因此我们应该这样进行异步调用：</font></font></p>

<pre><code>await server.close();
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重要提示：使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">await时</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我们必须</font><font style="vertical-align: inherit;">在封装函数中</font><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">async</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关键字，如下所示：</font></font></p>

<pre><code>async () =&gt; {<font></font>
  await server.close();<font></font>
}<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEYL</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Linux上。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将功能添加到</font></font><code>~/.bashrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre class="lang-bash prettyprint-override"><code>function killTcpListen () {<font></font>
  kill -9 $(lsof -sTCP:LISTEN -i:$1 -t)<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">拉取更改： </font></font><code>source ~/.bashrc</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使用它： </font></font><code>killTcpListen 3000</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilNear</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点正在内存中的某个位置运行，并且该端口已锁定。</font><font style="vertical-align: inherit;">在Windows上，将像大多数Windows问题一样，通过单击</font></font><kbd>CTRL</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>ALT</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>DEL</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和/或重新启动</font><font style="vertical-align: inherit;">来解决此问题</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞小卤蛋达蒙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在适当考虑表格中的所有答案之后，我想补充一点。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我发现，当我使用Ctrl + Z终止由于错误而终止的节点应用程序时，下一次我尝试打开它时出现了相同的错误EADDRINUSE。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我使用Ctrl + C终止节点应用程序时，下一次我打开它时，它运行顺利。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将端口号更改为错误的端口号即可解决此问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三神乐</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用热节点来防止服务器崩溃/运行时错误。</font><font style="vertical-align: inherit;">只要节点程序[源] /进程[运行节点程序]发生变化，热节点就会自动为您重新启动nodejs应用程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用npm并使用全局选项安装热节点：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install -g hotnode</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇老丝</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任务管理器（ctrl + alt + del）-&gt; </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进程选项卡-&gt; </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">选择“ node.exe”进程，然后单击“结束进程” </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomPro</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能会遇到甚至杀死线程或进程实际上都不会终止应用程序的情况（在Linux和Windows上，我偶尔会发生这种情况）。</font><font style="vertical-align: inherit;">有时您可能已经在运行一个尚未关闭的实例。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于这种情况，我更愿意添加</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>"scripts": {<font></font>
    "stop-win": "Taskkill /IM node.exe /F",<font></font>
    "stop-linux": "killall node"<font></font>
},<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，我可以使用以下方式致电给他们：</font></font></p>

<pre><code>npm run stop-win<font></font>
npm run stop-Linux<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果需要的话，您可以做得更好，并用一个参数标志来执行那些BIN命令。</font><font style="vertical-align: inherit;">您也可以将它们添加为要在try-catch子句中执行的命令。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于</font><em><font style="vertical-align: inherit;">像我这样的</font></em><font style="vertical-align: inherit;"> Visual Studio Noobs</font></font><em><font style="vertical-align: inherit;"></font></em></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可能正在其他终端上运行该进程！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font><strong><font style="vertical-align: inherit;">Visual Studio中</font></strong></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">终端</font><font style="vertical-align: inherit;">后</font><font style="vertical-align: inherit;">，终端便</font><em><font style="vertical-align: inherit;">消失了</font></em><font style="vertical-align: inherit;">。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">以为以前的一个被销毁的方式</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建了一个新的。</font><font style="vertical-align: inherit;">实际上，每次我单击“ </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">新终端”时</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，实际上</font><strong><font style="vertical-align: inherit;">是在以前的</font></strong><em><font style="vertical-align: inherit;">终端上</font></em></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个新</font><em><font style="vertical-align: inherit;">终端</font></em><font style="vertical-align: inherit;">。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以我找到了第一个终端，然后……瞧，我在那儿运行服务器。</font></font></p>

<p><a href="https://i.stack.imgur.com/WOWn8.png" rel="noreferrer"><img src="https://i.stack.imgur.com/WOWn8.png" alt="实现它的多个终端"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin伽罗小胖</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先找出正在使用什么：</font></font></p>

<pre><code>sudo lsof -nP -i4TCP:3000 | grep LISTEN
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将获得类似以下内容的信息：</font></font></p>

<pre><code>php-fpm 110 root    6u  IPv4 0x110e2ba1cc64b26d      0t0  TCP 127.0.0.1:3000 (LISTEN)<font></font>
php-fpm 274 _www    0u  IPv4 0x110e2ba1cc64b26d      0t0  TCP 127.0.0.1:3000 (LISTEN)<font></font>
php-fpm 275 _www    0u  IPv4 0x110e2ba1cc64b26d      0t0  TCP 127.0.0.1:3000 (LISTEN)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以按照以下步骤终止该过程：</font></font></p>

<pre><code>sudo kill 110
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您将能够运行而不会出现侦听EADDRINUSE ::: 3000错误</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐逆天</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">仅供参考，您可以通过一个命令终止该进程   </font></font><code>sudo fuser -k 3000/tcp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">可以对所有其他通常用于开发的端口（例如8000、8080或9000）执行此操作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinStafan</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PowerShell用户：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Taskkill / IM node.exe / F</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无小宇宙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><pre><code>ps aux | grep node<font></font>
kill -9 [PID] (provided by above command)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">描述： </font></font></p>

<hr>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ps将提供进程状态，aux提供以下列表：所有用户进程，u：用户自己的进程，x：未连接到终端的所有其他进程。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">管道符号：| </font><font style="vertical-align: inherit;">将通过ps aux的结果进行进一步操作。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">grep将从ps aux提供的列表中搜索提供的字符串（在本例中为node）。</font></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐十三</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的Linux</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font></font><code>ps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并确定节点进程的PID。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后跑 </font></font><code>sudo kill PID</code></p>

<h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视窗</font></font></h2>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用任务列表显示正在运行的进程的列表：</font></font></p>

<pre><code>tasklist /O
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，像这样杀死节点进程（使用从</font></font><code>tasklist</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令</font><font style="vertical-align: inherit;">获得的PID </font><font style="vertical-align: inherit;">）：</font></font></p>

<pre><code>taskkill /pid PID
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门前端</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是一个衬板（用端口或配置变量替换3000）：</font></font></p>

<pre><code>kill $(lsof -t -i:3000)
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁蛋蛋</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Windows，请打开任务管理器并找到node.exe进程。</font><font style="vertical-align: inherit;">使用“结束任务”杀死所有人。</font></font></p>

<p><a href="https://i.stack.imgur.com/r29OI.png" rel="noreferrer"><img src="https://i.stack.imgur.com/r29OI.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门Davaid</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一次遇到此错误，并在此处采用了许多方法。 </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是</font></font><code>app.listen(3000);</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在同一个app.js脚本中</font><font style="vertical-align: inherit;">有两个</font><font style="vertical-align: inherit;">调用。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一个app.listen（）成功，第二个引发错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到的另一个有用的命令是对我有用的调试程序</font></font><code>sudo fuser -k 3000/tcp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它将杀死您可能已启动的任何恶意进程（某些进程可能会重新启动，例如，如果使用forever.js运行，但这对我很有用）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan小宇宙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下命令检查在端口3000上运行的进程的PID（即id）： </font></font></p>

<pre><code>lsof -i tcp:3000
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将输出如下内容：</font></font></p>

<pre><code>COMMAND  PID   USER   FD   TYPE  DEVICE  SIZE/OFF NODE NAME<font></font>
node     5805  xyz    12u  IPv6  63135    0t0     TCP  *:3000 (LISTEN)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在使用以下命令终止该进程：</font></font></p>

<pre><code>kill -9 5805
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇飞云</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我找到了此解决方案，请尝试使用“授予权限” </font></font><code>sudo</code></p>

<pre><code>  sudo pkill node
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Green</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以使用命令行路线：</font></font></p>

<pre><code>ps aux | grep node
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">获取进程ID。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后：</font></font></p>

<pre><code>kill -9 PID
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">杀死-9时会发送SIGKILL（而不是SIGTERM）。</font><font style="vertical-align: inherit;">有时对我来说，SIGTERM被节点忽略了。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Sam理查德</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在运行win8的笔记本电脑上点击了它。</font><font style="vertical-align: inherit;">这工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以“管理员”身份运行cmd.exe：</font></font></p>

<pre><code>C:\Windows\System32&gt;taskkill /F /IM node.exe<font></font>
SUCCESS: The process "node.exe" with PID 11008 has been terminated.<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin宝儿</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，您想知道正在使用哪个进程 </font></font><code>port 3000</code></p>

<pre><code>sudo lsof -i :3000
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将列出所有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PID</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此端口上侦听，一旦你有</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PID</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，你可以用下面的终止它：</font></font></p>

<pre><code>kill -9 {PID}
</code></pre></div>
        </div></div>
    {% endraw %}
  </div>
<div>
