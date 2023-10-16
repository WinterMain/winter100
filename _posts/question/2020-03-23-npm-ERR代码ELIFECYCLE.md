---
layout: question
title:  npm ERR！代码ELIFECYCLE
date:   2020-03-23T07:26:28.000Z
description: 我正在尝试学习反应，因此我拥有完整反应式投票应用程序的此示例代码，并且我试图使其正常运行，但是在运行npm install后再进行npm start之后，...
img: 
author: 古一Green
category: question
answer: 30
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试学习反应，因此我拥有完整反应式投票应用程序的此示例代码，并且我试图使其正常运行，但是在运行npm install后再进行npm start之后，我收到以下错误消息：</font></font></p>

<pre><code>npm ERR! Darwin 16.4.0<font></font>
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "run" "server"<font></font>
npm ERR! node v7.5.0<font></font>
npm ERR! npm  v4.3.0<font></font>
npm ERR! file sh<font></font>
npm ERR! code ELIFECYCLE<font></font>
npm ERR! errno ENOENT<font></font>
npm ERR! syscall spawn<font></font>
npm ERR! voting_app@1.1.0 server: `live-server --public --    <font></font>
host=localhost --port=3000 --middleware=./disable-browser-cache.js`<font></font>
npm ERR! spawn ENOENT<font></font>
npm ERR!<font></font>
npm ERR! Failed at the voting_app@1.1.0 server script 'live-server --<font></font>
public --host=localhost --port=3000 --middleware=./disable-browser- <font></font>
cache.js'.<font></font>
npm ERR! Make sure you have the latest version of node.js and npm  <font></font>
installed.<font></font>
npm ERR! If you do, this is most likely a problem with the voting_app  <font></font>
package,<font></font>
npm ERR! not with npm itself.<font></font>
npm ERR! Tell the author that this fails on your system:<font></font>
npm ERR!     live-server --public --host=localhost --port=3000 --  <font></font>
middleware=./disable-browser-cache.js<font></font>
npm ERR! You can get information on how to open an issue for this  <font></font>
project with:<font></font>
npm ERR!     npm bugs voting_app<font></font>
npm ERR! Or if that isn't available, you can get their info via:<font></font>
npm ERR!     npm owner ls voting_app<font></font>
npm ERR! There is likely additional logging output above.<font></font>
<font></font>
npm ERR! Please include the following file with any support request:<font></font>
npm ERR!     /Users/ItsMeMrLi/.npm/_logs/2017-02-17T22_48_03_581Z-<font></font>
debug.log<font></font>
<font></font>
npm ERR! Darwin 16.4.0<font></font>
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "start"<font></font>
npm ERR! node v7.5.0<font></font>
npm ERR! npm  v4.3.0<font></font>
npm ERR! code ELIFECYCLE<font></font>
npm ERR! errno 1<font></font>
npm ERR! voting_app@1.1.0 start: `npm run server`<font></font>
npm ERR! Exit status 1<font></font>
npm ERR!<font></font>
npm ERR! Failed at the voting_app@1.1.0 start script 'npm run server'.<font></font>
npm ERR! Make sure you have the latest version of node.js and npm <font></font>
installed.<font></font>
npm ERR! If you do, this is most likely a problem with the voting_app    <font></font>
package,<font></font>
npm ERR! not with npm itself.<font></font>
npm ERR! Tell the author that this fails on your system:<font></font>
npm ERR!     npm run server<font></font>
<font></font>
npm ERR! You can get information on how to open an issue for this   <font></font>
project with:<font></font>
npm ERR!     npm bugs voting_app<font></font>
npm ERR! Or if that isn't available, you can get their info via:<font></font>
npm ERR!     npm owner ls voting_app<font></font>
npm ERR! There is likely additional logging output above.<font></font>
<font></font>
npm ERR! Please include the following file with any support request:<font></font>
npm ERR!     /Users/ItsMeMrLi/.npm/_logs/2017-02-17T22_48_03_655Z-<font></font>
debug.log<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的package.json：</font></font></p>

<pre><code>{<font></font>
  "name": "voting_app",<font></font>
  "version": "1.1.0",<font></font>
  "author": "Fullstack.io",<font></font>
  "scripts": {<font></font>
    "go": "open http://localhost:3000; npm run server",<font></font>
    "e2e": "nightwatch",<font></font>
    "test": "./node_modules/.bin/concurrently -k 'npm run server' 'npm  <font></font>
run e2e'",<font></font>
    "start": "npm run server",<font></font>
    "server": "live-server public --host=localhost --port=3000 --  <font></font>
middleware=./disable-browser-cache.js"<font></font>
  },<font></font>
  "private": true,<font></font>
  "devDependencies": {<font></font>
  "concurrently": "2.2.0",<font></font>
  "live-server": "git://github.com/acco/live-server.git"<font></font>
},<font></font>
  "dependencies": {<font></font>
  "semantic-ui": "git://github.com/Semantic-Org/Semantic-<font></font>
  UI.git#27d58a01793b66318478fbc5b6676804d22d065d"<font></font>
  }<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后是我的日志文件：</font></font></p>

<pre><code>0 info it worked if it ends with ok<font></font>
1 verbose cli [ '/usr/local/bin/node', '/usr/local/bin/npm', 'start' ]<font></font>
2 info using npm@4.3.0<font></font>
3 info using node@v7.5.0<font></font>
4 verbose run-script [ 'prestart', 'start', 'poststart' ]<font></font>
5 info lifecycle voting_app@1.1.0~prestart: voting_app@1.1.0<font></font>
6 silly lifecycle voting_app@1.1.0~prestart: no script for prestart, continuing<font></font>
7 info lifecycle voting_app@1.1.0~start: voting_app@1.1.0<font></font>
8 verbose lifecycle voting_app@1.1.0~start: unsafe-perm in lifecycle true<font></font>
9 verbose lifecycle voting_app@1.1.0~start: PATH: /usr/local/lib/node_modules/npm/bin/node-gyp-bin:/Users/ItsMeMrLi/Downloads/fullstack-react-code/voting_app/node_modules/.bin:/Library/Frameworks/Python.framework/Versions/3.6/bin:/Users/ItsMeMrLi/.rvm/gems/ruby-2.3.1/bin:/Users/ItsMeMrLi/.rvm/gems/ruby-2.3.1@global/bin:/Users/ItsMeMrLi/.rvm/rubies/ruby-2.3.1/bin:/Users/ItsMeMrLi/.cargo/bin:/usr/local/Cellar/smlnj/110.74/libexec/bin:/usr/local/bin:/Users/ItsMeMrLi/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Applications/Postgres.app/Contents/Versions/latest/bin:/Downloads/geckodriver:/usr/local/bin:/Users/ItsMeMrLi/.rvm/bin<font></font>
10 verbose lifecycle voting_app@1.1.0~start: CWD: /Users/ItsMeMrLi/Downloads/fullstack-react-code/voting_app<font></font>
11 silly lifecycle voting_app@1.1.0~start: Args: [ '-c', 'npm run server' ]<font></font>
12 silly lifecycle voting_app@1.1.0~start: Returned: code: 1  signal: null<font></font>
13 info lifecycle voting_app@1.1.0~start: Failed to exec start script<font></font>
14 verbose stack Error: voting_app@1.1.0 start: `npm run server`<font></font>
14 verbose stack Exit status 1<font></font>
14 verbose stack     at EventEmitter.&lt;anonymous&gt; (/usr/local/lib/node_modules/npm/lib/utils/lifecycle.js:279:16)<font></font>
14 verbose stack     at emitTwo (events.js:106:13)<font></font>
14 verbose stack     at EventEmitter.emit (events.js:192:7)<font></font>
14 verbose stack     at ChildProcess.&lt;anonymous&gt; (/usr/local/lib/node_modules/npm/lib/utils/spawn.js:40:14)<font></font>
14 verbose stack     at emitTwo (events.js:106:13)<font></font>
14 verbose stack     at ChildProcess.emit (events.js:192:7)<font></font>
14 verbose stack     at maybeClose (internal/child_process.js:890:16)<font></font>
14 verbose stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:226:5)<font></font>
15 verbose pkgid voting_app@1.1.0<font></font>
16 verbose cwd /Users/ItsMeMrLi/Downloads/fullstack-react-code/voting_app<font></font>
17 error Darwin 16.4.0<font></font>
18 error argv "/usr/local/bin/node" "/usr/local/bin/npm" "start"<font></font>
19 error node v7.5.0<font></font>
20 error npm  v4.3.0<font></font>
21 error code ELIFECYCLE<font></font>
22 error errno 1<font></font>
23 error voting_app@1.1.0 start: `npm run server`<font></font>
23 error Exit status 1<font></font>
24 error Failed at the voting_app@1.1.0 start script 'npm run server'.<font></font>
24 error Make sure you have the latest version of node.js and npm installed.<font></font>
24 error If you do, this is most likely a problem with the voting_app package,<font></font>
24 error not with npm itself.<font></font>
24 error Tell the author that this fails on your system:<font></font>
24 error     npm run server<font></font>
24 error You can get information on how to open an issue for this project with:<font></font>
24 error     npm bugs voting_app<font></font>
24 error Or if that isn't available, you can get their info via:<font></font>
24 error     npm owner ls voting_app<font></font>
24 error There is likely additional logging output above.<font></font>
25 verbose exit [ 1, true ]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢你们所有优秀的程序员。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2909篇《npm ERR！代码ELIFECYCLE》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐JinJinEva</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我而言，这与NPM软件包无关。</font><font style="vertical-align: inherit;">我的Vuepress项目正在使用</font></font><a href="https://vuepress.vuejs.org/config/#host" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">自定义主机</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">名。</font><font style="vertical-align: inherit;">忽略这个使事情再次起作用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这在ubuntu 16上解决了我</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）将npm和node更新到最新版本。</font><font style="vertical-align: inherit;">2）重新启动系统3）删除node_modules，然后再次启动npm i和npm start</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其他答案并不能解决我的问题。</font><font style="vertical-align: inherit;">这对我有用：</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试删除您的构建输出。 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，这意味着删除general.dll.js</font></font></li>
</ul>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">额外细节</font></font></strong></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Windows 10 64位开发机</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NPM开始运行webpack生成一个生成文件：general.dll.js</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在“ NPM启动”时收到ELIFECYCLE错误，通常是在我已经成功执行“ NPM启动”但又停止了它之后，才再次启动“ NPM启动”。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我注意到general.dll.js出现在一些难以理解的日志中</font></font></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid樱GO</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的情况要求全局删除webpack文件夹，然后删除项目node_modules文件夹，package-lock.json并运行npm install，npm start</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁小宇宙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它很奇怪，但对我有用</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">去 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制面板-&gt;系统和安全性-&gt;系统-&gt;高级系统安全性-&gt;环境变量</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在“环境变量”弹出窗口中，将编辑用户变量PATH，并将</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“ C：\ Windows \ System32”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">值作为</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分号添加</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到现有值中。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不是但并非最不重要的是重新启动计算机。</font></font></strong></p>

<p><a href="https://i.stack.imgur.com/0SqzV.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/0SqzV.png" alt="在此处输入图片说明"></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该端口可能已被其他应用程序使用，请尝试列出并查看是否是您的应用程序：</font></font></p>

<p><code>lsof -i:8080</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以终止该端口的进程：</font></font></p>

<p><code>lsof -ti:8080 | xargs kill</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro小哥</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Angular 7中遇到了同样的问题。只需执行以下步骤，即可解决错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）。</font><font style="vertical-align: inherit;">删除您的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node_modules</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹和</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package-lock.json</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）。</font><font style="vertical-align: inherit;">运行</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">3）。</font><font style="vertical-align: inherit;">运行</font></font><code>npm audit fix</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很久以来我一直对此问题感到困扰。</font><font style="vertical-align: inherit;">对我来说，版本</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是问题所在。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">分别为6.1.0和8.11.3。</font><font style="vertical-align: inherit;">但是，我没有意识到我</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不小心将</font><font style="vertical-align: inherit;">我的版本更新</font><font style="vertical-align: inherit;">为12。*。*。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后</font></font><code>npm i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它会在</font><font style="vertical-align: inherit;">任何时候开始安装GCX东西</font><font style="vertical-align: inherit;">，而以前这是不必要的。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我将我的等级降为</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">8，而且效果很好！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A番长</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，我签出了另一个分支，上面有一个新的库。</font><font style="vertical-align: inherit;">我仅通过运行</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不执行其他任何操作来</font><font style="vertical-align: inherit;">解决我的问题</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我很困惑，为什么</font></font><code>ELIFECYCLE</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在不使用端口时出现错误，但这一定是因为我没有安装库。</font><font style="vertical-align: inherit;">因此，您可能不必删除</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即可解决此问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">像这样解决： </font></font></p>

<pre><code># chown -R &lt;user&gt;: node_modules
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我</font></font><code>react-create-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在2019年2月2日的Windows 10中使用最新的NodeJS 11.9.0和npm 6.7.0（当您安装NodeJS时，它</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">已经存在）。</font><font style="vertical-align: inherit;">我认为节点程序包损坏的情况很少见，主要原因是许可。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，我将项目目录放在桌面上，它属于</font></font><code>C:\</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">驱动程序。</font><font style="vertical-align: inherit;">我移到另一个驱动程序的另一个目录。</font><font style="vertical-align: inherit;">因此，我消除了“文件权限”的担忧。</font><font style="vertical-align: inherit;">每个工作都很好且简单。</font></font></p>

<pre><code>cd /d D:\<font></font>
mkdir temp20190202<font></font>
npx create-react-app my-app<font></font>
cd my-app<font></font>
npm start<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以，不要将项目文件夹放在</font></font><code>C:\</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或包含Windows操作系统的其他驱动程序）的目录中。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near小哥西门</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在发出npm start命令，并在Sublime Text中打开了项目的文件夹。</font><font style="vertical-align: inherit;">关闭ST并重新启动服务器为我完成了工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长猴子</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个可能的意外原因：您在使用</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Create React App</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时未解决一些警告，并且该项目在CI上失败（例如，GitLab CI / CD）：</font></font></p>

<pre class="lang-none prettyprint-override"><code>Treating warnings as errors because process.env.CI = true.<font></font>
[ ... some warnings here ...]<font></font>
npm ERR! code ELIFECYCLE<font></font>
npm ERR! errno 1<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案：</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决您的警告！</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">替代：使用 </font></font><code>CI=false npm run build</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参见</font></font><a href="https://github.com/facebook/create-react-app/issues/3657" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">CRA问题＃3657</font></font></a></p>

<p><sup><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（羞愧地承认这只是我的事；直到同事指出这一点才看到。感谢Pascal！）</font></font></sup></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云JinJin</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用npm安装软件包时，请确保使用最新的npm版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在安装JavaScript时，请提及最新版本的NodeJS。</font><font style="vertical-align: inherit;">例如，在使用devtools安装JavaScript时，使用以下代码：</font></font></p>

<pre><code>devtools i --javascript nodejs:10.15.1
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将下载并安装提到的NodeJS版本。</font><font style="vertical-align: inherit;">这对我有用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan路易</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我确实按照步骤操作，它可以正常工作：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1。</font></font></p>

<pre><code>npm cache clean --force
</code></pre>

<ol start="2">
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除&nbsp; </font></font><code>package-lock.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&nbsp;文件</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新启动我的WebStorm</font></font></p></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><pre><code>npm install --unsafe-perm
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我工作。</font><font style="vertical-align: inherit;">请参阅</font></font><a href="https://docs.npmjs.com/misc/config#unsafe-perm" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://docs.npmjs.com/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">该</font></font><code>--unsafe-perm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参数允许您以root身份从软件包安装中运行脚本。</font><font style="vertical-align: inherit;">在我的情况下，问题是某些副机无法安装。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图用这种方式解决这个问题</font></font></p>

<pre><code>rm -rf node_modules &amp;&amp; rm ./package-lock.json &amp;&amp; npm install
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是对我来说，它不起作用。</font><font style="vertical-align: inherit;">我只是重新启动机器，并且它运行正常。
</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
是Linux用户，机器HP。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果遇到以下消息，请检查端口可用性：</font></font></p>

<pre><code>Error: listen EACCES 127.0.0.1:8080<font></font>
<font></font>
at Object._errnoException (util.js:999:13)<font></font>
at _exceptionWithHostPort (util.js:1020:20)<font></font>
at Server.setupListenHandle [as _listen2] (net.js:1362:19)<font></font>
at listenInCluster (net.js:1420:12)<font></font>
at GetAddrInfoReqWrap.doListen [as callback] (net.js:1535:7)<font></font>
at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:102:10)<font></font>
npm ERR! code ELIFECYCLE<font></font>
npm ERR! errno 1<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">面对这个确切的问题，</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，它的工作</font></font><code>deleting</code> <code>package-lock.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和重新运行</font></font><code>npm
  install</code></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果无法解决，请尝试</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除 </font></font><code>package-lock.json</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm缓存清理--force</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm安装</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm开始</font></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试全局重新安装cli软件包。</font><font style="vertical-align: inherit;">就我而言，当我收到相同的错误消息时，我正在尝试测试Vue.js教程。</font><font style="vertical-align: inherit;">我做的另一件事是再次运行vue命令，但是这次使用webpack-simple，这就是为什么我不确定哪一个可以解决问题，但是现在它可以工作了。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此解决方案修复了Win10中的错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请在全球安装  </font></font><code>npm install -g node-pre-gyp</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React Application：对我来说，问题是运行后</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">出现一些错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我接受了推荐</font></font><code>npm audit fix</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">此操作破坏了我</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>package-lock.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（更改的版本以及.json的软件包和结构）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方法是： </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除node_modules</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跑 </font></font><code>npm install</code></li>
<li><code>npm start</code></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这对某人有帮助。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方法：删除锁定文件。</font></font></p>

<pre><code>rm .\package-lock.json
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来源：</font></font><a href="https://github.com/mapbox/node-pre-gyp/issues/298" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : </font><a href="https://github.com/mapbox/node-pre-gyp/issues/298" rel="noreferrer"><font style="vertical-align: inherit;">//github.com/mapbox/node-pre-gyp/issues/298</font></a><font style="vertical-align: inherit;">（floriantraber）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除node_modules和package-lock.json，然后运行npm install。</font><font style="vertical-align: inherit;">它在这里完美运行（在项目根目录下的以下运行命令）：</font></font></p>

<pre><code>rm -rf node_modules &amp;&amp; rm ./package-lock.json &amp;&amp; npm install
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱伽罗</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">步骤1： </font></font><code>$ npm cache clean --force</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第2步：</font><font style="vertical-align: inherit;">按</font><font style="vertical-align: inherit;">文件夹</font><font style="vertical-align: inherit;">删除</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node_modules</font></font></strong><font style="vertical-align: inherit;"></font><code>$ rm -rf node_modules package-lock.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font><font style="vertical-align: inherit;">通过进入目录并右键单击&gt;删除/移至回收站</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将其删除。</font><font style="vertical-align: inherit;">另外，也删除</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package-lock.json</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">第三步： </font></font><code>npm install</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新开始
</font></font><code>$ npm start</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这对我有用。</font><font style="vertical-align: inherit;">希望它也对您有用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS：如果仍然存在，请检查以红色显示的错误并采取相应措施。</font><font style="vertical-align: inherit;">此错误特定于node.js环境。</font><font style="vertical-align: inherit;">快乐编码！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我运行以下代码来解决此错误</font></font></p>

<pre><code>npm cache clean
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手动或使用以下命令从我的项目结构中</font><font style="vertical-align: inherit;">删除</font><font style="vertical-align: inherit;">目录</font></font></p>

<pre><code>rm -rf node_modules
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后，再次使用安装依赖项</font></font></p>

<pre><code>npm install
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改node_modules目录中的访问权限</font></font></p>

<pre><code>chmod -R a+rwx ./node_modules 
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GilStafan</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">清洁</font></font><code>Cache</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并</font></font><code>Node_module</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不够。</font><font style="vertical-align: inherit;">请按照以下步骤操作：</font></font></p>

<ul>
<li><code>npm cache clean --force</code></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除资料</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">夹</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font><code>package-lock.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">档案</font></font></li>
<li><code>npm install</code></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样对我有用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>npm run build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在使用</font></font><code>create-react-app</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><a href="https://github.com/facebookincubator/create-react-app" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">link</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font><font style="vertical-align: inherit;">制作的应用程序上</font><font style="vertical-align: inherit;">运行时，</font><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">带有DigitalOcean的16.04 Ubuntu实例上，我得到了类似的错误消息</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我将实例从512MB RAM升级到1GB（从$ 5 / mo到$ 10 / mo），然后脚本可以运行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在此处发布此消息是为了指出由于资源限制，您可能会收到此错误，我在问题页面和SO答案的其他地方并没有真正看到它的解释。</font><font style="vertical-align: inherit;">而且我在错误日志中没有看到任何指向我的方向。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先我跑了：   </font></font></p>

<pre><code>npm run clean
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（即使它带有错误）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我删除了</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node_modules</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹并运行</font></font></p>

<pre><code>npm install
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这似乎已经解决了问题。 </font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
