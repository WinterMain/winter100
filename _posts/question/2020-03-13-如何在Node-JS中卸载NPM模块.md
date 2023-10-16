---
layout: question
title:  如何在Node JS中卸载NPM模块？
date:   2020-03-13T09:53:47.000Z
description: 正如公知的，任何NPM模块可以通过运行一个简单的命令被安装：npm install <module_name>。我已经安装了一些不再使用的模块，我只想...
img: 
author: Harry乐Gil
category: question
answer: 21
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">正如公知的，任何NPM模块可以通过运行一个简单的命令被安装：</font></font><code>npm install &lt;module_name&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我已经安装了一些不再使用的模块，我只想把它们取下来。</font><font style="vertical-align: inherit;">我对此有一些疑问：</font></font></p>

<ul>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我们是否有任何命令或过程可以从根目录卸载模块（例如</font></font><code>npm uninstall &lt;module_name&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），还是仅删除模块文件即可？</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果我们保留未使用的模块，它将对我们有何影响？</font></font></p></li>
</ul></div>
    {% endraw %}
  </div>
  <p class="winter_mark">第1500篇《如何在Node JS中卸载NPM模块？》来自Winter(https://github.com/aiyld/aiyld.github.io)的站点</p>
  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-list">
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>To remove the module from your package.json run this command:
npm unistall  --save</p>

<p>To uninstall a module without changing package.json file run the following command:
npm uninstall </p>

<p>To uninstall global package simply run this command:
npm unistall -g </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯Gil</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>If to want to uninstall a number of module the just run the <code>npm uninstall</code>. Then go to <code>package.json</code> and delete the unwanted module from there, and then just run the command <code>npm install</code> . It should fix your problem.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">西门达蒙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>To uninstall the node module:</p>

<pre><code>npm uninstall &lt;module_name&gt;  
</code></pre>

<p>This will remove the module from node_modules, but not from package.json. </p>

<p>Remove the module from package.json use by using this command:</p>

<pre><code>npm uninstall &lt;module_name&gt; --save 
</code></pre>

<p>This also delete from package.json.</p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">十三西里古一</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>The command for uninstalling <code>node module</code>:</p>

<pre><code>npm uninstall &lt;module_name&gt;
</code></pre>

<p>This will uninstall module from your local <code>node-module</code> directory, this will not affect application.</p>

<p>But if you are refer to global scope or want to change dependencies in <code>package.json</code></p>

<p>here are some different options </p>

<p><code>npm uninstall &lt;module_name&gt; --save</code> to remove module from <code>dependencies</code> in <code>package.json</code>.</p>

<p><code>npm uninstall &lt;module_name&gt; --save-dev</code> to remove module from <code>devDependencies</code> in <code>package.json</code>.</p>

<p><code>npm uninstall &lt;module_name&gt; -g --save</code> to remove module globally.</p>

<p>Full documentation with all option, refer <a href="https://docs.npmjs.com/cli/uninstall" rel="nofollow noreferrer">npm uninstall</a></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐泡芙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要使用npm卸载模块，可以使用：</font></font></p>

<pre><code>npm uninstall moduleName
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另外，如果您想卸载并将更改反映在package.json中，则可以使用--save标志，如下所示：</font></font></p>

<pre><code>npm uninstall moduleName --save<font></font>
OR<font></font>
npm uninstall -S<font></font>
</code></pre>

<p>And if you want to uninstall a module from devDependencies and want the change to be reflected in package.json then you can use -D flag, like this:</p>

<pre><code>npm uninstall moduleName -D
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">米亚神无</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>In case you are windows run CMD as administrator and type <code>npm -g uninstall &lt;package name&gt;</code> . </p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长神乐小小</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p>Use </p>

<pre><code>npm uninstall &lt;package_name&gt;
</code></pre>

<p>Example to uninstall express</p>

<pre><code>npm uninstall express
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Mandy逆天</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以通过以下方式卸载节点模块</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载软件包</font></font></p>

<p><code>npm uninstall &lt;Package Name&gt;</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载软件包并将其从package.json中的依赖项中删除</font></font></p>

<p><code>npm uninstall &lt;Package Name&gt; --save</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载软件包并将其从package.json中的dev依赖项中删除</font></font></p>

<p><code>npm uninstall &lt;Package Name&gt; --save-dev</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载全局软件包。</font><font style="vertical-align: inherit;">全局软件包可以在系统的任何地方访问，而不仅限于特定项目</font></font></p>

<p><code>npm uninstall -g &lt;Package Name&gt;</code></p></li>
</ol></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">卡卡西逆天</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最简单的解决方案是：</font></font></p>

<pre><code>npm uninstall packageName --save-dev
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">查看项目中的上层软件包名称：</font></font></p>

<pre><code>npm list --depth=0
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">输出将如下所示：</font></font></p>

<pre><code>app@0.1.0 /home/jackkobec/projects/myAppName<font></font>
├── packageName@packageVersion<font></font>
├── express@4.16.4<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">复制软件包名称并执行npm uninstall命令。</font><font style="vertical-align: inherit;">快递包裹示例：</font></font></p>

<pre><code>npm uninstall express --save-dev
</code></pre></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Near逆天</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您还可以将以下内容用作速记：</font></font></p>

<p><code>npm un packageName</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> 要么 </font></font><code>npm rm packageName</code> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：</font></font><code>-g</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在命令末尾</font><font style="vertical-align: inherit;">添加</font><font style="vertical-align: inherit;">以卸载全局软件包。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">YOC41811590</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有时</font></font><code>npm uninstall -g packageName</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不起作用。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在这种情况下，您可以手动删除软件包。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Mac上，转到文件夹</font></font><code>/usr/local/lib/node_modules</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">并删除包含所需软件包的文件夹。</font><font style="vertical-align: inherit;">而已。</font><font style="vertical-align: inherit;">使用此命令检查全局安装的软件包列表</font></font><code>npm list -g --depth=0</code></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阿飞泡芙</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"></font><code>uninstall</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我尝试使用与安装时使用的命令相同的命令时，</font><font style="vertical-align: inherit;">该</font><font style="vertical-align: inherit;">选项对我不起作用（因为我正在使用</font></font><code>@latest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">指令</font><font style="vertical-align: inherit;">进行安装</font><font style="vertical-align: inherit;">）</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，例如，我安装了这样的软件包：</font></font></p>

<pre><code>npm install  @ngtools/webpack@latest
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后我想卸载它，所以我使用了相同的命令（包括@latest）</font></font></p>

<pre><code>npm uninstall  @ngtools/webpack@latest
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">所以上述卸载没有用，我必须删除</font></font><code>@latest</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">＆然后运行良好</font></font></p>

<pre><code>npm uninstall  @ngtools/webpack
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我希望这有帮助</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱十三</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新npm 5：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从</font></font><a href="https://blog.npmjs.org/post/161081169345/v500" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">npm 5.0.0开始</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，默认情况下已添加/删除了已安装/未安装的模块作为依赖项，因此不再需要--save选项。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">跑</font></font></p>

<pre><code>npm uninstall &lt;package&gt;
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如：</font></font></p>

<pre><code>npm uninstall mongodb
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将从node_modules文件夹和package.json文件中删除该模块</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Harry乐Gil</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Windows用户-如果要一次删除所有安装的节点模块：</font></font></p>

<ul>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">打开Powershell</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">进入node_modules文件夹（cd node_modules）</font></font></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">运行此命令-“ npm卸载（Get-ChildItem）.Name”</font></font></li>
</ul>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">它将卸载所有模块。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">A神无</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">即使</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">看起来</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">很明显</font><font style="vertical-align: inherit;">，我也很难做到这一点</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我最初尝试通过</font></font><code>npm uninstall module-name</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">脚本中的简单for循环</font><font style="vertical-align: inherit;">遍历运行的node_modules目录</font><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我发现如果您调用完整路径，它将无法正常工作，例如</font></font></p>

<pre><code>npm uninstall module-name
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在工作，但是 </font></font></p>

<pre><code>npm uninstall /full/path/to/node_modules/module-name 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">没有工作。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">阳光西里小哥</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我只是</font><font style="vertical-align: inherit;">默认在我的主目录下</font><font style="vertical-align: inherit;">安装</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">手写笔</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，所以我只是</font></font><code>npm uninstall stylus</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">用来分离它，或者您可以尝试</font></font><code>npm rm &lt;package_name&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">一下。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神乐Near</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要</font></font><code>node_modules/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">批量</font><font style="vertical-align: inherit;">删除软件包</font><font style="vertical-align: inherit;">，也可以从中删除它们</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，进行保存，然后</font></font><code>npm prune</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在终端上</font><font style="vertical-align: inherit;">运行</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将删除文件系统中存在但未使用/未声明的那些软件包</font></font><code>package.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS&gt;这在Windows上特别有用，因为由于“超出路径长度限制”，您可能经常遇到无法删除某些文件的问题。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">神无猪猪</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果无法使用</font></font><code>npm uninstall &lt;module_name&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，请通过键入全局尝试</font></font><code>-g</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">也许您只需要以超级用户/管理员的身份进行操作即可</font></font><code>sudo npm uninstall &lt;module_name&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋Itachi</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为了完全回答这个问题，有</font></font><a href="https://docs.npmjs.com/getting-started/uninstalling-local-packages"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">两种方法</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：（例如，我们将已安装的模块称为module1）。</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要在</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改package.json的</font><strong><font style="vertical-align: inherit;">情况下</font></strong><font style="vertical-align: inherit;">删除module1 </font><font style="vertical-align: inherit;">：</font></font></p>

<p><code>npm uninstall module1</code></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">通过</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更改package.json </font><font style="vertical-align: inherit;">来删除module1 </font><font style="vertical-align: inherit;">，并将其从package.json中的依赖项中删除，请执行以下操作：</font></font></p>

<p><code>npm uninstall --save module1</code></p></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">注意：为简化上述命令，您可以使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">-S</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">代替</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">--save</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，并且可以使用</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">remove</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">rm</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">r</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">un</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">unlink</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">而不是</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">uninstall</font></font></strong></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">卸载节点模块：</font></font></p>

<pre><code>npm uninstall &lt;module_name&gt;  
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将从node_modules中删除该模块，但不会从package.json中删除该模块。</font><font style="vertical-align: inherit;">因此，当我们再次执行npm install时，它将下载该模块。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，要从package.json中删除模块，请使用：</font></font></p>

<pre><code>npm uninstall &lt;module_name&gt; --save  
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这也会从package.json中删除依赖项。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果要卸载任何全局模块，可以使用： </font></font></p>

<pre><code>npm -g uninstall &lt;module_name&gt; --save 
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将全局删除依赖项。</font></font></p></div>
        </div></div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Pro路易</span>
            <span class="discuss-time">2020.03.13</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该命令很简单 </font></font><code>npm uninstall &lt;name&gt;</code></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Node.js文档</font></font><a href="https://npmjs.org/doc/" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://npmjs.org/doc/</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">具有npm所需的所有命令。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">本地安装将在</font></font><code>node_modules/</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您的应用程序目录中。</font><font style="vertical-align: inherit;">如果模块保留在其中而没有引用，则这不会影响应用程序。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">但是，如果要删除全局软件包，则引用该全局软件包的所有应用程序都将崩溃。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以下是不同的选项：</font></font></p>

<p><code>npm uninstall &lt;name&gt;</code> removes the module from <code>node_modules</code> but does not update <code>package.json</code></p>

<p><code>npm uninstall &lt;name&gt; --save</code> also removes it from <code>dependencies</code>in <code>package.json</code></p>

<p><code>npm uninstall &lt;name&gt; --save-dev</code> also removes it from <code>devDependencies</code> in <code>package.json</code></p>

<p><code>npm -g uninstall &lt;name&gt; --save</code> also removes it globally</p></div>
        </div></div>
    </div>
    {% endraw %}
  </div>
<div>
