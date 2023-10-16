---
layout: question
title:  Node.js快速文件服务器（通过HTTP的静态文件）
date:   2020-03-16T03:28:16.000Z
description: 是否有Node.js即用型工具（安装了npm），可以帮助我通过HTTP将文件夹内容作为文件服务器公开。例如，如果我有D \Folder\file....
img: 
author: 神无蛋蛋
category: question
answer: 13
tags: Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否有Node.js即用型工具（安装了</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），可以帮助我通过HTTP将文件夹内容作为文件服务器公开。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如，如果我有</font></font></p>

<pre><code>D:\Folder\file.zip<font></font>
D:\Folder\file2.html<font></font>
D:\Folder\folder\file-in-folder.jpg<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后开始，</font></font><code>D:\Folder\</code> <code>node node-file-server.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
我可以通过访问文件</font></font></p>

<pre><code>http://hostname/file.zip<font></font>
http://hostname/file2.html<font></font>
http://hostname/folder/file-in-folder.jpg<font></font>
</code></pre>

<p><a href="https://stackoverflow.com/questions/11024052/why-is-my-node-static-file-server-dropping-requests"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么我的节点静态文件服务器删除请求？</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
引用一些神秘的东西</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">标准的node.js静态文件服务器</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果没有这样的工具，我应该使用什么框架？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">相关：
 </font></font><a href="https://stackoverflow.com/questions/7268033/basic-static-file-server-in-nodejs"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NodeJS中的基本静态文件服务器</font></font></a></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1693篇《Node.js快速文件服务器（通过HTTP的静态文件）》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里阿飞</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p>I use Houston at work and for personal projects, it works well for me. </p>

<p><a href="https://github.com/alejandro/Houston" rel="nofollow">https://github.com/alejandro/Houston</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝猿阿飞</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p>If you are intrested in ultra-light http server without any prerequisites
you should have a look at: <a href="https://code.google.com/archive/p/mongoose/" rel="nofollow">mongoose</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">三三呀</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p>For dev work you can use (express 4)
<a href="https://github.com/appsmatics/simple-httpserver.git" rel="nofollow">https://github.com/appsmatics/simple-httpserver.git</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙A</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p>From npm@5.2.0, <code>npm</code> started installing a new binary alongside the usual npm called <code>npx</code>. So now, one liners to create static http server from current directory:</p>

<pre><code>npx serve
</code></pre>

<p>or</p>

<pre><code>npx http-server
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云逆天</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先通过</font></font><code>npm install node-static -g</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">  -g </font><font style="vertical-align: inherit;">安装节点静态服务器</font><font style="vertical-align: inherit;">是在系统上全局安装它，然后导航到文件所在的目录，并使用</font></font><code>static</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">   它在端口8080上侦听</font><font style="vertical-align: inherit;">启动服务器，</font><font style="vertical-align: inherit;">并通过naviaget浏览器并键入localhost：8080 / yourhtmlfilename 。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无JinJin</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它尚未安装在NPM上，但是我在Express上构建了一个简单的静态服务器，该服务器还允许您接受表单提交并通过事务性电子邮件服务通过电子邮件发送它们（目前为Sendgrid，Mandrill即将推出）。</font></font></p>

<p><a href="https://github.com/jdr0dn3y/nodejs-StatServe" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/jdr0dn3y/nodejs-StatServe</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯樱</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是另一个简单的Web服务器。  </font></font></p>

<p><a href="https://www.npmjs.com/package/hostr" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/hostr</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装</font></font></p>

<pre><code>npm install -g hostr
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更换工作总监</font></font></p>

<pre><code>cd myprojectfolder/
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后开始</font></font></p>

<pre><code>hostr
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony西门古一</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><a href="http://pad.js.org" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是我的一个文件/轻量级的node.js静态文件Web服务器宠物项目，它没有依赖性，我相信这是一个快速而丰富的工具，其使用就像在Linux / Unix / macOS终端上发出此命令一样简单（</font><font style="vertical-align: inherit;">如果安装了node.js（或</font><font style="vertical-align: inherit;">在Debian / Ubuntu上），则为</font><font style="vertical-align: inherit;">Android </font><font style="vertical-align: inherit;">或</font></font><a href="https://termux.com" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">termux</font></font></a><font style="vertical-align: inherit;"></font><code>nodejs-legacy</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>curl pad.js.org | node 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（文档中针对Windows用户存在不同的命令）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它支持我认为可能有用的不同事物，</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分层目录索引的创建/服务

</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有不同标准的分类能力</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Chrome，Firefox和其他浏览器上通过[多文件]拖放和仅文件/文本复制粘贴以及系统剪贴板屏幕截图粘贴从浏览器上载可能会有一些限制（可以通过命令行关闭它提供的选项）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹/创建笔记/上传按钮</font></font></li>
</ul></li>
<li>Serving correct MIMEs for well known file types (with possibility for disabling that)</li>
<li>Possibility of installation as a npm package and local tool or, one-linear installation as a permanent service with Docker</li>
<li>HTTP 206 file serving (multipart file transfer) for faster transfers</li>
<li>Uploads from terminal and browser console (in fact it was originally intended to be a file-system proxy for JS console of browsers on other pages/domains)</li>
<li>CORS download/uploads (which also can be turned off)</li>
<li>Easy HTTPS integration</li>
<li>Lightweight command line options for achieving better secure serving with it:

<ul>
<li>With my patch on <a href="https://github.com/nodejs/node/pull/13012" rel="noreferrer">node.js 8</a>, you can have access to the options without first installation: <code>curl pad.js.org | node - -h</code></li>
<li>Or first install it as a system-global npm package by <code>[sudo] npm install -g pad.js</code> and then use its installed version to have access to its options: <code>pad -h</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或使用提供的Docker映像，默认情况下使用相对安全的选项。 </font></font><code>[sudo] docker run --restart=always -v /files:/files --name pad.js -d -p 9090:9090 quay.io/ebraminio/pad.js</code></li>
</ul></li>
</ul>

<p><img src="https://i.stack.imgur.com/9lRdk.png" alt="使用该工具的文件夹索引的屏幕快照"></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面描述的功能大部分记录在工具</font></font><a href="http://pad.js.org" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://pad.js.org的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">主页上</font><font style="vertical-align: inherit;">，通过我使用的一些不错的技巧，它也是提供工具源本身的地方！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该工具的源代码在</font></font><a href="https://github.com/ebraminio/pad.js" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">GitHub上</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，欢迎您提供反馈，功能请求和⭐！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门泡芙Jim</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用</font></font><a href="http://expressjs.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Express框架</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则</font><font style="vertical-align: inherit;">可以使用</font><font style="vertical-align: inherit;">此功能。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要设置一个简单的文件服务应用，只需执行以下操作：</font></font></p>

<pre><code>mkdir yourapp<font></font>
cd yourapp<font></font>
npm install express<font></font>
node_modules/express/bin/express<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin泡芙</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还有另一个非常不错的静态Web服务器：浏览器同步。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以使用节点包管理器下载它：</font></font></p>

<pre><code>npm install -g browser-sync
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装后，在cmd提示符下导航到项目文件夹，然后运行以下命令：</font></font></p>

<pre><code>browser-sync start --server --port 3001 --files="./*"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将开始处理浏览器当前文件夹中的所有文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以从</font><a href="https://www.browsersync.io/" rel="noreferrer"><font style="vertical-align: inherit;">BrowserSync中</font></a><font style="vertical-align: inherit;">找到更多信息</font></font><a href="https://www.browsersync.io/" rel="noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪GO</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><h1><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">One-line™证明而非承诺</font></font></h1>

<p><a href="https://i.stack.imgur.com/CrTt4.png" rel="noreferrer"><img src="https://i.stack.imgur.com/CrTt4.png" alt="在此处输入图片说明"></a></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第一个是</font></font><code>http-server</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><em><code>hs</code></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">- </font></font><a href="https://www.npmjs.com/package/http-server" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font></font></a></h3>

<pre><code>npm i -g http-server   // install<font></font>
hs C:\repos            // run with one line?? FTW!!<font></font>
</code></pre>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第二个是</font></font><code>serve</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过ZEIT.co- </font></font><a href="https://www.npmjs.com/package/serve" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接</font></font></a></h3>

<pre><code>npm i -g serve         // install<font></font>
serve C:\repos         // run with one line?? FTW!!<font></font>
</code></pre>

<hr>

<p>Following are available options, if this is what helps you decide.</p>

<pre>C:\Users\Qwerty&gt;http-server --help<font></font>
usage: http-server [path] [options]<font></font>
<font></font>
options:<font></font>
  -p           Port to use [8080]<font></font>
  -a           Address to use [0.0.0.0]<font></font>
  -d           Show directory listings [true]<font></font>
  -i           Display autoIndex [true]<font></font>
  -g --gzip    Serve gzip files when possible [false]<font></font>
  -e --ext     Default file extension if none supplied [none]<font></font>
  -s --silent  Suppress log messages from output<font></font>
  --cors[=headers]   Enable CORS via the "Access-Control-Allow-Origin" header<font></font>
                     Optionally provide CORS headers list separated by commas<font></font>
  -o [path]    Open browser window after starting the server<font></font>
  -c           Cache time (max-age) in seconds [3600], e.g. -c10 for 10 seconds.<font></font>
               To disable caching, use -c-1.<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  -U --utc在日志消息中使用UTC时间格式。</font></font><font></font>
<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  -P --proxy后备代理（如果无法解决请求）。</font><font style="vertical-align: inherit;">例如：http：//someurl.com</font></font><font></font>
<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  -S --ssl启用https。</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  -C --cert ssl证书文件的路径（默认值：cert.pem）。</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  -K --key ssl密钥文件的路径（默认值：key.pem）。</font></font><font></font>
<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  -r --robots响应/robots.txt [用户代理：* \ n禁止：/]</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  -h --help打印此列表并退出。</font></font><font></font>
</pre>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">C：\ Users \ Qwerty&gt;服务-帮助</font></font><font></font>
<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  用法：serve.js [选项] [命令]</font></font><font></font>
<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  命令：</font></font><font></font>
<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    帮助显示帮助</font></font><font></font>
<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
  选项：</font></font><font></font>
<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    -a，--auth服务于基本身份验证</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    -c，--cache在浏览器中缓存文件的时间（以毫秒为单位）</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    -n，--clipless不将地址复制到剪贴板（默认情况下禁用）</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    -C，-cors设置* CORS标头，以允许来自任何来源的请求（默认情况下禁用）</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    -h，--help输出用法信息</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    -i，--ignore要忽略的文件和目录</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    -o，--open在浏览器中打开本地地址（默认禁用）</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    -p，--port监听的端口（默认为5000）</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    -S，--silent不要将任何内容记录到控制台</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    -s，--single服务单页应用程序（将-c设置为1天）</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    -t，--treeless不显示静态树（默认情况下禁用）</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    -u，--unzipped禁用GZIP压缩</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
    -v，--version输出版本号</font></font><font></font>
</pre>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您需要注意更改，请参见</font></font><a href="https://www.npmjs.com/package/hostr" rel="noreferrer"><code>hostr</code></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，相信</font></font><a href="https://stackoverflow.com/questions/16333790/node-js-quick-file-server-static-files-over-http/30312255#30312255"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">曾亨利的回答</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim猪猪</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我知道它不是Node，但是我使用了Python的SimpleHTTPServer：</font></font></p>

<pre><code>python -m SimpleHTTPServer [port]
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它运行良好，并带有Python。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva神无</span>
            <span class="discuss-time">2020.03.16</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个很好的“即用型工具”选项可以是http-server：</font></font></p>

<pre><code>npm install http-server -g
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使用它：</font></font></p>

<pre><code>cd D:\Folder<font></font>
http-server<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者像这样：</font></font></p>

<pre><code>http-server D:\Folder
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">签出：</font><a href="https://github.com/nodeapps/http-server" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/nodeapps/http-server" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/nodeapps/http-server</font></font></a></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
