---
layout: question
title:  npm找不到package.json
date:   2020-04-03T02:32:22.000Z
description: 我正在尝试安装一些示例的依赖项：express 2.5.8我已经下载了npm ，但是所有应用程序都抛出相同的错误：c \node\stylus>npm...
img: 
author: 村村
category: question
answer: 24
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在尝试安装一些示例的依赖项：</font></font><code>express 2.5.8</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经下载了</font><font style="vertical-align: inherit;">npm </font><font style="vertical-align: inherit;">，但是所有应用程序都抛出相同的错误：</font></font></p>

<pre><code>c:\node\stylus&gt;npm install -d<font></font>
npm info it worked if it ends with ok<font></font>
npm info using npm@1.1.1<font></font>
npm info using node@v0.6.11<font></font>
npm ERR! Couldn't read dependencies.<font></font>
<font></font>
npm ERR! Error: ENOENT, no such file or directory 'c:\node\stylus\package.json'<font></font>
npm ERR! You may report this log at:<font></font>
npm ERR!     &lt;http://github.com/isaacs/npm/issues&gt;<font></font>
npm ERR! or email it to:<font></font>
npm ERR!     &lt;npm-@googlegroups.com&gt;<font></font>
npm ERR!<font></font>
npm ERR! System Windows_NT 6.1.7600<font></font>
npm ERR! command "C:\\Program Files (x86)\\nodejs\\\\node.exe" "C:\\Program File<font></font>
s (x86)\\nodejs\\node_modules\\npm\\bin\\npm-cli.js" "install" "-d"<font></font>
npm ERR! cwd c:\node\stylus<font></font>
npm ERR! node -v v0.6.11<font></font>
npm ERR! npm -v 1.1.1<font></font>
npm ERR! path c:\node\stylus\package.json<font></font>
npm ERR! code ENOENT<font></font>
npm ERR! message ENOENT, no such file or directory 'c:\node\stylus\package.json'<font></font>
<font></font>
npm ERR! errno {}<font></font>
npm ERR!<font></font>
npm ERR! Additional logging details can be found in:<font></font>
npm ERR!     c:\node\stylus\npm-debug.log<font></font>
npm not ok<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">堵塞似乎是： </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有这样的文件或目录'c：\ node \ stylus \ package.json</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我是否错过了创建的步骤</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在跑：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Windows 7 64位</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm 1.1.1</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点6.11</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快递2.5.8</font></font></li>
</ul></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成package.json而不询问任何问题。</font><font style="vertical-align: inherit;">我在Mac和Windows中要创建package.json的目录下运行以下注释，它可以正常工作</font></font></p>

<pre><code>$ npm init -y<font></font>
<font></font>
Wrote to C:\workspace\package.json:<font></font>
<font></font>
{<font></font>
  "name": "workspace",<font></font>
  "version": "1.0.0",<font></font>
  "description": "",<font></font>
  "main": "builder.js",<font></font>
  "dependencies": {<font></font>
    "jasmine-spec-reporter": "^4.2.1",<font></font>
    "selenium-webdriver": "^4.0.0-alpha.5"<font></font>
  },<font></font>
  "devDependencies": {},<font></font>
  "scripts": {<font></font>
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"<font></font>
  },<font></font>
  "keywords": [],<font></font>
  "author": "",<font></font>
  "license": "ISC"<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在软件包名称对我有用之前添加-g。</font><font style="vertical-align: inherit;">寻找文档以解释其工作原理。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需安装您想要的任何软件包 </font></font><code>-g</code></p>

<p><code>npm install -g express</code></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁前端</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请检查要安装新软件包的目录或文件夹。</font><font style="vertical-align: inherit;">这也发生在我身上，我的整个项目都在一个子目录中，而我试图安装在主目录中。</font><font style="vertical-align: inherit;">检查完所有内容后，我发现必须将其安装在项目文件和package.json文件所在的子目录中，并且已经完成。</font><font style="vertical-align: inherit;">希望这可以帮助...</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LGil</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经</font></font><code>npm install -y</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跳过了创建丢失文件的步骤</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>y</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装 TypeScript时我也面临着同样的问题。</font><font style="vertical-align: inherit;">我刚刚通过以下命令初始化package.josn文件</font></font></p>

<pre><code>npm init -y
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我安装了我的 TypeScript</font></font></p>

<pre><code>npm install -g -typescript
</code></pre>

<p><a href="http://blossomprogramming.blogspot.com/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">http://blossomprogramming.blogspot.com/</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于以下命令</font></font></p>

<pre><code>sudo npm install react browserify watchify babelify --save-dev
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有同样的错误</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">saveError ENOENT：没有此类文件或目录，请打开“ /Users/Path/package.json”</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是当我运行命令时</font></font></p>

<pre><code>sudo npm install -gd react browserify watchify babelify --save-dev
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则没有丢失的文件或目录消息出现。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果项目目录中缺少package.json文件，则可以通过</font></font><strong><a href="https://docs.npmjs.com/creating-a-package-json-file" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm init</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建它 
 </font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果package.json文件已经在项目目录中创建，则可能是您没有从正确的路径运行项目。</font><font style="vertical-align: inherit;">在终端中</font><font style="vertical-align: inherit;">使用</font></font><strong><a href="https://www.computerhope.com/issues/ch000795.htm" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cd</font></font><code>your-project-path</code></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后从那里运行您的项目。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony凯</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好的，尝试转到首页“ user @ user：〜$”（cd + Enter键），然后npm install -g your_module。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进入项目文件夹，并检查package.json文件是否存在。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要使用Visual Studio Angular项目创建项目，请确保在ClientApp文件夹中运行此命令。</font><font style="vertical-align: inherit;">很有可能，您可能正在ClientApp文件夹之外寻找project.json文件。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西Near</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能非常明显，</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
但是请尝试</font><strong><font style="vertical-align: inherit;">从</font></strong><em><font style="vertical-align: inherit;">package.json</font></em><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">所在</font><strong><font style="vertical-align: inherit;">的项目文件夹中</font></strong><font style="vertical-align: inherit;">启动</font></font><code>CMD</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（对于Windows）</font><font style="vertical-align: inherit;">。</font></font><strong><font style="vertical-align: inherit;"></font></strong><font style="vertical-align: inherit;"></font><em><font style="vertical-align: inherit;"></font></em><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要</font></font><code>CMD</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从系统或Win中的“搜索栏” </font><font style="vertical-align: inherit;">启动</font><font style="vertical-align: inherit;">，也</font><font style="vertical-align: inherit;">不要</font><font style="vertical-align: inherit;">在</font><font style="vertical-align: inherit;">命令的</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
帮助下移至项目文件夹</font></font><code>cd</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后启动</font></font><code>npm start</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">谢谢！</font><font style="vertical-align: inherit;">我也为此尝试了许多选择。</font><font style="vertical-align: inherit;">我也在使用Windows，此命令帮助并节省了时间：</font></font></p>

<pre><code>npm install -g npm@lts
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">古一梅</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它本身说这</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您的项目中不可用。</font><font style="vertical-align: inherit;">因此，要创建</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请使用以下步骤：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在项目目录上打开命令提示符</font></font></li>
<li><code>npm init</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> （它会要求您输入很多条目，例如名称，版本，desc等，输入一些随机值，然后单击Enter）。</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入</font></font><code>yes</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并点击输入</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在再试一次。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我对npm也有类似的问题。</font><font style="vertical-align: inherit;">问题是我将项目放在两个同名文件夹中。</font><font style="vertical-align: inherit;">我通过将其中一个文件夹重命名为其他文件夹（建议使用外部文件夹）来解决该问题。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猴子村村</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的问题是由于某种原因我没有package.json文件。</font><font style="vertical-align: inherit;">将文件放入目录后，我可以运行npm install</font></font></p>

<p><a href="https://raw.githubusercontent.com/twbs/bootstrap/master/package.json" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://raw.githubusercontent.com/twbs/bootstrap/master/package.json</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node安装了npm，因此您应该具有npm版本。</font><font style="vertical-align: inherit;">但是，npm的更新频率比Node的更新频率高，因此，您需要确保它是最新版本。</font></font></p>

<pre><code>sudo npm install npm -g
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试： </font></font></p>

<pre><code>npm -v //The version should be higher than 2.1.8
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">之后，您应该可以运行：</font></font></p>

<pre><code>npm install
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">尝试重新安装Node.js</font></font></p>

<p><code>curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -</code></p>

<p><code>sudo apt-get install -y nodejs</code></p>

<pre><code>sudo apt-get install -y build-essential
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并更新npm</font></font></p>

<pre><code>curl -L https://npmjs.com/install.sh | sudo sh
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">初学者通常在随机位置尝试npm命令。</font><font style="vertical-align: inherit;">下载或创建项目后，您必须进入该项目文件夹。</font><font style="vertical-align: inherit;">里面是文件package.json。</font></font></p>

<pre><code>cd &lt;path_to_project&gt;<font></font>
npm install<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新2018</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这已经成为一个非常普遍的问题，我的回答（尽管标记为正确）不再有效。</font><font style="vertical-align: inherit;">请参考</font><font style="vertical-align: inherit;">以下</font></font><a href="https://stackoverflow.com/a/37687665/719987"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Deepeep的</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">答案：</font></font></p>

<pre><code>npm init
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">原始过时的答案</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为您忘记设置快递目录：</font></font></p>

<pre><code>express &lt;yourdirectory&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成后，您应该可以看到一堆文件，然后应该运行以下命令：</font></font></p>

<pre><code>npm install -d
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问候。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Jim西里</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为，</font></font><code>npm init</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将创建您丢失的</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font><font style="vertical-align: inherit;">在相同情况下，它对我也有效。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易宝儿</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按照以下步骤操作，您将获得</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font></font></p>

<pre><code>npm --version<font></font>
npm install express<font></font>
npm init -y<font></font>
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">链接：</font></font></strong> <font style="vertical-align: inherit;"><a href="http://www.codingslover.blogspot.com/2017/02/npm-node-js-cant-find-packagejson.html" rel="noreferrer"><font style="vertical-align: inherit;">http </font></a><strong><font style="vertical-align: inherit;">: </font></strong></font><a href="http://www.codingslover.blogspot.com/2017/02/npm-node-js-cant-find-packagejson.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.codingslover.com/2017/02/npm-node-js-cant-find-packagejson.html</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用win7 / win8 / win10（CD）中的命令移动文件夹：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入您的项目文件夹</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跑： </font></font><code>npm install -d</code></p></li>
</ol></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在这里谷歌搜索</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">“没有这样的文件或目录package.json”</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">发送给您，则您可能使用的是Node.js的旧版本</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下一页对如何在许多操作系统和发行版上轻松安装最新的稳定版提供了很好的指导：</font></font></p>

<p><a href="https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我会简短但致命。</font><font style="vertical-align: inherit;">:) install -d不适用于您。</font><font style="vertical-align: inherit;">这很简单。</font><font style="vertical-align: inherit;">尝试</font></font></p>

<pre><code>$ npm install -g express
</code></pre></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
