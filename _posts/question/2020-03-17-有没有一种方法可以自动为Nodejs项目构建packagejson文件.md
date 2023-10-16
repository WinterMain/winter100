---
layout: question
title:  有没有一种方法可以自动为Node.js项目构建package.json文件
date:   2020-03-17T10:02:22.000Z
description: 是否应该手动编辑package.json？像npm这样的程序难道不只是浏览文件，查看“ require”语句，然后使用该语句将必要的条目放入package...
img: 
author: 西门卡卡西
category: question
answer: 8
tags: json Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">是否应该手动编辑package.json？</font><font style="vertical-align: inherit;">像npm这样的程序难道不只是浏览文件，查看“ require”语句，然后使用该语句将必要的条目放入package.json文件中吗？</font><font style="vertical-align: inherit;">有这样的程序吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1953篇《有没有一种方法可以自动为Node.js项目构建package.json文件》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">猪猪阳光</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用命令npm init -f生成package.json文件，然后在每个命令之后使用--save，以便每个模块将自动在package.json内部进行更新，例如：npm install express --save</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅小哥</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以</font><font style="vertical-align: inherit;">通过3个简单的步骤在节点终端上</font><font style="vertical-align: inherit;">使用</font></font><a href="http://yeoman.io/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Yeoman-Modern Web App脚手架工具</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，您需要安装yo和其他必需的工具：</font></font></p>

<pre><code>$ npm install -g yo bower grunt-cli gulp
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要搭建Web应用程序，请安装</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">generator-webapp</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> generator：</font></font></p>

<pre><code>$ npm install -g generator-webapp  // create scaffolding 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行哟，...您都完成了： </font></font></p>

<pre><code>$ yo webapp  // create scaffolding 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Yeoman可以为整个Web应用程序或Controllers and Models编写样板代码。</font><font style="vertical-align: inherit;">它可以启动实时预览Web服务器进行编辑和编译。</font><font style="vertical-align: inherit;">您不仅可以运行单元测试，最小化和连接代码，优化图像等等，还可以...</font></font></p>

<p><strong><a href="http://yeoman.io/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Yeoman（yo）</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> -脚手架工具，提供了框架特定的脚手架生态系统，称为生成器，可用于执行前面提到的一些繁琐的任务。</font></font></p>

<p><strong><a href="http://gruntjs.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Grunt</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> / </font></font><a href="http://gulpjs.com/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">gulp-</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于构建，预览和测试项目。</font></font></p>

<p><strong><a href="http://bower.io/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Bower-</font></font></a></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用于依赖性管理，因此您不再需要手动下载前端库。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin阿飞番长</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据Pylinux的回答，以下是Windows操作系统的解决方案，</font></font></p>

<pre><code>dir node_modules &gt; abc.txt<font></font>
FOR /F %k in (abc.txt) DO npm install --save<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望能帮助到你。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇老丝</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用package.json文件</font><font style="vertical-align: inherit;">了解您的node.js项目。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用</font></font><code>npm init</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">生成的package.json文件为您服务！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它与npm捆绑在一起。</font><font style="vertical-align: inherit;">在此处阅读其文档：</font><a href="https://docs.npmjs.com/cli/init" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://docs.npmjs.com/cli/init" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//docs.npmjs.com/cli/init</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，还有一个官方工具可用于以编程方式生成此文件：</font><a href="https://github.com/npm/init-package-json" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://github.com/npm/init-package-json" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/npm/init-package-json</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">L理查德</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行</font></font><code>npm init -y</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使您</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有所有默认值。
</font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
然后，您可以进行相应的更改</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，
 </font></font><br><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
这样可以避免多次按</font></font><code>enter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下命令来</font><font style="vertical-align: inherit;">节省时间：</font></font><code>npm init</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖蛋蛋</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><code>npm init</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">创建package.json文件，然后使用 </font></font></p>

<p><code>ls node_modules/ | xargs npm install --save</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">填写您在node_modules文件夹中的模块。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：@paldepind指出第二个命令是多余的，因为</font></font><code>npm init</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在自动添加您在node_modules /文件夹中的内容。</font><font style="vertical-align: inherit;">我不知道是否一直都是这种情况，但至少现在，它不需要第二个命令就可以工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小宇宙Sam</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令行</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>npm init
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将创建package.json文件 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要将依赖项下的软件包安装，更新和卸载到package.json文件中： </font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令行</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>npm install &lt;pkg&gt;@* --save 
</code></pre>

<p>will automatically add the latest version for the package under dependencies into           package.json file  </p>

<p>EX: </p>

<pre><code>npm install node-markdown@* --save
</code></pre>

<p><strong>Command line</strong>: </p>

<pre><code>npm install &lt;pkg&gt; --save
</code></pre>

<p>also will automatically add the latest version for the package under dependencies into package.json file</p>

<p><strong>if</strong> you need specific version for a package use this <strong>Command line</strong>:</p>

<pre><code>npm install &lt;pkg&gt;@&lt;version&gt; --save
</code></pre>

<p>will automatically add specific version of package under dependencies into package.json file</p>

<p>EX:</p>

<pre><code>npm install koa-views@1.0.0 --save
</code></pre>

<p><strong>if</strong> you need specific range of version for a package use this <strong>Command line</strong>:</p>

<pre><code>npm install &lt;pkg&gt;@&lt;version range&gt;
</code></pre>

<p>will automatically add the latest version for the package between range of version under dependencies into package.json file</p>

<p>EX:</p>

<pre><code>npm install koa-views@"&gt;1.0.0 &lt;1.2.0" --save
</code></pre>

<p><strong>For</strong> more details about how to write version for package <a href="https://www.npmjs.org/doc/files/package.json.html#dependencies">npm Doc</a>  </p>

<p><strong>Command line</strong>:</p>

<pre><code>npm update --save
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会将软件包更新为package.json文件，并将依赖项下所有软件包的更新版本自动添加到package.json文件中</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令行</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></p>

<pre><code>npm uninstall &lt;pkg&gt; --save
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会自动将软件包从依赖关系中删除到package.json文件中，并从node_module文件夹中删除软件包 </font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">GOSam</span>
            <span class="discuss-time">2020.03.17</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先，运行</font></font></p>

<pre><code>npm init
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...将问您几个</font><font style="vertical-align: inherit;">有关您的项目/软件包的</font><font style="vertical-align: inherit;">问题（</font></font><a href="https://www.npmjs.org/doc/json.html" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请先阅读本节</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），然后为您生成一个package.json文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，一旦有了package.json文件，请使用</font></font></p>

<pre><code>npm install &lt;pkg&gt; --save
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>npm install &lt;pkg&gt; --save-dev
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...安装依赖项并将其自动添加到您</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">的</font></font><code>dependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">列表中。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（注意：您可能需要手动调整依赖项的版本范围。）</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
