---
layout: question
title:  为什么npm install说我有未满足的依赖关系？
date:   2020-03-17T10:02:00.000Z
description: 我有一个节点包。当我npm install从软件包根目录运行时，它会安装很多东西，但是会打印出几条如下所示的错误消息：  npm WARN未满足依赖...
img: 
author: Pro小胖
category: question
answer: 14
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有一个节点包。</font><font style="vertical-align: inherit;">当我</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从软件包根目录</font><font style="vertical-align: inherit;">运行时</font><font style="vertical-align: inherit;">，它会安装很多东西，但是会打印出几条如下所示的错误消息：</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm WARN未满足依赖项/ Users / seanmackesey / google_drive / code / explore / generator / node_modules / findup-sync / node_modules / glob需要graceful-fs@'~1.2.0'但会加载</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我一定对确切的</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">功能</font><font style="vertical-align: inherit;">感到困惑</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">如果它检测到依赖性，是否应该安装它？</font><font style="vertical-align: inherit;">在什么情况下会给我这样的错误消息，我该如何解决依赖关系？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1952篇《为什么npm install说我有未满足的依赖关系？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry路易小卤蛋</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">就我而言，npm的更新解决了它。</font></font></p>

<pre><code>sudo npm install -g npm
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanL</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意您的Angular版本，如果您在angular 2.xx下工作，那么也许您需要升级到angular 4.xx</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一些依赖需要角度4</font></font></p>

<p><a href="https://coursetro.com/posts/code/55/How-to-Install-an-Angular-4-App" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是有关如何安装angular 4或更新项目的教程。</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi小宇宙</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将安装中的所有软件包</font></font><code>npm-shrinkwrap.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果未在中预先设置，则</font><font style="vertical-align: inherit;">可能会忽略中的软件包</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您的项目有个</font></font><code>npm-shrinkwrap.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请确保您</font></font><code>npm shrinkwrap</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">每次添加添加/删除/更改时都</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">以重新生成它</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙GilMandy</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在安装react软件包时遇到了这个问题，这对我有用：
     </font></font><code>npm install --save &lt;package causing this error&gt;</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿凯</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">类似的事情，我会再增加一个步骤。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，在npm版本&gt; 1.4.9上，“ npm install”确实会安装devDependencies。</font><font style="vertical-align: inherit;">首先尝试删除现有模块和缓存：</font></font></p>

<pre><code>remove node_modules $ rm -rf node_modules/<font></font>
run $ npm cache clean<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后尝试：</font></font></p>

<pre><code>npm install --dev<font></font>
npm update --dev<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这至少将解决递归依赖性解析。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">NearMandy</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试图在运行的自动部署系统上工作</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，所以很多这些解决方案在自动化方面对我不起作用。</font><font style="vertical-align: inherit;">我无法删除/重新创建，</font></font><code>node_modules/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也无法轻松更改Node.js版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我最终运行</font></font><code>npm shrinkwrap</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-将</font></font><code>npm-shrinkwrap.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">到我的部署包中，然后从那里运行安装。</font><font style="vertical-align: inherit;">那为我解决了问题；</font><font style="vertical-align: inherit;">通过使用rinklewrap文件作为“帮助器”，npm似乎能够找到正确的软件包并为我安装了它们。</font><font style="vertical-align: inherit;">（Shrinkwrap也具有其他功能，但这是我在特定情况下所需的功能）。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">LEY宝儿神奇</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在安装React Native CLI时遇到了类似的问题。</font></font><code>/node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读此处的答案后</font><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">我</font><font style="vertical-align: inherit;">不确定</font><font style="vertical-align: inherit;">应该删除</font><font style="vertical-align: inherit;">哪个</font><font style="vertical-align: inherit;">目录。</font><font style="vertical-align: inherit;">我终于跑了</font></font></p>

<p><code>npm update -g</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并能够在此之后安装该软件包。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙神乐Mandy</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这为我解决了：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据错误</font><font style="vertical-align: inherit;">更正中的版本号</font><font style="vertical-align: inherit;">；</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">删除</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（</font></font><code>rm -rf node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）;</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新运行</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重复这些步骤，直到没有更多错误为止。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva古一</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我运行</font></font><code>npm list</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并安装了列为UNMET DEPENDENCY的所有软件包</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<p><code>├── UNMET DEPENDENCY css-loader@^0.23.1</code> <br>
<code>npm install css-loader@^0.23.1</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西猿</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上面的答案即使在删除</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">目录</font><font style="vertical-align: inherit;">后也无法完全帮助我</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">下面的命令终于帮助了我： </font></font></p>

<pre><code>npm config set registry http://registry.npmjs.org/
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，这会通过不安全的HTTP连接拉动节点模块。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Src：</font><a href="https://stackoverflow.com/a/13119867/4082503"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;">：</font></font><a href="https://stackoverflow.com/a/13119867/4082503"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//stackoverflow.com/a/13119867/4082503</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门樱Eva</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于每个</font></font><code>-- UNMET PEER DEPENDENCY</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，对于前。</font></font><code>-- UNMET PEER DEPENDENCY rxjs@5.0.0-rc.2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，安装那个依赖，</font></font><code>npm install --save rxjs@5.0.0-rc.2</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">直到没有了</font></font><code>UNMET DEPENDENCIES</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">祝好运。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">路易Harry</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将NPM升级到最新版本可以大大帮助您。</font><font style="vertical-align: inherit;">dule在上面的回答中可以正确地说，依赖管理有点破损，但是看来这主要是针对npm的较旧版本。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该命令</font></font><code>npm list</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为您提供了所有已安装的列表</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">当我从1.4.2版本升级到2.7.4版本时，以前标记过的许多模块</font></font><code>WARN unmet dependency</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不再被这样指出。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要更新npm，您应该</font></font><code>npm install -g npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在MacOSX或Linux上</font><font style="vertical-align: inherit;">键入</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">在Windows上，我发现重新下载并重新运行nodejs安装程序是更新npm的更有效方法。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva小哥理查德</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通过使用以下命令行解决了该问题 </font></font></p>

<ul>
<li><code>$ rm -rf node_modules/</code> </li>
<li><code>$ sudo npm update -g npm</code></li>
<li><code>$ npm install</code></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">乐猴子樱</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在WIFI期间WIFI掉线的时候我发生了</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">删除</font></font><code>node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并重新运行</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修复它。</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
