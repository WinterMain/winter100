---
layout: question
title:  NodeJS-使用NPM安装时出错
date:   2020-03-23T11:53:35.000Z
description: Microsoft Windows \[Version 6.3.9600\](c) 2013 Microsoft Corporation. All righ...
img: 
author: 番长猴子
category: question
answer: 8
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><pre><code>Microsoft Windows [Version 6.3.9600]<font></font>
(c) 2013 Microsoft Corporation. All rights reserved.<font></font>
<font></font>
C:\Windows\system32&gt;npm install caress-server<font></font>
npm http GET https://registry.npmjs.org/caress-server<font></font>
npm http 304 https://registry.npmjs.org/caress-server<font></font>
npm http GET https://registry.npmjs.org/jspack/0.0.1<font></font>
npm http GET https://registry.npmjs.org/buffertools<font></font>
npm http 304 https://registry.npmjs.org/jspack/0.0.1<font></font>
npm http 304 https://registry.npmjs.org/buffertools<font></font>
<font></font>
&gt; buffertools@2.0.1 install C:\Windows\system32\node_modules\caress-server\node_<font></font>
modules\buffertools<font></font>
&gt; node-gyp rebuild<font></font>
<font></font>
<font></font>
C:\Windows\system32\node_modules\caress-server\node_modules\buffertools&gt;node "G:<font></font>
\nodejs\node_modules\npm\bin\node-gyp-bin\\..\..\node_modules\node-gyp\bin\node-<font></font>
gyp.js" rebuild<font></font>
gyp ERR! configure error<font></font>
gyp ERR! stack Error: Can't find Python executable "python", you can set the PYT<font></font>
HON env variable.<font></font>
gyp ERR! stack     at failNoPython (G:\nodejs\node_modules\npm\node_modules\node<font></font>
-gyp\lib\configure.js:101:14)<font></font>
gyp ERR! stack     at G:\nodejs\node_modules\npm\node_modules\node-gyp\lib\confi<font></font>
gure.js:64:11<font></font>
gyp ERR! stack     at Object.oncomplete (fs.js:107:15)<font></font>
gyp ERR! System Windows_NT 6.2.9200<font></font>
gyp ERR! command "node" "G:\\nodejs\\node_modules\\npm\\node_modules\\node-gyp\\<font></font>
bin\\node-gyp.js" "rebuild"<font></font>
gyp ERR! cwd C:\Windows\system32\node_modules\caress-server\node_modules\buffert<font></font>
ools<font></font>
gyp ERR! node -v v0.10.25<font></font>
gyp ERR! node-gyp -v v0.12.2<font></font>
gyp ERR! not ok<font></font>
npm ERR! buffertools@2.0.1 install: `node-gyp rebuild`<font></font>
npm ERR! Exit status 1<font></font>
npm ERR!<font></font>
npm ERR! Failed at the buffertools@2.0.1 install script.<font></font>
npm ERR! This is most likely a problem with the buffertools package,<font></font>
npm ERR! not with npm itself.<font></font>
npm ERR! Tell the author that this fails on your system:<font></font>
npm ERR!     node-gyp rebuild<font></font>
npm ERR! You can get their info via:<font></font>
npm ERR!     npm owner ls buffertools<font></font>
npm ERR! There is likely additional logging output above.<font></font>
<font></font>
npm ERR! System Windows_NT 6.2.9200<font></font>
npm ERR! command "G:\\nodejs\\\\node.exe" "G:\\nodejs\\node_modules\\npm\\bin\\n<font></font>
pm-cli.js" "install" "caress-server"<font></font>
npm ERR! cwd C:\Windows\system32<font></font>
npm ERR! node -v v0.10.25<font></font>
npm ERR! npm -v 1.3.24<font></font>
npm ERR! code ELIFECYCLE<font></font>
npm ERR!<font></font>
npm ERR! Additional logging details can be found in:<font></font>
npm ERR!     C:\Windows\system32\npm-debug.log<font></font>
npm ERR! not ok code 0<font></font>
<font></font>
C:\Windows\system32&gt;<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在安装某个NodeJS脚本</font></font><a href="http://caressjs.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-Caress</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但我并非无法做到。</font><font style="vertical-align: inherit;">我正在使用Windows 8.1，谁能告诉我所面临的问题是什么，为什么此安装无法正常工作。</font><font style="vertical-align: inherit;">据我所知，buffertools依赖性似乎存在问题。</font><font style="vertical-align: inherit;">不知道该如何解决？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我从github下载构建并将其放置在节点模块中，则似乎没有任何效果。</font><font style="vertical-align: inherit;">当我尝试启动时，使用npm start或在实施期间。</font></font></p>

<pre><code>G:\nodejs\node_modules\caress-server&gt;npm install<font></font>
<font></font>
G:\nodejs\node_modules\caress-server&gt;npm start<font></font>
<font></font>
&gt; caress-server@0.1.1 start G:\nodejs\node_modules\caress-server<font></font>
&gt; node examples/server.js<font></font>
<font></font>
   info  - socket.io started<font></font>
<font></font>
module.js:340<font></font>
    throw err;<font></font>
          ^<font></font>
Error: Cannot find module './build/Release/buffertools.node'<font></font>
    at Function.Module._resolveFilename (module.js:338:15)<font></font>
    at Function.Module._load (module.js:280:25)<font></font>
    at Module.require (module.js:364:17)<font></font>
    at require (module.js:380:17)<font></font>
    at Object.&lt;anonymous&gt; (G:\nodejs\node_modules\caress-server\node_modules\buf<font></font>
fertools\buffertools.js:16:19)<font></font>
    at Module._compile (module.js:456:26)<font></font>
    at Object.Module._extensions..js (module.js:474:10)<font></font>
    at Module.load (module.js:356:32)<font></font>
    at Function.Module._load (module.js:312:12)<font></font>
    at Module.require (module.js:364:17)<font></font>
<font></font>
npm ERR! caress-server@0.1.1 start: `node examples/server.js`<font></font>
npm ERR! Exit status 8<font></font>
npm ERR!<font></font>
npm ERR! Failed at the caress-server@0.1.1 start script.<font></font>
npm ERR! This is most likely a problem with the caress-server package,<font></font>
npm ERR! not with npm itself.<font></font>
npm ERR! Tell the author that this fails on your system:<font></font>
npm ERR!     node examples/server.js<font></font>
npm ERR! You can get their info via:<font></font>
npm ERR!     npm owner ls caress-server<font></font>
npm ERR! There is likely additional logging output above.<font></font>
npm ERR! System Windows_NT 6.2.9200<font></font>
npm ERR! command "G:\\nodejs\\\\node.exe" "G:\\nodejs\\node_modules\\npm\\bin\\n<font></font>
pm-cli.js" "start"<font></font>
npm ERR! cwd G:\nodejs\node_modules\caress-server<font></font>
npm ERR! node -v v0.10.25<font></font>
npm ERR! npm -v 1.3.24<font></font>
npm ERR! code ELIFECYCLE<font></font>
npm ERR!<font></font>
npm ERR! Additional logging details can be found in:<font></font>
npm ERR!     G:\nodejs\node_modules\caress-server\npm-debug.log<font></font>
npm ERR! not ok code 0<font></font>
<font></font>
G:\nodejs\node_modules\caress-server&gt;<font></font>
</code></pre></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第2995篇《NodeJS-使用NPM安装时出错》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修复了将Node从v12.8.1降级到v11.15.0并成功安装所有内容的问题</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装node-gyp和c ++编译器（gcc-c ++）。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony西门</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">糟糕！</font><font style="vertical-align: inherit;">配置错误gyp ERR！</font><font style="vertical-align: inherit;">错误：找不到Python可执行文件“ python”，您可以设置PYT HON env变量。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这意味着Python环境。</font><font style="vertical-align: inherit;">在我的情况下，变量应指向可执行的python文件：
</font></font><code>SET PYTHON=C:\work\_env\Python27\python.exe</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说解决方案是：</font></font></p>

<pre><code>rm -rf  ~/.node_gyp and<font></font>
sudo npm install -g node-gyp@3.4.0<font></font>
cd /usr/local/lib sudo ln -s ../../lib/libSystem.B.dylib libgcc_s.10.5.dylib <font></font>
brew install gcc<font></font>
npm install<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于窗户</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">检查系统变量中的python路径。</font><font style="vertical-align: inherit;">npm插件需要安装node-gyp。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开具有管理员权限的命令提示符，然后运行以下命令。</font></font></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install --global --production Windows构建工具</font></font></em> </p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install --global node-gyp</font></font></em></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Cygwin用户：</font></font></h3>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开箱即用的Cygwin安装中</font><font style="vertical-align: inherit;">使用的python问题</font></font><code>node-gyp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font><font style="vertical-align: inherit;">由于</font><font style="vertical-align: inherit;">代码中的</font><font style="vertical-align: inherit;">不完整检查而</font><font style="vertical-align: inherit;">产生误导性</font></font><a href="https://github.com/nodejs/node-gyp/issues/987" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误</font></font></a><font style="vertical-align: inherit;"></font><code>../npm/node_modules/node-gyp/lib/configure.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是由于Cygwin如何处理符号链接。</font><font style="vertical-align: inherit;">在开箱即用的安装中，这样做不正确。</font><font style="vertical-align: inherit;">因此，上述代码中的错误消息会引起误解，因为它抱怨</font></font><code>PYTHON</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路径而不是</font></font><code>python.exe</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件本身（或链接）</font><font style="vertical-align: inherit;">的存在</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有（至少）两种方法可以解决此问题。 </font></font></p>

<ol>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装Cygwin软件包</font></font><code>cygutils-extra</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并使用</font></font><code>winln</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></em></li>
<li><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在管理模式下使用本机Windows CMD。</font></font></em></li>
</ol>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），您可以通过以下步骤从Cygwin Shell中创建适当的符号链接：</font></font></p>

<pre class="lang-bash prettyprint-override"><code># To make the Cygwin environment treat Windows links properly: <font></font>
# Alternatively add this to your `.bashrc` for permanent use.<font></font>
export CYGWIN=winsymlinks:nativestrict<font></font>
<font></font>
# Install Cygwin package containing "winln"<font></font>
apt-cyg install cygutils-extra<font></font>
<font></font>
# Make a proper Windows sym-link:<font></font>
cd /cygdrive/c/cygwin64/bin/<font></font>
winln.exe -s python2.7.exe python.exe<font></font>
<font></font>
# Add PYTHON as a native Windows system wide variable (HKLM) <font></font>
setx /M PYTHON "C:\cygwin64\bin\python"<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（也假设您以Admin身份运行Cygwin外壳。）</font></font><code>apt-cyg</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建议</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">，并且可以在github上以各种形式找到它。</font></font></p>

<hr>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）开箱即用的Cygwin用户，分辨率为：</font></font></p>

<pre><code># Open a native Windows CMD in Administrator mode and:<font></font>
cd C:\cygwin64\bin\<font></font>
mklink python.exe python2.7.exe<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">结果应如下所示：</font></font></p>

<pre><code>C:\cygwin64\bin&gt;ls -al python*<font></font>
lrwxrwxrwx 1 xxx            xxx   13 Jun  2  2015 python -&gt; python2.7.exe<font></font>
lrwxrwxrwx 1 Administrators xxx   13 Aug 24 17:28 python.exe -&gt; python2.7.exe<font></font>
lrwxrwxrwx 1 xxx            xxx   13 Jun  2  2015 python2 -&gt; python2.7.exe<font></font>
-rwxr-xr-x 1 xxx            xxx 9235 Jun  2  2015 python2.7.exe<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该能够</font><font style="vertical-align: inherit;">为Windows </font><font style="vertical-align: inherit;">提供</font></font><a href="http://chocolatey.org" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Chocolatey的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所有node-gyp依赖项</font></font></p>

<pre><code>choco install python2<font></font>
choco install visualstudioexpress2013windowsdesktop<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确保您具有运行所需的所有软件</font></font><code>node-gyp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<ul>
<li><a href="https://github.com/TooTallNate/node-gyp" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/TooTallNate/node-gyp</font></font></a></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><code>node-gyp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过环境变量</font><font style="vertical-align: inherit;">配置使用的Visual Studio版本，</font><font style="vertical-align: inherit;">这样就可以避免</font></font><code>--msvs_version=2012</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次执行npm安装时都</font><font style="vertical-align: inherit;">必须设置</font><font style="vertical-align: inherit;">属性。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例子： </font></font></p>

<ul>
<li><font style="vertical-align: inherit;"></font><code>GYP_MSVS_VERSION=2012</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为Visual Studio 2012 </font><font style="vertical-align: inherit;">设置</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">集</font></font><code>GYP_MSVS_VERSION=2013e</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（“ e”代表免费的“ express Edition”）</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有关完整列表，请参见</font></font><a href="https://github.com/joyent/node/blob/v0.10.29/tools/gyp/pylib/gyp/MSVSVersion.py#L209-294" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-https://github.com/joyent/node/blob/v0.10.29/tools/gyp/pylib/gyp/MSVSVersion.py#L209-294</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于NodeJS的Windows用户来说，这仍然很痛苦，因为它假定您已安装Visual Studio的副本，并且许多最终用户永远都不会拥有此副本。</font><font style="vertical-align: inherit;">因此，我正在游说Joyent，鼓励他们将Web套接字作为CORE节点的一部分包括在内，并可能将GNU gcc编译器作为NodeJS安装的一部分提供，以便我们可以永久解决此问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">随时在以下位置添加您的投票：</font></font></p>

<ul>
<li><a href="https://github.com/joyent/node/issues/8005#issuecomment-50545326" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/joyent/node/issues/8005#issuecomment-50545326</font></font></a></li>
</ul></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
