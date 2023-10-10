---
layout: question
title:  npm install -g less不起作用：EACCES：权限被拒绝
date:   2020-03-24T01:44:46.000Z
description: 我试图减少对phpstorm的设置，以便可以在保存时将.less文件编译为.css。我已经安装了node.js，下一步（根据此https //www.je...
img: 
author: 乐米亚
category: question
answer: 8
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图减少对phpstorm的设置，以便可以在保存时将.less文件编译为.css。</font><font style="vertical-align: inherit;">我已经安装了node.js，下一步（根据此</font></font><a href="https://www.jetbrains.com/webstorm/help/transpiling-sass-less-and-scss-to-css.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.jetbrains.com/webstorm/help/transpiling-sass-less-and-scss-to-css.html</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）正在以下位置运行此命令：终奌站</font></font></p>

<pre><code>npm install -g less
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，当我这样做时，我得到这些错误</font></font></p>

<pre><code>☁  ~  npm install -g less<font></font>
npm WARN install Couldn't install optional dependency: EACCES: permission denied, mkdir '/Users/brentscholl/.npm/mkdirp/0.5.1'<font></font>
npm WARN install Couldn't install optional dependency: EACCES: permission denied, mkdir '/Users/brentscholl/.npm/graceful-fs/3.0.8'<font></font>
npm WARN install Couldn't install optional dependency: EACCES: permission denied, mkdir '/Users/brentscholl/.npm/extend/3.0.0'<font></font>
npm WARN install Couldn't install optional dependency: EACCES: permission denied, mkdir '/Users/brentscholl/.npm/readable-stream/2.0.4'<font></font>
npm WARN install Couldn't install optional dependency: EACCES: permission denied, mkdir '/Users/brentscholl/.npm/chalk/1.1.1'<font></font>
npm WARN install Couldn't install optional dependency: EACCES: permission denied, mkdir '/Users/brentscholl/.npm/xtend/4.0.1'<font></font>
npm WARN checkPermissions Missing write access to /usr/local/lib/node_modules<font></font>
/usr/local/lib<font></font>
└─┬ less@2.5.3<font></font>
  ├─┬ errno@0.1.4<font></font>
  │ └── prr@0.0.0<font></font>
  ├── image-size@0.3.5<font></font>
  ├── mime@1.3.4<font></font>
  ├─┬ promise@6.1.0<font></font>
  │ └── asap@1.0.0<font></font>
  └─┬ source-map@0.4.4<font></font>
    └── amdefine@1.0.0<font></font>
<font></font>
npm ERR! Darwin 15.0.0<font></font>
npm ERR! argv "/usr/local/bin/node" "/usr/local/bin/npm" "install" "-g" "less"<font></font>
npm ERR! node v5.0.0<font></font>
npm ERR! npm  v3.3.6<font></font>
npm ERR! path /usr/local/lib/node_modules<font></font>
npm ERR! code EACCES<font></font>
npm ERR! errno -13<font></font>
npm ERR! syscall access<font></font>
<font></font>
npm ERR! Error: EACCES: permission denied, access '/usr/local/lib/node_modules'<font></font>
npm ERR!     at Error (native)<font></font>
npm ERR!  { [Error: EACCES: permission denied, access '/usr/local/lib/node_modules']<font></font>
npm ERR!   errno: -13,<font></font>
npm ERR!   code: 'EACCES',<font></font>
npm ERR!   syscall: 'access',<font></font>
npm ERR!   path: '/usr/local/lib/node_modules' }<font></font>
npm ERR!<font></font>
npm ERR! Please try running this command again as root/Administrator.<font></font>
<font></font>
npm ERR! Please include the following file with any support request:<font></font>
npm ERR!     /Users/brentscholl/npm-debug.log<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是一个完全菜鸟，不知道下一步该怎么做。</font><font style="vertical-align: inherit;">任何帮助将不胜感激！</font></font></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">嗨，我正在使用Ubuntu 18，在安装Prisma时也收到了此错误消息，然后我只是</font></font><code>sudo</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在前面</font><font style="vertical-align: inherit;">添加</font></font></p>

<pre><code>sudo npm i -g prisma
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里Near</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个选择是使用安装程序下载并安装新版本。</font></font></p>

<p><a href="https://nodejs.org/en/download/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://nodejs.org/en/download/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOJim</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Linux中，请确保获得所有权限：</font></font></p>

<pre><code>sudo su
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天梅</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需点击以下命令： </font></font></p>

<pre><code>sudo chown -R $USER /usr/local/lib/node_modules
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">让我们分解一下：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">须藤</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">表示我们以root（系统超级用户）身份运行此命令。</font><font style="vertical-align: inherit;">这是因为我们没有写该文件夹的权限，但是root可以修复任何权限。</font><font style="vertical-align: inherit;">此命令还意味着系统将要求您输入密码以进行确认。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">wn</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是用于更改文件或文件夹所有者的命令。</font><font style="vertical-align: inherit;">我们设置-R选项以递归方式更改所有者，因此我们也可以使所有者访问那里已经包含的所有文件。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">$ USER</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是自动设置为您的用户名的环境变量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后一块是文件夹路径。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行此路径将使该文件夹成为您的文件夹，因此您可以安全地运行npm install -g命令！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙乐理查德</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于我的Mac环境 </font></font></p>

<pre><code>sudo chown -R $USER /usr/local/lib/node_modules
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决问题 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Eva</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><a href="https://i.stack.imgur.com/vEvPi.png" rel="nofollow noreferrer"><img src="https://i.stack.imgur.com/vEvPi.png" alt="在此处输入图片说明"></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用sudo -i切换到$ root，然后执行npm install -g xxxx</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node Version Manger</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新安装node和npm </font><font style="vertical-align: inherit;">（按照</font></font><a href="https://docs.npmjs.com/getting-started/fixing-npm-permissions" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm文档中的说明</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），以避免权限错误：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在OSX中：</font></font></p>

<pre><code>curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或关注这篇文章：</font></font></p>

<p><a href="http://dev.topheman.com/install-nvm-with-homebrew-to-use-multiple-versions-of-node-and-iojs-easily/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://dev.topheman.com/install-nvm-with-homebrew-to-use-multiple-versions-of-node-and-iojs-easily/</font></font></a></p>

<p><em>Windows users should install <a href="https://github.com/coreybutler/nvm-windows" rel="noreferrer">nvm-windows</a>.
For further help how to install nvm refer the <a href="https://github.com/creationix/nvm/blob/master/README.md#installation" rel="noreferrer">nvm readme</a>.</em></p>

<p>Then choose for example:</p>

<pre><code>nvm install 8.0.0<font></font>
nvm use 8.0<font></font>
</code></pre>

<p>Now you can give another try:</p>

<pre><code>npm install -g less
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在终端窗口中运行以下命令（注意：不要替换$ USER部分...多数民众赞成在Linux命令中获取您的用户！）：</font></font></p>

<pre><code>sudo chown -R $USER ~/.npm<font></font>
sudo chown -R $USER /usr/lib/node_modules<font></font>
sudo chown -R $USER /usr/local/lib/node_modules<font></font>
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
