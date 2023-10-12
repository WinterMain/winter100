---
layout: question
title:  “ npm配置设置注册表https //registry.npmjs.org/”在Windows bat文件中不起作用
date:   2020-03-24T02:59:03.000Z
description: 我在Windows 7上创建a.bat，a.bat的内容为：\`echo offnpm config set registry https //reg...
img: 
author: Gil伽罗小宇宙
category: question
answer: 9
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Windows 7上创建a.bat，a.bat的内容为：</font></font></p>

<pre><code>@echo off<font></font>
npm config set registry https://registry.npmjs.org/<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后运行a.bat，但不起作用，我发现“ set”一词是npm和bat的特殊关键字，是否有任何方法可以解决此问题？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第3261篇《“ npm配置设置注册表https //registry.npmjs.org/”在Windows bat文件中不起作用》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">EvaJinJin</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><pre><code>2.name can no longer contain capital letters
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不要在包裹中使用大写字母：</font></font></p>

<pre><code>npm install --save uex
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用这个：</font></font></p>

<pre><code>npm install --save vuex
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无JinJin</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过执行.bat，您将只为该会话设置config，而不是全局设置。</font><font style="vertical-align: inherit;">当您打开另一个cmd提示符并运行</font></font><code>npm install</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该配置时，该会话将不会设置，因此请将您的.bat文件修改为</font></font></p>

<pre><code>@echo off<font></font>
npm config set registry https://registry.npmjs.org/<font></font>
@cmd.exe /K<font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚樱</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>.bat</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如</font></font><a href="https://stackoverflow.com/users/1333329/gntem"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Gntem</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指出的那样，</font><font style="vertical-align: inherit;">您可能无法使用</font><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">更改npm注册表</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">但我知道您需要具有自动更改注册表的能力。</font><font style="vertical-align: inherit;">您可以通过将</font></font><code>.npmrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">配置放在单独的文件中（例如</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npmrc_jfrog</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">和</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npmrc_default</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）来</font></font><code>.bat</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">完成此任务</font><font style="vertical-align: inherit;">，并让</font><font style="vertical-align: inherit;">文件执行复制任务。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如（在Windows中）：您</font></font><em><code>default_registry.bat</code></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将拥有</font></font></p>

<pre><code>xcopy /y npmrc_default .npmrc
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">你</font></font><em><code>jfrog_registry.bat</code></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将有</font></font></p>

<pre><code>xcopy /y npmrc_jfrog .npmrc
</code></pre>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font></strong> <code>/y</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">禁止提示您确认要覆盖现有目标文件。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这样可以确保将所有配置属性（</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注册表，代理，apiKeys等</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）复制到</font></font><code>.npmrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以</font></font><a href="https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/xcopy" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此处</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">阅读有关xcopy的更多信息</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在4.4.1版中，您可以使用：</font></font></p>

<pre><code>npm config set @myco:registry http://reg.example.com
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">其中，@ myco是您的包装范围。</font><font style="vertical-align: inherit;">您可以通过以下方式安装软件包：</font></font></p>

<pre><code>npm install @myco/my-package
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">参考：</font><a href="https://docs.npmjs.com/misc/scope" rel="noreferrer"><font style="vertical-align: inherit;">https</font></a><font style="vertical-align: inherit;"> : </font></font><a href="https://docs.npmjs.com/misc/scope" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">//docs.npmjs.com/misc/scope</font></font></a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用.bat进行更改，确保先运行call命令，希望这对以后制作类似.bat命令的人有所帮助。</font></font></p>

<pre><code>call npm config set registry https://registry.npmjs.org/
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">达蒙樱梅</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您不应该使用</font></font><code>.bat</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件来</font><font style="vertical-align: inherit;">更改npm注册表</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">而是尝试使用修改</font></font><code>.npmrc</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件，</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">文件是的配置</font></font><code>npm</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">更改注册表的正确命令是</font></font></p>

<p><code>npm config set registry &lt;registry url&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以使用</font></font><code>npm help config</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">command </font><font style="vertical-align: inherit;">查找更多信息</font><font style="vertical-align: inherit;">，还可以在以</font></font><code>.bat</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这种方式</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">时以及是否运行</font><font style="vertical-align: inherit;">文件</font><font style="vertical-align: inherit;">时检查特权</font><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们还可以运行npm install并带有</font></font><code>registry</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">多个自定义注册表URL的选项。</font></font></p>

<pre><code>npm install --registry=https://registry.npmjs.org/ <font></font>
npm install --registry=https://custom.npm.registry.com/ <font></font>
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小哥达蒙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">可能我来不及回答。</font><font style="vertical-align: inherit;">但是，如果有人需要它，那么跟踪效果很好，因为我已经使用了很多次。</font></font></p>

<pre><code>npm config set registry=https://registry.npmjs.com/
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.24</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在npm版本3.7.3上</font></font></p>

<p><code>npm set registry=http://whatever/</code></p></div>
        </div></div>
    {% endraw %}
  </div>
<div>
