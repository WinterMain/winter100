---
layout: question
title:  如何修复ReferenceError：节点中未定义primordials
date:   2020-03-17T09:11:09.000Z
description: 我已经通过npm install安装了节点模块，然后尝试在命令提示符下执行gulp sass-watch。之后，我得到以下回应。\[18 18 32\] ...
img: 
author: Green老丝Itachi
category: question
answer: 24
tags: node.js CSS
topic: CSS
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经通过npm install安装了节点模块，然后尝试在命令提示符下执行gulp sass-watch。</font><font style="vertical-align: inherit;">之后，我得到以下回应。</font></font></p>

<pre><code>[18:18:32] Requiring external module babel-register<font></font>
fs.js:27<font></font>
const { Math, Object, Reflect } = primordials;<font></font>
                                  ^<font></font>
<font></font>
ReferenceError: primordials is not defined<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在gulp sass-watch之前尝试过这个</font></font></p>

<pre><code>npm -g install gulp-cli
</code></pre></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1927篇《如何修复ReferenceError：节点中未定义primordials》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙蛋蛋</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用的是节点v12.13.1，因此我已降级到v10.19.0，之后工作正常。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易逆天</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载节点并使用给定的链接重新安装它。
</font></font><a href="https://nodejs.org/en/download/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://nodejs.org/en/download/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">ProL</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有同样的问题，但我已经解决了这个问题。</font><font style="vertical-align: inherit;">我建议您首先，首先确保</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm安装</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您没有问题。</font><font style="vertical-align: inherit;">然后降级版本节点和gulp。</font><font style="vertical-align: inherit;">我使用版本节点10.16.1和gulp 3.9.1。</font><font style="vertical-align: inherit;">为了降低你的吞咽能力，你可以写</font></font></p>

<pre><code>npm install gulp@^3.9.1
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi神无</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的问题。</font><font style="vertical-align: inherit;">我为我努力的工作：-1）。</font><font style="vertical-align: inherit;">检查NODE和GULP的版本（节点v12和gulp小于v4的组合不起作用）2）。</font><font style="vertical-align: inherit;">我通过以下命令降级npm版本：#sudo npm install -gn #sudo n 10.16.0正常，然后按照您的consol的说明进行操作</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村老丝</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您尝试安装</font></font><code>semantic-ui</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并且发生以下错误，请尝试</font></font><code>js(13.5.0)</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从nodejs.org </font><font style="vertical-align: inherit;">下载</font><font style="vertical-align: inherit;">具有最新功能</font><font style="vertical-align: inherit;">的最新版本的node </font><font style="vertical-align: inherit;">。此外，除了尝试使用npm install语义外，您还应该添加链接（可以从</font></font><a href="https://cdnjs.com/libraries/semantic-ui" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">cdnjs中</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">找到）</font><a href="https://cdnjs.com/libraries/semantic-ui" rel="nofollow noreferrer"><font style="vertical-align: inherit;">链接</font></a><font style="vertical-align: inherit;">到</font></font><code>index.html</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">的标题</font><font style="vertical-align: inherit;">。祝</font><font style="vertical-align: inherit;">您</font><font style="vertical-align: inherit;">好运！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村小小十三</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过降级解决从Node.js的版本</font></font><code>12.14.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">到</font></font><code>10.18.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并重新安装node_modules</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇斯丁</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你在这里有两个选择 </font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">升级到gulp 4或其他 </font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">降级到较早的节点版本。</font></font></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJinGil</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您是否遇到ReferenceError：未定义primordials尝试运行gulp时出错？</font><font style="vertical-align: inherit;">也许您正在使用gulp v3和v12节点，这就是问题的根源。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问题是，gulp v3在节点v12下不起作用（到目前为止），因为它依赖于graceful-fs@^3.0.0来修补Node的fs模块，并且该修补程序在节点v12之前就可以正常工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ReferenceError：未定义primordials的解决方案：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将gulp升级到v4。</font><font style="vertical-align: inherit;">此解决方案将解决您的错误。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将节点降级到v11以解决此错误。</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要将graceful-fs固定到已知在Node v12下工作的4.2.2版本–该选项在下面解释了该选项对我有用，因此，我建议您使用此选项。</font></font></p></li>
</ol>

<p><a href="https://blog.icetutor.com/how-to-fix-referenceerror-primordials-is-not-defined-error/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是选项3的示例</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯理查德番长</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将节点升级到版本12后，我遇到此错误，该版本不适用于Gulp 3.9.1。</font><font style="vertical-align: inherit;">关于我的gulpfile.js并不那么复杂的事实，我决定使用</font></font><a href="https://www.sitepoint.com/how-to-migrate-to-gulp-4/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本文</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">升级到Gulp 4 </font><font style="vertical-align: inherit;">，它进行得很好，并且比我想象的要容易得多。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">泡芙路易</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因为使用s3 npm包时也会出现此错误。</font><font style="vertical-align: inherit;">所以问题出在graceful-fs软件包上，我们需要对其进行更新。</font><font style="vertical-align: inherit;">它在4.2.3上工作正常。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，只需查看它在日志跟踪中显示的npm软件包，并相应地将graceful-fs更新为4.2.3。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">逆天理查德</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我有用的是在npm安装期间使用python2。 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install --python =〜/ venv / bin / python</font></font></p>
</blockquote></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐米亚</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Gulp 3的Node 12/13上也遇到错误，移至Node 11正常</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GO小胖GO</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">升级到4.0.1，并确保迁移</font></font><a href="https://fettblog.eu/gulp-4-parallel-and-series/#migration" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://fettblog.eu/gulp-4-parallel-and-series/#migration</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">SamStafan十三</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Gulp在Nodejs 11及更高版本中出现了问题。</font><font style="vertical-align: inherit;">卸载当前节点版本，然后重新安装v10.15.1，此处是该版本的链接。</font><font style="vertical-align: inherit;">这对我有帮助，也可以解决您的问题。</font></font></p>

<p><a href="https://nodejs.org/download/release/v10.15.1/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://nodejs.org/download/release/v10.15.1/</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋GO</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于那些正在使用</font></font><code>yarn</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<pre><code>yarn global add n<font></font>
n 11.15.0<font></font>
yarn install # have to install again<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚小小神乐</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Windows 10上通过从添加或删除程序-&gt; Node.js卸载节点来解决此问题</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我从</font><a href="https://nodejs.org/download/release/v11.15.0/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https://nodejs.org/download/release/v11.15.0/</font></a><font style="vertical-align: inherit;">安装了11.15.0版</font></font><a href="https://nodejs.org/download/release/v11.15.0/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您正在运行Windows 64位，请选择node-v11.15.0-x64.msi。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里老丝</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Windows 10上遇到此错误。原来是一个损坏的漫游配置文件。 </font></font></p>

<pre class="lang-none prettyprint-override"><code>npm ERR! node v12.4.0<font></font>
npm ERR! npm  v3.3.12<font></font>
<font></font>
npm ERR! primordials is not defined<font></font>
npm ERR!<font></font>
npm ERR! If you need help, you may report this error at:<font></font>
npm ERR!     &lt;https://github.com/npm/npm/issues&gt;<font></font>
<font></font>
npm ERR! Please include the following file with any support request:<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font><code>C:\Users\{user}\AppData\Roaming\npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹解决了我的问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖GO</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">降级为节点稳定版为我解决了此问题，因为在升级到节点12之后发生了此问题</font></font></p>

<p><code>sudo n 10.16.0</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三GreenTony</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这可能来得很晚，但是对于仍然有兴趣在使用最新的gulp ^ 4.0时保留其Node v12的任何人，请执行以下步骤：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下命令更新命令行界面（仅出于预防目的）：</font></font></p>

<pre><code>npm i gulp-cli -g
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">添加/更新</font></font><code>gulp</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json的underdepends部分</font></font></p>

<pre><code>"dependencies": {<font></font>
  "gulp": "^4.0.0"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font><code>package-lock.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">档案</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除你的</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件夹</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最后，运行</font></font><code>npm i</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以正确的参数为Gulp ^ 4.0升级并重新创建全新的node_modules文件夹和package-lock.json文件</font></font></p>

<pre><code>npm i
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Gulp.js 4.0引入了</font></font><code>series()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>parallel()</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法来组合任务，而不是Gulp 3中使用的数组方法，因此您在旧</font></font><code>gulpfile.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本中</font><font style="vertical-align: inherit;">可能会或可能不会遇到错误</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要了解有关应用这些新功能的更多信息，此</font></font><a href="https://www.sitepoint.com/how-to-migrate-to-gulp-4/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">站点</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">确实做到了合理：</font><a href="https://www.sitepoint.com/how-to-migrate-to-gulp-4/" rel="nofollow noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://www.sitepoint.com/how-to-migrate-to-gulp-4/" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//www.sitepoint.com/how-to-migrate-to-gulp-4/</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有帮助，请留下重击</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">MandyEva</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有同样的错误，终于修复程序更新的包时，然后提到的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">同一节点引擎版本和故宫的版本</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">中</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，因为它是在我的本地工作系统。</font></font></p>

<pre><code> "engines": {<font></font>
    "node": "10.15.3",<font></font>
    "npm": "6.9.0"<font></font>
 }<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在heroku上部署时出现此错误。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以获得更多结帐</font></font><a href="https://devcenter.heroku.com/articles/nodejs-support#specifying-a-node-js-version" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Heroku支持</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙阳光</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了同样的错误。</font><font style="vertical-align: inherit;">我怀疑您正在使用节点12和gulp3。该组合不起作用：</font><a href="https://github.com/gulpjs/gulp/issues/2324" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/gulpjs/gulp/issues/2324" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/gulpjs/gulp/issues/2324</font></font></a> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从1月开始的以前的解决方法也不起作用：</font><a href="https://github.com/gulpjs/gulp/issues/2246" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/gulpjs/gulp/issues/2246" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/gulpjs/gulp/issues/2246</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">解决方案：升级到gulp 4或降级到较早的节点。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁阳光</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下命令并安装</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">节点v11.15.0</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：  </font></font></p>

<pre><code>npm install -g n<font></font>
<font></font>
sudo n 11.15.0<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会解决 </font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ReferenceError：节点中未定义primordials</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自@Terje Norderhaug @Tom Corelis的引用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三Itachi</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用以下命令进行安装</font></font><code>node v11.15.0</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><code>gulp v3.9.1</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>npm install -g n<font></font>
<font></font>
sudo n 11.15.0<font></font>
<font></font>
npm install gulp@^3.9.1<font></font>
npm install <font></font>
npm rebuild node-sass<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将解决此问题：</font></font></p>

<pre><code>ReferenceError: primordials is not defined in node
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯老丝</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><a href="https://github.com/nvm-sh/nvm" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NVM</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">管理您正在使用的节点版本，运行以下命令对我有用：</font></font></p>

<pre class="lang-sh prettyprint-override"><code>$ cd /to/your/project/<font></font>
$ nvm install lts/dubnium<font></font>
$ nvm use lts/dubnium<font></font>
$ yarn upgrade # or `npm install`<font></font>
</code></pre></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
