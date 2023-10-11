---
layout: question
title:  -save-dev在npm install grunt是什么意思--save-dev
date:   2020-03-19T04:37:46.000Z
description: 我刚刚开始使用Grunt.js。设置起来非常困难，我正要创建package.json文件。在学习完本教程之后，它说有3种创建package.json文...
img: 
author: 村村LEY
category: question
answer: 6
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚开始使用</font></font><a href="http://gruntjs.com/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Grunt.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">设置起来非常困难，我正要创建</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在学习完本</font></font><a href="http://www.codingcolor.com/javascript/setting-up-a-boilerplate-gruntfile-js/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">教程之后</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，它说有3种创建</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件的方法。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">首先是要做 </font></font><code>npm install grunt --save-dev</code></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是什么</font></font><code>--save-dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">意思呢？</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我试着看，但徒劳无功。</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2366篇《-save-dev在npm install grunt是什么意思--save-dev》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Tony</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我来说，第一个答案似乎有点令人困惑，因此请简短明了：</font></font></p>

<p><code>npm install &lt;package_name&gt;</code><font style="vertical-align: inherit;"></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">默认</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将所有指定的包保存到依赖项中</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">此外，您可以使用一些其他标志来控制在何处以及如何保存它们：</font></font></p>

<p><code>npm install &lt;package_name&gt; --no-save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 防止保存到依赖项。</font></font></p>

<p><code>npm install &lt;package_name&gt; ---save-dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新</font></font><code>devDependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您包中的。</font><font style="vertical-align: inherit;">这些仅用于本地测试和开发。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font><a href="https://docs.npmjs.com/cli/install" rel="nofollow noreferrer"><font style="vertical-align: inherit;">在dcu中</font></a><font style="vertical-align: inherit;">阅读更多内容</font></font><a href="https://docs.npmjs.com/cli/install" rel="nofollow noreferrer"><font style="vertical-align: inherit;"></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">理查德猪猪伽罗</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">来自npm的文档</font></font><code>npm install &lt;package-name&gt; --save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><code>npm install &lt;package-name&gt; --save-dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可以在以下位置找到：</font></font></p>

<p><a href="https://docs.npmjs.com/getting-started/using-a-package.json#the-save-and-save-dev-install-flags" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://docs.npmjs.com/getting-started/using-a-package.json#the-save-and-save-dev-install-flags</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一个</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件声明有关您正在开发的模块的元数据。</font><font style="vertical-align: inherit;">上述两个命令均会修改该</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件。</font></font><code>--save</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将声明已安装的软件包（在本例中为</font></font><code>grunt</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）作为模块的依赖项；</font></font><code>--save-dev</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">会将其声明为模块开发的依赖项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">问问自己：使用我的模块是否需要安装的软件包，还是仅在开发它时才需要？</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小卤蛋小卤蛋</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要添加到Andreas的答案中，您可以使用以下方法仅安装依赖项：</font></font></p>

<pre><code>npm install --production
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小小猿</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">--save-dev：软件包将出现在您的devDependencies中。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="https://docs.npmjs.com/cli/install" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm install docs</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果有人计划在程序中下载和使用您的模块，那么他们可能不希望或不需要下载并构建您使用的外部测试或文档框架。</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">换句话说，当您运行时</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，将安装项目的devDependencies，但不会安装应用程序所依赖的任何软件包的devDependencies。</font><font style="vertical-align: inherit;">此外，将您的应用程序作为依赖项的其他应用程序也不需要安装devDependencies。</font><font style="vertical-align: inherit;">仅在开发应用程序时才需要此类模块（例如grunt，mocha等）。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据</font></font><a href="https://docs.npmjs.com/files/package.json#devdependencies" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">package.json文档</font></font></a></p>

<h3><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：尝试可视化做什么</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：</font></font></h3>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的项目

</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依赖安装

</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依赖安装

</font></font><ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依赖安装</font></font></li>
<li><em><s><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未安装devDependency</font></font></s></em></li>
</ul></li>
<li><em><s><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未安装devDependency</font></font></s></em></li>
</ul></li>
<li><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">devDependency已安装</font></font></strong>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">依赖安装</font></font></li>
<li><em><s><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">未安装devDependency</font></font></s></em></li>
</ul></li>
</ul></li>
</ul></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">宝儿神无</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以在package.json文件中指出（至少）两种类型的软件包依赖项：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用“</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块”属性下，列出</font><font style="vertical-align: inherit;">了</font><em><font style="vertical-align: inherit;">使用</font></em><font style="vertical-align: inherit;">模块</font><font style="vertical-align: inherit;">所需的那些软件包</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">使用npm，您可以通过以下方式将那些依赖项添加到package.json文件中：</font></font></p>

<pre><code>npm install --save packageName
</code></pre></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了帮助</font><font style="vertical-align: inherit;">您</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开发</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">模块而</font><font style="vertical-align: inherit;">需要的那些软件包在</font><font style="vertical-align: inherit;">“ devDependencies”属性下列出。</font><font style="vertical-align: inherit;">这些软件包对于其他人使用该模块不是必需的，但是如果他们想帮助开发模块，则将需要这些软件包。</font><font style="vertical-align: inherit;">使用npm，您可以通过以下方式将那些devDependencies添加到package.json文件中：</font></font></p>

<pre><code>npm install --save-dev packageName
</code></pre></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">梅Jim</span>
            <span class="discuss-time">2020.03.19</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当您使用参数“ --save”时，您的依赖项将进入package.json中的＃1内。</font><font style="vertical-align: inherit;">当您使用参数“ --save-dev”时，您的依赖项将进入package.json中的＃2内。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">1）“依赖项”：生产中的应用程序需要这些软件包。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">2）“ devDependencies”：这些包仅用于开发和测试</font></font></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
