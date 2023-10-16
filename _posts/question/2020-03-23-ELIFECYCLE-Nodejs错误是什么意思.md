---
layout: question
title:  ELIFECYCLE Node.js错误是什么意思？
date:   2020-03-23T07:19:32.000Z
description: ELIFECYCLE是什么意思？这是我的应用程序代码：https   //gist.github.com/samholmes/388ca4552c59...
img: 
author: 卡卡西阿飞
category: question
answer: 13
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ELIFECYCLE是什么意思？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是我的应用程序代码：</font><a href="https://gist.github.com/samholmes/388ca4552c5936b52c5d"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://gist.github.com/samholmes/388ca4552c5936b52c5d"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//gist.github.com/samholmes/388ca4552c5936b52c5d</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我运行“ blast-emails”命令时，它将运行一段时间，直到不久因错误崩溃：</font></font></p>

<pre><code>npm ERR! Linux 3.2.0-4-amd64<font></font>
npm ERR! argv "/root/.nvm/versions/io.js/v1.6.1/bin/iojs" "/root/.nvm/versions/io.js/v1.6.1/bin/npm" "run" "live"<font></font>
npm ERR! node v1.6.1<font></font>
npm ERR! npm  v2.7.1<font></font>
npm ERR! code ELIFECYCLE<font></font>
npm ERR! emailer@0.0.0 live: `NODE_ENV=production node app.js`<font></font>
npm ERR! Exit status 137<font></font>
npm ERR! <font></font>
npm ERR! Failed at the emailer@0.0.0 live script 'NODE_ENV=production node app.js'.<font></font>
npm ERR! This is most likely a problem with the emailer package,<font></font>
npm ERR! not with npm itself.<font></font>
npm ERR! Tell the author that this fails on your system:<font></font>
npm ERR!     NODE_ENV=production node app.js<font></font>
npm ERR! You can get their info via:<font></font>
npm ERR!     npm owner ls emailer<font></font>
npm ERR! There is likely additional logging output above.<font></font>
<font></font>
npm ERR! Please include the following file with any support request:<font></font>
npm ERR!     /apps/emailer/npm-debug.log<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该</font></font><code>npm-debug.log</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件也包含在要点中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我正在寻找以下两个答案之一：ELIFECYCLE是什么意思？</font><font style="vertical-align: inherit;">（或）为什么我的应用程序代码中出现错误？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2903篇《ELIFECYCLE Node.js错误是什么意思？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙达蒙</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您从git中提取代码并且尚未安装节点模块“ npm install”时，也会发生此问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅小哥</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装新软件包或更新它们后，我遇到了相同的错误：</font></font></p>

<pre><code>...<font></font>
npm ERR! code ELIFECYCLE<font></font>
npm ERR! errno 1<font></font>
...<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它帮助我再次或几次运行安装命令。</font><font style="vertical-align: inherit;">之后，错误消失了。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里神奇</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，当我从另一个目录复制项目时，我产生了类似的错误。</font><font style="vertical-align: inherit;">缺少一些隐藏文件，例如重要的.babelrc。</font><font style="vertical-align: inherit;">嗯...确保您复制了所有文件！</font><font style="vertical-align: inherit;">:)</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长樱梅</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我运行两个设置相同的项目并且已经运行了一个项目时，我遇到了这个问题。</font><font style="vertical-align: inherit;">这意味着另一个项目无法使用该端口号。</font><font style="vertical-align: inherit;">一旦我停止了另一个项目的运行，我就没有问题了。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GreenA</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，这是Linux的权限问题，而不是编写：</font></font></p>

<pre><code>npm run start
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试过了： </font></font></p>

<pre><code>sudo npm run start
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后输入您的sudo用户密码，就可以了！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我</font><font style="vertical-align: inherit;">在节点docker容器内</font><font style="vertical-align: inherit;">运行</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm run build</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时，我有相同的错误代码</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在本地，它在容器中工作，而我在容器中设置了选项，当在编译过程中出现警告时抛出错误，而在本地未设置。</font><font style="vertical-align: inherit;">因此，此错误可能意味着与停止由NPM完成的过程有关的任何事情</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在process._tickCallback（internal / process / next_tick.js：10</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
4：9）</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm ERR！</font><font style="vertical-align: inherit;">代码ELIFECYCLE</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm ERR！</font><font style="vertical-align: inherit;">errno 1</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm ERR！</font><font style="vertical-align: inherit;">ng-contact-manager@0.0.0示例：`node src / server / dat</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
a / seed-db.js`</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm ERR！</font><font style="vertical-align: inherit;">退出状态1</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm ERR！</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm ERR！</font><font style="vertical-align: inherit;">ng-contact-manager@0.0.0示例脚本失败。</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm ERR！</font><font style="vertical-align: inherit;">npm可能不是问题。</font><font style="vertical-align: inherit;">有力</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
上面还有其他日志记录输出。</font></font><font></font>
<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm ERR！</font><font style="vertical-align: inherit;">可以在以下位置找到此运行的完整日志：</font></font><font></font>
</pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个同样的问题，就是我终于解决了！</font><font style="vertical-align: inherit;">错误：
 </font><a href="https://i.stack.imgur.com/jWh8l.png" rel="nofollow noreferrer"><font style="vertical-align: inherit;">更正数据库连接用户名和密码后，</font></a></font><a href="https://i.stack.imgur.com/ElNQ4.png" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行时终端出现错误，我</font></font><code>npm run sample</code></a>
<a href="https://i.stack.imgur.com/jWh8l.png" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在数据库</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
中使用mlab，并且在.env文件下，我忘记正确输入用户名和密码。</font><font style="vertical-align: inherit;">当我纠正我的工作。</font></font></p>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">&gt; ng-contact-manager@0.0.0样本/Users/mohammedr.kemal/Downl</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
oads / Ex_Files_ANGULAR_API_AUTH /练习文件/ Ch01 / 01_04 /开始</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
&gt;节点src / server / data / seed-db.js</font></font><font></font>
<font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
连接到mongodb ...</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
连接到mongodb ...</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
插入2条记录。</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
正在关闭连接...</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
完成。</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
已插入12条记录。</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
正在关闭连接...</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
完成。</font></font><font></font>
</pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，如果有的话，最好看看我们在代码中建立的任何数据连接。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙蛋蛋</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有人可能认为这是因为npm和node的版本已过时，但事实并非如此。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如Pierre Inglebert所说，如果您查看源代码，则可以看到</font></font><code>End of lifecycle</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">程序</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意外</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">停止。</font><font style="vertical-align: inherit;">这可能有多种原因。</font><font style="vertical-align: inherit;">因此，这不是语法错误，也不是预期的异常/错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当其他工具已经在使用我的节点脚本中定义的http端口（3000）时，该错误向我显示。</font><font style="vertical-align: inherit;">在端口80上运行节点应用程序时，请确保已停止Apache Web服务器（例如）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行Webpack构建时，由于节点不理解</font></font><code>async</code> <code>await</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">旧版本上的关键字，</font><font style="vertical-align: inherit;">我遇到了类似的错误</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我添加了webpack   </font></font><a href="https://www.npmjs.com/package/babel-plugin-transform-async-to-generator" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">babel-plugin-transform-async-generator</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并解决了。</font><font style="vertical-align: inherit;">这用承诺代替了它们。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">伽罗</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在处理WordPress主题时，出现相同的</font></font><code>ELIFECYCLE</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">错误，但输出略有不同：</font></font></p>

<pre><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm ERR！</font><font style="vertical-align: inherit;">达尔文14.5.0</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm ERR！</font><font style="vertical-align: inherit;">argv“ /usr/local/Cellar/node/7.6.0/bin/node”“ / usr / local / bin / npm”“安装”</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm ERR！</font><font style="vertical-align: inherit;">节点v7.6.0</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm ERR！</font><font style="vertical-align: inherit;">npm v3.7.3</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm ERR！</font><font style="vertical-align: inherit;">代码ELIFECYCLE</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm ERR！</font><font style="vertical-align: inherit;">foundationsix@1.0.0安装后：`bower install &amp;&amp; gulp build`</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm ERR！</font><font style="vertical-align: inherit;">退出状态1</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm ERR！ </font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm ERR！</font><font style="vertical-align: inherit;">在foundationsix@1.0.0后安装脚本“ bower install &amp;&amp; gulp build”上失败。</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm ERR！</font><font style="vertical-align: inherit;">确保已安装最新版本的node.js和npm。</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm ERR！</font><font style="vertical-align: inherit;">如果这样做，这很可能是Foundationsix软件包的问题，</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm ERR！</font><font style="vertical-align: inherit;">不与npm本身。</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm ERR！</font><font style="vertical-align: inherit;">告诉作者这在您的系统上失败：</font></font><font></font><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
npm ERR！</font><font style="vertical-align: inherit;">Bower安装&amp;&amp; gulp构建</font></font><font></font>
</pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在又尝试</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">了一次相同的结果之后，我尝试了</font></font><code>bower install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当那成功时，我尝试了</font></font><code>gulp build</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且也</font><font style="vertical-align: inherit;">成功了</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在一切都很好。</font><font style="vertical-align: inherit;">不知道为什么</font></font><code>&amp;&amp;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">失败</font><font style="vertical-align: inherit;">时分别运行每个命令会起作用，</font><font style="vertical-align: inherit;">但是也许其他人会发现此答案很有用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿凯</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您像我一样来到这里，在尝试《</font></font><a href="https://facebook.github.io/react-native/docs/getting-started.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">React入门指南》</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时收到类似的错误之后</font><font style="vertical-align: inherit;">，您可能想知道问题可能是由于未安装Watchman引起的。</font><font style="vertical-align: inherit;">在此处下载它，或使用Homebrew安装它，</font></font><code>brew install watchman</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后重试：</font><a href="https://facebook.github.io/watchman/docs/install.html" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://facebook.github.io/watchman/docs/install.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//facebook.github.io/watchman/docs/install.html</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS：您可能需要先做</font></font><code>brew update</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，这是由于RAM内存不足，照片压缩库无法处理较大的照片。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.03.23</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上是说它未能产生您的进程，不是由于许可而是脚本中的错误。</font></font><a href="https://github.com/npm/npm/blob/448efd0eaa6f97af0889bf47efc543a1ea2f8d7e/lib/utils/lifecycle.js#L208"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">资源</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您执行时没有任何问题</font></font><code>NODE_ENV=production node app.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">吗？</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
