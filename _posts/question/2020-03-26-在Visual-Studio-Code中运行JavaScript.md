---
layout: question
title:  在Visual Studio Code中运行JavaScript
date:   2020-03-26T08:50:42.000Z
description: 有没有一种方法可以执行javascript并使用Visual Studio Code显示结果？例如包含console.log('hello wor...
img: 
author: Stafan
category: question
answer: 16
tags: node.js Node.js
topic: Node.js
---
<div class="article-root">
  <div class="article">
    {% include articleTitle.html info=page %}
    {% raw %}
    <div class="article-content"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有没有一种方法可以执行javascript并使用Visual Studio Code显示结果？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">例如包含</font></font></p>

<pre><code>console.log('hello world');
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我认为将需要nodejs，但无法解决该怎么做？</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">编辑：“ Visual Studio代码”是指Microsoft的新代码编辑器-不是使用Visual Studio编写的代码</font></font></p>

<p><a href="https://code.visualstudio.com/"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Visual Studio程式码</font></font></a></p></div>
    {% endraw %}
  </div>

  <div class="discuss-wrapper">
    {% include discussTitle.html info=page %}
    {% raw %}
    <div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱Gil泡芙</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有很多方法可以在Visual Studio Code中运行javascript。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果使用Node，则建议使用VSC中的标准调试器。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我通常创建一个虚拟文件，例如test.js，在其中进行外部测试。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在您有代码的文件夹中，创建一个名为“ .vscode”的文件夹，并创建一个名为“ launch.json”的文件</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在此文件中，粘贴以下内容并保存。</font><font style="vertical-align: inherit;">现在，您有两个选择来测试代码。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当选择“ Nodemon Test File”时，需要将代码放入test.js中进行测试。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要安装nodemon以及有关如何在VSC中使用nodemon进行调试的更多信息，我建议阅读此</font></font><a href="https://github.com/Microsoft/vscode-recipes/tree/master/nodemon" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文章</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">该</font><a href="https://github.com/Microsoft/vscode-recipes/tree/master/nodemon" rel="nofollow noreferrer"><font style="vertical-align: inherit;">文章</font></a><font style="vertical-align: inherit;">将更详细地介绍launch.json文件的第二部分以及如何在ExpressJS中进行调试。</font></font></p>

<pre><code>{<font></font>
    "version": "0.2.0",<font></font>
    "configurations": [<font></font>
        {<font></font>
            "type": "node",<font></font>
            "request": "launch",<font></font>
            "name": "Nodemon Test File",<font></font>
            "runtimeExecutable": "nodemon",<font></font>
            "program": "${workspaceFolder}/test.js",<font></font>
            "restart": true,<font></font>
            "console": "integratedTerminal",<font></font>
            "internalConsoleOptions": "neverOpen"<font></font>
        },<font></font>
        {<font></font>
            "type": "node",<font></font>
            "request": "attach",<font></font>
            "name": "Node: Nodemon",<font></font>
            "processId": "${command:PickProcess}",<font></font>
            "restart": true,<font></font>
            "protocol": "inspector",<font></font>
        },<font></font>
    ]<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Tony樱</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">集成终端的快捷方式是</font></font><kbd>ctrl</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>`</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后键入</font></font><code>node &lt;filename&gt;</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或者，您可以创建一个任务。</font><font style="vertical-align: inherit;">这是我的task.json中的唯一代码：</font></font></p>

<pre><code>{<font></font>
// See https://go.microsoft.com/fwlink/?LinkId=733558<font></font>
// for the documentation about the tasks.json format<font></font>
"version": "0.1.0",<font></font>
"command": "node",<font></font>
"isShellCommand": true,<font></font>
"args": ["${file}"],<font></font>
"showOutput": "always"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">从这里创建一个快捷方式。</font><font style="vertical-align: inherit;">这是我的keybindings.json：</font></font></p>

<pre><code>// Place your key bindings in this file to overwrite the defaults<font></font>
[<font></font>
{   "key": "cmd+r",<font></font>
"command": "workbench.action.tasks.runTask"<font></font>
},<font></font>
{   "key": "cmd+e",<font></font>
"command": "workbench.action.output.toggleOutput"<font></font>
}<font></font>
]<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这将在“命令面板”中打开“运行”，但是您仍然必须使用鼠标键入或选择要运行的任务，在本例中为节点。</font><font style="vertical-align: inherit;">第二个快捷方式用于切换输出面板，它已经有一个快捷方式，但是这些键彼此相邻且易于使用。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">null</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一种方法是打开终端</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ctrl +`</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> execute </font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">现在，您有一个激活的节点REPL。</font><font style="vertical-align: inherit;">现在，您可以将文件或选定的文本发送到终端。</font><font style="vertical-align: inherit;">为此，请打开VSCode </font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">面板</font><font style="vertical-align: inherit;">（</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">F1</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">ctrl + shift + p</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">）并执行</font></font><code>&gt;run selected text in active terminal</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或</font></font><code>&gt;run active file in active terminal</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">如果在执行代码之前需要干净的REPL，则必须重新启动节点REPL。</font><font style="vertical-align: inherit;">当在终端中使用节点REPL </font></font><code>ctrl+c ctrl+c</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">退出并键入</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">以开始新</font><font style="vertical-align: inherit;">操作时，将完成此操作</font><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您可以将</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令pallete</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">命令</font><font style="vertical-align: inherit;">绑定</font><font style="vertical-align: inherit;">到所需的任何键。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">PS：</font></font><code>node</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">应该已安装并在您的路径中</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">斯丁</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需安装nodemon并运行 </font></font></p>

<pre><code>nodemon your_file.js
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在vs代码终端上。  </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">DavaidTony宝儿</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于Windows</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">：只需将文件的文件关联更改</font></font><code>.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">为</font></font><code>node.exe</code></p>

<pre><code>1) Take VSCode<font></font>
2) Right click on the file in left pane<font></font>
3) Click "Reveal in explorer" from context menu<font></font>
4) Right click on the file -&gt; Select "Open with" -&gt; Select "Choose another program"<font></font>
5) Check box "Always use this app to open .js file"<font></font>
6) Click "More apps" -&gt; "Look for another app in PC"<font></font>
7) Navigate to node.js installation directory.(Default C:\Program Files\nodejs\node.exe"<font></font>
8) Click "Open" and you can just see cmd flashing<font></font>
9) Restart vscode and open the file -&gt; Terminal Menu -&gt; "Run active file".<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">凯西里</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">另一个选择是使用Visual Studio Code中的开发人员工具控制台。</font><font style="vertical-align: inherit;">只需从帮助菜单中选择“切换开发者工具”，然后在弹出的开发者工具中选择“控制台”选项卡。</font><font style="vertical-align: inherit;">从那里，您将获得与Chrome中相同的开发工具REPL。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Eva西里蛋蛋</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">有一种运行JavaScript的简便得多的方法，无需进行配置：</font></font></p>

<ol>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">安装</font></font><a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner" rel="noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Code Runner扩展</font></font></a></li>
<li><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在文本编辑器中打开JavaScript代码文件，然后使用快捷方式</font></font><kbd>Control</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>Alt</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>N</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">（或</font><font style="vertical-align: inherit;">在macOS上为</font></font><kbd>⌃ Control</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>⌥ Option</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">+ </font></font><kbd>N</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">），或按</font></font><kbd>F1</kbd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，然后选择/键入</font></font><code>Run Code</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，代码将运行，输出将显示在“输出”窗口中。</font></font></li>
</ol>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">此外，您可以选择部分JavaScript代码并运行代码段。</font><font style="vertical-align: inherit;">该扩展名还可以与未保存的文件一起使用，因此您只需创建一个文件，将其更改为Javascript并快速编写代码即可（对于只需要快速尝试的情况）。</font><font style="vertical-align: inherit;">很方便！</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Gil伽罗小宇宙</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在VS代码中执行以下步骤。[在Windows操作系统中执行]</font></font></p>

<ol>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">建立新档案</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在其中编写JavaScript代码</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">将文件另存为filename.js</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">转到调试菜单</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">点击开始调试</font></font></p></li>
<li><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">或直接按F5</font></font></p></li>
</ol>

<p><a href="https://i.stack.imgur.com/qHCLQ.png" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">开始调试的屏幕截图</font></font></a></p>

<p><a href="https://i.stack.imgur.com/WOUMS.png" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">终端中js代码输出的屏幕截图</font></font></a></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">番长</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我建议您使用一个名为Quokka的简单插件，该插件在当今非常流行，可以帮助您随时随地调试代码。
</font></font><a href="https://marketplace.visualstudio.com/items?itemName=WallabyJs.quokka-vscode" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Quokka.js</font></font></a><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">使用此插件的最大优势在于，您可以节省大量时间在Web浏览器上评估代码，借助此插件，您可以看到VS代码中发生的所有事情，从而节省了很多时间。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">好吧，只需运行代码并在控制台上显示输出，就可以创建任务并执行它，就像@canerbalci提到的那样。 </font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">不利的一面是，您只会得到输出而已。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我真正想做的是能够调试代码，比如说我正在尝试解决一个小的算法或尝试一个新的ES6功能，然后运行它，但有些麻烦，我可以在VSC中对其进行调试。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">因此，我没有为其创建任务，而是按如下所示修改了此目录中的.vscode / launch.json文件：</font></font></p>

<pre><code>{<font></font>
"version": "0.2.0",<font></font>
"configurations": [<font></font>
    {<font></font>
        "name": "Launch",<font></font>
        "type": "node",<font></font>
        "request": "launch",<font></font>
        "program": "${file}",<font></font>
        "stopOnEntry": true,<font></font>
        "args": [],<font></font>
        "cwd": "${fileDirname}",<font></font>
        "runtimeExecutable": null,<font></font>
        "runtimeArgs": [<font></font>
            "--nolazy"<font></font>
        ],<font></font>
        "env": {<font></font>
            "NODE_ENV": "development"<font></font>
        },<font></font>
        "externalConsole": false,<font></font>
        "sourceMaps": false,<font></font>
        "outDir": null<font></font>
    }<font></font>
]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这是因为它将在VSC调试器中启动您当前正在使用的任何文件。</font><font style="vertical-align: inherit;">它设置为在启动时停止。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要启动它，请在要调试的文件中按F5键。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这很简单，当您在VS Code中创建一个新文件并运行它时，如果您还没有配置文件，它将为您创建一个配置文件，您唯一需要设置的就是“ program”值，并进行设置到主JS文件的路径，如下所示：</font></font></p>

<pre><code>{<font></font>
    "version": "0.1.0",<font></font>
    // List of configurations. Add new configurations or edit existing ones.  <font></font>
    // ONLY "node" and "mono" are supported, change "type" to switch.<font></font>
    // ABSOLUTE paths are required for no folder workspaces.<font></font>
    "configurations": [<font></font>
        {<font></font>
            // Name of configuration; appears in the launch configuration drop down menu.<font></font>
            "name": "Launch",<font></font>
            // Type of configuration. Possible values: "node", "mono".<font></font>
            "type": "node",<font></font>
            // ABSOLUTE path to the program.<font></font>
            "program": "C:\\test.js", //HERE YOU PLACE THE MAIN JS FILE<font></font>
            // Automatically stop program after launch.<font></font>
            "stopOnEntry": false,<font></font>
            // Command line arguments passed to the program.<font></font>
            "args": [],<font></font>
            // ABSOLUTE path to the working directory of the program being debugged. Default is the directory of the program.<font></font>
            "cwd": "",<font></font>
            // ABSOLUTE path to the runtime executable to be used. Default is the runtime executable on the PATH.<font></font>
            "runtimeExecutable": null,<font></font>
            // Optional arguments passed to the runtime executable.<font></font>
            "runtimeArgs": [],<font></font>
            // Environment variables passed to the program.<font></font>
            "env": { },<font></font>
            // Use JavaScript source maps (if they exist).<font></font>
            "sourceMaps": false,<font></font>
            // If JavaScript source maps are enabled, the generated code is expected in this directory.<font></font>
            "outDir": null<font></font>
        }, <font></font>
        {<font></font>
            "name": "Attach",<font></font>
            "type": "node",<font></font>
            // TCP/IP address. Default is "localhost".<font></font>
            "address": "localhost",<font></font>
            // Port to attach to.<font></font>
            "port": 5858,<font></font>
            "sourceMaps": false<font></font>
        }<font></font>
    ]<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">樱卡卡西</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当我第一次开始使用</font><font style="vertical-align: inherit;">带有扩展名的</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">VS Code</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">时，我遇到了这个确切问题</font></font><strong><code>Code Runner</code></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">您需要做的是</font><font style="vertical-align: inherit;">在“ </font><strong><font style="vertical-align: inherit;">用户设置”中设置</font></strong></font><strong><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">node.js</font></font></em></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路径</font></font><strong><font style="vertical-align: inherit;"></font></strong> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在Windows计算机中安装</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">路径时</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，</font><font style="vertical-align: inherit;">需要设置</font><em><font style="vertical-align: inherit;">路径</font></em><font style="vertical-align: inherit;">。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">对于我来说 </font></font><strong><code>\"C:\\Program Files\\nodejs\\node.exe\"</code></strong> </p>

<blockquote>
  <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">由于我的文件目录名称中有空格</font></font></p>
</blockquote>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">请参阅</font><font style="vertical-align: inherit;">下面的</font><font style="vertical-align: inherit;">这张</font></font><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">图片</font></font></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">。</font><font style="vertical-align: inherit;">我</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">最初</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无法运行代码</font><em><font style="vertical-align: inherit;">，</font></em><font style="vertical-align: inherit;">原因是我在</font><em><font style="vertical-align: inherit;">路径名</font></em><font style="vertical-align: inherit;">中输入了错误</font></font><em><font style="vertical-align: inherit;"></font></em> 
<a href="https://i.stack.imgur.com/mDTrL.png" rel="noreferrer"><img src="https://i.stack.imgur.com/mDTrL.png" alt="在此处输入图片说明"></a></p>

<p><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">希望这会帮助你。</font></font></em> </p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，您的问题对我有帮助，因为我也来这里获得帮助，可以</font></font><strong><code>JS</code></strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在我的</font><strong><font style="vertical-align: inherit;">VS CODE中</font></strong><font style="vertical-align: inherit;">运行</font></font><strong><font style="vertical-align: inherit;"></font></strong></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">蛋蛋西里</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">无需设置在Visual Studio代码中的javascript，python等上运行代码的环境，您要做的就是安装Code Runner Extension，然后选择要运行的部分代码并点击右上角显示运行按钮。 </font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我使用了Node Exec，不需要任何配置，即可构建您当前正在结束的文件或已选择的文件，并在VSCode内部进行输出。</font></font></p>

<p><a href="https://marketplace.visualstudio.com/items?itemName=miramac.vscode-exec-node" rel="nofollow noreferrer"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">https://marketplace.visualstudio.com/items?itemName=miramac.vscode-exec-node</font></font></a></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需进行一些配置，您就可以添加Babel来进行即时转译。</font></font></p></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">老丝阿飞</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">该解决方案旨在在节点中运行当前打开的文件，并以VSCode显示输出。</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我有同样的问题，发现新引入的</font></font><code>tasks</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">方法对于此特定用例很有用。</font><font style="vertical-align: inherit;">这有点麻烦，但这是我所做的：</font></font></p>

<p><font style="vertical-align: inherit;"></font><code>.vscode</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在项目的根目录中</font><font style="vertical-align: inherit;">创建一个</font><font style="vertical-align: inherit;">目录，并</font></font><code>tasks.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在其中</font><font style="vertical-align: inherit;">创建</font><font style="vertical-align: inherit;">文件。</font><font style="vertical-align: inherit;">将此任务定义添加到文件中：</font></font></p>

<pre><code>{<font></font>
    "version": "0.1.0",<font></font>
    "command": "node",<font></font>
    "isShellCommand": true,<font></font>
    "args": [<font></font>
        "--harmony"<font></font>
    ],<font></font>
<font></font>
    "tasks": [<font></font>
        {<font></font>
            "taskName": "runFile",<font></font>
            "suppressTaskName": true,<font></font>
            "showOutput": "always",<font></font>
            "problemMatcher": "$jshint",<font></font>
            "args": ["${file}"]<font></font>
        }<font></font>
    ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">然后，您可以： 
 </font></font><code>press F1 &gt; type `run task` &gt; enter &gt; select `runFile` &gt; enter</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
运行任务，但是我发现为打开任务列表添加自定义键绑定更加容易。</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">要添加键绑定，请在VSCode UI菜单中转到“代码”&gt;“首选项”&gt;“键盘快捷键”。</font><font style="vertical-align: inherit;">将此添加到键盘快捷键：</font></font></p>

<pre><code>{<font></font>
    "key": "cmd+r",<font></font>
    "command": "workbench.action.tasks.runTask"<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">当然，您可以选择任何您想要的键组合。</font></font></p>

<p><strong><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更新：</font></font></strong></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">假设您正在运行JavaScript代码对其进行</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">，则可以</font><font style="vertical-align: inherit;">通过将其</font><a href="https://code.visualstudio.com/docs/editor/tasks_appendix" rel="noreferrer"><font style="vertical-align: inherit;">属性</font></a><font style="vertical-align: inherit;">设置为</font><font style="vertical-align: inherit;">来</font><font style="vertical-align: inherit;">将任务标记为</font></font><em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">测试</font></font></em><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">任务</font><font style="vertical-align: inherit;">，然后可以将键绑定到</font><a href="https://code.visualstudio.com/Docs/customization/keybindings#_tasks" rel="noreferrer"><font style="vertical-align: inherit;">命令</font></a><font style="vertical-align: inherit;">以进行单次操作。</font></font><a href="https://code.visualstudio.com/docs/editor/tasks_appendix" rel="noreferrer"><code>isTestCommand</code><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font><code>true</code><font style="vertical-align: inherit;"></font><a href="https://code.visualstudio.com/Docs/customization/keybindings#_tasks" rel="noreferrer"><code>workbench.action.tasks.test</code><font style="vertical-align: inherit;"></font></a><font style="vertical-align: inherit;"></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">换句话说，您的</font></font><code>tasks.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件现在将包含：</font></font></p>

<pre><code>{<font></font>
    "version": "0.1.0",<font></font>
    "command": "node",<font></font>
    "isShellCommand": true,<font></font>
    "args": [<font></font>
        "--harmony"<font></font>
    ],<font></font>
<font></font>
    "tasks": [<font></font>
        {<font></font>
            "taskName": "runFile",<font></font>
            "isTestCommand": true,<font></font>
            "suppressTaskName": true,<font></font>
            "showOutput": "always",<font></font>
            "problemMatcher": "$jshint",<font></font>
            "args": ["${file}"]<font></font>
        }<font></font>
    ]<font></font>
}<font></font>
</code></pre>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">...您的</font></font><code>keybindings.json</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">文件现在将包含：</font></font></p>

<pre><code>{<font></font>
    "key": "cmd+r",<font></font>
    "command": "workbench.action.tasks.test"<font></font>
}<font></font>
</code></pre></div>
        </div>
        
      </div><div class="discuss-item">
        <div class="discuss-parent">
          <div class="discuss-meta">
            <span class="discuss-user">Itachi</span>
            <span class="discuss-time">2020.03.26</span>
          </div>
          <div class="discuss-comment"><p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">我很惊讶，这还没有被提及：</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">只需</font></font><code>.js</code><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在VS Code中</font><font style="vertical-align: inherit;">打开有</font><font style="vertical-align: inherit;">问题</font><font style="vertical-align: inherit;">的</font><font style="vertical-align: inherit;">文件，切换到“调试控制台”选项卡，单击左侧导航栏中的调试按钮，然后单击运行图标（播放按钮）即可！</font></font></p>

<p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">需要安装nodejs！</font></font></p></div>
        </div>
        
      </div>
    {% endraw %}
  </div>
<div>
