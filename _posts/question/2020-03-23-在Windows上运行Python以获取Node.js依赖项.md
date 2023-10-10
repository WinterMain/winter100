---
layout: question
title:  在Windows上运行Python以获取Node.js依赖项
date:   2020-03-23T02:38:25.000Z
description: 我正在进入Node.js代码库，该代码库要求我通过NPM（即jQuery）下载一些依赖项。在尝试运行时npm install jquery，我不断收到...
img: 
author: Gil
category: question
answer: 16
tags: python Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在进入Node.js代码库，该代码库要求我通过NPM（即jQuery）下载一些依赖项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在尝试运行时</font></font><code>npm install jquery</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，我不断收到此错误：</font></font></p>

<pre><code>Your environment has been set up for using Node.js 0.8.21 (x64) and NPM<font></font>
<font></font>
C:\Users\Matt Cashatt&gt;npm install jquery<font></font>
npm http GET https://registry.npmjs.org/jquery<font></font>
npm http 304 https://registry.npmjs.org/jquery<font></font>
npm http GET https://registry.npmjs.org/jsdom<font></font>
npm http GET https://registry.npmjs.org/xmlhttprequest<font></font>
npm http GET https://registry.npmjs.org/htmlparser/1.7.6<font></font>
npm http GET https://registry.npmjs.org/location/0.0.1<font></font>
npm http GET https://registry.npmjs.org/navigator<font></font>
npm http GET https://registry.npmjs.org/contextify<font></font>
npm http 304 https://registry.npmjs.org/htmlparser/1.7.6<font></font>
npm http 304 https://registry.npmjs.org/xmlhttprequest<font></font>
npm http 304 https://registry.npmjs.org/location/0.0.1<font></font>
npm http 304 https://registry.npmjs.org/navigator<font></font>
npm http 304 https://registry.npmjs.org/jsdom<font></font>
npm http 304 https://registry.npmjs.org/contextify<font></font>
npm http GET https://registry.npmjs.org/bindings<font></font>
npm http GET https://registry.npmjs.org/cssom<font></font>
npm http GET https://registry.npmjs.org/cssstyle<font></font>
npm http GET https://registry.npmjs.org/request<font></font>
npm http 304 https://registry.npmjs.org/bindings<font></font>
<font></font>
&gt; contextify@0.1.4 install C:\Users\Matt Cashatt\node_modules\jquery\node_module<font></font>
s\contextify<font></font>
&gt; node-gyp rebuild<font></font>
<font></font>
<font></font>
C:\Users\Matt Cashatt\node_modules\jquery\node_modules\contextify&gt;node "C:\Progr<font></font>
am Files\nodejs\node_modules\npm\bin\node-gyp-bin\\..\..\node_modules\node-gyp\b<font></font>
in\node-gyp.js" rebuild<font></font>
npm http 304 https://registry.npmjs.org/cssstyle<font></font>
npm http 304 https://registry.npmjs.org/cssom<font></font>
npm http 304 https://registry.npmjs.org/request<font></font>
gyp ERR! configure error<font></font>
gyp ERR! stack Error: Can't find Python executable "python", you can set the PYT<font></font>
HON env variable.<font></font>
gyp ERR! stack     at failNoPython (C:\Program Files\nodejs\node_modules\npm\nod<font></font>
e_modules\node-gyp\lib\configure.js:113:14)<font></font>
gyp ERR! stack     at C:\Program Files\nodejs\node_modules\npm\node_modules\node<font></font>
-gyp\lib\configure.js:82:11<font></font>
gyp ERR! stack     at Object.oncomplete (fs.js:297:15)<font></font>
gyp ERR! System Windows_NT 6.1.7601<font></font>
gyp ERR! command "node" "C:\\Program Files\\nodejs\\node_modules\\npm\\node_modu<font></font>
les\\node-gyp\\bin\\node-gyp.js" "rebuild"<font></font>
gyp ERR! cwd C:\Users\Matt Cashatt\node_modules\jquery\node_modules\contextify<font></font>
gyp ERR! node -v v0.8.21<font></font>
gyp ERR! node-gyp -v v0.8.4<font></font>
gyp ERR! not ok<font></font>
npm ERR! error rolling back Error: ENOTEMPTY, rmdir 'C:\Users\Matt Cashatt\node_<font></font>
modules\jquery\node_modules\jsdom\node_modules\request\tests'<font></font>
npm ERR! error rolling back  jquery@1.8.3 { [Error: ENOTEMPTY, rmdir 'C:\Users\M<font></font>
att Cashatt\node_modules\jquery\node_modules\jsdom\node_modules\request\tests']<font></font>
npm ERR! error rolling back   errno: 53,<font></font>
npm ERR! error rolling back   code: 'ENOTEMPTY',<font></font>
npm ERR! error rolling back   path: 'C:\\Users\\Matt Cashatt\\node_modules\\jque<font></font>
ry\\node_modules\\jsdom\\node_modules\\request\\tests' }<font></font>
npm ERR! contextify@0.1.4 install: `node-gyp rebuild`<font></font>
npm ERR! `cmd "/c" "node-gyp rebuild"` failed with 1<font></font>
npm ERR!<font></font>
npm ERR! Failed at the contextify@0.1.4 install script.<font></font>
npm ERR! This is most likely a problem with the contextify package,<font></font>
npm ERR! not with npm itself.<font></font>
npm ERR! Tell the author that this fails on your system:<font></font>
npm ERR!     node-gyp rebuild<font></font>
npm ERR! You can get their info via:<font></font>
npm ERR!     npm owner ls contextify<font></font>
npm ERR! There is likely additional logging output above.<font></font>
<font></font>
npm ERR! System Windows_NT 6.1.7601<font></font>
npm ERR! command "C:\\Program Files\\nodejs\\\\node.exe" "C:\\Program Files\\nod<font></font>
ejs\\node_modules\\npm\\bin\\npm-cli.js" "install" "jquery"<font></font>
npm ERR! cwd C:\Users\Matt Cashatt<font></font>
npm ERR! node -v v0.8.21<font></font>
npm ERR! npm -v 1.2.11<font></font>
npm ERR! code ELIFECYCLE<font></font>
npm ERR! Error: ENOENT, lstat 'C:\Users\Matt Cashatt\node_modules\jquery\node_mo<font></font>
dules\jsdom\node_modules\request\tests\test-pipes.js'<font></font>
npm ERR! If you need help, you may report this log at:<font></font>
npm ERR!     &lt;http://github.com/isaacs/npm/issues&gt;<font></font>
npm ERR! or email it to:<font></font>
npm ERR!     &lt;npm-@googlegroups.com&gt;<font></font>
<font></font>
npm ERR! System Windows_NT 6.1.7601<font></font>
npm ERR! command "C:\\Program Files\\nodejs\\\\node.exe" "C:\\Program Files\\nod<font></font>
ejs\\node_modules\\npm\\bin\\npm-cli.js" "install" "jquery"<font></font>
npm ERR! cwd C:\Users\Matt Cashatt<font></font>
npm ERR! node -v v0.8.21<font></font>
npm ERR! npm -v 1.2.11<font></font>
npm ERR! path C:\Users\Matt Cashatt\node_modules\jquery\node_modules\jsdom\node_<font></font>
modules\request\tests\test-pipes.js<font></font>
npm ERR! fstream_path C:\Users\Matt Cashatt\node_modules\jquery\node_modules\jsd<font></font>
om\node_modules\request\tests\test-pipes.js<font></font>
npm ERR! fstream_type File<font></font>
npm ERR! fstream_class FileWriter<font></font>
npm ERR! code ENOENT<font></font>
npm ERR! errno 34<font></font>
npm ERR! fstream_stack C:\Program Files\nodejs\node_modules\npm\node_modules\fst<font></font>
ream\lib\writer.js:284:26<font></font>
npm ERR! fstream_stack Object.oncomplete (fs.js:297:15)<font></font>
npm ERR!<font></font>
npm ERR! Additional logging details can be found in:<font></font>
npm ERR!     C:\Users\Matt Cashatt\npm-debug.log<font></font>
npm ERR! not ok code 0<font></font>
<font></font>
C:\Users\Matt Cashatt&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看来失败是由于缺少Python安装造成的。</font><font style="vertical-align: inherit;">好了，我已经安装了Python，设置了变量，然后重新启动，仍然是错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于我所缺少的任何线索吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2661篇《在Windows上运行Python以获取Node.js依赖项》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，这些步骤解决了这个问题：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1-以管理员身份运行此cmd：</font></font></p>

<p><code>npm install --global --production windows-build-tools</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2-然后</font></font><code>npm rebuild</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在第一步完成后</font><font style="vertical-align: inherit;">运行</font></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（尤其是完成python 2.7安装，这是问题的主要原因）</font></font></em></strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋Green小哥</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，问题是我使用的是节点的最新版本，而不是</font></font><code>LTS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">稳定版本并建议大多数用户使用的版本。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
使用</font></font><code>LTS</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">版本解决了该问题。</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
您可以从这里下载：</font></font></p>

<p><a href="https://nodejs.org/en/download/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">LTS版本</font></font></a></p>

<p><a href="https://nodejs.org/en/download/current/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前最新版本</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例子：pg_config不可执行/错误node-gyp</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案：在Windows上，只需尝试添加PATH Env-&gt; C：\ Program Files \ PostgreSQL \ 12 \ bin</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为我工作，现在我可以使用pg-promise例如npm或其他依赖项。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您尝试在Cygwin上使用此功能，则需要按照</font></font><a href="https://stackoverflow.com/a/39128152/6704455"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案中</font><font style="vertical-align: inherit;">的说明进行操作</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">（这是Cygwin如何对待Windows符号链接的问题。）</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易番长</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是正确的命令：set path =％path％; C：\ Python34 [替换为正确的python安装路径]</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有同样的问题，我只是这样解决了。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如其他人指出的那样，这是易失性配置，仅适用于当前的cmd会话，并且（显然）您必须在运行npm install之前设置路径。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望这有帮助。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">糟糕！</font><font style="vertical-align: inherit;">配置错误gyp ERR！</font><font style="vertical-align: inherit;">错误：找不到Python可执行文件“ python”，您可以设置PYT HON env变量。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需重新安装，此异常由node-gyp脚本引发，然后尝试重新构建。</font><font style="vertical-align: inherit;">设置环境变量就足够了，就像我所做的那样：</font></font></p>

<pre><code>SET PYTHON=C:\work\_env\Python27\python.exe
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva十三</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正确的方法是1）从</font></font><a href="https://www.python.org/downloads/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载并安装python 2.7.14 </font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">2）从</font></font><a href="https://www.pythoncentral.io/add-python-to-path-python-is-not-recognized-as-an-internal-or-external-command/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为python设置环境变量</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成了！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：请相应地设置环境变量。</font><font style="vertical-align: inherit;">我在这里为窗户回答。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为什么不在</font></font><a href="https://www.python.org/downloads/release/python-2714/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下载python安装程序</font><font style="vertical-align: inherit;">？</font><font style="vertical-align: inherit;">当您检查路径安装时，它将为您工作</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗理查德</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在尝试</font></font><a href="https://www.npmjs.com/package/node-sass" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装node-sass@4.9.4</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时遇到了同样的挑战</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在查看了当前的官方文档并阅读了上面的答案之后，我注意到您不一定必须安装node-gyp或Windows构建工具。</font><font style="vertical-align: inherit;">这就是它所说的，</font></font><a href="https://github.com/nodejs/node-gyp#on-windows" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">关于在Windows上安装node-gyp</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">请记住，node-gyp参与了node-sass的安装过程。</font><font style="vertical-align: inherit;">而且，您实际上不必重新安装另一个python版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是救星，在安装任何需要构建工具的软件包时配置“ npm”应查找的python路径。</font></font></p>

<pre><code>C:\&gt; npm config set python /Python36/python
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经在Windows-7上安装了python3.6.3。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO猿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我忍不住提这个。</font><font style="vertical-align: inherit;">如果您使用Python3和淋巴结GYP失败，那么我很伤心地告诉你节点GYP目前不支持python3。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是给您的链接：</font></font><a href="https://github.com/nodejs/node-gyp/issues/1268" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https</font></font></a>
<font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> : 
 </font><a href="https://github.com/nodejs/node-gyp/issues/1268" rel="nofollow noreferrer"><font style="vertical-align: inherit;">//github.com/nodejs/node-gyp/issues/1268 </font></a></font><a href="https://github.com/nodejs/node-gyp/issues/193" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/nodejs/node-gyp/issues/193</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一些解决此问题的方法：1）以“管理员”身份运行命令提示符。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果第一个解决方案不能解决您的问题，请尝试以下方法：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）在管理员粘贴以下代码行的情况下打开命令提示符，然后按Enter键：</font></font></p>

<pre><code>npm install --global --production windows-build-tools
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这有所帮助：</font><a href="https://www.npmjs.com/package/node-gyp" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://www.npmjs.com/package/node-gyp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.npmjs.com/package/node-gyp</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遵循以下步骤：</font></font></p>

<pre><code>npm install -g node-gyp
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后：</font></font></p>

<pre><code>npm install --global --production windows-build-tools
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您尚未安装python以及所有node-gyp依赖项，只需使用管理员权限打开Powershell或Git Bash并执行： </font></font></p>

<pre><code>npm install --global --production windows-build-tools
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后安装该软件包：</font></font></p>

<pre><code>npm install --global node-gyp
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装后，将下载所有的node-gyp依赖项，但仍需要环境变量。</font><font style="vertical-align: inherit;">确实在正确的文件夹中找到了验证Python：</font></font></p>

<pre><code>C:\Users\ben\.windows-build-tools\python27\python.exe 
</code></pre>

<p><em><a href="https://github.com/nodejs/node-gyp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意-它使用python 2.7而不是3.x，因为它不受支持</font></font></a></em></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果没有抱怨，请继续创建您的（用户）环境变量：</font></font></p>

<pre><code>setx PYTHON "%USERPROFILE%\.windows-build-tools\python27\python.exe"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新启动cmd，并验证变量是否存在</font></font><code>set PYTHON</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，应</font><font style="vertical-align: inherit;">通过</font><font style="vertical-align: inherit;">该变量返回变量</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后重新申请 </font></font><code>npm install &lt;module&gt;</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Stafan村村</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题，这些答案都没有帮助。</font><font style="vertical-align: inherit;">在我的情况下，PYTHON变量设置正确。</font><font style="vertical-align: inherit;">但是python安装得太深，即路径太长。</font><font style="vertical-align: inherit;">因此，我做了以下工作：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将python重新安装到c：\ python</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将环境变量PYTHON设置为C：\ python \ python.exe</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就是这样！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天神乐</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是为我解决了许多这些问题的指南。</font></font></p>

<p><a href="http://www.steveworkman.com/node-js/2012/installing-jsdom-on-windows/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://www.steveworkman.com/node-js/2012/installing-jsdom-on-windows/</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我特别记得python版本很重要。</font><font style="vertical-align: inherit;">确保安装2.7.3而不是3。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱小胖Mandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中一个和/或多个应该帮助：</font></font></p>

<ol>
<li><p>Add <code>C:\Python27\</code> to your <code>PATH</code> variable (considering you have Python installed in this directory)<br>
How to set <code>PATH</code> env variable: <a href="http://www.computerhope.com/issues/ch000549.htm" rel="noreferrer">http://www.computerhope.com/issues/ch000549.htm</a><br>
Restart your console and/or Windows after setting variable.</p></li>
<li><p>In the same section as above ("Environment Variables"), add new variable with name <code>PYTHON</code> and value <code>C:\Python27\python.exe</code><br>
Restart your console and/or Windows after setting variable.</p></li>
<li><p>Open Windows command line (<code>cmd</code>) <em>in Admin mode</em>.<br>
Change directory to your Python installation path: <code>cd C:\Python27</code><br>
Make symlink needed for some installations: <code>mklink python2.7.exe python.exe</code></p></li>
</ol>

<p>Please note that <strong>you should have Python 2.x, NOT 3.x</strong>, to run <code>node-gyp</code> based installations!</p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下文字是关于Unix的，但Windows版本也需要Python 2.x：</font></font></p>

<pre><code>You can install with npm:<font></font>
<font></font>
$ npm install -g node-gyp<font></font>
You will also need to install:<font></font>
<font></font>
On Unix:<font></font>
python (v2.7 recommended, v3.x.x is not supported)<font></font>
make<font></font>
A proper C/C++ compiler toolchain, like GCC<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本文可能也有帮助：</font><a href="https://github.com/nodejs/node-gyp#installation" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/nodejs/node-gyp#installation" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/nodejs/node-gyp#installation</font></font></a></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
