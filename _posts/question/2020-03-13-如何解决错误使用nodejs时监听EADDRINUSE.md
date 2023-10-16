---
layout: question
title:  如何解决错误：使用nodejs时监听EADDRINUSE？
date:   2020-03-13T08:56:09.000Z
description: 如果我使用端口80运行服务器，并且尝试使用xmlHTTPrequest，则会出现此错误：Error  listen EADDRINUSE如果我要在端口...
img: 
author: GilTomL
category: question
answer: 24
tags: JavaScript
topic: JavaScript
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我使用端口80运行服务器，并且尝试使用</font></font><a href="https://github.com/driverdan/node-XMLHttpRequest"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">xmlHTTPrequest，则会出现</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此错误：</font></font><code>Error: listen EADDRINUSE</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我要在端口80上运行服务器时发出请求，为什么nodejs会出现问题？</font><font style="vertical-align: inherit;">对于网络浏览器来说，这不是问题：在服务器运行时，我可以在Internet上冲浪。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">服务器是：</font></font></p>

<pre><code>  net.createServer(function (socket) {<font></font>
    socket.name = socket.remoteAddress + ":" + socket.remotePort;<font></font>
    console.log('connection request from: ' + socket.remoteAddress);<font></font>
    socket.destroy();<font></font>
  }).listen(options.port);<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并要求：</font></font></p>

<pre><code>var xhr = new XMLHttpRequest();<font></font>
<font></font>
xhr.onreadystatechange = function() {<font></font>
    sys.puts("State: " + this.readyState);<font></font>
<font></font>
    if (this.readyState == 4) {<font></font>
        sys.puts("Complete.\nBody length: " + this.responseText.length);<font></font>
        sys.puts("Body:\n" + this.responseText);<font></font>
    }<font></font>
};<font></font>
<font></font>
xhr.open("GET", "http://mywebsite.com");<font></font>
xhr.send();<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1445篇《如何解决错误：使用nodejs时监听EADDRINUSE？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯小胖</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>For <strong>windows users</strong> execute the following command in PowerShell window to kill all the node processes.</p>

<pre><code>Stop-Process -processname node
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝GO</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>Two servers can not listen on same port, so check out if other server listening on same port, also check out for browser sync if its running on same port</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim米亚西里</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>In my case Apache HTTP Server was run on port 80 I solved it by issue the command as root</p>

<p><code>sudo killall httpd</code></p>

<p><strong>Update</strong> </p>

<p>If Jenkin is installed and running on your Mac;</p>

<ol>
<li>You can check it with <code>sudo lsof -i tcp:8080</code></li>
<li>If Yes, and You want to stop Jenkins only once, run: <code>sudo launchctl unload /Library/LaunchDaemons/org.jenkins-ci.plist</code></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Davaid</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>Seems there is another Node ng serve process running. Check it by typing this in your console (Linux/Mac):</p>

<pre><code>ps aux|grep node
</code></pre>

<p>and quit it with:</p>

<pre><code>kill -9 &lt;NodeProcessId&gt;
</code></pre>

<p>OR alternativley use </p>

<pre><code>ng serve --port &lt;AnotherFreePortNumber&gt;
</code></pre>

<p>to serve your project on a free port of you choice.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯JinJin</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>On Debian i found out to run on port 80 you need to issue the command as root i.e </p>

<pre><code>sudo node app.js
</code></pre>

<p>I hope it helps </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY小卤蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>I have the same problem too,and I simply close the terminal and open a new terminal and run </p>

<pre><code>node server.js
</code></pre>

<p>again. that works for me, some time just need to wait for a few second till it work again.</p>

<p>But this works only on a developer machine instead of a server console..</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端LEYLEY</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><strong>Error: listen EADDRINUSE</strong> means the port which you want to assign/bind to your application server is already in use. You can either assign another port to your application.</p>

<p>Or if you want to assign the same port to the app. Then kill the application that is running at your desired port.</p>

<p>For a node application what you can try is, find the process id for the node app by :</p>

<pre><code>ps -aux | grep node
</code></pre>

<p>After getting the process id, do</p>

<pre><code>kill process_id
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅番长</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>I have seen this error before (in node) with http.client, and as I recall, the problem had to do with not initializing the httpClient or setting bad options in the httpClient creation and/or in the url request.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯小卤蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>There is a way to terminate the process using Task Manager:</p>

<blockquote>
  <p>Note that this solution is for Windows only</p>
</blockquote>

<ol>
<li><p>Go to the Task Manager (or using the shortcut <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd>)</p></li>
<li><p>On "Background Processes", find "Node.js" processes and terminate them (Right-click them and choose "End Task")</p></li>
</ol>

<p><a href="https://i.stack.imgur.com/aIYey.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/aIYey.png" alt="在此处输入图片说明"></a></p>

<ol start="3">
<li>Now you should be able to start again</li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿西门Tom</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">EADDRINUSE表示您的nodejs应用程序的端口已在使用中。</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您已经杀死了在该端口上运行的进程/应用程序。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过以下方式查找应用的进程ID： </font></font></li>
</ul>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">lsof -i tcp：3000</font></font></p>
</blockquote>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在您将从中获取进程ID。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行这个：</font></font></li>
</ul>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">杀死-9 processId</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西理查德</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在下面的命令中替换您的portNumber</font></font></p>

<pre><code>sudo lsof -t -i tcp:portNumber | xargs kill -9
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里小哥</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您要在其上运行应用程序的端口上运行任何进程时，就会出现此错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何获取在该端口上运行的进程=&gt;命令：sudo netstat -ap | </font><font style="vertical-align: inherit;">grep：3000    </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出：您将获得使用该端口的过程信息</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">tcp 0 0 IP地址：3000       </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">                      LISTEN 26869 / node</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在您可以杀死该进程sudo kill -9 26869</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Mandy小哥</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><pre><code>lsof -i:3000;<font></font>
kill -9 $(lsof -t -i:3000);<font></font>
// 3000 is a your port<font></font>
// This "lsof -i:3000;" command will show PID <font></font>
kill PID <font></font>
ex: kill 129393<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryItachi</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试这两个命令，它将停止所有节点进程。</font></font></p>

<pre><code>killall 9 node<font></font>
pkill node<font></font>
npm start <font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A小宇宙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">须藤杀死$（须藤lsof -t -i：80）</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了杀人 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">sudo kill -9 $（sudo lsof -t -i：80）</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以上cmd杀死特定端口，然后运行服务器</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><code>EADDRINUSE</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示该端口（我们试图在节点应用程序中监听）已被使用。</font><font style="vertical-align: inherit;">为了克服这个问题，我们需要确定哪个进程正在该端口上运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如果我们尝试在3000端口监听我们的节点应用程序。</font><font style="vertical-align: inherit;">我们需要检查该端口是否已被任何其他进程使用。</font></font></p>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤1：</font></font></h1>

<pre><code>$sudo netstat -plunt |grep :3000
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的命令给出了以下结果。</font></font></p>

<pre><code>tcp6       0      0 :::3000                 :::*                    LISTEN      25315/node
</code></pre>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第2步：</font></font></h1>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在您获得了进程ID（25315），请杀死该进程。 </font></font></p>

<pre><code>kill -9 25315
</code></pre>

<h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第三步：</font></font></h1>

<pre><code>npm run start
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：此解决方案适用于linux用户。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green留姬</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有效（我使用的是Mac）。</font><font style="vertical-align: inherit;">运行此命令</font></font></p>

<p><code>lsof -PiTCP -sTCP:LISTEN</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将显示您的系统正在使用的端口列表。</font><font style="vertical-align: inherit;">找到</font></font><code>PID</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的节点正在运行</font></font></p>

<pre><code>COMMAND     PID          USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME<font></font>
node      17269 hientrq   16u  IPv6 0xc42959c6fa30c3b9      0t0  TCP *:51524 (LISTEN)<font></font>
node      17269 hientrq   19u  IPv4 0xc42959c71ae86fc1      0t0  TCP localhost:1337 (LISTEN)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并运行 </font></font><code>kill -9 [YOUR_PID]</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小仲羽</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的应用程序已在该端口8080上运行。</font><font style="vertical-align: inherit;">使用此代码杀死端口并再次运行您的代码</font></font></p>

<pre><code>sudo lsof -t -i tcp:8080 | xargs kill -9
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO飞云</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在控制器环境下，您可以使用：</font></font></p>

<p><code>pkill node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 在运行脚本之前，应该先完成这项工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请记住，此命令将终止所有</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进程，如果您有一个仅运行一个实例的容器，那么这可能是正确的，因为您拥有可以保证这一点的环境。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在任何其他情况下，建议您使用命令通过编程查找某个进程ID或名称来杀死它。</font><font style="vertical-align: inherit;">就像您的进程被称为node-server-1一样，您可以这样做</font></font><code>pkill node-server-1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">理解以下资源可能会很有用：</font><a href="https://www.thegeekstuff.com/2009/12/4-ways-to-kill-a-process-kill-killall-pkill-xkill/" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://www.thegeekstuff.com/2009/12/4-ways-to-kill-a-process-kill-killall-pkill-xkill/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.thegeekstuff.com/2009/12/4-ways-to-kill-a-process-kill-killall-pkill-xkill/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅蛋蛋</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误原因：</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您正在尝试使用忙</font></font><code>port number</code></em></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Windows / Mac的两种可能的解决方案</font></font></strong></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前使用的免费端口号</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为您的当前程序选择另一个端口号</font></font></li>
</ol>

<p></p><hr><p></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1.空闲端口号</font></font></h3>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视窗</font></font></strong></p>

<pre><code>1. netstat -ano | findstr :4200<font></font>
2. taskkill /PID 5824 /F<font></font>
</code></pre>

<p><a href="https://i.stack.imgur.com/Sgx6K.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/Sgx6K.png" alt="在此处输入图片说明"></a></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">苹果电脑</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以尝试netstat</font></font></p>

<pre><code>netstat -vanp tcp | grep 3000
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于OSX El Capitan和更高版本（或者如果您的netstat不支持-p），请使用lsof</font></font></p>

<pre><code>sudo lsof -i tcp:3000
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果这不能解决您的问题，则</font></font><code>Mac</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用户可以参考有关此问题的完整讨论，</font></font><a href="https://stackoverflow.com/questions/3855127/find-and-kill-process-locking-port-3000-on-mac"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Mac上查找（并终止）进程以锁定端口3000</font></font></a></p>

<p></p><hr><p></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2.更改端口号？</font></font></h3>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">视窗</font></font></strong></p>

<pre><code>set PORT=5000
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">苹果电脑</font></font></strong></p>

<pre><code>export PORT=5000
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙神无</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您应该尝试终止正在侦听端口80的进程。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Killall将杀死所有正在运行的节点应用程序。</font><font style="vertical-align: inherit;">您可能不想这样做。</font><font style="vertical-align: inherit;">使用此命令，您只能杀死正在已知端口上监听的一个应用程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用unix，请尝试以下命令： </font></font></p>

<pre><code>sudo fuser -k 80/tcp    
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green理查德</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>killall -9 node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Patrick所建议</font><font style="vertical-align: inherit;">的上述方法</font><font style="vertical-align: inherit;">按预期工作，并且可以解决问题，但是您可能希望阅读此答案的编辑部分，以了解为什么</font></font><code>kill -9</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是最佳方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最重要的是，您可能希望针对</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">单个</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进程，而不是盲目地杀死</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">活动进程。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，首先获取在该端口上运行的进程的进程ID（PID）（例如8888）：</font></font></p>

<p><code>lsof -i tcp:8888
</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将返回类似：</font></font></p>

<pre><code>COMMAND   PID    USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME<font></font>
node     57385   You   11u  IPv6 0xac745b2749fd2be3      0t0  TCP *:ddi-tcp-1 (LISTEN)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后就做（ps-实际上</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不行</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。请继续阅读下面的内容）：</font></font></p>

<p><code>kill -9 57385</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><a href="http://taombo.com/taombo-blog/os-x-how-to-find-and-kill-a-process-in-a-particular-port" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读更多有关此的内容</font><font style="vertical-align: inherit;">。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我今天在阅读一个相当相关的主题，偶然发现了一个有趣的话题，</font></font><a href="https://unix.stackexchange.com/questions/8916/when-should-i-not-kill-9-a-process"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么我不应该</font></font><code>kill -9</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进行处理</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通常，您应该</font><font style="vertical-align: inherit;">在</font><strong><font style="vertical-align: inherit;">kill -9</font></strong><font style="vertical-align: inherit;">之前</font><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">kill -15</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">以使目标进程有机会在其自身之后进行清理。</font><font style="vertical-align: inherit;">（进程不能捕获或忽略SIGKILL，但是它们可以并且经常捕获SIGTERM。）如果您没有给该进程完成其工作和清理的机会，它可能会留下损坏的文件（或其他状态）重新启动后将无法理解。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如上所述，您最好使用以下方法终止上述过程：</font></font></p>

<p><code>kill -15 57385</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑2</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：正如</font></font><a href="https://stackoverflow.com/questions/9898372/how-to-fix-error-listen-eaddrinuse-while-using-nodejs/30163868#comment56010567_16107404"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处的注释中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多次</font><a href="https://stackoverflow.com/questions/9898372/how-to-fix-error-listen-eaddrinuse-while-using-nodejs/30163868#comment56010567_16107404"><font style="vertical-align: inherit;">提到的，</font></a><font style="vertical-align: inherit;">此错误是由于没有正常退出进程而导致的。</font><font style="vertical-align: inherit;">这意味着许多人使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CTRL + Z</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">退出节点命令（或其他任何命令）</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">停止正在运行的进程的正确方法是发出</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CTRL + C</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令，该命令执行干净退出。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以正确的方式退出进程将在关闭时释放该端口。</font><font style="vertical-align: inherit;">这样一来，您就可以重新启动该过程，而不必担心自己被杀死后才能再次运行它。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋LEY</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">抬起头来，Skype有时会在端口80上侦听，因此，如果您尝试从Node.js或任何其他应用程序侦听端口80，则会导致此错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过访问选项并单击高级-&gt;连接-&gt;使用端口80（取消选中此选项）来在Skype中关闭该行为。</font></font></p>

<p><img src="https://i.stack.imgur.com/OXiXH.png" alt="关闭Skype端口80的使用"></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS进行更改后，请不要忘记重新启动Skype！ </font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我真正的帮助是：</font></font></p>

<pre><code>killall -9 node
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但这会杀死系统进程。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用 </font></font></p>

<pre><code>ps ax
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以检查它是否有效。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
