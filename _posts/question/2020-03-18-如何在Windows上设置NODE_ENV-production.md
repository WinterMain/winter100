---
layout: question
title:  如何在Windows上设置NODE_ENV = production？
date:   2020-03-18T08:53:48.000Z
description: 在Ubuntu中，这非常简单；我可以使用以下方式运行该应用程序：$ NODE_ENV=production node myapp/app.js但...
img: 
author: Jim西门
category: question
answer: 13
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Ubuntu中，这非常简单；</font><font style="vertical-align: inherit;">我可以使用以下方式运行该应用程序：</font></font></p>

<pre><code>$ NODE_ENV=production node myapp/app.js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，这在Windows上不起作用。</font><font style="vertical-align: inherit;">是否可以在其中配置属性的配置文件？</font></font></p></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第2072篇《如何在Windows上设置NODE_ENV = production？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西里飞云</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果NODE_ENV或任何其他环境变量未提供正确的值，请重新启动VS代码。</font><font style="vertical-align: inherit;">重新启动后应该可以使用。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁蛋蛋宝儿</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用npm脚本运行不含“ &amp;&amp;”的gulp任务</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">NODE_ENV = testcases npm运行seed-db</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">村村Mandy</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这不会设置变量，但是在许多情况下很有用。</font><font style="vertical-align: inherit;">我不建议将其用于生产，但是如果您正在使用npm，那应该没问题。</font></font></p>

<pre><code>npm install --production
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Gil</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您使用的是GITBASH终端 
 </font></font><code>"set NODE_ENV=production"</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 
不起作用，您可以输入“ export”</font></font><code>NODE_ENV=production"</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Green小小</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Powershell类型中的第一个</font></font></p>

<pre><code>$env:NODE_ENV="production"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后输入 </font></font></p>

<pre><code>node fileName.js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将完美显示所有输出。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tom卡卡西村村</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要在PowerShell中运行您的应用程序（因为</font></font><code>&amp;&amp;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不允许这样做）：</font></font></p>

<pre><code>($env:NODE_ENV="production") -and (node myapp/app.js)
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请注意，服务器正在执行的操作的文本输出被抑制，因此我不确定这是否可以解决。</font><font style="vertical-align: inherit;">（扩展@jsalonen的答案。）</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三村村蛋蛋</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是非命令行方法：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Windows 7或10中，在开始菜单搜索框中键入环境，然后选择编辑系统环境变量。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，导航到控制面板\系统和安全性\系统，然后单击高级系统设置。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将打开“系统属性”对话框，并选择“高级”选项卡。</font><font style="vertical-align: inherit;">在底部，您将看到一个环境变量...按钮。</font><font style="vertical-align: inherit;">点击这个。</font></font></p>

<p><a href="https://i.stack.imgur.com/mOIGK.png" rel="noreferrer"><img src="https://i.stack.imgur.com/mOIGK.png" alt="系统对话框"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将打开“环境变量”对话框。  </font></font></p>

<p><a href="https://i.stack.imgur.com/oKcWy.png" rel="noreferrer"><img src="https://i.stack.imgur.com/oKcWy.png" alt="环境变量对话框"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在底部的“系统变量”下，选择“新建...”。这将打开“新系统变量”对话框。</font></font></p>

<p><a href="https://i.stack.imgur.com/PxkJ4.png" rel="noreferrer"><img src="https://i.stack.imgur.com/PxkJ4.png" alt="在此处输入图片说明"></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输入变量名称和值，然后单击确定。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您将需要关闭所有cmd提示符并重新启动服务器，以使新变量可用于process.env。</font><font style="vertical-align: inherit;">如果仍然没有显示，请重新启动计算机。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西神奇</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只是为了澄清一下，对于其他可能正在拔头发的人来说……</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果您</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Windows</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上使用</font><strong><font style="vertical-align: inherit;">git bash</font></strong><font style="vertical-align: inherit;">，</font></font><code>set node_env=production&amp;&amp; node whatever.js</code> <strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">则似乎无法正常工作</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">而是使用本机cmd。</font><font style="vertical-align: inherit;">然后，</font></font><code>set node_env=production&amp;&amp; node whatever.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">按预期</font><font style="vertical-align: inherit;">使用</font><font style="vertical-align: inherit;">作品。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我的用例：  </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我在Windows上开发，因为我的工作流程是</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很多</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">快，但我需要确保我的应用程序的开发专用的中间件并没有在生产环境中射击。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">StafanL</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我写了一个模块</font></font><a href="https://github.com/laggingreflex/win-node-env" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">win-node-env</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，您可以像在* nix中一样运行命令。</font></font></p>

<pre><code>NODE_ENV=production node myapp/app.js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它通过创建一个</font></font><code>NODE_ENV.cmd</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">设置</font></font><code>NODE_ENV</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">环境变量并使用其余命令及其arg生成子进程的子进程来工作。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需安装（全局），然后运行您的npm脚本命令，它将自动使它们工作。</font></font></p>

<pre><code>npm install -g win-node-env
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神奇Sam理查德</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果可以在Windows上启动Node.js的调用所在的行中设置参数，那将是理想的选择。</font><font style="vertical-align: inherit;">仔细查看以下内容，并严格按照说明运行它：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您有以下两种选择：</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在命令行中：</font></font></p>

<pre><code>set NODE_ENV=production&amp;&amp;npm start
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要么</font></font></p>

<pre><code>set NODE_ENV=production&amp;&amp;node index.js
</code></pre></li>
<li><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Windows上运行的技巧是您需要删除“ &amp;&amp;”之前和之后的空格。</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">使用下面的start_windows（请参见下文）配置了package.json文件。</font><font style="vertical-align: inherit;">然后在命令行中运行“ npm run start_windows”。</font></font></p>

<pre><code>//package.json<font></font>
<font></font>
"scripts": {<font></font>
  "start": "node index.js"<font></font>
  "start_windows": "set NODE_ENV=production&amp;&amp;node index.js"<font></font>
}<font></font>
</code></pre></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">小胖Tony</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在PowerShell中：</font></font></p>

<pre><code>$env:NODE_ENV="production"
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Davaid泡芙</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我刚刚找到了一个不错的Node.js程序包，它可以使用跨平台的独特语法对定义环境变量有很大帮助。</font></font></p>

<p><a href="https://www.npmjs.com/package/cross-env" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://www.npmjs.com/package/cross-env</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它允许您编写如下内容：</font></font></p>

<pre><code>cross-env NODE_ENV=production my-command
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">哪个很方便！</font><font style="vertical-align: inherit;">不再有Windows或Unix专用命令！</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝Itachi</span>
            <span class="discuss-time">2020.03.18</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Windows的当前版本使用Powershell作为默认外壳，因此请使用：</font></font></p>

<pre><code>$env:NODE_ENV="production"
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">根据下面的@jsalonen的答案。</font><font style="vertical-align: inherit;">如果您使用的是CMD（不再维护），请使用</font></font></p>

<pre><code>set NODE_ENV=production
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这应该在您打算运行Node.js应用程序的命令提示符下执行。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">上一行将在执行命令的命令提示符处设置环境变量NODE_ENV。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要全局设置环境变量，以使它们仅在单个命令提示符后仍然存在，您可以在“控制面板”的“系统”中找到该工具（或通过在“开始”菜单的搜索框中键入“ environment”）。</font></font></p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
