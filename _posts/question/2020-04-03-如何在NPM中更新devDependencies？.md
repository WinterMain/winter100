---
layout: question
title:  如何在NPM中更新devDependencies？
date:   2020-04-03T04:11:23.000Z
description: npm update似乎只是更新其中的软件包dependencies，但是devDependencies。现在，您可以devDependencies通...
img: 
author: 村村番长
category: question
answer: 7
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><code>npm update</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">似乎只是更新其中的软件包</font></font><code>dependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但是</font></font><code>devDependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">现在，您可以</font></font><code>devDependencies</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过运行</font><font style="vertical-align: inherit;">进行安装</font></font><code>npm install .</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，但这不适用于</font></font><code>npm update .</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有任何想法吗？</font></font></p></div>
    {% endraw %}
  </div>
  <p style="height: 0;width:0;overflow: hidden;"> 第4007篇《如何在NPM中更新devDependencies？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对我有用的是安装这样的单个开发人员依赖项</font></font></p>

<pre><code>npm install react-test-renderer@15.6.1 --save --only=dev
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无米亚</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">强制执行更新的一种（慢速）方法是删除node_modules目录，然后</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">再次执行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是该</font></font><code>npm update</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令的</font><font style="vertical-align: inherit;">一个已知错误，</font><font style="vertical-align: inherit;">已在的开发分支中进行了修复</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请参见此处：</font><a href="https://github.com/isaacs/npm/pull/3863" rel="nofollow"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> :
 </font></font><a href="https://github.com/isaacs/npm/pull/3863" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//github.com/isaacs/npm/pull/3863</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它应该很快就会安装在npm的最新稳定版本上。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯阳光</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是过时的npm版本，则可能是问题所在。</font><font style="vertical-align: inherit;">因此，在执行任何其他命令之前：</font></font></p>

<pre><code>sudo npm install npm -g
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或（如果上述方法不起作用）：</font></font></p>

<pre><code>sudo npm update npm -g
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">重新启动</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">控制台（以使更改生效）。</font><font style="vertical-align: inherit;">现在，您可以检查新的</font></font><code>npm --version</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，如果是最新的，请执行：</font></font></p>

<pre><code>npm update
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或（如果您愿意）：</font></font></p>

<pre><code>npm update --save-dev
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装npm-check-updates（</font></font><a href="https://www.npmjs.org/package/npm-check-updates"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.org/package/npm-check-updates</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），然后跳入您的项目文件夹并运行：</font></font></p>

<pre><code>npm-check-updates
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并更新并保存对package.json文件的更改：</font></font></p>

<pre><code>npm-check-updates -u
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">JinJin</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">除本地模块外，还要更新package.json，请运行</font></font></p>

<pre><code>npm update --save-dev
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，使用相同的命令来节省时间</font></font></p>

<pre><code>npm update -D
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过以下方式查看更新的完整详细信息或任何与此相关的命令</font></font></p>

<pre><code>npm help &lt;cmd&gt;
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">飞云飞云</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我遇到了与OP相同的问题，但没有找到解决方案，因此我决定编写一个Grunt插件，该插件将自动更新我的devDependencies。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它在Github上，我很乐意得到一些意见和合作，以使其成为NPM尚未提供的最佳工具。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">基本上，它将使用一个简单的Grunt Task自动更新您过时的开发依赖项。</font></font></p>

<p><a href="https://github.com/pgilad/grunt-dev-update" rel="nofollow"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://github.com/pgilad/grunt-dev-update</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无</span>
            <span class="discuss-time">2020.04.03</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当前版本的NPM（1.3.11）不再包含此问题。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新适用于： </font></font><code>npm update</code></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
