---
layout: question
title:  ExpressJS-抛出器未处理的错误事件
date:   2020-03-24T02:56:21.000Z
description: 我使用以下命令创建了expressjs应用程序：express -e folderNamenpm install ejs --savenpm in...
img: 
author: 神乐Jim阿飞
category: question
answer: 25
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用以下命令创建了expressjs应用程序：</font></font></p>

<pre><code>express -e folderName<font></font>
npm install ejs --save<font></font>
npm install<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下命令运行应用程序时</font></font><code>node app.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，出现以下错误：</font></font></p>

<pre><code>events.js:72<font></font>
    throw er; // Unhandled 'error' event<font></font>
          ^<font></font>
Error: listen EADDRINUSE<font></font>
    at errnoException (net.js:884:11)<font></font>
    at Server._listen2 (net.js:1022:14)<font></font>
    at listen (net.js:1044:10)<font></font>
    at Server.listen (net.js:1110:5)<font></font>
    at Object.&lt;anonymous&gt; (folderName/app.js:33:24)<font></font>
    at Module._compile (module.js:456:26)<font></font>
    at Object.Module._extensions..js (module.js:474:10)<font></font>
    at Module.load (module.js:356:32)<font></font>
    at Function.Module._load (module.js:312:12)<font></font>
    at Function.Module.runMain (module.js:497:10)<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如何解决？</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><h2><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请尝试以下修复程序。</font></font></h2>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试关闭正在使用您的端口的进程。</font></font></p>

<blockquote>
  <p><strong><code>netstat -tulnp | grep &lt;port_number&gt;</code></strong></p>
</blockquote></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装以下pakcage可以永久修复它。 </font></font></p>

<blockquote>
  <p><strong><code>npm install ws@3.3.2 --save-dev --save-exact</code></strong></p>
</blockquote></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在终端中运行以下命令：</font></font></p>

<blockquote>
  <p><strong><code>echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf &amp;&amp; sudo sysctl -p</code></strong></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Arch Linux，将此行添加到/etc/sysctl.d/99-sysctl.conf中：</font></font></strong></p>

<p><code>fs.inotify.max_user_watches=524288</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后执行：</font></font></p>

<p><code>sysctl --system</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也将在重新启动后持续存在。</font></font></p>

<p><a href="https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details</font></font></a></p></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">TomTony</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需更改端口，可能是iis或其他服务器正在使用当前端口。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我今天遇到了同样的问题，并且没有使用该端口。</font><font style="vertical-align: inherit;">以下方法有所帮助：</font></font></p>

<pre><code>rm -rf node_modules &amp;&amp; npm cache clean &amp;&amp; npm install<font></font>
npm start<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小A卡卡西</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您正在监听的端口已经被另一个进程监听。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">遇到此错误时，我使用Windows PowerShell终止了该进程（因为我使用Windows）</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">列表项打开Windows Powershell</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">键入</font></font><code>ps</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后您可以获得进程列表</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到名为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的进程</font><font style="vertical-align: inherit;">，并记下</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ID</font></font></strong></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类型，</font></font><code>Stop-process &lt;Id&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我认为这对Windows用户有帮助</font></font></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">HarryGO理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-&gt;检查8080端口上正在运行的端口或您要检查的端口</font></font></p>

<pre><code>lsof -i @localhost:8080
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有东西在运行，您可以将其关闭或使用一些kill命令将其关闭</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小MandyGil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很简单，只需在Visual Studio Code中检查您的终端，因为我正在运行我的节点应用程序，并且我使笔记本电脑处于休眠状态，然后第二天早上，我将笔记本电脑重新打开以进行软件开发。</font><font style="vertical-align: inherit;">然后，我再次运行nodemon app.js命令。第二次运行于夜间，第二次运行了最新的命令，因此两个命令提示符正在侦听相同的端口，这就是为什么您会遇到此问题。</font><font style="vertical-align: inherit;">简单关闭一个终端或所有终端，然后运行您的节点app.js或nodemon app.js</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有答案对我有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新启动计算机后，我可以启动服务器并运行它。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">苹果电脑</font></font><br>
    <code>shutdown now -r</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的Linux</font></font><br>
    <code>sudo shutdown now -r</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ItachiDavaid</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用Windows，则可以从任务管理器中结束node.js的进程</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，我发现之前用CTRL + C取消的nodejs进程仍在运行。</font><font style="vertical-align: inherit;">Windows 10中的问题是</font></font><a href="https://github.com/nodejs/node/issues/16103" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Ctrl + C不能正常杀死</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> nodejs。</font><font style="vertical-align: inherit;">我打开任务管理器并手动终止了该过程。</font><font style="vertical-align: inherit;">GitHub上提供的解决方案不适用于我。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥Tony</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，问题是由于忘记调用</font></font><code>next()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">expressjs的“ use”方法调用而引起的。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果当前中间件没有结束请求-响应周期，则必须调用next（）将控制权传递给下一个中间件，否则请求将被挂起。</font></font></p>
</blockquote>

<p><a href="http://expressjs.com/guide/using-middleware.html" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://expressjs.com/guide/using-middleware.html</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您也可以从Gruntfile.js更改端口，然后再次运行。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猿GO</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用。</font></font></p>

<p><a href="http://www.codingdefined.com/2015/09/how-to-solve-nodejs-error-listen.html" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.codingdefined.com/2015/09/how-to-solve-nodejs-error-listen.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需从Project属性更改端口号。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">停止使用该端口的服务。</font></font></p>

<pre><code>sudo service NAMEOFSERVICE stop
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误原因</font></font></strong></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您指定的端口上已经在运行其他进程</font></font></p>
</blockquote>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">简单快速的解决方案</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Linux OS上，例如，您已将3000指定为端口 </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开终端并运行</font></font><code>lsof -i :3000</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果端口3000上已在运行任何进程，则您将在控制台上看到此打印</font></font></li>
</ul>

<p></p><div class="snippet" data-lang="js" data-hide="false" data-console="true" data-babel="false">
<div class="snippet-code">
<pre class="snippet-code-js lang-js prettyprint-override"><code>COMMAND   PID  USER   FD   TYPE DEVICE SIZE/OFF NODE NAME<font></font>
node    16615 aegon   13u  IPv6 183768      0t0  TCP *:3000 (LISTEN)</code></pre>
</div>
</div>
<p></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从输出中复制PID（进程ID） </font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font></font><code>sudo kill -9 16615</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（您必须在-9之后放置PID）</font></font></p></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次启动服务器 </font></font></li>
</ul></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易伽罗</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我也必须跑步</font></font><code>vagrant reload</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">即使没有节点进程在我的虚拟机中运行我的快速应用程序，我仍然会收到此错误，直到重新加载无所事事的盒子。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了解决此问题，请终止或关闭您正在运行的服务器。</font><font style="vertical-align: inherit;">如果您使用的是Eclipse IDE，请遵循此步骤，</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行&gt;调试</font></font></strong></p>

<p><img src="https://i.stack.imgur.com/K2GVO.jpg" alt="在此处输入图片说明"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">右键单击正在运行的进程，然后单击</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">终止</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">events.js：183 throw er; </font><font style="vertical-align: inherit;">//未处理的“错误”事件</font></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我也遇到了同样的问题，并尝试了多种方法，但最终得到了这个，效果很好：</font></font></p>

<pre><code>npm install ws@3.3.2 --save-dev --save-exact
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅此链接以获取更多说明</font></font><a href="https://github.com/ionic-team/ionic-cli/issues/2922" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/ionic-team/ionic-cli/issues/2922</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关闭任何其他正在运行的节点服务器，即使它们在其他终端窗口中或在不同端口上运行也是如此。</font><font style="vertical-align: inherit;">那应该解决问题。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着您的文件正在运行。</font><font style="vertical-align: inherit;">只需输入以下代码，然后重试：</font></font></p>

<pre><code>sudo pkill node
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">前端凯神乐</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node正在尝试使用的端口可能已被另一个程序使用。</font><font style="vertical-align: inherit;">就我而言，它是</font><font style="vertical-align: inherit;">我最近安装的</font></font><a href="http://www.ntop.org/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ntop</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我必须</font><font style="vertical-align: inherit;">在浏览器中</font><font style="vertical-align: inherit;">打开</font></font><a href="http://localhost:3000/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http：// localhost：3000 /</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">才能实现它。</font><font style="vertical-align: inherit;">寻找过程中的另一种方式给出</font></font><a href="http://www.cyberciti.biz/faq/what-process-has-open-linux-port/" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要使用相同的端口号</font></font><code>kill %</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请输入终端，这将终止当前的后台进程并释放端口以供进一步使用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐十三</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是因为用于运行脚本的端口已在使用中。</font><font style="vertical-align: inherit;">您必须停止所有其他正在使用该帖子的节点。</font><font style="vertical-align: inherit;">为此，您可以通过以下方式检查所有节点</font></font></p>

<pre><code>ps -e
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或仅用于节点进程，</font></font><code>ps -ef | grep node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这将为您提供ID为的所有节点进程的列表</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">杀死所有节点进程</font></font></p>

<pre><code>sudo killall -9 node
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或针对特定ID </font></font><code>sudo kill -9 id</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Davaid</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是Linux，则如果Nodejs没有以root身份运行，也会出现此问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从此更改：</font></font></p>

<pre><code>nodejs /path/to/script.js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对此：</font></font></p>

<pre><code>sudo nodejs /path/to/script.js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是发生在我身上，这里没有其他建议可以解决它。</font><font style="vertical-align: inherit;">幸运的是，我记得那天以root身份运行时脚本正在工作。</font><font style="vertical-align: inherit;">希望这对某人有帮助！</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">免责声明：</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能不是针对生产环境的最佳解决方案。</font><font style="vertical-align: inherit;">以root用户身份启动服务可能会给服务器/应用程序带来一些安全漏洞。</font><font style="vertical-align: inherit;">就我而言，这是针对本地服务的解决方案，但我鼓励其他人花更多时间尝试找出原因。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝飞云</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您曾经使用与8080相同的端口运行另一台服务器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许您</font></font><code>node app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在其他shell中</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">过，请关闭它，然后再次运行。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以检查端口号。</font><font style="vertical-align: inherit;">可用或不使用</font></font></strong></p>

<pre><code>netstat -tulnp | grep &lt;port no&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">实例可能仍在运行。</font><font style="vertical-align: inherit;">这将解决它。</font></font></p>

<pre><code>killall node
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：此命令仅在Linux / Ubuntu和Mac上有效。</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
